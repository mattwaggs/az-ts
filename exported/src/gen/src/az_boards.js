"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.az_boards = exports.az_boards_work_item = exports.az_boards_work_item_relation = exports.az_boards_iteration = exports.az_boards_iteration_team = exports.az_boards_iteration_project = exports.az_boards_area = exports.az_boards_area_team = exports.az_boards_area_project = void 0;
var base_1 = require("../base");
/** Manage areas for a project. */
var az_boards_area_project = /** @class */ (function () {
    function az_boards_area_project() {
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
    az_boards_area_project.create = function (name) {
        return new az_boards_area_project_create_command_builder("az boards area project create", 'az_boards_area_project_create_command_result', name);
    };
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
    az_boards_area_project["delete"] = function (path) {
        return new az_boards_area_project_delete_command_builder("az boards area project delete", 'az_boards_area_project_delete_command_result', path);
    };
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
    az_boards_area_project.list = function () {
        return new az_boards_area_project_list_command_builder("az boards area project list", 'az_boards_area_project_list_command_result');
    };
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
    az_boards_area_project.show = function (id) {
        return new az_boards_area_project_show_command_builder("az boards area project show", 'az_boards_area_project_show_command_result', id);
    };
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
    az_boards_area_project.update = function (path) {
        return new az_boards_area_project_update_command_builder("az boards area project update", 'az_boards_area_project_update_command_result', path);
    };
    return az_boards_area_project;
}());
exports.az_boards_area_project = az_boards_area_project;
/** Manage areas for a team. */
var az_boards_area_team = /** @class */ (function () {
    function az_boards_area_team() {
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
    az_boards_area_team.add = function (path, team) {
        return new az_boards_area_team_add_command_builder("az boards area team add", 'az_boards_area_team_add_command_result', path, team);
    };
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
    az_boards_area_team.list = function (team) {
        return new az_boards_area_team_list_command_builder("az boards area team list", 'az_boards_area_team_list_command_result', team);
    };
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
    az_boards_area_team.remove = function (path, team) {
        return new az_boards_area_team_remove_command_builder("az boards area team remove", 'az_boards_area_team_remove_command_result', path, team);
    };
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
    az_boards_area_team.update = function (path, team) {
        return new az_boards_area_team_update_command_builder("az boards area team update", 'az_boards_area_team_update_command_result', path, team);
    };
    return az_boards_area_team;
}());
exports.az_boards_area_team = az_boards_area_team;
/** Manage area paths. */
var az_boards_area = /** @class */ (function () {
    function az_boards_area() {
    }
    return az_boards_area;
}());
exports.az_boards_area = az_boards_area;
/** Manage iterations for a project. */
var az_boards_iteration_project = /** @class */ (function () {
    function az_boards_iteration_project() {
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
    az_boards_iteration_project.create = function (name) {
        return new az_boards_iteration_project_create_command_builder("az boards iteration project create", 'az_boards_iteration_project_create_command_result', name);
    };
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
    az_boards_iteration_project["delete"] = function (path) {
        return new az_boards_iteration_project_delete_command_builder("az boards iteration project delete", 'az_boards_iteration_project_delete_command_result', path);
    };
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
    az_boards_iteration_project.list = function () {
        return new az_boards_iteration_project_list_command_builder("az boards iteration project list", 'az_boards_iteration_project_list_command_result');
    };
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
    az_boards_iteration_project.show = function (id) {
        return new az_boards_iteration_project_show_command_builder("az boards iteration project show", 'az_boards_iteration_project_show_command_result', id);
    };
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
    az_boards_iteration_project.update = function (path) {
        return new az_boards_iteration_project_update_command_builder("az boards iteration project update", 'az_boards_iteration_project_update_command_result', path);
    };
    return az_boards_iteration_project;
}());
exports.az_boards_iteration_project = az_boards_iteration_project;
/** Manage iterations for a team. */
var az_boards_iteration_team = /** @class */ (function () {
    function az_boards_iteration_team() {
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
    az_boards_iteration_team.add = function (id, team) {
        return new az_boards_iteration_team_add_command_builder("az boards iteration team add", 'az_boards_iteration_team_add_command_result', id, team);
    };
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
    az_boards_iteration_team.list = function (team) {
        return new az_boards_iteration_team_list_command_builder("az boards iteration team list", 'az_boards_iteration_team_list_command_result', team);
    };
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
    az_boards_iteration_team.list_work_items = function (id, team) {
        return new az_boards_iteration_team_list_work_items_command_builder("az boards iteration team list-work-items", 'az_boards_iteration_team_list_work_items_command_result', id, team);
    };
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
    az_boards_iteration_team.remove = function (id, team) {
        return new az_boards_iteration_team_remove_command_builder("az boards iteration team remove", 'az_boards_iteration_team_remove_command_result', id, team);
    };
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
    az_boards_iteration_team.set_backlog_iteration = function (id, team) {
        return new az_boards_iteration_team_set_backlog_iteration_command_builder("az boards iteration team set-backlog-iteration", 'az_boards_iteration_team_set_backlog_iteration_command_result', id, team);
    };
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
    az_boards_iteration_team.set_default_iteration = function (team) {
        return new az_boards_iteration_team_set_default_iteration_command_builder("az boards iteration team set-default-iteration", 'az_boards_iteration_team_set_default_iteration_command_result', team);
    };
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
    az_boards_iteration_team.show_backlog_iteration = function (team) {
        return new az_boards_iteration_team_show_backlog_iteration_command_builder("az boards iteration team show-backlog-iteration", 'az_boards_iteration_team_show_backlog_iteration_command_result', team);
    };
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
    az_boards_iteration_team.show_default_iteration = function (team) {
        return new az_boards_iteration_team_show_default_iteration_command_builder("az boards iteration team show-default-iteration", 'az_boards_iteration_team_show_default_iteration_command_result', team);
    };
    return az_boards_iteration_team;
}());
exports.az_boards_iteration_team = az_boards_iteration_team;
/** Manage iterations. */
var az_boards_iteration = /** @class */ (function () {
    function az_boards_iteration() {
    }
    return az_boards_iteration;
}());
exports.az_boards_iteration = az_boards_iteration;
/** Manage work item relations. */
var az_boards_work_item_relation = /** @class */ (function () {
    function az_boards_work_item_relation() {
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
    az_boards_work_item_relation.add = function (id, relationType, targetId) {
        return new az_boards_work_item_relation_add_command_builder("az boards work-item relation add", 'az_boards_work_item_relation_add_command_result', id, relationType, targetId);
    };
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
    az_boards_work_item_relation.list_type = function () {
        return new az_boards_work_item_relation_list_type_command_builder("az boards work-item relation list-type", 'az_boards_work_item_relation_list_type_command_result');
    };
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
    az_boards_work_item_relation.remove = function (id, relationType, targetId) {
        return new az_boards_work_item_relation_remove_command_builder("az boards work-item relation remove", 'az_boards_work_item_relation_remove_command_result', id, relationType, targetId);
    };
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
    az_boards_work_item_relation.show = function (id) {
        return new az_boards_work_item_relation_show_command_builder("az boards work-item relation show", 'az_boards_work_item_relation_show_command_result', id);
    };
    return az_boards_work_item_relation;
}());
exports.az_boards_work_item_relation = az_boards_work_item_relation;
/** Manage work items. */
var az_boards_work_item = /** @class */ (function () {
    function az_boards_work_item() {
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
    az_boards_work_item.create = function (title, type) {
        return new az_boards_work_item_create_command_builder("az boards work-item create", 'az_boards_work_item_create_command_result', title, type);
    };
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
    az_boards_work_item["delete"] = function (id) {
        return new az_boards_work_item_delete_command_builder("az boards work-item delete", 'az_boards_work_item_delete_command_result', id);
    };
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
    az_boards_work_item.show = function (id) {
        return new az_boards_work_item_show_command_builder("az boards work-item show", 'az_boards_work_item_show_command_result', id);
    };
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
    az_boards_work_item.update = function (id) {
        return new az_boards_work_item_update_command_builder("az boards work-item update", 'az_boards_work_item_update_command_result', id);
    };
    return az_boards_work_item;
}());
exports.az_boards_work_item = az_boards_work_item;
/** Manage Azure Boards. */
var az_boards = /** @class */ (function () {
    function az_boards() {
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
    az_boards.query = function () {
        return new az_boards_query_command_builder("az boards query", 'az_boards_query_command_result');
    };
    return az_boards;
}());
exports.az_boards = az_boards;
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
var az_boards_area_project_create_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_area_project_create_command_builder, _super);
    function az_boards_area_project_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the area. */
    az_boards_area_project_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_area_project_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_area_project_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Absolute path of an area. Creates an area at root level if --path is not specified. Example:ProjectNameAreaAreaName. */
    az_boards_area_project_create_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_area_project_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_area_project_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_area_project_create_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_area_project_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_area_project_delete_command_builder, _super);
    function az_boards_area_project_delete_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** Absolute path of an area. Example:ProjectNameAreaAreaName. */
    az_boards_area_project_delete_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_area_project_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_area_project_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_area_project_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_area_project_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_boards_area_project_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_boards_area_project_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_area_project_list_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_area_project_list_command_builder, _super);
    function az_boards_area_project_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Depth of child nodes to be fetched. Example: --depth 3. */
    az_boards_area_project_list_command_builder.prototype.depth = function (value) {
        this.setFlag("--depth", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_area_project_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_area_project_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Absolute path of an area. Example:ProjectNameAreaAreaName. */
    az_boards_area_project_list_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_area_project_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_boards_area_project_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_area_project_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_area_project_list_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_area_project_show_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_area_project_show_command_builder, _super);
    function az_boards_area_project_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Area ID. */
    az_boards_area_project_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_area_project_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_area_project_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_area_project_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_boards_area_project_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_area_project_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_area_project_show_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_area_project_update_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_area_project_update_command_builder, _super);
    function az_boards_area_project_update_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** Absolute path of an area. Example:ProjectNameAreaAreaName. */
    az_boards_area_project_update_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Move an existing area and add as child node for this area. */
    az_boards_area_project_update_command_builder.prototype.childId = function (value) {
        this.setFlag("--child-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_area_project_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** New name of the area. */
    az_boards_area_project_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_area_project_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_area_project_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_area_project_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_area_project_update_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_area_team_add_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_area_team_add_command_builder, _super);
    function az_boards_area_team_add_command_builder(commandPath, resultDataTypeName, path, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        _this.team(team);
        return _this;
    }
    /** Area path. Example:ProjectNameAreaName. */
    az_boards_area_team_add_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** The name or id of the team. */
    az_boards_area_team_add_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_area_team_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Include child nodes of this area. */
    az_boards_area_team_add_command_builder.prototype.includeSubAreas = function (value) {
        this.setFlag("--include-sub-areas", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_area_team_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_area_team_add_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Set this area path as default area for this team. Default: False. */
    az_boards_area_team_add_command_builder.prototype.setAsDefault = function (value) {
        this.setFlag("--set-as-default", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_area_team_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_area_team_add_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_area_team_list_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_area_team_list_command_builder, _super);
    function az_boards_area_team_list_command_builder(commandPath, resultDataTypeName, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.team(team);
        return _this;
    }
    /** The name or id of the team. */
    az_boards_area_team_list_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_area_team_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_area_team_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_area_team_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_boards_area_team_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_area_team_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_area_team_list_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_area_team_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_area_team_remove_command_builder, _super);
    function az_boards_area_team_remove_command_builder(commandPath, resultDataTypeName, path, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        _this.team(team);
        return _this;
    }
    /** Area path. Example:ProjectNameAreaName. */
    az_boards_area_team_remove_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** The name or id of the team. */
    az_boards_area_team_remove_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_area_team_remove_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_area_team_remove_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_area_team_remove_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_area_team_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_area_team_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_area_team_update_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_area_team_update_command_builder, _super);
    function az_boards_area_team_update_command_builder(commandPath, resultDataTypeName, path, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        _this.team(team);
        return _this;
    }
    /** Area path. Example:ProjectNameAreaName. */
    az_boards_area_team_update_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** The name or id of the team. */
    az_boards_area_team_update_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_area_team_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Include child nodes of this area. */
    az_boards_area_team_update_command_builder.prototype.includeSubAreas = function (value) {
        this.setFlag("--include-sub-areas", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_area_team_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_area_team_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Set as default team area path. Default: False. */
    az_boards_area_team_update_command_builder.prototype.setAsDefault = function (value) {
        this.setFlag("--set-as-default", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_area_team_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_area_team_update_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_project_create_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_project_create_command_builder, _super);
    function az_boards_iteration_project_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the iteration. */
    az_boards_iteration_project_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_project_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Finish date of the iteration. Example : "2019-06-21". */
    az_boards_iteration_project_create_command_builder.prototype.finishDate = function (value) {
        this.setFlag("--finish-date", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_project_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Absolute path of an iteration. Creates an iteration at root level if --path is not specified. Example:ProjectNameIterationIterationName. */
    az_boards_iteration_project_create_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_project_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Start date of the iteration. Example : "2019-06-03". */
    az_boards_iteration_project_create_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_project_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_project_create_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_project_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_project_delete_command_builder, _super);
    function az_boards_iteration_project_delete_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** Absolute path of an iteration. Example:ProjectNameIterationIterationName. */
    az_boards_iteration_project_delete_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_project_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_project_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_project_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_project_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_boards_iteration_project_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_boards_iteration_project_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_project_list_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_project_list_command_builder, _super);
    function az_boards_iteration_project_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Depth of child nodes to be fetched. Example: --depth 3. */
    az_boards_iteration_project_list_command_builder.prototype.depth = function (value) {
        this.setFlag("--depth", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_project_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_project_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Absolute path of an iteration. Example:ProjectNameIterationIterationName. */
    az_boards_iteration_project_list_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_project_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_boards_iteration_project_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_project_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_project_list_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_project_show_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_project_show_command_builder, _super);
    function az_boards_iteration_project_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Iteration ID. */
    az_boards_iteration_project_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_project_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_project_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_project_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_boards_iteration_project_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_project_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_project_show_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_project_update_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_project_update_command_builder, _super);
    function az_boards_iteration_project_update_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** Absolute path of an iteration. Example:ProjectNameIterationIterationName. */
    az_boards_iteration_project_update_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Move an existing iteration and add as child node for this iteration. */
    az_boards_iteration_project_update_command_builder.prototype.childId = function (value) {
        this.setFlag("--child-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_project_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Finish date of the iteration. Example : "2019-06-21". */
    az_boards_iteration_project_update_command_builder.prototype.finishDate = function (value) {
        this.setFlag("--finish-date", value);
        return this;
    };
    /** New name of the iteration. */
    az_boards_iteration_project_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_project_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_project_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Start date of the iteration. Example : "2019-06-03". */
    az_boards_iteration_project_update_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_project_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_project_update_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_team_add_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_team_add_command_builder, _super);
    function az_boards_iteration_team_add_command_builder(commandPath, resultDataTypeName, id, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.team(team);
        return _this;
    }
    /** Identifier of the iteration. */
    az_boards_iteration_team_add_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name or ID of the team. */
    az_boards_iteration_team_add_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_team_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_team_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_team_add_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_team_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_team_add_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_team_list_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_team_list_command_builder, _super);
    function az_boards_iteration_team_list_command_builder(commandPath, resultDataTypeName, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.team(team);
        return _this;
    }
    /** The name or id of the team. */
    az_boards_iteration_team_list_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_team_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_team_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_team_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_boards_iteration_team_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_team_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** A filter for which iterations are returned based on relative time. Only Current is supported currently. */
    az_boards_iteration_team_list_command_builder.prototype.timeframe = function (value) {
        this.setFlag("--timeframe", value);
        return this;
    };
    return az_boards_iteration_team_list_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_team_list_work_items_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_team_list_work_items_command_builder, _super);
    function az_boards_iteration_team_list_work_items_command_builder(commandPath, resultDataTypeName, id, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.team(team);
        return _this;
    }
    /** Identifier of the iteration. */
    az_boards_iteration_team_list_work_items_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name or ID of the team. */
    az_boards_iteration_team_list_work_items_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_team_list_work_items_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_team_list_work_items_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_team_list_work_items_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_team_list_work_items_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_team_list_work_items_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_team_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_team_remove_command_builder, _super);
    function az_boards_iteration_team_remove_command_builder(commandPath, resultDataTypeName, id, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.team(team);
        return _this;
    }
    /** Identifier of the iteration. */
    az_boards_iteration_team_remove_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name or ID of the team. */
    az_boards_iteration_team_remove_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_team_remove_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_team_remove_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_team_remove_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_team_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_team_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_team_set_backlog_iteration_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_team_set_backlog_iteration_command_builder, _super);
    function az_boards_iteration_team_set_backlog_iteration_command_builder(commandPath, resultDataTypeName, id, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.team(team);
        return _this;
    }
    /** Identifier of the iteration which needs to be set as backlog iteration. */
    az_boards_iteration_team_set_backlog_iteration_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name or ID of the team. */
    az_boards_iteration_team_set_backlog_iteration_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_team_set_backlog_iteration_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_team_set_backlog_iteration_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_team_set_backlog_iteration_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_team_set_backlog_iteration_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_team_set_backlog_iteration_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_team_set_default_iteration_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_team_set_default_iteration_command_builder, _super);
    function az_boards_iteration_team_set_default_iteration_command_builder(commandPath, resultDataTypeName, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.team(team);
        return _this;
    }
    /** Name or ID of the team. */
    az_boards_iteration_team_set_default_iteration_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Default iteration macro. Example: @CurrentIteration. */
    az_boards_iteration_team_set_default_iteration_command_builder.prototype.defaultIterationMacro = function (value) {
        this.setFlag("--default-iteration-macro", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_team_set_default_iteration_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Identifier of the iteration which needs to be set as default. */
    az_boards_iteration_team_set_default_iteration_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_team_set_default_iteration_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_team_set_default_iteration_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_team_set_default_iteration_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_team_set_default_iteration_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_team_show_backlog_iteration_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_team_show_backlog_iteration_command_builder, _super);
    function az_boards_iteration_team_show_backlog_iteration_command_builder(commandPath, resultDataTypeName, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.team(team);
        return _this;
    }
    /** Name or ID of the team. */
    az_boards_iteration_team_show_backlog_iteration_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_team_show_backlog_iteration_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_team_show_backlog_iteration_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_team_show_backlog_iteration_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_team_show_backlog_iteration_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_team_show_backlog_iteration_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_iteration_team_show_default_iteration_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_iteration_team_show_default_iteration_command_builder, _super);
    function az_boards_iteration_team_show_default_iteration_command_builder(commandPath, resultDataTypeName, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.team(team);
        return _this;
    }
    /** Name or ID of the team. */
    az_boards_iteration_team_show_default_iteration_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_iteration_team_show_default_iteration_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_iteration_team_show_default_iteration_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_iteration_team_show_default_iteration_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_iteration_team_show_default_iteration_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_iteration_team_show_default_iteration_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_work_item_relation_add_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_work_item_relation_add_command_builder, _super);
    function az_boards_work_item_relation_add_command_builder(commandPath, resultDataTypeName, id, relationType, targetId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.relationType(relationType);
        _this.targetId(targetId);
        return _this;
    }
    /** The ID of the work item. */
    az_boards_work_item_relation_add_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Relation type to create. Example: parent, child. */
    az_boards_work_item_relation_add_command_builder.prototype.relationType = function (value) {
        this.setFlag("--relation-type", value);
        return this;
    };
    /** ID(s) of work-items to create relation with.                          Multiple values can be passed comma separated. Example: 1,2. */
    az_boards_work_item_relation_add_command_builder.prototype.targetId = function (value) {
        this.setFlag("--target-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_work_item_relation_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_work_item_relation_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_work_item_relation_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_work_item_relation_add_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_work_item_relation_list_type_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_work_item_relation_list_type_command_builder, _super);
    function az_boards_work_item_relation_list_type_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_boards_work_item_relation_list_type_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_work_item_relation_list_type_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_work_item_relation_list_type_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_work_item_relation_list_type_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_work_item_relation_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_work_item_relation_remove_command_builder, _super);
    function az_boards_work_item_relation_remove_command_builder(commandPath, resultDataTypeName, id, relationType, targetId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.relationType(relationType);
        _this.targetId(targetId);
        return _this;
    }
    /** The ID of the work item. */
    az_boards_work_item_relation_remove_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Relation type to remove. Example: parent, child. */
    az_boards_work_item_relation_remove_command_builder.prototype.relationType = function (value) {
        this.setFlag("--relation-type", value);
        return this;
    };
    /** ID(s) of work-items to remove relation from.                          Multiple values can be passed comma separated. Example: 1,2. */
    az_boards_work_item_relation_remove_command_builder.prototype.targetId = function (value) {
        this.setFlag("--target-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_work_item_relation_remove_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_work_item_relation_remove_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_work_item_relation_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_boards_work_item_relation_remove_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_boards_work_item_relation_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_work_item_relation_show_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_work_item_relation_show_command_builder, _super);
    function az_boards_work_item_relation_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The ID of the work item. */
    az_boards_work_item_relation_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_work_item_relation_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_work_item_relation_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_boards_work_item_relation_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_work_item_relation_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_work_item_relation_show_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_work_item_create_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_work_item_create_command_builder, _super);
    function az_boards_work_item_create_command_builder(commandPath, resultDataTypeName, title, type) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.title(title);
        _this.type(type);
        return _this;
    }
    /** Title of the work item. */
    az_boards_work_item_create_command_builder.prototype.title = function (value) {
        this.setFlag("--title", value);
        return this;
    };
    /** Name of the work item type (e.g. Bug). */
    az_boards_work_item_create_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** Area the work item is assigned to (e.g. Demos). */
    az_boards_work_item_create_command_builder.prototype.area = function (value) {
        this.setFlag("--area", value);
        return this;
    };
    /** Name of the person the work item is assigned-to (e.g. fabrikam). */
    az_boards_work_item_create_command_builder.prototype.assignedTo = function (value) {
        this.setFlag("--assigned-to", value);
        return this;
    };
    /** Description of the work item. */
    az_boards_work_item_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_work_item_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Comment to add to a discussion in a work item. */
    az_boards_work_item_create_command_builder.prototype.discussion = function (value) {
        this.setFlag("--discussion", value);
        return this;
    };
    /** Space separated "field=value" pairs for custom fields you would like to set. Refer <a href="https://aka.ms/azure-devops-cli-field-api">https://aka.ms/azure-devops-cli-field-api</a> for more details on fields. */
    az_boards_work_item_create_command_builder.prototype.fields = function (value) {
        this.setFlag("--fields", value);
        return this;
    };
    /** Iteration path of the work item (e.g. DemosIteration 1). */
    az_boards_work_item_create_command_builder.prototype.iteration = function (value) {
        this.setFlag("--iteration", value);
        return this;
    };
    /** Open the work item in the default web browser. */
    az_boards_work_item_create_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_work_item_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_work_item_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Reason for the state of the work item. */
    az_boards_work_item_create_command_builder.prototype.reason = function (value) {
        this.setFlag("--reason", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_work_item_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_work_item_create_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_work_item_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_work_item_delete_command_builder, _super);
    function az_boards_work_item_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Unique id of the work item. */
    az_boards_work_item_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Permanently delete this work item. */
    az_boards_work_item_delete_command_builder.prototype.destroy = function (value) {
        this.setFlag("--destroy", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_work_item_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_work_item_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_work_item_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_work_item_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_boards_work_item_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_boards_work_item_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_work_item_show_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_work_item_show_command_builder, _super);
    function az_boards_work_item_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The ID of the work item. */
    az_boards_work_item_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Work item details as of a particular date and time. Provide a date or date time string. Assumes local time zone. Example: '2019-01-20', '2019-01-20 00:20:00'. For UTC, append 'UTC' to the date time string, '2019-01-20 00:20:00 UTC'. */
    az_boards_work_item_show_command_builder.prototype.asOf = function (value) {
        this.setFlag("--as-of", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_work_item_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** The expand parameters for work item attributes. */
    az_boards_work_item_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Comma-separated list of requested fields. Example:System.Id,System.AreaPath. Refer https://aka.ms/azure-devops-cli-field-api for more details on fields. */
    az_boards_work_item_show_command_builder.prototype.fields = function (value) {
        this.setFlag("--fields", value);
        return this;
    };
    /** Open the work item in the default web browser. */
    az_boards_work_item_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_work_item_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_boards_work_item_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_work_item_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_boards_work_item_show_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_work_item_update_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_work_item_update_command_builder, _super);
    function az_boards_work_item_update_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The id of the work item to update. */
    az_boards_work_item_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Area the work item is assigned to (e.g. Demos). */
    az_boards_work_item_update_command_builder.prototype.area = function (value) {
        this.setFlag("--area", value);
        return this;
    };
    /** Name of the person the work item is assigned-to (e.g. fabrikam). */
    az_boards_work_item_update_command_builder.prototype.assignedTo = function (value) {
        this.setFlag("--assigned-to", value);
        return this;
    };
    /** Description of the work item. */
    az_boards_work_item_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_boards_work_item_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Comment to add to a discussion in a work item. */
    az_boards_work_item_update_command_builder.prototype.discussion = function (value) {
        this.setFlag("--discussion", value);
        return this;
    };
    /** Space separated "field=value" pairs for custom fields you would like to set. Refer <a href="https://aka.ms/azure-devops-cli-field-api">https://aka.ms/azure-devops-cli-field-api</a> for more details on fields. */
    az_boards_work_item_update_command_builder.prototype.fields = function (value) {
        this.setFlag("--fields", value);
        return this;
    };
    /** Iteration path of the work item (e.g. DemosIteration 1). */
    az_boards_work_item_update_command_builder.prototype.iteration = function (value) {
        this.setFlag("--iteration", value);
        return this;
    };
    /** Open the work item in the default web browser. */
    az_boards_work_item_update_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_work_item_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Reason for the state of the work item. */
    az_boards_work_item_update_command_builder.prototype.reason = function (value) {
        this.setFlag("--reason", value);
        return this;
    };
    /** State of the work item (e.g. active). */
    az_boards_work_item_update_command_builder.prototype.state = function (value) {
        this.setFlag("--state", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_work_item_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Title of the work item. */
    az_boards_work_item_update_command_builder.prototype.title = function (value) {
        this.setFlag("--title", value);
        return this;
    };
    return az_boards_work_item_update_command_builder;
}(base_1.CommandBuilder));
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
var az_boards_query_command_builder = /** @class */ (function (_super) {
    __extends(az_boards_query_command_builder, _super);
    function az_boards_query_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_boards_query_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** The ID of an existing query.  Required unless --path or --wiql are specified. */
    az_boards_query_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_boards_query_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** The path of an existing query.  Ignored if --id is specified. */
    az_boards_query_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_boards_query_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_boards_query_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The query in Work Item Query Language format.  Ignored if --id or --path is specified. */
    az_boards_query_command_builder.prototype.wiql = function (value) {
        this.setFlag("--wiql", value);
        return this;
    };
    return az_boards_query_command_builder;
}(base_1.CommandBuilder));
