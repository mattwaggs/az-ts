import { CommandBuilder } from '../base';
import { az_billing_account_list_command_result } from './models/az_billing_account_list_command_result'
import { az_billing_account_show_command_result } from './models/az_billing_account_show_command_result'
import { az_billing_account_update_command_result } from './models/az_billing_account_update_command_result'
import { az_billing_account_wait_command_result } from './models/az_billing_account_wait_command_result'
import { az_billing_agreement_list_command_result } from './models/az_billing_agreement_list_command_result'
import { az_billing_agreement_show_command_result } from './models/az_billing_agreement_show_command_result'
import { az_billing_balance_show_command_result } from './models/az_billing_balance_show_command_result'
import { az_billing_customer_list_command_result } from './models/az_billing_customer_list_command_result'
import { az_billing_customer_show_command_result } from './models/az_billing_customer_show_command_result'
import { az_billing_enrollment_account_list_command_result } from './models/az_billing_enrollment_account_list_command_result'
import { az_billing_enrollment_account_show_command_result } from './models/az_billing_enrollment_account_show_command_result'
import { az_billing_instruction_create_command_result } from './models/az_billing_instruction_create_command_result'
import { az_billing_instruction_list_command_result } from './models/az_billing_instruction_list_command_result'
import { az_billing_instruction_show_command_result } from './models/az_billing_instruction_show_command_result'
import { az_billing_instruction_update_command_result } from './models/az_billing_instruction_update_command_result'
import { az_billing_invoice_section_create_command_result } from './models/az_billing_invoice_section_create_command_result'
import { az_billing_invoice_section_list_command_result } from './models/az_billing_invoice_section_list_command_result'
import { az_billing_invoice_section_show_command_result } from './models/az_billing_invoice_section_show_command_result'
import { az_billing_invoice_section_update_command_result } from './models/az_billing_invoice_section_update_command_result'
import { az_billing_invoice_section_wait_command_result } from './models/az_billing_invoice_section_wait_command_result'
import { az_billing_invoice_download_command_result } from './models/az_billing_invoice_download_command_result'
import { az_billing_invoice_list_command_result } from './models/az_billing_invoice_list_command_result'
import { az_billing_invoice_show_command_result } from './models/az_billing_invoice_show_command_result'
import { az_billing_period_list_command_result } from './models/az_billing_period_list_command_result'
import { az_billing_period_show_command_result } from './models/az_billing_period_show_command_result'
import { az_billing_permission_list_command_result } from './models/az_billing_permission_list_command_result'
import { az_billing_policy_show_command_result } from './models/az_billing_policy_show_command_result'
import { az_billing_policy_update_command_result } from './models/az_billing_policy_update_command_result'
import { az_billing_product_list_command_result } from './models/az_billing_product_list_command_result'
import { az_billing_product_move_command_result } from './models/az_billing_product_move_command_result'
import { az_billing_product_show_command_result } from './models/az_billing_product_show_command_result'
import { az_billing_product_update_command_result } from './models/az_billing_product_update_command_result'
import { az_billing_product_validate_move_command_result } from './models/az_billing_product_validate_move_command_result'
import { az_billing_profile_create_command_result } from './models/az_billing_profile_create_command_result'
import { az_billing_profile_list_command_result } from './models/az_billing_profile_list_command_result'
import { az_billing_profile_show_command_result } from './models/az_billing_profile_show_command_result'
import { az_billing_profile_update_command_result } from './models/az_billing_profile_update_command_result'
import { az_billing_profile_wait_command_result } from './models/az_billing_profile_wait_command_result'
import { az_billing_property_show_command_result } from './models/az_billing_property_show_command_result'
import { az_billing_property_update_command_result } from './models/az_billing_property_update_command_result'
import { az_billing_role_assignment_delete_command_result } from './models/az_billing_role_assignment_delete_command_result'
import { az_billing_role_assignment_list_command_result } from './models/az_billing_role_assignment_list_command_result'
import { az_billing_role_assignment_show_command_result } from './models/az_billing_role_assignment_show_command_result'
import { az_billing_role_definition_list_command_result } from './models/az_billing_role_definition_list_command_result'
import { az_billing_role_definition_show_command_result } from './models/az_billing_role_definition_show_command_result'
import { az_billing_subscription_list_command_result } from './models/az_billing_subscription_list_command_result'
import { az_billing_subscription_move_command_result } from './models/az_billing_subscription_move_command_result'
import { az_billing_subscription_show_command_result } from './models/az_billing_subscription_show_command_result'
import { az_billing_subscription_update_command_result } from './models/az_billing_subscription_update_command_result'
import { az_billing_subscription_validate_move_command_result } from './models/az_billing_subscription_validate_move_command_result'
import { az_billing_subscription_wait_command_result } from './models/az_billing_subscription_wait_command_result'
import { az_billing_transaction_list_command_result } from './models/az_billing_transaction_list_command_result'

/** Billing account. */
export class az_billing_account {
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
    static list(): az_billing_account_list_command_builder {
        return new az_billing_account_list_command_builder("az billing account list", 'az_billing_account_list_command_result');
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
    static show(name: string): az_billing_account_show_command_builder {
        return new az_billing_account_show_command_builder("az billing account show", 'az_billing_account_show_command_result', name);
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
    static update(name: string): az_billing_account_update_command_builder {
        return new az_billing_account_update_command_builder("az billing account update", 'az_billing_account_update_command_result', name);
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
    static wait(name: string): az_billing_account_wait_command_builder {
        return new az_billing_account_wait_command_builder("az billing account wait", 'az_billing_account_wait_command_result', name);
    }
}

/** Display billing agreement. */
export class az_billing_agreement {
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
    static list(accountName: string): az_billing_agreement_list_command_builder {
        return new az_billing_agreement_list_command_builder("az billing agreement list", 'az_billing_agreement_list_command_result', accountName);
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
    static show(accountName: string, name: string): az_billing_agreement_show_command_builder {
        return new az_billing_agreement_show_command_builder("az billing agreement show", 'az_billing_agreement_show_command_result', accountName, name);
    }
}

/** Billing balance. */
export class az_billing_balance {
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
    static show(accountName: string, profileName: string): az_billing_balance_show_command_builder {
        return new az_billing_balance_show_command_builder("az billing balance show", 'az_billing_balance_show_command_result', accountName, profileName);
    }
}

/** Billing customer. */
export class az_billing_customer {
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
    static list(accountName: string): az_billing_customer_list_command_builder {
        return new az_billing_customer_list_command_builder("az billing customer list", 'az_billing_customer_list_command_result', accountName);
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
    static show(accountName: string, customerName: string): az_billing_customer_show_command_builder {
        return new az_billing_customer_show_command_builder("az billing customer show", 'az_billing_customer_show_command_result', accountName, customerName);
    }
}

/** Get enrollment accounts. */
export class az_billing_enrollment_account {
    /**
     * Lists the enrollment accounts the caller has access to.
     *
     * Syntax:
     * ```
     * az billing enrollment-account list [--query-examples]
     *                                    [--subscription]
     * ```
     */
    static list(): az_billing_enrollment_account_list_command_builder {
        return new az_billing_enrollment_account_list_command_builder("az billing enrollment-account list", 'az_billing_enrollment_account_list_command_result');
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
    static show(name: string): az_billing_enrollment_account_show_command_builder {
        return new az_billing_enrollment_account_show_command_builder("az billing enrollment-account show", 'az_billing_enrollment_account_show_command_result', name);
    }
}

/** Manage billing instruction. */
export class az_billing_instruction {
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
    static create(accountName: string, name: string, profileName: string): az_billing_instruction_create_command_builder {
        return new az_billing_instruction_create_command_builder("az billing instruction create", 'az_billing_instruction_create_command_result', accountName, name, profileName);
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
    static list(accountName: string, profileName: string): az_billing_instruction_list_command_builder {
        return new az_billing_instruction_list_command_builder("az billing instruction list", 'az_billing_instruction_list_command_result', accountName, profileName);
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
    static show(accountName: string, name: string, profileName: string): az_billing_instruction_show_command_builder {
        return new az_billing_instruction_show_command_builder("az billing instruction show", 'az_billing_instruction_show_command_result', accountName, name, profileName);
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
    static update(accountName: string, name: string, profileName: string): az_billing_instruction_update_command_builder {
        return new az_billing_instruction_update_command_builder("az billing instruction update", 'az_billing_instruction_update_command_result', accountName, name, profileName);
    }
}

/** Billing invoice section. */
export class az_billing_invoice_section {
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
    static create(accountName: string, invoiceSectionName: string, profileName: string): az_billing_invoice_section_create_command_builder {
        return new az_billing_invoice_section_create_command_builder("az billing invoice section create", 'az_billing_invoice_section_create_command_result', accountName, invoiceSectionName, profileName);
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
    static list(accountName: string, profileName: string): az_billing_invoice_section_list_command_builder {
        return new az_billing_invoice_section_list_command_builder("az billing invoice section list", 'az_billing_invoice_section_list_command_result', accountName, profileName);
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
    static show(accountName: string, invoiceSectionName: string, profileName: string): az_billing_invoice_section_show_command_builder {
        return new az_billing_invoice_section_show_command_builder("az billing invoice section show", 'az_billing_invoice_section_show_command_result', accountName, invoiceSectionName, profileName);
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
    static update(accountName: string, invoiceSectionName: string, profileName: string): az_billing_invoice_section_update_command_builder {
        return new az_billing_invoice_section_update_command_builder("az billing invoice section update", 'az_billing_invoice_section_update_command_result', accountName, invoiceSectionName, profileName);
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
    static wait(accountName: string, invoiceSectionName: string, profileName: string): az_billing_invoice_section_wait_command_builder {
        return new az_billing_invoice_section_wait_command_builder("az billing invoice section wait", 'az_billing_invoice_section_wait_command_result', accountName, invoiceSectionName, profileName);
    }
}

/** Get billing invoices for a subscription. */
export class az_billing_invoice {
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
    static download(): az_billing_invoice_download_command_builder {
        return new az_billing_invoice_download_command_builder("az billing invoice download", 'az_billing_invoice_download_command_result');
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
    static list(periodEndDate: string, periodStartDate: string): az_billing_invoice_list_command_builder {
        return new az_billing_invoice_list_command_builder("az billing invoice list", 'az_billing_invoice_list_command_result', periodEndDate, periodStartDate);
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
    static show(name: string): az_billing_invoice_show_command_builder {
        return new az_billing_invoice_show_command_builder("az billing invoice show", 'az_billing_invoice_show_command_result', name);
    }
}

/** Get billing periods for a subscription. */
export class az_billing_period {
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
    static list(): az_billing_period_list_command_builder {
        return new az_billing_period_list_command_builder("az billing period list", 'az_billing_period_list_command_result');
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
    static show(name: string): az_billing_period_show_command_builder {
        return new az_billing_period_show_command_builder("az billing period show", 'az_billing_period_show_command_result', name);
    }
}

/** List billing permissions. */
export class az_billing_permission {
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
    static list(accountName: string): az_billing_permission_list_command_builder {
        return new az_billing_permission_list_command_builder("az billing permission list", 'az_billing_permission_list_command_result', accountName);
    }
}

/** Billing policy. */
export class az_billing_policy {
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
    static show(accountName: string): az_billing_policy_show_command_builder {
        return new az_billing_policy_show_command_builder("az billing policy show", 'az_billing_policy_show_command_result', accountName);
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
    static update(accountName: string): az_billing_policy_update_command_builder {
        return new az_billing_policy_update_command_builder("az billing policy update", 'az_billing_policy_update_command_result', accountName);
    }
}

/** Billing product. */
export class az_billing_product {
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
    static list(accountName: string): az_billing_product_list_command_builder {
        return new az_billing_product_list_command_builder("az billing product list", 'az_billing_product_list_command_result', accountName);
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
    static move(accountName: string, productName: string): az_billing_product_move_command_builder {
        return new az_billing_product_move_command_builder("az billing product move", 'az_billing_product_move_command_result', accountName, productName);
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
    static show(accountName: string, productName: string): az_billing_product_show_command_builder {
        return new az_billing_product_show_command_builder("az billing product show", 'az_billing_product_show_command_result', accountName, productName);
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
    static update(accountName: string, productName: string): az_billing_product_update_command_builder {
        return new az_billing_product_update_command_builder("az billing product update", 'az_billing_product_update_command_result', accountName, productName);
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
    static validate_move(accountName: string, productName: string): az_billing_product_validate_move_command_builder {
        return new az_billing_product_validate_move_command_builder("az billing product validate-move", 'az_billing_product_validate_move_command_result', accountName, productName);
    }
}

/** Manage billing profile of billing account. */
export class az_billing_profile {
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
    static create(accountName: string, name: string): az_billing_profile_create_command_builder {
        return new az_billing_profile_create_command_builder("az billing profile create", 'az_billing_profile_create_command_result', accountName, name);
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
    static list(accountName: string): az_billing_profile_list_command_builder {
        return new az_billing_profile_list_command_builder("az billing profile list", 'az_billing_profile_list_command_result', accountName);
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
    static show(accountName: string, name: string): az_billing_profile_show_command_builder {
        return new az_billing_profile_show_command_builder("az billing profile show", 'az_billing_profile_show_command_result', accountName, name);
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
    static update(accountName: string, name: string): az_billing_profile_update_command_builder {
        return new az_billing_profile_update_command_builder("az billing profile update", 'az_billing_profile_update_command_result', accountName, name);
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
    static wait(accountName: string, name: string): az_billing_profile_wait_command_builder {
        return new az_billing_profile_wait_command_builder("az billing profile wait", 'az_billing_profile_wait_command_result', accountName, name);
    }
}

/** Billing property. */
export class az_billing_property {
    /**
     * Get the billing properties for a subscription. This operation is not supported for billing accounts with agreement type Enterprise Agreement.
     *
     * Syntax:
     * ```
     * az billing property show [--query-examples]
     *                          [--subscription]
     * ```
     */
    static show(): az_billing_property_show_command_builder {
        return new az_billing_property_show_command_builder("az billing property show", 'az_billing_property_show_command_result');
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
    static update(): az_billing_property_update_command_builder {
        return new az_billing_property_update_command_builder("az billing property update", 'az_billing_property_update_command_result');
    }
}

/** Billing role-assignment. */
export class az_billing_role_assignment {
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
    static delete(accountName: string, name: string): az_billing_role_assignment_delete_command_builder {
        return new az_billing_role_assignment_delete_command_builder("az billing role-assignment delete", 'az_billing_role_assignment_delete_command_result', accountName, name);
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
    static list(accountName: string): az_billing_role_assignment_list_command_builder {
        return new az_billing_role_assignment_list_command_builder("az billing role-assignment list", 'az_billing_role_assignment_list_command_result', accountName);
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
    static show(accountName: string, name: string): az_billing_role_assignment_show_command_builder {
        return new az_billing_role_assignment_show_command_builder("az billing role-assignment show", 'az_billing_role_assignment_show_command_result', accountName, name);
    }
}

/** Display billing role-definition. */
export class az_billing_role_definition {
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
    static list(accountName: string): az_billing_role_definition_list_command_builder {
        return new az_billing_role_definition_list_command_builder("az billing role-definition list", 'az_billing_role_definition_list_command_result', accountName);
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
    static show(accountName: string, name: string): az_billing_role_definition_show_command_builder {
        return new az_billing_role_definition_show_command_builder("az billing role-definition show", 'az_billing_role_definition_show_command_result', accountName, name);
    }
}

/** Billing subscription. */
export class az_billing_subscription {
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
    static list(accountName: string): az_billing_subscription_list_command_builder {
        return new az_billing_subscription_list_command_builder("az billing subscription list", 'az_billing_subscription_list_command_result', accountName);
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
    static move(accountName: string, destinationInvoiceSectionId: string): az_billing_subscription_move_command_builder {
        return new az_billing_subscription_move_command_builder("az billing subscription move", 'az_billing_subscription_move_command_result', accountName, destinationInvoiceSectionId);
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
    static show(accountName: string): az_billing_subscription_show_command_builder {
        return new az_billing_subscription_show_command_builder("az billing subscription show", 'az_billing_subscription_show_command_result', accountName);
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
    static update(accountName: string): az_billing_subscription_update_command_builder {
        return new az_billing_subscription_update_command_builder("az billing subscription update", 'az_billing_subscription_update_command_result', accountName);
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
    static validate_move(accountName: string, destinationInvoiceSectionId: string): az_billing_subscription_validate_move_command_builder {
        return new az_billing_subscription_validate_move_command_builder("az billing subscription validate-move", 'az_billing_subscription_validate_move_command_result', accountName, destinationInvoiceSectionId);
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
    static wait(accountName: string): az_billing_subscription_wait_command_builder {
        return new az_billing_subscription_wait_command_builder("az billing subscription wait", 'az_billing_subscription_wait_command_result', accountName);
    }
}

/** Billing transaction. */
export class az_billing_transaction {
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
    static list(accountName: string, invoiceName: string): az_billing_transaction_list_command_builder {
        return new az_billing_transaction_list_command_builder("az billing transaction list", 'az_billing_transaction_list_command_result', accountName, invoiceName);
    }
}

/** Manage Azure Billing. */
export class az_billing {
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
class az_billing_account_list_command_builder extends CommandBuilder<az_billing_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** May be used to expand the soldTo, invoice sections and billing profiles. */
    expand(value: string): az_billing_account_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_account_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_account_show_command_builder extends CommandBuilder<az_billing_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    name(value: string): az_billing_account_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** May be used to expand the soldTo, invoice sections and billing profiles. */
    expand(value: string): az_billing_account_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_account_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_account_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_account_update_command_builder extends CommandBuilder<az_billing_account_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    name(value: string): az_billing_account_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The billing profiles associated with the billing account. Expected value: json-string/@json-file. */
    billingProfilesValue(value: string): az_billing_account_update_command_builder {
        this.setFlag("--billing-profiles-value", value);
        return this;
    }

    /** The departments associated to the enrollment. Expected value: json-string/@json-file. */
    departments(value: string): az_billing_account_update_command_builder {
        this.setFlag("--departments", value);
        return this;
    }

    /** The billing account name. */
    displayName(value: string): az_billing_account_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** The accounts associated to the enrollment. Expected value: json-string/@json-file. */
    enrollmentAccounts(value: string): az_billing_account_update_command_builder {
        this.setFlag("--enrollment-accounts", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_account_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The address of the individual or organization that is responsible for the billing account. */
    soldTo(value: string): az_billing_account_update_command_builder {
        this.setFlag("--sold-to", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_account_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_account_wait_command_builder extends CommandBuilder<az_billing_account_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    name(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** May be used to expand the soldTo, invoice sections and billing profiles. */
    expand(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_billing_account_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_billing_agreement_list_command_builder extends CommandBuilder<az_billing_agreement_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_agreement_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** May be used to expand the participants. */
    expand(value: string): az_billing_agreement_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_agreement_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_agreement_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_agreement_show_command_builder extends CommandBuilder<az_billing_agreement_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_agreement_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies an agreement. */
    name(value: string): az_billing_agreement_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** May be used to expand the participants. */
    expand(value: string): az_billing_agreement_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_agreement_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_agreement_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_balance_show_command_builder extends CommandBuilder<az_billing_balance_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_balance_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_balance_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_balance_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_balance_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_customer_list_command_builder extends CommandBuilder<az_billing_customer_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_customer_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** May be used to filter the list of customers. */
    filter(value: string): az_billing_customer_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_customer_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_customer_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Used for searching customers by their name. Any customer with name containing the search text will be included in the response. */
    search(value: string): az_billing_customer_list_command_builder {
        this.setFlag("--search", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_customer_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_customer_show_command_builder extends CommandBuilder<az_billing_customer_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, customerName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.customerName(customerName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_customer_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_customer_show_command_builder {
        this.setFlag("--customer-name", value);
        return this;
    }

    /** May be used to expand enabledAzurePlans and resellers. */
    expand(value: string): az_billing_customer_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_customer_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_customer_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_enrollment_account_list_command_builder extends CommandBuilder<az_billing_enrollment_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_enrollment_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_enrollment_account_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_enrollment_account_show_command_builder extends CommandBuilder<az_billing_enrollment_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the enrollment account. */
    name(value: string): az_billing_enrollment_account_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_enrollment_account_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_enrollment_account_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_instruction_create_command_builder extends CommandBuilder<az_billing_instruction_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_instruction_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Instruction Name. */
    name(value: string): az_billing_instruction_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_instruction_create_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** The amount budgeted for this billing instruction. */
    amount(value: string): az_billing_instruction_create_command_builder {
        this.setFlag("--amount", value);
        return this;
    }

    /** The date this billing instruction was created. */
    creationDate(value: string): az_billing_instruction_create_command_builder {
        this.setFlag("--creation-date", value);
        return this;
    }

    /** The date this billing instruction is no longer in effect. */
    endDate(value: string): az_billing_instruction_create_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** The date this billing instruction goes into effect. */
    startDate(value: string): az_billing_instruction_create_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_instruction_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_instruction_list_command_builder extends CommandBuilder<az_billing_instruction_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_instruction_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_instruction_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_instruction_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_instruction_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_instruction_show_command_builder extends CommandBuilder<az_billing_instruction_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_instruction_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Instruction Name. */
    name(value: string): az_billing_instruction_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_instruction_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_instruction_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_instruction_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_instruction_update_command_builder extends CommandBuilder<az_billing_instruction_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Instruction Name. */
    name(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The amount budgeted for this billing instruction. */
    amount(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--amount", value);
        return this;
    }

    /** The date this billing instruction was created. */
    creationDate(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--creation-date", value);
        return this;
    }

    /** The date this billing instruction is no longer in effect. */
    endDate(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The date this billing instruction goes into effect. */
    startDate(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_instruction_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_invoice_section_create_command_builder extends CommandBuilder<az_billing_invoice_section_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceSectionName: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.invoiceSectionName(invoiceSectionName)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_invoice_section_create_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_create_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** The name of the invoice section. */
    displayName(value: string): az_billing_invoice_section_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... */
    labels(value: string): az_billing_invoice_section_create_command_builder {
        this.setFlag("--labels", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_invoice_section_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_invoice_section_list_command_builder extends CommandBuilder<az_billing_invoice_section_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_invoice_section_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_invoice_section_show_command_builder extends CommandBuilder<az_billing_invoice_section_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceSectionName: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.invoiceSectionName(invoiceSectionName)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_invoice_section_show_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_invoice_section_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_invoice_section_update_command_builder extends CommandBuilder<az_billing_invoice_section_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceSectionName: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.invoiceSectionName(invoiceSectionName)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_invoice_section_update_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_update_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** The name of the invoice section. */
    displayName(value: string): az_billing_invoice_section_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... */
    labels(value: string): az_billing_invoice_section_update_command_builder {
        this.setFlag("--labels", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_invoice_section_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_invoice_section_wait_command_builder extends CommandBuilder<az_billing_invoice_section_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceSectionName: string, profileName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.invoiceSectionName(invoiceSectionName)
        this.profileName(profileName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_billing_invoice_section_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_billing_invoice_download_command_builder extends CommandBuilder<az_billing_invoice_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_download_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The download token with document source and document ID. */
    downloadToken(value: string): az_billing_invoice_download_command_builder {
        this.setFlag("--download-token", value);
        return this;
    }

    /** Space-separated list of download urls for individual. */
    downloadUrls(value: string): az_billing_invoice_download_command_builder {
        this.setFlag("--download-urls", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice. */
    invoiceName(value: string): az_billing_invoice_download_command_builder {
        this.setFlag("--invoice-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_download_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_invoice_list_command_builder extends CommandBuilder<az_billing_invoice_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, periodEndDate: string, periodStartDate: string) {
        super(commandPath, resultDataTypeName);
        this.periodEndDate(periodEndDate)
        this.periodStartDate(periodStartDate)
    }

    /** The end date to fetch the invoices. The date should be specified in MM-DD-YYYY format. */
    periodEndDate(value: string): az_billing_invoice_list_command_builder {
        this.setFlag("--period-end-date", value);
        return this;
    }

    /** The start date to fetch the invoices. The date should be specified in MM-DD-YYYY format. */
    periodStartDate(value: string): az_billing_invoice_list_command_builder {
        this.setFlag("--period-start-date", value);
        return this;
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_invoice_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_invoice_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_invoice_show_command_builder extends CommandBuilder<az_billing_invoice_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** The ID that uniquely identifies an invoice. */
    name(value: string): az_billing_invoice_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_invoice_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** When provided, it must work with --invoice-name to get an invoice by subscription ID and invoice ID. */
    bySubscription(value: string): az_billing_invoice_show_command_builder {
        this.setFlag("--by-subscription", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_invoice_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_invoice_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_period_list_command_builder extends CommandBuilder<az_billing_period_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** May be used to filter billing periods by billingPeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. */
    filter(value: string): az_billing_period_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_period_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. */
    skiptoken(value: string): az_billing_period_list_command_builder {
        this.setFlag("--skiptoken", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_period_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** May be used to limit the number of results to the most recent N billing periods. */
    top(value: string): az_billing_period_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_billing_period_show_command_builder extends CommandBuilder<az_billing_period_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the billing period. */
    name(value: string): az_billing_period_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_period_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_period_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_permission_list_command_builder extends CommandBuilder<az_billing_permission_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_permission_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_permission_list_command_builder {
        this.setFlag("--customer-name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_permission_list_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_permission_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_permission_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_permission_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_policy_show_command_builder extends CommandBuilder<az_billing_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_policy_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_policy_show_command_builder {
        this.setFlag("--customer-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_policy_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_policy_update_command_builder extends CommandBuilder<az_billing_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_policy_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_policy_update_command_builder {
        this.setFlag("--customer-name", value);
        return this;
    }

    /** The policy that controls whether Azure marketplace purchases are allowed for a billing profile. */
    marketplacePurchases(value: 'AllAllowed' | 'NotAllowed' | 'OnlyFreeAllowed'): az_billing_policy_update_command_builder {
        this.setFlag("--marketplace-purchases", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_policy_update_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** The policy that controls whether Azure reservation purchases are allowed for a billing profile. */
    reservationPurchases(value: 'Allowed' | 'NotAllowed'): az_billing_policy_update_command_builder {
        this.setFlag("--reservation-purchases", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_policy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The policy that controls whether users with Azure RBAC access to a subscription can view its charges. */
    viewCharges(value: 'Allowed' | 'NotAllowed'): az_billing_policy_update_command_builder {
        this.setFlag("--view-charges", value);
        return this;
    }
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
class az_billing_product_list_command_builder extends CommandBuilder<az_billing_product_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_product_list_command_builder {
        this.setFlag("--customer-name", value);
        return this;
    }

    /** May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value are separated by a colon (:). */
    filter(value: string): az_billing_product_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_product_list_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_product_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_product_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_product_move_command_builder extends CommandBuilder<az_billing_product_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, productName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.productName(productName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_move_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a product. */
    productName(value: string): az_billing_product_move_command_builder {
        this.setFlag("--product-name", value);
        return this;
    }

    /** The destination invoice section id. */
    destinationInvoiceSectionId(value: string): az_billing_product_move_command_builder {
        this.setFlag("--destination-invoice-section-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_move_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_product_show_command_builder extends CommandBuilder<az_billing_product_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, productName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.productName(productName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a product. */
    productName(value: string): az_billing_product_show_command_builder {
        this.setFlag("--product-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_product_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_product_update_command_builder extends CommandBuilder<az_billing_product_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, productName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.productName(productName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a product. */
    productName(value: string): az_billing_product_update_command_builder {
        this.setFlag("--product-name", value);
        return this;
    }

    /** Indicates whether auto renewal is turned on or off for a product. */
    autoRenew(value: 'Off' | 'On'): az_billing_product_update_command_builder {
        this.setFlag("--auto-renew", value);
        return this;
    }

    /** The frequency at which the product will be billed. */
    billingFrequency(value: 'Monthly' | 'OneTime' | 'UsageBased'): az_billing_product_update_command_builder {
        this.setFlag("--billing-frequency", value);
        return this;
    }

    /** The current status of the product. */
    status(value: 'Active' | 'AutoRenew' | 'Cancelled' | 'Disabled' | 'Expired' | 'Expiring' | 'Inactive' | 'PastDue'): az_billing_product_update_command_builder {
        this.setFlag("--status", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_product_validate_move_command_builder extends CommandBuilder<az_billing_product_validate_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, productName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.productName(productName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_product_validate_move_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a product. */
    productName(value: string): az_billing_product_validate_move_command_builder {
        this.setFlag("--product-name", value);
        return this;
    }

    /** The destination invoice section id. */
    destinationInvoiceSectionId(value: string): az_billing_product_validate_move_command_builder {
        this.setFlag("--destination-invoice-section-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_product_validate_move_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_profile_create_command_builder extends CommandBuilder<az_billing_profile_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    name(value: string): az_billing_profile_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Billing address. */
    billTo(value: string): az_billing_profile_create_command_builder {
        this.setFlag("--bill-to", value);
        return this;
    }

    /** The name of the billing profile. */
    displayName(value: string): az_billing_profile_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Information about the enabled azure plans. */
    enabledAzurePlans(value: string): az_billing_profile_create_command_builder {
        this.setFlag("--enabled-azure-plans", value);
        return this;
    }

    /** Flag controlling whether the invoices for the billing profile are sent through email. */
    invoiceEmailOptIn(value: boolean): az_billing_profile_create_command_builder {
        this.setFlag("--invoice-email-opt-in", value.toString());
        return this;
    }

    /** The invoice sections associated to the billing profile. Expected value: json-string/@json-file. */
    invoiceSectionsValue(value: string): az_billing_profile_create_command_builder {
        this.setFlag("--invoice-sections-value", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_profile_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The purchase order name that will appear on the invoices generated for the billing profile. */
    poNumber(value: string): az_billing_profile_create_command_builder {
        this.setFlag("--po-number", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_profile_list_command_builder extends CommandBuilder<az_billing_profile_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** May be used to expand the invoice sections. */
    expand(value: string): az_billing_profile_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_profile_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_profile_show_command_builder extends CommandBuilder<az_billing_profile_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    name(value: string): az_billing_profile_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** May be used to expand the invoice sections. */
    expand(value: string): az_billing_profile_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_profile_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_profile_update_command_builder extends CommandBuilder<az_billing_profile_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    name(value: string): az_billing_profile_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Billing address. */
    billTo(value: string): az_billing_profile_update_command_builder {
        this.setFlag("--bill-to", value);
        return this;
    }

    /** The name of the billing profile. */
    displayName(value: string): az_billing_profile_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Information about the enabled azure plans. */
    enabledAzurePlans(value: string): az_billing_profile_update_command_builder {
        this.setFlag("--enabled-azure-plans", value);
        return this;
    }

    /** Flag controlling whether the invoices for the billing profile are sent through email. */
    invoiceEmailOptIn(value: boolean): az_billing_profile_update_command_builder {
        this.setFlag("--invoice-email-opt-in", value.toString());
        return this;
    }

    /** The invoice sections associated to the billing profile. Expected value: json-string/@json-file. */
    invoiceSectionsValue(value: string): az_billing_profile_update_command_builder {
        this.setFlag("--invoice-sections-value", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_profile_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The purchase order name that will appear on the invoices generated for the billing profile. */
    poNumber(value: string): az_billing_profile_update_command_builder {
        this.setFlag("--po-number", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_profile_wait_command_builder extends CommandBuilder<az_billing_profile_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    name(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** May be used to expand the invoice sections. */
    expand(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_billing_profile_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_billing_property_show_command_builder extends CommandBuilder<az_billing_property_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_property_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_property_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_property_update_command_builder extends CommandBuilder<az_billing_property_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The cost center applied to the subscription. */
    costCenter(value: string): az_billing_property_update_command_builder {
        this.setFlag("--cost-center", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_property_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_role_assignment_delete_command_builder extends CommandBuilder<az_billing_role_assignment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_assignment_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a role assignment. */
    name(value: string): az_billing_role_assignment_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_assignment_delete_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_assignment_delete_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_assignment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_billing_role_assignment_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_billing_role_assignment_list_command_builder extends CommandBuilder<az_billing_role_assignment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_assignment_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_assignment_list_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_assignment_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_role_assignment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_assignment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_role_assignment_show_command_builder extends CommandBuilder<az_billing_role_assignment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_assignment_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a role assignment. */
    name(value: string): az_billing_role_assignment_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_assignment_show_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_assignment_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_role_assignment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_assignment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_role_definition_list_command_builder extends CommandBuilder<az_billing_role_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_definition_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_definition_list_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_definition_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_role_definition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_definition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_role_definition_show_command_builder extends CommandBuilder<az_billing_role_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_role_definition_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name that uniquely identifies a role definition. */
    name(value: string): az_billing_role_definition_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_role_definition_show_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_role_definition_show_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_role_definition_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_role_definition_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_subscription_list_command_builder extends CommandBuilder<az_billing_subscription_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies a customer. */
    customerName(value: string): az_billing_subscription_list_command_builder {
        this.setFlag("--customer-name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice section. */
    invoiceSectionName(value: string): az_billing_subscription_list_command_builder {
        this.setFlag("--invoice-section-name", value);
        return this;
    }

    /** The ID that uniquely identifies a billing profile. */
    profileName(value: string): az_billing_subscription_list_command_builder {
        this.setFlag("--profile-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_subscription_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_subscription_move_command_builder extends CommandBuilder<az_billing_subscription_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, destinationInvoiceSectionId: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.destinationInvoiceSectionId(destinationInvoiceSectionId)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_move_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The destination invoice section id. */
    destinationInvoiceSectionId(value: string): az_billing_subscription_move_command_builder {
        this.setFlag("--destination-invoice-section-id", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_billing_subscription_move_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_move_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_subscription_show_command_builder extends CommandBuilder<az_billing_subscription_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_subscription_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_subscription_update_command_builder extends CommandBuilder<az_billing_subscription_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The cost center applied to the subscription. */
    costCenter(value: string): az_billing_subscription_update_command_builder {
        this.setFlag("--cost-center", value);
        return this;
    }

    /** The sku ID of the Azure plan for the subscription. */
    skuId(value: string): az_billing_subscription_update_command_builder {
        this.setFlag("--sku-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The current billing status of the subscription. */
    subscriptionBillingStatus(value: 'Abandoned' | 'Active' | 'Deleted' | 'Inactive' | 'Warning'): az_billing_subscription_update_command_builder {
        this.setFlag("--subscription-billing-status", value);
        return this;
    }
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
class az_billing_subscription_validate_move_command_builder extends CommandBuilder<az_billing_subscription_validate_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, destinationInvoiceSectionId: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.destinationInvoiceSectionId(destinationInvoiceSectionId)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_validate_move_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The destination invoice section id. */
    destinationInvoiceSectionId(value: string): az_billing_subscription_validate_move_command_builder {
        this.setFlag("--destination-invoice-section-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_validate_move_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_billing_subscription_wait_command_builder extends CommandBuilder<az_billing_subscription_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_subscription_wait_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_billing_subscription_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_billing_subscription_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_billing_subscription_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_billing_subscription_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_billing_subscription_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_subscription_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_billing_subscription_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_billing_subscription_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_billing_transaction_list_command_builder extends CommandBuilder<az_billing_transaction_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, invoiceName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.invoiceName(invoiceName)
    }

    /** The ID that uniquely identifies a billing account. */
    accountName(value: string): az_billing_transaction_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The ID that uniquely identifies an invoice. */
    invoiceName(value: string): az_billing_transaction_list_command_builder {
        this.setFlag("--invoice-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_billing_transaction_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_billing_transaction_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
