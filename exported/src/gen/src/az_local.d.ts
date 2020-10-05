import { CommandBuilder } from '../base';
import { az_local_context_delete_command_result } from './models/az_local_context_delete_command_result';
import { az_local_context_off_command_result } from './models/az_local_context_off_command_result';
import { az_local_context_on_command_result } from './models/az_local_context_on_command_result';
import { az_local_context_show_command_result } from './models/az_local_context_show_command_result';
/** Manage Local Context. */
export declare class az_local_context {
    /**
     * Delete local context data.
     *
     * Syntax:
     * ```
     * az local-context delete [--all]
     *                         [--name]
     *                         [--purge]
     *                         [--recursive]
     *                         [--subscription]
     *                         [--yes]
     * ```
     */
    static delete(): az_local_context_delete_command_builder;
    /**
     * Turn off local context.
     *
     * Syntax:
     * ```
     * az local-context off [--subscription]
     * ```
     */
    static off(): az_local_context_off_command_builder;
    /**
     * Turn on local context.
     *
     * Syntax:
     * ```
     * az local-context on [--subscription]
     * ```
     */
    static on(): az_local_context_on_command_builder;
    /**
     * Show local context data.
     *
     * Syntax:
     * ```
     * az local-context show [--name]
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     */
    static show(): az_local_context_show_command_builder;
}
/**
 * Delete local context data.
 *
 * Syntax:
 * ```
 * az local-context delete [--all]
 *                         [--name]
 *                         [--purge]
 *                         [--recursive]
 *                         [--subscription]
 *                         [--yes]
 * ```
 */
declare class az_local_context_delete_command_builder extends CommandBuilder<az_local_context_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Clear all local context data. Either --name or --all can be specified. */
    all(value: string): az_local_context_delete_command_builder;
    /** Space-separated list of local context parameter names. Either --name or --all can be specified. */
    name(value: string): az_local_context_delete_command_builder;
    /** Delete local context file from working directory. Only available when --all is specified. */
    purge(value: string): az_local_context_delete_command_builder;
    /** Indicate this is recursive delete of local context. Only available when --all is specified. */
    recursive(value: string): az_local_context_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_local_context_delete_command_builder;
    /** Do not prompt for confirmation. Only available when --all is specified. */
    yes(value: string): az_local_context_delete_command_builder;
}
/**
 * Turn off local context.
 *
 * Syntax:
 * ```
 * az local-context off [--subscription]
 * ```
 */
declare class az_local_context_off_command_builder extends CommandBuilder<az_local_context_off_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_local_context_off_command_builder;
}
/**
 * Turn on local context.
 *
 * Syntax:
 * ```
 * az local-context on [--subscription]
 * ```
 */
declare class az_local_context_on_command_builder extends CommandBuilder<az_local_context_on_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_local_context_on_command_builder;
}
/**
 * Show local context data.
 *
 * Syntax:
 * ```
 * az local-context show [--name]
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 */
declare class az_local_context_show_command_builder extends CommandBuilder<az_local_context_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Space-separated list of local context parameter names. */
    name(value: string): az_local_context_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_local_context_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_local_context_show_command_builder;
}
export {};
