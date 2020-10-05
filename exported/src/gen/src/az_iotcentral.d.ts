import { CommandBuilder } from '../base';
import { az_iotcentral_app_create_command_result } from './models/az_iotcentral_app_create_command_result';
import { az_iotcentral_app_delete_command_result } from './models/az_iotcentral_app_delete_command_result';
import { az_iotcentral_app_list_command_result } from './models/az_iotcentral_app_list_command_result';
import { az_iotcentral_app_show_command_result } from './models/az_iotcentral_app_show_command_result';
import { az_iotcentral_app_update_command_result } from './models/az_iotcentral_app_update_command_result';
/** Manage IoT Central applications. */
export declare class az_iotcentral_app {
    /**
     * Create an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app create --name
     *                          --resource-group
     *                          --subdomain
     *                          [--display-name]
     *                          [--location]
     *                          [--sku {F1, S1, ST0, ST1, ST2}]
     *                          [--subscription]
     *                          [--template]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subdomain Subdomain for the IoT Central URL. Each application must have a unique subdomain.
     */
    static create(name: string, resourceGroup: string, subdomain: string): az_iotcentral_app_create_command_builder;
    /**
     * Delete an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app delete --name
     *                          --resource-group
     *                          [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_iotcentral_app_delete_command_builder;
    /**
     * List IoT Central applications.
     *
     * Syntax:
     * ```
     * az iotcentral app list [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static list(): az_iotcentral_app_list_command_builder;
    /**
     * Get the details of an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app show --name
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     */
    static show(name: string): az_iotcentral_app_show_command_builder;
    /**
     * Update metadata for an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app update --name
     *                          --resource-group
     *                          [--add]
     *                          [--force-string]
     *                          [--remove]
     *                          [--set]
     *                          [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_iotcentral_app_update_command_builder;
}
/** Manage IoT Central assets. */
export declare class az_iotcentral {
}
/**
 * Create an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app create --name
 *                          --resource-group
 *                          --subdomain
 *                          [--display-name]
 *                          [--location]
 *                          [--sku {F1, S1, ST0, ST1, ST2}]
 *                          [--subscription]
 *                          [--template]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subdomain Subdomain for the IoT Central URL. Each application must have a unique subdomain.
 */
declare class az_iotcentral_app_create_command_builder extends CommandBuilder<az_iotcentral_app_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, subdomain: string);
    /** IoT Central application name. */
    name(value: string): az_iotcentral_app_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_create_command_builder;
    /** Subdomain for the IoT Central URL. Each application must have a unique subdomain. */
    subdomain(value: string): az_iotcentral_app_create_command_builder;
    /** Custom display name for the IoT Central application. Default is resource name. */
    displayName(value: string): az_iotcentral_app_create_command_builder;
    /** Location of your IoT Central application. Default is the location of target resource group. */
    location(value: string): az_iotcentral_app_create_command_builder;
    /** Pricing tier for IoT Central applications. Default value is ST2. */
    sku(value: 'F1' | 'S1' | 'ST0' | 'ST1' | 'ST2'): az_iotcentral_app_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_create_command_builder;
    /** IoT Central application template name. Default is a custom application. */
    template(value: string): az_iotcentral_app_create_command_builder;
}
/**
 * Delete an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app delete --name
 *                          --resource-group
 *                          [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_iotcentral_app_delete_command_builder extends CommandBuilder<az_iotcentral_app_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** IoT Central application name. */
    name(value: string): az_iotcentral_app_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_delete_command_builder;
}
/**
 * List IoT Central applications.
 *
 * Syntax:
 * ```
 * az iotcentral app list [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
declare class az_iotcentral_app_list_command_builder extends CommandBuilder<az_iotcentral_app_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iotcentral_app_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_list_command_builder;
}
/**
 * Get the details of an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app show --name
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 */
declare class az_iotcentral_app_show_command_builder extends CommandBuilder<az_iotcentral_app_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** IoT Central application name. */
    name(value: string): az_iotcentral_app_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iotcentral_app_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_show_command_builder;
}
/**
 * Update metadata for an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app update --name
 *                          --resource-group
 *                          [--add]
 *                          [--force-string]
 *                          [--remove]
 *                          [--set]
 *                          [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_iotcentral_app_update_command_builder extends CommandBuilder<az_iotcentral_app_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** IoT Central application name. */
    name(value: string): az_iotcentral_app_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_iotcentral_app_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_iotcentral_app_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_iotcentral_app_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_iotcentral_app_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_update_command_builder;
}
export {};
