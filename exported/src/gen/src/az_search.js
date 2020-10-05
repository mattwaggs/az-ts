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
exports.az_search = exports.az_search_service = exports.az_search_query_key = exports.az_search_admin_key = void 0;
var base_1 = require("../base");
/** Manage Azure Search admin keys. */
var az_search_admin_key = /** @class */ (function () {
    function az_search_admin_key() {
    }
    /**
     * Regenerates either the primary or secondary admin API key.
     *
     * Syntax:
     * ```
     * az search admin-key renew --key-kind
     *                           --resource-group
     *                           --service-name
     *                           [--subscription]
     * ```
     *
     * @param {string} keyKind The type (primary or secondary) of the admin key.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    az_search_admin_key.renew = function (keyKind, resourceGroup, serviceName) {
        return new az_search_admin_key_renew_command_builder("az search admin-key renew", 'az_search_admin_key_renew_command_result', keyKind, resourceGroup, serviceName);
    };
    /**
     * Gets the primary and secondary admin API keys for the specified Azure Search service.
     *
     * Syntax:
     * ```
     * az search admin-key show --resource-group
     *                          --service-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    az_search_admin_key.show = function (resourceGroup, serviceName) {
        return new az_search_admin_key_show_command_builder("az search admin-key show", 'az_search_admin_key_show_command_result', resourceGroup, serviceName);
    };
    return az_search_admin_key;
}());
exports.az_search_admin_key = az_search_admin_key;
/** Manage Azure Search query keys. */
var az_search_query_key = /** @class */ (function () {
    function az_search_query_key() {
    }
    /**
     * Generates a new query key for the specified Search service.
     *
     * Syntax:
     * ```
     * az search query-key create --name
     *                            --resource-group
     *                            --service-name
     *                            [--subscription]
     * ```
     *
     * @param {string} name The name of the query key.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    az_search_query_key.create = function (name, resourceGroup, serviceName) {
        return new az_search_query_key_create_command_builder("az search query-key create", 'az_search_query_key_create_command_result', name, resourceGroup, serviceName);
    };
    /**
     * Deletes the specified query key.
     *
     * Syntax:
     * ```
     * az search query-key delete --key-value
     *                            --resource-group
     *                            --service-name
     *                            [--subscription]
     * ```
     *
     * @param {string} keyValue The value of the query key.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    az_search_query_key["delete"] = function (keyValue, resourceGroup, serviceName) {
        return new az_search_query_key_delete_command_builder("az search query-key delete", 'az_search_query_key_delete_command_result', keyValue, resourceGroup, serviceName);
    };
    /**
     * Returns the list of query API keys for the given Azure Search service.
     *
     * Syntax:
     * ```
     * az search query-key list --resource-group
     *                          --service-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    az_search_query_key.list = function (resourceGroup, serviceName) {
        return new az_search_query_key_list_command_builder("az search query-key list", 'az_search_query_key_list_command_result', resourceGroup, serviceName);
    };
    return az_search_query_key;
}());
exports.az_search_query_key = az_search_query_key;
/** Manage Azure Search services. */
var az_search_service = /** @class */ (function () {
    function az_search_service() {
    }
    /**
     * Creates a Search service in the given resource group.
     *
     * Syntax:
     * ```
     * az search service create --name
     *                          --resource-group
     *                          --sku
     *                          [--location]
     *                          [--partition-count]
     *                          [--replica-count]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The name of the search service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sku The SKU of the search service, which determines price tier and capacity limits.
     */
    az_search_service.create = function (name, resourceGroup, sku) {
        return new az_search_service_create_command_builder("az search service create", 'az_search_service_create_command_result', name, resourceGroup, sku);
    };
    /**
     * Deletes a Search service in the given resource group, along with its associated resources.
     *
     * Syntax:
     * ```
     * az search service delete --name
     *                          --resource-group
     *                          [--subscription]
     *                          [--yes]
     * ```
     *
     * @param {string} name The name of the search service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_search_service["delete"] = function (name, resourceGroup) {
        return new az_search_service_delete_command_builder("az search service delete", 'az_search_service_delete_command_result', name, resourceGroup);
    };
    /**
     * Gets a list of all Search services in the given resource group.
     *
     * Syntax:
     * ```
     * az search service list --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_search_service.list = function (resourceGroup) {
        return new az_search_service_list_command_builder("az search service list", 'az_search_service_list_command_result', resourceGroup);
    };
    /**
     * Gets the Search service with the given name in the given resource group.
     *
     * Syntax:
     * ```
     * az search service show --name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} name The name of the search service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_search_service.show = function (name, resourceGroup) {
        return new az_search_service_show_command_builder("az search service show", 'az_search_service_show_command_result', name, resourceGroup);
    };
    /**
     * Update partition and replica of the given search service.
     *
     * Syntax:
     * ```
     * az search service update --name
     *                          --resource-group
     *                          [--add]
     *                          [--force-string]
     *                          [--partition-count]
     *                          [--remove]
     *                          [--replica-count]
     *                          [--set]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The name of the search service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_search_service.update = function (name, resourceGroup) {
        return new az_search_service_update_command_builder("az search service update", 'az_search_service_update_command_result', name, resourceGroup);
    };
    return az_search_service;
}());
exports.az_search_service = az_search_service;
/** Manage Azure Search services, admin keys and query keys. */
var az_search = /** @class */ (function () {
    function az_search() {
    }
    return az_search;
}());
exports.az_search = az_search;
/**
 * Regenerates either the primary or secondary admin API key.
 *
 * Syntax:
 * ```
 * az search admin-key renew --key-kind
 *                           --resource-group
 *                           --service-name
 *                           [--subscription]
 * ```
 *
 * @param {string} keyKind The type (primary or secondary) of the admin key.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
var az_search_admin_key_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_search_admin_key_renew_command_builder, _super);
    function az_search_admin_key_renew_command_builder(commandPath, resultDataTypeName, keyKind, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyKind(keyKind);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The type (primary or secondary) of the admin key. */
    az_search_admin_key_renew_command_builder.prototype.keyKind = function (value) {
        this.setFlag("--key-kind", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_admin_key_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the search service. */
    az_search_admin_key_renew_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_admin_key_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_search_admin_key_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the primary and secondary admin API keys for the specified Azure Search service.
 *
 * Syntax:
 * ```
 * az search admin-key show --resource-group
 *                          --service-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
var az_search_admin_key_show_command_builder = /** @class */ (function (_super) {
    __extends(az_search_admin_key_show_command_builder, _super);
    function az_search_admin_key_show_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_admin_key_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the search service. */
    az_search_admin_key_show_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_search_admin_key_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_admin_key_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_search_admin_key_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Generates a new query key for the specified Search service.
 *
 * Syntax:
 * ```
 * az search query-key create --name
 *                            --resource-group
 *                            --service-name
 *                            [--subscription]
 * ```
 *
 * @param {string} name The name of the query key.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
var az_search_query_key_create_command_builder = /** @class */ (function (_super) {
    __extends(az_search_query_key_create_command_builder, _super);
    function az_search_query_key_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The name of the query key. */
    az_search_query_key_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_query_key_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the search service. */
    az_search_query_key_create_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_query_key_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_search_query_key_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the specified query key.
 *
 * Syntax:
 * ```
 * az search query-key delete --key-value
 *                            --resource-group
 *                            --service-name
 *                            [--subscription]
 * ```
 *
 * @param {string} keyValue The value of the query key.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
var az_search_query_key_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_search_query_key_delete_command_builder, _super);
    function az_search_query_key_delete_command_builder(commandPath, resultDataTypeName, keyValue, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyValue(keyValue);
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** The value of the query key. */
    az_search_query_key_delete_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_query_key_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the search service. */
    az_search_query_key_delete_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_query_key_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_search_query_key_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Returns the list of query API keys for the given Azure Search service.
 *
 * Syntax:
 * ```
 * az search query-key list --resource-group
 *                          --service-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
var az_search_query_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_search_query_key_list_command_builder, _super);
    function az_search_query_key_list_command_builder(commandPath, resultDataTypeName, resourceGroup, serviceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.serviceName(serviceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_query_key_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the search service. */
    az_search_query_key_list_command_builder.prototype.serviceName = function (value) {
        this.setFlag("--service-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_search_query_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_query_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_search_query_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a Search service in the given resource group.
 *
 * Syntax:
 * ```
 * az search service create --name
 *                          --resource-group
 *                          --sku
 *                          [--location]
 *                          [--partition-count]
 *                          [--replica-count]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The name of the search service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sku The SKU of the search service, which determines price tier and capacity limits.
 */
var az_search_service_create_command_builder = /** @class */ (function (_super) {
    __extends(az_search_service_create_command_builder, _super);
    function az_search_service_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, sku) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sku(sku);
        return _this;
    }
    /** The name of the search service. */
    az_search_service_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_service_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The SKU of the search service, which determines price tier and capacity limits. */
    az_search_service_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_search_service_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Number of partitions in the search service. */
    az_search_service_create_command_builder.prototype.partitionCount = function (value) {
        this.setFlag("--partition-count", value);
        return this;
    };
    /** Number of replicas in the search service. */
    az_search_service_create_command_builder.prototype.replicaCount = function (value) {
        this.setFlag("--replica-count", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_service_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_search_service_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a Search service in the given resource group, along with its associated resources.
 *
 * Syntax:
 * ```
 * az search service delete --name
 *                          --resource-group
 *                          [--subscription]
 *                          [--yes]
 * ```
 *
 * @param {string} name The name of the search service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_search_service_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_search_service_delete_command_builder, _super);
    function az_search_service_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the search service. */
    az_search_service_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_service_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_service_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_search_service_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_search_service_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a list of all Search services in the given resource group.
 *
 * Syntax:
 * ```
 * az search service list --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_search_service_list_command_builder = /** @class */ (function (_super) {
    __extends(az_search_service_list_command_builder, _super);
    function az_search_service_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_service_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_search_service_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_service_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_search_service_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the Search service with the given name in the given resource group.
 *
 * Syntax:
 * ```
 * az search service show --name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} name The name of the search service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_search_service_show_command_builder = /** @class */ (function (_super) {
    __extends(az_search_service_show_command_builder, _super);
    function az_search_service_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the search service. */
    az_search_service_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_service_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_search_service_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_service_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_search_service_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update partition and replica of the given search service.
 *
 * Syntax:
 * ```
 * az search service update --name
 *                          --resource-group
 *                          [--add]
 *                          [--force-string]
 *                          [--partition-count]
 *                          [--remove]
 *                          [--replica-count]
 *                          [--set]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The name of the search service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_search_service_update_command_builder = /** @class */ (function (_super) {
    __extends(az_search_service_update_command_builder, _super);
    function az_search_service_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the search service. */
    az_search_service_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_search_service_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_search_service_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_search_service_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Number of partitions in the search service. */
    az_search_service_update_command_builder.prototype.partitionCount = function (value) {
        this.setFlag("--partition-count", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_search_service_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Number of replicas in the search service. */
    az_search_service_update_command_builder.prototype.replicaCount = function (value) {
        this.setFlag("--replica-count", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_search_service_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_search_service_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_search_service_update_command_builder;
}(base_1.CommandBuilder));
