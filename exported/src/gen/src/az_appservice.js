"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.az_appservice = exports.az_appservice_vnet_integration = exports.az_appservice_plan = exports.az_appservice_hybrid_connection = exports.az_appservice_domain = exports.az_appservice_ase = void 0;
var base_1 = require("../base");
/** Manage App Service Environments v2. */
var az_appservice_ase = /** @class */ (function () {
    function az_appservice_ase() {
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
    az_appservice_ase.create = function (name, resourceGroup, subnet) {
        return new az_appservice_ase_create_command_builder("az appservice ase create", 'az_appservice_ase_create_command_result', name, resourceGroup, subnet);
    };
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
    az_appservice_ase["delete"] = function (name) {
        return new az_appservice_ase_delete_command_builder("az appservice ase delete", 'az_appservice_ase_delete_command_result', name);
    };
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
    az_appservice_ase.list = function () {
        return new az_appservice_ase_list_command_builder("az appservice ase list", 'az_appservice_ase_list_command_result');
    };
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
    az_appservice_ase.list_addresses = function (name) {
        return new az_appservice_ase_list_addresses_command_builder("az appservice ase list-addresses", 'az_appservice_ase_list_addresses_command_result', name);
    };
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
    az_appservice_ase.list_plans = function (name) {
        return new az_appservice_ase_list_plans_command_builder("az appservice ase list-plans", 'az_appservice_ase_list_plans_command_result', name);
    };
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
    az_appservice_ase.show = function (name) {
        return new az_appservice_ase_show_command_builder("az appservice ase show", 'az_appservice_ase_show_command_result', name);
    };
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
    az_appservice_ase.update = function (name) {
        return new az_appservice_ase_update_command_builder("az appservice ase update", 'az_appservice_ase_update_command_result', name);
    };
    return az_appservice_ase;
}());
exports.az_appservice_ase = az_appservice_ase;
/** Manage custom domains. */
var az_appservice_domain = /** @class */ (function () {
    function az_appservice_domain() {
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
    az_appservice_domain.create = function (contactInfo, hostname, resourceGroup) {
        return new az_appservice_domain_create_command_builder("az appservice domain create", 'az_appservice_domain_create_command_result', contactInfo, hostname, resourceGroup);
    };
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
    az_appservice_domain.show_terms = function (hostname) {
        return new az_appservice_domain_show_terms_command_builder("az appservice domain show-terms", 'az_appservice_domain_show_terms_command_result', hostname);
    };
    return az_appservice_domain;
}());
exports.az_appservice_domain = az_appservice_domain;
/** A method that sets the key a hybrid-connection uses. */
var az_appservice_hybrid_connection = /** @class */ (function () {
    function az_appservice_hybrid_connection() {
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
    az_appservice_hybrid_connection.set_key = function (hybridConnection, keyType, namespace, plan, resourceGroup) {
        return new az_appservice_hybrid_connection_set_key_command_builder("az appservice hybrid-connection set-key", 'az_appservice_hybrid_connection_set_key_command_result', hybridConnection, keyType, namespace, plan, resourceGroup);
    };
    return az_appservice_hybrid_connection;
}());
exports.az_appservice_hybrid_connection = az_appservice_hybrid_connection;
/** Manage app service plans. */
var az_appservice_plan = /** @class */ (function () {
    function az_appservice_plan() {
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
    az_appservice_plan.create = function (name, resourceGroup) {
        return new az_appservice_plan_create_command_builder("az appservice plan create", 'az_appservice_plan_create_command_result', name, resourceGroup);
    };
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
    az_appservice_plan["delete"] = function () {
        return new az_appservice_plan_delete_command_builder("az appservice plan delete", 'az_appservice_plan_delete_command_result');
    };
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
    az_appservice_plan.list = function () {
        return new az_appservice_plan_list_command_builder("az appservice plan list", 'az_appservice_plan_list_command_result');
    };
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
    az_appservice_plan.show = function () {
        return new az_appservice_plan_show_command_builder("az appservice plan show", 'az_appservice_plan_show_command_result');
    };
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
    az_appservice_plan.update = function () {
        return new az_appservice_plan_update_command_builder("az appservice plan update", 'az_appservice_plan_update_command_result');
    };
    return az_appservice_plan;
}());
exports.az_appservice_plan = az_appservice_plan;
/** A method that lists the virtual network integrations used in an appservice plan. */
var az_appservice_vnet_integration = /** @class */ (function () {
    function az_appservice_vnet_integration() {
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
    az_appservice_vnet_integration.list = function (plan, resourceGroup) {
        return new az_appservice_vnet_integration_list_command_builder("az appservice vnet-integration list", 'az_appservice_vnet_integration_list_command_result', plan, resourceGroup);
    };
    return az_appservice_vnet_integration;
}());
exports.az_appservice_vnet_integration = az_appservice_vnet_integration;
/** Manage App Service plans. */
var az_appservice = /** @class */ (function () {
    function az_appservice() {
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
    az_appservice.list_locations = function (sku) {
        return new az_appservice_list_locations_command_builder("az appservice list-locations", 'az_appservice_list_locations_command_result', sku);
    };
    return az_appservice;
}());
exports.az_appservice = az_appservice;
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
var az_appservice_ase_create_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_ase_create_command_builder, _super);
    function az_appservice_ase_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, subnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.subnet(subnet);
        return _this;
    }
    /** Name of the app service environment. */
    az_appservice_ase_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_ase_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of existing subnet. To create vnet and/or subnet                    use `az network vnet [subnet] create`. */
    az_appservice_ase_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Override network security group for subnet. */
    az_appservice_ase_create_command_builder.prototype.forceNetworkSecurityGroup = function (value) {
        this.setFlag("--force-network-security-group", value.toString());
        return this;
    };
    /** Override route table for subnet. */
    az_appservice_ase_create_command_builder.prototype.forceRouteTable = function (value) {
        this.setFlag("--force-route-table", value.toString());
        return this;
    };
    /** Scale of front ends to app service plan instance ratio. */
    az_appservice_ase_create_command_builder.prototype.frontEndScaleFactor = function (value) {
        this.setFlag("--front-end-scale-factor", value);
        return this;
    };
    /** Size of front end servers. */
    az_appservice_ase_create_command_builder.prototype.frontEndSku = function (value) {
        this.setFlag("--front-end-sku", value);
        return this;
    };
    /** Configure network security group manually. */
    az_appservice_ase_create_command_builder.prototype.ignoreNetworkSecurityGroup = function (value) {
        this.setFlag("--ignore-network-security-group", value.toString());
        return this;
    };
    /** Configure route table manually. */
    az_appservice_ase_create_command_builder.prototype.ignoreRouteTable = function (value) {
        this.setFlag("--ignore-route-table", value.toString());
        return this;
    };
    /** Do not check if subnet is sized according to recommendations. */
    az_appservice_ase_create_command_builder.prototype.ignoreSubnetSizeValidation = function (value) {
        this.setFlag("--ignore-subnet-size-validation", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_appservice_ase_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_appservice_ase_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_ase_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specify if app service environment should be accessible from internet. */
    az_appservice_ase_create_command_builder.prototype.virtualIpType = function (value) {
        this.setFlag("--virtual-ip-type", value);
        return this;
    };
    /** Name of the vNet. Mandatory if only subnet name is specified. */
    az_appservice_ase_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_appservice_ase_create_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_ase_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_ase_delete_command_builder, _super);
    function az_appservice_ase_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the app service environment. */
    az_appservice_ase_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_appservice_ase_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_ase_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_ase_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appservice_ase_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appservice_ase_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_ase_list_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_ase_list_command_builder, _super);
    function az_appservice_ase_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appservice_ase_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_ase_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_ase_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_ase_list_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_ase_list_addresses_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_ase_list_addresses_command_builder, _super);
    function az_appservice_ase_list_addresses_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the app service environment. */
    az_appservice_ase_list_addresses_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_ase_list_addresses_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_ase_list_addresses_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_ase_list_addresses_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_ase_list_plans_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_ase_list_plans_command_builder, _super);
    function az_appservice_ase_list_plans_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the app service environment. */
    az_appservice_ase_list_plans_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_ase_list_plans_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_ase_list_plans_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_ase_list_plans_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_ase_show_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_ase_show_command_builder, _super);
    function az_appservice_ase_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the app service environment. */
    az_appservice_ase_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appservice_ase_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_ase_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_ase_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_ase_show_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_ase_update_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_ase_update_command_builder, _super);
    function az_appservice_ase_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the app service environment. */
    az_appservice_ase_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Scale of front ends to app service plan instance ratio between 5 and 15. */
    az_appservice_ase_update_command_builder.prototype.frontEndScaleFactor = function (value) {
        this.setFlag("--front-end-scale-factor", value);
        return this;
    };
    /** Size of front end servers. */
    az_appservice_ase_update_command_builder.prototype.frontEndSku = function (value) {
        this.setFlag("--front-end-sku", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_appservice_ase_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_ase_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_ase_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_ase_update_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_domain_create_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_domain_create_command_builder, _super);
    function az_appservice_domain_create_command_builder(commandPath, resultDataTypeName, contactInfo, hostname, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.contactInfo(contactInfo);
        _this.hostname(hostname);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The file path to a JSON object with your contact info for domain registration. Please see the following link for the format of the JSON file expected: <a href="https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json">https://github.com/AzureAppServiceCLI/appservice_domains_templates/blob/master/contact_info.json</a>. */
    az_appservice_domain_create_command_builder.prototype.contactInfo = function (value) {
        this.setFlag("--contact-info", value);
        return this;
    };
    /** Name of the custom domain. */
    az_appservice_domain_create_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_domain_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** By using this flag, you are accepting the conditions shown using the --show-hostname-purchase-terms flag. */
    az_appservice_domain_create_command_builder.prototype.acceptTerms = function (value) {
        this.setFlag("--accept-terms", value);
        return this;
    };
    /** Enable auto-renew on the domain. */
    az_appservice_domain_create_command_builder.prototype.autoRenew = function (value) {
        this.setFlag("--auto-renew", value);
        return this;
    };
    /** Show summary of the purchase and create operation instead of executing it. */
    az_appservice_domain_create_command_builder.prototype.dryrun = function (value) {
        this.setFlag("--dryrun", value);
        return this;
    };
    /** Enable privacy protection. */
    az_appservice_domain_create_command_builder.prototype.privacy = function (value) {
        this.setFlag("--privacy", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_domain_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_appservice_domain_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_appservice_domain_create_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_domain_show_terms_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_domain_show_terms_command_builder, _super);
    function az_appservice_domain_show_terms_command_builder(commandPath, resultDataTypeName, hostname) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hostname(hostname);
        return _this;
    }
    /** Name of the custom domain. */
    az_appservice_domain_show_terms_command_builder.prototype.hostname = function (value) {
        this.setFlag("--hostname", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_domain_show_terms_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_domain_show_terms_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_hybrid_connection_set_key_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_hybrid_connection_set_key_command_builder, _super);
    function az_appservice_hybrid_connection_set_key_command_builder(commandPath, resultDataTypeName, hybridConnection, keyType, namespace, plan, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hybridConnection(hybridConnection);
        _this.keyType(keyType);
        _this.namespace(namespace);
        _this.plan(plan);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Hybrid connection name. */
    az_appservice_hybrid_connection_set_key_command_builder.prototype.hybridConnection = function (value) {
        this.setFlag("--hybrid-connection", value);
        return this;
    };
    /** Which key (primary or secondary) should be used. */
    az_appservice_hybrid_connection_set_key_command_builder.prototype.keyType = function (value) {
        this.setFlag("--key-type", value);
        return this;
    };
    /** Hybrid connection namespace. */
    az_appservice_hybrid_connection_set_key_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** AppService plan. */
    az_appservice_hybrid_connection_set_key_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_hybrid_connection_set_key_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_hybrid_connection_set_key_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_hybrid_connection_set_key_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_plan_create_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_plan_create_command_builder, _super);
    function az_appservice_plan_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the new app service plan. */
    az_appservice_plan_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_plan_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of the app service environment. */
    az_appservice_plan_create_command_builder.prototype.appServiceEnvironment = function (value) {
        this.setFlag("--app-service-environment", value);
        return this;
    };
    /** Host web app on Windows container. */
    az_appservice_plan_create_command_builder.prototype.hyperV = function (value) {
        this.setFlag("--hyper-v", value);
        return this;
    };
    /** Host web app on Linux worker. */
    az_appservice_plan_create_command_builder.prototype.isLinux = function (value) {
        this.setFlag("--is-linux", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_appservice_plan_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_appservice_plan_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Number of workers to be allocated. */
    az_appservice_plan_create_command_builder.prototype.numberOfWorkers = function (value) {
        this.setFlag("--number-of-workers", value);
        return this;
    };
    /** Enable per-app scaling at the App Service plan level to allow for scaling an app independently from the App Service plan that hosts it. */
    az_appservice_plan_create_command_builder.prototype.perSiteScaling = function (value) {
        this.setFlag("--per-site-scaling", value);
        return this;
    };
    /** The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large). */
    az_appservice_plan_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_plan_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_appservice_plan_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_appservice_plan_create_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_plan_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_plan_delete_command_builder, _super);
    function az_appservice_plan_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_appservice_plan_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the app service plan. */
    az_appservice_plan_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_plan_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_plan_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appservice_plan_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appservice_plan_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_plan_list_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_plan_list_command_builder, _super);
    function az_appservice_plan_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appservice_plan_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_plan_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_plan_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_plan_list_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_plan_show_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_plan_show_command_builder, _super);
    function az_appservice_plan_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_appservice_plan_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the app service plan. */
    az_appservice_plan_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appservice_plan_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_plan_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_plan_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_plan_show_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_plan_update_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_plan_update_command_builder, _super);
    function az_appservice_plan_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_appservice_plan_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_appservice_plan_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_appservice_plan_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the app service plan. */
    az_appservice_plan_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_appservice_plan_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Number of workers to be allocated. */
    az_appservice_plan_update_command_builder.prototype.numberOfWorkers = function (value) {
        this.setFlag("--number-of-workers", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_appservice_plan_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_plan_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_appservice_plan_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large). */
    az_appservice_plan_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_plan_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_plan_update_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_vnet_integration_list_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_vnet_integration_list_command_builder, _super);
    function az_appservice_vnet_integration_list_command_builder(commandPath, resultDataTypeName, plan, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.plan(plan);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** AppService plan. */
    az_appservice_vnet_integration_list_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appservice_vnet_integration_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appservice_vnet_integration_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_vnet_integration_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_vnet_integration_list_command_builder;
}(base_1.CommandBuilder));
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
var az_appservice_list_locations_command_builder = /** @class */ (function (_super) {
    __extends(az_appservice_list_locations_command_builder, _super);
    function az_appservice_list_locations_command_builder(commandPath, resultDataTypeName, sku) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sku(sku);
        return _this;
    }
    /** The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), PC2 (Premium Container Small), PC3 (Premium Container Medium), PC4 (Premium Container Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large). */
    az_appservice_list_locations_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Get regions which support hosting web apps on Linux workers. */
    az_appservice_list_locations_command_builder.prototype.linuxWorkersEnabled = function (value) {
        this.setFlag("--linux-workers-enabled", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appservice_list_locations_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appservice_list_locations_command_builder;
}(base_1.CommandBuilder));
