import { CommandBuilder } from '../base';
import { az_staticwebapp_appsettings_delete_command_result } from './models/az_staticwebapp_appsettings_delete_command_result';
import { az_staticwebapp_appsettings_list_command_result } from './models/az_staticwebapp_appsettings_list_command_result';
import { az_staticwebapp_appsettings_set_command_result } from './models/az_staticwebapp_appsettings_set_command_result';
import { az_staticwebapp_environment_functions_command_result } from './models/az_staticwebapp_environment_functions_command_result';
import { az_staticwebapp_environment_list_command_result } from './models/az_staticwebapp_environment_list_command_result';
import { az_staticwebapp_environment_show_command_result } from './models/az_staticwebapp_environment_show_command_result';
import { az_staticwebapp_hostname_delete_command_result } from './models/az_staticwebapp_hostname_delete_command_result';
import { az_staticwebapp_hostname_list_command_result } from './models/az_staticwebapp_hostname_list_command_result';
import { az_staticwebapp_hostname_set_command_result } from './models/az_staticwebapp_hostname_set_command_result';
import { az_staticwebapp_users_invite_command_result } from './models/az_staticwebapp_users_invite_command_result';
import { az_staticwebapp_users_list_command_result } from './models/az_staticwebapp_users_list_command_result';
import { az_staticwebapp_users_update_command_result } from './models/az_staticwebapp_users_update_command_result';
import { az_staticwebapp_browse_command_result } from './models/az_staticwebapp_browse_command_result';
import { az_staticwebapp_create_command_result } from './models/az_staticwebapp_create_command_result';
import { az_staticwebapp_delete_command_result } from './models/az_staticwebapp_delete_command_result';
import { az_staticwebapp_disconnect_command_result } from './models/az_staticwebapp_disconnect_command_result';
import { az_staticwebapp_list_command_result } from './models/az_staticwebapp_list_command_result';
import { az_staticwebapp_reconnect_command_result } from './models/az_staticwebapp_reconnect_command_result';
/** Manage app settings of Functions of the static app. */
export declare class az_staticwebapp_appsettings {
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
    static delete(name: string, settingNames: string): az_staticwebapp_appsettings_delete_command_builder;
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
    static list(name: string): az_staticwebapp_appsettings_list_command_builder;
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
    static set(name: string, settingNames: string): az_staticwebapp_appsettings_set_command_builder;
}
/** Manage environment of the static app. */
export declare class az_staticwebapp_environment {
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
    static functions(name: string): az_staticwebapp_environment_functions_command_builder;
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
    static list(name: string): az_staticwebapp_environment_list_command_builder;
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
    static show(name: string): az_staticwebapp_environment_show_command_builder;
}
/** Manage custom hostnames of Functions of the static app. */
export declare class az_staticwebapp_hostname {
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
    static delete(hostname: string, name: string): az_staticwebapp_hostname_delete_command_builder;
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
    static list(name: string): az_staticwebapp_hostname_list_command_builder;
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
    static set(hostname: string, name: string): az_staticwebapp_hostname_set_command_builder;
}
/** Manage users of the static app. */
export declare class az_staticwebapp_users {
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
    static invite(authenticationProvider: string, domain: string, invitationExpirationInHours: string, name: string, roles: string, userDetails: string): az_staticwebapp_users_invite_command_builder;
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
    static list(name: string): az_staticwebapp_users_list_command_builder;
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
    static update(name: string, roles: string): az_staticwebapp_users_update_command_builder;
}
/** Manage static apps. */
export declare class az_staticwebapp {
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
    static browse(name: string): az_staticwebapp_browse_command_builder;
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
    static create(branch: string, location: string, name: string, resourceGroup: string, source: string): az_staticwebapp_create_command_builder;
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
    static delete(name: string): az_staticwebapp_delete_command_builder;
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
    static disconnect(name: string): az_staticwebapp_disconnect_command_builder;
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
    static list(): az_staticwebapp_list_command_builder;
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
    static reconnect(branch: string, name: string, source: string): az_staticwebapp_reconnect_command_builder;
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
declare class az_staticwebapp_appsettings_delete_command_builder extends CommandBuilder<az_staticwebapp_appsettings_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, settingNames: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_appsettings_delete_command_builder;
    /** Space-separated app setting names. */
    settingNames(value: string): az_staticwebapp_appsettings_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_appsettings_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_appsettings_delete_command_builder;
}
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
declare class az_staticwebapp_appsettings_list_command_builder extends CommandBuilder<az_staticwebapp_appsettings_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_appsettings_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_staticwebapp_appsettings_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_appsettings_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_appsettings_list_command_builder;
}
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
declare class az_staticwebapp_appsettings_set_command_builder extends CommandBuilder<az_staticwebapp_appsettings_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, settingNames: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_appsettings_set_command_builder;
    /** Space-separated app settings in 'key=value' format. */
    settingNames(value: string): az_staticwebapp_appsettings_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_appsettings_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_appsettings_set_command_builder;
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
declare class az_staticwebapp_environment_functions_command_builder extends CommandBuilder<az_staticwebapp_environment_functions_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_environment_functions_command_builder;
    /** Name of the environment of static site. */
    environmentName(value: string): az_staticwebapp_environment_functions_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_environment_functions_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_environment_functions_command_builder;
}
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
declare class az_staticwebapp_environment_list_command_builder extends CommandBuilder<az_staticwebapp_environment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_environment_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_staticwebapp_environment_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_environment_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_environment_list_command_builder;
}
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
declare class az_staticwebapp_environment_show_command_builder extends CommandBuilder<az_staticwebapp_environment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_environment_show_command_builder;
    /** Name of the environment of static site. */
    environmentName(value: string): az_staticwebapp_environment_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_staticwebapp_environment_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_environment_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_environment_show_command_builder;
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
declare class az_staticwebapp_hostname_delete_command_builder extends CommandBuilder<az_staticwebapp_hostname_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, hostname: string, name: string);
    /** Custom hostname such as www.example.com. Only support sub domain in preview. */
    hostname(value: string): az_staticwebapp_hostname_delete_command_builder;
    /** Name of the static site. */
    name(value: string): az_staticwebapp_hostname_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_staticwebapp_hostname_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_hostname_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_hostname_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_staticwebapp_hostname_delete_command_builder;
}
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
declare class az_staticwebapp_hostname_list_command_builder extends CommandBuilder<az_staticwebapp_hostname_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_hostname_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_staticwebapp_hostname_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_hostname_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_hostname_list_command_builder;
}
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
declare class az_staticwebapp_hostname_set_command_builder extends CommandBuilder<az_staticwebapp_hostname_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, hostname: string, name: string);
    /** Custom hostname such as www.example.com. Only support sub domain in preview. */
    hostname(value: string): az_staticwebapp_hostname_set_command_builder;
    /** Name of the static site. */
    name(value: string): az_staticwebapp_hostname_set_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_staticwebapp_hostname_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_hostname_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_hostname_set_command_builder;
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
declare class az_staticwebapp_users_invite_command_builder extends CommandBuilder<az_staticwebapp_users_invite_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, authenticationProvider: string, domain: string, invitationExpirationInHours: string, name: string, roles: string, userDetails: string);
    /** Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter. */
    authenticationProvider(value: string): az_staticwebapp_users_invite_command_builder;
    /** A domain added to the static app in quotes. */
    domain(value: string): az_staticwebapp_users_invite_command_builder;
    /** This value sets when the link will expire in hours. The maximum is 168 (7 days). */
    invitationExpirationInHours(value: string): az_staticwebapp_users_invite_command_builder;
    /** Name of the static site. */
    name(value: string): az_staticwebapp_users_invite_command_builder;
    /** Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo. */
    roles(value: string): az_staticwebapp_users_invite_command_builder;
    /** Email for AAD, Facebook, and Google. Account name (handle) for GitHub and Twitter. */
    userDetails(value: string): az_staticwebapp_users_invite_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_users_invite_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_users_invite_command_builder;
}
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
declare class az_staticwebapp_users_list_command_builder extends CommandBuilder<az_staticwebapp_users_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_users_list_command_builder;
    /** Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter. */
    authenticationProvider(value: string): az_staticwebapp_users_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_staticwebapp_users_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_users_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_users_list_command_builder;
}
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
declare class az_staticwebapp_users_update_command_builder extends CommandBuilder<az_staticwebapp_users_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, roles: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_users_update_command_builder;
    /** Comma-separated default or user-defined role names. Roles that can be assigned to a user are comma separated and case-insensitive (at most 50 roles up to 25 characters each and restricted to 0-9,A-Z,a-z, and _). Define roles in routes.json during root directory of your GitHub repo. */
    roles(value: string): az_staticwebapp_users_update_command_builder;
    /** Authentication provider of the user identity such as AAD, Facebook, GitHub, Google, Twitter. */
    authenticationProvider(value: string): az_staticwebapp_users_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_users_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_users_update_command_builder;
    /** Email for AAD, Facebook, and Google. Account name (handle) for GitHub and Twitter. */
    userDetails(value: string): az_staticwebapp_users_update_command_builder;
    /** Given id of registered user. */
    userId(value: string): az_staticwebapp_users_update_command_builder;
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
declare class az_staticwebapp_browse_command_builder extends CommandBuilder<az_staticwebapp_browse_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_browse_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_browse_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_browse_command_builder;
}
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
declare class az_staticwebapp_create_command_builder extends CommandBuilder<az_staticwebapp_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, branch: string, location: string, name: string, resourceGroup: string, source: string);
    /** The target branch in the repository. */
    branch(value: string): az_staticwebapp_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_staticwebapp_create_command_builder;
    /** Name of the static site. */
    name(value: string): az_staticwebapp_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_create_command_builder;
    /** URL for the repository of the static site. */
    source(value: string): az_staticwebapp_create_command_builder;
    /** Location of your Azure Functions code. For example, '/api' represents a folder called 'api'. */
    apiLocation(value: string): az_staticwebapp_create_command_builder;
    /** The path of your build output relative to your apps location. For example, setting a value of 'build' when your app location is set to '/app' will cause the content at '/app/build' to be served. */
    appArtifactLocation(value: string): az_staticwebapp_create_command_builder;
    /** Location of your application code. For example, '/' represents the root of your app, while '/app' represents a directory called 'app'. */
    appLocation(value: string): az_staticwebapp_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_staticwebapp_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_staticwebapp_create_command_builder;
    /**
     * A user's github repository token. This is used to setup the Github Actions workflow file and API secrets. If you need to create a Github Personal Access Token, please follow the steps found at the following link:
     * <a href="https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line">https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line</a>.
     */
    token(value: string): az_staticwebapp_create_command_builder;
}
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
declare class az_staticwebapp_delete_command_builder extends CommandBuilder<az_staticwebapp_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_staticwebapp_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_staticwebapp_delete_command_builder;
}
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
declare class az_staticwebapp_disconnect_command_builder extends CommandBuilder<az_staticwebapp_disconnect_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the static site. */
    name(value: string): az_staticwebapp_disconnect_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_staticwebapp_disconnect_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_disconnect_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_disconnect_command_builder;
}
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
declare class az_staticwebapp_list_command_builder extends CommandBuilder<az_staticwebapp_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_staticwebapp_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_list_command_builder;
}
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
declare class az_staticwebapp_reconnect_command_builder extends CommandBuilder<az_staticwebapp_reconnect_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, branch: string, name: string, source: string);
    /** The target branch in the repository. */
    branch(value: string): az_staticwebapp_reconnect_command_builder;
    /** Name of the static site. */
    name(value: string): az_staticwebapp_reconnect_command_builder;
    /** URL for the repository of the static site. */
    source(value: string): az_staticwebapp_reconnect_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_staticwebapp_reconnect_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_staticwebapp_reconnect_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_staticwebapp_reconnect_command_builder;
    /**
     * A user's github repository token. This is used to setup the Github Actions workflow file and API secrets. If you need to create a Github Personal Access Token, please follow the steps found at the following link:
     * <a href="https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line">https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line</a>.
     */
    token(value: string): az_staticwebapp_reconnect_command_builder;
}
export {};
