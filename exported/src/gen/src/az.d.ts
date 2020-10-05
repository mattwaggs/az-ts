import { CommandBuilder } from '../base';
import { az_configure_command_result } from './models/az_configure_command_result';
import { az_feedback_command_result } from './models/az_feedback_command_result';
import { az_find_command_result } from './models/az_find_command_result';
import { az_interactive_command_result } from './models/az_interactive_command_result';
import { az_login_command_result } from './models/az_login_command_result';
import { az_logout_command_result } from './models/az_logout_command_result';
import { az_rest_command_result } from './models/az_rest_command_result';
import { az_self_test_command_result } from './models/az_self_test_command_result';
import { az_upgrade_command_result } from './models/az_upgrade_command_result';
import { az_version_command_result } from './models/az_version_command_result';
/** */
export declare class az {
    /**
     * Manage Azure CLI configuration. This command is interactive.
     *
     * Syntax:
     * ```
     * az configure [--defaults]
     *              [--list-defaults {false, true}]
     *              [--scope {global, local}]
     * ```
     */
    static configure(): az_configure_command_builder;
    /**
     * Send feedback to the Azure CLI Team!
     *
     * Syntax:
     * ```
     * az feedback
     * ```
     */
    static feedback(): az_feedback_command_builder;
    /**
     * I'm an AI robot, my advice is based on our Azure documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation.
     *
     * Syntax:
     * ```
     * az find [<CLI_TERM>]
     * ```
     */
    static find(): az_find_command_builder;
    /**
     * Start interactive mode. Installs the Interactive extension if not installed already.
     *
     * Syntax:
     * ```
     * az interactive [--style {bg, br, contrast, default, grey, halloween, neon, none, pastel, primary, purple, quiet}]
     *                [--update]
     * ```
     */
    static interactive(): az_interactive_command_builder;
    /**
     * Log in to Azure.
     *
     * Syntax:
     * ```
     * az login [--allow-no-subscriptions]
     *          [--identity]
     *          [--password]
     *          [--service-principal]
     *          [--tenant]
     *          [--use-cert-sn-issuer]
     *          [--use-device-code]
     *          [--username]
     * ```
     */
    static login(): az_login_command_builder;
    /**
     * Log out to remove access to Azure subscriptions.
     *
     * Syntax:
     * ```
     * az logout [--username]
     * ```
     */
    static logout(): az_logout_command_builder;
    /**
     * Invoke a custom request.
     *
     * Syntax:
     * ```
     * az rest --uri
     *         [--body]
     *         [--headers]
     *         [--method {delete, get, head, options, patch, post, put}]
     *         [--output-file]
     *         [--resource]
     *         [--skip-authorization-header]
     *         [--subscription]
     *         [--uri-parameters]
     * ```
     *
     * @param {string} uri Request URL. If it doesn't start with a host, CLI assumes it as an Azure resource ID and prefixes it with the ARM endpoint of the current cloud shown by `az cloud show --query endpoints.resourceManager`. Common token {subscriptionId} will be replaced with the current subscription ID specified by `az account set`.
     */
    static rest(uri: string): az_rest_command_builder;
    /**
     * Runs a self-test of the CLI.
     *
     * Syntax:
     * ```
     * az self-test [--subscription]
     * ```
     */
    static self_test(): az_self_test_command_builder;
    /**
     * Upgrade Azure CLI and extensions.
     *
     * Syntax:
     * ```
     * az upgrade [--all {false, true}]
     *            [--subscription]
     *            [--yes]
     * ```
     */
    static upgrade(): az_upgrade_command_builder;
    /**
     * Show the versions of Azure CLI modules and extensions in JSON format by default or format configured by --output.
     *
     * Syntax:
     * ```
     * az version [--subscription]
     * ```
     */
    static version(): az_version_command_builder;
}
/**
 * Manage Azure CLI configuration. This command is interactive.
 *
 * Syntax:
 * ```
 * az configure [--defaults]
 *              [--list-defaults {false, true}]
 *              [--scope {global, local}]
 * ```
 */
declare class az_configure_command_builder extends CommandBuilder<az_configure_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Space-separated 'name=value' pairs for common argument defaults. */
    defaults(value: string): az_configure_command_builder;
    /** List all applicable defaults. */
    listDefaults(value: boolean): az_configure_command_builder;
    /** Scope of defaults. Using "local" for settings only effective under current folder. */
    scope(value: 'global' | 'local'): az_configure_command_builder;
}
/**
 * Send feedback to the Azure CLI Team!
 *
 * Syntax:
 * ```
 * az feedback
 * ```
 */
declare class az_feedback_command_builder extends CommandBuilder<az_feedback_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
}
/**
 * I'm an AI robot, my advice is based on our Azure documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation.
 *
 * Syntax:
 * ```
 * az find [<CLI_TERM>]
 * ```
 */
declare class az_find_command_builder extends CommandBuilder<az_find_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** An Azure CLI command or group for which you need an example. */
    cliTerm(value: string): az_find_command_builder;
}
/**
 * Start interactive mode. Installs the Interactive extension if not installed already.
 *
 * Syntax:
 * ```
 * az interactive [--style {bg, br, contrast, default, grey, halloween, neon, none, pastel, primary, purple, quiet}]
 *                [--update]
 * ```
 */
declare class az_interactive_command_builder extends CommandBuilder<az_interactive_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The colors of the shell. */
    style(value: 'bg' | 'br' | 'contrast' | 'default' | 'grey' | 'halloween' | 'neon' | 'none' | 'pastel' | 'primary' | 'purple' | 'quiet'): az_interactive_command_builder;
    /** Update the Interactive extension to the latest available. */
    update(value: string): az_interactive_command_builder;
}
/**
 * Log in to Azure.
 *
 * Syntax:
 * ```
 * az login [--allow-no-subscriptions]
 *          [--identity]
 *          [--password]
 *          [--service-principal]
 *          [--tenant]
 *          [--use-cert-sn-issuer]
 *          [--use-device-code]
 *          [--username]
 * ```
 */
declare class az_login_command_builder extends CommandBuilder<az_login_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Support access tenants without subscriptions. It's uncommon but useful to run tenant level commands, such as 'az ad'. */
    allowNoSubscriptions(value: string): az_login_command_builder;
    /** Log in using the Virtual Machine's identity. */
    identity(value: string): az_login_command_builder;
    /** Credentials like user password, or for a service principal, provide client secret or a pem file with key and public certificate. Will prompt if not given. */
    password(value: string): az_login_command_builder;
    /** The credential representing a service principal. */
    servicePrincipal(value: string): az_login_command_builder;
    /** The AAD tenant, must provide when using service principals. */
    tenant(value: string): az_login_command_builder;
    /** Used with a service principal configured with Subject Name and Issuer Authentication in order to support automatic certificate rolls. */
    useCertSnIssuer(value: string): az_login_command_builder;
    /** Use CLI's old authentication flow based on device code. CLI will also use this if it can't launch a browser in your behalf, e.g. in remote SSH or Cloud Shell. */
    useDeviceCode(value: string): az_login_command_builder;
    /** User name, service principal, or managed service identity ID. */
    username(value: string): az_login_command_builder;
}
/**
 * Log out to remove access to Azure subscriptions.
 *
 * Syntax:
 * ```
 * az logout [--username]
 * ```
 */
declare class az_logout_command_builder extends CommandBuilder<az_logout_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Account user, if missing, logout the current active account. */
    username(value: string): az_logout_command_builder;
}
/**
 * Invoke a custom request.
 *
 * Syntax:
 * ```
 * az rest --uri
 *         [--body]
 *         [--headers]
 *         [--method {delete, get, head, options, patch, post, put}]
 *         [--output-file]
 *         [--resource]
 *         [--skip-authorization-header]
 *         [--subscription]
 *         [--uri-parameters]
 * ```
 *
 * @param {string} uri Request URL. If it doesn't start with a host, CLI assumes it as an Azure resource ID and prefixes it with the ARM endpoint of the current cloud shown by `az cloud show --query endpoints.resourceManager`. Common token {subscriptionId} will be replaced with the current subscription ID specified by `az account set`.
 */
declare class az_rest_command_builder extends CommandBuilder<az_rest_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, uri: string);
    /** Request URL. If it doesn't start with a host, CLI assumes it as an Azure resource ID and prefixes it with the ARM endpoint of the current cloud shown by `az cloud show --query endpoints.resourceManager`. Common token {subscriptionId} will be replaced with the current subscription ID specified by `az account set`. */
    uri(value: string): az_rest_command_builder;
    /** Request body. Use @{file} to load from a file. For quoting issues in different terminals, see <a href="https://github.com/Azure/azure-cli/blob/dev/doc/use_cli_effectively.md#quoting-issues">https://github.com/Azure/azure-cli/blob/dev/doc/use_cli_effectively.md#quoting-issues</a>. */
    body(value: string): az_rest_command_builder;
    /** Space-separated headers in KEY=VALUE format or JSON string. Use @{file} to load from a file. */
    headers(value: string): az_rest_command_builder;
    /** HTTP request method. */
    method(value: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put'): az_rest_command_builder;
    /** Save response payload to a file. */
    outputFile(value: string): az_rest_command_builder;
    /** Resource url for which CLI should acquire a token from AAD in order to access the service. The token will be placed in the Authorization header. By default, CLI can figure this out based on --url argument, unless you use ones not in the list of "az cloud show --query endpoints". */
    resource(value: string): az_rest_command_builder;
    /** Do not auto-append Authorization header. */
    skipAuthorizationHeader(value: string): az_rest_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_rest_command_builder;
    /** Query parameters in the URL. Space-separated queries in KEY=VALUE format or JSON string. Use @{file} to load from a file. */
    uriParameters(value: string): az_rest_command_builder;
}
/**
 * Runs a self-test of the CLI.
 *
 * Syntax:
 * ```
 * az self-test [--subscription]
 * ```
 */
declare class az_self_test_command_builder extends CommandBuilder<az_self_test_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_self_test_command_builder;
}
/**
 * Upgrade Azure CLI and extensions.
 *
 * Syntax:
 * ```
 * az upgrade [--all {false, true}]
 *            [--subscription]
 *            [--yes]
 * ```
 */
declare class az_upgrade_command_builder extends CommandBuilder<az_upgrade_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Enable updating extensions as well. */
    all(value: boolean): az_upgrade_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_upgrade_command_builder;
    /** Do not prompt for checking release notes. */
    yes(value: string): az_upgrade_command_builder;
}
/**
 * Show the versions of Azure CLI modules and extensions in JSON format by default or format configured by --output.
 *
 * Syntax:
 * ```
 * az version [--subscription]
 * ```
 */
declare class az_version_command_builder extends CommandBuilder<az_version_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_version_command_builder;
}
export {};
