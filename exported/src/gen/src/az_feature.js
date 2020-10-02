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
exports.az_feature = void 0;
var base_1 = require("../base");
/** Manage resource provider features. */
var az_feature = /** @class */ (function () {
    function az_feature() {
    }
    /**
     * List preview features.
     *
     * Syntax:
     * ```
     * az feature list [--namespace]
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     */
    az_feature.list = function () {
        return new az_feature_list_command_builder("az feature list", 'az_feature_list_command_result');
    };
    /**
     * Register a preview feature.
     *
     * Syntax:
     * ```
     * az feature register --name
     *                     --namespace
     *                     [--subscription]
     * ```
     *
     * @param {string} name The feature name.
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    az_feature.register = function (name, namespace) {
        return new az_feature_register_command_builder("az feature register", 'az_feature_register_command_result', name, namespace);
    };
    /**
     * Gets the preview feature with the specified name.
     *
     * Syntax:
     * ```
     * az feature show --name
     *                 --namespace
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} name The feature name.
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    az_feature.show = function (name, namespace) {
        return new az_feature_show_command_builder("az feature show", 'az_feature_show_command_result', name, namespace);
    };
    /**
     * Unregister a preview feature.
     *
     * Syntax:
     * ```
     * az feature unregister --name
     *                       --namespace
     *                       [--subscription]
     * ```
     *
     * @param {string} name The feature name.
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    az_feature.unregister = function (name, namespace) {
        return new az_feature_unregister_command_builder("az feature unregister", 'az_feature_unregister_command_result', name, namespace);
    };
    return az_feature;
}());
exports.az_feature = az_feature;
/**
 * List preview features.
 *
 * Syntax:
 * ```
 * az feature list [--namespace]
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 */
var az_feature_list_command_builder = /** @class */ (function (_super) {
    __extends(az_feature_list_command_builder, _super);
    function az_feature_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The resource namespace, aka 'provider'. */
    az_feature_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_feature_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_feature_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_feature_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Register a preview feature.
 *
 * Syntax:
 * ```
 * az feature register --name
 *                     --namespace
 *                     [--subscription]
 * ```
 *
 * @param {string} name The feature name.
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
var az_feature_register_command_builder = /** @class */ (function (_super) {
    __extends(az_feature_register_command_builder, _super);
    function az_feature_register_command_builder(commandPath, resultDataTypeName, name, namespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespace(namespace);
        return _this;
    }
    /** The feature name. */
    az_feature_register_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource namespace, aka 'provider'. */
    az_feature_register_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_feature_register_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_feature_register_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the preview feature with the specified name.
 *
 * Syntax:
 * ```
 * az feature show --name
 *                 --namespace
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} name The feature name.
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
var az_feature_show_command_builder = /** @class */ (function (_super) {
    __extends(az_feature_show_command_builder, _super);
    function az_feature_show_command_builder(commandPath, resultDataTypeName, name, namespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespace(namespace);
        return _this;
    }
    /** The feature name. */
    az_feature_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource namespace, aka 'provider'. */
    az_feature_show_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_feature_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_feature_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_feature_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Unregister a preview feature.
 *
 * Syntax:
 * ```
 * az feature unregister --name
 *                       --namespace
 *                       [--subscription]
 * ```
 *
 * @param {string} name The feature name.
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
var az_feature_unregister_command_builder = /** @class */ (function (_super) {
    __extends(az_feature_unregister_command_builder, _super);
    function az_feature_unregister_command_builder(commandPath, resultDataTypeName, name, namespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespace(namespace);
        return _this;
    }
    /** The feature name. */
    az_feature_unregister_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource namespace, aka 'provider'. */
    az_feature_unregister_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_feature_unregister_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_feature_unregister_command_builder;
}(base_1.CommandBuilder));
