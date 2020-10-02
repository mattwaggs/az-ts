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
exports.az_staticwebapp = exports.az_staticwebapp_users = exports.az_staticwebapp_hostname = exports.az_staticwebapp_environment = exports.az_staticwebapp_appsettings = void 0;
var base_1 = require("../base");
/** Manage app settings of Functions of the static app. */
var az_staticwebapp_appsettings = /** @class */ (function () {
    function az_staticwebapp_appsettings() {
    }
    /**
     * Delete function app settings with given keys of the static app.
     *
     * Syntax:
     * ```
     * az staticwebapp appsettings delete --name
     *                                    --setting-names
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     * @param {string} settingNames Space-separated app setting names.
     */
    az_staticwebapp_appsettings["delete"] = function (name, settingNames) {
        return new az_staticwebapp_appsettings_delete_command_builder("az staticwebapp appsettings delete", 'az_staticwebapp_appsettings_delete_command_result', name, settingNames);
    };
    /**
     * List function app settings of the static app. A function must first be deployed to use this method.
     *
     * Syntax:
     * ```
     * az staticwebapp appsettings list --name
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     */
    az_staticwebapp_appsettings.list = function (name) {
        return new az_staticwebapp_appsettings_list_command_builder("az staticwebapp appsettings list", 'az_staticwebapp_appsettings_list_command_result', name);
    };
    /**
     * Set (replace) function app settings of the static app.
     *
     * Syntax:
     * ```
     * az staticwebapp appsettings set --name
     *                                 --setting-names
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     * @param {string} settingNames Space-separated app settings in 'key=value' format.
     */
    az_staticwebapp_appsettings.set = function (name, settingNames) {
        return new az_staticwebapp_appsettings_set_command_builder("az staticwebapp appsettings set", 'az_staticwebapp_appsettings_set_command_result', name, settingNames);
    };
    return az_staticwebapp_appsettings;
}());
exports.az_staticwebapp_appsettings = az_staticwebapp_appsettings;
/** Manage environment of the static app. */
var az_staticwebapp_environment = /** @class */ (function () {
    function az_staticwebapp_environment() {
    }
    /**
     * Show information about functions.
     *
     * Syntax:
     * ```
     * az staticwebapp environment functions --name
     *                                       [--environment-name]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     */
    az_staticwebapp_environment.functions = function (name) {
        return new az_staticwebapp_environment_functions_command_builder("az staticwebapp environment functions", 'az_staticwebapp_environment_functions_command_result', name);
    };
    /**
     * List all environment of the static app including production.
     *
     * Syntax:
     * ```
     * az staticwebapp environment list --name
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     */
    az_staticwebapp_environment.list = function (name) {
        return new az_staticwebapp_environment_list_command_builder("az staticwebapp environment list", 'az_staticwebapp_environment_list_command_result', name);
    };
    /**
     * Show information about the production environment or the specified environment.
     *
     * Syntax:
     * ```
     * az staticwebapp environment show --name
     *                                  [--environment-name]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     */
    az_staticwebapp_environment.show = function (name) {
        return new az_staticwebapp_environment_show_command_builder("az staticwebapp environment show", 'az_staticwebapp_environment_show_command_result', name);
    };
    return az_staticwebapp_environment;
}());
exports.az_staticwebapp_environment = az_staticwebapp_environment;
/** Manage custom hostnames of Functions of the static app. */
var az_staticwebapp_hostname = /** @class */ (function () {
    function az_staticwebapp_hostname() {
    }
    /**
     * Delete given hostname of the static app.
     *
     * Syntax:
     * ```
     * az staticwebapp hostname delete --hostname
     *                                 --name
     *                                 [--no-wait]
     *                                 [--resource-group]
     *                                 [--subscription]
     *                                 [--yes]
     * ```
     *
     * @param {string} hostname Custom hostname such as www.example.com. Only support sub domain in preview.
     * @param {string} name Name of the static site.
     */
    az_staticwebapp_hostname["delete"] = function (hostname, name) {
        return new az_staticwebapp_hostname_delete_command_builder("az staticwebapp hostname delete", 'az_staticwebapp_hostname_delete_command_result', hostname, name);
    };
    /**
     * List custom hostnames of the static app.
     *
     * Syntax:
     * ```
     * az staticwebapp hostname list --name
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     */
    az_staticwebapp_hostname.list = function (name) {
        return new az_staticwebapp_hostname_list_command_builder("az staticwebapp hostname list", 'az_staticwebapp_hostname_list_command_result', name);
    };
    /**
     * Set given sub-domain hostname to the static app. Please configure a CNAME record with your DNS provider.
     *
     * Syntax:
     * ```
     * az staticwebapp hostname set --hostname
     *                              --name
     *                              [--no-wait]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} hostname Custom hostname such as www.example.com. Only support sub domain in preview.
     * @param {string} name Name of the static site.
     */
    az_staticwebapp_hostname.set = function (hostname, name) {
        return new az_staticwebapp_hostname_set_command_builder("az staticwebapp hostname set", 'az_staticwebapp_hostname_set_command_result', hostname, name);
    };
    return az_staticwebapp_hostname;
}());
exports.az_staticwebapp_hostname = az_staticwebapp_hostname;
/** Manage users of the static app. */
var az_staticwebapp_users = /** @class */ (function () {
    function az_staticwebapp_users() {
    }
    /**
     * Create invitation link for specified user to the static app.
     *
     * Syntax:
     * ```
     * az staticwebapp users invite --authentication-provider
     *                              --domain
     *                              --invitation-expiration-in-hours
     *                              --name
     *                              --roles
     *                              --user-details
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} authenticationProvider Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter.
     * @param {string} domain A domain added to the static app in quotes.
     * @param {string} invitationExpirationInHours This value sets when the link will expire in hours. The maximum is 168 (7 days).
     * @param {string} name Name of the static site.
     * @param {string} roles Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo.
     * @param {string} userDetails Email for AAD, Facebook, and Google. Account name (handle) for GitHub and Twitter.
     */
    az_staticwebapp_users.invite = function (authenticationProvider, domain, invitationExpirationInHours, name, roles, userDetails) {
        return new az_staticwebapp_users_invite_command_builder("az staticwebapp users invite", 'az_staticwebapp_users_invite_command_result', authenticationProvider, domain, invitationExpirationInHours, name, roles, userDetails);
    };
    /**
     * Lists users and assigned roles, limited to users who accepted their invites.
     *
     * Syntax:
     * ```
     * az staticwebapp users list --name
     *                            [--authentication-provider]
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     */
    az_staticwebapp_users.list = function (name) {
        return new az_staticwebapp_users_list_command_builder("az staticwebapp users list", 'az_staticwebapp_users_list_command_result', name);
    };
    /**
     * Updates a user entry with the listed roles. Either user details or user id is required.
     *
     * Syntax:
     * ```
     * az staticwebapp users update --name
     *                              --roles
     *                              [--authentication-provider]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--user-details]
     *                              [--user-id]
     * ```
     *
     * @param {string} name Name of the static site.
     * @param {string} roles Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo.
     */
    az_staticwebapp_users.update = function (name, roles) {
        return new az_staticwebapp_users_update_command_builder("az staticwebapp users update", 'az_staticwebapp_users_update_command_result', name, roles);
    };
    return az_staticwebapp_users;
}());
exports.az_staticwebapp_users = az_staticwebapp_users;
/** Manage static apps. */
var az_staticwebapp = /** @class */ (function () {
    function az_staticwebapp() {
    }
    /**
     * Show details of a static app.
     *
     * Syntax:
     * ```
     * az staticwebapp browse --name
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     */
    az_staticwebapp.browse = function (name) {
        return new az_staticwebapp_browse_command_builder("az staticwebapp browse", 'az_staticwebapp_browse_command_result', name);
    };
    /**
     * Create a static app with content from GitHubRepository URL provided in source on provided branch. Return the app created.
     *
     * Syntax:
     * ```
     * az staticwebapp create --branch
     *                        --location
     *                        --name
     *                        --resource-group
     *                        --source
     *                        [--api-location]
     *                        [--app-artifact-location]
     *                        [--app-location]
     *                        [--no-wait]
     *                        [--subscription]
     *                        [--tags]
     *                        [--token]
     * ```
     *
     * @param {string} branch The target branch in the repository.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the static site.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} source URL for the repository of the static site.
     */
    az_staticwebapp.create = function (branch, location, name, resourceGroup, source) {
        return new az_staticwebapp_create_command_builder("az staticwebapp create", 'az_staticwebapp_create_command_result', branch, location, name, resourceGroup, source);
    };
    /**
     * Delete a static app.
     *
     * Syntax:
     * ```
     * az staticwebapp delete --name
     *                        [--no-wait]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {string} name Name of the static site.
     */
    az_staticwebapp["delete"] = function (name) {
        return new az_staticwebapp_delete_command_builder("az staticwebapp delete", 'az_staticwebapp_delete_command_result', name);
    };
    /**
     * Disconnect source control to enable connecting to a different repo.
     *
     * Syntax:
     * ```
     * az staticwebapp disconnect --name
     *                            [--no-wait]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of the static site.
     */
    az_staticwebapp.disconnect = function (name) {
        return new az_staticwebapp_disconnect_command_builder("az staticwebapp disconnect", 'az_staticwebapp_disconnect_command_result', name);
    };
    /**
     * List all static app resources in a subscription, or in resource group if provided.
     *
     * Syntax:
     * ```
     * az staticwebapp list [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_staticwebapp.list = function () {
        return new az_staticwebapp_list_command_builder("az staticwebapp list", 'az_staticwebapp_list_command_result');
    };
    /**
     * Connect to a repo and branch following a disconnect command.
     *
     * Syntax:
     * ```
     * az staticwebapp reconnect --branch
     *                           --name
     *                           --source
     *                           [--no-wait]
     *                           [--resource-group]
     *                           [--subscription]
     *                           [--token]
     * ```
     *
     * @param {string} branch The target branch in the repository.
     * @param {string} name Name of the static site.
     * @param {string} source URL for the repository of the static site.
     */
    az_staticwebapp.reconnect = function (branch, name, source) {
        return new az_staticwebapp_reconnect_command_builder("az staticwebapp reconnect", 'az_staticwebapp_reconnect_command_result', branch, name, source);
    };
    return az_staticwebapp;
}());
exports.az_staticwebapp = az_staticwebapp;
/**
 * Delete function app settings with given keys of the static app.
 *
 * Syntax:
 * ```
 * az staticwebapp appsettings delete --name
 *                                    --setting-names
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 * @param {string} settingNames Space-separated app setting names.
 */
var az_staticwebapp_appsettings_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_appsettings_delete_command_builder, _super);
    function az_staticwebapp_appsettings_delete_command_builder(commandPath, resultDataTypeName, name, settingNames) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.settingNames(settingNames);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_appsettings_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Space-separated app setting names. */
    az_staticwebapp_appsettings_delete_command_builder.prototype.settingNames = function (value) {
        this.setFlag("--setting-names", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_appsettings_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_appsettings_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_appsettings_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List function app settings of the static app. A function must first be deployed to use this method.
 *
 * Syntax:
 * ```
 * az staticwebapp appsettings list --name
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_appsettings_list_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_appsettings_list_command_builder, _super);
    function az_staticwebapp_appsettings_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_appsettings_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_staticwebapp_appsettings_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_appsettings_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_appsettings_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_appsettings_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set (replace) function app settings of the static app.
 *
 * Syntax:
 * ```
 * az staticwebapp appsettings set --name
 *                                 --setting-names
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 * @param {string} settingNames Space-separated app settings in 'key=value' format.
 */
var az_staticwebapp_appsettings_set_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_appsettings_set_command_builder, _super);
    function az_staticwebapp_appsettings_set_command_builder(commandPath, resultDataTypeName, name, settingNames) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.settingNames(settingNames);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_appsettings_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Space-separated app settings in 'key=value' format. */
    az_staticwebapp_appsettings_set_command_builder.prototype.settingNames = function (value) {
        this.setFlag("--setting-names", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_appsettings_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_appsettings_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_appsettings_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show information about functions.
 *
 * Syntax:
 * ```
 * az staticwebapp environment functions --name
 *                                       [--environment-name]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_environment_functions_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_environment_functions_command_builder, _super);
    function az_staticwebapp_environment_functions_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_environment_functions_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the environment of static site. */
    az_staticwebapp_environment_functions_command_builder.prototype.environmentName = function (value) {
        this.setFlag("--environment-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_environment_functions_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_environment_functions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_environment_functions_command_builder;
}(base_1.CommandBuilder));
/**
 * List all environment of the static app including production.
 *
 * Syntax:
 * ```
 * az staticwebapp environment list --name
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_environment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_environment_list_command_builder, _super);
    function az_staticwebapp_environment_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_environment_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_staticwebapp_environment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_environment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_environment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_environment_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show information about the production environment or the specified environment.
 *
 * Syntax:
 * ```
 * az staticwebapp environment show --name
 *                                  [--environment-name]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_environment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_environment_show_command_builder, _super);
    function az_staticwebapp_environment_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_environment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the environment of static site. */
    az_staticwebapp_environment_show_command_builder.prototype.environmentName = function (value) {
        this.setFlag("--environment-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_staticwebapp_environment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_environment_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_environment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_environment_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete given hostname of the static app.
 *
 * Syntax:
 * ```
 * az staticwebapp hostname delete --hostname
 *                                 --name
 *                                 [--no-wait]
 *                                 [--resource-group]
 *                                 [--subscription]
 *                                 [--yes]
 * ```
 *
 * @param {string} hostname Custom hostname such as www.example.com. Only support sub domain in preview.
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_hostname_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_hostname_delete_command_builder, _super);
    function az_staticwebapp_hostname_delete_command_builder(commandPath, resultDataTypeName, hostname, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hostname(hostname);
        _this.name(name);
        return _this;
    }
    /** Custom hostname such as www.example.com. Only support sub domain in preview. */
    az_staticwebapp_hostname_delete_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** Name of the static site. */
    az_staticwebapp_hostname_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_staticwebapp_hostname_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_hostname_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_hostname_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_staticwebapp_hostname_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_staticwebapp_hostname_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List custom hostnames of the static app.
 *
 * Syntax:
 * ```
 * az staticwebapp hostname list --name
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_hostname_list_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_hostname_list_command_builder, _super);
    function az_staticwebapp_hostname_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_hostname_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_staticwebapp_hostname_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_hostname_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_hostname_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_hostname_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set given sub-domain hostname to the static app. Please configure a CNAME record with your DNS provider.
 *
 * Syntax:
 * ```
 * az staticwebapp hostname set --hostname
 *                              --name
 *                              [--no-wait]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} hostname Custom hostname such as www.example.com. Only support sub domain in preview.
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_hostname_set_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_hostname_set_command_builder, _super);
    function az_staticwebapp_hostname_set_command_builder(commandPath, resultDataTypeName, hostname, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hostname(hostname);
        _this.name(name);
        return _this;
    }
    /** Custom hostname such as www.example.com. Only support sub domain in preview. */
    az_staticwebapp_hostname_set_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** Name of the static site. */
    az_staticwebapp_hostname_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_staticwebapp_hostname_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_hostname_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_hostname_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_hostname_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Create invitation link for specified user to the static app.
 *
 * Syntax:
 * ```
 * az staticwebapp users invite --authentication-provider
 *                              --domain
 *                              --invitation-expiration-in-hours
 *                              --name
 *                              --roles
 *                              --user-details
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} authenticationProvider Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter.
 * @param {string} domain A domain added to the static app in quotes.
 * @param {string} invitationExpirationInHours This value sets when the link will expire in hours. The maximum is 168 (7 days).
 * @param {string} name Name of the static site.
 * @param {string} roles Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo.
 * @param {string} userDetails Email for AAD, Facebook, and Google. Account name (handle) for GitHub and Twitter.
 */
var az_staticwebapp_users_invite_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_users_invite_command_builder, _super);
    function az_staticwebapp_users_invite_command_builder(commandPath, resultDataTypeName, authenticationProvider, domain, invitationExpirationInHours, name, roles, userDetails) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.authenticationProvider(authenticationProvider);
        _this.domain(domain);
        _this.invitationExpirationInHours(invitationExpirationInHours);
        _this.name(name);
        _this.roles(roles);
        _this.userDetails(userDetails);
        return _this;
    }
    /** Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter. */
    az_staticwebapp_users_invite_command_builder.prototype.authenticationProvider = function (value) {
        this.setFlag("--authentication-provider", value);
        return this;
    };
    /** A domain added to the static app in quotes. */
    az_staticwebapp_users_invite_command_builder.prototype.domain = function (value) {
        this.setFlag("--domain", value);
        return this;
    };
    /** This value sets when the link will expire in hours. The maximum is 168 (7 days). */
    az_staticwebapp_users_invite_command_builder.prototype.invitationExpirationInHours = function (value) {
        this.setFlag("--invitation-expiration-in-hours", value);
        return this;
    };
    /** Name of the static site. */
    az_staticwebapp_users_invite_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo. */
    az_staticwebapp_users_invite_command_builder.prototype.roles = function (value) {
        this.setFlag("--roles", value);
        return this;
    };
    /** Email for AAD, Facebook, and Google. Account name (handle) for GitHub and Twitter. */
    az_staticwebapp_users_invite_command_builder.prototype.userDetails = function (value) {
        this.setFlag("--user-details", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_users_invite_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_users_invite_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_users_invite_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists users and assigned roles, limited to users who accepted their invites.
 *
 * Syntax:
 * ```
 * az staticwebapp users list --name
 *                            [--authentication-provider]
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_users_list_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_users_list_command_builder, _super);
    function az_staticwebapp_users_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_users_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter. */
    az_staticwebapp_users_list_command_builder.prototype.authenticationProvider = function (value) {
        this.setFlag("--authentication-provider", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_staticwebapp_users_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_users_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_users_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_users_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates a user entry with the listed roles. Either user details or user id is required.
 *
 * Syntax:
 * ```
 * az staticwebapp users update --name
 *                              --roles
 *                              [--authentication-provider]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--user-details]
 *                              [--user-id]
 * ```
 *
 * @param {string} name Name of the static site.
 * @param {string} roles Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo.
 */
var az_staticwebapp_users_update_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_users_update_command_builder, _super);
    function az_staticwebapp_users_update_command_builder(commandPath, resultDataTypeName, name, roles) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.roles(roles);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_users_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo. */
    az_staticwebapp_users_update_command_builder.prototype.roles = function (value) {
        this.setFlag("--roles", value);
        return this;
    };
    /** Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter. */
    az_staticwebapp_users_update_command_builder.prototype.authenticationProvider = function (value) {
        this.setFlag("--authentication-provider", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_users_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_users_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Email for AAD, Facebook, and Google. Account name (handle) for GitHub and Twitter. */
    az_staticwebapp_users_update_command_builder.prototype.userDetails = function (value) {
        this.setFlag("--user-details", value);
        return this;
    };
    /** Given id of registered user. */
    az_staticwebapp_users_update_command_builder.prototype.userId = function (value) {
        this.setFlag("--user-id", value);
        return this;
    };
    return az_staticwebapp_users_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a static app.
 *
 * Syntax:
 * ```
 * az staticwebapp browse --name
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_browse_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_browse_command_builder, _super);
    function az_staticwebapp_browse_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_browse_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_browse_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_browse_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_browse_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a static app with content from GitHubRepository URL provided in source on provided branch. Return the app created.
 *
 * Syntax:
 * ```
 * az staticwebapp create --branch
 *                        --location
 *                        --name
 *                        --resource-group
 *                        --source
 *                        [--api-location]
 *                        [--app-artifact-location]
 *                        [--app-location]
 *                        [--no-wait]
 *                        [--subscription]
 *                        [--tags]
 *                        [--token]
 * ```
 *
 * @param {string} branch The target branch in the repository.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the static site.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} source URL for the repository of the static site.
 */
var az_staticwebapp_create_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_create_command_builder, _super);
    function az_staticwebapp_create_command_builder(commandPath, resultDataTypeName, branch, location, name, resourceGroup, source) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.branch(branch);
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.source(source);
        return _this;
    }
    /** The target branch in the repository. */
    az_staticwebapp_create_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_staticwebapp_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the static site. */
    az_staticwebapp_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** URL for the repository of the static site. */
    az_staticwebapp_create_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Location of your Azure Functions code. For example, '/api' represents a folder called 'api'. */
    az_staticwebapp_create_command_builder.prototype.apiLocation = function (value) {
        this.setFlag("--api-location", value);
        return this;
    };
    /** The path of your build output relative to your apps location. For example, setting a value of 'build' when your app location is set to '/app' will cause the content at '/app/build' to be served. */
    az_staticwebapp_create_command_builder.prototype.appArtifactLocation = function (value) {
        this.setFlag("--app-artifact-location", value);
        return this;
    };
    /** Location of your application code. For example, '/' represents the root of your app, while '/app' represents a directory called 'app'. */
    az_staticwebapp_create_command_builder.prototype.appLocation = function (value) {
        this.setFlag("--app-location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_staticwebapp_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_staticwebapp_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /**
     * A user's github repository token. This is used to setup the Github Actions workflow file and API secrets. If you need to create a Github Personal Access Token, please follow the steps found at the following link:
     * <a href="https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line">https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line</a>.
     */
    az_staticwebapp_create_command_builder.prototype.token = function (value) {
        this.setFlag("--token", value);
        return this;
    };
    return az_staticwebapp_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a static app.
 *
 * Syntax:
 * ```
 * az staticwebapp delete --name
 *                        [--no-wait]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_delete_command_builder, _super);
    function az_staticwebapp_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_staticwebapp_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_staticwebapp_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_staticwebapp_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Disconnect source control to enable connecting to a different repo.
 *
 * Syntax:
 * ```
 * az staticwebapp disconnect --name
 *                            [--no-wait]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of the static site.
 */
var az_staticwebapp_disconnect_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_disconnect_command_builder, _super);
    function az_staticwebapp_disconnect_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the static site. */
    az_staticwebapp_disconnect_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_staticwebapp_disconnect_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_disconnect_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_disconnect_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_disconnect_command_builder;
}(base_1.CommandBuilder));
/**
 * List all static app resources in a subscription, or in resource group if provided.
 *
 * Syntax:
 * ```
 * az staticwebapp list [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_staticwebapp_list_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_list_command_builder, _super);
    function az_staticwebapp_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_staticwebapp_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_staticwebapp_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Connect to a repo and branch following a disconnect command.
 *
 * Syntax:
 * ```
 * az staticwebapp reconnect --branch
 *                           --name
 *                           --source
 *                           [--no-wait]
 *                           [--resource-group]
 *                           [--subscription]
 *                           [--token]
 * ```
 *
 * @param {string} branch The target branch in the repository.
 * @param {string} name Name of the static site.
 * @param {string} source URL for the repository of the static site.
 */
var az_staticwebapp_reconnect_command_builder = /** @class */ (function (_super) {
    __extends(az_staticwebapp_reconnect_command_builder, _super);
    function az_staticwebapp_reconnect_command_builder(commandPath, resultDataTypeName, branch, name, source) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.branch(branch);
        _this.name(name);
        _this.source(source);
        return _this;
    }
    /** The target branch in the repository. */
    az_staticwebapp_reconnect_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Name of the static site. */
    az_staticwebapp_reconnect_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** URL for the repository of the static site. */
    az_staticwebapp_reconnect_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_staticwebapp_reconnect_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_staticwebapp_reconnect_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_staticwebapp_reconnect_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /**
     * A user's github repository token. This is used to setup the Github Actions workflow file and API secrets. If you need to create a Github Personal Access Token, please follow the steps found at the following link:
     * <a href="https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line">https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line</a>.
     */
    az_staticwebapp_reconnect_command_builder.prototype.token = function (value) {
        this.setFlag("--token", value);
        return this;
    };
    return az_staticwebapp_reconnect_command_builder;
}(base_1.CommandBuilder));
