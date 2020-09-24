import { CommandBuilder } from '../base';

/** Manage role assignments. */
export class az_role_assignment {
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
    static az_role_assignment_create(role: string): az_role_assignment_create_command_builder {
        return new az_role_assignment_create_command_builder("az role assignment create", role);
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
    static az_role_assignment_delete(): az_role_assignment_delete_command_builder {
        return new az_role_assignment_delete_command_builder("az role assignment delete");
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
    static az_role_assignment_list(): az_role_assignment_list_command_builder {
        return new az_role_assignment_list_command_builder("az role assignment list");
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
    static az_role_assignment_list_changelogs(): az_role_assignment_list_changelogs_command_builder {
        return new az_role_assignment_list_changelogs_command_builder("az role assignment list-changelogs");
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
    static az_role_assignment_update(roleAssignment: string): az_role_assignment_update_command_builder {
        return new az_role_assignment_update_command_builder("az role assignment update", roleAssignment);
    }
}

/** Manage role definitions. */
export class az_role_definition {
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
    static az_role_definition_create(roleDefinition: string): az_role_definition_create_command_builder {
        return new az_role_definition_create_command_builder("az role definition create", roleDefinition);
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
    static az_role_definition_delete(name: string): az_role_definition_delete_command_builder {
        return new az_role_definition_delete_command_builder("az role definition delete", name);
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
    static az_role_definition_list(): az_role_definition_list_command_builder {
        return new az_role_definition_list_command_builder("az role definition list");
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
    static az_role_definition_update(roleDefinition: string): az_role_definition_update_command_builder {
        return new az_role_definition_update_command_builder("az role definition update", roleDefinition);
    }
}

/** Manage user roles for access control with Azure Active Directory and service principals. */
export class az_role {
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
class az_role_assignment_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, role: string) {
        super(commandParent);
        this.role(role)
    }

    /** Role name or id. */
    role(value: string): az_role_assignment_create_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_role_assignment_create_command_builder {
        this.setFlag("--assignee", value);
        return this;
    }

    /** Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id. */
    assigneeObjectId(value: string): az_role_assignment_create_command_builder {
        this.setFlag("--assignee-object-id", value);
        return this;
    }

    /** Use with --assignee-object-id to avoid errors caused by propagation latency in AAD Graph. */
    assigneePrincipalType(value: 'Application' | 'DirectoryObjectOrGroup' | 'DirectoryRoleTemplate' | 'Everyone' | 'ForeignGroup' | 'Group' | 'MSI' | 'ServicePrincipal' | 'Unknown' | 'User'): az_role_assignment_create_command_builder {
        this.setFlag("--assignee-principal-type", value);
        return this;
    }

    /** Condition under which the user can be granted permission. */
    condition(value: string): az_role_assignment_create_command_builder {
        this.setFlag("--condition", value);
        return this;
    }

    /** Version of the condition syntax. If --condition is specified without --condition-version, default to 2.0. */
    conditionVersion(value: string): az_role_assignment_create_command_builder {
        this.setFlag("--condition-version", value);
        return this;
    }

    /** Description of role assignment. */
    description(value: string): az_role_assignment_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_assignment_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_assignment_create_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_role_assignment_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_role_assignment_delete_command_builder {
        this.setFlag("--assignee", value);
        return this;
    }

    /** Space-separated role assignment ids. */
    ids(value: string): az_role_assignment_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Include assignments applied on parent scopes. */
    includeInherited(value: string): az_role_assignment_delete_command_builder {
        this.setFlag("--include-inherited", value);
        return this;
    }

    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_assignment_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Role name or id. */
    role(value: string): az_role_assignment_delete_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_assignment_delete_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Continue to delete all assignments under the subscription. */
    yes(value: string): az_role_assignment_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_role_assignment_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Show all assignments under the current subscription. */
    all(value: string): az_role_assignment_list_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_role_assignment_list_command_builder {
        this.setFlag("--assignee", value);
        return this;
    }

    /** List default role assignments for subscription classic administrators, aka co-admins. */
    includeClassicAdministrators(value: boolean): az_role_assignment_list_command_builder {
        this.setFlag("--include-classic-administrators", value.toString());
        return this;
    }

    /** Include extra assignments to the groups of which the user is a member(transitively). */
    includeGroups(value: string): az_role_assignment_list_command_builder {
        this.setFlag("--include-groups", value);
        return this;
    }

    /** Include assignments applied on parent scopes. */
    includeInherited(value: string): az_role_assignment_list_command_builder {
        this.setFlag("--include-inherited", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_role_assignment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_assignment_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Role name or id. */
    role(value: string): az_role_assignment_list_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_assignment_list_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_role_assignment_list_changelogs_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** The end time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to the current time. */
    endTime(value: string): az_role_assignment_list_changelogs_command_builder {
        this.setFlag("--end-time", value);
        return this;
    }

    /** The start time of the query in the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2000-12-31T12:59:59Z. Defaults to 1 Hour prior to the current time. */
    startTime(value: string): az_role_assignment_list_changelogs_command_builder {
        this.setFlag("--start-time", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_list_changelogs_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_role_assignment_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, roleAssignment: string) {
        super(commandParent);
        this.roleAssignment(roleAssignment)
    }

    /** Description of an existing role assignment as JSON, or a path to a file containing a JSON description. */
    roleAssignment(value: string): az_role_assignment_update_command_builder {
        this.setFlag("--role-assignment", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_assignment_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_role_definition_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, roleDefinition: string) {
        super(commandParent);
        this.roleDefinition(roleDefinition)
    }

    /** Description of a role as JSON, or a path to a file containing a JSON description. */
    roleDefinition(value: string): az_role_definition_create_command_builder {
        this.setFlag("--role-definition", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_definition_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_role_definition_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The role's name. */
    name(value: string): az_role_definition_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Custom roles only(vs. build-in ones). */
    customRoleOnly(value: boolean): az_role_definition_delete_command_builder {
        this.setFlag("--custom-role-only", value.toString());
        return this;
    }

    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_definition_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_definition_delete_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_definition_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_role_definition_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Custom roles only(vs. build-in ones). */
    customRoleOnly(value: boolean): az_role_definition_list_command_builder {
        this.setFlag("--custom-role-only", value.toString());
        return this;
    }

    /** The role's name. */
    name(value: string): az_role_definition_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_role_definition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Use it only if the role or assignment was added at the level of a resource group. */
    resourceGroup(value: string): az_role_definition_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scope at which the role assignment or definition applies to, e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scope(value: string): az_role_definition_list_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_definition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_role_definition_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, roleDefinition: string) {
        super(commandParent);
        this.roleDefinition(roleDefinition)
    }

    /** Description of an existing role as JSON, or a path to a file containing a JSON description. */
    roleDefinition(value: string): az_role_definition_update_command_builder {
        this.setFlag("--role-definition", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_role_definition_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
