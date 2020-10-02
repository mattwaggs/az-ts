import { CommandBuilder } from '../base';
import { az_billing_enrollment_account_list_command_result } from './models/az_billing_enrollment_account_list_command_result';
import { az_billing_enrollment_account_show_command_result } from './models/az_billing_enrollment_account_show_command_result';
import { az_billing_invoice_list_command_result } from './models/az_billing_invoice_list_command_result';
import { az_billing_invoice_show_command_result } from './models/az_billing_invoice_show_command_result';
import { az_billing_period_list_command_result } from './models/az_billing_period_list_command_result';
import { az_billing_period_show_command_result } from './models/az_billing_period_show_command_result';
/** Get enrollment accounts. */
export declare class az_billing_enrollment_account {
    /**
     * Lists the enrollment accounts the caller has access to.
     *
     * Syntax:
     * ```
     * az billing enrollment-account list [--query-examples]
     *                                    [--subscription]
     * ```
     */
    static list(): az_billing_enrollment_account_list_command_builder;
    /**
     * Gets a enrollment account by name.
     *
     * Syntax:
     * ```
     * az billing enrollment-account show --name
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the enrollment account.
     */
    static show(name: string): az_billing_enrollment_account_show_command_builder;
}
/** Get billing invoices for a subscription. */
export declare class az_billing_invoice {
    /**
     * List all available invoices of the subscription.
     *
     * Syntax:
     * ```
     * az billing invoice list [--generate-download-url]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     */
    static list(): az_billing_invoice_list_command_builder;
    /**
     * Retrieve invoice of specific name of the subscription.
     *
     * Syntax:
     * ```
     * az billing invoice show [--name]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     */
    static show(): az_billing_invoice_show_command_builder;
}
/** Get billing periods for a subscription. */
export declare class az_billing_period {
    /**
     * Lists the available billing periods for a subscription in reverse chronological order.
     *
     * Syntax:
     * ```
     * az billing period list [--filter]
     *                        [--query-examples]
     *                        [--skiptoken]
     *                        [--subscription]
     *                        [--top]
     * ```
     */
    static list(): az_billing_period_list_command_builder;
    /**
     * Gets a named billing period.
     *
     * Syntax:
     * ```
     * az billing period show --name
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} name Name of the billing period.
     */
    static show(name: string): az_billing_period_show_command_builder;
}
/** Manage Azure Billing. */
export declare class az_billing {
}
/**
 * Lists the enrollment accounts the caller has access to.
 *
 * Syntax:
 * ```
 * az billing enrollment-account list [--query-examples]
 *                                    [--subscription]
 * ```
 */
declare class az_billing_enrollment_account_list_command_builder extends CommandBuilder<az_billing_enrollment_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_enrollment_account_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_enrollment_account_list_command_builder;
}
/**
 * Gets a enrollment account by name.
 *
 * Syntax:
 * ```
 * az billing enrollment-account show --name
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the enrollment account.
 */
declare class az_billing_enrollment_account_show_command_builder extends CommandBuilder<az_billing_enrollment_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the enrollment account. */
    name(value: string): az_billing_enrollment_account_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_enrollment_account_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_enrollment_account_show_command_builder;
}
/**
 * List all available invoices of the subscription.
 *
 * Syntax:
 * ```
 * az billing invoice list [--generate-download-url]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 */
declare class az_billing_invoice_list_command_builder extends CommandBuilder<az_billing_invoice_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Generate download url of the invoice. */
    generateDownloadUrl(value: string): az_billing_invoice_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_invoice_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_list_command_builder;
}
/**
 * Retrieve invoice of specific name of the subscription.
 *
 * Syntax:
 * ```
 * az billing invoice show [--name]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 */
declare class az_billing_invoice_show_command_builder extends CommandBuilder<az_billing_invoice_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the invoice. */
    name(value: string): az_billing_invoice_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_invoice_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_show_command_builder;
}
/**
 * Lists the available billing periods for a subscription in reverse chronological order.
 *
 * Syntax:
 * ```
 * az billing period list [--filter]
 *                        [--query-examples]
 *                        [--skiptoken]
 *                        [--subscription]
 *                        [--top]
 * ```
 */
declare class az_billing_period_list_command_builder extends CommandBuilder<az_billing_period_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** May be used to filter billing periods by billingPeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. */
    filter(value: string): az_billing_period_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_period_list_command_builder;
    /** Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. */
    skiptoken(value: string): az_billing_period_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_period_list_command_builder;
    /** May be used to limit the number of results to the most recent N billing periods. */
    top(value: string): az_billing_period_list_command_builder;
}
/**
 * Gets a named billing period.
 *
 * Syntax:
 * ```
 * az billing period show --name
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} name Name of the billing period.
 */
declare class az_billing_period_show_command_builder extends CommandBuilder<az_billing_period_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the billing period. */
    name(value: string): az_billing_period_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_period_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_period_show_command_builder;
}
export {};
