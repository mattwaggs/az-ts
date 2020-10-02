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
exports.az_consumption = exports.az_consumption_usage = exports.az_consumption_reservation = exports.az_consumption_reservation_summary = exports.az_consumption_reservation_detail = exports.az_consumption_pricesheet = exports.az_consumption_marketplace = exports.az_consumption_budget = void 0;
var base_1 = require("../base");
/** Manage budgets for an Azure subscription. */
var az_consumption_budget = /** @class */ (function () {
    function az_consumption_budget() {
    }
    /**
     * Create a budget for an Azure subscription.
     *
     * Syntax:
     * ```
     * az consumption budget create --amount
     *                              --budget-name
     *                              --category {cost, usage}
     *                              --end-date
     *                              --start-date
     *                              --time-grain {annually, monthly, quarterly}
     *                              [--meter-filter]
     *                              [--resource-filter]
     *                              [--resource-group]
     *                              [--resource-group-filter]
     *                              [--subscription]
     * ```
     *
     * @param {string} amount Amount of a budget.
     * @param {string} budgetName Name of a budget.
     * @param {'cost' | 'usage'} category Category of the budget can be cost or usage.
     * @param {string} endDate End date (YYYY-MM-DD in UTC) of time period of a budget.
     * @param {string} startDate Start date (YYYY-MM-DD in UTC) of time period of a budget.
     * @param {'annually' | 'monthly' | 'quarterly'} timeGrain Time grain of the budget can be monthly, quarterly, or annually.
     */
    az_consumption_budget.create = function (amount, budgetName, category, endDate, startDate, timeGrain) {
        return new az_consumption_budget_create_command_builder("az consumption budget create", 'az_consumption_budget_create_command_result', amount, budgetName, category, endDate, startDate, timeGrain);
    };
    /**
     * Delete a budget for an Azure subscription.
     *
     * Syntax:
     * ```
     * az consumption budget delete --budget-name
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} budgetName Name of a budget.
     */
    az_consumption_budget["delete"] = function (budgetName) {
        return new az_consumption_budget_delete_command_builder("az consumption budget delete", 'az_consumption_budget_delete_command_result', budgetName);
    };
    /**
     * List budgets for an Azure subscription.
     *
     * Syntax:
     * ```
     * az consumption budget list [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_consumption_budget.list = function () {
        return new az_consumption_budget_list_command_builder("az consumption budget list", 'az_consumption_budget_list_command_result');
    };
    /**
     * Show budget for an Azure subscription.
     *
     * Syntax:
     * ```
     * az consumption budget show --budget-name
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     *
     * @param {string} budgetName Name of a budget.
     */
    az_consumption_budget.show = function (budgetName) {
        return new az_consumption_budget_show_command_builder("az consumption budget show", 'az_consumption_budget_show_command_result', budgetName);
    };
    return az_consumption_budget;
}());
exports.az_consumption_budget = az_consumption_budget;
/** Inspect the marketplace usage data of an Azure subscription within a billing period. */
var az_consumption_marketplace = /** @class */ (function () {
    function az_consumption_marketplace() {
    }
    /**
     * List the marketplace for an Azure subscription within a billing period.
     *
     * Syntax:
     * ```
     * az consumption marketplace list [--billing-period-name]
     *                                 [--end-date]
     *                                 [--query-examples]
     *                                 [--start-date]
     *                                 [--subscription]
     *                                 [--top]
     * ```
     */
    az_consumption_marketplace.list = function () {
        return new az_consumption_marketplace_list_command_builder("az consumption marketplace list", 'az_consumption_marketplace_list_command_result');
    };
    return az_consumption_marketplace;
}());
exports.az_consumption_marketplace = az_consumption_marketplace;
/** Inspect the price sheet of an Azure subscription within a billing period. */
var az_consumption_pricesheet = /** @class */ (function () {
    function az_consumption_pricesheet() {
    }
    /**
     * Show the price sheet for an Azure subscription within a billing period.
     *
     * Syntax:
     * ```
     * az consumption pricesheet show [--billing-period-name]
     *                                [--include-meter-details]
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     */
    az_consumption_pricesheet.show = function () {
        return new az_consumption_pricesheet_show_command_builder("az consumption pricesheet show", 'az_consumption_pricesheet_show_command_result');
    };
    return az_consumption_pricesheet;
}());
exports.az_consumption_pricesheet = az_consumption_pricesheet;
/** List reservation details. */
var az_consumption_reservation_detail = /** @class */ (function () {
    function az_consumption_reservation_detail() {
    }
    /**
     * List the details of a reservation by order id or reservation id.
     *
     * Syntax:
     * ```
     * az consumption reservation detail list --end-date
     *                                        --reservation-order-id
     *                                        --start-date
     *                                        [--query-examples]
     *                                        [--reservation-id]
     *                                        [--subscription]
     * ```
     *
     * @param {string} endDate End date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --start-date.
     * @param {string} reservationOrderId Reservation order id.
     * @param {string} startDate Start date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --end-date.
     */
    az_consumption_reservation_detail.list = function (endDate, reservationOrderId, startDate) {
        return new az_consumption_reservation_detail_list_command_builder("az consumption reservation detail list", 'az_consumption_reservation_detail_list_command_result', endDate, reservationOrderId, startDate);
    };
    return az_consumption_reservation_detail;
}());
exports.az_consumption_reservation_detail = az_consumption_reservation_detail;
/** List reservation summaries. */
var az_consumption_reservation_summary = /** @class */ (function () {
    function az_consumption_reservation_summary() {
    }
    /**
     * List reservation summaries for daily or monthly by order Id or reservation id.
     *
     * Syntax:
     * ```
     * az consumption reservation summary list --grain
     *                                         --reservation-order-id
     *                                         [--end-date]
     *                                         [--query-examples]
     *                                         [--reservation-id]
     *                                         [--start-date]
     *                                         [--subscription]
     * ```
     *
     * @param {string} grain Reservation summary grain. Possible values are daily or monthly.
     * @param {string} reservationOrderId Reservation order id.
     */
    az_consumption_reservation_summary.list = function (grain, reservationOrderId) {
        return new az_consumption_reservation_summary_list_command_builder("az consumption reservation summary list", 'az_consumption_reservation_summary_list_command_result', grain, reservationOrderId);
    };
    return az_consumption_reservation_summary;
}());
exports.az_consumption_reservation_summary = az_consumption_reservation_summary;
/** Manage reservations for Azure resources. */
var az_consumption_reservation = /** @class */ (function () {
    function az_consumption_reservation() {
    }
    return az_consumption_reservation;
}());
exports.az_consumption_reservation = az_consumption_reservation;
/** Inspect the usage of Azure resources. */
var az_consumption_usage = /** @class */ (function () {
    function az_consumption_usage() {
    }
    /**
     * List the details of Azure resource consumption, either as an invoice or within a billing period.
     *
     * Syntax:
     * ```
     * az consumption usage list [--billing-period-name]
     *                           [--end-date]
     *                           [--include-additional-properties]
     *                           [--include-meter-details]
     *                           [--query-examples]
     *                           [--start-date]
     *                           [--subscription]
     *                           [--top]
     * ```
     */
    az_consumption_usage.list = function () {
        return new az_consumption_usage_list_command_builder("az consumption usage list", 'az_consumption_usage_list_command_result');
    };
    return az_consumption_usage;
}());
exports.az_consumption_usage = az_consumption_usage;
/** Manage consumption of Azure resources. */
var az_consumption = /** @class */ (function () {
    function az_consumption() {
    }
    return az_consumption;
}());
exports.az_consumption = az_consumption;
/**
 * Create a budget for an Azure subscription.
 *
 * Syntax:
 * ```
 * az consumption budget create --amount
 *                              --budget-name
 *                              --category {cost, usage}
 *                              --end-date
 *                              --start-date
 *                              --time-grain {annually, monthly, quarterly}
 *                              [--meter-filter]
 *                              [--resource-filter]
 *                              [--resource-group]
 *                              [--resource-group-filter]
 *                              [--subscription]
 * ```
 *
 * @param {string} amount Amount of a budget.
 * @param {string} budgetName Name of a budget.
 * @param {'cost' | 'usage'} category Category of the budget can be cost or usage.
 * @param {string} endDate End date (YYYY-MM-DD in UTC) of time period of a budget.
 * @param {string} startDate Start date (YYYY-MM-DD in UTC) of time period of a budget.
 * @param {'annually' | 'monthly' | 'quarterly'} timeGrain Time grain of the budget can be monthly, quarterly, or annually.
 */
var az_consumption_budget_create_command_builder = /** @class */ (function (_super) {
    __extends(az_consumption_budget_create_command_builder, _super);
    function az_consumption_budget_create_command_builder(commandPath, resultDataTypeName, amount, budgetName, category, endDate, startDate, timeGrain) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.amount(amount);
        _this.budgetName(budgetName);
        _this.category(category);
        _this.endDate(endDate);
        _this.startDate(startDate);
        _this.timeGrain(timeGrain);
        return _this;
    }
    /** Amount of a budget. */
    az_consumption_budget_create_command_builder.prototype.amount = function (value) {
        this.setFlag("--amount", value);
        return this;
    };
    /** Name of a budget. */
    az_consumption_budget_create_command_builder.prototype.budgetName = function (value) {
        this.setFlag("--budget-name", value);
        return this;
    };
    /** Category of the budget can be cost or usage. */
    az_consumption_budget_create_command_builder.prototype.category = function (value) {
        this.setFlag("--category", value);
        return this;
    };
    /** End date (YYYY-MM-DD in UTC) of time period of a budget. */
    az_consumption_budget_create_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** Start date (YYYY-MM-DD in UTC) of time period of a budget. */
    az_consumption_budget_create_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Time grain of the budget can be monthly, quarterly, or annually. */
    az_consumption_budget_create_command_builder.prototype.timeGrain = function (value) {
        this.setFlag("--time-grain", value);
        return this;
    };
    /** Space-separated list of meters to filter on. Required if category is usage. */
    az_consumption_budget_create_command_builder.prototype.meterFilter = function (value) {
        this.setFlag("--meter-filter", value);
        return this;
    };
    /** Space-separated list of resource instances to filter on. */
    az_consumption_budget_create_command_builder.prototype.resourceFilter = function (value) {
        this.setFlag("--resource-filter", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_consumption_budget_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of resource groups to filter on. */
    az_consumption_budget_create_command_builder.prototype.resourceGroupFilter = function (value) {
        this.setFlag("--resource-group-filter", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_consumption_budget_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_consumption_budget_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a budget for an Azure subscription.
 *
 * Syntax:
 * ```
 * az consumption budget delete --budget-name
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} budgetName Name of a budget.
 */
var az_consumption_budget_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_consumption_budget_delete_command_builder, _super);
    function az_consumption_budget_delete_command_builder(commandPath, resultDataTypeName, budgetName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.budgetName(budgetName);
        return _this;
    }
    /** Name of a budget. */
    az_consumption_budget_delete_command_builder.prototype.budgetName = function (value) {
        this.setFlag("--budget-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_consumption_budget_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_consumption_budget_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_consumption_budget_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List budgets for an Azure subscription.
 *
 * Syntax:
 * ```
 * az consumption budget list [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_consumption_budget_list_command_builder = /** @class */ (function (_super) {
    __extends(az_consumption_budget_list_command_builder, _super);
    function az_consumption_budget_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_consumption_budget_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_consumption_budget_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_consumption_budget_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_consumption_budget_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show budget for an Azure subscription.
 *
 * Syntax:
 * ```
 * az consumption budget show --budget-name
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 *
 * @param {string} budgetName Name of a budget.
 */
var az_consumption_budget_show_command_builder = /** @class */ (function (_super) {
    __extends(az_consumption_budget_show_command_builder, _super);
    function az_consumption_budget_show_command_builder(commandPath, resultDataTypeName, budgetName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.budgetName(budgetName);
        return _this;
    }
    /** Name of a budget. */
    az_consumption_budget_show_command_builder.prototype.budgetName = function (value) {
        this.setFlag("--budget-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_consumption_budget_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_consumption_budget_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_consumption_budget_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_consumption_budget_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the marketplace for an Azure subscription within a billing period.
 *
 * Syntax:
 * ```
 * az consumption marketplace list [--billing-period-name]
 *                                 [--end-date]
 *                                 [--query-examples]
 *                                 [--start-date]
 *                                 [--subscription]
 *                                 [--top]
 * ```
 */
var az_consumption_marketplace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_consumption_marketplace_list_command_builder, _super);
    function az_consumption_marketplace_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the billing period to get the marketplace. */
    az_consumption_marketplace_list_command_builder.prototype.billingPeriodName = function (value) {
        this.setFlag("--billing-period-name", value);
        return this;
    };
    /** End date (YYYY-MM-DD in UTC). If specified, also requires --start-date. */
    az_consumption_marketplace_list_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_consumption_marketplace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Start date (YYYY-MM-DD in UTC). If specified, also requires --end-date. */
    az_consumption_marketplace_list_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_consumption_marketplace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. Value range: 1-1000. */
    az_consumption_marketplace_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_consumption_marketplace_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the price sheet for an Azure subscription within a billing period.
 *
 * Syntax:
 * ```
 * az consumption pricesheet show [--billing-period-name]
 *                                [--include-meter-details]
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 */
var az_consumption_pricesheet_show_command_builder = /** @class */ (function (_super) {
    __extends(az_consumption_pricesheet_show_command_builder, _super);
    function az_consumption_pricesheet_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the billing period to get the price sheet. */
    az_consumption_pricesheet_show_command_builder.prototype.billingPeriodName = function (value) {
        this.setFlag("--billing-period-name", value);
        return this;
    };
    /** Include meter details in the price sheet. */
    az_consumption_pricesheet_show_command_builder.prototype.includeMeterDetails = function (value) {
        this.setFlag("--include-meter-details", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_consumption_pricesheet_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_consumption_pricesheet_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_consumption_pricesheet_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the details of a reservation by order id or reservation id.
 *
 * Syntax:
 * ```
 * az consumption reservation detail list --end-date
 *                                        --reservation-order-id
 *                                        --start-date
 *                                        [--query-examples]
 *                                        [--reservation-id]
 *                                        [--subscription]
 * ```
 *
 * @param {string} endDate End date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --start-date.
 * @param {string} reservationOrderId Reservation order id.
 * @param {string} startDate Start date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --end-date.
 */
var az_consumption_reservation_detail_list_command_builder = /** @class */ (function (_super) {
    __extends(az_consumption_reservation_detail_list_command_builder, _super);
    function az_consumption_reservation_detail_list_command_builder(commandPath, resultDataTypeName, endDate, reservationOrderId, startDate) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endDate(endDate);
        _this.reservationOrderId(reservationOrderId);
        _this.startDate(startDate);
        return _this;
    }
    /** End date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --start-date. */
    az_consumption_reservation_detail_list_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** Reservation order id. */
    az_consumption_reservation_detail_list_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** Start date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --end-date. */
    az_consumption_reservation_detail_list_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_consumption_reservation_detail_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Reservation id. */
    az_consumption_reservation_detail_list_command_builder.prototype.reservationId = function (value) {
        this.setFlag("--reservation-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_consumption_reservation_detail_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_consumption_reservation_detail_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List reservation summaries for daily or monthly by order Id or reservation id.
 *
 * Syntax:
 * ```
 * az consumption reservation summary list --grain
 *                                         --reservation-order-id
 *                                         [--end-date]
 *                                         [--query-examples]
 *                                         [--reservation-id]
 *                                         [--start-date]
 *                                         [--subscription]
 * ```
 *
 * @param {string} grain Reservation summary grain. Possible values are daily or monthly.
 * @param {string} reservationOrderId Reservation order id.
 */
var az_consumption_reservation_summary_list_command_builder = /** @class */ (function (_super) {
    __extends(az_consumption_reservation_summary_list_command_builder, _super);
    function az_consumption_reservation_summary_list_command_builder(commandPath, resultDataTypeName, grain, reservationOrderId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.grain(grain);
        _this.reservationOrderId(reservationOrderId);
        return _this;
    }
    /** Reservation summary grain. Possible values are daily or monthly. */
    az_consumption_reservation_summary_list_command_builder.prototype.grain = function (value) {
        this.setFlag("--grain", value);
        return this;
    };
    /** Reservation order id. */
    az_consumption_reservation_summary_list_command_builder.prototype.reservationOrderId = function (value) {
        this.setFlag("--reservation-order-id", value);
        return this;
    };
    /** End date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --start-date. */
    az_consumption_reservation_summary_list_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_consumption_reservation_summary_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Reservation id. */
    az_consumption_reservation_summary_list_command_builder.prototype.reservationId = function (value) {
        this.setFlag("--reservation-id", value);
        return this;
    };
    /** Start date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --end-date. */
    az_consumption_reservation_summary_list_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_consumption_reservation_summary_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_consumption_reservation_summary_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the details of Azure resource consumption, either as an invoice or within a billing period.
 *
 * Syntax:
 * ```
 * az consumption usage list [--billing-period-name]
 *                           [--end-date]
 *                           [--include-additional-properties]
 *                           [--include-meter-details]
 *                           [--query-examples]
 *                           [--start-date]
 *                           [--subscription]
 *                           [--top]
 * ```
 */
var az_consumption_usage_list_command_builder = /** @class */ (function (_super) {
    __extends(az_consumption_usage_list_command_builder, _super);
    function az_consumption_usage_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the billing period to get the usage details that associate with. */
    az_consumption_usage_list_command_builder.prototype.billingPeriodName = function (value) {
        this.setFlag("--billing-period-name", value);
        return this;
    };
    /** End date (YYYY-MM-DD in UTC). If specified, also requires --start-date. */
    az_consumption_usage_list_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** Include additional properties in the usages. */
    az_consumption_usage_list_command_builder.prototype.includeAdditionalProperties = function (value) {
        this.setFlag("--include-additional-properties", value);
        return this;
    };
    /** Include meter details in the usages. */
    az_consumption_usage_list_command_builder.prototype.includeMeterDetails = function (value) {
        this.setFlag("--include-meter-details", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_consumption_usage_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Start date (YYYY-MM-DD in UTC). If specified, also requires --end-date. */
    az_consumption_usage_list_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_consumption_usage_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. Value range: 1-1000. */
    az_consumption_usage_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_consumption_usage_list_command_builder;
}(base_1.CommandBuilder));
