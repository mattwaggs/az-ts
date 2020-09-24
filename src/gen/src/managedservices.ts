import { CommandBuilder, ICommandParent } from '../base';

/** Manage the registration assignments in Azure. */
export class az_managedservices_assignment implements ICommandParent<any> {
    commandPath = "az managedservices assignment";

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
    az_managedservices_assignment_create(definition: string): az_managedservices_assignment_create_command_builder {
        return new az_managedservices_assignment_create_command_builder(this, definition);
    }

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
    az_managedservices_assignment_delete(assignment: string): az_managedservices_assignment_delete_command_builder {
        return new az_managedservices_assignment_delete_command_builder(this, assignment);
    }

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
    az_managedservices_assignment_list(): az_managedservices_assignment_list_command_builder {
        return new az_managedservices_assignment_list_command_builder(this);
    }

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
    az_managedservices_assignment_show(assignment: string): az_managedservices_assignment_show_command_builder {
        return new az_managedservices_assignment_show_command_builder(this, assignment);
    }
}

/** Manage the registration definitions in Azure. */
export class az_managedservices_definition implements ICommandParent<any> {
    commandPath = "az managedservices definition";

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
    az_managedservices_definition_create(name: string, principalId: string, roleDefinitionId: string, tenantId: string): az_managedservices_definition_create_command_builder {
        return new az_managedservices_definition_create_command_builder(this, name, principalId, roleDefinitionId, tenantId);
    }

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
    az_managedservices_definition_delete(definition: string): az_managedservices_definition_delete_command_builder {
        return new az_managedservices_definition_delete_command_builder(this, definition);
    }

    /**
     * List all the registration definitions under the default scope or under the subscription provided.
     *
     * Syntax:
     * ```
     * az managedservices definition list [--query-examples]
     *                                    [--subscription]
     * ```
     */
    az_managedservices_definition_list(): az_managedservices_definition_list_command_builder {
        return new az_managedservices_definition_list_command_builder(this);
    }

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
    az_managedservices_definition_show(definition: string): az_managedservices_definition_show_command_builder {
        return new az_managedservices_definition_show_command_builder(this, definition);
    }
}

/** Manage the registration assignments and definitions in Azure. */
export class az_managedservices {
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
class az_managedservices_assignment_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, definition: string) {
        super(commandParent);
        this.definition(definition)
    }

    /** The fully qualified resource id of the registration definition. */
    definition(value: string): az_managedservices_assignment_create_command_builder {
        this.setFlag("--definition", value);
        return this;
    }

    /** Can be used to override the generated registration assignment id. */
    assignmentId(value: string): az_managedservices_assignment_create_command_builder {
        this.setFlag("--assignment-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_managedservices_assignment_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedservices_assignment_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_managedservices_assignment_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, assignment: string) {
        super(commandParent);
        this.assignment(assignment)
    }

    /** The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored. */
    assignment(value: string): az_managedservices_assignment_delete_command_builder {
        this.setFlag("--assignment", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_managedservices_assignment_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedservices_assignment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_managedservices_assignment_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** When provided, gets the associated registration definition details. */
    includeDefinition(value: boolean): az_managedservices_assignment_list_command_builder {
        this.setFlag("--include-definition", value.toString());
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_managedservices_assignment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_managedservices_assignment_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedservices_assignment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_managedservices_assignment_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, assignment: string) {
        super(commandParent);
        this.assignment(assignment)
    }

    /** The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored. */
    assignment(value: string): az_managedservices_assignment_show_command_builder {
        this.setFlag("--assignment", value);
        return this;
    }

    /** When provided, gets the associated registration definition details. */
    includeDefinition(value: boolean): az_managedservices_assignment_show_command_builder {
        this.setFlag("--include-definition", value.toString());
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_managedservices_assignment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_managedservices_assignment_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedservices_assignment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_managedservices_definition_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, principalId: string, roleDefinitionId: string, tenantId: string) {
        super(commandParent);
        this.name(name)
        this.principalId(principalId)
        this.roleDefinitionId(roleDefinitionId)
        this.tenantId(tenantId)
    }

    /** The name of the registration definition. */
    name(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The principal id. */
    principalId(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--principal-id", value);
        return this;
    }

    /** The role definition id. */
    roleDefinitionId(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--role-definition-id", value);
        return this;
    }

    /** The managed by tenant id. */
    tenantId(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--tenant-id", value);
        return this;
    }

    /** Can be used to override the generated registration definition id. */
    definitionId(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--definition-id", value);
        return this;
    }

    /** The friendly description. */
    description(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The plan name. */
    planName(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--plan-name", value);
        return this;
    }

    /** The plan product. */
    planProduct(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--plan-product", value);
        return this;
    }

    /** The plan publisher. */
    planPublisher(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--plan-publisher", value);
        return this;
    }

    /** The plan version. */
    planVersion(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--plan-version", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedservices_definition_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_managedservices_definition_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, definition: string) {
        super(commandParent);
        this.definition(definition)
    }

    /** The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored. */
    definition(value: string): az_managedservices_definition_delete_command_builder {
        this.setFlag("--definition", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedservices_definition_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all the registration definitions under the default scope or under the subscription provided.
 *
 * Syntax:
 * ```
 * az managedservices definition list [--query-examples]
 *                                    [--subscription]
 * ```
 */
class az_managedservices_definition_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_managedservices_definition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedservices_definition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_managedservices_definition_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, definition: string) {
        super(commandParent);
        this.definition(definition)
    }

    /** The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored. */
    definition(value: string): az_managedservices_definition_show_command_builder {
        this.setFlag("--definition", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_managedservices_definition_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedservices_definition_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}