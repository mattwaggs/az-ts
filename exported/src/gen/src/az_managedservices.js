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
exports.az_managedservices = exports.az_managedservices_definition = exports.az_managedservices_assignment = void 0;
var base_1 = require("../base");
/** Manage the registration assignments in Azure. */
var az_managedservices_assignment = /** @class */ (function () {
    function az_managedservices_assignment() {
    }
    /**
     * Creates a new registration assignment.
     *
     * Syntax:
     * ```
     * az managedservices assignment create --definition
     *                                      [--assignment-id]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} definition The fully qualified resource id of the registration definition.
     */
    az_managedservices_assignment.create = function (definition) {
        return new az_managedservices_assignment_create_command_builder("az managedservices assignment create", 'az_managedservices_assignment_create_command_result', definition);
    };
    /**
     * Deletes the registration assignment.
     *
     * Syntax:
     * ```
     * az managedservices assignment delete --assignment
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} assignment The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored.
     */
    az_managedservices_assignment["delete"] = function (assignment) {
        return new az_managedservices_assignment_delete_command_builder("az managedservices assignment delete", 'az_managedservices_assignment_delete_command_result', assignment);
    };
    /**
     * List all the registration assignments.
     *
     * Syntax:
     * ```
     * az managedservices assignment list [--include-definition {false, true}]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    az_managedservices_assignment.list = function () {
        return new az_managedservices_assignment_list_command_builder("az managedservices assignment list", 'az_managedservices_assignment_list_command_result');
    };
    /**
     * Gets a registration assignment.
     *
     * Syntax:
     * ```
     * az managedservices assignment show --assignment
     *                                    [--include-definition {false, true}]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} assignment The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored.
     */
    az_managedservices_assignment.show = function (assignment) {
        return new az_managedservices_assignment_show_command_builder("az managedservices assignment show", 'az_managedservices_assignment_show_command_result', assignment);
    };
    return az_managedservices_assignment;
}());
exports.az_managedservices_assignment = az_managedservices_assignment;
/** Manage the registration definitions in Azure. */
var az_managedservices_definition = /** @class */ (function () {
    function az_managedservices_definition() {
    }
    /**
     * Creates a new registration definition.
     *
     * Syntax:
     * ```
     * az managedservices definition create --name
     *                                      --principal-id
     *                                      --role-definition-id
     *                                      --tenant-id
     *                                      [--definition-id]
     *                                      [--description]
     *                                      [--plan-name]
     *                                      [--plan-product]
     *                                      [--plan-publisher]
     *                                      [--plan-version]
     *                                      [--subscription]
     * ```
     *
     * @param {string} name The name of the registration definition.
     * @param {string} principalId The principal id.
     * @param {string} roleDefinitionId The role definition id.
     * @param {string} tenantId The managed by tenant id.
     */
    az_managedservices_definition.create = function (name, principalId, roleDefinitionId, tenantId) {
        return new az_managedservices_definition_create_command_builder("az managedservices definition create", 'az_managedservices_definition_create_command_result', name, principalId, roleDefinitionId, tenantId);
    };
    /**
     * Deletes a registration.
     *
     * Syntax:
     * ```
     * az managedservices definition delete --definition
     *                                      [--subscription]
     * ```
     *
     * @param {string} definition The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored.
     */
    az_managedservices_definition["delete"] = function (definition) {
        return new az_managedservices_definition_delete_command_builder("az managedservices definition delete", 'az_managedservices_definition_delete_command_result', definition);
    };
    /**
     * List all the registration definitions under the default scope or under the subscription provided.
     *
     * Syntax:
     * ```
     * az managedservices definition list [--query-examples]
     *                                    [--subscription]
     * ```
     */
    az_managedservices_definition.list = function () {
        return new az_managedservices_definition_list_command_builder("az managedservices definition list", 'az_managedservices_definition_list_command_result');
    };
    /**
     * Gets a registration definition.
     *
     * Syntax:
     * ```
     * az managedservices definition show --definition
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} definition The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored.
     */
    az_managedservices_definition.show = function (definition) {
        return new az_managedservices_definition_show_command_builder("az managedservices definition show", 'az_managedservices_definition_show_command_result', definition);
    };
    return az_managedservices_definition;
}());
exports.az_managedservices_definition = az_managedservices_definition;
/** Manage the registration assignments and definitions in Azure. */
var az_managedservices = /** @class */ (function () {
    function az_managedservices() {
    }
    return az_managedservices;
}());
exports.az_managedservices = az_managedservices;
/**
 * Creates a new registration assignment.
 *
 * Syntax:
 * ```
 * az managedservices assignment create --definition
 *                                      [--assignment-id]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} definition The fully qualified resource id of the registration definition.
 */
var az_managedservices_assignment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_managedservices_assignment_create_command_builder, _super);
    function az_managedservices_assignment_create_command_builder(commandPath, resultDataTypeName, definition) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.definition(definition);
        return _this;
    }
    /** The fully qualified resource id of the registration definition. */
    az_managedservices_assignment_create_command_builder.prototype.definition = function (value) {
        this.setFlag("--definition", value);
        return this;
    };
    /** Can be used to override the generated registration assignment id. */
    az_managedservices_assignment_create_command_builder.prototype.assignmentId = function (value) {
        this.setFlag("--assignment-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_managedservices_assignment_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedservices_assignment_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedservices_assignment_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the registration assignment.
 *
 * Syntax:
 * ```
 * az managedservices assignment delete --assignment
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} assignment The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored.
 */
var az_managedservices_assignment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_managedservices_assignment_delete_command_builder, _super);
    function az_managedservices_assignment_delete_command_builder(commandPath, resultDataTypeName, assignment) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.assignment(assignment);
        return _this;
    }
    /** The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored. */
    az_managedservices_assignment_delete_command_builder.prototype.assignment = function (value) {
        this.setFlag("--assignment", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_managedservices_assignment_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedservices_assignment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedservices_assignment_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the registration assignments.
 *
 * Syntax:
 * ```
 * az managedservices assignment list [--include-definition {false, true}]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
var az_managedservices_assignment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_managedservices_assignment_list_command_builder, _super);
    function az_managedservices_assignment_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** When provided, gets the associated registration definition details. */
    az_managedservices_assignment_list_command_builder.prototype.includeDefinition = function (value) {
        this.setFlag("--include-definition", value.toString());
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_managedservices_assignment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_managedservices_assignment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedservices_assignment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedservices_assignment_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a registration assignment.
 *
 * Syntax:
 * ```
 * az managedservices assignment show --assignment
 *                                    [--include-definition {false, true}]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} assignment The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored.
 */
var az_managedservices_assignment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_managedservices_assignment_show_command_builder, _super);
    function az_managedservices_assignment_show_command_builder(commandPath, resultDataTypeName, assignment) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.assignment(assignment);
        return _this;
    }
    /** The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored. */
    az_managedservices_assignment_show_command_builder.prototype.assignment = function (value) {
        this.setFlag("--assignment", value);
        return this;
    };
    /** When provided, gets the associated registration definition details. */
    az_managedservices_assignment_show_command_builder.prototype.includeDefinition = function (value) {
        this.setFlag("--include-definition", value.toString());
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_managedservices_assignment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_managedservices_assignment_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedservices_assignment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedservices_assignment_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a new registration definition.
 *
 * Syntax:
 * ```
 * az managedservices definition create --name
 *                                      --principal-id
 *                                      --role-definition-id
 *                                      --tenant-id
 *                                      [--definition-id]
 *                                      [--description]
 *                                      [--plan-name]
 *                                      [--plan-product]
 *                                      [--plan-publisher]
 *                                      [--plan-version]
 *                                      [--subscription]
 * ```
 *
 * @param {string} name The name of the registration definition.
 * @param {string} principalId The principal id.
 * @param {string} roleDefinitionId The role definition id.
 * @param {string} tenantId The managed by tenant id.
 */
var az_managedservices_definition_create_command_builder = /** @class */ (function (_super) {
    __extends(az_managedservices_definition_create_command_builder, _super);
    function az_managedservices_definition_create_command_builder(commandPath, resultDataTypeName, name, principalId, roleDefinitionId, tenantId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.principalId(principalId);
        _this.roleDefinitionId(roleDefinitionId);
        _this.tenantId(tenantId);
        return _this;
    }
    /** The name of the registration definition. */
    az_managedservices_definition_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The principal id. */
    az_managedservices_definition_create_command_builder.prototype.principalId = function (value) {
        this.setFlag("--principal-id", value);
        return this;
    };
    /** The role definition id. */
    az_managedservices_definition_create_command_builder.prototype.roleDefinitionId = function (value) {
        this.setFlag("--role-definition-id", value);
        return this;
    };
    /** The managed by tenant id. */
    az_managedservices_definition_create_command_builder.prototype.tenantId = function (value) {
        this.setFlag("--tenant-id", value);
        return this;
    };
    /** Can be used to override the generated registration definition id. */
    az_managedservices_definition_create_command_builder.prototype.definitionId = function (value) {
        this.setFlag("--definition-id", value);
        return this;
    };
    /** The friendly description. */
    az_managedservices_definition_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The plan name. */
    az_managedservices_definition_create_command_builder.prototype.planName = function (value) {
        this.setFlag("--plan-name", value);
        return this;
    };
    /** The plan product. */
    az_managedservices_definition_create_command_builder.prototype.planProduct = function (value) {
        this.setFlag("--plan-product", value);
        return this;
    };
    /** The plan publisher. */
    az_managedservices_definition_create_command_builder.prototype.planPublisher = function (value) {
        this.setFlag("--plan-publisher", value);
        return this;
    };
    /** The plan version. */
    az_managedservices_definition_create_command_builder.prototype.planVersion = function (value) {
        this.setFlag("--plan-version", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedservices_definition_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedservices_definition_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a registration.
 *
 * Syntax:
 * ```
 * az managedservices definition delete --definition
 *                                      [--subscription]
 * ```
 *
 * @param {string} definition The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored.
 */
var az_managedservices_definition_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_managedservices_definition_delete_command_builder, _super);
    function az_managedservices_definition_delete_command_builder(commandPath, resultDataTypeName, definition) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.definition(definition);
        return _this;
    }
    /** The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored. */
    az_managedservices_definition_delete_command_builder.prototype.definition = function (value) {
        this.setFlag("--definition", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedservices_definition_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedservices_definition_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the registration definitions under the default scope or under the subscription provided.
 *
 * Syntax:
 * ```
 * az managedservices definition list [--query-examples]
 *                                    [--subscription]
 * ```
 */
var az_managedservices_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_managedservices_definition_list_command_builder, _super);
    function az_managedservices_definition_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_managedservices_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedservices_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedservices_definition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a registration definition.
 *
 * Syntax:
 * ```
 * az managedservices definition show --definition
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} definition The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored.
 */
var az_managedservices_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_managedservices_definition_show_command_builder, _super);
    function az_managedservices_definition_show_command_builder(commandPath, resultDataTypeName, definition) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.definition(definition);
        return _this;
    }
    /** The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored. */
    az_managedservices_definition_show_command_builder.prototype.definition = function (value) {
        this.setFlag("--definition", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_managedservices_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_managedservices_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_managedservices_definition_show_command_builder;
}(base_1.CommandBuilder));
