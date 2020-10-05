import { CommandBuilder } from '../base';
import { az_managedservices_assignment_create_command_result } from './models/az_managedservices_assignment_create_command_result'
import { az_managedservices_assignment_delete_command_result } from './models/az_managedservices_assignment_delete_command_result'
import { az_managedservices_assignment_list_command_result } from './models/az_managedservices_assignment_list_command_result'
import { az_managedservices_assignment_show_command_result } from './models/az_managedservices_assignment_show_command_result'
import { az_managedservices_definition_create_command_result } from './models/az_managedservices_definition_create_command_result'
import { az_managedservices_definition_delete_command_result } from './models/az_managedservices_definition_delete_command_result'
import { az_managedservices_definition_list_command_result } from './models/az_managedservices_definition_list_command_result'
import { az_managedservices_definition_show_command_result } from './models/az_managedservices_definition_show_command_result'

/** Manage the registration assignments in Azure. */
export class az_managedservices_assignment {
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
    static create(definition: string): az_managedservices_assignment_create_command_builder {
        return new az_managedservices_assignment_create_command_builder("az managedservices assignment create", 'az_managedservices_assignment_create_command_result', definition);
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
    static delete(assignment: string): az_managedservices_assignment_delete_command_builder {
        return new az_managedservices_assignment_delete_command_builder("az managedservices assignment delete", 'az_managedservices_assignment_delete_command_result', assignment);
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
    static list(): az_managedservices_assignment_list_command_builder {
        return new az_managedservices_assignment_list_command_builder("az managedservices assignment list", 'az_managedservices_assignment_list_command_result');
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
    static show(assignment: string): az_managedservices_assignment_show_command_builder {
        return new az_managedservices_assignment_show_command_builder("az managedservices assignment show", 'az_managedservices_assignment_show_command_result', assignment);
    }
}

/** Manage the registration definitions in Azure. */
export class az_managedservices_definition {
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
    static create(name: string, principalId: string, roleDefinitionId: string, tenantId: string): az_managedservices_definition_create_command_builder {
        return new az_managedservices_definition_create_command_builder("az managedservices definition create", 'az_managedservices_definition_create_command_result', name, principalId, roleDefinitionId, tenantId);
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
    static delete(definition: string): az_managedservices_definition_delete_command_builder {
        return new az_managedservices_definition_delete_command_builder("az managedservices definition delete", 'az_managedservices_definition_delete_command_result', definition);
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
    static list(): az_managedservices_definition_list_command_builder {
        return new az_managedservices_definition_list_command_builder("az managedservices definition list", 'az_managedservices_definition_list_command_result');
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
    static show(definition: string): az_managedservices_definition_show_command_builder {
        return new az_managedservices_definition_show_command_builder("az managedservices definition show", 'az_managedservices_definition_show_command_result', definition);
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
class az_managedservices_assignment_create_command_builder extends CommandBuilder<az_managedservices_assignment_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, definition: string) {
        super(commandPath, resultDataTypeName);
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
class az_managedservices_assignment_delete_command_builder extends CommandBuilder<az_managedservices_assignment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, assignment: string) {
        super(commandPath, resultDataTypeName);
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
class az_managedservices_assignment_list_command_builder extends CommandBuilder<az_managedservices_assignment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
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
class az_managedservices_assignment_show_command_builder extends CommandBuilder<az_managedservices_assignment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, assignment: string) {
        super(commandPath, resultDataTypeName);
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
class az_managedservices_definition_create_command_builder extends CommandBuilder<az_managedservices_definition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, principalId: string, roleDefinitionId: string, tenantId: string) {
        super(commandPath, resultDataTypeName);
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
class az_managedservices_definition_delete_command_builder extends CommandBuilder<az_managedservices_definition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, definition: string) {
        super(commandPath, resultDataTypeName);
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
class az_managedservices_definition_list_command_builder extends CommandBuilder<az_managedservices_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
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
class az_managedservices_definition_show_command_builder extends CommandBuilder<az_managedservices_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, definition: string) {
        super(commandPath, resultDataTypeName);
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
