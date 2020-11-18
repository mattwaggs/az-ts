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
exports.az_billing = exports.az_billing_transaction = exports.az_billing_subscription = exports.az_billing_role_definition = exports.az_billing_role_assignment = exports.az_billing_property = exports.az_billing_profile = exports.az_billing_product = exports.az_billing_policy = exports.az_billing_permission = exports.az_billing_period = exports.az_billing_invoice = exports.az_billing_invoice_section = exports.az_billing_instruction = exports.az_billing_enrollment_account = exports.az_billing_customer = exports.az_billing_balance = exports.az_billing_agreement = exports.az_billing_account = void 0;
var base_1 = require("../base");
/** Billing account. */
var az_billing_account = /** @class */ (function () {
    function az_billing_account() {
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
    az_billing_account.list = function () {
        return new az_billing_account_list_command_builder("az billing account list", 'az_billing_account_list_command_result');
    };
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
    az_billing_account.show = function (name) {
        return new az_billing_account_show_command_builder("az billing account show", 'az_billing_account_show_command_result', name);
    };
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
    az_billing_account.update = function (name) {
        return new az_billing_account_update_command_builder("az billing account update", 'az_billing_account_update_command_result', name);
    };
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
    az_billing_account.wait = function (name) {
        return new az_billing_account_wait_command_builder("az billing account wait", 'az_billing_account_wait_command_result', name);
    };
    return az_billing_account;
}());
exports.az_billing_account = az_billing_account;
/** Display billing agreement. */
var az_billing_agreement = /** @class */ (function () {
    function az_billing_agreement() {
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
    az_billing_agreement.list = function (accountName) {
        return new az_billing_agreement_list_command_builder("az billing agreement list", 'az_billing_agreement_list_command_result', accountName);
    };
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
    az_billing_agreement.show = function (accountName, name) {
        return new az_billing_agreement_show_command_builder("az billing agreement show", 'az_billing_agreement_show_command_result', accountName, name);
    };
    return az_billing_agreement;
}());
exports.az_billing_agreement = az_billing_agreement;
/** Billing balance. */
var az_billing_balance = /** @class */ (function () {
    function az_billing_balance() {
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
    az_billing_balance.show = function (accountName, profileName) {
        return new az_billing_balance_show_command_builder("az billing balance show", 'az_billing_balance_show_command_result', accountName, profileName);
    };
    return az_billing_balance;
}());
exports.az_billing_balance = az_billing_balance;
/** Billing customer. */
var az_billing_customer = /** @class */ (function () {
    function az_billing_customer() {
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
    az_billing_customer.list = function (accountName) {
        return new az_billing_customer_list_command_builder("az billing customer list", 'az_billing_customer_list_command_result', accountName);
    };
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
    az_billing_customer.show = function (accountName, customerName) {
        return new az_billing_customer_show_command_builder("az billing customer show", 'az_billing_customer_show_command_result', accountName, customerName);
    };
    return az_billing_customer;
}());
exports.az_billing_customer = az_billing_customer;
/** Get enrollment accounts. */
var az_billing_enrollment_account = /** @class */ (function () {
    function az_billing_enrollment_account() {
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
    az_billing_enrollment_account.list = function () {
        return new az_billing_enrollment_account_list_command_builder("az billing enrollment-account list", 'az_billing_enrollment_account_list_command_result');
    };
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
    az_billing_enrollment_account.show = function (name) {
        return new az_billing_enrollment_account_show_command_builder("az billing enrollment-account show", 'az_billing_enrollment_account_show_command_result', name);
    };
    return az_billing_enrollment_account;
}());
exports.az_billing_enrollment_account = az_billing_enrollment_account;
/** Manage billing instruction. */
var az_billing_instruction = /** @class */ (function () {
    function az_billing_instruction() {
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
    az_billing_instruction.create = function (accountName, name, profileName) {
        return new az_billing_instruction_create_command_builder("az billing instruction create", 'az_billing_instruction_create_command_result', accountName, name, profileName);
    };
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
    az_billing_instruction.list = function (accountName, profileName) {
        return new az_billing_instruction_list_command_builder("az billing instruction list", 'az_billing_instruction_list_command_result', accountName, profileName);
    };
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
    az_billing_instruction.show = function (accountName, name, profileName) {
        return new az_billing_instruction_show_command_builder("az billing instruction show", 'az_billing_instruction_show_command_result', accountName, name, profileName);
    };
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
    az_billing_instruction.update = function (accountName, name, profileName) {
        return new az_billing_instruction_update_command_builder("az billing instruction update", 'az_billing_instruction_update_command_result', accountName, name, profileName);
    };
    return az_billing_instruction;
}());
exports.az_billing_instruction = az_billing_instruction;
/** Billing invoice section. */
var az_billing_invoice_section = /** @class */ (function () {
    function az_billing_invoice_section() {
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
    az_billing_invoice_section.create = function (accountName, invoiceSectionName, profileName) {
        return new az_billing_invoice_section_create_command_builder("az billing invoice section create", 'az_billing_invoice_section_create_command_result', accountName, invoiceSectionName, profileName);
    };
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
    az_billing_invoice_section.list = function (accountName, profileName) {
        return new az_billing_invoice_section_list_command_builder("az billing invoice section list", 'az_billing_invoice_section_list_command_result', accountName, profileName);
    };
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
    az_billing_invoice_section.show = function (accountName, invoiceSectionName, profileName) {
        return new az_billing_invoice_section_show_command_builder("az billing invoice section show", 'az_billing_invoice_section_show_command_result', accountName, invoiceSectionName, profileName);
    };
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
    az_billing_invoice_section.update = function (accountName, invoiceSectionName, profileName) {
        return new az_billing_invoice_section_update_command_builder("az billing invoice section update", 'az_billing_invoice_section_update_command_result', accountName, invoiceSectionName, profileName);
    };
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
    az_billing_invoice_section.wait = function (accountName, invoiceSectionName, profileName) {
        return new az_billing_invoice_section_wait_command_builder("az billing invoice section wait", 'az_billing_invoice_section_wait_command_result', accountName, invoiceSectionName, profileName);
    };
    return az_billing_invoice_section;
}());
exports.az_billing_invoice_section = az_billing_invoice_section;
/** Get billing invoices for a subscription. */
var az_billing_invoice = /** @class */ (function () {
    function az_billing_invoice() {
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
    az_billing_invoice.download = function () {
        return new az_billing_invoice_download_command_builder("az billing invoice download", 'az_billing_invoice_download_command_result');
    };
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
    az_billing_invoice.list = function (periodEndDate, periodStartDate) {
        return new az_billing_invoice_list_command_builder("az billing invoice list", 'az_billing_invoice_list_command_result', periodEndDate, periodStartDate);
    };
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
    az_billing_invoice.show = function (name) {
        return new az_billing_invoice_show_command_builder("az billing invoice show", 'az_billing_invoice_show_command_result', name);
    };
    return az_billing_invoice;
}());
exports.az_billing_invoice = az_billing_invoice;
/** Get billing periods for a subscription. */
var az_billing_period = /** @class */ (function () {
    function az_billing_period() {
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
    az_billing_period.list = function () {
        return new az_billing_period_list_command_builder("az billing period list", 'az_billing_period_list_command_result');
    };
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
    az_billing_period.show = function (name) {
        return new az_billing_period_show_command_builder("az billing period show", 'az_billing_period_show_command_result', name);
    };
    return az_billing_period;
}());
exports.az_billing_period = az_billing_period;
/** List billing permissions. */
var az_billing_permission = /** @class */ (function () {
    function az_billing_permission() {
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
    az_billing_permission.list = function (accountName) {
        return new az_billing_permission_list_command_builder("az billing permission list", 'az_billing_permission_list_command_result', accountName);
    };
    return az_billing_permission;
}());
exports.az_billing_permission = az_billing_permission;
/** Billing policy. */
var az_billing_policy = /** @class */ (function () {
    function az_billing_policy() {
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
    az_billing_policy.show = function (accountName) {
        return new az_billing_policy_show_command_builder("az billing policy show", 'az_billing_policy_show_command_result', accountName);
    };
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
    az_billing_policy.update = function (accountName) {
        return new az_billing_policy_update_command_builder("az billing policy update", 'az_billing_policy_update_command_result', accountName);
    };
    return az_billing_policy;
}());
exports.az_billing_policy = az_billing_policy;
/** Billing product. */
var az_billing_product = /** @class */ (function () {
    function az_billing_product() {
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
    az_billing_product.list = function (accountName) {
        return new az_billing_product_list_command_builder("az billing product list", 'az_billing_product_list_command_result', accountName);
    };
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
    az_billing_product.move = function (accountName, productName) {
        return new az_billing_product_move_command_builder("az billing product move", 'az_billing_product_move_command_result', accountName, productName);
    };
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
    az_billing_product.show = function (accountName, productName) {
        return new az_billing_product_show_command_builder("az billing product show", 'az_billing_product_show_command_result', accountName, productName);
    };
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
    az_billing_product.update = function (accountName, productName) {
        return new az_billing_product_update_command_builder("az billing product update", 'az_billing_product_update_command_result', accountName, productName);
    };
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
    az_billing_product.validate_move = function (accountName, productName) {
        return new az_billing_product_validate_move_command_builder("az billing product validate-move", 'az_billing_product_validate_move_command_result', accountName, productName);
    };
    return az_billing_product;
}());
exports.az_billing_product = az_billing_product;
/** Manage billing profile of billing account. */
var az_billing_profile = /** @class */ (function () {
    function az_billing_profile() {
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
    az_billing_profile.create = function (accountName, name) {
        return new az_billing_profile_create_command_builder("az billing profile create", 'az_billing_profile_create_command_result', accountName, name);
    };
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
    az_billing_profile.list = function (accountName) {
        return new az_billing_profile_list_command_builder("az billing profile list", 'az_billing_profile_list_command_result', accountName);
    };
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
    az_billing_profile.show = function (accountName, name) {
        return new az_billing_profile_show_command_builder("az billing profile show", 'az_billing_profile_show_command_result', accountName, name);
    };
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
    az_billing_profile.update = function (accountName, name) {
        return new az_billing_profile_update_command_builder("az billing profile update", 'az_billing_profile_update_command_result', accountName, name);
    };
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
    az_billing_profile.wait = function (accountName, name) {
        return new az_billing_profile_wait_command_builder("az billing profile wait", 'az_billing_profile_wait_command_result', accountName, name);
    };
    return az_billing_profile;
}());
exports.az_billing_profile = az_billing_profile;
/** Billing property. */
var az_billing_property = /** @class */ (function () {
    function az_billing_property() {
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
    az_billing_property.show = function () {
        return new az_billing_property_show_command_builder("az billing property show", 'az_billing_property_show_command_result');
    };
    /**
     * Update the billing property of a subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
     *
     * Syntax:
     * ```
     * az billing property update [--cost-center]
     *                            [--subscription]
     * ```
     */
    az_billing_property.update = function () {
        return new az_billing_property_update_command_builder("az billing property update", 'az_billing_property_update_command_result');
    };
    return az_billing_property;
}());
exports.az_billing_property = az_billing_property;
/** Billing role-assignment. */
var az_billing_role_assignment = /** @class */ (function () {
    function az_billing_role_assignment() {
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
    az_billing_role_assignment["delete"] = function (accountName, name) {
        return new az_billing_role_assignment_delete_command_builder("az billing role-assignment delete", 'az_billing_role_assignment_delete_command_result', accountName, name);
    };
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
    az_billing_role_assignment.list = function (accountName) {
        return new az_billing_role_assignment_list_command_builder("az billing role-assignment list", 'az_billing_role_assignment_list_command_result', accountName);
    };
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
    az_billing_role_assignment.show = function (accountName, name) {
        return new az_billing_role_assignment_show_command_builder("az billing role-assignment show", 'az_billing_role_assignment_show_command_result', accountName, name);
    };
    return az_billing_role_assignment;
}());
exports.az_billing_role_assignment = az_billing_role_assignment;
/** Display billing role-definition. */
var az_billing_role_definition = /** @class */ (function () {
    function az_billing_role_definition() {
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
    az_billing_role_definition.list = function (accountName) {
        return new az_billing_role_definition_list_command_builder("az billing role-definition list", 'az_billing_role_definition_list_command_result', accountName);
    };
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
    az_billing_role_definition.show = function (accountName, name) {
        return new az_billing_role_definition_show_command_builder("az billing role-definition show", 'az_billing_role_definition_show_command_result', accountName, name);
    };
    return az_billing_role_definition;
}());
exports.az_billing_role_definition = az_billing_role_definition;
/** Billing subscription. */
var az_billing_subscription = /** @class */ (function () {
    function az_billing_subscription() {
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
    az_billing_subscription.list = function (accountName) {
        return new az_billing_subscription_list_command_builder("az billing subscription list", 'az_billing_subscription_list_command_result', accountName);
    };
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
    az_billing_subscription.move = function (accountName, destinationInvoiceSectionId) {
        return new az_billing_subscription_move_command_builder("az billing subscription move", 'az_billing_subscription_move_command_result', accountName, destinationInvoiceSectionId);
    };
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
    az_billing_subscription.show = function (accountName) {
        return new az_billing_subscription_show_command_builder("az billing subscription show", 'az_billing_subscription_show_command_result', accountName);
    };
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
    az_billing_subscription.update = function (accountName) {
        return new az_billing_subscription_update_command_builder("az billing subscription update", 'az_billing_subscription_update_command_result', accountName);
    };
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
    az_billing_subscription.validate_move = function (accountName, destinationInvoiceSectionId) {
        return new az_billing_subscription_validate_move_command_builder("az billing subscription validate-move", 'az_billing_subscription_validate_move_command_result', accountName, destinationInvoiceSectionId);
    };
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
    az_billing_subscription.wait = function (accountName) {
        return new az_billing_subscription_wait_command_builder("az billing subscription wait", 'az_billing_subscription_wait_command_result', accountName);
    };
    return az_billing_subscription;
}());
exports.az_billing_subscription = az_billing_subscription;
/** Billing transaction. */
var az_billing_transaction = /** @class */ (function () {
    function az_billing_transaction() {
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
    az_billing_transaction.list = function (accountName, invoiceName) {
        return new az_billing_transaction_list_command_builder("az billing transaction list", 'az_billing_transaction_list_command_result', accountName, invoiceName);
    };
    return az_billing_transaction;
}());
exports.az_billing_transaction = az_billing_transaction;
/** Manage Azure Billing. */
var az_billing = /** @class */ (function () {
    function az_billing() {
    }
    return az_billing;
}());
exports.az_billing = az_billing;
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
var az_billing_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_account_list_command_builder, _super);
    function az_billing_account_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** May be used to expand the soldTo, invoice sections and billing profiles. */
    az_billing_account_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_account_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_account_show_command_builder, _super);
    function az_billing_account_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_account_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** May be used to expand the soldTo, invoice sections and billing profiles. */
    az_billing_account_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_account_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_account_update_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_account_update_command_builder, _super);
    function az_billing_account_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_account_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The billing profiles associated with the billing account. Expected value: json-string/@json-file. */
    az_billing_account_update_command_builder.prototype.billingProfilesValue = function (value) {
        this.setFlag("--billing-profiles-value", value);
        return this;
    };
    /** The departments associated to the enrollment. Expected value: json-string/@json-file. */
    az_billing_account_update_command_builder.prototype.departments = function (value) {
        this.setFlag("--departments", value);
        return this;
    };
    /** The billing account name. */
    az_billing_account_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The accounts associated to the enrollment. Expected value: json-string/@json-file. */
    az_billing_account_update_command_builder.prototype.enrollmentAccounts = function (value) {
        this.setFlag("--enrollment-accounts", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_billing_account_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The address of the individual or organization that is responsible for the billing account. */
    az_billing_account_update_command_builder.prototype.soldTo = function (value) {
        this.setFlag("--sold-to", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_account_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_account_update_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_account_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_account_wait_command_builder, _super);
    function az_billing_account_wait_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_account_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_billing_account_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_billing_account_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_billing_account_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_billing_account_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** May be used to expand the soldTo, invoice sections and billing profiles. */
    az_billing_account_wait_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_billing_account_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_account_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_billing_account_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_billing_account_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_billing_account_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_agreement_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_agreement_list_command_builder, _super);
    function az_billing_agreement_list_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_agreement_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** May be used to expand the participants. */
    az_billing_agreement_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_agreement_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_agreement_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_agreement_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_agreement_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_agreement_show_command_builder, _super);
    function az_billing_agreement_show_command_builder(commandPath, resultDataTypeName, accountName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_agreement_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies an agreement. */
    az_billing_agreement_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** May be used to expand the participants. */
    az_billing_agreement_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_agreement_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_agreement_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_agreement_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_balance_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_balance_show_command_builder, _super);
    function az_billing_balance_show_command_builder(commandPath, resultDataTypeName, accountName, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_balance_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_balance_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_balance_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_balance_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_balance_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_customer_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_customer_list_command_builder, _super);
    function az_billing_customer_list_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_customer_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** May be used to filter the list of customers. */
    az_billing_customer_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_customer_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_customer_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Used for searching customers by their name. Any customer with name containing the search text will be included in the response. */
    az_billing_customer_list_command_builder.prototype.search = function (value) {
        this.setFlag("--search", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_customer_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_customer_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_customer_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_customer_show_command_builder, _super);
    function az_billing_customer_show_command_builder(commandPath, resultDataTypeName, accountName, customerName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.customerName(customerName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_customer_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a customer. */
    az_billing_customer_show_command_builder.prototype.customerName = function (value) {
        this.setFlag("--customer-name", value);
        return this;
    };
    /** May be used to expand enabledAzurePlans and resellers. */
    az_billing_customer_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_customer_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_customer_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_customer_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists the enrollment accounts the caller has access to.
 *
 * Syntax:
 * ```
 * az billing enrollment-account list [--query-examples]
 *                                    [--subscription]
 * ```
 */
var az_billing_enrollment_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_enrollment_account_list_command_builder, _super);
    function az_billing_enrollment_account_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_enrollment_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_enrollment_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_enrollment_account_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_enrollment_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_enrollment_account_show_command_builder, _super);
    function az_billing_enrollment_account_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the enrollment account. */
    az_billing_enrollment_account_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_enrollment_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_enrollment_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_enrollment_account_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_instruction_create_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_instruction_create_command_builder, _super);
    function az_billing_instruction_create_command_builder(commandPath, resultDataTypeName, accountName, name, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_instruction_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Instruction Name. */
    az_billing_instruction_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_instruction_create_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** The amount budgeted for this billing instruction. */
    az_billing_instruction_create_command_builder.prototype.amount = function (value) {
        this.setFlag("--amount", value);
        return this;
    };
    /** The date this billing instruction was created. */
    az_billing_instruction_create_command_builder.prototype.creationDate = function (value) {
        this.setFlag("--creation-date", value);
        return this;
    };
    /** The date this billing instruction is no longer in effect. */
    az_billing_instruction_create_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** The date this billing instruction goes into effect. */
    az_billing_instruction_create_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_instruction_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_instruction_create_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_instruction_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_instruction_list_command_builder, _super);
    function az_billing_instruction_list_command_builder(commandPath, resultDataTypeName, accountName, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_instruction_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_instruction_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_instruction_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_instruction_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_instruction_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_instruction_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_instruction_show_command_builder, _super);
    function az_billing_instruction_show_command_builder(commandPath, resultDataTypeName, accountName, name, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_instruction_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Instruction Name. */
    az_billing_instruction_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_instruction_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_instruction_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_instruction_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_instruction_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_instruction_update_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_instruction_update_command_builder, _super);
    function az_billing_instruction_update_command_builder(commandPath, resultDataTypeName, accountName, name, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_instruction_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Instruction Name. */
    az_billing_instruction_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_instruction_update_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_billing_instruction_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The amount budgeted for this billing instruction. */
    az_billing_instruction_update_command_builder.prototype.amount = function (value) {
        this.setFlag("--amount", value);
        return this;
    };
    /** The date this billing instruction was created. */
    az_billing_instruction_update_command_builder.prototype.creationDate = function (value) {
        this.setFlag("--creation-date", value);
        return this;
    };
    /** The date this billing instruction is no longer in effect. */
    az_billing_instruction_update_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_billing_instruction_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_billing_instruction_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_billing_instruction_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The date this billing instruction goes into effect. */
    az_billing_instruction_update_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_instruction_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_instruction_update_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_invoice_section_create_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_section_create_command_builder, _super);
    function az_billing_invoice_section_create_command_builder(commandPath, resultDataTypeName, accountName, invoiceSectionName, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.invoiceSectionName(invoiceSectionName);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_invoice_section_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_invoice_section_create_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_invoice_section_create_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** The name of the invoice section. */
    az_billing_invoice_section_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... */
    az_billing_invoice_section_create_command_builder.prototype.labels = function (value) {
        this.setFlag("--labels", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_billing_invoice_section_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_invoice_section_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_invoice_section_create_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_invoice_section_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_section_list_command_builder, _super);
    function az_billing_invoice_section_list_command_builder(commandPath, resultDataTypeName, accountName, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_invoice_section_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_invoice_section_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_invoice_section_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_invoice_section_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_invoice_section_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_invoice_section_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_section_show_command_builder, _super);
    function az_billing_invoice_section_show_command_builder(commandPath, resultDataTypeName, accountName, invoiceSectionName, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.invoiceSectionName(invoiceSectionName);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_invoice_section_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_invoice_section_show_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_invoice_section_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_invoice_section_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_invoice_section_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_invoice_section_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_invoice_section_update_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_section_update_command_builder, _super);
    function az_billing_invoice_section_update_command_builder(commandPath, resultDataTypeName, accountName, invoiceSectionName, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.invoiceSectionName(invoiceSectionName);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_invoice_section_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_invoice_section_update_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_invoice_section_update_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** The name of the invoice section. */
    az_billing_invoice_section_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... */
    az_billing_invoice_section_update_command_builder.prototype.labels = function (value) {
        this.setFlag("--labels", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_billing_invoice_section_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_invoice_section_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_invoice_section_update_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_invoice_section_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_section_wait_command_builder, _super);
    function az_billing_invoice_section_wait_command_builder(commandPath, resultDataTypeName, accountName, invoiceSectionName, profileName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.invoiceSectionName(invoiceSectionName);
        _this.profileName(profileName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_invoice_section_wait_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_invoice_section_wait_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_invoice_section_wait_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_billing_invoice_section_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_billing_invoice_section_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_billing_invoice_section_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_billing_invoice_section_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_billing_invoice_section_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_invoice_section_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_billing_invoice_section_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_billing_invoice_section_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_billing_invoice_section_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_invoice_download_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_download_command_builder, _super);
    function az_billing_invoice_download_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_invoice_download_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The download token with document source and document ID. */
    az_billing_invoice_download_command_builder.prototype.downloadToken = function (value) {
        this.setFlag("--download-token", value);
        return this;
    };
    /** Space-separated list of download urls for individual. */
    az_billing_invoice_download_command_builder.prototype.downloadUrls = function (value) {
        this.setFlag("--download-urls", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice. */
    az_billing_invoice_download_command_builder.prototype.invoiceName = function (value) {
        this.setFlag("--invoice-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_invoice_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_invoice_download_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_invoice_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_list_command_builder, _super);
    function az_billing_invoice_list_command_builder(commandPath, resultDataTypeName, periodEndDate, periodStartDate) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.periodEndDate(periodEndDate);
        _this.periodStartDate(periodStartDate);
        return _this;
    }
    /** The end date to fetch the invoices. The date should be specified in MM-DD-YYYY format. */
    az_billing_invoice_list_command_builder.prototype.periodEndDate = function (value) {
        this.setFlag("--period-end-date", value);
        return this;
    };
    /** The start date to fetch the invoices. The date should be specified in MM-DD-YYYY format. */
    az_billing_invoice_list_command_builder.prototype.periodStartDate = function (value) {
        this.setFlag("--period-start-date", value);
        return this;
    };
    /** The ID that uniquely identifies a billing account. */
    az_billing_invoice_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_invoice_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_invoice_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_invoice_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_invoice_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_invoice_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_show_command_builder, _super);
    function az_billing_invoice_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies an invoice. */
    az_billing_invoice_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing account. */
    az_billing_invoice_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** When provided, it must work with --invoice-name to get an invoice by subscription ID and invoice ID. */
    az_billing_invoice_show_command_builder.prototype.bySubscription = function (value) {
        this.setFlag("--by-subscription", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_invoice_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_invoice_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_invoice_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_period_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_period_list_command_builder, _super);
    function az_billing_period_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** May be used to filter billing periods by billingPeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. */
    az_billing_period_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_period_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. */
    az_billing_period_list_command_builder.prototype.skiptoken = function (value) {
        this.setFlag("--skiptoken", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_period_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** May be used to limit the number of results to the most recent N billing periods. */
    az_billing_period_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_billing_period_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_period_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_period_show_command_builder, _super);
    function az_billing_period_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the billing period. */
    az_billing_period_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_period_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_period_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_period_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_permission_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_permission_list_command_builder, _super);
    function az_billing_permission_list_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_permission_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a customer. */
    az_billing_permission_list_command_builder.prototype.customerName = function (value) {
        this.setFlag("--customer-name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_permission_list_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_permission_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_permission_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_permission_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_permission_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_policy_show_command_builder, _super);
    function az_billing_policy_show_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_policy_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a customer. */
    az_billing_policy_show_command_builder.prototype.customerName = function (value) {
        this.setFlag("--customer-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_policy_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_policy_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_policy_update_command_builder, _super);
    function az_billing_policy_update_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_policy_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a customer. */
    az_billing_policy_update_command_builder.prototype.customerName = function (value) {
        this.setFlag("--customer-name", value);
        return this;
    };
    /** The policy that controls whether Azure marketplace purchases are allowed for a billing profile. */
    az_billing_policy_update_command_builder.prototype.marketplacePurchases = function (value) {
        this.setFlag("--marketplace-purchases", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_policy_update_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** The policy that controls whether Azure reservation purchases are allowed for a billing profile. */
    az_billing_policy_update_command_builder.prototype.reservationPurchases = function (value) {
        this.setFlag("--reservation-purchases", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The policy that controls whether users with Azure RBAC access to a subscription can view its charges. */
    az_billing_policy_update_command_builder.prototype.viewCharges = function (value) {
        this.setFlag("--view-charges", value);
        return this;
    };
    return az_billing_policy_update_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_product_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_product_list_command_builder, _super);
    function az_billing_product_list_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_product_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a customer. */
    az_billing_product_list_command_builder.prototype.customerName = function (value) {
        this.setFlag("--customer-name", value);
        return this;
    };
    /** May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value are separated by a colon (:). */
    az_billing_product_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_product_list_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_product_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_product_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_product_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_product_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_product_move_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_product_move_command_builder, _super);
    function az_billing_product_move_command_builder(commandPath, resultDataTypeName, accountName, productName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.productName(productName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_product_move_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a product. */
    az_billing_product_move_command_builder.prototype.productName = function (value) {
        this.setFlag("--product-name", value);
        return this;
    };
    /** The destination invoice section id. */
    az_billing_product_move_command_builder.prototype.destinationInvoiceSectionId = function (value) {
        this.setFlag("--destination-invoice-section-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_product_move_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_product_move_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_product_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_product_show_command_builder, _super);
    function az_billing_product_show_command_builder(commandPath, resultDataTypeName, accountName, productName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.productName(productName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_product_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a product. */
    az_billing_product_show_command_builder.prototype.productName = function (value) {
        this.setFlag("--product-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_product_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_product_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_product_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_product_update_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_product_update_command_builder, _super);
    function az_billing_product_update_command_builder(commandPath, resultDataTypeName, accountName, productName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.productName(productName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_product_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a product. */
    az_billing_product_update_command_builder.prototype.productName = function (value) {
        this.setFlag("--product-name", value);
        return this;
    };
    /** Indicates whether auto renewal is turned on or off for a product. */
    az_billing_product_update_command_builder.prototype.autoRenew = function (value) {
        this.setFlag("--auto-renew", value);
        return this;
    };
    /** The frequency at which the product will be billed. */
    az_billing_product_update_command_builder.prototype.billingFrequency = function (value) {
        this.setFlag("--billing-frequency", value);
        return this;
    };
    /** The current status of the product. */
    az_billing_product_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_product_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_product_update_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_product_validate_move_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_product_validate_move_command_builder, _super);
    function az_billing_product_validate_move_command_builder(commandPath, resultDataTypeName, accountName, productName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.productName(productName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_product_validate_move_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a product. */
    az_billing_product_validate_move_command_builder.prototype.productName = function (value) {
        this.setFlag("--product-name", value);
        return this;
    };
    /** The destination invoice section id. */
    az_billing_product_validate_move_command_builder.prototype.destinationInvoiceSectionId = function (value) {
        this.setFlag("--destination-invoice-section-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_product_validate_move_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_product_validate_move_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_profile_create_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_profile_create_command_builder, _super);
    function az_billing_profile_create_command_builder(commandPath, resultDataTypeName, accountName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_profile_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_profile_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Billing address. */
    az_billing_profile_create_command_builder.prototype.billTo = function (value) {
        this.setFlag("--bill-to", value);
        return this;
    };
    /** The name of the billing profile. */
    az_billing_profile_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Information about the enabled azure plans. */
    az_billing_profile_create_command_builder.prototype.enabledAzurePlans = function (value) {
        this.setFlag("--enabled-azure-plans", value);
        return this;
    };
    /** Flag controlling whether the invoices for the billing profile are sent through email. */
    az_billing_profile_create_command_builder.prototype.invoiceEmailOptIn = function (value) {
        this.setFlag("--invoice-email-opt-in", value.toString());
        return this;
    };
    /** The invoice sections associated to the billing profile. Expected value: json-string/@json-file. */
    az_billing_profile_create_command_builder.prototype.invoiceSectionsValue = function (value) {
        this.setFlag("--invoice-sections-value", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_billing_profile_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The purchase order name that will appear on the invoices generated for the billing profile. */
    az_billing_profile_create_command_builder.prototype.poNumber = function (value) {
        this.setFlag("--po-number", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_profile_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_profile_create_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_profile_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_profile_list_command_builder, _super);
    function az_billing_profile_list_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_profile_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** May be used to expand the invoice sections. */
    az_billing_profile_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_profile_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_profile_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_profile_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_profile_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_profile_show_command_builder, _super);
    function az_billing_profile_show_command_builder(commandPath, resultDataTypeName, accountName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_profile_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_profile_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** May be used to expand the invoice sections. */
    az_billing_profile_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_profile_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_profile_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_profile_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_profile_update_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_profile_update_command_builder, _super);
    function az_billing_profile_update_command_builder(commandPath, resultDataTypeName, accountName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_profile_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_profile_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Billing address. */
    az_billing_profile_update_command_builder.prototype.billTo = function (value) {
        this.setFlag("--bill-to", value);
        return this;
    };
    /** The name of the billing profile. */
    az_billing_profile_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Information about the enabled azure plans. */
    az_billing_profile_update_command_builder.prototype.enabledAzurePlans = function (value) {
        this.setFlag("--enabled-azure-plans", value);
        return this;
    };
    /** Flag controlling whether the invoices for the billing profile are sent through email. */
    az_billing_profile_update_command_builder.prototype.invoiceEmailOptIn = function (value) {
        this.setFlag("--invoice-email-opt-in", value.toString());
        return this;
    };
    /** The invoice sections associated to the billing profile. Expected value: json-string/@json-file. */
    az_billing_profile_update_command_builder.prototype.invoiceSectionsValue = function (value) {
        this.setFlag("--invoice-sections-value", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_billing_profile_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The purchase order name that will appear on the invoices generated for the billing profile. */
    az_billing_profile_update_command_builder.prototype.poNumber = function (value) {
        this.setFlag("--po-number", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_profile_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_profile_update_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_profile_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_profile_wait_command_builder, _super);
    function az_billing_profile_wait_command_builder(commandPath, resultDataTypeName, accountName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_profile_wait_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_profile_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_billing_profile_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_billing_profile_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_billing_profile_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_billing_profile_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** May be used to expand the invoice sections. */
    az_billing_profile_wait_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_billing_profile_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_profile_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_billing_profile_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_billing_profile_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_billing_profile_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the billing properties for a subscription. This operation is not supported for billing accounts with agreement type Enterprise Agreement.
 *
 * Syntax:
 * ```
 * az billing property show [--query-examples]
 *                          [--subscription]
 * ```
 */
var az_billing_property_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_property_show_command_builder, _super);
    function az_billing_property_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_property_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_property_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_property_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the billing property of a subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * Syntax:
 * ```
 * az billing property update [--cost-center]
 *                            [--subscription]
 * ```
 */
var az_billing_property_update_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_property_update_command_builder, _super);
    function az_billing_property_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The cost center applied to the subscription. */
    az_billing_property_update_command_builder.prototype.costCenter = function (value) {
        this.setFlag("--cost-center", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_property_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_property_update_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_role_assignment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_role_assignment_delete_command_builder, _super);
    function az_billing_role_assignment_delete_command_builder(commandPath, resultDataTypeName, accountName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_role_assignment_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a role assignment. */
    az_billing_role_assignment_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_role_assignment_delete_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_role_assignment_delete_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_role_assignment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_billing_role_assignment_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_billing_role_assignment_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_role_assignment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_role_assignment_list_command_builder, _super);
    function az_billing_role_assignment_list_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_role_assignment_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_role_assignment_list_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_role_assignment_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_role_assignment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_role_assignment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_role_assignment_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_role_assignment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_role_assignment_show_command_builder, _super);
    function az_billing_role_assignment_show_command_builder(commandPath, resultDataTypeName, accountName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_role_assignment_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a role assignment. */
    az_billing_role_assignment_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_role_assignment_show_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_role_assignment_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_role_assignment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_role_assignment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_role_assignment_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_role_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_role_definition_list_command_builder, _super);
    function az_billing_role_definition_list_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_role_definition_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_role_definition_list_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_role_definition_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_role_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_role_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_role_definition_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_role_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_role_definition_show_command_builder, _super);
    function az_billing_role_definition_show_command_builder(commandPath, resultDataTypeName, accountName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_role_definition_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name that uniquely identifies a role definition. */
    az_billing_role_definition_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_role_definition_show_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_role_definition_show_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_role_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_role_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_role_definition_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_subscription_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_subscription_list_command_builder, _super);
    function az_billing_subscription_list_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_subscription_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies a customer. */
    az_billing_subscription_list_command_builder.prototype.customerName = function (value) {
        this.setFlag("--customer-name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice section. */
    az_billing_subscription_list_command_builder.prototype.invoiceSectionName = function (value) {
        this.setFlag("--invoice-section-name", value);
        return this;
    };
    /** The ID that uniquely identifies a billing profile. */
    az_billing_subscription_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_subscription_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_subscription_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_subscription_list_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_subscription_move_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_subscription_move_command_builder, _super);
    function az_billing_subscription_move_command_builder(commandPath, resultDataTypeName, accountName, destinationInvoiceSectionId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.destinationInvoiceSectionId(destinationInvoiceSectionId);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_subscription_move_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The destination invoice section id. */
    az_billing_subscription_move_command_builder.prototype.destinationInvoiceSectionId = function (value) {
        this.setFlag("--destination-invoice-section-id", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_billing_subscription_move_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_subscription_move_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_subscription_move_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_subscription_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_subscription_show_command_builder, _super);
    function az_billing_subscription_show_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_subscription_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_subscription_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_subscription_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_subscription_show_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_subscription_update_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_subscription_update_command_builder, _super);
    function az_billing_subscription_update_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_subscription_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The cost center applied to the subscription. */
    az_billing_subscription_update_command_builder.prototype.costCenter = function (value) {
        this.setFlag("--cost-center", value);
        return this;
    };
    /** The sku ID of the Azure plan for the subscription. */
    az_billing_subscription_update_command_builder.prototype.skuId = function (value) {
        this.setFlag("--sku-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_subscription_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The current billing status of the subscription. */
    az_billing_subscription_update_command_builder.prototype.subscriptionBillingStatus = function (value) {
        this.setFlag("--subscription-billing-status", value);
        return this;
    };
    return az_billing_subscription_update_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_subscription_validate_move_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_subscription_validate_move_command_builder, _super);
    function az_billing_subscription_validate_move_command_builder(commandPath, resultDataTypeName, accountName, destinationInvoiceSectionId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.destinationInvoiceSectionId(destinationInvoiceSectionId);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_subscription_validate_move_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The destination invoice section id. */
    az_billing_subscription_validate_move_command_builder.prototype.destinationInvoiceSectionId = function (value) {
        this.setFlag("--destination-invoice-section-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_subscription_validate_move_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_subscription_validate_move_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_subscription_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_subscription_wait_command_builder, _super);
    function az_billing_subscription_wait_command_builder(commandPath, resultDataTypeName, accountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_subscription_wait_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_billing_subscription_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_billing_subscription_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_billing_subscription_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_billing_subscription_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_billing_subscription_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_subscription_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_billing_subscription_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_billing_subscription_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_billing_subscription_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_billing_transaction_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_transaction_list_command_builder, _super);
    function az_billing_transaction_list_command_builder(commandPath, resultDataTypeName, accountName, invoiceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.invoiceName(invoiceName);
        return _this;
    }
    /** The ID that uniquely identifies a billing account. */
    az_billing_transaction_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The ID that uniquely identifies an invoice. */
    az_billing_transaction_list_command_builder.prototype.invoiceName = function (value) {
        this.setFlag("--invoice-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_billing_transaction_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_billing_transaction_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_billing_transaction_list_command_builder;
}(base_1.CommandBuilder));
