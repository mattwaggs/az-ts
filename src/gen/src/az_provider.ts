import { CommandBuilder } from '../base';

/** Get provider operations metadatas. */
export class az_provider_operation {
    /**
     * Get operations from all providers.
     *
     * Syntax:
     * ```
     * az provider operation list [--query-examples]
     *                            [--subscription]
     * ```
     */
    static list(): az_provider_operation_list_command_builder {
        return new az_provider_operation_list_command_builder("az provider operation list");
    }

    /**
     * Get an individual provider's operations.
     *
     * Syntax:
     * ```
     * az provider operation show --namespace
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static show(namespace: string): az_provider_operation_show_command_builder {
        return new az_provider_operation_show_command_builder("az provider operation show", namespace);
    }
}

/** Manage resource providers. */
export class az_provider {
    /**
     * Gets all resource providers for a subscription.
     *
     * Syntax:
     * ```
     * az provider list [--expand]
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     */
    static list(): az_provider_list_command_builder {
        return new az_provider_list_command_builder("az provider list");
    }

    /**
     * Register a provider.
     *
     * Syntax:
     * ```
     * az provider register --namespace
     *                      [--subscription]
     *                      [--wait]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static register(namespace: string): az_provider_register_command_builder {
        return new az_provider_register_command_builder("az provider register", namespace);
    }

    /**
     * Gets the specified resource provider.
     *
     * Syntax:
     * ```
     * az provider show --namespace
     *                  [--expand]
     *                  [--query-examples]
     *                  [--subscription]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static show(namespace: string): az_provider_show_command_builder {
        return new az_provider_show_command_builder("az provider show", namespace);
    }

    /**
     * Unregister a provider.
     *
     * Syntax:
     * ```
     * az provider unregister --namespace
     *                        [--subscription]
     *                        [--wait]
     * ```
     *
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static unregister(namespace: string): az_provider_unregister_command_builder {
        return new az_provider_unregister_command_builder("az provider unregister", namespace);
    }
}

/**
 * Get operations from all providers.
 *
 * Syntax:
 * ```
 * az provider operation list [--query-examples]
 *                            [--subscription]
 * ```
 */
class az_provider_operation_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_provider_operation_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_operation_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get an individual provider's operations.
 *
 * Syntax:
 * ```
 * az provider operation show --namespace
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
class az_provider_operation_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, namespace: string) {
        super(commandPath);
        this.namespace(namespace)
    }

    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_provider_operation_show_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_provider_operation_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_operation_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets all resource providers for a subscription.
 *
 * Syntax:
 * ```
 * az provider list [--expand]
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 */
class az_provider_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
    expand(value: string): az_provider_list_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_provider_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Register a provider.
 *
 * Syntax:
 * ```
 * az provider register --namespace
 *                      [--subscription]
 *                      [--wait]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
class az_provider_register_command_builder extends CommandBuilder {
    constructor(commandPath: string, namespace: string) {
        super(commandPath);
        this.namespace(namespace)
    }

    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_provider_register_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_register_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Wait for the registration to finish. */
    wait(value: string): az_provider_register_command_builder {
        this.setFlag("--wait", value);
        return this;
    }
}

/**
 * Gets the specified resource provider.
 *
 * Syntax:
 * ```
 * az provider show --namespace
 *                  [--expand]
 *                  [--query-examples]
 *                  [--subscription]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
class az_provider_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, namespace: string) {
        super(commandPath);
        this.namespace(namespace)
    }

    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_provider_show_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. */
    expand(value: string): az_provider_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_provider_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Unregister a provider.
 *
 * Syntax:
 * ```
 * az provider unregister --namespace
 *                        [--subscription]
 *                        [--wait]
 * ```
 *
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
class az_provider_unregister_command_builder extends CommandBuilder {
    constructor(commandPath: string, namespace: string) {
        super(commandPath);
        this.namespace(namespace)
    }

    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_provider_unregister_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_provider_unregister_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Wait for unregistration to finish. */
    wait(value: string): az_provider_unregister_command_builder {
        this.setFlag("--wait", value);
        return this;
    }
}
