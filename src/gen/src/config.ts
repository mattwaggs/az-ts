import { CommandBuilder, ICommandParent } from '../base';

/** Manage parameter persistence. */
export class az_config_param_persist implements ICommandParent<any> {
    commandPath = "az config param-persist";

    /**
     * Delete parameter persistence data.
     *
     * Syntax:
     * ```
     * az config param-persist delete [--all]
     *                                [--purge]
     *                                [--recursive]
     *                                [--yes]
     *                                [<NAME>]
     * ```
     */
    az_config_param_persist_delete(): az_config_param_persist_delete_command_builder {
        return new az_config_param_persist_delete_command_builder(this);
    }

    /**
     * Turn off parameter persistence.
     *
     * Syntax:
     * ```
     * az config param-persist off
     * ```
     */
    az_config_param_persist_off(): az_config_param_persist_off_command_builder {
        return new az_config_param_persist_off_command_builder(this);
    }

    /**
     * Turn on parameter persistence.
     *
     * Syntax:
     * ```
     * az config param-persist on
     * ```
     */
    az_config_param_persist_on(): az_config_param_persist_on_command_builder {
        return new az_config_param_persist_on_command_builder(this);
    }

    /**
     * Show parameter persistence data.
     *
     * Syntax:
     * ```
     * az config param-persist show [--query-examples]
     *                              [<NAME>]
     * ```
     */
    az_config_param_persist_show(): az_config_param_persist_show_command_builder {
        return new az_config_param_persist_show_command_builder(this);
    }
}

/** Manage Azure CLI configuration. */
export class az_config implements ICommandParent<any> {
    commandPath = "az config";

    /**
     * Get a configuration.
     *
     * Syntax:
     * ```
     * az config get [--local]
     *               [<KEY>]
     * ```
     */
    az_config_get(): az_config_get_command_builder {
        return new az_config_get_command_builder(this);
    }

    /**
     * Set a configuration.
     *
     * Syntax:
     * ```
     * az config set [--local]
     *               [<KEY_VALUE>]
     * ```
     */
    az_config_set(): az_config_set_command_builder {
        return new az_config_set_command_builder(this);
    }

    /**
     * Unset a configuration.
     *
     * Syntax:
     * ```
     * az config unset [--local]
     *                 [<KEY>]
     * ```
     */
    az_config_unset(): az_config_unset_command_builder {
        return new az_config_unset_command_builder(this);
    }
}

/**
 * Delete parameter persistence data.
 *
 * Syntax:
 * ```
 * az config param-persist delete [--all]
 *                                [--purge]
 *                                [--recursive]
 *                                [--yes]
 *                                [<NAME>]
 * ```
 */
class az_config_param_persist_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Clear all parameter persistence data. Either positional name argument  or --all can be specified. */
    all(value: string): az_config_param_persist_delete_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** Delete parameter persistence file from working directory. Only available when --all is specified. */
    purge(value: string): az_config_param_persist_delete_command_builder {
        this.setFlag("--purge", value);
        return this;
    }

    /** Indicate this is recursive delete of parameter persistence. Only available when --all is specified. */
    recursive(value: string): az_config_param_persist_delete_command_builder {
        this.setFlag("--recursive", value);
        return this;
    }

    /** Do not prompt for confirmation. Only available when --all is specified. */
    yes(value: string): az_config_param_persist_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }

    /** Space-separated list of parameter persistence names. Either positional name argument or --all can be specified. */
    name(value: string): az_config_param_persist_delete_command_builder {
        this.setFlag("<NAME>", value);
        return this;
    }
}

/**
 * Turn off parameter persistence.
 *
 * Syntax:
 * ```
 * az config param-persist off
 * ```
 */
class az_config_param_persist_off_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }
}

/**
 * Turn on parameter persistence.
 *
 * Syntax:
 * ```
 * az config param-persist on
 * ```
 */
class az_config_param_persist_on_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }
}

/**
 * Show parameter persistence data.
 *
 * Syntax:
 * ```
 * az config param-persist show [--query-examples]
 *                              [<NAME>]
 * ```
 */
class az_config_param_persist_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_config_param_persist_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Space-separated list of parameter persistence names. */
    name(value: string): az_config_param_persist_show_command_builder {
        this.setFlag("<NAME>", value);
        return this;
    }
}

/**
 * Get a configuration.
 *
 * Syntax:
 * ```
 * az config get [--local]
 *               [<KEY>]
 * ```
 */
class az_config_get_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Include local configuration. Scan from the working directory up to the root drive, then the global configuration and return the first occurrence. */
    local(value: string): az_config_get_command_builder {
        this.setFlag("--local", value);
        return this;
    }

    /** The configuration to get. If not provided, all sections and configurations will be listed. If `section` is provided, all configurations under the specified section will be listed. If `<section>.<key>` is provided, only the corresponding configuration is shown. */
    key(value: string): az_config_get_command_builder {
        this.setFlag("<KEY>", value);
        return this;
    }
}

/**
 * Set a configuration.
 *
 * Syntax:
 * ```
 * az config set [--local]
 *               [<KEY_VALUE>]
 * ```
 */
class az_config_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Set as a local configuration in the working directory. */
    local(value: string): az_config_set_command_builder {
        this.setFlag("--local", value);
        return this;
    }

    /** Space-separated configurations in the form of <section>.<key>=<value>. */
    keyValue(value: string): az_config_set_command_builder {
        this.setFlag("<KEY_VALUE>", value);
        return this;
    }
}

/**
 * Unset a configuration.
 *
 * Syntax:
 * ```
 * az config unset [--local]
 *                 [<KEY>]
 * ```
 */
class az_config_unset_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Include local configuration. Scan from the working directory up to the root drive, then the global configuration and unset the first occurrence. */
    local(value: string): az_config_unset_command_builder {
        this.setFlag("--local", value);
        return this;
    }

    /** The configuration to unset, in the form of <section>.<key>. */
    key(value: string): az_config_unset_command_builder {
        this.setFlag("<KEY>", value);
        return this;
    }
}
