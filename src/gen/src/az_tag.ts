import { CommandBuilder } from '../base';
import { az_tag_add_value_command_result } from './models/az_tag_add_value_command_result'
import { az_tag_create_command_result } from './models/az_tag_create_command_result'
import { az_tag_delete_command_result } from './models/az_tag_delete_command_result'
import { az_tag_list_command_result } from './models/az_tag_list_command_result'
import { az_tag_remove_value_command_result } from './models/az_tag_remove_value_command_result'
import { az_tag_update_command_result } from './models/az_tag_update_command_result'

/** Tag Management on a resource. */
export class az_tag {
    /**
     * Create a tag value.
     *
     * Syntax:
     * ```
     * az tag add-value --name
     *                  --value
     *                  [--subscription]
     * ```
     *
     * @param {string} name The tag name.
     * @param {string} value The tag value.
     */
    static add_value(name: string, value: string): az_tag_add_value_command_builder {
        return new az_tag_add_value_command_builder("az tag add-value", name, value);
    }

    /**
     * Create tags on a specific resource.
     *
     * Syntax:
     * ```
     * az tag create [--name]
     *               [--resource-id]
     *               [--subscription]
     *               [--tags]
     * ```
     */
    static create(): az_tag_create_command_builder {
        return new az_tag_create_command_builder("az tag create");
    }

    /**
     * Delete tags on a specific resource.
     *
     * Syntax:
     * ```
     * az tag delete [--name]
     *               [--resource-id]
     *               [--subscription]
     *               [--yes]
     * ```
     */
    static delete(): az_tag_delete_command_builder {
        return new az_tag_delete_command_builder("az tag delete");
    }

    /**
     * List the entire set of tags on a specific resource.
     *
     * Syntax:
     * ```
     * az tag list [--query-examples]
     *             [--resource-id]
     *             [--subscription]
     * ```
     */
    static list(): az_tag_list_command_builder {
        return new az_tag_list_command_builder("az tag list");
    }

    /**
     * Deletes a predefined tag value for a predefined tag name.
     *
     * Syntax:
     * ```
     * az tag remove-value --name
     *                     --value
     *                     [--subscription]
     * ```
     *
     * @param {string} name The tag name.
     * @param {string} value The tag value.
     */
    static remove_value(name: string, value: string): az_tag_remove_value_command_builder {
        return new az_tag_remove_value_command_builder("az tag remove-value", name, value);
    }

    /**
     * Selectively update the set of tags on a specific resource.
     *
     * Syntax:
     * ```
     * az tag update --operation {Delete, Merge, Replace}
     *               --resource-id
     *               --tags
     *               [--subscription]
     * ```
     *
     * @param {'Delete' | 'Merge' | 'Replace'} operation The update operation. Options are Merge, Replace and Delete.
     * @param {string} resourceId The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged.
     * @param {string} tags The tags to be updated on the resource.
     */
    static update(operation: 'Delete' | 'Merge' | 'Replace', resourceId: string, tags: string): az_tag_update_command_builder {
        return new az_tag_update_command_builder("az tag update", operation, resourceId, tags);
    }
}

/**
 * Create a tag value.
 *
 * Syntax:
 * ```
 * az tag add-value --name
 *                  --value
 *                  [--subscription]
 * ```
 *
 * @param {string} name The tag name.
 * @param {string} value The tag value.
 */
class az_tag_add_value_command_builder extends CommandBuilder<az_tag_add_value_command_result> {
    constructor(commandPath: string, name: string, value: string) {
        super(commandPath);
        this.name(name)
        this.value(value)
    }

    /** The tag name. */
    name(value: string): az_tag_add_value_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The tag value. */
    value(value: string): az_tag_add_value_command_builder {
        this.setFlag("--value", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_tag_add_value_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create tags on a specific resource.
 *
 * Syntax:
 * ```
 * az tag create [--name]
 *               [--resource-id]
 *               [--subscription]
 *               [--tags]
 * ```
 */
class az_tag_create_command_builder extends CommandBuilder<az_tag_create_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the tag to create. */
    name(value: string): az_tag_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged. */
    resourceId(value: string): az_tag_create_command_builder {
        this.setFlag("--resource-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID. */
    subscription(value: string): az_tag_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The tags to be applied on the resource. */
    tags(value: string): az_tag_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Delete tags on a specific resource.
 *
 * Syntax:
 * ```
 * az tag delete [--name]
 *               [--resource-id]
 *               [--subscription]
 *               [--yes]
 * ```
 */
class az_tag_delete_command_builder extends CommandBuilder<az_tag_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the tag to be deleted. */
    name(value: string): az_tag_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged. */
    resourceId(value: string): az_tag_delete_command_builder {
        this.setFlag("--resource-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_tag_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_tag_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List the entire set of tags on a specific resource.
 *
 * Syntax:
 * ```
 * az tag list [--query-examples]
 *             [--resource-id]
 *             [--subscription]
 * ```
 */
class az_tag_list_command_builder extends CommandBuilder<az_tag_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_tag_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged. */
    resourceId(value: string): az_tag_list_command_builder {
        this.setFlag("--resource-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_tag_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Deletes a predefined tag value for a predefined tag name.
 *
 * Syntax:
 * ```
 * az tag remove-value --name
 *                     --value
 *                     [--subscription]
 * ```
 *
 * @param {string} name The tag name.
 * @param {string} value The tag value.
 */
class az_tag_remove_value_command_builder extends CommandBuilder<az_tag_remove_value_command_result> {
    constructor(commandPath: string, name: string, value: string) {
        super(commandPath);
        this.name(name)
        this.value(value)
    }

    /** The tag name. */
    name(value: string): az_tag_remove_value_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The tag value. */
    value(value: string): az_tag_remove_value_command_builder {
        this.setFlag("--value", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_tag_remove_value_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Selectively update the set of tags on a specific resource.
 *
 * Syntax:
 * ```
 * az tag update --operation {Delete, Merge, Replace}
 *               --resource-id
 *               --tags
 *               [--subscription]
 * ```
 *
 * @param {'Delete' | 'Merge' | 'Replace'} operation The update operation. Options are Merge, Replace and Delete.
 * @param {string} resourceId The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged.
 * @param {string} tags The tags to be updated on the resource.
 */
class az_tag_update_command_builder extends CommandBuilder<az_tag_update_command_result> {
    constructor(commandPath: string, operation: 'Delete' | 'Merge' | 'Replace', resourceId: string, tags: string) {
        super(commandPath);
        this.operation(operation)
        this.resourceId(resourceId)
        this.tags(tags)
    }

    /** The update operation. Options are Merge, Replace and Delete. */
    operation(value: 'Delete' | 'Merge' | 'Replace'): az_tag_update_command_builder {
        this.setFlag("--operation", value);
        return this;
    }

    /** The resource identifier for the entity being tagged. A resource, a resource group or a subscription may be tagged. */
    resourceId(value: string): az_tag_update_command_builder {
        this.setFlag("--resource-id", value);
        return this;
    }

    /** The tags to be updated on the resource. */
    tags(value: string): az_tag_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_tag_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
