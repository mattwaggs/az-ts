import { CommandBuilder } from '../base';
import { az_ts_create_command_result } from './models/az_ts_create_command_result'
import { az_ts_delete_command_result } from './models/az_ts_delete_command_result'
import { az_ts_export_command_result } from './models/az_ts_export_command_result'
import { az_ts_list_command_result } from './models/az_ts_list_command_result'
import { az_ts_show_command_result } from './models/az_ts_show_command_result'
import { az_ts_update_command_result } from './models/az_ts_update_command_result'

/** Manage template specs at subscription or resource group scope. */
export class az_ts {
    /**
     * Create a template spec and or template spec version.
     *
     * Syntax:
     * ```
     * az ts create --name
     *              --resource-group
     *              [--description]
     *              [--display-name]
     *              [--location]
     *              [--subscription]
     *              [--template-file]
     *              [--version]
     *              [--version-description]
     *              [--yes]
     * ```
     *
     * @param {string} name The name of the template spec.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_ts_create_command_builder {
        return new az_ts_create_command_builder("az ts create", 'az_ts_create_command_result', name, resourceGroup);
    }

    /**
     * Delete a specified template spec or template spec version by name or resource ID..
     *
     * Syntax:
     * ```
     * az ts delete [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--template-spec]
     *              [--version]
     *              [--yes]
     * ```
     */
    static delete(): az_ts_delete_command_builder {
        return new az_ts_delete_command_builder("az ts delete", 'az_ts_delete_command_result');
    }

    /**
     * Export the specified template spec and artifacts (if any) to the specified output folder.
     *
     * Syntax:
     * ```
     * az ts export --output-folder
     *              [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--template-spec]
     *              [--version]
     * ```
     *
     * @param {string} outputFolder Existing folder to output export(s).
     */
    static export(outputFolder: string): az_ts_export_command_builder {
        return new az_ts_export_command_builder("az ts export", 'az_ts_export_command_result', outputFolder);
    }

    /**
     * List template specs or template spec versions.
     *
     * Syntax:
     * ```
     * az ts list [--name]
     *            [--query-examples]
     *            [--resource-group]
     *            [--subscription]
     * ```
     */
    static list(): az_ts_list_command_builder {
        return new az_ts_list_command_builder("az ts list", 'az_ts_list_command_result');
    }

    /**
     * Get the specified template spec or template spec version.
     *
     * Syntax:
     * ```
     * az ts show [--name]
     *            [--query-examples]
     *            [--resource-group]
     *            [--subscription]
     *            [--template-spec]
     *            [--version]
     * ```
     */
    static show(): az_ts_show_command_builder {
        return new az_ts_show_command_builder("az ts show", 'az_ts_show_command_result');
    }

    /**
     * Update a template spec version.
     *
     * Syntax:
     * ```
     * az ts update [--description]
     *              [--display-name]
     *              [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--template-file]
     *              [--template-spec]
     *              [--version]
     *              [--version-description]
     *              [--yes]
     * ```
     */
    static update(): az_ts_update_command_builder {
        return new az_ts_update_command_builder("az ts update", 'az_ts_update_command_result');
    }
}

/**
 * Create a template spec and or template spec version.
 *
 * Syntax:
 * ```
 * az ts create --name
 *              --resource-group
 *              [--description]
 *              [--display-name]
 *              [--location]
 *              [--subscription]
 *              [--template-file]
 *              [--version]
 *              [--version-description]
 *              [--yes]
 * ```
 *
 * @param {string} name The name of the template spec.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_ts_create_command_builder extends CommandBuilder<az_ts_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the template spec. */
    name(value: string): az_ts_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The description of the parent template spec. */
    description(value: string): az_ts_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The display name of the template spec. */
    displayName(value: string): az_ts_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** The location to store the template-spec and template-spec version(s). Cannot be changed after creation. */
    location(value: string): az_ts_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A template file path in the file system. */
    templateFile(value: string): az_ts_create_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The template spec version. */
    version(value: string): az_ts_create_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** The description of the template spec version. */
    versionDescription(value: string): az_ts_create_command_builder {
        this.setFlag("--version-description", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_ts_create_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Delete a specified template spec or template spec version by name or resource ID..
 *
 * Syntax:
 * ```
 * az ts delete [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--template-spec]
 *              [--version]
 *              [--yes]
 * ```
 */
class az_ts_delete_command_builder extends CommandBuilder<az_ts_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the template spec. */
    name(value: string): az_ts_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The template spec resource id. */
    templateSpec(value: string): az_ts_delete_command_builder {
        this.setFlag("--template-spec", value);
        return this;
    }

    /** The template spec version. */
    version(value: string): az_ts_delete_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_ts_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Export the specified template spec and artifacts (if any) to the specified output folder.
 *
 * Syntax:
 * ```
 * az ts export --output-folder
 *              [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--template-spec]
 *              [--version]
 * ```
 *
 * @param {string} outputFolder Existing folder to output export(s).
 */
class az_ts_export_command_builder extends CommandBuilder<az_ts_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, outputFolder: string) {
        super(commandPath, resultDataTypeName);
        this.outputFolder(outputFolder)
    }

    /** Existing folder to output export(s). */
    outputFolder(value: string): az_ts_export_command_builder {
        this.setFlag("--output-folder", value);
        return this;
    }

    /** The name of the template spec. */
    name(value: string): az_ts_export_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_export_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The template spec resource id. */
    templateSpec(value: string): az_ts_export_command_builder {
        this.setFlag("--template-spec", value);
        return this;
    }

    /** The template spec version. */
    version(value: string): az_ts_export_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

/**
 * List template specs or template spec versions.
 *
 * Syntax:
 * ```
 * az ts list [--name]
 *            [--query-examples]
 *            [--resource-group]
 *            [--subscription]
 * ```
 */
class az_ts_list_command_builder extends CommandBuilder<az_ts_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the template spec. */
    name(value: string): az_ts_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ts_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the specified template spec or template spec version.
 *
 * Syntax:
 * ```
 * az ts show [--name]
 *            [--query-examples]
 *            [--resource-group]
 *            [--subscription]
 *            [--template-spec]
 *            [--version]
 * ```
 */
class az_ts_show_command_builder extends CommandBuilder<az_ts_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the template spec. */
    name(value: string): az_ts_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ts_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The template spec resource id. */
    templateSpec(value: string): az_ts_show_command_builder {
        this.setFlag("--template-spec", value);
        return this;
    }

    /** The template spec version. */
    version(value: string): az_ts_show_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

/**
 * Update a template spec version.
 *
 * Syntax:
 * ```
 * az ts update [--description]
 *              [--display-name]
 *              [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--template-file]
 *              [--template-spec]
 *              [--version]
 *              [--version-description]
 *              [--yes]
 * ```
 */
class az_ts_update_command_builder extends CommandBuilder<az_ts_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The description of the parent template spec. */
    description(value: string): az_ts_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The display name of the template spec. */
    displayName(value: string): az_ts_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** The name of the template spec. */
    name(value: string): az_ts_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ts_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ts_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A template file path in the file system. */
    templateFile(value: string): az_ts_update_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The template spec resource id. */
    templateSpec(value: string): az_ts_update_command_builder {
        this.setFlag("--template-spec", value);
        return this;
    }

    /** The template spec version. */
    version(value: string): az_ts_update_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** The description of the template spec version. */
    versionDescription(value: string): az_ts_update_command_builder {
        this.setFlag("--version-description", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_ts_update_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}
