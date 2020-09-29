import { CommandBuilder } from '../base';
import { az_signalr_cors_add_command_result } from './models/az_signalr_cors_add_command_result'
import { az_signalr_cors_list_command_result } from './models/az_signalr_cors_list_command_result'
import { az_signalr_cors_remove_command_result } from './models/az_signalr_cors_remove_command_result'
import { az_signalr_key_list_command_result } from './models/az_signalr_key_list_command_result'
import { az_signalr_key_renew_command_result } from './models/az_signalr_key_renew_command_result'
import { az_signalr_network_rule_list_command_result } from './models/az_signalr_network_rule_list_command_result'
import { az_signalr_network_rule_update_command_result } from './models/az_signalr_network_rule_update_command_result'
import { az_signalr_upstream_clear_command_result } from './models/az_signalr_upstream_clear_command_result'
import { az_signalr_upstream_list_command_result } from './models/az_signalr_upstream_list_command_result'
import { az_signalr_upstream_update_command_result } from './models/az_signalr_upstream_update_command_result'
import { az_signalr_create_command_result } from './models/az_signalr_create_command_result'
import { az_signalr_delete_command_result } from './models/az_signalr_delete_command_result'
import { az_signalr_list_command_result } from './models/az_signalr_list_command_result'
import { az_signalr_restart_command_result } from './models/az_signalr_restart_command_result'
import { az_signalr_show_command_result } from './models/az_signalr_show_command_result'
import { az_signalr_update_command_result } from './models/az_signalr_update_command_result'

/** Manage CORS for Azure SignalR Service. */
export class az_signalr_cors {
    /**
     * Add allowed origins to a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr cors add --allowed-origins
     *                     --name
     *                     --resource-group
     *                     [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static add(allowedOrigins: string, name: string, resourceGroup: string): az_signalr_cors_add_command_builder {
        return new az_signalr_cors_add_command_builder("az signalr cors add", allowedOrigins, name, resourceGroup);
    }

    /**
     * List allowed origins of a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr cors list --name
     *                      --resource-group
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_signalr_cors_list_command_builder {
        return new az_signalr_cors_list_command_builder("az signalr cors list", name, resourceGroup);
    }

    /**
     * Remove allowed origins from a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr cors remove --allowed-origins
     *                        --name
     *                        --resource-group
     *                        [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static remove(allowedOrigins: string, name: string, resourceGroup: string): az_signalr_cors_remove_command_builder {
        return new az_signalr_cors_remove_command_builder("az signalr cors remove", allowedOrigins, name, resourceGroup);
    }
}

/** Manage keys for Azure SignalR Service. */
export class az_signalr_key {
    /**
     * List the access keys for a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr key list --name
     *                     --resource-group
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_signalr_key_list_command_builder {
        return new az_signalr_key_list_command_builder("az signalr key list", name, resourceGroup);
    }

    /**
     * Regenerate the access key for a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr key renew --key-type {primary, secondary}
     *                      --name
     *                      --resource-group
     *                      [--subscription]
     * ```
     *
     * @param {'primary' | 'secondary'} keyType The name of access key to regenerate.
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static renew(keyType: 'primary' | 'secondary', name: string, resourceGroup: string): az_signalr_key_renew_command_builder {
        return new az_signalr_key_renew_command_builder("az signalr key renew", keyType, name, resourceGroup);
    }
}

/** Manage network rules. */
export class az_signalr_network_rule {
    /**
     * Get the Network access control of SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr network-rule list --name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_signalr_network_rule_list_command_builder {
        return new az_signalr_network_rule_list_command_builder("az signalr network-rule list", name, resourceGroup);
    }

    /**
     * Update the Network access control of SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr network-rule update --name
     *                                --resource-group
     *                                [--allow]
     *                                [--connection-name]
     *                                [--deny]
     *                                [--public-network {false, true}]
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_signalr_network_rule_update_command_builder {
        return new az_signalr_network_rule_update_command_builder("az signalr network-rule update", name, resourceGroup);
    }
}

/** Manage upstream settings. */
export class az_signalr_upstream {
    /**
     * List upstream settings of an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr upstream clear --name
     *                           --resource-group
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static clear(name: string, resourceGroup: string): az_signalr_upstream_clear_command_builder {
        return new az_signalr_upstream_clear_command_builder("az signalr upstream clear", name, resourceGroup);
    }

    /**
     * List upstream settings of an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr upstream list --name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_signalr_upstream_list_command_builder {
        return new az_signalr_upstream_list_command_builder("az signalr upstream list", name, resourceGroup);
    }

    /**
     * Update order sensitive upstream settings for an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr upstream update --name
     *                            --resource-group
     *                            --template
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} template Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern".
     */
    static update(name: string, resourceGroup: string, template: string): az_signalr_upstream_update_command_builder {
        return new az_signalr_upstream_update_command_builder("az signalr upstream update", name, resourceGroup, template);
    }
}

/** Manage Azure SignalR Service. */
export class az_signalr {
    /**
     * Creates a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr create --name
     *                   --resource-group
     *                   --sku
     *                   [--allowed-origins]
     *                   [--default-action {Allow, Deny}]
     *                   [--location]
     *                   [--service-mode {Classic, Default, Serverless}]
     *                   [--subscription]
     *                   [--tags]
     *                   [--unit-count]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sku The sku name of the signalr service. E.g. Standard_S1.
     */
    static create(name: string, resourceGroup: string, sku: string): az_signalr_create_command_builder {
        return new az_signalr_create_command_builder("az signalr create", name, resourceGroup, sku);
    }

    /**
     * Deletes a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr delete --name
     *                   --resource-group
     *                   [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_signalr_delete_command_builder {
        return new az_signalr_delete_command_builder("az signalr delete", name, resourceGroup);
    }

    /**
     * Lists all the SignalR Service under the current subscription.
     *
     * Syntax:
     * ```
     * az signalr list [--query-examples]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    static list(): az_signalr_list_command_builder {
        return new az_signalr_list_command_builder("az signalr list");
    }

    /**
     * Restart an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr restart --name
     *                    --resource-group
     *                    [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static restart(name: string, resourceGroup: string): az_signalr_restart_command_builder {
        return new az_signalr_restart_command_builder("az signalr restart", name, resourceGroup);
    }

    /**
     * Get the details of a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr show --name
     *                 --resource-group
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_signalr_show_command_builder {
        return new az_signalr_show_command_builder("az signalr show", name, resourceGroup);
    }

    /**
     * Update an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr update --name
     *                   --resource-group
     *                   [--add]
     *                   [--allowed-origins]
     *                   [--default-action {Allow, Deny}]
     *                   [--force-string]
     *                   [--remove]
     *                   [--service-mode {Classic, Default, Serverless}]
     *                   [--set]
     *                   [--sku]
     *                   [--subscription]
     *                   [--tags]
     *                   [--unit-count]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_signalr_update_command_builder {
        return new az_signalr_update_command_builder("az signalr update", name, resourceGroup);
    }
}

/**
 * Add allowed origins to a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr cors add --allowed-origins
 *                     --name
 *                     --resource-group
 *                     [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_cors_add_command_builder extends CommandBuilder<az_signalr_cors_add_command_result> {
    constructor(commandPath: string, allowedOrigins: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.allowedOrigins(allowedOrigins)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    allowedOrigins(value: string): az_signalr_cors_add_command_builder {
        this.setFlag("--allowed-origins", value);
        return this;
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_cors_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_cors_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_cors_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List allowed origins of a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr cors list --name
 *                      --resource-group
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_cors_list_command_builder extends CommandBuilder<az_signalr_cors_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_cors_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_cors_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_cors_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_cors_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove allowed origins from a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr cors remove --allowed-origins
 *                        --name
 *                        --resource-group
 *                        [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_cors_remove_command_builder extends CommandBuilder<az_signalr_cors_remove_command_result> {
    constructor(commandPath: string, allowedOrigins: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.allowedOrigins(allowedOrigins)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    allowedOrigins(value: string): az_signalr_cors_remove_command_builder {
        this.setFlag("--allowed-origins", value);
        return this;
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_cors_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_cors_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_cors_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the access keys for a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr key list --name
 *                     --resource-group
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_key_list_command_builder extends CommandBuilder<az_signalr_key_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_key_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_key_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_key_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_key_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Regenerate the access key for a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr key renew --key-type {primary, secondary}
 *                      --name
 *                      --resource-group
 *                      [--subscription]
 * ```
 *
 * @param {'primary' | 'secondary'} keyType The name of access key to regenerate.
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_key_renew_command_builder extends CommandBuilder<az_signalr_key_renew_command_result> {
    constructor(commandPath: string, keyType: 'primary' | 'secondary', name: string, resourceGroup: string) {
        super(commandPath);
        this.keyType(keyType)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of access key to regenerate. */
    keyType(value: 'primary' | 'secondary'): az_signalr_key_renew_command_builder {
        this.setFlag("--key-type", value);
        return this;
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_key_renew_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_key_renew_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_key_renew_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the Network access control of SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr network-rule list --name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_network_rule_list_command_builder extends CommandBuilder<az_signalr_network_rule_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_network_rule_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_network_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_network_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_network_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the Network access control of SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr network-rule update --name
 *                                --resource-group
 *                                [--allow]
 *                                [--connection-name]
 *                                [--deny]
 *                                [--public-network {false, true}]
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_network_rule_update_command_builder extends CommandBuilder<az_signalr_network_rule_update_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_network_rule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_network_rule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The allowed virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI. */
    allow(value: string): az_signalr_network_rule_update_command_builder {
        this.setFlag("--allow", value);
        return this;
    }

    /** Space-separeted list of private endpoint connection name. */
    connectionName(value: string): az_signalr_network_rule_update_command_builder {
        this.setFlag("--connection-name", value);
        return this;
    }

    /** The denied virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI. */
    deny(value: string): az_signalr_network_rule_update_command_builder {
        this.setFlag("--deny", value);
        return this;
    }

    /** Set rules for public network. */
    publicNetwork(value: boolean): az_signalr_network_rule_update_command_builder {
        this.setFlag("--public-network", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_network_rule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List upstream settings of an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr upstream clear --name
 *                           --resource-group
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_upstream_clear_command_builder extends CommandBuilder<az_signalr_upstream_clear_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_upstream_clear_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_upstream_clear_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_upstream_clear_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List upstream settings of an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr upstream list --name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_upstream_list_command_builder extends CommandBuilder<az_signalr_upstream_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_upstream_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_upstream_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_upstream_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_upstream_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update order sensitive upstream settings for an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr upstream update --name
 *                            --resource-group
 *                            --template
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} template Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern".
 */
class az_signalr_upstream_update_command_builder extends CommandBuilder<az_signalr_upstream_update_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string, template: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.template(template)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_upstream_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_upstream_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern". */
    template(value: string): az_signalr_upstream_update_command_builder {
        this.setFlag("--template", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_upstream_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Creates a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr create --name
 *                   --resource-group
 *                   --sku
 *                   [--allowed-origins]
 *                   [--default-action {Allow, Deny}]
 *                   [--location]
 *                   [--service-mode {Classic, Default, Serverless}]
 *                   [--subscription]
 *                   [--tags]
 *                   [--unit-count]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sku The sku name of the signalr service. E.g. Standard_S1.
 */
class az_signalr_create_command_builder extends CommandBuilder<az_signalr_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string, sku: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sku(sku)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The sku name of the signalr service. E.g. Standard_S1. */
    sku(value: string): az_signalr_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    allowedOrigins(value: string): az_signalr_create_command_builder {
        this.setFlag("--allowed-origins", value);
        return this;
    }

    /** Default action to apply when no rule matches. */
    defaultAction(value: 'Allow' | 'Deny'): az_signalr_create_command_builder {
        this.setFlag("--default-action", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_signalr_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The service mode which signalr service will be working on. */
    serviceMode(value: 'Classic' | 'Default' | 'Serverless'): az_signalr_create_command_builder {
        this.setFlag("--service-mode", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_signalr_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The number of signalr service unit count. */
    unitCount(value: string): az_signalr_create_command_builder {
        this.setFlag("--unit-count", value);
        return this;
    }
}

/**
 * Deletes a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr delete --name
 *                   --resource-group
 *                   [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_delete_command_builder extends CommandBuilder<az_signalr_delete_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists all the SignalR Service under the current subscription.
 *
 * Syntax:
 * ```
 * az signalr list [--query-examples]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
class az_signalr_list_command_builder extends CommandBuilder<az_signalr_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Restart an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr restart --name
 *                    --resource-group
 *                    [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_restart_command_builder extends CommandBuilder<az_signalr_restart_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_restart_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr show --name
 *                 --resource-group
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_show_command_builder extends CommandBuilder<az_signalr_show_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr update --name
 *                   --resource-group
 *                   [--add]
 *                   [--allowed-origins]
 *                   [--default-action {Allow, Deny}]
 *                   [--force-string]
 *                   [--remove]
 *                   [--service-mode {Classic, Default, Serverless}]
 *                   [--set]
 *                   [--sku]
 *                   [--subscription]
 *                   [--tags]
 *                   [--unit-count]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_signalr_update_command_builder extends CommandBuilder<az_signalr_update_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of signalr service. */
    name(value: string): az_signalr_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_signalr_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    allowedOrigins(value: string): az_signalr_update_command_builder {
        this.setFlag("--allowed-origins", value);
        return this;
    }

    /** Default action to apply when no rule matches. */
    defaultAction(value: 'Allow' | 'Deny'): az_signalr_update_command_builder {
        this.setFlag("--default-action", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_signalr_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_signalr_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** The service mode which signalr service will be working on. */
    serviceMode(value: 'Classic' | 'Default' | 'Serverless'): az_signalr_update_command_builder {
        this.setFlag("--service-mode", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_signalr_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The sku name of the signalr service. E.g. Standard_S1. */
    sku(value: string): az_signalr_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_signalr_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The number of signalr service unit count. */
    unitCount(value: string): az_signalr_update_command_builder {
        this.setFlag("--unit-count", value);
        return this;
    }
}
