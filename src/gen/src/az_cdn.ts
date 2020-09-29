import { CommandBuilder } from '../base';
import { az_cdn_custom_domain_create_command_result } from './models/az_cdn_custom_domain_create_command_result'
import { az_cdn_custom_domain_delete_command_result } from './models/az_cdn_custom_domain_delete_command_result'
import { az_cdn_custom_domain_disable_https_command_result } from './models/az_cdn_custom_domain_disable_https_command_result'
import { az_cdn_custom_domain_enable_https_command_result } from './models/az_cdn_custom_domain_enable_https_command_result'
import { az_cdn_custom_domain_list_command_result } from './models/az_cdn_custom_domain_list_command_result'
import { az_cdn_custom_domain_show_command_result } from './models/az_cdn_custom_domain_show_command_result'
import { az_cdn_edge_node_list_command_result } from './models/az_cdn_edge_node_list_command_result'
import { az_cdn_endpoint_rule_action_add_command_result } from './models/az_cdn_endpoint_rule_action_add_command_result'
import { az_cdn_endpoint_rule_action_remove_command_result } from './models/az_cdn_endpoint_rule_action_remove_command_result'
import { az_cdn_endpoint_rule_action_show_command_result } from './models/az_cdn_endpoint_rule_action_show_command_result'
import { az_cdn_endpoint_rule_condition_add_command_result } from './models/az_cdn_endpoint_rule_condition_add_command_result'
import { az_cdn_endpoint_rule_condition_remove_command_result } from './models/az_cdn_endpoint_rule_condition_remove_command_result'
import { az_cdn_endpoint_rule_condition_show_command_result } from './models/az_cdn_endpoint_rule_condition_show_command_result'
import { az_cdn_endpoint_rule_add_command_result } from './models/az_cdn_endpoint_rule_add_command_result'
import { az_cdn_endpoint_rule_remove_command_result } from './models/az_cdn_endpoint_rule_remove_command_result'
import { az_cdn_endpoint_rule_show_command_result } from './models/az_cdn_endpoint_rule_show_command_result'
import { az_cdn_endpoint_waf_policy_remove_command_result } from './models/az_cdn_endpoint_waf_policy_remove_command_result'
import { az_cdn_endpoint_waf_policy_set_command_result } from './models/az_cdn_endpoint_waf_policy_set_command_result'
import { az_cdn_endpoint_waf_policy_show_command_result } from './models/az_cdn_endpoint_waf_policy_show_command_result'
import { az_cdn_endpoint_create_command_result } from './models/az_cdn_endpoint_create_command_result'
import { az_cdn_endpoint_delete_command_result } from './models/az_cdn_endpoint_delete_command_result'
import { az_cdn_endpoint_list_command_result } from './models/az_cdn_endpoint_list_command_result'
import { az_cdn_endpoint_load_command_result } from './models/az_cdn_endpoint_load_command_result'
import { az_cdn_endpoint_purge_command_result } from './models/az_cdn_endpoint_purge_command_result'
import { az_cdn_endpoint_show_command_result } from './models/az_cdn_endpoint_show_command_result'
import { az_cdn_endpoint_start_command_result } from './models/az_cdn_endpoint_start_command_result'
import { az_cdn_endpoint_stop_command_result } from './models/az_cdn_endpoint_stop_command_result'
import { az_cdn_endpoint_update_command_result } from './models/az_cdn_endpoint_update_command_result'
import { az_cdn_endpoint_validate_custom_domain_command_result } from './models/az_cdn_endpoint_validate_custom_domain_command_result'
import { az_cdn_origin_list_command_result } from './models/az_cdn_origin_list_command_result'
import { az_cdn_origin_show_command_result } from './models/az_cdn_origin_show_command_result'
import { az_cdn_origin_update_command_result } from './models/az_cdn_origin_update_command_result'
import { az_cdn_profile_create_command_result } from './models/az_cdn_profile_create_command_result'
import { az_cdn_profile_delete_command_result } from './models/az_cdn_profile_delete_command_result'
import { az_cdn_profile_list_command_result } from './models/az_cdn_profile_list_command_result'
import { az_cdn_profile_show_command_result } from './models/az_cdn_profile_show_command_result'
import { az_cdn_profile_update_command_result } from './models/az_cdn_profile_update_command_result'
import { az_cdn_profile_usage_command_result } from './models/az_cdn_profile_usage_command_result'
import { az_cdn_waf_policy_custom_rule_delete_command_result } from './models/az_cdn_waf_policy_custom_rule_delete_command_result'
import { az_cdn_waf_policy_custom_rule_list_command_result } from './models/az_cdn_waf_policy_custom_rule_list_command_result'
import { az_cdn_waf_policy_custom_rule_set_command_result } from './models/az_cdn_waf_policy_custom_rule_set_command_result'
import { az_cdn_waf_policy_custom_rule_show_command_result } from './models/az_cdn_waf_policy_custom_rule_show_command_result'
import { az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_result } from './models/az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_result'
import { az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_result } from './models/az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_result'
import { az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_result } from './models/az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_result'
import { az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_result } from './models/az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_result'
import { az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_result } from './models/az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_result'
import { az_cdn_waf_policy_managed_rule_set_add_command_result } from './models/az_cdn_waf_policy_managed_rule_set_add_command_result'
import { az_cdn_waf_policy_managed_rule_set_list_command_result } from './models/az_cdn_waf_policy_managed_rule_set_list_command_result'
import { az_cdn_waf_policy_managed_rule_set_list_available_command_result } from './models/az_cdn_waf_policy_managed_rule_set_list_available_command_result'
import { az_cdn_waf_policy_managed_rule_set_remove_command_result } from './models/az_cdn_waf_policy_managed_rule_set_remove_command_result'
import { az_cdn_waf_policy_managed_rule_set_show_command_result } from './models/az_cdn_waf_policy_managed_rule_set_show_command_result'
import { az_cdn_waf_policy_rate_limit_rule_delete_command_result } from './models/az_cdn_waf_policy_rate_limit_rule_delete_command_result'
import { az_cdn_waf_policy_rate_limit_rule_list_command_result } from './models/az_cdn_waf_policy_rate_limit_rule_list_command_result'
import { az_cdn_waf_policy_rate_limit_rule_set_command_result } from './models/az_cdn_waf_policy_rate_limit_rule_set_command_result'
import { az_cdn_waf_policy_rate_limit_rule_show_command_result } from './models/az_cdn_waf_policy_rate_limit_rule_show_command_result'
import { az_cdn_waf_policy_delete_command_result } from './models/az_cdn_waf_policy_delete_command_result'
import { az_cdn_waf_policy_list_command_result } from './models/az_cdn_waf_policy_list_command_result'
import { az_cdn_waf_policy_set_command_result } from './models/az_cdn_waf_policy_set_command_result'
import { az_cdn_waf_policy_show_command_result } from './models/az_cdn_waf_policy_show_command_result'
import { az_cdn_name_exists_command_result } from './models/az_cdn_name_exists_command_result'
import { az_cdn_usage_command_result } from './models/az_cdn_usage_command_result'

/** Manage Azure CDN Custom Domains to provide custom host names for endpoints. */
export class az_cdn_custom_domain {
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
    static create(endpointName: string, hostname: string, name: string, profileName: string, resourceGroup: string): az_cdn_custom_domain_create_command_builder {
        return new az_cdn_custom_domain_create_command_builder("az cdn custom-domain create", endpointName, hostname, name, profileName, resourceGroup);
    }

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
    static delete(endpointName: string, name: string, profileName: string, resourceGroup: string): az_cdn_custom_domain_delete_command_builder {
        return new az_cdn_custom_domain_delete_command_builder("az cdn custom-domain delete", endpointName, name, profileName, resourceGroup);
    }

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
    static disable_https(endpointName: string, name: string, profileName: string, resourceGroup: string): az_cdn_custom_domain_disable_https_command_builder {
        return new az_cdn_custom_domain_disable_https_command_builder("az cdn custom-domain disable-https", endpointName, name, profileName, resourceGroup);
    }

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
    static enable_https(endpointName: string, name: string, profileName: string, resourceGroup: string): az_cdn_custom_domain_enable_https_command_builder {
        return new az_cdn_custom_domain_enable_https_command_builder("az cdn custom-domain enable-https", endpointName, name, profileName, resourceGroup);
    }

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
    static list(endpointName: string, profileName: string, resourceGroup: string): az_cdn_custom_domain_list_command_builder {
        return new az_cdn_custom_domain_list_command_builder("az cdn custom-domain list", endpointName, profileName, resourceGroup);
    }

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
    static show(endpointName: string, name: string, profileName: string, resourceGroup: string): az_cdn_custom_domain_show_command_builder {
        return new az_cdn_custom_domain_show_command_builder("az cdn custom-domain show", endpointName, name, profileName, resourceGroup);
    }
}

/** View all available CDN edge nodes. */
export class az_cdn_edge_node {
    /**
     * Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users.
     *
     * Syntax:
     * ```
     * az cdn edge-node list [--query-examples]
     *                       [--subscription]
     * ```
     */
    static list(): az_cdn_edge_node_list_command_builder {
        return new az_cdn_edge_node_list_command_builder("az cdn edge-node list");
    }
}

/** Manage delivery rule actions for an endpoint. */
export class az_cdn_endpoint_rule_action {
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
    static add(actionName: string, ruleName: string): az_cdn_endpoint_rule_action_add_command_builder {
        return new az_cdn_endpoint_rule_action_add_command_builder("az cdn endpoint rule action add", actionName, ruleName);
    }

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
    static remove(index: string, ruleName: string): az_cdn_endpoint_rule_action_remove_command_builder {
        return new az_cdn_endpoint_rule_action_remove_command_builder("az cdn endpoint rule action remove", index, ruleName);
    }

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
    static show(): az_cdn_endpoint_rule_action_show_command_builder {
        return new az_cdn_endpoint_rule_action_show_command_builder("az cdn endpoint rule action show");
    }
}

/** Manage delivery rule conditions for an endpoint. */
export class az_cdn_endpoint_rule_condition {
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
    static add(matchVariable: string, operator: string, ruleName: string): az_cdn_endpoint_rule_condition_add_command_builder {
        return new az_cdn_endpoint_rule_condition_add_command_builder("az cdn endpoint rule condition add", matchVariable, operator, ruleName);
    }

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
    static remove(index: string, ruleName: string): az_cdn_endpoint_rule_condition_remove_command_builder {
        return new az_cdn_endpoint_rule_condition_remove_command_builder("az cdn endpoint rule condition remove", index, ruleName);
    }

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
    static show(): az_cdn_endpoint_rule_condition_show_command_builder {
        return new az_cdn_endpoint_rule_condition_show_command_builder("az cdn endpoint rule condition show");
    }
}

/** Manage delivery rules for an endpoint. */
export class az_cdn_endpoint_rule {
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
    static add(actionName: string, order: string, ruleName: string): az_cdn_endpoint_rule_add_command_builder {
        return new az_cdn_endpoint_rule_add_command_builder("az cdn endpoint rule add", actionName, order, ruleName);
    }

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
    static remove(ruleName: string): az_cdn_endpoint_rule_remove_command_builder {
        return new az_cdn_endpoint_rule_remove_command_builder("az cdn endpoint rule remove", ruleName);
    }

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
    static show(): az_cdn_endpoint_rule_show_command_builder {
        return new az_cdn_endpoint_rule_show_command_builder("az cdn endpoint rule show");
    }
}

/** Apply a CDN WAF policy to a CDN endpoint. */
export class az_cdn_endpoint_waf_policy {
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
    static remove(): az_cdn_endpoint_waf_policy_remove_command_builder {
        return new az_cdn_endpoint_waf_policy_remove_command_builder("az cdn endpoint waf policy remove");
    }

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
    static set(): az_cdn_endpoint_waf_policy_set_command_builder {
        return new az_cdn_endpoint_waf_policy_set_command_builder("az cdn endpoint waf policy set");
    }

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
    static show(): az_cdn_endpoint_waf_policy_show_command_builder {
        return new az_cdn_endpoint_waf_policy_show_command_builder("az cdn endpoint waf policy show");
    }
}

/** Manage WAF properties of a CDN endpoint. */
export class az_cdn_endpoint_waf {
}

/** Manage CDN endpoints. */
export class az_cdn_endpoint {
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
    static create(name: string, origin: string, profileName: string, resourceGroup: string): az_cdn_endpoint_create_command_builder {
        return new az_cdn_endpoint_create_command_builder("az cdn endpoint create", name, origin, profileName, resourceGroup);
    }

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
    static delete(): az_cdn_endpoint_delete_command_builder {
        return new az_cdn_endpoint_delete_command_builder("az cdn endpoint delete");
    }

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
    static list(profileName: string, resourceGroup: string): az_cdn_endpoint_list_command_builder {
        return new az_cdn_endpoint_list_command_builder("az cdn endpoint list", profileName, resourceGroup);
    }

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
    static load(contentPaths: string): az_cdn_endpoint_load_command_builder {
        return new az_cdn_endpoint_load_command_builder("az cdn endpoint load", contentPaths);
    }

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
    static purge(contentPaths: string): az_cdn_endpoint_purge_command_builder {
        return new az_cdn_endpoint_purge_command_builder("az cdn endpoint purge", contentPaths);
    }

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
    static show(): az_cdn_endpoint_show_command_builder {
        return new az_cdn_endpoint_show_command_builder("az cdn endpoint show");
    }

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
    static start(): az_cdn_endpoint_start_command_builder {
        return new az_cdn_endpoint_start_command_builder("az cdn endpoint start");
    }

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
    static stop(): az_cdn_endpoint_stop_command_builder {
        return new az_cdn_endpoint_stop_command_builder("az cdn endpoint stop");
    }

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
    static update(): az_cdn_endpoint_update_command_builder {
        return new az_cdn_endpoint_update_command_builder("az cdn endpoint update");
    }

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
    static validate_custom_domain(hostName: string): az_cdn_endpoint_validate_custom_domain_command_builder {
        return new az_cdn_endpoint_validate_custom_domain_command_builder("az cdn endpoint validate-custom-domain", hostName);
    }
}

/** List or show existing origins related to CDN endpoints. */
export class az_cdn_origin {
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
    static list(endpointName: string, profileName: string, resourceGroup: string): az_cdn_origin_list_command_builder {
        return new az_cdn_origin_list_command_builder("az cdn origin list", endpointName, profileName, resourceGroup);
    }

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
    static show(): az_cdn_origin_show_command_builder {
        return new az_cdn_origin_show_command_builder("az cdn origin show");
    }

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
    static update(): az_cdn_origin_update_command_builder {
        return new az_cdn_origin_update_command_builder("az cdn origin update");
    }
}

/** Manage CDN profiles to define an edge network. */
export class az_cdn_profile {
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
    static create(name: string, resourceGroup: string): az_cdn_profile_create_command_builder {
        return new az_cdn_profile_create_command_builder("az cdn profile create", name, resourceGroup);
    }

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
    static delete(): az_cdn_profile_delete_command_builder {
        return new az_cdn_profile_delete_command_builder("az cdn profile delete");
    }

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
    static list(): az_cdn_profile_list_command_builder {
        return new az_cdn_profile_list_command_builder("az cdn profile list");
    }

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
    static show(): az_cdn_profile_show_command_builder {
        return new az_cdn_profile_show_command_builder("az cdn profile show");
    }

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
    static update(): az_cdn_profile_update_command_builder {
        return new az_cdn_profile_update_command_builder("az cdn profile update");
    }

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
    static usage(): az_cdn_profile_usage_command_builder {
        return new az_cdn_profile_usage_command_builder("az cdn profile usage");
    }
}

/** Manage custom rules of a CDN WAF policy. */
export class az_cdn_waf_policy_custom_rule {
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
    static delete(name: string): az_cdn_waf_policy_custom_rule_delete_command_builder {
        return new az_cdn_waf_policy_custom_rule_delete_command_builder("az cdn waf policy custom-rule delete", name);
    }

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
    static list(policyName: string, resourceGroup: string): az_cdn_waf_policy_custom_rule_list_command_builder {
        return new az_cdn_waf_policy_custom_rule_list_command_builder("az cdn waf policy custom-rule list", policyName, resourceGroup);
    }

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
    static set(action: 'Allow' | 'Block' | 'Log' | 'Redirect', matchCondition: string, name: string, priority: string): az_cdn_waf_policy_custom_rule_set_command_builder {
        return new az_cdn_waf_policy_custom_rule_set_command_builder("az cdn waf policy custom-rule set", action, matchCondition, name, priority);
    }

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
    static show(name: string): az_cdn_waf_policy_custom_rule_show_command_builder {
        return new az_cdn_waf_policy_custom_rule_show_command_builder("az cdn waf policy custom-rule show", name);
    }
}

/** Manage rule group overrides of a managed rule on a CDN WAF policy. */
export class az_cdn_waf_policy_managed_rule_set_rule_group_override {
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
    static delete(name: string, ruleSetType: string, ruleSetVersion: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder("az cdn waf policy managed-rule-set rule-group-override delete", name, ruleSetType, ruleSetVersion);
    }

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
    static list(policyName: string, resourceGroup: string, ruleSetType: string, ruleSetVersion: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder("az cdn waf policy managed-rule-set rule-group-override list", policyName, resourceGroup, ruleSetType, ruleSetVersion);
    }

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
    static list_available(ruleSetType: string, ruleSetVersion: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder("az cdn waf policy managed-rule-set rule-group-override list-available", ruleSetType, ruleSetVersion);
    }

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
    static set(name: string, ruleOverride: string, ruleSetType: string, ruleSetVersion: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder("az cdn waf policy managed-rule-set rule-group-override set", name, ruleOverride, ruleSetType, ruleSetVersion);
    }

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
    static show(name: string, ruleSetType: string, ruleSetVersion: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder("az cdn waf policy managed-rule-set rule-group-override show", name, ruleSetType, ruleSetVersion);
    }
}

/** Manage managed rule sets of a CDN WAF policy. */
export class az_cdn_waf_policy_managed_rule_set {
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
    static add(ruleSetType: string, ruleSetVersion: string): az_cdn_waf_policy_managed_rule_set_add_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_add_command_builder("az cdn waf policy managed-rule-set add", ruleSetType, ruleSetVersion);
    }

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
    static list(policyName: string, resourceGroup: string): az_cdn_waf_policy_managed_rule_set_list_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_list_command_builder("az cdn waf policy managed-rule-set list", policyName, resourceGroup);
    }

    /**
     * List available CDN WAF managed rule sets.
     *
     * Syntax:
     * ```
     * az cdn waf policy managed-rule-set list-available [--subscription]
     * ```
     */
    static list_available(): az_cdn_waf_policy_managed_rule_set_list_available_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_list_available_command_builder("az cdn waf policy managed-rule-set list-available");
    }

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
    static remove(ruleSetType: string, ruleSetVersion: string): az_cdn_waf_policy_managed_rule_set_remove_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_remove_command_builder("az cdn waf policy managed-rule-set remove", ruleSetType, ruleSetVersion);
    }

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
    static show(ruleSetType: string, ruleSetVersion: string): az_cdn_waf_policy_managed_rule_set_show_command_builder {
        return new az_cdn_waf_policy_managed_rule_set_show_command_builder("az cdn waf policy managed-rule-set show", ruleSetType, ruleSetVersion);
    }
}

/** Manage rate limit rules of a CDN WAF policy. */
export class az_cdn_waf_policy_rate_limit_rule {
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
    static delete(name: string): az_cdn_waf_policy_rate_limit_rule_delete_command_builder {
        return new az_cdn_waf_policy_rate_limit_rule_delete_command_builder("az cdn waf policy rate-limit-rule delete", name);
    }

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
    static list(policyName: string, resourceGroup: string): az_cdn_waf_policy_rate_limit_rule_list_command_builder {
        return new az_cdn_waf_policy_rate_limit_rule_list_command_builder("az cdn waf policy rate-limit-rule list", policyName, resourceGroup);
    }

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
    static set(action: 'Allow' | 'Block' | 'Log' | 'Redirect', duration: string, matchCondition: string, name: string, priority: string, requestThreshold: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        return new az_cdn_waf_policy_rate_limit_rule_set_command_builder("az cdn waf policy rate-limit-rule set", action, duration, matchCondition, name, priority, requestThreshold);
    }

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
    static show(name: string): az_cdn_waf_policy_rate_limit_rule_show_command_builder {
        return new az_cdn_waf_policy_rate_limit_rule_show_command_builder("az cdn waf policy rate-limit-rule show", name);
    }
}

/** Manage CDN WAF policies. */
export class az_cdn_waf_policy {
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
    static delete(): az_cdn_waf_policy_delete_command_builder {
        return new az_cdn_waf_policy_delete_command_builder("az cdn waf policy delete");
    }

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
    static list(resourceGroup: string): az_cdn_waf_policy_list_command_builder {
        return new az_cdn_waf_policy_list_command_builder("az cdn waf policy list", resourceGroup);
    }

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
    static set(): az_cdn_waf_policy_set_command_builder {
        return new az_cdn_waf_policy_set_command_builder("az cdn waf policy set");
    }

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
    static show(): az_cdn_waf_policy_show_command_builder {
        return new az_cdn_waf_policy_show_command_builder("az cdn waf policy show");
    }
}

/** */
export class az_cdn_waf {
}

/** Manage Azure Content Delivery Networks (CDNs). */
export class az_cdn {
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
    static name_exists(): az_cdn_name_exists_command_builder {
        return new az_cdn_name_exists_command_builder("az cdn name-exists");
    }

    /**
     * Check the quota and actual usage of the CDN profiles under the given subscription.
     *
     * Syntax:
     * ```
     * az cdn usage [--subscription]
     * ```
     */
    static usage(): az_cdn_usage_command_builder {
        return new az_cdn_usage_command_builder("az cdn usage");
    }
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
class az_cdn_custom_domain_create_command_builder extends CommandBuilder<az_cdn_custom_domain_create_command_result> {
    constructor(commandPath: string, endpointName: string, hostname: string, name: string, profileName: string, resourceGroup: string) {
        super(commandPath);
        this.endpointName(endpointName)
        this.hostname(hostname)
        this.name(name)
        this.profileName(profileName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the endpoint under the profile which is unique globally. */
    endpointName(value: string): az_cdn_custom_domain_create_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** The host name of the custom domain. Must be a domain name. */
    hostname(value: string): az_cdn_custom_domain_create_command_builder {
        this.setFlag("--hostname", value);
        return this;
    }

    /** Name of the custom domain. */
    name(value: string): az_cdn_custom_domain_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_custom_domain_create_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_custom_domain_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_cdn_custom_domain_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_custom_domain_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cdn_custom_domain_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_cdn_custom_domain_delete_command_builder extends CommandBuilder<az_cdn_custom_domain_delete_command_result> {
    constructor(commandPath: string, endpointName: string, name: string, profileName: string, resourceGroup: string) {
        super(commandPath);
        this.endpointName(endpointName)
        this.name(name)
        this.profileName(profileName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the endpoint under the profile which is unique globally. */
    endpointName(value: string): az_cdn_custom_domain_delete_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** Name of the custom domain. */
    name(value: string): az_cdn_custom_domain_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_custom_domain_delete_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_custom_domain_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_custom_domain_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_custom_domain_disable_https_command_builder extends CommandBuilder<az_cdn_custom_domain_disable_https_command_result> {
    constructor(commandPath: string, endpointName: string, name: string, profileName: string, resourceGroup: string) {
        super(commandPath);
        this.endpointName(endpointName)
        this.name(name)
        this.profileName(profileName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the endpoint under the profile which is unique globally. */
    endpointName(value: string): az_cdn_custom_domain_disable_https_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** Name of the custom domain. */
    name(value: string): az_cdn_custom_domain_disable_https_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_custom_domain_disable_https_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_custom_domain_disable_https_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_custom_domain_disable_https_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_custom_domain_enable_https_command_builder extends CommandBuilder<az_cdn_custom_domain_enable_https_command_result> {
    constructor(commandPath: string, endpointName: string, name: string, profileName: string, resourceGroup: string) {
        super(commandPath);
        this.endpointName(endpointName)
        this.name(name)
        this.profileName(profileName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the parent endpoint. */
    endpointName(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** Name of the custom domain. */
    name(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the parent profile. */
    profileName(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The minimum TLS version required for the custom domain. */
    minTlsVersion(value: '1.0' | '1.2' | 'none'): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--min-tls-version", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The resource group of the KeyVault certificate. */
    userCertGroupName(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--user-cert-group-name", value);
        return this;
    }

    /** The protocol type of the certificate. */
    userCertProtocolType(value: 'ip' | 'sni'): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--user-cert-protocol-type", value);
        return this;
    }

    /** The secret name of the KeyVault certificate. */
    userCertSecretName(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--user-cert-secret-name", value);
        return this;
    }

    /** The secret version of the KeyVault certificate. */
    userCertSecretVersion(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--user-cert-secret-version", value);
        return this;
    }

    /** The subscription id of the KeyVault certificate. */
    userCertSubscriptionId(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--user-cert-subscription-id", value);
        return this;
    }

    /** The vault name of the KeyVault certificate. */
    userCertVaultName(value: string): az_cdn_custom_domain_enable_https_command_builder {
        this.setFlag("--user-cert-vault-name", value);
        return this;
    }
}

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
class az_cdn_custom_domain_list_command_builder extends CommandBuilder<az_cdn_custom_domain_list_command_result> {
    constructor(commandPath: string, endpointName: string, profileName: string, resourceGroup: string) {
        super(commandPath);
        this.endpointName(endpointName)
        this.profileName(profileName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the endpoint under the profile which is unique globally. */
    endpointName(value: string): az_cdn_custom_domain_list_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_custom_domain_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_custom_domain_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_custom_domain_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_custom_domain_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_custom_domain_show_command_builder extends CommandBuilder<az_cdn_custom_domain_show_command_result> {
    constructor(commandPath: string, endpointName: string, name: string, profileName: string, resourceGroup: string) {
        super(commandPath);
        this.endpointName(endpointName)
        this.name(name)
        this.profileName(profileName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the endpoint under the profile which is unique globally. */
    endpointName(value: string): az_cdn_custom_domain_show_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** Name of the custom domain. */
    name(value: string): az_cdn_custom_domain_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_custom_domain_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_custom_domain_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_custom_domain_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_custom_domain_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_edge_node_list_command_builder extends CommandBuilder<az_cdn_edge_node_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_edge_node_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_edge_node_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_endpoint_rule_action_add_command_builder extends CommandBuilder<az_cdn_endpoint_rule_action_add_command_result> {
    constructor(commandPath: string, actionName: string, ruleName: string) {
        super(commandPath);
        this.actionName(actionName)
        this.ruleName(ruleName)
    }

    /** Name of the action. */
    actionName(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--action-name", value);
        return this;
    }

    /** Name of the rule. */
    ruleName(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** Caching behavior for the requests. */
    cacheBehavior(value: 'BypassCache' | 'Override' | 'SetIfMissing'): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--cache-behavior", value);
        return this;
    }

    /** The duration for which the content needs to be cached.                    Allowed format is [d.]hh:mm:ss. */
    cacheDuration(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--cache-duration", value);
        return this;
    }

    /** Fragment to add to the redirect URL. */
    customFragment(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--custom-fragment", value);
        return this;
    }

    /** Host to redirect.                    Leave empty to use the incoming host as the destination host. */
    customHostname(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--custom-hostname", value);
        return this;
    }

    /** The full path to redirect. Path cannot be empty and must start with /.                    Leave empty to use the incoming path as destination path. */
    customPath(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--custom-path", value);
        return this;
    }

    /** The set of query strings to be placed in the redirect URL.                    leave empty to preserve the incoming query string. */
    customQuerystring(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--custom-querystring", value);
        return this;
    }

    /** The destination path to be used in the rewrite. */
    destination(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--destination", value);
        return this;
    }

    /** Header action for the requests. */
    headerAction(value: 'Append' | 'Delete' | 'Overwrite'): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--header-action", value);
        return this;
    }

    /** Name of the header to modify. */
    headerName(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--header-name", value);
        return this;
    }

    /** Value of the header. */
    headerValue(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--header-value", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** If True, the remaining path after the source                    pattern will be appended to the new destination path. */
    preserveUnmatchedPath(value: boolean): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--preserve-unmatched-path", value.toString());
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Query parameters to include or exclude (comma separated). */
    queryParameters(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--query-parameters", value);
        return this;
    }

    /** Query string behavior for the requests. */
    queryStringBehavior(value: 'Exclude' | 'ExcludeAll' | 'Include' | 'IncludeAll'): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--query-string-behavior", value);
        return this;
    }

    /** Protocol to use for the redirect. */
    redirectProtocol(value: 'Http' | 'Https' | 'MatchRequest'): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--redirect-protocol", value);
        return this;
    }

    /** The redirect type the rule will use when redirecting traffic. */
    redirectType(value: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect'): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--redirect-type", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** A request URI pattern that identifies the type of requests that may be rewritten. */
    sourcePattern(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--source-pattern", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_rule_action_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_rule_action_remove_command_builder extends CommandBuilder<az_cdn_endpoint_rule_action_remove_command_result> {
    constructor(commandPath: string, index: string, ruleName: string) {
        super(commandPath);
        this.index(index)
        this.ruleName(ruleName)
    }

    /** The index of the condition/action. */
    index(value: string): az_cdn_endpoint_rule_action_remove_command_builder {
        this.setFlag("--index", value);
        return this;
    }

    /** Name of the rule. */
    ruleName(value: string): az_cdn_endpoint_rule_action_remove_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_rule_action_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_rule_action_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_rule_action_remove_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_rule_action_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_rule_action_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_rule_action_show_command_builder extends CommandBuilder<az_cdn_endpoint_rule_action_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_rule_action_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_rule_action_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_rule_action_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_endpoint_rule_action_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_rule_action_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_rule_action_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_endpoint_rule_condition_add_command_builder extends CommandBuilder<az_cdn_endpoint_rule_condition_add_command_result> {
    constructor(commandPath: string, matchVariable: string, operator: string, ruleName: string) {
        super(commandPath);
        this.matchVariable(matchVariable)
        this.operator(operator)
        this.ruleName(ruleName)
    }

    /** Name of the match condition. */
    matchVariable(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--match-variable", value);
        return this;
    }

    /** Operator of the match condition. */
    operator(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--operator", value);
        return this;
    }

    /** Name of the rule. */
    ruleName(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Match values of the match condition (comma separated). */
    matchValues(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--match-values", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** If true, negates the condition. */
    negateCondition(value: boolean): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--negate-condition", value.toString());
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Selector of the match condition. */
    selector(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--selector", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Transform to apply before matching. */
    transform(value: 'Lowercase' | 'Uppercase'): az_cdn_endpoint_rule_condition_add_command_builder {
        this.setFlag("--transform", value);
        return this;
    }
}

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
class az_cdn_endpoint_rule_condition_remove_command_builder extends CommandBuilder<az_cdn_endpoint_rule_condition_remove_command_result> {
    constructor(commandPath: string, index: string, ruleName: string) {
        super(commandPath);
        this.index(index)
        this.ruleName(ruleName)
    }

    /** The index of the condition/action. */
    index(value: string): az_cdn_endpoint_rule_condition_remove_command_builder {
        this.setFlag("--index", value);
        return this;
    }

    /** Name of the rule. */
    ruleName(value: string): az_cdn_endpoint_rule_condition_remove_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_rule_condition_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_rule_condition_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_rule_condition_remove_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_rule_condition_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_rule_condition_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_rule_condition_show_command_builder extends CommandBuilder<az_cdn_endpoint_rule_condition_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_rule_condition_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_rule_condition_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_rule_condition_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_endpoint_rule_condition_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_rule_condition_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_rule_condition_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_endpoint_rule_add_command_builder extends CommandBuilder<az_cdn_endpoint_rule_add_command_result> {
    constructor(commandPath: string, actionName: string, order: string, ruleName: string) {
        super(commandPath);
        this.actionName(actionName)
        this.order(order)
        this.ruleName(ruleName)
    }

    /** Name of the action. */
    actionName(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--action-name", value);
        return this;
    }

    /** The order of the rule. The order number must start from 0 and consecutive.                    Rule with higher order will be applied later. */
    order(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--order", value);
        return this;
    }

    /** Name of the rule. */
    ruleName(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** Caching behavior for the requests. */
    cacheBehavior(value: 'BypassCache' | 'Override' | 'SetIfMissing'): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--cache-behavior", value);
        return this;
    }

    /** The duration for which the content needs to be cached.                    Allowed format is [d.]hh:mm:ss. */
    cacheDuration(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--cache-duration", value);
        return this;
    }

    /** Fragment to add to the redirect URL. */
    customFragment(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--custom-fragment", value);
        return this;
    }

    /** Host to redirect.                    Leave empty to use the incoming host as the destination host. */
    customHostname(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--custom-hostname", value);
        return this;
    }

    /** The full path to redirect. Path cannot be empty and must start with /.                    Leave empty to use the incoming path as destination path. */
    customPath(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--custom-path", value);
        return this;
    }

    /** The set of query strings to be placed in the redirect URL.                    leave empty to preserve the incoming query string. */
    customQuerystring(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--custom-querystring", value);
        return this;
    }

    /** The destination path to be used in the rewrite. */
    destination(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--destination", value);
        return this;
    }

    /** Header action for the requests. */
    headerAction(value: 'Append' | 'Delete' | 'Overwrite'): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--header-action", value);
        return this;
    }

    /** Name of the header to modify. */
    headerName(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--header-name", value);
        return this;
    }

    /** Value of the header. */
    headerValue(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--header-value", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Match values of the match condition (comma separated). */
    matchValues(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--match-values", value);
        return this;
    }

    /** Name of the match condition. */
    matchVariable(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--match-variable", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** If true, negates the condition. */
    negateCondition(value: boolean): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--negate-condition", value.toString());
        return this;
    }

    /** Operator of the match condition. */
    operator(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--operator", value);
        return this;
    }

    /** If True, the remaining path after the source                    pattern will be appended to the new destination path. */
    preserveUnmatchedPath(value: boolean): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--preserve-unmatched-path", value.toString());
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Query parameters to include or exclude (comma separated). */
    queryParameters(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--query-parameters", value);
        return this;
    }

    /** Query string behavior for the requests. */
    queryStringBehavior(value: 'Exclude' | 'ExcludeAll' | 'Include' | 'IncludeAll'): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--query-string-behavior", value);
        return this;
    }

    /** Protocol to use for the redirect. */
    redirectProtocol(value: 'Http' | 'Https' | 'MatchRequest'): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--redirect-protocol", value);
        return this;
    }

    /** The redirect type the rule will use when redirecting traffic. */
    redirectType(value: 'Found' | 'Moved' | 'PermanentRedirect' | 'TemporaryRedirect'): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--redirect-type", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Selector of the match condition. */
    selector(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--selector", value);
        return this;
    }

    /** A request URI pattern that identifies the type of requests that may be rewritten. */
    sourcePattern(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--source-pattern", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Transform to apply before matching. */
    transform(value: 'Lowercase' | 'Uppercase'): az_cdn_endpoint_rule_add_command_builder {
        this.setFlag("--transform", value);
        return this;
    }
}

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
class az_cdn_endpoint_rule_remove_command_builder extends CommandBuilder<az_cdn_endpoint_rule_remove_command_result> {
    constructor(commandPath: string, ruleName: string) {
        super(commandPath);
        this.ruleName(ruleName)
    }

    /** Name of the rule. */
    ruleName(value: string): az_cdn_endpoint_rule_remove_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_rule_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_rule_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_rule_remove_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_rule_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_rule_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_rule_show_command_builder extends CommandBuilder<az_cdn_endpoint_rule_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_rule_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_endpoint_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_endpoint_waf_policy_remove_command_builder extends CommandBuilder<az_cdn_endpoint_waf_policy_remove_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the CDN endpoint. */
    endpointName(value: string): az_cdn_endpoint_waf_policy_remove_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_waf_policy_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_waf_policy_remove_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_waf_policy_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_waf_policy_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cdn_endpoint_waf_policy_remove_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_cdn_endpoint_waf_policy_set_command_builder extends CommandBuilder<az_cdn_endpoint_waf_policy_set_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the CDN endpoint. */
    endpointName(value: string): az_cdn_endpoint_waf_policy_set_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_waf_policy_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_waf_policy_set_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_waf_policy_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_waf_policy_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The Resource ID of the CDN WAF policy to apply to this endpoint. */
    wafPolicyId(value: string): az_cdn_endpoint_waf_policy_set_command_builder {
        this.setFlag("--waf-policy-id", value);
        return this;
    }

    /** The name of the CDN WAF policy to apply to this endpoint. Ignored if --waf-policy-id is set. */
    wafPolicyName(value: string): az_cdn_endpoint_waf_policy_set_command_builder {
        this.setFlag("--waf-policy-name", value);
        return this;
    }

    /** The resource group of the CDN WAF policy to apply to this endpoint. Ignored if --waf-policy-id is set. */
    wafPolicyResourceGroupName(value: string): az_cdn_endpoint_waf_policy_set_command_builder {
        this.setFlag("--waf-policy-resource-group-name", value);
        return this;
    }

    /** The Resource ID of the CDN WAF policy to apply to this endpoint. ignored if --waf-policy-id is set. */
    wafPolicySubscriptionId(value: string): az_cdn_endpoint_waf_policy_set_command_builder {
        this.setFlag("--waf-policy-subscription-id", value);
        return this;
    }
}

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
class az_cdn_endpoint_waf_policy_show_command_builder extends CommandBuilder<az_cdn_endpoint_waf_policy_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the CDN endpoint. */
    endpointName(value: string): az_cdn_endpoint_waf_policy_show_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_waf_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_waf_policy_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_endpoint_waf_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_waf_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_waf_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_endpoint_create_command_builder extends CommandBuilder<az_cdn_endpoint_create_command_result> {
    constructor(commandPath: string, name: string, origin: string, profileName: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.origin(origin)
        this.profileName(profileName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Endpoint origin specified by the following space-delimited 6 tuple: `www.example.com http_port https_port private_link_resource_id private_link_location private_link_approval_message`. The HTTP and HTTPS ports and the private link resource ID and location are optional. The HTTP and HTTPS ports default to 80 and 443, respectively. Private link fields are only valid for the sku Standard_Microsoft, and private_link_location is required if private_link_resource_id is set. */
    origin(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--origin", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** List of content types on which compression applies. The value should be a valid MIME type. */
    contentTypesToCompress(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--content-types-to-compress", value);
        return this;
    }

    /** If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB. */
    enableCompression(value: boolean): az_cdn_endpoint_create_command_builder {
        this.setFlag("--enable-compression", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Indicates whether HTTP traffic is not allowed on the endpoint. Default is to allow HTTP traffic. */
    noHttp(value: boolean): az_cdn_endpoint_create_command_builder {
        this.setFlag("--no-http", value.toString());
        return this;
    }

    /** Indicates whether HTTPS traffic is not allowed on the endpoint. Default is to allow HTTPS traffic. */
    noHttps(value: boolean): az_cdn_endpoint_create_command_builder {
        this.setFlag("--no-https", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. */
    originHostHeader(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--origin-host-header", value);
        return this;
    }

    /** A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath. */
    originPath(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--origin-path", value);
        return this;
    }

    /** Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL. */
    queryStringCachingBehavior(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--query-string-caching-behavior", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cdn_endpoint_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_cdn_endpoint_delete_command_builder extends CommandBuilder<az_cdn_endpoint_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_cdn_endpoint_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_delete_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_list_command_builder extends CommandBuilder<az_cdn_endpoint_list_command_result> {
    constructor(commandPath: string, profileName: string, resourceGroup: string) {
        super(commandPath);
        this.profileName(profileName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_endpoint_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_load_command_builder extends CommandBuilder<az_cdn_endpoint_load_command_result> {
    constructor(commandPath: string, contentPaths: string) {
        super(commandPath);
        this.contentPaths(contentPaths)
    }

    /** The path to the content to be loaded. Path should be a relative file URL of the origin. */
    contentPaths(value: string): az_cdn_endpoint_load_command_builder {
        this.setFlag("--content-paths", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_load_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_load_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_cdn_endpoint_load_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_load_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_load_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_load_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_purge_command_builder extends CommandBuilder<az_cdn_endpoint_purge_command_result> {
    constructor(commandPath: string, contentPaths: string) {
        super(commandPath);
        this.contentPaths(contentPaths)
    }

    /** The path to the content to be purged. Can describe a file path or a wild card directory. */
    contentPaths(value: string): az_cdn_endpoint_purge_command_builder {
        this.setFlag("--content-paths", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_purge_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_purge_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_cdn_endpoint_purge_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_purge_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_purge_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_purge_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_show_command_builder extends CommandBuilder<az_cdn_endpoint_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_endpoint_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_start_command_builder extends CommandBuilder<az_cdn_endpoint_start_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_cdn_endpoint_start_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_start_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_stop_command_builder extends CommandBuilder<az_cdn_endpoint_stop_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_cdn_endpoint_stop_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_stop_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_endpoint_update_command_builder extends CommandBuilder<az_cdn_endpoint_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** List of content types on which compression applies. The value should be a valid MIME type. */
    contentTypesToCompress(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--content-types-to-compress", value);
        return this;
    }

    /** If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB. */
    enableCompression(value: boolean): az_cdn_endpoint_update_command_builder {
        this.setFlag("--enable-compression", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Indicates whether HTTP traffic is not allowed on the endpoint. Default is to allow HTTP traffic. */
    noHttp(value: boolean): az_cdn_endpoint_update_command_builder {
        this.setFlag("--no-http", value.toString());
        return this;
    }

    /** Indicates whether HTTPS traffic is not allowed on the endpoint. Default is to allow HTTPS traffic. */
    noHttps(value: boolean): az_cdn_endpoint_update_command_builder {
        this.setFlag("--no-https", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. */
    originHostHeader(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--origin-host-header", value);
        return this;
    }

    /** A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath. */
    originPath(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--origin-path", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL. */
    queryStringCaching(value: 'BypassCaching' | 'IgnoreQueryString' | 'NotSet' | 'UseQueryString'): az_cdn_endpoint_update_command_builder {
        this.setFlag("--query-string-caching", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cdn_endpoint_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_cdn_endpoint_validate_custom_domain_command_builder extends CommandBuilder<az_cdn_endpoint_validate_custom_domain_command_result> {
    constructor(commandPath: string, hostName: string) {
        super(commandPath);
        this.hostName(hostName)
    }

    /** The host name of the custom domain. Must be a domain name. */
    hostName(value: string): az_cdn_endpoint_validate_custom_domain_command_builder {
        this.setFlag("--host-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_endpoint_validate_custom_domain_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN endpoint. */
    name(value: string): az_cdn_endpoint_validate_custom_domain_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_endpoint_validate_custom_domain_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_endpoint_validate_custom_domain_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_endpoint_validate_custom_domain_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_origin_list_command_builder extends CommandBuilder<az_cdn_origin_list_command_result> {
    constructor(commandPath: string, endpointName: string, profileName: string, resourceGroup: string) {
        super(commandPath);
        this.endpointName(endpointName)
        this.profileName(profileName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the CDN endpoint. */
    endpointName(value: string): az_cdn_origin_list_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_origin_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_origin_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_origin_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_origin_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_origin_show_command_builder extends CommandBuilder<az_cdn_origin_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the CDN endpoint. */
    endpointName(value: string): az_cdn_origin_show_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_origin_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the origin. */
    name(value: string): az_cdn_origin_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_origin_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_origin_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_origin_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_origin_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_origin_update_command_builder extends CommandBuilder<az_cdn_origin_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the CDN endpoint. */
    endpointName(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--endpoint-name", value);
        return this;
    }

    /** The port used for http requests to the origin. */
    httpPort(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--http-port", value);
        return this;
    }

    /** The port used for https requests to the origin. */
    httpsPort(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--https-port", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the origin. */
    name(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The message that is shown to the approver of the private link request. */
    privateLinkApprovalMessage(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--private-link-approval-message", value);
        return this;
    }

    /** The location of the private link that the origin will be connected to. */
    privateLinkLocation(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--private-link-location", value);
        return this;
    }

    /** The resource id of the private link that the origin will be connected to. */
    privateLinkResourceId(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--private-link-resource-id", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    profileName(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_origin_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_profile_create_command_builder extends CommandBuilder<az_cdn_profile_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the CDN profile which is unique within the resource group. */
    name(value: string): az_cdn_profile_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_profile_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_cdn_profile_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile. Defaults to Standard_Akamai. */
    sku(value: 'Custom_Verizon' | 'Premium_ChinaCdn' | 'Premium_Verizon' | 'Standard_Akamai' | 'Standard_ChinaCdn' | 'Standard_Microsoft' | 'Standard_Verizon'): az_cdn_profile_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_profile_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cdn_profile_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_cdn_profile_delete_command_builder extends CommandBuilder<az_cdn_profile_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_profile_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    name(value: string): az_cdn_profile_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_profile_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_profile_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_profile_list_command_builder extends CommandBuilder<az_cdn_profile_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_profile_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_profile_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_profile_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_profile_show_command_builder extends CommandBuilder<az_cdn_profile_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_profile_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    name(value: string): az_cdn_profile_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_profile_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_profile_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_profile_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_profile_update_command_builder extends CommandBuilder<az_cdn_profile_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_cdn_profile_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_cdn_profile_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_profile_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    name(value: string): az_cdn_profile_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_cdn_profile_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_profile_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_cdn_profile_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_profile_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cdn_profile_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_cdn_profile_usage_command_builder extends CommandBuilder<az_cdn_profile_usage_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_profile_usage_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN profile which is unique within the resource group. */
    name(value: string): az_cdn_profile_usage_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_profile_usage_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_profile_usage_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_waf_policy_custom_rule_delete_command_builder extends CommandBuilder<az_cdn_waf_policy_custom_rule_delete_command_result> {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the custom rule. */
    name(value: string): az_cdn_waf_policy_custom_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_custom_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_custom_rule_delete_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_custom_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_custom_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cdn_waf_policy_custom_rule_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_cdn_waf_policy_custom_rule_list_command_builder extends CommandBuilder<az_cdn_waf_policy_custom_rule_list_command_result> {
    constructor(commandPath: string, policyName: string, resourceGroup: string) {
        super(commandPath);
        this.policyName(policyName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_custom_rule_list_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_custom_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_custom_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_custom_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_custom_rule_set_command_builder extends CommandBuilder<az_cdn_waf_policy_custom_rule_set_command_result> {
    constructor(commandPath: string, action: 'Allow' | 'Block' | 'Log' | 'Redirect', matchCondition: string, name: string, priority: string) {
        super(commandPath);
        this.action(action)
        this.matchCondition(matchCondition)
        this.name(name)
        this.priority(priority)
    }

    /** The action to take when the rule is matched. */
    action(value: 'Allow' | 'Block' | 'Log' | 'Redirect'): az_cdn_waf_policy_custom_rule_set_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** Conditions used to determine if the rule is matched for a request. */
    matchCondition(value: string): az_cdn_waf_policy_custom_rule_set_command_builder {
        this.setFlag("--match-condition", value);
        return this;
    }

    /** The name of the custom rule. */
    name(value: string): az_cdn_waf_policy_custom_rule_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The priority of the custom rule as a non-negative integer. */
    priority(value: string): az_cdn_waf_policy_custom_rule_set_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Disable the custom rule. */
    disabled(value: string): az_cdn_waf_policy_custom_rule_set_command_builder {
        this.setFlag("--disabled", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_custom_rule_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_custom_rule_set_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_custom_rule_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_custom_rule_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_custom_rule_show_command_builder extends CommandBuilder<az_cdn_waf_policy_custom_rule_show_command_result> {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the custom rule. */
    name(value: string): az_cdn_waf_policy_custom_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_custom_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_custom_rule_show_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_custom_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_custom_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_custom_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_result> {
    constructor(commandPath: string, name: string, ruleSetType: string, ruleSetVersion: string) {
        super(commandPath);
        this.name(name)
        this.ruleSetType(ruleSetType)
        this.ruleSetVersion(ruleSetVersion)
    }

    /** The name of the rule group. */
    name(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The type of the managed rule set. */
    ruleSetType(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder {
        this.setFlag("--rule-set-type", value);
        return this;
    }

    /** The version of the managed rule set. */
    ruleSetVersion(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder {
        this.setFlag("--rule-set-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_result> {
    constructor(commandPath: string, policyName: string, resourceGroup: string, ruleSetType: string, ruleSetVersion: string) {
        super(commandPath);
        this.policyName(policyName)
        this.resourceGroup(resourceGroup)
        this.ruleSetType(ruleSetType)
        this.ruleSetVersion(ruleSetVersion)
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The type of the managed rule set. */
    ruleSetType(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder {
        this.setFlag("--rule-set-type", value);
        return this;
    }

    /** The version of the managed rule set. */
    ruleSetVersion(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder {
        this.setFlag("--rule-set-version", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_result> {
    constructor(commandPath: string, ruleSetType: string, ruleSetVersion: string) {
        super(commandPath);
        this.ruleSetType(ruleSetType)
        this.ruleSetVersion(ruleSetVersion)
    }

    /** The type of the managed rule set. */
    ruleSetType(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder {
        this.setFlag("--rule-set-type", value);
        return this;
    }

    /** The version of the managed rule set. */
    ruleSetVersion(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder {
        this.setFlag("--rule-set-version", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_list_available_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_result> {
    constructor(commandPath: string, name: string, ruleOverride: string, ruleSetType: string, ruleSetVersion: string) {
        super(commandPath);
        this.name(name)
        this.ruleOverride(ruleOverride)
        this.ruleSetType(ruleSetType)
        this.ruleSetVersion(ruleSetVersion)
    }

    /** The name of the rule group. */
    name(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Override a rule in the rule group. */
    ruleOverride(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder {
        this.setFlag("--rule-override", value);
        return this;
    }

    /** The type of the managed rule set. */
    ruleSetType(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder {
        this.setFlag("--rule-set-type", value);
        return this;
    }

    /** The version of the managed rule set. */
    ruleSetVersion(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder {
        this.setFlag("--rule-set-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_result> {
    constructor(commandPath: string, name: string, ruleSetType: string, ruleSetVersion: string) {
        super(commandPath);
        this.name(name)
        this.ruleSetType(ruleSetType)
        this.ruleSetVersion(ruleSetVersion)
    }

    /** The name of the rule group. */
    name(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The type of the managed rule set. */
    ruleSetType(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder {
        this.setFlag("--rule-set-type", value);
        return this;
    }

    /** The version of the managed rule set. */
    ruleSetVersion(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder {
        this.setFlag("--rule-set-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_rule_group_override_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_waf_policy_managed_rule_set_add_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_add_command_result> {
    constructor(commandPath: string, ruleSetType: string, ruleSetVersion: string) {
        super(commandPath);
        this.ruleSetType(ruleSetType)
        this.ruleSetVersion(ruleSetVersion)
    }

    /** The type of the managed rule set. */
    ruleSetType(value: string): az_cdn_waf_policy_managed_rule_set_add_command_builder {
        this.setFlag("--rule-set-type", value);
        return this;
    }

    /** The version of the managed rule set. */
    ruleSetVersion(value: string): az_cdn_waf_policy_managed_rule_set_add_command_builder {
        this.setFlag("--rule-set-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_managed_rule_set_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_managed_rule_set_add_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_managed_rule_set_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_managed_rule_set_list_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_list_command_result> {
    constructor(commandPath: string, policyName: string, resourceGroup: string) {
        super(commandPath);
        this.policyName(policyName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_managed_rule_set_list_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_managed_rule_set_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_managed_rule_set_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List available CDN WAF managed rule sets.
 *
 * Syntax:
 * ```
 * az cdn waf policy managed-rule-set list-available [--subscription]
 * ```
 */
class az_cdn_waf_policy_managed_rule_set_list_available_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_list_available_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_list_available_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_managed_rule_set_remove_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_remove_command_result> {
    constructor(commandPath: string, ruleSetType: string, ruleSetVersion: string) {
        super(commandPath);
        this.ruleSetType(ruleSetType)
        this.ruleSetVersion(ruleSetVersion)
    }

    /** The type of the managed rule set. */
    ruleSetType(value: string): az_cdn_waf_policy_managed_rule_set_remove_command_builder {
        this.setFlag("--rule-set-type", value);
        return this;
    }

    /** The version of the managed rule set. */
    ruleSetVersion(value: string): az_cdn_waf_policy_managed_rule_set_remove_command_builder {
        this.setFlag("--rule-set-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_managed_rule_set_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_managed_rule_set_remove_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_managed_rule_set_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cdn_waf_policy_managed_rule_set_remove_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_cdn_waf_policy_managed_rule_set_show_command_builder extends CommandBuilder<az_cdn_waf_policy_managed_rule_set_show_command_result> {
    constructor(commandPath: string, ruleSetType: string, ruleSetVersion: string) {
        super(commandPath);
        this.ruleSetType(ruleSetType)
        this.ruleSetVersion(ruleSetVersion)
    }

    /** The type of the managed rule set. */
    ruleSetType(value: string): az_cdn_waf_policy_managed_rule_set_show_command_builder {
        this.setFlag("--rule-set-type", value);
        return this;
    }

    /** The version of the managed rule set. */
    ruleSetVersion(value: string): az_cdn_waf_policy_managed_rule_set_show_command_builder {
        this.setFlag("--rule-set-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_managed_rule_set_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_managed_rule_set_show_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_managed_rule_set_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_managed_rule_set_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_managed_rule_set_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_waf_policy_rate_limit_rule_delete_command_builder extends CommandBuilder<az_cdn_waf_policy_rate_limit_rule_delete_command_result> {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the rate limit rule. */
    name(value: string): az_cdn_waf_policy_rate_limit_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_rate_limit_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_rate_limit_rule_delete_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_rate_limit_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_rate_limit_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cdn_waf_policy_rate_limit_rule_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_cdn_waf_policy_rate_limit_rule_list_command_builder extends CommandBuilder<az_cdn_waf_policy_rate_limit_rule_list_command_result> {
    constructor(commandPath: string, policyName: string, resourceGroup: string) {
        super(commandPath);
        this.policyName(policyName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_rate_limit_rule_list_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_rate_limit_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_rate_limit_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_rate_limit_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_rate_limit_rule_set_command_builder extends CommandBuilder<az_cdn_waf_policy_rate_limit_rule_set_command_result> {
    constructor(commandPath: string, action: 'Allow' | 'Block' | 'Log' | 'Redirect', duration: string, matchCondition: string, name: string, priority: string, requestThreshold: string) {
        super(commandPath);
        this.action(action)
        this.duration(duration)
        this.matchCondition(matchCondition)
        this.name(name)
        this.priority(priority)
        this.requestThreshold(requestThreshold)
    }

    /** The action to take when the rule is matched. */
    action(value: 'Allow' | 'Block' | 'Log' | 'Redirect'): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** The duration of the rate limit in minutes. Valid values are 1 and 5. */
    duration(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--duration", value);
        return this;
    }

    /** Conditions used to determine if the rule is matched for a request. */
    matchCondition(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--match-condition", value);
        return this;
    }

    /** The name of the rate limit rule. */
    name(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The priority of the rate limit rule as a non-negative integer. */
    priority(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** The request threshold to trigger rate limiting. */
    requestThreshold(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--request-threshold", value);
        return this;
    }

    /** Disable the rate limit rule. */
    disabled(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--disabled", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_rate_limit_rule_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_rate_limit_rule_show_command_builder extends CommandBuilder<az_cdn_waf_policy_rate_limit_rule_show_command_result> {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** The name of the rate limit rule. */
    name(value: string): az_cdn_waf_policy_rate_limit_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_rate_limit_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the CDN WAF policy. */
    policyName(value: string): az_cdn_waf_policy_rate_limit_rule_show_command_builder {
        this.setFlag("--policy-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_rate_limit_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_rate_limit_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_rate_limit_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_waf_policy_delete_command_builder extends CommandBuilder<az_cdn_waf_policy_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the CDN WAF policy. */
    name(value: string): az_cdn_waf_policy_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_cdn_waf_policy_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_cdn_waf_policy_list_command_builder extends CommandBuilder<az_cdn_waf_policy_list_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_cdn_waf_policy_set_command_builder extends CommandBuilder<az_cdn_waf_policy_set_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The response body to send when a request is blocked, provided as a Base64 encoded string. */
    blockResponseBody(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--block-response-body", value);
        return this;
    }

    /** The response status code to send when a request is blocked. */
    blockResponseStatusCode(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--block-response-status-code", value);
        return this;
    }

    /** Disable the policy. */
    disabled(value: boolean): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The operation mode of the policy. Valid options are 'Detection' and 'Prevention'. */
    mode(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** The name of the CDN WAF policy. */
    name(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The URL to use when redirecting a request. */
    redirectUrl(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--redirect-url", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The pricing tier (defines a CDN provider, feature list and rate) of the CDN WAF policy. */
    sku(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cdn_waf_policy_set_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_cdn_waf_policy_show_command_builder extends CommandBuilder<az_cdn_waf_policy_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_waf_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the CDN WAF policy. */
    name(value: string): az_cdn_waf_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cdn_waf_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cdn_waf_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_waf_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_cdn_name_exists_command_builder extends CommandBuilder<az_cdn_name_exists_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_cdn_name_exists_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The resource name to validate. */
    name(value: string): az_cdn_name_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_name_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Check the quota and actual usage of the CDN profiles under the given subscription.
 *
 * Syntax:
 * ```
 * az cdn usage [--subscription]
 * ```
 */
class az_cdn_usage_command_builder extends CommandBuilder<az_cdn_usage_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cdn_usage_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
