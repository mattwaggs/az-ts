import { CommandBuilder } from '../base';
import { az_billing_account_list_command_result } from './models/az_billing_account_list_command_result';
import { az_billing_account_show_command_result } from './models/az_billing_account_show_command_result';
import { az_billing_account_update_command_result } from './models/az_billing_account_update_command_result';
import { az_billing_account_wait_command_result } from './models/az_billing_account_wait_command_result';
import { az_billing_agreement_list_command_result } from './models/az_billing_agreement_list_command_result';
import { az_billing_agreement_show_command_result } from './models/az_billing_agreement_show_command_result';
import { az_billing_balance_show_command_result } from './models/az_billing_balance_show_command_result';
import { az_billing_customer_list_command_result } from './models/az_billing_customer_list_command_result';
import { az_billing_customer_show_command_result } from './models/az_billing_customer_show_command_result';
import { az_billing_enrollment_account_list_command_result } from './models/az_billing_enrollment_account_list_command_result';
import { az_billing_enrollment_account_show_command_result } from './models/az_billing_enrollment_account_show_command_result';
import { az_billing_instruction_create_command_result } from './models/az_billing_instruction_create_command_result';
import { az_billing_instruction_list_command_result } from './models/az_billing_instruction_list_command_result';
import { az_billing_instruction_show_command_result } from './models/az_billing_instruction_show_command_result';
import { az_billing_instruction_update_command_result } from './models/az_billing_instruction_update_command_result';
import { az_billing_invoice_section_create_command_result } from './models/az_billing_invoice_section_create_command_result';
import { az_billing_invoice_section_list_command_result } from './models/az_billing_invoice_section_list_command_result';
import { az_billing_invoice_section_show_command_result } from './models/az_billing_invoice_section_show_command_result';
import { az_billing_invoice_section_update_command_result } from './models/az_billing_invoice_section_update_command_result';
import { az_billing_invoice_section_wait_command_result } from './models/az_billing_invoice_section_wait_command_result';
import { az_billing_invoice_download_command_result } from './models/az_billing_invoice_download_command_result';
import { az_billing_invoice_list_command_result } from './models/az_billing_invoice_list_command_result';
import { az_billing_invoice_show_command_result } from './models/az_billing_invoice_show_command_result';
import { az_billing_period_list_command_result } from './models/az_billing_period_list_command_result';
import { az_billing_period_show_command_result } from './models/az_billing_period_show_command_result';
import { az_billing_permission_list_command_result } from './models/az_billing_permission_list_command_result';
import { az_billing_policy_show_command_result } from './models/az_billing_policy_show_command_result';
import { az_billing_policy_update_command_result } from './models/az_billing_policy_update_command_result';
import { az_billing_product_list_command_result } from './models/az_billing_product_list_command_result';
import { az_billing_product_move_command_result } from './models/az_billing_product_move_command_result';
import { az_billing_product_show_command_result } from './models/az_billing_product_show_command_result';
import { az_billing_product_update_command_result } from './models/az_billing_product_update_command_result';
import { az_billing_product_validate_move_command_result } from './models/az_billing_product_validate_move_command_result';
import { az_billing_profile_create_command_result } from './models/az_billing_profile_create_command_result';
import { az_billing_profile_list_command_result } from './models/az_billing_profile_list_command_result';
import { az_billing_profile_show_command_result } from './models/az_billing_profile_show_command_result';
import { az_billing_profile_update_command_result } from './models/az_billing_profile_update_command_result';
import { az_billing_profile_wait_command_result } from './models/az_billing_profile_wait_command_result';
import { az_billing_property_show_command_result } from './models/az_billing_property_show_command_result';
import { az_billing_property_update_command_result } from './models/az_billing_property_update_command_result';
import { az_billing_role_assignment_delete_command_result } from './models/az_billing_role_assignment_delete_command_result';
import { az_billing_role_assignment_list_command_result } from './models/az_billing_role_assignment_list_command_result';
import { az_billing_role_assignment_show_command_result } from './models/az_billing_role_assignment_show_command_result';
import { az_billing_role_definition_list_command_result } from './models/az_billing_role_definition_list_command_result';
import { az_billing_role_definition_show_command_result } from './models/az_billing_role_definition_show_command_result';
import { az_billing_subscription_list_command_result } from './models/az_billing_subscription_list_command_result';
import { az_billing_subscription_move_command_result } from './models/az_billing_subscription_move_command_result';
import { az_billing_subscription_show_command_result } from './models/az_billing_subscription_show_command_result';
import { az_billing_subscription_update_command_result } from './models/az_billing_subscription_update_command_result';
import { az_billing_subscription_validate_move_command_result } from './models/az_billing_subscription_validate_move_command_result';
import { az_billing_subscription_wait_command_result } from './models/az_billing_subscription_wait_command_result';
import { az_billing_transaction_list_command_result } from './models/az_billing_transaction_list_command_result';
/** Billing account. */
export declare class az_billing_account {
    /**
     * List the billing accounts that a user has access to.
     *
     * Syntax:
     * ```
     * az billing account list [--expand]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     */
    static list(): az_billing_account_list_command_builder;
    /**
     * Get a billing account by its ID.
     *
     * Syntax:
     * ```
     * az billing account show --name
     *                         [--expand]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The ID that uniquely identifies a billing account.
     */
    static show(name: string): az_billing_account_show_command_builder;
    /**
     * Update the properties of a billing account. Currently, displayName and address can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing account update --name
     *                           [--billing-profiles-value]
     *                           [--departments]
     *                           [--display-name]
     *                           [--enrollment-accounts]
     *                           [--no-wait]
     *                           [--sold-to]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The ID that uniquely identifies a billing account.
     */
    static update(name: string): az_billing_account_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of the billing account is met.
     *
     * Syntax:
     * ```
     * az billing account wait --name
     *                         [--created]
     *                         [--custom]
     *                         [--deleted]
     *                         [--exists]
     *                         [--expand]
     *                         [--interval]
     *                         [--subscription]
     *                         [--timeout]
     *                         [--updated]
     * ```
     *
     * @param {string} name The ID that uniquely identifies a billing account.
     */
    static wait(name: string): az_billing_account_wait_command_builder;
}
/** Display billing agreement. */
export declare class az_billing_agreement {
    /**
     * List the agreements for a billing account.
     *
     * Syntax:
     * ```
     * az billing agreement list --account-name
     *                           [--expand]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static list(accountName: string): az_billing_agreement_list_command_builder;
    /**
     * Get an agreement by ID.
     *
     * Syntax:
     * ```
     * az billing agreement show --account-name
     *                           --name
     *                           [--expand]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name The ID that uniquely identifies an agreement.
     */
    static show(accountName: string, name: string): az_billing_agreement_show_command_builder;
}
/** Billing balance. */
export declare class az_billing_balance {
    /**
     * The available credit balance for a billing profile. This is the balance that can be used for pay now to settle due or past due invoices. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing balance show --account-name
     *                         --profile-name
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static show(accountName: string, profileName: string): az_billing_balance_show_command_builder;
}
/** Billing customer. */
export declare class az_billing_customer {
    /**
     * List the customers that are billed to a billing account. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
     *
     * Syntax:
     * ```
     * az billing customer list --account-name
     *                          [--filter]
     *                          [--profile-name]
     *                          [--query-examples]
     *                          [--search]
     *                          [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static list(accountName: string): az_billing_customer_list_command_builder;
    /**
     * Get a customer by its ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
     *
     * Syntax:
     * ```
     * az billing customer show --account-name
     *                          --customer-name
     *                          [--expand]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} customerName The ID that uniquely identifies a customer.
     */
    static show(accountName: string, customerName: string): az_billing_customer_show_command_builder;
}
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
/** Manage billing instruction. */
export declare class az_billing_instruction {
    /**
     * Create an instruction. These are custom billing instructions and are only applicable for certain customers.
     *
     * Syntax:
     * ```
     * az billing instruction create --account-name
     *                               --name
     *                               --profile-name
     *                               [--amount]
     *                               [--creation-date]
     *                               [--end-date]
     *                               [--start-date]
     *                               [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name Instruction Name.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static create(accountName: string, name: string, profileName: string): az_billing_instruction_create_command_builder;
    /**
     * List the instructions by billing profile id.
     *
     * Syntax:
     * ```
     * az billing instruction list --account-name
     *                             --profile-name
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static list(accountName: string, profileName: string): az_billing_instruction_list_command_builder;
    /**
     * Show the instruction by name. These are custom billing instructions and are only applicable for certain customers.
     *
     * Syntax:
     * ```
     * az billing instruction show --account-name
     *                             --name
     *                             --profile-name
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name Instruction Name.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static show(accountName: string, name: string, profileName: string): az_billing_instruction_show_command_builder;
    /**
     * Update an instruction. These are custom billing instructions and are only applicable for certain customers.
     *
     * Syntax:
     * ```
     * az billing instruction update --account-name
     *                               --name
     *                               --profile-name
     *                               [--add]
     *                               [--amount]
     *                               [--creation-date]
     *                               [--end-date]
     *                               [--force-string]
     *                               [--remove]
     *                               [--set]
     *                               [--start-date]
     *                               [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name Instruction Name.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static update(accountName: string, name: string, profileName: string): az_billing_instruction_update_command_builder;
}
/** Billing invoice section. */
export declare class az_billing_invoice_section {
    /**
     * Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing invoice section create --account-name
     *                                   --invoice-section-name
     *                                   --profile-name
     *                                   [--display-name]
     *                                   [--labels]
     *                                   [--no-wait]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} invoiceSectionName The ID that uniquely identifies an invoice section.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static create(accountName: string, invoiceSectionName: string, profileName: string): az_billing_invoice_section_create_command_builder;
    /**
     * List the invoice sections that a user has access to. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing invoice section list --account-name
     *                                 --profile-name
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static list(accountName: string, profileName: string): az_billing_invoice_section_list_command_builder;
    /**
     * Get an invoice section by its ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing invoice section show --account-name
     *                                 --invoice-section-name
     *                                 --profile-name
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} invoiceSectionName The ID that uniquely identifies an invoice section.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static show(accountName: string, invoiceSectionName: string, profileName: string): az_billing_invoice_section_show_command_builder;
    /**
     * Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing invoice section update --account-name
     *                                   --invoice-section-name
     *                                   --profile-name
     *                                   [--display-name]
     *                                   [--labels]
     *                                   [--no-wait]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} invoiceSectionName The ID that uniquely identifies an invoice section.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static update(accountName: string, invoiceSectionName: string, profileName: string): az_billing_invoice_section_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of the billing invoice section is met.
     *
     * Syntax:
     * ```
     * az billing invoice section wait --account-name
     *                                 --invoice-section-name
     *                                 --profile-name
     *                                 [--created]
     *                                 [--custom]
     *                                 [--deleted]
     *                                 [--exists]
     *                                 [--interval]
     *                                 [--subscription]
     *                                 [--timeout]
     *                                 [--updated]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} invoiceSectionName The ID that uniquely identifies an invoice section.
     * @param {string} profileName The ID that uniquely identifies a billing profile.
     */
    static wait(accountName: string, invoiceSectionName: string, profileName: string): az_billing_invoice_section_wait_command_builder;
}
/** Get billing invoices for a subscription. */
export declare class az_billing_invoice {
    /**
     * Get URL to download invoice.
     *
     * Syntax:
     * ```
     * az billing invoice download [--account-name]
     *                             [--download-token]
     *                             [--download-urls]
     *                             [--invoice-name]
     *                             [--subscription]
     * ```
     */
    static download(): az_billing_invoice_download_command_builder;
    /**
     * List the invoices for a subscription.
     *
     * Syntax:
     * ```
     * az billing invoice list --period-end-date
     *                         --period-start-date
     *                         [--account-name]
     *                         [--profile-name]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} periodEndDate The end date to fetch the invoices. The date should be specified in MM-DD-YYYY format.
     * @param {string} periodStartDate The start date to fetch the invoices. The date should be specified in MM-DD-YYYY format.
     */
    static list(periodEndDate: string, periodStartDate: string): az_billing_invoice_list_command_builder;
    /**
     * Get an invoice. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing invoice show --name
     *                         [--account-name]
     *                         [--by-subscription]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The ID that uniquely identifies an invoice.
     */
    static show(name: string): az_billing_invoice_show_command_builder;
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
/** List billing permissions. */
export declare class az_billing_permission {
    /**
     * List the billing permissions the caller has on a billing account.
     *
     * Syntax:
     * ```
     * az billing permission list --account-name
     *                            [--customer-name]
     *                            [--invoice-section-name]
     *                            [--profile-name]
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static list(accountName: string): az_billing_permission_list_command_builder;
}
/** Billing policy. */
export declare class az_billing_policy {
    /**
     * Show the policies for a customer or for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.".
     *
     * Syntax:
     * ```
     * az billing policy show --account-name
     *                        [--customer-name]
     *                        [--profile-name]
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static show(accountName: string): az_billing_policy_show_command_builder;
    /**
     * Update the policies for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing policy update --account-name
     *                          [--customer-name]
     *                          [--marketplace-purchases {AllAllowed, NotAllowed, OnlyFreeAllowed}]
     *                          [--profile-name]
     *                          [--reservation-purchases {Allowed, NotAllowed}]
     *                          [--subscription]
     *                          [--view-charges {Allowed, NotAllowed}]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static update(accountName: string): az_billing_policy_update_command_builder;
}
/** Billing product. */
export declare class az_billing_product {
    /**
     * List the products for a billing account. These don't include products billed based on usage. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
     *
     * Syntax:
     * ```
     * az billing product list --account-name
     *                         [--customer-name]
     *                         [--filter]
     *                         [--invoice-section-name]
     *                         [--profile-name]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static list(accountName: string): az_billing_product_list_command_builder;
    /**
     * Moves a product's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing product move --account-name
     *                         --name
     *                         [--destination-invoice-section-id]
     *                         [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} productName The ID that uniquely identifies a product.
     */
    static move(accountName: string, productName: string): az_billing_product_move_command_builder;
    /**
     * Get a product by ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing product show --account-name
     *                         --name
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} productName The ID that uniquely identifies a product.
     */
    static show(accountName: string, productName: string): az_billing_product_show_command_builder;
    /**
     * Update the properties of a Product. Currently, auto renew can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing product update --account-name
     *                           --name
     *                           [--auto-renew {Off, On}]
     *                           [--billing-frequency {Monthly, OneTime, UsageBased}]
     *                           [--status {Active, AutoRenew, Cancelled, Disabled, Expired, Expiring, Inactive, PastDue}]
     *                           [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} productName The ID that uniquely identifies a product.
     */
    static update(accountName: string, productName: string): az_billing_product_update_command_builder;
    /**
     * Validate if a product's charges can be moved to a new invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing product validate-move --account-name
     *                                  --name
     *                                  [--destination-invoice-section-id]
     *                                  [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} productName The ID that uniquely identifies a product.
     */
    static validate_move(accountName: string, productName: string): az_billing_product_validate_move_command_builder;
}
/** Manage billing profile of billing account. */
export declare class az_billing_profile {
    /**
     * Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
     *
     * Syntax:
     * ```
     * az billing profile create --account-name
     *                           --name
     *                           [--bill-to]
     *                           [--display-name]
     *                           [--enabled-azure-plans]
     *                           [--invoice-email-opt-in {false, true}]
     *                           [--invoice-sections-value]
     *                           [--no-wait]
     *                           [--po-number]
     *                           [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name The ID that uniquely identifies a billing profile.
     */
    static create(accountName: string, name: string): az_billing_profile_create_command_builder;
    /**
     * List the billing profiles that a user has access to. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
     *
     * Syntax:
     * ```
     * az billing profile list --account-name
     *                         [--expand]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static list(accountName: string): az_billing_profile_list_command_builder;
    /**
     * Get a billing profile by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
     *
     * Syntax:
     * ```
     * az billing profile show --account-name
     *                         --name
     *                         [--expand]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name The ID that uniquely identifies a billing profile.
     */
    static show(accountName: string, name: string): az_billing_profile_show_command_builder;
    /**
     * Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
     *
     * Syntax:
     * ```
     * az billing profile update --account-name
     *                           --name
     *                           [--bill-to]
     *                           [--display-name]
     *                           [--enabled-azure-plans]
     *                           [--invoice-email-opt-in {false, true}]
     *                           [--invoice-sections-value]
     *                           [--no-wait]
     *                           [--po-number]
     *                           [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name The ID that uniquely identifies a billing profile.
     */
    static update(accountName: string, name: string): az_billing_profile_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of the billing profile is met.
     *
     * Syntax:
     * ```
     * az billing profile wait --account-name
     *                         --name
     *                         [--created]
     *                         [--custom]
     *                         [--deleted]
     *                         [--exists]
     *                         [--expand]
     *                         [--interval]
     *                         [--subscription]
     *                         [--timeout]
     *                         [--updated]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name The ID that uniquely identifies a billing profile.
     */
    static wait(accountName: string, name: string): az_billing_profile_wait_command_builder;
}
/** Billing property. */
export declare class az_billing_property {
    /**
     * Get the billing properties for a subscription. This operation is not supported for billing accounts with agreement type Enterprise Agreement.
     *
     * Syntax:
     * ```
     * az billing property show [--query-examples]
     *                          [--subscription]
     * ```
     */
    static show(): az_billing_property_show_command_builder;
    /**
     * Update the billing property of a subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing property update [--cost-center]
     *                            [--subscription]
     * ```
     */
    static update(): az_billing_property_update_command_builder;
}
/** Billing role-assignment. */
export declare class az_billing_role_assignment {
    /**
     * Delete a role assignment for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing role-assignment delete --account-name
     *                                   --name
     *                                   [--invoice-section-name]
     *                                   [--profile-name]
     *                                   [--subscription]
     *                                   [--yes]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name The ID that uniquely identifies a role assignment.
     */
    static delete(accountName: string, name: string): az_billing_role_assignment_delete_command_builder;
    /**
     * List the role assignments for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing role-assignment list --account-name
     *                                 [--invoice-section-name]
     *                                 [--profile-name]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static list(accountName: string): az_billing_role_assignment_list_command_builder;
    /**
     * Show the role assignment detail for the caller within different scopes. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing role-assignment show --account-name
     *                                 --name
     *                                 [--invoice-section-name]
     *                                 [--profile-name]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name The ID that uniquely identifies a role assignment.
     */
    static show(accountName: string, name: string): az_billing_role_assignment_show_command_builder;
}
/** Display billing role-definition. */
export declare class az_billing_role_definition {
    /**
     * List the role definitions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing role-definition list --account-name
     *                                 [--invoice-section-name]
     *                                 [--profile-name]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static list(accountName: string): az_billing_role_definition_list_command_builder;
    /**
     * Show the role definition details.
     *
     * Syntax:
     * ```
     * az billing role-definition show --account-name
     *                                 --name
     *                                 [--invoice-section-name]
     *                                 [--profile-name]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} name The name that uniquely identifies a role definition.
     */
    static show(accountName: string, name: string): az_billing_role_definition_show_command_builder;
}
/** Billing subscription. */
export declare class az_billing_subscription {
    /**
     * List the subscriptions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
     *
     * Syntax:
     * ```
     * az billing subscription list --account-name
     *                              [--customer-name]
     *                              [--invoice-section-name]
     *                              [--profile-name]
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static list(accountName: string): az_billing_subscription_list_command_builder;
    /**
     * Moves a subscription's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing subscription move --account-name
     *                              --destination-invoice-section-id
     *                              [--no-wait]
     *                              [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} destinationInvoiceSectionId The destination invoice section id.
     */
    static move(accountName: string, destinationInvoiceSectionId: string): az_billing_subscription_move_command_builder;
    /**
     * Get a subscription by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
     *
     * Syntax:
     * ```
     * az billing subscription show --account-name
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static show(accountName: string): az_billing_subscription_show_command_builder;
    /**
     * Update the properties of a billing subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing subscription update --account-name
     *                                [--cost-center]
     *                                [--sku-id]
     *                                [--subscription]
     *                                [--subscription-billing-status {Abandoned, Active, Deleted, Inactive, Warning}]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static update(accountName: string): az_billing_subscription_update_command_builder;
    /**
     * Validate if a subscription's charges can be moved to a new invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing subscription validate-move --account-name
     *                                       --destination-invoice-section-id
     *                                       [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} destinationInvoiceSectionId The destination invoice section id.
     */
    static validate_move(accountName: string, destinationInvoiceSectionId: string): az_billing_subscription_validate_move_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of the billing subscription is met.
     *
     * Syntax:
     * ```
     * az billing subscription wait --account-name
     *                              [--created]
     *                              [--custom]
     *                              [--deleted]
     *                              [--exists]
     *                              [--interval]
     *                              [--subscription]
     *                              [--timeout]
     *                              [--updated]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     */
    static wait(accountName: string): az_billing_subscription_wait_command_builder;
}
/** Billing transaction. */
export declare class az_billing_transaction {
    /**
     * List the transactions for an invoice. Transactions include purchases, refunds and Azure usage charges.
     *
     * Syntax:
     * ```
     * az billing transaction list --account-name
     *                             --invoice-name
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} accountName The ID that uniquely identifies a billing account.
     * @param {string} invoiceName The ID that uniquely identifies an invoice.
     */
    static list(accountName: string, invoiceName: string): az_billing_transaction_list_command_builder;
}
/** Manage Azure Billing. */
export declare class az_billing {
}
/**
 * List the billing accounts that a user has access to.
 *
 * Syntax:
 * ```
 * az billing account list [--expand]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 */
declare class az_billing_account_list_command_builder extends CommandBuilder<az_billing_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** May be used to expand the soldTo, invoice sections and billing profiles. */
    expand(value: string): az_billing_account_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_account_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_account_list_command_builder;
}
/**
 * Get a billing account by its ID.
 *
 * Syntax:
 * ```
 * az billing account show --name
 *                         [--expand]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The ID that uniquely identifies a billing account.
 */
declare class az_billing_account_show_command_builder extends CommandBuilder<az_billing_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    name(value: string): az_billing_account_show_command_builder;
    /** May be used to expand the soldTo, invoice sections and billing profiles. */
    expand(value: string): az_billing_account_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_account_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_account_show_command_builder;
}
/**
 * Update the properties of a billing account. Currently, displayName and address can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing account update --name
 *                           [--billing-profiles-value]
 *                           [--departments]
 *                           [--display-name]
 *                           [--enrollment-accounts]
 *                           [--no-wait]
 *                           [--sold-to]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The ID that uniquely identifies a billing account.
 */
declare class az_billing_account_update_command_builder extends CommandBuilder<az_billing_account_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    name(value: string): az_billing_account_update_command_builder;
    /** The billing profiles associated with the billing account. Expected value: json-string/@json-file. */
    billingProfilesValue(value: string): az_billing_account_update_command_builder;
    /** The departments associated to the enrollment. Expected value: json-string/@json-file. */
    departments(value: string): az_billing_account_update_command_builder;
    /** The billing account name. */
    displayName(value: string): az_billing_account_update_command_builder;
    /** The accounts associated to the enrollment. Expected value: json-string/@json-file. */
    enrollmentAccounts(value: string): az_billing_account_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_account_update_command_builder;
    /** The address of the individual or organization that is responsible for the billing account. */
    soldTo(value: string): az_billing_account_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_account_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of the billing account is met.
 *
 * Syntax:
 * ```
 * az billing account wait --name
 *                         [--created]
 *                         [--custom]
 *                         [--deleted]
 *                         [--exists]
 *                         [--expand]
 *                         [--interval]
 *                         [--subscription]
 *                         [--timeout]
 *                         [--updated]
 * ```
 *
 * @param {string} name The ID that uniquely identifies a billing account.
 */
declare class az_billing_account_wait_command_builder extends CommandBuilder<az_billing_account_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    name(value: string): az_billing_account_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_billing_account_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_billing_account_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_billing_account_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_billing_account_wait_command_builder;
    /** May be used to expand the soldTo, invoice sections and billing profiles. */
    expand(value: string): az_billing_account_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_billing_account_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_account_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_billing_account_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_billing_account_wait_command_builder;
}
/**
 * List the agreements for a billing account.
 *
 * Syntax:
 * ```
 * az billing agreement list --account-name
 *                           [--expand]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_agreement_list_command_builder extends CommandBuilder<az_billing_agreement_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_agreement_list_command_builder;
    /** May be used to expand the participants. */
    expand(value: string): az_billing_agreement_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_agreement_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_agreement_list_command_builder;
}
/**
 * Get an agreement by ID.
 *
 * Syntax:
 * ```
 * az billing agreement show --account-name
 *                           --name
 *                           [--expand]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name The ID that uniquely identifies an agreement.
 */
declare class az_billing_agreement_show_command_builder extends CommandBuilder<az_billing_agreement_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_agreement_show_command_builder;
    /** The ID that uniquely identifies an agreement. */
    name(value: string): az_billing_agreement_show_command_builder;
    /** May be used to expand the participants. */
    expand(value: string): az_billing_agreement_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_agreement_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_agreement_show_command_builder;
}
/**
 * The available credit balance for a billing profile. This is the balance that can be used for pay now to settle due or past due invoices. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing balance show --account-name
 *                         --profile-name
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_balance_show_command_builder extends CommandBuilder<az_billing_balance_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_balance_show_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_balance_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_balance_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_balance_show_command_builder;
}
/**
 * List the customers that are billed to a billing account. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * Syntax:
 * ```
 * az billing customer list --account-name
 *                          [--filter]
 *                          [--profile-name]
 *                          [--query-examples]
 *                          [--search]
 *                          [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_customer_list_command_builder extends CommandBuilder<az_billing_customer_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_customer_list_command_builder;
    /** May be used to filter the list of customers. */
    filter(value: string): az_billing_customer_list_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_customer_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_customer_list_command_builder;
    /** Used for searching customers by their name. Any customer with name containing the search text will be included in the response. */
    search(value: string): az_billing_customer_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_customer_list_command_builder;
}
/**
 * Get a customer by its ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * Syntax:
 * ```
 * az billing customer show --account-name
 *                          --customer-name
 *                          [--expand]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} customerName The ID that uniquely identifies a customer.
 */
declare class az_billing_customer_show_command_builder extends CommandBuilder<az_billing_customer_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, customerName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_customer_show_command_builder;
    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_customer_show_command_builder;
    /** May be used to expand enabledAzurePlans and resellers. */
    expand(value: string): az_billing_customer_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_customer_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_customer_show_command_builder;
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
 * Create an instruction. These are custom billing instructions and are only applicable for certain customers.
 *
 * Syntax:
 * ```
 * az billing instruction create --account-name
 *                               --name
 *                               --profile-name
 *                               [--amount]
 *                               [--creation-date]
 *                               [--end-date]
 *                               [--start-date]
 *                               [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name Instruction Name.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_instruction_create_command_builder extends CommandBuilder<az_billing_instruction_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_instruction_create_command_builder;
    /** Instruction Name. */
    name(value: string): az_billing_instruction_create_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_instruction_create_command_builder;
    /** The amount budgeted for this billing instruction. */
    amount(value: string): az_billing_instruction_create_command_builder;
    /** The date this billing instruction was created. */
    creationDate(value: string): az_billing_instruction_create_command_builder;
    /** The date this billing instruction is no longer in effect. */
    endDate(value: string): az_billing_instruction_create_command_builder;
    /** The date this billing instruction goes into effect. */
    startDate(value: string): az_billing_instruction_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_instruction_create_command_builder;
}
/**
 * List the instructions by billing profile id.
 *
 * Syntax:
 * ```
 * az billing instruction list --account-name
 *                             --profile-name
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_instruction_list_command_builder extends CommandBuilder<az_billing_instruction_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_instruction_list_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_instruction_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_instruction_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_instruction_list_command_builder;
}
/**
 * Show the instruction by name. These are custom billing instructions and are only applicable for certain customers.
 *
 * Syntax:
 * ```
 * az billing instruction show --account-name
 *                             --name
 *                             --profile-name
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name Instruction Name.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_instruction_show_command_builder extends CommandBuilder<az_billing_instruction_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_instruction_show_command_builder;
    /** Instruction Name. */
    name(value: string): az_billing_instruction_show_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_instruction_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_instruction_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_instruction_show_command_builder;
}
/**
 * Update an instruction. These are custom billing instructions and are only applicable for certain customers.
 *
 * Syntax:
 * ```
 * az billing instruction update --account-name
 *                               --name
 *                               --profile-name
 *                               [--add]
 *                               [--amount]
 *                               [--creation-date]
 *                               [--end-date]
 *                               [--force-string]
 *                               [--remove]
 *                               [--set]
 *                               [--start-date]
 *                               [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name Instruction Name.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_instruction_update_command_builder extends CommandBuilder<az_billing_instruction_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_instruction_update_command_builder;
    /** Instruction Name. */
    name(value: string): az_billing_instruction_update_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_instruction_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_billing_instruction_update_command_builder;
    /** The amount budgeted for this billing instruction. */
    amount(value: string): az_billing_instruction_update_command_builder;
    /** The date this billing instruction was created. */
    creationDate(value: string): az_billing_instruction_update_command_builder;
    /** The date this billing instruction is no longer in effect. */
    endDate(value: string): az_billing_instruction_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_billing_instruction_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_billing_instruction_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_billing_instruction_update_command_builder;
    /** The date this billing instruction goes into effect. */
    startDate(value: string): az_billing_instruction_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_instruction_update_command_builder;
}
/**
 * Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing invoice section create --account-name
 *                                   --invoice-section-name
 *                                   --profile-name
 *                                   [--display-name]
 *                                   [--labels]
 *                                   [--no-wait]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} invoiceSectionName The ID that uniquely identifies an invoice section.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_invoice_section_create_command_builder extends CommandBuilder<az_billing_invoice_section_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceSectionName: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_create_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_invoice_section_create_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_create_command_builder;
    /** The name of the invoice section. */
    displayName(value: string): az_billing_invoice_section_create_command_builder;
    /** Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... */
    labels(value: string): az_billing_invoice_section_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_invoice_section_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_create_command_builder;
}
/**
 * List the invoice sections that a user has access to. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing invoice section list --account-name
 *                                 --profile-name
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_invoice_section_list_command_builder extends CommandBuilder<az_billing_invoice_section_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_list_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_invoice_section_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_list_command_builder;
}
/**
 * Get an invoice section by its ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing invoice section show --account-name
 *                                 --invoice-section-name
 *                                 --profile-name
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} invoiceSectionName The ID that uniquely identifies an invoice section.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_invoice_section_show_command_builder extends CommandBuilder<az_billing_invoice_section_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceSectionName: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_show_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_invoice_section_show_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_invoice_section_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_show_command_builder;
}
/**
 * Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing invoice section update --account-name
 *                                   --invoice-section-name
 *                                   --profile-name
 *                                   [--display-name]
 *                                   [--labels]
 *                                   [--no-wait]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} invoiceSectionName The ID that uniquely identifies an invoice section.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_invoice_section_update_command_builder extends CommandBuilder<az_billing_invoice_section_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceSectionName: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_update_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_invoice_section_update_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_update_command_builder;
    /** The name of the invoice section. */
    displayName(value: string): az_billing_invoice_section_update_command_builder;
    /** Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... */
    labels(value: string): az_billing_invoice_section_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_invoice_section_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of the billing invoice section is met.
 *
 * Syntax:
 * ```
 * az billing invoice section wait --account-name
 *                                 --invoice-section-name
 *                                 --profile-name
 *                                 [--created]
 *                                 [--custom]
 *                                 [--deleted]
 *                                 [--exists]
 *                                 [--interval]
 *                                 [--subscription]
 *                                 [--timeout]
 *                                 [--updated]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} invoiceSectionName The ID that uniquely identifies an invoice section.
 * @param {string} profileName The ID that uniquely identifies a billing profile.
 */
declare class az_billing_invoice_section_wait_command_builder extends CommandBuilder<az_billing_invoice_section_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceSectionName: string, profileName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_wait_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_invoice_section_wait_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_billing_invoice_section_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_billing_invoice_section_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_billing_invoice_section_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_billing_invoice_section_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_billing_invoice_section_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_billing_invoice_section_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_billing_invoice_section_wait_command_builder;
}
/**
 * Get URL to download invoice.
 *
 * Syntax:
 * ```
 * az billing invoice download [--account-name]
 *                             [--download-token]
 *                             [--download-urls]
 *                             [--invoice-name]
 *                             [--subscription]
 * ```
 */
declare class az_billing_invoice_download_command_builder extends CommandBuilder<az_billing_invoice_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_download_command_builder;
    /** The download token with document source and document ID. */
    downloadToken(value: string): az_billing_invoice_download_command_builder;
    /** Space-separated list of download urls for individual. */
    downloadUrls(value: string): az_billing_invoice_download_command_builder;
    /** The ID that uniquely identifies an invoice. */
    invoiceName(value: string): az_billing_invoice_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_download_command_builder;
}
/**
 * List the invoices for a subscription.
 *
 * Syntax:
 * ```
 * az billing invoice list --period-end-date
 *                         --period-start-date
 *                         [--account-name]
 *                         [--profile-name]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} periodEndDate The end date to fetch the invoices. The date should be specified in MM-DD-YYYY format.
 * @param {string} periodStartDate The start date to fetch the invoices. The date should be specified in MM-DD-YYYY format.
 */
declare class az_billing_invoice_list_command_builder extends CommandBuilder<az_billing_invoice_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, periodEndDate: string, periodStartDate: string);
    /** The end date to fetch the invoices. The date should be specified in MM-DD-YYYY format. */
    periodEndDate(value: string): az_billing_invoice_list_command_builder;
    /** The start date to fetch the invoices. The date should be specified in MM-DD-YYYY format. */
    periodStartDate(value: string): az_billing_invoice_list_command_builder;
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_list_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_invoice_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_list_command_builder;
}
/**
 * Get an invoice. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing invoice show --name
 *                         [--account-name]
 *                         [--by-subscription]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The ID that uniquely identifies an invoice.
 */
declare class az_billing_invoice_show_command_builder extends CommandBuilder<az_billing_invoice_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The ID that uniquely identifies an invoice. */
    name(value: string): az_billing_invoice_show_command_builder;
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_show_command_builder;
    /** When provided, it must work with --invoice-name to get an invoice by subscription ID and invoice ID. */
    bySubscription(value: string): az_billing_invoice_show_command_builder;
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
/**
 * List the billing permissions the caller has on a billing account.
 *
 * Syntax:
 * ```
 * az billing permission list --account-name
 *                            [--customer-name]
 *                            [--invoice-section-name]
 *                            [--profile-name]
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_permission_list_command_builder extends CommandBuilder<az_billing_permission_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_permission_list_command_builder;
    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_permission_list_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_permission_list_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_permission_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_permission_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_permission_list_command_builder;
}
/**
 * Show the policies for a customer or for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.".
 *
 * Syntax:
 * ```
 * az billing policy show --account-name
 *                        [--customer-name]
 *                        [--profile-name]
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_policy_show_command_builder extends CommandBuilder<az_billing_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_policy_show_command_builder;
    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_policy_show_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_policy_show_command_builder;
}
/**
 * Update the policies for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing policy update --account-name
 *                          [--customer-name]
 *                          [--marketplace-purchases {AllAllowed, NotAllowed, OnlyFreeAllowed}]
 *                          [--profile-name]
 *                          [--reservation-purchases {Allowed, NotAllowed}]
 *                          [--subscription]
 *                          [--view-charges {Allowed, NotAllowed}]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_policy_update_command_builder extends CommandBuilder<az_billing_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_policy_update_command_builder;
    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_policy_update_command_builder;
    /** The policy that controls whether Azure marketplace purchases are allowed for a billing profile. */
    marketplacePurchases(value: 'AllAllowed' | 'NotAllowed' | 'OnlyFreeAllowed'): az_billing_policy_update_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_policy_update_command_builder;
    /** The policy that controls whether Azure reservation purchases are allowed for a billing profile. */
    reservationPurchases(value: 'Allowed' | 'NotAllowed'): az_billing_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_policy_update_command_builder;
    /** The policy that controls whether users with Azure RBAC access to a subscription can view its charges. */
    viewCharges(value: 'Allowed' | 'NotAllowed'): az_billing_policy_update_command_builder;
}
/**
 * List the products for a billing account. These don't include products billed based on usage. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
 *
 * Syntax:
 * ```
 * az billing product list --account-name
 *                         [--customer-name]
 *                         [--filter]
 *                         [--invoice-section-name]
 *                         [--profile-name]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_product_list_command_builder extends CommandBuilder<az_billing_product_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_list_command_builder;
    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_product_list_command_builder;
    /** May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value are separated by a colon (:). */
    filter(value: string): az_billing_product_list_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_product_list_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_product_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_product_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_list_command_builder;
}
/**
 * Moves a product's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing product move --account-name
 *                         --name
 *                         [--destination-invoice-section-id]
 *                         [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} productName The ID that uniquely identifies a product.
 */
declare class az_billing_product_move_command_builder extends CommandBuilder<az_billing_product_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, productName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_move_command_builder;
    /** The ID that uniquely identifies a product. */
    productName(value: string): az_billing_product_move_command_builder;
    /** The destination invoice section id. */
    destinationInvoiceSectionId(value: string): az_billing_product_move_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_move_command_builder;
}
/**
 * Get a product by ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing product show --account-name
 *                         --name
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} productName The ID that uniquely identifies a product.
 */
declare class az_billing_product_show_command_builder extends CommandBuilder<az_billing_product_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, productName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_show_command_builder;
    /** The ID that uniquely identifies a product. */
    productName(value: string): az_billing_product_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_product_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_show_command_builder;
}
/**
 * Update the properties of a Product. Currently, auto renew can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing product update --account-name
 *                           --name
 *                           [--auto-renew {Off, On}]
 *                           [--billing-frequency {Monthly, OneTime, UsageBased}]
 *                           [--status {Active, AutoRenew, Cancelled, Disabled, Expired, Expiring, Inactive, PastDue}]
 *                           [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} productName The ID that uniquely identifies a product.
 */
declare class az_billing_product_update_command_builder extends CommandBuilder<az_billing_product_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, productName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_update_command_builder;
    /** The ID that uniquely identifies a product. */
    productName(value: string): az_billing_product_update_command_builder;
    /** Indicates whether auto renewal is turned on or off for a product. */
    autoRenew(value: 'Off' | 'On'): az_billing_product_update_command_builder;
    /** The frequency at which the product will be billed. */
    billingFrequency(value: 'Monthly' | 'OneTime' | 'UsageBased'): az_billing_product_update_command_builder;
    /** The current status of the product. */
    status(value: 'Active' | 'AutoRenew' | 'Cancelled' | 'Disabled' | 'Expired' | 'Expiring' | 'Inactive' | 'PastDue'): az_billing_product_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_update_command_builder;
}
/**
 * Validate if a product's charges can be moved to a new invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing product validate-move --account-name
 *                                  --name
 *                                  [--destination-invoice-section-id]
 *                                  [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} productName The ID that uniquely identifies a product.
 */
declare class az_billing_product_validate_move_command_builder extends CommandBuilder<az_billing_product_validate_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, productName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_validate_move_command_builder;
    /** The ID that uniquely identifies a product. */
    productName(value: string): az_billing_product_validate_move_command_builder;
    /** The destination invoice section id. */
    destinationInvoiceSectionId(value: string): az_billing_product_validate_move_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_validate_move_command_builder;
}
/**
 * Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
 *
 * Syntax:
 * ```
 * az billing profile create --account-name
 *                           --name
 *                           [--bill-to]
 *                           [--display-name]
 *                           [--enabled-azure-plans]
 *                           [--invoice-email-opt-in {false, true}]
 *                           [--invoice-sections-value]
 *                           [--no-wait]
 *                           [--po-number]
 *                           [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name The ID that uniquely identifies a billing profile.
 */
declare class az_billing_profile_create_command_builder extends CommandBuilder<az_billing_profile_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_create_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    name(value: string): az_billing_profile_create_command_builder;
    /** Billing address. */
    billTo(value: string): az_billing_profile_create_command_builder;
    /** The name of the billing profile. */
    displayName(value: string): az_billing_profile_create_command_builder;
    /** Information about the enabled azure plans. */
    enabledAzurePlans(value: string): az_billing_profile_create_command_builder;
    /** Flag controlling whether the invoices for the billing profile are sent through email. */
    invoiceEmailOptIn(value: boolean): az_billing_profile_create_command_builder;
    /** The invoice sections associated to the billing profile. Expected value: json-string/@json-file. */
    invoiceSectionsValue(value: string): az_billing_profile_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_profile_create_command_builder;
    /** The purchase order name that will appear on the invoices generated for the billing profile. */
    poNumber(value: string): az_billing_profile_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_create_command_builder;
}
/**
 * List the billing profiles that a user has access to. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
 *
 * Syntax:
 * ```
 * az billing profile list --account-name
 *                         [--expand]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_profile_list_command_builder extends CommandBuilder<az_billing_profile_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_list_command_builder;
    /** May be used to expand the invoice sections. */
    expand(value: string): az_billing_profile_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_profile_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_list_command_builder;
}
/**
 * Get a billing profile by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
 *
 * Syntax:
 * ```
 * az billing profile show --account-name
 *                         --name
 *                         [--expand]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name The ID that uniquely identifies a billing profile.
 */
declare class az_billing_profile_show_command_builder extends CommandBuilder<az_billing_profile_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_show_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    name(value: string): az_billing_profile_show_command_builder;
    /** May be used to expand the invoice sections. */
    expand(value: string): az_billing_profile_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_profile_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_show_command_builder;
}
/**
 * Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
 *
 * Syntax:
 * ```
 * az billing profile update --account-name
 *                           --name
 *                           [--bill-to]
 *                           [--display-name]
 *                           [--enabled-azure-plans]
 *                           [--invoice-email-opt-in {false, true}]
 *                           [--invoice-sections-value]
 *                           [--no-wait]
 *                           [--po-number]
 *                           [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name The ID that uniquely identifies a billing profile.
 */
declare class az_billing_profile_update_command_builder extends CommandBuilder<az_billing_profile_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_update_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    name(value: string): az_billing_profile_update_command_builder;
    /** Billing address. */
    billTo(value: string): az_billing_profile_update_command_builder;
    /** The name of the billing profile. */
    displayName(value: string): az_billing_profile_update_command_builder;
    /** Information about the enabled azure plans. */
    enabledAzurePlans(value: string): az_billing_profile_update_command_builder;
    /** Flag controlling whether the invoices for the billing profile are sent through email. */
    invoiceEmailOptIn(value: boolean): az_billing_profile_update_command_builder;
    /** The invoice sections associated to the billing profile. Expected value: json-string/@json-file. */
    invoiceSectionsValue(value: string): az_billing_profile_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_profile_update_command_builder;
    /** The purchase order name that will appear on the invoices generated for the billing profile. */
    poNumber(value: string): az_billing_profile_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of the billing profile is met.
 *
 * Syntax:
 * ```
 * az billing profile wait --account-name
 *                         --name
 *                         [--created]
 *                         [--custom]
 *                         [--deleted]
 *                         [--exists]
 *                         [--expand]
 *                         [--interval]
 *                         [--subscription]
 *                         [--timeout]
 *                         [--updated]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name The ID that uniquely identifies a billing profile.
 */
declare class az_billing_profile_wait_command_builder extends CommandBuilder<az_billing_profile_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_wait_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    name(value: string): az_billing_profile_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_billing_profile_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_billing_profile_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_billing_profile_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_billing_profile_wait_command_builder;
    /** May be used to expand the invoice sections. */
    expand(value: string): az_billing_profile_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_billing_profile_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_billing_profile_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_billing_profile_wait_command_builder;
}
/**
 * Get the billing properties for a subscription. This operation is not supported for billing accounts with agreement type Enterprise Agreement.
 *
 * Syntax:
 * ```
 * az billing property show [--query-examples]
 *                          [--subscription]
 * ```
 */
declare class az_billing_property_show_command_builder extends CommandBuilder<az_billing_property_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_property_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_property_show_command_builder;
}
/**
 * Update the billing property of a subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing property update [--cost-center]
 *                            [--subscription]
 * ```
 */
declare class az_billing_property_update_command_builder extends CommandBuilder<az_billing_property_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The cost center applied to the subscription. */
    costCenter(value: string): az_billing_property_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_property_update_command_builder;
}
/**
 * Delete a role assignment for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing role-assignment delete --account-name
 *                                   --name
 *                                   [--invoice-section-name]
 *                                   [--profile-name]
 *                                   [--subscription]
 *                                   [--yes]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name The ID that uniquely identifies a role assignment.
 */
declare class az_billing_role_assignment_delete_command_builder extends CommandBuilder<az_billing_role_assignment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_assignment_delete_command_builder;
    /** The ID that uniquely identifies a role assignment. */
    name(value: string): az_billing_role_assignment_delete_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_assignment_delete_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_assignment_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_assignment_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_billing_role_assignment_delete_command_builder;
}
/**
 * List the role assignments for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing role-assignment list --account-name
 *                                 [--invoice-section-name]
 *                                 [--profile-name]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_role_assignment_list_command_builder extends CommandBuilder<az_billing_role_assignment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_assignment_list_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_assignment_list_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_assignment_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_role_assignment_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_assignment_list_command_builder;
}
/**
 * Show the role assignment detail for the caller within different scopes. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing role-assignment show --account-name
 *                                 --name
 *                                 [--invoice-section-name]
 *                                 [--profile-name]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name The ID that uniquely identifies a role assignment.
 */
declare class az_billing_role_assignment_show_command_builder extends CommandBuilder<az_billing_role_assignment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_assignment_show_command_builder;
    /** The ID that uniquely identifies a role assignment. */
    name(value: string): az_billing_role_assignment_show_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_assignment_show_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_assignment_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_role_assignment_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_assignment_show_command_builder;
}
/**
 * List the role definitions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing role-definition list --account-name
 *                                 [--invoice-section-name]
 *                                 [--profile-name]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_role_definition_list_command_builder extends CommandBuilder<az_billing_role_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_definition_list_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_definition_list_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_definition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_role_definition_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_definition_list_command_builder;
}
/**
 * Show the role definition details.
 *
 * Syntax:
 * ```
 * az billing role-definition show --account-name
 *                                 --name
 *                                 [--invoice-section-name]
 *                                 [--profile-name]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} name The name that uniquely identifies a role definition.
 */
declare class az_billing_role_definition_show_command_builder extends CommandBuilder<az_billing_role_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_definition_show_command_builder;
    /** The name that uniquely identifies a role definition. */
    name(value: string): az_billing_role_definition_show_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_definition_show_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_definition_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_role_definition_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_definition_show_command_builder;
}
/**
 * List the subscriptions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
 *
 * Syntax:
 * ```
 * az billing subscription list --account-name
 *                              [--customer-name]
 *                              [--invoice-section-name]
 *                              [--profile-name]
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_subscription_list_command_builder extends CommandBuilder<az_billing_subscription_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_list_command_builder;
    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_subscription_list_command_builder;
    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_subscription_list_command_builder;
    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_subscription_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_subscription_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_list_command_builder;
}
/**
 * Moves a subscription's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing subscription move --account-name
 *                              --destination-invoice-section-id
 *                              [--no-wait]
 *                              [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} destinationInvoiceSectionId The destination invoice section id.
 */
declare class az_billing_subscription_move_command_builder extends CommandBuilder<az_billing_subscription_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, destinationInvoiceSectionId: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_move_command_builder;
    /** The destination invoice section id. */
    destinationInvoiceSectionId(value: string): az_billing_subscription_move_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_subscription_move_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_move_command_builder;
}
/**
 * Get a subscription by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
 *
 * Syntax:
 * ```
 * az billing subscription show --account-name
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_subscription_show_command_builder extends CommandBuilder<az_billing_subscription_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_subscription_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_show_command_builder;
}
/**
 * Update the properties of a billing subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing subscription update --account-name
 *                                [--cost-center]
 *                                [--sku-id]
 *                                [--subscription]
 *                                [--subscription-billing-status {Abandoned, Active, Deleted, Inactive, Warning}]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_subscription_update_command_builder extends CommandBuilder<az_billing_subscription_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_update_command_builder;
    /** The cost center applied to the subscription. */
    costCenter(value: string): az_billing_subscription_update_command_builder;
    /** The sku ID of the Azure plan for the subscription. */
    skuId(value: string): az_billing_subscription_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_update_command_builder;
    /** The current billing status of the subscription. */
    subscriptionBillingStatus(value: 'Abandoned' | 'Active' | 'Deleted' | 'Inactive' | 'Warning'): az_billing_subscription_update_command_builder;
}
/**
 * Validate if a subscription's charges can be moved to a new invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing subscription validate-move --account-name
 *                                       --destination-invoice-section-id
 *                                       [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} destinationInvoiceSectionId The destination invoice section id.
 */
declare class az_billing_subscription_validate_move_command_builder extends CommandBuilder<az_billing_subscription_validate_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, destinationInvoiceSectionId: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_validate_move_command_builder;
    /** The destination invoice section id. */
    destinationInvoiceSectionId(value: string): az_billing_subscription_validate_move_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_validate_move_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of the billing subscription is met.
 *
 * Syntax:
 * ```
 * az billing subscription wait --account-name
 *                              [--created]
 *                              [--custom]
 *                              [--deleted]
 *                              [--exists]
 *                              [--interval]
 *                              [--subscription]
 *                              [--timeout]
 *                              [--updated]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 */
declare class az_billing_subscription_wait_command_builder extends CommandBuilder<az_billing_subscription_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_billing_subscription_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_billing_subscription_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_billing_subscription_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_billing_subscription_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_billing_subscription_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_billing_subscription_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_billing_subscription_wait_command_builder;
}
/**
 * List the transactions for an invoice. Transactions include purchases, refunds and Azure usage charges.
 *
 * Syntax:
 * ```
 * az billing transaction list --account-name
 *                             --invoice-name
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} accountName The ID that uniquely identifies a billing account.
 * @param {string} invoiceName The ID that uniquely identifies an invoice.
 */
declare class az_billing_transaction_list_command_builder extends CommandBuilder<az_billing_transaction_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceName: string);
    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_transaction_list_command_builder;
    /** The ID that uniquely identifies an invoice. */
    invoiceName(value: string): az_billing_transaction_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_transaction_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_transaction_list_command_builder;
}
export {};
