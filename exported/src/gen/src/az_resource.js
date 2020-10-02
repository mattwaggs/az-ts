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
exports.az_resource = exports.az_resource_lock = exports.az_resource_link = void 0;
var base_1 = require("../base");
/** Manage links between resources. */
var az_resource_link = /** @class */ (function () {
    function az_resource_link() {
    }
    /**
     * Create a new link between resources.
     *
     * Syntax:
     * ```
     * az resource link create --link
     *                         --target
     *                         [--notes]
     *                         [--subscription]
     * ```
     *
     * @param {string} link Fully-qualified resource ID of the resource link.
     * @param {string} target Fully-qualified resource ID of the resource link target.
     */
    az_resource_link.create = function (link, target) {
        return new az_resource_link_create_command_builder("az resource link create", 'az_resource_link_create_command_result', link, target);
    };
    /**
     * Delete a link between resources.
     *
     * Syntax:
     * ```
     * az resource link delete --link
     *                         [--subscription]
     * ```
     *
     * @param {string} link Fully-qualified resource ID of the resource link.
     */
    az_resource_link["delete"] = function (link) {
        return new az_resource_link_delete_command_builder("az resource link delete", 'az_resource_link_delete_command_result', link);
    };
    /**
     * List resource links.
     *
     * Syntax:
     * ```
     * az resource link list [--filter]
     *                       [--query-examples]
     *                       [--scope]
     *                       [--subscription]
     * ```
     */
    az_resource_link.list = function () {
        return new az_resource_link_list_command_builder("az resource link list", 'az_resource_link_list_command_result');
    };
    /**
     * Gets a resource link with the specified ID.
     *
     * Syntax:
     * ```
     * az resource link show --link
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} link Fully-qualified resource ID of the resource link.
     */
    az_resource_link.show = function (link) {
        return new az_resource_link_show_command_builder("az resource link show", 'az_resource_link_show_command_result', link);
    };
    /**
     * Update link between resources.
     *
     * Syntax:
     * ```
     * az resource link update --link
     *                         [--notes]
     *                         [--subscription]
     *                         [--target]
     * ```
     *
     * @param {string} link Fully-qualified resource ID of the resource link.
     */
    az_resource_link.update = function (link) {
        return new az_resource_link_update_command_builder("az resource link update", 'az_resource_link_update_command_result', link);
    };
    return az_resource_link;
}());
exports.az_resource_link = az_resource_link;
/** Manage Azure resource level locks. */
var az_resource_lock = /** @class */ (function () {
    function az_resource_lock() {
    }
    /**
     * Create a resource-level lock.
     *
     * Syntax:
     * ```
     * az resource lock create --lock-type {CanNotDelete, ReadOnly}
     *                         --name
     *                         [--namespace]
     *                         [--notes]
     *                         [--parent]
     *                         [--resource]
     *                         [--resource-group]
     *                         [--resource-type]
     *                         [--subscription]
     * ```
     *
     * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
     * @param {string} name Name of the lock.
     */
    az_resource_lock.create = function (lockType, name) {
        return new az_resource_lock_create_command_builder("az resource lock create", 'az_resource_lock_create_command_result', lockType, name);
    };
    /**
     * Delete a resource-level lock.
     *
     * Syntax:
     * ```
     * az resource lock delete [--ids]
     *                         [--name]
     *                         [--namespace]
     *                         [--parent]
     *                         [--resource]
     *                         [--resource-group]
     *                         [--resource-type]
     *                         [--subscription]
     * ```
     */
    az_resource_lock["delete"] = function () {
        return new az_resource_lock_delete_command_builder("az resource lock delete", 'az_resource_lock_delete_command_result');
    };
    /**
     * List lock information in the resource-level.
     *
     * Syntax:
     * ```
     * az resource lock list [--filter-string]
     *                       [--namespace]
     *                       [--parent]
     *                       [--query-examples]
     *                       [--resource]
     *                       [--resource-group]
     *                       [--resource-type]
     *                       [--subscription]
     * ```
     */
    az_resource_lock.list = function () {
        return new az_resource_lock_list_command_builder("az resource lock list", 'az_resource_lock_list_command_result');
    };
    /**
     * Show the details of a resource-level lock.
     *
     * Syntax:
     * ```
     * az resource lock show [--ids]
     *                       [--name]
     *                       [--namespace]
     *                       [--parent]
     *                       [--query-examples]
     *                       [--resource]
     *                       [--resource-group]
     *                       [--resource-type]
     *                       [--subscription]
     * ```
     */
    az_resource_lock.show = function () {
        return new az_resource_lock_show_command_builder("az resource lock show", 'az_resource_lock_show_command_result');
    };
    /**
     * Update a resource-level lock.
     *
     * Syntax:
     * ```
     * az resource lock update [--ids]
     *                         [--lock-type {CanNotDelete, ReadOnly}]
     *                         [--name]
     *                         [--namespace]
     *                         [--notes]
     *                         [--parent]
     *                         [--resource]
     *                         [--resource-group]
     *                         [--resource-type]
     *                         [--subscription]
     * ```
     */
    az_resource_lock.update = function () {
        return new az_resource_lock_update_command_builder("az resource lock update", 'az_resource_lock_update_command_result');
    };
    return az_resource_lock;
}());
exports.az_resource_lock = az_resource_lock;
/** Manage Azure resources. */
var az_resource = /** @class */ (function () {
    function az_resource() {
    }
    /**
     * Create a resource.
     *
     * Syntax:
     * ```
     * az resource create --properties
     *                    [--api-version]
     *                    [--id]
     *                    [--is-full-object]
     *                    [--latest-include-preview]
     *                    [--location]
     *                    [--name]
     *                    [--namespace]
     *                    [--parent]
     *                    [--resource-group]
     *                    [--resource-type]
     *                    [--subscription]
     * ```
     *
     * @param {string} properties A JSON-formatted string containing resource properties.
     */
    az_resource.create = function (properties) {
        return new az_resource_create_command_builder("az resource create", 'az_resource_create_command_result', properties);
    };
    /**
     * Delete a resource.
     *
     * Syntax:
     * ```
     * az resource delete [--api-version]
     *                    [--ids]
     *                    [--latest-include-preview]
     *                    [--name]
     *                    [--namespace]
     *                    [--parent]
     *                    [--resource-group]
     *                    [--resource-type]
     *                    [--subscription]
     * ```
     */
    az_resource["delete"] = function () {
        return new az_resource_delete_command_builder("az resource delete", 'az_resource_delete_command_result');
    };
    /**
     * Invoke an action on the resource.
     *
     * Syntax:
     * ```
     * az resource invoke-action --action
     *                           [--api-version]
     *                           [--ids]
     *                           [--latest-include-preview]
     *                           [--name]
     *                           [--namespace]
     *                           [--parent]
     *                           [--request-body]
     *                           [--resource-group]
     *                           [--resource-type]
     *                           [--subscription]
     * ```
     *
     * @param {string} action The action that will be invoked on the specified resource.
     */
    az_resource.invoke_action = function (action) {
        return new az_resource_invoke_action_command_builder("az resource invoke-action", 'az_resource_invoke_action_command_result', action);
    };
    /**
     * List resources.
     *
     * Syntax:
     * ```
     * az resource list [--location]
     *                  [--name]
     *                  [--namespace]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--resource-type]
     *                  [--subscription]
     *                  [--tag]
     * ```
     */
    az_resource.list = function () {
        return new az_resource_list_command_builder("az resource list", 'az_resource_list_command_result');
    };
    /**
     * Moves resources from one resource group to another(can be under different subscription).
     *
     * Syntax:
     * ```
     * az resource move --destination-group
     *                  --ids
     *                  [--destination-subscription-id]
     *                  [--subscription]
     * ```
     *
     * @param {string} destinationGroup The destination resource group name.
     * @param {string} ids The space-separated resource ids to be moved.
     */
    az_resource.move = function (destinationGroup, ids) {
        return new az_resource_move_command_builder("az resource move", 'az_resource_move_command_result', destinationGroup, ids);
    };
    /**
     * Get the details of a resource.
     *
     * Syntax:
     * ```
     * az resource show [--api-version]
     *                  [--ids]
     *                  [--include-response-body {false, true}]
     *                  [--latest-include-preview]
     *                  [--name]
     *                  [--namespace]
     *                  [--parent]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--resource-type]
     *                  [--subscription]
     * ```
     */
    az_resource.show = function () {
        return new az_resource_show_command_builder("az resource show", 'az_resource_show_command_result');
    };
    /**
     * Tag a resource.
     *
     * Syntax:
     * ```
     * az resource tag --tags
     *                 [--api-version]
     *                 [--ids]
     *                 [--is-incremental]
     *                 [--latest-include-preview]
     *                 [--name]
     *                 [--namespace]
     *                 [--parent]
     *                 [--resource-group]
     *                 [--resource-type]
     *                 [--subscription]
     * ```
     *
     * @param {string} tags Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags.
     */
    az_resource.tag = function (tags) {
        return new az_resource_tag_command_builder("az resource tag", 'az_resource_tag_command_result', tags);
    };
    /**
     * Update a resource.
     *
     * Syntax:
     * ```
     * az resource update [--add]
     *                    [--api-version]
     *                    [--force-string]
     *                    [--ids]
     *                    [--include-response-body {false, true}]
     *                    [--latest-include-preview]
     *                    [--name]
     *                    [--namespace]
     *                    [--parent]
     *                    [--remove]
     *                    [--resource-group]
     *                    [--resource-type]
     *                    [--set]
     *                    [--subscription]
     * ```
     */
    az_resource.update = function () {
        return new az_resource_update_command_builder("az resource update", 'az_resource_update_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of a resources is met.
     *
     * Syntax:
     * ```
     * az resource wait [--api-version]
     *                  [--created]
     *                  [--custom]
     *                  [--deleted]
     *                  [--exists]
     *                  [--ids]
     *                  [--include-response-body {false, true}]
     *                  [--interval]
     *                  [--name]
     *                  [--namespace]
     *                  [--parent]
     *                  [--resource-group]
     *                  [--resource-type]
     *                  [--subscription]
     *                  [--timeout]
     *                  [--updated]
     * ```
     */
    az_resource.wait = function () {
        return new az_resource_wait_command_builder("az resource wait", 'az_resource_wait_command_result');
    };
    return az_resource;
}());
exports.az_resource = az_resource;
/**
 * Create a new link between resources.
 *
 * Syntax:
 * ```
 * az resource link create --link
 *                         --target
 *                         [--notes]
 *                         [--subscription]
 * ```
 *
 * @param {string} link Fully-qualified resource ID of the resource link.
 * @param {string} target Fully-qualified resource ID of the resource link target.
 */
var az_resource_link_create_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_link_create_command_builder, _super);
    function az_resource_link_create_command_builder(commandPath, resultDataTypeName, link, target) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.link(link);
        _this.target(target);
        return _this;
    }
    /** Fully-qualified resource ID of the resource link. */
    az_resource_link_create_command_builder.prototype.link = function (value) {
        this.setFlag("--link", value);
        return this;
    };
    /** Fully-qualified resource ID of the resource link target. */
    az_resource_link_create_command_builder.prototype.target = function (value) {
        this.setFlag("--target", value);
        return this;
    };
    /** Notes for the link. */
    az_resource_link_create_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_link_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_link_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a link between resources.
 *
 * Syntax:
 * ```
 * az resource link delete --link
 *                         [--subscription]
 * ```
 *
 * @param {string} link Fully-qualified resource ID of the resource link.
 */
var az_resource_link_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_link_delete_command_builder, _super);
    function az_resource_link_delete_command_builder(commandPath, resultDataTypeName, link) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.link(link);
        return _this;
    }
    /** Fully-qualified resource ID of the resource link. */
    az_resource_link_delete_command_builder.prototype.link = function (value) {
        this.setFlag("--link", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_link_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_link_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List resource links.
 *
 * Syntax:
 * ```
 * az resource link list [--filter]
 *                       [--query-examples]
 *                       [--scope]
 *                       [--subscription]
 * ```
 */
var az_resource_link_list_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_link_list_command_builder, _super);
    function az_resource_link_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter string for limiting results. */
    az_resource_link_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_resource_link_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Fully-qualified scope for retrieving links. */
    az_resource_link_list_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_link_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_link_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a resource link with the specified ID.
 *
 * Syntax:
 * ```
 * az resource link show --link
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} link Fully-qualified resource ID of the resource link.
 */
var az_resource_link_show_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_link_show_command_builder, _super);
    function az_resource_link_show_command_builder(commandPath, resultDataTypeName, link) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.link(link);
        return _this;
    }
    /** Fully-qualified resource ID of the resource link. */
    az_resource_link_show_command_builder.prototype.link = function (value) {
        this.setFlag("--link", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_resource_link_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_link_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_link_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update link between resources.
 *
 * Syntax:
 * ```
 * az resource link update --link
 *                         [--notes]
 *                         [--subscription]
 *                         [--target]
 * ```
 *
 * @param {string} link Fully-qualified resource ID of the resource link.
 */
var az_resource_link_update_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_link_update_command_builder, _super);
    function az_resource_link_update_command_builder(commandPath, resultDataTypeName, link) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.link(link);
        return _this;
    }
    /** Fully-qualified resource ID of the resource link. */
    az_resource_link_update_command_builder.prototype.link = function (value) {
        this.setFlag("--link", value);
        return this;
    };
    /** Notes for the link. */
    az_resource_link_update_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_link_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Fully-qualified resource ID of the resource link target. */
    az_resource_link_update_command_builder.prototype.target = function (value) {
        this.setFlag("--target", value);
        return this;
    };
    return az_resource_link_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a resource-level lock.
 *
 * Syntax:
 * ```
 * az resource lock create --lock-type {CanNotDelete, ReadOnly}
 *                         --name
 *                         [--namespace]
 *                         [--notes]
 *                         [--parent]
 *                         [--resource]
 *                         [--resource-group]
 *                         [--resource-type]
 *                         [--subscription]
 * ```
 *
 * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
 * @param {string} name Name of the lock.
 */
var az_resource_lock_create_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_lock_create_command_builder, _super);
    function az_resource_lock_create_command_builder(commandPath, resultDataTypeName, lockType, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.lockType(lockType);
        _this.name(name);
        return _this;
    }
    /** The type of lock restriction. */
    az_resource_lock_create_command_builder.prototype.lockType = function (value) {
        this.setFlag("--lock-type", value);
        return this;
    };
    /** Name of the lock. */
    az_resource_lock_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_lock_create_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Notes about this lock. */
    az_resource_lock_create_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_lock_create_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** If an ID is given, other resource arguments should not be given. */
    az_resource_lock_create_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_lock_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_lock_create_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_lock_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_lock_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a resource-level lock.
 *
 * Syntax:
 * ```
 * az resource lock delete [--ids]
 *                         [--name]
 *                         [--namespace]
 *                         [--parent]
 *                         [--resource]
 *                         [--resource-group]
 *                         [--resource-type]
 *                         [--subscription]
 * ```
 */
var az_resource_lock_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_lock_delete_command_builder, _super);
    function az_resource_lock_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_resource_lock_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the lock. */
    az_resource_lock_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_lock_delete_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_lock_delete_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** If an ID is given, other resource arguments should not be given. */
    az_resource_lock_delete_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_lock_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_lock_delete_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_lock_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_lock_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List lock information in the resource-level.
 *
 * Syntax:
 * ```
 * az resource lock list [--filter-string]
 *                       [--namespace]
 *                       [--parent]
 *                       [--query-examples]
 *                       [--resource]
 *                       [--resource-group]
 *                       [--resource-type]
 *                       [--subscription]
 * ```
 */
var az_resource_lock_list_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_lock_list_command_builder, _super);
    function az_resource_lock_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** A query filter to use to restrict the results. */
    az_resource_lock_list_command_builder.prototype.filterString = function (value) {
        this.setFlag("--filter-string", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_lock_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_lock_list_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_resource_lock_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If an ID is given, other resource arguments should not be given. */
    az_resource_lock_list_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_lock_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_lock_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_lock_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_lock_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a resource-level lock.
 *
 * Syntax:
 * ```
 * az resource lock show [--ids]
 *                       [--name]
 *                       [--namespace]
 *                       [--parent]
 *                       [--query-examples]
 *                       [--resource]
 *                       [--resource-group]
 *                       [--resource-type]
 *                       [--subscription]
 * ```
 */
var az_resource_lock_show_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_lock_show_command_builder, _super);
    function az_resource_lock_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_resource_lock_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the lock. */
    az_resource_lock_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_lock_show_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_lock_show_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_resource_lock_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If an ID is given, other resource arguments should not be given. */
    az_resource_lock_show_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_lock_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_lock_show_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_lock_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_lock_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a resource-level lock.
 *
 * Syntax:
 * ```
 * az resource lock update [--ids]
 *                         [--lock-type {CanNotDelete, ReadOnly}]
 *                         [--name]
 *                         [--namespace]
 *                         [--notes]
 *                         [--parent]
 *                         [--resource]
 *                         [--resource-group]
 *                         [--resource-type]
 *                         [--subscription]
 * ```
 */
var az_resource_lock_update_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_lock_update_command_builder, _super);
    function az_resource_lock_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_resource_lock_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The type of lock restriction. */
    az_resource_lock_update_command_builder.prototype.lockType = function (value) {
        this.setFlag("--lock-type", value);
        return this;
    };
    /** Name of the lock. */
    az_resource_lock_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_lock_update_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Notes about this lock. */
    az_resource_lock_update_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_lock_update_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** If an ID is given, other resource arguments should not be given. */
    az_resource_lock_update_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_lock_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_lock_update_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_lock_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_lock_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a resource.
 *
 * Syntax:
 * ```
 * az resource create --properties
 *                    [--api-version]
 *                    [--id]
 *                    [--is-full-object]
 *                    [--latest-include-preview]
 *                    [--location]
 *                    [--name]
 *                    [--namespace]
 *                    [--parent]
 *                    [--resource-group]
 *                    [--resource-type]
 *                    [--subscription]
 * ```
 *
 * @param {string} properties A JSON-formatted string containing resource properties.
 */
var az_resource_create_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_create_command_builder, _super);
    function az_resource_create_command_builder(commandPath, resultDataTypeName, properties) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.properties(properties);
        return _this;
    }
    /** A JSON-formatted string containing resource properties. */
    az_resource_create_command_builder.prototype.properties = function (value) {
        this.setFlag("--properties", value);
        return this;
    };
    /** The api version of the resource (omit for the latest stable version). */
    az_resource_create_command_builder.prototype.apiVersion = function (value) {
        this.setFlag("--api-version", value);
        return this;
    };
    /** Resource ID. */
    az_resource_create_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Indicate that the properties object includes other options such as location, tags, sku, and/or plan. */
    az_resource_create_command_builder.prototype.isFullObject = function (value) {
        this.setFlag("--is-full-object", value);
        return this;
    };
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    az_resource_create_command_builder.prototype.latestIncludePreview = function (value) {
        this.setFlag("--latest-include-preview", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_resource_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The resource name. (Ex: myC). */
    az_resource_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_create_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_create_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_create_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a resource.
 *
 * Syntax:
 * ```
 * az resource delete [--api-version]
 *                    [--ids]
 *                    [--latest-include-preview]
 *                    [--name]
 *                    [--namespace]
 *                    [--parent]
 *                    [--resource-group]
 *                    [--resource-type]
 *                    [--subscription]
 * ```
 */
var az_resource_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_delete_command_builder, _super);
    function az_resource_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The api version of the resource (omit for the latest stable version). */
    az_resource_delete_command_builder.prototype.apiVersion = function (value) {
        this.setFlag("--api-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_resource_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    az_resource_delete_command_builder.prototype.latestIncludePreview = function (value) {
        this.setFlag("--latest-include-preview", value);
        return this;
    };
    /** The resource name. (Ex: myC). */
    az_resource_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_delete_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_delete_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_delete_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Invoke an action on the resource.
 *
 * Syntax:
 * ```
 * az resource invoke-action --action
 *                           [--api-version]
 *                           [--ids]
 *                           [--latest-include-preview]
 *                           [--name]
 *                           [--namespace]
 *                           [--parent]
 *                           [--request-body]
 *                           [--resource-group]
 *                           [--resource-type]
 *                           [--subscription]
 * ```
 *
 * @param {string} action The action that will be invoked on the specified resource.
 */
var az_resource_invoke_action_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_invoke_action_command_builder, _super);
    function az_resource_invoke_action_command_builder(commandPath, resultDataTypeName, action) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.action(action);
        return _this;
    }
    /** The action that will be invoked on the specified resource. */
    az_resource_invoke_action_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** The api version of the resource (omit for the latest stable version). */
    az_resource_invoke_action_command_builder.prototype.apiVersion = function (value) {
        this.setFlag("--api-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_resource_invoke_action_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    az_resource_invoke_action_command_builder.prototype.latestIncludePreview = function (value) {
        this.setFlag("--latest-include-preview", value);
        return this;
    };
    /** The resource name. (Ex: myC). */
    az_resource_invoke_action_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_invoke_action_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_invoke_action_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** JSON encoded parameter arguments for the action that will be passed along in the post request body. Use @{file} to load from a file. */
    az_resource_invoke_action_command_builder.prototype.requestBody = function (value) {
        this.setFlag("--request-body", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_invoke_action_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_invoke_action_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_invoke_action_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_invoke_action_command_builder;
}(base_1.CommandBuilder));
/**
 * List resources.
 *
 * Syntax:
 * ```
 * az resource list [--location]
 *                  [--name]
 *                  [--namespace]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--resource-type]
 *                  [--subscription]
 *                  [--tag]
 * ```
 */
var az_resource_list_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_list_command_builder, _super);
    function az_resource_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_resource_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The resource name. (Ex: myC). */
    az_resource_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_resource_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A single tag in 'key[=value]' format. Use "" to clear existing tags. */
    az_resource_list_command_builder.prototype.tag = function (value) {
        this.setFlag("--tag", value);
        return this;
    };
    return az_resource_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Moves resources from one resource group to another(can be under different subscription).
 *
 * Syntax:
 * ```
 * az resource move --destination-group
 *                  --ids
 *                  [--destination-subscription-id]
 *                  [--subscription]
 * ```
 *
 * @param {string} destinationGroup The destination resource group name.
 * @param {string} ids The space-separated resource ids to be moved.
 */
var az_resource_move_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_move_command_builder, _super);
    function az_resource_move_command_builder(commandPath, resultDataTypeName, destinationGroup, ids) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destinationGroup(destinationGroup);
        _this.ids(ids);
        return _this;
    }
    /** The destination resource group name. */
    az_resource_move_command_builder.prototype.destinationGroup = function (value) {
        this.setFlag("--destination-group", value);
        return this;
    };
    /** The space-separated resource ids to be moved. */
    az_resource_move_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The destination subscription identifier. */
    az_resource_move_command_builder.prototype.destinationSubscriptionId = function (value) {
        this.setFlag("--destination-subscription-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_move_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_move_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a resource.
 *
 * Syntax:
 * ```
 * az resource show [--api-version]
 *                  [--ids]
 *                  [--include-response-body {false, true}]
 *                  [--latest-include-preview]
 *                  [--name]
 *                  [--namespace]
 *                  [--parent]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--resource-type]
 *                  [--subscription]
 * ```
 */
var az_resource_show_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_show_command_builder, _super);
    function az_resource_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The api version of the resource (omit for the latest stable version). */
    az_resource_show_command_builder.prototype.apiVersion = function (value) {
        this.setFlag("--api-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_resource_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Use if the default command output doesn't capture all of the property data. */
    az_resource_show_command_builder.prototype.includeResponseBody = function (value) {
        this.setFlag("--include-response-body", value.toString());
        return this;
    };
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    az_resource_show_command_builder.prototype.latestIncludePreview = function (value) {
        this.setFlag("--latest-include-preview", value);
        return this;
    };
    /** The resource name. (Ex: myC). */
    az_resource_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_show_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_show_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_resource_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_show_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Tag a resource.
 *
 * Syntax:
 * ```
 * az resource tag --tags
 *                 [--api-version]
 *                 [--ids]
 *                 [--is-incremental]
 *                 [--latest-include-preview]
 *                 [--name]
 *                 [--namespace]
 *                 [--parent]
 *                 [--resource-group]
 *                 [--resource-type]
 *                 [--subscription]
 * ```
 *
 * @param {string} tags Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags.
 */
var az_resource_tag_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_tag_command_builder, _super);
    function az_resource_tag_command_builder(commandPath, resultDataTypeName, tags) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.tags(tags);
        return _this;
    }
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_resource_tag_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The api version of the resource (omit for the latest stable version). */
    az_resource_tag_command_builder.prototype.apiVersion = function (value) {
        this.setFlag("--api-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_resource_tag_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The option to add tags incrementally without deleting the original tags. If the key of new tag and original tag are duplicated, the original value will be overwritten. */
    az_resource_tag_command_builder.prototype.isIncremental = function (value) {
        this.setFlag("--is-incremental", value);
        return this;
    };
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    az_resource_tag_command_builder.prototype.latestIncludePreview = function (value) {
        this.setFlag("--latest-include-preview", value);
        return this;
    };
    /** The resource name. (Ex: myC). */
    az_resource_tag_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_tag_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_tag_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_tag_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_tag_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_tag_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_tag_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a resource.
 *
 * Syntax:
 * ```
 * az resource update [--add]
 *                    [--api-version]
 *                    [--force-string]
 *                    [--ids]
 *                    [--include-response-body {false, true}]
 *                    [--latest-include-preview]
 *                    [--name]
 *                    [--namespace]
 *                    [--parent]
 *                    [--remove]
 *                    [--resource-group]
 *                    [--resource-type]
 *                    [--set]
 *                    [--subscription]
 * ```
 */
var az_resource_update_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_update_command_builder, _super);
    function az_resource_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_resource_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The api version of the resource (omit for the latest stable version). */
    az_resource_update_command_builder.prototype.apiVersion = function (value) {
        this.setFlag("--api-version", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_resource_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_resource_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Use if the default command output doesn't capture all of the property data. */
    az_resource_update_command_builder.prototype.includeResponseBody = function (value) {
        this.setFlag("--include-response-body", value.toString());
        return this;
    };
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    az_resource_update_command_builder.prototype.latestIncludePreview = function (value) {
        this.setFlag("--latest-include-preview", value);
        return this;
    };
    /** The resource name. (Ex: myC). */
    az_resource_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_update_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_update_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_resource_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_update_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_resource_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_resource_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of a resources is met.
 *
 * Syntax:
 * ```
 * az resource wait [--api-version]
 *                  [--created]
 *                  [--custom]
 *                  [--deleted]
 *                  [--exists]
 *                  [--ids]
 *                  [--include-response-body {false, true}]
 *                  [--interval]
 *                  [--name]
 *                  [--namespace]
 *                  [--parent]
 *                  [--resource-group]
 *                  [--resource-type]
 *                  [--subscription]
 *                  [--timeout]
 *                  [--updated]
 * ```
 */
var az_resource_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_resource_wait_command_builder, _super);
    function az_resource_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The api version of the resource (omit for the latest stable version). */
    az_resource_wait_command_builder.prototype.apiVersion = function (value) {
        this.setFlag("--api-version", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_resource_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_resource_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_resource_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_resource_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_resource_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Use if the default command output doesn't capture all of the property data. */
    az_resource_wait_command_builder.prototype.includeResponseBody = function (value) {
        this.setFlag("--include-response-body", value.toString());
        return this;
    };
    /** Polling interval in seconds. */
    az_resource_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The resource name. (Ex: myC). */
    az_resource_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_resource_wait_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_resource_wait_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_resource_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_resource_wait_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_resource_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_resource_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_resource_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_resource_wait_command_builder;
}(base_1.CommandBuilder));
