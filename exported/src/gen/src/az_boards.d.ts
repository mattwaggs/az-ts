import { CommandBuilder } from '../base';
import { az_boards_area_project_create_command_result } from './models/az_boards_area_project_create_command_result';
import { az_boards_area_project_delete_command_result } from './models/az_boards_area_project_delete_command_result';
import { az_boards_area_project_list_command_result } from './models/az_boards_area_project_list_command_result';
import { az_boards_area_project_show_command_result } from './models/az_boards_area_project_show_command_result';
import { az_boards_area_project_update_command_result } from './models/az_boards_area_project_update_command_result';
import { az_boards_area_team_add_command_result } from './models/az_boards_area_team_add_command_result';
import { az_boards_area_team_list_command_result } from './models/az_boards_area_team_list_command_result';
import { az_boards_area_team_remove_command_result } from './models/az_boards_area_team_remove_command_result';
import { az_boards_area_team_update_command_result } from './models/az_boards_area_team_update_command_result';
import { az_boards_iteration_project_create_command_result } from './models/az_boards_iteration_project_create_command_result';
import { az_boards_iteration_project_delete_command_result } from './models/az_boards_iteration_project_delete_command_result';
import { az_boards_iteration_project_list_command_result } from './models/az_boards_iteration_project_list_command_result';
import { az_boards_iteration_project_show_command_result } from './models/az_boards_iteration_project_show_command_result';
import { az_boards_iteration_project_update_command_result } from './models/az_boards_iteration_project_update_command_result';
import { az_boards_iteration_team_add_command_result } from './models/az_boards_iteration_team_add_command_result';
import { az_boards_iteration_team_list_command_result } from './models/az_boards_iteration_team_list_command_result';
import { az_boards_iteration_team_list_work_items_command_result } from './models/az_boards_iteration_team_list_work_items_command_result';
import { az_boards_iteration_team_remove_command_result } from './models/az_boards_iteration_team_remove_command_result';
import { az_boards_iteration_team_set_backlog_iteration_command_result } from './models/az_boards_iteration_team_set_backlog_iteration_command_result';
import { az_boards_iteration_team_set_default_iteration_command_result } from './models/az_boards_iteration_team_set_default_iteration_command_result';
import { az_boards_iteration_team_show_backlog_iteration_command_result } from './models/az_boards_iteration_team_show_backlog_iteration_command_result';
import { az_boards_iteration_team_show_default_iteration_command_result } from './models/az_boards_iteration_team_show_default_iteration_command_result';
import { az_boards_work_item_relation_add_command_result } from './models/az_boards_work_item_relation_add_command_result';
import { az_boards_work_item_relation_list_type_command_result } from './models/az_boards_work_item_relation_list_type_command_result';
import { az_boards_work_item_relation_remove_command_result } from './models/az_boards_work_item_relation_remove_command_result';
import { az_boards_work_item_relation_show_command_result } from './models/az_boards_work_item_relation_show_command_result';
import { az_boards_work_item_create_command_result } from './models/az_boards_work_item_create_command_result';
import { az_boards_work_item_delete_command_result } from './models/az_boards_work_item_delete_command_result';
import { az_boards_work_item_show_command_result } from './models/az_boards_work_item_show_command_result';
import { az_boards_work_item_update_command_result } from './models/az_boards_work_item_update_command_result';
import { az_boards_query_command_result } from './models/az_boards_query_command_result';
/** Manage areas for a project. */
export declare class az_boards_area_project {
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
    static create(name: string): az_boards_area_project_create_command_builder;
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
    static delete(path: string): az_boards_area_project_delete_command_builder;
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
    static list(): az_boards_area_project_list_command_builder;
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
    static show(id: string): az_boards_area_project_show_command_builder;
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
    static update(path: string): az_boards_area_project_update_command_builder;
}
/** Manage areas for a team. */
export declare class az_boards_area_team {
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
    static add(path: string, team: string): az_boards_area_team_add_command_builder;
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
    static list(team: string): az_boards_area_team_list_command_builder;
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
    static remove(path: string, team: string): az_boards_area_team_remove_command_builder;
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
    static update(path: string, team: string): az_boards_area_team_update_command_builder;
}
/** Manage area paths. */
export declare class az_boards_area {
}
/** Manage iterations for a project. */
export declare class az_boards_iteration_project {
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
    static create(name: string): az_boards_iteration_project_create_command_builder;
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
    static delete(path: string): az_boards_iteration_project_delete_command_builder;
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
    static list(): az_boards_iteration_project_list_command_builder;
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
    static show(id: string): az_boards_iteration_project_show_command_builder;
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
    static update(path: string): az_boards_iteration_project_update_command_builder;
}
/** Manage iterations for a team. */
export declare class az_boards_iteration_team {
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
    static add(id: string, team: string): az_boards_iteration_team_add_command_builder;
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
    static list(team: string): az_boards_iteration_team_list_command_builder;
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
    static list_work_items(id: string, team: string): az_boards_iteration_team_list_work_items_command_builder;
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
    static remove(id: string, team: string): az_boards_iteration_team_remove_command_builder;
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
    static set_backlog_iteration(id: string, team: string): az_boards_iteration_team_set_backlog_iteration_command_builder;
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
    static set_default_iteration(team: string): az_boards_iteration_team_set_default_iteration_command_builder;
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
    static show_backlog_iteration(team: string): az_boards_iteration_team_show_backlog_iteration_command_builder;
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
    static show_default_iteration(team: string): az_boards_iteration_team_show_default_iteration_command_builder;
}
/** Manage iterations. */
export declare class az_boards_iteration {
}
/** Manage work item relations. */
export declare class az_boards_work_item_relation {
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
    static add(id: string, relationType: string, targetId: string): az_boards_work_item_relation_add_command_builder;
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
    static list_type(): az_boards_work_item_relation_list_type_command_builder;
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
    static remove(id: string, relationType: string, targetId: string): az_boards_work_item_relation_remove_command_builder;
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
    static show(id: string): az_boards_work_item_relation_show_command_builder;
}
/** Manage work items. */
export declare class az_boards_work_item {
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
    static create(title: string, type: string): az_boards_work_item_create_command_builder;
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
    static delete(id: string): az_boards_work_item_delete_command_builder;
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
    static show(id: string): az_boards_work_item_show_command_builder;
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
    static update(id: string): az_boards_work_item_update_command_builder;
}
/** Manage Azure Boards. */
export declare class az_boards {
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
    static query(): az_boards_query_command_builder;
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
declare class az_boards_area_project_create_command_builder extends CommandBuilder<az_boards_area_project_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the area. */
    name(value: string): az_boards_area_project_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_create_command_builder;
    /** Absolute path of an area. Creates an area at root level if --path is not specified. Example:ProjectNameAreaAreaName. */
    path(value: string): az_boards_area_project_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_create_command_builder;
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
declare class az_boards_area_project_delete_command_builder extends CommandBuilder<az_boards_area_project_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** Absolute path of an area. Example:ProjectNameAreaAreaName. */
    path(value: string): az_boards_area_project_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_boards_area_project_delete_command_builder;
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
declare class az_boards_area_project_list_command_builder extends CommandBuilder<az_boards_area_project_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Depth of child nodes to be fetched. Example: --depth 3. */
    depth(value: string): az_boards_area_project_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_list_command_builder;
    /** Absolute path of an area. Example:ProjectNameAreaAreaName. */
    path(value: string): az_boards_area_project_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_area_project_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_list_command_builder;
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
declare class az_boards_area_project_show_command_builder extends CommandBuilder<az_boards_area_project_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Area ID. */
    id(value: string): az_boards_area_project_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_area_project_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_show_command_builder;
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
declare class az_boards_area_project_update_command_builder extends CommandBuilder<az_boards_area_project_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** Absolute path of an area. Example:ProjectNameAreaAreaName. */
    path(value: string): az_boards_area_project_update_command_builder;
    /** Move an existing area and add as child node for this area. */
    childId(value: string): az_boards_area_project_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_project_update_command_builder;
    /** New name of the area. */
    name(value: string): az_boards_area_project_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_project_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_project_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_project_update_command_builder;
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
declare class az_boards_area_team_add_command_builder extends CommandBuilder<az_boards_area_team_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, team: string);
    /** Area path. Example:ProjectNameAreaName. */
    path(value: string): az_boards_area_team_add_command_builder;
    /** The name or id of the team. */
    team(value: string): az_boards_area_team_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_team_add_command_builder;
    /** Include child nodes of this area. */
    includeSubAreas(value: boolean): az_boards_area_team_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_team_add_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_team_add_command_builder;
    /** Set this area path as default area for this team. Default: False. */
    setAsDefault(value: string): az_boards_area_team_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_team_add_command_builder;
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
declare class az_boards_area_team_list_command_builder extends CommandBuilder<az_boards_area_team_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string);
    /** The name or id of the team. */
    team(value: string): az_boards_area_team_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_team_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_team_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_team_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_area_team_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_team_list_command_builder;
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
declare class az_boards_area_team_remove_command_builder extends CommandBuilder<az_boards_area_team_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, team: string);
    /** Area path. Example:ProjectNameAreaName. */
    path(value: string): az_boards_area_team_remove_command_builder;
    /** The name or id of the team. */
    team(value: string): az_boards_area_team_remove_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_team_remove_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_team_remove_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_team_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_team_remove_command_builder;
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
declare class az_boards_area_team_update_command_builder extends CommandBuilder<az_boards_area_team_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, team: string);
    /** Area path. Example:ProjectNameAreaName. */
    path(value: string): az_boards_area_team_update_command_builder;
    /** The name or id of the team. */
    team(value: string): az_boards_area_team_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_area_team_update_command_builder;
    /** Include child nodes of this area. */
    includeSubAreas(value: boolean): az_boards_area_team_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_area_team_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_area_team_update_command_builder;
    /** Set as default team area path. Default: False. */
    setAsDefault(value: string): az_boards_area_team_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_area_team_update_command_builder;
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
declare class az_boards_iteration_project_create_command_builder extends CommandBuilder<az_boards_iteration_project_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the iteration. */
    name(value: string): az_boards_iteration_project_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_create_command_builder;
    /** Finish date of the iteration. Example : "2019-06-21". */
    finishDate(value: string): az_boards_iteration_project_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_create_command_builder;
    /** Absolute path of an iteration. Creates an iteration at root level if --path is not specified. Example:ProjectNameIterationIterationName. */
    path(value: string): az_boards_iteration_project_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_create_command_builder;
    /** Start date of the iteration. Example : "2019-06-03". */
    startDate(value: string): az_boards_iteration_project_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_create_command_builder;
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
declare class az_boards_iteration_project_delete_command_builder extends CommandBuilder<az_boards_iteration_project_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** Absolute path of an iteration. Example:ProjectNameIterationIterationName. */
    path(value: string): az_boards_iteration_project_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_boards_iteration_project_delete_command_builder;
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
declare class az_boards_iteration_project_list_command_builder extends CommandBuilder<az_boards_iteration_project_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Depth of child nodes to be fetched. Example: --depth 3. */
    depth(value: string): az_boards_iteration_project_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_list_command_builder;
    /** Absolute path of an iteration. Example:ProjectNameIterationIterationName. */
    path(value: string): az_boards_iteration_project_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_iteration_project_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_list_command_builder;
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
declare class az_boards_iteration_project_show_command_builder extends CommandBuilder<az_boards_iteration_project_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Iteration ID. */
    id(value: string): az_boards_iteration_project_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_iteration_project_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_show_command_builder;
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
declare class az_boards_iteration_project_update_command_builder extends CommandBuilder<az_boards_iteration_project_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** Absolute path of an iteration. Example:ProjectNameIterationIterationName. */
    path(value: string): az_boards_iteration_project_update_command_builder;
    /** Move an existing iteration and add as child node for this iteration. */
    childId(value: string): az_boards_iteration_project_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_project_update_command_builder;
    /** Finish date of the iteration. Example : "2019-06-21". */
    finishDate(value: string): az_boards_iteration_project_update_command_builder;
    /** New name of the iteration. */
    name(value: string): az_boards_iteration_project_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_project_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_project_update_command_builder;
    /** Start date of the iteration. Example : "2019-06-03". */
    startDate(value: string): az_boards_iteration_project_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_project_update_command_builder;
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
declare class az_boards_iteration_team_add_command_builder extends CommandBuilder<az_boards_iteration_team_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, team: string);
    /** Identifier of the iteration. */
    id(value: string): az_boards_iteration_team_add_command_builder;
    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_add_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_add_command_builder;
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
declare class az_boards_iteration_team_list_command_builder extends CommandBuilder<az_boards_iteration_team_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string);
    /** The name or id of the team. */
    team(value: string): az_boards_iteration_team_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_iteration_team_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_list_command_builder;
    /** A filter for which iterations are returned based on relative time. Only Current is supported currently. */
    timeframe(value: string): az_boards_iteration_team_list_command_builder;
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
declare class az_boards_iteration_team_list_work_items_command_builder extends CommandBuilder<az_boards_iteration_team_list_work_items_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, team: string);
    /** Identifier of the iteration. */
    id(value: string): az_boards_iteration_team_list_work_items_command_builder;
    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_list_work_items_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_list_work_items_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_list_work_items_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_list_work_items_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_list_work_items_command_builder;
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
declare class az_boards_iteration_team_remove_command_builder extends CommandBuilder<az_boards_iteration_team_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, team: string);
    /** Identifier of the iteration. */
    id(value: string): az_boards_iteration_team_remove_command_builder;
    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_remove_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_remove_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_remove_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_remove_command_builder;
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
declare class az_boards_iteration_team_set_backlog_iteration_command_builder extends CommandBuilder<az_boards_iteration_team_set_backlog_iteration_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, team: string);
    /** Identifier of the iteration which needs to be set as backlog iteration. */
    id(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder;
    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_set_backlog_iteration_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_set_backlog_iteration_command_builder;
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
declare class az_boards_iteration_team_set_default_iteration_command_builder extends CommandBuilder<az_boards_iteration_team_set_default_iteration_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string);
    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_set_default_iteration_command_builder;
    /** Default iteration macro. Example: @CurrentIteration. */
    defaultIterationMacro(value: string): az_boards_iteration_team_set_default_iteration_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_set_default_iteration_command_builder;
    /** Identifier of the iteration which needs to be set as default. */
    id(value: string): az_boards_iteration_team_set_default_iteration_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_set_default_iteration_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_set_default_iteration_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_set_default_iteration_command_builder;
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
declare class az_boards_iteration_team_show_backlog_iteration_command_builder extends CommandBuilder<az_boards_iteration_team_show_backlog_iteration_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string);
    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_show_backlog_iteration_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_show_backlog_iteration_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_show_backlog_iteration_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_show_backlog_iteration_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_show_backlog_iteration_command_builder;
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
declare class az_boards_iteration_team_show_default_iteration_command_builder extends CommandBuilder<az_boards_iteration_team_show_default_iteration_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string);
    /** Name or ID of the team. */
    team(value: string): az_boards_iteration_team_show_default_iteration_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_iteration_team_show_default_iteration_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_iteration_team_show_default_iteration_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_iteration_team_show_default_iteration_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_iteration_team_show_default_iteration_command_builder;
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
declare class az_boards_work_item_relation_add_command_builder extends CommandBuilder<az_boards_work_item_relation_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, relationType: string, targetId: string);
    /** The ID of the work item. */
    id(value: string): az_boards_work_item_relation_add_command_builder;
    /** Relation type to create. Example: parent, child. */
    relationType(value: string): az_boards_work_item_relation_add_command_builder;
    /** ID(s) of work-items to create relation with.                          Multiple values can be passed comma separated. Example: 1,2. */
    targetId(value: string): az_boards_work_item_relation_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_relation_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_relation_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_relation_add_command_builder;
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
declare class az_boards_work_item_relation_list_type_command_builder extends CommandBuilder<az_boards_work_item_relation_list_type_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_relation_list_type_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_relation_list_type_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_relation_list_type_command_builder;
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
declare class az_boards_work_item_relation_remove_command_builder extends CommandBuilder<az_boards_work_item_relation_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, relationType: string, targetId: string);
    /** The ID of the work item. */
    id(value: string): az_boards_work_item_relation_remove_command_builder;
    /** Relation type to remove. Example: parent, child. */
    relationType(value: string): az_boards_work_item_relation_remove_command_builder;
    /** ID(s) of work-items to remove relation from.                          Multiple values can be passed comma separated. Example: 1,2. */
    targetId(value: string): az_boards_work_item_relation_remove_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_relation_remove_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_relation_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_relation_remove_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_boards_work_item_relation_remove_command_builder;
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
declare class az_boards_work_item_relation_show_command_builder extends CommandBuilder<az_boards_work_item_relation_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** The ID of the work item. */
    id(value: string): az_boards_work_item_relation_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_relation_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_relation_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_work_item_relation_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_relation_show_command_builder;
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
declare class az_boards_work_item_create_command_builder extends CommandBuilder<az_boards_work_item_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, title: string, type: string);
    /** Title of the work item. */
    title(value: string): az_boards_work_item_create_command_builder;
    /** Name of the work item type (e.g. Bug). */
    type(value: string): az_boards_work_item_create_command_builder;
    /** Area the work item is assigned to (e.g. Demos). */
    area(value: string): az_boards_work_item_create_command_builder;
    /** Name of the person the work item is assigned-to (e.g. fabrikam). */
    assignedTo(value: string): az_boards_work_item_create_command_builder;
    /** Description of the work item. */
    description(value: string): az_boards_work_item_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_create_command_builder;
    /** Comment to add to a discussion in a work item. */
    discussion(value: string): az_boards_work_item_create_command_builder;
    /** Space separated "field=value" pairs for custom fields you would like to set. Refer <a href="https://aka.ms/azure-devops-cli-field-api">https://aka.ms/azure-devops-cli-field-api</a> for more details on fields. */
    fields(value: string): az_boards_work_item_create_command_builder;
    /** Iteration path of the work item (e.g. DemosIteration 1). */
    iteration(value: string): az_boards_work_item_create_command_builder;
    /** Open the work item in the default web browser. */
    open(value: string): az_boards_work_item_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_work_item_create_command_builder;
    /** Reason for the state of the work item. */
    reason(value: string): az_boards_work_item_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_create_command_builder;
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
declare class az_boards_work_item_delete_command_builder extends CommandBuilder<az_boards_work_item_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Unique id of the work item. */
    id(value: string): az_boards_work_item_delete_command_builder;
    /** Permanently delete this work item. */
    destroy(value: string): az_boards_work_item_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_work_item_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_boards_work_item_delete_command_builder;
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
declare class az_boards_work_item_show_command_builder extends CommandBuilder<az_boards_work_item_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** The ID of the work item. */
    id(value: string): az_boards_work_item_show_command_builder;
    /** Work item details as of a particular date and time. Provide a date or date time string. Assumes local time zone. Example: '2019-01-20', '2019-01-20 00:20:00'. For UTC, append 'UTC' to the date time string, '2019-01-20 00:20:00 UTC'. */
    asOf(value: string): az_boards_work_item_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_show_command_builder;
    /** The expand parameters for work item attributes. */
    expand(value: 'all' | 'fields' | 'links' | 'none' | 'relations'): az_boards_work_item_show_command_builder;
    /** Comma-separated list of requested fields. Example:System.Id,System.AreaPath. Refer https://aka.ms/azure-devops-cli-field-api for more details on fields. */
    fields(value: string): az_boards_work_item_show_command_builder;
    /** Open the work item in the default web browser. */
    open(value: string): az_boards_work_item_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_boards_work_item_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_show_command_builder;
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
declare class az_boards_work_item_update_command_builder extends CommandBuilder<az_boards_work_item_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** The id of the work item to update. */
    id(value: string): az_boards_work_item_update_command_builder;
    /** Area the work item is assigned to (e.g. Demos). */
    area(value: string): az_boards_work_item_update_command_builder;
    /** Name of the person the work item is assigned-to (e.g. fabrikam). */
    assignedTo(value: string): az_boards_work_item_update_command_builder;
    /** Description of the work item. */
    description(value: string): az_boards_work_item_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_work_item_update_command_builder;
    /** Comment to add to a discussion in a work item. */
    discussion(value: string): az_boards_work_item_update_command_builder;
    /** Space separated "field=value" pairs for custom fields you would like to set. Refer <a href="https://aka.ms/azure-devops-cli-field-api">https://aka.ms/azure-devops-cli-field-api</a> for more details on fields. */
    fields(value: string): az_boards_work_item_update_command_builder;
    /** Iteration path of the work item (e.g. DemosIteration 1). */
    iteration(value: string): az_boards_work_item_update_command_builder;
    /** Open the work item in the default web browser. */
    open(value: string): az_boards_work_item_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_work_item_update_command_builder;
    /** Reason for the state of the work item. */
    reason(value: string): az_boards_work_item_update_command_builder;
    /** State of the work item (e.g. active). */
    state(value: string): az_boards_work_item_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_work_item_update_command_builder;
    /** Title of the work item. */
    title(value: string): az_boards_work_item_update_command_builder;
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
declare class az_boards_query_command_builder extends CommandBuilder<az_boards_query_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_boards_query_command_builder;
    /** The ID of an existing query.  Required unless --path or --wiql are specified. */
    id(value: string): az_boards_query_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_boards_query_command_builder;
    /** The path of an existing query.  Ignored if --id is specified. */
    path(value: string): az_boards_query_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_boards_query_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_boards_query_command_builder;
    /** The query in Work Item Query Language format.  Ignored if --id or --path is specified. */
    wiql(value: string): az_boards_query_command_builder;
}
export {};
