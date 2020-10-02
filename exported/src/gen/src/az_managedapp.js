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
/** Manage Azure Managed Applications. */
var az_managedapp_definition = /** @class */ (function () {
    function az_managedapp_definition() {
    }
    /**
     * Create a managed application definition.
     *
     * Syntax:
     * ```
     * az managedapp definition create --authorizations
     *                                 --description
     *                                 --display-name
     *                                 --lock-level {CanNotDelete, None, ReadOnly}
     *                                 --name
     *                                 --resource-group
     *                                 [--create-ui-definition]
     *                                 [--location]
     *                                 [--main-template]
     *                                 [--package-file-uri]
     *                                 [--subscription]
     *                                 [--tags]
     * ```
     *
     * @param {string} authorizations Space-separated authorization pairs in a format of `<principalId>:<roleDefinitionId>`.
     * @param {string} description The managed application definition description.
     * @param {string} displayName The managed application definition display name.
     * @param {'CanNotDelete' | 'None' | 'ReadOnly'} lockLevel The type of lock restriction.
     * @param {string} name The managed application definition name.
     * @param {string} resourceGroup The resource group of the managed application definition.
     */
    az_managedapp_definition.create = function (authorizations, description, displayName, lockLevel, name, resourceGroup) {
        return new az_managedapp_definition_create_command_builder("az managedapp definition create", 'az_managedapp_definition_create_command_result', authorizations, description, displayName, lockLevel, name, resourceGroup);
    };
    /**
     * Delete a managed application definition.
     *
     * Syntax:
     * ```
     * az managedapp definition delete [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_managedapp_definition["delete"] = function () {
        return new az_managedapp_definition_delete_command_builder("az managedapp definition delete", 'az_managedapp_definition_delete_command_result');
    };
    /**
     * List managed application definitions.
     *
     * Syntax:
     * ```
     * az managedapp definition list --resource-group
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} resourceGroup The resource group of the managed application definition.
     */
    az_managedapp_definition.list = function (resourceGroup) {
        return new az_managedapp_definition_list_command_builder("az managedapp definition list", 'az_managedapp_definition_list_command_result', resourceGroup);
    };
    /**
     * Gets a managed application definition.
     *
     * Syntax:
     * ```
     * az managedapp definition show [--ids]
     *                               [--name]
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_managedapp_definition.show = function () {
        return new az_managedapp_definition_show_command_builder("az managedapp definition show", 'az_managedapp_definition_show_command_result');
    };
    return az_managedapp_definition;
}());
exports.az_managedapp_definition = az_managedapp_definition;
/** Manage template solutions provided and maintained by Independent Software Vendors (ISVs). */
var az_managedapp = /** @class */ (function () {
    function az_managedapp() {
    }
    /**
     * Create a managed application.
     *
     * Syntax:
     * ```
     * az managedapp create --kind
     *                      --managed-rg-id
     *                      --name
     *                      --resource-group
     *                      [--location]
     *                      [--managedapp-definition-id]
     *                      [--parameters]
     *                      [--plan-name]
     *                      [--plan-product]
     *                      [--plan-publisher]
     *                      [--plan-version]
     *                      [--subscription]
     *                      [--tags]
     * ```
     *
     * @param {string} kind The managed application kind. can be marketplace or servicecatalog.
     * @param {string} managedRgId The resource group managed by the managed application.
     * @param {string} name The managed application name.
     * @param {string} resourceGroup The resource group of the managed application.
     */
    az_managedapp.create = function (kind, managedRgId, name, resourceGroup) {
        return new az_managedapp_create_command_builder("az managedapp create", 'az_managedapp_create_command_result', kind, managedRgId, name, resourceGroup);
    };
    /**
     * Delete a managed application.
     *
     * Syntax:
     * ```
     * az managedapp delete [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_managedapp["delete"] = function () {
        return new az_managedapp_delete_command_builder("az managedapp delete", 'az_managedapp_delete_command_result');
    };
    /**
     * List managed applications.
     *
     * Syntax:
     * ```
     * az managedapp list [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_managedapp.list = function () {
        return new az_managedapp_list_command_builder("az managedapp list", 'az_managedapp_list_command_result');
    };
    /**
     * Gets a managed application.
     *
     * Syntax:
     * ```
     * az managedapp show [--ids]
     *                    [--name]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_managedapp.show = function () {
        return new az_managedapp_show_command_builder("az managedapp show", 'az_managedapp_show_command_result');
    };
    return az_managedapp;
}());
exports.az_managedapp = az_managedapp;
/**
 * Create a managed application definition.
 *
 * Syntax:
 * ```
 * az managedapp definition create --authorizations
 *                                 --description
 *                                 --display-name
 *                                 --lock-level {CanNotDelete, None, ReadOnly}
 *                                 --name
 *                                 --resource-group
 *                                 [--create-ui-definition]
 *                                 [--location]
 *                                 [--main-template]
 *                                 [--package-file-uri]
 *                                 [--subscription]
 *                                 [--tags]
 * ```
 *
 * @param {string} authorizations Space-separated authorization pairs in a format of `<principalId>:<roleDefinitionId>`.
 * @param {string} description The managed application definition description.
 * @param {string} displayName The managed application definition display name.
 * @param {'CanNotDelete' | 'None' | 'ReadOnly'} lockLevel The type of lock restriction.
 * @param {string} name The managed application definition name.
 * @param {string} resourceGroup The resource group of the managed application definition.
 */
var az_managedapp_definition_create_command_builder = /** @class */ (function (_super) {
    __extends(az_managedapp_definition_create_command_builder, _super);
    function az_managedapp_definition_create_command_builder(commandPath, resultDataTypeName, authorizations, description, displayName, lockLevel, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.authorizations(authorizations);
        _this.description(description);
        _this.displayName(displayName);
        _this.lockLevel(lockLevel);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Space-separated authorization pairs in a format of `<principalId>:<roleDefinitionId>`. */
    az_managedapp_definition_create_command_builder.prototype.authorizations = function (value) {
        this.setFlag("--authorizations", value);
        return this;
    };
    /** The managed application definition description. */
    az_managedapp_definition_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The managed application definition display name. */
    az_managedapp_definition_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The type of lock restriction. */
    az_managedapp_definition_create_command_builder.prototype.lockLevel = function (value) {
        this.setFlag("--lock-level", value);
        return this;
    };
    /** The managed application definition name. */
    az_managedapp_definition_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group of the managed application definition. */
    az_managedapp_definition_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The managed application definition create ui definition. */
    az_managedapp_definition_create_command_builder.prototype.createUiDefinition = function (value) {
        this.setFlag("--create-ui-definition", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_managedapp_definition_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The managed application definition main template. */
    az_managedapp_definition_create_command_builder.prototype.mainTemplate = function (value) {
        this.setFlag("--main-template", value);
        return this;
    };
    /** The managed application definition package file uri. */
    az_managedapp_definition_create_command_builder.prototype.packageFileUri = function (value) {
        this.setFlag("--package-file-uri", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedapp_definition_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_managedapp_definition_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_managedapp_definition_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a managed application definition.
 *
 * Syntax:
 * ```
 * az managedapp definition delete [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
var az_managedapp_definition_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_managedapp_definition_delete_command_builder, _super);
    function az_managedapp_definition_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_managedapp_definition_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the managed application definition to delete. */
    az_managedapp_definition_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group of the managed application definition. */
    az_managedapp_definition_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedapp_definition_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedapp_definition_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List managed application definitions.
 *
 * Syntax:
 * ```
 * az managedapp definition list --resource-group
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} resourceGroup The resource group of the managed application definition.
 */
var az_managedapp_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_managedapp_definition_list_command_builder, _super);
    function az_managedapp_definition_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The resource group of the managed application definition. */
    az_managedapp_definition_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_managedapp_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedapp_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedapp_definition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a managed application definition.
 *
 * Syntax:
 * ```
 * az managedapp definition show [--ids]
 *                               [--name]
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_managedapp_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_managedapp_definition_show_command_builder, _super);
    function az_managedapp_definition_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_managedapp_definition_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The managed application definition name. */
    az_managedapp_definition_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_managedapp_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group of the managed application definition. */
    az_managedapp_definition_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedapp_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedapp_definition_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a managed application.
 *
 * Syntax:
 * ```
 * az managedapp create --kind
 *                      --managed-rg-id
 *                      --name
 *                      --resource-group
 *                      [--location]
 *                      [--managedapp-definition-id]
 *                      [--parameters]
 *                      [--plan-name]
 *                      [--plan-product]
 *                      [--plan-publisher]
 *                      [--plan-version]
 *                      [--subscription]
 *                      [--tags]
 * ```
 *
 * @param {string} kind The managed application kind. can be marketplace or servicecatalog.
 * @param {string} managedRgId The resource group managed by the managed application.
 * @param {string} name The managed application name.
 * @param {string} resourceGroup The resource group of the managed application.
 */
var az_managedapp_create_command_builder = /** @class */ (function (_super) {
    __extends(az_managedapp_create_command_builder, _super);
    function az_managedapp_create_command_builder(commandPath, resultDataTypeName, kind, managedRgId, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kind(kind);
        _this.managedRgId(managedRgId);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The managed application kind. can be marketplace or servicecatalog. */
    az_managedapp_create_command_builder.prototype.kind = function (value) {
        this.setFlag("--kind", value);
        return this;
    };
    /** The resource group managed by the managed application. */
    az_managedapp_create_command_builder.prototype.managedRgId = function (value) {
        this.setFlag("--managed-rg-id", value);
        return this;
    };
    /** The managed application name. */
    az_managedapp_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group of the managed application. */
    az_managedapp_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The managed application location. */
    az_managedapp_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The full qualified managed application definition id. */
    az_managedapp_create_command_builder.prototype.managedappDefinitionId = function (value) {
        this.setFlag("--managedapp-definition-id", value);
        return this;
    };
    /** JSON formatted string or a path to a file with such content. */
    az_managedapp_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The managed application package plan name. */
    az_managedapp_create_command_builder.prototype.planName = function (value) {
        this.setFlag("--plan-name", value);
        return this;
    };
    /** The managed application package plan product. */
    az_managedapp_create_command_builder.prototype.planProduct = function (value) {
        this.setFlag("--plan-product", value);
        return this;
    };
    /** The managed application package plan publisher. */
    az_managedapp_create_command_builder.prototype.planPublisher = function (value) {
        this.setFlag("--plan-publisher", value);
        return this;
    };
    /** The managed application package plan version. */
    az_managedapp_create_command_builder.prototype.planVersion = function (value) {
        this.setFlag("--plan-version", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedapp_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_managedapp_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_managedapp_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a managed application.
 *
 * Syntax:
 * ```
 * az managedapp delete [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_managedapp_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_managedapp_delete_command_builder, _super);
    function az_managedapp_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_managedapp_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the managed application. */
    az_managedapp_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group of the managed application. */
    az_managedapp_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedapp_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedapp_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List managed applications.
 *
 * Syntax:
 * ```
 * az managedapp list [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_managedapp_list_command_builder = /** @class */ (function (_super) {
    __extends(az_managedapp_list_command_builder, _super);
    function az_managedapp_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_managedapp_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group of the managed application. */
    az_managedapp_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedapp_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedapp_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a managed application.
 *
 * Syntax:
 * ```
 * az managedapp show [--ids]
 *                    [--name]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_managedapp_show_command_builder = /** @class */ (function (_super) {
    __extends(az_managedapp_show_command_builder, _super);
    function az_managedapp_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_managedapp_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The managed application name. */
    az_managedapp_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_managedapp_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group of the managed application. */
    az_managedapp_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedapp_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedapp_show_command_builder;
}(base_1.CommandBuilder));
