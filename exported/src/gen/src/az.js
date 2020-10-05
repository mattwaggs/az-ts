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
exports.az = void 0;
var base_1 = require("../base");
/** */
var az = /** @class */ (function () {
    function az() {
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
    az.configure = function () {
        return new az_configure_command_builder("az configure", 'az_configure_command_result');
    };
    /**
     * Send feedback to the Azure CLI Team!
     *
     * Syntax:
     * ```
     * az feedback
     * ```
     */
    az.feedback = function () {
        return new az_feedback_command_builder("az feedback", 'az_feedback_command_result');
    };
    /**
     * I'm an AI robot, my advice is based on our Azure documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation.
     *
     * Syntax:
     * ```
     * az find [<CLI_TERM>]
     * ```
     */
    az.find = function () {
        return new az_find_command_builder("az find", 'az_find_command_result');
    };
    /**
     * Start interactive mode. Installs the Interactive extension if not installed already.
     *
     * Syntax:
     * ```
     * az interactive [--style {bg, br, contrast, default, grey, halloween, neon, none, pastel, primary, purple, quiet}]
     *                [--update]
     * ```
     */
    az.interactive = function () {
        return new az_interactive_command_builder("az interactive", 'az_interactive_command_result');
    };
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
    az.login = function () {
        return new az_login_command_builder("az login", 'az_login_command_result');
    };
    /**
     * Log out to remove access to Azure subscriptions.
     *
     * Syntax:
     * ```
     * az logout [--username]
     * ```
     */
    az.logout = function () {
        return new az_logout_command_builder("az logout", 'az_logout_command_result');
    };
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
    az.rest = function (uri) {
        return new az_rest_command_builder("az rest", 'az_rest_command_result', uri);
    };
    /**
     * Runs a self-test of the CLI.
     *
     * Syntax:
     * ```
     * az self-test [--subscription]
     * ```
     */
    az.self_test = function () {
        return new az_self_test_command_builder("az self-test", 'az_self_test_command_result');
    };
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
    az.upgrade = function () {
        return new az_upgrade_command_builder("az upgrade", 'az_upgrade_command_result');
    };
    /**
     * Show the versions of Azure CLI modules and extensions in JSON format by default or format configured by --output.
     *
     * Syntax:
     * ```
     * az version [--subscription]
     * ```
     */
    az.version = function () {
        return new az_version_command_builder("az version", 'az_version_command_result');
    };
    return az;
}());
exports.az = az;
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
var az_configure_command_builder = /** @class */ (function (_super) {
    __extends(az_configure_command_builder, _super);
    function az_configure_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated 'name=value' pairs for common argument defaults. */
    az_configure_command_builder.prototype.defaults = function (value) {
        this.setFlag("--defaults", value);
        return this;
    };
    /** List all applicable defaults. */
    az_configure_command_builder.prototype.listDefaults = function (value) {
        this.setFlag("--list-defaults", value.toString());
        return this;
    };
    /** Scope of defaults. Using "local" for settings only effective under current folder. */
    az_configure_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    return az_configure_command_builder;
}(base_1.CommandBuilder));
/**
 * Send feedback to the Azure CLI Team!
 *
 * Syntax:
 * ```
 * az feedback
 * ```
 */
var az_feedback_command_builder = /** @class */ (function (_super) {
    __extends(az_feedback_command_builder, _super);
    function az_feedback_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    return az_feedback_command_builder;
}(base_1.CommandBuilder));
/**
 * I'm an AI robot, my advice is based on our Azure documentation as well as the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure products and documentation.
 *
 * Syntax:
 * ```
 * az find [<CLI_TERM>]
 * ```
 */
var az_find_command_builder = /** @class */ (function (_super) {
    __extends(az_find_command_builder, _super);
    function az_find_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** An Azure CLI command or group for which you need an example. */
    az_find_command_builder.prototype.cliTerm = function (value) {
        this.setFlag("<CLI_TERM>", value);
        return this;
    };
    return az_find_command_builder;
}(base_1.CommandBuilder));
/**
 * Start interactive mode. Installs the Interactive extension if not installed already.
 *
 * Syntax:
 * ```
 * az interactive [--style {bg, br, contrast, default, grey, halloween, neon, none, pastel, primary, purple, quiet}]
 *                [--update]
 * ```
 */
var az_interactive_command_builder = /** @class */ (function (_super) {
    __extends(az_interactive_command_builder, _super);
    function az_interactive_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The colors of the shell. */
    az_interactive_command_builder.prototype.style = function (value) {
        this.setFlag("--style", value);
        return this;
    };
    /** Update the Interactive extension to the latest available. */
    az_interactive_command_builder.prototype.update = function (value) {
        this.setFlag("--update", value);
        return this;
    };
    return az_interactive_command_builder;
}(base_1.CommandBuilder));
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
var az_login_command_builder = /** @class */ (function (_super) {
    __extends(az_login_command_builder, _super);
    function az_login_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Support access tenants without subscriptions. It's uncommon but useful to run tenant level commands, such as 'az ad'. */
    az_login_command_builder.prototype.allowNoSubscriptions = function (value) {
        this.setFlag("--allow-no-subscriptions", value);
        return this;
    };
    /** Log in using the Virtual Machine's identity. */
    az_login_command_builder.prototype.identity = function (value) {
        this.setFlag("--identity", value);
        return this;
    };
    /** Credentials like user password, or for a service principal, provide client secret or a pem file with key and public certificate. Will prompt if not given. */
    az_login_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** The credential representing a service principal. */
    az_login_command_builder.prototype.servicePrincipal = function (value) {
        this.setFlag("--service-principal", value);
        return this;
    };
    /** The AAD tenant, must provide when using service principals. */
    az_login_command_builder.prototype.tenant = function (value) {
        this.setFlag("--tenant", value);
        return this;
    };
    /** Used with a service principal configured with Subject Name and Issuer Authentication in order to support automatic certificate rolls. */
    az_login_command_builder.prototype.useCertSnIssuer = function (value) {
        this.setFlag("--use-cert-sn-issuer", value);
        return this;
    };
    /** Use CLI's old authentication flow based on device code. CLI will also use this if it can't launch a browser in your behalf, e.g. in remote SSH or Cloud Shell. */
    az_login_command_builder.prototype.useDeviceCode = function (value) {
        this.setFlag("--use-device-code", value);
        return this;
    };
    /** User name, service principal, or managed service identity ID. */
    az_login_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_login_command_builder;
}(base_1.CommandBuilder));
/**
 * Log out to remove access to Azure subscriptions.
 *
 * Syntax:
 * ```
 * az logout [--username]
 * ```
 */
var az_logout_command_builder = /** @class */ (function (_super) {
    __extends(az_logout_command_builder, _super);
    function az_logout_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Account user, if missing, logout the current active account. */
    az_logout_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_logout_command_builder;
}(base_1.CommandBuilder));
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
var az_rest_command_builder = /** @class */ (function (_super) {
    __extends(az_rest_command_builder, _super);
    function az_rest_command_builder(commandPath, resultDataTypeName, uri) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.uri(uri);
        return _this;
    }
    /** Request URL. If it doesn't start with a host, CLI assumes it as an Azure resource ID and prefixes it with the ARM endpoint of the current cloud shown by `az cloud show --query endpoints.resourceManager`. Common token {subscriptionId} will be replaced with the current subscription ID specified by `az account set`. */
    az_rest_command_builder.prototype.uri = function (value) {
        this.setFlag("--uri", value);
        return this;
    };
    /** Request body. Use @{file} to load from a file. For quoting issues in different terminals, see <a href="https://github.com/Azure/azure-cli/blob/dev/doc/use_cli_effectively.md#quoting-issues">https://github.com/Azure/azure-cli/blob/dev/doc/use_cli_effectively.md#quoting-issues</a>. */
    az_rest_command_builder.prototype.body = function (value) {
        this.setFlag("--body", value);
        return this;
    };
    /** Space-separated headers in KEY=VALUE format or JSON string. Use @{file} to load from a file. */
    az_rest_command_builder.prototype.headers = function (value) {
        this.setFlag("--headers", value);
        return this;
    };
    /** HTTP request method. */
    az_rest_command_builder.prototype.method = function (value) {
        this.setFlag("--method", value);
        return this;
    };
    /** Save response payload to a file. */
    az_rest_command_builder.prototype.outputFile = function (value) {
        this.setFlag("--output-file", value);
        return this;
    };
    /** Resource url for which CLI should acquire a token from AAD in order to access the service. The token will be placed in the Authorization header. By default, CLI can figure this out based on --url argument, unless you use ones not in the list of "az cloud show --query endpoints". */
    az_rest_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Do not auto-append Authorization header. */
    az_rest_command_builder.prototype.skipAuthorizationHeader = function (value) {
        this.setFlag("--skip-authorization-header", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_rest_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Query parameters in the URL. Space-separated queries in KEY=VALUE format or JSON string. Use @{file} to load from a file. */
    az_rest_command_builder.prototype.uriParameters = function (value) {
        this.setFlag("--uri-parameters", value);
        return this;
    };
    return az_rest_command_builder;
}(base_1.CommandBuilder));
/**
 * Runs a self-test of the CLI.
 *
 * Syntax:
 * ```
 * az self-test [--subscription]
 * ```
 */
var az_self_test_command_builder = /** @class */ (function (_super) {
    __extends(az_self_test_command_builder, _super);
    function az_self_test_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_self_test_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_self_test_command_builder;
}(base_1.CommandBuilder));
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
var az_upgrade_command_builder = /** @class */ (function (_super) {
    __extends(az_upgrade_command_builder, _super);
    function az_upgrade_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Enable updating extensions as well. */
    az_upgrade_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_upgrade_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for checking release notes. */
    az_upgrade_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_upgrade_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the versions of Azure CLI modules and extensions in JSON format by default or format configured by --output.
 *
 * Syntax:
 * ```
 * az version [--subscription]
 * ```
 */
var az_version_command_builder = /** @class */ (function (_super) {
    __extends(az_version_command_builder, _super);
    function az_version_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_version_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_version_command_builder;
}(base_1.CommandBuilder));
