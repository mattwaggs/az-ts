import { CommandBuilder } from '../base';

/** Manage resource provider features. */
export class az_feature {
    /**
     * List preview features.
     *
     * Syntax:
     * ```
     * az feature list [--namespace]
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     */
    static list(): az_feature_list_command_builder {
        return new az_feature_list_command_builder("az feature list");
    }

    /**
     * Register a preview feature.
     *
     * Syntax:
     * ```
     * az feature register --name
     *                     --namespace
     *                     [--subscription]
     * ```
     *
     * @param {string} name The feature name.
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static register(name: string, namespace: string): az_feature_register_command_builder {
        return new az_feature_register_command_builder("az feature register", name, namespace);
    }

    /**
     * Gets the preview feature with the specified name.
     *
     * Syntax:
     * ```
     * az feature show --name
     *                 --namespace
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} name The feature name.
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static show(name: string, namespace: string): az_feature_show_command_builder {
        return new az_feature_show_command_builder("az feature show", name, namespace);
    }

    /**
     * Unregister a preview feature.
     *
     * Syntax:
     * ```
     * az feature unregister --name
     *                       --namespace
     *                       [--subscription]
     * ```
     *
     * @param {string} name The feature name.
     * @param {string} namespace The resource namespace, aka 'provider'.
     */
    static unregister(name: string, namespace: string): az_feature_unregister_command_builder {
        return new az_feature_unregister_command_builder("az feature unregister", name, namespace);
    }
}

/**
 * List preview features.
 *
 * Syntax:
 * ```
 * az feature list [--namespace]
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 */
class az_feature_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_feature_list_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_feature_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_feature_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Register a preview feature.
 *
 * Syntax:
 * ```
 * az feature register --name
 *                     --namespace
 *                     [--subscription]
 * ```
 *
 * @param {string} name The feature name.
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
class az_feature_register_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, namespace: string) {
        super(commandPath);
        this.name(name)
        this.namespace(namespace)
    }

    /** The feature name. */
    name(value: string): az_feature_register_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_feature_register_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_feature_register_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets the preview feature with the specified name.
 *
 * Syntax:
 * ```
 * az feature show --name
 *                 --namespace
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} name The feature name.
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
class az_feature_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, namespace: string) {
        super(commandPath);
        this.name(name)
        this.namespace(namespace)
    }

    /** The feature name. */
    name(value: string): az_feature_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_feature_show_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_feature_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_feature_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Unregister a preview feature.
 *
 * Syntax:
 * ```
 * az feature unregister --name
 *                       --namespace
 *                       [--subscription]
 * ```
 *
 * @param {string} name The feature name.
 * @param {string} namespace The resource namespace, aka 'provider'.
 */
class az_feature_unregister_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, namespace: string) {
        super(commandPath);
        this.name(name)
        this.namespace(namespace)
    }

    /** The feature name. */
    name(value: string): az_feature_unregister_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource namespace, aka 'provider'. */
    namespace(value: string): az_feature_unregister_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_feature_unregister_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
