import { CommandBuilder, ICommandParent } from '../base';

/** Manage Local Context. */
export class az_local_context implements ICommandParent<any> {
    commandPath = "az local-context";

    /**
     * Delete local context data.
     *
     * Syntax:
     * ```
     * az local-context delete [--all]
     *                         [--name]
     *                         [--purge]
     *                         [--recursive]
     *                         [--subscription]
     *                         [--yes]
     * ```
     */
    az_local_context_delete(): az_local_context_delete_command_builder {
        return new az_local_context_delete_command_builder(this);
    }

    /**
     * Turn off local context.
     *
     * Syntax:
     * ```
     * az local-context off [--subscription]
     * ```
     */
    az_local_context_off(): az_local_context_off_command_builder {
        return new az_local_context_off_command_builder(this);
    }

    /**
     * Turn on local context.
     *
     * Syntax:
     * ```
     * az local-context on [--subscription]
     * ```
     */
    az_local_context_on(): az_local_context_on_command_builder {
        return new az_local_context_on_command_builder(this);
    }

    /**
     * Show local context data.
     *
     * Syntax:
     * ```
     * az local-context show [--name]
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     */
    az_local_context_show(): az_local_context_show_command_builder {
        return new az_local_context_show_command_builder(this);
    }
}

/**
 * Delete local context data.
 *
 * Syntax:
 * ```
 * az local-context delete [--all]
 *                         [--name]
 *                         [--purge]
 *                         [--recursive]
 *                         [--subscription]
 *                         [--yes]
 * ```
 */
class az_local_context_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Clear all local context data. Either --name or --all can be specified. */
    all(value: string): az_local_context_delete_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** Space-separated list of local context parameter names. Either --name or --all can be specified. */
    name(value: string): az_local_context_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Delete local context file from working directory. Only available when --all is specified. */
    purge(value: string): az_local_context_delete_command_builder {
        this.setFlag("--purge", value);
        return this;
    }

    /** Indicate this is recursive delete of local context. Only available when --all is specified. */
    recursive(value: string): az_local_context_delete_command_builder {
        this.setFlag("--recursive", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_local_context_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. Only available when --all is specified. */
    yes(value: string): az_local_context_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Turn off local context.
 *
 * Syntax:
 * ```
 * az local-context off [--subscription]
 * ```
 */
class az_local_context_off_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_local_context_off_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Turn on local context.
 *
 * Syntax:
 * ```
 * az local-context on [--subscription]
 * ```
 */
class az_local_context_on_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_local_context_on_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show local context data.
 *
 * Syntax:
 * ```
 * az local-context show [--name]
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 */
class az_local_context_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Space-separated list of local context parameter names. */
    name(value: string): az_local_context_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_local_context_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_local_context_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
