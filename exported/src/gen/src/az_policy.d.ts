import { CommandBuilder } from '../base';
import { az_policy_assignment_identity_assign_command_result } from './models/az_policy_assignment_identity_assign_command_result';
import { az_policy_assignment_identity_remove_command_result } from './models/az_policy_assignment_identity_remove_command_result';
import { az_policy_assignment_identity_show_command_result } from './models/az_policy_assignment_identity_show_command_result';
import { az_policy_assignment_create_command_result } from './models/az_policy_assignment_create_command_result';
import { az_policy_assignment_delete_command_result } from './models/az_policy_assignment_delete_command_result';
import { az_policy_assignment_list_command_result } from './models/az_policy_assignment_list_command_result';
import { az_policy_assignment_show_command_result } from './models/az_policy_assignment_show_command_result';
import { az_policy_definition_create_command_result } from './models/az_policy_definition_create_command_result';
import { az_policy_definition_delete_command_result } from './models/az_policy_definition_delete_command_result';
import { az_policy_definition_list_command_result } from './models/az_policy_definition_list_command_result';
import { az_policy_definition_show_command_result } from './models/az_policy_definition_show_command_result';
import { az_policy_definition_update_command_result } from './models/az_policy_definition_update_command_result';
import { az_policy_event_list_command_result } from './models/az_policy_event_list_command_result';
import { az_policy_metadata_list_command_result } from './models/az_policy_metadata_list_command_result';
import { az_policy_metadata_show_command_result } from './models/az_policy_metadata_show_command_result';
import { az_policy_remediation_deployment_list_command_result } from './models/az_policy_remediation_deployment_list_command_result';
import { az_policy_remediation_cancel_command_result } from './models/az_policy_remediation_cancel_command_result';
import { az_policy_remediation_create_command_result } from './models/az_policy_remediation_create_command_result';
import { az_policy_remediation_delete_command_result } from './models/az_policy_remediation_delete_command_result';
import { az_policy_remediation_list_command_result } from './models/az_policy_remediation_list_command_result';
import { az_policy_remediation_show_command_result } from './models/az_policy_remediation_show_command_result';
import { az_policy_set_definition_create_command_result } from './models/az_policy_set_definition_create_command_result';
import { az_policy_set_definition_delete_command_result } from './models/az_policy_set_definition_delete_command_result';
import { az_policy_set_definition_list_command_result } from './models/az_policy_set_definition_list_command_result';
import { az_policy_set_definition_show_command_result } from './models/az_policy_set_definition_show_command_result';
import { az_policy_set_definition_update_command_result } from './models/az_policy_set_definition_update_command_result';
import { az_policy_state_list_command_result } from './models/az_policy_state_list_command_result';
import { az_policy_state_summarize_command_result } from './models/az_policy_state_summarize_command_result';
import { az_policy_state_trigger_scan_command_result } from './models/az_policy_state_trigger_scan_command_result';
/** Manage a policy assignment's managed identity. */
export declare class az_policy_assignment_identity {
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
    static assign(name: string): az_policy_assignment_identity_assign_command_builder;
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
    static remove(name: string): az_policy_assignment_identity_remove_command_builder;
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
    static show(name: string): az_policy_assignment_identity_show_command_builder;
}
/** Manage resource policy assignments. */
export declare class az_policy_assignment {
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
    static create(): az_policy_assignment_create_command_builder;
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
    static delete(name: string): az_policy_assignment_delete_command_builder;
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
    static list(): az_policy_assignment_list_command_builder;
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
    static show(name: string): az_policy_assignment_show_command_builder;
}
/** Manage resource policy definitions. */
export declare class az_policy_definition {
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
    static create(name: string): az_policy_definition_create_command_builder;
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
    static delete(name: string): az_policy_definition_delete_command_builder;
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
    static list(): az_policy_definition_list_command_builder;
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
    static show(name: string): az_policy_definition_show_command_builder;
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
    static update(name: string): az_policy_definition_update_command_builder;
}
/** Manage policy events. */
export declare class az_policy_event {
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
    static list(): az_policy_event_list_command_builder;
}
/** Get policy metadata resources. */
export declare class az_policy_metadata {
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
    static list(): az_policy_metadata_list_command_builder;
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
    static show(name: string): az_policy_metadata_show_command_builder;
}
/** Manage resource policy remediation deployments. */
export declare class az_policy_remediation_deployment {
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
    static list(name: string): az_policy_remediation_deployment_list_command_builder;
}
/** Manage resource policy remediations. */
export declare class az_policy_remediation {
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
    static cancel(name: string): az_policy_remediation_cancel_command_builder;
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
    static create(name: string, policyAssignment: string): az_policy_remediation_create_command_builder;
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
    static delete(name: string): az_policy_remediation_delete_command_builder;
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
    static list(): az_policy_remediation_list_command_builder;
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
    static show(name: string): az_policy_remediation_show_command_builder;
}
/** Manage resource policy set definitions. */
export declare class az_policy_set_definition {
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
    static create(definitions: string, name: string): az_policy_set_definition_create_command_builder;
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
    static delete(name: string): az_policy_set_definition_delete_command_builder;
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
    static list(): az_policy_set_definition_list_command_builder;
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
    static show(name: string): az_policy_set_definition_show_command_builder;
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
    static update(name: string): az_policy_set_definition_update_command_builder;
}
/** Manage policy compliance states. */
export declare class az_policy_state {
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
    static list(): az_policy_state_list_command_builder;
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
    static summarize(): az_policy_state_summarize_command_builder;
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
    static trigger_scan(): az_policy_state_trigger_scan_command_builder;
}
/** Manage resource policies. */
export declare class az_policy {
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
declare class az_policy_assignment_identity_assign_command_builder extends CommandBuilder<az_policy_assignment_identity_assign_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_identity_assign_command_builder;
    /** Scope that the system assigned identity can access. */
    identityScope(value: string): az_policy_assignment_identity_assign_command_builder;
    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_identity_assign_command_builder;
    /** Role name or id that will be assigned to the managed identity. */
    role(value: string): az_policy_assignment_identity_assign_command_builder;
    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_identity_assign_command_builder;
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
declare class az_policy_assignment_identity_remove_command_builder extends CommandBuilder<az_policy_assignment_identity_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_identity_remove_command_builder;
    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_identity_remove_command_builder;
    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_identity_remove_command_builder;
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
declare class az_policy_assignment_identity_show_command_builder extends CommandBuilder<az_policy_assignment_identity_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_identity_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_assignment_identity_show_command_builder;
    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_identity_show_command_builder;
    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_identity_show_command_builder;
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
declare class az_policy_assignment_create_command_builder extends CommandBuilder<az_policy_assignment_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Assigns a system assigned identity to the policy assignment. */
    assignIdentity(value: string): az_policy_assignment_create_command_builder;
    /** Display name of the policy assignment. */
    displayName(value: string): az_policy_assignment_create_command_builder;
    /** Enforcement mode of the policy assignment, e.g. Default, DoNotEnforce. Please visit <a href="https://aka.ms/azure-policyAssignment-enforcement-mode">https://aka.ms/azure-policyAssignment-enforcement-mode</a> for more information. */
    enforcementMode(value: 'Default' | 'DoNotEnforce'): az_policy_assignment_create_command_builder;
    /** Scope that the system assigned identity can access. */
    identityScope(value: string): az_policy_assignment_create_command_builder;
    /** The location of the policy assignment. Only required when utilizing managed identity. */
    location(value: string): az_policy_assignment_create_command_builder;
    /** Name of the new policy assignment. */
    name(value: string): az_policy_assignment_create_command_builder;
    /** Space-separated scopes where the policy assignment does not apply. */
    notScopes(value: string): az_policy_assignment_create_command_builder;
    /** JSON formatted string or a path to a file or uri with parameter values of the policy rule. */
    params(value: string): az_policy_assignment_create_command_builder;
    /** Name or id of the policy definition. */
    policy(value: string): az_policy_assignment_create_command_builder;
    /** Name or id of the policy set definition. */
    policySetDefinition(value: string): az_policy_assignment_create_command_builder;
    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_create_command_builder;
    /** Role name or id that will be assigned to the managed identity. */
    role(value: string): az_policy_assignment_create_command_builder;
    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_create_command_builder;
    /** Policy sku. */
    sku(value: 'free' | 'standard'): az_policy_assignment_create_command_builder;
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
declare class az_policy_assignment_delete_command_builder extends CommandBuilder<az_policy_assignment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_delete_command_builder;
    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_delete_command_builder;
    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_delete_command_builder;
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
declare class az_policy_assignment_list_command_builder extends CommandBuilder<az_policy_assignment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Include policy assignments either inherited from parent scope or at child scope. */
    disableScopeStrictMatch(value: string): az_policy_assignment_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_assignment_list_command_builder;
    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_list_command_builder;
    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_list_command_builder;
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
declare class az_policy_assignment_show_command_builder extends CommandBuilder<az_policy_assignment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the policy assignment. */
    name(value: string): az_policy_assignment_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_assignment_show_command_builder;
    /** The resource group where the policy will be applied. */
    resourceGroup(value: string): az_policy_assignment_show_command_builder;
    /** Scope to which this policy assignment applies. */
    scope(value: string): az_policy_assignment_show_command_builder;
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
declare class az_policy_definition_create_command_builder extends CommandBuilder<az_policy_definition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the new policy definition. */
    name(value: string): az_policy_definition_create_command_builder;
    /** Description of policy definition. */
    description(value: string): az_policy_definition_create_command_builder;
    /** Display name of policy definition. */
    displayName(value: string): az_policy_definition_create_command_builder;
    /** Name of the management group the new policy definition can be assigned in. */
    managementGroup(value: string): az_policy_definition_create_command_builder;
    /** Metadata in space-separated key=value pairs. */
    metadata(value: string): az_policy_definition_create_command_builder;
    /** Mode of the policy definition, e.g. All, Indexed. Please visit <a href="https://aka.ms/azure-policy-mode">https://aka.ms/azure-policy-mode</a> for more information. */
    mode(value: string): az_policy_definition_create_command_builder;
    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    params(value: string): az_policy_definition_create_command_builder;
    /** Policy rules in JSON format, or a path to a file containing JSON rules. */
    rules(value: string): az_policy_definition_create_command_builder;
    /** Name or id of the subscription the new policy definition can be assigned in. */
    subscription(value: string): az_policy_definition_create_command_builder;
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
declare class az_policy_definition_delete_command_builder extends CommandBuilder<az_policy_definition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The policy definition name. */
    name(value: string): az_policy_definition_delete_command_builder;
    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_definition_delete_command_builder;
    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_definition_delete_command_builder;
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
declare class az_policy_definition_list_command_builder extends CommandBuilder<az_policy_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_definition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_definition_list_command_builder;
    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_definition_list_command_builder;
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
declare class az_policy_definition_show_command_builder extends CommandBuilder<az_policy_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The policy definition name. */
    name(value: string): az_policy_definition_show_command_builder;
    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_definition_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_definition_show_command_builder;
    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_definition_show_command_builder;
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
declare class az_policy_definition_update_command_builder extends CommandBuilder<az_policy_definition_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The policy definition name. */
    name(value: string): az_policy_definition_update_command_builder;
    /** Description of policy definition. */
    description(value: string): az_policy_definition_update_command_builder;
    /** Display name of policy definition. */
    displayName(value: string): az_policy_definition_update_command_builder;
    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_definition_update_command_builder;
    /** Metadata in space-separated key=value pairs. */
    metadata(value: string): az_policy_definition_update_command_builder;
    /** Mode of the policy definition, e.g. All, Indexed. Please visit <a href="https://aka.ms/azure-policy-mode">https://aka.ms/azure-policy-mode</a> for more information. */
    mode(value: string): az_policy_definition_update_command_builder;
    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    params(value: string): az_policy_definition_update_command_builder;
    /** JSON formatted string or a path to a file with such content. */
    rules(value: string): az_policy_definition_update_command_builder;
    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_definition_update_command_builder;
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
declare class az_policy_event_list_command_builder extends CommandBuilder<az_policy_event_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Apply expression for aggregations using OData notation. */
    apply(value: string): az_policy_event_list_command_builder;
    /** Filter expression using OData notation. */
    filter(value: string): az_policy_event_list_command_builder;
    /** ISO 8601 formatted timestamp specifying the start time of the interval to query. */
    from(value: string): az_policy_event_list_command_builder;
    /** Name of management group. */
    managementGroup(value: string): az_policy_event_list_command_builder;
    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_event_list_command_builder;
    /** Ordering expression using OData notation. */
    orderBy(value: string): az_policy_event_list_command_builder;
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_event_list_command_builder;
    /** Name of policy assignment. */
    policyAssignment(value: string): az_policy_event_list_command_builder;
    /** Name of policy definition. */
    policyDefinition(value: string): az_policy_event_list_command_builder;
    /** Name of policy set definition. */
    policySetDefinition(value: string): az_policy_event_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_event_list_command_builder;
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_event_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_event_list_command_builder;
    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_event_list_command_builder;
    /** Select expression using OData notation. */
    select(value: string): az_policy_event_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_event_list_command_builder;
    /** ISO 8601 formatted timestamp specifying the end time of the interval to query. */
    to(value: string): az_policy_event_list_command_builder;
    /** Maximum number of records to return. */
    top(value: string): az_policy_event_list_command_builder;
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
declare class az_policy_metadata_list_command_builder extends CommandBuilder<az_policy_metadata_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_metadata_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_metadata_list_command_builder;
    /** Maximum number of records to return. */
    top(value: string): az_policy_metadata_list_command_builder;
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
declare class az_policy_metadata_show_command_builder extends CommandBuilder<az_policy_metadata_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the metadata resource. */
    name(value: string): az_policy_metadata_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_metadata_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_metadata_show_command_builder;
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
declare class az_policy_remediation_deployment_list_command_builder extends CommandBuilder<az_policy_remediation_deployment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the remediation. */
    name(value: string): az_policy_remediation_deployment_list_command_builder;
    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_deployment_list_command_builder;
    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_deployment_list_command_builder;
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_deployment_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_remediation_deployment_list_command_builder;
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_deployment_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_deployment_list_command_builder;
    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_deployment_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_deployment_list_command_builder;
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
declare class az_policy_remediation_cancel_command_builder extends CommandBuilder<az_policy_remediation_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the remediation. */
    name(value: string): az_policy_remediation_cancel_command_builder;
    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_cancel_command_builder;
    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_cancel_command_builder;
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_cancel_command_builder;
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_cancel_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_cancel_command_builder;
    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_cancel_command_builder;
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
declare class az_policy_remediation_create_command_builder extends CommandBuilder<az_policy_remediation_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, policyAssignment: string);
    /** Name of the remediation. */
    name(value: string): az_policy_remediation_create_command_builder;
    /** Name or resource ID of the policy assignment. */
    policyAssignment(value: string): az_policy_remediation_create_command_builder;
    /** Policy definition reference ID inside the policy set definition. Only required when the policy assignment is assigning a policy set definition. */
    definitionReferenceId(value: string): az_policy_remediation_create_command_builder;
    /** Space separated list of resource locations that should be remediated (Ex: centralus westeurope). */
    locationFilters(value: string): az_policy_remediation_create_command_builder;
    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_create_command_builder;
    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_create_command_builder;
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_create_command_builder;
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_create_command_builder;
    /** The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified. */
    resourceDiscoveryMode(value: 'ExistingNonCompliant' | 'ReEvaluateCompliance'): az_policy_remediation_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_create_command_builder;
    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_create_command_builder;
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
declare class az_policy_remediation_delete_command_builder extends CommandBuilder<az_policy_remediation_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the remediation. */
    name(value: string): az_policy_remediation_delete_command_builder;
    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_delete_command_builder;
    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_delete_command_builder;
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_delete_command_builder;
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_delete_command_builder;
    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_delete_command_builder;
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
declare class az_policy_remediation_list_command_builder extends CommandBuilder<az_policy_remediation_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_list_command_builder;
    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_list_command_builder;
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_remediation_list_command_builder;
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_list_command_builder;
    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_list_command_builder;
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
declare class az_policy_remediation_show_command_builder extends CommandBuilder<az_policy_remediation_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the remediation. */
    name(value: string): az_policy_remediation_show_command_builder;
    /** Name of management group. */
    managementGroup(value: string): az_policy_remediation_show_command_builder;
    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_remediation_show_command_builder;
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_remediation_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_remediation_show_command_builder;
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_remediation_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_remediation_show_command_builder;
    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_remediation_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_remediation_show_command_builder;
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
declare class az_policy_set_definition_create_command_builder extends CommandBuilder<az_policy_set_definition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, definitions: string, name: string);
    /** Policy definitions in JSON format, or a path to a file or URI containing JSON rules. */
    definitions(value: string): az_policy_set_definition_create_command_builder;
    /** Name of the new policy set definition. */
    name(value: string): az_policy_set_definition_create_command_builder;
    /** JSON formatted string or a path to a file or uri containing policy definition groups. Groups are used to organize policy definitions within a policy set. */
    definitionGroups(value: string): az_policy_set_definition_create_command_builder;
    /** Description of policy set definition. */
    description(value: string): az_policy_set_definition_create_command_builder;
    /** Display name of policy set definition. */
    displayName(value: string): az_policy_set_definition_create_command_builder;
    /** Name of management group the new policy set definition can be assigned in. */
    managementGroup(value: string): az_policy_set_definition_create_command_builder;
    /** Metadata in space-separated key=value pairs. */
    metadata(value: string): az_policy_set_definition_create_command_builder;
    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    params(value: string): az_policy_set_definition_create_command_builder;
    /** Name or id of the subscription the new policy set definition can be assigned in. */
    subscription(value: string): az_policy_set_definition_create_command_builder;
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
declare class az_policy_set_definition_delete_command_builder extends CommandBuilder<az_policy_set_definition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The policy set definition name. */
    name(value: string): az_policy_set_definition_delete_command_builder;
    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_set_definition_delete_command_builder;
    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_set_definition_delete_command_builder;
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
declare class az_policy_set_definition_list_command_builder extends CommandBuilder<az_policy_set_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_set_definition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_set_definition_list_command_builder;
    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_set_definition_list_command_builder;
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
declare class az_policy_set_definition_show_command_builder extends CommandBuilder<az_policy_set_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The policy set definition name. */
    name(value: string): az_policy_set_definition_show_command_builder;
    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_set_definition_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_set_definition_show_command_builder;
    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_set_definition_show_command_builder;
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
declare class az_policy_set_definition_update_command_builder extends CommandBuilder<az_policy_set_definition_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The policy set definition name. */
    name(value: string): az_policy_set_definition_update_command_builder;
    /** JSON formatted string or a path to a file or uri containing policy definition groups. Groups are used to organize policy definitions within a policy set. */
    definitionGroups(value: string): az_policy_set_definition_update_command_builder;
    /** JSON formatted string or a path to a file or uri containing definitions. */
    definitions(value: string): az_policy_set_definition_update_command_builder;
    /** Description of policy set definition. */
    description(value: string): az_policy_set_definition_update_command_builder;
    /** Display name of policy set definition. */
    displayName(value: string): az_policy_set_definition_update_command_builder;
    /** The name of the management group of the policy [set] definition. */
    managementGroup(value: string): az_policy_set_definition_update_command_builder;
    /** Metadata in space-separated key=value pairs. */
    metadata(value: string): az_policy_set_definition_update_command_builder;
    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    params(value: string): az_policy_set_definition_update_command_builder;
    /** The subscription id of the policy [set] definition. */
    subscription(value: string): az_policy_set_definition_update_command_builder;
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
declare class az_policy_state_list_command_builder extends CommandBuilder<az_policy_state_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Within the specified time interval, get all policy states instead of the latest only. */
    all(value: string): az_policy_state_list_command_builder;
    /** Apply expression for aggregations using OData notation. */
    apply(value: string): az_policy_state_list_command_builder;
    /** Expand expression using OData notation. */
    expand(value: string): az_policy_state_list_command_builder;
    /** Filter expression using OData notation. */
    filter(value: string): az_policy_state_list_command_builder;
    /** ISO 8601 formatted timestamp specifying the start time of the interval to query. */
    from(value: string): az_policy_state_list_command_builder;
    /** Name of management group. */
    managementGroup(value: string): az_policy_state_list_command_builder;
    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_state_list_command_builder;
    /** Ordering expression using OData notation. */
    orderBy(value: string): az_policy_state_list_command_builder;
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_state_list_command_builder;
    /** Name of policy assignment. */
    policyAssignment(value: string): az_policy_state_list_command_builder;
    /** Name of policy definition. */
    policyDefinition(value: string): az_policy_state_list_command_builder;
    /** Name of policy set definition. */
    policySetDefinition(value: string): az_policy_state_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_policy_state_list_command_builder;
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_state_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_state_list_command_builder;
    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_state_list_command_builder;
    /** Select expression using OData notation. */
    select(value: string): az_policy_state_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_state_list_command_builder;
    /** ISO 8601 formatted timestamp specifying the end time of the interval to query. */
    to(value: string): az_policy_state_list_command_builder;
    /** Maximum number of records to return. */
    top(value: string): az_policy_state_list_command_builder;
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
declare class az_policy_state_summarize_command_builder extends CommandBuilder<az_policy_state_summarize_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter expression using OData notation. */
    filter(value: string): az_policy_state_summarize_command_builder;
    /** ISO 8601 formatted timestamp specifying the start time of the interval to query. */
    from(value: string): az_policy_state_summarize_command_builder;
    /** Name of management group. */
    managementGroup(value: string): az_policy_state_summarize_command_builder;
    /** Provider namespace (Ex: Microsoft.Provider). */
    namespace(value: string): az_policy_state_summarize_command_builder;
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    parent(value: string): az_policy_state_summarize_command_builder;
    /** Name of policy assignment. */
    policyAssignment(value: string): az_policy_state_summarize_command_builder;
    /** Name of policy definition. */
    policyDefinition(value: string): az_policy_state_summarize_command_builder;
    /** Name of policy set definition. */
    policySetDefinition(value: string): az_policy_state_summarize_command_builder;
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    resource(value: string): az_policy_state_summarize_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_state_summarize_command_builder;
    /** Resource type (Ex: resourceTypeC). */
    resourceType(value: string): az_policy_state_summarize_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_state_summarize_command_builder;
    /** ISO 8601 formatted timestamp specifying the end time of the interval to query. */
    to(value: string): az_policy_state_summarize_command_builder;
    /** Maximum number of records to return. */
    top(value: string): az_policy_state_summarize_command_builder;
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
declare class az_policy_state_trigger_scan_command_builder extends CommandBuilder<az_policy_state_trigger_scan_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_policy_state_trigger_scan_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_policy_state_trigger_scan_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_policy_state_trigger_scan_command_builder;
}
export {};
