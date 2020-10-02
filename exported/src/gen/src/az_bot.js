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
exports.az_bot = exports.az_bot_webchat = exports.az_bot_telegram = exports.az_bot_sms = exports.az_bot_slack = exports.az_bot_skype = exports.az_bot_msteams = exports.az_bot_kik = exports.az_bot_facebook = exports.az_bot_email = exports.az_bot_directline = exports.az_bot_authsetting = void 0;
var base_1 = require("../base");
/** Manage OAuth connection settings on a bot. */
var az_bot_authsetting = /** @class */ (function () {
    function az_bot_authsetting() {
    }
    /**
     * Create an OAuth connection setting on a bot.
     *
     * Syntax:
     * ```
     * az bot authsetting create --client-id
     *                           --client-secret
     *                           --name
     *                           --provider-scope-string
     *                           --resource-group
     *                           --service
     *                           --setting-name
     *                           [--parameters]
     *                           [--subscription]
     * ```
     *
     * @param {string} clientId Client ID associated with the service provider setting.
     * @param {string} clientSecret Client secret associated with the service provider setting.
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} providerScopeString The scope string associated with the service provider setting.The string should be delimited as needed for the service provider.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} service Name of the service provider. For a list of all service providers, use `az bot connection listserviceproviders`.
     * @param {string} settingName Name of the oauth connection setting.
     */
    az_bot_authsetting.create = function (clientId, clientSecret, name, providerScopeString, resourceGroup, service, settingName) {
        return new az_bot_authsetting_create_command_builder("az bot authsetting create", 'az_bot_authsetting_create_command_result', clientId, clientSecret, name, providerScopeString, resourceGroup, service, settingName);
    };
    /**
     * Delete an OAuth connection setting on a bot.
     *
     * Syntax:
     * ```
     * az bot authsetting delete --name
     *                           --resource-group
     *                           --setting-name
     *                           [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} settingName Name of the oauth connection setting.
     */
    az_bot_authsetting["delete"] = function (name, resourceGroup, settingName) {
        return new az_bot_authsetting_delete_command_builder("az bot authsetting delete", 'az_bot_authsetting_delete_command_result', name, resourceGroup, settingName);
    };
    /**
     * Show all OAuth connection settings on a bot.
     *
     * Syntax:
     * ```
     * az bot authsetting list --name
     *                         --resource-group
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_authsetting.list = function (name, resourceGroup) {
        return new az_bot_authsetting_list_command_builder("az bot authsetting list", 'az_bot_authsetting_list_command_result', name, resourceGroup);
    };
    /**
     * List details for all service providers available for creating OAuth connection settings.
     *
     * Syntax:
     * ```
     * az bot authsetting list-providers [--provider-name]
     *                                   [--subscription]
     * ```
     */
    az_bot_authsetting.list_providers = function () {
        return new az_bot_authsetting_list_providers_command_builder("az bot authsetting list-providers", 'az_bot_authsetting_list_providers_command_result');
    };
    /**
     * Show details of an OAuth connection setting on a bot.
     *
     * Syntax:
     * ```
     * az bot authsetting show --name
     *                         --resource-group
     *                         --setting-name
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} settingName Name of the oauth connection setting.
     */
    az_bot_authsetting.show = function (name, resourceGroup, settingName) {
        return new az_bot_authsetting_show_command_builder("az bot authsetting show", 'az_bot_authsetting_show_command_result', name, resourceGroup, settingName);
    };
    return az_bot_authsetting;
}());
exports.az_bot_authsetting = az_bot_authsetting;
/** Manage the Directline Channel on a bot. */
var az_bot_directline = /** @class */ (function () {
    function az_bot_directline() {
    }
    /**
     * Create the DirectLine Channel on a bot with only v3 protocol enabled.
     *
     * Syntax:
     * ```
     * az bot directline create --name
     *                          --resource-group
     *                          [--add-disabled {false, true}]
     *                          [--disablev1 {false, true}]
     *                          [--disablev3 {false, true}]
     *                          [--enable-enhanced-auth {false, true}]
     *                          [--site-name]
     *                          [--subscription]
     *                          [--trusted-origins]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_directline.create = function (name, resourceGroup) {
        return new az_bot_directline_create_command_builder("az bot directline create", 'az_bot_directline_create_command_result', name, resourceGroup);
    };
    /**
     * Delete the Directline Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot directline delete --name
     *                          --resource-group
     *                          [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_directline["delete"] = function (name, resourceGroup) {
        return new az_bot_directline_delete_command_builder("az bot directline delete", 'az_bot_directline_delete_command_result', name, resourceGroup);
    };
    /**
     * Get details of the Directline Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot directline show --name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     *                        [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_directline.show = function (name, resourceGroup) {
        return new az_bot_directline_show_command_builder("az bot directline show", 'az_bot_directline_show_command_result', name, resourceGroup);
    };
    /**
     * Update the DirectLine Channel on a bot with only v3 protocol enabled.
     *
     * Syntax:
     * ```
     * az bot directline update --name
     *                          --resource-group
     *                          [--add-disabled {false, true}]
     *                          [--disablev1 {false, true}]
     *                          [--disablev3 {false, true}]
     *                          [--enable-enhanced-auth {false, true}]
     *                          [--site-name]
     *                          [--subscription]
     *                          [--trusted-origins]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_directline.update = function (name, resourceGroup) {
        return new az_bot_directline_update_command_builder("az bot directline update", 'az_bot_directline_update_command_result', name, resourceGroup);
    };
    return az_bot_directline;
}());
exports.az_bot_directline = az_bot_directline;
/** Manage the email Channel on a bot. */
var az_bot_email = /** @class */ (function () {
    function az_bot_email() {
    }
    /**
     * Create the Email Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot email create --email-address
     *                     --name
     *                     --password
     *                     --resource-group
     *                     [--add-disabled {false, true}]
     *                     [--subscription]
     * ```
     *
     * @param {string} emailAddress The email address for the bot.
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} password The email password for the bot.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_email.create = function (emailAddress, name, password, resourceGroup) {
        return new az_bot_email_create_command_builder("az bot email create", 'az_bot_email_create_command_result', emailAddress, name, password, resourceGroup);
    };
    /**
     * Delete the email Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot email delete --name
     *                     --resource-group
     *                     [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_email["delete"] = function (name, resourceGroup) {
        return new az_bot_email_delete_command_builder("az bot email delete", 'az_bot_email_delete_command_result', name, resourceGroup);
    };
    /**
     * Get details of the email Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot email show --name
     *                   --resource-group
     *                   [--query-examples]
     *                   [--subscription]
     *                   [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_email.show = function (name, resourceGroup) {
        return new az_bot_email_show_command_builder("az bot email show", 'az_bot_email_show_command_result', name, resourceGroup);
    };
    return az_bot_email;
}());
exports.az_bot_email = az_bot_email;
/** Manage the Facebook Channel on a bot. */
var az_bot_facebook = /** @class */ (function () {
    function az_bot_facebook() {
    }
    /**
     * Create the Facebook Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot facebook create --appid
     *                        --name
     *                        --page-id
     *                        --resource-group
     *                        --secret
     *                        --token
     *                        [--add-disabled {false, true}]
     *                        [--subscription]
     * ```
     *
     * @param {string} appid The Facebook application id.
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} pageId Page ID of the Facebook page to be used for the bot.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} secret The Facebook application secret.
     * @param {string} token The Facebook application access token.
     */
    az_bot_facebook.create = function (appid, name, pageId, resourceGroup, secret, token) {
        return new az_bot_facebook_create_command_builder("az bot facebook create", 'az_bot_facebook_create_command_result', appid, name, pageId, resourceGroup, secret, token);
    };
    /**
     * Delete the Facebook Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot facebook delete --name
     *                        --resource-group
     *                        [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_facebook["delete"] = function (name, resourceGroup) {
        return new az_bot_facebook_delete_command_builder("az bot facebook delete", 'az_bot_facebook_delete_command_result', name, resourceGroup);
    };
    /**
     * Get details of the Facebook Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot facebook show --name
     *                      --resource-group
     *                      [--query-examples]
     *                      [--subscription]
     *                      [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_facebook.show = function (name, resourceGroup) {
        return new az_bot_facebook_show_command_builder("az bot facebook show", 'az_bot_facebook_show_command_result', name, resourceGroup);
    };
    return az_bot_facebook;
}());
exports.az_bot_facebook = az_bot_facebook;
/** Manage the Kik Channel on a bot. */
var az_bot_kik = /** @class */ (function () {
    function az_bot_kik() {
    }
    /**
     * Create the Kik Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot kik create --key
     *                   --name
     *                   --resource-group
     *                   --user-name
     *                   [--add-disabled {false, true}]
     *                   [--is-validated {false, true}]
     *                   [--subscription]
     * ```
     *
     * @param {string} key The API key for the Kik account.
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} userName Kik user name.
     */
    az_bot_kik.create = function (key, name, resourceGroup, userName) {
        return new az_bot_kik_create_command_builder("az bot kik create", 'az_bot_kik_create_command_result', key, name, resourceGroup, userName);
    };
    /**
     * Delete the Kik Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot kik delete --name
     *                   --resource-group
     *                   [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_kik["delete"] = function (name, resourceGroup) {
        return new az_bot_kik_delete_command_builder("az bot kik delete", 'az_bot_kik_delete_command_result', name, resourceGroup);
    };
    /**
     * Get details of the Kik Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot kik show --name
     *                 --resource-group
     *                 [--query-examples]
     *                 [--subscription]
     *                 [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_kik.show = function (name, resourceGroup) {
        return new az_bot_kik_show_command_builder("az bot kik show", 'az_bot_kik_show_command_result', name, resourceGroup);
    };
    return az_bot_kik;
}());
exports.az_bot_kik = az_bot_kik;
/** Manage the Microsoft Teams Channel on a bot. */
var az_bot_msteams = /** @class */ (function () {
    function az_bot_msteams() {
    }
    /**
     * Create the Microsoft Teams Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot msteams create --name
     *                       --resource-group
     *                       [--add-disabled {false, true}]
     *                       [--calling-web-hook]
     *                       [--enable-calling {false, true}]
     *                       [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_msteams.create = function (name, resourceGroup) {
        return new az_bot_msteams_create_command_builder("az bot msteams create", 'az_bot_msteams_create_command_result', name, resourceGroup);
    };
    /**
     * Delete the Microsoft Teams Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot msteams delete --name
     *                       --resource-group
     *                       [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_msteams["delete"] = function (name, resourceGroup) {
        return new az_bot_msteams_delete_command_builder("az bot msteams delete", 'az_bot_msteams_delete_command_result', name, resourceGroup);
    };
    /**
     * Get details of the Microsoft Teams Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot msteams show --name
     *                     --resource-group
     *                     [--query-examples]
     *                     [--subscription]
     *                     [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_msteams.show = function (name, resourceGroup) {
        return new az_bot_msteams_show_command_builder("az bot msteams show", 'az_bot_msteams_show_command_result', name, resourceGroup);
    };
    return az_bot_msteams;
}());
exports.az_bot_msteams = az_bot_msteams;
/** Manage the Skype Channel on a bot. */
var az_bot_skype = /** @class */ (function () {
    function az_bot_skype() {
    }
    /**
     * Create the Skype Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot skype create --name
     *                     --resource-group
     *                     [--add-disabled {false, true}]
     *                     [--calling-web-hook]
     *                     [--enable-calling {false, true}]
     *                     [--enable-groups {false, true}]
     *                     [--enable-media-cards {false, true}]
     *                     [--enable-messaging {false, true}]
     *                     [--enable-screen-sharing {false, true}]
     *                     [--enable-video {false, true}]
     *                     [--groups-mode]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_skype.create = function (name, resourceGroup) {
        return new az_bot_skype_create_command_builder("az bot skype create", 'az_bot_skype_create_command_result', name, resourceGroup);
    };
    /**
     * Delete the Skype Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot skype delete --name
     *                     --resource-group
     *                     [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_skype["delete"] = function (name, resourceGroup) {
        return new az_bot_skype_delete_command_builder("az bot skype delete", 'az_bot_skype_delete_command_result', name, resourceGroup);
    };
    /**
     * Get details of the Skype Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot skype show --name
     *                   --resource-group
     *                   [--query-examples]
     *                   [--subscription]
     *                   [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_skype.show = function (name, resourceGroup) {
        return new az_bot_skype_show_command_builder("az bot skype show", 'az_bot_skype_show_command_result', name, resourceGroup);
    };
    return az_bot_skype;
}());
exports.az_bot_skype = az_bot_skype;
/** Manage the Slack Channel on a bot. */
var az_bot_slack = /** @class */ (function () {
    function az_bot_slack() {
    }
    /**
     * Create the Slack Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot slack create --client-id
     *                     --client-secret
     *                     --name
     *                     --resource-group
     *                     --verification-token
     *                     [--add-disabled {false, true}]
     *                     [--landing-page-url]
     *                     [--subscription]
     * ```
     *
     * @param {string} clientId The client ID from Slack.
     * @param {string} clientSecret The client secret from Slack.
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} verificationToken The verification token from Slack.
     */
    az_bot_slack.create = function (clientId, clientSecret, name, resourceGroup, verificationToken) {
        return new az_bot_slack_create_command_builder("az bot slack create", 'az_bot_slack_create_command_result', clientId, clientSecret, name, resourceGroup, verificationToken);
    };
    /**
     * Delete the Slack Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot slack delete --name
     *                     --resource-group
     *                     [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_slack["delete"] = function (name, resourceGroup) {
        return new az_bot_slack_delete_command_builder("az bot slack delete", 'az_bot_slack_delete_command_result', name, resourceGroup);
    };
    /**
     * Get details of the Slack Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot slack show --name
     *                   --resource-group
     *                   [--query-examples]
     *                   [--subscription]
     *                   [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_slack.show = function (name, resourceGroup) {
        return new az_bot_slack_show_command_builder("az bot slack show", 'az_bot_slack_show_command_result', name, resourceGroup);
    };
    return az_bot_slack;
}());
exports.az_bot_slack = az_bot_slack;
/** Manage the SMS Channel on a bot. */
var az_bot_sms = /** @class */ (function () {
    function az_bot_sms() {
    }
    /**
     * Create the SMS Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot sms create --account-sid
     *                   --auth-token
     *                   --name
     *                   --phone
     *                   --resource-group
     *                   [--add-disabled {false, true}]
     *                   [--is-validated {false, true}]
     *                   [--subscription]
     * ```
     *
     * @param {string} accountSid The account SID for the Twilio account.
     * @param {string} authToken The token token for the Twilio account.
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} phone The phone number for the Twilio account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_sms.create = function (accountSid, authToken, name, phone, resourceGroup) {
        return new az_bot_sms_create_command_builder("az bot sms create", 'az_bot_sms_create_command_result', accountSid, authToken, name, phone, resourceGroup);
    };
    /**
     * Delete the SMS Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot sms delete --name
     *                   --resource-group
     *                   [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_sms["delete"] = function (name, resourceGroup) {
        return new az_bot_sms_delete_command_builder("az bot sms delete", 'az_bot_sms_delete_command_result', name, resourceGroup);
    };
    /**
     * Get details of the SMS Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot sms show --name
     *                 --resource-group
     *                 [--query-examples]
     *                 [--subscription]
     *                 [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_sms.show = function (name, resourceGroup) {
        return new az_bot_sms_show_command_builder("az bot sms show", 'az_bot_sms_show_command_result', name, resourceGroup);
    };
    return az_bot_sms;
}());
exports.az_bot_sms = az_bot_sms;
/** Manage the Telegram Channel on a bot. */
var az_bot_telegram = /** @class */ (function () {
    function az_bot_telegram() {
    }
    /**
     * Create the Telegram Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot telegram create --access-token
     *                        --name
     *                        --resource-group
     *                        [--add-disabled {false, true}]
     *                        [--is-validated {false, true}]
     *                        [--subscription]
     * ```
     *
     * @param {string} accessToken The access token for the Telegram account.
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_telegram.create = function (accessToken, name, resourceGroup) {
        return new az_bot_telegram_create_command_builder("az bot telegram create", 'az_bot_telegram_create_command_result', accessToken, name, resourceGroup);
    };
    /**
     * Delete the Telegram Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot telegram delete --name
     *                        --resource-group
     *                        [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_telegram["delete"] = function (name, resourceGroup) {
        return new az_bot_telegram_delete_command_builder("az bot telegram delete", 'az_bot_telegram_delete_command_result', name, resourceGroup);
    };
    /**
     * Get details of the Telegram Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot telegram show --name
     *                      --resource-group
     *                      [--query-examples]
     *                      [--subscription]
     *                      [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_telegram.show = function (name, resourceGroup) {
        return new az_bot_telegram_show_command_builder("az bot telegram show", 'az_bot_telegram_show_command_result', name, resourceGroup);
    };
    return az_bot_telegram;
}());
exports.az_bot_telegram = az_bot_telegram;
/** Manage the Webchat Channel on a bot. */
var az_bot_webchat = /** @class */ (function () {
    function az_bot_webchat() {
    }
    /**
     * Get details of the Webchat Channel on a bot.
     *
     * Syntax:
     * ```
     * az bot webchat show --name
     *                     --resource-group
     *                     [--query-examples]
     *                     [--subscription]
     *                     [--with-secrets {false, true}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot_webchat.show = function (name, resourceGroup) {
        return new az_bot_webchat_show_command_builder("az bot webchat show", 'az_bot_webchat_show_command_result', name, resourceGroup);
    };
    return az_bot_webchat;
}());
exports.az_bot_webchat = az_bot_webchat;
/** Manage Microsoft Azure Bot Service. */
var az_bot = /** @class */ (function () {
    function az_bot() {
    }
    /**
     * Create a new v4 SDK bot.
     *
     * Syntax:
     * ```
     * az bot create --appid
     *               --kind {registration, webapp}
     *               --name
     *               --resource-group
     *               [--description]
     *               [--display-name]
     *               [--echo {false, true}]
     *               [--endpoint]
     *               [--lang {Csharp, Javascript}]
     *               [--location]
     *               [--password]
     *               [--sku {F0, S1}]
     *               [--subscription]
     *               [--tags]
     * ```
     *
     * @param {string} appid The Microsoft account ID (MSA ID) to be used with the bot.
     * @param {'registration' | 'webapp'} kind The kind of the bot.
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot.create = function (appid, kind, name, resourceGroup) {
        return new az_bot_create_command_builder("az bot create", 'az_bot_create_command_result', appid, kind, name, resourceGroup);
    };
    /**
     * Delete an existing bot.
     *
     * Syntax:
     * ```
     * az bot delete --name
     *               --resource-group
     *               [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot["delete"] = function (name, resourceGroup) {
        return new az_bot_delete_command_builder("az bot delete", 'az_bot_delete_command_result', name, resourceGroup);
    };
    /**
     * Download an existing bot.
     *
     * Syntax:
     * ```
     * az bot download --name
     *                 --resource-group
     *                 [--save-path]
     *                 [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot.download = function (name, resourceGroup) {
        return new az_bot_download_command_builder("az bot download", 'az_bot_download_command_result', name, resourceGroup);
    };
    /**
     * Add scripts/config files for publishing with `az webapp deployment`.
     *
     * Syntax:
     * ```
     * az bot prepare-deploy --lang {Csharp, Javascript, Typescript}
     *                       [--code-dir]
     *                       [--proj-file-path]
     *                       [--subscription]
     * ```
     *
     * @param {'Csharp' | 'Javascript' | 'Typescript'} lang The language or runtime of the bot.
     */
    az_bot.prepare_deploy = function (lang) {
        return new az_bot_prepare_deploy_command_builder("az bot prepare-deploy", 'az_bot_prepare_deploy_command_result', lang);
    };
    /**
     * (Maintenance mode) Add scripts to your local source code directory to be able to publish back using `az bot publish` for v3 SDK bots.
     *
     * Syntax:
     * ```
     * az bot prepare-publish --name
     *                        --proj-file-path
     *                        --resource-group
     *                        --sln-name
     *                        [--code-dir]
     *                        [--subscription]
     *                        [--version {v3, v4}]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} projFilePath Path to the start up project file name. (E.g. "./EchoBotWithCounter.csproj") Required only for C#.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} slnName Name of the start up solution file name. Required only for C#.
     */
    az_bot.prepare_publish = function (name, projFilePath, resourceGroup, slnName) {
        return new az_bot_prepare_publish_command_builder("az bot prepare-publish", 'az_bot_prepare_publish_command_result', name, projFilePath, resourceGroup, slnName);
    };
    /**
     * Publish to a bot's associated app service.
     *
     * Syntax:
     * ```
     * az bot publish --name
     *                --resource-group
     *                [--code-dir]
     *                [--keep-node-modules {false, true}]
     *                [--proj-file-path]
     *                [--subscription]
     *                [--timeout]
     *                [--version]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot.publish = function (name, resourceGroup) {
        return new az_bot_publish_command_builder("az bot publish", 'az_bot_publish_command_result', name, resourceGroup);
    };
    /**
     * Get an existing bot.
     *
     * Syntax:
     * ```
     * az bot show --name
     *             --resource-group
     *             [--msbot {false, true}]
     *             [--query-examples]
     *             [--subscription]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot.show = function (name, resourceGroup) {
        return new az_bot_show_command_builder("az bot show", 'az_bot_show_command_result', name, resourceGroup);
    };
    /**
     * Update an existing bot.
     *
     * Syntax:
     * ```
     * az bot update --name
     *               --resource-group
     *               [--ai-api-key]
     *               [--ai-app-id]
     *               [--ai-key]
     *               [--description]
     *               [--display-name]
     *               [--endpoint]
     *               [--icon-url]
     *               [--sku {F0, S1}]
     *               [--subscription]
     *               [--tags]
     * ```
     *
     * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_bot.update = function (name, resourceGroup) {
        return new az_bot_update_command_builder("az bot update", 'az_bot_update_command_result', name, resourceGroup);
    };
    return az_bot;
}());
exports.az_bot = az_bot;
/**
 * Create an OAuth connection setting on a bot.
 *
 * Syntax:
 * ```
 * az bot authsetting create --client-id
 *                           --client-secret
 *                           --name
 *                           --provider-scope-string
 *                           --resource-group
 *                           --service
 *                           --setting-name
 *                           [--parameters]
 *                           [--subscription]
 * ```
 *
 * @param {string} clientId Client ID associated with the service provider setting.
 * @param {string} clientSecret Client secret associated with the service provider setting.
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} providerScopeString The scope string associated with the service provider setting.The string should be delimited as needed for the service provider.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} service Name of the service provider. For a list of all service providers, use `az bot connection listserviceproviders`.
 * @param {string} settingName Name of the oauth connection setting.
 */
var az_bot_authsetting_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_authsetting_create_command_builder, _super);
    function az_bot_authsetting_create_command_builder(commandPath, resultDataTypeName, clientId, clientSecret, name, providerScopeString, resourceGroup, service, settingName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clientId(clientId);
        _this.clientSecret(clientSecret);
        _this.name(name);
        _this.providerScopeString(providerScopeString);
        _this.resourceGroup(resourceGroup);
        _this.service(service);
        _this.settingName(settingName);
        return _this;
    }
    /** Client ID associated with the service provider setting. */
    az_bot_authsetting_create_command_builder.prototype.clientId = function (value) {
        this.setFlag("--client-id", value);
        return this;
    };
    /** Client secret associated with the service provider setting. */
    az_bot_authsetting_create_command_builder.prototype.clientSecret = function (value) {
        this.setFlag("--client-secret", value);
        return this;
    };
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_authsetting_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The scope string associated with the service provider setting.The string should be delimited as needed for the service provider. */
    az_bot_authsetting_create_command_builder.prototype.providerScopeString = function (value) {
        this.setFlag("--provider-scope-string", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_authsetting_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the service provider. For a list of all service providers, use `az bot connection listserviceproviders`. */
    az_bot_authsetting_create_command_builder.prototype.service = function (value) {
        this.setFlag("--service", value);
        return this;
    };
    /** Name of the oauth connection setting. */
    az_bot_authsetting_create_command_builder.prototype.settingName = function (value) {
        this.setFlag("--setting-name", value);
        return this;
    };
    /** Parameter values for service provider parameters. Usage: --parameters key=value key1=value1. */
    az_bot_authsetting_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_authsetting_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_authsetting_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an OAuth connection setting on a bot.
 *
 * Syntax:
 * ```
 * az bot authsetting delete --name
 *                           --resource-group
 *                           --setting-name
 *                           [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} settingName Name of the oauth connection setting.
 */
var az_bot_authsetting_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_authsetting_delete_command_builder, _super);
    function az_bot_authsetting_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, settingName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.settingName(settingName);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_authsetting_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_authsetting_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the oauth connection setting. */
    az_bot_authsetting_delete_command_builder.prototype.settingName = function (value) {
        this.setFlag("--setting-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_authsetting_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_authsetting_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Show all OAuth connection settings on a bot.
 *
 * Syntax:
 * ```
 * az bot authsetting list --name
 *                         --resource-group
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_authsetting_list_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_authsetting_list_command_builder, _super);
    function az_bot_authsetting_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_authsetting_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_authsetting_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_authsetting_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_authsetting_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_authsetting_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List details for all service providers available for creating OAuth connection settings.
 *
 * Syntax:
 * ```
 * az bot authsetting list-providers [--provider-name]
 *                                   [--subscription]
 * ```
 */
var az_bot_authsetting_list_providers_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_authsetting_list_providers_command_builder, _super);
    function az_bot_authsetting_list_providers_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Service provider name for which to fetch details. */
    az_bot_authsetting_list_providers_command_builder.prototype.providerName = function (value) {
        this.setFlag("--provider-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_authsetting_list_providers_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_authsetting_list_providers_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of an OAuth connection setting on a bot.
 *
 * Syntax:
 * ```
 * az bot authsetting show --name
 *                         --resource-group
 *                         --setting-name
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} settingName Name of the oauth connection setting.
 */
var az_bot_authsetting_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_authsetting_show_command_builder, _super);
    function az_bot_authsetting_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, settingName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.settingName(settingName);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_authsetting_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_authsetting_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the oauth connection setting. */
    az_bot_authsetting_show_command_builder.prototype.settingName = function (value) {
        this.setFlag("--setting-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_authsetting_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_authsetting_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_authsetting_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the DirectLine Channel on a bot with only v3 protocol enabled.
 *
 * Syntax:
 * ```
 * az bot directline create --name
 *                          --resource-group
 *                          [--add-disabled {false, true}]
 *                          [--disablev1 {false, true}]
 *                          [--disablev3 {false, true}]
 *                          [--enable-enhanced-auth {false, true}]
 *                          [--site-name]
 *                          [--subscription]
 *                          [--trusted-origins]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_directline_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_directline_create_command_builder, _super);
    function az_bot_directline_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_directline_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_directline_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_directline_create_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** If true, v1 protocol will be disabled on the channel. */
    az_bot_directline_create_command_builder.prototype.disablev1 = function (value) {
        this.setFlag("--disablev1", value.toString());
        return this;
    };
    /** If true, v3 protocol will be disabled on the channel. */
    az_bot_directline_create_command_builder.prototype.disablev3 = function (value) {
        this.setFlag("--disablev3", value.toString());
        return this;
    };
    /** If true, enables enhanced authentication features. Must be true for --trusted-origins parameters to work. */
    az_bot_directline_create_command_builder.prototype.enableEnhancedAuth = function (value) {
        this.setFlag("--enable-enhanced-auth", value.toString());
        return this;
    };
    /** Name of the Directline channel site. */
    az_bot_directline_create_command_builder.prototype.siteName = function (value) {
        this.setFlag("--site-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_directline_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space separated Trusted Origins URLs (must use HTTPS) e.g. --trusted-origins <a href="https://mybotsite1.azurewebsites.net">https://mybotsite1.azurewebsites.net</a> <a href="https://mybotsite2.azurewebsites.net">https://mybotsite2.azurewebsites.net</a>. */
    az_bot_directline_create_command_builder.prototype.trustedOrigins = function (value) {
        this.setFlag("--trusted-origins", value);
        return this;
    };
    return az_bot_directline_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the Directline Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot directline delete --name
 *                          --resource-group
 *                          [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_directline_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_directline_delete_command_builder, _super);
    function az_bot_directline_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_directline_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_directline_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_directline_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_directline_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the Directline Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot directline show --name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 *                        [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_directline_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_directline_show_command_builder, _super);
    function az_bot_directline_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_directline_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_directline_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_directline_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_directline_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_directline_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_directline_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the DirectLine Channel on a bot with only v3 protocol enabled.
 *
 * Syntax:
 * ```
 * az bot directline update --name
 *                          --resource-group
 *                          [--add-disabled {false, true}]
 *                          [--disablev1 {false, true}]
 *                          [--disablev3 {false, true}]
 *                          [--enable-enhanced-auth {false, true}]
 *                          [--site-name]
 *                          [--subscription]
 *                          [--trusted-origins]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_directline_update_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_directline_update_command_builder, _super);
    function az_bot_directline_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_directline_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_directline_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_directline_update_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** If true, v1 protocol will be disabled on the channel. */
    az_bot_directline_update_command_builder.prototype.disablev1 = function (value) {
        this.setFlag("--disablev1", value.toString());
        return this;
    };
    /** If true, v3 protocol will be disabled on the channel. */
    az_bot_directline_update_command_builder.prototype.disablev3 = function (value) {
        this.setFlag("--disablev3", value.toString());
        return this;
    };
    /** If true, enables enhanced authentication features. Must be true for --trusted-origins parameters to work. */
    az_bot_directline_update_command_builder.prototype.enableEnhancedAuth = function (value) {
        this.setFlag("--enable-enhanced-auth", value.toString());
        return this;
    };
    /** Name of the Directline channel site. */
    az_bot_directline_update_command_builder.prototype.siteName = function (value) {
        this.setFlag("--site-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_directline_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space separated Trusted Origins URLs (must use HTTPS) e.g. --trusted-origins <a href="https://mybotsite1.azurewebsites.net">https://mybotsite1.azurewebsites.net</a> <a href="https://mybotsite2.azurewebsites.net">https://mybotsite2.azurewebsites.net</a>. */
    az_bot_directline_update_command_builder.prototype.trustedOrigins = function (value) {
        this.setFlag("--trusted-origins", value);
        return this;
    };
    return az_bot_directline_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Email Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot email create --email-address
 *                     --name
 *                     --password
 *                     --resource-group
 *                     [--add-disabled {false, true}]
 *                     [--subscription]
 * ```
 *
 * @param {string} emailAddress The email address for the bot.
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} password The email password for the bot.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_email_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_email_create_command_builder, _super);
    function az_bot_email_create_command_builder(commandPath, resultDataTypeName, emailAddress, name, password, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.emailAddress(emailAddress);
        _this.name(name);
        _this.password(password);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The email address for the bot. */
    az_bot_email_create_command_builder.prototype.emailAddress = function (value) {
        this.setFlag("--email-address", value);
        return this;
    };
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_email_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The email password for the bot. */
    az_bot_email_create_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_email_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_email_create_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_email_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_email_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the email Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot email delete --name
 *                     --resource-group
 *                     [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_email_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_email_delete_command_builder, _super);
    function az_bot_email_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_email_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_email_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_email_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_email_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the email Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot email show --name
 *                   --resource-group
 *                   [--query-examples]
 *                   [--subscription]
 *                   [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_email_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_email_show_command_builder, _super);
    function az_bot_email_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_email_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_email_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_email_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_email_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_email_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_email_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Facebook Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot facebook create --appid
 *                        --name
 *                        --page-id
 *                        --resource-group
 *                        --secret
 *                        --token
 *                        [--add-disabled {false, true}]
 *                        [--subscription]
 * ```
 *
 * @param {string} appid The Facebook application id.
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} pageId Page ID of the Facebook page to be used for the bot.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} secret The Facebook application secret.
 * @param {string} token The Facebook application access token.
 */
var az_bot_facebook_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_facebook_create_command_builder, _super);
    function az_bot_facebook_create_command_builder(commandPath, resultDataTypeName, appid, name, pageId, resourceGroup, secret, token) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.appid(appid);
        _this.name(name);
        _this.pageId(pageId);
        _this.resourceGroup(resourceGroup);
        _this.secret(secret);
        _this.token(token);
        return _this;
    }
    /** The Facebook application id. */
    az_bot_facebook_create_command_builder.prototype.appid = function (value) {
        this.setFlag("--appid", value);
        return this;
    };
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_facebook_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Page ID of the Facebook page to be used for the bot. */
    az_bot_facebook_create_command_builder.prototype.pageId = function (value) {
        this.setFlag("--page-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_facebook_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The Facebook application secret. */
    az_bot_facebook_create_command_builder.prototype.secret = function (value) {
        this.setFlag("--secret", value);
        return this;
    };
    /** The Facebook application access token. */
    az_bot_facebook_create_command_builder.prototype.token = function (value) {
        this.setFlag("--token", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_facebook_create_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_facebook_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_facebook_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the Facebook Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot facebook delete --name
 *                        --resource-group
 *                        [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_facebook_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_facebook_delete_command_builder, _super);
    function az_bot_facebook_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_facebook_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_facebook_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_facebook_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_facebook_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the Facebook Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot facebook show --name
 *                      --resource-group
 *                      [--query-examples]
 *                      [--subscription]
 *                      [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_facebook_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_facebook_show_command_builder, _super);
    function az_bot_facebook_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_facebook_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_facebook_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_facebook_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_facebook_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_facebook_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_facebook_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Kik Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot kik create --key
 *                   --name
 *                   --resource-group
 *                   --user-name
 *                   [--add-disabled {false, true}]
 *                   [--is-validated {false, true}]
 *                   [--subscription]
 * ```
 *
 * @param {string} key The API key for the Kik account.
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} userName Kik user name.
 */
var az_bot_kik_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_kik_create_command_builder, _super);
    function az_bot_kik_create_command_builder(commandPath, resultDataTypeName, key, name, resourceGroup, userName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.userName(userName);
        return _this;
    }
    /** The API key for the Kik account. */
    az_bot_kik_create_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_kik_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_kik_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Kik user name. */
    az_bot_kik_create_command_builder.prototype.userName = function (value) {
        this.setFlag("--user-name", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_kik_create_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** Whether or not the Kik account has been validated for use with the bot. */
    az_bot_kik_create_command_builder.prototype.isValidated = function (value) {
        this.setFlag("--is-validated", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_kik_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_kik_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the Kik Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot kik delete --name
 *                   --resource-group
 *                   [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_kik_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_kik_delete_command_builder, _super);
    function az_bot_kik_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_kik_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_kik_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_kik_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_kik_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the Kik Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot kik show --name
 *                 --resource-group
 *                 [--query-examples]
 *                 [--subscription]
 *                 [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_kik_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_kik_show_command_builder, _super);
    function az_bot_kik_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_kik_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_kik_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_kik_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_kik_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_kik_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_kik_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Microsoft Teams Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot msteams create --name
 *                       --resource-group
 *                       [--add-disabled {false, true}]
 *                       [--calling-web-hook]
 *                       [--enable-calling {false, true}]
 *                       [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_msteams_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_msteams_create_command_builder, _super);
    function az_bot_msteams_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_msteams_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_msteams_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_msteams_create_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** The calling web hook to use on Microsoft Teams. */
    az_bot_msteams_create_command_builder.prototype.callingWebHook = function (value) {
        this.setFlag("--calling-web-hook", value);
        return this;
    };
    /** Enable calling on Microsoft Teams. */
    az_bot_msteams_create_command_builder.prototype.enableCalling = function (value) {
        this.setFlag("--enable-calling", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_msteams_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_msteams_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the Microsoft Teams Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot msteams delete --name
 *                       --resource-group
 *                       [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_msteams_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_msteams_delete_command_builder, _super);
    function az_bot_msteams_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_msteams_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_msteams_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_msteams_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_msteams_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the Microsoft Teams Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot msteams show --name
 *                     --resource-group
 *                     [--query-examples]
 *                     [--subscription]
 *                     [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_msteams_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_msteams_show_command_builder, _super);
    function az_bot_msteams_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_msteams_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_msteams_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_msteams_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_msteams_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_msteams_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_msteams_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Skype Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot skype create --name
 *                     --resource-group
 *                     [--add-disabled {false, true}]
 *                     [--calling-web-hook]
 *                     [--enable-calling {false, true}]
 *                     [--enable-groups {false, true}]
 *                     [--enable-media-cards {false, true}]
 *                     [--enable-messaging {false, true}]
 *                     [--enable-screen-sharing {false, true}]
 *                     [--enable-video {false, true}]
 *                     [--groups-mode]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_skype_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_skype_create_command_builder, _super);
    function az_bot_skype_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_skype_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_skype_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_skype_create_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** The calling web hook to use on Skype. */
    az_bot_skype_create_command_builder.prototype.callingWebHook = function (value) {
        this.setFlag("--calling-web-hook", value);
        return this;
    };
    /** Enable calling on Skype. */
    az_bot_skype_create_command_builder.prototype.enableCalling = function (value) {
        this.setFlag("--enable-calling", value.toString());
        return this;
    };
    /** Enable groups on Skype. */
    az_bot_skype_create_command_builder.prototype.enableGroups = function (value) {
        this.setFlag("--enable-groups", value.toString());
        return this;
    };
    /** Enable media cards on Skype. */
    az_bot_skype_create_command_builder.prototype.enableMediaCards = function (value) {
        this.setFlag("--enable-media-cards", value.toString());
        return this;
    };
    /** Enable messaging on Skype. */
    az_bot_skype_create_command_builder.prototype.enableMessaging = function (value) {
        this.setFlag("--enable-messaging", value.toString());
        return this;
    };
    /** Enable screen sharing on Skype. */
    az_bot_skype_create_command_builder.prototype.enableScreenSharing = function (value) {
        this.setFlag("--enable-screen-sharing", value.toString());
        return this;
    };
    /** Enable video on Skype. */
    az_bot_skype_create_command_builder.prototype.enableVideo = function (value) {
        this.setFlag("--enable-video", value.toString());
        return this;
    };
    /** Select groups mode on Skype. */
    az_bot_skype_create_command_builder.prototype.groupsMode = function (value) {
        this.setFlag("--groups-mode", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_skype_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_skype_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the Skype Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot skype delete --name
 *                     --resource-group
 *                     [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_skype_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_skype_delete_command_builder, _super);
    function az_bot_skype_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_skype_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_skype_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_skype_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_skype_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the Skype Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot skype show --name
 *                   --resource-group
 *                   [--query-examples]
 *                   [--subscription]
 *                   [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_skype_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_skype_show_command_builder, _super);
    function az_bot_skype_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_skype_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_skype_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_skype_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_skype_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_skype_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_skype_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Slack Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot slack create --client-id
 *                     --client-secret
 *                     --name
 *                     --resource-group
 *                     --verification-token
 *                     [--add-disabled {false, true}]
 *                     [--landing-page-url]
 *                     [--subscription]
 * ```
 *
 * @param {string} clientId The client ID from Slack.
 * @param {string} clientSecret The client secret from Slack.
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} verificationToken The verification token from Slack.
 */
var az_bot_slack_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_slack_create_command_builder, _super);
    function az_bot_slack_create_command_builder(commandPath, resultDataTypeName, clientId, clientSecret, name, resourceGroup, verificationToken) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clientId(clientId);
        _this.clientSecret(clientSecret);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.verificationToken(verificationToken);
        return _this;
    }
    /** The client ID from Slack. */
    az_bot_slack_create_command_builder.prototype.clientId = function (value) {
        this.setFlag("--client-id", value);
        return this;
    };
    /** The client secret from Slack. */
    az_bot_slack_create_command_builder.prototype.clientSecret = function (value) {
        this.setFlag("--client-secret", value);
        return this;
    };
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_slack_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_slack_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The verification token from Slack. */
    az_bot_slack_create_command_builder.prototype.verificationToken = function (value) {
        this.setFlag("--verification-token", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_slack_create_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** The landing page url to redirect to after login. */
    az_bot_slack_create_command_builder.prototype.landingPageUrl = function (value) {
        this.setFlag("--landing-page-url", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_slack_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_slack_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the Slack Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot slack delete --name
 *                     --resource-group
 *                     [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_slack_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_slack_delete_command_builder, _super);
    function az_bot_slack_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_slack_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_slack_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_slack_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_slack_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the Slack Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot slack show --name
 *                   --resource-group
 *                   [--query-examples]
 *                   [--subscription]
 *                   [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_slack_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_slack_show_command_builder, _super);
    function az_bot_slack_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_slack_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_slack_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_slack_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_slack_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_slack_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_slack_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the SMS Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot sms create --account-sid
 *                   --auth-token
 *                   --name
 *                   --phone
 *                   --resource-group
 *                   [--add-disabled {false, true}]
 *                   [--is-validated {false, true}]
 *                   [--subscription]
 * ```
 *
 * @param {string} accountSid The account SID for the Twilio account.
 * @param {string} authToken The token token for the Twilio account.
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} phone The phone number for the Twilio account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_sms_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_sms_create_command_builder, _super);
    function az_bot_sms_create_command_builder(commandPath, resultDataTypeName, accountSid, authToken, name, phone, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountSid(accountSid);
        _this.authToken(authToken);
        _this.name(name);
        _this.phone(phone);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The account SID for the Twilio account. */
    az_bot_sms_create_command_builder.prototype.accountSid = function (value) {
        this.setFlag("--account-sid", value);
        return this;
    };
    /** The token token for the Twilio account. */
    az_bot_sms_create_command_builder.prototype.authToken = function (value) {
        this.setFlag("--auth-token", value);
        return this;
    };
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_sms_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The phone number for the Twilio account. */
    az_bot_sms_create_command_builder.prototype.phone = function (value) {
        this.setFlag("--phone", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_sms_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_sms_create_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** Whether or not the Twilio account has been validated for use with the bot. */
    az_bot_sms_create_command_builder.prototype.isValidated = function (value) {
        this.setFlag("--is-validated", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_sms_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_sms_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the SMS Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot sms delete --name
 *                   --resource-group
 *                   [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_sms_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_sms_delete_command_builder, _super);
    function az_bot_sms_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_sms_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_sms_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_sms_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_sms_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the SMS Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot sms show --name
 *                 --resource-group
 *                 [--query-examples]
 *                 [--subscription]
 *                 [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_sms_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_sms_show_command_builder, _super);
    function az_bot_sms_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_sms_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_sms_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_sms_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_sms_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_sms_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_sms_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Telegram Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot telegram create --access-token
 *                        --name
 *                        --resource-group
 *                        [--add-disabled {false, true}]
 *                        [--is-validated {false, true}]
 *                        [--subscription]
 * ```
 *
 * @param {string} accessToken The access token for the Telegram account.
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_telegram_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_telegram_create_command_builder, _super);
    function az_bot_telegram_create_command_builder(commandPath, resultDataTypeName, accessToken, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accessToken(accessToken);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The access token for the Telegram account. */
    az_bot_telegram_create_command_builder.prototype.accessToken = function (value) {
        this.setFlag("--access-token", value);
        return this;
    };
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_telegram_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_telegram_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add the channel in a disabled state. */
    az_bot_telegram_create_command_builder.prototype.addDisabled = function (value) {
        this.setFlag("--add-disabled", value.toString());
        return this;
    };
    /** Whether or not the Telegram account has been validated for use with the bot. */
    az_bot_telegram_create_command_builder.prototype.isValidated = function (value) {
        this.setFlag("--is-validated", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_telegram_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_telegram_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the Telegram Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot telegram delete --name
 *                        --resource-group
 *                        [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_telegram_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_telegram_delete_command_builder, _super);
    function az_bot_telegram_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_telegram_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_telegram_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_telegram_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_telegram_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the Telegram Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot telegram show --name
 *                      --resource-group
 *                      [--query-examples]
 *                      [--subscription]
 *                      [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_telegram_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_telegram_show_command_builder, _super);
    function az_bot_telegram_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_telegram_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_telegram_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_telegram_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_telegram_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_telegram_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_telegram_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details of the Webchat Channel on a bot.
 *
 * Syntax:
 * ```
 * az bot webchat show --name
 *                     --resource-group
 *                     [--query-examples]
 *                     [--subscription]
 *                     [--with-secrets {false, true}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_webchat_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_webchat_show_command_builder, _super);
    function az_bot_webchat_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_webchat_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_webchat_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_webchat_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_webchat_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show secrets in response for the channel. */
    az_bot_webchat_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value.toString());
        return this;
    };
    return az_bot_webchat_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new v4 SDK bot.
 *
 * Syntax:
 * ```
 * az bot create --appid
 *               --kind {registration, webapp}
 *               --name
 *               --resource-group
 *               [--description]
 *               [--display-name]
 *               [--echo {false, true}]
 *               [--endpoint]
 *               [--lang {Csharp, Javascript}]
 *               [--location]
 *               [--password]
 *               [--sku {F0, S1}]
 *               [--subscription]
 *               [--tags]
 * ```
 *
 * @param {string} appid The Microsoft account ID (MSA ID) to be used with the bot.
 * @param {'registration' | 'webapp'} kind The kind of the bot.
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_create_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_create_command_builder, _super);
    function az_bot_create_command_builder(commandPath, resultDataTypeName, appid, kind, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.appid(appid);
        _this.kind(kind);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The Microsoft account ID (MSA ID) to be used with the bot. */
    az_bot_create_command_builder.prototype.appid = function (value) {
        this.setFlag("--appid", value);
        return this;
    };
    /** The kind of the bot. */
    az_bot_create_command_builder.prototype.kind = function (value) {
        this.setFlag("--kind", value);
        return this;
    };
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The description of the bot. */
    az_bot_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The display name of the bot. If not specified, defaults to the name of the bot. */
    az_bot_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Deploy an Echo Bot template to the newly created v4 Web App Bot. */
    az_bot_create_command_builder.prototype.echo = function (value) {
        this.setFlag("--echo", value.toString());
        return this;
    };
    /** The messaging endpoint of the bot. */
    az_bot_create_command_builder.prototype.endpoint = function (value) {
        this.setFlag("--endpoint", value);
        return this;
    };
    /** The language to be used to create the bot. */
    az_bot_create_command_builder.prototype.lang = function (value) {
        this.setFlag("--lang", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_bot_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The Microsoft account (MSA) password for the bot. Used to authorize messages being sent from the bot. Required when "--kind" is "webapp". */
    az_bot_create_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** The Sku of the bot. */
    az_bot_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_bot_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_bot_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an existing bot.
 *
 * Syntax:
 * ```
 * az bot delete --name
 *               --resource-group
 *               [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_delete_command_builder, _super);
    function az_bot_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Download an existing bot.
 *
 * Syntax:
 * ```
 * az bot download --name
 *                 --resource-group
 *                 [--save-path]
 *                 [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_download_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_download_command_builder, _super);
    function az_bot_download_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_download_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_download_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The directory to download bot code to. */
    az_bot_download_command_builder.prototype.savePath = function (value) {
        this.setFlag("--save-path", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_download_command_builder;
}(base_1.CommandBuilder));
/**
 * Add scripts/config files for publishing with `az webapp deployment`.
 *
 * Syntax:
 * ```
 * az bot prepare-deploy --lang {Csharp, Javascript, Typescript}
 *                       [--code-dir]
 *                       [--proj-file-path]
 *                       [--subscription]
 * ```
 *
 * @param {'Csharp' | 'Javascript' | 'Typescript'} lang The language or runtime of the bot.
 */
var az_bot_prepare_deploy_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_prepare_deploy_command_builder, _super);
    function az_bot_prepare_deploy_command_builder(commandPath, resultDataTypeName, lang) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.lang(lang);
        return _this;
    }
    /** The language or runtime of the bot. */
    az_bot_prepare_deploy_command_builder.prototype.lang = function (value) {
        this.setFlag("--lang", value);
        return this;
    };
    /** The directory to place the generated deployment files in. Defaults to the current directory the command is called from. */
    az_bot_prepare_deploy_command_builder.prototype.codeDir = function (value) {
        this.setFlag("--code-dir", value);
        return this;
    };
    /** The path to the .csproj file relative to --code-dir. */
    az_bot_prepare_deploy_command_builder.prototype.projFilePath = function (value) {
        this.setFlag("--proj-file-path", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_prepare_deploy_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_prepare_deploy_command_builder;
}(base_1.CommandBuilder));
/**
 * (Maintenance mode) Add scripts to your local source code directory to be able to publish back using `az bot publish` for v3 SDK bots.
 *
 * Syntax:
 * ```
 * az bot prepare-publish --name
 *                        --proj-file-path
 *                        --resource-group
 *                        --sln-name
 *                        [--code-dir]
 *                        [--subscription]
 *                        [--version {v3, v4}]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} projFilePath Path to the start up project file name. (E.g. "./EchoBotWithCounter.csproj") Required only for C#.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} slnName Name of the start up solution file name. Required only for C#.
 */
var az_bot_prepare_publish_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_prepare_publish_command_builder, _super);
    function az_bot_prepare_publish_command_builder(commandPath, resultDataTypeName, name, projFilePath, resourceGroup, slnName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.projFilePath(projFilePath);
        _this.resourceGroup(resourceGroup);
        _this.slnName(slnName);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_prepare_publish_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Path to the start up project file name. (E.g. "./EchoBotWithCounter.csproj") Required only for C#. */
    az_bot_prepare_publish_command_builder.prototype.projFilePath = function (value) {
        this.setFlag("--proj-file-path", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_prepare_publish_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the start up solution file name. Required only for C#. */
    az_bot_prepare_publish_command_builder.prototype.slnName = function (value) {
        this.setFlag("--sln-name", value);
        return this;
    };
    /** The directory to download deployment scripts to. */
    az_bot_prepare_publish_command_builder.prototype.codeDir = function (value) {
        this.setFlag("--code-dir", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_prepare_publish_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The Microsoft Bot Builder SDK version to be used in the bot template that will be created. */
    az_bot_prepare_publish_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_bot_prepare_publish_command_builder;
}(base_1.CommandBuilder));
/**
 * Publish to a bot's associated app service.
 *
 * Syntax:
 * ```
 * az bot publish --name
 *                --resource-group
 *                [--code-dir]
 *                [--keep-node-modules {false, true}]
 *                [--proj-file-path]
 *                [--subscription]
 *                [--timeout]
 *                [--version]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_publish_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_publish_command_builder, _super);
    function az_bot_publish_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_publish_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_publish_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The directory to upload bot code from. */
    az_bot_publish_command_builder.prototype.codeDir = function (value) {
        this.setFlag("--code-dir", value);
        return this;
    };
    /** Keep node_modules folder and do not run `npm install` on the App Service. This can greatly speed up publish commands for Node.js SDK bots. */
    az_bot_publish_command_builder.prototype.keepNodeModules = function (value) {
        this.setFlag("--keep-node-modules", value.toString());
        return this;
    };
    /** Path to the start up project file name. (E.g. "./EchoBotWithCounter.csproj"). */
    az_bot_publish_command_builder.prototype.projFilePath = function (value) {
        this.setFlag("--proj-file-path", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_publish_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Configurable timeout in seconds for checking the status of deployment. */
    az_bot_publish_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** The Microsoft Bot Builder SDK version of the bot. */
    az_bot_publish_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_bot_publish_command_builder;
}(base_1.CommandBuilder));
/**
 * Get an existing bot.
 *
 * Syntax:
 * ```
 * az bot show --name
 *             --resource-group
 *             [--msbot {false, true}]
 *             [--query-examples]
 *             [--subscription]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_show_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_show_command_builder, _super);
    function az_bot_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Show the output as JSON compatible with a .bot file. */
    az_bot_show_command_builder.prototype.msbot = function (value) {
        this.setFlag("--msbot", value.toString());
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_bot_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_bot_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an existing bot.
 *
 * Syntax:
 * ```
 * az bot update --name
 *               --resource-group
 *               [--ai-api-key]
 *               [--ai-app-id]
 *               [--ai-key]
 *               [--description]
 *               [--display-name]
 *               [--endpoint]
 *               [--icon-url]
 *               [--sku {F0, S1}]
 *               [--subscription]
 *               [--tags]
 * ```
 *
 * @param {string} name The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_bot_update_command_builder = /** @class */ (function (_super) {
    __extends(az_bot_update_command_builder, _super);
    function az_bot_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    az_bot_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_bot_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Azure Application Insights API Key used to read bot analytics data. Provide a key if you want to view analytics about your bot in the Analytics blade. */
    az_bot_update_command_builder.prototype.appInsightsApiKey = function (value) {
        this.setFlag("--app-insights-api-key", value);
        return this;
    };
    /** Azure Application Insights Application ID used to read bot analytics data. Provide an Id if you want to view analytics about your bot in the Analytics blade. */
    az_bot_update_command_builder.prototype.appInsightsAppId = function (value) {
        this.setFlag("--app-insights-app-id", value);
        return this;
    };
    /** Azure Application Insights Key used to write bot analytics data. Provide a key if you want to receive bot analytics. */
    az_bot_update_command_builder.prototype.appInsightsKey = function (value) {
        this.setFlag("--app-insights-key", value);
        return this;
    };
    /** The bot's new description. */
    az_bot_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The bot's new display name. */
    az_bot_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The new endpoint of the bot. Must start with "https://". */
    az_bot_update_command_builder.prototype.endpoint = function (value) {
        this.setFlag("--endpoint", value);
        return this;
    };
    /** Icon URL for bot avatar. Accepts PNG files with file size limit of 30KB. */
    az_bot_update_command_builder.prototype.iconUrl = function (value) {
        this.setFlag("--icon-url", value);
        return this;
    };
    /** The Sku of the bot. */
    az_bot_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_bot_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_bot_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_bot_update_command_builder;
}(base_1.CommandBuilder));
