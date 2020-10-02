import { CommandBuilder } from '../base';
import { az_bot_authsetting_create_command_result } from './models/az_bot_authsetting_create_command_result';
import { az_bot_authsetting_delete_command_result } from './models/az_bot_authsetting_delete_command_result';
import { az_bot_authsetting_list_command_result } from './models/az_bot_authsetting_list_command_result';
import { az_bot_authsetting_list_providers_command_result } from './models/az_bot_authsetting_list_providers_command_result';
import { az_bot_authsetting_show_command_result } from './models/az_bot_authsetting_show_command_result';
import { az_bot_directline_create_command_result } from './models/az_bot_directline_create_command_result';
import { az_bot_directline_delete_command_result } from './models/az_bot_directline_delete_command_result';
import { az_bot_directline_show_command_result } from './models/az_bot_directline_show_command_result';
import { az_bot_directline_update_command_result } from './models/az_bot_directline_update_command_result';
import { az_bot_email_create_command_result } from './models/az_bot_email_create_command_result';
import { az_bot_email_delete_command_result } from './models/az_bot_email_delete_command_result';
import { az_bot_email_show_command_result } from './models/az_bot_email_show_command_result';
import { az_bot_facebook_create_command_result } from './models/az_bot_facebook_create_command_result';
import { az_bot_facebook_delete_command_result } from './models/az_bot_facebook_delete_command_result';
import { az_bot_facebook_show_command_result } from './models/az_bot_facebook_show_command_result';
import { az_bot_kik_create_command_result } from './models/az_bot_kik_create_command_result';
import { az_bot_kik_delete_command_result } from './models/az_bot_kik_delete_command_result';
import { az_bot_kik_show_command_result } from './models/az_bot_kik_show_command_result';
import { az_bot_msteams_create_command_result } from './models/az_bot_msteams_create_command_result';
import { az_bot_msteams_delete_command_result } from './models/az_bot_msteams_delete_command_result';
import { az_bot_msteams_show_command_result } from './models/az_bot_msteams_show_command_result';
import { az_bot_skype_create_command_result } from './models/az_bot_skype_create_command_result';
import { az_bot_skype_delete_command_result } from './models/az_bot_skype_delete_command_result';
import { az_bot_skype_show_command_result } from './models/az_bot_skype_show_command_result';
import { az_bot_slack_create_command_result } from './models/az_bot_slack_create_command_result';
import { az_bot_slack_delete_command_result } from './models/az_bot_slack_delete_command_result';
import { az_bot_slack_show_command_result } from './models/az_bot_slack_show_command_result';
import { az_bot_sms_create_command_result } from './models/az_bot_sms_create_command_result';
import { az_bot_sms_delete_command_result } from './models/az_bot_sms_delete_command_result';
import { az_bot_sms_show_command_result } from './models/az_bot_sms_show_command_result';
import { az_bot_telegram_create_command_result } from './models/az_bot_telegram_create_command_result';
import { az_bot_telegram_delete_command_result } from './models/az_bot_telegram_delete_command_result';
import { az_bot_telegram_show_command_result } from './models/az_bot_telegram_show_command_result';
import { az_bot_webchat_show_command_result } from './models/az_bot_webchat_show_command_result';
import { az_bot_create_command_result } from './models/az_bot_create_command_result';
import { az_bot_delete_command_result } from './models/az_bot_delete_command_result';
import { az_bot_download_command_result } from './models/az_bot_download_command_result';
import { az_bot_prepare_deploy_command_result } from './models/az_bot_prepare_deploy_command_result';
import { az_bot_prepare_publish_command_result } from './models/az_bot_prepare_publish_command_result';
import { az_bot_publish_command_result } from './models/az_bot_publish_command_result';
import { az_bot_show_command_result } from './models/az_bot_show_command_result';
import { az_bot_update_command_result } from './models/az_bot_update_command_result';
/** Manage OAuth connection settings on a bot. */
export declare class az_bot_authsetting {
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
    static create(clientId: string, clientSecret: string, name: string, providerScopeString: string, resourceGroup: string, service: string, settingName: string): az_bot_authsetting_create_command_builder;
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
    static delete(name: string, resourceGroup: string, settingName: string): az_bot_authsetting_delete_command_builder;
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
    static list(name: string, resourceGroup: string): az_bot_authsetting_list_command_builder;
    /**
     * List details for all service providers available for creating OAuth connection settings.
     *
     * Syntax:
     * ```
     * az bot authsetting list-providers [--provider-name]
     *                                   [--subscription]
     * ```
     */
    static list_providers(): az_bot_authsetting_list_providers_command_builder;
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
    static show(name: string, resourceGroup: string, settingName: string): az_bot_authsetting_show_command_builder;
}
/** Manage the Directline Channel on a bot. */
export declare class az_bot_directline {
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
    static create(name: string, resourceGroup: string): az_bot_directline_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_directline_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_directline_show_command_builder;
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
    static update(name: string, resourceGroup: string): az_bot_directline_update_command_builder;
}
/** Manage the email Channel on a bot. */
export declare class az_bot_email {
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
    static create(emailAddress: string, name: string, password: string, resourceGroup: string): az_bot_email_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_email_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_email_show_command_builder;
}
/** Manage the Facebook Channel on a bot. */
export declare class az_bot_facebook {
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
    static create(appid: string, name: string, pageId: string, resourceGroup: string, secret: string, token: string): az_bot_facebook_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_facebook_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_facebook_show_command_builder;
}
/** Manage the Kik Channel on a bot. */
export declare class az_bot_kik {
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
    static create(key: string, name: string, resourceGroup: string, userName: string): az_bot_kik_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_kik_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_kik_show_command_builder;
}
/** Manage the Microsoft Teams Channel on a bot. */
export declare class az_bot_msteams {
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
    static create(name: string, resourceGroup: string): az_bot_msteams_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_msteams_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_msteams_show_command_builder;
}
/** Manage the Skype Channel on a bot. */
export declare class az_bot_skype {
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
    static create(name: string, resourceGroup: string): az_bot_skype_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_skype_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_skype_show_command_builder;
}
/** Manage the Slack Channel on a bot. */
export declare class az_bot_slack {
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
    static create(clientId: string, clientSecret: string, name: string, resourceGroup: string, verificationToken: string): az_bot_slack_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_slack_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_slack_show_command_builder;
}
/** Manage the SMS Channel on a bot. */
export declare class az_bot_sms {
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
    static create(accountSid: string, authToken: string, name: string, phone: string, resourceGroup: string): az_bot_sms_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_sms_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_sms_show_command_builder;
}
/** Manage the Telegram Channel on a bot. */
export declare class az_bot_telegram {
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
    static create(accessToken: string, name: string, resourceGroup: string): az_bot_telegram_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_telegram_delete_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_telegram_show_command_builder;
}
/** Manage the Webchat Channel on a bot. */
export declare class az_bot_webchat {
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
    static show(name: string, resourceGroup: string): az_bot_webchat_show_command_builder;
}
/** Manage Microsoft Azure Bot Service. */
export declare class az_bot {
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
    static create(appid: string, kind: 'registration' | 'webapp', name: string, resourceGroup: string): az_bot_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_bot_delete_command_builder;
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
    static download(name: string, resourceGroup: string): az_bot_download_command_builder;
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
    static prepare_deploy(lang: 'Csharp' | 'Javascript' | 'Typescript'): az_bot_prepare_deploy_command_builder;
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
    static prepare_publish(name: string, projFilePath: string, resourceGroup: string, slnName: string): az_bot_prepare_publish_command_builder;
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
    static publish(name: string, resourceGroup: string): az_bot_publish_command_builder;
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
    static show(name: string, resourceGroup: string): az_bot_show_command_builder;
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
    static update(name: string, resourceGroup: string): az_bot_update_command_builder;
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
declare class az_bot_authsetting_create_command_builder extends CommandBuilder<az_bot_authsetting_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clientId: string, clientSecret: string, name: string, providerScopeString: string, resourceGroup: string, service: string, settingName: string);
    /** Client ID associated with the service provider setting. */
    clientId(value: string): az_bot_authsetting_create_command_builder;
    /** Client secret associated with the service provider setting. */
    clientSecret(value: string): az_bot_authsetting_create_command_builder;
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_authsetting_create_command_builder;
    /** The scope string associated with the service provider setting.The string should be delimited as needed for the service provider. */
    providerScopeString(value: string): az_bot_authsetting_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_authsetting_create_command_builder;
    /** Name of the service provider. For a list of all service providers, use `az bot connection listserviceproviders`. */
    service(value: string): az_bot_authsetting_create_command_builder;
    /** Name of the oauth connection setting. */
    settingName(value: string): az_bot_authsetting_create_command_builder;
    /** Parameter values for service provider parameters. Usage: --parameters key=value key1=value1. */
    parameters(value: string): az_bot_authsetting_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_authsetting_create_command_builder;
}
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
declare class az_bot_authsetting_delete_command_builder extends CommandBuilder<az_bot_authsetting_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, settingName: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_authsetting_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_authsetting_delete_command_builder;
    /** Name of the oauth connection setting. */
    settingName(value: string): az_bot_authsetting_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_authsetting_delete_command_builder;
}
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
declare class az_bot_authsetting_list_command_builder extends CommandBuilder<az_bot_authsetting_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_authsetting_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_authsetting_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_authsetting_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_authsetting_list_command_builder;
}
/**
 * List details for all service providers available for creating OAuth connection settings.
 *
 * Syntax:
 * ```
 * az bot authsetting list-providers [--provider-name]
 *                                   [--subscription]
 * ```
 */
declare class az_bot_authsetting_list_providers_command_builder extends CommandBuilder<az_bot_authsetting_list_providers_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Service provider name for which to fetch details. */
    providerName(value: string): az_bot_authsetting_list_providers_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_authsetting_list_providers_command_builder;
}
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
declare class az_bot_authsetting_show_command_builder extends CommandBuilder<az_bot_authsetting_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, settingName: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_authsetting_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_authsetting_show_command_builder;
    /** Name of the oauth connection setting. */
    settingName(value: string): az_bot_authsetting_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_authsetting_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_authsetting_show_command_builder;
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
declare class az_bot_directline_create_command_builder extends CommandBuilder<az_bot_directline_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_directline_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_directline_create_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_directline_create_command_builder;
    /** If true, v1 protocol will be disabled on the channel. */
    disablev1(value: boolean): az_bot_directline_create_command_builder;
    /** If true, v3 protocol will be disabled on the channel. */
    disablev3(value: boolean): az_bot_directline_create_command_builder;
    /** If true, enables enhanced authentication features. Must be true for --trusted-origins parameters to work. */
    enableEnhancedAuth(value: boolean): az_bot_directline_create_command_builder;
    /** Name of the Directline channel site. */
    siteName(value: string): az_bot_directline_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_directline_create_command_builder;
    /** Space separated Trusted Origins URLs (must use HTTPS) e.g. --trusted-origins <a href="https://mybotsite1.azurewebsites.net">https://mybotsite1.azurewebsites.net</a> <a href="https://mybotsite2.azurewebsites.net">https://mybotsite2.azurewebsites.net</a>. */
    trustedOrigins(value: string): az_bot_directline_create_command_builder;
}
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
declare class az_bot_directline_delete_command_builder extends CommandBuilder<az_bot_directline_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_directline_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_directline_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_directline_delete_command_builder;
}
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
declare class az_bot_directline_show_command_builder extends CommandBuilder<az_bot_directline_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_directline_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_directline_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_directline_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_directline_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_directline_show_command_builder;
}
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
declare class az_bot_directline_update_command_builder extends CommandBuilder<az_bot_directline_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_directline_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_directline_update_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_directline_update_command_builder;
    /** If true, v1 protocol will be disabled on the channel. */
    disablev1(value: boolean): az_bot_directline_update_command_builder;
    /** If true, v3 protocol will be disabled on the channel. */
    disablev3(value: boolean): az_bot_directline_update_command_builder;
    /** If true, enables enhanced authentication features. Must be true for --trusted-origins parameters to work. */
    enableEnhancedAuth(value: boolean): az_bot_directline_update_command_builder;
    /** Name of the Directline channel site. */
    siteName(value: string): az_bot_directline_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_directline_update_command_builder;
    /** Space separated Trusted Origins URLs (must use HTTPS) e.g. --trusted-origins <a href="https://mybotsite1.azurewebsites.net">https://mybotsite1.azurewebsites.net</a> <a href="https://mybotsite2.azurewebsites.net">https://mybotsite2.azurewebsites.net</a>. */
    trustedOrigins(value: string): az_bot_directline_update_command_builder;
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
declare class az_bot_email_create_command_builder extends CommandBuilder<az_bot_email_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, emailAddress: string, name: string, password: string, resourceGroup: string);
    /** The email address for the bot. */
    emailAddress(value: string): az_bot_email_create_command_builder;
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_email_create_command_builder;
    /** The email password for the bot. */
    password(value: string): az_bot_email_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_email_create_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_email_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_email_create_command_builder;
}
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
declare class az_bot_email_delete_command_builder extends CommandBuilder<az_bot_email_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_email_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_email_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_email_delete_command_builder;
}
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
declare class az_bot_email_show_command_builder extends CommandBuilder<az_bot_email_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_email_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_email_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_email_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_email_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_email_show_command_builder;
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
declare class az_bot_facebook_create_command_builder extends CommandBuilder<az_bot_facebook_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, appid: string, name: string, pageId: string, resourceGroup: string, secret: string, token: string);
    /** The Facebook application id. */
    appid(value: string): az_bot_facebook_create_command_builder;
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_facebook_create_command_builder;
    /** Page ID of the Facebook page to be used for the bot. */
    pageId(value: string): az_bot_facebook_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_facebook_create_command_builder;
    /** The Facebook application secret. */
    secret(value: string): az_bot_facebook_create_command_builder;
    /** The Facebook application access token. */
    token(value: string): az_bot_facebook_create_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_facebook_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_facebook_create_command_builder;
}
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
declare class az_bot_facebook_delete_command_builder extends CommandBuilder<az_bot_facebook_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_facebook_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_facebook_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_facebook_delete_command_builder;
}
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
declare class az_bot_facebook_show_command_builder extends CommandBuilder<az_bot_facebook_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_facebook_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_facebook_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_facebook_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_facebook_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_facebook_show_command_builder;
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
declare class az_bot_kik_create_command_builder extends CommandBuilder<az_bot_kik_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: string, name: string, resourceGroup: string, userName: string);
    /** The API key for the Kik account. */
    key(value: string): az_bot_kik_create_command_builder;
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_kik_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_kik_create_command_builder;
    /** Kik user name. */
    userName(value: string): az_bot_kik_create_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_kik_create_command_builder;
    /** Whether or not the Kik account has been validated for use with the bot. */
    isValidated(value: boolean): az_bot_kik_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_kik_create_command_builder;
}
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
declare class az_bot_kik_delete_command_builder extends CommandBuilder<az_bot_kik_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_kik_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_kik_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_kik_delete_command_builder;
}
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
declare class az_bot_kik_show_command_builder extends CommandBuilder<az_bot_kik_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_kik_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_kik_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_kik_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_kik_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_kik_show_command_builder;
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
declare class az_bot_msteams_create_command_builder extends CommandBuilder<az_bot_msteams_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_msteams_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_msteams_create_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_msteams_create_command_builder;
    /** The calling web hook to use on Microsoft Teams. */
    callingWebHook(value: string): az_bot_msteams_create_command_builder;
    /** Enable calling on Microsoft Teams. */
    enableCalling(value: boolean): az_bot_msteams_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_msteams_create_command_builder;
}
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
declare class az_bot_msteams_delete_command_builder extends CommandBuilder<az_bot_msteams_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_msteams_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_msteams_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_msteams_delete_command_builder;
}
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
declare class az_bot_msteams_show_command_builder extends CommandBuilder<az_bot_msteams_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_msteams_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_msteams_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_msteams_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_msteams_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_msteams_show_command_builder;
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
declare class az_bot_skype_create_command_builder extends CommandBuilder<az_bot_skype_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_skype_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_skype_create_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_skype_create_command_builder;
    /** The calling web hook to use on Skype. */
    callingWebHook(value: string): az_bot_skype_create_command_builder;
    /** Enable calling on Skype. */
    enableCalling(value: boolean): az_bot_skype_create_command_builder;
    /** Enable groups on Skype. */
    enableGroups(value: boolean): az_bot_skype_create_command_builder;
    /** Enable media cards on Skype. */
    enableMediaCards(value: boolean): az_bot_skype_create_command_builder;
    /** Enable messaging on Skype. */
    enableMessaging(value: boolean): az_bot_skype_create_command_builder;
    /** Enable screen sharing on Skype. */
    enableScreenSharing(value: boolean): az_bot_skype_create_command_builder;
    /** Enable video on Skype. */
    enableVideo(value: boolean): az_bot_skype_create_command_builder;
    /** Select groups mode on Skype. */
    groupsMode(value: string): az_bot_skype_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_skype_create_command_builder;
}
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
declare class az_bot_skype_delete_command_builder extends CommandBuilder<az_bot_skype_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_skype_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_skype_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_skype_delete_command_builder;
}
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
declare class az_bot_skype_show_command_builder extends CommandBuilder<az_bot_skype_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_skype_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_skype_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_skype_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_skype_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_skype_show_command_builder;
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
declare class az_bot_slack_create_command_builder extends CommandBuilder<az_bot_slack_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clientId: string, clientSecret: string, name: string, resourceGroup: string, verificationToken: string);
    /** The client ID from Slack. */
    clientId(value: string): az_bot_slack_create_command_builder;
    /** The client secret from Slack. */
    clientSecret(value: string): az_bot_slack_create_command_builder;
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_slack_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_slack_create_command_builder;
    /** The verification token from Slack. */
    verificationToken(value: string): az_bot_slack_create_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_slack_create_command_builder;
    /** The landing page url to redirect to after login. */
    landingPageUrl(value: string): az_bot_slack_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_slack_create_command_builder;
}
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
declare class az_bot_slack_delete_command_builder extends CommandBuilder<az_bot_slack_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_slack_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_slack_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_slack_delete_command_builder;
}
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
declare class az_bot_slack_show_command_builder extends CommandBuilder<az_bot_slack_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_slack_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_slack_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_slack_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_slack_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_slack_show_command_builder;
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
declare class az_bot_sms_create_command_builder extends CommandBuilder<az_bot_sms_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountSid: string, authToken: string, name: string, phone: string, resourceGroup: string);
    /** The account SID for the Twilio account. */
    accountSid(value: string): az_bot_sms_create_command_builder;
    /** The token token for the Twilio account. */
    authToken(value: string): az_bot_sms_create_command_builder;
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_sms_create_command_builder;
    /** The phone number for the Twilio account. */
    phone(value: string): az_bot_sms_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_sms_create_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_sms_create_command_builder;
    /** Whether or not the Twilio account has been validated for use with the bot. */
    isValidated(value: boolean): az_bot_sms_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_sms_create_command_builder;
}
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
declare class az_bot_sms_delete_command_builder extends CommandBuilder<az_bot_sms_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_sms_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_sms_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_sms_delete_command_builder;
}
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
declare class az_bot_sms_show_command_builder extends CommandBuilder<az_bot_sms_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_sms_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_sms_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_sms_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_sms_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_sms_show_command_builder;
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
declare class az_bot_telegram_create_command_builder extends CommandBuilder<az_bot_telegram_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accessToken: string, name: string, resourceGroup: string);
    /** The access token for the Telegram account. */
    accessToken(value: string): az_bot_telegram_create_command_builder;
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_telegram_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_telegram_create_command_builder;
    /** Add the channel in a disabled state. */
    addDisabled(value: boolean): az_bot_telegram_create_command_builder;
    /** Whether or not the Telegram account has been validated for use with the bot. */
    isValidated(value: boolean): az_bot_telegram_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_telegram_create_command_builder;
}
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
declare class az_bot_telegram_delete_command_builder extends CommandBuilder<az_bot_telegram_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_telegram_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_telegram_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_telegram_delete_command_builder;
}
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
declare class az_bot_telegram_show_command_builder extends CommandBuilder<az_bot_telegram_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_telegram_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_telegram_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_telegram_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_telegram_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_telegram_show_command_builder;
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
declare class az_bot_webchat_show_command_builder extends CommandBuilder<az_bot_webchat_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_webchat_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_webchat_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_webchat_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_webchat_show_command_builder;
    /** Show secrets in response for the channel. */
    withSecrets(value: boolean): az_bot_webchat_show_command_builder;
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
declare class az_bot_create_command_builder extends CommandBuilder<az_bot_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, appid: string, kind: 'registration' | 'webapp', name: string, resourceGroup: string);
    /** The Microsoft account ID (MSA ID) to be used with the bot. */
    appid(value: string): az_bot_create_command_builder;
    /** The kind of the bot. */
    kind(value: 'registration' | 'webapp'): az_bot_create_command_builder;
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_create_command_builder;
    /** The description of the bot. */
    description(value: string): az_bot_create_command_builder;
    /** The display name of the bot. If not specified, defaults to the name of the bot. */
    displayName(value: string): az_bot_create_command_builder;
    /** Deploy an Echo Bot template to the newly created v4 Web App Bot. */
    echo(value: boolean): az_bot_create_command_builder;
    /** The messaging endpoint of the bot. */
    endpoint(value: string): az_bot_create_command_builder;
    /** The language to be used to create the bot. */
    lang(value: 'Csharp' | 'Javascript'): az_bot_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_bot_create_command_builder;
    /** The Microsoft account (MSA) password for the bot. Used to authorize messages being sent from the bot. Required when "--kind" is "webapp". */
    password(value: string): az_bot_create_command_builder;
    /** The Sku of the bot. */
    sku(value: 'F0' | 'S1'): az_bot_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_bot_create_command_builder;
}
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
declare class az_bot_delete_command_builder extends CommandBuilder<az_bot_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_delete_command_builder;
}
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
declare class az_bot_download_command_builder extends CommandBuilder<az_bot_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_download_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_download_command_builder;
    /** The directory to download bot code to. */
    savePath(value: string): az_bot_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_download_command_builder;
}
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
declare class az_bot_prepare_deploy_command_builder extends CommandBuilder<az_bot_prepare_deploy_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lang: 'Csharp' | 'Javascript' | 'Typescript');
    /** The language or runtime of the bot. */
    lang(value: 'Csharp' | 'Javascript' | 'Typescript'): az_bot_prepare_deploy_command_builder;
    /** The directory to place the generated deployment files in. Defaults to the current directory the command is called from. */
    codeDir(value: string): az_bot_prepare_deploy_command_builder;
    /** The path to the .csproj file relative to --code-dir. */
    projFilePath(value: string): az_bot_prepare_deploy_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_prepare_deploy_command_builder;
}
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
declare class az_bot_prepare_publish_command_builder extends CommandBuilder<az_bot_prepare_publish_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, projFilePath: string, resourceGroup: string, slnName: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_prepare_publish_command_builder;
    /** Path to the start up project file name. (E.g. "./EchoBotWithCounter.csproj") Required only for C#. */
    projFilePath(value: string): az_bot_prepare_publish_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_prepare_publish_command_builder;
    /** Name of the start up solution file name. Required only for C#. */
    slnName(value: string): az_bot_prepare_publish_command_builder;
    /** The directory to download deployment scripts to. */
    codeDir(value: string): az_bot_prepare_publish_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_prepare_publish_command_builder;
    /** The Microsoft Bot Builder SDK version to be used in the bot template that will be created. */
    version(value: 'v3' | 'v4'): az_bot_prepare_publish_command_builder;
}
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
declare class az_bot_publish_command_builder extends CommandBuilder<az_bot_publish_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_publish_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_publish_command_builder;
    /** The directory to upload bot code from. */
    codeDir(value: string): az_bot_publish_command_builder;
    /** Keep node_modules folder and do not run `npm install` on the App Service. This can greatly speed up publish commands for Node.js SDK bots. */
    keepNodeModules(value: boolean): az_bot_publish_command_builder;
    /** Path to the start up project file name. (E.g. "./EchoBotWithCounter.csproj"). */
    projFilePath(value: string): az_bot_publish_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_publish_command_builder;
    /** Configurable timeout in seconds for checking the status of deployment. */
    timeout(value: string): az_bot_publish_command_builder;
    /** The Microsoft Bot Builder SDK version of the bot. */
    version(value: string): az_bot_publish_command_builder;
}
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
declare class az_bot_show_command_builder extends CommandBuilder<az_bot_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_show_command_builder;
    /** Show the output as JSON compatible with a .bot file. */
    msbot(value: boolean): az_bot_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_bot_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_show_command_builder;
}
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
declare class az_bot_update_command_builder extends CommandBuilder<az_bot_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The resource name of the bot. Bot name must be between 4 and 42 characters in length. Bot name can only have the following characters -, a - z, A - Z, 0 - 9, and _. */
    name(value: string): az_bot_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_bot_update_command_builder;
    /** Azure Application Insights API Key used to read bot analytics data. Provide a key if you want to view analytics about your bot in the Analytics blade. */
    appInsightsApiKey(value: string): az_bot_update_command_builder;
    /** Azure Application Insights Application ID used to read bot analytics data. Provide an Id if you want to view analytics about your bot in the Analytics blade. */
    appInsightsAppId(value: string): az_bot_update_command_builder;
    /** Azure Application Insights Key used to write bot analytics data. Provide a key if you want to receive bot analytics. */
    appInsightsKey(value: string): az_bot_update_command_builder;
    /** The bot's new description. */
    description(value: string): az_bot_update_command_builder;
    /** The bot's new display name. */
    displayName(value: string): az_bot_update_command_builder;
    /** The new endpoint of the bot. Must start with "https://". */
    endpoint(value: string): az_bot_update_command_builder;
    /** Icon URL for bot avatar. Accepts PNG files with file size limit of 30KB. */
    iconUrl(value: string): az_bot_update_command_builder;
    /** The Sku of the bot. */
    sku(value: 'F0' | 'S1'): az_bot_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_bot_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_bot_update_command_builder;
}
export {};
