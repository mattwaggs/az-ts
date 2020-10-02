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
exports.az_iotcentral = exports.az_iotcentral_app = void 0;
var base_1 = require("../base");
/** Manage IoT Central applications. */
var az_iotcentral_app = /** @class */ (function () {
    function az_iotcentral_app() {
    }
    /**
     * Create an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app create --name
     *                          --resource-group
     *                          --subdomain
     *                          [--display-name]
     *                          [--location]
     *                          [--sku {F1, S1, ST0, ST1, ST2}]
     *                          [--subscription]
     *                          [--template]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subdomain Subdomain for the IoT Central URL. Each application must have a unique subdomain.
     */
    az_iotcentral_app.create = function (name, resourceGroup, subdomain) {
        return new az_iotcentral_app_create_command_builder("az iotcentral app create", 'az_iotcentral_app_create_command_result', name, resourceGroup, subdomain);
    };
    /**
     * Delete an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app delete --name
     *                          --resource-group
     *                          [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iotcentral_app["delete"] = function (name, resourceGroup) {
        return new az_iotcentral_app_delete_command_builder("az iotcentral app delete", 'az_iotcentral_app_delete_command_result', name, resourceGroup);
    };
    /**
     * List IoT Central applications.
     *
     * Syntax:
     * ```
     * az iotcentral app list [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_iotcentral_app.list = function () {
        return new az_iotcentral_app_list_command_builder("az iotcentral app list", 'az_iotcentral_app_list_command_result');
    };
    /**
     * Get the details of an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app show --name
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     */
    az_iotcentral_app.show = function (name) {
        return new az_iotcentral_app_show_command_builder("az iotcentral app show", 'az_iotcentral_app_show_command_result', name);
    };
    /**
     * Update metadata for an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app update --name
     *                          --resource-group
     *                          [--add]
     *                          [--force-string]
     *                          [--remove]
     *                          [--set]
     *                          [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_iotcentral_app.update = function (name, resourceGroup) {
        return new az_iotcentral_app_update_command_builder("az iotcentral app update", 'az_iotcentral_app_update_command_result', name, resourceGroup);
    };
    return az_iotcentral_app;
}());
exports.az_iotcentral_app = az_iotcentral_app;
/** Manage IoT Central assets. */
var az_iotcentral = /** @class */ (function () {
    function az_iotcentral() {
    }
    return az_iotcentral;
}());
exports.az_iotcentral = az_iotcentral;
/**
 * Create an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app create --name
 *                          --resource-group
 *                          --subdomain
 *                          [--display-name]
 *                          [--location]
 *                          [--sku {F1, S1, ST0, ST1, ST2}]
 *                          [--subscription]
 *                          [--template]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subdomain Subdomain for the IoT Central URL. Each application must have a unique subdomain.
 */
var az_iotcentral_app_create_command_builder = /** @class */ (function (_super) {
    __extends(az_iotcentral_app_create_command_builder, _super);
    function az_iotcentral_app_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, subdomain) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.subdomain(subdomain);
        return _this;
    }
    /** IoT Central application name. */
    az_iotcentral_app_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iotcentral_app_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Subdomain for the IoT Central URL. Each application must have a unique subdomain. */
    az_iotcentral_app_create_command_builder.prototype.subdomain = function (value) {
        this.setFlag("--subdomain", value);
        return this;
    };
    /** Custom display name for the IoT Central application. Default is resource name. */
    az_iotcentral_app_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Location of your IoT Central application. Default is the location of target resource group. */
    az_iotcentral_app_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Pricing tier for IoT Central applications. Default value is ST2. */
    az_iotcentral_app_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iotcentral_app_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** IoT Central application template name. Default is a custom application. */
    az_iotcentral_app_create_command_builder.prototype.template = function (value) {
        this.setFlag("--template", value);
        return this;
    };
    return az_iotcentral_app_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app delete --name
 *                          --resource-group
 *                          [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iotcentral_app_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_iotcentral_app_delete_command_builder, _super);
    function az_iotcentral_app_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Central application name. */
    az_iotcentral_app_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iotcentral_app_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iotcentral_app_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iotcentral_app_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List IoT Central applications.
 *
 * Syntax:
 * ```
 * az iotcentral app list [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_iotcentral_app_list_command_builder = /** @class */ (function (_super) {
    __extends(az_iotcentral_app_list_command_builder, _super);
    function az_iotcentral_app_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iotcentral_app_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iotcentral_app_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iotcentral_app_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iotcentral_app_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app show --name
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 */
var az_iotcentral_app_show_command_builder = /** @class */ (function (_super) {
    __extends(az_iotcentral_app_show_command_builder, _super);
    function az_iotcentral_app_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** IoT Central application name. */
    az_iotcentral_app_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_iotcentral_app_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iotcentral_app_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iotcentral_app_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iotcentral_app_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update metadata for an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app update --name
 *                          --resource-group
 *                          [--add]
 *                          [--force-string]
 *                          [--remove]
 *                          [--set]
 *                          [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_iotcentral_app_update_command_builder = /** @class */ (function (_super) {
    __extends(az_iotcentral_app_update_command_builder, _super);
    function az_iotcentral_app_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** IoT Central application name. */
    az_iotcentral_app_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_iotcentral_app_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_iotcentral_app_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_iotcentral_app_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_iotcentral_app_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_iotcentral_app_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_iotcentral_app_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_iotcentral_app_update_command_builder;
}(base_1.CommandBuilder));
