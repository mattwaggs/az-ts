import { CommandBuilder } from '../base';

/** Manage areas for a project. */
export class az_boards_area_project {
    /**
     * Create area.
     *
     * Syntax:
     * ```
     * az boards area project create --name
     *                               [--detect {false, true}]
     *                               [--org]
     *                               [--path]
     *                               [--project]
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name of the area.
     */
    static az_boards_area_project_create(name: string): az_boards_area_project_create_command_builder {
        return new az_boards_area_project_create_command_builder("az boards area project create", name);
    }

    /**
     * Delete area.
     *
     * Syntax:
     * ```
     * az boards area project delete --path
     *                               [--detect {false, true}]
     *                               [--org]
     *                               [--project]
     *                               [--subscription]
     *                               [--yes]
     * ```
     *
     * @param {string} path Absolute path of an area. Example:ProjectNameAreaAreaName.
     */
    static az_boards_area_project_delete(path: string): az_boards_area_project_delete_command_builder {
        return new az_boards_area_project_delete_command_builder("az boards area project delete", path);
    }

    /**
     * List areas for a project.
     *
     * Syntax:
     * ```
     * az boards area project list [--depth]
     *                             [--detect {false, true}]
     *                             [--org]
     *                             [--path]
     *                             [--project]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     */
    static az_boards_area_project_list(): az_boards_area_project_list_command_builder {
        return new az_boards_area_project_list_command_builder("az boards area project list");
    }

    /**
     * Show area details for a project.
     *
     * Syntax:
     * ```
     * az boards area project show --id
     *                             [--detect {false, true}]
     *                             [--org]
     *                             [--project]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} id Area ID.
     */
    static az_boards_area_project_show(id: string): az_boards_area_project_show_command_builder {
        return new az_boards_area_project_show_command_builder("az boards area project show", id);
    }

    /**
     * Update area.
     *
     * Syntax:
     * ```
     * az boards area project update --path
     *                               [--child-id]
     *                               [--detect {false, true}]
     *                               [--name]
     *                               [--org]
     *                               [--project]
     *                               [--subscription]
     * ```
     *
     * @param {string} path Absolute path of an area. Example:ProjectNameAreaAreaName.
     */
    static az_boards_area_project_update(path: string): az_boards_area_project_update_command_builder {
        return new az_boards_area_project_update_command_builder("az boards area project update", path);
    }
}

/** Manage areas for a team. */
export class az_boards_area_team {
    /**
     * Add area to a team.
     *
     * Syntax:
     * ```
     * az boards area team add --path
     *                         --team
     *                         [--detect {false, true}]
     *                         [--include-sub-areas {false, true}]
     *                         [--org]
     *                         [--project]
     *                         [--set-as-default]
     *                         [--subscription]
     * ```
     *
     * @param {string} path Area path. Example:ProjectNameAreaName.
     * @param {string} team The name or id of the team.
     */
    static az_boards_area_team_add(path: string, team: string): az_boards_area_team_add_command_builder {
        return new az_boards_area_team_add_command_builder("az boards area team add", path, team);
    }

    /**
     * List areas for a team.
     *
     * Syntax:
     * ```
     * az boards area team list --team
     *                          [--detect {false, true}]
     *                          [--org]
     *                          [--project]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} team The name or id of the team.
     */
    static az_boards_area_team_list(team: string): az_boards_area_team_list_command_builder {
        return new az_boards_area_team_list_command_builder("az boards area team list", team);
    }

    /**
     * Remove area from a team.
     *
     * Syntax:
     * ```
     * az boards area team remove --path
     *                            --team
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--project]
     *                            [--subscription]
     * ```
     *
     * @param {string} path Area path. Example:ProjectNameAreaName.
     * @param {string} team The name or id of the team.
     */
    static az_boards_area_team_remove(path: string, team: string): az_boards_area_team_remove_command_builder {
        return new az_boards_area_team_remove_command_builder("az boards area team remove", path, team);
    }

    /**
     * Update team area.
     *
     * Syntax:
     * ```
     * az boards area team update --path
     *                            --team
     *                            [--detect {false, true}]
     *                            [--include-sub-areas {false, true}]
     *                            [--org]
     *                            [--project]
     *                            [--set-as-default]
     *                            [--subscription]
     * ```
     *
     * @param {string} path Area path. Example:ProjectNameAreaName.
     * @param {string} team The name or id of the team.
     */
    static az_boards_area_team_update(path: string, team: string): az_boards_area_team_update_command_builder {
        return new az_boards_area_team_update_command_builder("az boards area team update", path, team);
    }
}

/** Manage area paths. */
export class az_boards_area {
}

/** Manage iterations for a project. */
export class az_boards_iteration_project {
    /**
     * Create iteration.
     *
     * Syntax:
     * ```
     * az boards iteration project create --name
     *                                    [--detect {false, true}]
     *                                    [--finish-date]
     *                                    [--org]
     *                                    [--path]
     *                                    [--project]
     *                                    [--start-date]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the iteration.
     */
    static az_boards_iteration_project_create(name: string): az_boards_iteration_project_create_command_builder {
        return new az_boards_iteration_project_create_command_builder("az boards iteration project create", name);
    }

    /**
     * Delete iteration.
     *
     * Syntax:
     * ```
     * az boards iteration project delete --path
     *                                    [--detect {false, true}]
     *                                    [--org]
     *                                    [--project]
     *                                    [--subscription]
     *                                    [--yes]
     * ```
     *
     * @param {string} path Absolute path of an iteration. Example:ProjectNameIterationIterationName.
     */
    static az_boards_iteration_project_delete(path: string): az_boards_iteration_project_delete_command_builder {
        return new az_boards_iteration_project_delete_command_builder("az boards iteration project delete", path);
    }

    /**
     * List iterations for a project.
     *
     * Syntax:
     * ```
     * az boards iteration project list [--depth]
     *                                  [--detect {false, true}]
     *                                  [--org]
     *                                  [--path]
     *                                  [--project]
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     */
    static az_boards_iteration_project_list(): az_boards_iteration_project_list_command_builder {
        return new az_boards_iteration_project_list_command_builder("az boards iteration project list");
    }

    /**
     * Show iteration details for a project.
     *
     * Syntax:
     * ```
     * az boards iteration project show --id
     *                                  [--detect {false, true}]
     *                                  [--org]
     *                                  [--project]
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} id Iteration ID.
     */
    static az_boards_iteration_project_show(id: string): az_boards_iteration_project_show_command_builder {
        return new az_boards_iteration_project_show_command_builder("az boards iteration project show", id);
    }

    /**
     * Update project iteration.
     *
     * Syntax:
     * ```
     * az boards iteration project update --path
     *                                    [--child-id]
     *                                    [--detect {false, true}]
     *                                    [--finish-date]
     *                                    [--name]
     *                                    [--org]
     *                                    [--project]
     *                                    [--start-date]
     *                                    [--subscription]
     * ```
     *
     * @param {string} path Absolute path of an iteration. Example:ProjectNameIterationIterationName.
     */
    static az_boards_iteration_project_update(path: string): az_boards_iteration_project_update_command_builder {
        return new az_boards_iteration_project_update_command_builder("az boards iteration project update", path);
    }
}

/** Manage iterations for a team. */
export class az_boards_iteration_team {
    /**
     * Add iteration to a team.
     *
     * Syntax:
     * ```
     * az boards iteration team add --id
     *                              --team
     *                              [--detect {false, true}]
     *                              [--org]
     *                              [--project]
     *                              [--subscription]
     * ```
     *
     * @param {string} id Identifier of the iteration.
     * @param {string} team Name or ID of the team.
     */
    static az_boards_iteration_team_add(id: string, team: string): az_boards_iteration_team_add_command_builder {
        return new az_boards_iteration_team_add_command_builder("az boards iteration team add", id, team);
    }

    /**
     * List iterations for a team.
     *
     * Syntax:
     * ```
     * az boards iteration team list --team
     *                               [--detect {false, true}]
     *                               [--org]
     *                               [--project]
     *                               [--query-examples]
     *                               [--subscription]
     *                               [--timeframe]
     * ```
     *
     * @param {string} team The name or id of the team.
     */
    static az_boards_iteration_team_list(team: string): az_boards_iteration_team_list_command_builder {
        return new az_boards_iteration_team_list_command_builder("az boards iteration team list", team);
    }

    /**
     * List work-items for an iteration.
     *
     * Syntax:
     * ```
     * az boards iteration team list-work-items --id
     *                                          --team
     *                                          [--detect {false, true}]
     *                                          [--org]
     *                                          [--project]
     *                                          [--subscription]
     * ```
     *
     * @param {string} id Identifier of the iteration.
     * @param {string} team Name or ID of the team.
     */
    static az_boards_iteration_team_list_work_items(id: string, team: string): az_boards_iteration_team_list_work_items_command_builder {
        return new az_boards_iteration_team_list_work_items_command_builder("az boards iteration team list-work-items", id, team);
    }

    /**
     * Remove iteration from a team.
     *
     * Syntax:
     * ```
     * az boards iteration team remove --id
     *                                 --team
     *                                 [--detect {false, true}]
     *                                 [--org]
     *                                 [--project]
     *                                 [--subscription]
     * ```
     *
     * @param {string} id Identifier of the iteration.
     * @param {string} team Name or ID of the team.
     */
    static az_boards_iteration_team_remove(id: string, team: string): az_boards_iteration_team_remove_command_builder {
        return new az_boards_iteration_team_remove_command_builder("az boards iteration team remove", id, team);
    }

    /**
     * Set backlog iteration for a team.
     *
     * Syntax:
     * ```
     * az boards iteration team set-backlog-iteration --id
     *                                                --team
     *                                                [--detect {false, true}]
     *                                                [--org]
     *                                                [--project]
     *                                                [--subscription]
     * ```
     *
     * @param {string} id Identifier of the iteration which needs to be set as backlog iteration.
     * @param {string} team Name or ID of the team.
     */
    static az_boards_iteration_team_set_backlog_iteration(id: string, team: string): az_boards_iteration_team_set_backlog_iteration_command_builder {
        return new az_boards_iteration_team_set_backlog_iteration_command_builder("az boards iteration team set-backlog-iteration", id, team);
    }

    /**
     * Set default iteration for a team.
     *
     * Syntax:
     * ```
     * az boards iteration team set-default-iteration --team
     *                                                [--default-iteration-macro]
     *                                                [--detect {false, true}]
     *                                                [--id]
     *                                                [--org]
     *                                                [--project]
     *                                                [--subscription]
     * ```
     *
     * @param {string} team Name or ID of the team.
     */
    static az_boards_iteration_team_set_default_iteration(team: string): az_boards_iteration_team_set_default_iteration_command_builder {
        return new az_boards_iteration_team_set_default_iteration_command_builder("az boards iteration team set-default-iteration", team);
    }

    /**
     * Show backlog iteration for a team.
     *
     * Syntax:
     * ```
     * az boards iteration team show-backlog-iteration --team
     *                                                 [--detect {false, true}]
     *                                                 [--org]
     *                                                 [--project]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} team Name or ID of the team.
     */
    static az_boards_iteration_team_show_backlog_iteration(team: string): az_boards_iteration_team_show_backlog_iteration_command_builder {
        return new az_boards_iteration_team_show_backlog_iteration_command_builder("az boards iteration team show-backlog-iteration", team);
    }

    /**
     * Show default iteration for a team.
     *
     * Syntax:
     * ```
     * az boards iteration team show-default-iteration --team
     *                                                 [--detect {false, true}]
     *                                                 [--org]
     *                                                 [--project]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} team Name or ID of the team.
     */
    static az_boards_iteration_team_show_default_iteration(team: string): az_boards_iteration_team_show_default_iteration_command_builder {
        return new az_boards_iteration_team_show_default_iteration_command_builder("az boards iteration team show-default-iteration", team);
    }
}

/** Manage iterations. */
export class az_boards_iteration {
}

/** Manage work item relations. */
export class az_boards_work_item_relation {
    /**
     * Add relation(s) to work item.
     *
     * Syntax:
     * ```
     * az boards work-item relation add --id
     *                                  --relation-type
     *                                  --target-id
     *                                  [--detect {false, true}]
     *                                  [--org]
     *                                  [--subscription]
     * ```
     *
     * @param {string} id The ID of the work item.
     * @param {string} relationType Relation type to create. Example: parent, child.
     * @param {string} targetId ID(s) of work-items to create relation with.                          Multiple values can be passed comma separated. Example: 1,2.
     */
    static az_boards_work_item_relation_add(id: string, relationType: string, targetId: string): az_boards_work_item_relation_add_command_builder {
        return new az_boards_work_item_relation_add_command_builder("az boards work-item relation add", id, relationType, targetId);
    }

    /**
     * List work item relations supported in the organization.
     *
     * Syntax:
     * ```
     * az boards work-item relation list-type [--detect {false, true}]
     *                                        [--org]
     *                                        [--subscription]
     * ```
     */
    static az_boards_work_item_relation_list_type(): az_boards_work_item_relation_list_type_command_builder {
        return new az_boards_work_item_relation_list_type_command_builder("az boards work-item relation list-type");
    }

    /**
     * Remove relation(s) from work item.
     *
     * Syntax:
     * ```
     * az boards work-item relation remove --id
     *                                     --relation-type
     *                                     --target-id
     *                                     [--detect {false, true}]
     *                                     [--org]
     *                                     [--subscription]
     *                                     [--yes]
     * ```
     *
     * @param {string} id The ID of the work item.
     * @param {string} relationType Relation type to remove. Example: parent, child.
     * @param {string} targetId ID(s) of work-items to remove relation from.                          Multiple values can be passed comma separated. Example: 1,2.
     */
    static az_boards_work_item_relation_remove(id: string, relationType: string, targetId: string): az_boards_work_item_relation_remove_command_builder {
        return new az_boards_work_item_relation_remove_command_builder("az boards work-item relation remove", id, relationType, targetId);
    }

    /**
     * Get work item, fill relations with friendly name.
     *
     * Syntax:
     * ```
     * az boards work-item relation show --id
     *                                   [--detect {false, true}]
     *                                   [--org]
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} id The ID of the work item.
     */
    static az_boards_work_item_relation_show(id: string): az_boards_work_item_relation_show_command_builder {
        return new az_boards_work_item_relation_show_command_builder("az boards work-item relation show", id);
    }
}

/** Manage work items. */
export class az_boards_work_item {
    /**
     * Create a work item.
     *
     * Syntax:
     * ```
     * az boards work-item create --title
     *                            --type
     *                            [--area]
     *                            [--assigned-to]
     *                            [--description]
     *                            [--detect {false, true}]
     *                            [--discussion]
     *                            [--fields]
     *                            [--iteration]
     *                            [--open]
     *                            [--org]
     *                            [--project]
     *                            [--reason]
     *                            [--subscription]
     * ```
     *
     * @param {string} title Title of the work item.
     * @param {string} type Name of the work item type (e.g. Bug).
     */
    static az_boards_work_item_create(title: string, type: string): az_boards_work_item_create_command_builder {
        return new az_boards_work_item_create_command_builder("az boards work-item create", title, type);
    }

    /**
     * Delete a work item.
     *
     * Syntax:
     * ```
     * az boards work-item delete --id
     *                            [--destroy]
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--project]
     *                            [--subscription]
     *                            [--yes]
     * ```
     *
     * @param {string} id Unique id of the work item.
     */
    static az_boards_work_item_delete(id: string): az_boards_work_item_delete_command_builder {
        return new az_boards_work_item_delete_command_builder("az boards work-item delete", id);
    }

    /**
     * Show details for a work item.
     *
     * Syntax:
     * ```
     * az boards work-item show --id
     *                          [--as-of]
     *                          [--detect {false, true}]
     *                          [--expand {all, fields, links, none, relations}]
     *                          [--fields]
     *                          [--open]
     *                          [--org]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} id The ID of the work item.
     */
    static az_boards_work_item_show(id: string): az_boards_work_item_show_command_builder {
        return new az_boards_work_item_show_command_builder("az boards work-item show", id);
    }

    /**
     * Update work items.
     *
     * Syntax:
     * ```
     * az boards work-item update --id
     *                            [--area]
     *                            [--assigned-to]
     *                            [--description]
     *                            [--detect {false, true}]
     *                            [--discussion]
     *                            [--fields]
     *                            [--iteration]
     *                            [--open]
     *                            [--org]
     *                            [--reason]
     *                            [--state]
     *                            [--subscription]
     *                            [--title]
     * ```
     *
     * @param {string} id The id of the work item to update.
     */
    static az_boards_work_item_update(id: string): az_boards_work_item_update_command_builder {
        return new az_boards_work_item_update_command_builder("az boards work-item update", id);
    }
}

/** Manage Azure Boards. */
export class az_boards {
    /**
     * Query for a list of work items.
     *
     * Syntax:
     * ```
     * az boards query [--detect {false, true}]
     *                 [--id]
     *                 [--org]
     *                 [--path]
     *                 [--project]
     *                 [--subscription]
     *                 [--wiql]
     * ```
     */
    static az_boards_query(): az_boards_query_command_builder {
        return new az_boards_query_command_builder("az boards query");
    }
}

/**
 * Create area.
 *
 * Syntax:
 * ```
 * az boards area project create --name
 *                               [--detect {false, true}]
 *                               [--org]
 *                               [--path]
 *                               [--project]
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name of the area.
 */
class az_boards_area_project_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the area. */
    name(value: string): az_boards_area_project_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Absolute path of an area. Creates an area at root level if --path is not specified. Example:ProjectNameAreaAreaName. */
    path(value: string): az_boards_area_project_create_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete area.
 *
 * Syntax:
 * ```
 * az boards area project delete --path
 *                               [--detect {false, true}]
 *                               [--org]
 *                               [--project]
 *                               [--subscription]
 *                               [--yes]
 * ```
 *
 * @param {string} path Absolute path of an area. Example:ProjectNameAreaAreaName.
 */
class az_boards_area_project_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** Absolute path of an area. Example:ProjectNameAreaAreaName. */
    path(value: string): az_boards_area_project_delete_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_boards_area_project_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List areas for a project.
 *
 * Syntax:
 * ```
 * az boards area project list [--depth]
 *                             [--detect {false, true}]
 *                             [--org]
 *                             [--path]
 *                             [--project]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 */
class az_boards_area_project_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Depth of child nodes to be fetched. Example: --depth 3. */
    depth(value: string): az_boards_area_project_list_command_builder {
        this.setFlag("--depth", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Absolute path of an area. Example:ProjectNameAreaAreaName. */
    path(value: string): az_boards_area_project_list_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_area_project_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show area details for a project.
 *
 * Syntax:
 * ```
 * az boards area project show --id
 *                             [--detect {false, true}]
 *                             [--org]
 *                             [--project]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} id Area ID.
 */
class az_boards_area_project_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Area ID. */
    id(value: string): az_boards_area_project_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_show_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_area_project_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update area.
 *
 * Syntax:
 * ```
 * az boards area project update --path
 *                               [--child-id]
 *                               [--detect {false, true}]
 *                               [--name]
 *                               [--org]
 *                               [--project]
 *                               [--subscription]
 * ```
 *
 * @param {string} path Absolute path of an area. Example:ProjectNameAreaAreaName.
 */
class az_boards_area_project_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** Absolute path of an area. Example:ProjectNameAreaAreaName. */
    path(value: string): az_boards_area_project_update_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Move an existing area and add as child node for this area. */
    childId(value: string): az_boards_area_project_update_command_builder {
        this.setFlag("--child-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** New name of the area. */
    name(value: string): az_boards_area_project_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add area to a team.
 *
 * Syntax:
 * ```
 * az boards area team add --path
 *                         --team
 *                         [--detect {false, true}]
 *                         [--include-sub-areas {false, true}]
 *                         [--org]
 *                         [--project]
 *                         [--set-as-default]
 *                         [--subscription]
 * ```
 *
 * @param {string} path Area path. Example:ProjectNameAreaName.
 * @param {string} team The name or id of the team.
 */
class az_boards_area_team_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, path: string, team: string) {
        super(commandParent);
        this.path(path)
        this.team(team)
    }

    /** Area path. Example:ProjectNameAreaName. */
    path(value: string): az_boards_area_team_add_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** The name or id of the team. */
    team(value: string): az_boards_area_team_add_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_team_add_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Include child nodes of this area. */
    includeSubAreas(value: boolean): az_boards_area_team_add_command_builder {
        this.setFlag("--include-sub-areas", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_team_add_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_team_add_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Set this area path as default area for this team. Default: False. */
    setAsDefault(value: string): az_boards_area_team_add_command_builder {
        this.setFlag("--set-as-default", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_team_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List areas for a team.
 *
 * Syntax:
 * ```
 * az boards area team list --team
 *                          [--detect {false, true}]
 *                          [--org]
 *                          [--project]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} team The name or id of the team.
 */
class az_boards_area_team_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, team: string) {
        super(commandParent);
        this.team(team)
    }

    /** The name or id of the team. */
    team(value: string): az_boards_area_team_list_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_team_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_team_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_team_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_area_team_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_team_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove area from a team.
 *
 * Syntax:
 * ```
 * az boards area team remove --path
 *                            --team
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--project]
 *                            [--subscription]
 * ```
 *
 * @param {string} path Area path. Example:ProjectNameAreaName.
 * @param {string} team The name or id of the team.
 */
class az_boards_area_team_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, path: string, team: string) {
        super(commandParent);
        this.path(path)
        this.team(team)
    }

    /** Area path. Example:ProjectNameAreaName. */
    path(value: string): az_boards_area_team_remove_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** The name or id of the team. */
    team(value: string): az_boards_area_team_remove_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_team_remove_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_team_remove_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_team_remove_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_team_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update team area.
 *
 * Syntax:
 * ```
 * az boards area team update --path
 *                            --team
 *                            [--detect {false, true}]
 *                            [--include-sub-areas {false, true}]
 *                            [--org]
 *                            [--project]
 *                            [--set-as-default]
 *                            [--subscription]
 * ```
 *
 * @param {string} path Area path. Example:ProjectNameAreaName.
 * @param {string} team The name or id of the team.
 */
class az_boards_area_team_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, path: string, team: string) {
        super(commandParent);
        this.path(path)
        this.team(team)
    }

    /** Area path. Example:ProjectNameAreaName. */
    path(value: string): az_boards_area_team_update_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** The name or id of the team. */
    team(value: string): az_boards_area_team_update_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_team_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Include child nodes of this area. */
    includeSubAreas(value: boolean): az_boards_area_team_update_command_builder {
        this.setFlag("--include-sub-areas", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_team_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_team_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Set as default team area path. Default: False. */
    setAsDefault(value: string): az_boards_area_team_update_command_builder {
        this.setFlag("--set-as-default", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_team_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create iteration.
 *
 * Syntax:
 * ```
 * az boards iteration project create --name
 *                                    [--detect {false, true}]
 *                                    [--finish-date]
 *                                    [--org]
 *                                    [--path]
 *                                    [--project]
 *                                    [--start-date]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the iteration.
 */
class az_boards_iteration_project_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the iteration. */
    name(value: string): az_boards_iteration_project_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Finish date of the iteration. Example : "2019-06-21". */
    finishDate(value: string): az_boards_iteration_project_create_command_builder {
        this.setFlag("--finish-date", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Absolute path of an iteration. Creates an iteration at root level if --path is not specified. Example:ProjectNameIterationIterationName. */
    path(value: string): az_boards_iteration_project_create_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Start date of the iteration. Example : "2019-06-03". */
    startDate(value: string): az_boards_iteration_project_create_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete iteration.
 *
 * Syntax:
 * ```
 * az boards iteration project delete --path
 *                                    [--detect {false, true}]
 *                                    [--org]
 *                                    [--project]
 *                                    [--subscription]
 *                                    [--yes]
 * ```
 *
 * @param {string} path Absolute path of an iteration. Example:ProjectNameIterationIterationName.
 */
class az_boards_iteration_project_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** Absolute path of an iteration. Example:ProjectNameIterationIterationName. */
    path(value: string): az_boards_iteration_project_delete_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_boards_iteration_project_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List iterations for a project.
 *
 * Syntax:
 * ```
 * az boards iteration project list [--depth]
 *                                  [--detect {false, true}]
 *                                  [--org]
 *                                  [--path]
 *                                  [--project]
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 */
class az_boards_iteration_project_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Depth of child nodes to be fetched. Example: --depth 3. */
    depth(value: string): az_boards_iteration_project_list_command_builder {
        this.setFlag("--depth", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Absolute path of an iteration. Example:ProjectNameIterationIterationName. */
    path(value: string): az_boards_iteration_project_list_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_iteration_project_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show iteration details for a project.
 *
 * Syntax:
 * ```
 * az boards iteration project show --id
 *                                  [--detect {false, true}]
 *                                  [--org]
 *                                  [--project]
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} id Iteration ID.
 */
class az_boards_iteration_project_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Iteration ID. */
    id(value: string): az_boards_iteration_project_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_show_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_iteration_project_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update project iteration.
 *
 * Syntax:
 * ```
 * az boards iteration project update --path
 *                                    [--child-id]
 *                                    [--detect {false, true}]
 *                                    [--finish-date]
 *                                    [--name]
 *                                    [--org]
 *                                    [--project]
 *                                    [--start-date]
 *                                    [--subscription]
 * ```
 *
 * @param {string} path Absolute path of an iteration. Example:ProjectNameIterationIterationName.
 */
class az_boards_iteration_project_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, path: string) {
        super(commandParent);
        this.path(path)
    }

    /** Absolute path of an iteration. Example:ProjectNameIterationIterationName. */
    path(value: string): az_boards_iteration_project_update_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Move an existing iteration and add as child node for this iteration. */
    childId(value: string): az_boards_iteration_project_update_command_builder {
        this.setFlag("--child-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Finish date of the iteration. Example : "2019-06-21". */
    finishDate(value: string): az_boards_iteration_project_update_command_builder {
        this.setFlag("--finish-date", value);
        return this;
    }

    /** New name of the iteration. */
    name(value: string): az_boards_iteration_project_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Start date of the iteration. Example : "2019-06-03". */
    startDate(value: string): az_boards_iteration_project_update_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add iteration to a team.
 *
 * Syntax:
 * ```
 * az boards iteration team add --id
 *                              --team
 *                              [--detect {false, true}]
 *                              [--org]
 *                              [--project]
 *                              [--subscription]
 * ```
 *
 * @param {string} id Identifier of the iteration.
 * @param {string} team Name or ID of the team.
 */
class az_boards_iteration_team_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, team: string) {
        super(commandParent);
        this.id(id)
        this.team(team)
    }

    /** Identifier of the iteration. */
    id(value: string): az_boards_iteration_team_add_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_add_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_add_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_add_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_add_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List iterations for a team.
 *
 * Syntax:
 * ```
 * az boards iteration team list --team
 *                               [--detect {false, true}]
 *                               [--org]
 *                               [--project]
 *                               [--query-examples]
 *                               [--subscription]
 *                               [--timeframe]
 * ```
 *
 * @param {string} team The name or id of the team.
 */
class az_boards_iteration_team_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, team: string) {
        super(commandParent);
        this.team(team)
    }

    /** The name or id of the team. */
    team(value: string): az_boards_iteration_team_list_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_iteration_team_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A filter for which iterations are returned based on relative time. Only Current is supported currently. */
    timeframe(value: string): az_boards_iteration_team_list_command_builder {
        this.setFlag("--timeframe", value);
        return this;
    }
}

/**
 * List work-items for an iteration.
 *
 * Syntax:
 * ```
 * az boards iteration team list-work-items --id
 *                                          --team
 *                                          [--detect {false, true}]
 *                                          [--org]
 *                                          [--project]
 *                                          [--subscription]
 * ```
 *
 * @param {string} id Identifier of the iteration.
 * @param {string} team Name or ID of the team.
 */
class az_boards_iteration_team_list_work_items_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, team: string) {
        super(commandParent);
        this.id(id)
        this.team(team)
    }

    /** Identifier of the iteration. */
    id(value: string): az_boards_iteration_team_list_work_items_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_list_work_items_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_list_work_items_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_list_work_items_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_list_work_items_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_list_work_items_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove iteration from a team.
 *
 * Syntax:
 * ```
 * az boards iteration team remove --id
 *                                 --team
 *                                 [--detect {false, true}]
 *                                 [--org]
 *                                 [--project]
 *                                 [--subscription]
 * ```
 *
 * @param {string} id Identifier of the iteration.
 * @param {string} team Name or ID of the team.
 */
class az_boards_iteration_team_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, team: string) {
        super(commandParent);
        this.id(id)
        this.team(team)
    }

    /** Identifier of the iteration. */
    id(value: string): az_boards_iteration_team_remove_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_remove_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_remove_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_remove_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_remove_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set backlog iteration for a team.
 *
 * Syntax:
 * ```
 * az boards iteration team set-backlog-iteration --id
 *                                                --team
 *                                                [--detect {false, true}]
 *                                                [--org]
 *                                                [--project]
 *                                                [--subscription]
 * ```
 *
 * @param {string} id Identifier of the iteration which needs to be set as backlog iteration.
 * @param {string} team Name or ID of the team.
 */
class az_boards_iteration_team_set_backlog_iteration_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, team: string) {
        super(commandParent);
        this.id(id)
        this.team(team)
    }

    /** Identifier of the iteration which needs to be set as backlog iteration. */
    id(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_set_backlog_iteration_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Set default iteration for a team.
 *
 * Syntax:
 * ```
 * az boards iteration team set-default-iteration --team
 *                                                [--default-iteration-macro]
 *                                                [--detect {false, true}]
 *                                                [--id]
 *                                                [--org]
 *                                                [--project]
 *                                                [--subscription]
 * ```
 *
 * @param {string} team Name or ID of the team.
 */
class az_boards_iteration_team_set_default_iteration_command_builder extends CommandBuilder {
    constructor(commandPath: string, team: string) {
        super(commandParent);
        this.team(team)
    }

    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_set_default_iteration_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Default iteration macro. Example: @CurrentIteration. */
    defaultIterationMacro(value: string): az_boards_iteration_team_set_default_iteration_command_builder {
        this.setFlag("--default-iteration-macro", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_set_default_iteration_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Identifier of the iteration which needs to be set as default. */
    id(value: string): az_boards_iteration_team_set_default_iteration_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_set_default_iteration_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_set_default_iteration_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_set_default_iteration_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show backlog iteration for a team.
 *
 * Syntax:
 * ```
 * az boards iteration team show-backlog-iteration --team
 *                                                 [--detect {false, true}]
 *                                                 [--org]
 *                                                 [--project]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} team Name or ID of the team.
 */
class az_boards_iteration_team_show_backlog_iteration_command_builder extends CommandBuilder {
    constructor(commandPath: string, team: string) {
        super(commandParent);
        this.team(team)
    }

    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_show_backlog_iteration_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_show_backlog_iteration_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_show_backlog_iteration_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_show_backlog_iteration_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_show_backlog_iteration_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show default iteration for a team.
 *
 * Syntax:
 * ```
 * az boards iteration team show-default-iteration --team
 *                                                 [--detect {false, true}]
 *                                                 [--org]
 *                                                 [--project]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} team Name or ID of the team.
 */
class az_boards_iteration_team_show_default_iteration_command_builder extends CommandBuilder {
    constructor(commandPath: string, team: string) {
        super(commandParent);
        this.team(team)
    }

    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_show_default_iteration_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_show_default_iteration_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_show_default_iteration_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_show_default_iteration_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_show_default_iteration_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add relation(s) to work item.
 *
 * Syntax:
 * ```
 * az boards work-item relation add --id
 *                                  --relation-type
 *                                  --target-id
 *                                  [--detect {false, true}]
 *                                  [--org]
 *                                  [--subscription]
 * ```
 *
 * @param {string} id The ID of the work item.
 * @param {string} relationType Relation type to create. Example: parent, child.
 * @param {string} targetId ID(s) of work-items to create relation with.                          Multiple values can be passed comma separated. Example: 1,2.
 */
class az_boards_work_item_relation_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, relationType: string, targetId: string) {
        super(commandParent);
        this.id(id)
        this.relationType(relationType)
        this.targetId(targetId)
    }

    /** The ID of the work item. */
    id(value: string): az_boards_work_item_relation_add_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Relation type to create. Example: parent, child. */
    relationType(value: string): az_boards_work_item_relation_add_command_builder {
        this.setFlag("--relation-type", value);
        return this;
    }

    /** ID(s) of work-items to create relation with.                          Multiple values can be passed comma separated. Example: 1,2. */
    targetId(value: string): az_boards_work_item_relation_add_command_builder {
        this.setFlag("--target-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_relation_add_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_relation_add_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_relation_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List work item relations supported in the organization.
 *
 * Syntax:
 * ```
 * az boards work-item relation list-type [--detect {false, true}]
 *                                        [--org]
 *                                        [--subscription]
 * ```
 */
class az_boards_work_item_relation_list_type_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_relation_list_type_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_relation_list_type_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_relation_list_type_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove relation(s) from work item.
 *
 * Syntax:
 * ```
 * az boards work-item relation remove --id
 *                                     --relation-type
 *                                     --target-id
 *                                     [--detect {false, true}]
 *                                     [--org]
 *                                     [--subscription]
 *                                     [--yes]
 * ```
 *
 * @param {string} id The ID of the work item.
 * @param {string} relationType Relation type to remove. Example: parent, child.
 * @param {string} targetId ID(s) of work-items to remove relation from.                          Multiple values can be passed comma separated. Example: 1,2.
 */
class az_boards_work_item_relation_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, relationType: string, targetId: string) {
        super(commandParent);
        this.id(id)
        this.relationType(relationType)
        this.targetId(targetId)
    }

    /** The ID of the work item. */
    id(value: string): az_boards_work_item_relation_remove_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Relation type to remove. Example: parent, child. */
    relationType(value: string): az_boards_work_item_relation_remove_command_builder {
        this.setFlag("--relation-type", value);
        return this;
    }

    /** ID(s) of work-items to remove relation from.                          Multiple values can be passed comma separated. Example: 1,2. */
    targetId(value: string): az_boards_work_item_relation_remove_command_builder {
        this.setFlag("--target-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_relation_remove_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_relation_remove_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_relation_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_boards_work_item_relation_remove_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Get work item, fill relations with friendly name.
 *
 * Syntax:
 * ```
 * az boards work-item relation show --id
 *                                   [--detect {false, true}]
 *                                   [--org]
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} id The ID of the work item.
 */
class az_boards_work_item_relation_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** The ID of the work item. */
    id(value: string): az_boards_work_item_relation_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_relation_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_relation_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_work_item_relation_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_relation_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a work item.
 *
 * Syntax:
 * ```
 * az boards work-item create --title
 *                            --type
 *                            [--area]
 *                            [--assigned-to]
 *                            [--description]
 *                            [--detect {false, true}]
 *                            [--discussion]
 *                            [--fields]
 *                            [--iteration]
 *                            [--open]
 *                            [--org]
 *                            [--project]
 *                            [--reason]
 *                            [--subscription]
 * ```
 *
 * @param {string} title Title of the work item.
 * @param {string} type Name of the work item type (e.g. Bug).
 */
class az_boards_work_item_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, title: string, type: string) {
        super(commandParent);
        this.title(title)
        this.type(type)
    }

    /** Title of the work item. */
    title(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--title", value);
        return this;
    }

    /** Name of the work item type (e.g. Bug). */
    type(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--type", value);
        return this;
    }

    /** Area the work item is assigned to (e.g. Demos). */
    area(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--area", value);
        return this;
    }

    /** Name of the person the work item is assigned-to (e.g. fabrikam). */
    assignedTo(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--assigned-to", value);
        return this;
    }

    /** Description of the work item. */
    description(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Comment to add to a discussion in a work item. */
    discussion(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--discussion", value);
        return this;
    }

    /** Space separated "field=value" pairs for custom fields you would like to set. Refer <a href="https://aka.ms/azure-devops-cli-field-api">https://aka.ms/azure-devops-cli-field-api</a> for more details on fields. */
    fields(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--fields", value);
        return this;
    }

    /** Iteration path of the work item (e.g. DemosIteration 1). */
    iteration(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--iteration", value);
        return this;
    }

    /** Open the work item in the default web browser. */
    open(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Reason for the state of the work item. */
    reason(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--reason", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Delete a work item.
 *
 * Syntax:
 * ```
 * az boards work-item delete --id
 *                            [--destroy]
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--project]
 *                            [--subscription]
 *                            [--yes]
 * ```
 *
 * @param {string} id Unique id of the work item.
 */
class az_boards_work_item_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Unique id of the work item. */
    id(value: string): az_boards_work_item_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Permanently delete this work item. */
    destroy(value: string): az_boards_work_item_delete_command_builder {
        this.setFlag("--destroy", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_work_item_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_boards_work_item_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Show details for a work item.
 *
 * Syntax:
 * ```
 * az boards work-item show --id
 *                          [--as-of]
 *                          [--detect {false, true}]
 *                          [--expand {all, fields, links, none, relations}]
 *                          [--fields]
 *                          [--open]
 *                          [--org]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} id The ID of the work item.
 */
class az_boards_work_item_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** The ID of the work item. */
    id(value: string): az_boards_work_item_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Work item details as of a particular date and time. Provide a date or date time string. Assumes local time zone. Example: '2019-01-20', '2019-01-20 00:20:00'. For UTC, append 'UTC' to the date time string, '2019-01-20 00:20:00 UTC'. */
    asOf(value: string): az_boards_work_item_show_command_builder {
        this.setFlag("--as-of", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** The expand parameters for work item attributes. */
    expand(value: 'all' | 'fields' | 'links' | 'none' | 'relations'): az_boards_work_item_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Comma-separated list of requested fields. Example:System.Id,System.AreaPath. Refer https://aka.ms/azure-devops-cli-field-api for more details on fields. */
    fields(value: string): az_boards_work_item_show_command_builder {
        this.setFlag("--fields", value);
        return this;
    }

    /** Open the work item in the default web browser. */
    open(value: string): az_boards_work_item_show_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_work_item_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update work items.
 *
 * Syntax:
 * ```
 * az boards work-item update --id
 *                            [--area]
 *                            [--assigned-to]
 *                            [--description]
 *                            [--detect {false, true}]
 *                            [--discussion]
 *                            [--fields]
 *                            [--iteration]
 *                            [--open]
 *                            [--org]
 *                            [--reason]
 *                            [--state]
 *                            [--subscription]
 *                            [--title]
 * ```
 *
 * @param {string} id The id of the work item to update.
 */
class az_boards_work_item_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** The id of the work item to update. */
    id(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Area the work item is assigned to (e.g. Demos). */
    area(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--area", value);
        return this;
    }

    /** Name of the person the work item is assigned-to (e.g. fabrikam). */
    assignedTo(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--assigned-to", value);
        return this;
    }

    /** Description of the work item. */
    description(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Comment to add to a discussion in a work item. */
    discussion(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--discussion", value);
        return this;
    }

    /** Space separated "field=value" pairs for custom fields you would like to set. Refer <a href="https://aka.ms/azure-devops-cli-field-api">https://aka.ms/azure-devops-cli-field-api</a> for more details on fields. */
    fields(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--fields", value);
        return this;
    }

    /** Iteration path of the work item (e.g. DemosIteration 1). */
    iteration(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--iteration", value);
        return this;
    }

    /** Open the work item in the default web browser. */
    open(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Reason for the state of the work item. */
    reason(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--reason", value);
        return this;
    }

    /** State of the work item (e.g. active). */
    state(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--state", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Title of the work item. */
    title(value: string): az_boards_work_item_update_command_builder {
        this.setFlag("--title", value);
        return this;
    }
}

/**
 * Query for a list of work items.
 *
 * Syntax:
 * ```
 * az boards query [--detect {false, true}]
 *                 [--id]
 *                 [--org]
 *                 [--path]
 *                 [--project]
 *                 [--subscription]
 *                 [--wiql]
 * ```
 */
class az_boards_query_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_boards_query_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** The ID of an existing query.  Required unless --path or --wiql are specified. */
    id(value: string): az_boards_query_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_query_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** The path of an existing query.  Ignored if --id is specified. */
    path(value: string): az_boards_query_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_query_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_query_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The query in Work Item Query Language format.  Ignored if --id or --path is specified. */
    wiql(value: string): az_boards_query_command_builder {
        this.setFlag("--wiql", value);
        return this;
    }
}
