import { CommandBuilder } from '../base';
import { az_pipelines_agent_list_command_result } from './models/az_pipelines_agent_list_command_result';
import { az_pipelines_agent_show_command_result } from './models/az_pipelines_agent_show_command_result';
import { az_pipelines_build_definition_list_command_result } from './models/az_pipelines_build_definition_list_command_result';
import { az_pipelines_build_definition_show_command_result } from './models/az_pipelines_build_definition_show_command_result';
import { az_pipelines_build_tag_add_command_result } from './models/az_pipelines_build_tag_add_command_result';
import { az_pipelines_build_tag_delete_command_result } from './models/az_pipelines_build_tag_delete_command_result';
import { az_pipelines_build_tag_list_command_result } from './models/az_pipelines_build_tag_list_command_result';
import { az_pipelines_build_list_command_result } from './models/az_pipelines_build_list_command_result';
import { az_pipelines_build_queue_command_result } from './models/az_pipelines_build_queue_command_result';
import { az_pipelines_build_show_command_result } from './models/az_pipelines_build_show_command_result';
import { az_pipelines_folder_create_command_result } from './models/az_pipelines_folder_create_command_result';
import { az_pipelines_folder_delete_command_result } from './models/az_pipelines_folder_delete_command_result';
import { az_pipelines_folder_list_command_result } from './models/az_pipelines_folder_list_command_result';
import { az_pipelines_folder_update_command_result } from './models/az_pipelines_folder_update_command_result';
import { az_pipelines_pool_list_command_result } from './models/az_pipelines_pool_list_command_result';
import { az_pipelines_pool_show_command_result } from './models/az_pipelines_pool_show_command_result';
import { az_pipelines_queue_list_command_result } from './models/az_pipelines_queue_list_command_result';
import { az_pipelines_queue_show_command_result } from './models/az_pipelines_queue_show_command_result';
import { az_pipelines_release_definition_list_command_result } from './models/az_pipelines_release_definition_list_command_result';
import { az_pipelines_release_definition_show_command_result } from './models/az_pipelines_release_definition_show_command_result';
import { az_pipelines_release_create_command_result } from './models/az_pipelines_release_create_command_result';
import { az_pipelines_release_list_command_result } from './models/az_pipelines_release_list_command_result';
import { az_pipelines_release_show_command_result } from './models/az_pipelines_release_show_command_result';
import { az_pipelines_runs_artifact_download_command_result } from './models/az_pipelines_runs_artifact_download_command_result';
import { az_pipelines_runs_artifact_list_command_result } from './models/az_pipelines_runs_artifact_list_command_result';
import { az_pipelines_runs_artifact_upload_command_result } from './models/az_pipelines_runs_artifact_upload_command_result';
import { az_pipelines_runs_tag_add_command_result } from './models/az_pipelines_runs_tag_add_command_result';
import { az_pipelines_runs_tag_delete_command_result } from './models/az_pipelines_runs_tag_delete_command_result';
import { az_pipelines_runs_tag_list_command_result } from './models/az_pipelines_runs_tag_list_command_result';
import { az_pipelines_runs_list_command_result } from './models/az_pipelines_runs_list_command_result';
import { az_pipelines_runs_show_command_result } from './models/az_pipelines_runs_show_command_result';
import { az_pipelines_variable_group_variable_create_command_result } from './models/az_pipelines_variable_group_variable_create_command_result';
import { az_pipelines_variable_group_variable_delete_command_result } from './models/az_pipelines_variable_group_variable_delete_command_result';
import { az_pipelines_variable_group_variable_list_command_result } from './models/az_pipelines_variable_group_variable_list_command_result';
import { az_pipelines_variable_group_variable_update_command_result } from './models/az_pipelines_variable_group_variable_update_command_result';
import { az_pipelines_variable_group_create_command_result } from './models/az_pipelines_variable_group_create_command_result';
import { az_pipelines_variable_group_delete_command_result } from './models/az_pipelines_variable_group_delete_command_result';
import { az_pipelines_variable_group_list_command_result } from './models/az_pipelines_variable_group_list_command_result';
import { az_pipelines_variable_group_show_command_result } from './models/az_pipelines_variable_group_show_command_result';
import { az_pipelines_variable_group_update_command_result } from './models/az_pipelines_variable_group_update_command_result';
import { az_pipelines_variable_create_command_result } from './models/az_pipelines_variable_create_command_result';
import { az_pipelines_variable_delete_command_result } from './models/az_pipelines_variable_delete_command_result';
import { az_pipelines_variable_list_command_result } from './models/az_pipelines_variable_list_command_result';
import { az_pipelines_variable_update_command_result } from './models/az_pipelines_variable_update_command_result';
import { az_pipelines_create_command_result } from './models/az_pipelines_create_command_result';
import { az_pipelines_delete_command_result } from './models/az_pipelines_delete_command_result';
import { az_pipelines_list_command_result } from './models/az_pipelines_list_command_result';
import { az_pipelines_run_command_result } from './models/az_pipelines_run_command_result';
import { az_pipelines_show_command_result } from './models/az_pipelines_show_command_result';
import { az_pipelines_update_command_result } from './models/az_pipelines_update_command_result';
/** Manage agents. */
export declare class az_pipelines_agent {
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
    static list(poolId: string): az_pipelines_agent_list_command_builder;
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
    static show(agentId: string, poolId: string): az_pipelines_agent_show_command_builder;
}
/** Manage build definitions. */
export declare class az_pipelines_build_definition {
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
    static list(): az_pipelines_build_definition_list_command_builder;
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
    static show(): az_pipelines_build_definition_show_command_builder;
}
/** Manage build tags. */
export declare class az_pipelines_build_tag {
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
    static add(buildId: string, tags: string): az_pipelines_build_tag_add_command_builder;
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
    static delete(buildId: string, tag: string): az_pipelines_build_tag_delete_command_builder;
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
    static list(buildId: string): az_pipelines_build_tag_list_command_builder;
}
/** Manage builds. */
export declare class az_pipelines_build {
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
    static list(): az_pipelines_build_list_command_builder;
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
    static queue(): az_pipelines_build_queue_command_builder;
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
    static show(id: string): az_pipelines_build_show_command_builder;
}
/** Manage folders for organizing pipelines. */
export declare class az_pipelines_folder {
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
    static create(path: string): az_pipelines_folder_create_command_builder;
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
    static delete(path: string): az_pipelines_folder_delete_command_builder;
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
    static list(): az_pipelines_folder_list_command_builder;
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
    static update(path: string): az_pipelines_folder_update_command_builder;
}
/** Manage agent pools. */
export declare class az_pipelines_pool {
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
    static list(): az_pipelines_pool_list_command_builder;
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
    static show(poolId: string): az_pipelines_pool_show_command_builder;
}
/** Manage agent queues. */
export declare class az_pipelines_queue {
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
    static list(): az_pipelines_queue_list_command_builder;
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
    static show(queueId: string): az_pipelines_queue_show_command_builder;
}
/** Manage release definitions. */
export declare class az_pipelines_release_definition {
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
    static list(): az_pipelines_release_definition_list_command_builder;
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
    static show(): az_pipelines_release_definition_show_command_builder;
}
/** Manage releases. */
export declare class az_pipelines_release {
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
    static create(): az_pipelines_release_create_command_builder;
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
    static list(): az_pipelines_release_list_command_builder;
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
    static show(id: string): az_pipelines_release_show_command_builder;
}
/** Manage pipeline run artifacts. */
export declare class az_pipelines_runs_artifact {
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
    static download(artifactName: string, path: string, runId: string): az_pipelines_runs_artifact_download_command_builder;
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
    static list(runId: string): az_pipelines_runs_artifact_list_command_builder;
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
    static upload(artifactName: string, path: string, runId: string): az_pipelines_runs_artifact_upload_command_builder;
}
/** Manage pipeline run tags. */
export declare class az_pipelines_runs_tag {
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
    static add(runId: string, tags: string): az_pipelines_runs_tag_add_command_builder;
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
    static delete(runId: string, tag: string): az_pipelines_runs_tag_delete_command_builder;
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
    static list(runId: string): az_pipelines_runs_tag_list_command_builder;
}
/** Manage pipeline runs. */
export declare class az_pipelines_runs {
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
    static list(): az_pipelines_runs_list_command_builder;
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
    static show(id: string): az_pipelines_runs_show_command_builder;
}
/** Manage variables in a variable group. */
export declare class az_pipelines_variable_group_variable {
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
    static create(groupId: string, name: string): az_pipelines_variable_group_variable_create_command_builder;
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
    static delete(groupId: string, name: string): az_pipelines_variable_group_variable_delete_command_builder;
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
    static list(groupId: string): az_pipelines_variable_group_variable_list_command_builder;
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
    static update(groupId: string, name: string): az_pipelines_variable_group_variable_update_command_builder;
}
/** Manage variable groups. */
export declare class az_pipelines_variable_group {
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
    static create(name: string, variables: string): az_pipelines_variable_group_create_command_builder;
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
    static delete(groupId: string): az_pipelines_variable_group_delete_command_builder;
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
    static list(): az_pipelines_variable_group_list_command_builder;
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
    static show(groupId: string): az_pipelines_variable_group_show_command_builder;
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
    static update(groupId: string): az_pipelines_variable_group_update_command_builder;
}
/** Manage pipeline variables. */
export declare class az_pipelines_variable {
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
    static create(name: string): az_pipelines_variable_create_command_builder;
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
    static delete(name: string): az_pipelines_variable_delete_command_builder;
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
    static list(): az_pipelines_variable_list_command_builder;
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
    static update(name: string): az_pipelines_variable_update_command_builder;
}
/** Manage Azure Pipelines. */
export declare class az_pipelines {
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
    static create(name: string): az_pipelines_create_command_builder;
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
    static delete(id: string): az_pipelines_delete_command_builder;
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
    static list(): az_pipelines_list_command_builder;
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
    static run(): az_pipelines_run_command_builder;
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
    static show(): az_pipelines_show_command_builder;
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
    static update(): az_pipelines_update_command_builder;
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
declare class az_pipelines_agent_list_command_builder extends CommandBuilder<az_pipelines_agent_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The agent pool containing the agents. */
    poolId(value: string): az_pipelines_agent_list_command_builder;
    /** Filter on agent name. */
    agentName(value: string): az_pipelines_agent_list_command_builder;
    /** Filter by demands the agents can satisfy. Comma separated list. */
    demands(value: string): az_pipelines_agent_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_agent_list_command_builder;
    /** Whether to include details about the agents' current work. */
    includeAssignedRequest(value: boolean): az_pipelines_agent_list_command_builder;
    /** Whether to include the agents' capabilities in the response. */
    includeCapabilities(value: boolean): az_pipelines_agent_list_command_builder;
    /** Whether to include details about the agents' most recent completed work. */
    includeLastCompletedRequest(value: boolean): az_pipelines_agent_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_agent_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_agent_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_agent_list_command_builder;
}
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
declare class az_pipelines_agent_show_command_builder extends CommandBuilder<az_pipelines_agent_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, agentId: string, poolId: string);
    /** The agent ID to get information about. */
    agentId(value: string): az_pipelines_agent_show_command_builder;
    /** The agent pool containing the agent. */
    poolId(value: string): az_pipelines_agent_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_agent_show_command_builder;
    /** Whether to include details about the agents' current work. */
    includeAssignedRequest(value: boolean): az_pipelines_agent_show_command_builder;
    /** Whether to include the agents' capabilities in the response. */
    includeCapabilities(value: boolean): az_pipelines_agent_show_command_builder;
    /** Whether to include details about the agents' most recent completed work. */
    includeLastCompletedRequest(value: boolean): az_pipelines_agent_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_agent_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_agent_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_agent_show_command_builder;
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
declare class az_pipelines_build_definition_list_command_builder extends CommandBuilder<az_pipelines_build_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_build_definition_list_command_builder;
    /** Limit results to definitions with this name or starting with this name. Examples: "FabCI" or "Fab\*". */
    name(value: string): az_pipelines_build_definition_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_build_definition_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_build_definition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_build_definition_list_command_builder;
    /** Limit results to definitions associated with this repository. */
    repository(value: string): az_pipelines_build_definition_list_command_builder;
    /** Limit results to definitions associated with this repository type. It is mandatory to pass 'repository' argument along with this argument. */
    repositoryType(value: 'bitbucket' | 'git' | 'github' | 'githubenterprise' | 'svn' | 'tfsgit' | 'tfsversioncontrol'): az_pipelines_build_definition_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_build_definition_list_command_builder;
    /** Maximum number of definitions to list. */
    top(value: string): az_pipelines_build_definition_list_command_builder;
}
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
declare class az_pipelines_build_definition_show_command_builder extends CommandBuilder<az_pipelines_build_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_build_definition_show_command_builder;
    /** ID of the definition. */
    id(value: string): az_pipelines_build_definition_show_command_builder;
    /** Name of the definition. Ignored if --id is supplied. */
    name(value: string): az_pipelines_build_definition_show_command_builder;
    /** Open the definition summary page in your web browser. */
    open(value: string): az_pipelines_build_definition_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_build_definition_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_build_definition_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_build_definition_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_build_definition_show_command_builder;
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
declare class az_pipelines_build_tag_add_command_builder extends CommandBuilder<az_pipelines_build_tag_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, buildId: string, tags: string);
    /** ID of the build. */
    buildId(value: string): az_pipelines_build_tag_add_command_builder;
    /** Tag(s) to be added to the build. [Comma seperated values]. */
    tags(value: string): az_pipelines_build_tag_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_build_tag_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_build_tag_add_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_build_tag_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_build_tag_add_command_builder;
}
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
declare class az_pipelines_build_tag_delete_command_builder extends CommandBuilder<az_pipelines_build_tag_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, buildId: string, tag: string);
    /** ID of the build. */
    buildId(value: string): az_pipelines_build_tag_delete_command_builder;
    /** Tag to be deleted from the build. */
    tag(value: string): az_pipelines_build_tag_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_build_tag_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_build_tag_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_build_tag_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_build_tag_delete_command_builder;
}
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
declare class az_pipelines_build_tag_list_command_builder extends CommandBuilder<az_pipelines_build_tag_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, buildId: string);
    /** ID of the build. */
    buildId(value: string): az_pipelines_build_tag_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_build_tag_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_build_tag_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_build_tag_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_build_tag_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_build_tag_list_command_builder;
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
declare class az_pipelines_build_list_command_builder extends CommandBuilder<az_pipelines_build_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter by builds for this branch. */
    branch(value: string): az_pipelines_build_list_command_builder;
    /** IDs (space separated) of definitions to list builds for. */
    definitionIds(value: string): az_pipelines_build_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_build_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_build_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_build_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_build_list_command_builder;
    /** Limit to builds with this reason. */
    reason(value: 'all' | 'batchedCI' | 'buildCompletion' | 'checkInShelveset' | 'individualCI' | 'manual' | 'pullRequest' | 'schedule' | 'triggered' | 'userCreated' | 'validateShelveset'): az_pipelines_build_list_command_builder;
    /** Limit to builds requested for this user or group. */
    requestedFor(value: string): az_pipelines_build_list_command_builder;
    /** Limit to builds with this result. */
    result(value: 'canceled' | 'failed' | 'none' | 'partiallySucceeded' | 'succeeded'): az_pipelines_build_list_command_builder;
    /** Limit to builds with this status. */
    status(value: 'all' | 'cancelling' | 'completed' | 'inProgress' | 'none' | 'notStarted' | 'postponed'): az_pipelines_build_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_build_list_command_builder;
    /** Limit to builds with each of the specified tags. Space separated. */
    tags(value: string): az_pipelines_build_list_command_builder;
    /** Maximum number of builds to list. */
    top(value: string): az_pipelines_build_list_command_builder;
}
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
declare class az_pipelines_build_queue_command_builder extends CommandBuilder<az_pipelines_build_queue_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Branch to build. Required if there is not a default branch set up on the definition. Example: refs/heads/master or master or refs/pull/1/merge. */
    branch(value: string): az_pipelines_build_queue_command_builder;
    /** Commit ID of the branch to build. */
    commitId(value: string): az_pipelines_build_queue_command_builder;
    /** ID of the definition to queue. Required if --name is not supplied. */
    definitionId(value: string): az_pipelines_build_queue_command_builder;
    /** Name of the definition to queue. Ignored if --id is supplied. */
    definitionName(value: string): az_pipelines_build_queue_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_build_queue_command_builder;
    /** Open the build results page in your web browser. */
    open(value: string): az_pipelines_build_queue_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_build_queue_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_build_queue_command_builder;
    /** Queue Id of the pool that will be used to queue the build. */
    queueId(value: string): az_pipelines_build_queue_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_build_queue_command_builder;
    /** Space separated "name=value" pairs for the variables you would like to set. */
    variables(value: string): az_pipelines_build_queue_command_builder;
}
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
declare class az_pipelines_build_show_command_builder extends CommandBuilder<az_pipelines_build_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the build. */
    id(value: string): az_pipelines_build_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_build_show_command_builder;
    /** Open the build results page in your web browser. */
    open(value: string): az_pipelines_build_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_build_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_build_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_build_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_build_show_command_builder;
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
declare class az_pipelines_folder_create_command_builder extends CommandBuilder<az_pipelines_folder_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** Full path of the folder. */
    path(value: string): az_pipelines_folder_create_command_builder;
    /** Description of the folder. */
    description(value: string): az_pipelines_folder_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_folder_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_folder_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_folder_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_folder_create_command_builder;
}
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
declare class az_pipelines_folder_delete_command_builder extends CommandBuilder<az_pipelines_folder_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** Full path of the folder. */
    path(value: string): az_pipelines_folder_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_folder_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_folder_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_folder_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_folder_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_pipelines_folder_delete_command_builder;
}
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
declare class az_pipelines_folder_list_command_builder extends CommandBuilder<az_pipelines_folder_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_folder_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_folder_list_command_builder;
    /** Full path of the folder. */
    path(value: string): az_pipelines_folder_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_folder_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_folder_list_command_builder;
    /** Order in which folders are returned. */
    queryOrder(value: 'Asc' | 'Desc' | 'None'): az_pipelines_folder_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_folder_list_command_builder;
}
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
declare class az_pipelines_folder_update_command_builder extends CommandBuilder<az_pipelines_folder_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string);
    /** Full path of the folder. */
    path(value: string): az_pipelines_folder_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_folder_update_command_builder;
    /** New description of the folder. */
    newDescription(value: string): az_pipelines_folder_update_command_builder;
    /** New full path of the folder. */
    newPath(value: string): az_pipelines_folder_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_folder_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_folder_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_folder_update_command_builder;
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
declare class az_pipelines_pool_list_command_builder extends CommandBuilder<az_pipelines_pool_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter the list with user action permitted. */
    action(value: 'manage' | 'none' | 'use'): az_pipelines_pool_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_pool_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_pool_list_command_builder;
    /** Filter the list with matching pool name. */
    poolName(value: string): az_pipelines_pool_list_command_builder;
    /** Filter the list with type of pool. */
    poolType(value: 'automation' | 'deployment'): az_pipelines_pool_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_pool_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_pool_list_command_builder;
}
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
declare class az_pipelines_pool_show_command_builder extends CommandBuilder<az_pipelines_pool_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** Id of the pool to list the details. */
    poolId(value: string): az_pipelines_pool_show_command_builder;
    /** Filter the list with user action permitted. */
    action(value: 'manage' | 'none' | 'use'): az_pipelines_pool_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_pool_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_pool_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_pool_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_pool_show_command_builder;
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
declare class az_pipelines_queue_list_command_builder extends CommandBuilder<az_pipelines_queue_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter by whether the calling user has use or manage permissions. */
    action(value: 'manage' | 'none' | 'use'): az_pipelines_queue_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_queue_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_queue_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_queue_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_queue_list_command_builder;
    /** Filter the list with matching queue name regex. e.g. \*ubuntu\* for queue with name 'Hosted Ubuntu 1604'. */
    queueName(value: string): az_pipelines_queue_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_queue_list_command_builder;
}
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
declare class az_pipelines_queue_show_command_builder extends CommandBuilder<az_pipelines_queue_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, queueId: string);
    /** Id of the agent queue to get information about. */
    queueId(value: string): az_pipelines_queue_show_command_builder;
    /** Filter by whether the calling user has use or manage permissions. */
    action(value: 'manage' | 'none' | 'use'): az_pipelines_queue_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_queue_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_queue_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_queue_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_queue_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_queue_show_command_builder;
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
declare class az_pipelines_release_definition_list_command_builder extends CommandBuilder<az_pipelines_release_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Limit results to definitions associated with this artifact_source_id. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at <a href="https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions">https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions</a>. */
    artifactSourceId(value: string): az_pipelines_release_definition_list_command_builder;
    /** Release definitions with given artifactType will be returned. */
    artifactType(value: 'build' | 'externaltfsbuild' | 'git' | 'github' | 'jenkins' | 'tfvc'): az_pipelines_release_definition_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_release_definition_list_command_builder;
    /** Limit results to definitions with this name or contains this name. Example: "FabCI". */
    name(value: string): az_pipelines_release_definition_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_release_definition_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_release_definition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_release_definition_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_release_definition_list_command_builder;
    /** Maximum number of definitions to list. */
    top(value: string): az_pipelines_release_definition_list_command_builder;
}
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
declare class az_pipelines_release_definition_show_command_builder extends CommandBuilder<az_pipelines_release_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_release_definition_show_command_builder;
    /** ID of the definition. */
    id(value: string): az_pipelines_release_definition_show_command_builder;
    /** Name of the definition. Ignored if --id is supplied. */
    name(value: string): az_pipelines_release_definition_show_command_builder;
    /** Open the definition summary page in your web browser. */
    open(value: string): az_pipelines_release_definition_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_release_definition_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_release_definition_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_release_definition_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_release_definition_show_command_builder;
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
declare class az_pipelines_release_create_command_builder extends CommandBuilder<az_pipelines_release_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Space separated "alias=version_id" pairs. */
    artifactMetadataList(value: string): az_pipelines_release_create_command_builder;
    /** ID of the definition to create. Required if --definition-name is not supplied. */
    definitionId(value: string): az_pipelines_release_create_command_builder;
    /** Name of the definition to create. Ignored if --definition-id is supplied. */
    definitionName(value: string): az_pipelines_release_create_command_builder;
    /** Description of the release. */
    description(value: string): az_pipelines_release_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_release_create_command_builder;
    /** Open the release results page in your web browser. */
    open(value: string): az_pipelines_release_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_release_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_release_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_release_create_command_builder;
}
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
declare class az_pipelines_release_list_command_builder extends CommandBuilder<az_pipelines_release_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** ID of definition to list releases for. */
    definitionId(value: string): az_pipelines_release_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_release_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_release_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_release_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_release_list_command_builder;
    /** Filter releases for this branch. */
    sourceBranch(value: string): az_pipelines_release_list_command_builder;
    /** Limit to releases with this status. */
    status(value: string): az_pipelines_release_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_release_list_command_builder;
    /** Maximum number of releases to list. Default is 50. */
    top(value: string): az_pipelines_release_list_command_builder;
}
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
declare class az_pipelines_release_show_command_builder extends CommandBuilder<az_pipelines_release_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the release. */
    id(value: string): az_pipelines_release_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_release_show_command_builder;
    /** Open the release results page in your web browser. */
    open(value: string): az_pipelines_release_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_release_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_release_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_release_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_release_show_command_builder;
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
declare class az_pipelines_runs_artifact_download_command_builder extends CommandBuilder<az_pipelines_runs_artifact_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, artifactName: string, path: string, runId: string);
    /** Name of the artifact to download. */
    artifactName(value: string): az_pipelines_runs_artifact_download_command_builder;
    /** Path to download the artifact into. */
    path(value: string): az_pipelines_runs_artifact_download_command_builder;
    /** ID of the run that the artifact is associated to. */
    runId(value: string): az_pipelines_runs_artifact_download_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_runs_artifact_download_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_runs_artifact_download_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_runs_artifact_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_runs_artifact_download_command_builder;
}
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
declare class az_pipelines_runs_artifact_list_command_builder extends CommandBuilder<az_pipelines_runs_artifact_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, runId: string);
    /** ID of the run that the artifact is associated to. */
    runId(value: string): az_pipelines_runs_artifact_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_runs_artifact_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_runs_artifact_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_runs_artifact_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_runs_artifact_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_runs_artifact_list_command_builder;
}
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
declare class az_pipelines_runs_artifact_upload_command_builder extends CommandBuilder<az_pipelines_runs_artifact_upload_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, artifactName: string, path: string, runId: string);
    /** Name of the artifact to upload. */
    artifactName(value: string): az_pipelines_runs_artifact_upload_command_builder;
    /** Path to upload the artifact from. */
    path(value: string): az_pipelines_runs_artifact_upload_command_builder;
    /** ID of the run that the artifact is associated to. */
    runId(value: string): az_pipelines_runs_artifact_upload_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_runs_artifact_upload_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_runs_artifact_upload_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_runs_artifact_upload_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_runs_artifact_upload_command_builder;
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
declare class az_pipelines_runs_tag_add_command_builder extends CommandBuilder<az_pipelines_runs_tag_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, runId: string, tags: string);
    /** ID of the pipeline run. */
    runId(value: string): az_pipelines_runs_tag_add_command_builder;
    /** Tag(s) to be added to the pipeline run. [Comma seperated values]. */
    tags(value: string): az_pipelines_runs_tag_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_runs_tag_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_runs_tag_add_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_runs_tag_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_runs_tag_add_command_builder;
}
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
declare class az_pipelines_runs_tag_delete_command_builder extends CommandBuilder<az_pipelines_runs_tag_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, runId: string, tag: string);
    /** ID of the pipeline run. */
    runId(value: string): az_pipelines_runs_tag_delete_command_builder;
    /** Tag to be deleted from the pipeline run. */
    tag(value: string): az_pipelines_runs_tag_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_runs_tag_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_runs_tag_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_runs_tag_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_runs_tag_delete_command_builder;
}
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
declare class az_pipelines_runs_tag_list_command_builder extends CommandBuilder<az_pipelines_runs_tag_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, runId: string);
    /** ID of the  pipeline run. */
    runId(value: string): az_pipelines_runs_tag_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_runs_tag_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_runs_tag_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_runs_tag_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_runs_tag_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_runs_tag_list_command_builder;
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
declare class az_pipelines_runs_list_command_builder extends CommandBuilder<az_pipelines_runs_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter by builds for this branch. */
    branch(value: string): az_pipelines_runs_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_runs_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_runs_list_command_builder;
    /** IDs (space separated) of definitions to list builds for. */
    pipelineIds(value: string): az_pipelines_runs_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_runs_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_runs_list_command_builder;
    /** Order of pipeline runs. */
    queryOrder(value: 'FinishTimeAsc' | 'FinishTimeDesc' | 'QueueTimeAsc' | 'QueueTimeDesc' | 'StartTimeAsc' | 'StartTimeDesc'): az_pipelines_runs_list_command_builder;
    /** Limit to builds with this reason. */
    reason(value: 'all' | 'batchedCI' | 'buildCompletion' | 'checkInShelveset' | 'individualCI' | 'manual' | 'pullRequest' | 'schedule' | 'triggered' | 'userCreated' | 'validateShelveset'): az_pipelines_runs_list_command_builder;
    /** Limit to builds requested for this user or group. */
    requestedFor(value: string): az_pipelines_runs_list_command_builder;
    /** Limit to builds with this result. */
    result(value: 'canceled' | 'failed' | 'none' | 'partiallySucceeded' | 'succeeded'): az_pipelines_runs_list_command_builder;
    /** Limit to builds with this status. */
    status(value: 'all' | 'cancelling' | 'completed' | 'inProgress' | 'none' | 'notStarted' | 'postponed'): az_pipelines_runs_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_runs_list_command_builder;
    /** Limit to builds with each of the specified tags. Space separated. */
    tags(value: string): az_pipelines_runs_list_command_builder;
    /** Maximum number of builds to list. */
    top(value: string): az_pipelines_runs_list_command_builder;
}
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
declare class az_pipelines_runs_show_command_builder extends CommandBuilder<az_pipelines_runs_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the pipeline run. */
    id(value: string): az_pipelines_runs_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_runs_show_command_builder;
    /** Open the build results page in your web browser. */
    open(value: string): az_pipelines_runs_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_runs_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_runs_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_runs_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_runs_show_command_builder;
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
declare class az_pipelines_variable_group_variable_create_command_builder extends CommandBuilder<az_pipelines_variable_group_variable_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string, name: string);
    /** Id of the variable group. */
    groupId(value: string): az_pipelines_variable_group_variable_create_command_builder;
    /** Name of the variable. */
    name(value: string): az_pipelines_variable_group_variable_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_group_variable_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_group_variable_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_group_variable_create_command_builder;
    /** If the value of the variable is a secret. */
    secret(value: boolean): az_pipelines_variable_group_variable_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_group_variable_create_command_builder;
    /** Value of the variable. For secret variables, if --value parameter is not given, it will be picked from environment variable prefixed with AZURE_DEVOPS_EXT_PIPELINE_VAR_ or user will be prompted to enter it via standard input. e.g. PersonalAccessToken can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_PersonalAccessToken. */
    value(value: string): az_pipelines_variable_group_variable_create_command_builder;
}
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
declare class az_pipelines_variable_group_variable_delete_command_builder extends CommandBuilder<az_pipelines_variable_group_variable_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string, name: string);
    /** Id of the variable group. */
    groupId(value: string): az_pipelines_variable_group_variable_delete_command_builder;
    /** Name of the variable. */
    name(value: string): az_pipelines_variable_group_variable_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_group_variable_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_group_variable_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_group_variable_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_group_variable_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_pipelines_variable_group_variable_delete_command_builder;
}
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
declare class az_pipelines_variable_group_variable_list_command_builder extends CommandBuilder<az_pipelines_variable_group_variable_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string);
    /** Id of the variable group. */
    groupId(value: string): az_pipelines_variable_group_variable_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_group_variable_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_group_variable_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_group_variable_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_variable_group_variable_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_group_variable_list_command_builder;
}
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
declare class az_pipelines_variable_group_variable_update_command_builder extends CommandBuilder<az_pipelines_variable_group_variable_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string, name: string);
    /** Id of the variable group. */
    groupId(value: string): az_pipelines_variable_group_variable_update_command_builder;
    /** Name of the variable. */
    name(value: string): az_pipelines_variable_group_variable_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_group_variable_update_command_builder;
    /** New name of the variable. */
    newName(value: string): az_pipelines_variable_group_variable_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_group_variable_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_group_variable_update_command_builder;
    /** Set it to True to update the value of a secret variable using environment variable or prompt via standard input. */
    promptValue(value: boolean): az_pipelines_variable_group_variable_update_command_builder;
    /** If the value of the variable is a secret. */
    secret(value: boolean): az_pipelines_variable_group_variable_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_group_variable_update_command_builder;
    /** New value of the variable. For secret variables, if --value parameter is not given, it will be picked from environment variable prefixed with AZURE_DEVOPS_EXT_PIPELINE_VAR_ or user will be prompted to enter it via standard input. e.g. PersonalAccessToken can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_PersonalAccessToken. */
    value(value: string): az_pipelines_variable_group_variable_update_command_builder;
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
declare class az_pipelines_variable_group_create_command_builder extends CommandBuilder<az_pipelines_variable_group_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, variables: string);
    /** Name of the variable group. */
    name(value: string): az_pipelines_variable_group_create_command_builder;
    /** Variables in format key=value space separated pairs. Secret variables should be managed using `az pipelines variable-group variable` commands. */
    variables(value: string): az_pipelines_variable_group_create_command_builder;
    /** Whether the variable group should be accessible by all pipelines. */
    authorize(value: boolean): az_pipelines_variable_group_create_command_builder;
    /** Description of the variable group. */
    description(value: string): az_pipelines_variable_group_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_group_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_group_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_group_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_group_create_command_builder;
}
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
declare class az_pipelines_variable_group_delete_command_builder extends CommandBuilder<az_pipelines_variable_group_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string);
    /** Id of the variable group. */
    groupId(value: string): az_pipelines_variable_group_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_group_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_group_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_group_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_group_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_pipelines_variable_group_delete_command_builder;
}
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
declare class az_pipelines_variable_group_list_command_builder extends CommandBuilder<az_pipelines_variable_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Action filter for the variable group. It specifies the action which can be performed on the variable groups. */
    actionFilter(value: 'manage' | 'none' | 'use'): az_pipelines_variable_group_list_command_builder;
    /** Gets the variable groups after the continuation token provided. */
    continuationToken(value: string): az_pipelines_variable_group_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_group_list_command_builder;
    /** Name of the variable group. Wildcards are accepted. e.g. var_group\*. */
    groupName(value: string): az_pipelines_variable_group_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_group_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_group_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_variable_group_list_command_builder;
    /** Gets the results in the defined order. */
    queryOrder(value: 'Asc' | 'Desc'): az_pipelines_variable_group_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_group_list_command_builder;
    /** Number of variable groups to get. */
    top(value: string): az_pipelines_variable_group_list_command_builder;
}
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
declare class az_pipelines_variable_group_show_command_builder extends CommandBuilder<az_pipelines_variable_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string);
    /** ID of the variable group. */
    groupId(value: string): az_pipelines_variable_group_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_group_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_group_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_group_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_variable_group_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_group_show_command_builder;
}
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
declare class az_pipelines_variable_group_update_command_builder extends CommandBuilder<az_pipelines_variable_group_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string);
    /** Id of the variable group. */
    groupId(value: string): az_pipelines_variable_group_update_command_builder;
    /** Whether the variable group should be accessible by all pipelines. */
    authorize(value: boolean): az_pipelines_variable_group_update_command_builder;
    /** New description of the variable group. */
    description(value: string): az_pipelines_variable_group_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_group_update_command_builder;
    /** New name of the variable group. */
    name(value: string): az_pipelines_variable_group_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_group_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_group_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_group_update_command_builder;
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
declare class az_pipelines_variable_create_command_builder extends CommandBuilder<az_pipelines_variable_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the variable. */
    name(value: string): az_pipelines_variable_create_command_builder;
    /** Indicates whether the value can be set at queue time. */
    allowOverride(value: boolean): az_pipelines_variable_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_create_command_builder;
    /** Id of the pipeline. */
    pipelineId(value: string): az_pipelines_variable_create_command_builder;
    /** Name of the pipeline. Ignored if --pipeline-id parameter is supplied. */
    pipelineName(value: string): az_pipelines_variable_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_create_command_builder;
    /** Indicates whether the variable's value is a secret. */
    secret(value: boolean): az_pipelines_variable_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_create_command_builder;
    /** Value of the variable. For secret variables, if --value parameter is not given, it will be picked from environment variable prefixed with <problematic ids="id64" refid="id63">AZURE_DEVOPS_EXT_PIPELINE_VAR_</problematic> or user will be prompted to enter it via standard input. e.g. A variable named `MySecret` can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_MySecret. */
    value(value: string): az_pipelines_variable_create_command_builder;
}
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
declare class az_pipelines_variable_delete_command_builder extends CommandBuilder<az_pipelines_variable_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the variable to delete. */
    name(value: string): az_pipelines_variable_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_delete_command_builder;
    /** Id of the pipeline. */
    pipelineId(value: string): az_pipelines_variable_delete_command_builder;
    /** Name of the pipeline. */
    pipelineName(value: string): az_pipelines_variable_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_pipelines_variable_delete_command_builder;
}
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
declare class az_pipelines_variable_list_command_builder extends CommandBuilder<az_pipelines_variable_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_list_command_builder;
    /** Id of the pipeline. */
    pipelineId(value: string): az_pipelines_variable_list_command_builder;
    /** Name of the pipeline. Ignored if --pipeline-id parameter is supplied. */
    pipelineName(value: string): az_pipelines_variable_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_variable_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_list_command_builder;
}
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
declare class az_pipelines_variable_update_command_builder extends CommandBuilder<az_pipelines_variable_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the variable. */
    name(value: string): az_pipelines_variable_update_command_builder;
    /** Indicates whether the value can be set at queue time. */
    allowOverride(value: boolean): az_pipelines_variable_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_variable_update_command_builder;
    /** New name of the variable. */
    newName(value: string): az_pipelines_variable_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_variable_update_command_builder;
    /** Id of the pipeline. */
    pipelineId(value: string): az_pipelines_variable_update_command_builder;
    /** Name of the pipeline. Ignored if --pipeline-id parameter is supplied. */
    pipelineName(value: string): az_pipelines_variable_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_variable_update_command_builder;
    /** Set it to True to update the value of a secret variable using environment variable or prompt via standard input. */
    promptValue(value: boolean): az_pipelines_variable_update_command_builder;
    /** If the value of the variable is a secret. */
    secret(value: boolean): az_pipelines_variable_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_variable_update_command_builder;
    /** New value of the variable. For secret variables, use --prompt-value parameter, to be prompted to enter it via standard input. For non-interactive consoles it can be picked from environment variable prefixed with <problematic ids="id66" refid="id65">AZURE_DEVOPS_EXT_PIPELINE_VAR_</problematic> e.g. A variable nameed `MySecret` can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_MySecret. */
    value(value: string): az_pipelines_variable_update_command_builder;
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
declare class az_pipelines_create_command_builder extends CommandBuilder<az_pipelines_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the new pipeline. */
    name(value: string): az_pipelines_create_command_builder;
    /** Branch name for which the pipeline will be configured. If omitted, it will be auto-detected from local repository. */
    branch(value: string): az_pipelines_create_command_builder;
    /** Description for the new pipeline. */
    description(value: string): az_pipelines_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_create_command_builder;
    /** Path of the folder where the pipeline needs to be created. Default is root folder. e.g. "user1/test_pipelines". */
    folderPath(value: string): az_pipelines_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_create_command_builder;
    /** Id of the queue in the available agent pools. Will be auto detected if not specified. */
    queueId(value: string): az_pipelines_create_command_builder;
    /** Repository for which the pipeline needs to be configured. Can be clone url of the git repository or name of the repository for a Azure Repos or Owner/RepoName in case of GitHub repository. If omitted it will be auto-detected from the remote url of local git repository. If name is mentioned instead of url, --repository-type argument is also required. */
    repository(value: string): az_pipelines_create_command_builder;
    /** Type of repository. If omitted, it will be auto-detected from remote url of local repository. 'tfsgit' for Azure Repos, 'github' for GitHub repository. */
    repositoryType(value: 'github' | 'tfsgit'): az_pipelines_create_command_builder;
    /** Id of the Service connection created for the repository for GitHub repository. Use command az devops service-endpoint -h for creating/listing service_connections. Not required for Azure Repos. */
    serviceConnection(value: string): az_pipelines_create_command_builder;
    /** Specify this flag to prevent the first run being triggered by the command. Command will return a pipeline if run is skipped else it will output a pipeline run. */
    skipFirstRun(value: boolean): az_pipelines_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_create_command_builder;
    /** Path of the pipelines yaml file in the repo (if yaml is already present in the repo). */
    yamlPath(value: string): az_pipelines_create_command_builder;
}
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
declare class az_pipelines_delete_command_builder extends CommandBuilder<az_pipelines_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the pipeline. */
    id(value: string): az_pipelines_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_pipelines_delete_command_builder;
}
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
declare class az_pipelines_list_command_builder extends CommandBuilder<az_pipelines_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_list_command_builder;
    /** If specified, filters to definitions under this folder. */
    folderPath(value: string): az_pipelines_list_command_builder;
    /** Limit results to pipelines with this name or starting with this name. Examples: "FabCI" or "Fab\*". */
    name(value: string): az_pipelines_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_list_command_builder;
    /** Order of the results. */
    queryOrder(value: 'ModifiedAsc' | 'ModifiedDesc' | 'NameAsc' | 'NameDesc' | 'None'): az_pipelines_list_command_builder;
    /** Limit results to pipelines associated with this repository. */
    repository(value: string): az_pipelines_list_command_builder;
    /** Limit results to pipelines associated with this repository type. It is mandatory to pass 'repository' argument along with this argument. */
    repositoryType(value: 'bitbucket' | 'git' | 'github' | 'githubenterprise' | 'svn' | 'tfsgit' | 'tfsversioncontrol'): az_pipelines_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_list_command_builder;
    /** Maximum number of pipelines to list. */
    top(value: string): az_pipelines_list_command_builder;
}
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
declare class az_pipelines_run_command_builder extends CommandBuilder<az_pipelines_run_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the branch on which the pipeline run is to be queued. Example: refs/heads/master or master or refs/pull/1/merge. */
    branch(value: string): az_pipelines_run_command_builder;
    /** Commit-id on which the pipeline run is to be queued. */
    commitId(value: string): az_pipelines_run_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_run_command_builder;
    /** Folder path of pipeline. Default is root level folder. */
    folderPath(value: string): az_pipelines_run_command_builder;
    /** ID of the pipeline to queue. Required if --name is not supplied. */
    id(value: string): az_pipelines_run_command_builder;
    /** Name of the pipeline to queue. Ignored if --id is supplied. */
    name(value: string): az_pipelines_run_command_builder;
    /** Open the pipeline results page in your web browser. */
    open(value: string): az_pipelines_run_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_run_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_run_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_run_command_builder;
    /** Space separated "name=value" pairs for the variables you would like to set. */
    variables(value: string): az_pipelines_run_command_builder;
}
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
declare class az_pipelines_show_command_builder extends CommandBuilder<az_pipelines_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_show_command_builder;
    /** Folder path of pipeline. Default is root level folder. */
    folderPath(value: string): az_pipelines_show_command_builder;
    /** ID of the pipeline. */
    id(value: string): az_pipelines_show_command_builder;
    /** Name of the pipeline. Ignored if --id is supplied. */
    name(value: string): az_pipelines_show_command_builder;
    /** Open the pipeline summary page in your web browser. */
    open(value: string): az_pipelines_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_pipelines_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_show_command_builder;
}
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
declare class az_pipelines_update_command_builder extends CommandBuilder<az_pipelines_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Branch name for which the pipeline will be configured. */
    branch(value: string): az_pipelines_update_command_builder;
    /** New description for the pipeline. */
    description(value: string): az_pipelines_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_pipelines_update_command_builder;
    /** Id of the pipeline to update. */
    id(value: string): az_pipelines_update_command_builder;
    /** Name of the pipeline to update. */
    name(value: string): az_pipelines_update_command_builder;
    /** New full path of the folder to move the pipeline to. e.g. "user1/production_pipelines". */
    newFolderPath(value: string): az_pipelines_update_command_builder;
    /** New updated name of the pipeline. */
    newName(value: string): az_pipelines_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_pipelines_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_pipelines_update_command_builder;
    /** Queue id of the agent pool where the pipeline needs to run. */
    queueId(value: string): az_pipelines_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_pipelines_update_command_builder;
    /** Path of the pipelines yaml file in the repo. */
    yamlPath(value: string): az_pipelines_update_command_builder;
}
export {};
