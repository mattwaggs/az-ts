import { CommandBuilder } from '../base';
import { az_appservice_ase_create_command_result } from './models/az_appservice_ase_create_command_result'
import { az_appservice_ase_delete_command_result } from './models/az_appservice_ase_delete_command_result'
import { az_appservice_ase_list_command_result } from './models/az_appservice_ase_list_command_result'
import { az_appservice_ase_list_addresses_command_result } from './models/az_appservice_ase_list_addresses_command_result'
import { az_appservice_ase_list_plans_command_result } from './models/az_appservice_ase_list_plans_command_result'
import { az_appservice_ase_show_command_result } from './models/az_appservice_ase_show_command_result'
import { az_appservice_ase_update_command_result } from './models/az_appservice_ase_update_command_result'
import { az_appservice_domain_create_command_result } from './models/az_appservice_domain_create_command_result'
import { az_appservice_domain_show_terms_command_result } from './models/az_appservice_domain_show_terms_command_result'
import { az_appservice_hybrid_connection_set_key_command_result } from './models/az_appservice_hybrid_connection_set_key_command_result'
import { az_appservice_plan_create_command_result } from './models/az_appservice_plan_create_command_result'
import { az_appservice_plan_delete_command_result } from './models/az_appservice_plan_delete_command_result'
import { az_appservice_plan_list_command_result } from './models/az_appservice_plan_list_command_result'
import { az_appservice_plan_show_command_result } from './models/az_appservice_plan_show_command_result'
import { az_appservice_plan_update_command_result } from './models/az_appservice_plan_update_command_result'
import { az_appservice_vnet_integration_list_command_result } from './models/az_appservice_vnet_integration_list_command_result'
import { az_appservice_list_locations_command_result } from './models/az_appservice_list_locations_command_result'

/** Manage App Service Environments v2. */
export class az_appservice_ase {
    /**
     * Create app service environment.
     *
     * Syntax:
     * ```
     * az appservice ase create --name
     *                          --resource-group
     *                          --subnet
     *                          [--force-network-security-group {false, true}]
     *                          [--force-route-table {false, true}]
     *                          [--front-end-scale-factor]
     *                          [--front-end-sku {I1, I2, I3}]
     *                          [--ignore-network-security-group {false, true}]
     *                          [--ignore-route-table {false, true}]
     *                          [--ignore-subnet-size-validation {false, true}]
     *                          [--location]
     *                          [--no-wait]
     *                          [--subscription]
     *                          [--virtual-ip-type {External, Internal}]
     *                          [--vnet-name]
     * ```
     *
     * @param {string} name Name of the app service environment.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subnet Name or ID of existing subnet. To create vnet and/or subnet                    use `az network vnet [subnet] create`.
     */
    static create(name: string, resourceGroup: string, subnet: string): az_appservice_ase_create_command_builder {
        return new az_appservice_ase_create_command_builder("az appservice ase create", 'az_appservice_ase_create_command_result', name, resourceGroup, subnet);
    }

    /**
     * Delete app service environment.
     *
     * Syntax:
     * ```
     * az appservice ase delete --name
     *                          [--no-wait]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--yes]
     * ```
     *
     * @param {string} name Name of the app service environment.
     */
    static delete(name: string): az_appservice_ase_delete_command_builder {
        return new az_appservice_ase_delete_command_builder("az appservice ase delete", 'az_appservice_ase_delete_command_result', name);
    }

    /**
     * List app service environments.
     *
     * Syntax:
     * ```
     * az appservice ase list [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static list(): az_appservice_ase_list_command_builder {
        return new az_appservice_ase_list_command_builder("az appservice ase list", 'az_appservice_ase_list_command_result');
    }

    /**
     * List VIPs associated with an app service environment.
     *
     * Syntax:
     * ```
     * az appservice ase list-addresses --name
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Name of the app service environment.
     */
    static list_addresses(name: string): az_appservice_ase_list_addresses_command_builder {
        return new az_appservice_ase_list_addresses_command_builder("az appservice ase list-addresses", 'az_appservice_ase_list_addresses_command_result', name);
    }

    /**
     * List app service plans associated with an app service environment.
     *
     * Syntax:
     * ```
     * az appservice ase list-plans --name
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the app service environment.
     */
    static list_plans(name: string): az_appservice_ase_list_plans_command_builder {
        return new az_appservice_ase_list_plans_command_builder("az appservice ase list-plans", 'az_appservice_ase_list_plans_command_result', name);
    }

    /**
     * Show details of an app service environment.
     *
     * Syntax:
     * ```
     * az appservice ase show --name
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} name Name of the app service environment.
     */
    static show(name: string): az_appservice_ase_show_command_builder {
        return new az_appservice_ase_show_command_builder("az appservice ase show", 'az_appservice_ase_show_command_result', name);
    }

    /**
     * Update app service environment.
     *
     * Syntax:
     * ```
     * az appservice ase update --name
     *                          [--front-end-scale-factor]
     *                          [--front-end-sku {I1, I2, I3}]
     *                          [--no-wait]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of the app service environment.
     */
    static update(name: string): az_appservice_ase_update_command_builder {
        return new az_appservice_ase_update_command_builder("az appservice ase update", 'az_appservice_ase_update_command_result', name);
    }
}

/** Manage custom domains. */
export class az_appservice_domain {
    /**
     * Create and purchase a custom domain.
     *
     * Syntax:
     * ```
     * az appservice domain create --contact-info
     *                             --hostname
     *                             --resource-group
     *                             [--accept-terms]
     *                             [--auto-renew]
     *                             [--dryrun]
     *                             [--privacy]
     *                             [--subscription]
     *                             [--tags]
     * ```
     *
     * @param {string} contactInfo The file path to a JSON object with your contact info for domain registration. Please see the following link for the format of the JSON file expected: <a href="https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json">https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json</a>.
     * @param {string} hostname Name of the custom domain.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(contactInfo: string, hostname: string, resourceGroup: string): az_appservice_domain_create_command_builder {
        return new az_appservice_domain_create_command_builder("az appservice domain create", 'az_appservice_domain_create_command_result', contactInfo, hostname, resourceGroup);
    }

    /**
     * Show the legal terms for purchasing and creating a custom domain.
     *
     * Syntax:
     * ```
     * az appservice domain show-terms --hostname
     *                                 [--subscription]
     * ```
     *
     * @param {string} hostname Name of the custom domain.
     */
    static show_terms(hostname: string): az_appservice_domain_show_terms_command_builder {
        return new az_appservice_domain_show_terms_command_builder("az appservice domain show-terms", 'az_appservice_domain_show_terms_command_result', hostname);
    }
}

/** A method that sets the key a hybrid-connection uses. */
export class az_appservice_hybrid_connection {
    /**
     * Set the key that all apps in an appservice plan use to connect to the hybrid-connections in that appservice plan.
     *
     * Syntax:
     * ```
     * az appservice hybrid-connection set-key --hybrid-connection
     *                                         --key-type
     *                                         --namespace
     *                                         --plan
     *                                         --resource-group
     *                                         [--subscription]
     * ```
     *
     * @param {string} hybridConnection Hybrid connection name.
     * @param {string} keyType Which key (primary or secondary) should be used.
     * @param {string} namespace Hybrid connection namespace.
     * @param {string} plan AppService plan.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static set_key(hybridConnection: string, keyType: string, namespace: string, plan: string, resourceGroup: string): az_appservice_hybrid_connection_set_key_command_builder {
        return new az_appservice_hybrid_connection_set_key_command_builder("az appservice hybrid-connection set-key", 'az_appservice_hybrid_connection_set_key_command_result', hybridConnection, keyType, namespace, plan, resourceGroup);
    }
}

/** Manage app service plans. */
export class az_appservice_plan {
    /**
     * Create an app service plan.
     *
     * Syntax:
     * ```
     * az appservice plan create --name
     *                           --resource-group
     *                           [--app-service-environment]
     *                           [--hyper-v]
     *                           [--is-linux]
     *                           [--location]
     *                           [--no-wait]
     *                           [--number-of-workers]
     *                           [--per-site-scaling]
     *                           [--sku {B1, B2, B3, D1, F1, FREE, I1, I2, I3, P1V2, P1V3, P2V2, P2V3, P3V2, P3V3, PC2, PC3, PC4, S1, S2, S3, SHARED}]
     *                           [--subscription]
     *                           [--tags]
     * ```
     *
     * @param {string} name Name of the new app service plan.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_appservice_plan_create_command_builder {
        return new az_appservice_plan_create_command_builder("az appservice plan create", 'az_appservice_plan_create_command_result', name, resourceGroup);
    }

    /**
     * Delete an app service plan.
     *
     * Syntax:
     * ```
     * az appservice plan delete [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     *                           [--yes]
     * ```
     */
    static delete(): az_appservice_plan_delete_command_builder {
        return new az_appservice_plan_delete_command_builder("az appservice plan delete", 'az_appservice_plan_delete_command_result');
    }

    /**
     * List app service plans.
     *
     * Syntax:
     * ```
     * az appservice plan list [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    static list(): az_appservice_plan_list_command_builder {
        return new az_appservice_plan_list_command_builder("az appservice plan list", 'az_appservice_plan_list_command_result');
    }

    /**
     * Get the app service plans for a resource group or a set of resource groups.
     *
     * Syntax:
     * ```
     * az appservice plan show [--ids]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    static show(): az_appservice_plan_show_command_builder {
        return new az_appservice_plan_show_command_builder("az appservice plan show", 'az_appservice_plan_show_command_result');
    }

    /**
     * Update an app service plan.
     *
     * Syntax:
     * ```
     * az appservice plan update [--add]
     *                           [--force-string]
     *                           [--ids]
     *                           [--name]
     *                           [--no-wait]
     *                           [--number-of-workers]
     *                           [--remove]
     *                           [--resource-group]
     *                           [--set]
     *                           [--sku {B1, B2, B3, D1, F1, FREE, I1, I2, I3, P1V2, P1V3, P2V2, P2V3, P3V2, P3V3, PC2, PC3, PC4, S1, S2, S3, SHARED}]
     *                           [--subscription]
     * ```
     */
    static update(): az_appservice_plan_update_command_builder {
        return new az_appservice_plan_update_command_builder("az appservice plan update", 'az_appservice_plan_update_command_result');
    }
}

/** A method that lists the virtual network integrations used in an appservice plan. */
export class az_appservice_vnet_integration {
    /**
     * List the virtual network integrations used in an appservice plan.
     *
     * Syntax:
     * ```
     * az appservice vnet-integration list --plan
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} plan AppService plan.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(plan: string, resourceGroup: string): az_appservice_vnet_integration_list_command_builder {
        return new az_appservice_vnet_integration_list_command_builder("az appservice vnet-integration list", 'az_appservice_vnet_integration_list_command_result', plan, resourceGroup);
    }
}

/** Manage App Service plans. */
export class az_appservice {
    /**
     * List regions where a plan sku is available.
     *
     * Syntax:
     * ```
     * az appservice list-locations --sku {B1, B2, B3, D1, F1, FREE, I1, I2, I3, P1V2, P1V3, P2V2, P2V3, P3V2, P3V3, PC2, PC3, PC4, S1, S2, S3, SHARED}
     *                              [--linux-workers-enabled]
     *                              [--subscription]
     * ```
     *
     * @param {'B1' | 'B2' | 'B3' | 'D1' | 'F1' | 'FREE' | 'I1' | 'I2' | 'I3' | 'P1V2' | 'P1V3' | 'P2V2' | 'P2V3' | 'P3V2' | 'P3V3' | 'PC2' | 'PC3' | 'PC4' | 'S1' | 'S2' | 'S3' | 'SHARED'} sku The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large).
     */
    static list_locations(sku: 'B1' | 'B2' | 'B3' | 'D1' | 'F1' | 'FREE' | 'I1' | 'I2' | 'I3' | 'P1V2' | 'P1V3' | 'P2V2' | 'P2V3' | 'P3V2' | 'P3V3' | 'PC2' | 'PC3' | 'PC4' | 'S1' | 'S2' | 'S3' | 'SHARED'): az_appservice_list_locations_command_builder {
        return new az_appservice_list_locations_command_builder("az appservice list-locations", 'az_appservice_list_locations_command_result', sku);
    }
}

/**
 * Create app service environment.
 *
 * Syntax:
 * ```
 * az appservice ase create --name
 *                          --resource-group
 *                          --subnet
 *                          [--force-network-security-group {false, true}]
 *                          [--force-route-table {false, true}]
 *                          [--front-end-scale-factor]
 *                          [--front-end-sku {I1, I2, I3}]
 *                          [--ignore-network-security-group {false, true}]
 *                          [--ignore-route-table {false, true}]
 *                          [--ignore-subnet-size-validation {false, true}]
 *                          [--location]
 *                          [--no-wait]
 *                          [--subscription]
 *                          [--virtual-ip-type {External, Internal}]
 *                          [--vnet-name]
 * ```
 *
 * @param {string} name Name of the app service environment.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subnet Name or ID of existing subnet. To create vnet and/or subnet                    use `az network vnet [subnet] create`.
 */
class az_appservice_ase_create_command_builder extends CommandBuilder<az_appservice_ase_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, subnet: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.subnet(subnet)
    }

    /** Name of the app service environment. */
    name(value: string): az_appservice_ase_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_ase_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of existing subnet. To create vnet and/or subnet                    use `az network vnet [subnet] create`. */
    subnet(value: string): az_appservice_ase_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Override network security group for subnet. */
    forceNetworkSecurityGroup(value: boolean): az_appservice_ase_create_command_builder {
        this.setFlag("--force-network-security-group", value.toString());
        return this;
    }

    /** Override route table for subnet. */
    forceRouteTable(value: boolean): az_appservice_ase_create_command_builder {
        this.setFlag("--force-route-table", value.toString());
        return this;
    }

    /** Scale of front ends to app service plan instance ratio. */
    frontEndScaleFactor(value: string): az_appservice_ase_create_command_builder {
        this.setFlag("--front-end-scale-factor", value);
        return this;
    }

    /** Size of front end servers. */
    frontEndSku(value: 'I1' | 'I2' | 'I3'): az_appservice_ase_create_command_builder {
        this.setFlag("--front-end-sku", value);
        return this;
    }

    /** Configure network security group manually. */
    ignoreNetworkSecurityGroup(value: boolean): az_appservice_ase_create_command_builder {
        this.setFlag("--ignore-network-security-group", value.toString());
        return this;
    }

    /** Configure route table manually. */
    ignoreRouteTable(value: boolean): az_appservice_ase_create_command_builder {
        this.setFlag("--ignore-route-table", value.toString());
        return this;
    }

    /** Do not check if subnet is sized according to recommendations. */
    ignoreSubnetSizeValidation(value: boolean): az_appservice_ase_create_command_builder {
        this.setFlag("--ignore-subnet-size-validation", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_appservice_ase_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_appservice_ase_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_ase_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specify if app service environment should be accessible from internet. */
    virtualIpType(value: 'External' | 'Internal'): az_appservice_ase_create_command_builder {
        this.setFlag("--virtual-ip-type", value);
        return this;
    }

    /** Name of the vNet. Mandatory if only subnet name is specified. */
    vnetName(value: string): az_appservice_ase_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * Delete app service environment.
 *
 * Syntax:
 * ```
 * az appservice ase delete --name
 *                          [--no-wait]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--yes]
 * ```
 *
 * @param {string} name Name of the app service environment.
 */
class az_appservice_ase_delete_command_builder extends CommandBuilder<az_appservice_ase_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the app service environment. */
    name(value: string): az_appservice_ase_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_appservice_ase_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_ase_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_ase_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_appservice_ase_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List app service environments.
 *
 * Syntax:
 * ```
 * az appservice ase list [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
class az_appservice_ase_list_command_builder extends CommandBuilder<az_appservice_ase_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appservice_ase_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_ase_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_ase_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List VIPs associated with an app service environment.
 *
 * Syntax:
 * ```
 * az appservice ase list-addresses --name
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Name of the app service environment.
 */
class az_appservice_ase_list_addresses_command_builder extends CommandBuilder<az_appservice_ase_list_addresses_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the app service environment. */
    name(value: string): az_appservice_ase_list_addresses_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_ase_list_addresses_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_ase_list_addresses_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List app service plans associated with an app service environment.
 *
 * Syntax:
 * ```
 * az appservice ase list-plans --name
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the app service environment.
 */
class az_appservice_ase_list_plans_command_builder extends CommandBuilder<az_appservice_ase_list_plans_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the app service environment. */
    name(value: string): az_appservice_ase_list_plans_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_ase_list_plans_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_ase_list_plans_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show details of an app service environment.
 *
 * Syntax:
 * ```
 * az appservice ase show --name
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} name Name of the app service environment.
 */
class az_appservice_ase_show_command_builder extends CommandBuilder<az_appservice_ase_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the app service environment. */
    name(value: string): az_appservice_ase_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appservice_ase_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_ase_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_ase_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update app service environment.
 *
 * Syntax:
 * ```
 * az appservice ase update --name
 *                          [--front-end-scale-factor]
 *                          [--front-end-sku {I1, I2, I3}]
 *                          [--no-wait]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of the app service environment.
 */
class az_appservice_ase_update_command_builder extends CommandBuilder<az_appservice_ase_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the app service environment. */
    name(value: string): az_appservice_ase_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Scale of front ends to app service plan instance ratio between 5 and 15. */
    frontEndScaleFactor(value: string): az_appservice_ase_update_command_builder {
        this.setFlag("--front-end-scale-factor", value);
        return this;
    }

    /** Size of front end servers. */
    frontEndSku(value: 'I1' | 'I2' | 'I3'): az_appservice_ase_update_command_builder {
        this.setFlag("--front-end-sku", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_appservice_ase_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_ase_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_ase_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create and purchase a custom domain.
 *
 * Syntax:
 * ```
 * az appservice domain create --contact-info
 *                             --hostname
 *                             --resource-group
 *                             [--accept-terms]
 *                             [--auto-renew]
 *                             [--dryrun]
 *                             [--privacy]
 *                             [--subscription]
 *                             [--tags]
 * ```
 *
 * @param {string} contactInfo The file path to a JSON object with your contact info for domain registration. Please see the following link for the format of the JSON file expected: <a href="https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json">https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json</a>.
 * @param {string} hostname Name of the custom domain.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_appservice_domain_create_command_builder extends CommandBuilder<az_appservice_domain_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, contactInfo: string, hostname: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.contactInfo(contactInfo)
        this.hostname(hostname)
        this.resourceGroup(resourceGroup)
    }

    /** The file path to a JSON object with your contact info for domain registration. Please see the following link for the format of the JSON file expected: <a href="https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json">https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json</a>. */
    contactInfo(value: string): az_appservice_domain_create_command_builder {
        this.setFlag("--contact-info", value);
        return this;
    }

    /** Name of the custom domain. */
    hostname(value: string): az_appservice_domain_create_command_builder {
        this.setFlag("--hostname", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_domain_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** By using this flag, you are accepting the conditions shown using the --show-hostname-purchase-terms flag. */
    acceptTerms(value: string): az_appservice_domain_create_command_builder {
        this.setFlag("--accept-terms", value);
        return this;
    }

    /** Enable auto-renew on the domain. */
    autoRenew(value: string): az_appservice_domain_create_command_builder {
        this.setFlag("--auto-renew", value);
        return this;
    }

    /** Show summary of the purchase and create operation instead of executing it. */
    dryrun(value: string): az_appservice_domain_create_command_builder {
        this.setFlag("--dryrun", value);
        return this;
    }

    /** Enable privacy protection. */
    privacy(value: string): az_appservice_domain_create_command_builder {
        this.setFlag("--privacy", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_domain_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_appservice_domain_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Show the legal terms for purchasing and creating a custom domain.
 *
 * Syntax:
 * ```
 * az appservice domain show-terms --hostname
 *                                 [--subscription]
 * ```
 *
 * @param {string} hostname Name of the custom domain.
 */
class az_appservice_domain_show_terms_command_builder extends CommandBuilder<az_appservice_domain_show_terms_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, hostname: string) {
        super(commandPath, resultDataTypeName);
        this.hostname(hostname)
    }

    /** Name of the custom domain. */
    hostname(value: string): az_appservice_domain_show_terms_command_builder {
        this.setFlag("--hostname", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_domain_show_terms_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set the key that all apps in an appservice plan use to connect to the hybrid-connections in that appservice plan.
 *
 * Syntax:
 * ```
 * az appservice hybrid-connection set-key --hybrid-connection
 *                                         --key-type
 *                                         --namespace
 *                                         --plan
 *                                         --resource-group
 *                                         [--subscription]
 * ```
 *
 * @param {string} hybridConnection Hybrid connection name.
 * @param {string} keyType Which key (primary or secondary) should be used.
 * @param {string} namespace Hybrid connection namespace.
 * @param {string} plan AppService plan.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_appservice_hybrid_connection_set_key_command_builder extends CommandBuilder<az_appservice_hybrid_connection_set_key_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, hybridConnection: string, keyType: string, namespace: string, plan: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.hybridConnection(hybridConnection)
        this.keyType(keyType)
        this.namespace(namespace)
        this.plan(plan)
        this.resourceGroup(resourceGroup)
    }

    /** Hybrid connection name. */
    hybridConnection(value: string): az_appservice_hybrid_connection_set_key_command_builder {
        this.setFlag("--hybrid-connection", value);
        return this;
    }

    /** Which key (primary or secondary) should be used. */
    keyType(value: string): az_appservice_hybrid_connection_set_key_command_builder {
        this.setFlag("--key-type", value);
        return this;
    }

    /** Hybrid connection namespace. */
    namespace(value: string): az_appservice_hybrid_connection_set_key_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** AppService plan. */
    plan(value: string): az_appservice_hybrid_connection_set_key_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_hybrid_connection_set_key_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_hybrid_connection_set_key_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create an app service plan.
 *
 * Syntax:
 * ```
 * az appservice plan create --name
 *                           --resource-group
 *                           [--app-service-environment]
 *                           [--hyper-v]
 *                           [--is-linux]
 *                           [--location]
 *                           [--no-wait]
 *                           [--number-of-workers]
 *                           [--per-site-scaling]
 *                           [--sku {B1, B2, B3, D1, F1, FREE, I1, I2, I3, P1V2, P1V3, P2V2, P2V3, P3V2, P3V3, PC2, PC3, PC4, S1, S2, S3, SHARED}]
 *                           [--subscription]
 *                           [--tags]
 * ```
 *
 * @param {string} name Name of the new app service plan.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_appservice_plan_create_command_builder extends CommandBuilder<az_appservice_plan_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the new app service plan. */
    name(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of the app service environment. */
    appServiceEnvironment(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--app-service-environment", value);
        return this;
    }

    /** Host web app on Windows container. */
    hyperV(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--hyper-v", value);
        return this;
    }

    /** Host web app on Linux worker. */
    isLinux(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--is-linux", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Number of workers to be allocated. */
    numberOfWorkers(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--number-of-workers", value);
        return this;
    }

    /** Enable per-app scaling at the App Service plan level to allow for scaling an app independently from the App Service plan that hosts it. */
    perSiteScaling(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--per-site-scaling", value);
        return this;
    }

    /** The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large). */
    sku(value: 'B1' | 'B2' | 'B3' | 'D1' | 'F1' | 'FREE' | 'I1' | 'I2' | 'I3' | 'P1V2' | 'P1V3' | 'P2V2' | 'P2V3' | 'P3V2' | 'P3V3' | 'PC2' | 'PC3' | 'PC4' | 'S1' | 'S2' | 'S3' | 'SHARED'): az_appservice_plan_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_appservice_plan_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Delete an app service plan.
 *
 * Syntax:
 * ```
 * az appservice plan delete [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 *                           [--yes]
 * ```
 */
class az_appservice_plan_delete_command_builder extends CommandBuilder<az_appservice_plan_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_appservice_plan_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the app service plan. */
    name(value: string): az_appservice_plan_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_plan_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_plan_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_appservice_plan_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List app service plans.
 *
 * Syntax:
 * ```
 * az appservice plan list [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
class az_appservice_plan_list_command_builder extends CommandBuilder<az_appservice_plan_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appservice_plan_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_plan_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_plan_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the app service plans for a resource group or a set of resource groups.
 *
 * Syntax:
 * ```
 * az appservice plan show [--ids]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
class az_appservice_plan_show_command_builder extends CommandBuilder<az_appservice_plan_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_appservice_plan_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the app service plan. */
    name(value: string): az_appservice_plan_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appservice_plan_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_plan_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_plan_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update an app service plan.
 *
 * Syntax:
 * ```
 * az appservice plan update [--add]
 *                           [--force-string]
 *                           [--ids]
 *                           [--name]
 *                           [--no-wait]
 *                           [--number-of-workers]
 *                           [--remove]
 *                           [--resource-group]
 *                           [--set]
 *                           [--sku {B1, B2, B3, D1, F1, FREE, I1, I2, I3, P1V2, P1V3, P2V2, P2V3, P3V2, P3V3, PC2, PC3, PC4, S1, S2, S3, SHARED}]
 *                           [--subscription]
 * ```
 */
class az_appservice_plan_update_command_builder extends CommandBuilder<az_appservice_plan_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the app service plan. */
    name(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Number of workers to be allocated. */
    numberOfWorkers(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--number-of-workers", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large). */
    sku(value: 'B1' | 'B2' | 'B3' | 'D1' | 'F1' | 'FREE' | 'I1' | 'I2' | 'I3' | 'P1V2' | 'P1V3' | 'P2V2' | 'P2V3' | 'P3V2' | 'P3V3' | 'PC2' | 'PC3' | 'PC4' | 'S1' | 'S2' | 'S3' | 'SHARED'): az_appservice_plan_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_plan_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the virtual network integrations used in an appservice plan.
 *
 * Syntax:
 * ```
 * az appservice vnet-integration list --plan
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} plan AppService plan.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_appservice_vnet_integration_list_command_builder extends CommandBuilder<az_appservice_vnet_integration_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, plan: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.plan(plan)
        this.resourceGroup(resourceGroup)
    }

    /** AppService plan. */
    plan(value: string): az_appservice_vnet_integration_list_command_builder {
        this.setFlag("--plan", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appservice_vnet_integration_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appservice_vnet_integration_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_vnet_integration_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List regions where a plan sku is available.
 *
 * Syntax:
 * ```
 * az appservice list-locations --sku {B1, B2, B3, D1, F1, FREE, I1, I2, I3, P1V2, P1V3, P2V2, P2V3, P3V2, P3V3, PC2, PC3, PC4, S1, S2, S3, SHARED}
 *                              [--linux-workers-enabled]
 *                              [--subscription]
 * ```
 *
 * @param {'B1' | 'B2' | 'B3' | 'D1' | 'F1' | 'FREE' | 'I1' | 'I2' | 'I3' | 'P1V2' | 'P1V3' | 'P2V2' | 'P2V3' | 'P3V2' | 'P3V3' | 'PC2' | 'PC3' | 'PC4' | 'S1' | 'S2' | 'S3' | 'SHARED'} sku The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large).
 */
class az_appservice_list_locations_command_builder extends CommandBuilder<az_appservice_list_locations_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, sku: 'B1' | 'B2' | 'B3' | 'D1' | 'F1' | 'FREE' | 'I1' | 'I2' | 'I3' | 'P1V2' | 'P1V3' | 'P2V2' | 'P2V3' | 'P3V2' | 'P3V3' | 'PC2' | 'PC3' | 'PC4' | 'S1' | 'S2' | 'S3' | 'SHARED') {
        super(commandPath, resultDataTypeName);
        this.sku(sku)
    }

    /** The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large). */
    sku(value: 'B1' | 'B2' | 'B3' | 'D1' | 'F1' | 'FREE' | 'I1' | 'I2' | 'I3' | 'P1V2' | 'P1V3' | 'P2V2' | 'P2V3' | 'P3V2' | 'P3V3' | 'PC2' | 'PC3' | 'PC4' | 'S1' | 'S2' | 'S3' | 'SHARED'): az_appservice_list_locations_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Get regions which support hosting web apps on Linux workers. */
    linuxWorkersEnabled(value: string): az_appservice_list_locations_command_builder {
        this.setFlag("--linux-workers-enabled", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appservice_list_locations_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
