import { CommandBuilder } from '../base';
import { az_feature_list_command_result } from './models/az_feature_list_command_result';
import { az_feature_register_command_result } from './models/az_feature_register_command_result';
import { az_feature_show_command_result } from './models/az_feature_show_command_result';
import { az_feature_unregister_command_result } from './models/az_feature_unregister_command_result';
/** Manage resource provider features. */
export declare class az_feature {
    /**
     * List preview features.
     *
     * Syntax:
     * ```
     * az feature list [--namespace]
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     */
    static list(): az_feature_list_command_builder;
    /**
     * Register a preview feature.
     *
     * Syntax:
     * ```
     * az feature register --name
     *                     --namespace
     *                     [--subscription]
     * ```
     *
     * @param {string} name The feature name.
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static register(name: string, namespace: string): az_feature_register_command_builder;
    /**
     * Gets the preview feature with the specified name.
     *
     * Syntax:
     * ```
     * az feature show --name
     *                 --namespace
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} name The feature name.
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static show(name: string, namespace: string): az_feature_show_command_builder;
    /**
     * Unregister a preview feature.
     *
     * Syntax:
     * ```
     * az feature unregister --name
     *                       --namespace
     *                       [--subscription]
     * ```
     *
     * @param {string} name The feature name.
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static unregister(name: string, namespace: string): az_feature_unregister_command_builder;
}
/**
 * List preview features.
 *
 * Syntax:
 * ```
 * az feature list [--namespace]
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 */
declare class az_feature_list_command_builder extends CommandBuilder<az_feature_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_feature_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_feature_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_feature_list_command_builder;
}
/**
 * Register a preview feature.
 *
 * Syntax:
 * ```
 * az feature register --name
 *                     --namespace
 *                     [--subscription]
 * ```
 *
 * @param {string} name The feature name.
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
declare class az_feature_register_command_builder extends CommandBuilder<az_feature_register_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, namespace: string);
    /** The feature name. */
    name(value: string): az_feature_register_command_builder;
    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_feature_register_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_feature_register_command_builder;
}
/**
 * Gets the preview feature with the specified name.
 *
 * Syntax:
 * ```
 * az feature show --name
 *                 --namespace
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} name The feature name.
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
declare class az_feature_show_command_builder extends CommandBuilder<az_feature_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, namespace: string);
    /** The feature name. */
    name(value: string): az_feature_show_command_builder;
    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_feature_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_feature_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_feature_show_command_builder;
}
/**
 * Unregister a preview feature.
 *
 * Syntax:
 * ```
 * az feature unregister --name
 *                       --namespace
 *                       [--subscription]
 * ```
 *
 * @param {string} name The feature name.
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
declare class az_feature_unregister_command_builder extends CommandBuilder<az_feature_unregister_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, namespace: string);
    /** The feature name. */
    name(value: string): az_feature_unregister_command_builder;
    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_feature_unregister_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_feature_unregister_command_builder;
}
export {};
