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
exports.az_provider = exports.az_provider_operation = void 0;
var base_1 = require("../base");
/** Get provider operations metadatas. */
var az_provider_operation = /** @class */ (function () {
    function az_provider_operation() {
    }
    /**
     * Get operations from all providers.
     *
     * Syntax:
     * ```
     * az provider operation list [--query-examples]
     *                            [--subscription]
     * ```
     */
    az_provider_operation.list = function () {
        return new az_provider_operation_list_command_builder("az provider operation list", 'az_provider_operation_list_command_result');
    };
    /**
     * Get an individual provider's operations.
     *
     * Syntax:
     * ```
     * az provider operation show --namespace
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    az_provider_operation.show = function (namespace) {
        return new az_provider_operation_show_command_builder("az provider operation show", 'az_provider_operation_show_command_result', namespace);
    };
    return az_provider_operation;
}());
exports.az_provider_operation = az_provider_operation;
/** Manage resource providers. */
var az_provider = /** @class */ (function () {
    function az_provider() {
    }
    /**
     * Gets all resource providers for a subscription.
     *
     * Syntax:
     * ```
     * az provider list [--expand]
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     */
    az_provider.list = function () {
        return new az_provider_list_command_builder("az provider list", 'az_provider_list_command_result');
    };
    /**
     * Register a provider.
     *
     * Syntax:
     * ```
     * az provider register --namespace
     *                      [--subscription]
     *                      [--wait]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    az_provider.register = function (namespace) {
        return new az_provider_register_command_builder("az provider register", 'az_provider_register_command_result', namespace);
    };
    /**
     * Gets the specified resource provider.
     *
     * Syntax:
     * ```
     * az provider show --namespace
     *                  [--expand]
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    az_provider.show = function (namespace) {
        return new az_provider_show_command_builder("az provider show", 'az_provider_show_command_result', namespace);
    };
    /**
     * Unregister a provider.
     *
     * Syntax:
     * ```
     * az provider unregister --namespace
     *                        [--subscription]
     *                        [--wait]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    az_provider.unregister = function (namespace) {
        return new az_provider_unregister_command_builder("az provider unregister", 'az_provider_unregister_command_result', namespace);
    };
    return az_provider;
}());
exports.az_provider = az_provider;
/**
 * Get operations from all providers.
 *
 * Syntax:
 * ```
 * az provider operation list [--query-examples]
 *                            [--subscription]
 * ```
 */
var az_provider_operation_list_command_builder = /** @class */ (function (_super) {
    __extends(az_provider_operation_list_command_builder, _super);
    function az_provider_operation_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_provider_operation_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_provider_operation_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_provider_operation_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get an individual provider's operations.
 *
 * Syntax:
 * ```
 * az provider operation show --namespace
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
var az_provider_operation_show_command_builder = /** @class */ (function (_super) {
    __extends(az_provider_operation_show_command_builder, _super);
    function az_provider_operation_show_command_builder(commandPath, resultDataTypeName, namespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespace(namespace);
        return _this;
    }
    /** The resource namespace, aka 'provider'. */
    az_provider_operation_show_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_provider_operation_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_provider_operation_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_provider_operation_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets all resource providers for a subscription.
 *
 * Syntax:
 * ```
 * az provider list [--expand]
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 */
var az_provider_list_command_builder = /** @class */ (function (_super) {
    __extends(az_provider_list_command_builder, _super);
    function az_provider_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
    az_provider_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_provider_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_provider_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_provider_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Register a provider.
 *
 * Syntax:
 * ```
 * az provider register --namespace
 *                      [--subscription]
 *                      [--wait]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
var az_provider_register_command_builder = /** @class */ (function (_super) {
    __extends(az_provider_register_command_builder, _super);
    function az_provider_register_command_builder(commandPath, resultDataTypeName, namespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespace(namespace);
        return _this;
    }
    /** The resource namespace, aka 'provider'. */
    az_provider_register_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_provider_register_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Wait for the registration to finish. */
    az_provider_register_command_builder.prototype.wait = function (value) {
        this.setFlag("--wait", value);
        return this;
    };
    return az_provider_register_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the specified resource provider.
 *
 * Syntax:
 * ```
 * az provider show --namespace
 *                  [--expand]
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
var az_provider_show_command_builder = /** @class */ (function (_super) {
    __extends(az_provider_show_command_builder, _super);
    function az_provider_show_command_builder(commandPath, resultDataTypeName, namespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespace(namespace);
        return _this;
    }
    /** The resource namespace, aka 'provider'. */
    az_provider_show_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. */
    az_provider_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_provider_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_provider_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_provider_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Unregister a provider.
 *
 * Syntax:
 * ```
 * az provider unregister --namespace
 *                        [--subscription]
 *                        [--wait]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
var az_provider_unregister_command_builder = /** @class */ (function (_super) {
    __extends(az_provider_unregister_command_builder, _super);
    function az_provider_unregister_command_builder(commandPath, resultDataTypeName, namespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespace(namespace);
        return _this;
    }
    /** The resource namespace, aka 'provider'. */
    az_provider_unregister_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_provider_unregister_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Wait for unregistration to finish. */
    az_provider_unregister_command_builder.prototype.wait = function (value) {
        this.setFlag("--wait", value);
        return this;
    };
    return az_provider_unregister_command_builder;
}(base_1.CommandBuilder));
