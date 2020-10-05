import { CommandBuilder } from '../base';
import { az_provider_operation_list_command_result } from './models/az_provider_operation_list_command_result';
import { az_provider_operation_show_command_result } from './models/az_provider_operation_show_command_result';
import { az_provider_list_command_result } from './models/az_provider_list_command_result';
import { az_provider_register_command_result } from './models/az_provider_register_command_result';
import { az_provider_show_command_result } from './models/az_provider_show_command_result';
import { az_provider_unregister_command_result } from './models/az_provider_unregister_command_result';
/** Get provider operations metadatas. */
export declare class az_provider_operation {
    /**
     * Get operations from all providers.
     *
     * Syntax:
     * ```
     * az provider operation list [--query-examples]
     *                            [--subscription]
     * ```
     */
    static list(): az_provider_operation_list_command_builder;
    /**
     * Get an individual provider's operations.
     *
     * Syntax:
     * ```
     * az provider operation show --namespace
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static show(namespace: string): az_provider_operation_show_command_builder;
}
/** Manage resource providers. */
export declare class az_provider {
    /**
     * Gets all resource providers for a subscription.
     *
     * Syntax:
     * ```
     * az provider list [--expand]
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     */
    static list(): az_provider_list_command_builder;
    /**
     * Register a provider.
     *
     * Syntax:
     * ```
     * az provider register --namespace
     *                      [--subscription]
     *                      [--wait]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static register(namespace: string): az_provider_register_command_builder;
    /**
     * Gets the specified resource provider.
     *
     * Syntax:
     * ```
     * az provider show --namespace
     *                  [--expand]
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static show(namespace: string): az_provider_show_command_builder;
    /**
     * Unregister a provider.
     *
     * Syntax:
     * ```
     * az provider unregister --namespace
     *                        [--subscription]
     *                        [--wait]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static unregister(namespace: string): az_provider_unregister_command_builder;
}
/**
 * Get operations from all providers.
 *
 * Syntax:
 * ```
 * az provider operation list [--query-examples]
 *                            [--subscription]
 * ```
 */
declare class az_provider_operation_list_command_builder extends CommandBuilder<az_provider_operation_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_provider_operation_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_operation_list_command_builder;
}
/**
 * Get an individual provider's operations.
 *
 * Syntax:
 * ```
 * az provider operation show --namespace
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
declare class az_provider_operation_show_command_builder extends CommandBuilder<az_provider_operation_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespace: string);
    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_provider_operation_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_provider_operation_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_operation_show_command_builder;
}
/**
 * Gets all resource providers for a subscription.
 *
 * Syntax:
 * ```
 * az provider list [--expand]
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 */
declare class az_provider_list_command_builder extends CommandBuilder<az_provider_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
    expand(value: string): az_provider_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_provider_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_list_command_builder;
}
/**
 * Register a provider.
 *
 * Syntax:
 * ```
 * az provider register --namespace
 *                      [--subscription]
 *                      [--wait]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
declare class az_provider_register_command_builder extends CommandBuilder<az_provider_register_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespace: string);
    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_provider_register_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_register_command_builder;
    /** Wait for the registration to finish. */
    wait(value: string): az_provider_register_command_builder;
}
/**
 * Gets the specified resource provider.
 *
 * Syntax:
 * ```
 * az provider show --namespace
 *                  [--expand]
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
declare class az_provider_show_command_builder extends CommandBuilder<az_provider_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespace: string);
    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_provider_show_command_builder;
    /** The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. */
    expand(value: string): az_provider_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_provider_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_show_command_builder;
}
/**
 * Unregister a provider.
 *
 * Syntax:
 * ```
 * az provider unregister --namespace
 *                        [--subscription]
 *                        [--wait]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
declare class az_provider_unregister_command_builder extends CommandBuilder<az_provider_unregister_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespace: string);
    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_provider_unregister_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_unregister_command_builder;
    /** Wait for unregistration to finish. */
    wait(value: string): az_provider_unregister_command_builder;
}
export {};
