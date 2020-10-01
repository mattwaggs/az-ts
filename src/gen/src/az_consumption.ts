import { CommandBuilder } from '../base';
import { az_consumption_budget_create_command_result } from './models/az_consumption_budget_create_command_result'
import { az_consumption_budget_delete_command_result } from './models/az_consumption_budget_delete_command_result'
import { az_consumption_budget_list_command_result } from './models/az_consumption_budget_list_command_result'
import { az_consumption_budget_show_command_result } from './models/az_consumption_budget_show_command_result'
import { az_consumption_marketplace_list_command_result } from './models/az_consumption_marketplace_list_command_result'
import { az_consumption_pricesheet_show_command_result } from './models/az_consumption_pricesheet_show_command_result'
import { az_consumption_reservation_detail_list_command_result } from './models/az_consumption_reservation_detail_list_command_result'
import { az_consumption_reservation_summary_list_command_result } from './models/az_consumption_reservation_summary_list_command_result'
import { az_consumption_usage_list_command_result } from './models/az_consumption_usage_list_command_result'

/** Manage budgets for an Azure subscription. */
export class az_consumption_budget {
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
    static create(amount: string, budgetName: string, category: 'cost' | 'usage', endDate: string, startDate: string, timeGrain: 'annually' | 'monthly' | 'quarterly'): az_consumption_budget_create_command_builder {
        return new az_consumption_budget_create_command_builder("az consumption budget create", 'az_consumption_budget_create_command_result', amount, budgetName, category, endDate, startDate, timeGrain);
    }

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
    static delete(budgetName: string): az_consumption_budget_delete_command_builder {
        return new az_consumption_budget_delete_command_builder("az consumption budget delete", 'az_consumption_budget_delete_command_result', budgetName);
    }

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
    static list(): az_consumption_budget_list_command_builder {
        return new az_consumption_budget_list_command_builder("az consumption budget list", 'az_consumption_budget_list_command_result');
    }

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
    static show(budgetName: string): az_consumption_budget_show_command_builder {
        return new az_consumption_budget_show_command_builder("az consumption budget show", 'az_consumption_budget_show_command_result', budgetName);
    }
}

/** Inspect the marketplace usage data of an Azure subscription within a billing period. */
export class az_consumption_marketplace {
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
    static list(): az_consumption_marketplace_list_command_builder {
        return new az_consumption_marketplace_list_command_builder("az consumption marketplace list", 'az_consumption_marketplace_list_command_result');
    }
}

/** Inspect the price sheet of an Azure subscription within a billing period. */
export class az_consumption_pricesheet {
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
    static show(): az_consumption_pricesheet_show_command_builder {
        return new az_consumption_pricesheet_show_command_builder("az consumption pricesheet show", 'az_consumption_pricesheet_show_command_result');
    }
}

/** List reservation details. */
export class az_consumption_reservation_detail {
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
    static list(endDate: string, reservationOrderId: string, startDate: string): az_consumption_reservation_detail_list_command_builder {
        return new az_consumption_reservation_detail_list_command_builder("az consumption reservation detail list", 'az_consumption_reservation_detail_list_command_result', endDate, reservationOrderId, startDate);
    }
}

/** List reservation summaries. */
export class az_consumption_reservation_summary {
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
    static list(grain: string, reservationOrderId: string): az_consumption_reservation_summary_list_command_builder {
        return new az_consumption_reservation_summary_list_command_builder("az consumption reservation summary list", 'az_consumption_reservation_summary_list_command_result', grain, reservationOrderId);
    }
}

/** Manage reservations for Azure resources. */
export class az_consumption_reservation {
}

/** Inspect the usage of Azure resources. */
export class az_consumption_usage {
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
    static list(): az_consumption_usage_list_command_builder {
        return new az_consumption_usage_list_command_builder("az consumption usage list", 'az_consumption_usage_list_command_result');
    }
}

/** Manage consumption of Azure resources. */
export class az_consumption {
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
class az_consumption_budget_create_command_builder extends CommandBuilder<az_consumption_budget_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, amount: string, budgetName: string, category: 'cost' | 'usage', endDate: string, startDate: string, timeGrain: 'annually' | 'monthly' | 'quarterly') {
        super(commandPath, resultDataTypeName);
        this.amount(amount)
        this.budgetName(budgetName)
        this.category(category)
        this.endDate(endDate)
        this.startDate(startDate)
        this.timeGrain(timeGrain)
    }

    /** Amount of a budget. */
    amount(value: string): az_consumption_budget_create_command_builder {
        this.setFlag("--amount", value);
        return this;
    }

    /** Name of a budget. */
    budgetName(value: string): az_consumption_budget_create_command_builder {
        this.setFlag("--budget-name", value);
        return this;
    }

    /** Category of the budget can be cost or usage. */
    category(value: 'cost' | 'usage'): az_consumption_budget_create_command_builder {
        this.setFlag("--category", value);
        return this;
    }

    /** End date (YYYY-MM-DD in UTC) of time period of a budget. */
    endDate(value: string): az_consumption_budget_create_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** Start date (YYYY-MM-DD in UTC) of time period of a budget. */
    startDate(value: string): az_consumption_budget_create_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }

    /** Time grain of the budget can be monthly, quarterly, or annually. */
    timeGrain(value: 'annually' | 'monthly' | 'quarterly'): az_consumption_budget_create_command_builder {
        this.setFlag("--time-grain", value);
        return this;
    }

    /** Space-separated list of meters to filter on. Required if category is usage. */
    meterFilter(value: string): az_consumption_budget_create_command_builder {
        this.setFlag("--meter-filter", value);
        return this;
    }

    /** Space-separated list of resource instances to filter on. */
    resourceFilter(value: string): az_consumption_budget_create_command_builder {
        this.setFlag("--resource-filter", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_consumption_budget_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of resource groups to filter on. */
    resourceGroupFilter(value: string): az_consumption_budget_create_command_builder {
        this.setFlag("--resource-group-filter", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_consumption_budget_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_consumption_budget_delete_command_builder extends CommandBuilder<az_consumption_budget_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, budgetName: string) {
        super(commandPath, resultDataTypeName);
        this.budgetName(budgetName)
    }

    /** Name of a budget. */
    budgetName(value: string): az_consumption_budget_delete_command_builder {
        this.setFlag("--budget-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_consumption_budget_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_consumption_budget_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_consumption_budget_list_command_builder extends CommandBuilder<az_consumption_budget_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_consumption_budget_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_consumption_budget_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_consumption_budget_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_consumption_budget_show_command_builder extends CommandBuilder<az_consumption_budget_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, budgetName: string) {
        super(commandPath, resultDataTypeName);
        this.budgetName(budgetName)
    }

    /** Name of a budget. */
    budgetName(value: string): az_consumption_budget_show_command_builder {
        this.setFlag("--budget-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_consumption_budget_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_consumption_budget_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_consumption_budget_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_consumption_marketplace_list_command_builder extends CommandBuilder<az_consumption_marketplace_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Name of the billing period to get the marketplace. */
    billingPeriodName(value: string): az_consumption_marketplace_list_command_builder {
        this.setFlag("--billing-period-name", value);
        return this;
    }

    /** End date (YYYY-MM-DD in UTC). If specified, also requires --start-date. */
    endDate(value: string): az_consumption_marketplace_list_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_consumption_marketplace_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Start date (YYYY-MM-DD in UTC). If specified, also requires --end-date. */
    startDate(value: string): az_consumption_marketplace_list_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_consumption_marketplace_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. Value range: 1-1000. */
    top(value: string): az_consumption_marketplace_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_consumption_pricesheet_show_command_builder extends CommandBuilder<az_consumption_pricesheet_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Name of the billing period to get the price sheet. */
    billingPeriodName(value: string): az_consumption_pricesheet_show_command_builder {
        this.setFlag("--billing-period-name", value);
        return this;
    }

    /** Include meter details in the price sheet. */
    includeMeterDetails(value: string): az_consumption_pricesheet_show_command_builder {
        this.setFlag("--include-meter-details", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_consumption_pricesheet_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_consumption_pricesheet_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_consumption_reservation_detail_list_command_builder extends CommandBuilder<az_consumption_reservation_detail_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, endDate: string, reservationOrderId: string, startDate: string) {
        super(commandPath, resultDataTypeName);
        this.endDate(endDate)
        this.reservationOrderId(reservationOrderId)
        this.startDate(startDate)
    }

    /** End date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --start-date. */
    endDate(value: string): az_consumption_reservation_detail_list_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** Reservation order id. */
    reservationOrderId(value: string): az_consumption_reservation_detail_list_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** Start date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --end-date. */
    startDate(value: string): az_consumption_reservation_detail_list_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_consumption_reservation_detail_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Reservation id. */
    reservationId(value: string): az_consumption_reservation_detail_list_command_builder {
        this.setFlag("--reservation-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_consumption_reservation_detail_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_consumption_reservation_summary_list_command_builder extends CommandBuilder<az_consumption_reservation_summary_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, grain: string, reservationOrderId: string) {
        super(commandPath, resultDataTypeName);
        this.grain(grain)
        this.reservationOrderId(reservationOrderId)
    }

    /** Reservation summary grain. Possible values are daily or monthly. */
    grain(value: string): az_consumption_reservation_summary_list_command_builder {
        this.setFlag("--grain", value);
        return this;
    }

    /** Reservation order id. */
    reservationOrderId(value: string): az_consumption_reservation_summary_list_command_builder {
        this.setFlag("--reservation-order-id", value);
        return this;
    }

    /** End date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --start-date. */
    endDate(value: string): az_consumption_reservation_summary_list_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_consumption_reservation_summary_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Reservation id. */
    reservationId(value: string): az_consumption_reservation_summary_list_command_builder {
        this.setFlag("--reservation-id", value);
        return this;
    }

    /** Start date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --end-date. */
    startDate(value: string): az_consumption_reservation_summary_list_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_consumption_reservation_summary_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_consumption_usage_list_command_builder extends CommandBuilder<az_consumption_usage_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Name of the billing period to get the usage details that associate with. */
    billingPeriodName(value: string): az_consumption_usage_list_command_builder {
        this.setFlag("--billing-period-name", value);
        return this;
    }

    /** End date (YYYY-MM-DD in UTC). If specified, also requires --start-date. */
    endDate(value: string): az_consumption_usage_list_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** Include additional properties in the usages. */
    includeAdditionalProperties(value: string): az_consumption_usage_list_command_builder {
        this.setFlag("--include-additional-properties", value);
        return this;
    }

    /** Include meter details in the usages. */
    includeMeterDetails(value: string): az_consumption_usage_list_command_builder {
        this.setFlag("--include-meter-details", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_consumption_usage_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Start date (YYYY-MM-DD in UTC). If specified, also requires --end-date. */
    startDate(value: string): az_consumption_usage_list_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_consumption_usage_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. Value range: 1-1000. */
    top(value: string): az_consumption_usage_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}
