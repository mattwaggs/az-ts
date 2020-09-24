import { CommandBuilder, ICommandParent } from '../base';

/** Manage Azure Advisor configuration. */
export class az_advisor_configuration implements ICommandParent<any> {
    commandPath = "az advisor configuration";

    /**
     * List Azure Advisor configuration for the entire subscription.
     *
     * Syntax:
     * ```
     * az advisor configuration list [--query-examples]
     *                               [--subscription]
     * ```
     */
    az_advisor_configuration_list(): az_advisor_configuration_list_command_builder {
        return new az_advisor_configuration_list_command_builder(this);
    }

    /**
     * Show Azure Advisor configuration for the given subscription or resource group.
     *
     * Syntax:
     * ```
     * az advisor configuration show [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_advisor_configuration_show(): az_advisor_configuration_show_command_builder {
        return new az_advisor_configuration_show_command_builder(this);
    }

    /**
     * Update Azure Advisor configuration.
     *
     * Syntax:
     * ```
     * az advisor configuration update [--add]
     *                                 [--exclude]
     *                                 [--force-string]
     *                                 [--include]
     *                                 [--low-cpu-threshold {10, 15, 20, 5}]
     *                                 [--remove]
     *                                 [--resource-group]
     *                                 [--set]
     *                                 [--subscription]
     * ```
     */
    az_advisor_configuration_update(): az_advisor_configuration_update_command_builder {
        return new az_advisor_configuration_update_command_builder(this);
    }
}

/** Review Azure Advisor recommendations. */
export class az_advisor_recommendation implements ICommandParent<any> {
    commandPath = "az advisor recommendation";

    /**
     * Disable Azure Advisor recommendations.
     *
     * Syntax:
     * ```
     * az advisor recommendation disable [--days]
     *                                   [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    az_advisor_recommendation_disable(): az_advisor_recommendation_disable_command_builder {
        return new az_advisor_recommendation_disable_command_builder(this);
    }

    /**
     * Enable Azure Advisor recommendations.
     *
     * Syntax:
     * ```
     * az advisor recommendation enable [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_advisor_recommendation_enable(): az_advisor_recommendation_enable_command_builder {
        return new az_advisor_recommendation_enable_command_builder(this);
    }

    /**
     * List Azure Advisor recommendations.
     *
     * Syntax:
     * ```
     * az advisor recommendation list [--category {Cost, HighAvailability, Performance, Security}]
     *                                [--ids]
     *                                [--query-examples]
     *                                [--refresh]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_advisor_recommendation_list(): az_advisor_recommendation_list_command_builder {
        return new az_advisor_recommendation_list_command_builder(this);
    }
}

/** Manage Azure Advisor. */
export class az_advisor {
}

/**
 * List Azure Advisor configuration for the entire subscription.
 *
 * Syntax:
 * ```
 * az advisor configuration list [--query-examples]
 *                               [--subscription]
 * ```
 */
class az_advisor_configuration_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_advisor_configuration_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_configuration_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show Azure Advisor configuration for the given subscription or resource group.
 *
 * Syntax:
 * ```
 * az advisor configuration show [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
class az_advisor_configuration_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_advisor_configuration_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_configuration_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_configuration_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update Azure Advisor configuration.
 *
 * Syntax:
 * ```
 * az advisor configuration update [--add]
 *                                 [--exclude]
 *                                 [--force-string]
 *                                 [--include]
 *                                 [--low-cpu-threshold {10, 15, 20, 5}]
 *                                 [--remove]
 *                                 [--resource-group]
 *                                 [--set]
 *                                 [--subscription]
 * ```
 */
class az_advisor_configuration_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_advisor_configuration_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Exclude from recommendation generation. */
    exclude(value: string): az_advisor_configuration_update_command_builder {
        this.setFlag("--exclude", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_advisor_configuration_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Include in recommendation generation. */
    include(value: string): az_advisor_configuration_update_command_builder {
        this.setFlag("--include", value);
        return this;
    }

    /** Value for low CPU threshold. */
    lowCpuThreshold(value: '10' | '15' | '20' | '5'): az_advisor_configuration_update_command_builder {
        this.setFlag("--low-cpu-threshold", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_advisor_configuration_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_configuration_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_advisor_configuration_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_configuration_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Disable Azure Advisor recommendations.
 *
 * Syntax:
 * ```
 * az advisor recommendation disable [--days]
 *                                   [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
class az_advisor_recommendation_disable_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Number of days to disable. If not specified, the recommendation is disabled forever. */
    days(value: string): az_advisor_recommendation_disable_command_builder {
        this.setFlag("--days", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_advisor_recommendation_disable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the recommendation as output by the list command. */
    name(value: string): az_advisor_recommendation_disable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_recommendation_disable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_recommendation_disable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Enable Azure Advisor recommendations.
 *
 * Syntax:
 * ```
 * az advisor recommendation enable [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
class az_advisor_recommendation_enable_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_advisor_recommendation_enable_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the recommendation as output by the list command. */
    name(value: string): az_advisor_recommendation_enable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_recommendation_enable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_recommendation_enable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List Azure Advisor recommendations.
 *
 * Syntax:
 * ```
 * az advisor recommendation list [--category {Cost, HighAvailability, Performance, Security}]
 *                                [--ids]
 *                                [--query-examples]
 *                                [--refresh]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
class az_advisor_recommendation_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of recommendation category. */
    category(value: 'Cost' | 'HighAvailability' | 'Performance' | 'Security'): az_advisor_recommendation_list_command_builder {
        this.setFlag("--category", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_advisor_recommendation_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_advisor_recommendation_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Generate new recommendations. */
    refresh(value: string): az_advisor_recommendation_list_command_builder {
        this.setFlag("--refresh", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_recommendation_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_recommendation_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}