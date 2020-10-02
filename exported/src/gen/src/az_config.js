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
/** Manage parameter persistence. */
var az_config_param_persist = /** @class */ (function () {
    function az_config_param_persist() {
    }
    /**
     * Delete parameter persistence data.
     *
     * Syntax:
     * ```
     * az config param-persist delete [--all]
     *                                [--purge]
     *                                [--recursive]
     *                                [--yes]
     *                                [<NAME>]
     * ```
     */
    az_config_param_persist["delete"] = function () {
        return new az_config_param_persist_delete_command_builder("az config param-persist delete", 'az_config_param_persist_delete_command_result');
    };
    /**
     * Turn off parameter persistence.
     *
     * Syntax:
     * ```
     * az config param-persist off
     * ```
     */
    az_config_param_persist.off = function () {
        return new az_config_param_persist_off_command_builder("az config param-persist off", 'az_config_param_persist_off_command_result');
    };
    /**
     * Turn on parameter persistence.
     *
     * Syntax:
     * ```
     * az config param-persist on
     * ```
     */
    az_config_param_persist.on = function () {
        return new az_config_param_persist_on_command_builder("az config param-persist on", 'az_config_param_persist_on_command_result');
    };
    /**
     * Show parameter persistence data.
     *
     * Syntax:
     * ```
     * az config param-persist show [--query-examples]
     *                              [<NAME>]
     * ```
     */
    az_config_param_persist.show = function () {
        return new az_config_param_persist_show_command_builder("az config param-persist show", 'az_config_param_persist_show_command_result');
    };
    return az_config_param_persist;
}());
exports.az_config_param_persist = az_config_param_persist;
/** Manage Azure CLI configuration. */
var az_config = /** @class */ (function () {
    function az_config() {
    }
    /**
     * Get a configuration.
     *
     * Syntax:
     * ```
     * az config get [--local]
     *               [<KEY>]
     * ```
     */
    az_config.get = function () {
        return new az_config_get_command_builder("az config get", 'az_config_get_command_result');
    };
    /**
     * Set a configuration.
     *
     * Syntax:
     * ```
     * az config set [--local]
     *               [<KEY_VALUE>]
     * ```
     */
    az_config.set = function () {
        return new az_config_set_command_builder("az config set", 'az_config_set_command_result');
    };
    /**
     * Unset a configuration.
     *
     * Syntax:
     * ```
     * az config unset [--local]
     *                 [<KEY>]
     * ```
     */
    az_config.unset = function () {
        return new az_config_unset_command_builder("az config unset", 'az_config_unset_command_result');
    };
    return az_config;
}());
exports.az_config = az_config;
/**
 * Delete parameter persistence data.
 *
 * Syntax:
 * ```
 * az config param-persist delete [--all]
 *                                [--purge]
 *                                [--recursive]
 *                                [--yes]
 *                                [<NAME>]
 * ```
 */
var az_config_param_persist_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_config_param_persist_delete_command_builder, _super);
    function az_config_param_persist_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Clear all parameter persistence data. Either positional name argument  or --all can be specified. */
    az_config_param_persist_delete_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Delete parameter persistence file from working directory. Only available when --all is specified. */
    az_config_param_persist_delete_command_builder.prototype.purge = function (value) {
        this.setFlag("--purge", value);
        return this;
    };
    /** Indicate this is recursive delete of parameter persistence. Only available when --all is specified. */
    az_config_param_persist_delete_command_builder.prototype.recursive = function (value) {
        this.setFlag("--recursive", value);
        return this;
    };
    /** Do not prompt for confirmation. Only available when --all is specified. */
    az_config_param_persist_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    /** Space-separated list of parameter persistence names. Either positional name argument or --all can be specified. */
    az_config_param_persist_delete_command_builder.prototype.name = function (value) {
        this.setFlag("<NAME>", value);
        return this;
    };
    return az_config_param_persist_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Turn off parameter persistence.
 *
 * Syntax:
 * ```
 * az config param-persist off
 * ```
 */
var az_config_param_persist_off_command_builder = /** @class */ (function (_super) {
    __extends(az_config_param_persist_off_command_builder, _super);
    function az_config_param_persist_off_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    return az_config_param_persist_off_command_builder;
}(base_1.CommandBuilder));
/**
 * Turn on parameter persistence.
 *
 * Syntax:
 * ```
 * az config param-persist on
 * ```
 */
var az_config_param_persist_on_command_builder = /** @class */ (function (_super) {
    __extends(az_config_param_persist_on_command_builder, _super);
    function az_config_param_persist_on_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    return az_config_param_persist_on_command_builder;
}(base_1.CommandBuilder));
/**
 * Show parameter persistence data.
 *
 * Syntax:
 * ```
 * az config param-persist show [--query-examples]
 *                              [<NAME>]
 * ```
 */
var az_config_param_persist_show_command_builder = /** @class */ (function (_super) {
    __extends(az_config_param_persist_show_command_builder, _super);
    function az_config_param_persist_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_config_param_persist_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Space-separated list of parameter persistence names. */
    az_config_param_persist_show_command_builder.prototype.name = function (value) {
        this.setFlag("<NAME>", value);
        return this;
    };
    return az_config_param_persist_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a configuration.
 *
 * Syntax:
 * ```
 * az config get [--local]
 *               [<KEY>]
 * ```
 */
var az_config_get_command_builder = /** @class */ (function (_super) {
    __extends(az_config_get_command_builder, _super);
    function az_config_get_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Include local configuration. Scan from the working directory up to the root drive, then the global configuration and return the first occurrence. */
    az_config_get_command_builder.prototype.local = function (value) {
        this.setFlag("--local", value);
        return this;
    };
    /** The configuration to get. If not provided, all sections and configurations will be listed. If `section` is provided, all configurations under the specified section will be listed. If `<section>.<key>` is provided, only the corresponding configuration is shown. */
    az_config_get_command_builder.prototype.key = function (value) {
        this.setFlag("<KEY>", value);
        return this;
    };
    return az_config_get_command_builder;
}(base_1.CommandBuilder));
/**
 * Set a configuration.
 *
 * Syntax:
 * ```
 * az config set [--local]
 *               [<KEY_VALUE>]
 * ```
 */
var az_config_set_command_builder = /** @class */ (function (_super) {
    __extends(az_config_set_command_builder, _super);
    function az_config_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Set as a local configuration in the working directory. */
    az_config_set_command_builder.prototype.local = function (value) {
        this.setFlag("--local", value);
        return this;
    };
    /** Space-separated configurations in the form of <section>.<key>=<value>. */
    az_config_set_command_builder.prototype.keyValue = function (value) {
        this.setFlag("<KEY_VALUE>", value);
        return this;
    };
    return az_config_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Unset a configuration.
 *
 * Syntax:
 * ```
 * az config unset [--local]
 *                 [<KEY>]
 * ```
 */
var az_config_unset_command_builder = /** @class */ (function (_super) {
    __extends(az_config_unset_command_builder, _super);
    function az_config_unset_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Include local configuration. Scan from the working directory up to the root drive, then the global configuration and unset the first occurrence. */
    az_config_unset_command_builder.prototype.local = function (value) {
        this.setFlag("--local", value);
        return this;
    };
    /** The configuration to unset, in the form of <section>.<key>. */
    az_config_unset_command_builder.prototype.key = function (value) {
        this.setFlag("<KEY>", value);
        return this;
    };
    return az_config_unset_command_builder;
}(base_1.CommandBuilder));
