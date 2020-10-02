"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/** Manage Local Context. */
var az_local_context = /** @class */ (function () {
    function az_local_context() {
    }
    /**
     * Delete local context data.
     *
     * Syntax:
     * ```
     * az local-context delete [--all]
     *                         [--name]
     *                         [--purge]
     *                         [--recursive]
     *                         [--subscription]
     *                         [--yes]
     * ```
     */
    az_local_context["delete"] = function () {
        return new az_local_context_delete_command_builder("az local-context delete", 'az_local_context_delete_command_result');
    };
    /**
     * Turn off local context.
     *
     * Syntax:
     * ```
     * az local-context off [--subscription]
     * ```
     */
    az_local_context.off = function () {
        return new az_local_context_off_command_builder("az local-context off", 'az_local_context_off_command_result');
    };
    /**
     * Turn on local context.
     *
     * Syntax:
     * ```
     * az local-context on [--subscription]
     * ```
     */
    az_local_context.on = function () {
        return new az_local_context_on_command_builder("az local-context on", 'az_local_context_on_command_result');
    };
    /**
     * Show local context data.
     *
     * Syntax:
     * ```
     * az local-context show [--name]
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     */
    az_local_context.show = function () {
        return new az_local_context_show_command_builder("az local-context show", 'az_local_context_show_command_result');
    };
    return az_local_context;
}());
exports.az_local_context = az_local_context;
/**
 * Delete local context data.
 *
 * Syntax:
 * ```
 * az local-context delete [--all]
 *                         [--name]
 *                         [--purge]
 *                         [--recursive]
 *                         [--subscription]
 *                         [--yes]
 * ```
 */
var az_local_context_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_local_context_delete_command_builder, _super);
    function az_local_context_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Clear all local context data. Either --name or --all can be specified. */
    az_local_context_delete_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Space-separated list of local context parameter names. Either --name or --all can be specified. */
    az_local_context_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Delete local context file from working directory. Only available when --all is specified. */
    az_local_context_delete_command_builder.prototype.purge = function (value) {
        this.setFlag("--purge", value);
        return this;
    };
    /** Indicate this is recursive delete of local context. Only available when --all is specified. */
    az_local_context_delete_command_builder.prototype.recursive = function (value) {
        this.setFlag("--recursive", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_local_context_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. Only available when --all is specified. */
    az_local_context_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_local_context_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Turn off local context.
 *
 * Syntax:
 * ```
 * az local-context off [--subscription]
 * ```
 */
var az_local_context_off_command_builder = /** @class */ (function (_super) {
    __extends(az_local_context_off_command_builder, _super);
    function az_local_context_off_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_local_context_off_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_local_context_off_command_builder;
}(base_1.CommandBuilder));
/**
 * Turn on local context.
 *
 * Syntax:
 * ```
 * az local-context on [--subscription]
 * ```
 */
var az_local_context_on_command_builder = /** @class */ (function (_super) {
    __extends(az_local_context_on_command_builder, _super);
    function az_local_context_on_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_local_context_on_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_local_context_on_command_builder;
}(base_1.CommandBuilder));
/**
 * Show local context data.
 *
 * Syntax:
 * ```
 * az local-context show [--name]
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 */
var az_local_context_show_command_builder = /** @class */ (function (_super) {
    __extends(az_local_context_show_command_builder, _super);
    function az_local_context_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated list of local context parameter names. */
    az_local_context_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_local_context_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_local_context_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_local_context_show_command_builder;
}(base_1.CommandBuilder));
