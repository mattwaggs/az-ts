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
/** Tag Management on a resource. */
var az_tag = /** @class */ (function () {
    function az_tag() {
    }
    /**
     * Create a tag value.
     *
     * Syntax:
     * ```
     * az tag add-value --name
     *                  --value
     *                  [--subscription]
     * ```
     *
     * @param {string} name The tag name.
     * @param {string} value The tag value.
     */
    az_tag.add_value = function (name, value) {
        return new az_tag_add_value_command_builder("az tag add-value", 'az_tag_add_value_command_result', name, value);
    };
    /**
     * Create tags on a specific resource.
     *
     * Syntax:
     * ```
     * az tag create [--name]
     *               [--resource-id]
     *               [--subscription]
     *               [--tags]
     * ```
     */
    az_tag.create = function () {
        return new az_tag_create_command_builder("az tag create", 'az_tag_create_command_result');
    };
    /**
     * Delete tags on a specific resource.
     *
     * Syntax:
     * ```
     * az tag delete [--name]
     *               [--resource-id]
     *               [--subscription]
     *               [--yes]
     * ```
     */
    az_tag["delete"] = function () {
        return new az_tag_delete_command_builder("az tag delete", 'az_tag_delete_command_result');
    };
    /**
     * List the entire set of tags on a specific resource.
     *
     * Syntax:
     * ```
     * az tag list [--query-examples]
     *             [--resource-id]
     *             [--subscription]
     * ```
     */
    az_tag.list = function () {
        return new az_tag_list_command_builder("az tag list", 'az_tag_list_command_result');
    };
    /**
     * Deletes a predefined tag value for a predefined tag name.
     *
     * Syntax:
     * ```
     * az tag remove-value --name
     *                     --value
     *                     [--subscription]
     * ```
     *
     * @param {string} name The tag name.
     * @param {string} value The tag value.
     */
    az_tag.remove_value = function (name, value) {
        return new az_tag_remove_value_command_builder("az tag remove-value", 'az_tag_remove_value_command_result', name, value);
    };
    /**
     * Selectively update the set of tags on a specific resource.
     *
     * Syntax:
     * ```
     * az tag update --operation {Delete, Merge, Replace}
     *               --resource-id
     *               --tags
     *               [--subscription]
     * ```
     *
     * @param {'Delete' | 'Merge' | 'Replace'} operation The update operation. Options are Merge, Replace and Delete.
     * @param {string} resourceId The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged.
     * @param {string} tags The tags to be updated on the resource.
     */
    az_tag.update = function (operation, resourceId, tags) {
        return new az_tag_update_command_builder("az tag update", 'az_tag_update_command_result', operation, resourceId, tags);
    };
    return az_tag;
}());
exports.az_tag = az_tag;
/**
 * Create a tag value.
 *
 * Syntax:
 * ```
 * az tag add-value --name
 *                  --value
 *                  [--subscription]
 * ```
 *
 * @param {string} name The tag name.
 * @param {string} value The tag value.
 */
var az_tag_add_value_command_builder = /** @class */ (function (_super) {
    __extends(az_tag_add_value_command_builder, _super);
    function az_tag_add_value_command_builder(commandPath, resultDataTypeName, name, value) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.value(value);
        return _this;
    }
    /** The tag name. */
    az_tag_add_value_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The tag value. */
    az_tag_add_value_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_tag_add_value_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_tag_add_value_command_builder;
}(base_1.CommandBuilder));
/**
 * Create tags on a specific resource.
 *
 * Syntax:
 * ```
 * az tag create [--name]
 *               [--resource-id]
 *               [--subscription]
 *               [--tags]
 * ```
 */
var az_tag_create_command_builder = /** @class */ (function (_super) {
    __extends(az_tag_create_command_builder, _super);
    function az_tag_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the tag to create. */
    az_tag_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged. */
    az_tag_create_command_builder.prototype.resourceId = function (value) {
        this.setFlag("--resource-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID. */
    az_tag_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tags to be applied on the resource. */
    az_tag_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_tag_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete tags on a specific resource.
 *
 * Syntax:
 * ```
 * az tag delete [--name]
 *               [--resource-id]
 *               [--subscription]
 *               [--yes]
 * ```
 */
var az_tag_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_tag_delete_command_builder, _super);
    function az_tag_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the tag to be deleted. */
    az_tag_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged. */
    az_tag_delete_command_builder.prototype.resourceId = function (value) {
        this.setFlag("--resource-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_tag_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_tag_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_tag_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the entire set of tags on a specific resource.
 *
 * Syntax:
 * ```
 * az tag list [--query-examples]
 *             [--resource-id]
 *             [--subscription]
 * ```
 */
var az_tag_list_command_builder = /** @class */ (function (_super) {
    __extends(az_tag_list_command_builder, _super);
    function az_tag_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_tag_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged. */
    az_tag_list_command_builder.prototype.resourceId = function (value) {
        this.setFlag("--resource-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_tag_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_tag_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a predefined tag value for a predefined tag name.
 *
 * Syntax:
 * ```
 * az tag remove-value --name
 *                     --value
 *                     [--subscription]
 * ```
 *
 * @param {string} name The tag name.
 * @param {string} value The tag value.
 */
var az_tag_remove_value_command_builder = /** @class */ (function (_super) {
    __extends(az_tag_remove_value_command_builder, _super);
    function az_tag_remove_value_command_builder(commandPath, resultDataTypeName, name, value) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.value(value);
        return _this;
    }
    /** The tag name. */
    az_tag_remove_value_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The tag value. */
    az_tag_remove_value_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_tag_remove_value_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_tag_remove_value_command_builder;
}(base_1.CommandBuilder));
/**
 * Selectively update the set of tags on a specific resource.
 *
 * Syntax:
 * ```
 * az tag update --operation {Delete, Merge, Replace}
 *               --resource-id
 *               --tags
 *               [--subscription]
 * ```
 *
 * @param {'Delete' | 'Merge' | 'Replace'} operation The update operation. Options are Merge, Replace and Delete.
 * @param {string} resourceId The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged.
 * @param {string} tags The tags to be updated on the resource.
 */
var az_tag_update_command_builder = /** @class */ (function (_super) {
    __extends(az_tag_update_command_builder, _super);
    function az_tag_update_command_builder(commandPath, resultDataTypeName, operation, resourceId, tags) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.operation(operation);
        _this.resourceId(resourceId);
        _this.tags(tags);
        return _this;
    }
    /** The update operation. Options are Merge, Replace and Delete. */
    az_tag_update_command_builder.prototype.operation = function (value) {
        this.setFlag("--operation", value);
        return this;
    };
    /** The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged. */
    az_tag_update_command_builder.prototype.resourceId = function (value) {
        this.setFlag("--resource-id", value);
        return this;
    };
    /** The tags to be updated on the resource. */
    az_tag_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_tag_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_tag_update_command_builder;
}(base_1.CommandBuilder));
