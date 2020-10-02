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
exports.az_extension = void 0;
var base_1 = require("../base");
/** Manage and update CLI extensions. */
var az_extension = /** @class */ (function () {
    function az_extension() {
    }
    /**
     * Add an extension.
     *
     * Syntax:
     * ```
     * az extension add [--name]
     *                  [--pip-extra-index-urls]
     *                  [--pip-proxy]
     *                  [--source]
     *                  [--system]
     *                  [--upgrade]
     *                  [--version]
     *                  [--yes]
     * ```
     */
    az_extension.add = function () {
        return new az_extension_add_command_builder("az extension add", 'az_extension_add_command_result');
    };
    /**
     * List the installed extensions.
     *
     * Syntax:
     * ```
     * az extension list [--query-examples]
     * ```
     */
    az_extension.list = function () {
        return new az_extension_list_command_builder("az extension list", 'az_extension_list_command_result');
    };
    /**
     * List publicly available extensions.
     *
     * Syntax:
     * ```
     * az extension list-available [--show-details]
     * ```
     */
    az_extension.list_available = function () {
        return new az_extension_list_available_command_builder("az extension list-available", 'az_extension_list_available_command_result');
    };
    /**
     * List available versions for an extension.
     *
     * Syntax:
     * ```
     * az extension list-versions --name
     * ```
     *
     * @param {string} name Name of extension.
     */
    az_extension.list_versions = function (name) {
        return new az_extension_list_versions_command_builder("az extension list-versions", 'az_extension_list_versions_command_result', name);
    };
    /**
     * Remove an extension.
     *
     * Syntax:
     * ```
     * az extension remove --name
     * ```
     *
     * @param {string} name Name of extension.
     */
    az_extension.remove = function (name) {
        return new az_extension_remove_command_builder("az extension remove", 'az_extension_remove_command_result', name);
    };
    /**
     * Show an extension.
     *
     * Syntax:
     * ```
     * az extension show --name
     *                   [--query-examples]
     * ```
     *
     * @param {string} name Name of extension.
     */
    az_extension.show = function (name) {
        return new az_extension_show_command_builder("az extension show", 'az_extension_show_command_result', name);
    };
    /**
     * Update an extension.
     *
     * Syntax:
     * ```
     * az extension update --name
     *                     [--pip-extra-index-urls]
     *                     [--pip-proxy]
     * ```
     *
     * @param {string} name Name of extension.
     */
    az_extension.update = function (name) {
        return new az_extension_update_command_builder("az extension update", 'az_extension_update_command_result', name);
    };
    return az_extension;
}());
exports.az_extension = az_extension;
/**
 * Add an extension.
 *
 * Syntax:
 * ```
 * az extension add [--name]
 *                  [--pip-extra-index-urls]
 *                  [--pip-proxy]
 *                  [--source]
 *                  [--system]
 *                  [--upgrade]
 *                  [--version]
 *                  [--yes]
 * ```
 */
var az_extension_add_command_builder = /** @class */ (function (_super) {
    __extends(az_extension_add_command_builder, _super);
    function az_extension_add_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of extension. */
    az_extension_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format. */
    az_extension_add_command_builder.prototype.pipExtraIndexUrls = function (value) {
        this.setFlag("--pip-extra-index-urls", value);
        return this;
    };
    /** Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port. */
    az_extension_add_command_builder.prototype.pipProxy = function (value) {
        this.setFlag("--pip-proxy", value);
        return this;
    };
    /** Filepath or URL to an extension. */
    az_extension_add_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Use a system directory for the extension. */
    az_extension_add_command_builder.prototype.system = function (value) {
        this.setFlag("--system", value);
        return this;
    };
    /** Update the extension if already installed, otherwise just install the extension. */
    az_extension_add_command_builder.prototype.upgrade = function (value) {
        this.setFlag("--upgrade", value);
        return this;
    };
    /** The specific version of an extension. */
    az_extension_add_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_extension_add_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_extension_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List the installed extensions.
 *
 * Syntax:
 * ```
 * az extension list [--query-examples]
 * ```
 */
var az_extension_list_command_builder = /** @class */ (function (_super) {
    __extends(az_extension_list_command_builder, _super);
    function az_extension_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_extension_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_extension_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List publicly available extensions.
 *
 * Syntax:
 * ```
 * az extension list-available [--show-details]
 * ```
 */
var az_extension_list_available_command_builder = /** @class */ (function (_super) {
    __extends(az_extension_list_available_command_builder, _super);
    function az_extension_list_available_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Show the raw data from the extension index. */
    az_extension_list_available_command_builder.prototype.showDetails = function (value) {
        this.setFlag("--show-details", value);
        return this;
    };
    return az_extension_list_available_command_builder;
}(base_1.CommandBuilder));
/**
 * List available versions for an extension.
 *
 * Syntax:
 * ```
 * az extension list-versions --name
 * ```
 *
 * @param {string} name Name of extension.
 */
var az_extension_list_versions_command_builder = /** @class */ (function (_super) {
    __extends(az_extension_list_versions_command_builder, _super);
    function az_extension_list_versions_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of extension. */
    az_extension_list_versions_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    return az_extension_list_versions_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an extension.
 *
 * Syntax:
 * ```
 * az extension remove --name
 * ```
 *
 * @param {string} name Name of extension.
 */
var az_extension_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_extension_remove_command_builder, _super);
    function az_extension_remove_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of extension. */
    az_extension_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    return az_extension_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Show an extension.
 *
 * Syntax:
 * ```
 * az extension show --name
 *                   [--query-examples]
 * ```
 *
 * @param {string} name Name of extension.
 */
var az_extension_show_command_builder = /** @class */ (function (_super) {
    __extends(az_extension_show_command_builder, _super);
    function az_extension_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of extension. */
    az_extension_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_extension_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_extension_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an extension.
 *
 * Syntax:
 * ```
 * az extension update --name
 *                     [--pip-extra-index-urls]
 *                     [--pip-proxy]
 * ```
 *
 * @param {string} name Name of extension.
 */
var az_extension_update_command_builder = /** @class */ (function (_super) {
    __extends(az_extension_update_command_builder, _super);
    function az_extension_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of extension. */
    az_extension_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format. */
    az_extension_update_command_builder.prototype.pipExtraIndexUrls = function (value) {
        this.setFlag("--pip-extra-index-urls", value);
        return this;
    };
    /** Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port. */
    az_extension_update_command_builder.prototype.pipProxy = function (value) {
        this.setFlag("--pip-proxy", value);
        return this;
    };
    return az_extension_update_command_builder;
}(base_1.CommandBuilder));
