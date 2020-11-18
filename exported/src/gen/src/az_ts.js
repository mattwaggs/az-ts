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
exports.az_ts = void 0;
var base_1 = require("../base");
/** Manage template specs at subscription or resource group scope. */
var az_ts = /** @class */ (function () {
    function az_ts() {
    }
    /**
     * Create a template spec and or template spec version.
     *
     * Syntax:
     * ```
     * az ts create --name
     *              --resource-group
     *              [--description]
     *              [--display-name]
     *              [--location]
     *              [--subscription]
     *              [--template-file]
     *              [--version]
     *              [--version-description]
     *              [--yes]
     * ```
     *
     * @param {string} name The name of the template spec.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ts.create = function (name, resourceGroup) {
        return new az_ts_create_command_builder("az ts create", 'az_ts_create_command_result', name, resourceGroup);
    };
    /**
     * Delete a specified template spec or template spec version by name or resource ID..
     *
     * Syntax:
     * ```
     * az ts delete [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--template-spec]
     *              [--version]
     *              [--yes]
     * ```
     */
    az_ts["delete"] = function () {
        return new az_ts_delete_command_builder("az ts delete", 'az_ts_delete_command_result');
    };
    /**
     * Export the specified template spec and artifacts (if any) to the specified output folder.
     *
     * Syntax:
     * ```
     * az ts export --output-folder
     *              [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--template-spec]
     *              [--version]
     * ```
     *
     * @param {string} outputFolder Existing folder to output export(s).
     */
    az_ts["export"] = function (outputFolder) {
        return new az_ts_export_command_builder("az ts export", 'az_ts_export_command_result', outputFolder);
    };
    /**
     * List template specs or template spec versions.
     *
     * Syntax:
     * ```
     * az ts list [--name]
     *            [--query-examples]
     *            [--resource-group]
     *            [--subscription]
     * ```
     */
    az_ts.list = function () {
        return new az_ts_list_command_builder("az ts list", 'az_ts_list_command_result');
    };
    /**
     * Get the specified template spec or template spec version.
     *
     * Syntax:
     * ```
     * az ts show [--name]
     *            [--query-examples]
     *            [--resource-group]
     *            [--subscription]
     *            [--template-spec]
     *            [--version]
     * ```
     */
    az_ts.show = function () {
        return new az_ts_show_command_builder("az ts show", 'az_ts_show_command_result');
    };
    /**
     * Update a template spec version.
     *
     * Syntax:
     * ```
     * az ts update [--description]
     *              [--display-name]
     *              [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--template-file]
     *              [--template-spec]
     *              [--version]
     *              [--version-description]
     *              [--yes]
     * ```
     */
    az_ts.update = function () {
        return new az_ts_update_command_builder("az ts update", 'az_ts_update_command_result');
    };
    return az_ts;
}());
exports.az_ts = az_ts;
/**
 * Create a template spec and or template spec version.
 *
 * Syntax:
 * ```
 * az ts create --name
 *              --resource-group
 *              [--description]
 *              [--display-name]
 *              [--location]
 *              [--subscription]
 *              [--template-file]
 *              [--version]
 *              [--version-description]
 *              [--yes]
 * ```
 *
 * @param {string} name The name of the template spec.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ts_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ts_create_command_builder, _super);
    function az_ts_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the template spec. */
    az_ts_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ts_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The description of the parent template spec. */
    az_ts_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The display name of the template spec. */
    az_ts_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The location to store the template-spec and template-spec version(s). Cannot be changed after creation. */
    az_ts_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ts_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A template file path in the file system. */
    az_ts_create_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec version. */
    az_ts_create_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** The description of the template spec version. */
    az_ts_create_command_builder.prototype.versionDescription = function (value) {
        this.setFlag("--version-description", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_ts_create_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_ts_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a specified template spec or template spec version by name or resource ID..
 *
 * Syntax:
 * ```
 * az ts delete [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--template-spec]
 *              [--version]
 *              [--yes]
 * ```
 */
var az_ts_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ts_delete_command_builder, _super);
    function az_ts_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the template spec. */
    az_ts_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ts_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ts_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The template spec resource id. */
    az_ts_delete_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The template spec version. */
    az_ts_delete_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_ts_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_ts_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Export the specified template spec and artifacts (if any) to the specified output folder.
 *
 * Syntax:
 * ```
 * az ts export --output-folder
 *              [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--template-spec]
 *              [--version]
 * ```
 *
 * @param {string} outputFolder Existing folder to output export(s).
 */
var az_ts_export_command_builder = /** @class */ (function (_super) {
    __extends(az_ts_export_command_builder, _super);
    function az_ts_export_command_builder(commandPath, resultDataTypeName, outputFolder) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.outputFolder(outputFolder);
        return _this;
    }
    /** Existing folder to output export(s). */
    az_ts_export_command_builder.prototype.outputFolder = function (value) {
        this.setFlag("--output-folder", value);
        return this;
    };
    /** The name of the template spec. */
    az_ts_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ts_export_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ts_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The template spec resource id. */
    az_ts_export_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The template spec version. */
    az_ts_export_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_ts_export_command_builder;
}(base_1.CommandBuilder));
/**
 * List template specs or template spec versions.
 *
 * Syntax:
 * ```
 * az ts list [--name]
 *            [--query-examples]
 *            [--resource-group]
 *            [--subscription]
 * ```
 */
var az_ts_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ts_list_command_builder, _super);
    function az_ts_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the template spec. */
    az_ts_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ts_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ts_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ts_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ts_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified template spec or template spec version.
 *
 * Syntax:
 * ```
 * az ts show [--name]
 *            [--query-examples]
 *            [--resource-group]
 *            [--subscription]
 *            [--template-spec]
 *            [--version]
 * ```
 */
var az_ts_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ts_show_command_builder, _super);
    function az_ts_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the template spec. */
    az_ts_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ts_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ts_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ts_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The template spec resource id. */
    az_ts_show_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The template spec version. */
    az_ts_show_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_ts_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a template spec version.
 *
 * Syntax:
 * ```
 * az ts update [--description]
 *              [--display-name]
 *              [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--template-file]
 *              [--template-spec]
 *              [--version]
 *              [--version-description]
 *              [--yes]
 * ```
 */
var az_ts_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ts_update_command_builder, _super);
    function az_ts_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The description of the parent template spec. */
    az_ts_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The display name of the template spec. */
    az_ts_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The name of the template spec. */
    az_ts_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ts_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ts_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A template file path in the file system. */
    az_ts_update_command_builder.prototype.templateFile = function (value) {
        this.setFlag("--template-file", value);
        return this;
    };
    /** The template spec resource id. */
    az_ts_update_command_builder.prototype.templateSpec = function (value) {
        this.setFlag("--template-spec", value);
        return this;
    };
    /** The template spec version. */
    az_ts_update_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** The description of the template spec version. */
    az_ts_update_command_builder.prototype.versionDescription = function (value) {
        this.setFlag("--version-description", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_ts_update_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_ts_update_command_builder;
}(base_1.CommandBuilder));
