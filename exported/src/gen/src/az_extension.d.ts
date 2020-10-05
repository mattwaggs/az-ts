import { CommandBuilder } from '../base';
import { az_extension_add_command_result } from './models/az_extension_add_command_result';
import { az_extension_list_command_result } from './models/az_extension_list_command_result';
import { az_extension_list_available_command_result } from './models/az_extension_list_available_command_result';
import { az_extension_list_versions_command_result } from './models/az_extension_list_versions_command_result';
import { az_extension_remove_command_result } from './models/az_extension_remove_command_result';
import { az_extension_show_command_result } from './models/az_extension_show_command_result';
import { az_extension_update_command_result } from './models/az_extension_update_command_result';
/** Manage and update CLI extensions. */
export declare class az_extension {
    /**
     * Add an extension.
     *
     * Syntax:
     * ```
     * az extension add [--name]
     *                  [--pip-extra-index-urls]
     *                  [--pip-proxy]
     *                  [--source]
     *                  [--system]
     *                  [--upgrade]
     *                  [--version]
     *                  [--yes]
     * ```
     */
    static add(): az_extension_add_command_builder;
    /**
     * List the installed extensions.
     *
     * Syntax:
     * ```
     * az extension list [--query-examples]
     * ```
     */
    static list(): az_extension_list_command_builder;
    /**
     * List publicly available extensions.
     *
     * Syntax:
     * ```
     * az extension list-available [--show-details]
     * ```
     */
    static list_available(): az_extension_list_available_command_builder;
    /**
     * List available versions for an extension.
     *
     * Syntax:
     * ```
     * az extension list-versions --name
     * ```
     *
     * @param {string} name Name of extension.
     */
    static list_versions(name: string): az_extension_list_versions_command_builder;
    /**
     * Remove an extension.
     *
     * Syntax:
     * ```
     * az extension remove --name
     * ```
     *
     * @param {string} name Name of extension.
     */
    static remove(name: string): az_extension_remove_command_builder;
    /**
     * Show an extension.
     *
     * Syntax:
     * ```
     * az extension show --name
     *                   [--query-examples]
     * ```
     *
     * @param {string} name Name of extension.
     */
    static show(name: string): az_extension_show_command_builder;
    /**
     * Update an extension.
     *
     * Syntax:
     * ```
     * az extension update --name
     *                     [--pip-extra-index-urls]
     *                     [--pip-proxy]
     * ```
     *
     * @param {string} name Name of extension.
     */
    static update(name: string): az_extension_update_command_builder;
}
/**
 * Add an extension.
 *
 * Syntax:
 * ```
 * az extension add [--name]
 *                  [--pip-extra-index-urls]
 *                  [--pip-proxy]
 *                  [--source]
 *                  [--system]
 *                  [--upgrade]
 *                  [--version]
 *                  [--yes]
 * ```
 */
declare class az_extension_add_command_builder extends CommandBuilder<az_extension_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of extension. */
    name(value: string): az_extension_add_command_builder;
    /** Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format. */
    pipExtraIndexUrls(value: string): az_extension_add_command_builder;
    /** Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port. */
    pipProxy(value: string): az_extension_add_command_builder;
    /** Filepath or URL to an extension. */
    source(value: string): az_extension_add_command_builder;
    /** Use a system directory for the extension. */
    system(value: string): az_extension_add_command_builder;
    /** Update the extension if already installed, otherwise just install the extension. */
    upgrade(value: string): az_extension_add_command_builder;
    /** The specific version of an extension. */
    version(value: string): az_extension_add_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_extension_add_command_builder;
}
/**
 * List the installed extensions.
 *
 * Syntax:
 * ```
 * az extension list [--query-examples]
 * ```
 */
declare class az_extension_list_command_builder extends CommandBuilder<az_extension_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_extension_list_command_builder;
}
/**
 * List publicly available extensions.
 *
 * Syntax:
 * ```
 * az extension list-available [--show-details]
 * ```
 */
declare class az_extension_list_available_command_builder extends CommandBuilder<az_extension_list_available_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Show the raw data from the extension index. */
    showDetails(value: string): az_extension_list_available_command_builder;
}
/**
 * List available versions for an extension.
 *
 * Syntax:
 * ```
 * az extension list-versions --name
 * ```
 *
 * @param {string} name Name of extension.
 */
declare class az_extension_list_versions_command_builder extends CommandBuilder<az_extension_list_versions_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of extension. */
    name(value: string): az_extension_list_versions_command_builder;
}
/**
 * Remove an extension.
 *
 * Syntax:
 * ```
 * az extension remove --name
 * ```
 *
 * @param {string} name Name of extension.
 */
declare class az_extension_remove_command_builder extends CommandBuilder<az_extension_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of extension. */
    name(value: string): az_extension_remove_command_builder;
}
/**
 * Show an extension.
 *
 * Syntax:
 * ```
 * az extension show --name
 *                   [--query-examples]
 * ```
 *
 * @param {string} name Name of extension.
 */
declare class az_extension_show_command_builder extends CommandBuilder<az_extension_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of extension. */
    name(value: string): az_extension_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_extension_show_command_builder;
}
/**
 * Update an extension.
 *
 * Syntax:
 * ```
 * az extension update --name
 *                     [--pip-extra-index-urls]
 *                     [--pip-proxy]
 * ```
 *
 * @param {string} name Name of extension.
 */
declare class az_extension_update_command_builder extends CommandBuilder<az_extension_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of extension. */
    name(value: string): az_extension_update_command_builder;
    /** Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format. */
    pipExtraIndexUrls(value: string): az_extension_update_command_builder;
    /** Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port. */
    pipProxy(value: string): az_extension_update_command_builder;
}
export {};
