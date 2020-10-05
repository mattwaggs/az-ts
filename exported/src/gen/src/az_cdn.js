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
exports.az_cdn = exports.az_cdn_waf = exports.az_cdn_waf_policy = exports.az_cdn_waf_policy_rate_limit_rule = exports.az_cdn_waf_policy_managed_rule_set = exports.az_cdn_waf_policy_managed_rule_set_rule_group_override = exports.az_cdn_waf_policy_custom_rule = exports.az_cdn_profile = exports.az_cdn_origin = exports.az_cdn_endpoint = exports.az_cdn_endpoint_waf = exports.az_cdn_endpoint_waf_policy = exports.az_cdn_endpoint_rule = exports.az_cdn_endpoint_rule_condition = exports.az_cdn_endpoint_rule_action = exports.az_cdn_edge_node = exports.az_cdn_custom_domain = void 0;
var base_1 = require("../base");
/** Manage Azure CDN Custom Domains to provide custom host names for endpoints. */
var az_cdn_custom_domain = /** @class */ (function () {
    function az_cdn_custom_domain() {
    }
    /**
     * Create a new custom domain to provide a hostname for a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn custom-domain create --endpoint-name
     *                             --hostname
     *                             --name
     *                             --profile-name
     *                             --resource-group
     *                             [--location]
     *                             [--subscription]
     *                             [--tags]
     * ```
     *
     * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
     * @param {string} hostname The host name of the custom domain. Must be a domain name.
     * @param {string} name Name of the custom domain.
     * @param {string} profileName Name of the CDN profile which is unique within the resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_custom_domain.create = function (endpointName, hostname, name, profileName, resourceGroup) {
        return new az_cdn_custom_domain_create_command_builder("az cdn custom-domain create", 'az_cdn_custom_domain_create_command_result', endpointName, hostname, name, profileName, resourceGroup);
    };
    /**
     * Delete the custom domain of a CDN.
     *
     * Syntax:
     * ```
     * az cdn custom-domain delete --endpoint-name
     *                             --name
     *                             --profile-name
     *                             --resource-group
     *                             [--subscription]
     * ```
     *
     * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
     * @param {string} name Name of the custom domain.
     * @param {string} profileName Name of the CDN profile which is unique within the resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_custom_domain["delete"] = function (endpointName, name, profileName, resourceGroup) {
        return new az_cdn_custom_domain_delete_command_builder("az cdn custom-domain delete", 'az_cdn_custom_domain_delete_command_result', endpointName, name, profileName, resourceGroup);
    };
    /**
     * Disable https delivery of the custom domain.
     *
     * Syntax:
     * ```
     * az cdn custom-domain disable-https --endpoint-name
     *                                    --name
     *                                    --profile-name
     *                                    --resource-group
     *                                    [--subscription]
     * ```
     *
     * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
     * @param {string} name Name of the custom domain.
     * @param {string} profileName Name of the CDN profile which is unique within the resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_custom_domain.disable_https = function (endpointName, name, profileName, resourceGroup) {
        return new az_cdn_custom_domain_disable_https_command_builder("az cdn custom-domain disable-https", 'az_cdn_custom_domain_disable_https_command_result', endpointName, name, profileName, resourceGroup);
    };
    /**
     * Enable HTTPS delivery of the custom domain.
     *
     * Syntax:
     * ```
     * az cdn custom-domain enable-https --endpoint-name
     *                                   --name
     *                                   --profile-name
     *                                   --resource-group
     *                                   [--min-tls-version {1.0, 1.2, none}]
     *                                   [--subscription]
     *                                   [--user-cert-group-name]
     *                                   [--user-cert-protocol-type {ip, sni}]
     *                                   [--user-cert-secret-name]
     *                                   [--user-cert-secret-version]
     *                                   [--user-cert-subscription-id]
     *                                   [--user-cert-vault-name]
     * ```
     *
     * @param {string} endpointName Name of the parent endpoint.
     * @param {string} name Name of the custom domain.
     * @param {string} profileName Name of the parent profile.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_custom_domain.enable_https = function (endpointName, name, profileName, resourceGroup) {
        return new az_cdn_custom_domain_enable_https_command_builder("az cdn custom-domain enable-https", 'az_cdn_custom_domain_enable_https_command_result', endpointName, name, profileName, resourceGroup);
    };
    /**
     * Lists all of the existing custom domains within an endpoint.
     *
     * Syntax:
     * ```
     * az cdn custom-domain list --endpoint-name
     *                           --profile-name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
     * @param {string} profileName Name of the CDN profile which is unique within the resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_custom_domain.list = function (endpointName, profileName, resourceGroup) {
        return new az_cdn_custom_domain_list_command_builder("az cdn custom-domain list", 'az_cdn_custom_domain_list_command_result', endpointName, profileName, resourceGroup);
    };
    /**
     * Show details for the custom domain of a CDN.
     *
     * Syntax:
     * ```
     * az cdn custom-domain show --endpoint-name
     *                           --name
     *                           --profile-name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
     * @param {string} name Name of the custom domain.
     * @param {string} profileName Name of the CDN profile which is unique within the resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_custom_domain.show = function (endpointName, name, profileName, resourceGroup) {
        return new az_cdn_custom_domain_show_command_builder("az cdn custom-domain show", 'az_cdn_custom_domain_show_command_result', endpointName, name, profileName, resourceGroup);
    };
    return az_cdn_custom_domain;
}());
exports.az_cdn_custom_domain = az_cdn_custom_domain;
/** View all available CDN edge nodes. */
var az_cdn_edge_node = /** @class */ (function () {
    function az_cdn_edge_node() {
    }
    /**
     * Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users.
     *
     * Syntax:
     * ```
     * az cdn edge-node list [--query-examples]
     *                       [--subscription]
     * ```
     */
    az_cdn_edge_node.list = function () {
        return new az_cdn_edge_node_list_command_builder("az cdn edge-node list", 'az_cdn_edge_node_list_command_result');
    };
    return az_cdn_edge_node;
}());
exports.az_cdn_edge_node = az_cdn_edge_node;
/** Manage delivery rule actions for an endpoint. */
var az_cdn_endpoint_rule_action = /** @class */ (function () {
    function az_cdn_endpoint_rule_action() {
    }
    /**
     * Add an action to a delivery rule.
     *
     * Syntax:
     * ```
     * az cdn endpoint rule action add --action-name
     *                                 --rule-name
     *                                 [--cache-behavior {BypassCache, Override, SetIfMissing}]
     *                                 [--cache-duration]
     *                                 [--custom-fragment]
     *                                 [--custom-hostname]
     *                                 [--custom-path]
     *                                 [--custom-querystring]
     *                                 [--destination]
     *                                 [--header-action {Append, Delete, Overwrite}]
     *                                 [--header-name]
     *                                 [--header-value]
     *                                 [--ids]
     *                                 [--name]
     *                                 [--preserve-unmatched-path {false, true}]
     *                                 [--profile-name]
     *                                 [--query-parameters]
     *                                 [--query-string-behavior {Exclude, ExcludeAll, Include, IncludeAll}]
     *                                 [--redirect-protocol {Http, Https, MatchRequest}]
     *                                 [--redirect-type {Found, Moved, PermanentRedirect, TemporaryRedirect}]
     *                                 [--resource-group]
     *                                 [--source-pattern]
     *                                 [--subscription]
     * ```
     *
     * @param {string} actionName Name of the action.
     * @param {string} ruleName Name of the rule.
     */
    az_cdn_endpoint_rule_action.add = function (actionName, ruleName) {
        return new az_cdn_endpoint_rule_action_add_command_builder("az cdn endpoint rule action add", 'az_cdn_endpoint_rule_action_add_command_result', actionName, ruleName);
    };
    /**
     * Remove an action from a delivery rule.
     *
     * Syntax:
     * ```
     * az cdn endpoint rule action remove --index
     *                                    --rule-name
     *                                    [--ids]
     *                                    [--name]
     *                                    [--profile-name]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} index The index of the condition/action.
     * @param {string} ruleName Name of the rule.
     */
    az_cdn_endpoint_rule_action.remove = function (index, ruleName) {
        return new az_cdn_endpoint_rule_action_remove_command_builder("az cdn endpoint rule action remove", 'az_cdn_endpoint_rule_action_remove_command_result', index, ruleName);
    };
    /**
     * Show delivery rules asscociate with the endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint rule action show [--ids]
     *                                  [--name]
     *                                  [--profile-name]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_cdn_endpoint_rule_action.show = function () {
        return new az_cdn_endpoint_rule_action_show_command_builder("az cdn endpoint rule action show", 'az_cdn_endpoint_rule_action_show_command_result');
    };
    return az_cdn_endpoint_rule_action;
}());
exports.az_cdn_endpoint_rule_action = az_cdn_endpoint_rule_action;
/** Manage delivery rule conditions for an endpoint. */
var az_cdn_endpoint_rule_condition = /** @class */ (function () {
    function az_cdn_endpoint_rule_condition() {
    }
    /**
     * Add a condition to a delivery rule.
     *
     * Syntax:
     * ```
     * az cdn endpoint rule condition add --match-variable
     *                                    --operator
     *                                    --rule-name
     *                                    [--ids]
     *                                    [--match-values]
     *                                    [--name]
     *                                    [--negate-condition {false, true}]
     *                                    [--profile-name]
     *                                    [--resource-group]
     *                                    [--selector]
     *                                    [--subscription]
     *                                    [--transform {Lowercase, Uppercase}]
     * ```
     *
     * @param {string} matchVariable Name of the match condition.
     * @param {string} operator Operator of the match condition.
     * @param {string} ruleName Name of the rule.
     */
    az_cdn_endpoint_rule_condition.add = function (matchVariable, operator, ruleName) {
        return new az_cdn_endpoint_rule_condition_add_command_builder("az cdn endpoint rule condition add", 'az_cdn_endpoint_rule_condition_add_command_result', matchVariable, operator, ruleName);
    };
    /**
     * Remove a condition from a delivery rule.
     *
     * Syntax:
     * ```
     * az cdn endpoint rule condition remove --index
     *                                       --rule-name
     *                                       [--ids]
     *                                       [--name]
     *                                       [--profile-name]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     *
     * @param {string} index The index of the condition/action.
     * @param {string} ruleName Name of the rule.
     */
    az_cdn_endpoint_rule_condition.remove = function (index, ruleName) {
        return new az_cdn_endpoint_rule_condition_remove_command_builder("az cdn endpoint rule condition remove", 'az_cdn_endpoint_rule_condition_remove_command_result', index, ruleName);
    };
    /**
     * Show delivery rules asscociate with the endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint rule condition show [--ids]
     *                                     [--name]
     *                                     [--profile-name]
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    az_cdn_endpoint_rule_condition.show = function () {
        return new az_cdn_endpoint_rule_condition_show_command_builder("az cdn endpoint rule condition show", 'az_cdn_endpoint_rule_condition_show_command_result');
    };
    return az_cdn_endpoint_rule_condition;
}());
exports.az_cdn_endpoint_rule_condition = az_cdn_endpoint_rule_condition;
/** Manage delivery rules for an endpoint. */
var az_cdn_endpoint_rule = /** @class */ (function () {
    function az_cdn_endpoint_rule() {
    }
    /**
     * Add a delivery rule to a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint rule add --action-name
     *                          --order
     *                          --rule-name
     *                          [--cache-behavior {BypassCache, Override, SetIfMissing}]
     *                          [--cache-duration]
     *                          [--custom-fragment]
     *                          [--custom-hostname]
     *                          [--custom-path]
     *                          [--custom-querystring]
     *                          [--destination]
     *                          [--header-action {Append, Delete, Overwrite}]
     *                          [--header-name]
     *                          [--header-value]
     *                          [--ids]
     *                          [--match-values]
     *                          [--match-variable]
     *                          [--name]
     *                          [--negate-condition {false, true}]
     *                          [--operator]
     *                          [--preserve-unmatched-path {false, true}]
     *                          [--profile-name]
     *                          [--query-parameters]
     *                          [--query-string-behavior {Exclude, ExcludeAll, Include, IncludeAll}]
     *                          [--redirect-protocol {Http, Https, MatchRequest}]
     *                          [--redirect-type {Found, Moved, PermanentRedirect, TemporaryRedirect}]
     *                          [--resource-group]
     *                          [--selector]
     *                          [--source-pattern]
     *                          [--subscription]
     *                          [--transform {Lowercase, Uppercase}]
     * ```
     *
     * @param {string} actionName Name of the action.
     * @param {string} order The order of the rule. The order number must start from 0 and consecutive.                    Rule with higher order will be applied later.
     * @param {string} ruleName Name of the rule.
     */
    az_cdn_endpoint_rule.add = function (actionName, order, ruleName) {
        return new az_cdn_endpoint_rule_add_command_builder("az cdn endpoint rule add", 'az_cdn_endpoint_rule_add_command_result', actionName, order, ruleName);
    };
    /**
     * Remove a delivery rule from an endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint rule remove --rule-name
     *                             [--ids]
     *                             [--name]
     *                             [--profile-name]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} ruleName Name of the rule.
     */
    az_cdn_endpoint_rule.remove = function (ruleName) {
        return new az_cdn_endpoint_rule_remove_command_builder("az cdn endpoint rule remove", 'az_cdn_endpoint_rule_remove_command_result', ruleName);
    };
    /**
     * Show delivery rules asscociate with the endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint rule show [--ids]
     *                           [--name]
     *                           [--profile-name]
     *                           [--query-examples]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_cdn_endpoint_rule.show = function () {
        return new az_cdn_endpoint_rule_show_command_builder("az cdn endpoint rule show", 'az_cdn_endpoint_rule_show_command_result');
    };
    return az_cdn_endpoint_rule;
}());
exports.az_cdn_endpoint_rule = az_cdn_endpoint_rule;
/** Apply a CDN WAF policy to a CDN endpoint. */
var az_cdn_endpoint_waf_policy = /** @class */ (function () {
    function az_cdn_endpoint_waf_policy() {
    }
    /**
     * Remove a CDN WAF policy from a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint waf policy remove [--endpoint-name]
     *                                   [--ids]
     *                                   [--profile-name]
     *                                   [--resource-group]
     *                                   [--subscription]
     *                                   [--yes]
     * ```
     */
    az_cdn_endpoint_waf_policy.remove = function () {
        return new az_cdn_endpoint_waf_policy_remove_command_builder("az cdn endpoint waf policy remove", 'az_cdn_endpoint_waf_policy_remove_command_result');
    };
    /**
     * Set the CDN WAF policy applied to a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint waf policy set [--endpoint-name]
     *                                [--ids]
     *                                [--profile-name]
     *                                [--resource-group]
     *                                [--subscription]
     *                                [--waf-policy-id]
     *                                [--waf-policy-name]
     *                                [--waf-policy-resource-group-name]
     *                                [--waf-policy-subscription-id]
     * ```
     */
    az_cdn_endpoint_waf_policy.set = function () {
        return new az_cdn_endpoint_waf_policy_set_command_builder("az cdn endpoint waf policy set", 'az_cdn_endpoint_waf_policy_set_command_result');
    };
    /**
     * Show which CDN WAF policy is applied to a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint waf policy show [--endpoint-name]
     *                                 [--ids]
     *                                 [--profile-name]
     *                                 [--query-examples]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_cdn_endpoint_waf_policy.show = function () {
        return new az_cdn_endpoint_waf_policy_show_command_builder("az cdn endpoint waf policy show", 'az_cdn_endpoint_waf_policy_show_command_result');
    };
    return az_cdn_endpoint_waf_policy;
}());
exports.az_cdn_endpoint_waf_policy = az_cdn_endpoint_waf_policy;
/** Manage WAF properties of a CDN endpoint. */
var az_cdn_endpoint_waf = /** @class */ (function () {
    function az_cdn_endpoint_waf() {
    }
    return az_cdn_endpoint_waf;
}());
exports.az_cdn_endpoint_waf = az_cdn_endpoint_waf;
/** Manage CDN endpoints. */
var az_cdn_endpoint = /** @class */ (function () {
    function az_cdn_endpoint() {
    }
    /**
     * Create a named endpoint to connect to a CDN.
     *
     * Syntax:
     * ```
     * az cdn endpoint create --name
     *                        --origin
     *                        --profile-name
     *                        --resource-group
     *                        [--content-types-to-compress]
     *                        [--enable-compression {false, true}]
     *                        [--location]
     *                        [--no-http {false, true}]
     *                        [--no-https {false, true}]
     *                        [--no-wait]
     *                        [--origin-host-header]
     *                        [--origin-path]
     *                        [--query-string-caching-behavior]
     *                        [--subscription]
     *                        [--tags]
     * ```
     *
     * @param {string} name Name of the CDN endpoint.
     * @param {string} origin Endpoint origin specified by the following space-delimited 6 tuple: `www.example.com http_port https_port private_link_resource_id private_link_location private_link_approval_message`. The HTTP and HTTPS ports and the private link resource ID and location are optional. The HTTP and HTTPS ports default to 80 and 443, respectively. Private link fields are only valid for the sku Standard_Microsoft, and private_link_location is required if private_link_resource_id is set.
     * @param {string} profileName Name of the CDN profile which is unique within the resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_endpoint.create = function (name, origin, profileName, resourceGroup) {
        return new az_cdn_endpoint_create_command_builder("az cdn endpoint create", 'az_cdn_endpoint_create_command_result', name, origin, profileName, resourceGroup);
    };
    /**
     * Delete a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint delete [--ids]
     *                        [--name]
     *                        [--no-wait]
     *                        [--profile-name]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_cdn_endpoint["delete"] = function () {
        return new az_cdn_endpoint_delete_command_builder("az cdn endpoint delete", 'az_cdn_endpoint_delete_command_result');
    };
    /**
     * List available endpoints for a CDN.
     *
     * Syntax:
     * ```
     * az cdn endpoint list --profile-name
     *                      --resource-group
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} profileName Name of the CDN profile which is unique within the resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_endpoint.list = function (profileName, resourceGroup) {
        return new az_cdn_endpoint_list_command_builder("az cdn endpoint list", 'az_cdn_endpoint_list_command_result', profileName, resourceGroup);
    };
    /**
     * Pre-load content for a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint load --content-paths
     *                      [--ids]
     *                      [--name]
     *                      [--no-wait]
     *                      [--profile-name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     *
     * @param {string} contentPaths The path to the content to be loaded. Path should be a relative file URL of the origin.
     */
    az_cdn_endpoint.load = function (contentPaths) {
        return new az_cdn_endpoint_load_command_builder("az cdn endpoint load", 'az_cdn_endpoint_load_command_result', contentPaths);
    };
    /**
     * Purge pre-loaded content for a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint purge --content-paths
     *                       [--ids]
     *                       [--name]
     *                       [--no-wait]
     *                       [--profile-name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} contentPaths The path to the content to be purged. Can describe a file path or a wild card directory.
     */
    az_cdn_endpoint.purge = function (contentPaths) {
        return new az_cdn_endpoint_purge_command_builder("az cdn endpoint purge", 'az_cdn_endpoint_purge_command_result', contentPaths);
    };
    /**
     * Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
     *
     * Syntax:
     * ```
     * az cdn endpoint show [--ids]
     *                      [--name]
     *                      [--profile-name]
     *                      [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_cdn_endpoint.show = function () {
        return new az_cdn_endpoint_show_command_builder("az cdn endpoint show", 'az_cdn_endpoint_show_command_result');
    };
    /**
     * Start a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint start [--ids]
     *                       [--name]
     *                       [--no-wait]
     *                       [--profile-name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_cdn_endpoint.start = function () {
        return new az_cdn_endpoint_start_command_builder("az cdn endpoint start", 'az_cdn_endpoint_start_command_result');
    };
    /**
     * Stop a CDN endpoint.
     *
     * Syntax:
     * ```
     * az cdn endpoint stop [--ids]
     *                      [--name]
     *                      [--no-wait]
     *                      [--profile-name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_cdn_endpoint.stop = function () {
        return new az_cdn_endpoint_stop_command_builder("az cdn endpoint stop", 'az_cdn_endpoint_stop_command_result');
    };
    /**
     * Update a CDN endpoint to manage how content is delivered.
     *
     * Syntax:
     * ```
     * az cdn endpoint update [--add]
     *                        [--content-types-to-compress]
     *                        [--enable-compression {false, true}]
     *                        [--force-string]
     *                        [--ids]
     *                        [--name]
     *                        [--no-http {false, true}]
     *                        [--no-https {false, true}]
     *                        [--no-wait]
     *                        [--origin-host-header]
     *                        [--origin-path]
     *                        [--profile-name]
     *                        [--query-string-caching {BypassCaching, IgnoreQueryString, NotSet, UseQueryString}]
     *                        [--remove]
     *                        [--resource-group]
     *                        [--set]
     *                        [--subscription]
     *                        [--tags]
     * ```
     */
    az_cdn_endpoint.update = function () {
        return new az_cdn_endpoint_update_command_builder("az cdn endpoint update", 'az_cdn_endpoint_update_command_result');
    };
    /**
     * Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.
     *
     * Syntax:
     * ```
     * az cdn endpoint validate-custom-domain --host-name
     *                                        [--ids]
     *                                        [--name]
     *                                        [--profile-name]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     *
     * @param {string} hostName The host name of the custom domain. Must be a domain name.
     */
    az_cdn_endpoint.validate_custom_domain = function (hostName) {
        return new az_cdn_endpoint_validate_custom_domain_command_builder("az cdn endpoint validate-custom-domain", 'az_cdn_endpoint_validate_custom_domain_command_result', hostName);
    };
    return az_cdn_endpoint;
}());
exports.az_cdn_endpoint = az_cdn_endpoint;
/** List or show existing origins related to CDN endpoints. */
var az_cdn_origin = /** @class */ (function () {
    function az_cdn_origin() {
    }
    /**
     * Lists all of the existing origins within an endpoint.
     *
     * Syntax:
     * ```
     * az cdn origin list --endpoint-name
     *                    --profile-name
     *                    --resource-group
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} endpointName Name of the CDN endpoint.
     * @param {string} profileName Name of the CDN profile which is unique within the resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_origin.list = function (endpointName, profileName, resourceGroup) {
        return new az_cdn_origin_list_command_builder("az cdn origin list", 'az_cdn_origin_list_command_result', endpointName, profileName, resourceGroup);
    };
    /**
     * Gets an existing origin within an endpoint.
     *
     * Syntax:
     * ```
     * az cdn origin show [--endpoint-name]
     *                    [--ids]
     *                    [--name]
     *                    [--profile-name]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_cdn_origin.show = function () {
        return new az_cdn_origin_show_command_builder("az cdn origin show", 'az_cdn_origin_show_command_result');
    };
    /**
     * Update an origin.
     *
     * Syntax:
     * ```
     * az cdn origin update [--endpoint-name]
     *                      [--http-port]
     *                      [--https-port]
     *                      [--ids]
     *                      [--name]
     *                      [--private-link-approval-message]
     *                      [--private-link-location]
     *                      [--private-link-resource-id]
     *                      [--profile-name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_cdn_origin.update = function () {
        return new az_cdn_origin_update_command_builder("az cdn origin update", 'az_cdn_origin_update_command_result');
    };
    return az_cdn_origin;
}());
exports.az_cdn_origin = az_cdn_origin;
/** Manage CDN profiles to define an edge network. */
var az_cdn_profile = /** @class */ (function () {
    function az_cdn_profile() {
    }
    /**
     * Create a new CDN profile.
     *
     * Syntax:
     * ```
     * az cdn profile create --name
     *                       --resource-group
     *                       [--location]
     *                       [--sku {Custom_Verizon, Premium_ChinaCdn, Premium_Verizon, Standard_Akamai, Standard_ChinaCdn, Standard_Microsoft, Standard_Verizon}]
     *                       [--subscription]
     *                       [--tags]
     * ```
     *
     * @param {string} name Name of the CDN profile which is unique within the resource group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_profile.create = function (name, resourceGroup) {
        return new az_cdn_profile_create_command_builder("az cdn profile create", 'az_cdn_profile_create_command_result', name, resourceGroup);
    };
    /**
     * Delete a CDN profile.
     *
     * Syntax:
     * ```
     * az cdn profile delete [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_cdn_profile["delete"] = function () {
        return new az_cdn_profile_delete_command_builder("az cdn profile delete", 'az_cdn_profile_delete_command_result');
    };
    /**
     * List CDN profiles.
     *
     * Syntax:
     * ```
     * az cdn profile list [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_cdn_profile.list = function () {
        return new az_cdn_profile_list_command_builder("az cdn profile list", 'az_cdn_profile_list_command_result');
    };
    /**
     * Gets a CDN profile with the specified profile name under the specified subscription and resource group.
     *
     * Syntax:
     * ```
     * az cdn profile show [--ids]
     *                     [--name]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_cdn_profile.show = function () {
        return new az_cdn_profile_show_command_builder("az cdn profile show", 'az_cdn_profile_show_command_result');
    };
    /**
     * Update a CDN profile.
     *
     * Syntax:
     * ```
     * az cdn profile update [--add]
     *                       [--force-string]
     *                       [--ids]
     *                       [--name]
     *                       [--remove]
     *                       [--resource-group]
     *                       [--set]
     *                       [--subscription]
     *                       [--tags]
     * ```
     */
    az_cdn_profile.update = function () {
        return new az_cdn_profile_update_command_builder("az cdn profile update", 'az_cdn_profile_update_command_result');
    };
    /**
     * Checks the quota and actual usage of endpoints under the given CDN profile.
     *
     * Syntax:
     * ```
     * az cdn profile usage [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_cdn_profile.usage = function () {
        return new az_cdn_profile_usage_command_builder("az cdn profile usage", 'az_cdn_profile_usage_command_result');
    };
    return az_cdn_profile;
}());
exports.az_cdn_profile = az_cdn_profile;
/** Manage custom rules of a CDN WAF policy. */
var az_cdn_waf_policy_custom_rule = /** @class */ (function () {
    function az_cdn_waf_policy_custom_rule() {
    }
    /**
     * Remove a custom rule from a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy custom-rule delete --name
     *                                      [--ids]
     *                                      [--policy-name]
     *                                      [--resource-group]
     *                                      [--subscription]
     *                                      [--yes]
     * ```
     *
     * @param {string} name The name of the custom rule.
     */
    az_cdn_waf_policy_custom_rule["delete"] = function (name) {
        return new az_cdn_waf_policy_custom_rule_delete_command_builder("az cdn waf policy custom-rule delete", 'az_cdn_waf_policy_custom_rule_delete_command_result', name);
    };
    /**
     * List custom rules of a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy custom-rule list --policy-name
     *                                    --resource-group
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} policyName Name of the CDN WAF policy.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_waf_policy_custom_rule.list = function (policyName, resourceGroup) {
        return new az_cdn_waf_policy_custom_rule_list_command_builder("az cdn waf policy custom-rule list", 'az_cdn_waf_policy_custom_rule_list_command_result', policyName, resourceGroup);
    };
    /**
     * Add a custom rule to a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy custom-rule set --action {Allow, Block, Log, Redirect}
     *                                   --match-condition
     *                                   --name
     *                                   --priority
     *                                   [--disabled]
     *                                   [--ids]
     *                                   [--policy-name]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     *
     * @param {'Allow' | 'Block' | 'Log' | 'Redirect'} action The action to take when the rule is matched.
     * @param {string} matchCondition Conditions used to determine if the rule is matched for a request.
     * @param {string} name The name of the custom rule.
     * @param {string} priority The priority of the custom rule as a non-negative integer.
     */
    az_cdn_waf_policy_custom_rule.set = function (action, matchCondition, name, priority) {
        return new az_cdn_waf_policy_custom_rule_set_command_builder("az cdn waf policy custom-rule set", 'az_cdn_waf_policy_custom_rule_set_command_result', action, matchCondition, name, priority);
    };
    /**
     * Show a custom rule of a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy custom-rule show --name
     *                                    [--ids]
     *                                    [--policy-name]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name The name of the custom rule.
     */
    az_cdn_waf_policy_custom_rule.show = function (name) {
        return new az_cdn_waf_policy_custom_rule_show_command_builder("az cdn waf policy custom-rule show", 'az_cdn_waf_policy_custom_rule_show_command_result', name);
    };
    return az_cdn_waf_policy_custom_rule;
}());
exports.az_cdn_waf_policy_custom_rule = az_cdn_waf_policy_custom_rule;
/** Manage rule group overrides of a managed rule on a CDN WAF policy. */
var az_cdn_waf_policy_managed_rule_set_rule_group_override = /** @class */ (function () {
    function az_cdn_waf_policy_managed_rule_set_rule_group_override() {
    }
    /**
     * Remove a rule group override from a managed rule set on a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set rule-group-override delete --name
     *                                                               --rule-set-type
     *                                                               --rule-set-version
     *                                                               [--ids]
     *                                                               [--policy-name]
     *                                                               [--resource-group]
     *                                                               [--subscription]
     *                                                               [--yes]
     * ```
     *
     * @param {string} name The name of the rule group.
     * @param {string} ruleSetType The type of the managed rule set.
     * @param {string} ruleSetVersion The version of the managed rule set.
     */
    az_cdn_waf_policy_managed_rule_set_rule_group_override["delete"] = function (name, ruleSetType, ruleSetVersion) {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder("az cdn waf policy managed-rule-set rule-group-override delete", 'az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_result', name, ruleSetType, ruleSetVersion);
    };
    /**
     * List rule group overrides of a managed rule on a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set rule-group-override list --policy-name
     *                                                             --resource-group
     *                                                             --rule-set-type
     *                                                             --rule-set-version
     *                                                             [--query-examples]
     *                                                             [--subscription]
     * ```
     *
     * @param {string} policyName Name of the CDN WAF policy.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} ruleSetType The type of the managed rule set.
     * @param {string} ruleSetVersion The version of the managed rule set.
     */
    az_cdn_waf_policy_managed_rule_set_rule_group_override.list = function (policyName, resourceGroup, ruleSetType, ruleSetVersion) {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder("az cdn waf policy managed-rule-set rule-group-override list", 'az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_result', policyName, resourceGroup, ruleSetType, ruleSetVersion);
    };
    /**
     * List available CDN WAF managed rule groups of a managed rule set.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set rule-group-override list-available --rule-set-type
     *                                                                       --rule-set-version
     *                                                                       [--subscription]
     * ```
     *
     * @param {string} ruleSetType The type of the managed rule set.
     * @param {string} ruleSetVersion The version of the managed rule set.
     */
    az_cdn_waf_policy_managed_rule_set_rule_group_override.list_available = function (ruleSetType, ruleSetVersion) {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder("az cdn waf policy managed-rule-set rule-group-override list-available", 'az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_result', ruleSetType, ruleSetVersion);
    };
    /**
     * Add or update a rule group override to a managed rule set on a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set rule-group-override set --name
     *                                                            --rule-override
     *                                                            --rule-set-type
     *                                                            --rule-set-version
     *                                                            [--ids]
     *                                                            [--policy-name]
     *                                                            [--resource-group]
     *                                                            [--subscription]
     * ```
     *
     * @param {string} name The name of the rule group.
     * @param {string} ruleOverride Override a rule in the rule group.
     * @param {string} ruleSetType The type of the managed rule set.
     * @param {string} ruleSetVersion The version of the managed rule set.
     */
    az_cdn_waf_policy_managed_rule_set_rule_group_override.set = function (name, ruleOverride, ruleSetType, ruleSetVersion) {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder("az cdn waf policy managed-rule-set rule-group-override set", 'az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_result', name, ruleOverride, ruleSetType, ruleSetVersion);
    };
    /**
     * Show a rule group override of a managed rule on a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set rule-group-override show --name
     *                                                             --rule-set-type
     *                                                             --rule-set-version
     *                                                             [--ids]
     *                                                             [--policy-name]
     *                                                             [--query-examples]
     *                                                             [--resource-group]
     *                                                             [--subscription]
     * ```
     *
     * @param {string} name The name of the rule group.
     * @param {string} ruleSetType The type of the managed rule set.
     * @param {string} ruleSetVersion The version of the managed rule set.
     */
    az_cdn_waf_policy_managed_rule_set_rule_group_override.show = function (name, ruleSetType, ruleSetVersion) {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder("az cdn waf policy managed-rule-set rule-group-override show", 'az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_result', name, ruleSetType, ruleSetVersion);
    };
    return az_cdn_waf_policy_managed_rule_set_rule_group_override;
}());
exports.az_cdn_waf_policy_managed_rule_set_rule_group_override = az_cdn_waf_policy_managed_rule_set_rule_group_override;
/** Manage managed rule sets of a CDN WAF policy. */
var az_cdn_waf_policy_managed_rule_set = /** @class */ (function () {
    function az_cdn_waf_policy_managed_rule_set() {
    }
    /**
     * Add a managed rule set to a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set add --rule-set-type
     *                                        --rule-set-version
     *                                        [--ids]
     *                                        [--policy-name]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     *
     * @param {string} ruleSetType The type of the managed rule set.
     * @param {string} ruleSetVersion The version of the managed rule set.
     */
    az_cdn_waf_policy_managed_rule_set.add = function (ruleSetType, ruleSetVersion) {
        return new az_cdn_waf_policy_managed_rule_set_add_command_builder("az cdn waf policy managed-rule-set add", 'az_cdn_waf_policy_managed_rule_set_add_command_result', ruleSetType, ruleSetVersion);
    };
    /**
     * List managed rule sets added to a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set list --policy-name
     *                                         --resource-group
     *                                         [--query-examples]
     *                                         [--subscription]
     * ```
     *
     * @param {string} policyName Name of the CDN WAF policy.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_waf_policy_managed_rule_set.list = function (policyName, resourceGroup) {
        return new az_cdn_waf_policy_managed_rule_set_list_command_builder("az cdn waf policy managed-rule-set list", 'az_cdn_waf_policy_managed_rule_set_list_command_result', policyName, resourceGroup);
    };
    /**
     * List available CDN WAF managed rule sets.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set list-available [--subscription]
     * ```
     */
    az_cdn_waf_policy_managed_rule_set.list_available = function () {
        return new az_cdn_waf_policy_managed_rule_set_list_available_command_builder("az cdn waf policy managed-rule-set list-available", 'az_cdn_waf_policy_managed_rule_set_list_available_command_result');
    };
    /**
     * Remove a managed rule set from a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set remove --rule-set-type
     *                                           --rule-set-version
     *                                           [--ids]
     *                                           [--policy-name]
     *                                           [--resource-group]
     *                                           [--subscription]
     *                                           [--yes]
     * ```
     *
     * @param {string} ruleSetType The type of the managed rule set.
     * @param {string} ruleSetVersion The version of the managed rule set.
     */
    az_cdn_waf_policy_managed_rule_set.remove = function (ruleSetType, ruleSetVersion) {
        return new az_cdn_waf_policy_managed_rule_set_remove_command_builder("az cdn waf policy managed-rule-set remove", 'az_cdn_waf_policy_managed_rule_set_remove_command_result', ruleSetType, ruleSetVersion);
    };
    /**
     * Show a managed rule of a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set show --rule-set-type
     *                                         --rule-set-version
     *                                         [--ids]
     *                                         [--policy-name]
     *                                         [--query-examples]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     *
     * @param {string} ruleSetType The type of the managed rule set.
     * @param {string} ruleSetVersion The version of the managed rule set.
     */
    az_cdn_waf_policy_managed_rule_set.show = function (ruleSetType, ruleSetVersion) {
        return new az_cdn_waf_policy_managed_rule_set_show_command_builder("az cdn waf policy managed-rule-set show", 'az_cdn_waf_policy_managed_rule_set_show_command_result', ruleSetType, ruleSetVersion);
    };
    return az_cdn_waf_policy_managed_rule_set;
}());
exports.az_cdn_waf_policy_managed_rule_set = az_cdn_waf_policy_managed_rule_set;
/** Manage rate limit rules of a CDN WAF policy. */
var az_cdn_waf_policy_rate_limit_rule = /** @class */ (function () {
    function az_cdn_waf_policy_rate_limit_rule() {
    }
    /**
     * Remove a rate limit rule from a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy rate-limit-rule delete --name
     *                                          [--ids]
     *                                          [--policy-name]
     *                                          [--resource-group]
     *                                          [--subscription]
     *                                          [--yes]
     * ```
     *
     * @param {string} name The name of the rate limit rule.
     */
    az_cdn_waf_policy_rate_limit_rule["delete"] = function (name) {
        return new az_cdn_waf_policy_rate_limit_rule_delete_command_builder("az cdn waf policy rate-limit-rule delete", 'az_cdn_waf_policy_rate_limit_rule_delete_command_result', name);
    };
    /**
     * List rate limit rules of a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy rate-limit-rule list --policy-name
     *                                        --resource-group
     *                                        [--query-examples]
     *                                        [--subscription]
     * ```
     *
     * @param {string} policyName Name of the CDN WAF policy.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_waf_policy_rate_limit_rule.list = function (policyName, resourceGroup) {
        return new az_cdn_waf_policy_rate_limit_rule_list_command_builder("az cdn waf policy rate-limit-rule list", 'az_cdn_waf_policy_rate_limit_rule_list_command_result', policyName, resourceGroup);
    };
    /**
     * Add a rate limit rule to a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy rate-limit-rule set --action {Allow, Block, Log, Redirect}
     *                                       --duration
     *                                       --match-condition
     *                                       --name
     *                                       --priority
     *                                       --request-threshold
     *                                       [--disabled]
     *                                       [--ids]
     *                                       [--policy-name]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     *
     * @param {'Allow' | 'Block' | 'Log' | 'Redirect'} action The action to take when the rule is matched.
     * @param {string} duration The duration of the rate limit in minutes. Valid values are 1 and 5.
     * @param {string} matchCondition Conditions used to determine if the rule is matched for a request.
     * @param {string} name The name of the rate limit rule.
     * @param {string} priority The priority of the rate limit rule as a non-negative integer.
     * @param {string} requestThreshold The request threshold to trigger rate limiting.
     */
    az_cdn_waf_policy_rate_limit_rule.set = function (action, duration, matchCondition, name, priority, requestThreshold) {
        return new az_cdn_waf_policy_rate_limit_rule_set_command_builder("az cdn waf policy rate-limit-rule set", 'az_cdn_waf_policy_rate_limit_rule_set_command_result', action, duration, matchCondition, name, priority, requestThreshold);
    };
    /**
     * Show a rate limit rule of a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy rate-limit-rule show --name
     *                                        [--ids]
     *                                        [--policy-name]
     *                                        [--query-examples]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     *
     * @param {string} name The name of the rate limit rule.
     */
    az_cdn_waf_policy_rate_limit_rule.show = function (name) {
        return new az_cdn_waf_policy_rate_limit_rule_show_command_builder("az cdn waf policy rate-limit-rule show", 'az_cdn_waf_policy_rate_limit_rule_show_command_result', name);
    };
    return az_cdn_waf_policy_rate_limit_rule;
}());
exports.az_cdn_waf_policy_rate_limit_rule = az_cdn_waf_policy_rate_limit_rule;
/** Manage CDN WAF policies. */
var az_cdn_waf_policy = /** @class */ (function () {
    function az_cdn_waf_policy() {
    }
    /**
     * Delete a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy delete [--ids]
     *                          [--name]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--yes]
     * ```
     */
    az_cdn_waf_policy["delete"] = function () {
        return new az_cdn_waf_policy_delete_command_builder("az cdn waf policy delete", 'az_cdn_waf_policy_delete_command_result');
    };
    /**
     * List CDN WAF policies.
     *
     * Syntax:
     * ```
     * az cdn waf policy list --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cdn_waf_policy.list = function (resourceGroup) {
        return new az_cdn_waf_policy_list_command_builder("az cdn waf policy list", 'az_cdn_waf_policy_list_command_result', resourceGroup);
    };
    /**
     * Create a new CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy set [--block-response-body]
     *                       [--block-response-status-code]
     *                       [--disabled {false, true}]
     *                       [--ids]
     *                       [--mode]
     *                       [--name]
     *                       [--redirect-url]
     *                       [--resource-group]
     *                       [--sku]
     *                       [--subscription]
     *                       [--tags]
     * ```
     */
    az_cdn_waf_policy.set = function () {
        return new az_cdn_waf_policy_set_command_builder("az cdn waf policy set", 'az_cdn_waf_policy_set_command_result');
    };
    /**
     * Show details of a CDN WAF policy.
     *
     * Syntax:
     * ```
     * az cdn waf policy show [--ids]
     *                        [--name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_cdn_waf_policy.show = function () {
        return new az_cdn_waf_policy_show_command_builder("az cdn waf policy show", 'az_cdn_waf_policy_show_command_result');
    };
    return az_cdn_waf_policy;
}());
exports.az_cdn_waf_policy = az_cdn_waf_policy;
/** */
var az_cdn_waf = /** @class */ (function () {
    function az_cdn_waf() {
    }
    return az_cdn_waf;
}());
exports.az_cdn_waf = az_cdn_waf;
/** Manage Azure Content Delivery Networks (CDNs). */
var az_cdn = /** @class */ (function () {
    function az_cdn() {
    }
    /**
     * Check the availability of a resource name.
     *
     * Syntax:
     * ```
     * az cdn name-exists [--ids]
     *                    [--name]
     *                    [--subscription]
     * ```
     */
    az_cdn.name_exists = function () {
        return new az_cdn_name_exists_command_builder("az cdn name-exists", 'az_cdn_name_exists_command_result');
    };
    /**
     * Check the quota and actual usage of the CDN profiles under the given subscription.
     *
     * Syntax:
     * ```
     * az cdn usage [--subscription]
     * ```
     */
    az_cdn.usage = function () {
        return new az_cdn_usage_command_builder("az cdn usage", 'az_cdn_usage_command_result');
    };
    return az_cdn;
}());
exports.az_cdn = az_cdn;
/**
 * Create a new custom domain to provide a hostname for a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn custom-domain create --endpoint-name
 *                             --hostname
 *                             --name
 *                             --profile-name
 *                             --resource-group
 *                             [--location]
 *                             [--subscription]
 *                             [--tags]
 * ```
 *
 * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
 * @param {string} hostname The host name of the custom domain. Must be a domain name.
 * @param {string} name Name of the custom domain.
 * @param {string} profileName Name of the CDN profile which is unique within the resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_custom_domain_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_custom_domain_create_command_builder, _super);
    function az_cdn_custom_domain_create_command_builder(commandPath, resultDataTypeName, endpointName, hostname, name, profileName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        _this.hostname(hostname);
        _this.name(name);
        _this.profileName(profileName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the endpoint under the profile which is unique globally. */
    az_cdn_custom_domain_create_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** The host name of the custom domain. Must be a domain name. */
    az_cdn_custom_domain_create_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** Name of the custom domain. */
    az_cdn_custom_domain_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_custom_domain_create_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_custom_domain_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_cdn_custom_domain_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_custom_domain_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cdn_custom_domain_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_cdn_custom_domain_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the custom domain of a CDN.
 *
 * Syntax:
 * ```
 * az cdn custom-domain delete --endpoint-name
 *                             --name
 *                             --profile-name
 *                             --resource-group
 *                             [--subscription]
 * ```
 *
 * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
 * @param {string} name Name of the custom domain.
 * @param {string} profileName Name of the CDN profile which is unique within the resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_custom_domain_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_custom_domain_delete_command_builder, _super);
    function az_cdn_custom_domain_delete_command_builder(commandPath, resultDataTypeName, endpointName, name, profileName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        _this.name(name);
        _this.profileName(profileName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the endpoint under the profile which is unique globally. */
    az_cdn_custom_domain_delete_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** Name of the custom domain. */
    az_cdn_custom_domain_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_custom_domain_delete_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_custom_domain_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_custom_domain_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_custom_domain_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable https delivery of the custom domain.
 *
 * Syntax:
 * ```
 * az cdn custom-domain disable-https --endpoint-name
 *                                    --name
 *                                    --profile-name
 *                                    --resource-group
 *                                    [--subscription]
 * ```
 *
 * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
 * @param {string} name Name of the custom domain.
 * @param {string} profileName Name of the CDN profile which is unique within the resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_custom_domain_disable_https_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_custom_domain_disable_https_command_builder, _super);
    function az_cdn_custom_domain_disable_https_command_builder(commandPath, resultDataTypeName, endpointName, name, profileName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        _this.name(name);
        _this.profileName(profileName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the endpoint under the profile which is unique globally. */
    az_cdn_custom_domain_disable_https_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** Name of the custom domain. */
    az_cdn_custom_domain_disable_https_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_custom_domain_disable_https_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_custom_domain_disable_https_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_custom_domain_disable_https_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_custom_domain_disable_https_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable HTTPS delivery of the custom domain.
 *
 * Syntax:
 * ```
 * az cdn custom-domain enable-https --endpoint-name
 *                                   --name
 *                                   --profile-name
 *                                   --resource-group
 *                                   [--min-tls-version {1.0, 1.2, none}]
 *                                   [--subscription]
 *                                   [--user-cert-group-name]
 *                                   [--user-cert-protocol-type {ip, sni}]
 *                                   [--user-cert-secret-name]
 *                                   [--user-cert-secret-version]
 *                                   [--user-cert-subscription-id]
 *                                   [--user-cert-vault-name]
 * ```
 *
 * @param {string} endpointName Name of the parent endpoint.
 * @param {string} name Name of the custom domain.
 * @param {string} profileName Name of the parent profile.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_custom_domain_enable_https_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_custom_domain_enable_https_command_builder, _super);
    function az_cdn_custom_domain_enable_https_command_builder(commandPath, resultDataTypeName, endpointName, name, profileName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        _this.name(name);
        _this.profileName(profileName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the parent endpoint. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** Name of the custom domain. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the parent profile. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The minimum TLS version required for the custom domain. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.minTlsVersion = function (value) {
        this.setFlag("--min-tls-version", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The resource group of the KeyVault certificate. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.userCertGroupName = function (value) {
        this.setFlag("--user-cert-group-name", value);
        return this;
    };
    /** The protocol type of the certificate. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.userCertProtocolType = function (value) {
        this.setFlag("--user-cert-protocol-type", value);
        return this;
    };
    /** The secret name of the KeyVault certificate. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.userCertSecretName = function (value) {
        this.setFlag("--user-cert-secret-name", value);
        return this;
    };
    /** The secret version of the KeyVault certificate. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.userCertSecretVersion = function (value) {
        this.setFlag("--user-cert-secret-version", value);
        return this;
    };
    /** The subscription id of the KeyVault certificate. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.userCertSubscriptionId = function (value) {
        this.setFlag("--user-cert-subscription-id", value);
        return this;
    };
    /** The vault name of the KeyVault certificate. */
    az_cdn_custom_domain_enable_https_command_builder.prototype.userCertVaultName = function (value) {
        this.setFlag("--user-cert-vault-name", value);
        return this;
    };
    return az_cdn_custom_domain_enable_https_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all of the existing custom domains within an endpoint.
 *
 * Syntax:
 * ```
 * az cdn custom-domain list --endpoint-name
 *                           --profile-name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
 * @param {string} profileName Name of the CDN profile which is unique within the resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_custom_domain_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_custom_domain_list_command_builder, _super);
    function az_cdn_custom_domain_list_command_builder(commandPath, resultDataTypeName, endpointName, profileName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        _this.profileName(profileName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the endpoint under the profile which is unique globally. */
    az_cdn_custom_domain_list_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_custom_domain_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_custom_domain_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_custom_domain_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_custom_domain_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_custom_domain_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details for the custom domain of a CDN.
 *
 * Syntax:
 * ```
 * az cdn custom-domain show --endpoint-name
 *                           --name
 *                           --profile-name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} endpointName Name of the endpoint under the profile which is unique globally.
 * @param {string} name Name of the custom domain.
 * @param {string} profileName Name of the CDN profile which is unique within the resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_custom_domain_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_custom_domain_show_command_builder, _super);
    function az_cdn_custom_domain_show_command_builder(commandPath, resultDataTypeName, endpointName, name, profileName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        _this.name(name);
        _this.profileName(profileName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the endpoint under the profile which is unique globally. */
    az_cdn_custom_domain_show_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** Name of the custom domain. */
    az_cdn_custom_domain_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_custom_domain_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_custom_domain_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_custom_domain_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_custom_domain_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_custom_domain_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users.
 *
 * Syntax:
 * ```
 * az cdn edge-node list [--query-examples]
 *                       [--subscription]
 * ```
 */
var az_cdn_edge_node_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_edge_node_list_command_builder, _super);
    function az_cdn_edge_node_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_edge_node_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_edge_node_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_edge_node_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Add an action to a delivery rule.
 *
 * Syntax:
 * ```
 * az cdn endpoint rule action add --action-name
 *                                 --rule-name
 *                                 [--cache-behavior {BypassCache, Override, SetIfMissing}]
 *                                 [--cache-duration]
 *                                 [--custom-fragment]
 *                                 [--custom-hostname]
 *                                 [--custom-path]
 *                                 [--custom-querystring]
 *                                 [--destination]
 *                                 [--header-action {Append, Delete, Overwrite}]
 *                                 [--header-name]
 *                                 [--header-value]
 *                                 [--ids]
 *                                 [--name]
 *                                 [--preserve-unmatched-path {false, true}]
 *                                 [--profile-name]
 *                                 [--query-parameters]
 *                                 [--query-string-behavior {Exclude, ExcludeAll, Include, IncludeAll}]
 *                                 [--redirect-protocol {Http, Https, MatchRequest}]
 *                                 [--redirect-type {Found, Moved, PermanentRedirect, TemporaryRedirect}]
 *                                 [--resource-group]
 *                                 [--source-pattern]
 *                                 [--subscription]
 * ```
 *
 * @param {string} actionName Name of the action.
 * @param {string} ruleName Name of the rule.
 */
var az_cdn_endpoint_rule_action_add_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_rule_action_add_command_builder, _super);
    function az_cdn_endpoint_rule_action_add_command_builder(commandPath, resultDataTypeName, actionName, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.actionName(actionName);
        _this.ruleName(ruleName);
        return _this;
    }
    /** Name of the action. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.actionName = function (value) {
        this.setFlag("--action-name", value);
        return this;
    };
    /** Name of the rule. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Caching behavior for the requests. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.cacheBehavior = function (value) {
        this.setFlag("--cache-behavior", value);
        return this;
    };
    /** The duration for which the content needs to be cached.                    Allowed format is [d.]hh:mm:ss. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.cacheDuration = function (value) {
        this.setFlag("--cache-duration", value);
        return this;
    };
    /** Fragment to add to the redirect URL. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.customFragment = function (value) {
        this.setFlag("--custom-fragment", value);
        return this;
    };
    /** Host to redirect.                    Leave empty to use the incoming host as the destination host. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.customHostname = function (value) {
        this.setFlag("--custom-hostname", value);
        return this;
    };
    /** The full path to redirect. Path cannot be empty and must start with /.                    Leave empty to use the incoming path as destination path. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.customPath = function (value) {
        this.setFlag("--custom-path", value);
        return this;
    };
    /** The set of query strings to be placed in the redirect URL.                    leave empty to preserve the incoming query string. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.customQuerystring = function (value) {
        this.setFlag("--custom-querystring", value);
        return this;
    };
    /** The destination path to be used in the rewrite. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.destination = function (value) {
        this.setFlag("--destination", value);
        return this;
    };
    /** Header action for the requests. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.headerAction = function (value) {
        this.setFlag("--header-action", value);
        return this;
    };
    /** Name of the header to modify. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.headerName = function (value) {
        this.setFlag("--header-name", value);
        return this;
    };
    /** Value of the header. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.headerValue = function (value) {
        this.setFlag("--header-value", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** If True, the remaining path after the source                    pattern will be appended to the new destination path. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.preserveUnmatchedPath = function (value) {
        this.setFlag("--preserve-unmatched-path", value.toString());
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Query parameters to include or exclude (comma separated). */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.queryParameters = function (value) {
        this.setFlag("--query-parameters", value);
        return this;
    };
    /** Query string behavior for the requests. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.queryStringBehavior = function (value) {
        this.setFlag("--query-string-behavior", value);
        return this;
    };
    /** Protocol to use for the redirect. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.redirectProtocol = function (value) {
        this.setFlag("--redirect-protocol", value);
        return this;
    };
    /** The redirect type the rule will use when redirecting traffic. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.redirectType = function (value) {
        this.setFlag("--redirect-type", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** A request URI pattern that identifies the type of requests that may be rewritten. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.sourcePattern = function (value) {
        this.setFlag("--source-pattern", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_rule_action_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_rule_action_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an action from a delivery rule.
 *
 * Syntax:
 * ```
 * az cdn endpoint rule action remove --index
 *                                    --rule-name
 *                                    [--ids]
 *                                    [--name]
 *                                    [--profile-name]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} index The index of the condition/action.
 * @param {string} ruleName Name of the rule.
 */
var az_cdn_endpoint_rule_action_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_rule_action_remove_command_builder, _super);
    function az_cdn_endpoint_rule_action_remove_command_builder(commandPath, resultDataTypeName, index, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.index(index);
        _this.ruleName(ruleName);
        return _this;
    }
    /** The index of the condition/action. */
    az_cdn_endpoint_rule_action_remove_command_builder.prototype.index = function (value) {
        this.setFlag("--index", value);
        return this;
    };
    /** Name of the rule. */
    az_cdn_endpoint_rule_action_remove_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_rule_action_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_rule_action_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_rule_action_remove_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_rule_action_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_rule_action_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_rule_action_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Show delivery rules asscociate with the endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint rule action show [--ids]
 *                                  [--name]
 *                                  [--profile-name]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_cdn_endpoint_rule_action_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_rule_action_show_command_builder, _super);
    function az_cdn_endpoint_rule_action_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_rule_action_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_rule_action_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_rule_action_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_endpoint_rule_action_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_rule_action_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_rule_action_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_rule_action_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a condition to a delivery rule.
 *
 * Syntax:
 * ```
 * az cdn endpoint rule condition add --match-variable
 *                                    --operator
 *                                    --rule-name
 *                                    [--ids]
 *                                    [--match-values]
 *                                    [--name]
 *                                    [--negate-condition {false, true}]
 *                                    [--profile-name]
 *                                    [--resource-group]
 *                                    [--selector]
 *                                    [--subscription]
 *                                    [--transform {Lowercase, Uppercase}]
 * ```
 *
 * @param {string} matchVariable Name of the match condition.
 * @param {string} operator Operator of the match condition.
 * @param {string} ruleName Name of the rule.
 */
var az_cdn_endpoint_rule_condition_add_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_rule_condition_add_command_builder, _super);
    function az_cdn_endpoint_rule_condition_add_command_builder(commandPath, resultDataTypeName, matchVariable, operator, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.matchVariable(matchVariable);
        _this.operator(operator);
        _this.ruleName(ruleName);
        return _this;
    }
    /** Name of the match condition. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.matchVariable = function (value) {
        this.setFlag("--match-variable", value);
        return this;
    };
    /** Operator of the match condition. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.operator = function (value) {
        this.setFlag("--operator", value);
        return this;
    };
    /** Name of the rule. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Match values of the match condition (comma separated). */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.matchValues = function (value) {
        this.setFlag("--match-values", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** If true, negates the condition. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.negateCondition = function (value) {
        this.setFlag("--negate-condition", value.toString());
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Selector of the match condition. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.selector = function (value) {
        this.setFlag("--selector", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Transform to apply before matching. */
    az_cdn_endpoint_rule_condition_add_command_builder.prototype.transform = function (value) {
        this.setFlag("--transform", value);
        return this;
    };
    return az_cdn_endpoint_rule_condition_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a condition from a delivery rule.
 *
 * Syntax:
 * ```
 * az cdn endpoint rule condition remove --index
 *                                       --rule-name
 *                                       [--ids]
 *                                       [--name]
 *                                       [--profile-name]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 *
 * @param {string} index The index of the condition/action.
 * @param {string} ruleName Name of the rule.
 */
var az_cdn_endpoint_rule_condition_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_rule_condition_remove_command_builder, _super);
    function az_cdn_endpoint_rule_condition_remove_command_builder(commandPath, resultDataTypeName, index, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.index(index);
        _this.ruleName(ruleName);
        return _this;
    }
    /** The index of the condition/action. */
    az_cdn_endpoint_rule_condition_remove_command_builder.prototype.index = function (value) {
        this.setFlag("--index", value);
        return this;
    };
    /** Name of the rule. */
    az_cdn_endpoint_rule_condition_remove_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_rule_condition_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_rule_condition_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_rule_condition_remove_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_rule_condition_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_rule_condition_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_rule_condition_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Show delivery rules asscociate with the endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint rule condition show [--ids]
 *                                     [--name]
 *                                     [--profile-name]
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
var az_cdn_endpoint_rule_condition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_rule_condition_show_command_builder, _super);
    function az_cdn_endpoint_rule_condition_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_rule_condition_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_rule_condition_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_rule_condition_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_endpoint_rule_condition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_rule_condition_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_rule_condition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_rule_condition_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a delivery rule to a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint rule add --action-name
 *                          --order
 *                          --rule-name
 *                          [--cache-behavior {BypassCache, Override, SetIfMissing}]
 *                          [--cache-duration]
 *                          [--custom-fragment]
 *                          [--custom-hostname]
 *                          [--custom-path]
 *                          [--custom-querystring]
 *                          [--destination]
 *                          [--header-action {Append, Delete, Overwrite}]
 *                          [--header-name]
 *                          [--header-value]
 *                          [--ids]
 *                          [--match-values]
 *                          [--match-variable]
 *                          [--name]
 *                          [--negate-condition {false, true}]
 *                          [--operator]
 *                          [--preserve-unmatched-path {false, true}]
 *                          [--profile-name]
 *                          [--query-parameters]
 *                          [--query-string-behavior {Exclude, ExcludeAll, Include, IncludeAll}]
 *                          [--redirect-protocol {Http, Https, MatchRequest}]
 *                          [--redirect-type {Found, Moved, PermanentRedirect, TemporaryRedirect}]
 *                          [--resource-group]
 *                          [--selector]
 *                          [--source-pattern]
 *                          [--subscription]
 *                          [--transform {Lowercase, Uppercase}]
 * ```
 *
 * @param {string} actionName Name of the action.
 * @param {string} order The order of the rule. The order number must start from 0 and consecutive.                    Rule with higher order will be applied later.
 * @param {string} ruleName Name of the rule.
 */
var az_cdn_endpoint_rule_add_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_rule_add_command_builder, _super);
    function az_cdn_endpoint_rule_add_command_builder(commandPath, resultDataTypeName, actionName, order, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.actionName(actionName);
        _this.order(order);
        _this.ruleName(ruleName);
        return _this;
    }
    /** Name of the action. */
    az_cdn_endpoint_rule_add_command_builder.prototype.actionName = function (value) {
        this.setFlag("--action-name", value);
        return this;
    };
    /** The order of the rule. The order number must start from 0 and consecutive.                    Rule with higher order will be applied later. */
    az_cdn_endpoint_rule_add_command_builder.prototype.order = function (value) {
        this.setFlag("--order", value);
        return this;
    };
    /** Name of the rule. */
    az_cdn_endpoint_rule_add_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Caching behavior for the requests. */
    az_cdn_endpoint_rule_add_command_builder.prototype.cacheBehavior = function (value) {
        this.setFlag("--cache-behavior", value);
        return this;
    };
    /** The duration for which the content needs to be cached.                    Allowed format is [d.]hh:mm:ss. */
    az_cdn_endpoint_rule_add_command_builder.prototype.cacheDuration = function (value) {
        this.setFlag("--cache-duration", value);
        return this;
    };
    /** Fragment to add to the redirect URL. */
    az_cdn_endpoint_rule_add_command_builder.prototype.customFragment = function (value) {
        this.setFlag("--custom-fragment", value);
        return this;
    };
    /** Host to redirect.                    Leave empty to use the incoming host as the destination host. */
    az_cdn_endpoint_rule_add_command_builder.prototype.customHostname = function (value) {
        this.setFlag("--custom-hostname", value);
        return this;
    };
    /** The full path to redirect. Path cannot be empty and must start with /.                    Leave empty to use the incoming path as destination path. */
    az_cdn_endpoint_rule_add_command_builder.prototype.customPath = function (value) {
        this.setFlag("--custom-path", value);
        return this;
    };
    /** The set of query strings to be placed in the redirect URL.                    leave empty to preserve the incoming query string. */
    az_cdn_endpoint_rule_add_command_builder.prototype.customQuerystring = function (value) {
        this.setFlag("--custom-querystring", value);
        return this;
    };
    /** The destination path to be used in the rewrite. */
    az_cdn_endpoint_rule_add_command_builder.prototype.destination = function (value) {
        this.setFlag("--destination", value);
        return this;
    };
    /** Header action for the requests. */
    az_cdn_endpoint_rule_add_command_builder.prototype.headerAction = function (value) {
        this.setFlag("--header-action", value);
        return this;
    };
    /** Name of the header to modify. */
    az_cdn_endpoint_rule_add_command_builder.prototype.headerName = function (value) {
        this.setFlag("--header-name", value);
        return this;
    };
    /** Value of the header. */
    az_cdn_endpoint_rule_add_command_builder.prototype.headerValue = function (value) {
        this.setFlag("--header-value", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_rule_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Match values of the match condition (comma separated). */
    az_cdn_endpoint_rule_add_command_builder.prototype.matchValues = function (value) {
        this.setFlag("--match-values", value);
        return this;
    };
    /** Name of the match condition. */
    az_cdn_endpoint_rule_add_command_builder.prototype.matchVariable = function (value) {
        this.setFlag("--match-variable", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_rule_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** If true, negates the condition. */
    az_cdn_endpoint_rule_add_command_builder.prototype.negateCondition = function (value) {
        this.setFlag("--negate-condition", value.toString());
        return this;
    };
    /** Operator of the match condition. */
    az_cdn_endpoint_rule_add_command_builder.prototype.operator = function (value) {
        this.setFlag("--operator", value);
        return this;
    };
    /** If True, the remaining path after the source                    pattern will be appended to the new destination path. */
    az_cdn_endpoint_rule_add_command_builder.prototype.preserveUnmatchedPath = function (value) {
        this.setFlag("--preserve-unmatched-path", value.toString());
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_rule_add_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Query parameters to include or exclude (comma separated). */
    az_cdn_endpoint_rule_add_command_builder.prototype.queryParameters = function (value) {
        this.setFlag("--query-parameters", value);
        return this;
    };
    /** Query string behavior for the requests. */
    az_cdn_endpoint_rule_add_command_builder.prototype.queryStringBehavior = function (value) {
        this.setFlag("--query-string-behavior", value);
        return this;
    };
    /** Protocol to use for the redirect. */
    az_cdn_endpoint_rule_add_command_builder.prototype.redirectProtocol = function (value) {
        this.setFlag("--redirect-protocol", value);
        return this;
    };
    /** The redirect type the rule will use when redirecting traffic. */
    az_cdn_endpoint_rule_add_command_builder.prototype.redirectType = function (value) {
        this.setFlag("--redirect-type", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_rule_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Selector of the match condition. */
    az_cdn_endpoint_rule_add_command_builder.prototype.selector = function (value) {
        this.setFlag("--selector", value);
        return this;
    };
    /** A request URI pattern that identifies the type of requests that may be rewritten. */
    az_cdn_endpoint_rule_add_command_builder.prototype.sourcePattern = function (value) {
        this.setFlag("--source-pattern", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_rule_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Transform to apply before matching. */
    az_cdn_endpoint_rule_add_command_builder.prototype.transform = function (value) {
        this.setFlag("--transform", value);
        return this;
    };
    return az_cdn_endpoint_rule_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a delivery rule from an endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint rule remove --rule-name
 *                             [--ids]
 *                             [--name]
 *                             [--profile-name]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} ruleName Name of the rule.
 */
var az_cdn_endpoint_rule_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_rule_remove_command_builder, _super);
    function az_cdn_endpoint_rule_remove_command_builder(commandPath, resultDataTypeName, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.ruleName(ruleName);
        return _this;
    }
    /** Name of the rule. */
    az_cdn_endpoint_rule_remove_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_rule_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_rule_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_rule_remove_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_rule_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_rule_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_rule_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Show delivery rules asscociate with the endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint rule show [--ids]
 *                           [--name]
 *                           [--profile-name]
 *                           [--query-examples]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_cdn_endpoint_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_rule_show_command_builder, _super);
    function az_cdn_endpoint_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_rule_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_endpoint_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a CDN WAF policy from a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint waf policy remove [--endpoint-name]
 *                                   [--ids]
 *                                   [--profile-name]
 *                                   [--resource-group]
 *                                   [--subscription]
 *                                   [--yes]
 * ```
 */
var az_cdn_endpoint_waf_policy_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_waf_policy_remove_command_builder, _super);
    function az_cdn_endpoint_waf_policy_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_waf_policy_remove_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_waf_policy_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_waf_policy_remove_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_waf_policy_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_waf_policy_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cdn_endpoint_waf_policy_remove_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cdn_endpoint_waf_policy_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Set the CDN WAF policy applied to a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint waf policy set [--endpoint-name]
 *                                [--ids]
 *                                [--profile-name]
 *                                [--resource-group]
 *                                [--subscription]
 *                                [--waf-policy-id]
 *                                [--waf-policy-name]
 *                                [--waf-policy-resource-group-name]
 *                                [--waf-policy-subscription-id]
 * ```
 */
var az_cdn_endpoint_waf_policy_set_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_waf_policy_set_command_builder, _super);
    function az_cdn_endpoint_waf_policy_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_waf_policy_set_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_waf_policy_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_waf_policy_set_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_waf_policy_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_waf_policy_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The Resource ID of the CDN WAF policy to apply to this endpoint. */
    az_cdn_endpoint_waf_policy_set_command_builder.prototype.wafPolicyId = function (value) {
        this.setFlag("--waf-policy-id", value);
        return this;
    };
    /** The name of the CDN WAF policy to apply to this endpoint. Ignored if --waf-policy-id is set. */
    az_cdn_endpoint_waf_policy_set_command_builder.prototype.wafPolicyName = function (value) {
        this.setFlag("--waf-policy-name", value);
        return this;
    };
    /** The resource group of the CDN WAF policy to apply to this endpoint. Ignored if --waf-policy-id is set. */
    az_cdn_endpoint_waf_policy_set_command_builder.prototype.wafPolicyResourceGroupName = function (value) {
        this.setFlag("--waf-policy-resource-group-name", value);
        return this;
    };
    /** The Resource ID of the CDN WAF policy to apply to this endpoint. ignored if --waf-policy-id is set. */
    az_cdn_endpoint_waf_policy_set_command_builder.prototype.wafPolicySubscriptionId = function (value) {
        this.setFlag("--waf-policy-subscription-id", value);
        return this;
    };
    return az_cdn_endpoint_waf_policy_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show which CDN WAF policy is applied to a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint waf policy show [--endpoint-name]
 *                                 [--ids]
 *                                 [--profile-name]
 *                                 [--query-examples]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
var az_cdn_endpoint_waf_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_waf_policy_show_command_builder, _super);
    function az_cdn_endpoint_waf_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_waf_policy_show_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_waf_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_waf_policy_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_endpoint_waf_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_waf_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_waf_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_waf_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a named endpoint to connect to a CDN.
 *
 * Syntax:
 * ```
 * az cdn endpoint create --name
 *                        --origin
 *                        --profile-name
 *                        --resource-group
 *                        [--content-types-to-compress]
 *                        [--enable-compression {false, true}]
 *                        [--location]
 *                        [--no-http {false, true}]
 *                        [--no-https {false, true}]
 *                        [--no-wait]
 *                        [--origin-host-header]
 *                        [--origin-path]
 *                        [--query-string-caching-behavior]
 *                        [--subscription]
 *                        [--tags]
 * ```
 *
 * @param {string} name Name of the CDN endpoint.
 * @param {string} origin Endpoint origin specified by the following space-delimited 6 tuple: `www.example.com http_port https_port private_link_resource_id private_link_location private_link_approval_message`. The HTTP and HTTPS ports and the private link resource ID and location are optional. The HTTP and HTTPS ports default to 80 and 443, respectively. Private link fields are only valid for the sku Standard_Microsoft, and private_link_location is required if private_link_resource_id is set.
 * @param {string} profileName Name of the CDN profile which is unique within the resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_endpoint_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_create_command_builder, _super);
    function az_cdn_endpoint_create_command_builder(commandPath, resultDataTypeName, name, origin, profileName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.origin(origin);
        _this.profileName(profileName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Endpoint origin specified by the following space-delimited 6 tuple: `www.example.com http_port https_port private_link_resource_id private_link_location private_link_approval_message`. The HTTP and HTTPS ports and the private link resource ID and location are optional. The HTTP and HTTPS ports default to 80 and 443, respectively. Private link fields are only valid for the sku Standard_Microsoft, and private_link_location is required if private_link_resource_id is set. */
    az_cdn_endpoint_create_command_builder.prototype.origin = function (value) {
        this.setFlag("--origin", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_create_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** List of content types on which compression applies. The value should be a valid MIME type. */
    az_cdn_endpoint_create_command_builder.prototype.contentTypesToCompress = function (value) {
        this.setFlag("--content-types-to-compress", value);
        return this;
    };
    /** If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB. */
    az_cdn_endpoint_create_command_builder.prototype.enableCompression = function (value) {
        this.setFlag("--enable-compression", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_cdn_endpoint_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Indicates whether HTTP traffic is not allowed on the endpoint. Default is to allow HTTP traffic. */
    az_cdn_endpoint_create_command_builder.prototype.noHttp = function (value) {
        this.setFlag("--no-http", value.toString());
        return this;
    };
    /** Indicates whether HTTPS traffic is not allowed on the endpoint. Default is to allow HTTPS traffic. */
    az_cdn_endpoint_create_command_builder.prototype.noHttps = function (value) {
        this.setFlag("--no-https", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_cdn_endpoint_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. */
    az_cdn_endpoint_create_command_builder.prototype.originHostHeader = function (value) {
        this.setFlag("--origin-host-header", value);
        return this;
    };
    /** A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath. */
    az_cdn_endpoint_create_command_builder.prototype.originPath = function (value) {
        this.setFlag("--origin-path", value);
        return this;
    };
    /** Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL. */
    az_cdn_endpoint_create_command_builder.prototype.queryStringCachingBehavior = function (value) {
        this.setFlag("--query-string-caching-behavior", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cdn_endpoint_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_cdn_endpoint_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint delete [--ids]
 *                        [--name]
 *                        [--no-wait]
 *                        [--profile-name]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_cdn_endpoint_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_delete_command_builder, _super);
    function az_cdn_endpoint_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_cdn_endpoint_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_delete_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available endpoints for a CDN.
 *
 * Syntax:
 * ```
 * az cdn endpoint list --profile-name
 *                      --resource-group
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} profileName Name of the CDN profile which is unique within the resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_endpoint_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_list_command_builder, _super);
    function az_cdn_endpoint_list_command_builder(commandPath, resultDataTypeName, profileName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.profileName(profileName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_endpoint_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Pre-load content for a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint load --content-paths
 *                      [--ids]
 *                      [--name]
 *                      [--no-wait]
 *                      [--profile-name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 *
 * @param {string} contentPaths The path to the content to be loaded. Path should be a relative file URL of the origin.
 */
var az_cdn_endpoint_load_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_load_command_builder, _super);
    function az_cdn_endpoint_load_command_builder(commandPath, resultDataTypeName, contentPaths) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.contentPaths(contentPaths);
        return _this;
    }
    /** The path to the content to be loaded. Path should be a relative file URL of the origin. */
    az_cdn_endpoint_load_command_builder.prototype.contentPaths = function (value) {
        this.setFlag("--content-paths", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_load_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_load_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_cdn_endpoint_load_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_load_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_load_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_load_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_load_command_builder;
}(base_1.CommandBuilder));
/**
 * Purge pre-loaded content for a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint purge --content-paths
 *                       [--ids]
 *                       [--name]
 *                       [--no-wait]
 *                       [--profile-name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} contentPaths The path to the content to be purged. Can describe a file path or a wild card directory.
 */
var az_cdn_endpoint_purge_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_purge_command_builder, _super);
    function az_cdn_endpoint_purge_command_builder(commandPath, resultDataTypeName, contentPaths) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.contentPaths(contentPaths);
        return _this;
    }
    /** The path to the content to be purged. Can describe a file path or a wild card directory. */
    az_cdn_endpoint_purge_command_builder.prototype.contentPaths = function (value) {
        this.setFlag("--content-paths", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_purge_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_purge_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_cdn_endpoint_purge_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_purge_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_purge_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_purge_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_purge_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 *
 * Syntax:
 * ```
 * az cdn endpoint show [--ids]
 *                      [--name]
 *                      [--profile-name]
 *                      [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_cdn_endpoint_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_show_command_builder, _super);
    function az_cdn_endpoint_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_endpoint_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Start a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint start [--ids]
 *                       [--name]
 *                       [--no-wait]
 *                       [--profile-name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_cdn_endpoint_start_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_start_command_builder, _super);
    function az_cdn_endpoint_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_cdn_endpoint_start_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_start_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop a CDN endpoint.
 *
 * Syntax:
 * ```
 * az cdn endpoint stop [--ids]
 *                      [--name]
 *                      [--no-wait]
 *                      [--profile-name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_cdn_endpoint_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_stop_command_builder, _super);
    function az_cdn_endpoint_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_cdn_endpoint_stop_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_stop_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a CDN endpoint to manage how content is delivered.
 *
 * Syntax:
 * ```
 * az cdn endpoint update [--add]
 *                        [--content-types-to-compress]
 *                        [--enable-compression {false, true}]
 *                        [--force-string]
 *                        [--ids]
 *                        [--name]
 *                        [--no-http {false, true}]
 *                        [--no-https {false, true}]
 *                        [--no-wait]
 *                        [--origin-host-header]
 *                        [--origin-path]
 *                        [--profile-name]
 *                        [--query-string-caching {BypassCaching, IgnoreQueryString, NotSet, UseQueryString}]
 *                        [--remove]
 *                        [--resource-group]
 *                        [--set]
 *                        [--subscription]
 *                        [--tags]
 * ```
 */
var az_cdn_endpoint_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_update_command_builder, _super);
    function az_cdn_endpoint_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_cdn_endpoint_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** List of content types on which compression applies. The value should be a valid MIME type. */
    az_cdn_endpoint_update_command_builder.prototype.contentTypesToCompress = function (value) {
        this.setFlag("--content-types-to-compress", value);
        return this;
    };
    /** If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB. */
    az_cdn_endpoint_update_command_builder.prototype.enableCompression = function (value) {
        this.setFlag("--enable-compression", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_cdn_endpoint_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Indicates whether HTTP traffic is not allowed on the endpoint. Default is to allow HTTP traffic. */
    az_cdn_endpoint_update_command_builder.prototype.noHttp = function (value) {
        this.setFlag("--no-http", value.toString());
        return this;
    };
    /** Indicates whether HTTPS traffic is not allowed on the endpoint. Default is to allow HTTPS traffic. */
    az_cdn_endpoint_update_command_builder.prototype.noHttps = function (value) {
        this.setFlag("--no-https", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_cdn_endpoint_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. */
    az_cdn_endpoint_update_command_builder.prototype.originHostHeader = function (value) {
        this.setFlag("--origin-host-header", value);
        return this;
    };
    /** A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath. */
    az_cdn_endpoint_update_command_builder.prototype.originPath = function (value) {
        this.setFlag("--origin-path", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_update_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL. */
    az_cdn_endpoint_update_command_builder.prototype.queryStringCaching = function (value) {
        this.setFlag("--query-string-caching", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_cdn_endpoint_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_cdn_endpoint_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cdn_endpoint_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_cdn_endpoint_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.
 *
 * Syntax:
 * ```
 * az cdn endpoint validate-custom-domain --host-name
 *                                        [--ids]
 *                                        [--name]
 *                                        [--profile-name]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 *
 * @param {string} hostName The host name of the custom domain. Must be a domain name.
 */
var az_cdn_endpoint_validate_custom_domain_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_endpoint_validate_custom_domain_command_builder, _super);
    function az_cdn_endpoint_validate_custom_domain_command_builder(commandPath, resultDataTypeName, hostName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hostName(hostName);
        return _this;
    }
    /** The host name of the custom domain. Must be a domain name. */
    az_cdn_endpoint_validate_custom_domain_command_builder.prototype.hostName = function (value) {
        this.setFlag("--host-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_endpoint_validate_custom_domain_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN endpoint. */
    az_cdn_endpoint_validate_custom_domain_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_endpoint_validate_custom_domain_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_endpoint_validate_custom_domain_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_endpoint_validate_custom_domain_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_endpoint_validate_custom_domain_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all of the existing origins within an endpoint.
 *
 * Syntax:
 * ```
 * az cdn origin list --endpoint-name
 *                    --profile-name
 *                    --resource-group
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} endpointName Name of the CDN endpoint.
 * @param {string} profileName Name of the CDN profile which is unique within the resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_origin_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_origin_list_command_builder, _super);
    function az_cdn_origin_list_command_builder(commandPath, resultDataTypeName, endpointName, profileName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endpointName(endpointName);
        _this.profileName(profileName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the CDN endpoint. */
    az_cdn_origin_list_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_origin_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_origin_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_origin_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_origin_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_origin_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets an existing origin within an endpoint.
 *
 * Syntax:
 * ```
 * az cdn origin show [--endpoint-name]
 *                    [--ids]
 *                    [--name]
 *                    [--profile-name]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_cdn_origin_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_origin_show_command_builder, _super);
    function az_cdn_origin_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the CDN endpoint. */
    az_cdn_origin_show_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_origin_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the origin. */
    az_cdn_origin_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_origin_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_origin_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_origin_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_origin_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_origin_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an origin.
 *
 * Syntax:
 * ```
 * az cdn origin update [--endpoint-name]
 *                      [--http-port]
 *                      [--https-port]
 *                      [--ids]
 *                      [--name]
 *                      [--private-link-approval-message]
 *                      [--private-link-location]
 *                      [--private-link-resource-id]
 *                      [--profile-name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_cdn_origin_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_origin_update_command_builder, _super);
    function az_cdn_origin_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the CDN endpoint. */
    az_cdn_origin_update_command_builder.prototype.endpointName = function (value) {
        this.setFlag("--endpoint-name", value);
        return this;
    };
    /** The port used for http requests to the origin. */
    az_cdn_origin_update_command_builder.prototype.httpPort = function (value) {
        this.setFlag("--http-port", value);
        return this;
    };
    /** The port used for https requests to the origin. */
    az_cdn_origin_update_command_builder.prototype.httpsPort = function (value) {
        this.setFlag("--https-port", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_origin_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the origin. */
    az_cdn_origin_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The message that is shown to the approver of the private link request. */
    az_cdn_origin_update_command_builder.prototype.privateLinkApprovalMessage = function (value) {
        this.setFlag("--private-link-approval-message", value);
        return this;
    };
    /** The location of the private link that the origin will be connected to. */
    az_cdn_origin_update_command_builder.prototype.privateLinkLocation = function (value) {
        this.setFlag("--private-link-location", value);
        return this;
    };
    /** The resource id of the private link that the origin will be connected to. */
    az_cdn_origin_update_command_builder.prototype.privateLinkResourceId = function (value) {
        this.setFlag("--private-link-resource-id", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_origin_update_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_origin_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_origin_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_origin_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new CDN profile.
 *
 * Syntax:
 * ```
 * az cdn profile create --name
 *                       --resource-group
 *                       [--location]
 *                       [--sku {Custom_Verizon, Premium_ChinaCdn, Premium_Verizon, Standard_Akamai, Standard_ChinaCdn, Standard_Microsoft, Standard_Verizon}]
 *                       [--subscription]
 *                       [--tags]
 * ```
 *
 * @param {string} name Name of the CDN profile which is unique within the resource group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_profile_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_profile_create_command_builder, _super);
    function az_cdn_profile_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_profile_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_profile_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_cdn_profile_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile. Defaults to Standard_Akamai. */
    az_cdn_profile_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_profile_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cdn_profile_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_cdn_profile_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a CDN profile.
 *
 * Syntax:
 * ```
 * az cdn profile delete [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_cdn_profile_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_profile_delete_command_builder, _super);
    function az_cdn_profile_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_profile_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_profile_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_profile_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_profile_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_profile_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List CDN profiles.
 *
 * Syntax:
 * ```
 * az cdn profile list [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_cdn_profile_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_profile_list_command_builder, _super);
    function az_cdn_profile_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_profile_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_profile_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_profile_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_profile_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets a CDN profile with the specified profile name under the specified subscription and resource group.
 *
 * Syntax:
 * ```
 * az cdn profile show [--ids]
 *                     [--name]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_cdn_profile_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_profile_show_command_builder, _super);
    function az_cdn_profile_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_profile_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_profile_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_profile_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_profile_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_profile_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_profile_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a CDN profile.
 *
 * Syntax:
 * ```
 * az cdn profile update [--add]
 *                       [--force-string]
 *                       [--ids]
 *                       [--name]
 *                       [--remove]
 *                       [--resource-group]
 *                       [--set]
 *                       [--subscription]
 *                       [--tags]
 * ```
 */
var az_cdn_profile_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_profile_update_command_builder, _super);
    function az_cdn_profile_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_cdn_profile_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_cdn_profile_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_profile_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_profile_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_cdn_profile_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_profile_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_cdn_profile_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_profile_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cdn_profile_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_cdn_profile_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Checks the quota and actual usage of endpoints under the given CDN profile.
 *
 * Syntax:
 * ```
 * az cdn profile usage [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_cdn_profile_usage_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_profile_usage_command_builder, _super);
    function az_cdn_profile_usage_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_profile_usage_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN profile which is unique within the resource group. */
    az_cdn_profile_usage_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_profile_usage_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_profile_usage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_profile_usage_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a custom rule from a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy custom-rule delete --name
 *                                      [--ids]
 *                                      [--policy-name]
 *                                      [--resource-group]
 *                                      [--subscription]
 *                                      [--yes]
 * ```
 *
 * @param {string} name The name of the custom rule.
 */
var az_cdn_waf_policy_custom_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_custom_rule_delete_command_builder, _super);
    function az_cdn_waf_policy_custom_rule_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the custom rule. */
    az_cdn_waf_policy_custom_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_custom_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_custom_rule_delete_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_custom_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_custom_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cdn_waf_policy_custom_rule_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cdn_waf_policy_custom_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List custom rules of a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy custom-rule list --policy-name
 *                                    --resource-group
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} policyName Name of the CDN WAF policy.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_waf_policy_custom_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_custom_rule_list_command_builder, _super);
    function az_cdn_waf_policy_custom_rule_list_command_builder(commandPath, resultDataTypeName, policyName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyName(policyName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_custom_rule_list_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_custom_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_custom_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_custom_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_custom_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a custom rule to a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy custom-rule set --action {Allow, Block, Log, Redirect}
 *                                   --match-condition
 *                                   --name
 *                                   --priority
 *                                   [--disabled]
 *                                   [--ids]
 *                                   [--policy-name]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 *
 * @param {'Allow' | 'Block' | 'Log' | 'Redirect'} action The action to take when the rule is matched.
 * @param {string} matchCondition Conditions used to determine if the rule is matched for a request.
 * @param {string} name The name of the custom rule.
 * @param {string} priority The priority of the custom rule as a non-negative integer.
 */
var az_cdn_waf_policy_custom_rule_set_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_custom_rule_set_command_builder, _super);
    function az_cdn_waf_policy_custom_rule_set_command_builder(commandPath, resultDataTypeName, action, matchCondition, name, priority) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.action(action);
        _this.matchCondition(matchCondition);
        _this.name(name);
        _this.priority(priority);
        return _this;
    }
    /** The action to take when the rule is matched. */
    az_cdn_waf_policy_custom_rule_set_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Conditions used to determine if the rule is matched for a request. */
    az_cdn_waf_policy_custom_rule_set_command_builder.prototype.matchCondition = function (value) {
        this.setFlag("--match-condition", value);
        return this;
    };
    /** The name of the custom rule. */
    az_cdn_waf_policy_custom_rule_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The priority of the custom rule as a non-negative integer. */
    az_cdn_waf_policy_custom_rule_set_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Disable the custom rule. */
    az_cdn_waf_policy_custom_rule_set_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_custom_rule_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_custom_rule_set_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_custom_rule_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_custom_rule_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_custom_rule_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show a custom rule of a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy custom-rule show --name
 *                                    [--ids]
 *                                    [--policy-name]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name The name of the custom rule.
 */
var az_cdn_waf_policy_custom_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_custom_rule_show_command_builder, _super);
    function az_cdn_waf_policy_custom_rule_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the custom rule. */
    az_cdn_waf_policy_custom_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_custom_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_custom_rule_show_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_custom_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_custom_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_custom_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_custom_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a rule group override from a managed rule set on a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set rule-group-override delete --name
 *                                                               --rule-set-type
 *                                                               --rule-set-version
 *                                                               [--ids]
 *                                                               [--policy-name]
 *                                                               [--resource-group]
 *                                                               [--subscription]
 *                                                               [--yes]
 * ```
 *
 * @param {string} name The name of the rule group.
 * @param {string} ruleSetType The type of the managed rule set.
 * @param {string} ruleSetVersion The version of the managed rule set.
 */
var az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder(commandPath, resultDataTypeName, name, ruleSetType, ruleSetVersion) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.ruleSetType(ruleSetType);
        _this.ruleSetVersion(ruleSetVersion);
        return _this;
    }
    /** The name of the rule group. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The type of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder.prototype.ruleSetType = function (value) {
        this.setFlag("--rule-set-type", value);
        return this;
    };
    /** The version of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder.prototype.ruleSetVersion = function (value) {
        this.setFlag("--rule-set-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List rule group overrides of a managed rule on a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set rule-group-override list --policy-name
 *                                                             --resource-group
 *                                                             --rule-set-type
 *                                                             --rule-set-version
 *                                                             [--query-examples]
 *                                                             [--subscription]
 * ```
 *
 * @param {string} policyName Name of the CDN WAF policy.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} ruleSetType The type of the managed rule set.
 * @param {string} ruleSetVersion The version of the managed rule set.
 */
var az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder(commandPath, resultDataTypeName, policyName, resourceGroup, ruleSetType, ruleSetVersion) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyName(policyName);
        _this.resourceGroup(resourceGroup);
        _this.ruleSetType(ruleSetType);
        _this.ruleSetVersion(ruleSetVersion);
        return _this;
    }
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The type of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder.prototype.ruleSetType = function (value) {
        this.setFlag("--rule-set-type", value);
        return this;
    };
    /** The version of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder.prototype.ruleSetVersion = function (value) {
        this.setFlag("--rule-set-version", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List available CDN WAF managed rule groups of a managed rule set.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set rule-group-override list-available --rule-set-type
 *                                                                       --rule-set-version
 *                                                                       [--subscription]
 * ```
 *
 * @param {string} ruleSetType The type of the managed rule set.
 * @param {string} ruleSetVersion The version of the managed rule set.
 */
var az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder(commandPath, resultDataTypeName, ruleSetType, ruleSetVersion) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.ruleSetType(ruleSetType);
        _this.ruleSetVersion(ruleSetVersion);
        return _this;
    }
    /** The type of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder.prototype.ruleSetType = function (value) {
        this.setFlag("--rule-set-type", value);
        return this;
    };
    /** The version of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder.prototype.ruleSetVersion = function (value) {
        this.setFlag("--rule-set-version", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder;
}(base_1.CommandBuilder));
/**
 * Add or update a rule group override to a managed rule set on a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set rule-group-override set --name
 *                                                            --rule-override
 *                                                            --rule-set-type
 *                                                            --rule-set-version
 *                                                            [--ids]
 *                                                            [--policy-name]
 *                                                            [--resource-group]
 *                                                            [--subscription]
 * ```
 *
 * @param {string} name The name of the rule group.
 * @param {string} ruleOverride Override a rule in the rule group.
 * @param {string} ruleSetType The type of the managed rule set.
 * @param {string} ruleSetVersion The version of the managed rule set.
 */
var az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder(commandPath, resultDataTypeName, name, ruleOverride, ruleSetType, ruleSetVersion) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.ruleOverride(ruleOverride);
        _this.ruleSetType(ruleSetType);
        _this.ruleSetVersion(ruleSetVersion);
        return _this;
    }
    /** The name of the rule group. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Override a rule in the rule group. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder.prototype.ruleOverride = function (value) {
        this.setFlag("--rule-override", value);
        return this;
    };
    /** The type of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder.prototype.ruleSetType = function (value) {
        this.setFlag("--rule-set-type", value);
        return this;
    };
    /** The version of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder.prototype.ruleSetVersion = function (value) {
        this.setFlag("--rule-set-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show a rule group override of a managed rule on a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set rule-group-override show --name
 *                                                             --rule-set-type
 *                                                             --rule-set-version
 *                                                             [--ids]
 *                                                             [--policy-name]
 *                                                             [--query-examples]
 *                                                             [--resource-group]
 *                                                             [--subscription]
 * ```
 *
 * @param {string} name The name of the rule group.
 * @param {string} ruleSetType The type of the managed rule set.
 * @param {string} ruleSetVersion The version of the managed rule set.
 */
var az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder(commandPath, resultDataTypeName, name, ruleSetType, ruleSetVersion) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.ruleSetType(ruleSetType);
        _this.ruleSetVersion(ruleSetVersion);
        return _this;
    }
    /** The name of the rule group. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The type of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder.prototype.ruleSetType = function (value) {
        this.setFlag("--rule-set-type", value);
        return this;
    };
    /** The version of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder.prototype.ruleSetVersion = function (value) {
        this.setFlag("--rule-set-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a managed rule set to a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set add --rule-set-type
 *                                        --rule-set-version
 *                                        [--ids]
 *                                        [--policy-name]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 *
 * @param {string} ruleSetType The type of the managed rule set.
 * @param {string} ruleSetVersion The version of the managed rule set.
 */
var az_cdn_waf_policy_managed_rule_set_add_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_add_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_add_command_builder(commandPath, resultDataTypeName, ruleSetType, ruleSetVersion) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.ruleSetType(ruleSetType);
        _this.ruleSetVersion(ruleSetVersion);
        return _this;
    }
    /** The type of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_add_command_builder.prototype.ruleSetType = function (value) {
        this.setFlag("--rule-set-type", value);
        return this;
    };
    /** The version of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_add_command_builder.prototype.ruleSetVersion = function (value) {
        this.setFlag("--rule-set-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_managed_rule_set_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_managed_rule_set_add_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_managed_rule_set_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List managed rule sets added to a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set list --policy-name
 *                                         --resource-group
 *                                         [--query-examples]
 *                                         [--subscription]
 * ```
 *
 * @param {string} policyName Name of the CDN WAF policy.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_waf_policy_managed_rule_set_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_list_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_list_command_builder(commandPath, resultDataTypeName, policyName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyName(policyName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_managed_rule_set_list_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_managed_rule_set_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_managed_rule_set_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List available CDN WAF managed rule sets.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set list-available [--subscription]
 * ```
 */
var az_cdn_waf_policy_managed_rule_set_list_available_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_list_available_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_list_available_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_list_available_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_list_available_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a managed rule set from a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set remove --rule-set-type
 *                                           --rule-set-version
 *                                           [--ids]
 *                                           [--policy-name]
 *                                           [--resource-group]
 *                                           [--subscription]
 *                                           [--yes]
 * ```
 *
 * @param {string} ruleSetType The type of the managed rule set.
 * @param {string} ruleSetVersion The version of the managed rule set.
 */
var az_cdn_waf_policy_managed_rule_set_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_remove_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_remove_command_builder(commandPath, resultDataTypeName, ruleSetType, ruleSetVersion) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.ruleSetType(ruleSetType);
        _this.ruleSetVersion(ruleSetVersion);
        return _this;
    }
    /** The type of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_remove_command_builder.prototype.ruleSetType = function (value) {
        this.setFlag("--rule-set-type", value);
        return this;
    };
    /** The version of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_remove_command_builder.prototype.ruleSetVersion = function (value) {
        this.setFlag("--rule-set-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_managed_rule_set_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_managed_rule_set_remove_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_managed_rule_set_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cdn_waf_policy_managed_rule_set_remove_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Show a managed rule of a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set show --rule-set-type
 *                                         --rule-set-version
 *                                         [--ids]
 *                                         [--policy-name]
 *                                         [--query-examples]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 *
 * @param {string} ruleSetType The type of the managed rule set.
 * @param {string} ruleSetVersion The version of the managed rule set.
 */
var az_cdn_waf_policy_managed_rule_set_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_managed_rule_set_show_command_builder, _super);
    function az_cdn_waf_policy_managed_rule_set_show_command_builder(commandPath, resultDataTypeName, ruleSetType, ruleSetVersion) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.ruleSetType(ruleSetType);
        _this.ruleSetVersion(ruleSetVersion);
        return _this;
    }
    /** The type of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_show_command_builder.prototype.ruleSetType = function (value) {
        this.setFlag("--rule-set-type", value);
        return this;
    };
    /** The version of the managed rule set. */
    az_cdn_waf_policy_managed_rule_set_show_command_builder.prototype.ruleSetVersion = function (value) {
        this.setFlag("--rule-set-version", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_managed_rule_set_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_managed_rule_set_show_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_managed_rule_set_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_managed_rule_set_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_managed_rule_set_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_managed_rule_set_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a rate limit rule from a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy rate-limit-rule delete --name
 *                                          [--ids]
 *                                          [--policy-name]
 *                                          [--resource-group]
 *                                          [--subscription]
 *                                          [--yes]
 * ```
 *
 * @param {string} name The name of the rate limit rule.
 */
var az_cdn_waf_policy_rate_limit_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_rate_limit_rule_delete_command_builder, _super);
    function az_cdn_waf_policy_rate_limit_rule_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the rate limit rule. */
    az_cdn_waf_policy_rate_limit_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_rate_limit_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_rate_limit_rule_delete_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_rate_limit_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_rate_limit_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cdn_waf_policy_rate_limit_rule_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cdn_waf_policy_rate_limit_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List rate limit rules of a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy rate-limit-rule list --policy-name
 *                                        --resource-group
 *                                        [--query-examples]
 *                                        [--subscription]
 * ```
 *
 * @param {string} policyName Name of the CDN WAF policy.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_waf_policy_rate_limit_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_rate_limit_rule_list_command_builder, _super);
    function az_cdn_waf_policy_rate_limit_rule_list_command_builder(commandPath, resultDataTypeName, policyName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyName(policyName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_rate_limit_rule_list_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_rate_limit_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_rate_limit_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_rate_limit_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_rate_limit_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a rate limit rule to a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy rate-limit-rule set --action {Allow, Block, Log, Redirect}
 *                                       --duration
 *                                       --match-condition
 *                                       --name
 *                                       --priority
 *                                       --request-threshold
 *                                       [--disabled]
 *                                       [--ids]
 *                                       [--policy-name]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 *
 * @param {'Allow' | 'Block' | 'Log' | 'Redirect'} action The action to take when the rule is matched.
 * @param {string} duration The duration of the rate limit in minutes. Valid values are 1 and 5.
 * @param {string} matchCondition Conditions used to determine if the rule is matched for a request.
 * @param {string} name The name of the rate limit rule.
 * @param {string} priority The priority of the rate limit rule as a non-negative integer.
 * @param {string} requestThreshold The request threshold to trigger rate limiting.
 */
var az_cdn_waf_policy_rate_limit_rule_set_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_rate_limit_rule_set_command_builder, _super);
    function az_cdn_waf_policy_rate_limit_rule_set_command_builder(commandPath, resultDataTypeName, action, duration, matchCondition, name, priority, requestThreshold) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.action(action);
        _this.duration(duration);
        _this.matchCondition(matchCondition);
        _this.name(name);
        _this.priority(priority);
        _this.requestThreshold(requestThreshold);
        return _this;
    }
    /** The action to take when the rule is matched. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** The duration of the rate limit in minutes. Valid values are 1 and 5. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.duration = function (value) {
        this.setFlag("--duration", value);
        return this;
    };
    /** Conditions used to determine if the rule is matched for a request. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.matchCondition = function (value) {
        this.setFlag("--match-condition", value);
        return this;
    };
    /** The name of the rate limit rule. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The priority of the rate limit rule as a non-negative integer. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** The request threshold to trigger rate limiting. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.requestThreshold = function (value) {
        this.setFlag("--request-threshold", value);
        return this;
    };
    /** Disable the rate limit rule. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_rate_limit_rule_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_rate_limit_rule_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show a rate limit rule of a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy rate-limit-rule show --name
 *                                        [--ids]
 *                                        [--policy-name]
 *                                        [--query-examples]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 *
 * @param {string} name The name of the rate limit rule.
 */
var az_cdn_waf_policy_rate_limit_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_rate_limit_rule_show_command_builder, _super);
    function az_cdn_waf_policy_rate_limit_rule_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the rate limit rule. */
    az_cdn_waf_policy_rate_limit_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_rate_limit_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the CDN WAF policy. */
    az_cdn_waf_policy_rate_limit_rule_show_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_rate_limit_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_rate_limit_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_rate_limit_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_rate_limit_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy delete [--ids]
 *                          [--name]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--yes]
 * ```
 */
var az_cdn_waf_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_delete_command_builder, _super);
    function az_cdn_waf_policy_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the CDN WAF policy. */
    az_cdn_waf_policy_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_cdn_waf_policy_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cdn_waf_policy_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List CDN WAF policies.
 *
 * Syntax:
 * ```
 * az cdn waf policy list --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cdn_waf_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_list_command_builder, _super);
    function az_cdn_waf_policy_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy set [--block-response-body]
 *                       [--block-response-status-code]
 *                       [--disabled {false, true}]
 *                       [--ids]
 *                       [--mode]
 *                       [--name]
 *                       [--redirect-url]
 *                       [--resource-group]
 *                       [--sku]
 *                       [--subscription]
 *                       [--tags]
 * ```
 */
var az_cdn_waf_policy_set_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_set_command_builder, _super);
    function az_cdn_waf_policy_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The response body to send when a request is blocked, provided as a Base64 encoded string. */
    az_cdn_waf_policy_set_command_builder.prototype.blockResponseBody = function (value) {
        this.setFlag("--block-response-body", value);
        return this;
    };
    /** The response status code to send when a request is blocked. */
    az_cdn_waf_policy_set_command_builder.prototype.blockResponseStatusCode = function (value) {
        this.setFlag("--block-response-status-code", value);
        return this;
    };
    /** Disable the policy. */
    az_cdn_waf_policy_set_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The operation mode of the policy. Valid options are 'Detection' and 'Prevention'. */
    az_cdn_waf_policy_set_command_builder.prototype.mode = function (value) {
        this.setFlag("--mode", value);
        return this;
    };
    /** The name of the CDN WAF policy. */
    az_cdn_waf_policy_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The URL to use when redirecting a request. */
    az_cdn_waf_policy_set_command_builder.prototype.redirectUrl = function (value) {
        this.setFlag("--redirect-url", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The pricing tier (defines a CDN provider, feature list and rate) of the CDN WAF policy. */
    az_cdn_waf_policy_set_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cdn_waf_policy_set_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_cdn_waf_policy_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a CDN WAF policy.
 *
 * Syntax:
 * ```
 * az cdn waf policy show [--ids]
 *                        [--name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_cdn_waf_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_waf_policy_show_command_builder, _super);
    function az_cdn_waf_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_waf_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the CDN WAF policy. */
    az_cdn_waf_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cdn_waf_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cdn_waf_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_waf_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_waf_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Check the availability of a resource name.
 *
 * Syntax:
 * ```
 * az cdn name-exists [--ids]
 *                    [--name]
 *                    [--subscription]
 * ```
 */
var az_cdn_name_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_name_exists_command_builder, _super);
    function az_cdn_name_exists_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_cdn_name_exists_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The resource name to validate. */
    az_cdn_name_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_name_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_name_exists_command_builder;
}(base_1.CommandBuilder));
/**
 * Check the quota and actual usage of the CDN profiles under the given subscription.
 *
 * Syntax:
 * ```
 * az cdn usage [--subscription]
 * ```
 */
var az_cdn_usage_command_builder = /** @class */ (function (_super) {
    __extends(az_cdn_usage_command_builder, _super);
    function az_cdn_usage_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cdn_usage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cdn_usage_command_builder;
}(base_1.CommandBuilder));
