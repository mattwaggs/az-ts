import { CommandBuilder } from '../base';
import { az_policy_assignment_identity_assign_command_result } from './models/az_policy_assignment_identity_assign_command_result'
import { az_policy_assignment_identity_remove_command_result } from './models/az_policy_assignment_identity_remove_command_result'
import { az_policy_assignment_identity_show_command_result } from './models/az_policy_assignment_identity_show_command_result'
import { az_policy_assignment_create_command_result } from './models/az_policy_assignment_create_command_result'
import { az_policy_assignment_delete_command_result } from './models/az_policy_assignment_delete_command_result'
import { az_policy_assignment_list_command_result } from './models/az_policy_assignment_list_command_result'
import { az_policy_assignment_show_command_result } from './models/az_policy_assignment_show_command_result'
import { az_policy_definition_create_command_result } from './models/az_policy_definition_create_command_result'
import { az_policy_definition_delete_command_result } from './models/az_policy_definition_delete_command_result'
import { az_policy_definition_list_command_result } from './models/az_policy_definition_list_command_result'
import { az_policy_definition_show_command_result } from './models/az_policy_definition_show_command_result'
import { az_policy_definition_update_command_result } from './models/az_policy_definition_update_command_result'
import { az_policy_event_list_command_result } from './models/az_policy_event_list_command_result'
import { az_policy_metadata_list_command_result } from './models/az_policy_metadata_list_command_result'
import { az_policy_metadata_show_command_result } from './models/az_policy_metadata_show_command_result'
import { az_policy_remediation_deployment_list_command_result } from './models/az_policy_remediation_deployment_list_command_result'
import { az_policy_remediation_cancel_command_result } from './models/az_policy_remediation_cancel_command_result'
import { az_policy_remediation_create_command_result } from './models/az_policy_remediation_create_command_result'
import { az_policy_remediation_delete_command_result } from './models/az_policy_remediation_delete_command_result'
import { az_policy_remediation_list_command_result } from './models/az_policy_remediation_list_command_result'
import { az_policy_remediation_show_command_result } from './models/az_policy_remediation_show_command_result'
import { az_policy_set_definition_create_command_result } from './models/az_policy_set_definition_create_command_result'
import { az_policy_set_definition_delete_command_result } from './models/az_policy_set_definition_delete_command_result'
import { az_policy_set_definition_list_command_result } from './models/az_policy_set_definition_list_command_result'
import { az_policy_set_definition_show_command_result } from './models/az_policy_set_definition_show_command_result'
import { az_policy_set_definition_update_command_result } from './models/az_policy_set_definition_update_command_result'
import { az_policy_state_list_command_result } from './models/az_policy_state_list_command_result'
import { az_policy_state_summarize_command_result } from './models/az_policy_state_summarize_command_result'
import { az_policy_state_trigger_scan_command_result } from './models/az_policy_state_trigger_scan_command_result'

/** Manage a policy assignment's managed identity. */
export class az_policy_assignment_identity {
    /**
     * Add a system assigned identity to a policy assignment.
     *
     * Syntax:
     * ```
     * az policy assignment identity assign --name
     *                                      [--identity-scope]
     *                                      [--resource-group]
     *                                      [--role]
     *                                      [--scope]
     * ```
     *
     * @param {string} name Name of the policy assignment.
     */
    static assign(name: string): az_policy_assignment_identity_assign_command_builder {
        return new az_policy_assignment_identity_assign_command_builder("az policy assignment identity assign", 'az_policy_assignment_identity_assign_command_result', name);
    }

    /**
     * Remove a managed identity from a policy assignment.
     *
     * Syntax:
     * ```
     * az policy assignment identity remove --name
     *                                      [--resource-group]
     *                                      [--scope]
     * ```
     *
     * @param {string} name Name of the policy assignment.
     */
    static remove(name: string): az_policy_assignment_identity_remove_command_builder {
        return new az_policy_assignment_identity_remove_command_builder("az policy assignment identity remove", 'az_policy_assignment_identity_remove_command_result', name);
    }

    /**
     * Show a policy assignment's managed identity.
     *
     * Syntax:
     * ```
     * az policy assignment identity show --name
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--scope]
     * ```
     *
     * @param {string} name Name of the policy assignment.
     */
    static show(name: string): az_policy_assignment_identity_show_command_builder {
        return new az_policy_assignment_identity_show_command_builder("az policy assignment identity show", 'az_policy_assignment_identity_show_command_result', name);
    }
}

/** Manage resource policy assignments. */
export class az_policy_assignment {
    /**
     * Create a resource policy assignment.
     *
     * Syntax:
     * ```
     * az policy assignment create [--assign-identity]
     *                             [--display-name]
     *                             [--enforcement-mode {Default, DoNotEnforce}]
     *                             [--identity-scope]
     *                             [--location]
     *                             [--name]
     *                             [--not-scopes]
     *                             [--params]
     *                             [--policy]
     *                             [--policy-set-definition]
     *                             [--resource-group]
     *                             [--role]
     *                             [--scope]
     *                             [--sku {free, standard}]
     * ```
     */
    static create(): az_policy_assignment_create_command_builder {
        return new az_policy_assignment_create_command_builder("az policy assignment create", 'az_policy_assignment_create_command_result');
    }

    /**
     * Delete a resource policy assignment.
     *
     * Syntax:
     * ```
     * az policy assignment delete --name
     *                             [--resource-group]
     *                             [--scope]
     * ```
     *
     * @param {string} name Name of the policy assignment.
     */
    static delete(name: string): az_policy_assignment_delete_command_builder {
        return new az_policy_assignment_delete_command_builder("az policy assignment delete", 'az_policy_assignment_delete_command_result', name);
    }

    /**
     * List resource policy assignments.
     *
     * Syntax:
     * ```
     * az policy assignment list [--disable-scope-strict-match]
     *                           [--query-examples]
     *                           [--resource-group]
     *                           [--scope]
     * ```
     */
    static list(): az_policy_assignment_list_command_builder {
        return new az_policy_assignment_list_command_builder("az policy assignment list", 'az_policy_assignment_list_command_result');
    }

    /**
     * Show a resource policy assignment.
     *
     * Syntax:
     * ```
     * az policy assignment show --name
     *                           [--query-examples]
     *                           [--resource-group]
     *                           [--scope]
     * ```
     *
     * @param {string} name Name of the policy assignment.
     */
    static show(name: string): az_policy_assignment_show_command_builder {
        return new az_policy_assignment_show_command_builder("az policy assignment show", 'az_policy_assignment_show_command_result', name);
    }
}

/** Manage resource policy definitions. */
export class az_policy_definition {
    /**
     * Create a policy definition.
     *
     * Syntax:
     * ```
     * az policy definition create --name
     *                             [--description]
     *                             [--display-name]
     *                             [--management-group]
     *                             [--metadata]
     *                             [--mode]
     *                             [--params]
     *                             [--rules]
     *                             [--subscription]
     * ```
     *
     * @param {string} name Name of the new policy definition.
     */
    static create(name: string): az_policy_definition_create_command_builder {
        return new az_policy_definition_create_command_builder("az policy definition create", 'az_policy_definition_create_command_result', name);
    }

    /**
     * Delete a policy definition.
     *
     * Syntax:
     * ```
     * az policy definition delete --name
     *                             [--management-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} name The policy definition name.
     */
    static delete(name: string): az_policy_definition_delete_command_builder {
        return new az_policy_definition_delete_command_builder("az policy definition delete", 'az_policy_definition_delete_command_result', name);
    }

    /**
     * List policy definitions.
     *
     * Syntax:
     * ```
     * az policy definition list [--management-group]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     */
    static list(): az_policy_definition_list_command_builder {
        return new az_policy_definition_list_command_builder("az policy definition list", 'az_policy_definition_list_command_result');
    }

    /**
     * Show a policy definition.
     *
     * Syntax:
     * ```
     * az policy definition show --name
     *                           [--management-group]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The policy definition name.
     */
    static show(name: string): az_policy_definition_show_command_builder {
        return new az_policy_definition_show_command_builder("az policy definition show", 'az_policy_definition_show_command_result', name);
    }

    /**
     * Update a policy definition.
     *
     * Syntax:
     * ```
     * az policy definition update --name
     *                             [--description]
     *                             [--display-name]
     *                             [--management-group]
     *                             [--metadata]
     *                             [--mode]
     *                             [--params]
     *                             [--rules]
     *                             [--subscription]
     * ```
     *
     * @param {string} name The policy definition name.
     */
    static update(name: string): az_policy_definition_update_command_builder {
        return new az_policy_definition_update_command_builder("az policy definition update", 'az_policy_definition_update_command_result', name);
    }
}

/** Manage policy events. */
export class az_policy_event {
    /**
     * List policy events.
     *
     * Syntax:
     * ```
     * az policy event list [--apply]
     *                      [--filter]
     *                      [--from]
     *                      [--management-group]
     *                      [--namespace]
     *                      [--order-by]
     *                      [--parent]
     *                      [--policy-assignment]
     *                      [--policy-definition]
     *                      [--policy-set-definition]
     *                      [--query-examples]
     *                      [--resource]
     *                      [--resource-group]
     *                      [--resource-type]
     *                      [--select]
     *                      [--subscription]
     *                      [--to]
     *                      [--top]
     * ```
     */
    static list(): az_policy_event_list_command_builder {
        return new az_policy_event_list_command_builder("az policy event list", 'az_policy_event_list_command_result');
    }
}

/** Get policy metadata resources. */
export class az_policy_metadata {
    /**
     * List policy metadata resources.
     *
     * Syntax:
     * ```
     * az policy metadata list [--query-examples]
     *                         [--subscription]
     *                         [--top]
     * ```
     */
    static list(): az_policy_metadata_list_command_builder {
        return new az_policy_metadata_list_command_builder("az policy metadata list", 'az_policy_metadata_list_command_result');
    }

    /**
     * Get a single policy metadata resource.
     *
     * Syntax:
     * ```
     * az policy metadata show --name
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The name of the metadata resource.
     */
    static show(name: string): az_policy_metadata_show_command_builder {
        return new az_policy_metadata_show_command_builder("az policy metadata show", 'az_policy_metadata_show_command_result', name);
    }
}

/** Manage resource policy remediation deployments. */
export class az_policy_remediation_deployment {
    /**
     * Lists deployments for a resource policy remediation.
     *
     * Syntax:
     * ```
     * az policy remediation deployment list --name
     *                                       [--management-group]
     *                                       [--namespace]
     *                                       [--parent]
     *                                       [--query-examples]
     *                                       [--resource]
     *                                       [--resource-group]
     *                                       [--resource-type]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name Name of the remediation.
     */
    static list(name: string): az_policy_remediation_deployment_list_command_builder {
        return new az_policy_remediation_deployment_list_command_builder("az policy remediation deployment list", 'az_policy_remediation_deployment_list_command_result', name);
    }
}

/** Manage resource policy remediations. */
export class az_policy_remediation {
    /**
     * Cancel a resource policy remediation.
     *
     * Syntax:
     * ```
     * az policy remediation cancel --name
     *                              [--management-group]
     *                              [--namespace]
     *                              [--parent]
     *                              [--resource]
     *                              [--resource-group]
     *                              [--resource-type]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the remediation.
     */
    static cancel(name: string): az_policy_remediation_cancel_command_builder {
        return new az_policy_remediation_cancel_command_builder("az policy remediation cancel", 'az_policy_remediation_cancel_command_result', name);
    }

    /**
     * Create a resource policy remediation.
     *
     * Syntax:
     * ```
     * az policy remediation create --name
     *                              --policy-assignment
     *                              [--definition-reference-id]
     *                              [--location-filters]
     *                              [--management-group]
     *                              [--namespace]
     *                              [--parent]
     *                              [--resource]
     *                              [--resource-discovery-mode {ExistingNonCompliant, ReEvaluateCompliance}]
     *                              [--resource-group]
     *                              [--resource-type]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the remediation.
     * @param {string} policyAssignment Name or resource ID of the policy assignment.
     */
    static create(name: string, policyAssignment: string): az_policy_remediation_create_command_builder {
        return new az_policy_remediation_create_command_builder("az policy remediation create", 'az_policy_remediation_create_command_result', name, policyAssignment);
    }

    /**
     * Delete a resource policy remediation.
     *
     * Syntax:
     * ```
     * az policy remediation delete --name
     *                              [--management-group]
     *                              [--namespace]
     *                              [--parent]
     *                              [--resource]
     *                              [--resource-group]
     *                              [--resource-type]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the remediation.
     */
    static delete(name: string): az_policy_remediation_delete_command_builder {
        return new az_policy_remediation_delete_command_builder("az policy remediation delete", 'az_policy_remediation_delete_command_result', name);
    }

    /**
     * List resource policy remediations.
     *
     * Syntax:
     * ```
     * az policy remediation list [--management-group]
     *                            [--namespace]
     *                            [--parent]
     *                            [--query-examples]
     *                            [--resource]
     *                            [--resource-group]
     *                            [--resource-type]
     *                            [--subscription]
     * ```
     */
    static list(): az_policy_remediation_list_command_builder {
        return new az_policy_remediation_list_command_builder("az policy remediation list", 'az_policy_remediation_list_command_result');
    }

    /**
     * Show a resource policy remediation.
     *
     * Syntax:
     * ```
     * az policy remediation show --name
     *                            [--management-group]
     *                            [--namespace]
     *                            [--parent]
     *                            [--query-examples]
     *                            [--resource]
     *                            [--resource-group]
     *                            [--resource-type]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of the remediation.
     */
    static show(name: string): az_policy_remediation_show_command_builder {
        return new az_policy_remediation_show_command_builder("az policy remediation show", 'az_policy_remediation_show_command_result', name);
    }
}

/** Manage resource policy set definitions. */
export class az_policy_set_definition {
    /**
     * Create a policy set definition.
     *
     * Syntax:
     * ```
     * az policy set-definition create --definitions
     *                                 --name
     *                                 [--definition-groups]
     *                                 [--description]
     *                                 [--display-name]
     *                                 [--management-group]
     *                                 [--metadata]
     *                                 [--params]
     *                                 [--subscription]
     * ```
     *
     * @param {string} definitions Policy definitions in JSON format, or a path to a file or URI containing JSON rules.
     * @param {string} name Name of the new policy set definition.
     */
    static create(definitions: string, name: string): az_policy_set_definition_create_command_builder {
        return new az_policy_set_definition_create_command_builder("az policy set-definition create", 'az_policy_set_definition_create_command_result', definitions, name);
    }

    /**
     * Delete a policy set definition.
     *
     * Syntax:
     * ```
     * az policy set-definition delete --name
     *                                 [--management-group]
     *                                 [--subscription]
     * ```
     *
     * @param {string} name The policy set definition name.
     */
    static delete(name: string): az_policy_set_definition_delete_command_builder {
        return new az_policy_set_definition_delete_command_builder("az policy set-definition delete", 'az_policy_set_definition_delete_command_result', name);
    }

    /**
     * List policy set definitions.
     *
     * Syntax:
     * ```
     * az policy set-definition list [--management-group]
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     */
    static list(): az_policy_set_definition_list_command_builder {
        return new az_policy_set_definition_list_command_builder("az policy set-definition list", 'az_policy_set_definition_list_command_result');
    }

    /**
     * Show a policy set definition.
     *
     * Syntax:
     * ```
     * az policy set-definition show --name
     *                               [--management-group]
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} name The policy set definition name.
     */
    static show(name: string): az_policy_set_definition_show_command_builder {
        return new az_policy_set_definition_show_command_builder("az policy set-definition show", 'az_policy_set_definition_show_command_result', name);
    }

    /**
     * Update a policy set definition.
     *
     * Syntax:
     * ```
     * az policy set-definition update --name
     *                                 [--definition-groups]
     *                                 [--definitions]
     *                                 [--description]
     *                                 [--display-name]
     *                                 [--management-group]
     *                                 [--metadata]
     *                                 [--params]
     *                                 [--subscription]
     * ```
     *
     * @param {string} name The policy set definition name.
     */
    static update(name: string): az_policy_set_definition_update_command_builder {
        return new az_policy_set_definition_update_command_builder("az policy set-definition update", 'az_policy_set_definition_update_command_result', name);
    }
}

/** Manage policy compliance states. */
export class az_policy_state {
    /**
     * List policy compliance states.
     *
     * Syntax:
     * ```
     * az policy state list [--all]
     *                      [--apply]
     *                      [--expand]
     *                      [--filter]
     *                      [--from]
     *                      [--management-group]
     *                      [--namespace]
     *                      [--order-by]
     *                      [--parent]
     *                      [--policy-assignment]
     *                      [--policy-definition]
     *                      [--policy-set-definition]
     *                      [--query-examples]
     *                      [--resource]
     *                      [--resource-group]
     *                      [--resource-type]
     *                      [--select]
     *                      [--subscription]
     *                      [--to]
     *                      [--top]
     * ```
     */
    static list(): az_policy_state_list_command_builder {
        return new az_policy_state_list_command_builder("az policy state list", 'az_policy_state_list_command_result');
    }

    /**
     * Summarize policy compliance states.
     *
     * Syntax:
     * ```
     * az policy state summarize [--filter]
     *                           [--from]
     *                           [--management-group]
     *                           [--namespace]
     *                           [--parent]
     *                           [--policy-assignment]
     *                           [--policy-definition]
     *                           [--policy-set-definition]
     *                           [--resource]
     *                           [--resource-group]
     *                           [--resource-type]
     *                           [--subscription]
     *                           [--to]
     *                           [--top]
     * ```
     */
    static summarize(): az_policy_state_summarize_command_builder {
        return new az_policy_state_summarize_command_builder("az policy state summarize", 'az_policy_state_summarize_command_result');
    }

    /**
     * Trigger a policy compliance evaluation for a scope.
     *
     * Syntax:
     * ```
     * az policy state trigger-scan [--no-wait]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    static trigger_scan(): az_policy_state_trigger_scan_command_builder {
        return new az_policy_state_trigger_scan_command_builder("az policy state trigger-scan", 'az_policy_state_trigger_scan_command_result');
    }
}

/** Manage resource policies. */
export class az_policy {
}

/**
 * Add a system assigned identity to a policy assignment.
 *
 * Syntax:
 * ```
 * az policy assignment identity assign --name
 *                                      [--identity-scope]
 *                                      [--resource-group]
 *                                      [--role]
 *                                      [--scope]
 * ```
 *
 * @param {string} name Name of the policy assignment.
 */
class az_policy_assignment_identity_assign_command_builder extends CommandBuilder<az_policy_assignment_identity_assign_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_identity_assign_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Scope that the system assigned identity can access. */
    identityScope(value: string): az_policy_assignment_identity_assign_command_builder {
        this.setFlag("--identity-scope", value);
        return this;
    }

    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_identity_assign_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Role name or id that will be assigned to the managed identity. */
    role(value: string): az_policy_assignment_identity_assign_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_identity_assign_command_builder {
        this.setFlag("--scope", value);
        return this;
    }
}

/**
 * Remove a managed identity from a policy assignment.
 *
 * Syntax:
 * ```
 * az policy assignment identity remove --name
 *                                      [--resource-group]
 *                                      [--scope]
 * ```
 *
 * @param {string} name Name of the policy assignment.
 */
class az_policy_assignment_identity_remove_command_builder extends CommandBuilder<az_policy_assignment_identity_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_identity_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_identity_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_identity_remove_command_builder {
        this.setFlag("--scope", value);
        return this;
    }
}

/**
 * Show a policy assignment's managed identity.
 *
 * Syntax:
 * ```
 * az policy assignment identity show --name
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--scope]
 * ```
 *
 * @param {string} name Name of the policy assignment.
 */
class az_policy_assignment_identity_show_command_builder extends CommandBuilder<az_policy_assignment_identity_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_identity_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_assignment_identity_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_identity_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_identity_show_command_builder {
        this.setFlag("--scope", value);
        return this;
    }
}

/**
 * Create a resource policy assignment.
 *
 * Syntax:
 * ```
 * az policy assignment create [--assign-identity]
 *                             [--display-name]
 *                             [--enforcement-mode {Default, DoNotEnforce}]
 *                             [--identity-scope]
 *                             [--location]
 *                             [--name]
 *                             [--not-scopes]
 *                             [--params]
 *                             [--policy]
 *                             [--policy-set-definition]
 *                             [--resource-group]
 *                             [--role]
 *                             [--scope]
 *                             [--sku {free, standard}]
 * ```
 */
class az_policy_assignment_create_command_builder extends CommandBuilder<az_policy_assignment_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Assigns a system assigned identity to the policy assignment. */
    assignIdentity(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** Display name of the policy assignment. */
    displayName(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Enforcement mode of the policy assignment, e.g. Default, DoNotEnforce. Please visit <a href="https://aka.ms/azure-policyAssignment-enforcement-mode">https://aka.ms/azure-policyAssignment-enforcement-mode</a> for more information. */
    enforcementMode(value: 'Default' | 'DoNotEnforce'): az_policy_assignment_create_command_builder {
        this.setFlag("--enforcement-mode", value);
        return this;
    }

    /** Scope that the system assigned identity can access. */
    identityScope(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--identity-scope", value);
        return this;
    }

    /** The location of the policy assignment. Only required when utilizing managed identity. */
    location(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the new policy assignment. */
    name(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Space-separated scopes where the policy assignment does not apply. */
    notScopes(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--not-scopes", value);
        return this;
    }

    /** JSON formatted string or a path to a file or uri with parameter values of the policy rule. */
    params(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--params", value);
        return this;
    }

    /** Name or id of the policy definition. */
    policy(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--policy", value);
        return this;
    }

    /** Name or id of the policy set definition. */
    policySetDefinition(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--policy-set-definition", value);
        return this;
    }

    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Role name or id that will be assigned to the managed identity. */
    role(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_create_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Policy sku. */
    sku(value: 'free' | 'standard'): az_policy_assignment_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }
}

/**
 * Delete a resource policy assignment.
 *
 * Syntax:
 * ```
 * az policy assignment delete --name
 *                             [--resource-group]
 *                             [--scope]
 * ```
 *
 * @param {string} name Name of the policy assignment.
 */
class az_policy_assignment_delete_command_builder extends CommandBuilder<az_policy_assignment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_delete_command_builder {
        this.setFlag("--scope", value);
        return this;
    }
}

/**
 * List resource policy assignments.
 *
 * Syntax:
 * ```
 * az policy assignment list [--disable-scope-strict-match]
 *                           [--query-examples]
 *                           [--resource-group]
 *                           [--scope]
 * ```
 */
class az_policy_assignment_list_command_builder extends CommandBuilder<az_policy_assignment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Include policy assignments either inherited from parent scope or at child scope. */
    disableScopeStrictMatch(value: string): az_policy_assignment_list_command_builder {
        this.setFlag("--disable-scope-strict-match", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_assignment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_list_command_builder {
        this.setFlag("--scope", value);
        return this;
    }
}

/**
 * Show a resource policy assignment.
 *
 * Syntax:
 * ```
 * az policy assignment show --name
 *                           [--query-examples]
 *                           [--resource-group]
 *                           [--scope]
 * ```
 *
 * @param {string} name Name of the policy assignment.
 */
class az_policy_assignment_show_command_builder extends CommandBuilder<az_policy_assignment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_assignment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_show_command_builder {
        this.setFlag("--scope", value);
        return this;
    }
}

/**
 * Create a policy definition.
 *
 * Syntax:
 * ```
 * az policy definition create --name
 *                             [--description]
 *                             [--display-name]
 *                             [--management-group]
 *                             [--metadata]
 *                             [--mode]
 *                             [--params]
 *                             [--rules]
 *                             [--subscription]
 * ```
 *
 * @param {string} name Name of the new policy definition.
 */
class az_policy_definition_create_command_builder extends CommandBuilder<az_policy_definition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the new policy definition. */
    name(value: string): az_policy_definition_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Description of policy definition. */
    description(value: string): az_policy_definition_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Display name of policy definition. */
    displayName(value: string): az_policy_definition_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Name of the management group the new policy definition can be assigned in. */
    managementGroup(value: string): az_policy_definition_create_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Metadata in space-separated key=value pairs. */
    metadata(value: string): az_policy_definition_create_command_builder {
        this.setFlag("--metadata", value);
        return this;
    }

    /** Mode of the policy definition, e.g. All, Indexed. Please visit <a href="https://aka.ms/azure-policy-mode">https://aka.ms/azure-policy-mode</a> for more information. */
    mode(value: string): az_policy_definition_create_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    params(value: string): az_policy_definition_create_command_builder {
        this.setFlag("--params", value);
        return this;
    }

    /** Policy rules in JSON format, or a path to a file containing JSON rules. */
    rules(value: string): az_policy_definition_create_command_builder {
        this.setFlag("--rules", value);
        return this;
    }

    /** Name or id of the subscription the new policy definition can be assigned in. */
    subscription(value: string): az_policy_definition_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a policy definition.
 *
 * Syntax:
 * ```
 * az policy definition delete --name
 *                             [--management-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} name The policy definition name.
 */
class az_policy_definition_delete_command_builder extends CommandBuilder<az_policy_definition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The policy definition name. */
    name(value: string): az_policy_definition_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_definition_delete_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_definition_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List policy definitions.
 *
 * Syntax:
 * ```
 * az policy definition list [--management-group]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 */
class az_policy_definition_list_command_builder extends CommandBuilder<az_policy_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_definition_list_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_definition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_definition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a policy definition.
 *
 * Syntax:
 * ```
 * az policy definition show --name
 *                           [--management-group]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The policy definition name.
 */
class az_policy_definition_show_command_builder extends CommandBuilder<az_policy_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The policy definition name. */
    name(value: string): az_policy_definition_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_definition_show_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_definition_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_definition_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update a policy definition.
 *
 * Syntax:
 * ```
 * az policy definition update --name
 *                             [--description]
 *                             [--display-name]
 *                             [--management-group]
 *                             [--metadata]
 *                             [--mode]
 *                             [--params]
 *                             [--rules]
 *                             [--subscription]
 * ```
 *
 * @param {string} name The policy definition name.
 */
class az_policy_definition_update_command_builder extends CommandBuilder<az_policy_definition_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The policy definition name. */
    name(value: string): az_policy_definition_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Description of policy definition. */
    description(value: string): az_policy_definition_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Display name of policy definition. */
    displayName(value: string): az_policy_definition_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_definition_update_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Metadata in space-separated key=value pairs. */
    metadata(value: string): az_policy_definition_update_command_builder {
        this.setFlag("--metadata", value);
        return this;
    }

    /** Mode of the policy definition, e.g. All, Indexed. Please visit <a href="https://aka.ms/azure-policy-mode">https://aka.ms/azure-policy-mode</a> for more information. */
    mode(value: string): az_policy_definition_update_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    params(value: string): az_policy_definition_update_command_builder {
        this.setFlag("--params", value);
        return this;
    }

    /** JSON formatted string or a path to a file with such content. */
    rules(value: string): az_policy_definition_update_command_builder {
        this.setFlag("--rules", value);
        return this;
    }

    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_definition_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List policy events.
 *
 * Syntax:
 * ```
 * az policy event list [--apply]
 *                      [--filter]
 *                      [--from]
 *                      [--management-group]
 *                      [--namespace]
 *                      [--order-by]
 *                      [--parent]
 *                      [--policy-assignment]
 *                      [--policy-definition]
 *                      [--policy-set-definition]
 *                      [--query-examples]
 *                      [--resource]
 *                      [--resource-group]
 *                      [--resource-type]
 *                      [--select]
 *                      [--subscription]
 *                      [--to]
 *                      [--top]
 * ```
 */
class az_policy_event_list_command_builder extends CommandBuilder<az_policy_event_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Apply expression for aggregations using OData notation. */
    apply(value: string): az_policy_event_list_command_builder {
        this.setFlag("--apply", value);
        return this;
    }

    /** Filter expression using OData notation. */
    filter(value: string): az_policy_event_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** ISO 8601 formatted timestamp specifying the start time of the interval to query. */
    from(value: string): az_policy_event_list_command_builder {
        this.setFlag("--from", value);
        return this;
    }

    /** Name of management group. */
    managementGroup(value: string): az_policy_event_list_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_event_list_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Ordering expression using OData notation. */
    orderBy(value: string): az_policy_event_list_command_builder {
        this.setFlag("--order-by", value);
        return this;
    }

    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_event_list_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name of policy assignment. */
    policyAssignment(value: string): az_policy_event_list_command_builder {
        this.setFlag("--policy-assignment", value);
        return this;
    }

    /** Name of policy definition. */
    policyDefinition(value: string): az_policy_event_list_command_builder {
        this.setFlag("--policy-definition", value);
        return this;
    }

    /** Name of policy set definition. */
    policySetDefinition(value: string): az_policy_event_list_command_builder {
        this.setFlag("--policy-set-definition", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_event_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_event_list_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_event_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_event_list_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Select expression using OData notation. */
    select(value: string): az_policy_event_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_event_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** ISO 8601 formatted timestamp specifying the end time of the interval to query. */
    to(value: string): az_policy_event_list_command_builder {
        this.setFlag("--to", value);
        return this;
    }

    /** Maximum number of records to return. */
    top(value: string): az_policy_event_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * List policy metadata resources.
 *
 * Syntax:
 * ```
 * az policy metadata list [--query-examples]
 *                         [--subscription]
 *                         [--top]
 * ```
 */
class az_policy_metadata_list_command_builder extends CommandBuilder<az_policy_metadata_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_metadata_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_metadata_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of records to return. */
    top(value: string): az_policy_metadata_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Get a single policy metadata resource.
 *
 * Syntax:
 * ```
 * az policy metadata show --name
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The name of the metadata resource.
 */
class az_policy_metadata_show_command_builder extends CommandBuilder<az_policy_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The name of the metadata resource. */
    name(value: string): az_policy_metadata_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_metadata_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_metadata_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists deployments for a resource policy remediation.
 *
 * Syntax:
 * ```
 * az policy remediation deployment list --name
 *                                       [--management-group]
 *                                       [--namespace]
 *                                       [--parent]
 *                                       [--query-examples]
 *                                       [--resource]
 *                                       [--resource-group]
 *                                       [--resource-type]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name Name of the remediation.
 */
class az_policy_remediation_deployment_list_command_builder extends CommandBuilder<az_policy_remediation_deployment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the remediation. */
    name(value: string): az_policy_remediation_deployment_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_deployment_list_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_deployment_list_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_deployment_list_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_remediation_deployment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_deployment_list_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_deployment_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_deployment_list_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_deployment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Cancel a resource policy remediation.
 *
 * Syntax:
 * ```
 * az policy remediation cancel --name
 *                              [--management-group]
 *                              [--namespace]
 *                              [--parent]
 *                              [--resource]
 *                              [--resource-group]
 *                              [--resource-type]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the remediation.
 */
class az_policy_remediation_cancel_command_builder extends CommandBuilder<az_policy_remediation_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the remediation. */
    name(value: string): az_policy_remediation_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_cancel_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_cancel_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_cancel_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_cancel_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_cancel_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_cancel_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a resource policy remediation.
 *
 * Syntax:
 * ```
 * az policy remediation create --name
 *                              --policy-assignment
 *                              [--definition-reference-id]
 *                              [--location-filters]
 *                              [--management-group]
 *                              [--namespace]
 *                              [--parent]
 *                              [--resource]
 *                              [--resource-discovery-mode {ExistingNonCompliant, ReEvaluateCompliance}]
 *                              [--resource-group]
 *                              [--resource-type]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the remediation.
 * @param {string} policyAssignment Name or resource ID of the policy assignment.
 */
class az_policy_remediation_create_command_builder extends CommandBuilder<az_policy_remediation_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, policyAssignment: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.policyAssignment(policyAssignment)
    }

    /** Name of the remediation. */
    name(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or resource ID of the policy assignment. */
    policyAssignment(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--policy-assignment", value);
        return this;
    }

    /** Policy definition reference ID inside the policy set definition. Only required when the policy assignment is assigning a policy set definition. */
    definitionReferenceId(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--definition-reference-id", value);
        return this;
    }

    /** Space separated list of resource locations that should be remediated (Ex: centralus westeurope). */
    locationFilters(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--location-filters", value);
        return this;
    }

    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified. */
    resourceDiscoveryMode(value: 'ExistingNonCompliant' | 'ReEvaluateCompliance'): az_policy_remediation_create_command_builder {
        this.setFlag("--resource-discovery-mode", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a resource policy remediation.
 *
 * Syntax:
 * ```
 * az policy remediation delete --name
 *                              [--management-group]
 *                              [--namespace]
 *                              [--parent]
 *                              [--resource]
 *                              [--resource-group]
 *                              [--resource-type]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the remediation.
 */
class az_policy_remediation_delete_command_builder extends CommandBuilder<az_policy_remediation_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the remediation. */
    name(value: string): az_policy_remediation_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_delete_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_delete_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_delete_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_delete_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_delete_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List resource policy remediations.
 *
 * Syntax:
 * ```
 * az policy remediation list [--management-group]
 *                            [--namespace]
 *                            [--parent]
 *                            [--query-examples]
 *                            [--resource]
 *                            [--resource-group]
 *                            [--resource-type]
 *                            [--subscription]
 * ```
 */
class az_policy_remediation_list_command_builder extends CommandBuilder<az_policy_remediation_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_list_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_list_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_list_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_remediation_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_list_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_list_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a resource policy remediation.
 *
 * Syntax:
 * ```
 * az policy remediation show --name
 *                            [--management-group]
 *                            [--namespace]
 *                            [--parent]
 *                            [--query-examples]
 *                            [--resource]
 *                            [--resource-group]
 *                            [--resource-type]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of the remediation.
 */
class az_policy_remediation_show_command_builder extends CommandBuilder<az_policy_remediation_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the remediation. */
    name(value: string): az_policy_remediation_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_show_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_show_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_show_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_remediation_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_show_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_show_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a policy set definition.
 *
 * Syntax:
 * ```
 * az policy set-definition create --definitions
 *                                 --name
 *                                 [--definition-groups]
 *                                 [--description]
 *                                 [--display-name]
 *                                 [--management-group]
 *                                 [--metadata]
 *                                 [--params]
 *                                 [--subscription]
 * ```
 *
 * @param {string} definitions Policy definitions in JSON format, or a path to a file or URI containing JSON rules.
 * @param {string} name Name of the new policy set definition.
 */
class az_policy_set_definition_create_command_builder extends CommandBuilder<az_policy_set_definition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, definitions: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.definitions(definitions)
        this.name(name)
    }

    /** Policy definitions in JSON format, or a path to a file or URI containing JSON rules. */
    definitions(value: string): az_policy_set_definition_create_command_builder {
        this.setFlag("--definitions", value);
        return this;
    }

    /** Name of the new policy set definition. */
    name(value: string): az_policy_set_definition_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** JSON formatted string or a path to a file or uri containing policy definition groups. Groups are used to organize policy definitions within a policy set. */
    definitionGroups(value: string): az_policy_set_definition_create_command_builder {
        this.setFlag("--definition-groups", value);
        return this;
    }

    /** Description of policy set definition. */
    description(value: string): az_policy_set_definition_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Display name of policy set definition. */
    displayName(value: string): az_policy_set_definition_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Name of management group the new policy set definition can be assigned in. */
    managementGroup(value: string): az_policy_set_definition_create_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Metadata in space-separated key=value pairs. */
    metadata(value: string): az_policy_set_definition_create_command_builder {
        this.setFlag("--metadata", value);
        return this;
    }

    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    params(value: string): az_policy_set_definition_create_command_builder {
        this.setFlag("--params", value);
        return this;
    }

    /** Name or id of the subscription the new policy set definition can be assigned in. */
    subscription(value: string): az_policy_set_definition_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a policy set definition.
 *
 * Syntax:
 * ```
 * az policy set-definition delete --name
 *                                 [--management-group]
 *                                 [--subscription]
 * ```
 *
 * @param {string} name The policy set definition name.
 */
class az_policy_set_definition_delete_command_builder extends CommandBuilder<az_policy_set_definition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The policy set definition name. */
    name(value: string): az_policy_set_definition_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_set_definition_delete_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_set_definition_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List policy set definitions.
 *
 * Syntax:
 * ```
 * az policy set-definition list [--management-group]
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 */
class az_policy_set_definition_list_command_builder extends CommandBuilder<az_policy_set_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_set_definition_list_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_set_definition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_set_definition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a policy set definition.
 *
 * Syntax:
 * ```
 * az policy set-definition show --name
 *                               [--management-group]
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} name The policy set definition name.
 */
class az_policy_set_definition_show_command_builder extends CommandBuilder<az_policy_set_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The policy set definition name. */
    name(value: string): az_policy_set_definition_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_set_definition_show_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_set_definition_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_set_definition_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update a policy set definition.
 *
 * Syntax:
 * ```
 * az policy set-definition update --name
 *                                 [--definition-groups]
 *                                 [--definitions]
 *                                 [--description]
 *                                 [--display-name]
 *                                 [--management-group]
 *                                 [--metadata]
 *                                 [--params]
 *                                 [--subscription]
 * ```
 *
 * @param {string} name The policy set definition name.
 */
class az_policy_set_definition_update_command_builder extends CommandBuilder<az_policy_set_definition_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The policy set definition name. */
    name(value: string): az_policy_set_definition_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** JSON formatted string or a path to a file or uri containing policy definition groups. Groups are used to organize policy definitions within a policy set. */
    definitionGroups(value: string): az_policy_set_definition_update_command_builder {
        this.setFlag("--definition-groups", value);
        return this;
    }

    /** JSON formatted string or a path to a file or uri containing definitions. */
    definitions(value: string): az_policy_set_definition_update_command_builder {
        this.setFlag("--definitions", value);
        return this;
    }

    /** Description of policy set definition. */
    description(value: string): az_policy_set_definition_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Display name of policy set definition. */
    displayName(value: string): az_policy_set_definition_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_set_definition_update_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Metadata in space-separated key=value pairs. */
    metadata(value: string): az_policy_set_definition_update_command_builder {
        this.setFlag("--metadata", value);
        return this;
    }

    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    params(value: string): az_policy_set_definition_update_command_builder {
        this.setFlag("--params", value);
        return this;
    }

    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_set_definition_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List policy compliance states.
 *
 * Syntax:
 * ```
 * az policy state list [--all]
 *                      [--apply]
 *                      [--expand]
 *                      [--filter]
 *                      [--from]
 *                      [--management-group]
 *                      [--namespace]
 *                      [--order-by]
 *                      [--parent]
 *                      [--policy-assignment]
 *                      [--policy-definition]
 *                      [--policy-set-definition]
 *                      [--query-examples]
 *                      [--resource]
 *                      [--resource-group]
 *                      [--resource-type]
 *                      [--select]
 *                      [--subscription]
 *                      [--to]
 *                      [--top]
 * ```
 */
class az_policy_state_list_command_builder extends CommandBuilder<az_policy_state_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Within the specified time interval, get all policy states instead of the latest only. */
    all(value: string): az_policy_state_list_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** Apply expression for aggregations using OData notation. */
    apply(value: string): az_policy_state_list_command_builder {
        this.setFlag("--apply", value);
        return this;
    }

    /** Expand expression using OData notation. */
    expand(value: string): az_policy_state_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Filter expression using OData notation. */
    filter(value: string): az_policy_state_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** ISO 8601 formatted timestamp specifying the start time of the interval to query. */
    from(value: string): az_policy_state_list_command_builder {
        this.setFlag("--from", value);
        return this;
    }

    /** Name of management group. */
    managementGroup(value: string): az_policy_state_list_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_state_list_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Ordering expression using OData notation. */
    orderBy(value: string): az_policy_state_list_command_builder {
        this.setFlag("--order-by", value);
        return this;
    }

    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_state_list_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name of policy assignment. */
    policyAssignment(value: string): az_policy_state_list_command_builder {
        this.setFlag("--policy-assignment", value);
        return this;
    }

    /** Name of policy definition. */
    policyDefinition(value: string): az_policy_state_list_command_builder {
        this.setFlag("--policy-definition", value);
        return this;
    }

    /** Name of policy set definition. */
    policySetDefinition(value: string): az_policy_state_list_command_builder {
        this.setFlag("--policy-set-definition", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_state_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_state_list_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_state_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_state_list_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Select expression using OData notation. */
    select(value: string): az_policy_state_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_state_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** ISO 8601 formatted timestamp specifying the end time of the interval to query. */
    to(value: string): az_policy_state_list_command_builder {
        this.setFlag("--to", value);
        return this;
    }

    /** Maximum number of records to return. */
    top(value: string): az_policy_state_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Summarize policy compliance states.
 *
 * Syntax:
 * ```
 * az policy state summarize [--filter]
 *                           [--from]
 *                           [--management-group]
 *                           [--namespace]
 *                           [--parent]
 *                           [--policy-assignment]
 *                           [--policy-definition]
 *                           [--policy-set-definition]
 *                           [--resource]
 *                           [--resource-group]
 *                           [--resource-type]
 *                           [--subscription]
 *                           [--to]
 *                           [--top]
 * ```
 */
class az_policy_state_summarize_command_builder extends CommandBuilder<az_policy_state_summarize_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Filter expression using OData notation. */
    filter(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** ISO 8601 formatted timestamp specifying the start time of the interval to query. */
    from(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--from", value);
        return this;
    }

    /** Name of management group. */
    managementGroup(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--management-group", value);
        return this;
    }

    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name of policy assignment. */
    policyAssignment(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--policy-assignment", value);
        return this;
    }

    /** Name of policy definition. */
    policyDefinition(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--policy-definition", value);
        return this;
    }

    /** Name of policy set definition. */
    policySetDefinition(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--policy-set-definition", value);
        return this;
    }

    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** ISO 8601 formatted timestamp specifying the end time of the interval to query. */
    to(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--to", value);
        return this;
    }

    /** Maximum number of records to return. */
    top(value: string): az_policy_state_summarize_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

/**
 * Trigger a policy compliance evaluation for a scope.
 *
 * Syntax:
 * ```
 * az policy state trigger-scan [--no-wait]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
class az_policy_state_trigger_scan_command_builder extends CommandBuilder<az_policy_state_trigger_scan_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_policy_state_trigger_scan_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_state_trigger_scan_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_state_trigger_scan_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
