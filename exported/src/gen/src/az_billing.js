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
exports.az_billing = exports.az_billing_period = exports.az_billing_invoice = exports.az_billing_enrollment_account = void 0;
var base_1 = require("../base");
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
/** Get billing invoices for a subscription. */
var az_billing_invoice = /** @class */ (function () {
    function az_billing_invoice() {
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
    az_billing_invoice.list = function () {
        return new az_billing_invoice_list_command_builder("az billing invoice list", 'az_billing_invoice_list_command_result');
    };
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
    az_billing_invoice.show = function () {
        return new az_billing_invoice_show_command_builder("az billing invoice show", 'az_billing_invoice_show_command_result');
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
/** Manage Azure Billing. */
var az_billing = /** @class */ (function () {
    function az_billing() {
    }
    return az_billing;
}());
exports.az_billing = az_billing;
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
 * List all available invoices of the subscription.
 *
 * Syntax:
 * ```
 * az billing invoice list [--generate-download-url]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 */
var az_billing_invoice_list_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_list_command_builder, _super);
    function az_billing_invoice_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Generate download url of the invoice. */
    az_billing_invoice_list_command_builder.prototype.generateDownloadUrl = function (value) {
        this.setFlag("--generate-download-url", value);
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
 * Retrieve invoice of specific name of the subscription.
 *
 * Syntax:
 * ```
 * az billing invoice show [--name]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 */
var az_billing_invoice_show_command_builder = /** @class */ (function (_super) {
    __extends(az_billing_invoice_show_command_builder, _super);
    function az_billing_invoice_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the invoice. */
    az_billing_invoice_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
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
