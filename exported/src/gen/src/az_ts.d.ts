import { CommandBuilder } from '../base';
import { az_ts_create_command_result } from './models/az_ts_create_command_result';
import { az_ts_delete_command_result } from './models/az_ts_delete_command_result';
import { az_ts_export_command_result } from './models/az_ts_export_command_result';
import { az_ts_list_command_result } from './models/az_ts_list_command_result';
import { az_ts_show_command_result } from './models/az_ts_show_command_result';
import { az_ts_update_command_result } from './models/az_ts_update_command_result';
/** Manage template specs at subscription or resource group scope. */
export declare class az_ts {
    /**
     * Create a template spec and or template spec version.
     *
     * Syntax:
     * ```
     * az ts create --name
     *              --resource-group
     *              [--description]
     *              [--display-name]
     *              [--location]
     *              [--subscription]
     *              [--template-file]
     *              [--version]
     *              [--version-description]
     *              [--yes]
     * ```
     *
     * @param {string} name The name of the template spec.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_ts_create_command_builder;
    /**
     * Delete a specified template spec or template spec version by name or resource ID..
     *
     * Syntax:
     * ```
     * az ts delete [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--template-spec]
     *              [--version]
     *              [--yes]
     * ```
     */
    static delete(): az_ts_delete_command_builder;
    /**
     * Export the specified template spec and artifacts (if any) to the specified output folder.
     *
     * Syntax:
     * ```
     * az ts export --output-folder
     *              [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--template-spec]
     *              [--version]
     * ```
     *
     * @param {string} outputFolder Existing folder to output export(s).
     */
    static export(outputFolder: string): az_ts_export_command_builder;
    /**
     * List template specs or template spec versions.
     *
     * Syntax:
     * ```
     * az ts list [--name]
     *            [--query-examples]
     *            [--resource-group]
     *            [--subscription]
     * ```
     */
    static list(): az_ts_list_command_builder;
    /**
     * Get the specified template spec or template spec version.
     *
     * Syntax:
     * ```
     * az ts show [--name]
     *            [--query-examples]
     *            [--resource-group]
     *            [--subscription]
     *            [--template-spec]
     *            [--version]
     * ```
     */
    static show(): az_ts_show_command_builder;
    /**
     * Update a template spec version.
     *
     * Syntax:
     * ```
     * az ts update [--description]
     *              [--display-name]
     *              [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--template-file]
     *              [--template-spec]
     *              [--version]
     *              [--version-description]
     *              [--yes]
     * ```
     */
    static update(): az_ts_update_command_builder;
}
/**
 * Create a template spec and or template spec version.
 *
 * Syntax:
 * ```
 * az ts create --name
 *              --resource-group
 *              [--description]
 *              [--display-name]
 *              [--location]
 *              [--subscription]
 *              [--template-file]
 *              [--version]
 *              [--version-description]
 *              [--yes]
 * ```
 *
 * @param {string} name The name of the template spec.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_ts_create_command_builder extends CommandBuilder<az_ts_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the template spec. */
    name(value: string): az_ts_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_create_command_builder;
    /** The description of the parent template spec. */
    description(value: string): az_ts_create_command_builder;
    /** The display name of the template spec. */
    displayName(value: string): az_ts_create_command_builder;
    /** The location to store the template-spec and template-spec version(s). Cannot be changed after creation. */
    location(value: string): az_ts_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_create_command_builder;
    /** A template file path in the file system. */
    templateFile(value: string): az_ts_create_command_builder;
    /** The template spec version. */
    version(value: string): az_ts_create_command_builder;
    /** The description of the template spec version. */
    versionDescription(value: string): az_ts_create_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_ts_create_command_builder;
}
/**
 * Delete a specified template spec or template spec version by name or resource ID..
 *
 * Syntax:
 * ```
 * az ts delete [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--template-spec]
 *              [--version]
 *              [--yes]
 * ```
 */
declare class az_ts_delete_command_builder extends CommandBuilder<az_ts_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The name of the template spec. */
    name(value: string): az_ts_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_delete_command_builder;
    /** The template spec resource id. */
    templateSpec(value: string): az_ts_delete_command_builder;
    /** The template spec version. */
    version(value: string): az_ts_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_ts_delete_command_builder;
}
/**
 * Export the specified template spec and artifacts (if any) to the specified output folder.
 *
 * Syntax:
 * ```
 * az ts export --output-folder
 *              [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--template-spec]
 *              [--version]
 * ```
 *
 * @param {string} outputFolder Existing folder to output export(s).
 */
declare class az_ts_export_command_builder extends CommandBuilder<az_ts_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, outputFolder: string);
    /** Existing folder to output export(s). */
    outputFolder(value: string): az_ts_export_command_builder;
    /** The name of the template spec. */
    name(value: string): az_ts_export_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_export_command_builder;
    /** The template spec resource id. */
    templateSpec(value: string): az_ts_export_command_builder;
    /** The template spec version. */
    version(value: string): az_ts_export_command_builder;
}
/**
 * List template specs or template spec versions.
 *
 * Syntax:
 * ```
 * az ts list [--name]
 *            [--query-examples]
 *            [--resource-group]
 *            [--subscription]
 * ```
 */
declare class az_ts_list_command_builder extends CommandBuilder<az_ts_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The name of the template spec. */
    name(value: string): az_ts_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ts_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_list_command_builder;
}
/**
 * Get the specified template spec or template spec version.
 *
 * Syntax:
 * ```
 * az ts show [--name]
 *            [--query-examples]
 *            [--resource-group]
 *            [--subscription]
 *            [--template-spec]
 *            [--version]
 * ```
 */
declare class az_ts_show_command_builder extends CommandBuilder<az_ts_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The name of the template spec. */
    name(value: string): az_ts_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ts_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_show_command_builder;
    /** The template spec resource id. */
    templateSpec(value: string): az_ts_show_command_builder;
    /** The template spec version. */
    version(value: string): az_ts_show_command_builder;
}
/**
 * Update a template spec version.
 *
 * Syntax:
 * ```
 * az ts update [--description]
 *              [--display-name]
 *              [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--template-file]
 *              [--template-spec]
 *              [--version]
 *              [--version-description]
 *              [--yes]
 * ```
 */
declare class az_ts_update_command_builder extends CommandBuilder<az_ts_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The description of the parent template spec. */
    description(value: string): az_ts_update_command_builder;
    /** The display name of the template spec. */
    displayName(value: string): az_ts_update_command_builder;
    /** The name of the template spec. */
    name(value: string): az_ts_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_update_command_builder;
    /** A template file path in the file system. */
    templateFile(value: string): az_ts_update_command_builder;
    /** The template spec resource id. */
    templateSpec(value: string): az_ts_update_command_builder;
    /** The template spec version. */
    version(value: string): az_ts_update_command_builder;
    /** The description of the template spec version. */
    versionDescription(value: string): az_ts_update_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_ts_update_command_builder;
}
export {};
