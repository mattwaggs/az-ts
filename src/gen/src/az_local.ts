import { CommandBuilder } from '../base';
import { az_local_context_delete_command_result } from './models/az_local_context_delete_command_result'
import { az_local_context_off_command_result } from './models/az_local_context_off_command_result'
import { az_local_context_on_command_result } from './models/az_local_context_on_command_result'
import { az_local_context_show_command_result } from './models/az_local_context_show_command_result'

/** Manage Local Context. */
export class az_local_context {
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
    static delete(): az_local_context_delete_command_builder {
        return new az_local_context_delete_command_builder("az local-context delete");
    }

    /**
     * Turn off local context.
     *
     * Syntax:
     * ```
     * az local-context off [--subscription]
     * ```
     */
    static off(): az_local_context_off_command_builder {
        return new az_local_context_off_command_builder("az local-context off");
    }

    /**
     * Turn on local context.
     *
     * Syntax:
     * ```
     * az local-context on [--subscription]
     * ```
     */
    static on(): az_local_context_on_command_builder {
        return new az_local_context_on_command_builder("az local-context on");
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
    static show(): az_local_context_show_command_builder {
        return new az_local_context_show_command_builder("az local-context show");
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
class az_local_context_delete_command_builder extends CommandBuilder<az_local_context_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
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
class az_local_context_off_command_builder extends CommandBuilder<az_local_context_off_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
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
class az_local_context_on_command_builder extends CommandBuilder<az_local_context_on_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
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
class az_local_context_show_command_builder extends CommandBuilder<az_local_context_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
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
