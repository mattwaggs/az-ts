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
/** Manage role assignments. */
var az_role_assignment = /** @class */ (function () {
    function az_role_assignment() {
    }
    /**
     * Create a new role assignment for a user, group, or service principal.
     *
     * Syntax:
     * ```
     * az role assignment create --role
     *                           [--assignee]
     *                           [--assignee-object-id]
     *                           [--assignee-principal-type {Application, DirectoryObjectOrGroup, DirectoryRoleTemplate, Everyone, ForeignGroup, Group, MSI, ServicePrincipal, Unknown, User}]
     *                           [--condition]
     *                           [--condition-version]
     *                           [--description]
     *                           [--resource-group]
     *                           [--scope]
     *                           [--subscription]
     * ```
     *
     * @param {string} role Role name or id.
     */
    az_role_assignment.create = function (role) {
        return new az_role_assignment_create_command_builder("az role assignment create", 'az_role_assignment_create_command_result', role);
    };
    /**
     * Delete role assignments.
     *
     * Syntax:
     * ```
     * az role assignment delete [--assignee]
     *                           [--ids]
     *                           [--include-inherited]
     *                           [--resource-group]
     *                           [--role]
     *                           [--scope]
     *                           [--subscription]
     *                           [--yes]
     * ```
     */
    az_role_assignment["delete"] = function () {
        return new az_role_assignment_delete_command_builder("az role assignment delete", 'az_role_assignment_delete_command_result');
    };
    /**
     * List role assignments.
     *
     * Syntax:
     * ```
     * az role assignment list [--all]
     *                         [--assignee]
     *                         [--include-classic-administrators {false, true}]
     *                         [--include-groups]
     *                         [--include-inherited]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--role]
     *                         [--scope]
     *                         [--subscription]
     * ```
     */
    az_role_assignment.list = function () {
        return new az_role_assignment_list_command_builder("az role assignment list", 'az_role_assignment_list_command_result');
    };
    /**
     * List changelogs for role assignments.
     *
     * Syntax:
     * ```
     * az role assignment list-changelogs [--end-time]
     *                                    [--start-time]
     *                                    [--subscription]
     * ```
     */
    az_role_assignment.list_changelogs = function () {
        return new az_role_assignment_list_changelogs_command_builder("az role assignment list-changelogs", 'az_role_assignment_list_changelogs_command_result');
    };
    /**
     * Update an existing role assignment for a user, group, or service principal.
     *
     * Syntax:
     * ```
     * az role assignment update --role-assignment
     *                           [--subscription]
     * ```
     *
     * @param {string} roleAssignment Description of an existing role assignment as JSON, or a path to a file containing a JSON description.
     */
    az_role_assignment.update = function (roleAssignment) {
        return new az_role_assignment_update_command_builder("az role assignment update", 'az_role_assignment_update_command_result', roleAssignment);
    };
    return az_role_assignment;
}());
exports.az_role_assignment = az_role_assignment;
/** Manage role definitions. */
var az_role_definition = /** @class */ (function () {
    function az_role_definition() {
    }
    /**
     * Create a custom role definition.
     *
     * Syntax:
     * ```
     * az role definition create --role-definition
     *                           [--subscription]
     * ```
     *
     * @param {string} roleDefinition Description of a role as JSON, or a path to a file containing a JSON description.
     */
    az_role_definition.create = function (roleDefinition) {
        return new az_role_definition_create_command_builder("az role definition create", 'az_role_definition_create_command_result', roleDefinition);
    };
    /**
     * Delete a role definition.
     *
     * Syntax:
     * ```
     * az role definition delete --name
     *                           [--custom-role-only {false, true}]
     *                           [--resource-group]
     *                           [--scope]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The role's name.
     */
    az_role_definition["delete"] = function (name) {
        return new az_role_definition_delete_command_builder("az role definition delete", 'az_role_definition_delete_command_result', name);
    };
    /**
     * List role definitions.
     *
     * Syntax:
     * ```
     * az role definition list [--custom-role-only {false, true}]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--scope]
     *                         [--subscription]
     * ```
     */
    az_role_definition.list = function () {
        return new az_role_definition_list_command_builder("az role definition list", 'az_role_definition_list_command_result');
    };
    /**
     * Update a role definition.
     *
     * Syntax:
     * ```
     * az role definition update --role-definition
     *                           [--subscription]
     * ```
     *
     * @param {string} roleDefinition Description of an existing role as JSON, or a path to a file containing a JSON description.
     */
    az_role_definition.update = function (roleDefinition) {
        return new az_role_definition_update_command_builder("az role definition update", 'az_role_definition_update_command_result', roleDefinition);
    };
    return az_role_definition;
}());
exports.az_role_definition = az_role_definition;
/** Manage user roles for access control with Azure Active Directory and service principals. */
var az_role = /** @class */ (function () {
    function az_role() {
    }
    return az_role;
}());
exports.az_role = az_role;
/**
 * Create a new role assignment for a user, group, or service principal.
 *
 * Syntax:
 * ```
 * az role assignment create --role
 *                           [--assignee]
 *                           [--assignee-object-id]
 *                           [--assignee-principal-type {Application, DirectoryObjectOrGroup, DirectoryRoleTemplate, Everyone, ForeignGroup, Group, MSI, ServicePrincipal, Unknown, User}]
 *                           [--condition]
 *                           [--condition-version]
 *                           [--description]
 *                           [--resource-group]
 *                           [--scope]
 *                           [--subscription]
 * ```
 *
 * @param {string} role Role name or id.
 */
var az_role_assignment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_role_assignment_create_command_builder, _super);
    function az_role_assignment_create_command_builder(commandPath, resultDataTypeName, role) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.role(role);
        return _this;
    }
    /** Role name or id. */
    az_role_assignment_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    az_role_assignment_create_command_builder.prototype.assignee = function (value) {
        this.setFlag("--assignee", value);
        return this;
    };
    /** Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id. */
    az_role_assignment_create_command_builder.prototype.assigneeObjectId = function (value) {
        this.setFlag("--assignee-object-id", value);
        return this;
    };
    /** Use with --assignee-object-id to avoid errors caused by propagation latency in AAD Graph. */
    az_role_assignment_create_command_builder.prototype.assigneePrincipalType = function (value) {
        this.setFlag("--assignee-principal-type", value);
        return this;
    };
    /** Condition under which the user can be granted permission. */
    az_role_assignment_create_command_builder.prototype.condition = function (value) {
        this.setFlag("--condition", value);
        return this;
    };
    /** Version of the condition syntax. If --condition is specified without --condition-version, default to 2.0. */
    az_role_assignment_create_command_builder.prototype.conditionVersion = function (value) {
        this.setFlag("--condition-version", value);
        return this;
    };
    /** Description of role assignment. */
    az_role_assignment_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Use it only if the role or assignment was added at the level of a resource group. */
    az_role_assignment_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    az_role_assignment_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_role_assignment_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_role_assignment_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete role assignments.
 *
 * Syntax:
 * ```
 * az role assignment delete [--assignee]
 *                           [--ids]
 *                           [--include-inherited]
 *                           [--resource-group]
 *                           [--role]
 *                           [--scope]
 *                           [--subscription]
 *                           [--yes]
 * ```
 */
var az_role_assignment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_role_assignment_delete_command_builder, _super);
    function az_role_assignment_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    az_role_assignment_delete_command_builder.prototype.assignee = function (value) {
        this.setFlag("--assignee", value);
        return this;
    };
    /** Space-separated role assignment ids. */
    az_role_assignment_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Include assignments applied on parent scopes. */
    az_role_assignment_delete_command_builder.prototype.includeInherited = function (value) {
        this.setFlag("--include-inherited", value);
        return this;
    };
    /** Use it only if the role or assignment was added at the level of a resource group. */
    az_role_assignment_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Role name or id. */
    az_role_assignment_delete_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    az_role_assignment_delete_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_role_assignment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Continue to delete all assignments under the subscription. */
    az_role_assignment_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_role_assignment_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List role assignments.
 *
 * Syntax:
 * ```
 * az role assignment list [--all]
 *                         [--assignee]
 *                         [--include-classic-administrators {false, true}]
 *                         [--include-groups]
 *                         [--include-inherited]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--role]
 *                         [--scope]
 *                         [--subscription]
 * ```
 */
var az_role_assignment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_role_assignment_list_command_builder, _super);
    function az_role_assignment_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Show all assignments under the current subscription. */
    az_role_assignment_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    az_role_assignment_list_command_builder.prototype.assignee = function (value) {
        this.setFlag("--assignee", value);
        return this;
    };
    /** List default role assignments for subscription classic administrators, aka co-admins. */
    az_role_assignment_list_command_builder.prototype.includeClassicAdministrators = function (value) {
        this.setFlag("--include-classic-administrators", value.toString());
        return this;
    };
    /** Include extra assignments to the groups of which the user is a member(transitively). */
    az_role_assignment_list_command_builder.prototype.includeGroups = function (value) {
        this.setFlag("--include-groups", value);
        return this;
    };
    /** Include assignments applied on parent scopes. */
    az_role_assignment_list_command_builder.prototype.includeInherited = function (value) {
        this.setFlag("--include-inherited", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_role_assignment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Use it only if the role or assignment was added at the level of a resource group. */
    az_role_assignment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Role name or id. */
    az_role_assignment_list_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    az_role_assignment_list_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_role_assignment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_role_assignment_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List changelogs for role assignments.
 *
 * Syntax:
 * ```
 * az role assignment list-changelogs [--end-time]
 *                                    [--start-time]
 *                                    [--subscription]
 * ```
 */
var az_role_assignment_list_changelogs_command_builder = /** @class */ (function (_super) {
    __extends(az_role_assignment_list_changelogs_command_builder, _super);
    function az_role_assignment_list_changelogs_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The end time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to the current time. */
    az_role_assignment_list_changelogs_command_builder.prototype.endTime = function (value) {
        this.setFlag("--end-time", value);
        return this;
    };
    /** The start time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to 1 Hour prior to the current time. */
    az_role_assignment_list_changelogs_command_builder.prototype.startTime = function (value) {
        this.setFlag("--start-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_role_assignment_list_changelogs_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_role_assignment_list_changelogs_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an existing role assignment for a user, group, or service principal.
 *
 * Syntax:
 * ```
 * az role assignment update --role-assignment
 *                           [--subscription]
 * ```
 *
 * @param {string} roleAssignment Description of an existing role assignment as JSON, or a path to a file containing a JSON description.
 */
var az_role_assignment_update_command_builder = /** @class */ (function (_super) {
    __extends(az_role_assignment_update_command_builder, _super);
    function az_role_assignment_update_command_builder(commandPath, resultDataTypeName, roleAssignment) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.roleAssignment(roleAssignment);
        return _this;
    }
    /** Description of an existing role assignment as JSON, or a path to a file containing a JSON description. */
    az_role_assignment_update_command_builder.prototype.roleAssignment = function (value) {
        this.setFlag("--role-assignment", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_role_assignment_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_role_assignment_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a custom role definition.
 *
 * Syntax:
 * ```
 * az role definition create --role-definition
 *                           [--subscription]
 * ```
 *
 * @param {string} roleDefinition Description of a role as JSON, or a path to a file containing a JSON description.
 */
var az_role_definition_create_command_builder = /** @class */ (function (_super) {
    __extends(az_role_definition_create_command_builder, _super);
    function az_role_definition_create_command_builder(commandPath, resultDataTypeName, roleDefinition) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.roleDefinition(roleDefinition);
        return _this;
    }
    /** Description of a role as JSON, or a path to a file containing a JSON description. */
    az_role_definition_create_command_builder.prototype.roleDefinition = function (value) {
        this.setFlag("--role-definition", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_role_definition_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_role_definition_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a role definition.
 *
 * Syntax:
 * ```
 * az role definition delete --name
 *                           [--custom-role-only {false, true}]
 *                           [--resource-group]
 *                           [--scope]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The role's name.
 */
var az_role_definition_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_role_definition_delete_command_builder, _super);
    function az_role_definition_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The role's name. */
    az_role_definition_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Custom roles only(vs. build-in ones). */
    az_role_definition_delete_command_builder.prototype.customRoleOnly = function (value) {
        this.setFlag("--custom-role-only", value.toString());
        return this;
    };
    /** Use it only if the role or assignment was added at the level of a resource group. */
    az_role_definition_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    az_role_definition_delete_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_role_definition_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_role_definition_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List role definitions.
 *
 * Syntax:
 * ```
 * az role definition list [--custom-role-only {false, true}]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--scope]
 *                         [--subscription]
 * ```
 */
var az_role_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_role_definition_list_command_builder, _super);
    function az_role_definition_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Custom roles only(vs. build-in ones). */
    az_role_definition_list_command_builder.prototype.customRoleOnly = function (value) {
        this.setFlag("--custom-role-only", value.toString());
        return this;
    };
    /** The role's name. */
    az_role_definition_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_role_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Use it only if the role or assignment was added at the level of a resource group. */
    az_role_definition_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    az_role_definition_list_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_role_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_role_definition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a role definition.
 *
 * Syntax:
 * ```
 * az role definition update --role-definition
 *                           [--subscription]
 * ```
 *
 * @param {string} roleDefinition Description of an existing role as JSON, or a path to a file containing a JSON description.
 */
var az_role_definition_update_command_builder = /** @class */ (function (_super) {
    __extends(az_role_definition_update_command_builder, _super);
    function az_role_definition_update_command_builder(commandPath, resultDataTypeName, roleDefinition) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.roleDefinition(roleDefinition);
        return _this;
    }
    /** Description of an existing role as JSON, or a path to a file containing a JSON description. */
    az_role_definition_update_command_builder.prototype.roleDefinition = function (value) {
        this.setFlag("--role-definition", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_role_definition_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_role_definition_update_command_builder;
}(base_1.CommandBuilder));
