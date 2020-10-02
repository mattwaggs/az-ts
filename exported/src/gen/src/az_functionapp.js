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
exports.az_functionapp = exports.az_functionapp_vnet_integration = exports.az_functionapp_plan = exports.az_functionapp_log = exports.az_functionapp_log_deployment = exports.az_functionapp_keys = exports.az_functionapp_identity = exports.az_functionapp_hybrid_connection = exports.az_functionapp_function = exports.az_functionapp_function_keys = exports.az_functionapp_devops_pipeline = exports.az_functionapp_deployment = exports.az_functionapp_deployment_user = exports.az_functionapp_deployment_source = exports.az_functionapp_deployment_slot = exports.az_functionapp_deployment_container = exports.az_functionapp_cors = exports.az_functionapp_config = exports.az_functionapp_config_ssl = exports.az_functionapp_config_hostname = exports.az_functionapp_config_container = exports.az_functionapp_config_appsettings = exports.az_functionapp_config_access_restriction = void 0;
var base_1 = require("../base");
/** Methods that show, set, add, and remove access restrictions on a functionapp. */
var az_functionapp_config_access_restriction = /** @class */ (function () {
    function az_functionapp_config_access_restriction() {
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
    az_functionapp_config_access_restriction.add = function (priority) {
        return new az_functionapp_config_access_restriction_add_command_builder("az functionapp config access-restriction add", 'az_functionapp_config_access_restriction_add_command_result', priority);
    };
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
    az_functionapp_config_access_restriction.remove = function () {
        return new az_functionapp_config_access_restriction_remove_command_builder("az functionapp config access-restriction remove", 'az_functionapp_config_access_restriction_remove_command_result');
    };
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
    az_functionapp_config_access_restriction.set = function (useSameRestrictionsForScmSite) {
        return new az_functionapp_config_access_restriction_set_command_builder("az functionapp config access-restriction set", 'az_functionapp_config_access_restriction_set_command_result', useSameRestrictionsForScmSite);
    };
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
    az_functionapp_config_access_restriction.show = function () {
        return new az_functionapp_config_access_restriction_show_command_builder("az functionapp config access-restriction show", 'az_functionapp_config_access_restriction_show_command_result');
    };
    return az_functionapp_config_access_restriction;
}());
exports.az_functionapp_config_access_restriction = az_functionapp_config_access_restriction;
/** Configure function app settings. */
var az_functionapp_config_appsettings = /** @class */ (function () {
    function az_functionapp_config_appsettings() {
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
    az_functionapp_config_appsettings["delete"] = function (settingNames) {
        return new az_functionapp_config_appsettings_delete_command_builder("az functionapp config appsettings delete", 'az_functionapp_config_appsettings_delete_command_result', settingNames);
    };
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
    az_functionapp_config_appsettings.list = function (name, resourceGroup) {
        return new az_functionapp_config_appsettings_list_command_builder("az functionapp config appsettings list", 'az_functionapp_config_appsettings_list_command_result', name, resourceGroup);
    };
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
    az_functionapp_config_appsettings.set = function () {
        return new az_functionapp_config_appsettings_set_command_builder("az functionapp config appsettings set", 'az_functionapp_config_appsettings_set_command_result');
    };
    return az_functionapp_config_appsettings;
}());
exports.az_functionapp_config_appsettings = az_functionapp_config_appsettings;
/** Manage function app container settings. */
var az_functionapp_config_container = /** @class */ (function () {
    function az_functionapp_config_container() {
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
    az_functionapp_config_container["delete"] = function () {
        return new az_functionapp_config_container_delete_command_builder("az functionapp config container delete", 'az_functionapp_config_container_delete_command_result');
    };
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
    az_functionapp_config_container.set = function () {
        return new az_functionapp_config_container_set_command_builder("az functionapp config container set", 'az_functionapp_config_container_set_command_result');
    };
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
    az_functionapp_config_container.show = function () {
        return new az_functionapp_config_container_show_command_builder("az functionapp config container show", 'az_functionapp_config_container_show_command_result');
    };
    return az_functionapp_config_container;
}());
exports.az_functionapp_config_container = az_functionapp_config_container;
/** Configure hostnames for a function app. */
var az_functionapp_config_hostname = /** @class */ (function () {
    function az_functionapp_config_hostname() {
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
    az_functionapp_config_hostname.add = function () {
        return new az_functionapp_config_hostname_add_command_builder("az functionapp config hostname add", 'az_functionapp_config_hostname_add_command_result');
    };
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
    az_functionapp_config_hostname["delete"] = function () {
        return new az_functionapp_config_hostname_delete_command_builder("az functionapp config hostname delete", 'az_functionapp_config_hostname_delete_command_result');
    };
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
    az_functionapp_config_hostname.get_external_ip = function () {
        return new az_functionapp_config_hostname_get_external_ip_command_builder("az functionapp config hostname get-external-ip", 'az_functionapp_config_hostname_get_external_ip_command_result');
    };
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
    az_functionapp_config_hostname.list = function (resourceGroup, webappName) {
        return new az_functionapp_config_hostname_list_command_builder("az functionapp config hostname list", 'az_functionapp_config_hostname_list_command_result', resourceGroup, webappName);
    };
    return az_functionapp_config_hostname;
}());
exports.az_functionapp_config_hostname = az_functionapp_config_hostname;
/** Configure SSL certificates. */
var az_functionapp_config_ssl = /** @class */ (function () {
    function az_functionapp_config_ssl() {
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
    az_functionapp_config_ssl.bind = function (certificateThumbprint, sslType) {
        return new az_functionapp_config_ssl_bind_command_builder("az functionapp config ssl bind", 'az_functionapp_config_ssl_bind_command_result', certificateThumbprint, sslType);
    };
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
    az_functionapp_config_ssl.create = function (hostname, name, resourceGroup) {
        return new az_functionapp_config_ssl_create_command_builder("az functionapp config ssl create", 'az_functionapp_config_ssl_create_command_result', hostname, name, resourceGroup);
    };
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
    az_functionapp_config_ssl["delete"] = function (certificateThumbprint, resourceGroup) {
        return new az_functionapp_config_ssl_delete_command_builder("az functionapp config ssl delete", 'az_functionapp_config_ssl_delete_command_result', certificateThumbprint, resourceGroup);
    };
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
    az_functionapp_config_ssl["import"] = function (keyVault, keyVaultCertificateName) {
        return new az_functionapp_config_ssl_import_command_builder("az functionapp config ssl import", 'az_functionapp_config_ssl_import_command_result', keyVault, keyVaultCertificateName);
    };
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
    az_functionapp_config_ssl.list = function (resourceGroup) {
        return new az_functionapp_config_ssl_list_command_builder("az functionapp config ssl list", 'az_functionapp_config_ssl_list_command_result', resourceGroup);
    };
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
    az_functionapp_config_ssl.unbind = function (certificateThumbprint) {
        return new az_functionapp_config_ssl_unbind_command_builder("az functionapp config ssl unbind", 'az_functionapp_config_ssl_unbind_command_result', certificateThumbprint);
    };
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
    az_functionapp_config_ssl.upload = function (certificateFile, certificatePassword) {
        return new az_functionapp_config_ssl_upload_command_builder("az functionapp config ssl upload", 'az_functionapp_config_ssl_upload_command_result', certificateFile, certificatePassword);
    };
    return az_functionapp_config_ssl;
}());
exports.az_functionapp_config_ssl = az_functionapp_config_ssl;
/** Configure a function app. */
var az_functionapp_config = /** @class */ (function () {
    function az_functionapp_config() {
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
    az_functionapp_config.set = function () {
        return new az_functionapp_config_set_command_builder("az functionapp config set", 'az_functionapp_config_set_command_result');
    };
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
    az_functionapp_config.show = function () {
        return new az_functionapp_config_show_command_builder("az functionapp config show", 'az_functionapp_config_show_command_result');
    };
    return az_functionapp_config;
}());
exports.az_functionapp_config = az_functionapp_config;
/** Manage Cross-Origin Resource Sharing (CORS). */
var az_functionapp_cors = /** @class */ (function () {
    function az_functionapp_cors() {
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
    az_functionapp_cors.add = function (allowedOrigins) {
        return new az_functionapp_cors_add_command_builder("az functionapp cors add", 'az_functionapp_cors_add_command_result', allowedOrigins);
    };
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
    az_functionapp_cors.remove = function (allowedOrigins) {
        return new az_functionapp_cors_remove_command_builder("az functionapp cors remove", 'az_functionapp_cors_remove_command_result', allowedOrigins);
    };
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
    az_functionapp_cors.show = function () {
        return new az_functionapp_cors_show_command_builder("az functionapp cors show", 'az_functionapp_cors_show_command_result');
    };
    return az_functionapp_cors;
}());
exports.az_functionapp_cors = az_functionapp_cors;
/** Manage container-based continuous deployment. */
var az_functionapp_deployment_container = /** @class */ (function () {
    function az_functionapp_deployment_container() {
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
    az_functionapp_deployment_container.config = function (enableCd) {
        return new az_functionapp_deployment_container_config_command_builder("az functionapp deployment container config", 'az_functionapp_deployment_container_config_command_result', enableCd);
    };
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
    az_functionapp_deployment_container.show_cd_url = function () {
        return new az_functionapp_deployment_container_show_cd_url_command_builder("az functionapp deployment container show-cd-url", 'az_functionapp_deployment_container_show_cd_url_command_result');
    };
    return az_functionapp_deployment_container;
}());
exports.az_functionapp_deployment_container = az_functionapp_deployment_container;
/** Manage function app deployment slots. */
var az_functionapp_deployment_slot = /** @class */ (function () {
    function az_functionapp_deployment_slot() {
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
    az_functionapp_deployment_slot.auto_swap = function (slot) {
        return new az_functionapp_deployment_slot_auto_swap_command_builder("az functionapp deployment slot auto-swap", 'az_functionapp_deployment_slot_auto_swap_command_result', slot);
    };
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
    az_functionapp_deployment_slot.create = function (name, resourceGroup, slot) {
        return new az_functionapp_deployment_slot_create_command_builder("az functionapp deployment slot create", 'az_functionapp_deployment_slot_create_command_result', name, resourceGroup, slot);
    };
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
    az_functionapp_deployment_slot["delete"] = function (slot) {
        return new az_functionapp_deployment_slot_delete_command_builder("az functionapp deployment slot delete", 'az_functionapp_deployment_slot_delete_command_result', slot);
    };
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
    az_functionapp_deployment_slot.list = function () {
        return new az_functionapp_deployment_slot_list_command_builder("az functionapp deployment slot list", 'az_functionapp_deployment_slot_list_command_result');
    };
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
    az_functionapp_deployment_slot.swap = function (slot) {
        return new az_functionapp_deployment_slot_swap_command_builder("az functionapp deployment slot swap", 'az_functionapp_deployment_slot_swap_command_result', slot);
    };
    return az_functionapp_deployment_slot;
}());
exports.az_functionapp_deployment_slot = az_functionapp_deployment_slot;
/** Manage function app deployment via source control. */
var az_functionapp_deployment_source = /** @class */ (function () {
    function az_functionapp_deployment_source() {
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
    az_functionapp_deployment_source.config = function (repoUrl) {
        return new az_functionapp_deployment_source_config_command_builder("az functionapp deployment source config", 'az_functionapp_deployment_source_config_command_result', repoUrl);
    };
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
    az_functionapp_deployment_source.config_local_git = function () {
        return new az_functionapp_deployment_source_config_local_git_command_builder("az functionapp deployment source config-local-git", 'az_functionapp_deployment_source_config_local_git_command_result');
    };
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
    az_functionapp_deployment_source.config_zip = function (src) {
        return new az_functionapp_deployment_source_config_zip_command_builder("az functionapp deployment source config-zip", 'az_functionapp_deployment_source_config_zip_command_result', src);
    };
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
    az_functionapp_deployment_source["delete"] = function () {
        return new az_functionapp_deployment_source_delete_command_builder("az functionapp deployment source delete", 'az_functionapp_deployment_source_delete_command_result');
    };
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
    az_functionapp_deployment_source.show = function () {
        return new az_functionapp_deployment_source_show_command_builder("az functionapp deployment source show", 'az_functionapp_deployment_source_show_command_result');
    };
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
    az_functionapp_deployment_source.sync = function () {
        return new az_functionapp_deployment_source_sync_command_builder("az functionapp deployment source sync", 'az_functionapp_deployment_source_sync_command_result');
    };
    /**
     * Update source control token cached in Azure app service.
     *
     * Syntax:
     * ```
     * az functionapp deployment source update-token [--git-token]
     *                                               [--subscription]
     * ```
     */
    az_functionapp_deployment_source.update_token = function () {
        return new az_functionapp_deployment_source_update_token_command_builder("az functionapp deployment source update-token", 'az_functionapp_deployment_source_update_token_command_result');
    };
    return az_functionapp_deployment_source;
}());
exports.az_functionapp_deployment_source = az_functionapp_deployment_source;
/** Manage user credentials for deployment. */
var az_functionapp_deployment_user = /** @class */ (function () {
    function az_functionapp_deployment_user() {
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
    az_functionapp_deployment_user.set = function (userName) {
        return new az_functionapp_deployment_user_set_command_builder("az functionapp deployment user set", 'az_functionapp_deployment_user_set_command_result', userName);
    };
    /**
     * Gets publishing user.
     *
     * Syntax:
     * ```
     * az functionapp deployment user show [--query-examples]
     *                                     [--subscription]
     * ```
     */
    az_functionapp_deployment_user.show = function () {
        return new az_functionapp_deployment_user_show_command_builder("az functionapp deployment user show", 'az_functionapp_deployment_user_show_command_result');
    };
    return az_functionapp_deployment_user;
}());
exports.az_functionapp_deployment_user = az_functionapp_deployment_user;
/** Manage function app deployments. */
var az_functionapp_deployment = /** @class */ (function () {
    function az_functionapp_deployment() {
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
    az_functionapp_deployment.list_publishing_credentials = function () {
        return new az_functionapp_deployment_list_publishing_credentials_command_builder("az functionapp deployment list-publishing-credentials", 'az_functionapp_deployment_list_publishing_credentials_command_result');
    };
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
    az_functionapp_deployment.list_publishing_profiles = function () {
        return new az_functionapp_deployment_list_publishing_profiles_command_builder("az functionapp deployment list-publishing-profiles", 'az_functionapp_deployment_list_publishing_profiles_command_result');
    };
    return az_functionapp_deployment;
}());
exports.az_functionapp_deployment = az_functionapp_deployment;
/** Azure Function specific integration with Azure DevOps. Please visit <a href="https://aka.ms/functions-azure-devops">https://aka.ms/functions-azure-devops</a> for more information. */
var az_functionapp_devops_pipeline = /** @class */ (function () {
    function az_functionapp_devops_pipeline() {
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
    az_functionapp_devops_pipeline.create = function () {
        return new az_functionapp_devops_pipeline_create_command_builder("az functionapp devops-pipeline create", 'az_functionapp_devops_pipeline_create_command_result');
    };
    return az_functionapp_devops_pipeline;
}());
exports.az_functionapp_devops_pipeline = az_functionapp_devops_pipeline;
/** Manage function keys. */
var az_functionapp_function_keys = /** @class */ (function () {
    function az_functionapp_function_keys() {
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
    az_functionapp_function_keys["delete"] = function (keyName, name, resourceGroup) {
        return new az_functionapp_function_keys_delete_command_builder("az functionapp function keys delete", 'az_functionapp_function_keys_delete_command_result', keyName, name, resourceGroup);
    };
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
    az_functionapp_function_keys.list = function (functionName, name, resourceGroup) {
        return new az_functionapp_function_keys_list_command_builder("az functionapp function keys list", 'az_functionapp_function_keys_list_command_result', functionName, name, resourceGroup);
    };
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
    az_functionapp_function_keys.set = function (functionName, keyName, name, resourceGroup) {
        return new az_functionapp_function_keys_set_command_builder("az functionapp function keys set", 'az_functionapp_function_keys_set_command_result', functionName, keyName, name, resourceGroup);
    };
    return az_functionapp_function_keys;
}());
exports.az_functionapp_function_keys = az_functionapp_function_keys;
/** Manage function app functions. */
var az_functionapp_function = /** @class */ (function () {
    function az_functionapp_function() {
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
    az_functionapp_function["delete"] = function (functionName, name, resourceGroup) {
        return new az_functionapp_function_delete_command_builder("az functionapp function delete", 'az_functionapp_function_delete_command_result', functionName, name, resourceGroup);
    };
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
    az_functionapp_function.show = function (functionName, name, resourceGroup) {
        return new az_functionapp_function_show_command_builder("az functionapp function show", 'az_functionapp_function_show_command_result', functionName, name, resourceGroup);
    };
    return az_functionapp_function;
}());
exports.az_functionapp_function = az_functionapp_function;
/** Methods that list, add and remove hybrid-connections from functionapp. */
var az_functionapp_hybrid_connection = /** @class */ (function () {
    function az_functionapp_hybrid_connection() {
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
    az_functionapp_hybrid_connection.add = function (hybridConnection, name, namespace, resourceGroup) {
        return new az_functionapp_hybrid_connection_add_command_builder("az functionapp hybrid-connection add", 'az_functionapp_hybrid_connection_add_command_result', hybridConnection, name, namespace, resourceGroup);
    };
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
    az_functionapp_hybrid_connection.list = function (name, resourceGroup) {
        return new az_functionapp_hybrid_connection_list_command_builder("az functionapp hybrid-connection list", 'az_functionapp_hybrid_connection_list_command_result', name, resourceGroup);
    };
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
    az_functionapp_hybrid_connection.remove = function (hybridConnection, name, namespace, resourceGroup) {
        return new az_functionapp_hybrid_connection_remove_command_builder("az functionapp hybrid-connection remove", 'az_functionapp_hybrid_connection_remove_command_result', hybridConnection, name, namespace, resourceGroup);
    };
    return az_functionapp_hybrid_connection;
}());
exports.az_functionapp_hybrid_connection = az_functionapp_hybrid_connection;
/** Manage web app's managed service identity. */
var az_functionapp_identity = /** @class */ (function () {
    function az_functionapp_identity() {
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
    az_functionapp_identity.assign = function () {
        return new az_functionapp_identity_assign_command_builder("az functionapp identity assign", 'az_functionapp_identity_assign_command_result');
    };
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
    az_functionapp_identity.remove = function () {
        return new az_functionapp_identity_remove_command_builder("az functionapp identity remove", 'az_functionapp_identity_remove_command_result');
    };
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
    az_functionapp_identity.show = function () {
        return new az_functionapp_identity_show_command_builder("az functionapp identity show", 'az_functionapp_identity_show_command_result');
    };
    return az_functionapp_identity;
}());
exports.az_functionapp_identity = az_functionapp_identity;
/** Manage function app keys. */
var az_functionapp_keys = /** @class */ (function () {
    function az_functionapp_keys() {
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
    az_functionapp_keys["delete"] = function (keyName, keyType, name, resourceGroup) {
        return new az_functionapp_keys_delete_command_builder("az functionapp keys delete", 'az_functionapp_keys_delete_command_result', keyName, keyType, name, resourceGroup);
    };
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
    az_functionapp_keys.list = function (name, resourceGroup) {
        return new az_functionapp_keys_list_command_builder("az functionapp keys list", 'az_functionapp_keys_list_command_result', name, resourceGroup);
    };
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
    az_functionapp_keys.set = function (keyName, keyType, name, resourceGroup) {
        return new az_functionapp_keys_set_command_builder("az functionapp keys set", 'az_functionapp_keys_set_command_result', keyName, keyType, name, resourceGroup);
    };
    return az_functionapp_keys;
}());
exports.az_functionapp_keys = az_functionapp_keys;
/** Manage function app deployment logs. */
var az_functionapp_log_deployment = /** @class */ (function () {
    function az_functionapp_log_deployment() {
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
    az_functionapp_log_deployment.list = function (name, resourceGroup) {
        return new az_functionapp_log_deployment_list_command_builder("az functionapp log deployment list", 'az_functionapp_log_deployment_list_command_result', name, resourceGroup);
    };
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
    az_functionapp_log_deployment.show = function (name, resourceGroup) {
        return new az_functionapp_log_deployment_show_command_builder("az functionapp log deployment show", 'az_functionapp_log_deployment_show_command_result', name, resourceGroup);
    };
    return az_functionapp_log_deployment;
}());
exports.az_functionapp_log_deployment = az_functionapp_log_deployment;
/** */
var az_functionapp_log = /** @class */ (function () {
    function az_functionapp_log() {
    }
    return az_functionapp_log;
}());
exports.az_functionapp_log = az_functionapp_log;
/** Manage App Service Plans for an Azure Function. */
var az_functionapp_plan = /** @class */ (function () {
    function az_functionapp_plan() {
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
    az_functionapp_plan.create = function (name, resourceGroup, sku) {
        return new az_functionapp_plan_create_command_builder("az functionapp plan create", 'az_functionapp_plan_create_command_result', name, resourceGroup, sku);
    };
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
    az_functionapp_plan["delete"] = function () {
        return new az_functionapp_plan_delete_command_builder("az functionapp plan delete", 'az_functionapp_plan_delete_command_result');
    };
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
    az_functionapp_plan.list = function () {
        return new az_functionapp_plan_list_command_builder("az functionapp plan list", 'az_functionapp_plan_list_command_result');
    };
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
    az_functionapp_plan.show = function () {
        return new az_functionapp_plan_show_command_builder("az functionapp plan show", 'az_functionapp_plan_show_command_result');
    };
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
    az_functionapp_plan.update = function () {
        return new az_functionapp_plan_update_command_builder("az functionapp plan update", 'az_functionapp_plan_update_command_result');
    };
    return az_functionapp_plan;
}());
exports.az_functionapp_plan = az_functionapp_plan;
/** Methods that list, add, and remove virtual networks integrations from a functionapp. */
var az_functionapp_vnet_integration = /** @class */ (function () {
    function az_functionapp_vnet_integration() {
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
    az_functionapp_vnet_integration.add = function (name, resourceGroup, subnet, vnet) {
        return new az_functionapp_vnet_integration_add_command_builder("az functionapp vnet-integration add", 'az_functionapp_vnet_integration_add_command_result', name, resourceGroup, subnet, vnet);
    };
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
    az_functionapp_vnet_integration.list = function (name, resourceGroup) {
        return new az_functionapp_vnet_integration_list_command_builder("az functionapp vnet-integration list", 'az_functionapp_vnet_integration_list_command_result', name, resourceGroup);
    };
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
    az_functionapp_vnet_integration.remove = function (name, resourceGroup) {
        return new az_functionapp_vnet_integration_remove_command_builder("az functionapp vnet-integration remove", 'az_functionapp_vnet_integration_remove_command_result', name, resourceGroup);
    };
    return az_functionapp_vnet_integration;
}());
exports.az_functionapp_vnet_integration = az_functionapp_vnet_integration;
/** Manage function apps. To install the Azure Functions Core tools see <a href="https://github.com/Azure/azure-functions-core-tools">https://github.com/Azure/azure-functions-core-tools</a>. */
var az_functionapp = /** @class */ (function () {
    function az_functionapp() {
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
    az_functionapp.create = function (name, resourceGroup, storageAccount) {
        return new az_functionapp_create_command_builder("az functionapp create", 'az_functionapp_create_command_result', name, resourceGroup, storageAccount);
    };
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
    az_functionapp["delete"] = function () {
        return new az_functionapp_delete_command_builder("az functionapp delete", 'az_functionapp_delete_command_result');
    };
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
    az_functionapp.list = function () {
        return new az_functionapp_list_command_builder("az functionapp list", 'az_functionapp_list_command_result');
    };
    /**
     * List available locations for running function apps.
     *
     * Syntax:
     * ```
     * az functionapp list-consumption-locations [--subscription]
     * ```
     */
    az_functionapp.list_consumption_locations = function () {
        return new az_functionapp_list_consumption_locations_command_builder("az functionapp list-consumption-locations", 'az_functionapp_list_consumption_locations_command_result');
    };
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
    az_functionapp.restart = function () {
        return new az_functionapp_restart_command_builder("az functionapp restart", 'az_functionapp_restart_command_result');
    };
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
    az_functionapp.show = function () {
        return new az_functionapp_show_command_builder("az functionapp show", 'az_functionapp_show_command_result');
    };
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
    az_functionapp.start = function () {
        return new az_functionapp_start_command_builder("az functionapp start", 'az_functionapp_start_command_result');
    };
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
    az_functionapp.stop = function () {
        return new az_functionapp_stop_command_builder("az functionapp stop", 'az_functionapp_stop_command_result');
    };
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
    az_functionapp.update = function () {
        return new az_functionapp_update_command_builder("az functionapp update", 'az_functionapp_update_command_result');
    };
    return az_functionapp;
}());
exports.az_functionapp = az_functionapp;
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
var az_functionapp_config_access_restriction_add_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_access_restriction_add_command_builder, _super);
    function az_functionapp_config_access_restriction_add_command_builder(commandPath, resultDataTypeName, priority) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.priority(priority);
        return _this;
    }
    /** Priority of the access restriction rule. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Allow or deny access. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Description of the access restriction rule. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Create access restriction rule with checking if the subnet has Microsoft.Web service endpoint enabled. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** IP address or CIDR range. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the access restriction rule to add. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** True if access restrictions is added for scm site. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.scmSite = function (value) {
        this.setFlag("--scm-site", value.toString());
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Subnet name (requires vNet name) or subnet resource id. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** VNet name. */
    az_functionapp_config_access_restriction_add_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_functionapp_config_access_restriction_add_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_access_restriction_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_access_restriction_remove_command_builder, _super);
    function az_functionapp_config_access_restriction_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Allow or deny access. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** IP address or CIDR range. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the access restriction to remove. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** True if access restriction should be removed from scm site. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.scmSite = function (value) {
        this.setFlag("--scm-site", value.toString());
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Subnet name (requires vNet name) or subnet resource id. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** VNet name. */
    az_functionapp_config_access_restriction_remove_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_functionapp_config_access_restriction_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_access_restriction_set_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_access_restriction_set_command_builder, _super);
    function az_functionapp_config_access_restriction_set_command_builder(commandPath, resultDataTypeName, useSameRestrictionsForScmSite) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.useSameRestrictionsForScmSite(useSameRestrictionsForScmSite);
        return _this;
    }
    /** Use same access restrictions for scm site. */
    az_functionapp_config_access_restriction_set_command_builder.prototype.useSameRestrictionsForScmSite = function (value) {
        this.setFlag("--use-same-restrictions-for-scm-site", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_access_restriction_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_access_restriction_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_access_restriction_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_access_restriction_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_access_restriction_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_access_restriction_set_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_access_restriction_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_access_restriction_show_command_builder, _super);
    function az_functionapp_config_access_restriction_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_access_restriction_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_access_restriction_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_config_access_restriction_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_access_restriction_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_access_restriction_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_access_restriction_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_access_restriction_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_appsettings_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_appsettings_delete_command_builder, _super);
    function az_functionapp_config_appsettings_delete_command_builder(commandPath, resultDataTypeName, settingNames) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.settingNames(settingNames);
        return _this;
    }
    /** Space-separated app setting names. */
    az_functionapp_config_appsettings_delete_command_builder.prototype.settingNames = function (value) {
        this.setFlag("--setting-names", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_appsettings_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_appsettings_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_appsettings_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_appsettings_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_appsettings_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_appsettings_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_appsettings_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_appsettings_list_command_builder, _super);
    function az_functionapp_config_appsettings_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the function app. */
    az_functionapp_config_appsettings_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_appsettings_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_config_appsettings_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_appsettings_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_appsettings_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_appsettings_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_appsettings_set_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_appsettings_set_command_builder, _super);
    function az_functionapp_config_appsettings_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_appsettings_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_appsettings_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_appsettings_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated app settings in a format of `<name>=<value>`. */
    az_functionapp_config_appsettings_set_command_builder.prototype.settings = function (value) {
        this.setFlag("--settings", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_appsettings_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Space-separated slot app settings in a format of `<name>=<value>`. */
    az_functionapp_config_appsettings_set_command_builder.prototype.slotSettings = function (value) {
        this.setFlag("--slot-settings", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_appsettings_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_appsettings_set_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_container_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_container_delete_command_builder, _super);
    function az_functionapp_config_container_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_container_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_container_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_container_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_container_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_container_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_container_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_container_set_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_container_set_command_builder, _super);
    function az_functionapp_config_container_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The container custom image name and optionally the tag name. */
    az_functionapp_config_container_set_command_builder.prototype.dockerCustomImageName = function (value) {
        this.setFlag("--docker-custom-image-name", value);
        return this;
    };
    /** The container registry server password. */
    az_functionapp_config_container_set_command_builder.prototype.dockerRegistryServerPassword = function (value) {
        this.setFlag("--docker-registry-server-password", value);
        return this;
    };
    /** The container registry server url. */
    az_functionapp_config_container_set_command_builder.prototype.dockerRegistryServerUrl = function (value) {
        this.setFlag("--docker-registry-server-url", value);
        return this;
    };
    /** The container registry server username. */
    az_functionapp_config_container_set_command_builder.prototype.dockerRegistryServerUser = function (value) {
        this.setFlag("--docker-registry-server-user", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_container_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_container_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_container_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_container_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_container_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_container_set_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_container_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_container_show_command_builder, _super);
    function az_functionapp_config_container_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_container_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_container_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_config_container_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_container_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_container_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_container_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_container_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_hostname_add_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_hostname_add_command_builder, _super);
    function az_functionapp_config_hostname_add_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Hostname assigned to the site, such as custom domains. */
    az_functionapp_config_hostname_add_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_hostname_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_hostname_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_hostname_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_hostname_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_hostname_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_hostname_add_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_hostname_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_hostname_delete_command_builder, _super);
    function az_functionapp_config_hostname_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Hostname assigned to the site, such as custom domains. */
    az_functionapp_config_hostname_delete_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_hostname_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_hostname_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_hostname_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_hostname_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_hostname_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_hostname_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_hostname_get_external_ip_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_hostname_get_external_ip_command_builder, _super);
    function az_functionapp_config_hostname_get_external_ip_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_hostname_get_external_ip_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_hostname_get_external_ip_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_hostname_get_external_ip_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_hostname_get_external_ip_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_hostname_get_external_ip_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_hostname_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_hostname_list_command_builder, _super);
    function az_functionapp_config_hostname_list_command_builder(commandPath, resultDataTypeName, resourceGroup, webappName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.webappName(webappName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_hostname_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the web app. You can configure the default using `az configure --defaults web=<name>`. */
    az_functionapp_config_hostname_list_command_builder.prototype.webappName = function (value) {
        this.setFlag("--webapp-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_config_hostname_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_hostname_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_hostname_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_hostname_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_ssl_bind_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_ssl_bind_command_builder, _super);
    function az_functionapp_config_ssl_bind_command_builder(commandPath, resultDataTypeName, certificateThumbprint, sslType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateThumbprint(certificateThumbprint);
        _this.sslType(sslType);
        return _this;
    }
    /** The ssl cert thumbprint. */
    az_functionapp_config_ssl_bind_command_builder.prototype.certificateThumbprint = function (value) {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    };
    /** The ssl cert type. */
    az_functionapp_config_ssl_bind_command_builder.prototype.sslType = function (value) {
        this.setFlag("--ssl-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_ssl_bind_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_ssl_bind_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_ssl_bind_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_ssl_bind_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_ssl_bind_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_ssl_bind_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_ssl_create_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_ssl_create_command_builder, _super);
    function az_functionapp_config_ssl_create_command_builder(commandPath, resultDataTypeName, hostname, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hostname(hostname);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The custom domain name. */
    az_functionapp_config_ssl_create_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_ssl_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_ssl_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_ssl_create_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_ssl_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_ssl_create_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_ssl_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_ssl_delete_command_builder, _super);
    function az_functionapp_config_ssl_delete_command_builder(commandPath, resultDataTypeName, certificateThumbprint, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateThumbprint(certificateThumbprint);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The ssl cert thumbprint. */
    az_functionapp_config_ssl_delete_command_builder.prototype.certificateThumbprint = function (value) {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_ssl_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_ssl_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_ssl_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_ssl_import_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_ssl_import_command_builder, _super);
    function az_functionapp_config_ssl_import_command_builder(commandPath, resultDataTypeName, keyVault, keyVaultCertificateName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyVault(keyVault);
        _this.keyVaultCertificateName(keyVaultCertificateName);
        return _this;
    }
    /** The name or resource ID of the Key Vault. */
    az_functionapp_config_ssl_import_command_builder.prototype.keyVault = function (value) {
        this.setFlag("--key-vault", value);
        return this;
    };
    /** The name of the certificate in Key Vault. */
    az_functionapp_config_ssl_import_command_builder.prototype.keyVaultCertificateName = function (value) {
        this.setFlag("--key-vault-certificate-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_ssl_import_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_ssl_import_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_ssl_import_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_ssl_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_ssl_import_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_ssl_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_ssl_list_command_builder, _super);
    function az_functionapp_config_ssl_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_ssl_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_config_ssl_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_ssl_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_ssl_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_ssl_unbind_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_ssl_unbind_command_builder, _super);
    function az_functionapp_config_ssl_unbind_command_builder(commandPath, resultDataTypeName, certificateThumbprint) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateThumbprint(certificateThumbprint);
        return _this;
    }
    /** The ssl cert thumbprint. */
    az_functionapp_config_ssl_unbind_command_builder.prototype.certificateThumbprint = function (value) {
        this.setFlag("--certificate-thumbprint", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_ssl_unbind_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_ssl_unbind_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_ssl_unbind_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_ssl_unbind_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_ssl_unbind_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_ssl_unbind_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_ssl_upload_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_ssl_upload_command_builder, _super);
    function az_functionapp_config_ssl_upload_command_builder(commandPath, resultDataTypeName, certificateFile, certificatePassword) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateFile(certificateFile);
        _this.certificatePassword(certificatePassword);
        return _this;
    }
    /** The filepath for the .pfx file. */
    az_functionapp_config_ssl_upload_command_builder.prototype.certificateFile = function (value) {
        this.setFlag("--certificate-file", value);
        return this;
    };
    /** The ssl cert password. */
    az_functionapp_config_ssl_upload_command_builder.prototype.certificatePassword = function (value) {
        this.setFlag("--certificate-password", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_ssl_upload_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_ssl_upload_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_ssl_upload_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_ssl_upload_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_ssl_upload_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_ssl_upload_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_set_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_set_command_builder, _super);
    function az_functionapp_config_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Ensure web app gets loaded all the time, rather unloaded after been idle. Recommended when you have continuous web jobs running. */
    az_functionapp_config_set_command_builder.prototype.alwaysOn = function (value) {
        this.setFlag("--always-on", value.toString());
        return this;
    };
    /** Enable or disable auto heal. */
    az_functionapp_config_set_command_builder.prototype.autoHealEnabled = function (value) {
        this.setFlag("--auto-heal-enabled", value.toString());
        return this;
    };
    /** Set the Ftps state value for an app. Default value is 'AllAllowed'. */
    az_functionapp_config_set_command_builder.prototype.ftpsState = function (value) {
        this.setFlag("--ftps-state", value);
        return this;
    };
    /** Provide site configuration list in a format of either `key=value` pair or `@<json_file>`. */
    az_functionapp_config_set_command_builder.prototype.genericConfigurations = function (value) {
        this.setFlag("--generic-configurations", value);
        return this;
    };
    /** Configures a web site to allow clients to connect over http2.0. */
    az_functionapp_config_set_command_builder.prototype.http20Enabled = function (value) {
        this.setFlag("--http20-enabled", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The java container, e.g., Tomcat, Jetty. */
    az_functionapp_config_set_command_builder.prototype.javaContainer = function (value) {
        this.setFlag("--java-container", value);
        return this;
    };
    /** The version of the java container, e.g., '8.0.23' for Tomcat. */
    az_functionapp_config_set_command_builder.prototype.javaContainerVersion = function (value) {
        this.setFlag("--java-container-version", value);
        return this;
    };
    /** The version used to run your web app if using Java, e.g., '1.7' for Java 7, '1.8' for Java 8. */
    az_functionapp_config_set_command_builder.prototype.javaVersion = function (value) {
        this.setFlag("--java-version", value);
        return this;
    };
    /** The runtime stack used for your linux-based webapp, e.g., "RUBY|2.5.5", "NODE|10.14", "PHP|7.2", "DOTNETCORE|2.1". See <a href="https://aka.ms/linux-stacks">https://aka.ms/linux-stacks</a> for more info. */
    az_functionapp_config_set_command_builder.prototype.linuxFxVersion = function (value) {
        this.setFlag("--linux-fx-version", value);
        return this;
    };
    /** The minimum version of TLS required for SSL requests, e.g., '1.0', '1.1', '1.2'. */
    az_functionapp_config_set_command_builder.prototype.minTlsVersion = function (value) {
        this.setFlag("--min-tls-version", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The version used to run your web app if using .NET Framework, e.g., 'v4.0' for .NET 4.6 and 'v3.0' for .NET 3.5. */
    az_functionapp_config_set_command_builder.prototype.netFrameworkVersion = function (value) {
        this.setFlag("--net-framework-version", value);
        return this;
    };
    /** The number of workers to be allocated. */
    az_functionapp_config_set_command_builder.prototype.numberOfWorkers = function (value) {
        this.setFlag("--number-of-workers", value);
        return this;
    };
    /** The version used to run your web app if using PHP, e.g., 5.5, 5.6, 7.0. */
    az_functionapp_config_set_command_builder.prototype.phpVersion = function (value) {
        this.setFlag("--php-version", value);
        return this;
    };
    /** Number of pre-warmed instances a function app has. */
    az_functionapp_config_set_command_builder.prototype.prewarmedInstanceCount = function (value) {
        this.setFlag("--prewarmed-instance-count", value);
        return this;
    };
    /** The version used to run your web app if using Python, e.g., 2.7, 3.4. */
    az_functionapp_config_set_command_builder.prototype.pythonVersion = function (value) {
        this.setFlag("--python-version", value);
        return this;
    };
    /** Enable or disable remote debugging. */
    az_functionapp_config_set_command_builder.prototype.remoteDebuggingEnabled = function (value) {
        this.setFlag("--remote-debugging-enabled", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** The startup file for linux hosted web apps, e.g. 'process.json' for Node.js web. */
    az_functionapp_config_set_command_builder.prototype.startupFile = function (value) {
        this.setFlag("--startup-file", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Use 32 bits worker process or not. */
    az_functionapp_config_set_command_builder.prototype.use32BitWorkerProcess = function (value) {
        this.setFlag("--use-32bit-worker-process", value.toString());
        return this;
    };
    /** Enable or disable web sockets. */
    az_functionapp_config_set_command_builder.prototype.webSocketsEnabled = function (value) {
        this.setFlag("--web-sockets-enabled", value.toString());
        return this;
    };
    return az_functionapp_config_set_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_config_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_config_show_command_builder, _super);
    function az_functionapp_config_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_config_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_config_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_config_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_config_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_config_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_config_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_config_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_cors_add_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_cors_add_command_builder, _super);
    function az_functionapp_cors_add_command_builder(commandPath, resultDataTypeName, allowedOrigins) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.allowedOrigins(allowedOrigins);
        return _this;
    }
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list. */
    az_functionapp_cors_add_command_builder.prototype.allowedOrigins = function (value) {
        this.setFlag("--allowed-origins", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_cors_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_cors_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_cors_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_cors_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_cors_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_cors_add_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_cors_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_cors_remove_command_builder, _super);
    function az_functionapp_cors_remove_command_builder(commandPath, resultDataTypeName, allowedOrigins) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.allowedOrigins(allowedOrigins);
        return _this;
    }
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*" and remove all other origins from the list. */
    az_functionapp_cors_remove_command_builder.prototype.allowedOrigins = function (value) {
        this.setFlag("--allowed-origins", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_cors_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_cors_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_cors_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_cors_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_cors_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_cors_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_cors_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_cors_show_command_builder, _super);
    function az_functionapp_cors_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_cors_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_cors_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_cors_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_cors_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_cors_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_cors_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_cors_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_container_config_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_container_config_command_builder, _super);
    function az_functionapp_deployment_container_config_command_builder(commandPath, resultDataTypeName, enableCd) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.enableCd(enableCd);
        return _this;
    }
    /** Enable/disable continuous deployment. */
    az_functionapp_deployment_container_config_command_builder.prototype.enableCd = function (value) {
        this.setFlag("--enable-cd", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_container_config_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_container_config_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_container_config_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_container_config_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_container_config_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_container_config_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_container_show_cd_url_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_container_show_cd_url_command_builder, _super);
    function az_functionapp_deployment_container_show_cd_url_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_container_show_cd_url_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_container_show_cd_url_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_container_show_cd_url_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_container_show_cd_url_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_container_show_cd_url_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_container_show_cd_url_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_slot_auto_swap_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_slot_auto_swap_command_builder, _super);
    function az_functionapp_deployment_slot_auto_swap_command_builder(commandPath, resultDataTypeName, slot) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.slot(slot);
        return _this;
    }
    /** The name of the slot. */
    az_functionapp_deployment_slot_auto_swap_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Target slot to auto swap. */
    az_functionapp_deployment_slot_auto_swap_command_builder.prototype.autoSwapSlot = function (value) {
        this.setFlag("--auto-swap-slot", value);
        return this;
    };
    /** Disable auto swap. */
    az_functionapp_deployment_slot_auto_swap_command_builder.prototype.disable = function (value) {
        this.setFlag("--disable", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_slot_auto_swap_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_slot_auto_swap_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_slot_auto_swap_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_slot_auto_swap_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_slot_auto_swap_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_slot_create_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_slot_create_command_builder, _super);
    function az_functionapp_deployment_slot_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, slot) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.slot(slot);
        return _this;
    }
    /** Name of the function app. */
    az_functionapp_deployment_slot_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_slot_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. */
    az_functionapp_deployment_slot_create_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Source slot to clone configurations from. Use function app's name to refer to the production slot. */
    az_functionapp_deployment_slot_create_command_builder.prototype.configurationSource = function (value) {
        this.setFlag("--configuration-source", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_slot_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_slot_create_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_slot_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_slot_delete_command_builder, _super);
    function az_functionapp_deployment_slot_delete_command_builder(commandPath, resultDataTypeName, slot) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.slot(slot);
        return _this;
    }
    /** The name of the slot. */
    az_functionapp_deployment_slot_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_slot_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_slot_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_slot_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_slot_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_slot_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_slot_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_slot_list_command_builder, _super);
    function az_functionapp_deployment_slot_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_slot_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_slot_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_deployment_slot_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_slot_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_slot_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_slot_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_slot_swap_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_slot_swap_command_builder, _super);
    function az_functionapp_deployment_slot_swap_command_builder(commandPath, resultDataTypeName, slot) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.slot(slot);
        return _this;
    }
    /** The name of the slot. */
    az_functionapp_deployment_slot_swap_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Swap types. use 'preview' to apply target slot's settings on the source slot first; use 'swap' to complete it; use 'reset' to reset the swap. */
    az_functionapp_deployment_slot_swap_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_slot_swap_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_slot_swap_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_slot_swap_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_slot_swap_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Target slot to swap, default to 'production'. */
    az_functionapp_deployment_slot_swap_command_builder.prototype.targetSlot = function (value) {
        this.setFlag("--target-slot", value);
        return this;
    };
    return az_functionapp_deployment_slot_swap_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_source_config_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_source_config_command_builder, _super);
    function az_functionapp_deployment_source_config_command_builder(commandPath, resultDataTypeName, repoUrl) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.repoUrl(repoUrl);
        return _this;
    }
    /** Repository url to pull the latest source from, e.g. <a href="https://github.com/foo/foo-web">https://github.com/foo/foo-web</a>. */
    az_functionapp_deployment_source_config_command_builder.prototype.repoUrl = function (value) {
        this.setFlag("--repo-url", value);
        return this;
    };
    /** Working directory of the application. Default will be root of the repo. */
    az_functionapp_deployment_source_config_command_builder.prototype.appWorkingDir = function (value) {
        this.setFlag("--app-working-dir", value);
        return this;
    };
    /** The branch name of the repository. */
    az_functionapp_deployment_source_config_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** To create a new Visual Studio Team Services (VSTS) account if it doesn't exist already. */
    az_functionapp_deployment_source_config_command_builder.prototype.cdAccountCreate = function (value) {
        this.setFlag("--cd-account-create", value);
        return this;
    };
    /** Web application framework you used to develop your app. Default is AspNet. */
    az_functionapp_deployment_source_config_command_builder.prototype.cdAppType = function (value) {
        this.setFlag("--cd-app-type", value);
        return this;
    };
    /** URL of the Visual Studio Team Services (VSTS) project to use for continuous delivery. URL should be in format `https://<accountname>.visualstudio.com/<projectname>`. */
    az_functionapp_deployment_source_config_command_builder.prototype.cdProjectUrl = function (value) {
        this.setFlag("--cd-project-url", value);
        return this;
    };
    /** Git access token required for auto sync. */
    az_functionapp_deployment_source_config_command_builder.prototype.gitToken = function (value) {
        this.setFlag("--git-token", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_source_config_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Disable automatic sync between source control and web. */
    az_functionapp_deployment_source_config_command_builder.prototype.manualIntegration = function (value) {
        this.setFlag("--manual-integration", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_source_config_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Task runner for nodejs. Default is None. */
    az_functionapp_deployment_source_config_command_builder.prototype.nodejsTaskRunner = function (value) {
        this.setFlag("--nodejs-task-runner", value);
        return this;
    };
    /** Password for the private repository. */
    az_functionapp_deployment_source_config_command_builder.prototype.privateRepoPassword = function (value) {
        this.setFlag("--private-repo-password", value);
        return this;
    };
    /** Username for the private repository. */
    az_functionapp_deployment_source_config_command_builder.prototype.privateRepoUsername = function (value) {
        this.setFlag("--private-repo-username", value);
        return this;
    };
    /** Framework used for Python application. Default is Django. */
    az_functionapp_deployment_source_config_command_builder.prototype.pythonFramework = function (value) {
        this.setFlag("--python-framework", value);
        return this;
    };
    /** Python version used for application. Default is Python 3.5.3 x86. */
    az_functionapp_deployment_source_config_command_builder.prototype.pythonVersion = function (value) {
        this.setFlag("--python-version", value);
        return this;
    };
    /** Repository type. */
    az_functionapp_deployment_source_config_command_builder.prototype.repositoryType = function (value) {
        this.setFlag("--repository-type", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_source_config_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_source_config_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name of the slot to be used for deployment and later promote to production. If slot is not available, it will be created. Default: Not configured. */
    az_functionapp_deployment_source_config_command_builder.prototype.slotSwap = function (value) {
        this.setFlag("--slot-swap", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_source_config_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the web app to be used for load testing. If web app is not available, it will be created. Default: Disable. */
    az_functionapp_deployment_source_config_command_builder.prototype.test = function (value) {
        this.setFlag("--test", value);
        return this;
    };
    return az_functionapp_deployment_source_config_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_source_config_local_git_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_source_config_local_git_command_builder, _super);
    function az_functionapp_deployment_source_config_local_git_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_source_config_local_git_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_source_config_local_git_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_source_config_local_git_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_source_config_local_git_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_source_config_local_git_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_source_config_local_git_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_source_config_zip_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_source_config_zip_command_builder, _super);
    function az_functionapp_deployment_source_config_zip_command_builder(commandPath, resultDataTypeName, src) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.src(src);
        return _this;
    }
    /** A zip file path for deployment. */
    az_functionapp_deployment_source_config_zip_command_builder.prototype.src = function (value) {
        this.setFlag("--src", value);
        return this;
    };
    /** Enable remote build during deployment. */
    az_functionapp_deployment_source_config_zip_command_builder.prototype.buildRemote = function (value) {
        this.setFlag("--build-remote", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_source_config_zip_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_source_config_zip_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_source_config_zip_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_source_config_zip_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_source_config_zip_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Configurable timeout in seconds for checking the status of deployment. */
    az_functionapp_deployment_source_config_zip_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    return az_functionapp_deployment_source_config_zip_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_source_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_source_delete_command_builder, _super);
    function az_functionapp_deployment_source_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_source_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_source_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_source_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_source_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_source_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_source_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_source_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_source_show_command_builder, _super);
    function az_functionapp_deployment_source_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_source_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_source_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_deployment_source_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_source_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_source_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_source_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_source_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_source_sync_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_source_sync_command_builder, _super);
    function az_functionapp_deployment_source_sync_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_source_sync_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_source_sync_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_source_sync_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_source_sync_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_source_sync_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_source_sync_command_builder;
}(base_1.CommandBuilder));
/**
 * Update source control token cached in Azure app service.
 *
 * Syntax:
 * ```
 * az functionapp deployment source update-token [--git-token]
 *                                               [--subscription]
 * ```
 */
var az_functionapp_deployment_source_update_token_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_source_update_token_command_builder, _super);
    function az_functionapp_deployment_source_update_token_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Git access token required for auto sync. */
    az_functionapp_deployment_source_update_token_command_builder.prototype.gitToken = function (value) {
        this.setFlag("--git-token", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_source_update_token_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_source_update_token_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_user_set_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_user_set_command_builder, _super);
    function az_functionapp_deployment_user_set_command_builder(commandPath, resultDataTypeName, userName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.userName(userName);
        return _this;
    }
    /** User name. */
    az_functionapp_deployment_user_set_command_builder.prototype.userName = function (value) {
        this.setFlag("--user-name", value);
        return this;
    };
    /** Password, will prompt if not specified. */
    az_functionapp_deployment_user_set_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_user_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_user_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets publishing user.
 *
 * Syntax:
 * ```
 * az functionapp deployment user show [--query-examples]
 *                                     [--subscription]
 * ```
 */
var az_functionapp_deployment_user_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_user_show_command_builder, _super);
    function az_functionapp_deployment_user_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_deployment_user_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_user_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_user_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_list_publishing_credentials_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_list_publishing_credentials_command_builder, _super);
    function az_functionapp_deployment_list_publishing_credentials_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_list_publishing_credentials_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_list_publishing_credentials_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_list_publishing_credentials_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_list_publishing_credentials_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_list_publishing_credentials_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_deployment_list_publishing_credentials_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_deployment_list_publishing_profiles_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_deployment_list_publishing_profiles_command_builder, _super);
    function az_functionapp_deployment_list_publishing_profiles_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_deployment_list_publishing_profiles_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_deployment_list_publishing_profiles_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_deployment_list_publishing_profiles_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_deployment_list_publishing_profiles_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_deployment_list_publishing_profiles_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Retrieves the publishing profile details in XML format. */
    az_functionapp_deployment_list_publishing_profiles_command_builder.prototype.xml = function (value) {
        this.setFlag("--xml", value);
        return this;
    };
    return az_functionapp_deployment_list_publishing_profiles_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_devops_pipeline_create_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_devops_pipeline_create_command_builder, _super);
    function az_functionapp_devops_pipeline_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** If Azure DevOps repository is not clean, should it overwrite remote content? */
    az_functionapp_devops_pipeline_create_command_builder.prototype.allowForcePush = function (value) {
        this.setFlag("--allow-force-push", value.toString());
        return this;
    };
    /** Name of the Azure function app that you want to use. */
    az_functionapp_devops_pipeline_create_command_builder.prototype.functionappName = function (value) {
        this.setFlag("--functionapp-name", value);
        return this;
    };
    /** Github personal access token for creating pipeline from Github repository. */
    az_functionapp_devops_pipeline_create_command_builder.prototype.githubPat = function (value) {
        this.setFlag("--github-pat", value);
        return this;
    };
    /** Fullname of your Github repository (e.g. Azure/azure-cli). */
    az_functionapp_devops_pipeline_create_command_builder.prototype.githubRepository = function (value) {
        this.setFlag("--github-repository", value);
        return this;
    };
    /** Name of the Azure DevOps organization that you want to use. */
    az_functionapp_devops_pipeline_create_command_builder.prototype.organizationName = function (value) {
        this.setFlag("--organization-name", value);
        return this;
    };
    /** If you have an existing yaml, should it be overwritten? */
    az_functionapp_devops_pipeline_create_command_builder.prototype.overwriteYaml = function (value) {
        this.setFlag("--overwrite-yaml", value.toString());
        return this;
    };
    /** Name of the Azure DevOps project that you want to use. */
    az_functionapp_devops_pipeline_create_command_builder.prototype.projectName = function (value) {
        this.setFlag("--project-name", value);
        return this;
    };
    /** Name of the Azure DevOps repository that you want to use. */
    az_functionapp_devops_pipeline_create_command_builder.prototype.repositoryName = function (value) {
        this.setFlag("--repository-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_devops_pipeline_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_devops_pipeline_create_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_function_keys_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_function_keys_delete_command_builder, _super);
    function az_functionapp_function_keys_delete_command_builder(commandPath, resultDataTypeName, keyName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyName(keyName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the key to set. */
    az_functionapp_function_keys_delete_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_function_keys_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_function_keys_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Function. */
    az_functionapp_function_keys_delete_command_builder.prototype.functionName = function (value) {
        this.setFlag("--function-name", value);
        return this;
    };
    /** The name of the slot. Defaults to the productions slot if not specified. */
    az_functionapp_function_keys_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_function_keys_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_function_keys_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_function_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_function_keys_list_command_builder, _super);
    function az_functionapp_function_keys_list_command_builder(commandPath, resultDataTypeName, functionName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.functionName(functionName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Function. */
    az_functionapp_function_keys_list_command_builder.prototype.functionName = function (value) {
        this.setFlag("--function-name", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_function_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_function_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_function_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Defaults to the productions slot if not specified. */
    az_functionapp_function_keys_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_function_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_function_keys_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_function_keys_set_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_function_keys_set_command_builder, _super);
    function az_functionapp_function_keys_set_command_builder(commandPath, resultDataTypeName, functionName, keyName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.functionName(functionName);
        _this.keyName(keyName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Function. */
    az_functionapp_function_keys_set_command_builder.prototype.functionName = function (value) {
        this.setFlag("--function-name", value);
        return this;
    };
    /** Name of the key to set. */
    az_functionapp_function_keys_set_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_function_keys_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_function_keys_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Value of the new key. If not provided, a value will be generated. */
    az_functionapp_function_keys_set_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** The name of the slot. Defaults to the productions slot if not specified. */
    az_functionapp_function_keys_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_function_keys_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_function_keys_set_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_function_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_function_delete_command_builder, _super);
    function az_functionapp_function_delete_command_builder(commandPath, resultDataTypeName, functionName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.functionName(functionName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Function. */
    az_functionapp_function_delete_command_builder.prototype.functionName = function (value) {
        this.setFlag("--function-name", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_function_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_function_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_function_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_function_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_function_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_function_show_command_builder, _super);
    function az_functionapp_function_show_command_builder(commandPath, resultDataTypeName, functionName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.functionName(functionName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Function. */
    az_functionapp_function_show_command_builder.prototype.functionName = function (value) {
        this.setFlag("--function-name", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_function_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_function_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_function_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_function_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_function_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_hybrid_connection_add_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_hybrid_connection_add_command_builder, _super);
    function az_functionapp_hybrid_connection_add_command_builder(commandPath, resultDataTypeName, hybridConnection, name, namespace, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hybridConnection(hybridConnection);
        _this.name(name);
        _this.namespace(namespace);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Hybrid connection name. */
    az_functionapp_hybrid_connection_add_command_builder.prototype.hybridConnection = function (value) {
        this.setFlag("--hybrid-connection", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_hybrid_connection_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Hybrid connection namespace. */
    az_functionapp_hybrid_connection_add_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_hybrid_connection_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_hybrid_connection_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_hybrid_connection_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_hybrid_connection_add_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_hybrid_connection_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_hybrid_connection_list_command_builder, _super);
    function az_functionapp_hybrid_connection_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the function app. */
    az_functionapp_hybrid_connection_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_hybrid_connection_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_hybrid_connection_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_hybrid_connection_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_hybrid_connection_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_hybrid_connection_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_hybrid_connection_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_hybrid_connection_remove_command_builder, _super);
    function az_functionapp_hybrid_connection_remove_command_builder(commandPath, resultDataTypeName, hybridConnection, name, namespace, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hybridConnection(hybridConnection);
        _this.name(name);
        _this.namespace(namespace);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Hybrid connection name. */
    az_functionapp_hybrid_connection_remove_command_builder.prototype.hybridConnection = function (value) {
        this.setFlag("--hybrid-connection", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_hybrid_connection_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Hybrid connection namespace. */
    az_functionapp_hybrid_connection_remove_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_hybrid_connection_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_hybrid_connection_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_hybrid_connection_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_hybrid_connection_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_identity_assign_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_identity_assign_command_builder, _super);
    function az_functionapp_identity_assign_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    az_functionapp_identity_assign_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_identity_assign_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_identity_assign_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_identity_assign_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Role name or id the managed identity will be assigned. */
    az_functionapp_identity_assign_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** The scope the managed identity has access to. */
    az_functionapp_identity_assign_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_identity_assign_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_identity_assign_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_identity_assign_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_identity_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_identity_remove_command_builder, _super);
    function az_functionapp_identity_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    az_functionapp_identity_remove_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_identity_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_identity_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_identity_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_identity_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_identity_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_identity_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_identity_show_command_builder, _super);
    function az_functionapp_identity_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_identity_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_identity_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_identity_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_identity_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_keys_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_keys_delete_command_builder, _super);
    function az_functionapp_keys_delete_command_builder(commandPath, resultDataTypeName, keyName, keyType, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyName(keyName);
        _this.keyType(keyType);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the key to set. */
    az_functionapp_keys_delete_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Type of key. */
    az_functionapp_keys_delete_command_builder.prototype.keyType = function (value) {
        this.setFlag("--key-type", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_keys_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_keys_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Defaults to the productions slot if not specified. */
    az_functionapp_keys_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_keys_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_keys_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_keys_list_command_builder, _super);
    function az_functionapp_keys_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the function app. */
    az_functionapp_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Defaults to the productions slot if not specified. */
    az_functionapp_keys_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_keys_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_keys_set_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_keys_set_command_builder, _super);
    function az_functionapp_keys_set_command_builder(commandPath, resultDataTypeName, keyName, keyType, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyName(keyName);
        _this.keyType(keyType);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the key to set. */
    az_functionapp_keys_set_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Type of key. */
    az_functionapp_keys_set_command_builder.prototype.keyType = function (value) {
        this.setFlag("--key-type", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_keys_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_keys_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Value of the new key. If not provided, a value will be generated. */
    az_functionapp_keys_set_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** The name of the slot. Defaults to the productions slot if not specified. */
    az_functionapp_keys_set_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_keys_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_keys_set_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_log_deployment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_log_deployment_list_command_builder, _super);
    function az_functionapp_log_deployment_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the function app. */
    az_functionapp_log_deployment_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_log_deployment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_log_deployment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_log_deployment_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_log_deployment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_log_deployment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_log_deployment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_log_deployment_show_command_builder, _super);
    function az_functionapp_log_deployment_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the function app. */
    az_functionapp_log_deployment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_log_deployment_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Deployment ID. If none specified, returns the deployment logs of the latest deployment. */
    az_functionapp_log_deployment_show_command_builder.prototype.deploymentId = function (value) {
        this.setFlag("--deployment-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_log_deployment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_log_deployment_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_log_deployment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_log_deployment_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_plan_create_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_plan_create_command_builder, _super);
    function az_functionapp_plan_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, sku) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sku(sku);
        return _this;
    }
    /** The name of the app service plan. */
    az_functionapp_plan_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_plan_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The SKU of the app service plan. */
    az_functionapp_plan_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Host function app on Linux worker. */
    az_functionapp_plan_create_command_builder.prototype.isLinux = function (value) {
        this.setFlag("--is-linux", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_functionapp_plan_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The maximum number of elastic workers for the plan. */
    az_functionapp_plan_create_command_builder.prototype.maxBurst = function (value) {
        this.setFlag("--max-burst", value);
        return this;
    };
    /** The number of workers for the app service plan. */
    az_functionapp_plan_create_command_builder.prototype.numberOfWorkers = function (value) {
        this.setFlag("--number-of-workers", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_plan_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_functionapp_plan_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_functionapp_plan_create_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_plan_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_plan_delete_command_builder, _super);
    function az_functionapp_plan_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_plan_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the app service plan. */
    az_functionapp_plan_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_plan_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_plan_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_functionapp_plan_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_functionapp_plan_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_plan_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_plan_list_command_builder, _super);
    function az_functionapp_plan_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_plan_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_plan_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_plan_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_plan_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_plan_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_plan_show_command_builder, _super);
    function az_functionapp_plan_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_plan_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the app service plan. */
    az_functionapp_plan_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_plan_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_plan_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_plan_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_plan_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_plan_update_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_plan_update_command_builder, _super);
    function az_functionapp_plan_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_functionapp_plan_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_functionapp_plan_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_plan_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The maximum number of elastic workers for the plan. */
    az_functionapp_plan_update_command_builder.prototype.maxBurst = function (value) {
        this.setFlag("--max-burst", value);
        return this;
    };
    /** The number of workers for the app service plan. */
    az_functionapp_plan_update_command_builder.prototype.numberOfWorkers = function (value) {
        this.setFlag("--number-of-workers", value);
        return this;
    };
    /** The name of the app service plan. */
    az_functionapp_plan_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_functionapp_plan_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_plan_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_functionapp_plan_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The SKU of the app service plan. */
    az_functionapp_plan_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_plan_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_plan_update_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_vnet_integration_add_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_vnet_integration_add_command_builder, _super);
    function az_functionapp_vnet_integration_add_command_builder(commandPath, resultDataTypeName, name, resourceGroup, subnet, vnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.subnet(subnet);
        _this.vnet(vnet);
        return _this;
    }
    /** Name of the function app. */
    az_functionapp_vnet_integration_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_vnet_integration_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the subnet. */
    az_functionapp_vnet_integration_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** The name or resource ID of the Vnet. */
    az_functionapp_vnet_integration_add_command_builder.prototype.vnet = function (value) {
        this.setFlag("--vnet", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_vnet_integration_add_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_vnet_integration_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_vnet_integration_add_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_vnet_integration_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_vnet_integration_list_command_builder, _super);
    function az_functionapp_vnet_integration_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the function app. */
    az_functionapp_vnet_integration_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_vnet_integration_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_vnet_integration_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_vnet_integration_list_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_vnet_integration_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_vnet_integration_list_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_vnet_integration_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_vnet_integration_remove_command_builder, _super);
    function az_functionapp_vnet_integration_remove_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the function app. */
    az_functionapp_vnet_integration_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_vnet_integration_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_vnet_integration_remove_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_vnet_integration_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_vnet_integration_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_create_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_create_command_builder, _super);
    function az_functionapp_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, storageAccount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.storageAccount(storageAccount);
        return _this;
    }
    /** Name of the new function app. */
    az_functionapp_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Provide a string value of a Storage Account in the provided Resource Group. Or Resource ID of a Storage Account in a different Resource Group. */
    az_functionapp_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name of the existing App Insights project to be added to the Function app. Must be in the same resource group. */
    az_functionapp_create_command_builder.prototype.appInsights = function (value) {
        this.setFlag("--app-insights", value);
        return this;
    };
    /** Instrumentation key of App Insights to be added. */
    az_functionapp_create_command_builder.prototype.appInsightsKey = function (value) {
        this.setFlag("--app-insights-key", value);
        return this;
    };
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    az_functionapp_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Geographic location where Function App will be hosted. Use `az functionapp list-consumption-locations` to view available locations. */
    az_functionapp_create_command_builder.prototype.consumptionPlanLocation = function (value) {
        this.setFlag("--consumption-plan-location", value);
        return this;
    };
    /** Linux only. Container image name from Docker Hub, e.g. publisher/image-name:tag. */
    az_functionapp_create_command_builder.prototype.deploymentContainerImageName = function (value) {
        this.setFlag("--deployment-container-image-name", value);
        return this;
    };
    /** Enable local git. */
    az_functionapp_create_command_builder.prototype.deploymentLocalGit = function (value) {
        this.setFlag("--deployment-local-git", value);
        return this;
    };
    /** The branch to deploy. */
    az_functionapp_create_command_builder.prototype.deploymentSourceBranch = function (value) {
        this.setFlag("--deployment-source-branch", value);
        return this;
    };
    /** Git repository URL to link with manual integration. */
    az_functionapp_create_command_builder.prototype.deploymentSourceUrl = function (value) {
        this.setFlag("--deployment-source-url", value);
        return this;
    };
    /** Disable creating application insights resource during functionapp create. No logs will be available. */
    az_functionapp_create_command_builder.prototype.disableAppInsights = function (value) {
        this.setFlag("--disable-app-insights", value.toString());
        return this;
    };
    /** The container registry server password. Required for private registries. */
    az_functionapp_create_command_builder.prototype.dockerRegistryServerPassword = function (value) {
        this.setFlag("--docker-registry-server-password", value);
        return this;
    };
    /** The container registry server username. */
    az_functionapp_create_command_builder.prototype.dockerRegistryServerUser = function (value) {
        this.setFlag("--docker-registry-server-user", value);
        return this;
    };
    /** The functions app version. */
    az_functionapp_create_command_builder.prototype.functionsVersion = function (value) {
        this.setFlag("--functions-version", value);
        return this;
    };
    /** Set the OS type for the app to be created. */
    az_functionapp_create_command_builder.prototype.osType = function (value) {
        this.setFlag("--os-type", value);
        return this;
    };
    /** Name or resource id of the function app service plan. Use 'appservice plan create' to get one. */
    az_functionapp_create_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Role name or id the system assigned identity will have. */
    az_functionapp_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** The functions runtime stack. */
    az_functionapp_create_command_builder.prototype.runtime = function (value) {
        this.setFlag("--runtime", value);
        return this;
    };
    /** The version of the functions runtime stack. Allowed values for each --runtime are: node -> [8, 10, 12], java -> [8, 11 (preview)], powershell -> [7.0], python -> [3.6, 3.7, 3.8]. */
    az_functionapp_create_command_builder.prototype.runtimeVersion = function (value) {
        this.setFlag("--runtime-version", value);
        return this;
    };
    /** Scope that the system assigned identity can access. */
    az_functionapp_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_functionapp_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_functionapp_create_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_delete_command_builder, _super);
    function az_functionapp_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_delete_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_list_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_list_command_builder, _super);
    function az_functionapp_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List available locations for running function apps.
 *
 * Syntax:
 * ```
 * az functionapp list-consumption-locations [--subscription]
 * ```
 */
var az_functionapp_list_consumption_locations_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_list_consumption_locations_command_builder, _super);
    function az_functionapp_list_consumption_locations_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_list_consumption_locations_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_list_consumption_locations_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_restart_command_builder, _super);
    function az_functionapp_restart_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_restart_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_restart_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_restart_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_show_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_show_command_builder, _super);
    function az_functionapp_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_functionapp_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_show_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_show_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_start_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_start_command_builder, _super);
    function az_functionapp_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_start_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_start_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_stop_command_builder, _super);
    function az_functionapp_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the slot. Default to the productions slot if not specified. */
    az_functionapp_stop_command_builder.prototype.slot = function (value) {
        this.setFlag("--slot", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_stop_command_builder;
}(base_1.CommandBuilder));
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
var az_functionapp_update_command_builder = /** @class */ (function (_super) {
    __extends(az_functionapp_update_command_builder, _super);
    function az_functionapp_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_functionapp_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_functionapp_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_functionapp_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the function app. */
    az_functionapp_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name or resource id of the plan to update the functionapp with. */
    az_functionapp_update_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_functionapp_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_functionapp_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_functionapp_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_functionapp_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_functionapp_update_command_builder;
}(base_1.CommandBuilder));
