import { CommandBuilder } from '../base';
import { az_functionapp_config_access_restriction_add_command_result } from './models/az_functionapp_config_access_restriction_add_command_result'
import { az_functionapp_config_access_restriction_remove_command_result } from './models/az_functionapp_config_access_restriction_remove_command_result'
import { az_functionapp_config_access_restriction_set_command_result } from './models/az_functionapp_config_access_restriction_set_command_result'
import { az_functionapp_config_access_restriction_show_command_result } from './models/az_functionapp_config_access_restriction_show_command_result'
import { az_functionapp_config_appsettings_delete_command_result } from './models/az_functionapp_config_appsettings_delete_command_result'
import { az_functionapp_config_appsettings_list_command_result } from './models/az_functionapp_config_appsettings_list_command_result'
import { az_functionapp_config_appsettings_set_command_result } from './models/az_functionapp_config_appsettings_set_command_result'
import { az_functionapp_config_container_delete_command_result } from './models/az_functionapp_config_container_delete_command_result'
import { az_functionapp_config_container_set_command_result } from './models/az_functionapp_config_container_set_command_result'
import { az_functionapp_config_container_show_command_result } from './models/az_functionapp_config_container_show_command_result'
import { az_functionapp_config_hostname_add_command_result } from './models/az_functionapp_config_hostname_add_command_result'
import { az_functionapp_config_hostname_delete_command_result } from './models/az_functionapp_config_hostname_delete_command_result'
import { az_functionapp_config_hostname_get_external_ip_command_result } from './models/az_functionapp_config_hostname_get_external_ip_command_result'
import { az_functionapp_config_hostname_list_command_result } from './models/az_functionapp_config_hostname_list_command_result'
import { az_functionapp_config_ssl_bind_command_result } from './models/az_functionapp_config_ssl_bind_command_result'
import { az_functionapp_config_ssl_create_command_result } from './models/az_functionapp_config_ssl_create_command_result'
import { az_functionapp_config_ssl_delete_command_result } from './models/az_functionapp_config_ssl_delete_command_result'
import { az_functionapp_config_ssl_import_command_result } from './models/az_functionapp_config_ssl_import_command_result'
import { az_functionapp_config_ssl_list_command_result } from './models/az_functionapp_config_ssl_list_command_result'
import { az_functionapp_config_ssl_unbind_command_result } from './models/az_functionapp_config_ssl_unbind_command_result'
import { az_functionapp_config_ssl_upload_command_result } from './models/az_functionapp_config_ssl_upload_command_result'
import { az_functionapp_config_set_command_result } from './models/az_functionapp_config_set_command_result'
import { az_functionapp_config_show_command_result } from './models/az_functionapp_config_show_command_result'
import { az_functionapp_cors_add_command_result } from './models/az_functionapp_cors_add_command_result'
import { az_functionapp_cors_remove_command_result } from './models/az_functionapp_cors_remove_command_result'
import { az_functionapp_cors_show_command_result } from './models/az_functionapp_cors_show_command_result'
import { az_functionapp_deployment_container_config_command_result } from './models/az_functionapp_deployment_container_config_command_result'
import { az_functionapp_deployment_container_show_cd_url_command_result } from './models/az_functionapp_deployment_container_show_cd_url_command_result'
import { az_functionapp_deployment_slot_auto_swap_command_result } from './models/az_functionapp_deployment_slot_auto_swap_command_result'
import { az_functionapp_deployment_slot_create_command_result } from './models/az_functionapp_deployment_slot_create_command_result'
import { az_functionapp_deployment_slot_delete_command_result } from './models/az_functionapp_deployment_slot_delete_command_result'
import { az_functionapp_deployment_slot_list_command_result } from './models/az_functionapp_deployment_slot_list_command_result'
import { az_functionapp_deployment_slot_swap_command_result } from './models/az_functionapp_deployment_slot_swap_command_result'
import { az_functionapp_deployment_source_config_command_result } from './models/az_functionapp_deployment_source_config_command_result'
import { az_functionapp_deployment_source_config_local_git_command_result } from './models/az_functionapp_deployment_source_config_local_git_command_result'
import { az_functionapp_deployment_source_config_zip_command_result } from './models/az_functionapp_deployment_source_config_zip_command_result'
import { az_functionapp_deployment_source_delete_command_result } from './models/az_functionapp_deployment_source_delete_command_result'
import { az_functionapp_deployment_source_show_command_result } from './models/az_functionapp_deployment_source_show_command_result'
import { az_functionapp_deployment_source_sync_command_result } from './models/az_functionapp_deployment_source_sync_command_result'
import { az_functionapp_deployment_source_update_token_command_result } from './models/az_functionapp_deployment_source_update_token_command_result'
import { az_functionapp_deployment_user_set_command_result } from './models/az_functionapp_deployment_user_set_command_result'
import { az_functionapp_deployment_user_show_command_result } from './models/az_functionapp_deployment_user_show_command_result'
import { az_functionapp_deployment_list_publishing_credentials_command_result } from './models/az_functionapp_deployment_list_publishing_credentials_command_result'
import { az_functionapp_deployment_list_publishing_profiles_command_result } from './models/az_functionapp_deployment_list_publishing_profiles_command_result'
import { az_functionapp_devops_pipeline_create_command_result } from './models/az_functionapp_devops_pipeline_create_command_result'
import { az_functionapp_function_keys_delete_command_result } from './models/az_functionapp_function_keys_delete_command_result'
import { az_functionapp_function_keys_list_command_result } from './models/az_functionapp_function_keys_list_command_result'
import { az_functionapp_function_keys_set_command_result } from './models/az_functionapp_function_keys_set_command_result'
import { az_functionapp_function_delete_command_result } from './models/az_functionapp_function_delete_command_result'
import { az_functionapp_function_show_command_result } from './models/az_functionapp_function_show_command_result'
import { az_functionapp_hybrid_connection_add_command_result } from './models/az_functionapp_hybrid_connection_add_command_result'
import { az_functionapp_hybrid_connection_list_command_result } from './models/az_functionapp_hybrid_connection_list_command_result'
import { az_functionapp_hybrid_connection_remove_command_result } from './models/az_functionapp_hybrid_connection_remove_command_result'
import { az_functionapp_identity_assign_command_result } from './models/az_functionapp_identity_assign_command_result'
import { az_functionapp_identity_remove_command_result } from './models/az_functionapp_identity_remove_command_result'
import { az_functionapp_identity_show_command_result } from './models/az_functionapp_identity_show_command_result'
import { az_functionapp_keys_delete_command_result } from './models/az_functionapp_keys_delete_command_result'
import { az_functionapp_keys_list_command_result } from './models/az_functionapp_keys_list_command_result'
import { az_functionapp_keys_set_command_result } from './models/az_functionapp_keys_set_command_result'
import { az_functionapp_log_deployment_list_command_result } from './models/az_functionapp_log_deployment_list_command_result'
import { az_functionapp_log_deployment_show_command_result } from './models/az_functionapp_log_deployment_show_command_result'
import { az_functionapp_plan_create_command_result } from './models/az_functionapp_plan_create_command_result'
import { az_functionapp_plan_delete_command_result } from './models/az_functionapp_plan_delete_command_result'
import { az_functionapp_plan_list_command_result } from './models/az_functionapp_plan_list_command_result'
import { az_functionapp_plan_show_command_result } from './models/az_functionapp_plan_show_command_result'
import { az_functionapp_plan_update_command_result } from './models/az_functionapp_plan_update_command_result'
import { az_functionapp_vnet_integration_add_command_result } from './models/az_functionapp_vnet_integration_add_command_result'
import { az_functionapp_vnet_integration_list_command_result } from './models/az_functionapp_vnet_integration_list_command_result'
import { az_functionapp_vnet_integration_remove_command_result } from './models/az_functionapp_vnet_integration_remove_command_result'
import { az_functionapp_create_command_result } from './models/az_functionapp_create_command_result'
import { az_functionapp_delete_command_result } from './models/az_functionapp_delete_command_result'
import { az_functionapp_list_command_result } from './models/az_functionapp_list_command_result'
import { az_functionapp_list_consumption_locations_command_result } from './models/az_functionapp_list_consumption_locations_command_result'
import { az_functionapp_restart_command_result } from './models/az_functionapp_restart_command_result'
import { az_functionapp_show_command_result } from './models/az_functionapp_show_command_result'
import { az_functionapp_start_command_result } from './models/az_functionapp_start_command_result'
import { az_functionapp_stop_command_result } from './models/az_functionapp_stop_command_result'
import { az_functionapp_update_command_result } from './models/az_functionapp_update_command_result'

/** Methods that show, set, add, and remove access restrictions on a functionapp. */
export class az_functionapp_config_access_restriction {
    /**
     * Adds an Access Restriction to the functionapp.
     *
     * Syntax:
     * ```
     * az functionapp config access-restriction add --priority
     *                                              [--action {Allow, Deny}]
     *                                              [--description]
     *                                              [--ids]
     *                                              [--ignore-missing-endpoint {false, true}]
     *                                              [--ip-address]
     *                                              [--name]
     *                                              [--resource-group]
     *                                              [--rule-name]
     *                                              [--scm-site {false, true}]
     *                                              [--slot]
     *                                              [--subnet]
     *                                              [--subscription]
     *                                              [--vnet-name]
     * ```
     *
     * @param {string} priority Priority of the access restriction rule.
     */
    static add(priority: string): az_functionapp_config_access_restriction_add_command_builder {
        return new az_functionapp_config_access_restriction_add_command_builder("az functionapp config access-restriction add", priority);
    }

    /**
     * Removes an Access Restriction from the functionapp.
     *
     * Syntax:
     * ```
     * az functionapp config access-restriction remove [--action {Allow, Deny}]
     *                                                 [--ids]
     *                                                 [--ip-address]
     *                                                 [--name]
     *                                                 [--resource-group]
     *                                                 [--rule-name]
     *                                                 [--scm-site {false, true}]
     *                                                 [--slot]
     *                                                 [--subnet]
     *                                                 [--subscription]
     *                                                 [--vnet-name]
     * ```
     */
    static remove(): az_functionapp_config_access_restriction_remove_command_builder {
        return new az_functionapp_config_access_restriction_remove_command_builder("az functionapp config access-restriction remove");
    }

    /**
     * Sets if SCM site is using the same restrictions as the main site.
     *
     * Syntax:
     * ```
     * az functionapp config access-restriction set --use-same-restrictions-for-scm-site {false, true}
     *                                              [--ids]
     *                                              [--name]
     *                                              [--resource-group]
     *                                              [--slot]
     *                                              [--subscription]
     * ```
     *
     * @param {boolean} useSameRestrictionsForScmSite Use same access restrictions for scm site.
     */
    static set(useSameRestrictionsForScmSite: boolean): az_functionapp_config_access_restriction_set_command_builder {
        return new az_functionapp_config_access_restriction_set_command_builder("az functionapp config access-restriction set", useSameRestrictionsForScmSite);
    }

    /**
     * Show Access Restriction settings for functionapp.
     *
     * Syntax:
     * ```
     * az functionapp config access-restriction show [--ids]
     *                                               [--name]
     *                                               [--query-examples]
     *                                               [--resource-group]
     *                                               [--slot]
     *                                               [--subscription]
     * ```
     */
    static show(): az_functionapp_config_access_restriction_show_command_builder {
        return new az_functionapp_config_access_restriction_show_command_builder("az functionapp config access-restriction show");
    }
}

/** Configure function app settings. */
export class az_functionapp_config_appsettings {
    /**
     * Delete a function app's settings.
     *
     * Syntax:
     * ```
     * az functionapp config appsettings delete --setting-names
     *                                          [--ids]
     *                                          [--name]
     *                                          [--resource-group]
     *                                          [--slot]
     *                                          [--subscription]
     * ```
     *
     * @param {string} settingNames Space-separated app setting names.
     */
    static delete(settingNames: string): az_functionapp_config_appsettings_delete_command_builder {
        return new az_functionapp_config_appsettings_delete_command_builder("az functionapp config appsettings delete", settingNames);
    }

    /**
     * Show settings for a function app.
     *
     * Syntax:
     * ```
     * az functionapp config appsettings list --name
     *                                        --resource-group
     *                                        [--query-examples]
     *                                        [--slot]
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_functionapp_config_appsettings_list_command_builder {
        return new az_functionapp_config_appsettings_list_command_builder("az functionapp config appsettings list", name, resourceGroup);
    }

    /**
     * Update a function app's settings.
     *
     * Syntax:
     * ```
     * az functionapp config appsettings set [--ids]
     *                                       [--name]
     *                                       [--resource-group]
     *                                       [--settings]
     *                                       [--slot]
     *                                       [--slot-settings]
     *                                       [--subscription]
     * ```
     */
    static set(): az_functionapp_config_appsettings_set_command_builder {
        return new az_functionapp_config_appsettings_set_command_builder("az functionapp config appsettings set");
    }
}

/** Manage function app container settings. */
export class az_functionapp_config_container {
    /**
     * Delete a function app container's settings.
     *
     * Syntax:
     * ```
     * az functionapp config container delete [--ids]
     *                                        [--name]
     *                                        [--resource-group]
     *                                        [--slot]
     *                                        [--subscription]
     * ```
     */
    static delete(): az_functionapp_config_container_delete_command_builder {
        return new az_functionapp_config_container_delete_command_builder("az functionapp config container delete");
    }

    /**
     * Set a function app container's settings.
     *
     * Syntax:
     * ```
     * az functionapp config container set [--docker-custom-image-name]
     *                                     [--docker-registry-server-password]
     *                                     [--docker-registry-server-url]
     *                                     [--docker-registry-server-user]
     *                                     [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--slot]
     *                                     [--subscription]
     * ```
     */
    static set(): az_functionapp_config_container_set_command_builder {
        return new az_functionapp_config_container_set_command_builder("az functionapp config container set");
    }

    /**
     * Get details of a function app container's settings.
     *
     * Syntax:
     * ```
     * az functionapp config container show [--ids]
     *                                      [--name]
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--slot]
     *                                      [--subscription]
     * ```
     */
    static show(): az_functionapp_config_container_show_command_builder {
        return new az_functionapp_config_container_show_command_builder("az functionapp config container show");
    }
}

/** Configure hostnames for a function app. */
export class az_functionapp_config_hostname {
    /**
     * Bind a hostname to a function app.
     *
     * Syntax:
     * ```
     * az functionapp config hostname add [--hostname]
     *                                    [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--slot]
     *                                    [--subscription]
     * ```
     */
    static add(): az_functionapp_config_hostname_add_command_builder {
        return new az_functionapp_config_hostname_add_command_builder("az functionapp config hostname add");
    }

    /**
     * Unbind a hostname from a function app.
     *
     * Syntax:
     * ```
     * az functionapp config hostname delete [--hostname]
     *                                       [--ids]
     *                                       [--name]
     *                                       [--resource-group]
     *                                       [--slot]
     *                                       [--subscription]
     * ```
     */
    static delete(): az_functionapp_config_hostname_delete_command_builder {
        return new az_functionapp_config_hostname_delete_command_builder("az functionapp config hostname delete");
    }

    /**
     * Get the external-facing IP address for a function app.
     *
     * Syntax:
     * ```
     * az functionapp config hostname get-external-ip [--ids]
     *                                                [--name]
     *                                                [--resource-group]
     *                                                [--subscription]
     * ```
     */
    static get_external_ip(): az_functionapp_config_hostname_get_external_ip_command_builder {
        return new az_functionapp_config_hostname_get_external_ip_command_builder("az functionapp config hostname get-external-ip");
    }

    /**
     * List all hostname bindings for a function app.
     *
     * Syntax:
     * ```
     * az functionapp config hostname list --resource-group
     *                                     --webapp-name
     *                                     [--query-examples]
     *                                     [--slot]
     *                                     [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} webappName Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
     */
    static list(resourceGroup: string, webappName: string): az_functionapp_config_hostname_list_command_builder {
        return new az_functionapp_config_hostname_list_command_builder("az functionapp config hostname list", resourceGroup, webappName);
    }
}

/** Configure SSL certificates. */
export class az_functionapp_config_ssl {
    /**
     * Bind an SSL certificate to a function app.
     *
     * Syntax:
     * ```
     * az functionapp config ssl bind --certificate-thumbprint
     *                                --ssl-type {IP, SNI}
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--slot]
     *                                [--subscription]
     * ```
     *
     * @param {string} certificateThumbprint The ssl cert thumbprint.
     * @param {'IP' | 'SNI'} sslType The ssl cert type.
     */
    static bind(certificateThumbprint: string, sslType: 'IP' | 'SNI'): az_functionapp_config_ssl_bind_command_builder {
        return new az_functionapp_config_ssl_bind_command_builder("az functionapp config ssl bind", certificateThumbprint, sslType);
    }

    /**
     * Create a Managed Certificate for a hostname in a function app.
     *
     * Syntax:
     * ```
     * az functionapp config ssl create --hostname
     *                                  --name
     *                                  --resource-group
     *                                  [--slot]
     *                                  [--subscription]
     * ```
     *
     * @param {string} hostname The custom domain name.
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(hostname: string, name: string, resourceGroup: string): az_functionapp_config_ssl_create_command_builder {
        return new az_functionapp_config_ssl_create_command_builder("az functionapp config ssl create", hostname, name, resourceGroup);
    }

    /**
     * Delete an SSL certificate from a function app.
     *
     * Syntax:
     * ```
     * az functionapp config ssl delete --certificate-thumbprint
     *                                  --resource-group
     *                                  [--subscription]
     * ```
     *
     * @param {string} certificateThumbprint The ssl cert thumbprint.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(certificateThumbprint: string, resourceGroup: string): az_functionapp_config_ssl_delete_command_builder {
        return new az_functionapp_config_ssl_delete_command_builder("az functionapp config ssl delete", certificateThumbprint, resourceGroup);
    }

    /**
     * Import an SSL certificate to a function app from Key Vault.
     *
     * Syntax:
     * ```
     * az functionapp config ssl import --key-vault
     *                                  --key-vault-certificate-name
     *                                  [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} keyVault The name or resource ID of the Key Vault.
     * @param {string} keyVaultCertificateName The name of the certificate in Key Vault.
     */
    static import(keyVault: string, keyVaultCertificateName: string): az_functionapp_config_ssl_import_command_builder {
        return new az_functionapp_config_ssl_import_command_builder("az functionapp config ssl import", keyVault, keyVaultCertificateName);
    }

    /**
     * List SSL certificates for a function app.
     *
     * Syntax:
     * ```
     * az functionapp config ssl list --resource-group
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(resourceGroup: string): az_functionapp_config_ssl_list_command_builder {
        return new az_functionapp_config_ssl_list_command_builder("az functionapp config ssl list", resourceGroup);
    }

    /**
     * Unbind an SSL certificate from a function app.
     *
     * Syntax:
     * ```
     * az functionapp config ssl unbind --certificate-thumbprint
     *                                  [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--slot]
     *                                  [--subscription]
     * ```
     *
     * @param {string} certificateThumbprint The ssl cert thumbprint.
     */
    static unbind(certificateThumbprint: string): az_functionapp_config_ssl_unbind_command_builder {
        return new az_functionapp_config_ssl_unbind_command_builder("az functionapp config ssl unbind", certificateThumbprint);
    }

    /**
     * Upload an SSL certificate to a function app.
     *
     * Syntax:
     * ```
     * az functionapp config ssl upload --certificate-file
     *                                  --certificate-password
     *                                  [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--slot]
     *                                  [--subscription]
     * ```
     *
     * @param {string} certificateFile The filepath for the .pfx file.
     * @param {string} certificatePassword The ssl cert password.
     */
    static upload(certificateFile: string, certificatePassword: string): az_functionapp_config_ssl_upload_command_builder {
        return new az_functionapp_config_ssl_upload_command_builder("az functionapp config ssl upload", certificateFile, certificatePassword);
    }
}

/** Configure a function app. */
export class az_functionapp_config {
    /**
     * Set the function app's configuration.
     *
     * Syntax:
     * ```
     * az functionapp config set [--always-on {false, true}]
     *                           [--auto-heal-enabled {false, true}]
     *                           [--ftps-state {AllAllowed, Disabled, FtpsOnly}]
     *                           [--generic-configurations]
     *                           [--http20-enabled {false, true}]
     *                           [--ids]
     *                           [--java-container]
     *                           [--java-container-version]
     *                           [--java-version]
     *                           [--linux-fx-version]
     *                           [--min-tls-version]
     *                           [--name]
     *                           [--net-framework-version]
     *                           [--number-of-workers]
     *                           [--php-version]
     *                           [--prewarmed-instance-count]
     *                           [--python-version]
     *                           [--remote-debugging-enabled {false, true}]
     *                           [--resource-group]
     *                           [--slot]
     *                           [--startup-file]
     *                           [--subscription]
     *                           [--use-32bit-worker-process {false, true}]
     *                           [--web-sockets-enabled {false, true}]
     * ```
     */
    static set(): az_functionapp_config_set_command_builder {
        return new az_functionapp_config_set_command_builder("az functionapp config set");
    }

    /**
     * Get the details of a function app's configuration.
     *
     * Syntax:
     * ```
     * az functionapp config show [--ids]
     *                            [--name]
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--slot]
     *                            [--subscription]
     * ```
     */
    static show(): az_functionapp_config_show_command_builder {
        return new az_functionapp_config_show_command_builder("az functionapp config show");
    }
}

/** Manage Cross-Origin Resource Sharing (CORS). */
export class az_functionapp_cors {
    /**
     * Add allowed origins.
     *
     * Syntax:
     * ```
     * az functionapp cors add --allowed-origins
     *                         [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--slot]
     *                         [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list.
     */
    static add(allowedOrigins: string): az_functionapp_cors_add_command_builder {
        return new az_functionapp_cors_add_command_builder("az functionapp cors add", allowedOrigins);
    }

    /**
     * Remove allowed origins.
     *
     * Syntax:
     * ```
     * az functionapp cors remove --allowed-origins
     *                            [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--slot]
     *                            [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list.
     */
    static remove(allowedOrigins: string): az_functionapp_cors_remove_command_builder {
        return new az_functionapp_cors_remove_command_builder("az functionapp cors remove", allowedOrigins);
    }

    /**
     * Show allowed origins.
     *
     * Syntax:
     * ```
     * az functionapp cors show [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--slot]
     *                          [--subscription]
     * ```
     */
    static show(): az_functionapp_cors_show_command_builder {
        return new az_functionapp_cors_show_command_builder("az functionapp cors show");
    }
}

/** Manage container-based continuous deployment. */
export class az_functionapp_deployment_container {
    /**
     * Configure continuous deployment via containers.
     *
     * Syntax:
     * ```
     * az functionapp deployment container config --enable-cd {false, true}
     *                                            [--ids]
     *                                            [--name]
     *                                            [--resource-group]
     *                                            [--slot]
     *                                            [--subscription]
     * ```
     *
     * @param {boolean} enableCd Enable/disable continuous deployment.
     */
    static config(enableCd: boolean): az_functionapp_deployment_container_config_command_builder {
        return new az_functionapp_deployment_container_config_command_builder("az functionapp deployment container config", enableCd);
    }

    /**
     * Get the URL which can be used to configure webhooks for continuous deployment.
     *
     * Syntax:
     * ```
     * az functionapp deployment container show-cd-url [--ids]
     *                                                 [--name]
     *                                                 [--resource-group]
     *                                                 [--slot]
     *                                                 [--subscription]
     * ```
     */
    static show_cd_url(): az_functionapp_deployment_container_show_cd_url_command_builder {
        return new az_functionapp_deployment_container_show_cd_url_command_builder("az functionapp deployment container show-cd-url");
    }
}

/** Manage function app deployment slots. */
export class az_functionapp_deployment_slot {
    /**
     * Configure deployment slot auto swap.
     *
     * Syntax:
     * ```
     * az functionapp deployment slot auto-swap --slot
     *                                          [--auto-swap-slot]
     *                                          [--disable]
     *                                          [--ids]
     *                                          [--name]
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     *
     * @param {string} slot The name of the slot.
     */
    static auto_swap(slot: string): az_functionapp_deployment_slot_auto_swap_command_builder {
        return new az_functionapp_deployment_slot_auto_swap_command_builder("az functionapp deployment slot auto-swap", slot);
    }

    /**
     * Create a deployment slot.
     *
     * Syntax:
     * ```
     * az functionapp deployment slot create --name
     *                                       --resource-group
     *                                       --slot
     *                                       [--configuration-source]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} slot The name of the slot.
     */
    static create(name: string, resourceGroup: string, slot: string): az_functionapp_deployment_slot_create_command_builder {
        return new az_functionapp_deployment_slot_create_command_builder("az functionapp deployment slot create", name, resourceGroup, slot);
    }

    /**
     * Delete a deployment slot.
     *
     * Syntax:
     * ```
     * az functionapp deployment slot delete --slot
     *                                       [--ids]
     *                                       [--name]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     *
     * @param {string} slot The name of the slot.
     */
    static delete(slot: string): az_functionapp_deployment_slot_delete_command_builder {
        return new az_functionapp_deployment_slot_delete_command_builder("az functionapp deployment slot delete", slot);
    }

    /**
     * List all deployment slots.
     *
     * Syntax:
     * ```
     * az functionapp deployment slot list [--ids]
     *                                     [--name]
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    static list(): az_functionapp_deployment_slot_list_command_builder {
        return new az_functionapp_deployment_slot_list_command_builder("az functionapp deployment slot list");
    }

    /**
     * Change deployment slots for a function app.
     *
     * Syntax:
     * ```
     * az functionapp deployment slot swap --slot
     *                                     [--action {preview, reset, swap}]
     *                                     [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--subscription]
     *                                     [--target-slot]
     * ```
     *
     * @param {string} slot The name of the slot.
     */
    static swap(slot: string): az_functionapp_deployment_slot_swap_command_builder {
        return new az_functionapp_deployment_slot_swap_command_builder("az functionapp deployment slot swap", slot);
    }
}

/** Manage function app deployment via source control. */
export class az_functionapp_deployment_source {
    /**
     * Manage deployment from git or Mercurial repositories.
     *
     * Syntax:
     * ```
     * az functionapp deployment source config --repo-url
     *                                         [--app-working-dir]
     *                                         [--branch]
     *                                         [--cd-account-create]
     *                                         [--cd-app-type {AspNet, AspNetCore, NodeJS, PHP, Python}]
     *                                         [--cd-project-url]
     *                                         [--git-token]
     *                                         [--ids]
     *                                         [--manual-integration]
     *                                         [--name]
     *                                         [--nodejs-task-runner {Grunt, Gulp, None}]
     *                                         [--private-repo-password]
     *                                         [--private-repo-username]
     *                                         [--python-framework {Bottle, Django, Flask}]
     *                                         [--python-version {Python 2.7.12 x64, Python 2.7.12 x86, Python 2.7.13 x64, Python 2.7.13 x86, Python 3.5.3 x64, Python 3.5.3 x86, Python 3.6.0 x64, Python 3.6.0 x86, Python 3.6.1 x86, Python 3.6.2 x64}]
     *                                         [--repository-type {externalgit, git, github, localgit, mercurial, vsts}]
     *                                         [--resource-group]
     *                                         [--slot]
     *                                         [--slot-swap]
     *                                         [--subscription]
     *                                         [--test]
     * ```
     *
     * @param {string} repoUrl Repository url to pull the latest source from, e.g. <a href="https://github.com/foo/foo-web">https://github.com/foo/foo-web</a>.
     */
    static config(repoUrl: string): az_functionapp_deployment_source_config_command_builder {
        return new az_functionapp_deployment_source_config_command_builder("az functionapp deployment source config", repoUrl);
    }

    /**
     * Get a URL for a git repository endpoint to clone and push to for function app deployment.
     *
     * Syntax:
     * ```
     * az functionapp deployment source config-local-git [--ids]
     *                                                   [--name]
     *                                                   [--resource-group]
     *                                                   [--slot]
     *                                                   [--subscription]
     * ```
     */
    static config_local_git(): az_functionapp_deployment_source_config_local_git_command_builder {
        return new az_functionapp_deployment_source_config_local_git_command_builder("az functionapp deployment source config-local-git");
    }

    /**
     * Perform deployment using the kudu zip push deployment for a function app.
     *
     * Syntax:
     * ```
     * az functionapp deployment source config-zip --src
     *                                             [--build-remote {false, true}]
     *                                             [--ids]
     *                                             [--name]
     *                                             [--resource-group]
     *                                             [--slot]
     *                                             [--subscription]
     *                                             [--timeout]
     * ```
     *
     * @param {string} src A zip file path for deployment.
     */
    static config_zip(src: string): az_functionapp_deployment_source_config_zip_command_builder {
        return new az_functionapp_deployment_source_config_zip_command_builder("az functionapp deployment source config-zip", src);
    }

    /**
     * Delete a source control deployment configuration.
     *
     * Syntax:
     * ```
     * az functionapp deployment source delete [--ids]
     *                                         [--name]
     *                                         [--resource-group]
     *                                         [--slot]
     *                                         [--subscription]
     * ```
     */
    static delete(): az_functionapp_deployment_source_delete_command_builder {
        return new az_functionapp_deployment_source_delete_command_builder("az functionapp deployment source delete");
    }

    /**
     * Get the details of a source control deployment configuration.
     *
     * Syntax:
     * ```
     * az functionapp deployment source show [--ids]
     *                                       [--name]
     *                                       [--query-examples]
     *                                       [--resource-group]
     *                                       [--slot]
     *                                       [--subscription]
     * ```
     */
    static show(): az_functionapp_deployment_source_show_command_builder {
        return new az_functionapp_deployment_source_show_command_builder("az functionapp deployment source show");
    }

    /**
     * Synchronize from the repository. Only needed under manual integration mode.
     *
     * Syntax:
     * ```
     * az functionapp deployment source sync [--ids]
     *                                       [--name]
     *                                       [--resource-group]
     *                                       [--slot]
     *                                       [--subscription]
     * ```
     */
    static sync(): az_functionapp_deployment_source_sync_command_builder {
        return new az_functionapp_deployment_source_sync_command_builder("az functionapp deployment source sync");
    }

    /**
     * Update source control token cached in Azure app service.
     *
     * Syntax:
     * ```
     * az functionapp deployment source update-token [--git-token]
     *                                               [--subscription]
     * ```
     */
    static update_token(): az_functionapp_deployment_source_update_token_command_builder {
        return new az_functionapp_deployment_source_update_token_command_builder("az functionapp deployment source update-token");
    }
}

/** Manage user credentials for deployment. */
export class az_functionapp_deployment_user {
    /**
     * Update deployment credentials.
     *
     * Syntax:
     * ```
     * az functionapp deployment user set --user-name
     *                                    [--password]
     *                                    [--subscription]
     * ```
     *
     * @param {string} userName User name.
     */
    static set(userName: string): az_functionapp_deployment_user_set_command_builder {
        return new az_functionapp_deployment_user_set_command_builder("az functionapp deployment user set", userName);
    }

    /**
     * Gets publishing user.
     *
     * Syntax:
     * ```
     * az functionapp deployment user show [--query-examples]
     *                                     [--subscription]
     * ```
     */
    static show(): az_functionapp_deployment_user_show_command_builder {
        return new az_functionapp_deployment_user_show_command_builder("az functionapp deployment user show");
    }
}

/** Manage function app deployments. */
export class az_functionapp_deployment {
    /**
     * Get the details for available function app publishing credentials.
     *
     * Syntax:
     * ```
     * az functionapp deployment list-publishing-credentials [--ids]
     *                                                       [--name]
     *                                                       [--resource-group]
     *                                                       [--slot]
     *                                                       [--subscription]
     * ```
     */
    static list_publishing_credentials(): az_functionapp_deployment_list_publishing_credentials_command_builder {
        return new az_functionapp_deployment_list_publishing_credentials_command_builder("az functionapp deployment list-publishing-credentials");
    }

    /**
     * Get the details for available function app deployment profiles.
     *
     * Syntax:
     * ```
     * az functionapp deployment list-publishing-profiles [--ids]
     *                                                    [--name]
     *                                                    [--resource-group]
     *                                                    [--slot]
     *                                                    [--subscription]
     *                                                    [--xml]
     * ```
     */
    static list_publishing_profiles(): az_functionapp_deployment_list_publishing_profiles_command_builder {
        return new az_functionapp_deployment_list_publishing_profiles_command_builder("az functionapp deployment list-publishing-profiles");
    }
}

/** Azure Function specific integration with Azure DevOps. Please visit <a href="https://aka.ms/functions-azure-devops">https://aka.ms/functions-azure-devops</a> for more information. */
export class az_functionapp_devops_pipeline {
    /**
     * Create an Azure DevOps pipeline for a function app.
     *
     * Syntax:
     * ```
     * az functionapp devops-pipeline create [--allow-force-push {false, true}]
     *                                       [--functionapp-name]
     *                                       [--github-pat]
     *                                       [--github-repository]
     *                                       [--organization-name]
     *                                       [--overwrite-yaml {false, true}]
     *                                       [--project-name]
     *                                       [--repository-name]
     *                                       [--subscription]
     * ```
     */
    static create(): az_functionapp_devops_pipeline_create_command_builder {
        return new az_functionapp_devops_pipeline_create_command_builder("az functionapp devops-pipeline create");
    }
}

/** Manage function keys. */
export class az_functionapp_function_keys {
    /**
     * Delete a function key.
     *
     * Syntax:
     * ```
     * az functionapp function keys delete --key-name
     *                                     --name
     *                                     --resource-group
     *                                     [--function-name]
     *                                     [--slot]
     *                                     [--subscription]
     * ```
     *
     * @param {string} keyName Name of the key to set.
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(keyName: string, name: string, resourceGroup: string): az_functionapp_function_keys_delete_command_builder {
        return new az_functionapp_function_keys_delete_command_builder("az functionapp function keys delete", keyName, name, resourceGroup);
    }

    /**
     * List all function keys.
     *
     * Syntax:
     * ```
     * az functionapp function keys list --function-name
     *                                   --name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--slot]
     *                                   [--subscription]
     * ```
     *
     * @param {string} functionName Name of the Function.
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(functionName: string, name: string, resourceGroup: string): az_functionapp_function_keys_list_command_builder {
        return new az_functionapp_function_keys_list_command_builder("az functionapp function keys list", functionName, name, resourceGroup);
    }

    /**
     * Create or update a function key.
     *
     * Syntax:
     * ```
     * az functionapp function keys set --function-name
     *                                  --key-name
     *                                  --name
     *                                  --resource-group
     *                                  [--key-value]
     *                                  [--slot]
     *                                  [--subscription]
     * ```
     *
     * @param {string} functionName Name of the Function.
     * @param {string} keyName Name of the key to set.
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static set(functionName: string, keyName: string, name: string, resourceGroup: string): az_functionapp_function_keys_set_command_builder {
        return new az_functionapp_function_keys_set_command_builder("az functionapp function keys set", functionName, keyName, name, resourceGroup);
    }
}

/** Manage function app functions. */
export class az_functionapp_function {
    /**
     * Delete a function.
     *
     * Syntax:
     * ```
     * az functionapp function delete --function-name
     *                                --name
     *                                --resource-group
     *                                [--subscription]
     * ```
     *
     * @param {string} functionName Name of the Function.
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(functionName: string, name: string, resourceGroup: string): az_functionapp_function_delete_command_builder {
        return new az_functionapp_function_delete_command_builder("az functionapp function delete", functionName, name, resourceGroup);
    }

    /**
     * Get the details of a function.
     *
     * Syntax:
     * ```
     * az functionapp function show --function-name
     *                              --name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} functionName Name of the Function.
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(functionName: string, name: string, resourceGroup: string): az_functionapp_function_show_command_builder {
        return new az_functionapp_function_show_command_builder("az functionapp function show", functionName, name, resourceGroup);
    }
}

/** Methods that list, add and remove hybrid-connections from functionapp. */
export class az_functionapp_hybrid_connection {
    /**
     * Add a hybrid-connection to a functionapp.
     *
     * Syntax:
     * ```
     * az functionapp hybrid-connection add --hybrid-connection
     *                                      --name
     *                                      --namespace
     *                                      --resource-group
     *                                      [--slot]
     *                                      [--subscription]
     * ```
     *
     * @param {string} hybridConnection Hybrid connection name.
     * @param {string} name Name of the function app.
     * @param {string} namespace Hybrid connection namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static add(hybridConnection: string, name: string, namespace: string, resourceGroup: string): az_functionapp_hybrid_connection_add_command_builder {
        return new az_functionapp_hybrid_connection_add_command_builder("az functionapp hybrid-connection add", hybridConnection, name, namespace, resourceGroup);
    }

    /**
     * List the hybrid-connections on a functionapp.
     *
     * Syntax:
     * ```
     * az functionapp hybrid-connection list --name
     *                                       --resource-group
     *                                       [--query-examples]
     *                                       [--slot]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_functionapp_hybrid_connection_list_command_builder {
        return new az_functionapp_hybrid_connection_list_command_builder("az functionapp hybrid-connection list", name, resourceGroup);
    }

    /**
     * Remove a hybrid-connection from a functionapp.
     *
     * Syntax:
     * ```
     * az functionapp hybrid-connection remove --hybrid-connection
     *                                         --name
     *                                         --namespace
     *                                         --resource-group
     *                                         [--slot]
     *                                         [--subscription]
     * ```
     *
     * @param {string} hybridConnection Hybrid connection name.
     * @param {string} name Name of the function app.
     * @param {string} namespace Hybrid connection namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static remove(hybridConnection: string, name: string, namespace: string, resourceGroup: string): az_functionapp_hybrid_connection_remove_command_builder {
        return new az_functionapp_hybrid_connection_remove_command_builder("az functionapp hybrid-connection remove", hybridConnection, name, namespace, resourceGroup);
    }
}

/** Manage web app's managed service identity. */
export class az_functionapp_identity {
    /**
     * Assign managed service identity to the web app.
     *
     * Syntax:
     * ```
     * az functionapp identity assign [--identities]
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--role]
     *                                [--scope]
     *                                [--slot]
     *                                [--subscription]
     * ```
     */
    static assign(): az_functionapp_identity_assign_command_builder {
        return new az_functionapp_identity_assign_command_builder("az functionapp identity assign");
    }

    /**
     * Disable web app's managed service identity.
     *
     * Syntax:
     * ```
     * az functionapp identity remove [--identities]
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--slot]
     *                                [--subscription]
     * ```
     */
    static remove(): az_functionapp_identity_remove_command_builder {
        return new az_functionapp_identity_remove_command_builder("az functionapp identity remove");
    }

    /**
     * Display web app's managed service identity.
     *
     * Syntax:
     * ```
     * az functionapp identity show [--ids]
     *                              [--name]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--slot]
     *                              [--subscription]
     * ```
     */
    static show(): az_functionapp_identity_show_command_builder {
        return new az_functionapp_identity_show_command_builder("az functionapp identity show");
    }
}

/** Manage function app keys. */
export class az_functionapp_keys {
    /**
     * Delete a function app key.
     *
     * Syntax:
     * ```
     * az functionapp keys delete --key-name
     *                            --key-type {functionKeys, masterKey, systemKey}
     *                            --name
     *                            --resource-group
     *                            [--slot]
     *                            [--subscription]
     * ```
     *
     * @param {string} keyName Name of the key to set.
     * @param {'functionKeys' | 'masterKey' | 'systemKey'} keyType Type of key.
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(keyName: string, keyType: 'functionKeys' | 'masterKey' | 'systemKey', name: string, resourceGroup: string): az_functionapp_keys_delete_command_builder {
        return new az_functionapp_keys_delete_command_builder("az functionapp keys delete", keyName, keyType, name, resourceGroup);
    }

    /**
     * List all function app keys.
     *
     * Syntax:
     * ```
     * az functionapp keys list --name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--slot]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_functionapp_keys_list_command_builder {
        return new az_functionapp_keys_list_command_builder("az functionapp keys list", name, resourceGroup);
    }

    /**
     * Create or update a function app key.
     *
     * Syntax:
     * ```
     * az functionapp keys set --key-name
     *                         --key-type {functionKeys, masterKey, systemKey}
     *                         --name
     *                         --resource-group
     *                         [--key-value]
     *                         [--slot]
     *                         [--subscription]
     * ```
     *
     * @param {string} keyName Name of the key to set.
     * @param {'functionKeys' | 'masterKey' | 'systemKey'} keyType Type of key.
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static set(keyName: string, keyType: 'functionKeys' | 'masterKey' | 'systemKey', name: string, resourceGroup: string): az_functionapp_keys_set_command_builder {
        return new az_functionapp_keys_set_command_builder("az functionapp keys set", keyName, keyType, name, resourceGroup);
    }
}

/** Manage function app deployment logs. */
export class az_functionapp_log_deployment {
    /**
     * List deployment logs of the deployments associated with function app.
     *
     * Syntax:
     * ```
     * az functionapp log deployment list --name
     *                                    --resource-group
     *                                    [--query-examples]
     *                                    [--slot]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_functionapp_log_deployment_list_command_builder {
        return new az_functionapp_log_deployment_list_command_builder("az functionapp log deployment list", name, resourceGroup);
    }

    /**
     * Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified.
     *
     * Syntax:
     * ```
     * az functionapp log deployment show --name
     *                                    --resource-group
     *                                    [--deployment-id]
     *                                    [--query-examples]
     *                                    [--slot]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_functionapp_log_deployment_show_command_builder {
        return new az_functionapp_log_deployment_show_command_builder("az functionapp log deployment show", name, resourceGroup);
    }
}

/** */
export class az_functionapp_log {
}

/** Manage App Service Plans for an Azure Function. */
export class az_functionapp_plan {
    /**
     * Create an App Service Plan for an Azure Function.
     *
     * Syntax:
     * ```
     * az functionapp plan create --name
     *                            --resource-group
     *                            --sku
     *                            [--is-linux {false, true}]
     *                            [--location]
     *                            [--max-burst]
     *                            [--min-instances]
     *                            [--subscription]
     *                            [--tags]
     * ```
     *
     * @param {string} name The name of the app service plan.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sku The SKU of the app service plan.
     */
    static create(name: string, resourceGroup: string, sku: string): az_functionapp_plan_create_command_builder {
        return new az_functionapp_plan_create_command_builder("az functionapp plan create", name, resourceGroup, sku);
    }

    /**
     * Delete an App Service Plan.
     *
     * Syntax:
     * ```
     * az functionapp plan delete [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--yes]
     * ```
     */
    static delete(): az_functionapp_plan_delete_command_builder {
        return new az_functionapp_plan_delete_command_builder("az functionapp plan delete");
    }

    /**
     * List App Service Plans.
     *
     * Syntax:
     * ```
     * az functionapp plan list [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    static list(): az_functionapp_plan_list_command_builder {
        return new az_functionapp_plan_list_command_builder("az functionapp plan list");
    }

    /**
     * Get the App Service Plans for a resource group or a set of resource groups.
     *
     * Syntax:
     * ```
     * az functionapp plan show [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    static show(): az_functionapp_plan_show_command_builder {
        return new az_functionapp_plan_show_command_builder("az functionapp plan show");
    }

    /**
     * Update an App Service plan for an Azure Function.
     *
     * Syntax:
     * ```
     * az functionapp plan update [--add]
     *                            [--force-string]
     *                            [--ids]
     *                            [--max-burst]
     *                            [--min-instances]
     *                            [--name]
     *                            [--remove]
     *                            [--resource-group]
     *                            [--set]
     *                            [--sku]
     *                            [--subscription]
     * ```
     */
    static update(): az_functionapp_plan_update_command_builder {
        return new az_functionapp_plan_update_command_builder("az functionapp plan update");
    }
}

/** Methods that list, add, and remove virtual networks integrations from a functionapp. */
export class az_functionapp_vnet_integration {
    /**
     * Add a regional virtual network integration to a functionapp.
     *
     * Syntax:
     * ```
     * az functionapp vnet-integration add --name
     *                                     --resource-group
     *                                     --subnet
     *                                     --vnet
     *                                     [--slot]
     *                                     [--subscription]
     * ```
     *
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subnet The name of the subnet.
     * @param {string} vnet The name or resource ID of the Vnet.
     */
    static add(name: string, resourceGroup: string, subnet: string, vnet: string): az_functionapp_vnet_integration_add_command_builder {
        return new az_functionapp_vnet_integration_add_command_builder("az functionapp vnet-integration add", name, resourceGroup, subnet, vnet);
    }

    /**
     * List the virtual network integrations on a functionapp.
     *
     * Syntax:
     * ```
     * az functionapp vnet-integration list --name
     *                                      --resource-group
     *                                      [--query-examples]
     *                                      [--slot]
     *                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_functionapp_vnet_integration_list_command_builder {
        return new az_functionapp_vnet_integration_list_command_builder("az functionapp vnet-integration list", name, resourceGroup);
    }

    /**
     * Remove a regional virtual network integration from functionapp.
     *
     * Syntax:
     * ```
     * az functionapp vnet-integration remove --name
     *                                        --resource-group
     *                                        [--slot]
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Name of the function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static remove(name: string, resourceGroup: string): az_functionapp_vnet_integration_remove_command_builder {
        return new az_functionapp_vnet_integration_remove_command_builder("az functionapp vnet-integration remove", name, resourceGroup);
    }
}

/** Manage function apps. To install the Azure Functions Core tools see <a href="https://github.com/Azure/azure-functions-core-tools">https://github.com/Azure/azure-functions-core-tools</a>. */
export class az_functionapp {
    /**
     * Create a function app.
     *
     * Syntax:
     * ```
     * az functionapp create --name
     *                       --resource-group
     *                       --storage-account
     *                       [--app-insights]
     *                       [--app-insights-key]
     *                       [--assign-identity]
     *                       [--consumption-plan-location]
     *                       [--deployment-container-image-name]
     *                       [--deployment-local-git]
     *                       [--deployment-source-branch]
     *                       [--deployment-source-url]
     *                       [--disable-app-insights {false, true}]
     *                       [--docker-registry-server-password]
     *                       [--docker-registry-server-user]
     *                       [--functions-version {2, 3}]
     *                       [--os-type {Linux, Windows}]
     *                       [--plan]
     *                       [--role]
     *                       [--runtime {custom, dotnet, java, node, powershell, python}]
     *                       [--runtime-version]
     *                       [--scope]
     *                       [--subscription]
     *                       [--tags]
     * ```
     *
     * @param {string} name Name of the new function app.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} storageAccount Provide a string value of a Storage Account in the provided Resource Group. Or Resource ID of a Storage Account in a different Resource Group.
     */
    static create(name: string, resourceGroup: string, storageAccount: string): az_functionapp_create_command_builder {
        return new az_functionapp_create_command_builder("az functionapp create", name, resourceGroup, storageAccount);
    }

    /**
     * Delete a function app.
     *
     * Syntax:
     * ```
     * az functionapp delete [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--slot]
     *                       [--subscription]
     * ```
     */
    static delete(): az_functionapp_delete_command_builder {
        return new az_functionapp_delete_command_builder("az functionapp delete");
    }

    /**
     * List function apps.
     *
     * Syntax:
     * ```
     * az functionapp list [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    static list(): az_functionapp_list_command_builder {
        return new az_functionapp_list_command_builder("az functionapp list");
    }

    /**
     * List available locations for running function apps.
     *
     * Syntax:
     * ```
     * az functionapp list-consumption-locations [--subscription]
     * ```
     */
    static list_consumption_locations(): az_functionapp_list_consumption_locations_command_builder {
        return new az_functionapp_list_consumption_locations_command_builder("az functionapp list-consumption-locations");
    }

    /**
     * Restart a function app.
     *
     * Syntax:
     * ```
     * az functionapp restart [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--slot]
     *                        [--subscription]
     * ```
     */
    static restart(): az_functionapp_restart_command_builder {
        return new az_functionapp_restart_command_builder("az functionapp restart");
    }

    /**
     * Get the details of a function app.
     *
     * Syntax:
     * ```
     * az functionapp show [--ids]
     *                     [--name]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--slot]
     *                     [--subscription]
     * ```
     */
    static show(): az_functionapp_show_command_builder {
        return new az_functionapp_show_command_builder("az functionapp show");
    }

    /**
     * Start a function app.
     *
     * Syntax:
     * ```
     * az functionapp start [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--slot]
     *                      [--subscription]
     * ```
     */
    static start(): az_functionapp_start_command_builder {
        return new az_functionapp_start_command_builder("az functionapp start");
    }

    /**
     * Stop a function app.
     *
     * Syntax:
     * ```
     * az functionapp stop [--ids]
     *                     [--name]
     *                     [--resource-group]
     *                     [--slot]
     *                     [--subscription]
     * ```
     */
    static stop(): az_functionapp_stop_command_builder {
        return new az_functionapp_stop_command_builder("az functionapp stop");
    }

    /**
     * Update a function app.
     *
     * Syntax:
     * ```
     * az functionapp update [--add]
     *                       [--force-string]
     *                       [--ids]
     *                       [--name]
     *                       [--plan]
     *                       [--remove]
     *                       [--resource-group]
     *                       [--set]
     *                       [--subscription]
     * ```
     */
    static update(): az_functionapp_update_command_builder {
        return new az_functionapp_update_command_builder("az functionapp update");
    }
}

/**
 * Adds an Access Restriction to the functionapp.
 *
 * Syntax:
 * ```
 * az functionapp config access-restriction add --priority
 *                                              [--action {Allow, Deny}]
 *                                              [--description]
 *                                              [--ids]
 *                                              [--ignore-missing-endpoint {false, true}]
 *                                              [--ip-address]
 *                                              [--name]
 *                                              [--resource-group]
 *                                              [--rule-name]
 *                                              [--scm-site {false, true}]
 *                                              [--slot]
 *                                              [--subnet]
 *                                              [--subscription]
 *                                              [--vnet-name]
 * ```
 *
 * @param {string} priority Priority of the access restriction rule.
 */
class az_functionapp_config_access_restriction_add_command_builder extends CommandBuilder<az_functionapp_config_access_restriction_add_command_result> {
    constructor(commandPath: string, priority: string) {
        super(commandPath);
        this.priority(priority)
    }

    /** Priority of the access restriction rule. */
    priority(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Allow or deny access. */
    action(value: 'Allow' | 'Deny'): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** Description of the access restriction rule. */
    description(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Create access restriction rule with checking if the subnet has Microsoft.Web service endpoint enabled. */
    ignoreMissingEndpoint(value: boolean): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    }

    /** IP address or CIDR range. */
    ipAddress(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the access restriction rule to add. */
    ruleName(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** True if access restrictions is added for scm site. */
    scmSite(value: boolean): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--scm-site", value.toString());
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Subnet name (requires vNet name) or subnet resource id. */
    subnet(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** VNet name. */
    vnetName(value: string): az_functionapp_config_access_restriction_add_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * Removes an Access Restriction from the functionapp.
 *
 * Syntax:
 * ```
 * az functionapp config access-restriction remove [--action {Allow, Deny}]
 *                                                 [--ids]
 *                                                 [--ip-address]
 *                                                 [--name]
 *                                                 [--resource-group]
 *                                                 [--rule-name]
 *                                                 [--scm-site {false, true}]
 *                                                 [--slot]
 *                                                 [--subnet]
 *                                                 [--subscription]
 *                                                 [--vnet-name]
 * ```
 */
class az_functionapp_config_access_restriction_remove_command_builder extends CommandBuilder<az_functionapp_config_access_restriction_remove_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Allow or deny access. */
    action(value: 'Allow' | 'Deny'): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** IP address or CIDR range. */
    ipAddress(value: string): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the access restriction to remove. */
    ruleName(value: string): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** True if access restriction should be removed from scm site. */
    scmSite(value: boolean): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--scm-site", value.toString());
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Subnet name (requires vNet name) or subnet resource id. */
    subnet(value: string): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** VNet name. */
    vnetName(value: string): az_functionapp_config_access_restriction_remove_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * Sets if SCM site is using the same restrictions as the main site.
 *
 * Syntax:
 * ```
 * az functionapp config access-restriction set --use-same-restrictions-for-scm-site {false, true}
 *                                              [--ids]
 *                                              [--name]
 *                                              [--resource-group]
 *                                              [--slot]
 *                                              [--subscription]
 * ```
 *
 * @param {boolean} useSameRestrictionsForScmSite Use same access restrictions for scm site.
 */
class az_functionapp_config_access_restriction_set_command_builder extends CommandBuilder<az_functionapp_config_access_restriction_set_command_result> {
    constructor(commandPath: string, useSameRestrictionsForScmSite: boolean) {
        super(commandPath);
        this.useSameRestrictionsForScmSite(useSameRestrictionsForScmSite)
    }

    /** Use same access restrictions for scm site. */
    useSameRestrictionsForScmSite(value: boolean): az_functionapp_config_access_restriction_set_command_builder {
        this.setFlag("--use-same-restrictions-for-scm-site", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_access_restriction_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_access_restriction_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_access_restriction_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_access_restriction_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_access_restriction_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show Access Restriction settings for functionapp.
 *
 * Syntax:
 * ```
 * az functionapp config access-restriction show [--ids]
 *                                               [--name]
 *                                               [--query-examples]
 *                                               [--resource-group]
 *                                               [--slot]
 *                                               [--subscription]
 * ```
 */
class az_functionapp_config_access_restriction_show_command_builder extends CommandBuilder<az_functionapp_config_access_restriction_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_access_restriction_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_access_restriction_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_config_access_restriction_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_access_restriction_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_access_restriction_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_access_restriction_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a function app's settings.
 *
 * Syntax:
 * ```
 * az functionapp config appsettings delete --setting-names
 *                                          [--ids]
 *                                          [--name]
 *                                          [--resource-group]
 *                                          [--slot]
 *                                          [--subscription]
 * ```
 *
 * @param {string} settingNames Space-separated app setting names.
 */
class az_functionapp_config_appsettings_delete_command_builder extends CommandBuilder<az_functionapp_config_appsettings_delete_command_result> {
    constructor(commandPath: string, settingNames: string) {
        super(commandPath);
        this.settingNames(settingNames)
    }

    /** Space-separated app setting names. */
    settingNames(value: string): az_functionapp_config_appsettings_delete_command_builder {
        this.setFlag("--setting-names", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_appsettings_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_appsettings_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_appsettings_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_appsettings_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_appsettings_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show settings for a function app.
 *
 * Syntax:
 * ```
 * az functionapp config appsettings list --name
 *                                        --resource-group
 *                                        [--query-examples]
 *                                        [--slot]
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_config_appsettings_list_command_builder extends CommandBuilder<az_functionapp_config_appsettings_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_appsettings_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_appsettings_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_config_appsettings_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_appsettings_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_appsettings_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update a function app's settings.
 *
 * Syntax:
 * ```
 * az functionapp config appsettings set [--ids]
 *                                       [--name]
 *                                       [--resource-group]
 *                                       [--settings]
 *                                       [--slot]
 *                                       [--slot-settings]
 *                                       [--subscription]
 * ```
 */
class az_functionapp_config_appsettings_set_command_builder extends CommandBuilder<az_functionapp_config_appsettings_set_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_appsettings_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_appsettings_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_appsettings_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated app settings in a format of `<name>=<value>`. */
    settings(value: string): az_functionapp_config_appsettings_set_command_builder {
        this.setFlag("--settings", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_appsettings_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Space-separated slot app settings in a format of `<name>=<value>`. */
    slotSettings(value: string): az_functionapp_config_appsettings_set_command_builder {
        this.setFlag("--slot-settings", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_appsettings_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a function app container's settings.
 *
 * Syntax:
 * ```
 * az functionapp config container delete [--ids]
 *                                        [--name]
 *                                        [--resource-group]
 *                                        [--slot]
 *                                        [--subscription]
 * ```
 */
class az_functionapp_config_container_delete_command_builder extends CommandBuilder<az_functionapp_config_container_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_container_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_container_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_container_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_container_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_container_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set a function app container's settings.
 *
 * Syntax:
 * ```
 * az functionapp config container set [--docker-custom-image-name]
 *                                     [--docker-registry-server-password]
 *                                     [--docker-registry-server-url]
 *                                     [--docker-registry-server-user]
 *                                     [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--slot]
 *                                     [--subscription]
 * ```
 */
class az_functionapp_config_container_set_command_builder extends CommandBuilder<az_functionapp_config_container_set_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The container custom image name and optionally the tag name. */
    dockerCustomImageName(value: string): az_functionapp_config_container_set_command_builder {
        this.setFlag("--docker-custom-image-name", value);
        return this;
    }

    /** The container registry server password. */
    dockerRegistryServerPassword(value: string): az_functionapp_config_container_set_command_builder {
        this.setFlag("--docker-registry-server-password", value);
        return this;
    }

    /** The container registry server url. */
    dockerRegistryServerUrl(value: string): az_functionapp_config_container_set_command_builder {
        this.setFlag("--docker-registry-server-url", value);
        return this;
    }

    /** The container registry server username. */
    dockerRegistryServerUser(value: string): az_functionapp_config_container_set_command_builder {
        this.setFlag("--docker-registry-server-user", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_container_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_container_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_container_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_container_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_container_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get details of a function app container's settings.
 *
 * Syntax:
 * ```
 * az functionapp config container show [--ids]
 *                                      [--name]
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--slot]
 *                                      [--subscription]
 * ```
 */
class az_functionapp_config_container_show_command_builder extends CommandBuilder<az_functionapp_config_container_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_container_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_container_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_config_container_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_container_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_container_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_container_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Bind a hostname to a function app.
 *
 * Syntax:
 * ```
 * az functionapp config hostname add [--hostname]
 *                                    [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--slot]
 *                                    [--subscription]
 * ```
 */
class az_functionapp_config_hostname_add_command_builder extends CommandBuilder<az_functionapp_config_hostname_add_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Hostname assigned to the site, such as custom domains. */
    hostname(value: string): az_functionapp_config_hostname_add_command_builder {
        this.setFlag("--hostname", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_hostname_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_hostname_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_hostname_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_hostname_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_hostname_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Unbind a hostname from a function app.
 *
 * Syntax:
 * ```
 * az functionapp config hostname delete [--hostname]
 *                                       [--ids]
 *                                       [--name]
 *                                       [--resource-group]
 *                                       [--slot]
 *                                       [--subscription]
 * ```
 */
class az_functionapp_config_hostname_delete_command_builder extends CommandBuilder<az_functionapp_config_hostname_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Hostname assigned to the site, such as custom domains. */
    hostname(value: string): az_functionapp_config_hostname_delete_command_builder {
        this.setFlag("--hostname", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_hostname_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_hostname_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_hostname_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_hostname_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_hostname_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the external-facing IP address for a function app.
 *
 * Syntax:
 * ```
 * az functionapp config hostname get-external-ip [--ids]
 *                                                [--name]
 *                                                [--resource-group]
 *                                                [--subscription]
 * ```
 */
class az_functionapp_config_hostname_get_external_ip_command_builder extends CommandBuilder<az_functionapp_config_hostname_get_external_ip_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_hostname_get_external_ip_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_hostname_get_external_ip_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_hostname_get_external_ip_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_hostname_get_external_ip_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all hostname bindings for a function app.
 *
 * Syntax:
 * ```
 * az functionapp config hostname list --resource-group
 *                                     --webapp-name
 *                                     [--query-examples]
 *                                     [--slot]
 *                                     [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} webappName Name of the web app. You can configure the default using `az configure --defaults web=<name>`.
 */
class az_functionapp_config_hostname_list_command_builder extends CommandBuilder<az_functionapp_config_hostname_list_command_result> {
    constructor(commandPath: string, resourceGroup: string, webappName: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
        this.webappName(webappName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_hostname_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    webappName(value: string): az_functionapp_config_hostname_list_command_builder {
        this.setFlag("--webapp-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_config_hostname_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_hostname_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_hostname_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Bind an SSL certificate to a function app.
 *
 * Syntax:
 * ```
 * az functionapp config ssl bind --certificate-thumbprint
 *                                --ssl-type {IP, SNI}
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--slot]
 *                                [--subscription]
 * ```
 *
 * @param {string} certificateThumbprint The ssl cert thumbprint.
 * @param {'IP' | 'SNI'} sslType The ssl cert type.
 */
class az_functionapp_config_ssl_bind_command_builder extends CommandBuilder<az_functionapp_config_ssl_bind_command_result> {
    constructor(commandPath: string, certificateThumbprint: string, sslType: 'IP' | 'SNI') {
        super(commandPath);
        this.certificateThumbprint(certificateThumbprint)
        this.sslType(sslType)
    }

    /** The ssl cert thumbprint. */
    certificateThumbprint(value: string): az_functionapp_config_ssl_bind_command_builder {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    }

    /** The ssl cert type. */
    sslType(value: 'IP' | 'SNI'): az_functionapp_config_ssl_bind_command_builder {
        this.setFlag("--ssl-type", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_ssl_bind_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_ssl_bind_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_ssl_bind_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_ssl_bind_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_ssl_bind_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a Managed Certificate for a hostname in a function app.
 *
 * Syntax:
 * ```
 * az functionapp config ssl create --hostname
 *                                  --name
 *                                  --resource-group
 *                                  [--slot]
 *                                  [--subscription]
 * ```
 *
 * @param {string} hostname The custom domain name.
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_config_ssl_create_command_builder extends CommandBuilder<az_functionapp_config_ssl_create_command_result> {
    constructor(commandPath: string, hostname: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.hostname(hostname)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The custom domain name. */
    hostname(value: string): az_functionapp_config_ssl_create_command_builder {
        this.setFlag("--hostname", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_ssl_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_ssl_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_ssl_create_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_ssl_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete an SSL certificate from a function app.
 *
 * Syntax:
 * ```
 * az functionapp config ssl delete --certificate-thumbprint
 *                                  --resource-group
 *                                  [--subscription]
 * ```
 *
 * @param {string} certificateThumbprint The ssl cert thumbprint.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_config_ssl_delete_command_builder extends CommandBuilder<az_functionapp_config_ssl_delete_command_result> {
    constructor(commandPath: string, certificateThumbprint: string, resourceGroup: string) {
        super(commandPath);
        this.certificateThumbprint(certificateThumbprint)
        this.resourceGroup(resourceGroup)
    }

    /** The ssl cert thumbprint. */
    certificateThumbprint(value: string): az_functionapp_config_ssl_delete_command_builder {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_ssl_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_ssl_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Import an SSL certificate to a function app from Key Vault.
 *
 * Syntax:
 * ```
 * az functionapp config ssl import --key-vault
 *                                  --key-vault-certificate-name
 *                                  [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} keyVault The name or resource ID of the Key Vault.
 * @param {string} keyVaultCertificateName The name of the certificate in Key Vault.
 */
class az_functionapp_config_ssl_import_command_builder extends CommandBuilder<az_functionapp_config_ssl_import_command_result> {
    constructor(commandPath: string, keyVault: string, keyVaultCertificateName: string) {
        super(commandPath);
        this.keyVault(keyVault)
        this.keyVaultCertificateName(keyVaultCertificateName)
    }

    /** The name or resource ID of the Key Vault. */
    keyVault(value: string): az_functionapp_config_ssl_import_command_builder {
        this.setFlag("--key-vault", value);
        return this;
    }

    /** The name of the certificate in Key Vault. */
    keyVaultCertificateName(value: string): az_functionapp_config_ssl_import_command_builder {
        this.setFlag("--key-vault-certificate-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_ssl_import_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_ssl_import_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_ssl_import_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_ssl_import_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List SSL certificates for a function app.
 *
 * Syntax:
 * ```
 * az functionapp config ssl list --resource-group
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_config_ssl_list_command_builder extends CommandBuilder<az_functionapp_config_ssl_list_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_ssl_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_config_ssl_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_ssl_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Unbind an SSL certificate from a function app.
 *
 * Syntax:
 * ```
 * az functionapp config ssl unbind --certificate-thumbprint
 *                                  [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--slot]
 *                                  [--subscription]
 * ```
 *
 * @param {string} certificateThumbprint The ssl cert thumbprint.
 */
class az_functionapp_config_ssl_unbind_command_builder extends CommandBuilder<az_functionapp_config_ssl_unbind_command_result> {
    constructor(commandPath: string, certificateThumbprint: string) {
        super(commandPath);
        this.certificateThumbprint(certificateThumbprint)
    }

    /** The ssl cert thumbprint. */
    certificateThumbprint(value: string): az_functionapp_config_ssl_unbind_command_builder {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_ssl_unbind_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_ssl_unbind_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_ssl_unbind_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_ssl_unbind_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_ssl_unbind_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Upload an SSL certificate to a function app.
 *
 * Syntax:
 * ```
 * az functionapp config ssl upload --certificate-file
 *                                  --certificate-password
 *                                  [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--slot]
 *                                  [--subscription]
 * ```
 *
 * @param {string} certificateFile The filepath for the .pfx file.
 * @param {string} certificatePassword The ssl cert password.
 */
class az_functionapp_config_ssl_upload_command_builder extends CommandBuilder<az_functionapp_config_ssl_upload_command_result> {
    constructor(commandPath: string, certificateFile: string, certificatePassword: string) {
        super(commandPath);
        this.certificateFile(certificateFile)
        this.certificatePassword(certificatePassword)
    }

    /** The filepath for the .pfx file. */
    certificateFile(value: string): az_functionapp_config_ssl_upload_command_builder {
        this.setFlag("--certificate-file", value);
        return this;
    }

    /** The ssl cert password. */
    certificatePassword(value: string): az_functionapp_config_ssl_upload_command_builder {
        this.setFlag("--certificate-password", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_ssl_upload_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_ssl_upload_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_ssl_upload_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_ssl_upload_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_ssl_upload_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set the function app's configuration.
 *
 * Syntax:
 * ```
 * az functionapp config set [--always-on {false, true}]
 *                           [--auto-heal-enabled {false, true}]
 *                           [--ftps-state {AllAllowed, Disabled, FtpsOnly}]
 *                           [--generic-configurations]
 *                           [--http20-enabled {false, true}]
 *                           [--ids]
 *                           [--java-container]
 *                           [--java-container-version]
 *                           [--java-version]
 *                           [--linux-fx-version]
 *                           [--min-tls-version]
 *                           [--name]
 *                           [--net-framework-version]
 *                           [--number-of-workers]
 *                           [--php-version]
 *                           [--prewarmed-instance-count]
 *                           [--python-version]
 *                           [--remote-debugging-enabled {false, true}]
 *                           [--resource-group]
 *                           [--slot]
 *                           [--startup-file]
 *                           [--subscription]
 *                           [--use-32bit-worker-process {false, true}]
 *                           [--web-sockets-enabled {false, true}]
 * ```
 */
class az_functionapp_config_set_command_builder extends CommandBuilder<az_functionapp_config_set_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Ensure web app gets loaded all the time, rather unloaded after been idle. Recommended when you have continuous web jobs running. */
    alwaysOn(value: boolean): az_functionapp_config_set_command_builder {
        this.setFlag("--always-on", value.toString());
        return this;
    }

    /** Enable or disable auto heal. */
    autoHealEnabled(value: boolean): az_functionapp_config_set_command_builder {
        this.setFlag("--auto-heal-enabled", value.toString());
        return this;
    }

    /** Set the Ftps state value for an app. Default value is 'AllAllowed'. */
    ftpsState(value: 'AllAllowed' | 'Disabled' | 'FtpsOnly'): az_functionapp_config_set_command_builder {
        this.setFlag("--ftps-state", value);
        return this;
    }

    /** Provide site configuration list in a format of either `key=value` pair or `@<json_file>`. */
    genericConfigurations(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--generic-configurations", value);
        return this;
    }

    /** Configures a web site to allow clients to connect over http2.0. */
    http20Enabled(value: boolean): az_functionapp_config_set_command_builder {
        this.setFlag("--http20-enabled", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The java container, e.g., Tomcat, Jetty. */
    javaContainer(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--java-container", value);
        return this;
    }

    /** The version of the java container, e.g., '8.0.23' for Tomcat. */
    javaContainerVersion(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--java-container-version", value);
        return this;
    }

    /** The version used to run your web app if using Java, e.g., '1.7' for Java 7, '1.8' for Java 8. */
    javaVersion(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--java-version", value);
        return this;
    }

    /** The runtime stack used for your linux-based webapp, e.g., "RUBY|2.5.5", "NODE|10.14", "PHP|7.2", "DOTNETCORE|2.1". See <a href="https://aka.ms/linux-stacks">https://aka.ms/linux-stacks</a> for more info. */
    linuxFxVersion(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--linux-fx-version", value);
        return this;
    }

    /** The minimum version of TLS required for SSL requests, e.g., '1.0', '1.1', '1.2'. */
    minTlsVersion(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--min-tls-version", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The version used to run your web app if using .NET Framework, e.g., 'v4.0' for .NET 4.6 and 'v3.0' for .NET 3.5. */
    netFrameworkVersion(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--net-framework-version", value);
        return this;
    }

    /** The number of workers to be allocated. */
    numberOfWorkers(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--number-of-workers", value);
        return this;
    }

    /** The version used to run your web app if using PHP, e.g., 5.5, 5.6, 7.0. */
    phpVersion(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--php-version", value);
        return this;
    }

    /** Number of pre-warmed instances a function app has. */
    prewarmedInstanceCount(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--prewarmed-instance-count", value);
        return this;
    }

    /** The version used to run your web app if using Python, e.g., 2.7, 3.4. */
    pythonVersion(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--python-version", value);
        return this;
    }

    /** Enable or disable remote debugging. */
    remoteDebuggingEnabled(value: boolean): az_functionapp_config_set_command_builder {
        this.setFlag("--remote-debugging-enabled", value.toString());
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** The startup file for linux hosted web apps, e.g. 'process.json' for Node.js web. */
    startupFile(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--startup-file", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Use 32 bits worker process or not. */
    use32BitWorkerProcess(value: boolean): az_functionapp_config_set_command_builder {
        this.setFlag("--use-32bit-worker-process", value.toString());
        return this;
    }

    /** Enable or disable web sockets. */
    webSocketsEnabled(value: boolean): az_functionapp_config_set_command_builder {
        this.setFlag("--web-sockets-enabled", value.toString());
        return this;
    }
}

/**
 * Get the details of a function app's configuration.
 *
 * Syntax:
 * ```
 * az functionapp config show [--ids]
 *                            [--name]
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--slot]
 *                            [--subscription]
 * ```
 */
class az_functionapp_config_show_command_builder extends CommandBuilder<az_functionapp_config_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_config_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_config_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_config_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_config_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_config_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_config_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add allowed origins.
 *
 * Syntax:
 * ```
 * az functionapp cors add --allowed-origins
 *                         [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--slot]
 *                         [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list.
 */
class az_functionapp_cors_add_command_builder extends CommandBuilder<az_functionapp_cors_add_command_result> {
    constructor(commandPath: string, allowedOrigins: string) {
        super(commandPath);
        this.allowedOrigins(allowedOrigins)
    }

    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list. */
    allowedOrigins(value: string): az_functionapp_cors_add_command_builder {
        this.setFlag("--allowed-origins", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_cors_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_cors_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_cors_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_cors_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_cors_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove allowed origins.
 *
 * Syntax:
 * ```
 * az functionapp cors remove --allowed-origins
 *                            [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--slot]
 *                            [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list.
 */
class az_functionapp_cors_remove_command_builder extends CommandBuilder<az_functionapp_cors_remove_command_result> {
    constructor(commandPath: string, allowedOrigins: string) {
        super(commandPath);
        this.allowedOrigins(allowedOrigins)
    }

    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list. */
    allowedOrigins(value: string): az_functionapp_cors_remove_command_builder {
        this.setFlag("--allowed-origins", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_cors_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_cors_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_cors_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_cors_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_cors_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show allowed origins.
 *
 * Syntax:
 * ```
 * az functionapp cors show [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--slot]
 *                          [--subscription]
 * ```
 */
class az_functionapp_cors_show_command_builder extends CommandBuilder<az_functionapp_cors_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_cors_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_cors_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_cors_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_cors_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_cors_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_cors_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Configure continuous deployment via containers.
 *
 * Syntax:
 * ```
 * az functionapp deployment container config --enable-cd {false, true}
 *                                            [--ids]
 *                                            [--name]
 *                                            [--resource-group]
 *                                            [--slot]
 *                                            [--subscription]
 * ```
 *
 * @param {boolean} enableCd Enable/disable continuous deployment.
 */
class az_functionapp_deployment_container_config_command_builder extends CommandBuilder<az_functionapp_deployment_container_config_command_result> {
    constructor(commandPath: string, enableCd: boolean) {
        super(commandPath);
        this.enableCd(enableCd)
    }

    /** Enable/disable continuous deployment. */
    enableCd(value: boolean): az_functionapp_deployment_container_config_command_builder {
        this.setFlag("--enable-cd", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_container_config_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_container_config_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_container_config_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_container_config_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_container_config_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the URL which can be used to configure webhooks for continuous deployment.
 *
 * Syntax:
 * ```
 * az functionapp deployment container show-cd-url [--ids]
 *                                                 [--name]
 *                                                 [--resource-group]
 *                                                 [--slot]
 *                                                 [--subscription]
 * ```
 */
class az_functionapp_deployment_container_show_cd_url_command_builder extends CommandBuilder<az_functionapp_deployment_container_show_cd_url_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_container_show_cd_url_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Configure deployment slot auto swap.
 *
 * Syntax:
 * ```
 * az functionapp deployment slot auto-swap --slot
 *                                          [--auto-swap-slot]
 *                                          [--disable]
 *                                          [--ids]
 *                                          [--name]
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 *
 * @param {string} slot The name of the slot.
 */
class az_functionapp_deployment_slot_auto_swap_command_builder extends CommandBuilder<az_functionapp_deployment_slot_auto_swap_command_result> {
    constructor(commandPath: string, slot: string) {
        super(commandPath);
        this.slot(slot)
    }

    /** The name of the slot. */
    slot(value: string): az_functionapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Target slot to auto swap. */
    autoSwapSlot(value: string): az_functionapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--auto-swap-slot", value);
        return this;
    }

    /** Disable auto swap. */
    disable(value: string): az_functionapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--disable", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_slot_auto_swap_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a deployment slot.
 *
 * Syntax:
 * ```
 * az functionapp deployment slot create --name
 *                                       --resource-group
 *                                       --slot
 *                                       [--configuration-source]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} slot The name of the slot.
 */
class az_functionapp_deployment_slot_create_command_builder extends CommandBuilder<az_functionapp_deployment_slot_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string, slot: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.slot(slot)
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_slot_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_slot_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. */
    slot(value: string): az_functionapp_deployment_slot_create_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Source slot to clone configurations from. Use function app's name to refer to the production slot. */
    configurationSource(value: string): az_functionapp_deployment_slot_create_command_builder {
        this.setFlag("--configuration-source", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_slot_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a deployment slot.
 *
 * Syntax:
 * ```
 * az functionapp deployment slot delete --slot
 *                                       [--ids]
 *                                       [--name]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 *
 * @param {string} slot The name of the slot.
 */
class az_functionapp_deployment_slot_delete_command_builder extends CommandBuilder<az_functionapp_deployment_slot_delete_command_result> {
    constructor(commandPath: string, slot: string) {
        super(commandPath);
        this.slot(slot)
    }

    /** The name of the slot. */
    slot(value: string): az_functionapp_deployment_slot_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_slot_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_slot_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_slot_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_slot_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all deployment slots.
 *
 * Syntax:
 * ```
 * az functionapp deployment slot list [--ids]
 *                                     [--name]
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
class az_functionapp_deployment_slot_list_command_builder extends CommandBuilder<az_functionapp_deployment_slot_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_slot_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_slot_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_deployment_slot_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_slot_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_slot_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Change deployment slots for a function app.
 *
 * Syntax:
 * ```
 * az functionapp deployment slot swap --slot
 *                                     [--action {preview, reset, swap}]
 *                                     [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--subscription]
 *                                     [--target-slot]
 * ```
 *
 * @param {string} slot The name of the slot.
 */
class az_functionapp_deployment_slot_swap_command_builder extends CommandBuilder<az_functionapp_deployment_slot_swap_command_result> {
    constructor(commandPath: string, slot: string) {
        super(commandPath);
        this.slot(slot)
    }

    /** The name of the slot. */
    slot(value: string): az_functionapp_deployment_slot_swap_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Swap types. use 'preview' to apply target slot's settings on the source slot first; use 'swap' to complete it; use 'reset' to reset the swap. */
    action(value: 'preview' | 'reset' | 'swap'): az_functionapp_deployment_slot_swap_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_slot_swap_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_slot_swap_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_slot_swap_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_slot_swap_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Target slot to swap, default to 'production'. */
    targetSlot(value: string): az_functionapp_deployment_slot_swap_command_builder {
        this.setFlag("--target-slot", value);
        return this;
    }
}

/**
 * Manage deployment from git or Mercurial repositories.
 *
 * Syntax:
 * ```
 * az functionapp deployment source config --repo-url
 *                                         [--app-working-dir]
 *                                         [--branch]
 *                                         [--cd-account-create]
 *                                         [--cd-app-type {AspNet, AspNetCore, NodeJS, PHP, Python}]
 *                                         [--cd-project-url]
 *                                         [--git-token]
 *                                         [--ids]
 *                                         [--manual-integration]
 *                                         [--name]
 *                                         [--nodejs-task-runner {Grunt, Gulp, None}]
 *                                         [--private-repo-password]
 *                                         [--private-repo-username]
 *                                         [--python-framework {Bottle, Django, Flask}]
 *                                         [--python-version {Python 2.7.12 x64, Python 2.7.12 x86, Python 2.7.13 x64, Python 2.7.13 x86, Python 3.5.3 x64, Python 3.5.3 x86, Python 3.6.0 x64, Python 3.6.0 x86, Python 3.6.1 x86, Python 3.6.2 x64}]
 *                                         [--repository-type {externalgit, git, github, localgit, mercurial, vsts}]
 *                                         [--resource-group]
 *                                         [--slot]
 *                                         [--slot-swap]
 *                                         [--subscription]
 *                                         [--test]
 * ```
 *
 * @param {string} repoUrl Repository url to pull the latest source from, e.g. <a href="https://github.com/foo/foo-web">https://github.com/foo/foo-web</a>.
 */
class az_functionapp_deployment_source_config_command_builder extends CommandBuilder<az_functionapp_deployment_source_config_command_result> {
    constructor(commandPath: string, repoUrl: string) {
        super(commandPath);
        this.repoUrl(repoUrl)
    }

    /** Repository url to pull the latest source from, e.g. <a href="https://github.com/foo/foo-web">https://github.com/foo/foo-web</a>. */
    repoUrl(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--repo-url", value);
        return this;
    }

    /** Working directory of the application. Default will be root of the repo. */
    appWorkingDir(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--app-working-dir", value);
        return this;
    }

    /** The branch name of the repository. */
    branch(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--branch", value);
        return this;
    }

    /** To create a new Visual Studio Team Services (VSTS) account if it doesn't exist already. */
    cdAccountCreate(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--cd-account-create", value);
        return this;
    }

    /** Web application framework you used to develop your app. Default is AspNet. */
    cdAppType(value: 'AspNet' | 'AspNetCore' | 'NodeJS' | 'PHP' | 'Python'): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--cd-app-type", value);
        return this;
    }

    /** URL of the Visual Studio Team Services (VSTS) project to use for continuous delivery. URL should be in format `https://<accountname>.visualstudio.com/<projectname>`. */
    cdProjectUrl(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--cd-project-url", value);
        return this;
    }

    /** Git access token required for auto sync. */
    gitToken(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--git-token", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Disable automatic sync between source control and web. */
    manualIntegration(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--manual-integration", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Task runner for nodejs. Default is None. */
    nodejsTaskRunner(value: 'Grunt' | 'Gulp' | 'None'): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--nodejs-task-runner", value);
        return this;
    }

    /** Password for the private repository. */
    privateRepoPassword(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--private-repo-password", value);
        return this;
    }

    /** Username for the private repository. */
    privateRepoUsername(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--private-repo-username", value);
        return this;
    }

    /** Framework used for Python application. Default is Django. */
    pythonFramework(value: 'Bottle' | 'Django' | 'Flask'): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--python-framework", value);
        return this;
    }

    /** Python version used for application. Default is Python 3.5.3 x86. */
    pythonVersion(value: 'Python 2.7.12 x64' | 'Python 2.7.12 x86' | 'Python 2.7.13 x64' | 'Python 2.7.13 x86' | 'Python 3.5.3 x64' | 'Python 3.5.3 x86' | 'Python 3.6.0 x64' | 'Python 3.6.0 x86' | 'Python 3.6.1 x86' | 'Python 3.6.2 x64'): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--python-version", value);
        return this;
    }

    /** Repository type. */
    repositoryType(value: 'externalgit' | 'git' | 'github' | 'localgit' | 'mercurial' | 'vsts'): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--repository-type", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name of the slot to be used for deployment and later promote to production. If slot is not available, it will be created. Default: Not configured. */
    slotSwap(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--slot-swap", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the web app to be used for load testing. If web app is not available, it will be created. Default: Disable. */
    test(value: string): az_functionapp_deployment_source_config_command_builder {
        this.setFlag("--test", value);
        return this;
    }
}

/**
 * Get a URL for a git repository endpoint to clone and push to for function app deployment.
 *
 * Syntax:
 * ```
 * az functionapp deployment source config-local-git [--ids]
 *                                                   [--name]
 *                                                   [--resource-group]
 *                                                   [--slot]
 *                                                   [--subscription]
 * ```
 */
class az_functionapp_deployment_source_config_local_git_command_builder extends CommandBuilder<az_functionapp_deployment_source_config_local_git_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_source_config_local_git_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Perform deployment using the kudu zip push deployment for a function app.
 *
 * Syntax:
 * ```
 * az functionapp deployment source config-zip --src
 *                                             [--build-remote {false, true}]
 *                                             [--ids]
 *                                             [--name]
 *                                             [--resource-group]
 *                                             [--slot]
 *                                             [--subscription]
 *                                             [--timeout]
 * ```
 *
 * @param {string} src A zip file path for deployment.
 */
class az_functionapp_deployment_source_config_zip_command_builder extends CommandBuilder<az_functionapp_deployment_source_config_zip_command_result> {
    constructor(commandPath: string, src: string) {
        super(commandPath);
        this.src(src)
    }

    /** A zip file path for deployment. */
    src(value: string): az_functionapp_deployment_source_config_zip_command_builder {
        this.setFlag("--src", value);
        return this;
    }

    /** Enable remote build during deployment. */
    buildRemote(value: boolean): az_functionapp_deployment_source_config_zip_command_builder {
        this.setFlag("--build-remote", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_source_config_zip_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_source_config_zip_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_source_config_zip_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_source_config_zip_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_source_config_zip_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Configurable timeout in seconds for checking the status of deployment. */
    timeout(value: string): az_functionapp_deployment_source_config_zip_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }
}

/**
 * Delete a source control deployment configuration.
 *
 * Syntax:
 * ```
 * az functionapp deployment source delete [--ids]
 *                                         [--name]
 *                                         [--resource-group]
 *                                         [--slot]
 *                                         [--subscription]
 * ```
 */
class az_functionapp_deployment_source_delete_command_builder extends CommandBuilder<az_functionapp_deployment_source_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_source_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_source_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_source_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_source_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_source_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a source control deployment configuration.
 *
 * Syntax:
 * ```
 * az functionapp deployment source show [--ids]
 *                                       [--name]
 *                                       [--query-examples]
 *                                       [--resource-group]
 *                                       [--slot]
 *                                       [--subscription]
 * ```
 */
class az_functionapp_deployment_source_show_command_builder extends CommandBuilder<az_functionapp_deployment_source_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_source_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_source_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_deployment_source_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_source_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_source_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_source_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Synchronize from the repository. Only needed under manual integration mode.
 *
 * Syntax:
 * ```
 * az functionapp deployment source sync [--ids]
 *                                       [--name]
 *                                       [--resource-group]
 *                                       [--slot]
 *                                       [--subscription]
 * ```
 */
class az_functionapp_deployment_source_sync_command_builder extends CommandBuilder<az_functionapp_deployment_source_sync_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_source_sync_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_source_sync_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_source_sync_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_source_sync_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_source_sync_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update source control token cached in Azure app service.
 *
 * Syntax:
 * ```
 * az functionapp deployment source update-token [--git-token]
 *                                               [--subscription]
 * ```
 */
class az_functionapp_deployment_source_update_token_command_builder extends CommandBuilder<az_functionapp_deployment_source_update_token_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Git access token required for auto sync. */
    gitToken(value: string): az_functionapp_deployment_source_update_token_command_builder {
        this.setFlag("--git-token", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_source_update_token_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update deployment credentials.
 *
 * Syntax:
 * ```
 * az functionapp deployment user set --user-name
 *                                    [--password]
 *                                    [--subscription]
 * ```
 *
 * @param {string} userName User name.
 */
class az_functionapp_deployment_user_set_command_builder extends CommandBuilder<az_functionapp_deployment_user_set_command_result> {
    constructor(commandPath: string, userName: string) {
        super(commandPath);
        this.userName(userName)
    }

    /** User name. */
    userName(value: string): az_functionapp_deployment_user_set_command_builder {
        this.setFlag("--user-name", value);
        return this;
    }

    /** Password, will prompt if not specified. */
    password(value: string): az_functionapp_deployment_user_set_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_user_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets publishing user.
 *
 * Syntax:
 * ```
 * az functionapp deployment user show [--query-examples]
 *                                     [--subscription]
 * ```
 */
class az_functionapp_deployment_user_show_command_builder extends CommandBuilder<az_functionapp_deployment_user_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_deployment_user_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_user_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details for available function app publishing credentials.
 *
 * Syntax:
 * ```
 * az functionapp deployment list-publishing-credentials [--ids]
 *                                                       [--name]
 *                                                       [--resource-group]
 *                                                       [--slot]
 *                                                       [--subscription]
 * ```
 */
class az_functionapp_deployment_list_publishing_credentials_command_builder extends CommandBuilder<az_functionapp_deployment_list_publishing_credentials_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_list_publishing_credentials_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details for available function app deployment profiles.
 *
 * Syntax:
 * ```
 * az functionapp deployment list-publishing-profiles [--ids]
 *                                                    [--name]
 *                                                    [--resource-group]
 *                                                    [--slot]
 *                                                    [--subscription]
 *                                                    [--xml]
 * ```
 */
class az_functionapp_deployment_list_publishing_profiles_command_builder extends CommandBuilder<az_functionapp_deployment_list_publishing_profiles_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Retrieves the publishing profile details in XML format. */
    xml(value: string): az_functionapp_deployment_list_publishing_profiles_command_builder {
        this.setFlag("--xml", value);
        return this;
    }
}

/**
 * Create an Azure DevOps pipeline for a function app.
 *
 * Syntax:
 * ```
 * az functionapp devops-pipeline create [--allow-force-push {false, true}]
 *                                       [--functionapp-name]
 *                                       [--github-pat]
 *                                       [--github-repository]
 *                                       [--organization-name]
 *                                       [--overwrite-yaml {false, true}]
 *                                       [--project-name]
 *                                       [--repository-name]
 *                                       [--subscription]
 * ```
 */
class az_functionapp_devops_pipeline_create_command_builder extends CommandBuilder<az_functionapp_devops_pipeline_create_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** If Azure DevOps repository is not clean, should it overwrite remote content? */
    allowForcePush(value: boolean): az_functionapp_devops_pipeline_create_command_builder {
        this.setFlag("--allow-force-push", value.toString());
        return this;
    }

    /** Name of the Azure function app that you want to use. */
    functionappName(value: string): az_functionapp_devops_pipeline_create_command_builder {
        this.setFlag("--functionapp-name", value);
        return this;
    }

    /** Github personal access token for creating pipeline from Github repository. */
    githubPat(value: string): az_functionapp_devops_pipeline_create_command_builder {
        this.setFlag("--github-pat", value);
        return this;
    }

    /** Fullname of your Github repository (e.g. Azure/azure-cli). */
    githubRepository(value: string): az_functionapp_devops_pipeline_create_command_builder {
        this.setFlag("--github-repository", value);
        return this;
    }

    /** Name of the Azure DevOps organization that you want to use. */
    organizationName(value: string): az_functionapp_devops_pipeline_create_command_builder {
        this.setFlag("--organization-name", value);
        return this;
    }

    /** If you have an existing yaml, should it be overwritten? */
    overwriteYaml(value: boolean): az_functionapp_devops_pipeline_create_command_builder {
        this.setFlag("--overwrite-yaml", value.toString());
        return this;
    }

    /** Name of the Azure DevOps project that you want to use. */
    projectName(value: string): az_functionapp_devops_pipeline_create_command_builder {
        this.setFlag("--project-name", value);
        return this;
    }

    /** Name of the Azure DevOps repository that you want to use. */
    repositoryName(value: string): az_functionapp_devops_pipeline_create_command_builder {
        this.setFlag("--repository-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_devops_pipeline_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a function key.
 *
 * Syntax:
 * ```
 * az functionapp function keys delete --key-name
 *                                     --name
 *                                     --resource-group
 *                                     [--function-name]
 *                                     [--slot]
 *                                     [--subscription]
 * ```
 *
 * @param {string} keyName Name of the key to set.
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_function_keys_delete_command_builder extends CommandBuilder<az_functionapp_function_keys_delete_command_result> {
    constructor(commandPath: string, keyName: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.keyName(keyName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the key to set. */
    keyName(value: string): az_functionapp_function_keys_delete_command_builder {
        this.setFlag("--key-name", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_function_keys_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_function_keys_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Function. */
    functionName(value: string): az_functionapp_function_keys_delete_command_builder {
        this.setFlag("--function-name", value);
        return this;
    }

    /** The name of the slot. Defaults to the productions slot if not specified. */
    slot(value: string): az_functionapp_function_keys_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_function_keys_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all function keys.
 *
 * Syntax:
 * ```
 * az functionapp function keys list --function-name
 *                                   --name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--slot]
 *                                   [--subscription]
 * ```
 *
 * @param {string} functionName Name of the Function.
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_function_keys_list_command_builder extends CommandBuilder<az_functionapp_function_keys_list_command_result> {
    constructor(commandPath: string, functionName: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.functionName(functionName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Function. */
    functionName(value: string): az_functionapp_function_keys_list_command_builder {
        this.setFlag("--function-name", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_function_keys_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_function_keys_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_function_keys_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Defaults to the productions slot if not specified. */
    slot(value: string): az_functionapp_function_keys_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_function_keys_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create or update a function key.
 *
 * Syntax:
 * ```
 * az functionapp function keys set --function-name
 *                                  --key-name
 *                                  --name
 *                                  --resource-group
 *                                  [--key-value]
 *                                  [--slot]
 *                                  [--subscription]
 * ```
 *
 * @param {string} functionName Name of the Function.
 * @param {string} keyName Name of the key to set.
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_function_keys_set_command_builder extends CommandBuilder<az_functionapp_function_keys_set_command_result> {
    constructor(commandPath: string, functionName: string, keyName: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.functionName(functionName)
        this.keyName(keyName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Function. */
    functionName(value: string): az_functionapp_function_keys_set_command_builder {
        this.setFlag("--function-name", value);
        return this;
    }

    /** Name of the key to set. */
    keyName(value: string): az_functionapp_function_keys_set_command_builder {
        this.setFlag("--key-name", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_function_keys_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_function_keys_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Value of the new key. If not provided, a value will be generated. */
    keyValue(value: string): az_functionapp_function_keys_set_command_builder {
        this.setFlag("--key-value", value);
        return this;
    }

    /** The name of the slot. Defaults to the productions slot if not specified. */
    slot(value: string): az_functionapp_function_keys_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_function_keys_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a function.
 *
 * Syntax:
 * ```
 * az functionapp function delete --function-name
 *                                --name
 *                                --resource-group
 *                                [--subscription]
 * ```
 *
 * @param {string} functionName Name of the Function.
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_function_delete_command_builder extends CommandBuilder<az_functionapp_function_delete_command_result> {
    constructor(commandPath: string, functionName: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.functionName(functionName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Function. */
    functionName(value: string): az_functionapp_function_delete_command_builder {
        this.setFlag("--function-name", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_function_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_function_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_function_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a function.
 *
 * Syntax:
 * ```
 * az functionapp function show --function-name
 *                              --name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} functionName Name of the Function.
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_function_show_command_builder extends CommandBuilder<az_functionapp_function_show_command_result> {
    constructor(commandPath: string, functionName: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.functionName(functionName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Function. */
    functionName(value: string): az_functionapp_function_show_command_builder {
        this.setFlag("--function-name", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_function_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_function_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_function_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_function_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add a hybrid-connection to a functionapp.
 *
 * Syntax:
 * ```
 * az functionapp hybrid-connection add --hybrid-connection
 *                                      --name
 *                                      --namespace
 *                                      --resource-group
 *                                      [--slot]
 *                                      [--subscription]
 * ```
 *
 * @param {string} hybridConnection Hybrid connection name.
 * @param {string} name Name of the function app.
 * @param {string} namespace Hybrid connection namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_hybrid_connection_add_command_builder extends CommandBuilder<az_functionapp_hybrid_connection_add_command_result> {
    constructor(commandPath: string, hybridConnection: string, name: string, namespace: string, resourceGroup: string) {
        super(commandPath);
        this.hybridConnection(hybridConnection)
        this.name(name)
        this.namespace(namespace)
        this.resourceGroup(resourceGroup)
    }

    /** Hybrid connection name. */
    hybridConnection(value: string): az_functionapp_hybrid_connection_add_command_builder {
        this.setFlag("--hybrid-connection", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_hybrid_connection_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Hybrid connection namespace. */
    namespace(value: string): az_functionapp_hybrid_connection_add_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_hybrid_connection_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_hybrid_connection_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_hybrid_connection_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the hybrid-connections on a functionapp.
 *
 * Syntax:
 * ```
 * az functionapp hybrid-connection list --name
 *                                       --resource-group
 *                                       [--query-examples]
 *                                       [--slot]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_hybrid_connection_list_command_builder extends CommandBuilder<az_functionapp_hybrid_connection_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_hybrid_connection_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_hybrid_connection_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_hybrid_connection_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_hybrid_connection_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_hybrid_connection_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove a hybrid-connection from a functionapp.
 *
 * Syntax:
 * ```
 * az functionapp hybrid-connection remove --hybrid-connection
 *                                         --name
 *                                         --namespace
 *                                         --resource-group
 *                                         [--slot]
 *                                         [--subscription]
 * ```
 *
 * @param {string} hybridConnection Hybrid connection name.
 * @param {string} name Name of the function app.
 * @param {string} namespace Hybrid connection namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_hybrid_connection_remove_command_builder extends CommandBuilder<az_functionapp_hybrid_connection_remove_command_result> {
    constructor(commandPath: string, hybridConnection: string, name: string, namespace: string, resourceGroup: string) {
        super(commandPath);
        this.hybridConnection(hybridConnection)
        this.name(name)
        this.namespace(namespace)
        this.resourceGroup(resourceGroup)
    }

    /** Hybrid connection name. */
    hybridConnection(value: string): az_functionapp_hybrid_connection_remove_command_builder {
        this.setFlag("--hybrid-connection", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_hybrid_connection_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Hybrid connection namespace. */
    namespace(value: string): az_functionapp_hybrid_connection_remove_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_hybrid_connection_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_hybrid_connection_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_hybrid_connection_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Assign managed service identity to the web app.
 *
 * Syntax:
 * ```
 * az functionapp identity assign [--identities]
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--role]
 *                                [--scope]
 *                                [--slot]
 *                                [--subscription]
 * ```
 */
class az_functionapp_identity_assign_command_builder extends CommandBuilder<az_functionapp_identity_assign_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_functionapp_identity_assign_command_builder {
        this.setFlag("--identities", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_identity_assign_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_identity_assign_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_identity_assign_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Role name or id the managed identity will be assigned. */
    role(value: string): az_functionapp_identity_assign_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** The scope the managed identity has access to. */
    scope(value: string): az_functionapp_identity_assign_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_identity_assign_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_identity_assign_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Disable web app's managed service identity.
 *
 * Syntax:
 * ```
 * az functionapp identity remove [--identities]
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--slot]
 *                                [--subscription]
 * ```
 */
class az_functionapp_identity_remove_command_builder extends CommandBuilder<az_functionapp_identity_remove_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    identities(value: string): az_functionapp_identity_remove_command_builder {
        this.setFlag("--identities", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_identity_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_identity_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_identity_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_identity_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_identity_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Display web app's managed service identity.
 *
 * Syntax:
 * ```
 * az functionapp identity show [--ids]
 *                              [--name]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--slot]
 *                              [--subscription]
 * ```
 */
class az_functionapp_identity_show_command_builder extends CommandBuilder<az_functionapp_identity_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_identity_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_identity_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_identity_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_identity_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_identity_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_identity_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a function app key.
 *
 * Syntax:
 * ```
 * az functionapp keys delete --key-name
 *                            --key-type {functionKeys, masterKey, systemKey}
 *                            --name
 *                            --resource-group
 *                            [--slot]
 *                            [--subscription]
 * ```
 *
 * @param {string} keyName Name of the key to set.
 * @param {'functionKeys' | 'masterKey' | 'systemKey'} keyType Type of key.
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_keys_delete_command_builder extends CommandBuilder<az_functionapp_keys_delete_command_result> {
    constructor(commandPath: string, keyName: string, keyType: 'functionKeys' | 'masterKey' | 'systemKey', name: string, resourceGroup: string) {
        super(commandPath);
        this.keyName(keyName)
        this.keyType(keyType)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the key to set. */
    keyName(value: string): az_functionapp_keys_delete_command_builder {
        this.setFlag("--key-name", value);
        return this;
    }

    /** Type of key. */
    keyType(value: 'functionKeys' | 'masterKey' | 'systemKey'): az_functionapp_keys_delete_command_builder {
        this.setFlag("--key-type", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_keys_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_keys_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Defaults to the productions slot if not specified. */
    slot(value: string): az_functionapp_keys_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_keys_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all function app keys.
 *
 * Syntax:
 * ```
 * az functionapp keys list --name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--slot]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_keys_list_command_builder extends CommandBuilder<az_functionapp_keys_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_keys_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_keys_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_keys_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Defaults to the productions slot if not specified. */
    slot(value: string): az_functionapp_keys_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_keys_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create or update a function app key.
 *
 * Syntax:
 * ```
 * az functionapp keys set --key-name
 *                         --key-type {functionKeys, masterKey, systemKey}
 *                         --name
 *                         --resource-group
 *                         [--key-value]
 *                         [--slot]
 *                         [--subscription]
 * ```
 *
 * @param {string} keyName Name of the key to set.
 * @param {'functionKeys' | 'masterKey' | 'systemKey'} keyType Type of key.
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_keys_set_command_builder extends CommandBuilder<az_functionapp_keys_set_command_result> {
    constructor(commandPath: string, keyName: string, keyType: 'functionKeys' | 'masterKey' | 'systemKey', name: string, resourceGroup: string) {
        super(commandPath);
        this.keyName(keyName)
        this.keyType(keyType)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the key to set. */
    keyName(value: string): az_functionapp_keys_set_command_builder {
        this.setFlag("--key-name", value);
        return this;
    }

    /** Type of key. */
    keyType(value: 'functionKeys' | 'masterKey' | 'systemKey'): az_functionapp_keys_set_command_builder {
        this.setFlag("--key-type", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_keys_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_keys_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Value of the new key. If not provided, a value will be generated. */
    keyValue(value: string): az_functionapp_keys_set_command_builder {
        this.setFlag("--key-value", value);
        return this;
    }

    /** The name of the slot. Defaults to the productions slot if not specified. */
    slot(value: string): az_functionapp_keys_set_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_keys_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployment logs of the deployments associated with function app.
 *
 * Syntax:
 * ```
 * az functionapp log deployment list --name
 *                                    --resource-group
 *                                    [--query-examples]
 *                                    [--slot]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_log_deployment_list_command_builder extends CommandBuilder<az_functionapp_log_deployment_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_log_deployment_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_log_deployment_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_log_deployment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_log_deployment_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_log_deployment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified.
 *
 * Syntax:
 * ```
 * az functionapp log deployment show --name
 *                                    --resource-group
 *                                    [--deployment-id]
 *                                    [--query-examples]
 *                                    [--slot]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_log_deployment_show_command_builder extends CommandBuilder<az_functionapp_log_deployment_show_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_log_deployment_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_log_deployment_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Deployment ID. If none specified, returns the deployment logs of the latest deployment. */
    deploymentId(value: string): az_functionapp_log_deployment_show_command_builder {
        this.setFlag("--deployment-id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_log_deployment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_log_deployment_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_log_deployment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create an App Service Plan for an Azure Function.
 *
 * Syntax:
 * ```
 * az functionapp plan create --name
 *                            --resource-group
 *                            --sku
 *                            [--is-linux {false, true}]
 *                            [--location]
 *                            [--max-burst]
 *                            [--min-instances]
 *                            [--subscription]
 *                            [--tags]
 * ```
 *
 * @param {string} name The name of the app service plan.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sku The SKU of the app service plan.
 */
class az_functionapp_plan_create_command_builder extends CommandBuilder<az_functionapp_plan_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string, sku: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sku(sku)
    }

    /** The name of the app service plan. */
    name(value: string): az_functionapp_plan_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_plan_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The SKU of the app service plan. */
    sku(value: string): az_functionapp_plan_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Host function app on Linux worker. */
    isLinux(value: boolean): az_functionapp_plan_create_command_builder {
        this.setFlag("--is-linux", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_functionapp_plan_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The maximum number of elastic workers for the plan. */
    maxBurst(value: string): az_functionapp_plan_create_command_builder {
        this.setFlag("--max-burst", value);
        return this;
    }

    /** The number of workers for the app service plan. */
    numberOfWorkers(value: string): az_functionapp_plan_create_command_builder {
        this.setFlag("--number-of-workers", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_plan_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_functionapp_plan_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Delete an App Service Plan.
 *
 * Syntax:
 * ```
 * az functionapp plan delete [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--yes]
 * ```
 */
class az_functionapp_plan_delete_command_builder extends CommandBuilder<az_functionapp_plan_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_plan_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the app service plan. */
    name(value: string): az_functionapp_plan_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_plan_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_plan_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_functionapp_plan_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List App Service Plans.
 *
 * Syntax:
 * ```
 * az functionapp plan list [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
class az_functionapp_plan_list_command_builder extends CommandBuilder<az_functionapp_plan_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_plan_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_plan_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_plan_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the App Service Plans for a resource group or a set of resource groups.
 *
 * Syntax:
 * ```
 * az functionapp plan show [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
class az_functionapp_plan_show_command_builder extends CommandBuilder<az_functionapp_plan_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_plan_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the app service plan. */
    name(value: string): az_functionapp_plan_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_plan_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_plan_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_plan_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an App Service plan for an Azure Function.
 *
 * Syntax:
 * ```
 * az functionapp plan update [--add]
 *                            [--force-string]
 *                            [--ids]
 *                            [--max-burst]
 *                            [--min-instances]
 *                            [--name]
 *                            [--remove]
 *                            [--resource-group]
 *                            [--set]
 *                            [--sku]
 *                            [--subscription]
 * ```
 */
class az_functionapp_plan_update_command_builder extends CommandBuilder<az_functionapp_plan_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The maximum number of elastic workers for the plan. */
    maxBurst(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--max-burst", value);
        return this;
    }

    /** The number of workers for the app service plan. */
    numberOfWorkers(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--number-of-workers", value);
        return this;
    }

    /** The name of the app service plan. */
    name(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The SKU of the app service plan. */
    sku(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_plan_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add a regional virtual network integration to a functionapp.
 *
 * Syntax:
 * ```
 * az functionapp vnet-integration add --name
 *                                     --resource-group
 *                                     --subnet
 *                                     --vnet
 *                                     [--slot]
 *                                     [--subscription]
 * ```
 *
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subnet The name of the subnet.
 * @param {string} vnet The name or resource ID of the Vnet.
 */
class az_functionapp_vnet_integration_add_command_builder extends CommandBuilder<az_functionapp_vnet_integration_add_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string, subnet: string, vnet: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.subnet(subnet)
        this.vnet(vnet)
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_vnet_integration_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_vnet_integration_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the subnet. */
    subnet(value: string): az_functionapp_vnet_integration_add_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** The name or resource ID of the Vnet. */
    vnet(value: string): az_functionapp_vnet_integration_add_command_builder {
        this.setFlag("--vnet", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_vnet_integration_add_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_vnet_integration_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the virtual network integrations on a functionapp.
 *
 * Syntax:
 * ```
 * az functionapp vnet-integration list --name
 *                                      --resource-group
 *                                      [--query-examples]
 *                                      [--slot]
 *                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_vnet_integration_list_command_builder extends CommandBuilder<az_functionapp_vnet_integration_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_vnet_integration_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_vnet_integration_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_vnet_integration_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_vnet_integration_list_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_vnet_integration_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove a regional virtual network integration from functionapp.
 *
 * Syntax:
 * ```
 * az functionapp vnet-integration remove --name
 *                                        --resource-group
 *                                        [--slot]
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Name of the function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_functionapp_vnet_integration_remove_command_builder extends CommandBuilder<az_functionapp_vnet_integration_remove_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_vnet_integration_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_vnet_integration_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_vnet_integration_remove_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_vnet_integration_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a function app.
 *
 * Syntax:
 * ```
 * az functionapp create --name
 *                       --resource-group
 *                       --storage-account
 *                       [--app-insights]
 *                       [--app-insights-key]
 *                       [--assign-identity]
 *                       [--consumption-plan-location]
 *                       [--deployment-container-image-name]
 *                       [--deployment-local-git]
 *                       [--deployment-source-branch]
 *                       [--deployment-source-url]
 *                       [--disable-app-insights {false, true}]
 *                       [--docker-registry-server-password]
 *                       [--docker-registry-server-user]
 *                       [--functions-version {2, 3}]
 *                       [--os-type {Linux, Windows}]
 *                       [--plan]
 *                       [--role]
 *                       [--runtime {custom, dotnet, java, node, powershell, python}]
 *                       [--runtime-version]
 *                       [--scope]
 *                       [--subscription]
 *                       [--tags]
 * ```
 *
 * @param {string} name Name of the new function app.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} storageAccount Provide a string value of a Storage Account in the provided Resource Group. Or Resource ID of a Storage Account in a different Resource Group.
 */
class az_functionapp_create_command_builder extends CommandBuilder<az_functionapp_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string, storageAccount: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.storageAccount(storageAccount)
    }

    /** Name of the new function app. */
    name(value: string): az_functionapp_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Provide a string value of a Storage Account in the provided Resource Group. Or Resource ID of a Storage Account in a different Resource Group. */
    storageAccount(value: string): az_functionapp_create_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Name of the existing App Insights project to be added to the Function app. Must be in the same resource group. */
    appInsights(value: string): az_functionapp_create_command_builder {
        this.setFlag("--app-insights", value);
        return this;
    }

    /** Instrumentation key of App Insights to be added. */
    appInsightsKey(value: string): az_functionapp_create_command_builder {
        this.setFlag("--app-insights-key", value);
        return this;
    }

    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    assignIdentity(value: string): az_functionapp_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** Geographic location where Function App will be hosted. Use `az functionapp list-consumption-locations` to view available locations. */
    consumptionPlanLocation(value: string): az_functionapp_create_command_builder {
        this.setFlag("--consumption-plan-location", value);
        return this;
    }

    /** Linux only. Container image name from Docker Hub, e.g. publisher/image-name:tag. */
    deploymentContainerImageName(value: string): az_functionapp_create_command_builder {
        this.setFlag("--deployment-container-image-name", value);
        return this;
    }

    /** Enable local git. */
    deploymentLocalGit(value: string): az_functionapp_create_command_builder {
        this.setFlag("--deployment-local-git", value);
        return this;
    }

    /** The branch to deploy. */
    deploymentSourceBranch(value: string): az_functionapp_create_command_builder {
        this.setFlag("--deployment-source-branch", value);
        return this;
    }

    /** Git repository URL to link with manual integration. */
    deploymentSourceUrl(value: string): az_functionapp_create_command_builder {
        this.setFlag("--deployment-source-url", value);
        return this;
    }

    /** Disable creating application insights resource during functionapp create. No logs will be available. */
    disableAppInsights(value: boolean): az_functionapp_create_command_builder {
        this.setFlag("--disable-app-insights", value.toString());
        return this;
    }

    /** The container registry server password. Required for private registries. */
    dockerRegistryServerPassword(value: string): az_functionapp_create_command_builder {
        this.setFlag("--docker-registry-server-password", value);
        return this;
    }

    /** The container registry server username. */
    dockerRegistryServerUser(value: string): az_functionapp_create_command_builder {
        this.setFlag("--docker-registry-server-user", value);
        return this;
    }

    /** The functions app version. */
    functionsVersion(value: '2' | '3'): az_functionapp_create_command_builder {
        this.setFlag("--functions-version", value);
        return this;
    }

    /** Set the OS type for the app to be created. */
    osType(value: 'Linux' | 'Windows'): az_functionapp_create_command_builder {
        this.setFlag("--os-type", value);
        return this;
    }

    /** Name or resource id of the function app service plan. Use 'appservice plan create' to get one. */
    plan(value: string): az_functionapp_create_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Role name or id the system assigned identity will have. */
    role(value: string): az_functionapp_create_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** The functions runtime stack. */
    runtime(value: 'custom' | 'dotnet' | 'java' | 'node' | 'powershell' | 'python'): az_functionapp_create_command_builder {
        this.setFlag("--runtime", value);
        return this;
    }

    /** The version of the functions runtime stack. Allowed values for each --runtime are: node -> [8, 10, 12], java -> [8, 11 (preview)], powershell -> [7.0], python -> [3.6, 3.7, 3.8]. */
    runtimeVersion(value: string): az_functionapp_create_command_builder {
        this.setFlag("--runtime-version", value);
        return this;
    }

    /** Scope that the system assigned identity can access. */
    scope(value: string): az_functionapp_create_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_functionapp_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Delete a function app.
 *
 * Syntax:
 * ```
 * az functionapp delete [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--slot]
 *                       [--subscription]
 * ```
 */
class az_functionapp_delete_command_builder extends CommandBuilder<az_functionapp_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_delete_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List function apps.
 *
 * Syntax:
 * ```
 * az functionapp list [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
class az_functionapp_list_command_builder extends CommandBuilder<az_functionapp_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List available locations for running function apps.
 *
 * Syntax:
 * ```
 * az functionapp list-consumption-locations [--subscription]
 * ```
 */
class az_functionapp_list_consumption_locations_command_builder extends CommandBuilder<az_functionapp_list_consumption_locations_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_list_consumption_locations_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Restart a function app.
 *
 * Syntax:
 * ```
 * az functionapp restart [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--slot]
 *                        [--subscription]
 * ```
 */
class az_functionapp_restart_command_builder extends CommandBuilder<az_functionapp_restart_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_restart_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_restart_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_restart_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a function app.
 *
 * Syntax:
 * ```
 * az functionapp show [--ids]
 *                     [--name]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--slot]
 *                     [--subscription]
 * ```
 */
class az_functionapp_show_command_builder extends CommandBuilder<az_functionapp_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_functionapp_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_show_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start a function app.
 *
 * Syntax:
 * ```
 * az functionapp start [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--slot]
 *                      [--subscription]
 * ```
 */
class az_functionapp_start_command_builder extends CommandBuilder<az_functionapp_start_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_start_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Stop a function app.
 *
 * Syntax:
 * ```
 * az functionapp stop [--ids]
 *                     [--name]
 *                     [--resource-group]
 *                     [--slot]
 *                     [--subscription]
 * ```
 */
class az_functionapp_stop_command_builder extends CommandBuilder<az_functionapp_stop_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the slot. Default to the productions slot if not specified. */
    slot(value: string): az_functionapp_stop_command_builder {
        this.setFlag("--slot", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update a function app.
 *
 * Syntax:
 * ```
 * az functionapp update [--add]
 *                       [--force-string]
 *                       [--ids]
 *                       [--name]
 *                       [--plan]
 *                       [--remove]
 *                       [--resource-group]
 *                       [--set]
 *                       [--subscription]
 * ```
 */
class az_functionapp_update_command_builder extends CommandBuilder<az_functionapp_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_functionapp_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_functionapp_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_functionapp_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the function app. */
    name(value: string): az_functionapp_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name or resource id of the plan to update the functionapp with. */
    plan(value: string): az_functionapp_update_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_functionapp_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_functionapp_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_functionapp_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_functionapp_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
