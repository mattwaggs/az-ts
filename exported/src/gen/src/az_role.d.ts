import { CommandBuilder } from '../base';
import { az_role_assignment_create_command_result } from './models/az_role_assignment_create_command_result';
import { az_role_assignment_delete_command_result } from './models/az_role_assignment_delete_command_result';
import { az_role_assignment_list_command_result } from './models/az_role_assignment_list_command_result';
import { az_role_assignment_list_changelogs_command_result } from './models/az_role_assignment_list_changelogs_command_result';
import { az_role_assignment_update_command_result } from './models/az_role_assignment_update_command_result';
import { az_role_definition_create_command_result } from './models/az_role_definition_create_command_result';
import { az_role_definition_delete_command_result } from './models/az_role_definition_delete_command_result';
import { az_role_definition_list_command_result } from './models/az_role_definition_list_command_result';
import { az_role_definition_update_command_result } from './models/az_role_definition_update_command_result';
/** Manage role assignments. */
export declare class az_role_assignment {
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
    static create(role: string): az_role_assignment_create_command_builder;
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
    static delete(): az_role_assignment_delete_command_builder;
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
    static list(): az_role_assignment_list_command_builder;
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
    static list_changelogs(): az_role_assignment_list_changelogs_command_builder;
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
    static update(roleAssignment: string): az_role_assignment_update_command_builder;
}
/** Manage role definitions. */
export declare class az_role_definition {
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
    static create(roleDefinition: string): az_role_definition_create_command_builder;
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
    static delete(name: string): az_role_definition_delete_command_builder;
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
    static list(): az_role_definition_list_command_builder;
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
    static update(roleDefinition: string): az_role_definition_update_command_builder;
}
/** Manage user roles for access control with Azure Active Directory and service principals. */
export declare class az_role {
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
declare class az_role_assignment_create_command_builder extends CommandBuilder<az_role_assignment_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, role: string);
    /** Role name or id. */
    role(value: string): az_role_assignment_create_command_builder;
    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_role_assignment_create_command_builder;
    /** Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id. */
    assigneeObjectId(value: string): az_role_assignment_create_command_builder;
    /** Use with --assignee-object-id to avoid errors caused by propagation latency in AAD Graph. */
    assigneePrincipalType(value: 'Application' | 'DirectoryObjectOrGroup' | 'DirectoryRoleTemplate' | 'Everyone' | 'ForeignGroup' | 'Group' | 'MSI' | 'ServicePrincipal' | 'Unknown' | 'User'): az_role_assignment_create_command_builder;
    /** Condition under which the user can be granted permission. */
    condition(value: string): az_role_assignment_create_command_builder;
    /** Version of the condition syntax. If --condition is specified without --condition-version, default to 2.0. */
    conditionVersion(value: string): az_role_assignment_create_command_builder;
    /** Description of role assignment. */
    description(value: string): az_role_assignment_create_command_builder;
    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_assignment_create_command_builder;
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_assignment_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_create_command_builder;
}
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
declare class az_role_assignment_delete_command_builder extends CommandBuilder<az_role_assignment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_role_assignment_delete_command_builder;
    /** Space-separated role assignment ids. */
    ids(value: string): az_role_assignment_delete_command_builder;
    /** Include assignments applied on parent scopes. */
    includeInherited(value: string): az_role_assignment_delete_command_builder;
    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_assignment_delete_command_builder;
    /** Role name or id. */
    role(value: string): az_role_assignment_delete_command_builder;
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_assignment_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_delete_command_builder;
    /** Continue to delete all assignments under the subscription. */
    yes(value: string): az_role_assignment_delete_command_builder;
}
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
declare class az_role_assignment_list_command_builder extends CommandBuilder<az_role_assignment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Show all assignments under the current subscription. */
    all(value: string): az_role_assignment_list_command_builder;
    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_role_assignment_list_command_builder;
    /** List default role assignments for subscription classic administrators, aka co-admins. */
    includeClassicAdministrators(value: boolean): az_role_assignment_list_command_builder;
    /** Include extra assignments to the groups of which the user is a member(transitively). */
    includeGroups(value: string): az_role_assignment_list_command_builder;
    /** Include assignments applied on parent scopes. */
    includeInherited(value: string): az_role_assignment_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_role_assignment_list_command_builder;
    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_assignment_list_command_builder;
    /** Role name or id. */
    role(value: string): az_role_assignment_list_command_builder;
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_assignment_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_list_command_builder;
}
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
declare class az_role_assignment_list_changelogs_command_builder extends CommandBuilder<az_role_assignment_list_changelogs_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The end time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to the current time. */
    endTime(value: string): az_role_assignment_list_changelogs_command_builder;
    /** The start time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to 1 Hour prior to the current time. */
    startTime(value: string): az_role_assignment_list_changelogs_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_list_changelogs_command_builder;
}
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
declare class az_role_assignment_update_command_builder extends CommandBuilder<az_role_assignment_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, roleAssignment: string);
    /** Description of an existing role assignment as JSON, or a path to a file containing a JSON description. */
    roleAssignment(value: string): az_role_assignment_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_update_command_builder;
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
declare class az_role_definition_create_command_builder extends CommandBuilder<az_role_definition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, roleDefinition: string);
    /** Description of a role as JSON, or a path to a file containing a JSON description. */
    roleDefinition(value: string): az_role_definition_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_definition_create_command_builder;
}
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
declare class az_role_definition_delete_command_builder extends CommandBuilder<az_role_definition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The role's name. */
    name(value: string): az_role_definition_delete_command_builder;
    /** Custom roles only(vs. build-in ones). */
    customRoleOnly(value: boolean): az_role_definition_delete_command_builder;
    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_definition_delete_command_builder;
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_definition_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_definition_delete_command_builder;
}
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
declare class az_role_definition_list_command_builder extends CommandBuilder<az_role_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Custom roles only(vs. build-in ones). */
    customRoleOnly(value: boolean): az_role_definition_list_command_builder;
    /** The role's name. */
    name(value: string): az_role_definition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_role_definition_list_command_builder;
    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_definition_list_command_builder;
    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_definition_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_definition_list_command_builder;
}
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
declare class az_role_definition_update_command_builder extends CommandBuilder<az_role_definition_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, roleDefinition: string);
    /** Description of an existing role as JSON, or a path to a file containing a JSON description. */
    roleDefinition(value: string): az_role_definition_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_definition_update_command_builder;
}
export {};
