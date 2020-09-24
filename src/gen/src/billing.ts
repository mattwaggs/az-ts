import { CommandBuilder } from '../base';

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
    static az_billing_enrollment_account_list(): az_billing_enrollment_account_list_command_builder {
        return new az_billing_enrollment_account_list_command_builder("az billing enrollment-account list");
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
    static az_billing_enrollment_account_show(name: string): az_billing_enrollment_account_show_command_builder {
        return new az_billing_enrollment_account_show_command_builder("az billing enrollment-account show", name);
    }
}

/** Get billing invoices for a subscription. */
export class az_billing_invoice {
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
    static az_billing_invoice_list(): az_billing_invoice_list_command_builder {
        return new az_billing_invoice_list_command_builder("az billing invoice list");
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
    static az_billing_invoice_show(): az_billing_invoice_show_command_builder {
        return new az_billing_invoice_show_command_builder("az billing invoice show");
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
    static az_billing_period_list(): az_billing_period_list_command_builder {
        return new az_billing_period_list_command_builder("az billing period list");
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
    static az_billing_period_show(name: string): az_billing_period_show_command_builder {
        return new az_billing_period_show_command_builder("az billing period show", name);
    }
}

/** Manage Azure Billing. */
export class az_billing {
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
class az_billing_enrollment_account_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
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
class az_billing_enrollment_account_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
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
 * List all available invoices of the subscription.
 *
 * Syntax:
 * ```
 * az billing invoice list [--generate-download-url]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 */
class az_billing_invoice_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Generate download url of the invoice. */
    generateDownloadUrl(value: string): az_billing_invoice_list_command_builder {
        this.setFlag("--generate-download-url", value);
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
 * Retrieve invoice of specific name of the subscription.
 *
 * Syntax:
 * ```
 * az billing invoice show [--name]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 */
class az_billing_invoice_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Name of the invoice. */
    name(value: string): az_billing_invoice_show_command_builder {
        this.setFlag("--name", value);
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
class az_billing_period_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
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
class az_billing_period_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
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
