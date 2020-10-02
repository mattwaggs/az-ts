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
/** Manage a policy assignment's managed identity. */
var az_policy_assignment_identity = /** @class */ (function () {
    function az_policy_assignment_identity() {
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
    az_policy_assignment_identity.assign = function (name) {
        return new az_policy_assignment_identity_assign_command_builder("az policy assignment identity assign", 'az_policy_assignment_identity_assign_command_result', name);
    };
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
    az_policy_assignment_identity.remove = function (name) {
        return new az_policy_assignment_identity_remove_command_builder("az policy assignment identity remove", 'az_policy_assignment_identity_remove_command_result', name);
    };
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
    az_policy_assignment_identity.show = function (name) {
        return new az_policy_assignment_identity_show_command_builder("az policy assignment identity show", 'az_policy_assignment_identity_show_command_result', name);
    };
    return az_policy_assignment_identity;
}());
exports.az_policy_assignment_identity = az_policy_assignment_identity;
/** Manage resource policy assignments. */
var az_policy_assignment = /** @class */ (function () {
    function az_policy_assignment() {
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
    az_policy_assignment.create = function () {
        return new az_policy_assignment_create_command_builder("az policy assignment create", 'az_policy_assignment_create_command_result');
    };
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
    az_policy_assignment["delete"] = function (name) {
        return new az_policy_assignment_delete_command_builder("az policy assignment delete", 'az_policy_assignment_delete_command_result', name);
    };
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
    az_policy_assignment.list = function () {
        return new az_policy_assignment_list_command_builder("az policy assignment list", 'az_policy_assignment_list_command_result');
    };
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
    az_policy_assignment.show = function (name) {
        return new az_policy_assignment_show_command_builder("az policy assignment show", 'az_policy_assignment_show_command_result', name);
    };
    return az_policy_assignment;
}());
exports.az_policy_assignment = az_policy_assignment;
/** Manage resource policy definitions. */
var az_policy_definition = /** @class */ (function () {
    function az_policy_definition() {
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
    az_policy_definition.create = function (name) {
        return new az_policy_definition_create_command_builder("az policy definition create", 'az_policy_definition_create_command_result', name);
    };
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
    az_policy_definition["delete"] = function (name) {
        return new az_policy_definition_delete_command_builder("az policy definition delete", 'az_policy_definition_delete_command_result', name);
    };
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
    az_policy_definition.list = function () {
        return new az_policy_definition_list_command_builder("az policy definition list", 'az_policy_definition_list_command_result');
    };
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
    az_policy_definition.show = function (name) {
        return new az_policy_definition_show_command_builder("az policy definition show", 'az_policy_definition_show_command_result', name);
    };
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
    az_policy_definition.update = function (name) {
        return new az_policy_definition_update_command_builder("az policy definition update", 'az_policy_definition_update_command_result', name);
    };
    return az_policy_definition;
}());
exports.az_policy_definition = az_policy_definition;
/** Manage policy events. */
var az_policy_event = /** @class */ (function () {
    function az_policy_event() {
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
    az_policy_event.list = function () {
        return new az_policy_event_list_command_builder("az policy event list", 'az_policy_event_list_command_result');
    };
    return az_policy_event;
}());
exports.az_policy_event = az_policy_event;
/** Get policy metadata resources. */
var az_policy_metadata = /** @class */ (function () {
    function az_policy_metadata() {
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
    az_policy_metadata.list = function () {
        return new az_policy_metadata_list_command_builder("az policy metadata list", 'az_policy_metadata_list_command_result');
    };
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
    az_policy_metadata.show = function (name) {
        return new az_policy_metadata_show_command_builder("az policy metadata show", 'az_policy_metadata_show_command_result', name);
    };
    return az_policy_metadata;
}());
exports.az_policy_metadata = az_policy_metadata;
/** Manage resource policy remediation deployments. */
var az_policy_remediation_deployment = /** @class */ (function () {
    function az_policy_remediation_deployment() {
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
    az_policy_remediation_deployment.list = function (name) {
        return new az_policy_remediation_deployment_list_command_builder("az policy remediation deployment list", 'az_policy_remediation_deployment_list_command_result', name);
    };
    return az_policy_remediation_deployment;
}());
exports.az_policy_remediation_deployment = az_policy_remediation_deployment;
/** Manage resource policy remediations. */
var az_policy_remediation = /** @class */ (function () {
    function az_policy_remediation() {
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
    az_policy_remediation.cancel = function (name) {
        return new az_policy_remediation_cancel_command_builder("az policy remediation cancel", 'az_policy_remediation_cancel_command_result', name);
    };
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
    az_policy_remediation.create = function (name, policyAssignment) {
        return new az_policy_remediation_create_command_builder("az policy remediation create", 'az_policy_remediation_create_command_result', name, policyAssignment);
    };
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
    az_policy_remediation["delete"] = function (name) {
        return new az_policy_remediation_delete_command_builder("az policy remediation delete", 'az_policy_remediation_delete_command_result', name);
    };
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
    az_policy_remediation.list = function () {
        return new az_policy_remediation_list_command_builder("az policy remediation list", 'az_policy_remediation_list_command_result');
    };
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
    az_policy_remediation.show = function (name) {
        return new az_policy_remediation_show_command_builder("az policy remediation show", 'az_policy_remediation_show_command_result', name);
    };
    return az_policy_remediation;
}());
exports.az_policy_remediation = az_policy_remediation;
/** Manage resource policy set definitions. */
var az_policy_set_definition = /** @class */ (function () {
    function az_policy_set_definition() {
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
    az_policy_set_definition.create = function (definitions, name) {
        return new az_policy_set_definition_create_command_builder("az policy set-definition create", 'az_policy_set_definition_create_command_result', definitions, name);
    };
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
    az_policy_set_definition["delete"] = function (name) {
        return new az_policy_set_definition_delete_command_builder("az policy set-definition delete", 'az_policy_set_definition_delete_command_result', name);
    };
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
    az_policy_set_definition.list = function () {
        return new az_policy_set_definition_list_command_builder("az policy set-definition list", 'az_policy_set_definition_list_command_result');
    };
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
    az_policy_set_definition.show = function (name) {
        return new az_policy_set_definition_show_command_builder("az policy set-definition show", 'az_policy_set_definition_show_command_result', name);
    };
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
    az_policy_set_definition.update = function (name) {
        return new az_policy_set_definition_update_command_builder("az policy set-definition update", 'az_policy_set_definition_update_command_result', name);
    };
    return az_policy_set_definition;
}());
exports.az_policy_set_definition = az_policy_set_definition;
/** Manage policy compliance states. */
var az_policy_state = /** @class */ (function () {
    function az_policy_state() {
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
    az_policy_state.list = function () {
        return new az_policy_state_list_command_builder("az policy state list", 'az_policy_state_list_command_result');
    };
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
    az_policy_state.summarize = function () {
        return new az_policy_state_summarize_command_builder("az policy state summarize", 'az_policy_state_summarize_command_result');
    };
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
    az_policy_state.trigger_scan = function () {
        return new az_policy_state_trigger_scan_command_builder("az policy state trigger-scan", 'az_policy_state_trigger_scan_command_result');
    };
    return az_policy_state;
}());
exports.az_policy_state = az_policy_state;
/** Manage resource policies. */
var az_policy = /** @class */ (function () {
    function az_policy() {
    }
    return az_policy;
}());
exports.az_policy = az_policy;
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
var az_policy_assignment_identity_assign_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_assignment_identity_assign_command_builder, _super);
    function az_policy_assignment_identity_assign_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the policy assignment. */
    az_policy_assignment_identity_assign_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Scope that the system assigned identity can access. */
    az_policy_assignment_identity_assign_command_builder.prototype.identityScope = function (value) {
        this.setFlag("--identity-scope", value);
        return this;
    };
    /** The resource group where the policy will be applied. */
    az_policy_assignment_identity_assign_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Role name or id that will be assigned to the managed identity. */
    az_policy_assignment_identity_assign_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope to which this policy assignment applies. */
    az_policy_assignment_identity_assign_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    return az_policy_assignment_identity_assign_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_assignment_identity_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_assignment_identity_remove_command_builder, _super);
    function az_policy_assignment_identity_remove_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the policy assignment. */
    az_policy_assignment_identity_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group where the policy will be applied. */
    az_policy_assignment_identity_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scope to which this policy assignment applies. */
    az_policy_assignment_identity_remove_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    return az_policy_assignment_identity_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_assignment_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_assignment_identity_show_command_builder, _super);
    function az_policy_assignment_identity_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the policy assignment. */
    az_policy_assignment_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_assignment_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group where the policy will be applied. */
    az_policy_assignment_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scope to which this policy assignment applies. */
    az_policy_assignment_identity_show_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    return az_policy_assignment_identity_show_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_assignment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_assignment_create_command_builder, _super);
    function az_policy_assignment_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Assigns a system assigned identity to the policy assignment. */
    az_policy_assignment_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Display name of the policy assignment. */
    az_policy_assignment_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Enforcement mode of the policy assignment, e.g. Default, DoNotEnforce. Please visit <a href="https://aka.ms/azure-policyAssignment-enforcement-mode">https://aka.ms/azure-policyAssignment-enforcement-mode</a> for more information. */
    az_policy_assignment_create_command_builder.prototype.enforcementMode = function (value) {
        this.setFlag("--enforcement-mode", value);
        return this;
    };
    /** Scope that the system assigned identity can access. */
    az_policy_assignment_create_command_builder.prototype.identityScope = function (value) {
        this.setFlag("--identity-scope", value);
        return this;
    };
    /** The location of the policy assignment. Only required when utilizing managed identity. */
    az_policy_assignment_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the new policy assignment. */
    az_policy_assignment_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Space-separated scopes where the policy assignment does not apply. */
    az_policy_assignment_create_command_builder.prototype.notScopes = function (value) {
        this.setFlag("--not-scopes", value);
        return this;
    };
    /** JSON formatted string or a path to a file or uri with parameter values of the policy rule. */
    az_policy_assignment_create_command_builder.prototype.params = function (value) {
        this.setFlag("--params", value);
        return this;
    };
    /** Name or id of the policy definition. */
    az_policy_assignment_create_command_builder.prototype.policy = function (value) {
        this.setFlag("--policy", value);
        return this;
    };
    /** Name or id of the policy set definition. */
    az_policy_assignment_create_command_builder.prototype.policySetDefinition = function (value) {
        this.setFlag("--policy-set-definition", value);
        return this;
    };
    /** The resource group where the policy will be applied. */
    az_policy_assignment_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Role name or id that will be assigned to the managed identity. */
    az_policy_assignment_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope to which this policy assignment applies. */
    az_policy_assignment_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Policy sku. */
    az_policy_assignment_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    return az_policy_assignment_create_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_assignment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_assignment_delete_command_builder, _super);
    function az_policy_assignment_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the policy assignment. */
    az_policy_assignment_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group where the policy will be applied. */
    az_policy_assignment_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scope to which this policy assignment applies. */
    az_policy_assignment_delete_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    return az_policy_assignment_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_assignment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_assignment_list_command_builder, _super);
    function az_policy_assignment_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Include policy assignments either inherited from parent scope or at child scope. */
    az_policy_assignment_list_command_builder.prototype.disableScopeStrictMatch = function (value) {
        this.setFlag("--disable-scope-strict-match", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_assignment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group where the policy will be applied. */
    az_policy_assignment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scope to which this policy assignment applies. */
    az_policy_assignment_list_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    return az_policy_assignment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_assignment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_assignment_show_command_builder, _super);
    function az_policy_assignment_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the policy assignment. */
    az_policy_assignment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_assignment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group where the policy will be applied. */
    az_policy_assignment_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Scope to which this policy assignment applies. */
    az_policy_assignment_show_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    return az_policy_assignment_show_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_definition_create_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_definition_create_command_builder, _super);
    function az_policy_definition_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the new policy definition. */
    az_policy_definition_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Description of policy definition. */
    az_policy_definition_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Display name of policy definition. */
    az_policy_definition_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Name of the management group the new policy definition can be assigned in. */
    az_policy_definition_create_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Metadata in space-separated key=value pairs. */
    az_policy_definition_create_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** Mode of the policy definition, e.g. All, Indexed. Please visit <a href="https://aka.ms/azure-policy-mode">https://aka.ms/azure-policy-mode</a> for more information. */
    az_policy_definition_create_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    az_policy_definition_create_command_builder.prototype.params = function (value) {
        this.setFlag("--params", value);
        return this;
    };
    /** Policy rules in JSON format, or a path to a file containing JSON rules. */
    az_policy_definition_create_command_builder.prototype.rules = function (value) {
        this.setFlag("--rules", value);
        return this;
    };
    /** Name or id of the subscription the new policy definition can be assigned in. */
    az_policy_definition_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_definition_create_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_definition_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_definition_delete_command_builder, _super);
    function az_policy_definition_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The policy definition name. */
    az_policy_definition_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the management group of the policy [set] definition. */
    az_policy_definition_delete_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** The subscription id of the policy [set] definition. */
    az_policy_definition_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_definition_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_definition_list_command_builder, _super);
    function az_policy_definition_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the management group of the policy [set] definition. */
    az_policy_definition_list_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The subscription id of the policy [set] definition. */
    az_policy_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_definition_list_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_definition_show_command_builder, _super);
    function az_policy_definition_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The policy definition name. */
    az_policy_definition_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the management group of the policy [set] definition. */
    az_policy_definition_show_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The subscription id of the policy [set] definition. */
    az_policy_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_definition_show_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_definition_update_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_definition_update_command_builder, _super);
    function az_policy_definition_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The policy definition name. */
    az_policy_definition_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Description of policy definition. */
    az_policy_definition_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Display name of policy definition. */
    az_policy_definition_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The name of the management group of the policy [set] definition. */
    az_policy_definition_update_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Metadata in space-separated key=value pairs. */
    az_policy_definition_update_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** Mode of the policy definition, e.g. All, Indexed. Please visit <a href="https://aka.ms/azure-policy-mode">https://aka.ms/azure-policy-mode</a> for more information. */
    az_policy_definition_update_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    az_policy_definition_update_command_builder.prototype.params = function (value) {
        this.setFlag("--params", value);
        return this;
    };
    /** JSON formatted string or a path to a file with such content. */
    az_policy_definition_update_command_builder.prototype.rules = function (value) {
        this.setFlag("--rules", value);
        return this;
    };
    /** The subscription id of the policy [set] definition. */
    az_policy_definition_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_definition_update_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_event_list_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_event_list_command_builder, _super);
    function az_policy_event_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Apply expression for aggregations using OData notation. */
    az_policy_event_list_command_builder.prototype.apply = function (value) {
        this.setFlag("--apply", value);
        return this;
    };
    /** Filter expression using OData notation. */
    az_policy_event_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** ISO 8601 formatted timestamp specifying the start time of the interval to query. */
    az_policy_event_list_command_builder.prototype.from = function (value) {
        this.setFlag("--from", value);
        return this;
    };
    /** Name of management group. */
    az_policy_event_list_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Provider namespace (Ex: Microsoft.Provider). */
    az_policy_event_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Ordering expression using OData notation. */
    az_policy_event_list_command_builder.prototype.orderBy = function (value) {
        this.setFlag("--order-by", value);
        return this;
    };
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    az_policy_event_list_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name of policy assignment. */
    az_policy_event_list_command_builder.prototype.policyAssignment = function (value) {
        this.setFlag("--policy-assignment", value);
        return this;
    };
    /** Name of policy definition. */
    az_policy_event_list_command_builder.prototype.policyDefinition = function (value) {
        this.setFlag("--policy-definition", value);
        return this;
    };
    /** Name of policy set definition. */
    az_policy_event_list_command_builder.prototype.policySetDefinition = function (value) {
        this.setFlag("--policy-set-definition", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_event_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    az_policy_event_list_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_event_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource type (Ex: resourceTypeC). */
    az_policy_event_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Select expression using OData notation. */
    az_policy_event_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_event_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** ISO 8601 formatted timestamp specifying the end time of the interval to query. */
    az_policy_event_list_command_builder.prototype.to = function (value) {
        this.setFlag("--to", value);
        return this;
    };
    /** Maximum number of records to return. */
    az_policy_event_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_policy_event_list_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_metadata_list_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_metadata_list_command_builder, _super);
    function az_policy_metadata_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_metadata_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_metadata_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of records to return. */
    az_policy_metadata_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_policy_metadata_list_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_metadata_show_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_metadata_show_command_builder, _super);
    function az_policy_metadata_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the metadata resource. */
    az_policy_metadata_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_metadata_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_metadata_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_metadata_show_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_remediation_deployment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_remediation_deployment_list_command_builder, _super);
    function az_policy_remediation_deployment_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the remediation. */
    az_policy_remediation_deployment_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of management group. */
    az_policy_remediation_deployment_list_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Provider namespace (Ex: Microsoft.Provider). */
    az_policy_remediation_deployment_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    az_policy_remediation_deployment_list_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_remediation_deployment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    az_policy_remediation_deployment_list_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_remediation_deployment_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource type (Ex: resourceTypeC). */
    az_policy_remediation_deployment_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_remediation_deployment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_remediation_deployment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_remediation_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_remediation_cancel_command_builder, _super);
    function az_policy_remediation_cancel_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the remediation. */
    az_policy_remediation_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of management group. */
    az_policy_remediation_cancel_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Provider namespace (Ex: Microsoft.Provider). */
    az_policy_remediation_cancel_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    az_policy_remediation_cancel_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    az_policy_remediation_cancel_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_remediation_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource type (Ex: resourceTypeC). */
    az_policy_remediation_cancel_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_remediation_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_remediation_cancel_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_remediation_create_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_remediation_create_command_builder, _super);
    function az_policy_remediation_create_command_builder(commandPath, resultDataTypeName, name, policyAssignment) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.policyAssignment(policyAssignment);
        return _this;
    }
    /** Name of the remediation. */
    az_policy_remediation_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or resource ID of the policy assignment. */
    az_policy_remediation_create_command_builder.prototype.policyAssignment = function (value) {
        this.setFlag("--policy-assignment", value);
        return this;
    };
    /** Policy definition reference ID inside the policy set definition. Only required when the policy assignment is assigning a policy set definition. */
    az_policy_remediation_create_command_builder.prototype.definitionReferenceId = function (value) {
        this.setFlag("--definition-reference-id", value);
        return this;
    };
    /** Space separated list of resource locations that should be remediated (Ex: centralus westeurope). */
    az_policy_remediation_create_command_builder.prototype.locationFilters = function (value) {
        this.setFlag("--location-filters", value);
        return this;
    };
    /** Name of management group. */
    az_policy_remediation_create_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Provider namespace (Ex: Microsoft.Provider). */
    az_policy_remediation_create_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    az_policy_remediation_create_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    az_policy_remediation_create_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified. */
    az_policy_remediation_create_command_builder.prototype.resourceDiscoveryMode = function (value) {
        this.setFlag("--resource-discovery-mode", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_remediation_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource type (Ex: resourceTypeC). */
    az_policy_remediation_create_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_remediation_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_remediation_create_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_remediation_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_remediation_delete_command_builder, _super);
    function az_policy_remediation_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the remediation. */
    az_policy_remediation_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of management group. */
    az_policy_remediation_delete_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Provider namespace (Ex: Microsoft.Provider). */
    az_policy_remediation_delete_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    az_policy_remediation_delete_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    az_policy_remediation_delete_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_remediation_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource type (Ex: resourceTypeC). */
    az_policy_remediation_delete_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_remediation_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_remediation_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_remediation_list_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_remediation_list_command_builder, _super);
    function az_policy_remediation_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of management group. */
    az_policy_remediation_list_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Provider namespace (Ex: Microsoft.Provider). */
    az_policy_remediation_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    az_policy_remediation_list_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_remediation_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    az_policy_remediation_list_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_remediation_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource type (Ex: resourceTypeC). */
    az_policy_remediation_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_remediation_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_remediation_list_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_remediation_show_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_remediation_show_command_builder, _super);
    function az_policy_remediation_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the remediation. */
    az_policy_remediation_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of management group. */
    az_policy_remediation_show_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Provider namespace (Ex: Microsoft.Provider). */
    az_policy_remediation_show_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    az_policy_remediation_show_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_remediation_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    az_policy_remediation_show_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_remediation_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource type (Ex: resourceTypeC). */
    az_policy_remediation_show_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_remediation_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_remediation_show_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_set_definition_create_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_set_definition_create_command_builder, _super);
    function az_policy_set_definition_create_command_builder(commandPath, resultDataTypeName, definitions, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.definitions(definitions);
        _this.name(name);
        return _this;
    }
    /** Policy definitions in JSON format, or a path to a file or URI containing JSON rules. */
    az_policy_set_definition_create_command_builder.prototype.definitions = function (value) {
        this.setFlag("--definitions", value);
        return this;
    };
    /** Name of the new policy set definition. */
    az_policy_set_definition_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** JSON formatted string or a path to a file or uri containing policy definition groups. Groups are used to organize policy definitions within a policy set. */
    az_policy_set_definition_create_command_builder.prototype.definitionGroups = function (value) {
        this.setFlag("--definition-groups", value);
        return this;
    };
    /** Description of policy set definition. */
    az_policy_set_definition_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Display name of policy set definition. */
    az_policy_set_definition_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Name of management group the new policy set definition can be assigned in. */
    az_policy_set_definition_create_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Metadata in space-separated key=value pairs. */
    az_policy_set_definition_create_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    az_policy_set_definition_create_command_builder.prototype.params = function (value) {
        this.setFlag("--params", value);
        return this;
    };
    /** Name or id of the subscription the new policy set definition can be assigned in. */
    az_policy_set_definition_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_set_definition_create_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_set_definition_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_set_definition_delete_command_builder, _super);
    function az_policy_set_definition_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The policy set definition name. */
    az_policy_set_definition_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the management group of the policy [set] definition. */
    az_policy_set_definition_delete_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** The subscription id of the policy [set] definition. */
    az_policy_set_definition_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_set_definition_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_set_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_set_definition_list_command_builder, _super);
    function az_policy_set_definition_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the management group of the policy [set] definition. */
    az_policy_set_definition_list_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_set_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The subscription id of the policy [set] definition. */
    az_policy_set_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_set_definition_list_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_set_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_set_definition_show_command_builder, _super);
    function az_policy_set_definition_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The policy set definition name. */
    az_policy_set_definition_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the management group of the policy [set] definition. */
    az_policy_set_definition_show_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_set_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The subscription id of the policy [set] definition. */
    az_policy_set_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_set_definition_show_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_set_definition_update_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_set_definition_update_command_builder, _super);
    function az_policy_set_definition_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The policy set definition name. */
    az_policy_set_definition_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** JSON formatted string or a path to a file or uri containing policy definition groups. Groups are used to organize policy definitions within a policy set. */
    az_policy_set_definition_update_command_builder.prototype.definitionGroups = function (value) {
        this.setFlag("--definition-groups", value);
        return this;
    };
    /** JSON formatted string or a path to a file or uri containing definitions. */
    az_policy_set_definition_update_command_builder.prototype.definitions = function (value) {
        this.setFlag("--definitions", value);
        return this;
    };
    /** Description of policy set definition. */
    az_policy_set_definition_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Display name of policy set definition. */
    az_policy_set_definition_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The name of the management group of the policy [set] definition. */
    az_policy_set_definition_update_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Metadata in space-separated key=value pairs. */
    az_policy_set_definition_update_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** JSON formatted string or a path to a file or uri with parameter definitions. */
    az_policy_set_definition_update_command_builder.prototype.params = function (value) {
        this.setFlag("--params", value);
        return this;
    };
    /** The subscription id of the policy [set] definition. */
    az_policy_set_definition_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_set_definition_update_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_state_list_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_state_list_command_builder, _super);
    function az_policy_state_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Within the specified time interval, get all policy states instead of the latest only. */
    az_policy_state_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Apply expression for aggregations using OData notation. */
    az_policy_state_list_command_builder.prototype.apply = function (value) {
        this.setFlag("--apply", value);
        return this;
    };
    /** Expand expression using OData notation. */
    az_policy_state_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Filter expression using OData notation. */
    az_policy_state_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** ISO 8601 formatted timestamp specifying the start time of the interval to query. */
    az_policy_state_list_command_builder.prototype.from = function (value) {
        this.setFlag("--from", value);
        return this;
    };
    /** Name of management group. */
    az_policy_state_list_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Provider namespace (Ex: Microsoft.Provider). */
    az_policy_state_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Ordering expression using OData notation. */
    az_policy_state_list_command_builder.prototype.orderBy = function (value) {
        this.setFlag("--order-by", value);
        return this;
    };
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    az_policy_state_list_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name of policy assignment. */
    az_policy_state_list_command_builder.prototype.policyAssignment = function (value) {
        this.setFlag("--policy-assignment", value);
        return this;
    };
    /** Name of policy definition. */
    az_policy_state_list_command_builder.prototype.policyDefinition = function (value) {
        this.setFlag("--policy-definition", value);
        return this;
    };
    /** Name of policy set definition. */
    az_policy_state_list_command_builder.prototype.policySetDefinition = function (value) {
        this.setFlag("--policy-set-definition", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_policy_state_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    az_policy_state_list_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_state_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource type (Ex: resourceTypeC). */
    az_policy_state_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Select expression using OData notation. */
    az_policy_state_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_state_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** ISO 8601 formatted timestamp specifying the end time of the interval to query. */
    az_policy_state_list_command_builder.prototype.to = function (value) {
        this.setFlag("--to", value);
        return this;
    };
    /** Maximum number of records to return. */
    az_policy_state_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_policy_state_list_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_state_summarize_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_state_summarize_command_builder, _super);
    function az_policy_state_summarize_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter expression using OData notation. */
    az_policy_state_summarize_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** ISO 8601 formatted timestamp specifying the start time of the interval to query. */
    az_policy_state_summarize_command_builder.prototype.from = function (value) {
        this.setFlag("--from", value);
        return this;
    };
    /** Name of management group. */
    az_policy_state_summarize_command_builder.prototype.managementGroup = function (value) {
        this.setFlag("--management-group", value);
        return this;
    };
    /** Provider namespace (Ex: Microsoft.Provider). */
    az_policy_state_summarize_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB). */
    az_policy_state_summarize_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name of policy assignment. */
    az_policy_state_summarize_command_builder.prototype.policyAssignment = function (value) {
        this.setFlag("--policy-assignment", value);
        return this;
    };
    /** Name of policy definition. */
    az_policy_state_summarize_command_builder.prototype.policyDefinition = function (value) {
        this.setFlag("--policy-definition", value);
        return this;
    };
    /** Name of policy set definition. */
    az_policy_state_summarize_command_builder.prototype.policySetDefinition = function (value) {
        this.setFlag("--policy-set-definition", value);
        return this;
    };
    /** Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments. */
    az_policy_state_summarize_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_state_summarize_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Resource type (Ex: resourceTypeC). */
    az_policy_state_summarize_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_state_summarize_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** ISO 8601 formatted timestamp specifying the end time of the interval to query. */
    az_policy_state_summarize_command_builder.prototype.to = function (value) {
        this.setFlag("--to", value);
        return this;
    };
    /** Maximum number of records to return. */
    az_policy_state_summarize_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_policy_state_summarize_command_builder;
}(base_1.CommandBuilder));
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
var az_policy_state_trigger_scan_command_builder = /** @class */ (function (_super) {
    __extends(az_policy_state_trigger_scan_command_builder, _super);
    function az_policy_state_trigger_scan_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Do not wait for the long-running operation to finish. */
    az_policy_state_trigger_scan_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_policy_state_trigger_scan_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_policy_state_trigger_scan_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_policy_state_trigger_scan_command_builder;
}(base_1.CommandBuilder));
