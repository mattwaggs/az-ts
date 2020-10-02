import { CommandBuilder } from '../base';
import { az_managedapp_definition_create_command_result } from './models/az_managedapp_definition_create_command_result';
import { az_managedapp_definition_delete_command_result } from './models/az_managedapp_definition_delete_command_result';
import { az_managedapp_definition_list_command_result } from './models/az_managedapp_definition_list_command_result';
import { az_managedapp_definition_show_command_result } from './models/az_managedapp_definition_show_command_result';
import { az_managedapp_create_command_result } from './models/az_managedapp_create_command_result';
import { az_managedapp_delete_command_result } from './models/az_managedapp_delete_command_result';
import { az_managedapp_list_command_result } from './models/az_managedapp_list_command_result';
import { az_managedapp_show_command_result } from './models/az_managedapp_show_command_result';
/** Manage Azure Managed Applications. */
export declare class az_managedapp_definition {
    /**
     * Create a managed application definition.
     *
     * Syntax:
     * ```
     * az managedapp definition create --authorizations
     *                                 --description
     *                                 --display-name
     *                                 --lock-level {CanNotDelete, None, ReadOnly}
     *                                 --name
     *                                 --resource-group
     *                                 [--create-ui-definition]
     *                                 [--location]
     *                                 [--main-template]
     *                                 [--package-file-uri]
     *                                 [--subscription]
     *                                 [--tags]
     * ```
     *
     * @param {string} authorizations Space-separated authorization pairs in a format of `<principalId>:<roleDefinitionId>`.
     * @param {string} description The managed application definition description.
     * @param {string} displayName The managed application definition display name.
     * @param {'CanNotDelete' | 'None' | 'ReadOnly'} lockLevel The type of lock restriction.
     * @param {string} name The managed application definition name.
     * @param {string} resourceGroup The resource group of the managed application definition.
     */
    static create(authorizations: string, description: string, displayName: string, lockLevel: 'CanNotDelete' | 'None' | 'ReadOnly', name: string, resourceGroup: string): az_managedapp_definition_create_command_builder;
    /**
     * Delete a managed application definition.
     *
     * Syntax:
     * ```
     * az managedapp definition delete [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    static delete(): az_managedapp_definition_delete_command_builder;
    /**
     * List managed application definitions.
     *
     * Syntax:
     * ```
     * az managedapp definition list --resource-group
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} resourceGroup The resource group of the managed application definition.
     */
    static list(resourceGroup: string): az_managedapp_definition_list_command_builder;
    /**
     * Gets a managed application definition.
     *
     * Syntax:
     * ```
     * az managedapp definition show [--ids]
     *                               [--name]
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    static show(): az_managedapp_definition_show_command_builder;
}
/** Manage template solutions provided and maintained by Independent Software Vendors (ISVs). */
export declare class az_managedapp {
    /**
     * Create a managed application.
     *
     * Syntax:
     * ```
     * az managedapp create --kind
     *                      --managed-rg-id
     *                      --name
     *                      --resource-group
     *                      [--location]
     *                      [--managedapp-definition-id]
     *                      [--parameters]
     *                      [--plan-name]
     *                      [--plan-product]
     *                      [--plan-publisher]
     *                      [--plan-version]
     *                      [--subscription]
     *                      [--tags]
     * ```
     *
     * @param {string} kind The managed application kind. can be marketplace or servicecatalog.
     * @param {string} managedRgId The resource group managed by the managed application.
     * @param {string} name The managed application name.
     * @param {string} resourceGroup The resource group of the managed application.
     */
    static create(kind: string, managedRgId: string, name: string, resourceGroup: string): az_managedapp_create_command_builder;
    /**
     * Delete a managed application.
     *
     * Syntax:
     * ```
     * az managedapp delete [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    static delete(): az_managedapp_delete_command_builder;
    /**
     * List managed applications.
     *
     * Syntax:
     * ```
     * az managedapp list [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    static list(): az_managedapp_list_command_builder;
    /**
     * Gets a managed application.
     *
     * Syntax:
     * ```
     * az managedapp show [--ids]
     *                    [--name]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    static show(): az_managedapp_show_command_builder;
}
/**
 * Create a managed application definition.
 *
 * Syntax:
 * ```
 * az managedapp definition create --authorizations
 *                                 --description
 *                                 --display-name
 *                                 --lock-level {CanNotDelete, None, ReadOnly}
 *                                 --name
 *                                 --resource-group
 *                                 [--create-ui-definition]
 *                                 [--location]
 *                                 [--main-template]
 *                                 [--package-file-uri]
 *                                 [--subscription]
 *                                 [--tags]
 * ```
 *
 * @param {string} authorizations Space-separated authorization pairs in a format of `<principalId>:<roleDefinitionId>`.
 * @param {string} description The managed application definition description.
 * @param {string} displayName The managed application definition display name.
 * @param {'CanNotDelete' | 'None' | 'ReadOnly'} lockLevel The type of lock restriction.
 * @param {string} name The managed application definition name.
 * @param {string} resourceGroup The resource group of the managed application definition.
 */
declare class az_managedapp_definition_create_command_builder extends CommandBuilder<az_managedapp_definition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, authorizations: string, description: string, displayName: string, lockLevel: 'CanNotDelete' | 'None' | 'ReadOnly', name: string, resourceGroup: string);
    /** Space-separated authorization pairs in a format of `<principalId>:<roleDefinitionId>`. */
    authorizations(value: string): az_managedapp_definition_create_command_builder;
    /** The managed application definition description. */
    description(value: string): az_managedapp_definition_create_command_builder;
    /** The managed application definition display name. */
    displayName(value: string): az_managedapp_definition_create_command_builder;
    /** The type of lock restriction. */
    lockLevel(value: 'CanNotDelete' | 'None' | 'ReadOnly'): az_managedapp_definition_create_command_builder;
    /** The managed application definition name. */
    name(value: string): az_managedapp_definition_create_command_builder;
    /** The resource group of the managed application definition. */
    resourceGroup(value: string): az_managedapp_definition_create_command_builder;
    /** The managed application definition create ui definition. */
    createUiDefinition(value: string): az_managedapp_definition_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_managedapp_definition_create_command_builder;
    /** The managed application definition main template. */
    mainTemplate(value: string): az_managedapp_definition_create_command_builder;
    /** The managed application definition package file uri. */
    packageFileUri(value: string): az_managedapp_definition_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedapp_definition_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_managedapp_definition_create_command_builder;
}
/**
 * Delete a managed application definition.
 *
 * Syntax:
 * ```
 * az managedapp definition delete [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
declare class az_managedapp_definition_delete_command_builder extends CommandBuilder<az_managedapp_definition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_managedapp_definition_delete_command_builder;
    /** The name of the managed application definition to delete. */
    name(value: string): az_managedapp_definition_delete_command_builder;
    /** The resource group of the managed application definition. */
    resourceGroup(value: string): az_managedapp_definition_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedapp_definition_delete_command_builder;
}
/**
 * List managed application definitions.
 *
 * Syntax:
 * ```
 * az managedapp definition list --resource-group
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} resourceGroup The resource group of the managed application definition.
 */
declare class az_managedapp_definition_list_command_builder extends CommandBuilder<az_managedapp_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** The resource group of the managed application definition. */
    resourceGroup(value: string): az_managedapp_definition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_managedapp_definition_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedapp_definition_list_command_builder;
}
/**
 * Gets a managed application definition.
 *
 * Syntax:
 * ```
 * az managedapp definition show [--ids]
 *                               [--name]
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
declare class az_managedapp_definition_show_command_builder extends CommandBuilder<az_managedapp_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_managedapp_definition_show_command_builder;
    /** The managed application definition name. */
    name(value: string): az_managedapp_definition_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_managedapp_definition_show_command_builder;
    /** The resource group of the managed application definition. */
    resourceGroup(value: string): az_managedapp_definition_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedapp_definition_show_command_builder;
}
/**
 * Create a managed application.
 *
 * Syntax:
 * ```
 * az managedapp create --kind
 *                      --managed-rg-id
 *                      --name
 *                      --resource-group
 *                      [--location]
 *                      [--managedapp-definition-id]
 *                      [--parameters]
 *                      [--plan-name]
 *                      [--plan-product]
 *                      [--plan-publisher]
 *                      [--plan-version]
 *                      [--subscription]
 *                      [--tags]
 * ```
 *
 * @param {string} kind The managed application kind. can be marketplace or servicecatalog.
 * @param {string} managedRgId The resource group managed by the managed application.
 * @param {string} name The managed application name.
 * @param {string} resourceGroup The resource group of the managed application.
 */
declare class az_managedapp_create_command_builder extends CommandBuilder<az_managedapp_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, kind: string, managedRgId: string, name: string, resourceGroup: string);
    /** The managed application kind. can be marketplace or servicecatalog. */
    kind(value: string): az_managedapp_create_command_builder;
    /** The resource group managed by the managed application. */
    managedRgId(value: string): az_managedapp_create_command_builder;
    /** The managed application name. */
    name(value: string): az_managedapp_create_command_builder;
    /** The resource group of the managed application. */
    resourceGroup(value: string): az_managedapp_create_command_builder;
    /** The managed application location. */
    location(value: string): az_managedapp_create_command_builder;
    /** The full qualified managed application definition id. */
    managedappDefinitionId(value: string): az_managedapp_create_command_builder;
    /** JSON formatted string or a path to a file with such content. */
    parameters(value: string): az_managedapp_create_command_builder;
    /** The managed application package plan name. */
    planName(value: string): az_managedapp_create_command_builder;
    /** The managed application package plan product. */
    planProduct(value: string): az_managedapp_create_command_builder;
    /** The managed application package plan publisher. */
    planPublisher(value: string): az_managedapp_create_command_builder;
    /** The managed application package plan version. */
    planVersion(value: string): az_managedapp_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedapp_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_managedapp_create_command_builder;
}
/**
 * Delete a managed application.
 *
 * Syntax:
 * ```
 * az managedapp delete [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
declare class az_managedapp_delete_command_builder extends CommandBuilder<az_managedapp_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_managedapp_delete_command_builder;
    /** The name of the managed application. */
    name(value: string): az_managedapp_delete_command_builder;
    /** The resource group of the managed application. */
    resourceGroup(value: string): az_managedapp_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedapp_delete_command_builder;
}
/**
 * List managed applications.
 *
 * Syntax:
 * ```
 * az managedapp list [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
declare class az_managedapp_list_command_builder extends CommandBuilder<az_managedapp_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_managedapp_list_command_builder;
    /** The resource group of the managed application. */
    resourceGroup(value: string): az_managedapp_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedapp_list_command_builder;
}
/**
 * Gets a managed application.
 *
 * Syntax:
 * ```
 * az managedapp show [--ids]
 *                    [--name]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
declare class az_managedapp_show_command_builder extends CommandBuilder<az_managedapp_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_managedapp_show_command_builder;
    /** The managed application name. */
    name(value: string): az_managedapp_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_managedapp_show_command_builder;
    /** The resource group of the managed application. */
    resourceGroup(value: string): az_managedapp_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_managedapp_show_command_builder;
}
export {};
