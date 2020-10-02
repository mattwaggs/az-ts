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
/** Manage Azure subscription level locks. */
var az_account_lock = /** @class */ (function () {
    function az_account_lock() {
    }
    /**
     * Create a subscription lock.
     *
     * Syntax:
     * ```
     * az account lock create --lock-type {CanNotDelete, ReadOnly}
     *                        --name
     *                        [--notes]
     * ```
     *
     * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
     * @param {string} name Name of the lock.
     */
    az_account_lock.create = function (lockType, name) {
        return new az_account_lock_create_command_builder("az account lock create", 'az_account_lock_create_command_result', lockType, name);
    };
    /**
     * Delete a subscription lock.
     *
     * Syntax:
     * ```
     * az account lock delete [--ids]
     *                        [--name]
     * ```
     */
    az_account_lock["delete"] = function () {
        return new az_account_lock_delete_command_builder("az account lock delete", 'az_account_lock_delete_command_result');
    };
    /**
     * List lock information in the subscription.
     *
     * Syntax:
     * ```
     * az account lock list [--filter-string]
     *                      [--query-examples]
     * ```
     */
    az_account_lock.list = function () {
        return new az_account_lock_list_command_builder("az account lock list", 'az_account_lock_list_command_result');
    };
    /**
     * Show the details of a subscription lock.
     *
     * Syntax:
     * ```
     * az account lock show [--ids]
     *                      [--name]
     *                      [--query-examples]
     * ```
     */
    az_account_lock.show = function () {
        return new az_account_lock_show_command_builder("az account lock show", 'az_account_lock_show_command_result');
    };
    /**
     * Update a subscription lock.
     *
     * Syntax:
     * ```
     * az account lock update [--ids]
     *                        [--lock-type {CanNotDelete, ReadOnly}]
     *                        [--name]
     *                        [--notes]
     * ```
     */
    az_account_lock.update = function () {
        return new az_account_lock_update_command_builder("az account lock update", 'az_account_lock_update_command_result');
    };
    return az_account_lock;
}());
exports.az_account_lock = az_account_lock;
/** Subscription operations for Management Groups. */
var az_account_management_group_subscription = /** @class */ (function () {
    function az_account_management_group_subscription() {
    }
    /**
     * Add a subscription to a management group.
     *
     * Syntax:
     * ```
     * az account management-group subscription add --name
     *                                              --subscription
     * ```
     *
     * @param {string} name Name of the management group.
     * @param {string} subscription Subscription Id or Name.
     */
    az_account_management_group_subscription.add = function (name, subscription) {
        return new az_account_management_group_subscription_add_command_builder("az account management-group subscription add", 'az_account_management_group_subscription_add_command_result', name, subscription);
    };
    /**
     * Remove an existing subscription from a management group.
     *
     * Syntax:
     * ```
     * az account management-group subscription remove --name
     *                                                 --subscription
     * ```
     *
     * @param {string} name Name of the management group.
     * @param {string} subscription Subscription Id or Name.
     */
    az_account_management_group_subscription.remove = function (name, subscription) {
        return new az_account_management_group_subscription_remove_command_builder("az account management-group subscription remove", 'az_account_management_group_subscription_remove_command_result', name, subscription);
    };
    return az_account_management_group_subscription;
}());
exports.az_account_management_group_subscription = az_account_management_group_subscription;
/** Manage Azure Management Groups. */
var az_account_management_group = /** @class */ (function () {
    function az_account_management_group() {
    }
    /**
     * Create a new management group.
     *
     * Syntax:
     * ```
     * az account management-group create --name
     *                                    [--display-name]
     *                                    [--parent]
     * ```
     *
     * @param {string} name Name of the management group.
     */
    az_account_management_group.create = function (name) {
        return new az_account_management_group_create_command_builder("az account management-group create", 'az_account_management_group_create_command_result', name);
    };
    /**
     * Delete an existing management group.
     *
     * Syntax:
     * ```
     * az account management-group delete --name
     * ```
     *
     * @param {string} name Name of the management group.
     */
    az_account_management_group["delete"] = function (name) {
        return new az_account_management_group_delete_command_builder("az account management-group delete", 'az_account_management_group_delete_command_result', name);
    };
    /**
     * List all management groups.
     *
     * Syntax:
     * ```
     * az account management-group list [--query-examples]
     * ```
     */
    az_account_management_group.list = function () {
        return new az_account_management_group_list_command_builder("az account management-group list", 'az_account_management_group_list_command_result');
    };
    /**
     * Get a specific management group.
     *
     * Syntax:
     * ```
     * az account management-group show --name
     *                                  [--expand]
     *                                  [--query-examples]
     *                                  [--recurse]
     * ```
     *
     * @param {string} name Name of the management group.
     */
    az_account_management_group.show = function (name) {
        return new az_account_management_group_show_command_builder("az account management-group show", 'az_account_management_group_show_command_result', name);
    };
    /**
     * Update an existing management group.
     *
     * Syntax:
     * ```
     * az account management-group update --name
     *                                    [--add]
     *                                    [--display-name]
     *                                    [--force-string]
     *                                    [--parent]
     *                                    [--remove]
     *                                    [--set]
     * ```
     *
     * @param {string} name Name of the management group.
     */
    az_account_management_group.update = function (name) {
        return new az_account_management_group_update_command_builder("az account management-group update", 'az_account_management_group_update_command_result', name);
    };
    return az_account_management_group;
}());
exports.az_account_management_group = az_account_management_group;
/** Manage Azure subscription information. */
var az_account = /** @class */ (function () {
    function az_account() {
    }
    /**
     * Clear all subscriptions from the CLI's local cache.
     *
     * Syntax:
     * ```
     * az account clear
     * ```
     */
    az_account.clear = function () {
        return new az_account_clear_command_builder("az account clear", 'az_account_clear_command_result');
    };
    /**
     * Get a token for utilities to access Azure.
     *
     * Syntax:
     * ```
     * az account get-access-token [--resource]
     *                             [--resource-type {aad-graph, arm, batch, data-lake, media, ms-graph, oss-rdbms}]
     *                             [--subscription]
     *                             [--tenant]
     * ```
     */
    az_account.get_access_token = function () {
        return new az_account_get_access_token_command_builder("az account get-access-token", 'az_account_get_access_token_command_result');
    };
    /**
     * Get a list of subscriptions for the logged in account.
     *
     * Syntax:
     * ```
     * az account list [--all]
     *                 [--query-examples]
     *                 [--refresh]
     * ```
     */
    az_account.list = function () {
        return new az_account_list_command_builder("az account list", 'az_account_list_command_result');
    };
    /**
     * List supported regions for the current subscription.
     *
     * Syntax:
     * ```
     * az account list-locations
     * ```
     */
    az_account.list_locations = function () {
        return new az_account_list_locations_command_builder("az account list-locations", 'az_account_list_locations_command_result');
    };
    /**
     * Set a subscription to be the current active subscription.
     *
     * Syntax:
     * ```
     * az account set --subscription
     * ```
     *
     * @param {string} subscription Name or ID of subscription.
     */
    az_account.set = function (subscription) {
        return new az_account_set_command_builder("az account set", 'az_account_set_command_result', subscription);
    };
    /**
     * Get the details of a subscription.
     *
     * Syntax:
     * ```
     * az account show [--query-examples]
     *                 [--sdk-auth]
     *                 [--subscription]
     * ```
     */
    az_account.show = function () {
        return new az_account_show_command_builder("az account show", 'az_account_show_command_result');
    };
    return az_account;
}());
exports.az_account = az_account;
/**
 * Create a subscription lock.
 *
 * Syntax:
 * ```
 * az account lock create --lock-type {CanNotDelete, ReadOnly}
 *                        --name
 *                        [--notes]
 * ```
 *
 * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
 * @param {string} name Name of the lock.
 */
var az_account_lock_create_command_builder = /** @class */ (function (_super) {
    __extends(az_account_lock_create_command_builder, _super);
    function az_account_lock_create_command_builder(commandPath, resultDataTypeName, lockType, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.lockType(lockType);
        _this.name(name);
        return _this;
    }
    /** The type of lock restriction. */
    az_account_lock_create_command_builder.prototype.lockType = function (value) {
        this.setFlag("--lock-type", value);
        return this;
    };
    /** Name of the lock. */
    az_account_lock_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Notes about this lock. */
    az_account_lock_create_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    return az_account_lock_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a subscription lock.
 *
 * Syntax:
 * ```
 * az account lock delete [--ids]
 *                        [--name]
 * ```
 */
var az_account_lock_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_account_lock_delete_command_builder, _super);
    function az_account_lock_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_account_lock_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the lock. */
    az_account_lock_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    return az_account_lock_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List lock information in the subscription.
 *
 * Syntax:
 * ```
 * az account lock list [--filter-string]
 *                      [--query-examples]
 * ```
 */
var az_account_lock_list_command_builder = /** @class */ (function (_super) {
    __extends(az_account_lock_list_command_builder, _super);
    function az_account_lock_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** A query filter to use to restrict the results. */
    az_account_lock_list_command_builder.prototype.filterString = function (value) {
        this.setFlag("--filter-string", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_account_lock_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_account_lock_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a subscription lock.
 *
 * Syntax:
 * ```
 * az account lock show [--ids]
 *                      [--name]
 *                      [--query-examples]
 * ```
 */
var az_account_lock_show_command_builder = /** @class */ (function (_super) {
    __extends(az_account_lock_show_command_builder, _super);
    function az_account_lock_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_account_lock_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the lock. */
    az_account_lock_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_account_lock_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_account_lock_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a subscription lock.
 *
 * Syntax:
 * ```
 * az account lock update [--ids]
 *                        [--lock-type {CanNotDelete, ReadOnly}]
 *                        [--name]
 *                        [--notes]
 * ```
 */
var az_account_lock_update_command_builder = /** @class */ (function (_super) {
    __extends(az_account_lock_update_command_builder, _super);
    function az_account_lock_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_account_lock_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The type of lock restriction. */
    az_account_lock_update_command_builder.prototype.lockType = function (value) {
        this.setFlag("--lock-type", value);
        return this;
    };
    /** Name of the lock. */
    az_account_lock_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Notes about this lock. */
    az_account_lock_update_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    return az_account_lock_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a subscription to a management group.
 *
 * Syntax:
 * ```
 * az account management-group subscription add --name
 *                                              --subscription
 * ```
 *
 * @param {string} name Name of the management group.
 * @param {string} subscription Subscription Id or Name.
 */
var az_account_management_group_subscription_add_command_builder = /** @class */ (function (_super) {
    __extends(az_account_management_group_subscription_add_command_builder, _super);
    function az_account_management_group_subscription_add_command_builder(commandPath, resultDataTypeName, name, subscription) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.subscription(subscription);
        return _this;
    }
    /** Name of the management group. */
    az_account_management_group_subscription_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Subscription Id or Name. */
    az_account_management_group_subscription_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_account_management_group_subscription_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an existing subscription from a management group.
 *
 * Syntax:
 * ```
 * az account management-group subscription remove --name
 *                                                 --subscription
 * ```
 *
 * @param {string} name Name of the management group.
 * @param {string} subscription Subscription Id or Name.
 */
var az_account_management_group_subscription_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_account_management_group_subscription_remove_command_builder, _super);
    function az_account_management_group_subscription_remove_command_builder(commandPath, resultDataTypeName, name, subscription) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.subscription(subscription);
        return _this;
    }
    /** Name of the management group. */
    az_account_management_group_subscription_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Subscription Id or Name. */
    az_account_management_group_subscription_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_account_management_group_subscription_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new management group.
 *
 * Syntax:
 * ```
 * az account management-group create --name
 *                                    [--display-name]
 *                                    [--parent]
 * ```
 *
 * @param {string} name Name of the management group.
 */
var az_account_management_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_account_management_group_create_command_builder, _super);
    function az_account_management_group_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the management group. */
    az_account_management_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Sets the display name of the management group. If null, the group name is set as the display name. */
    az_account_management_group_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Sets the parent of the management group. Can be the fully qualified id or the name of the management group. If null, the root tenant group is set as the parent. */
    az_account_management_group_create_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    return az_account_management_group_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an existing management group.
 *
 * Syntax:
 * ```
 * az account management-group delete --name
 * ```
 *
 * @param {string} name Name of the management group.
 */
var az_account_management_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_account_management_group_delete_command_builder, _super);
    function az_account_management_group_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the management group. */
    az_account_management_group_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    return az_account_management_group_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all management groups.
 *
 * Syntax:
 * ```
 * az account management-group list [--query-examples]
 * ```
 */
var az_account_management_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_account_management_group_list_command_builder, _super);
    function az_account_management_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_account_management_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_account_management_group_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a specific management group.
 *
 * Syntax:
 * ```
 * az account management-group show --name
 *                                  [--expand]
 *                                  [--query-examples]
 *                                  [--recurse]
 * ```
 *
 * @param {string} name Name of the management group.
 */
var az_account_management_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_account_management_group_show_command_builder, _super);
    function az_account_management_group_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the management group. */
    az_account_management_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** If given, lists the children in the first level of hierarchy. */
    az_account_management_group_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_account_management_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If given, lists the children in all levels of hierarchy. */
    az_account_management_group_show_command_builder.prototype.recurse = function (value) {
        this.setFlag("--recurse", value);
        return this;
    };
    return az_account_management_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an existing management group.
 *
 * Syntax:
 * ```
 * az account management-group update --name
 *                                    [--add]
 *                                    [--display-name]
 *                                    [--force-string]
 *                                    [--parent]
 *                                    [--remove]
 *                                    [--set]
 * ```
 *
 * @param {string} name Name of the management group.
 */
var az_account_management_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_account_management_group_update_command_builder, _super);
    function az_account_management_group_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the management group. */
    az_account_management_group_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_account_management_group_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Updates the display name of the management group. If null, no change is made. */
    az_account_management_group_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_account_management_group_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Update the parent of the management group. Can be the fully qualified id or the name of the management group. If null, no change is made. */
    az_account_management_group_update_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_account_management_group_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_account_management_group_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    return az_account_management_group_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Clear all subscriptions from the CLI's local cache.
 *
 * Syntax:
 * ```
 * az account clear
 * ```
 */
var az_account_clear_command_builder = /** @class */ (function (_super) {
    __extends(az_account_clear_command_builder, _super);
    function az_account_clear_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    return az_account_clear_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a token for utilities to access Azure.
 *
 * Syntax:
 * ```
 * az account get-access-token [--resource]
 *                             [--resource-type {aad-graph, arm, batch, data-lake, media, ms-graph, oss-rdbms}]
 *                             [--subscription]
 *                             [--tenant]
 * ```
 */
var az_account_get_access_token_command_builder = /** @class */ (function (_super) {
    __extends(az_account_get_access_token_command_builder, _super);
    function az_account_get_access_token_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Azure resource endpoints. Default to Azure Resource Manager. */
    az_account_get_access_token_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Type of well-known resource. */
    az_account_get_access_token_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. */
    az_account_get_access_token_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Tenant ID for which the token is acquired. Only available for user and service principal account, not for MSI or Cloud Shell account. */
    az_account_get_access_token_command_builder.prototype.tenant = function (value) {
        this.setFlag("--tenant", value);
        return this;
    };
    return az_account_get_access_token_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a list of subscriptions for the logged in account.
 *
 * Syntax:
 * ```
 * az account list [--all]
 *                 [--query-examples]
 *                 [--refresh]
 * ```
 */
var az_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_account_list_command_builder, _super);
    function az_account_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** List all subscriptions, rather than just 'Enabled' ones. */
    az_account_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Retrieve up-to-date subscriptions from server. */
    az_account_list_command_builder.prototype.refresh = function (value) {
        this.setFlag("--refresh", value);
        return this;
    };
    return az_account_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List supported regions for the current subscription.
 *
 * Syntax:
 * ```
 * az account list-locations
 * ```
 */
var az_account_list_locations_command_builder = /** @class */ (function (_super) {
    __extends(az_account_list_locations_command_builder, _super);
    function az_account_list_locations_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    return az_account_list_locations_command_builder;
}(base_1.CommandBuilder));
/**
 * Set a subscription to be the current active subscription.
 *
 * Syntax:
 * ```
 * az account set --subscription
 * ```
 *
 * @param {string} subscription Name or ID of subscription.
 */
var az_account_set_command_builder = /** @class */ (function (_super) {
    __extends(az_account_set_command_builder, _super);
    function az_account_set_command_builder(commandPath, resultDataTypeName, subscription) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.subscription(subscription);
        return _this;
    }
    /** Name or ID of subscription. */
    az_account_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_account_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a subscription.
 *
 * Syntax:
 * ```
 * az account show [--query-examples]
 *                 [--sdk-auth]
 *                 [--subscription]
 * ```
 */
var az_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_account_show_command_builder, _super);
    function az_account_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Output result to a file compatible with Azure SDK auth. Only applicable when authenticating with a Service Principal. */
    az_account_show_command_builder.prototype.sdkAuth = function (value) {
        this.setFlag("--sdk-auth", value);
        return this;
    };
    /** Name or ID of subscription. */
    az_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_account_show_command_builder;
}(base_1.CommandBuilder));
