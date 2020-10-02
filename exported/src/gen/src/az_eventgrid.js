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
/** Manage shared access keys of a domain. */
var az_eventgrid_domain_key = /** @class */ (function () {
    function az_eventgrid_domain_key() {
    }
    /**
     * List shared access keys of a domain.
     *
     * Syntax:
     * ```
     * az eventgrid domain key list --name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the domain.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_domain_key.list = function (name, resourceGroup) {
        return new az_eventgrid_domain_key_list_command_builder("az eventgrid domain key list", 'az_eventgrid_domain_key_list_command_result', name, resourceGroup);
    };
    /**
     * Regenerate a shared access key of a domain.
     *
     * Syntax:
     * ```
     * az eventgrid domain key regenerate --key-name
     *                                    --name
     *                                    --resource-group
     *                                    [--subscription]
     * ```
     *
     * @param {string} keyName Key name to regenerate key1 or key2.
     * @param {string} name Name of the domain.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_domain_key.regenerate = function (keyName, name, resourceGroup) {
        return new az_eventgrid_domain_key_regenerate_command_builder("az eventgrid domain key regenerate", 'az_eventgrid_domain_key_regenerate_command_result', keyName, name, resourceGroup);
    };
    return az_eventgrid_domain_key;
}());
exports.az_eventgrid_domain_key = az_eventgrid_domain_key;
/** Manage event domain topics. */
var az_eventgrid_domain_topic = /** @class */ (function () {
    function az_eventgrid_domain_topic() {
    }
    /**
     * Create a domain topic under a domain.
     *
     * Syntax:
     * ```
     * az eventgrid domain topic create --domain-name
     *                                  --name
     *                                  --resource-group
     *                                  [--subscription]
     * ```
     *
     * @param {string} domainName Name of the domain.
     * @param {string} name Name of the domain topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_domain_topic.create = function (domainName, name, resourceGroup) {
        return new az_eventgrid_domain_topic_create_command_builder("az eventgrid domain topic create", 'az_eventgrid_domain_topic_create_command_result', domainName, name, resourceGroup);
    };
    /**
     * Delete a domain topic under a domain.
     *
     * Syntax:
     * ```
     * az eventgrid domain topic delete [--domain-name]
     *                                  [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_eventgrid_domain_topic["delete"] = function () {
        return new az_eventgrid_domain_topic_delete_command_builder("az eventgrid domain topic delete", 'az_eventgrid_domain_topic_delete_command_result');
    };
    /**
     * List available topics in a domain.
     *
     * Syntax:
     * ```
     * az eventgrid domain topic list --domain-name
     *                                --resource-group
     *                                [--odata-query]
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} domainName Name of the domain.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_domain_topic.list = function (domainName, resourceGroup) {
        return new az_eventgrid_domain_topic_list_command_builder("az eventgrid domain topic list", 'az_eventgrid_domain_topic_list_command_result', domainName, resourceGroup);
    };
    /**
     * Get the details of a domain topic.
     *
     * Syntax:
     * ```
     * az eventgrid domain topic show [--domain-name]
     *                                [--ids]
     *                                [--name]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_eventgrid_domain_topic.show = function () {
        return new az_eventgrid_domain_topic_show_command_builder("az eventgrid domain topic show", 'az_eventgrid_domain_topic_show_command_result');
    };
    return az_eventgrid_domain_topic;
}());
exports.az_eventgrid_domain_topic = az_eventgrid_domain_topic;
/** Manage event domains. */
var az_eventgrid_domain = /** @class */ (function () {
    function az_eventgrid_domain() {
    }
    /**
     * Create a domain.
     *
     * Syntax:
     * ```
     * az eventgrid domain create --location
     *                            --name
     *                            --resource-group
     *                            [--identity {noidentity, systemassigned}]
     *                            [--inbound-ip-rules]
     *                            [--input-mapping-default-values]
     *                            [--input-mapping-fields]
     *                            [--input-schema {cloudeventschemav1_0, customeventschema, eventgridschema}]
     *                            [--public-network-access {disabled, enabled}]
     *                            [--sku {basic, premium}]
     *                            [--subscription]
     *                            [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the domain.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_domain.create = function (location, name, resourceGroup) {
        return new az_eventgrid_domain_create_command_builder("az eventgrid domain create", 'az_eventgrid_domain_create_command_result', location, name, resourceGroup);
    };
    /**
     * Delete a domain.
     *
     * Syntax:
     * ```
     * az eventgrid domain delete [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_eventgrid_domain["delete"] = function () {
        return new az_eventgrid_domain_delete_command_builder("az eventgrid domain delete", 'az_eventgrid_domain_delete_command_result');
    };
    /**
     * List available domains.
     *
     * Syntax:
     * ```
     * az eventgrid domain list [--odata-query]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_eventgrid_domain.list = function () {
        return new az_eventgrid_domain_list_command_builder("az eventgrid domain list", 'az_eventgrid_domain_list_command_result');
    };
    /**
     * Get the details of a domain.
     *
     * Syntax:
     * ```
     * az eventgrid domain show [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_eventgrid_domain.show = function () {
        return new az_eventgrid_domain_show_command_builder("az eventgrid domain show", 'az_eventgrid_domain_show_command_result');
    };
    /**
     * Update a domain.
     *
     * Syntax:
     * ```
     * az eventgrid domain update [--identity {noidentity, systemassigned}]
     *                            [--ids]
     *                            [--inbound-ip-rules]
     *                            [--name]
     *                            [--public-network-access {disabled, enabled}]
     *                            [--resource-group]
     *                            [--sku {basic, premium}]
     *                            [--subscription]
     *                            [--tags]
     * ```
     */
    az_eventgrid_domain.update = function () {
        return new az_eventgrid_domain_update_command_builder("az eventgrid domain update", 'az_eventgrid_domain_update_command_result');
    };
    return az_eventgrid_domain;
}());
exports.az_eventgrid_domain = az_eventgrid_domain;
/** Manage event subscriptions. */
var az_eventgrid_event_subscription = /** @class */ (function () {
    function az_eventgrid_event_subscription() {
    }
    /**
     * Create a new event subscription.
     *
     * Syntax:
     * ```
     * az eventgrid event-subscription create --name
     *                                        [--advanced-filter]
     *                                        [--azure-active-directory-application-id-or-uri]
     *                                        [--azure-active-directory-tenant-id]
     *                                        [--deadletter-endpoint]
     *                                        [--deadletter-identity {systemassigned}]
     *                                        [--deadletter-identity-endpoint]
     *                                        [--delivery-identity {systemassigned}]
     *                                        [--delivery-identity-endpoint]
     *                                        [--delivery-identity-endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
     *                                        [--endpoint]
     *                                        [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
     *                                        [--event-delivery-schema {cloudeventschemav1_0, custominputschema, eventgridschema}]
     *                                        [--event-ttl]
     *                                        [--expiration-date]
     *                                        [--included-event-types]
     *                                        [--labels]
     *                                        [--max-delivery-attempts]
     *                                        [--max-events-per-batch]
     *                                        [--preferred-batch-size-in-kilobytes]
     *                                        [--source-resource-id]
     *                                        [--subject-begins-with]
     *                                        [--subject-case-sensitive {false, true}]
     *                                        [--subject-ends-with]
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     */
    az_eventgrid_event_subscription.create = function (name) {
        return new az_eventgrid_event_subscription_create_command_builder("az eventgrid event-subscription create", 'az_eventgrid_event_subscription_create_command_result', name);
    };
    /**
     * Delete an event subscription.
     *
     * Syntax:
     * ```
     * az eventgrid event-subscription delete --name
     *                                        [--source-resource-id]
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     */
    az_eventgrid_event_subscription["delete"] = function (name) {
        return new az_eventgrid_event_subscription_delete_command_builder("az eventgrid event-subscription delete", 'az_eventgrid_event_subscription_delete_command_result', name);
    };
    /**
     * List event subscriptions.
     *
     * Syntax:
     * ```
     * az eventgrid event-subscription list [--location]
     *                                      [--odata-query]
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--source-resource-id]
     *                                      [--subscription]
     *                                      [--topic-type-name]
     * ```
     */
    az_eventgrid_event_subscription.list = function () {
        return new az_eventgrid_event_subscription_list_command_builder("az eventgrid event-subscription list", 'az_eventgrid_event_subscription_list_command_result');
    };
    /**
     * Get the details of an event subscription.
     *
     * Syntax:
     * ```
     * az eventgrid event-subscription show --name
     *                                      [--include-full-endpoint-url {false, true}]
     *                                      [--query-examples]
     *                                      [--source-resource-id]
     *                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     */
    az_eventgrid_event_subscription.show = function (name) {
        return new az_eventgrid_event_subscription_show_command_builder("az eventgrid event-subscription show", 'az_eventgrid_event_subscription_show_command_result', name);
    };
    /**
     * Update an event subscription.
     *
     * Syntax:
     * ```
     * az eventgrid event-subscription update --name
     *                                        [--add]
     *                                        [--advanced-filter]
     *                                        [--deadletter-endpoint]
     *                                        [--deadletter-identity {systemassigned}]
     *                                        [--deadletter-identity-endpoint]
     *                                        [--delivery-identity {systemassigned}]
     *                                        [--delivery-identity-endpoint]
     *                                        [--delivery-identity-endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
     *                                        [--endpoint]
     *                                        [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
     *                                        [--force-string]
     *                                        [--included-event-types]
     *                                        [--labels]
     *                                        [--remove]
     *                                        [--set]
     *                                        [--source-resource-id]
     *                                        [--subject-begins-with]
     *                                        [--subject-ends-with]
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     */
    az_eventgrid_event_subscription.update = function (name) {
        return new az_eventgrid_event_subscription_update_command_builder("az eventgrid event-subscription update", 'az_eventgrid_event_subscription_update_command_result', name);
    };
    return az_eventgrid_event_subscription;
}());
exports.az_eventgrid_event_subscription = az_eventgrid_event_subscription;
/** Manage Azure Event Grid extension topics. */
var az_eventgrid_extension_topic = /** @class */ (function () {
    function az_eventgrid_extension_topic() {
    }
    /**
     * Get the details of an extension topic.
     *
     * Syntax:
     * ```
     * az eventgrid extension-topic show --scope
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} scope The identifier of the resource to which extension topic is queried. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for Azure resource.
     */
    az_eventgrid_extension_topic.show = function (scope) {
        return new az_eventgrid_extension_topic_show_command_builder("az eventgrid extension-topic show", 'az_eventgrid_extension_topic_show_command_result', scope);
    };
    return az_eventgrid_extension_topic;
}());
exports.az_eventgrid_extension_topic = az_eventgrid_extension_topic;
/** Manage partner event channels. */
var az_eventgrid_partner_namespace_event_channel = /** @class */ (function () {
    function az_eventgrid_partner_namespace_event_channel() {
    }
    /**
     * Create an event channel under a partner namespace.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace event-channel create --desination-topic-name
     *                                                     --destination-resource-group-name
     *                                                     --destination-subscription-id
     *                                                     --name
     *                                                     --partner-namespace-name
     *                                                     --resource-group
     *                                                     --source
     *                                                     [--activation-expiration-date]
     *                                                     [--partner-topic-description]
     *                                                     [--publisher-filter]
     *                                                     [--subscription]
     * ```
     *
     * @param {string} desinationTopicName Name of the partner topic associated with the event channel.
     * @param {string} destinationResourceGroupName Azure Resource Group of the customer creating the event channel. The partner topic associated with the event channel will be created under this resource group.
     * @param {string} destinationSubscriptionId Azure subscription Id of the customer creating the event channel. The partner topic associated with the event channel will be created under this Azure subscription.
     * @param {string} name Name of the event channel.
     * @param {string} partnerNamespaceName Name of the partner namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} source The identifier of the resource that forms the partner source of the events. This represents a unique resource in the partner's resource model.
     */
    az_eventgrid_partner_namespace_event_channel.create = function (desinationTopicName, destinationResourceGroupName, destinationSubscriptionId, name, partnerNamespaceName, resourceGroup, source) {
        return new az_eventgrid_partner_namespace_event_channel_create_command_builder("az eventgrid partner namespace event-channel create", 'az_eventgrid_partner_namespace_event_channel_create_command_result', desinationTopicName, destinationResourceGroupName, destinationSubscriptionId, name, partnerNamespaceName, resourceGroup, source);
    };
    /**
     * Delete a partner namespace.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace event-channel delete [--ids]
     *                                                     [--name]
     *                                                     [--partner-namespace-name]
     *                                                     [--resource-group]
     *                                                     [--subscription]
     *                                                     [--yes]
     * ```
     */
    az_eventgrid_partner_namespace_event_channel["delete"] = function () {
        return new az_eventgrid_partner_namespace_event_channel_delete_command_builder("az eventgrid partner namespace event-channel delete", 'az_eventgrid_partner_namespace_event_channel_delete_command_result');
    };
    /**
     * List available partner event-channels.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace event-channel list --partner-namespace-name
     *                                                   --resource-group
     *                                                   [--odata-query]
     *                                                   [--query-examples]
     *                                                   [--subscription]
     * ```
     *
     * @param {string} partnerNamespaceName Name of the partner namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_partner_namespace_event_channel.list = function (partnerNamespaceName, resourceGroup) {
        return new az_eventgrid_partner_namespace_event_channel_list_command_builder("az eventgrid partner namespace event-channel list", 'az_eventgrid_partner_namespace_event_channel_list_command_result', partnerNamespaceName, resourceGroup);
    };
    /**
     * Get the details of an event channel under a partner namespace.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace event-channel show [--ids]
     *                                                   [--name]
     *                                                   [--partner-namespace-name]
     *                                                   [--query-examples]
     *                                                   [--resource-group]
     *                                                   [--subscription]
     * ```
     */
    az_eventgrid_partner_namespace_event_channel.show = function () {
        return new az_eventgrid_partner_namespace_event_channel_show_command_builder("az eventgrid partner namespace event-channel show", 'az_eventgrid_partner_namespace_event_channel_show_command_result');
    };
    return az_eventgrid_partner_namespace_event_channel;
}());
exports.az_eventgrid_partner_namespace_event_channel = az_eventgrid_partner_namespace_event_channel;
/** Manage shared access keys of a partner namespace. */
var az_eventgrid_partner_namespace_key = /** @class */ (function () {
    function az_eventgrid_partner_namespace_key() {
    }
    /**
     * List shared access keys of a partner namespace.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace key list --partner-namespace-name
     *                                         --resource-group
     *                                         [--query-examples]
     *                                         [--subscription]
     * ```
     *
     * @param {string} partnerNamespaceName Name of the partner namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_partner_namespace_key.list = function (partnerNamespaceName, resourceGroup) {
        return new az_eventgrid_partner_namespace_key_list_command_builder("az eventgrid partner namespace key list", 'az_eventgrid_partner_namespace_key_list_command_result', partnerNamespaceName, resourceGroup);
    };
    /**
     * Regenerate a shared access key of a partner namespace.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace key regenerate --key-name
     *                                               --partner-namespace-name
     *                                               --resource-group
     *                                               [--subscription]
     * ```
     *
     * @param {string} keyName Key name to regenerate (key1 or key2).
     * @param {string} partnerNamespaceName Name of the partner namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_partner_namespace_key.regenerate = function (keyName, partnerNamespaceName, resourceGroup) {
        return new az_eventgrid_partner_namespace_key_regenerate_command_builder("az eventgrid partner namespace key regenerate", 'az_eventgrid_partner_namespace_key_regenerate_command_result', keyName, partnerNamespaceName, resourceGroup);
    };
    return az_eventgrid_partner_namespace_key;
}());
exports.az_eventgrid_partner_namespace_key = az_eventgrid_partner_namespace_key;
/** Manage partner namespaces. */
var az_eventgrid_partner_namespace = /** @class */ (function () {
    function az_eventgrid_partner_namespace() {
    }
    /**
     * Create a partner namespace.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace create --location
     *                                       --name
     *                                       --partner-registration-id
     *                                       --resource-group
     *                                       [--subscription]
     *                                       [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the partner namespace.
     * @param {string} partnerRegistrationId The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_partner_namespace.create = function (location, name, partnerRegistrationId, resourceGroup) {
        return new az_eventgrid_partner_namespace_create_command_builder("az eventgrid partner namespace create", 'az_eventgrid_partner_namespace_create_command_result', location, name, partnerRegistrationId, resourceGroup);
    };
    /**
     * Delete a partner namespace.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace delete [--ids]
     *                                       [--name]
     *                                       [--resource-group]
     *                                       [--subscription]
     *                                       [--yes]
     * ```
     */
    az_eventgrid_partner_namespace["delete"] = function () {
        return new az_eventgrid_partner_namespace_delete_command_builder("az eventgrid partner namespace delete", 'az_eventgrid_partner_namespace_delete_command_result');
    };
    /**
     * List available partner namespaces.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace list [--odata-query]
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    az_eventgrid_partner_namespace.list = function () {
        return new az_eventgrid_partner_namespace_list_command_builder("az eventgrid partner namespace list", 'az_eventgrid_partner_namespace_list_command_result');
    };
    /**
     * Get the details of a partner namespace.
     *
     * Syntax:
     * ```
     * az eventgrid partner namespace show [--ids]
     *                                     [--name]
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    az_eventgrid_partner_namespace.show = function () {
        return new az_eventgrid_partner_namespace_show_command_builder("az eventgrid partner namespace show", 'az_eventgrid_partner_namespace_show_command_result');
    };
    return az_eventgrid_partner_namespace;
}());
exports.az_eventgrid_partner_namespace = az_eventgrid_partner_namespace;
/** Manage partner registrations. */
var az_eventgrid_partner_registration = /** @class */ (function () {
    function az_eventgrid_partner_registration() {
    }
    /**
     * Create a new partner registration.
     *
     * Syntax:
     * ```
     * az eventgrid partner registration create --name
     *                                          --partner-name
     *                                          --resource-group
     *                                          --resource-type-name
     *                                          [--authorized-subscription-ids]
     *                                          [--customer-service-extension]
     *                                          [--customer-service-number]
     *                                          [--customer-service-uri]
     *                                          [--description]
     *                                          [--display-name]
     *                                          [--logo-uri]
     *                                          [--long-description]
     *                                          [--setup-uri]
     *                                          [--subscription]
     *                                          [--tags]
     * ```
     *
     * @param {string} name Name of the partner registration.
     * @param {string} partnerName Official name of the partner.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} resourceTypeName Name of the partner topic resource type. This name should be unique among all partner topic types names.
     */
    az_eventgrid_partner_registration.create = function (name, partnerName, resourceGroup, resourceTypeName) {
        return new az_eventgrid_partner_registration_create_command_builder("az eventgrid partner registration create", 'az_eventgrid_partner_registration_create_command_result', name, partnerName, resourceGroup, resourceTypeName);
    };
    /**
     * Delete a partner registration.
     *
     * Syntax:
     * ```
     * az eventgrid partner registration delete [--ids]
     *                                          [--name]
     *                                          [--resource-group]
     *                                          [--subscription]
     *                                          [--yes]
     * ```
     */
    az_eventgrid_partner_registration["delete"] = function () {
        return new az_eventgrid_partner_registration_delete_command_builder("az eventgrid partner registration delete", 'az_eventgrid_partner_registration_delete_command_result');
    };
    /**
     * List all partner registrations in specific resource group or all under the specified azure subscription.
     *
     * Syntax:
     * ```
     * az eventgrid partner registration list [--odata-query]
     *                                        [--query-examples]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     */
    az_eventgrid_partner_registration.list = function () {
        return new az_eventgrid_partner_registration_list_command_builder("az eventgrid partner registration list", 'az_eventgrid_partner_registration_list_command_result');
    };
    /**
     * Get a partner registration.
     *
     * Syntax:
     * ```
     * az eventgrid partner registration show [--ids]
     *                                        [--name]
     *                                        [--query-examples]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     */
    az_eventgrid_partner_registration.show = function () {
        return new az_eventgrid_partner_registration_show_command_builder("az eventgrid partner registration show", 'az_eventgrid_partner_registration_show_command_result');
    };
    return az_eventgrid_partner_registration;
}());
exports.az_eventgrid_partner_registration = az_eventgrid_partner_registration;
/** Manage event subscriptions of partner topic. */
var az_eventgrid_partner_topic_event_subscription = /** @class */ (function () {
    function az_eventgrid_partner_topic_event_subscription() {
    }
    /**
     * Create a new event subscription for a partner topic.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic event-subscription create --name
     *                                                      --partner-topic-name
     *                                                      --resource-group
     *                                                      [--advanced-filter]
     *                                                      [--azure-active-directory-application-id-or-uri]
     *                                                      [--azure-active-directory-tenant-id]
     *                                                      [--deadletter-endpoint]
     *                                                      [--endpoint]
     *                                                      [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
     *                                                      [--event-delivery-schema {cloudeventschemav1_0, custominputschema, eventgridschema}]
     *                                                      [--event-ttl]
     *                                                      [--expiration-date]
     *                                                      [--included-event-types]
     *                                                      [--labels]
     *                                                      [--max-delivery-attempts]
     *                                                      [--max-events-per-batch]
     *                                                      [--preferred-batch-size-in-kilobytes]
     *                                                      [--subject-begins-with]
     *                                                      [--subject-case-sensitive {false, true}]
     *                                                      [--subject-ends-with]
     *                                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     * @param {string} partnerTopicName Name of the partner topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_partner_topic_event_subscription.create = function (name, partnerTopicName, resourceGroup) {
        return new az_eventgrid_partner_topic_event_subscription_create_command_builder("az eventgrid partner topic event-subscription create", 'az_eventgrid_partner_topic_event_subscription_create_command_result', name, partnerTopicName, resourceGroup);
    };
    /**
     * Delete an event subscription of a partner topic.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic event-subscription delete --name
     *                                                      --partner-topic-name
     *                                                      --resource-group
     *                                                      [--subscription]
     *                                                      [--yes]
     * ```
     *
     * @param {string} name Name of the event subscription.
     * @param {string} partnerTopicName Name of the partner topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_partner_topic_event_subscription["delete"] = function (name, partnerTopicName, resourceGroup) {
        return new az_eventgrid_partner_topic_event_subscription_delete_command_builder("az eventgrid partner topic event-subscription delete", 'az_eventgrid_partner_topic_event_subscription_delete_command_result', name, partnerTopicName, resourceGroup);
    };
    /**
     * List event subscriptions of a specific partner topic.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic event-subscription list --partner-topic-name
     *                                                    --resource-group
     *                                                    [--odata-query]
     *                                                    [--query-examples]
     *                                                    [--subscription]
     * ```
     *
     * @param {string} partnerTopicName Name of the partner topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_partner_topic_event_subscription.list = function (partnerTopicName, resourceGroup) {
        return new az_eventgrid_partner_topic_event_subscription_list_command_builder("az eventgrid partner topic event-subscription list", 'az_eventgrid_partner_topic_event_subscription_list_command_result', partnerTopicName, resourceGroup);
    };
    /**
     * Get the details of an event subscription of a partner topic.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic event-subscription show --name
     *                                                    --partner-topic-name
     *                                                    --resource-group
     *                                                    [--include-full-endpoint-url {false, true}]
     *                                                    [--query-examples]
     *                                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     * @param {string} partnerTopicName Name of the partner topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_partner_topic_event_subscription.show = function (name, partnerTopicName, resourceGroup) {
        return new az_eventgrid_partner_topic_event_subscription_show_command_builder("az eventgrid partner topic event-subscription show", 'az_eventgrid_partner_topic_event_subscription_show_command_result', name, partnerTopicName, resourceGroup);
    };
    /**
     * Update an event subscription of a partner topic.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic event-subscription update --name
     *                                                      --partner-topic-name
     *                                                      --resource-group
     *                                                      [--advanced-filter]
     *                                                      [--deadletter-endpoint]
     *                                                      [--endpoint]
     *                                                      [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
     *                                                      [--included-event-types]
     *                                                      [--labels]
     *                                                      [--subject-begins-with]
     *                                                      [--subject-ends-with]
     *                                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     * @param {string} partnerTopicName Name of the partner topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_partner_topic_event_subscription.update = function (name, partnerTopicName, resourceGroup) {
        return new az_eventgrid_partner_topic_event_subscription_update_command_builder("az eventgrid partner topic event-subscription update", 'az_eventgrid_partner_topic_event_subscription_update_command_result', name, partnerTopicName, resourceGroup);
    };
    return az_eventgrid_partner_topic_event_subscription;
}());
exports.az_eventgrid_partner_topic_event_subscription = az_eventgrid_partner_topic_event_subscription;
/** Manage partner topics. */
var az_eventgrid_partner_topic = /** @class */ (function () {
    function az_eventgrid_partner_topic() {
    }
    /**
     * Activate a partner topic.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic activate [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    az_eventgrid_partner_topic.activate = function () {
        return new az_eventgrid_partner_topic_activate_command_builder("az eventgrid partner topic activate", 'az_eventgrid_partner_topic_activate_command_result');
    };
    /**
     * Deactivate a partner topic.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic deactivate [--ids]
     *                                       [--name]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     */
    az_eventgrid_partner_topic.deactivate = function () {
        return new az_eventgrid_partner_topic_deactivate_command_builder("az eventgrid partner topic deactivate", 'az_eventgrid_partner_topic_deactivate_command_result');
    };
    /**
     * Delete a partner topic.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic delete [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--subscription]
     *                                   [--yes]
     * ```
     */
    az_eventgrid_partner_topic["delete"] = function () {
        return new az_eventgrid_partner_topic_delete_command_builder("az eventgrid partner topic delete", 'az_eventgrid_partner_topic_delete_command_result');
    };
    /**
     * List available partner topics.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic list [--odata-query]
     *                                 [--query-examples]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_eventgrid_partner_topic.list = function () {
        return new az_eventgrid_partner_topic_list_command_builder("az eventgrid partner topic list", 'az_eventgrid_partner_topic_list_command_result');
    };
    /**
     * Get the details of a partner topic.
     *
     * Syntax:
     * ```
     * az eventgrid partner topic show [--ids]
     *                                 [--name]
     *                                 [--query-examples]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_eventgrid_partner_topic.show = function () {
        return new az_eventgrid_partner_topic_show_command_builder("az eventgrid partner topic show", 'az_eventgrid_partner_topic_show_command_result');
    };
    return az_eventgrid_partner_topic;
}());
exports.az_eventgrid_partner_topic = az_eventgrid_partner_topic;
/** Manage partner resources. */
var az_eventgrid_partner = /** @class */ (function () {
    function az_eventgrid_partner() {
    }
    return az_eventgrid_partner;
}());
exports.az_eventgrid_partner = az_eventgrid_partner;
/** Manage event subscriptions of system topic. */
var az_eventgrid_system_topic_event_subscription = /** @class */ (function () {
    function az_eventgrid_system_topic_event_subscription() {
    }
    /**
     * Create a new event subscription for a system topic.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic event-subscription create --name
     *                                                     --resource-group
     *                                                     --system-topic-name
     *                                                     [--advanced-filter]
     *                                                     [--azure-active-directory-application-id-or-uri]
     *                                                     [--azure-active-directory-tenant-id]
     *                                                     [--deadletter-endpoint]
     *                                                     [--endpoint]
     *                                                     [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
     *                                                     [--event-delivery-schema {cloudeventschemav1_0, custominputschema, eventgridschema}]
     *                                                     [--event-ttl]
     *                                                     [--expiration-date]
     *                                                     [--included-event-types]
     *                                                     [--labels]
     *                                                     [--max-delivery-attempts]
     *                                                     [--max-events-per-batch]
     *                                                     [--preferred-batch-size-in-kilobytes]
     *                                                     [--subject-begins-with]
     *                                                     [--subject-case-sensitive {false, true}]
     *                                                     [--subject-ends-with]
     *                                                     [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} systemTopicName Name of the system topic.
     */
    az_eventgrid_system_topic_event_subscription.create = function (name, resourceGroup, systemTopicName) {
        return new az_eventgrid_system_topic_event_subscription_create_command_builder("az eventgrid system-topic event-subscription create", 'az_eventgrid_system_topic_event_subscription_create_command_result', name, resourceGroup, systemTopicName);
    };
    /**
     * Delete an event subscription of a system topic.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic event-subscription delete --name
     *                                                     --resource-group
     *                                                     --system-topic-name
     *                                                     [--subscription]
     *                                                     [--yes]
     * ```
     *
     * @param {string} name Name of the event subscription.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} systemTopicName Name of the system topic.
     */
    az_eventgrid_system_topic_event_subscription["delete"] = function (name, resourceGroup, systemTopicName) {
        return new az_eventgrid_system_topic_event_subscription_delete_command_builder("az eventgrid system-topic event-subscription delete", 'az_eventgrid_system_topic_event_subscription_delete_command_result', name, resourceGroup, systemTopicName);
    };
    /**
     * List event subscriptions of a specific system topic.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic event-subscription list --resource-group
     *                                                   --system-topic-name
     *                                                   [--odata-query]
     *                                                   [--query-examples]
     *                                                   [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} systemTopicName Name of the system topic.
     */
    az_eventgrid_system_topic_event_subscription.list = function (resourceGroup, systemTopicName) {
        return new az_eventgrid_system_topic_event_subscription_list_command_builder("az eventgrid system-topic event-subscription list", 'az_eventgrid_system_topic_event_subscription_list_command_result', resourceGroup, systemTopicName);
    };
    /**
     * Get the details of an event subscription of a system topic.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic event-subscription show --name
     *                                                   --resource-group
     *                                                   --system-topic-name
     *                                                   [--include-full-endpoint-url {false, true}]
     *                                                   [--query-examples]
     *                                                   [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} systemTopicName Name of the system topic.
     */
    az_eventgrid_system_topic_event_subscription.show = function (name, resourceGroup, systemTopicName) {
        return new az_eventgrid_system_topic_event_subscription_show_command_builder("az eventgrid system-topic event-subscription show", 'az_eventgrid_system_topic_event_subscription_show_command_result', name, resourceGroup, systemTopicName);
    };
    /**
     * Update an event subscription of a system topic.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic event-subscription update --name
     *                                                     --resource-group
     *                                                     --system-topic-name
     *                                                     [--advanced-filter]
     *                                                     [--deadletter-endpoint]
     *                                                     [--endpoint]
     *                                                     [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
     *                                                     [--included-event-types]
     *                                                     [--labels]
     *                                                     [--subject-begins-with]
     *                                                     [--subject-ends-with]
     *                                                     [--subscription]
     * ```
     *
     * @param {string} name Name of the event subscription.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} systemTopicName Name of the system topic.
     */
    az_eventgrid_system_topic_event_subscription.update = function (name, resourceGroup, systemTopicName) {
        return new az_eventgrid_system_topic_event_subscription_update_command_builder("az eventgrid system-topic event-subscription update", 'az_eventgrid_system_topic_event_subscription_update_command_result', name, resourceGroup, systemTopicName);
    };
    return az_eventgrid_system_topic_event_subscription;
}());
exports.az_eventgrid_system_topic_event_subscription = az_eventgrid_system_topic_event_subscription;
/** Manage system topics. */
var az_eventgrid_system_topic = /** @class */ (function () {
    function az_eventgrid_system_topic() {
    }
    /**
     * Create a system topic.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic create --location
     *                                  --name
     *                                  --resource-group
     *                                  --source
     *                                  --topic-type
     *                                  [--subscription]
     *                                  [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the system topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} source The ARM Id for the topic, e.g., /subscriptions/{SubId}/resourceGroups/{RgName}/providers/Microsoft.Storage/storageAccounts/{AccountName}.
     * @param {string} topicType Name of the topic type.
     */
    az_eventgrid_system_topic.create = function (location, name, resourceGroup, source, topicType) {
        return new az_eventgrid_system_topic_create_command_builder("az eventgrid system-topic create", 'az_eventgrid_system_topic_create_command_result', location, name, resourceGroup, source, topicType);
    };
    /**
     * Delete a system topic.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic delete [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     *                                  [--yes]
     * ```
     */
    az_eventgrid_system_topic["delete"] = function () {
        return new az_eventgrid_system_topic_delete_command_builder("az eventgrid system-topic delete", 'az_eventgrid_system_topic_delete_command_result');
    };
    /**
     * List available system topics.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic list [--odata-query]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_eventgrid_system_topic.list = function () {
        return new az_eventgrid_system_topic_list_command_builder("az eventgrid system-topic list", 'az_eventgrid_system_topic_list_command_result');
    };
    /**
     * Get the details of a system topic.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic show [--ids]
     *                                [--name]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_eventgrid_system_topic.show = function () {
        return new az_eventgrid_system_topic_show_command_builder("az eventgrid system-topic show", 'az_eventgrid_system_topic_show_command_result');
    };
    /**
     * Update a system topic.
     *
     * Syntax:
     * ```
     * az eventgrid system-topic update [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     *                                  [--tags]
     * ```
     */
    az_eventgrid_system_topic.update = function () {
        return new az_eventgrid_system_topic_update_command_builder("az eventgrid system-topic update", 'az_eventgrid_system_topic_update_command_result');
    };
    return az_eventgrid_system_topic;
}());
exports.az_eventgrid_system_topic = az_eventgrid_system_topic;
/** Manage shared access keys of a topic. */
var az_eventgrid_topic_key = /** @class */ (function () {
    function az_eventgrid_topic_key() {
    }
    /**
     * List shared access keys of a topic.
     *
     * Syntax:
     * ```
     * az eventgrid topic key list --name
     *                             --resource-group
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} name Name of the topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_topic_key.list = function (name, resourceGroup) {
        return new az_eventgrid_topic_key_list_command_builder("az eventgrid topic key list", 'az_eventgrid_topic_key_list_command_result', name, resourceGroup);
    };
    /**
     * Regenerate a shared access key of a topic.
     *
     * Syntax:
     * ```
     * az eventgrid topic key regenerate --key-name
     *                                   --name
     *                                   --resource-group
     *                                   [--subscription]
     * ```
     *
     * @param {string} keyName Key name to regenerate key1 or key2.
     * @param {string} name Name of the topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_topic_key.regenerate = function (keyName, name, resourceGroup) {
        return new az_eventgrid_topic_key_regenerate_command_builder("az eventgrid topic key regenerate", 'az_eventgrid_topic_key_regenerate_command_result', keyName, name, resourceGroup);
    };
    return az_eventgrid_topic_key;
}());
exports.az_eventgrid_topic_key = az_eventgrid_topic_key;
/** Get details for topic types. */
var az_eventgrid_topic_type = /** @class */ (function () {
    function az_eventgrid_topic_type() {
    }
    /**
     * List registered topic types.
     *
     * Syntax:
     * ```
     * az eventgrid topic-type list [--query-examples]
     *                              [--subscription]
     * ```
     */
    az_eventgrid_topic_type.list = function () {
        return new az_eventgrid_topic_type_list_command_builder("az eventgrid topic-type list", 'az_eventgrid_topic_type_list_command_result');
    };
    /**
     * List the event types supported by a topic type.
     *
     * Syntax:
     * ```
     * az eventgrid topic-type list-event-types --name
     *                                          [--subscription]
     * ```
     *
     * @param {string} name Name of the topic type.
     */
    az_eventgrid_topic_type.list_event_types = function (name) {
        return new az_eventgrid_topic_type_list_event_types_command_builder("az eventgrid topic-type list-event-types", 'az_eventgrid_topic_type_list_event_types_command_result', name);
    };
    /**
     * Get the details for a topic type.
     *
     * Syntax:
     * ```
     * az eventgrid topic-type show --name
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the topic type.
     */
    az_eventgrid_topic_type.show = function (name) {
        return new az_eventgrid_topic_type_show_command_builder("az eventgrid topic-type show", 'az_eventgrid_topic_type_show_command_result', name);
    };
    return az_eventgrid_topic_type;
}());
exports.az_eventgrid_topic_type = az_eventgrid_topic_type;
/** Manage Azure Event Grid topics. */
var az_eventgrid_topic = /** @class */ (function () {
    function az_eventgrid_topic() {
    }
    /**
     * Create a topic.
     *
     * Syntax:
     * ```
     * az eventgrid topic create --location
     *                           --name
     *                           --resource-group
     *                           [--identity {noidentity, systemassigned}]
     *                           [--inbound-ip-rules]
     *                           [--input-mapping-default-values]
     *                           [--input-mapping-fields]
     *                           [--input-schema {cloudeventschemav1_0, customeventschema, eventgridschema}]
     *                           [--public-network-access {disabled, enabled}]
     *                           [--sku {basic, premium}]
     *                           [--subscription]
     *                           [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the topic.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventgrid_topic.create = function (location, name, resourceGroup) {
        return new az_eventgrid_topic_create_command_builder("az eventgrid topic create", 'az_eventgrid_topic_create_command_result', location, name, resourceGroup);
    };
    /**
     * Delete a topic.
     *
     * Syntax:
     * ```
     * az eventgrid topic delete [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_eventgrid_topic["delete"] = function () {
        return new az_eventgrid_topic_delete_command_builder("az eventgrid topic delete", 'az_eventgrid_topic_delete_command_result');
    };
    /**
     * List available topics.
     *
     * Syntax:
     * ```
     * az eventgrid topic list [--odata-query]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_eventgrid_topic.list = function () {
        return new az_eventgrid_topic_list_command_builder("az eventgrid topic list", 'az_eventgrid_topic_list_command_result');
    };
    /**
     * Get the details of a topic.
     *
     * Syntax:
     * ```
     * az eventgrid topic show [--ids]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_eventgrid_topic.show = function () {
        return new az_eventgrid_topic_show_command_builder("az eventgrid topic show", 'az_eventgrid_topic_show_command_result');
    };
    /**
     * Update a topic.
     *
     * Syntax:
     * ```
     * az eventgrid topic update [--identity {noidentity, systemassigned}]
     *                           [--ids]
     *                           [--inbound-ip-rules]
     *                           [--name]
     *                           [--public-network-access {disabled, enabled}]
     *                           [--resource-group]
     *                           [--sku {basic, premium}]
     *                           [--subscription]
     *                           [--tags]
     * ```
     */
    az_eventgrid_topic.update = function () {
        return new az_eventgrid_topic_update_command_builder("az eventgrid topic update", 'az_eventgrid_topic_update_command_result');
    };
    return az_eventgrid_topic;
}());
exports.az_eventgrid_topic = az_eventgrid_topic;
/** Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions. */
var az_eventgrid = /** @class */ (function () {
    function az_eventgrid() {
    }
    return az_eventgrid;
}());
exports.az_eventgrid = az_eventgrid;
/**
 * List shared access keys of a domain.
 *
 * Syntax:
 * ```
 * az eventgrid domain key list --name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the domain.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_domain_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_key_list_command_builder, _super);
    function az_eventgrid_domain_key_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the domain. */
    az_eventgrid_domain_key_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_key_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_domain_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_domain_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate a shared access key of a domain.
 *
 * Syntax:
 * ```
 * az eventgrid domain key regenerate --key-name
 *                                    --name
 *                                    --resource-group
 *                                    [--subscription]
 * ```
 *
 * @param {string} keyName Key name to regenerate key1 or key2.
 * @param {string} name Name of the domain.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_domain_key_regenerate_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_key_regenerate_command_builder, _super);
    function az_eventgrid_domain_key_regenerate_command_builder(commandPath, resultDataTypeName, keyName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyName(keyName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Key name to regenerate key1 or key2. */
    az_eventgrid_domain_key_regenerate_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Name of the domain. */
    az_eventgrid_domain_key_regenerate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_key_regenerate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_key_regenerate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_domain_key_regenerate_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a domain topic under a domain.
 *
 * Syntax:
 * ```
 * az eventgrid domain topic create --domain-name
 *                                  --name
 *                                  --resource-group
 *                                  [--subscription]
 * ```
 *
 * @param {string} domainName Name of the domain.
 * @param {string} name Name of the domain topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_domain_topic_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_topic_create_command_builder, _super);
    function az_eventgrid_domain_topic_create_command_builder(commandPath, resultDataTypeName, domainName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.domainName(domainName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the domain. */
    az_eventgrid_domain_topic_create_command_builder.prototype.domainName = function (value) {
        this.setFlag("--domain-name", value);
        return this;
    };
    /** Name of the domain topic. */
    az_eventgrid_domain_topic_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_topic_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_topic_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_domain_topic_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a domain topic under a domain.
 *
 * Syntax:
 * ```
 * az eventgrid domain topic delete [--domain-name]
 *                                  [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_eventgrid_domain_topic_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_topic_delete_command_builder, _super);
    function az_eventgrid_domain_topic_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the domain. */
    az_eventgrid_domain_topic_delete_command_builder.prototype.domainName = function (value) {
        this.setFlag("--domain-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_domain_topic_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the domain topic. */
    az_eventgrid_domain_topic_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_topic_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_topic_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_domain_topic_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available topics in a domain.
 *
 * Syntax:
 * ```
 * az eventgrid domain topic list --domain-name
 *                                --resource-group
 *                                [--odata-query]
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} domainName Name of the domain.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_domain_topic_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_topic_list_command_builder, _super);
    function az_eventgrid_domain_topic_list_command_builder(commandPath, resultDataTypeName, domainName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.domainName(domainName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the domain. */
    az_eventgrid_domain_topic_list_command_builder.prototype.domainName = function (value) {
        this.setFlag("--domain-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_topic_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_domain_topic_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_domain_topic_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_topic_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_domain_topic_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a domain topic.
 *
 * Syntax:
 * ```
 * az eventgrid domain topic show [--domain-name]
 *                                [--ids]
 *                                [--name]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_eventgrid_domain_topic_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_topic_show_command_builder, _super);
    function az_eventgrid_domain_topic_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the domain. */
    az_eventgrid_domain_topic_show_command_builder.prototype.domainName = function (value) {
        this.setFlag("--domain-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_domain_topic_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the domain topic. */
    az_eventgrid_domain_topic_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_domain_topic_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_topic_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_topic_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_domain_topic_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a domain.
 *
 * Syntax:
 * ```
 * az eventgrid domain create --location
 *                            --name
 *                            --resource-group
 *                            [--identity {noidentity, systemassigned}]
 *                            [--inbound-ip-rules]
 *                            [--input-mapping-default-values]
 *                            [--input-mapping-fields]
 *                            [--input-schema {cloudeventschemav1_0, customeventschema, eventgridschema}]
 *                            [--public-network-access {disabled, enabled}]
 *                            [--sku {basic, premium}]
 *                            [--subscription]
 *                            [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the domain.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_domain_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_create_command_builder, _super);
    function az_eventgrid_domain_create_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_eventgrid_domain_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the domain. */
    az_eventgrid_domain_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The identity type of the resource (e.g., topic or domain). */
    az_eventgrid_domain_create_command_builder.prototype.identity = function (value) {
        this.setFlag("--identity", value);
        return this;
    };
    /** List of inbound IP rules. */
    az_eventgrid_domain_create_command_builder.prototype.inboundIpRules = function (value) {
        this.setFlag("--inbound-ip-rules", value);
        return this;
    };
    /** When input-schema is specified as customeventschema, this parameter can be used to specify input mappings based on default values. You can use this parameter when your custom schema does not include a field that corresponds to one of the three fields supported by this parameter. Specify space separated mappings in 'key=value' format. Allowed key names are 'subject', 'eventtype', 'dataversion'. The corresponding value names should specify the default values to be used for the mapping and they will be used only when the published event doesn't have a valid mapping for a particular field. */
    az_eventgrid_domain_create_command_builder.prototype.inputMappingDefaultValues = function (value) {
        this.setFlag("--input-mapping-default-values", value);
        return this;
    };
    /** When input-schema is specified as customeventschema, this parameter is used to specify input mappings based on field names. Specify space separated mappings in 'key=value' format. Allowed key names are 'id', 'topic', 'eventtime', 'subject', 'eventtype', 'dataversion'. The corresponding value names should specify the names of the fields in the custom input schema. If a mapping for either 'id' or 'eventtime' is not provided, Event Grid will auto-generate a default value for these two fields. */
    az_eventgrid_domain_create_command_builder.prototype.inputMappingFields = function (value) {
        this.setFlag("--input-mapping-fields", value);
        return this;
    };
    /** Schema in which incoming events will be published to this topic/domain. If you specify customeventschema as the value for this parameter, you must also provide values for at least one of --input_mapping_default_values / --input_mapping_fields. */
    az_eventgrid_domain_create_command_builder.prototype.inputSchema = function (value) {
        this.setFlag("--input-schema", value);
        return this;
    };
    /** This determines if traffic is allowed over public network. By default it is enabled. You can further restrict to specific IPs by configuring. */
    az_eventgrid_domain_create_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** The Sku name of the resource. */
    az_eventgrid_domain_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventgrid_domain_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventgrid_domain_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a domain.
 *
 * Syntax:
 * ```
 * az eventgrid domain delete [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_eventgrid_domain_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_delete_command_builder, _super);
    function az_eventgrid_domain_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_domain_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the domain. */
    az_eventgrid_domain_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_domain_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available domains.
 *
 * Syntax:
 * ```
 * az eventgrid domain list [--odata-query]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_eventgrid_domain_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_list_command_builder, _super);
    function az_eventgrid_domain_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_domain_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_domain_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_domain_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a domain.
 *
 * Syntax:
 * ```
 * az eventgrid domain show [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_eventgrid_domain_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_show_command_builder, _super);
    function az_eventgrid_domain_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_domain_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the domain. */
    az_eventgrid_domain_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_domain_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_domain_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a domain.
 *
 * Syntax:
 * ```
 * az eventgrid domain update [--identity {noidentity, systemassigned}]
 *                            [--ids]
 *                            [--inbound-ip-rules]
 *                            [--name]
 *                            [--public-network-access {disabled, enabled}]
 *                            [--resource-group]
 *                            [--sku {basic, premium}]
 *                            [--subscription]
 *                            [--tags]
 * ```
 */
var az_eventgrid_domain_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_domain_update_command_builder, _super);
    function az_eventgrid_domain_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The identity type of the resource (e.g., topic or domain). */
    az_eventgrid_domain_update_command_builder.prototype.identity = function (value) {
        this.setFlag("--identity", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_domain_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** List of inbound IP rules. */
    az_eventgrid_domain_update_command_builder.prototype.inboundIpRules = function (value) {
        this.setFlag("--inbound-ip-rules", value);
        return this;
    };
    /** Name of the domain. */
    az_eventgrid_domain_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** This determines if traffic is allowed over public network. By default it is enabled. You can further restrict to specific IPs by configuring. */
    az_eventgrid_domain_update_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_domain_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The Sku name of the resource. */
    az_eventgrid_domain_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_domain_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventgrid_domain_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventgrid_domain_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new event subscription.
 *
 * Syntax:
 * ```
 * az eventgrid event-subscription create --name
 *                                        [--advanced-filter]
 *                                        [--azure-active-directory-application-id-or-uri]
 *                                        [--azure-active-directory-tenant-id]
 *                                        [--deadletter-endpoint]
 *                                        [--deadletter-identity {systemassigned}]
 *                                        [--deadletter-identity-endpoint]
 *                                        [--delivery-identity {systemassigned}]
 *                                        [--delivery-identity-endpoint]
 *                                        [--delivery-identity-endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
 *                                        [--endpoint]
 *                                        [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
 *                                        [--event-delivery-schema {cloudeventschemav1_0, custominputschema, eventgridschema}]
 *                                        [--event-ttl]
 *                                        [--expiration-date]
 *                                        [--included-event-types]
 *                                        [--labels]
 *                                        [--max-delivery-attempts]
 *                                        [--max-events-per-batch]
 *                                        [--preferred-batch-size-in-kilobytes]
 *                                        [--source-resource-id]
 *                                        [--subject-begins-with]
 *                                        [--subject-case-sensitive {false, true}]
 *                                        [--subject-ends-with]
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 */
var az_eventgrid_event_subscription_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_event_subscription_create_command_builder, _super);
    function az_eventgrid_event_subscription_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_event_subscription_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** An advanced filter enables filtering of events based on a specific event property. */
    az_eventgrid_event_subscription_create_command_builder.prototype.advancedFilter = function (value) {
        this.setFlag("--advanced-filter", value);
        return this;
    };
    /** The Azure Active Directory Application Id or Uri to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination. */
    az_eventgrid_event_subscription_create_command_builder.prototype.azureActiveDirectoryApplicationIdOrUri = function (value) {
        this.setFlag("--azure-active-directory-application-id-or-uri", value);
        return this;
    };
    /** The Azure Active Directory Tenant Id to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination. */
    az_eventgrid_event_subscription_create_command_builder.prototype.azureActiveDirectoryTenantId = function (value) {
        this.setFlag("--azure-active-directory-tenant-id", value);
        return this;
    };
    /** The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription. */
    az_eventgrid_event_subscription_create_command_builder.prototype.deadletterEndpoint = function (value) {
        this.setFlag("--deadletter-endpoint", value);
        return this;
    };
    /** The identity type of the deadletter destination resource. */
    az_eventgrid_event_subscription_create_command_builder.prototype.deadletterIdentity = function (value) {
        this.setFlag("--deadletter-identity", value);
        return this;
    };
    /** The Azure resource ID of an Azure Storage blob container destination with identity where EventGrid should deadletter undeliverable events for this event subscription. */
    az_eventgrid_event_subscription_create_command_builder.prototype.deadletterIdentityEndpoint = function (value) {
        this.setFlag("--deadletter-identity-endpoint", value);
        return this;
    };
    /** The identity type of the delivery destination resource (e.g., storage queue, or eventhub). */
    az_eventgrid_event_subscription_create_command_builder.prototype.deliveryIdentity = function (value) {
        this.setFlag("--delivery-identity", value);
        return this;
    };
    /** Endpoint with identity where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. */
    az_eventgrid_event_subscription_create_command_builder.prototype.deliveryIdentityEndpoint = function (value) {
        this.setFlag("--delivery-identity-endpoint", value);
        return this;
    };
    /** The type of the destination endpoint with resource identity. */
    az_eventgrid_event_subscription_create_command_builder.prototype.deliveryIdentityEndpointType = function (value) {
        this.setFlag("--delivery-identity-endpoint-type", value);
        return this;
    };
    /** Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command. */
    az_eventgrid_event_subscription_create_command_builder.prototype.endpoint = function (value) {
        this.setFlag("--endpoint", value);
        return this;
    };
    /** The type of the destination endpoint. */
    az_eventgrid_event_subscription_create_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** The schema in which events should be delivered for this event subscription. By default, events will be delivered in the same schema in which they are published (based on the corresponding topic's input schema). */
    az_eventgrid_event_subscription_create_command_builder.prototype.eventDeliverySchema = function (value) {
        this.setFlag("--event-delivery-schema", value);
        return this;
    };
    /** Event time to live (in minutes). Must be a number between 1 and 1440. */
    az_eventgrid_event_subscription_create_command_builder.prototype.eventTtl = function (value) {
        this.setFlag("--event-ttl", value);
        return this;
    };
    /** Date or datetime (in UTC, e.g. '2018-11-30T11:59:59+00:00' or '2018-11-30') after which the event subscription would expire. By default, there is no expiration for the event subscription. */
    az_eventgrid_event_subscription_create_command_builder.prototype.expirationDate = function (value) {
        this.setFlag("--expiration-date", value);
        return this;
    };
    /** A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'. */
    az_eventgrid_event_subscription_create_command_builder.prototype.includedEventTypes = function (value) {
        this.setFlag("--included-event-types", value);
        return this;
    };
    /** A space-separated list of labels to associate with this event subscription. */
    az_eventgrid_event_subscription_create_command_builder.prototype.labels = function (value) {
        this.setFlag("--labels", value);
        return this;
    };
    /** Maximum number of delivery attempts. Must be a number between 1 and 30. */
    az_eventgrid_event_subscription_create_command_builder.prototype.maxDeliveryAttempts = function (value) {
        this.setFlag("--max-delivery-attempts", value);
        return this;
    };
    /** Maximum number of events in a batch. Must be a number between 1 and 5000. */
    az_eventgrid_event_subscription_create_command_builder.prototype.maxEventsPerBatch = function (value) {
        this.setFlag("--max-events-per-batch", value);
        return this;
    };
    /** Preferred batch size in kilobytes. Must be a number between 1 and 1024. */
    az_eventgrid_event_subscription_create_command_builder.prototype.preferredBatchSizeInKilobytes = function (value) {
        this.setFlag("--preferred-batch-size-in-kilobytes", value);
        return this;
    };
    /** Fully qualified identifier of the Azure resource to which the event subscription needs to be created. */
    az_eventgrid_event_subscription_create_command_builder.prototype.sourceResourceId = function (value) {
        this.setFlag("--source-resource-id", value);
        return this;
    };
    /** An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported. */
    az_eventgrid_event_subscription_create_command_builder.prototype.subjectBeginsWith = function (value) {
        this.setFlag("--subject-begins-with", value);
        return this;
    };
    /** Specify to indicate whether the subject fields should be compared in a case sensitive manner. True if flag present. */
    az_eventgrid_event_subscription_create_command_builder.prototype.subjectCaseSensitive = function (value) {
        this.setFlag("--subject-case-sensitive", value.toString());
        return this;
    };
    /** An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported. */
    az_eventgrid_event_subscription_create_command_builder.prototype.subjectEndsWith = function (value) {
        this.setFlag("--subject-ends-with", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_event_subscription_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_event_subscription_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an event subscription.
 *
 * Syntax:
 * ```
 * az eventgrid event-subscription delete --name
 *                                        [--source-resource-id]
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 */
var az_eventgrid_event_subscription_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_event_subscription_delete_command_builder, _super);
    function az_eventgrid_event_subscription_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_event_subscription_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Fully qualified identifier of the Azure resource whose event subscription needs to be deleted. */
    az_eventgrid_event_subscription_delete_command_builder.prototype.sourceResourceId = function (value) {
        this.setFlag("--source-resource-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_event_subscription_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_event_subscription_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List event subscriptions.
 *
 * Syntax:
 * ```
 * az eventgrid event-subscription list [--location]
 *                                      [--odata-query]
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--source-resource-id]
 *                                      [--subscription]
 *                                      [--topic-type-name]
 * ```
 */
var az_eventgrid_event_subscription_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_event_subscription_list_command_builder, _super);
    function az_eventgrid_event_subscription_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_eventgrid_event_subscription_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_event_subscription_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_event_subscription_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_event_subscription_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Fully qualified identifier of the Azure resource whose event subscription needs to be listed. */
    az_eventgrid_event_subscription_list_command_builder.prototype.sourceResourceId = function (value) {
        this.setFlag("--source-resource-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_event_subscription_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the topic-type whose event subscriptions need to be listed. When this is specified, you must also specify --location. */
    az_eventgrid_event_subscription_list_command_builder.prototype.topicTypeName = function (value) {
        this.setFlag("--topic-type-name", value);
        return this;
    };
    return az_eventgrid_event_subscription_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an event subscription.
 *
 * Syntax:
 * ```
 * az eventgrid event-subscription show --name
 *                                      [--include-full-endpoint-url {false, true}]
 *                                      [--query-examples]
 *                                      [--source-resource-id]
 *                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 */
var az_eventgrid_event_subscription_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_event_subscription_show_command_builder, _super);
    function az_eventgrid_event_subscription_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_event_subscription_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Specify to indicate whether the full endpoint URL should be returned. True if flag present. */
    az_eventgrid_event_subscription_show_command_builder.prototype.includeFullEndpointUrl = function (value) {
        this.setFlag("--include-full-endpoint-url", value.toString());
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_event_subscription_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Fully qualified identifier of the Azure resource whose event subscription needs to be shown. */
    az_eventgrid_event_subscription_show_command_builder.prototype.sourceResourceId = function (value) {
        this.setFlag("--source-resource-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_event_subscription_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_event_subscription_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an event subscription.
 *
 * Syntax:
 * ```
 * az eventgrid event-subscription update --name
 *                                        [--add]
 *                                        [--advanced-filter]
 *                                        [--deadletter-endpoint]
 *                                        [--deadletter-identity {systemassigned}]
 *                                        [--deadletter-identity-endpoint]
 *                                        [--delivery-identity {systemassigned}]
 *                                        [--delivery-identity-endpoint]
 *                                        [--delivery-identity-endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
 *                                        [--endpoint]
 *                                        [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
 *                                        [--force-string]
 *                                        [--included-event-types]
 *                                        [--labels]
 *                                        [--remove]
 *                                        [--set]
 *                                        [--source-resource-id]
 *                                        [--subject-begins-with]
 *                                        [--subject-ends-with]
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 */
var az_eventgrid_event_subscription_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_event_subscription_update_command_builder, _super);
    function az_eventgrid_event_subscription_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_event_subscription_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_eventgrid_event_subscription_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** An advanced filter enables filtering of events based on a specific event property. */
    az_eventgrid_event_subscription_update_command_builder.prototype.advancedFilter = function (value) {
        this.setFlag("--advanced-filter", value);
        return this;
    };
    /** The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription. */
    az_eventgrid_event_subscription_update_command_builder.prototype.deadletterEndpoint = function (value) {
        this.setFlag("--deadletter-endpoint", value);
        return this;
    };
    /** The identity type of the deadletter destination resource. */
    az_eventgrid_event_subscription_update_command_builder.prototype.deadletterIdentity = function (value) {
        this.setFlag("--deadletter-identity", value);
        return this;
    };
    /** The Azure resource ID of an Azure Storage blob container destination with identity where EventGrid should deadletter undeliverable events for this event subscription. */
    az_eventgrid_event_subscription_update_command_builder.prototype.deadletterIdentityEndpoint = function (value) {
        this.setFlag("--deadletter-identity-endpoint", value);
        return this;
    };
    /** The identity type of the delivery destination resource (e.g., storage queue, or eventhub). */
    az_eventgrid_event_subscription_update_command_builder.prototype.deliveryIdentity = function (value) {
        this.setFlag("--delivery-identity", value);
        return this;
    };
    /** Endpoint with identity where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. */
    az_eventgrid_event_subscription_update_command_builder.prototype.deliveryIdentityEndpoint = function (value) {
        this.setFlag("--delivery-identity-endpoint", value);
        return this;
    };
    /** The type of the destination endpoint with resource identity. */
    az_eventgrid_event_subscription_update_command_builder.prototype.deliveryIdentityEndpointType = function (value) {
        this.setFlag("--delivery-identity-endpoint-type", value);
        return this;
    };
    /** Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command. */
    az_eventgrid_event_subscription_update_command_builder.prototype.endpoint = function (value) {
        this.setFlag("--endpoint", value);
        return this;
    };
    /** The type of the destination endpoint. */
    az_eventgrid_event_subscription_update_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_eventgrid_event_subscription_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'. */
    az_eventgrid_event_subscription_update_command_builder.prototype.includedEventTypes = function (value) {
        this.setFlag("--included-event-types", value);
        return this;
    };
    /** A space-separated list of labels to associate with this event subscription. */
    az_eventgrid_event_subscription_update_command_builder.prototype.labels = function (value) {
        this.setFlag("--labels", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_eventgrid_event_subscription_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_eventgrid_event_subscription_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Fully qualified identifier of the Azure resource whose event subscription needs to be updated. */
    az_eventgrid_event_subscription_update_command_builder.prototype.sourceResourceId = function (value) {
        this.setFlag("--source-resource-id", value);
        return this;
    };
    /** An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported. */
    az_eventgrid_event_subscription_update_command_builder.prototype.subjectBeginsWith = function (value) {
        this.setFlag("--subject-begins-with", value);
        return this;
    };
    /** An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported. */
    az_eventgrid_event_subscription_update_command_builder.prototype.subjectEndsWith = function (value) {
        this.setFlag("--subject-ends-with", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_event_subscription_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_event_subscription_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an extension topic.
 *
 * Syntax:
 * ```
 * az eventgrid extension-topic show --scope
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} scope The identifier of the resource to which extension topic is queried. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for Azure resource.
 */
var az_eventgrid_extension_topic_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_extension_topic_show_command_builder, _super);
    function az_eventgrid_extension_topic_show_command_builder(commandPath, resultDataTypeName, scope) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.scope(scope);
        return _this;
    }
    /** The identifier of the resource to which extension topic is queried. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for Azure resource. */
    az_eventgrid_extension_topic_show_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_extension_topic_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_extension_topic_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_extension_topic_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an event channel under a partner namespace.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace event-channel create --desination-topic-name
 *                                                     --destination-resource-group-name
 *                                                     --destination-subscription-id
 *                                                     --name
 *                                                     --partner-namespace-name
 *                                                     --resource-group
 *                                                     --source
 *                                                     [--activation-expiration-date]
 *                                                     [--partner-topic-description]
 *                                                     [--publisher-filter]
 *                                                     [--subscription]
 * ```
 *
 * @param {string} desinationTopicName Name of the partner topic associated with the event channel.
 * @param {string} destinationResourceGroupName Azure Resource Group of the customer creating the event channel. The partner topic associated with the event channel will be created under this resource group.
 * @param {string} destinationSubscriptionId Azure subscription Id of the customer creating the event channel. The partner topic associated with the event channel will be created under this Azure subscription.
 * @param {string} name Name of the event channel.
 * @param {string} partnerNamespaceName Name of the partner namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} source The identifier of the resource that forms the partner source of the events. This represents a unique resource in the partner's resource model.
 */
var az_eventgrid_partner_namespace_event_channel_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_event_channel_create_command_builder, _super);
    function az_eventgrid_partner_namespace_event_channel_create_command_builder(commandPath, resultDataTypeName, desinationTopicName, destinationResourceGroupName, destinationSubscriptionId, name, partnerNamespaceName, resourceGroup, source) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.desinationTopicName(desinationTopicName);
        _this.destinationResourceGroupName(destinationResourceGroupName);
        _this.destinationSubscriptionId(destinationSubscriptionId);
        _this.name(name);
        _this.partnerNamespaceName(partnerNamespaceName);
        _this.resourceGroup(resourceGroup);
        _this.source(source);
        return _this;
    }
    /** Name of the partner topic associated with the event channel. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.desinationTopicName = function (value) {
        this.setFlag("--desination-topic-name", value);
        return this;
    };
    /** Azure Resource Group of the customer creating the event channel. The partner topic associated with the event channel will be created under this resource group. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.destinationResourceGroupName = function (value) {
        this.setFlag("--destination-resource-group-name", value);
        return this;
    };
    /** Azure subscription Id of the customer creating the event channel. The partner topic associated with the event channel will be created under this Azure subscription. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.destinationSubscriptionId = function (value) {
        this.setFlag("--destination-subscription-id", value);
        return this;
    };
    /** Name of the event channel. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the partner namespace. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.partnerNamespaceName = function (value) {
        this.setFlag("--partner-namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The identifier of the resource that forms the partner source of the events. This represents a unique resource in the partner's resource model. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Date or datetime in UTC ISO 8601 format (e.g., '2022-02-17T01:59:59+00:00' or '2022-02-17') after which the event channel and corresponding partner topic would expire and get auto deleted. If this time is not specified, the expiration date is set to seven days by default. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.activationExpirationDate = function (value) {
        this.setFlag("--activation-expiration-date", value);
        return this;
    };
    /** Friendly description of the corresponding partner topic. This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.partnerTopicDescription = function (value) {
        this.setFlag("--partner-topic-description", value);
        return this;
    };
    /** A publisher filter that is used to enable filtering of events based on a specific event property. This set of filters that are specified by the publisher in order to determine which events to be received by the subscriber. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.publisherFilter = function (value) {
        this.setFlag("--publisher-filter", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_event_channel_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_namespace_event_channel_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a partner namespace.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace event-channel delete [--ids]
 *                                                     [--name]
 *                                                     [--partner-namespace-name]
 *                                                     [--resource-group]
 *                                                     [--subscription]
 *                                                     [--yes]
 * ```
 */
var az_eventgrid_partner_namespace_event_channel_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_event_channel_delete_command_builder, _super);
    function az_eventgrid_partner_namespace_event_channel_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_namespace_event_channel_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the event channel. */
    az_eventgrid_partner_namespace_event_channel_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the partner namespace. */
    az_eventgrid_partner_namespace_event_channel_delete_command_builder.prototype.partnerNamespaceName = function (value) {
        this.setFlag("--partner-namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_event_channel_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_event_channel_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_eventgrid_partner_namespace_event_channel_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_eventgrid_partner_namespace_event_channel_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available partner event-channels.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace event-channel list --partner-namespace-name
 *                                                   --resource-group
 *                                                   [--odata-query]
 *                                                   [--query-examples]
 *                                                   [--subscription]
 * ```
 *
 * @param {string} partnerNamespaceName Name of the partner namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_partner_namespace_event_channel_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_event_channel_list_command_builder, _super);
    function az_eventgrid_partner_namespace_event_channel_list_command_builder(commandPath, resultDataTypeName, partnerNamespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.partnerNamespaceName(partnerNamespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the partner namespace. */
    az_eventgrid_partner_namespace_event_channel_list_command_builder.prototype.partnerNamespaceName = function (value) {
        this.setFlag("--partner-namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_event_channel_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_partner_namespace_event_channel_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_namespace_event_channel_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_event_channel_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_namespace_event_channel_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an event channel under a partner namespace.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace event-channel show [--ids]
 *                                                   [--name]
 *                                                   [--partner-namespace-name]
 *                                                   [--query-examples]
 *                                                   [--resource-group]
 *                                                   [--subscription]
 * ```
 */
var az_eventgrid_partner_namespace_event_channel_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_event_channel_show_command_builder, _super);
    function az_eventgrid_partner_namespace_event_channel_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_namespace_event_channel_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the event channel. */
    az_eventgrid_partner_namespace_event_channel_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the partner namespace. */
    az_eventgrid_partner_namespace_event_channel_show_command_builder.prototype.partnerNamespaceName = function (value) {
        this.setFlag("--partner-namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_namespace_event_channel_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_event_channel_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_event_channel_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_namespace_event_channel_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List shared access keys of a partner namespace.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace key list --partner-namespace-name
 *                                         --resource-group
 *                                         [--query-examples]
 *                                         [--subscription]
 * ```
 *
 * @param {string} partnerNamespaceName Name of the partner namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_partner_namespace_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_key_list_command_builder, _super);
    function az_eventgrid_partner_namespace_key_list_command_builder(commandPath, resultDataTypeName, partnerNamespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.partnerNamespaceName(partnerNamespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the partner namespace. */
    az_eventgrid_partner_namespace_key_list_command_builder.prototype.partnerNamespaceName = function (value) {
        this.setFlag("--partner-namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_key_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_namespace_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_namespace_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate a shared access key of a partner namespace.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace key regenerate --key-name
 *                                               --partner-namespace-name
 *                                               --resource-group
 *                                               [--subscription]
 * ```
 *
 * @param {string} keyName Key name to regenerate (key1 or key2).
 * @param {string} partnerNamespaceName Name of the partner namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_partner_namespace_key_regenerate_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_key_regenerate_command_builder, _super);
    function az_eventgrid_partner_namespace_key_regenerate_command_builder(commandPath, resultDataTypeName, keyName, partnerNamespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyName(keyName);
        _this.partnerNamespaceName(partnerNamespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Key name to regenerate (key1 or key2). */
    az_eventgrid_partner_namespace_key_regenerate_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Name of the partner namespace. */
    az_eventgrid_partner_namespace_key_regenerate_command_builder.prototype.partnerNamespaceName = function (value) {
        this.setFlag("--partner-namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_key_regenerate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_key_regenerate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_namespace_key_regenerate_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a partner namespace.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace create --location
 *                                       --name
 *                                       --partner-registration-id
 *                                       --resource-group
 *                                       [--subscription]
 *                                       [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the partner namespace.
 * @param {string} partnerRegistrationId The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_partner_namespace_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_create_command_builder, _super);
    function az_eventgrid_partner_namespace_create_command_builder(commandPath, resultDataTypeName, location, name, partnerRegistrationId, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.partnerRegistrationId(partnerRegistrationId);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_eventgrid_partner_namespace_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the partner namespace. */
    az_eventgrid_partner_namespace_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}. */
    az_eventgrid_partner_namespace_create_command_builder.prototype.partnerRegistrationId = function (value) {
        this.setFlag("--partner-registration-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventgrid_partner_namespace_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventgrid_partner_namespace_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a partner namespace.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace delete [--ids]
 *                                       [--name]
 *                                       [--resource-group]
 *                                       [--subscription]
 *                                       [--yes]
 * ```
 */
var az_eventgrid_partner_namespace_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_delete_command_builder, _super);
    function az_eventgrid_partner_namespace_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_namespace_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the partner namespace. */
    az_eventgrid_partner_namespace_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_eventgrid_partner_namespace_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_eventgrid_partner_namespace_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available partner namespaces.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace list [--odata-query]
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
var az_eventgrid_partner_namespace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_list_command_builder, _super);
    function az_eventgrid_partner_namespace_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_partner_namespace_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_namespace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_namespace_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a partner namespace.
 *
 * Syntax:
 * ```
 * az eventgrid partner namespace show [--ids]
 *                                     [--name]
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
var az_eventgrid_partner_namespace_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_namespace_show_command_builder, _super);
    function az_eventgrid_partner_namespace_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_namespace_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the partner namespace. */
    az_eventgrid_partner_namespace_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_namespace_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_namespace_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_namespace_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_namespace_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new partner registration.
 *
 * Syntax:
 * ```
 * az eventgrid partner registration create --name
 *                                          --partner-name
 *                                          --resource-group
 *                                          --resource-type-name
 *                                          [--authorized-subscription-ids]
 *                                          [--customer-service-extension]
 *                                          [--customer-service-number]
 *                                          [--customer-service-uri]
 *                                          [--description]
 *                                          [--display-name]
 *                                          [--logo-uri]
 *                                          [--long-description]
 *                                          [--setup-uri]
 *                                          [--subscription]
 *                                          [--tags]
 * ```
 *
 * @param {string} name Name of the partner registration.
 * @param {string} partnerName Official name of the partner.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} resourceTypeName Name of the partner topic resource type. This name should be unique among all partner topic types names.
 */
var az_eventgrid_partner_registration_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_registration_create_command_builder, _super);
    function az_eventgrid_partner_registration_create_command_builder(commandPath, resultDataTypeName, name, partnerName, resourceGroup, resourceTypeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.partnerName(partnerName);
        _this.resourceGroup(resourceGroup);
        _this.resourceTypeName(resourceTypeName);
        return _this;
    }
    /** Name of the partner registration. */
    az_eventgrid_partner_registration_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Official name of the partner. */
    az_eventgrid_partner_registration_create_command_builder.prototype.partnerName = function (value) {
        this.setFlag("--partner-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_registration_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the partner topic resource type. This name should be unique among all partner topic types names. */
    az_eventgrid_partner_registration_create_command_builder.prototype.resourceTypeName = function (value) {
        this.setFlag("--resource-type-name", value);
        return this;
    };
    /** A space-separated list of Azure subscription Ids that are authorized to create a partner namespace associated with this partner registration. This is an optional property. Creating partner namespaces is always permitted under the same Azure subscription as the one used for creating the partner registration. */
    az_eventgrid_partner_registration_create_command_builder.prototype.authorizedSubscriptionIds = function (value) {
        this.setFlag("--authorized-subscription-ids", value);
        return this;
    };
    /** The extension of the customer service number of the publisher. Only digits are allowed and number of digits should not exceed 10. */
    az_eventgrid_partner_registration_create_command_builder.prototype.customerServiceExtension = function (value) {
        this.setFlag("--customer-service-extension", value);
        return this;
    };
    /** The customer service number of the publisher. The expected phone format should start with a '+' sign followed by the country code. The remaining digits are then followed. Only digits and spaces are allowed and its length cannot exceed 16 digits including country code. Examples of valid phone numbers are: +1 515 123 4567 and +966 7 5115 2471. Examples of invalid phone numbers are: +1 (515) 123-4567, 1 515 123 4567 and +966 121 5115 24 7 551 1234 43. */
    az_eventgrid_partner_registration_create_command_builder.prototype.customerServiceNumber = function (value) {
        this.setFlag("--customer-service-number", value);
        return this;
    };
    /** The customer service URI of the publisher. */
    az_eventgrid_partner_registration_create_command_builder.prototype.customerServiceUri = function (value) {
        this.setFlag("--customer-service-uri", value);
        return this;
    };
    /** Description of the partner topic type. */
    az_eventgrid_partner_registration_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Display name for the partner topic type. */
    az_eventgrid_partner_registration_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** URI of the partner logo. */
    az_eventgrid_partner_registration_create_command_builder.prototype.logoUri = function (value) {
        this.setFlag("--logo-uri", value);
        return this;
    };
    /** Description of the custom scenarios and integration. Length of this description should not exceed 2048 characters. */
    az_eventgrid_partner_registration_create_command_builder.prototype.longDescription = function (value) {
        this.setFlag("--long-description", value);
        return this;
    };
    /** URI of the partner website that can be used by Azure customers to setup Event Grid integration on an event source. */
    az_eventgrid_partner_registration_create_command_builder.prototype.setupUri = function (value) {
        this.setFlag("--setup-uri", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_registration_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventgrid_partner_registration_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventgrid_partner_registration_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a partner registration.
 *
 * Syntax:
 * ```
 * az eventgrid partner registration delete [--ids]
 *                                          [--name]
 *                                          [--resource-group]
 *                                          [--subscription]
 *                                          [--yes]
 * ```
 */
var az_eventgrid_partner_registration_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_registration_delete_command_builder, _super);
    function az_eventgrid_partner_registration_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_registration_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the partner registration. */
    az_eventgrid_partner_registration_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_registration_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_registration_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_eventgrid_partner_registration_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_eventgrid_partner_registration_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all partner registrations in specific resource group or all under the specified azure subscription.
 *
 * Syntax:
 * ```
 * az eventgrid partner registration list [--odata-query]
 *                                        [--query-examples]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 */
var az_eventgrid_partner_registration_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_registration_list_command_builder, _super);
    function az_eventgrid_partner_registration_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_partner_registration_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_registration_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_registration_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_registration_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_registration_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a partner registration.
 *
 * Syntax:
 * ```
 * az eventgrid partner registration show [--ids]
 *                                        [--name]
 *                                        [--query-examples]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 */
var az_eventgrid_partner_registration_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_registration_show_command_builder, _super);
    function az_eventgrid_partner_registration_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_registration_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the partner registration. */
    az_eventgrid_partner_registration_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_registration_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_registration_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_registration_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_registration_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new event subscription for a partner topic.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic event-subscription create --name
 *                                                      --partner-topic-name
 *                                                      --resource-group
 *                                                      [--advanced-filter]
 *                                                      [--azure-active-directory-application-id-or-uri]
 *                                                      [--azure-active-directory-tenant-id]
 *                                                      [--deadletter-endpoint]
 *                                                      [--endpoint]
 *                                                      [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
 *                                                      [--event-delivery-schema {cloudeventschemav1_0, custominputschema, eventgridschema}]
 *                                                      [--event-ttl]
 *                                                      [--expiration-date]
 *                                                      [--included-event-types]
 *                                                      [--labels]
 *                                                      [--max-delivery-attempts]
 *                                                      [--max-events-per-batch]
 *                                                      [--preferred-batch-size-in-kilobytes]
 *                                                      [--subject-begins-with]
 *                                                      [--subject-case-sensitive {false, true}]
 *                                                      [--subject-ends-with]
 *                                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 * @param {string} partnerTopicName Name of the partner topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_partner_topic_event_subscription_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_event_subscription_create_command_builder, _super);
    function az_eventgrid_partner_topic_event_subscription_create_command_builder(commandPath, resultDataTypeName, name, partnerTopicName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.partnerTopicName(partnerTopicName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the partner topic. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.partnerTopicName = function (value) {
        this.setFlag("--partner-topic-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** An advanced filter enables filtering of events based on a specific event property. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.advancedFilter = function (value) {
        this.setFlag("--advanced-filter", value);
        return this;
    };
    /** The Azure Active Directory Application Id or Uri to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.azureActiveDirectoryApplicationIdOrUri = function (value) {
        this.setFlag("--azure-active-directory-application-id-or-uri", value);
        return this;
    };
    /** The Azure Active Directory Tenant Id to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.azureActiveDirectoryTenantId = function (value) {
        this.setFlag("--azure-active-directory-tenant-id", value);
        return this;
    };
    /** The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.deadletterEndpoint = function (value) {
        this.setFlag("--deadletter-endpoint", value);
        return this;
    };
    /** Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.endpoint = function (value) {
        this.setFlag("--endpoint", value);
        return this;
    };
    /** The type of the destination endpoint. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** The schema in which events should be delivered for this event subscription. By default, events will be delivered in the same schema in which they are published (based on the corresponding topic's input schema). */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.eventDeliverySchema = function (value) {
        this.setFlag("--event-delivery-schema", value);
        return this;
    };
    /** Event time to live (in minutes). Must be a number between 1 and 1440. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.eventTtl = function (value) {
        this.setFlag("--event-ttl", value);
        return this;
    };
    /** Date or datetime (in UTC, e.g. '2018-11-30T11:59:59+00:00' or '2018-11-30') after which the event subscription would expire. By default, there is no expiration for the event subscription. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.expirationDate = function (value) {
        this.setFlag("--expiration-date", value);
        return this;
    };
    /** A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.includedEventTypes = function (value) {
        this.setFlag("--included-event-types", value);
        return this;
    };
    /** A space-separated list of labels to associate with this event subscription. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.labels = function (value) {
        this.setFlag("--labels", value);
        return this;
    };
    /** Maximum number of delivery attempts. Must be a number between 1 and 30. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.maxDeliveryAttempts = function (value) {
        this.setFlag("--max-delivery-attempts", value);
        return this;
    };
    /** Maximum number of events in a batch. Must be a number between 1 and 5000. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.maxEventsPerBatch = function (value) {
        this.setFlag("--max-events-per-batch", value);
        return this;
    };
    /** Preferred batch size in kilobytes. Must be a number between 1 and 1024. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.preferredBatchSizeInKilobytes = function (value) {
        this.setFlag("--preferred-batch-size-in-kilobytes", value);
        return this;
    };
    /** An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.subjectBeginsWith = function (value) {
        this.setFlag("--subject-begins-with", value);
        return this;
    };
    /** Specify to indicate whether the subject fields should be compared in a case sensitive manner. True if flag present. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.subjectCaseSensitive = function (value) {
        this.setFlag("--subject-case-sensitive", value.toString());
        return this;
    };
    /** An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.subjectEndsWith = function (value) {
        this.setFlag("--subject-ends-with", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_event_subscription_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_topic_event_subscription_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an event subscription of a partner topic.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic event-subscription delete --name
 *                                                      --partner-topic-name
 *                                                      --resource-group
 *                                                      [--subscription]
 *                                                      [--yes]
 * ```
 *
 * @param {string} name Name of the event subscription.
 * @param {string} partnerTopicName Name of the partner topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_partner_topic_event_subscription_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_event_subscription_delete_command_builder, _super);
    function az_eventgrid_partner_topic_event_subscription_delete_command_builder(commandPath, resultDataTypeName, name, partnerTopicName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.partnerTopicName(partnerTopicName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_partner_topic_event_subscription_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the partner topic. */
    az_eventgrid_partner_topic_event_subscription_delete_command_builder.prototype.partnerTopicName = function (value) {
        this.setFlag("--partner-topic-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_event_subscription_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_event_subscription_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_eventgrid_partner_topic_event_subscription_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_eventgrid_partner_topic_event_subscription_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List event subscriptions of a specific partner topic.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic event-subscription list --partner-topic-name
 *                                                    --resource-group
 *                                                    [--odata-query]
 *                                                    [--query-examples]
 *                                                    [--subscription]
 * ```
 *
 * @param {string} partnerTopicName Name of the partner topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_partner_topic_event_subscription_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_event_subscription_list_command_builder, _super);
    function az_eventgrid_partner_topic_event_subscription_list_command_builder(commandPath, resultDataTypeName, partnerTopicName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.partnerTopicName(partnerTopicName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the partner topic. */
    az_eventgrid_partner_topic_event_subscription_list_command_builder.prototype.partnerTopicName = function (value) {
        this.setFlag("--partner-topic-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_event_subscription_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_partner_topic_event_subscription_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_topic_event_subscription_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_event_subscription_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_topic_event_subscription_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an event subscription of a partner topic.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic event-subscription show --name
 *                                                    --partner-topic-name
 *                                                    --resource-group
 *                                                    [--include-full-endpoint-url {false, true}]
 *                                                    [--query-examples]
 *                                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 * @param {string} partnerTopicName Name of the partner topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_partner_topic_event_subscription_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_event_subscription_show_command_builder, _super);
    function az_eventgrid_partner_topic_event_subscription_show_command_builder(commandPath, resultDataTypeName, name, partnerTopicName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.partnerTopicName(partnerTopicName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_partner_topic_event_subscription_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the partner topic. */
    az_eventgrid_partner_topic_event_subscription_show_command_builder.prototype.partnerTopicName = function (value) {
        this.setFlag("--partner-topic-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_event_subscription_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify to indicate whether the full endpoint URL should be returned. True if flag present. */
    az_eventgrid_partner_topic_event_subscription_show_command_builder.prototype.includeFullEndpointUrl = function (value) {
        this.setFlag("--include-full-endpoint-url", value.toString());
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_topic_event_subscription_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_event_subscription_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_topic_event_subscription_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an event subscription of a partner topic.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic event-subscription update --name
 *                                                      --partner-topic-name
 *                                                      --resource-group
 *                                                      [--advanced-filter]
 *                                                      [--deadletter-endpoint]
 *                                                      [--endpoint]
 *                                                      [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
 *                                                      [--included-event-types]
 *                                                      [--labels]
 *                                                      [--subject-begins-with]
 *                                                      [--subject-ends-with]
 *                                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 * @param {string} partnerTopicName Name of the partner topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_partner_topic_event_subscription_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_event_subscription_update_command_builder, _super);
    function az_eventgrid_partner_topic_event_subscription_update_command_builder(commandPath, resultDataTypeName, name, partnerTopicName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.partnerTopicName(partnerTopicName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the partner topic. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.partnerTopicName = function (value) {
        this.setFlag("--partner-topic-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** An advanced filter enables filtering of events based on a specific event property. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.advancedFilter = function (value) {
        this.setFlag("--advanced-filter", value);
        return this;
    };
    /** The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.deadletterEndpoint = function (value) {
        this.setFlag("--deadletter-endpoint", value);
        return this;
    };
    /** Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.endpoint = function (value) {
        this.setFlag("--endpoint", value);
        return this;
    };
    /** The type of the destination endpoint. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.includedEventTypes = function (value) {
        this.setFlag("--included-event-types", value);
        return this;
    };
    /** A space-separated list of labels to associate with this event subscription. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.labels = function (value) {
        this.setFlag("--labels", value);
        return this;
    };
    /** An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.subjectBeginsWith = function (value) {
        this.setFlag("--subject-begins-with", value);
        return this;
    };
    /** An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.subjectEndsWith = function (value) {
        this.setFlag("--subject-ends-with", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_event_subscription_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_topic_event_subscription_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Activate a partner topic.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic activate [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
var az_eventgrid_partner_topic_activate_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_activate_command_builder, _super);
    function az_eventgrid_partner_topic_activate_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_topic_activate_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the partner topic. */
    az_eventgrid_partner_topic_activate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_activate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_activate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_topic_activate_command_builder;
}(base_1.CommandBuilder));
/**
 * Deactivate a partner topic.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic deactivate [--ids]
 *                                       [--name]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 */
var az_eventgrid_partner_topic_deactivate_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_deactivate_command_builder, _super);
    function az_eventgrid_partner_topic_deactivate_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_topic_deactivate_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the partner topic. */
    az_eventgrid_partner_topic_deactivate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_deactivate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_deactivate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_topic_deactivate_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a partner topic.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic delete [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--subscription]
 *                                   [--yes]
 * ```
 */
var az_eventgrid_partner_topic_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_delete_command_builder, _super);
    function az_eventgrid_partner_topic_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_topic_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the partner topic. */
    az_eventgrid_partner_topic_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_eventgrid_partner_topic_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_eventgrid_partner_topic_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available partner topics.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic list [--odata-query]
 *                                 [--query-examples]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
var az_eventgrid_partner_topic_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_list_command_builder, _super);
    function az_eventgrid_partner_topic_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_partner_topic_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_topic_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_topic_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a partner topic.
 *
 * Syntax:
 * ```
 * az eventgrid partner topic show [--ids]
 *                                 [--name]
 *                                 [--query-examples]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
var az_eventgrid_partner_topic_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_partner_topic_show_command_builder, _super);
    function az_eventgrid_partner_topic_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_partner_topic_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the partner topic. */
    az_eventgrid_partner_topic_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_partner_topic_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_partner_topic_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_partner_topic_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_partner_topic_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new event subscription for a system topic.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic event-subscription create --name
 *                                                     --resource-group
 *                                                     --system-topic-name
 *                                                     [--advanced-filter]
 *                                                     [--azure-active-directory-application-id-or-uri]
 *                                                     [--azure-active-directory-tenant-id]
 *                                                     [--deadletter-endpoint]
 *                                                     [--endpoint]
 *                                                     [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
 *                                                     [--event-delivery-schema {cloudeventschemav1_0, custominputschema, eventgridschema}]
 *                                                     [--event-ttl]
 *                                                     [--expiration-date]
 *                                                     [--included-event-types]
 *                                                     [--labels]
 *                                                     [--max-delivery-attempts]
 *                                                     [--max-events-per-batch]
 *                                                     [--preferred-batch-size-in-kilobytes]
 *                                                     [--subject-begins-with]
 *                                                     [--subject-case-sensitive {false, true}]
 *                                                     [--subject-ends-with]
 *                                                     [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} systemTopicName Name of the system topic.
 */
var az_eventgrid_system_topic_event_subscription_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_event_subscription_create_command_builder, _super);
    function az_eventgrid_system_topic_event_subscription_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, systemTopicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.systemTopicName(systemTopicName);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the system topic. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.systemTopicName = function (value) {
        this.setFlag("--system-topic-name", value);
        return this;
    };
    /** An advanced filter enables filtering of events based on a specific event property. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.advancedFilter = function (value) {
        this.setFlag("--advanced-filter", value);
        return this;
    };
    /** The Azure Active Directory Application Id or Uri to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.azureActiveDirectoryApplicationIdOrUri = function (value) {
        this.setFlag("--azure-active-directory-application-id-or-uri", value);
        return this;
    };
    /** The Azure Active Directory Tenant Id to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.azureActiveDirectoryTenantId = function (value) {
        this.setFlag("--azure-active-directory-tenant-id", value);
        return this;
    };
    /** The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.deadletterEndpoint = function (value) {
        this.setFlag("--deadletter-endpoint", value);
        return this;
    };
    /** Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.endpoint = function (value) {
        this.setFlag("--endpoint", value);
        return this;
    };
    /** The type of the destination endpoint. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** The schema in which events should be delivered for this event subscription. By default, events will be delivered in the same schema in which they are published (based on the corresponding topic's input schema). */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.eventDeliverySchema = function (value) {
        this.setFlag("--event-delivery-schema", value);
        return this;
    };
    /** Event time to live (in minutes). Must be a number between 1 and 1440. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.eventTtl = function (value) {
        this.setFlag("--event-ttl", value);
        return this;
    };
    /** Date or datetime (in UTC, e.g. '2018-11-30T11:59:59+00:00' or '2018-11-30') after which the event subscription would expire. By default, there is no expiration for the event subscription. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.expirationDate = function (value) {
        this.setFlag("--expiration-date", value);
        return this;
    };
    /** A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.includedEventTypes = function (value) {
        this.setFlag("--included-event-types", value);
        return this;
    };
    /** A space-separated list of labels to associate with this event subscription. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.labels = function (value) {
        this.setFlag("--labels", value);
        return this;
    };
    /** Maximum number of delivery attempts. Must be a number between 1 and 30. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.maxDeliveryAttempts = function (value) {
        this.setFlag("--max-delivery-attempts", value);
        return this;
    };
    /** Maximum number of events in a batch. Must be a number between 1 and 5000. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.maxEventsPerBatch = function (value) {
        this.setFlag("--max-events-per-batch", value);
        return this;
    };
    /** Preferred batch size in kilobytes. Must be a number between 1 and 1024. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.preferredBatchSizeInKilobytes = function (value) {
        this.setFlag("--preferred-batch-size-in-kilobytes", value);
        return this;
    };
    /** An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.subjectBeginsWith = function (value) {
        this.setFlag("--subject-begins-with", value);
        return this;
    };
    /** Specify to indicate whether the subject fields should be compared in a case sensitive manner. True if flag present. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.subjectCaseSensitive = function (value) {
        this.setFlag("--subject-case-sensitive", value.toString());
        return this;
    };
    /** An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.subjectEndsWith = function (value) {
        this.setFlag("--subject-ends-with", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_event_subscription_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_system_topic_event_subscription_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an event subscription of a system topic.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic event-subscription delete --name
 *                                                     --resource-group
 *                                                     --system-topic-name
 *                                                     [--subscription]
 *                                                     [--yes]
 * ```
 *
 * @param {string} name Name of the event subscription.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} systemTopicName Name of the system topic.
 */
var az_eventgrid_system_topic_event_subscription_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_event_subscription_delete_command_builder, _super);
    function az_eventgrid_system_topic_event_subscription_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, systemTopicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.systemTopicName(systemTopicName);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_system_topic_event_subscription_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_event_subscription_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the system topic. */
    az_eventgrid_system_topic_event_subscription_delete_command_builder.prototype.systemTopicName = function (value) {
        this.setFlag("--system-topic-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_event_subscription_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_eventgrid_system_topic_event_subscription_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_eventgrid_system_topic_event_subscription_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List event subscriptions of a specific system topic.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic event-subscription list --resource-group
 *                                                   --system-topic-name
 *                                                   [--odata-query]
 *                                                   [--query-examples]
 *                                                   [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} systemTopicName Name of the system topic.
 */
var az_eventgrid_system_topic_event_subscription_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_event_subscription_list_command_builder, _super);
    function az_eventgrid_system_topic_event_subscription_list_command_builder(commandPath, resultDataTypeName, resourceGroup, systemTopicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.systemTopicName(systemTopicName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_event_subscription_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the system topic. */
    az_eventgrid_system_topic_event_subscription_list_command_builder.prototype.systemTopicName = function (value) {
        this.setFlag("--system-topic-name", value);
        return this;
    };
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_system_topic_event_subscription_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_system_topic_event_subscription_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_event_subscription_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_system_topic_event_subscription_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an event subscription of a system topic.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic event-subscription show --name
 *                                                   --resource-group
 *                                                   --system-topic-name
 *                                                   [--include-full-endpoint-url {false, true}]
 *                                                   [--query-examples]
 *                                                   [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} systemTopicName Name of the system topic.
 */
var az_eventgrid_system_topic_event_subscription_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_event_subscription_show_command_builder, _super);
    function az_eventgrid_system_topic_event_subscription_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, systemTopicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.systemTopicName(systemTopicName);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_system_topic_event_subscription_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_event_subscription_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the system topic. */
    az_eventgrid_system_topic_event_subscription_show_command_builder.prototype.systemTopicName = function (value) {
        this.setFlag("--system-topic-name", value);
        return this;
    };
    /** Specify to indicate whether the full endpoint URL should be returned. True if flag present. */
    az_eventgrid_system_topic_event_subscription_show_command_builder.prototype.includeFullEndpointUrl = function (value) {
        this.setFlag("--include-full-endpoint-url", value.toString());
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_system_topic_event_subscription_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_event_subscription_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_system_topic_event_subscription_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an event subscription of a system topic.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic event-subscription update --name
 *                                                     --resource-group
 *                                                     --system-topic-name
 *                                                     [--advanced-filter]
 *                                                     [--deadletter-endpoint]
 *                                                     [--endpoint]
 *                                                     [--endpoint-type {azurefunction, eventhub, hybridconnection, servicebusqueue, servicebustopic, storagequeue, webhook}]
 *                                                     [--included-event-types]
 *                                                     [--labels]
 *                                                     [--subject-begins-with]
 *                                                     [--subject-ends-with]
 *                                                     [--subscription]
 * ```
 *
 * @param {string} name Name of the event subscription.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} systemTopicName Name of the system topic.
 */
var az_eventgrid_system_topic_event_subscription_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_event_subscription_update_command_builder, _super);
    function az_eventgrid_system_topic_event_subscription_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup, systemTopicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.systemTopicName(systemTopicName);
        return _this;
    }
    /** Name of the event subscription. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the system topic. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.systemTopicName = function (value) {
        this.setFlag("--system-topic-name", value);
        return this;
    };
    /** An advanced filter enables filtering of events based on a specific event property. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.advancedFilter = function (value) {
        this.setFlag("--advanced-filter", value);
        return this;
    };
    /** The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.deadletterEndpoint = function (value) {
        this.setFlag("--deadletter-endpoint", value);
        return this;
    };
    /** Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.endpoint = function (value) {
        this.setFlag("--endpoint", value);
        return this;
    };
    /** The type of the destination endpoint. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.includedEventTypes = function (value) {
        this.setFlag("--included-event-types", value);
        return this;
    };
    /** A space-separated list of labels to associate with this event subscription. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.labels = function (value) {
        this.setFlag("--labels", value);
        return this;
    };
    /** An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.subjectBeginsWith = function (value) {
        this.setFlag("--subject-begins-with", value);
        return this;
    };
    /** An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.subjectEndsWith = function (value) {
        this.setFlag("--subject-ends-with", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_event_subscription_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_system_topic_event_subscription_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a system topic.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic create --location
 *                                  --name
 *                                  --resource-group
 *                                  --source
 *                                  --topic-type
 *                                  [--subscription]
 *                                  [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the system topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} source The ARM Id for the topic, e.g., /subscriptions/{SubId}/resourceGroups/{RgName}/providers/Microsoft.Storage/storageAccounts/{AccountName}.
 * @param {string} topicType Name of the topic type.
 */
var az_eventgrid_system_topic_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_create_command_builder, _super);
    function az_eventgrid_system_topic_create_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup, source, topicType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.source(source);
        _this.topicType(topicType);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_eventgrid_system_topic_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the system topic. */
    az_eventgrid_system_topic_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The ARM Id for the topic, e.g., /subscriptions/{SubId}/resourceGroups/{RgName}/providers/Microsoft.Storage/storageAccounts/{AccountName}. */
    az_eventgrid_system_topic_create_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Name of the topic type. */
    az_eventgrid_system_topic_create_command_builder.prototype.topicType = function (value) {
        this.setFlag("--topic-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventgrid_system_topic_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventgrid_system_topic_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a system topic.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic delete [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 *                                  [--yes]
 * ```
 */
var az_eventgrid_system_topic_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_delete_command_builder, _super);
    function az_eventgrid_system_topic_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_system_topic_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the system topic. */
    az_eventgrid_system_topic_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_eventgrid_system_topic_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_eventgrid_system_topic_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available system topics.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic list [--odata-query]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_eventgrid_system_topic_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_list_command_builder, _super);
    function az_eventgrid_system_topic_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_system_topic_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_system_topic_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_system_topic_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a system topic.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic show [--ids]
 *                                [--name]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_eventgrid_system_topic_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_show_command_builder, _super);
    function az_eventgrid_system_topic_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_system_topic_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the system topic. */
    az_eventgrid_system_topic_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_system_topic_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_system_topic_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a system topic.
 *
 * Syntax:
 * ```
 * az eventgrid system-topic update [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 *                                  [--tags]
 * ```
 */
var az_eventgrid_system_topic_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_system_topic_update_command_builder, _super);
    function az_eventgrid_system_topic_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_system_topic_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the system topic. */
    az_eventgrid_system_topic_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_system_topic_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_system_topic_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventgrid_system_topic_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventgrid_system_topic_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List shared access keys of a topic.
 *
 * Syntax:
 * ```
 * az eventgrid topic key list --name
 *                             --resource-group
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} name Name of the topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_topic_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_key_list_command_builder, _super);
    function az_eventgrid_topic_key_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the topic. */
    az_eventgrid_topic_key_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_topic_key_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_topic_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_topic_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate a shared access key of a topic.
 *
 * Syntax:
 * ```
 * az eventgrid topic key regenerate --key-name
 *                                   --name
 *                                   --resource-group
 *                                   [--subscription]
 * ```
 *
 * @param {string} keyName Key name to regenerate key1 or key2.
 * @param {string} name Name of the topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_topic_key_regenerate_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_key_regenerate_command_builder, _super);
    function az_eventgrid_topic_key_regenerate_command_builder(commandPath, resultDataTypeName, keyName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyName(keyName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Key name to regenerate key1 or key2. */
    az_eventgrid_topic_key_regenerate_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Name of the topic. */
    az_eventgrid_topic_key_regenerate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_topic_key_regenerate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_key_regenerate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_topic_key_regenerate_command_builder;
}(base_1.CommandBuilder));
/**
 * List registered topic types.
 *
 * Syntax:
 * ```
 * az eventgrid topic-type list [--query-examples]
 *                              [--subscription]
 * ```
 */
var az_eventgrid_topic_type_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_type_list_command_builder, _super);
    function az_eventgrid_topic_type_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_topic_type_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_type_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_topic_type_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the event types supported by a topic type.
 *
 * Syntax:
 * ```
 * az eventgrid topic-type list-event-types --name
 *                                          [--subscription]
 * ```
 *
 * @param {string} name Name of the topic type.
 */
var az_eventgrid_topic_type_list_event_types_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_type_list_event_types_command_builder, _super);
    function az_eventgrid_topic_type_list_event_types_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the topic type. */
    az_eventgrid_topic_type_list_event_types_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_type_list_event_types_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_topic_type_list_event_types_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details for a topic type.
 *
 * Syntax:
 * ```
 * az eventgrid topic-type show --name
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the topic type.
 */
var az_eventgrid_topic_type_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_type_show_command_builder, _super);
    function az_eventgrid_topic_type_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the topic type. */
    az_eventgrid_topic_type_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_topic_type_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_type_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_topic_type_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a topic.
 *
 * Syntax:
 * ```
 * az eventgrid topic create --location
 *                           --name
 *                           --resource-group
 *                           [--identity {noidentity, systemassigned}]
 *                           [--inbound-ip-rules]
 *                           [--input-mapping-default-values]
 *                           [--input-mapping-fields]
 *                           [--input-schema {cloudeventschemav1_0, customeventschema, eventgridschema}]
 *                           [--public-network-access {disabled, enabled}]
 *                           [--sku {basic, premium}]
 *                           [--subscription]
 *                           [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the topic.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventgrid_topic_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_create_command_builder, _super);
    function az_eventgrid_topic_create_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_eventgrid_topic_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the topic. */
    az_eventgrid_topic_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_topic_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The identity type of the resource (e.g., topic or domain). */
    az_eventgrid_topic_create_command_builder.prototype.identity = function (value) {
        this.setFlag("--identity", value);
        return this;
    };
    /** List of inbound IP rules. */
    az_eventgrid_topic_create_command_builder.prototype.inboundIpRules = function (value) {
        this.setFlag("--inbound-ip-rules", value);
        return this;
    };
    /** When input-schema is specified as customeventschema, this parameter can be used to specify input mappings based on default values. You can use this parameter when your custom schema does not include a field that corresponds to one of the three fields supported by this parameter. Specify space separated mappings in 'key=value' format. Allowed key names are 'subject', 'eventtype', 'dataversion'. The corresponding value names should specify the default values to be used for the mapping and they will be used only when the published event doesn't have a valid mapping for a particular field. */
    az_eventgrid_topic_create_command_builder.prototype.inputMappingDefaultValues = function (value) {
        this.setFlag("--input-mapping-default-values", value);
        return this;
    };
    /** When input-schema is specified as customeventschema, this parameter is used to specify input mappings based on field names. Specify space separated mappings in 'key=value' format. Allowed key names are 'id', 'topic', 'eventtime', 'subject', 'eventtype', 'dataversion'. The corresponding value names should specify the names of the fields in the custom input schema. If a mapping for either 'id' or 'eventtime' is not provided, Event Grid will auto-generate a default value for these two fields. */
    az_eventgrid_topic_create_command_builder.prototype.inputMappingFields = function (value) {
        this.setFlag("--input-mapping-fields", value);
        return this;
    };
    /** Schema in which incoming events will be published to this topic/domain. If you specify customeventschema as the value for this parameter, you must also provide values for at least one of --input_mapping_default_values / --input_mapping_fields. */
    az_eventgrid_topic_create_command_builder.prototype.inputSchema = function (value) {
        this.setFlag("--input-schema", value);
        return this;
    };
    /** This determines if traffic is allowed over public network. By default it is enabled. You can further restrict to specific IPs by configuring. */
    az_eventgrid_topic_create_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** The Sku name of the resource. */
    az_eventgrid_topic_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventgrid_topic_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventgrid_topic_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a topic.
 *
 * Syntax:
 * ```
 * az eventgrid topic delete [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_eventgrid_topic_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_delete_command_builder, _super);
    function az_eventgrid_topic_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_topic_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the topic. */
    az_eventgrid_topic_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_topic_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_topic_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available topics.
 *
 * Syntax:
 * ```
 * az eventgrid topic list [--odata-query]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_eventgrid_topic_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_list_command_builder, _super);
    function az_eventgrid_topic_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT. */
    az_eventgrid_topic_list_command_builder.prototype.odataQuery = function (value) {
        this.setFlag("--odata-query", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_topic_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_topic_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_topic_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a topic.
 *
 * Syntax:
 * ```
 * az eventgrid topic show [--ids]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_eventgrid_topic_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_show_command_builder, _super);
    function az_eventgrid_topic_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_topic_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the topic. */
    az_eventgrid_topic_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventgrid_topic_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_topic_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventgrid_topic_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a topic.
 *
 * Syntax:
 * ```
 * az eventgrid topic update [--identity {noidentity, systemassigned}]
 *                           [--ids]
 *                           [--inbound-ip-rules]
 *                           [--name]
 *                           [--public-network-access {disabled, enabled}]
 *                           [--resource-group]
 *                           [--sku {basic, premium}]
 *                           [--subscription]
 *                           [--tags]
 * ```
 */
var az_eventgrid_topic_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventgrid_topic_update_command_builder, _super);
    function az_eventgrid_topic_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The identity type of the resource (e.g., topic or domain). */
    az_eventgrid_topic_update_command_builder.prototype.identity = function (value) {
        this.setFlag("--identity", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventgrid_topic_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** List of inbound IP rules specifying IP Address in CIDR notation e.g., 10.0.0.0/8 along with corresponding Action to perform based on the match or no match of the IpMask. */
    az_eventgrid_topic_update_command_builder.prototype.inboundIpRules = function (value) {
        this.setFlag("--inbound-ip-rules", value);
        return this;
    };
    /** Name of the topic. */
    az_eventgrid_topic_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** This determines if traffic is allowed over public network. By default it is enabled. You can further restrict to specific IPs by configuring. */
    az_eventgrid_topic_update_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventgrid_topic_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The Sku name of the resource. */
    az_eventgrid_topic_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventgrid_topic_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventgrid_topic_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventgrid_topic_update_command_builder;
}(base_1.CommandBuilder));
