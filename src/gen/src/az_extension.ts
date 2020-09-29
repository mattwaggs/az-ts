import { CommandBuilder } from '../base';

/** Manage and update CLI extensions. */
export class az_extension {
    /**
     * Add an extension.
     *
     * Syntax:
     * ```
     * az extension add [--name]
     *                  [--pip-extra-index-urls]
     *                  [--pip-proxy]
     *                  [--source]
     *                  [--system]
     *                  [--upgrade]
     *                  [--version]
     *                  [--yes]
     * ```
     */
    static add(): az_extension_add_command_builder {
        return new az_extension_add_command_builder("az extension add");
    }

    /**
     * List the installed extensions.
     *
     * Syntax:
     * ```
     * az extension list [--query-examples]
     * ```
     */
    static list(): az_extension_list_command_builder {
        return new az_extension_list_command_builder("az extension list");
    }

    /**
     * List publicly available extensions.
     *
     * Syntax:
     * ```
     * az extension list-available [--show-details]
     * ```
     */
    static list_available(): az_extension_list_available_command_builder {
        return new az_extension_list_available_command_builder("az extension list-available");
    }

    /**
     * List available versions for an extension.
     *
     * Syntax:
     * ```
     * az extension list-versions --name
     * ```
     *
     * @param {string} name Name of extension.
     */
    static list_versions(name: string): az_extension_list_versions_command_builder {
        return new az_extension_list_versions_command_builder("az extension list-versions", name);
    }

    /**
     * Remove an extension.
     *
     * Syntax:
     * ```
     * az extension remove --name
     * ```
     *
     * @param {string} name Name of extension.
     */
    static remove(name: string): az_extension_remove_command_builder {
        return new az_extension_remove_command_builder("az extension remove", name);
    }

    /**
     * Show an extension.
     *
     * Syntax:
     * ```
     * az extension show --name
     *                   [--query-examples]
     * ```
     *
     * @param {string} name Name of extension.
     */
    static show(name: string): az_extension_show_command_builder {
        return new az_extension_show_command_builder("az extension show", name);
    }

    /**
     * Update an extension.
     *
     * Syntax:
     * ```
     * az extension update --name
     *                     [--pip-extra-index-urls]
     *                     [--pip-proxy]
     * ```
     *
     * @param {string} name Name of extension.
     */
    static update(name: string): az_extension_update_command_builder {
        return new az_extension_update_command_builder("az extension update", name);
    }
}

/**
 * Add an extension.
 *
 * Syntax:
 * ```
 * az extension add [--name]
 *                  [--pip-extra-index-urls]
 *                  [--pip-proxy]
 *                  [--source]
 *                  [--system]
 *                  [--upgrade]
 *                  [--version]
 *                  [--yes]
 * ```
 */
class az_extension_add_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of extension. */
    name(value: string): az_extension_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format. */
    pipExtraIndexUrls(value: string): az_extension_add_command_builder {
        this.setFlag("--pip-extra-index-urls", value);
        return this;
    }

    /** Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port. */
    pipProxy(value: string): az_extension_add_command_builder {
        this.setFlag("--pip-proxy", value);
        return this;
    }

    /** Filepath or URL to an extension. */
    source(value: string): az_extension_add_command_builder {
        this.setFlag("--source", value);
        return this;
    }

    /** Use a system directory for the extension. */
    system(value: string): az_extension_add_command_builder {
        this.setFlag("--system", value);
        return this;
    }

    /** Update the extension if already installed, otherwise just install the extension. */
    upgrade(value: string): az_extension_add_command_builder {
        this.setFlag("--upgrade", value);
        return this;
    }

    /** The specific version of an extension. */
    version(value: string): az_extension_add_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_extension_add_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List the installed extensions.
 *
 * Syntax:
 * ```
 * az extension list [--query-examples]
 * ```
 */
class az_extension_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_extension_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
}

/**
 * List publicly available extensions.
 *
 * Syntax:
 * ```
 * az extension list-available [--show-details]
 * ```
 */
class az_extension_list_available_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Show the raw data from the extension index. */
    showDetails(value: string): az_extension_list_available_command_builder {
        this.setFlag("--show-details", value);
        return this;
    }
}

/**
 * List available versions for an extension.
 *
 * Syntax:
 * ```
 * az extension list-versions --name
 * ```
 *
 * @param {string} name Name of extension.
 */
class az_extension_list_versions_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** Name of extension. */
    name(value: string): az_extension_list_versions_command_builder {
        this.setFlag("--name", value);
        return this;
    }
}

/**
 * Remove an extension.
 *
 * Syntax:
 * ```
 * az extension remove --name
 * ```
 *
 * @param {string} name Name of extension.
 */
class az_extension_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** Name of extension. */
    name(value: string): az_extension_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }
}

/**
 * Show an extension.
 *
 * Syntax:
 * ```
 * az extension show --name
 *                   [--query-examples]
 * ```
 *
 * @param {string} name Name of extension.
 */
class az_extension_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** Name of extension. */
    name(value: string): az_extension_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_extension_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
}

/**
 * Update an extension.
 *
 * Syntax:
 * ```
 * az extension update --name
 *                     [--pip-extra-index-urls]
 *                     [--pip-proxy]
 * ```
 *
 * @param {string} name Name of extension.
 */
class az_extension_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** Name of extension. */
    name(value: string): az_extension_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Space-separated list of extra URLs of package indexes to use. This should point to a repository compliant with PEP 503 (the simple repository API) or a local directory laid out in the same format. */
    pipExtraIndexUrls(value: string): az_extension_update_command_builder {
        this.setFlag("--pip-extra-index-urls", value);
        return this;
    }

    /** Proxy for pip to use for extension dependencies in the form of [user:passwd@]proxy.server:port. */
    pipProxy(value: string): az_extension_update_command_builder {
        this.setFlag("--pip-proxy", value);
        return this;
    }
}
