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
exports.az_pipelines = exports.az_pipelines_variable = exports.az_pipelines_variable_group = exports.az_pipelines_variable_group_variable = exports.az_pipelines_runs = exports.az_pipelines_runs_tag = exports.az_pipelines_runs_artifact = exports.az_pipelines_release = exports.az_pipelines_release_definition = exports.az_pipelines_queue = exports.az_pipelines_pool = exports.az_pipelines_folder = exports.az_pipelines_build = exports.az_pipelines_build_tag = exports.az_pipelines_build_definition = exports.az_pipelines_agent = void 0;
var base_1 = require("../base");
/** Manage agents. */
var az_pipelines_agent = /** @class */ (function () {
    function az_pipelines_agent() {
    }
    /**
     * Get a list of agents in a pool.
     *
     * Syntax:
     * ```
     * az pipelines agent list --pool-id
     *                         [--agent-name]
     *                         [--demands]
     *                         [--detect {false, true}]
     *                         [--include-assigned-request {false, true}]
     *                         [--include-capabilities {false, true}]
     *                         [--include-last-completed-request {false, true}]
     *                         [--org]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} poolId The agent pool containing the agents.
     */
    az_pipelines_agent.list = function (poolId) {
        return new az_pipelines_agent_list_command_builder("az pipelines agent list", 'az_pipelines_agent_list_command_result', poolId);
    };
    /**
     * Show agent details.
     *
     * Syntax:
     * ```
     * az pipelines agent show --agent-id
     *                         --pool-id
     *                         [--detect {false, true}]
     *                         [--include-assigned-request {false, true}]
     *                         [--include-capabilities {false, true}]
     *                         [--include-last-completed-request {false, true}]
     *                         [--org]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} agentId The agent ID to get information about.
     * @param {string} poolId The agent pool containing the agent.
     */
    az_pipelines_agent.show = function (agentId, poolId) {
        return new az_pipelines_agent_show_command_builder("az pipelines agent show", 'az_pipelines_agent_show_command_result', agentId, poolId);
    };
    return az_pipelines_agent;
}());
exports.az_pipelines_agent = az_pipelines_agent;
/** Manage build definitions. */
var az_pipelines_build_definition = /** @class */ (function () {
    function az_pipelines_build_definition() {
    }
    /**
     * List build definitions.
     *
     * Syntax:
     * ```
     * az pipelines build definition list [--detect {false, true}]
     *                                    [--name]
     *                                    [--org]
     *                                    [--project]
     *                                    [--query-examples]
     *                                    [--repository]
     *                                    [--repository-type {bitbucket, git, github, githubenterprise, svn, tfsgit, tfsversioncontrol}]
     *                                    [--subscription]
     *                                    [--top]
     * ```
     */
    az_pipelines_build_definition.list = function () {
        return new az_pipelines_build_definition_list_command_builder("az pipelines build definition list", 'az_pipelines_build_definition_list_command_result');
    };
    /**
     * Get the details of a build definition.
     *
     * Syntax:
     * ```
     * az pipelines build definition show [--detect {false, true}]
     *                                    [--id]
     *                                    [--name]
     *                                    [--open]
     *                                    [--org]
     *                                    [--project]
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     */
    az_pipelines_build_definition.show = function () {
        return new az_pipelines_build_definition_show_command_builder("az pipelines build definition show", 'az_pipelines_build_definition_show_command_result');
    };
    return az_pipelines_build_definition;
}());
exports.az_pipelines_build_definition = az_pipelines_build_definition;
/** Manage build tags. */
var az_pipelines_build_tag = /** @class */ (function () {
    function az_pipelines_build_tag() {
    }
    /**
     * Add tag(s) for a build.
     *
     * Syntax:
     * ```
     * az pipelines build tag add --build-id
     *                            --tags
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--project]
     *                            [--subscription]
     * ```
     *
     * @param {string} buildId ID of the build.
     * @param {string} tags Tag(s) to be added to the build. [Comma seperated values].
     */
    az_pipelines_build_tag.add = function (buildId, tags) {
        return new az_pipelines_build_tag_add_command_builder("az pipelines build tag add", 'az_pipelines_build_tag_add_command_result', buildId, tags);
    };
    /**
     * Delete a build tag.
     *
     * Syntax:
     * ```
     * az pipelines build tag delete --build-id
     *                               --tag
     *                               [--detect {false, true}]
     *                               [--org]
     *                               [--project]
     *                               [--subscription]
     * ```
     *
     * @param {string} buildId ID of the build.
     * @param {string} tag Tag to be deleted from the build.
     */
    az_pipelines_build_tag["delete"] = function (buildId, tag) {
        return new az_pipelines_build_tag_delete_command_builder("az pipelines build tag delete", 'az_pipelines_build_tag_delete_command_result', buildId, tag);
    };
    /**
     * Get tags for a build.
     *
     * Syntax:
     * ```
     * az pipelines build tag list --build-id
     *                             [--detect {false, true}]
     *                             [--org]
     *                             [--project]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} buildId ID of the build.
     */
    az_pipelines_build_tag.list = function (buildId) {
        return new az_pipelines_build_tag_list_command_builder("az pipelines build tag list", 'az_pipelines_build_tag_list_command_result', buildId);
    };
    return az_pipelines_build_tag;
}());
exports.az_pipelines_build_tag = az_pipelines_build_tag;
/** Manage builds. */
var az_pipelines_build = /** @class */ (function () {
    function az_pipelines_build() {
    }
    /**
     * List build results.
     *
     * Syntax:
     * ```
     * az pipelines build list [--branch]
     *                         [--definition-ids]
     *                         [--detect {false, true}]
     *                         [--org]
     *                         [--project]
     *                         [--query-examples]
     *                         [--reason {all, batchedCI, buildCompletion, checkInShelveset, individualCI, manual, pullRequest, schedule, triggered, userCreated, validateShelveset}]
     *                         [--requested-for]
     *                         [--result {canceled, failed, none, partiallySucceeded, succeeded}]
     *                         [--status {all, cancelling, completed, inProgress, none, notStarted, postponed}]
     *                         [--subscription]
     *                         [--tags]
     *                         [--top]
     * ```
     */
    az_pipelines_build.list = function () {
        return new az_pipelines_build_list_command_builder("az pipelines build list", 'az_pipelines_build_list_command_result');
    };
    /**
     * Request (queue) a build.
     *
     * Syntax:
     * ```
     * az pipelines build queue [--branch]
     *                          [--commit-id]
     *                          [--definition-id]
     *                          [--definition-name]
     *                          [--detect {false, true}]
     *                          [--open]
     *                          [--org]
     *                          [--project]
     *                          [--queue-id]
     *                          [--subscription]
     *                          [--variables]
     * ```
     */
    az_pipelines_build.queue = function () {
        return new az_pipelines_build_queue_command_builder("az pipelines build queue", 'az_pipelines_build_queue_command_result');
    };
    /**
     * Get the details of a build.
     *
     * Syntax:
     * ```
     * az pipelines build show --id
     *                         [--detect {false, true}]
     *                         [--open]
     *                         [--org]
     *                         [--project]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} id ID of the build.
     */
    az_pipelines_build.show = function (id) {
        return new az_pipelines_build_show_command_builder("az pipelines build show", 'az_pipelines_build_show_command_result', id);
    };
    return az_pipelines_build;
}());
exports.az_pipelines_build = az_pipelines_build;
/** Manage folders for organizing pipelines. */
var az_pipelines_folder = /** @class */ (function () {
    function az_pipelines_folder() {
    }
    /**
     * Create a folder.
     *
     * Syntax:
     * ```
     * az pipelines folder create --path
     *                            [--description]
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--project]
     *                            [--subscription]
     * ```
     *
     * @param {string} path Full path of the folder.
     */
    az_pipelines_folder.create = function (path) {
        return new az_pipelines_folder_create_command_builder("az pipelines folder create", 'az_pipelines_folder_create_command_result', path);
    };
    /**
     * Delete a folder.
     *
     * Syntax:
     * ```
     * az pipelines folder delete --path
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--project]
     *                            [--subscription]
     *                            [--yes]
     * ```
     *
     * @param {string} path Full path of the folder.
     */
    az_pipelines_folder["delete"] = function (path) {
        return new az_pipelines_folder_delete_command_builder("az pipelines folder delete", 'az_pipelines_folder_delete_command_result', path);
    };
    /**
     * List all folders.
     *
     * Syntax:
     * ```
     * az pipelines folder list [--detect {false, true}]
     *                          [--org]
     *                          [--path]
     *                          [--project]
     *                          [--query-examples]
     *                          [--query-order {Asc, Desc, None}]
     *                          [--subscription]
     * ```
     */
    az_pipelines_folder.list = function () {
        return new az_pipelines_folder_list_command_builder("az pipelines folder list", 'az_pipelines_folder_list_command_result');
    };
    /**
     * Update a folder name or description.
     *
     * Syntax:
     * ```
     * az pipelines folder update --path
     *                            [--detect {false, true}]
     *                            [--new-description]
     *                            [--new-path]
     *                            [--org]
     *                            [--project]
     *                            [--subscription]
     * ```
     *
     * @param {string} path Full path of the folder.
     */
    az_pipelines_folder.update = function (path) {
        return new az_pipelines_folder_update_command_builder("az pipelines folder update", 'az_pipelines_folder_update_command_result', path);
    };
    return az_pipelines_folder;
}());
exports.az_pipelines_folder = az_pipelines_folder;
/** Manage agent pools. */
var az_pipelines_pool = /** @class */ (function () {
    function az_pipelines_pool() {
    }
    /**
     * List agent pools.
     *
     * Syntax:
     * ```
     * az pipelines pool list [--action {manage, none, use}]
     *                        [--detect {false, true}]
     *                        [--org]
     *                        [--pool-name]
     *                        [--pool-type {automation, deployment}]
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     */
    az_pipelines_pool.list = function () {
        return new az_pipelines_pool_list_command_builder("az pipelines pool list", 'az_pipelines_pool_list_command_result');
    };
    /**
     * Show agent pool details.
     *
     * Syntax:
     * ```
     * az pipelines pool show --id
     *                        [--action {manage, none, use}]
     *                        [--detect {false, true}]
     *                        [--org]
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} poolId Id of the pool to list the details.
     */
    az_pipelines_pool.show = function (poolId) {
        return new az_pipelines_pool_show_command_builder("az pipelines pool show", 'az_pipelines_pool_show_command_result', poolId);
    };
    return az_pipelines_pool;
}());
exports.az_pipelines_pool = az_pipelines_pool;
/** Manage agent queues. */
var az_pipelines_queue = /** @class */ (function () {
    function az_pipelines_queue() {
    }
    /**
     * List agent queues.
     *
     * Syntax:
     * ```
     * az pipelines queue list [--action {manage, none, use}]
     *                         [--detect {false, true}]
     *                         [--org]
     *                         [--project]
     *                         [--query-examples]
     *                         [--queue-name]
     *                         [--subscription]
     * ```
     */
    az_pipelines_queue.list = function () {
        return new az_pipelines_queue_list_command_builder("az pipelines queue list", 'az_pipelines_queue_list_command_result');
    };
    /**
     * Show details of agent queue.
     *
     * Syntax:
     * ```
     * az pipelines queue show --id
     *                         [--action {manage, none, use}]
     *                         [--detect {false, true}]
     *                         [--org]
     *                         [--project]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} queueId Id of the agent queue to get information about.
     */
    az_pipelines_queue.show = function (queueId) {
        return new az_pipelines_queue_show_command_builder("az pipelines queue show", 'az_pipelines_queue_show_command_result', queueId);
    };
    return az_pipelines_queue;
}());
exports.az_pipelines_queue = az_pipelines_queue;
/** Manage release definitions. */
var az_pipelines_release_definition = /** @class */ (function () {
    function az_pipelines_release_definition() {
    }
    /**
     * List release definitions.
     *
     * Syntax:
     * ```
     * az pipelines release definition list [--artifact-source-id]
     *                                      [--artifact-type {build, externaltfsbuild, git, github, jenkins, tfvc}]
     *                                      [--detect {false, true}]
     *                                      [--name]
     *                                      [--org]
     *                                      [--project]
     *                                      [--query-examples]
     *                                      [--subscription]
     *                                      [--top]
     * ```
     */
    az_pipelines_release_definition.list = function () {
        return new az_pipelines_release_definition_list_command_builder("az pipelines release definition list", 'az_pipelines_release_definition_list_command_result');
    };
    /**
     * Get the details of a release definition.
     *
     * Syntax:
     * ```
     * az pipelines release definition show [--detect {false, true}]
     *                                      [--id]
     *                                      [--name]
     *                                      [--open]
     *                                      [--org]
     *                                      [--project]
     *                                      [--query-examples]
     *                                      [--subscription]
     * ```
     */
    az_pipelines_release_definition.show = function () {
        return new az_pipelines_release_definition_show_command_builder("az pipelines release definition show", 'az_pipelines_release_definition_show_command_result');
    };
    return az_pipelines_release_definition;
}());
exports.az_pipelines_release_definition = az_pipelines_release_definition;
/** Manage releases. */
var az_pipelines_release = /** @class */ (function () {
    function az_pipelines_release() {
    }
    /**
     * Request (create) a release.
     *
     * Syntax:
     * ```
     * az pipelines release create [--artifact-metadata-list]
     *                             [--definition-id]
     *                             [--definition-name]
     *                             [--description]
     *                             [--detect {false, true}]
     *                             [--open]
     *                             [--org]
     *                             [--project]
     *                             [--subscription]
     * ```
     */
    az_pipelines_release.create = function () {
        return new az_pipelines_release_create_command_builder("az pipelines release create", 'az_pipelines_release_create_command_result');
    };
    /**
     * List release results.
     *
     * Syntax:
     * ```
     * az pipelines release list [--definition-id]
     *                           [--detect {false, true}]
     *                           [--org]
     *                           [--project]
     *                           [--query-examples]
     *                           [--source-branch]
     *                           [--status]
     *                           [--subscription]
     *                           [--top]
     * ```
     */
    az_pipelines_release.list = function () {
        return new az_pipelines_release_list_command_builder("az pipelines release list", 'az_pipelines_release_list_command_result');
    };
    /**
     * Get the details of a release.
     *
     * Syntax:
     * ```
     * az pipelines release show --id
     *                           [--detect {false, true}]
     *                           [--open]
     *                           [--org]
     *                           [--project]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} id ID of the release.
     */
    az_pipelines_release.show = function (id) {
        return new az_pipelines_release_show_command_builder("az pipelines release show", 'az_pipelines_release_show_command_result', id);
    };
    return az_pipelines_release;
}());
exports.az_pipelines_release = az_pipelines_release;
/** Manage pipeline run artifacts. */
var az_pipelines_runs_artifact = /** @class */ (function () {
    function az_pipelines_runs_artifact() {
    }
    /**
     * Download a pipeline artifact.
     *
     * Syntax:
     * ```
     * az pipelines runs artifact download --artifact-name
     *                                     --path
     *                                     --run-id
     *                                     [--detect {false, true}]
     *                                     [--org]
     *                                     [--project]
     *                                     [--subscription]
     * ```
     *
     * @param {string} artifactName Name of the artifact to download.
     * @param {string} path Path to download the artifact into.
     * @param {string} runId ID of the run that the artifact is associated to.
     */
    az_pipelines_runs_artifact.download = function (artifactName, path, runId) {
        return new az_pipelines_runs_artifact_download_command_builder("az pipelines runs artifact download", 'az_pipelines_runs_artifact_download_command_result', artifactName, path, runId);
    };
    /**
     * List artifacts associated with a run.
     *
     * Syntax:
     * ```
     * az pipelines runs artifact list --run-id
     *                                 [--detect {false, true}]
     *                                 [--org]
     *                                 [--project]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} runId ID of the run that the artifact is associated to.
     */
    az_pipelines_runs_artifact.list = function (runId) {
        return new az_pipelines_runs_artifact_list_command_builder("az pipelines runs artifact list", 'az_pipelines_runs_artifact_list_command_result', runId);
    };
    /**
     * Upload a pipeline artifact.
     *
     * Syntax:
     * ```
     * az pipelines runs artifact upload --artifact-name
     *                                   --path
     *                                   --run-id
     *                                   [--detect {false, true}]
     *                                   [--org]
     *                                   [--project]
     *                                   [--subscription]
     * ```
     *
     * @param {string} artifactName Name of the artifact to upload.
     * @param {string} path Path to upload the artifact from.
     * @param {string} runId ID of the run that the artifact is associated to.
     */
    az_pipelines_runs_artifact.upload = function (artifactName, path, runId) {
        return new az_pipelines_runs_artifact_upload_command_builder("az pipelines runs artifact upload", 'az_pipelines_runs_artifact_upload_command_result', artifactName, path, runId);
    };
    return az_pipelines_runs_artifact;
}());
exports.az_pipelines_runs_artifact = az_pipelines_runs_artifact;
/** Manage pipeline run tags. */
var az_pipelines_runs_tag = /** @class */ (function () {
    function az_pipelines_runs_tag() {
    }
    /**
     * Add tag(s) for a pipeline run.
     *
     * Syntax:
     * ```
     * az pipelines runs tag add --run-id
     *                           --tags
     *                           [--detect {false, true}]
     *                           [--org]
     *                           [--project]
     *                           [--subscription]
     * ```
     *
     * @param {string} runId ID of the pipeline run.
     * @param {string} tags Tag(s) to be added to the pipeline run. [Comma seperated values].
     */
    az_pipelines_runs_tag.add = function (runId, tags) {
        return new az_pipelines_runs_tag_add_command_builder("az pipelines runs tag add", 'az_pipelines_runs_tag_add_command_result', runId, tags);
    };
    /**
     * Delete a pipeline run tag.
     *
     * Syntax:
     * ```
     * az pipelines runs tag delete --run-id
     *                              --tag
     *                              [--detect {false, true}]
     *                              [--org]
     *                              [--project]
     *                              [--subscription]
     * ```
     *
     * @param {string} runId ID of the pipeline run.
     * @param {string} tag Tag to be deleted from the pipeline run.
     */
    az_pipelines_runs_tag["delete"] = function (runId, tag) {
        return new az_pipelines_runs_tag_delete_command_builder("az pipelines runs tag delete", 'az_pipelines_runs_tag_delete_command_result', runId, tag);
    };
    /**
     * Get tags for a pipeline run.
     *
     * Syntax:
     * ```
     * az pipelines runs tag list --run-id
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--project]
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} runId ID of the  pipeline run.
     */
    az_pipelines_runs_tag.list = function (runId) {
        return new az_pipelines_runs_tag_list_command_builder("az pipelines runs tag list", 'az_pipelines_runs_tag_list_command_result', runId);
    };
    return az_pipelines_runs_tag;
}());
exports.az_pipelines_runs_tag = az_pipelines_runs_tag;
/** Manage pipeline runs. */
var az_pipelines_runs = /** @class */ (function () {
    function az_pipelines_runs() {
    }
    /**
     * List the pipeline runs in a project.
     *
     * Syntax:
     * ```
     * az pipelines runs list [--branch]
     *                        [--detect {false, true}]
     *                        [--org]
     *                        [--pipeline-ids]
     *                        [--project]
     *                        [--query-examples]
     *                        [--query-order {FinishTimeAsc, FinishTimeDesc, QueueTimeAsc, QueueTimeDesc, StartTimeAsc, StartTimeDesc}]
     *                        [--reason {all, batchedCI, buildCompletion, checkInShelveset, individualCI, manual, pullRequest, schedule, triggered, userCreated, validateShelveset}]
     *                        [--requested-for]
     *                        [--result {canceled, failed, none, partiallySucceeded, succeeded}]
     *                        [--status {all, cancelling, completed, inProgress, none, notStarted, postponed}]
     *                        [--subscription]
     *                        [--tags]
     *                        [--top]
     * ```
     */
    az_pipelines_runs.list = function () {
        return new az_pipelines_runs_list_command_builder("az pipelines runs list", 'az_pipelines_runs_list_command_result');
    };
    /**
     * Show details of a pipeline run.
     *
     * Syntax:
     * ```
     * az pipelines runs show --id
     *                        [--detect {false, true}]
     *                        [--open]
     *                        [--org]
     *                        [--project]
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} id ID of the pipeline run.
     */
    az_pipelines_runs.show = function (id) {
        return new az_pipelines_runs_show_command_builder("az pipelines runs show", 'az_pipelines_runs_show_command_result', id);
    };
    return az_pipelines_runs;
}());
exports.az_pipelines_runs = az_pipelines_runs;
/** Manage variables in a variable group. */
var az_pipelines_variable_group_variable = /** @class */ (function () {
    function az_pipelines_variable_group_variable() {
    }
    /**
     * Add a variable to a variable group.
     *
     * Syntax:
     * ```
     * az pipelines variable-group variable create --group-id
     *                                             --name
     *                                             [--detect {false, true}]
     *                                             [--org]
     *                                             [--project]
     *                                             [--secret {false, true}]
     *                                             [--subscription]
     *                                             [--value]
     * ```
     *
     * @param {string} groupId Id of the variable group.
     * @param {string} name Name of the variable.
     */
    az_pipelines_variable_group_variable.create = function (groupId, name) {
        return new az_pipelines_variable_group_variable_create_command_builder("az pipelines variable-group variable create", 'az_pipelines_variable_group_variable_create_command_result', groupId, name);
    };
    /**
     * Delete a variable from variable group.
     *
     * Syntax:
     * ```
     * az pipelines variable-group variable delete --group-id
     *                                             --name
     *                                             [--detect {false, true}]
     *                                             [--org]
     *                                             [--project]
     *                                             [--subscription]
     *                                             [--yes]
     * ```
     *
     * @param {string} groupId Id of the variable group.
     * @param {string} name Name of the variable.
     */
    az_pipelines_variable_group_variable["delete"] = function (groupId, name) {
        return new az_pipelines_variable_group_variable_delete_command_builder("az pipelines variable-group variable delete", 'az_pipelines_variable_group_variable_delete_command_result', groupId, name);
    };
    /**
     * List the variables in a variable group.
     *
     * Syntax:
     * ```
     * az pipelines variable-group variable list --group-id
     *                                           [--detect {false, true}]
     *                                           [--org]
     *                                           [--project]
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} groupId Id of the variable group.
     */
    az_pipelines_variable_group_variable.list = function (groupId) {
        return new az_pipelines_variable_group_variable_list_command_builder("az pipelines variable-group variable list", 'az_pipelines_variable_group_variable_list_command_result', groupId);
    };
    /**
     * Update a variable in a variable group.
     *
     * Syntax:
     * ```
     * az pipelines variable-group variable update --group-id
     *                                             --name
     *                                             [--detect {false, true}]
     *                                             [--new-name]
     *                                             [--org]
     *                                             [--project]
     *                                             [--prompt-value {false, true}]
     *                                             [--secret {false, true}]
     *                                             [--subscription]
     *                                             [--value]
     * ```
     *
     * @param {string} groupId Id of the variable group.
     * @param {string} name Name of the variable.
     */
    az_pipelines_variable_group_variable.update = function (groupId, name) {
        return new az_pipelines_variable_group_variable_update_command_builder("az pipelines variable-group variable update", 'az_pipelines_variable_group_variable_update_command_result', groupId, name);
    };
    return az_pipelines_variable_group_variable;
}());
exports.az_pipelines_variable_group_variable = az_pipelines_variable_group_variable;
/** Manage variable groups. */
var az_pipelines_variable_group = /** @class */ (function () {
    function az_pipelines_variable_group() {
    }
    /**
     * Create a variable group.
     *
     * Syntax:
     * ```
     * az pipelines variable-group create --name
     *                                    --variables
     *                                    [--authorize {false, true}]
     *                                    [--description]
     *                                    [--detect {false, true}]
     *                                    [--org]
     *                                    [--project]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the variable group.
     * @param {string} variables Variables in format key=value space separated pairs. Secret variables should be managed using `az pipelines variable-group variable` commands.
     */
    az_pipelines_variable_group.create = function (name, variables) {
        return new az_pipelines_variable_group_create_command_builder("az pipelines variable-group create", 'az_pipelines_variable_group_create_command_result', name, variables);
    };
    /**
     * Delete a variable group.
     *
     * Syntax:
     * ```
     * az pipelines variable-group delete --group-id
     *                                    [--detect {false, true}]
     *                                    [--org]
     *                                    [--project]
     *                                    [--subscription]
     *                                    [--yes]
     * ```
     *
     * @param {string} groupId Id of the variable group.
     */
    az_pipelines_variable_group["delete"] = function (groupId) {
        return new az_pipelines_variable_group_delete_command_builder("az pipelines variable-group delete", 'az_pipelines_variable_group_delete_command_result', groupId);
    };
    /**
     * List variable groups.
     *
     * Syntax:
     * ```
     * az pipelines variable-group list [--action {manage, none, use}]
     *                                  [--continuation-token]
     *                                  [--detect {false, true}]
     *                                  [--group-name]
     *                                  [--org]
     *                                  [--project]
     *                                  [--query-examples]
     *                                  [--query-order {Asc, Desc}]
     *                                  [--subscription]
     *                                  [--top]
     * ```
     */
    az_pipelines_variable_group.list = function () {
        return new az_pipelines_variable_group_list_command_builder("az pipelines variable-group list", 'az_pipelines_variable_group_list_command_result');
    };
    /**
     * Show variable group details.
     *
     * Syntax:
     * ```
     * az pipelines variable-group show --group-id
     *                                  [--detect {false, true}]
     *                                  [--org]
     *                                  [--project]
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} groupId ID of the variable group.
     */
    az_pipelines_variable_group.show = function (groupId) {
        return new az_pipelines_variable_group_show_command_builder("az pipelines variable-group show", 'az_pipelines_variable_group_show_command_result', groupId);
    };
    /**
     * Update a variable group.
     *
     * Syntax:
     * ```
     * az pipelines variable-group update --group-id
     *                                    [--authorize {false, true}]
     *                                    [--description]
     *                                    [--detect {false, true}]
     *                                    [--name]
     *                                    [--org]
     *                                    [--project]
     *                                    [--subscription]
     * ```
     *
     * @param {string} groupId Id of the variable group.
     */
    az_pipelines_variable_group.update = function (groupId) {
        return new az_pipelines_variable_group_update_command_builder("az pipelines variable-group update", 'az_pipelines_variable_group_update_command_result', groupId);
    };
    return az_pipelines_variable_group;
}());
exports.az_pipelines_variable_group = az_pipelines_variable_group;
/** Manage pipeline variables. */
var az_pipelines_variable = /** @class */ (function () {
    function az_pipelines_variable() {
    }
    /**
     * Add a variable to a pipeline.
     *
     * Syntax:
     * ```
     * az pipelines variable create --name
     *                              [--allow-override {false, true}]
     *                              [--detect {false, true}]
     *                              [--org]
     *                              [--pipeline-id]
     *                              [--pipeline-name]
     *                              [--project]
     *                              [--secret {false, true}]
     *                              [--subscription]
     *                              [--value]
     * ```
     *
     * @param {string} name Name of the variable.
     */
    az_pipelines_variable.create = function (name) {
        return new az_pipelines_variable_create_command_builder("az pipelines variable create", 'az_pipelines_variable_create_command_result', name);
    };
    /**
     * Delete a variable from pipeline.
     *
     * Syntax:
     * ```
     * az pipelines variable delete --name
     *                              [--detect {false, true}]
     *                              [--org]
     *                              [--pipeline-id]
     *                              [--pipeline-name]
     *                              [--project]
     *                              [--subscription]
     *                              [--yes]
     * ```
     *
     * @param {string} name Name of the variable to delete.
     */
    az_pipelines_variable["delete"] = function (name) {
        return new az_pipelines_variable_delete_command_builder("az pipelines variable delete", 'az_pipelines_variable_delete_command_result', name);
    };
    /**
     * List the variables in a pipeline.
     *
     * Syntax:
     * ```
     * az pipelines variable list [--detect {false, true}]
     *                            [--org]
     *                            [--pipeline-id]
     *                            [--pipeline-name]
     *                            [--project]
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     */
    az_pipelines_variable.list = function () {
        return new az_pipelines_variable_list_command_builder("az pipelines variable list", 'az_pipelines_variable_list_command_result');
    };
    /**
     * Update a variable in a pipeline.
     *
     * Syntax:
     * ```
     * az pipelines variable update --name
     *                              [--allow-override {false, true}]
     *                              [--detect {false, true}]
     *                              [--new-name]
     *                              [--org]
     *                              [--pipeline-id]
     *                              [--pipeline-name]
     *                              [--project]
     *                              [--prompt-value {false, true}]
     *                              [--secret {false, true}]
     *                              [--subscription]
     *                              [--value]
     * ```
     *
     * @param {string} name Name of the variable.
     */
    az_pipelines_variable.update = function (name) {
        return new az_pipelines_variable_update_command_builder("az pipelines variable update", 'az_pipelines_variable_update_command_result', name);
    };
    return az_pipelines_variable;
}());
exports.az_pipelines_variable = az_pipelines_variable;
/** Manage Azure Pipelines. */
var az_pipelines = /** @class */ (function () {
    function az_pipelines() {
    }
    /**
     * Create a new Azure Pipeline (YAML based).
     *
     * Syntax:
     * ```
     * az pipelines create --name
     *                     [--branch]
     *                     [--description]
     *                     [--detect {false, true}]
     *                     [--folder-path]
     *                     [--org]
     *                     [--project]
     *                     [--queue-id]
     *                     [--repository]
     *                     [--repository-type {github, tfsgit}]
     *                     [--service-connection]
     *                     [--skip-first-run {false, true}]
     *                     [--subscription]
     *                     [--yaml-path]
     * ```
     *
     * @param {string} name Name of the new pipeline.
     */
    az_pipelines.create = function (name) {
        return new az_pipelines_create_command_builder("az pipelines create", 'az_pipelines_create_command_result', name);
    };
    /**
     * Delete a pipeline.
     *
     * Syntax:
     * ```
     * az pipelines delete --id
     *                     [--detect {false, true}]
     *                     [--org]
     *                     [--project]
     *                     [--subscription]
     *                     [--yes]
     * ```
     *
     * @param {string} id ID of the pipeline.
     */
    az_pipelines["delete"] = function (id) {
        return new az_pipelines_delete_command_builder("az pipelines delete", 'az_pipelines_delete_command_result', id);
    };
    /**
     * List pipelines.
     *
     * Syntax:
     * ```
     * az pipelines list [--detect {false, true}]
     *                   [--folder-path]
     *                   [--name]
     *                   [--org]
     *                   [--project]
     *                   [--query-examples]
     *                   [--query-order {ModifiedAsc, ModifiedDesc, NameAsc, NameDesc, None}]
     *                   [--repository]
     *                   [--repository-type {bitbucket, git, github, githubenterprise, svn, tfsgit, tfsversioncontrol}]
     *                   [--subscription]
     *                   [--top]
     * ```
     */
    az_pipelines.list = function () {
        return new az_pipelines_list_command_builder("az pipelines list", 'az_pipelines_list_command_result');
    };
    /**
     * Queue (run) a pipeline.
     *
     * Syntax:
     * ```
     * az pipelines run [--branch]
     *                  [--commit-id]
     *                  [--detect {false, true}]
     *                  [--folder-path]
     *                  [--id]
     *                  [--name]
     *                  [--open]
     *                  [--org]
     *                  [--project]
     *                  [--subscription]
     *                  [--variables]
     * ```
     */
    az_pipelines.run = function () {
        return new az_pipelines_run_command_builder("az pipelines run", 'az_pipelines_run_command_result');
    };
    /**
     * Get the details of a pipeline.
     *
     * Syntax:
     * ```
     * az pipelines show [--detect {false, true}]
     *                   [--folder-path]
     *                   [--id]
     *                   [--name]
     *                   [--open]
     *                   [--org]
     *                   [--project]
     *                   [--query-examples]
     *                   [--subscription]
     * ```
     */
    az_pipelines.show = function () {
        return new az_pipelines_show_command_builder("az pipelines show", 'az_pipelines_show_command_result');
    };
    /**
     * Update a pipeline.
     *
     * Syntax:
     * ```
     * az pipelines update [--branch]
     *                     [--description]
     *                     [--detect {false, true}]
     *                     [--id]
     *                     [--name]
     *                     [--new-folder-path]
     *                     [--new-name]
     *                     [--org]
     *                     [--project]
     *                     [--queue-id]
     *                     [--subscription]
     *                     [--yaml-path]
     * ```
     */
    az_pipelines.update = function () {
        return new az_pipelines_update_command_builder("az pipelines update", 'az_pipelines_update_command_result');
    };
    return az_pipelines;
}());
exports.az_pipelines = az_pipelines;
/**
 * Get a list of agents in a pool.
 *
 * Syntax:
 * ```
 * az pipelines agent list --pool-id
 *                         [--agent-name]
 *                         [--demands]
 *                         [--detect {false, true}]
 *                         [--include-assigned-request {false, true}]
 *                         [--include-capabilities {false, true}]
 *                         [--include-last-completed-request {false, true}]
 *                         [--org]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} poolId The agent pool containing the agents.
 */
var az_pipelines_agent_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_agent_list_command_builder, _super);
    function az_pipelines_agent_list_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The agent pool containing the agents. */
    az_pipelines_agent_list_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Filter on agent name. */
    az_pipelines_agent_list_command_builder.prototype.agentName = function (value) {
        this.setFlag("--agent-name", value);
        return this;
    };
    /** Filter by demands the agents can satisfy. Comma separated list. */
    az_pipelines_agent_list_command_builder.prototype.demands = function (value) {
        this.setFlag("--demands", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_agent_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether to include details about the agents' current work. */
    az_pipelines_agent_list_command_builder.prototype.includeAssignedRequest = function (value) {
        this.setFlag("--include-assigned-request", value.toString());
        return this;
    };
    /** Whether to include the agents' capabilities in the response. */
    az_pipelines_agent_list_command_builder.prototype.includeCapabilities = function (value) {
        this.setFlag("--include-capabilities", value.toString());
        return this;
    };
    /** Whether to include details about the agents' most recent completed work. */
    az_pipelines_agent_list_command_builder.prototype.includeLastCompletedRequest = function (value) {
        this.setFlag("--include-last-completed-request", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_agent_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_agent_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_agent_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_agent_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show agent details.
 *
 * Syntax:
 * ```
 * az pipelines agent show --agent-id
 *                         --pool-id
 *                         [--detect {false, true}]
 *                         [--include-assigned-request {false, true}]
 *                         [--include-capabilities {false, true}]
 *                         [--include-last-completed-request {false, true}]
 *                         [--org]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} agentId The agent ID to get information about.
 * @param {string} poolId The agent pool containing the agent.
 */
var az_pipelines_agent_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_agent_show_command_builder, _super);
    function az_pipelines_agent_show_command_builder(commandPath, resultDataTypeName, agentId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.agentId(agentId);
        _this.poolId(poolId);
        return _this;
    }
    /** The agent ID to get information about. */
    az_pipelines_agent_show_command_builder.prototype.agentId = function (value) {
        this.setFlag("--agent-id", value);
        return this;
    };
    /** The agent pool containing the agent. */
    az_pipelines_agent_show_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_agent_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether to include details about the agents' current work. */
    az_pipelines_agent_show_command_builder.prototype.includeAssignedRequest = function (value) {
        this.setFlag("--include-assigned-request", value.toString());
        return this;
    };
    /** Whether to include the agents' capabilities in the response. */
    az_pipelines_agent_show_command_builder.prototype.includeCapabilities = function (value) {
        this.setFlag("--include-capabilities", value.toString());
        return this;
    };
    /** Whether to include details about the agents' most recent completed work. */
    az_pipelines_agent_show_command_builder.prototype.includeLastCompletedRequest = function (value) {
        this.setFlag("--include-last-completed-request", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_agent_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_agent_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_agent_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_agent_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List build definitions.
 *
 * Syntax:
 * ```
 * az pipelines build definition list [--detect {false, true}]
 *                                    [--name]
 *                                    [--org]
 *                                    [--project]
 *                                    [--query-examples]
 *                                    [--repository]
 *                                    [--repository-type {bitbucket, git, github, githubenterprise, svn, tfsgit, tfsversioncontrol}]
 *                                    [--subscription]
 *                                    [--top]
 * ```
 */
var az_pipelines_build_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_build_definition_list_command_builder, _super);
    function az_pipelines_build_definition_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_pipelines_build_definition_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Limit results to definitions with this name or starting with this name. Examples: "FabCI" or "Fab\*". */
    az_pipelines_build_definition_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_build_definition_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_build_definition_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_build_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Limit results to definitions associated with this repository. */
    az_pipelines_build_definition_list_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Limit results to definitions associated with this repository type. It is mandatory to pass 'repository' argument along with this argument. */
    az_pipelines_build_definition_list_command_builder.prototype.repositoryType = function (value) {
        this.setFlag("--repository-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_build_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of definitions to list. */
    az_pipelines_build_definition_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_pipelines_build_definition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a build definition.
 *
 * Syntax:
 * ```
 * az pipelines build definition show [--detect {false, true}]
 *                                    [--id]
 *                                    [--name]
 *                                    [--open]
 *                                    [--org]
 *                                    [--project]
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 */
var az_pipelines_build_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_build_definition_show_command_builder, _super);
    function az_pipelines_build_definition_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_pipelines_build_definition_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** ID of the definition. */
    az_pipelines_build_definition_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the definition. Ignored if --id is supplied. */
    az_pipelines_build_definition_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Open the definition summary page in your web browser. */
    az_pipelines_build_definition_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_build_definition_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_build_definition_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_build_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_build_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_build_definition_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add tag(s) for a build.
 *
 * Syntax:
 * ```
 * az pipelines build tag add --build-id
 *                            --tags
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--project]
 *                            [--subscription]
 * ```
 *
 * @param {string} buildId ID of the build.
 * @param {string} tags Tag(s) to be added to the build. [Comma seperated values].
 */
var az_pipelines_build_tag_add_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_build_tag_add_command_builder, _super);
    function az_pipelines_build_tag_add_command_builder(commandPath, resultDataTypeName, buildId, tags) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.buildId(buildId);
        _this.tags(tags);
        return _this;
    }
    /** ID of the build. */
    az_pipelines_build_tag_add_command_builder.prototype.buildId = function (value) {
        this.setFlag("--build-id", value);
        return this;
    };
    /** Tag(s) to be added to the build. [Comma seperated values]. */
    az_pipelines_build_tag_add_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_build_tag_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_build_tag_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_build_tag_add_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_build_tag_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_build_tag_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a build tag.
 *
 * Syntax:
 * ```
 * az pipelines build tag delete --build-id
 *                               --tag
 *                               [--detect {false, true}]
 *                               [--org]
 *                               [--project]
 *                               [--subscription]
 * ```
 *
 * @param {string} buildId ID of the build.
 * @param {string} tag Tag to be deleted from the build.
 */
var az_pipelines_build_tag_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_build_tag_delete_command_builder, _super);
    function az_pipelines_build_tag_delete_command_builder(commandPath, resultDataTypeName, buildId, tag) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.buildId(buildId);
        _this.tag(tag);
        return _this;
    }
    /** ID of the build. */
    az_pipelines_build_tag_delete_command_builder.prototype.buildId = function (value) {
        this.setFlag("--build-id", value);
        return this;
    };
    /** Tag to be deleted from the build. */
    az_pipelines_build_tag_delete_command_builder.prototype.tag = function (value) {
        this.setFlag("--tag", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_build_tag_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_build_tag_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_build_tag_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_build_tag_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_build_tag_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get tags for a build.
 *
 * Syntax:
 * ```
 * az pipelines build tag list --build-id
 *                             [--detect {false, true}]
 *                             [--org]
 *                             [--project]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} buildId ID of the build.
 */
var az_pipelines_build_tag_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_build_tag_list_command_builder, _super);
    function az_pipelines_build_tag_list_command_builder(commandPath, resultDataTypeName, buildId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.buildId(buildId);
        return _this;
    }
    /** ID of the build. */
    az_pipelines_build_tag_list_command_builder.prototype.buildId = function (value) {
        this.setFlag("--build-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_build_tag_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_build_tag_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_build_tag_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_build_tag_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_build_tag_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_build_tag_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List build results.
 *
 * Syntax:
 * ```
 * az pipelines build list [--branch]
 *                         [--definition-ids]
 *                         [--detect {false, true}]
 *                         [--org]
 *                         [--project]
 *                         [--query-examples]
 *                         [--reason {all, batchedCI, buildCompletion, checkInShelveset, individualCI, manual, pullRequest, schedule, triggered, userCreated, validateShelveset}]
 *                         [--requested-for]
 *                         [--result {canceled, failed, none, partiallySucceeded, succeeded}]
 *                         [--status {all, cancelling, completed, inProgress, none, notStarted, postponed}]
 *                         [--subscription]
 *                         [--tags]
 *                         [--top]
 * ```
 */
var az_pipelines_build_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_build_list_command_builder, _super);
    function az_pipelines_build_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter by builds for this branch. */
    az_pipelines_build_list_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** IDs (space separated) of definitions to list builds for. */
    az_pipelines_build_list_command_builder.prototype.definitionIds = function (value) {
        this.setFlag("--definition-ids", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_build_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_build_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_build_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_build_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Limit to builds with this reason. */
    az_pipelines_build_list_command_builder.prototype.reason = function (value) {
        this.setFlag("--reason", value);
        return this;
    };
    /** Limit to builds requested for this user or group. */
    az_pipelines_build_list_command_builder.prototype.requestedFor = function (value) {
        this.setFlag("--requested-for", value);
        return this;
    };
    /** Limit to builds with this result. */
    az_pipelines_build_list_command_builder.prototype.result = function (value) {
        this.setFlag("--result", value);
        return this;
    };
    /** Limit to builds with this status. */
    az_pipelines_build_list_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_build_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Limit to builds with each of the specified tags. Space separated. */
    az_pipelines_build_list_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Maximum number of builds to list. */
    az_pipelines_build_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_pipelines_build_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Request (queue) a build.
 *
 * Syntax:
 * ```
 * az pipelines build queue [--branch]
 *                          [--commit-id]
 *                          [--definition-id]
 *                          [--definition-name]
 *                          [--detect {false, true}]
 *                          [--open]
 *                          [--org]
 *                          [--project]
 *                          [--queue-id]
 *                          [--subscription]
 *                          [--variables]
 * ```
 */
var az_pipelines_build_queue_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_build_queue_command_builder, _super);
    function az_pipelines_build_queue_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Branch to build. Required if there is not a default branch set up on the definition. Example: refs/heads/master or master or refs/pull/1/merge. */
    az_pipelines_build_queue_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Commit ID of the branch to build. */
    az_pipelines_build_queue_command_builder.prototype.commitId = function (value) {
        this.setFlag("--commit-id", value);
        return this;
    };
    /** ID of the definition to queue. Required if --name is not supplied. */
    az_pipelines_build_queue_command_builder.prototype.definitionId = function (value) {
        this.setFlag("--definition-id", value);
        return this;
    };
    /** Name of the definition to queue. Ignored if --id is supplied. */
    az_pipelines_build_queue_command_builder.prototype.definitionName = function (value) {
        this.setFlag("--definition-name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_build_queue_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the build results page in your web browser. */
    az_pipelines_build_queue_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_build_queue_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_build_queue_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Queue Id of the pool that will be used to queue the build. */
    az_pipelines_build_queue_command_builder.prototype.queueId = function (value) {
        this.setFlag("--queue-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_build_queue_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space separated "name=value" pairs for the variables you would like to set. */
    az_pipelines_build_queue_command_builder.prototype.variables = function (value) {
        this.setFlag("--variables", value);
        return this;
    };
    return az_pipelines_build_queue_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a build.
 *
 * Syntax:
 * ```
 * az pipelines build show --id
 *                         [--detect {false, true}]
 *                         [--open]
 *                         [--org]
 *                         [--project]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} id ID of the build.
 */
var az_pipelines_build_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_build_show_command_builder, _super);
    function az_pipelines_build_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the build. */
    az_pipelines_build_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_build_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the build results page in your web browser. */
    az_pipelines_build_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_build_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_build_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_build_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_build_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_build_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a folder.
 *
 * Syntax:
 * ```
 * az pipelines folder create --path
 *                            [--description]
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--project]
 *                            [--subscription]
 * ```
 *
 * @param {string} path Full path of the folder.
 */
var az_pipelines_folder_create_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_folder_create_command_builder, _super);
    function az_pipelines_folder_create_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** Full path of the folder. */
    az_pipelines_folder_create_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Description of the folder. */
    az_pipelines_folder_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_folder_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_folder_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_folder_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_folder_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_folder_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a folder.
 *
 * Syntax:
 * ```
 * az pipelines folder delete --path
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--project]
 *                            [--subscription]
 *                            [--yes]
 * ```
 *
 * @param {string} path Full path of the folder.
 */
var az_pipelines_folder_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_folder_delete_command_builder, _super);
    function az_pipelines_folder_delete_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** Full path of the folder. */
    az_pipelines_folder_delete_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_folder_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_folder_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_folder_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_folder_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_pipelines_folder_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_pipelines_folder_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all folders.
 *
 * Syntax:
 * ```
 * az pipelines folder list [--detect {false, true}]
 *                          [--org]
 *                          [--path]
 *                          [--project]
 *                          [--query-examples]
 *                          [--query-order {Asc, Desc, None}]
 *                          [--subscription]
 * ```
 */
var az_pipelines_folder_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_folder_list_command_builder, _super);
    function az_pipelines_folder_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_pipelines_folder_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_folder_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Full path of the folder. */
    az_pipelines_folder_list_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_folder_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_folder_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Order in which folders are returned. */
    az_pipelines_folder_list_command_builder.prototype.queryOrder = function (value) {
        this.setFlag("--query-order", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_folder_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_folder_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a folder name or description.
 *
 * Syntax:
 * ```
 * az pipelines folder update --path
 *                            [--detect {false, true}]
 *                            [--new-description]
 *                            [--new-path]
 *                            [--org]
 *                            [--project]
 *                            [--subscription]
 * ```
 *
 * @param {string} path Full path of the folder.
 */
var az_pipelines_folder_update_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_folder_update_command_builder, _super);
    function az_pipelines_folder_update_command_builder(commandPath, resultDataTypeName, path) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        return _this;
    }
    /** Full path of the folder. */
    az_pipelines_folder_update_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_folder_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** New description of the folder. */
    az_pipelines_folder_update_command_builder.prototype.newDescription = function (value) {
        this.setFlag("--new-description", value);
        return this;
    };
    /** New full path of the folder. */
    az_pipelines_folder_update_command_builder.prototype.newPath = function (value) {
        this.setFlag("--new-path", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_folder_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_folder_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_folder_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_folder_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List agent pools.
 *
 * Syntax:
 * ```
 * az pipelines pool list [--action {manage, none, use}]
 *                        [--detect {false, true}]
 *                        [--org]
 *                        [--pool-name]
 *                        [--pool-type {automation, deployment}]
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 */
var az_pipelines_pool_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_pool_list_command_builder, _super);
    function az_pipelines_pool_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter the list with user action permitted. */
    az_pipelines_pool_list_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_pool_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_pool_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Filter the list with matching pool name. */
    az_pipelines_pool_list_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Filter the list with type of pool. */
    az_pipelines_pool_list_command_builder.prototype.poolType = function (value) {
        this.setFlag("--pool-type", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_pool_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_pool_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_pool_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show agent pool details.
 *
 * Syntax:
 * ```
 * az pipelines pool show --id
 *                        [--action {manage, none, use}]
 *                        [--detect {false, true}]
 *                        [--org]
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} poolId Id of the pool to list the details.
 */
var az_pipelines_pool_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_pool_show_command_builder, _super);
    function az_pipelines_pool_show_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** Id of the pool to list the details. */
    az_pipelines_pool_show_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Filter the list with user action permitted. */
    az_pipelines_pool_show_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_pool_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_pool_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_pool_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_pool_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_pool_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List agent queues.
 *
 * Syntax:
 * ```
 * az pipelines queue list [--action {manage, none, use}]
 *                         [--detect {false, true}]
 *                         [--org]
 *                         [--project]
 *                         [--query-examples]
 *                         [--queue-name]
 *                         [--subscription]
 * ```
 */
var az_pipelines_queue_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_queue_list_command_builder, _super);
    function az_pipelines_queue_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter by whether the calling user has use or manage permissions. */
    az_pipelines_queue_list_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_queue_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_queue_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_queue_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_queue_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Filter the list with matching queue name regex. e.g. \*ubuntu\* for queue with name 'Hosted Ubuntu 1604'. */
    az_pipelines_queue_list_command_builder.prototype.queueName = function (value) {
        this.setFlag("--queue-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_queue_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_queue_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of agent queue.
 *
 * Syntax:
 * ```
 * az pipelines queue show --id
 *                         [--action {manage, none, use}]
 *                         [--detect {false, true}]
 *                         [--org]
 *                         [--project]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} queueId Id of the agent queue to get information about.
 */
var az_pipelines_queue_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_queue_show_command_builder, _super);
    function az_pipelines_queue_show_command_builder(commandPath, resultDataTypeName, queueId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.queueId(queueId);
        return _this;
    }
    /** Id of the agent queue to get information about. */
    az_pipelines_queue_show_command_builder.prototype.queueId = function (value) {
        this.setFlag("--queue-id", value);
        return this;
    };
    /** Filter by whether the calling user has use or manage permissions. */
    az_pipelines_queue_show_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_queue_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_queue_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_queue_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_queue_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_queue_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_queue_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List release definitions.
 *
 * Syntax:
 * ```
 * az pipelines release definition list [--artifact-source-id]
 *                                      [--artifact-type {build, externaltfsbuild, git, github, jenkins, tfvc}]
 *                                      [--detect {false, true}]
 *                                      [--name]
 *                                      [--org]
 *                                      [--project]
 *                                      [--query-examples]
 *                                      [--subscription]
 *                                      [--top]
 * ```
 */
var az_pipelines_release_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_release_definition_list_command_builder, _super);
    function az_pipelines_release_definition_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Limit results to definitions associated with this artifact_source_id. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at <a href="https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions">https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions</a>. */
    az_pipelines_release_definition_list_command_builder.prototype.artifactSourceId = function (value) {
        this.setFlag("--artifact-source-id", value);
        return this;
    };
    /** Release definitions with given artifactType will be returned. */
    az_pipelines_release_definition_list_command_builder.prototype.artifactType = function (value) {
        this.setFlag("--artifact-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_release_definition_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Limit results to definitions with this name or contains this name. Example: "FabCI". */
    az_pipelines_release_definition_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_release_definition_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_release_definition_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_release_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_release_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of definitions to list. */
    az_pipelines_release_definition_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_pipelines_release_definition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a release definition.
 *
 * Syntax:
 * ```
 * az pipelines release definition show [--detect {false, true}]
 *                                      [--id]
 *                                      [--name]
 *                                      [--open]
 *                                      [--org]
 *                                      [--project]
 *                                      [--query-examples]
 *                                      [--subscription]
 * ```
 */
var az_pipelines_release_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_release_definition_show_command_builder, _super);
    function az_pipelines_release_definition_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_pipelines_release_definition_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** ID of the definition. */
    az_pipelines_release_definition_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the definition. Ignored if --id is supplied. */
    az_pipelines_release_definition_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Open the definition summary page in your web browser. */
    az_pipelines_release_definition_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_release_definition_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_release_definition_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_release_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_release_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_release_definition_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Request (create) a release.
 *
 * Syntax:
 * ```
 * az pipelines release create [--artifact-metadata-list]
 *                             [--definition-id]
 *                             [--definition-name]
 *                             [--description]
 *                             [--detect {false, true}]
 *                             [--open]
 *                             [--org]
 *                             [--project]
 *                             [--subscription]
 * ```
 */
var az_pipelines_release_create_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_release_create_command_builder, _super);
    function az_pipelines_release_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space separated "alias=version_id" pairs. */
    az_pipelines_release_create_command_builder.prototype.artifactMetadataList = function (value) {
        this.setFlag("--artifact-metadata-list", value);
        return this;
    };
    /** ID of the definition to create. Required if --definition-name is not supplied. */
    az_pipelines_release_create_command_builder.prototype.definitionId = function (value) {
        this.setFlag("--definition-id", value);
        return this;
    };
    /** Name of the definition to create. Ignored if --definition-id is supplied. */
    az_pipelines_release_create_command_builder.prototype.definitionName = function (value) {
        this.setFlag("--definition-name", value);
        return this;
    };
    /** Description of the release. */
    az_pipelines_release_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_release_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the release results page in your web browser. */
    az_pipelines_release_create_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_release_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_release_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_release_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_release_create_command_builder;
}(base_1.CommandBuilder));
/**
 * List release results.
 *
 * Syntax:
 * ```
 * az pipelines release list [--definition-id]
 *                           [--detect {false, true}]
 *                           [--org]
 *                           [--project]
 *                           [--query-examples]
 *                           [--source-branch]
 *                           [--status]
 *                           [--subscription]
 *                           [--top]
 * ```
 */
var az_pipelines_release_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_release_list_command_builder, _super);
    function az_pipelines_release_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** ID of definition to list releases for. */
    az_pipelines_release_list_command_builder.prototype.definitionId = function (value) {
        this.setFlag("--definition-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_release_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_release_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_release_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_release_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Filter releases for this branch. */
    az_pipelines_release_list_command_builder.prototype.sourceBranch = function (value) {
        this.setFlag("--source-branch", value);
        return this;
    };
    /** Limit to releases with this status. */
    az_pipelines_release_list_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_release_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of releases to list. Default is 50. */
    az_pipelines_release_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_pipelines_release_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a release.
 *
 * Syntax:
 * ```
 * az pipelines release show --id
 *                           [--detect {false, true}]
 *                           [--open]
 *                           [--org]
 *                           [--project]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} id ID of the release.
 */
var az_pipelines_release_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_release_show_command_builder, _super);
    function az_pipelines_release_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the release. */
    az_pipelines_release_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_release_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the release results page in your web browser. */
    az_pipelines_release_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_release_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_release_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_release_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_release_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_release_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Download a pipeline artifact.
 *
 * Syntax:
 * ```
 * az pipelines runs artifact download --artifact-name
 *                                     --path
 *                                     --run-id
 *                                     [--detect {false, true}]
 *                                     [--org]
 *                                     [--project]
 *                                     [--subscription]
 * ```
 *
 * @param {string} artifactName Name of the artifact to download.
 * @param {string} path Path to download the artifact into.
 * @param {string} runId ID of the run that the artifact is associated to.
 */
var az_pipelines_runs_artifact_download_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_runs_artifact_download_command_builder, _super);
    function az_pipelines_runs_artifact_download_command_builder(commandPath, resultDataTypeName, artifactName, path, runId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.artifactName(artifactName);
        _this.path(path);
        _this.runId(runId);
        return _this;
    }
    /** Name of the artifact to download. */
    az_pipelines_runs_artifact_download_command_builder.prototype.artifactName = function (value) {
        this.setFlag("--artifact-name", value);
        return this;
    };
    /** Path to download the artifact into. */
    az_pipelines_runs_artifact_download_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** ID of the run that the artifact is associated to. */
    az_pipelines_runs_artifact_download_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_runs_artifact_download_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_runs_artifact_download_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_runs_artifact_download_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_runs_artifact_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_runs_artifact_download_command_builder;
}(base_1.CommandBuilder));
/**
 * List artifacts associated with a run.
 *
 * Syntax:
 * ```
 * az pipelines runs artifact list --run-id
 *                                 [--detect {false, true}]
 *                                 [--org]
 *                                 [--project]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} runId ID of the run that the artifact is associated to.
 */
var az_pipelines_runs_artifact_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_runs_artifact_list_command_builder, _super);
    function az_pipelines_runs_artifact_list_command_builder(commandPath, resultDataTypeName, runId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.runId(runId);
        return _this;
    }
    /** ID of the run that the artifact is associated to. */
    az_pipelines_runs_artifact_list_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_runs_artifact_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_runs_artifact_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_runs_artifact_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_runs_artifact_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_runs_artifact_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_runs_artifact_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Upload a pipeline artifact.
 *
 * Syntax:
 * ```
 * az pipelines runs artifact upload --artifact-name
 *                                   --path
 *                                   --run-id
 *                                   [--detect {false, true}]
 *                                   [--org]
 *                                   [--project]
 *                                   [--subscription]
 * ```
 *
 * @param {string} artifactName Name of the artifact to upload.
 * @param {string} path Path to upload the artifact from.
 * @param {string} runId ID of the run that the artifact is associated to.
 */
var az_pipelines_runs_artifact_upload_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_runs_artifact_upload_command_builder, _super);
    function az_pipelines_runs_artifact_upload_command_builder(commandPath, resultDataTypeName, artifactName, path, runId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.artifactName(artifactName);
        _this.path(path);
        _this.runId(runId);
        return _this;
    }
    /** Name of the artifact to upload. */
    az_pipelines_runs_artifact_upload_command_builder.prototype.artifactName = function (value) {
        this.setFlag("--artifact-name", value);
        return this;
    };
    /** Path to upload the artifact from. */
    az_pipelines_runs_artifact_upload_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** ID of the run that the artifact is associated to. */
    az_pipelines_runs_artifact_upload_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_runs_artifact_upload_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_runs_artifact_upload_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_runs_artifact_upload_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_runs_artifact_upload_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_runs_artifact_upload_command_builder;
}(base_1.CommandBuilder));
/**
 * Add tag(s) for a pipeline run.
 *
 * Syntax:
 * ```
 * az pipelines runs tag add --run-id
 *                           --tags
 *                           [--detect {false, true}]
 *                           [--org]
 *                           [--project]
 *                           [--subscription]
 * ```
 *
 * @param {string} runId ID of the pipeline run.
 * @param {string} tags Tag(s) to be added to the pipeline run. [Comma seperated values].
 */
var az_pipelines_runs_tag_add_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_runs_tag_add_command_builder, _super);
    function az_pipelines_runs_tag_add_command_builder(commandPath, resultDataTypeName, runId, tags) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.runId(runId);
        _this.tags(tags);
        return _this;
    }
    /** ID of the pipeline run. */
    az_pipelines_runs_tag_add_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Tag(s) to be added to the pipeline run. [Comma seperated values]. */
    az_pipelines_runs_tag_add_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_runs_tag_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_runs_tag_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_runs_tag_add_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_runs_tag_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_runs_tag_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a pipeline run tag.
 *
 * Syntax:
 * ```
 * az pipelines runs tag delete --run-id
 *                              --tag
 *                              [--detect {false, true}]
 *                              [--org]
 *                              [--project]
 *                              [--subscription]
 * ```
 *
 * @param {string} runId ID of the pipeline run.
 * @param {string} tag Tag to be deleted from the pipeline run.
 */
var az_pipelines_runs_tag_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_runs_tag_delete_command_builder, _super);
    function az_pipelines_runs_tag_delete_command_builder(commandPath, resultDataTypeName, runId, tag) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.runId(runId);
        _this.tag(tag);
        return _this;
    }
    /** ID of the pipeline run. */
    az_pipelines_runs_tag_delete_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Tag to be deleted from the pipeline run. */
    az_pipelines_runs_tag_delete_command_builder.prototype.tag = function (value) {
        this.setFlag("--tag", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_runs_tag_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_runs_tag_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_runs_tag_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_runs_tag_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_runs_tag_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get tags for a pipeline run.
 *
 * Syntax:
 * ```
 * az pipelines runs tag list --run-id
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--project]
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} runId ID of the  pipeline run.
 */
var az_pipelines_runs_tag_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_runs_tag_list_command_builder, _super);
    function az_pipelines_runs_tag_list_command_builder(commandPath, resultDataTypeName, runId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.runId(runId);
        return _this;
    }
    /** ID of the  pipeline run. */
    az_pipelines_runs_tag_list_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_runs_tag_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_runs_tag_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_runs_tag_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_runs_tag_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_runs_tag_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_runs_tag_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the pipeline runs in a project.
 *
 * Syntax:
 * ```
 * az pipelines runs list [--branch]
 *                        [--detect {false, true}]
 *                        [--org]
 *                        [--pipeline-ids]
 *                        [--project]
 *                        [--query-examples]
 *                        [--query-order {FinishTimeAsc, FinishTimeDesc, QueueTimeAsc, QueueTimeDesc, StartTimeAsc, StartTimeDesc}]
 *                        [--reason {all, batchedCI, buildCompletion, checkInShelveset, individualCI, manual, pullRequest, schedule, triggered, userCreated, validateShelveset}]
 *                        [--requested-for]
 *                        [--result {canceled, failed, none, partiallySucceeded, succeeded}]
 *                        [--status {all, cancelling, completed, inProgress, none, notStarted, postponed}]
 *                        [--subscription]
 *                        [--tags]
 *                        [--top]
 * ```
 */
var az_pipelines_runs_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_runs_list_command_builder, _super);
    function az_pipelines_runs_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter by builds for this branch. */
    az_pipelines_runs_list_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_runs_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_runs_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** IDs (space separated) of definitions to list builds for. */
    az_pipelines_runs_list_command_builder.prototype.pipelineIds = function (value) {
        this.setFlag("--pipeline-ids", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_runs_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_runs_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Order of pipeline runs. */
    az_pipelines_runs_list_command_builder.prototype.queryOrder = function (value) {
        this.setFlag("--query-order", value);
        return this;
    };
    /** Limit to builds with this reason. */
    az_pipelines_runs_list_command_builder.prototype.reason = function (value) {
        this.setFlag("--reason", value);
        return this;
    };
    /** Limit to builds requested for this user or group. */
    az_pipelines_runs_list_command_builder.prototype.requestedFor = function (value) {
        this.setFlag("--requested-for", value);
        return this;
    };
    /** Limit to builds with this result. */
    az_pipelines_runs_list_command_builder.prototype.result = function (value) {
        this.setFlag("--result", value);
        return this;
    };
    /** Limit to builds with this status. */
    az_pipelines_runs_list_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_runs_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Limit to builds with each of the specified tags. Space separated. */
    az_pipelines_runs_list_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Maximum number of builds to list. */
    az_pipelines_runs_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_pipelines_runs_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a pipeline run.
 *
 * Syntax:
 * ```
 * az pipelines runs show --id
 *                        [--detect {false, true}]
 *                        [--open]
 *                        [--org]
 *                        [--project]
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} id ID of the pipeline run.
 */
var az_pipelines_runs_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_runs_show_command_builder, _super);
    function az_pipelines_runs_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the pipeline run. */
    az_pipelines_runs_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_runs_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the build results page in your web browser. */
    az_pipelines_runs_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_runs_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_runs_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_runs_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_runs_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_runs_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a variable to a variable group.
 *
 * Syntax:
 * ```
 * az pipelines variable-group variable create --group-id
 *                                             --name
 *                                             [--detect {false, true}]
 *                                             [--org]
 *                                             [--project]
 *                                             [--secret {false, true}]
 *                                             [--subscription]
 *                                             [--value]
 * ```
 *
 * @param {string} groupId Id of the variable group.
 * @param {string} name Name of the variable.
 */
var az_pipelines_variable_group_variable_create_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_group_variable_create_command_builder, _super);
    function az_pipelines_variable_group_variable_create_command_builder(commandPath, resultDataTypeName, groupId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupId(groupId);
        _this.name(name);
        return _this;
    }
    /** Id of the variable group. */
    az_pipelines_variable_group_variable_create_command_builder.prototype.groupId = function (value) {
        this.setFlag("--group-id", value);
        return this;
    };
    /** Name of the variable. */
    az_pipelines_variable_group_variable_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_group_variable_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_group_variable_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_group_variable_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** If the value of the variable is a secret. */
    az_pipelines_variable_group_variable_create_command_builder.prototype.secret = function (value) {
        this.setFlag("--secret", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_group_variable_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Value of the variable. For secret variables, if --value parameter is not given, it will be picked from environment variable prefixed with AZURE_DEVOPS_EXT_PIPELINE_VAR_ or user will be prompted to enter it via standard input. e.g. PersonalAccessToken can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_PersonalAccessToken. */
    az_pipelines_variable_group_variable_create_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_pipelines_variable_group_variable_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a variable from variable group.
 *
 * Syntax:
 * ```
 * az pipelines variable-group variable delete --group-id
 *                                             --name
 *                                             [--detect {false, true}]
 *                                             [--org]
 *                                             [--project]
 *                                             [--subscription]
 *                                             [--yes]
 * ```
 *
 * @param {string} groupId Id of the variable group.
 * @param {string} name Name of the variable.
 */
var az_pipelines_variable_group_variable_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_group_variable_delete_command_builder, _super);
    function az_pipelines_variable_group_variable_delete_command_builder(commandPath, resultDataTypeName, groupId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupId(groupId);
        _this.name(name);
        return _this;
    }
    /** Id of the variable group. */
    az_pipelines_variable_group_variable_delete_command_builder.prototype.groupId = function (value) {
        this.setFlag("--group-id", value);
        return this;
    };
    /** Name of the variable. */
    az_pipelines_variable_group_variable_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_group_variable_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_group_variable_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_group_variable_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_group_variable_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_pipelines_variable_group_variable_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_pipelines_variable_group_variable_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the variables in a variable group.
 *
 * Syntax:
 * ```
 * az pipelines variable-group variable list --group-id
 *                                           [--detect {false, true}]
 *                                           [--org]
 *                                           [--project]
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} groupId Id of the variable group.
 */
var az_pipelines_variable_group_variable_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_group_variable_list_command_builder, _super);
    function az_pipelines_variable_group_variable_list_command_builder(commandPath, resultDataTypeName, groupId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupId(groupId);
        return _this;
    }
    /** Id of the variable group. */
    az_pipelines_variable_group_variable_list_command_builder.prototype.groupId = function (value) {
        this.setFlag("--group-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_group_variable_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_group_variable_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_group_variable_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_variable_group_variable_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_group_variable_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_variable_group_variable_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a variable in a variable group.
 *
 * Syntax:
 * ```
 * az pipelines variable-group variable update --group-id
 *                                             --name
 *                                             [--detect {false, true}]
 *                                             [--new-name]
 *                                             [--org]
 *                                             [--project]
 *                                             [--prompt-value {false, true}]
 *                                             [--secret {false, true}]
 *                                             [--subscription]
 *                                             [--value]
 * ```
 *
 * @param {string} groupId Id of the variable group.
 * @param {string} name Name of the variable.
 */
var az_pipelines_variable_group_variable_update_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_group_variable_update_command_builder, _super);
    function az_pipelines_variable_group_variable_update_command_builder(commandPath, resultDataTypeName, groupId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupId(groupId);
        _this.name(name);
        return _this;
    }
    /** Id of the variable group. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.groupId = function (value) {
        this.setFlag("--group-id", value);
        return this;
    };
    /** Name of the variable. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** New name of the variable. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.newName = function (value) {
        this.setFlag("--new-name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Set it to True to update the value of a secret variable using environment variable or prompt via standard input. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.promptValue = function (value) {
        this.setFlag("--prompt-value", value.toString());
        return this;
    };
    /** If the value of the variable is a secret. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.secret = function (value) {
        this.setFlag("--secret", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** New value of the variable. For secret variables, if --value parameter is not given, it will be picked from environment variable prefixed with AZURE_DEVOPS_EXT_PIPELINE_VAR_ or user will be prompted to enter it via standard input. e.g. PersonalAccessToken can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_PersonalAccessToken. */
    az_pipelines_variable_group_variable_update_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_pipelines_variable_group_variable_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a variable group.
 *
 * Syntax:
 * ```
 * az pipelines variable-group create --name
 *                                    --variables
 *                                    [--authorize {false, true}]
 *                                    [--description]
 *                                    [--detect {false, true}]
 *                                    [--org]
 *                                    [--project]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the variable group.
 * @param {string} variables Variables in format key=value space separated pairs. Secret variables should be managed using `az pipelines variable-group variable` commands.
 */
var az_pipelines_variable_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_group_create_command_builder, _super);
    function az_pipelines_variable_group_create_command_builder(commandPath, resultDataTypeName, name, variables) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.variables(variables);
        return _this;
    }
    /** Name of the variable group. */
    az_pipelines_variable_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Variables in format key=value space separated pairs. Secret variables should be managed using `az pipelines variable-group variable` commands. */
    az_pipelines_variable_group_create_command_builder.prototype.variables = function (value) {
        this.setFlag("--variables", value);
        return this;
    };
    /** Whether the variable group should be accessible by all pipelines. */
    az_pipelines_variable_group_create_command_builder.prototype.authorize = function (value) {
        this.setFlag("--authorize", value.toString());
        return this;
    };
    /** Description of the variable group. */
    az_pipelines_variable_group_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_group_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_group_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_group_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_variable_group_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a variable group.
 *
 * Syntax:
 * ```
 * az pipelines variable-group delete --group-id
 *                                    [--detect {false, true}]
 *                                    [--org]
 *                                    [--project]
 *                                    [--subscription]
 *                                    [--yes]
 * ```
 *
 * @param {string} groupId Id of the variable group.
 */
var az_pipelines_variable_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_group_delete_command_builder, _super);
    function az_pipelines_variable_group_delete_command_builder(commandPath, resultDataTypeName, groupId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupId(groupId);
        return _this;
    }
    /** Id of the variable group. */
    az_pipelines_variable_group_delete_command_builder.prototype.groupId = function (value) {
        this.setFlag("--group-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_group_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_group_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_group_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_pipelines_variable_group_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_pipelines_variable_group_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List variable groups.
 *
 * Syntax:
 * ```
 * az pipelines variable-group list [--action {manage, none, use}]
 *                                  [--continuation-token]
 *                                  [--detect {false, true}]
 *                                  [--group-name]
 *                                  [--org]
 *                                  [--project]
 *                                  [--query-examples]
 *                                  [--query-order {Asc, Desc}]
 *                                  [--subscription]
 *                                  [--top]
 * ```
 */
var az_pipelines_variable_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_group_list_command_builder, _super);
    function az_pipelines_variable_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Action filter for the variable group. It specifies the action which can be performed on the variable groups. */
    az_pipelines_variable_group_list_command_builder.prototype.actionFilter = function (value) {
        this.setFlag("--action-filter", value);
        return this;
    };
    /** Gets the variable groups after the continuation token provided. */
    az_pipelines_variable_group_list_command_builder.prototype.continuationToken = function (value) {
        this.setFlag("--continuation-token", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_group_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Name of the variable group. Wildcards are accepted. e.g. var_group\*. */
    az_pipelines_variable_group_list_command_builder.prototype.groupName = function (value) {
        this.setFlag("--group-name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_group_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_group_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_variable_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Gets the results in the defined order. */
    az_pipelines_variable_group_list_command_builder.prototype.queryOrder = function (value) {
        this.setFlag("--query-order", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Number of variable groups to get. */
    az_pipelines_variable_group_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_pipelines_variable_group_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show variable group details.
 *
 * Syntax:
 * ```
 * az pipelines variable-group show --group-id
 *                                  [--detect {false, true}]
 *                                  [--org]
 *                                  [--project]
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} groupId ID of the variable group.
 */
var az_pipelines_variable_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_group_show_command_builder, _super);
    function az_pipelines_variable_group_show_command_builder(commandPath, resultDataTypeName, groupId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupId(groupId);
        return _this;
    }
    /** ID of the variable group. */
    az_pipelines_variable_group_show_command_builder.prototype.groupId = function (value) {
        this.setFlag("--group-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_group_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_group_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_group_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_variable_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_variable_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a variable group.
 *
 * Syntax:
 * ```
 * az pipelines variable-group update --group-id
 *                                    [--authorize {false, true}]
 *                                    [--description]
 *                                    [--detect {false, true}]
 *                                    [--name]
 *                                    [--org]
 *                                    [--project]
 *                                    [--subscription]
 * ```
 *
 * @param {string} groupId Id of the variable group.
 */
var az_pipelines_variable_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_group_update_command_builder, _super);
    function az_pipelines_variable_group_update_command_builder(commandPath, resultDataTypeName, groupId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupId(groupId);
        return _this;
    }
    /** Id of the variable group. */
    az_pipelines_variable_group_update_command_builder.prototype.groupId = function (value) {
        this.setFlag("--group-id", value);
        return this;
    };
    /** Whether the variable group should be accessible by all pipelines. */
    az_pipelines_variable_group_update_command_builder.prototype.authorize = function (value) {
        this.setFlag("--authorize", value.toString());
        return this;
    };
    /** New description of the variable group. */
    az_pipelines_variable_group_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_group_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** New name of the variable group. */
    az_pipelines_variable_group_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_group_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_group_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_group_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_variable_group_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a variable to a pipeline.
 *
 * Syntax:
 * ```
 * az pipelines variable create --name
 *                              [--allow-override {false, true}]
 *                              [--detect {false, true}]
 *                              [--org]
 *                              [--pipeline-id]
 *                              [--pipeline-name]
 *                              [--project]
 *                              [--secret {false, true}]
 *                              [--subscription]
 *                              [--value]
 * ```
 *
 * @param {string} name Name of the variable.
 */
var az_pipelines_variable_create_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_create_command_builder, _super);
    function az_pipelines_variable_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the variable. */
    az_pipelines_variable_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Indicates whether the value can be set at queue time. */
    az_pipelines_variable_create_command_builder.prototype.allowOverride = function (value) {
        this.setFlag("--allow-override", value.toString());
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Id of the pipeline. */
    az_pipelines_variable_create_command_builder.prototype.pipelineId = function (value) {
        this.setFlag("--pipeline-id", value);
        return this;
    };
    /** Name of the pipeline. Ignored if --pipeline-id parameter is supplied. */
    az_pipelines_variable_create_command_builder.prototype.pipelineName = function (value) {
        this.setFlag("--pipeline-name", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Indicates whether the variable's value is a secret. */
    az_pipelines_variable_create_command_builder.prototype.secret = function (value) {
        this.setFlag("--secret", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Value of the variable. For secret variables, if --value parameter is not given, it will be picked from environment variable prefixed with <problematic ids="id64" refid="id63">AZURE_DEVOPS_EXT_PIPELINE_VAR_</problematic> or user will be prompted to enter it via standard input. e.g. A variable named `MySecret` can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_MySecret. */
    az_pipelines_variable_create_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_pipelines_variable_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a variable from pipeline.
 *
 * Syntax:
 * ```
 * az pipelines variable delete --name
 *                              [--detect {false, true}]
 *                              [--org]
 *                              [--pipeline-id]
 *                              [--pipeline-name]
 *                              [--project]
 *                              [--subscription]
 *                              [--yes]
 * ```
 *
 * @param {string} name Name of the variable to delete.
 */
var az_pipelines_variable_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_delete_command_builder, _super);
    function az_pipelines_variable_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the variable to delete. */
    az_pipelines_variable_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Id of the pipeline. */
    az_pipelines_variable_delete_command_builder.prototype.pipelineId = function (value) {
        this.setFlag("--pipeline-id", value);
        return this;
    };
    /** Name of the pipeline. */
    az_pipelines_variable_delete_command_builder.prototype.pipelineName = function (value) {
        this.setFlag("--pipeline-name", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_pipelines_variable_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_pipelines_variable_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the variables in a pipeline.
 *
 * Syntax:
 * ```
 * az pipelines variable list [--detect {false, true}]
 *                            [--org]
 *                            [--pipeline-id]
 *                            [--pipeline-name]
 *                            [--project]
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 */
var az_pipelines_variable_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_list_command_builder, _super);
    function az_pipelines_variable_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_pipelines_variable_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Id of the pipeline. */
    az_pipelines_variable_list_command_builder.prototype.pipelineId = function (value) {
        this.setFlag("--pipeline-id", value);
        return this;
    };
    /** Name of the pipeline. Ignored if --pipeline-id parameter is supplied. */
    az_pipelines_variable_list_command_builder.prototype.pipelineName = function (value) {
        this.setFlag("--pipeline-name", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_variable_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_variable_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a variable in a pipeline.
 *
 * Syntax:
 * ```
 * az pipelines variable update --name
 *                              [--allow-override {false, true}]
 *                              [--detect {false, true}]
 *                              [--new-name]
 *                              [--org]
 *                              [--pipeline-id]
 *                              [--pipeline-name]
 *                              [--project]
 *                              [--prompt-value {false, true}]
 *                              [--secret {false, true}]
 *                              [--subscription]
 *                              [--value]
 * ```
 *
 * @param {string} name Name of the variable.
 */
var az_pipelines_variable_update_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_variable_update_command_builder, _super);
    function az_pipelines_variable_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the variable. */
    az_pipelines_variable_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Indicates whether the value can be set at queue time. */
    az_pipelines_variable_update_command_builder.prototype.allowOverride = function (value) {
        this.setFlag("--allow-override", value.toString());
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_variable_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** New name of the variable. */
    az_pipelines_variable_update_command_builder.prototype.newName = function (value) {
        this.setFlag("--new-name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_variable_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Id of the pipeline. */
    az_pipelines_variable_update_command_builder.prototype.pipelineId = function (value) {
        this.setFlag("--pipeline-id", value);
        return this;
    };
    /** Name of the pipeline. Ignored if --pipeline-id parameter is supplied. */
    az_pipelines_variable_update_command_builder.prototype.pipelineName = function (value) {
        this.setFlag("--pipeline-name", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_variable_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Set it to True to update the value of a secret variable using environment variable or prompt via standard input. */
    az_pipelines_variable_update_command_builder.prototype.promptValue = function (value) {
        this.setFlag("--prompt-value", value.toString());
        return this;
    };
    /** If the value of the variable is a secret. */
    az_pipelines_variable_update_command_builder.prototype.secret = function (value) {
        this.setFlag("--secret", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_variable_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** New value of the variable. For secret variables, use --prompt-value parameter, to be prompted to enter it via standard input. For non-interactive consoles it can be picked from environment variable prefixed with <problematic ids="id66" refid="id65">AZURE_DEVOPS_EXT_PIPELINE_VAR_</problematic> e.g. A variable nameed `MySecret` can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_MySecret. */
    az_pipelines_variable_update_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_pipelines_variable_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure Pipeline (YAML based).
 *
 * Syntax:
 * ```
 * az pipelines create --name
 *                     [--branch]
 *                     [--description]
 *                     [--detect {false, true}]
 *                     [--folder-path]
 *                     [--org]
 *                     [--project]
 *                     [--queue-id]
 *                     [--repository]
 *                     [--repository-type {github, tfsgit}]
 *                     [--service-connection]
 *                     [--skip-first-run {false, true}]
 *                     [--subscription]
 *                     [--yaml-path]
 * ```
 *
 * @param {string} name Name of the new pipeline.
 */
var az_pipelines_create_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_create_command_builder, _super);
    function az_pipelines_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the new pipeline. */
    az_pipelines_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Branch name for which the pipeline will be configured. If omitted, it will be auto-detected from local repository. */
    az_pipelines_create_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Description for the new pipeline. */
    az_pipelines_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Path of the folder where the pipeline needs to be created. Default is root folder. e.g. "user1/test_pipelines". */
    az_pipelines_create_command_builder.prototype.folderPath = function (value) {
        this.setFlag("--folder-path", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Id of the queue in the available agent pools. Will be auto detected if not specified. */
    az_pipelines_create_command_builder.prototype.queueId = function (value) {
        this.setFlag("--queue-id", value);
        return this;
    };
    /** Repository for which the pipeline needs to be configured. Can be clone url of the git repository or name of the repository for a Azure Repos or Owner/RepoName in case of GitHub repository. If omitted it will be auto-detected from the remote url of local git repository. If name is mentioned instead of url, --repository-type argument is also required. */
    az_pipelines_create_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Type of repository. If omitted, it will be auto-detected from remote url of local repository. 'tfsgit' for Azure Repos, 'github' for GitHub repository. */
    az_pipelines_create_command_builder.prototype.repositoryType = function (value) {
        this.setFlag("--repository-type", value);
        return this;
    };
    /** Id of the Service connection created for the repository for GitHub repository. Use command az devops service-endpoint -h for creating/listing service_connections. Not required for Azure Repos. */
    az_pipelines_create_command_builder.prototype.serviceConnection = function (value) {
        this.setFlag("--service-connection", value);
        return this;
    };
    /** Specify this flag to prevent the first run being triggered by the command. Command will return a pipeline if run is skipped else it will output a pipeline run. */
    az_pipelines_create_command_builder.prototype.skipFirstRun = function (value) {
        this.setFlag("--skip-first-run", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Path of the pipelines yaml file in the repo (if yaml is already present in the repo). */
    az_pipelines_create_command_builder.prototype.yamlPath = function (value) {
        this.setFlag("--yaml-path", value);
        return this;
    };
    return az_pipelines_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a pipeline.
 *
 * Syntax:
 * ```
 * az pipelines delete --id
 *                     [--detect {false, true}]
 *                     [--org]
 *                     [--project]
 *                     [--subscription]
 *                     [--yes]
 * ```
 *
 * @param {string} id ID of the pipeline.
 */
var az_pipelines_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_delete_command_builder, _super);
    function az_pipelines_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the pipeline. */
    az_pipelines_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_pipelines_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_pipelines_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List pipelines.
 *
 * Syntax:
 * ```
 * az pipelines list [--detect {false, true}]
 *                   [--folder-path]
 *                   [--name]
 *                   [--org]
 *                   [--project]
 *                   [--query-examples]
 *                   [--query-order {ModifiedAsc, ModifiedDesc, NameAsc, NameDesc, None}]
 *                   [--repository]
 *                   [--repository-type {bitbucket, git, github, githubenterprise, svn, tfsgit, tfsversioncontrol}]
 *                   [--subscription]
 *                   [--top]
 * ```
 */
var az_pipelines_list_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_list_command_builder, _super);
    function az_pipelines_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_pipelines_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** If specified, filters to definitions under this folder. */
    az_pipelines_list_command_builder.prototype.folderPath = function (value) {
        this.setFlag("--folder-path", value);
        return this;
    };
    /** Limit results to pipelines with this name or starting with this name. Examples: "FabCI" or "Fab\*". */
    az_pipelines_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Order of the results. */
    az_pipelines_list_command_builder.prototype.queryOrder = function (value) {
        this.setFlag("--query-order", value);
        return this;
    };
    /** Limit results to pipelines associated with this repository. */
    az_pipelines_list_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Limit results to pipelines associated with this repository type. It is mandatory to pass 'repository' argument along with this argument. */
    az_pipelines_list_command_builder.prototype.repositoryType = function (value) {
        this.setFlag("--repository-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of pipelines to list. */
    az_pipelines_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_pipelines_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Queue (run) a pipeline.
 *
 * Syntax:
 * ```
 * az pipelines run [--branch]
 *                  [--commit-id]
 *                  [--detect {false, true}]
 *                  [--folder-path]
 *                  [--id]
 *                  [--name]
 *                  [--open]
 *                  [--org]
 *                  [--project]
 *                  [--subscription]
 *                  [--variables]
 * ```
 */
var az_pipelines_run_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_run_command_builder, _super);
    function az_pipelines_run_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the branch on which the pipeline run is to be queued. Example: refs/heads/master or master or refs/pull/1/merge. */
    az_pipelines_run_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** Commit-id on which the pipeline run is to be queued. */
    az_pipelines_run_command_builder.prototype.commitId = function (value) {
        this.setFlag("--commit-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_run_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Folder path of pipeline. Default is root level folder. */
    az_pipelines_run_command_builder.prototype.folderPath = function (value) {
        this.setFlag("--folder-path", value);
        return this;
    };
    /** ID of the pipeline to queue. Required if --name is not supplied. */
    az_pipelines_run_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the pipeline to queue. Ignored if --id is supplied. */
    az_pipelines_run_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Open the pipeline results page in your web browser. */
    az_pipelines_run_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_run_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_run_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space separated "name=value" pairs for the variables you would like to set. */
    az_pipelines_run_command_builder.prototype.variables = function (value) {
        this.setFlag("--variables", value);
        return this;
    };
    return az_pipelines_run_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a pipeline.
 *
 * Syntax:
 * ```
 * az pipelines show [--detect {false, true}]
 *                   [--folder-path]
 *                   [--id]
 *                   [--name]
 *                   [--open]
 *                   [--org]
 *                   [--project]
 *                   [--query-examples]
 *                   [--subscription]
 * ```
 */
var az_pipelines_show_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_show_command_builder, _super);
    function az_pipelines_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_pipelines_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Folder path of pipeline. Default is root level folder. */
    az_pipelines_show_command_builder.prototype.folderPath = function (value) {
        this.setFlag("--folder-path", value);
        return this;
    };
    /** ID of the pipeline. */
    az_pipelines_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the pipeline. Ignored if --id is supplied. */
    az_pipelines_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Open the pipeline summary page in your web browser. */
    az_pipelines_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_pipelines_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_pipelines_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a pipeline.
 *
 * Syntax:
 * ```
 * az pipelines update [--branch]
 *                     [--description]
 *                     [--detect {false, true}]
 *                     [--id]
 *                     [--name]
 *                     [--new-folder-path]
 *                     [--new-name]
 *                     [--org]
 *                     [--project]
 *                     [--queue-id]
 *                     [--subscription]
 *                     [--yaml-path]
 * ```
 */
var az_pipelines_update_command_builder = /** @class */ (function (_super) {
    __extends(az_pipelines_update_command_builder, _super);
    function az_pipelines_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Branch name for which the pipeline will be configured. */
    az_pipelines_update_command_builder.prototype.branch = function (value) {
        this.setFlag("--branch", value);
        return this;
    };
    /** New description for the pipeline. */
    az_pipelines_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_pipelines_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Id of the pipeline to update. */
    az_pipelines_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the pipeline to update. */
    az_pipelines_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** New full path of the folder to move the pipeline to. e.g. "user1/production_pipelines". */
    az_pipelines_update_command_builder.prototype.newFolderPath = function (value) {
        this.setFlag("--new-folder-path", value);
        return this;
    };
    /** New updated name of the pipeline. */
    az_pipelines_update_command_builder.prototype.newName = function (value) {
        this.setFlag("--new-name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_pipelines_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_pipelines_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Queue id of the agent pool where the pipeline needs to run. */
    az_pipelines_update_command_builder.prototype.queueId = function (value) {
        this.setFlag("--queue-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_pipelines_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Path of the pipelines yaml file in the repo. */
    az_pipelines_update_command_builder.prototype.yamlPath = function (value) {
        this.setFlag("--yaml-path", value);
        return this;
    };
    return az_pipelines_update_command_builder;
}(base_1.CommandBuilder));
