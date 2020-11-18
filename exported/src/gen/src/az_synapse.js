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
exports.az_synapse = exports.az_synapse_workspace = exports.az_synapse_workspace_firewall_rule = exports.az_synapse_trigger = exports.az_synapse_trigger_run = exports.az_synapse_sql = exports.az_synapse_sql_pool = exports.az_synapse_spark = exports.az_synapse_spark_statement = exports.az_synapse_spark_session = exports.az_synapse_spark_pool = exports.az_synapse_spark_job = exports.az_synapse_role = exports.az_synapse_role_definition = exports.az_synapse_role_assignment = exports.az_synapse_pipeline = exports.az_synapse_pipeline_run = exports.az_synapse_notebook = exports.az_synapse_linked_service = exports.az_synapse_dataset = exports.az_synapse_data_flow = exports.az_synapse_activity_run = void 0;
var base_1 = require("../base");
/** Synapse activity-run. */
var az_synapse_activity_run = /** @class */ (function () {
    function az_synapse_activity_run() {
    }
    /**
     * Query activity runs based on input filter conditions.
     *
     * Syntax:
     * ```
     * az synapse activity-run query-by-pipeline-run --last-updated-after
     *                                               --last-updated-before
     *                                               --name
     *                                               --run-id
     *                                               --workspace-name
     *                                               [--continuation-token]
     *                                               [--filters]
     *                                               [--order-by]
     *                                               [--subscription]
     * ```
     *
     * @param {string} lastUpdatedAfter The time at or after which the run event was updated in 'ISO 8601' format.
     * @param {string} lastUpdatedBefore The time at or before which the run event was updated in 'ISO 8601' format.
     * @param {string} name The pipeline name.
     * @param {string} runId The pipeline run identifier.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_activity_run.query_by_pipeline_run = function (lastUpdatedAfter, lastUpdatedBefore, name, runId, workspaceName) {
        return new az_synapse_activity_run_query_by_pipeline_run_command_builder("az synapse activity-run query-by-pipeline-run", 'az_synapse_activity_run_query_by_pipeline_run_command_result', lastUpdatedAfter, lastUpdatedBefore, name, runId, workspaceName);
    };
    return az_synapse_activity_run;
}());
exports.az_synapse_activity_run = az_synapse_activity_run;
/** Manage Synapse's data flows. */
var az_synapse_data_flow = /** @class */ (function () {
    function az_synapse_data_flow() {
    }
    /**
     * Create a data flow.
     *
     * Syntax:
     * ```
     * az synapse data-flow create --file
     *                             --name
     *                             --workspace-name
     *                             [--no-wait]
     *                             [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The data flow name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_data_flow.create = function (file, name, workspaceName) {
        return new az_synapse_data_flow_create_command_builder("az synapse data-flow create", 'az_synapse_data_flow_create_command_result', file, name, workspaceName);
    };
    /**
     * Delete a data flow.
     *
     * Syntax:
     * ```
     * az synapse data-flow delete --name
     *                             --workspace-name
     *                             [--no-wait]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} name The data flow name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_data_flow["delete"] = function (name, workspaceName) {
        return new az_synapse_data_flow_delete_command_builder("az synapse data-flow delete", 'az_synapse_data_flow_delete_command_result', name, workspaceName);
    };
    /**
     * List data flows.
     *
     * Syntax:
     * ```
     * az synapse data-flow list --workspace-name
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_data_flow.list = function (workspaceName) {
        return new az_synapse_data_flow_list_command_builder("az synapse data-flow list", 'az_synapse_data_flow_list_command_result', workspaceName);
    };
    /**
     * Set an exist data flow.
     *
     * Syntax:
     * ```
     * az synapse data-flow set --file
     *                          --name
     *                          --workspace-name
     *                          [--no-wait]
     *                          [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The data flow name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_data_flow.set = function (file, name, workspaceName) {
        return new az_synapse_data_flow_set_command_builder("az synapse data-flow set", 'az_synapse_data_flow_set_command_result', file, name, workspaceName);
    };
    /**
     * Get a data flow.
     *
     * Syntax:
     * ```
     * az synapse data-flow show --name
     *                           --workspace-name
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The data flow name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_data_flow.show = function (name, workspaceName) {
        return new az_synapse_data_flow_show_command_builder("az synapse data-flow show", 'az_synapse_data_flow_show_command_result', name, workspaceName);
    };
    return az_synapse_data_flow;
}());
exports.az_synapse_data_flow = az_synapse_data_flow;
/** Manage Synapse's datasets. */
var az_synapse_dataset = /** @class */ (function () {
    function az_synapse_dataset() {
    }
    /**
     * Create a dataset.
     *
     * Syntax:
     * ```
     * az synapse dataset create --file
     *                           --name
     *                           --workspace-name
     *                           [--no-wait]
     *                           [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The dataset name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_dataset.create = function (file, name, workspaceName) {
        return new az_synapse_dataset_create_command_builder("az synapse dataset create", 'az_synapse_dataset_create_command_result', file, name, workspaceName);
    };
    /**
     * Delete a dataset.
     *
     * Syntax:
     * ```
     * az synapse dataset delete --name
     *                           --workspace-name
     *                           [--no-wait]
     *                           [--subscription]
     *                           [--yes]
     * ```
     *
     * @param {string} name The dataset name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_dataset["delete"] = function (name, workspaceName) {
        return new az_synapse_dataset_delete_command_builder("az synapse dataset delete", 'az_synapse_dataset_delete_command_result', name, workspaceName);
    };
    /**
     * List datasets.
     *
     * Syntax:
     * ```
     * az synapse dataset list --workspace-name
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_dataset.list = function (workspaceName) {
        return new az_synapse_dataset_list_command_builder("az synapse dataset list", 'az_synapse_dataset_list_command_result', workspaceName);
    };
    /**
     * Set an exist dataset.
     *
     * Syntax:
     * ```
     * az synapse dataset set --file
     *                        --name
     *                        --workspace-name
     *                        [--no-wait]
     *                        [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The dataset name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_dataset.set = function (file, name, workspaceName) {
        return new az_synapse_dataset_set_command_builder("az synapse dataset set", 'az_synapse_dataset_set_command_result', file, name, workspaceName);
    };
    /**
     * Get a dataset.
     *
     * Syntax:
     * ```
     * az synapse dataset show --name
     *                         --workspace-name
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The dataset name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_dataset.show = function (name, workspaceName) {
        return new az_synapse_dataset_show_command_builder("az synapse dataset show", 'az_synapse_dataset_show_command_result', name, workspaceName);
    };
    return az_synapse_dataset;
}());
exports.az_synapse_dataset = az_synapse_dataset;
/** Manage Synapse's linked services. */
var az_synapse_linked_service = /** @class */ (function () {
    function az_synapse_linked_service() {
    }
    /**
     * Create a linked service.
     *
     * Syntax:
     * ```
     * az synapse linked-service create --file
     *                                  --name
     *                                  --workspace-name
     *                                  [--no-wait]
     *                                  [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The linked service name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_linked_service.create = function (file, name, workspaceName) {
        return new az_synapse_linked_service_create_command_builder("az synapse linked-service create", 'az_synapse_linked_service_create_command_result', file, name, workspaceName);
    };
    /**
     * Delete a linked service.
     *
     * Syntax:
     * ```
     * az synapse linked-service delete --name
     *                                  --workspace-name
     *                                  [--no-wait]
     *                                  [--subscription]
     *                                  [--yes]
     * ```
     *
     * @param {string} name The linked service name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_linked_service["delete"] = function (name, workspaceName) {
        return new az_synapse_linked_service_delete_command_builder("az synapse linked-service delete", 'az_synapse_linked_service_delete_command_result', name, workspaceName);
    };
    /**
     * List linked services.
     *
     * Syntax:
     * ```
     * az synapse linked-service list --workspace-name
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_linked_service.list = function (workspaceName) {
        return new az_synapse_linked_service_list_command_builder("az synapse linked-service list", 'az_synapse_linked_service_list_command_result', workspaceName);
    };
    /**
     * Set an exist linked service.
     *
     * Syntax:
     * ```
     * az synapse linked-service set --file
     *                               --name
     *                               --workspace-name
     *                               [--no-wait]
     *                               [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The linked service name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_linked_service.set = function (file, name, workspaceName) {
        return new az_synapse_linked_service_set_command_builder("az synapse linked-service set", 'az_synapse_linked_service_set_command_result', file, name, workspaceName);
    };
    /**
     * Get a linked service.
     *
     * Syntax:
     * ```
     * az synapse linked-service show --name
     *                                --workspace-name
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The linked service name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_linked_service.show = function (name, workspaceName) {
        return new az_synapse_linked_service_show_command_builder("az synapse linked-service show", 'az_synapse_linked_service_show_command_result', name, workspaceName);
    };
    return az_synapse_linked_service;
}());
exports.az_synapse_linked_service = az_synapse_linked_service;
/** Manage Synapse's notebooks. */
var az_synapse_notebook = /** @class */ (function () {
    function az_synapse_notebook() {
    }
    /**
     * Create a notebook.
     *
     * Syntax:
     * ```
     * az synapse notebook create --file
     *                            --name
     *                            --workspace-name
     *                            [--executor-count]
     *                            [--executor-size {Large, Medium, Small}]
     *                            [--no-wait]
     *                            [--spark-pool-name]
     *                            [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The notebook name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_notebook.create = function (file, name, workspaceName) {
        return new az_synapse_notebook_create_command_builder("az synapse notebook create", 'az_synapse_notebook_create_command_result', file, name, workspaceName);
    };
    /**
     * Delete a notebook.
     *
     * Syntax:
     * ```
     * az synapse notebook delete --name
     *                            --workspace-name
     *                            [--no-wait]
     *                            [--subscription]
     *                            [--yes]
     * ```
     *
     * @param {string} name The notebook name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_notebook["delete"] = function (name, workspaceName) {
        return new az_synapse_notebook_delete_command_builder("az synapse notebook delete", 'az_synapse_notebook_delete_command_result', name, workspaceName);
    };
    /**
     * Export notebooks.
     *
     * Syntax:
     * ```
     * az synapse notebook export --output-folder
     *                            --workspace-name
     *                            [--name]
     *                            [--subscription]
     * ```
     *
     * @param {string} outputFolder The folder where the notebook should be placed.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_notebook["export"] = function (outputFolder, workspaceName) {
        return new az_synapse_notebook_export_command_builder("az synapse notebook export", 'az_synapse_notebook_export_command_result', outputFolder, workspaceName);
    };
    /**
     * Import a notebook.
     *
     * Syntax:
     * ```
     * az synapse notebook import --file
     *                            --name
     *                            --workspace-name
     *                            [--executor-count]
     *                            [--executor-size {Large, Medium, Small}]
     *                            [--no-wait]
     *                            [--spark-pool-name]
     *                            [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The notebook name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_notebook["import"] = function (file, name, workspaceName) {
        return new az_synapse_notebook_import_command_builder("az synapse notebook import", 'az_synapse_notebook_import_command_result', file, name, workspaceName);
    };
    /**
     * List notebooks.
     *
     * Syntax:
     * ```
     * az synapse notebook list --workspace-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_notebook.list = function (workspaceName) {
        return new az_synapse_notebook_list_command_builder("az synapse notebook list", 'az_synapse_notebook_list_command_result', workspaceName);
    };
    /**
     * Set an exist notebook.
     *
     * Syntax:
     * ```
     * az synapse notebook set --file
     *                         --name
     *                         --workspace-name
     *                         [--executor-count]
     *                         [--executor-size {Large, Medium, Small}]
     *                         [--no-wait]
     *                         [--spark-pool-name]
     *                         [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The notebook name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_notebook.set = function (file, name, workspaceName) {
        return new az_synapse_notebook_set_command_builder("az synapse notebook set", 'az_synapse_notebook_set_command_result', file, name, workspaceName);
    };
    /**
     * Get a notebook.
     *
     * Syntax:
     * ```
     * az synapse notebook show --name
     *                          --workspace-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The notebook name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_notebook.show = function (name, workspaceName) {
        return new az_synapse_notebook_show_command_builder("az synapse notebook show", 'az_synapse_notebook_show_command_result', name, workspaceName);
    };
    return az_synapse_notebook;
}());
exports.az_synapse_notebook = az_synapse_notebook;
/** Manage Synapse's pipeline run. */
var az_synapse_pipeline_run = /** @class */ (function () {
    function az_synapse_pipeline_run() {
    }
    /**
     * Cancel a pipeline run by its run ID.
     *
     * Syntax:
     * ```
     * az synapse pipeline-run cancel --run-id
     *                                --workspace-name
     *                                [--is-recursive {false, true}]
     *                                [--subscription]
     *                                [--yes]
     * ```
     *
     * @param {string} runId The pipeline run identifier.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_pipeline_run.cancel = function (runId, workspaceName) {
        return new az_synapse_pipeline_run_cancel_command_builder("az synapse pipeline-run cancel", 'az_synapse_pipeline_run_cancel_command_result', runId, workspaceName);
    };
    /**
     * Query pipeline runs in the workspace based on input filter conditions.
     *
     * Syntax:
     * ```
     * az synapse pipeline-run query-by-workspace --last-updated-after
     *                                            --last-updated-before
     *                                            --workspace-name
     *                                            [--continuation-token]
     *                                            [--filters]
     *                                            [--order-by]
     *                                            [--subscription]
     * ```
     *
     * @param {string} lastUpdatedAfter The time at or after which the run event was updated in 'ISO 8601' format.
     * @param {string} lastUpdatedBefore The time at or before which the run event was updated in 'ISO 8601' format.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_pipeline_run.query_by_workspace = function (lastUpdatedAfter, lastUpdatedBefore, workspaceName) {
        return new az_synapse_pipeline_run_query_by_workspace_command_builder("az synapse pipeline-run query-by-workspace", 'az_synapse_pipeline_run_query_by_workspace_command_result', lastUpdatedAfter, lastUpdatedBefore, workspaceName);
    };
    /**
     * Get a pipeline run by its run ID.
     *
     * Syntax:
     * ```
     * az synapse pipeline-run show --run-id
     *                              --workspace-name
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} runId The pipeline run identifier.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_pipeline_run.show = function (runId, workspaceName) {
        return new az_synapse_pipeline_run_show_command_builder("az synapse pipeline-run show", 'az_synapse_pipeline_run_show_command_result', runId, workspaceName);
    };
    return az_synapse_pipeline_run;
}());
exports.az_synapse_pipeline_run = az_synapse_pipeline_run;
/** Manage Synapse's pipelines. */
var az_synapse_pipeline = /** @class */ (function () {
    function az_synapse_pipeline() {
    }
    /**
     * Create a pipeline.
     *
     * Syntax:
     * ```
     * az synapse pipeline create --file
     *                            --name
     *                            --workspace-name
     *                            [--no-wait]
     *                            [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The pipeline name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_pipeline.create = function (file, name, workspaceName) {
        return new az_synapse_pipeline_create_command_builder("az synapse pipeline create", 'az_synapse_pipeline_create_command_result', file, name, workspaceName);
    };
    /**
     * Creates a run of a pipeline.
     *
     * Syntax:
     * ```
     * az synapse pipeline create-run --name
     *                                --workspace-name
     *                                [--is-recovery {false, true}]
     *                                [--parameters]
     *                                [--reference-pipeline-run-id]
     *                                [--start-activity-name]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The pipeline name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_pipeline.create_run = function (name, workspaceName) {
        return new az_synapse_pipeline_create_run_command_builder("az synapse pipeline create-run", 'az_synapse_pipeline_create_run_command_result', name, workspaceName);
    };
    /**
     * Delete a pipeline.
     *
     * Syntax:
     * ```
     * az synapse pipeline delete --name
     *                            --workspace-name
     *                            [--no-wait]
     *                            [--subscription]
     *                            [--yes]
     * ```
     *
     * @param {string} name The pipeline name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_pipeline["delete"] = function (name, workspaceName) {
        return new az_synapse_pipeline_delete_command_builder("az synapse pipeline delete", 'az_synapse_pipeline_delete_command_result', name, workspaceName);
    };
    /**
     * List pipelines.
     *
     * Syntax:
     * ```
     * az synapse pipeline list --workspace-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_pipeline.list = function (workspaceName) {
        return new az_synapse_pipeline_list_command_builder("az synapse pipeline list", 'az_synapse_pipeline_list_command_result', workspaceName);
    };
    /**
     * Set an exist pipeline.
     *
     * Syntax:
     * ```
     * az synapse pipeline set --file
     *                         --name
     *                         --workspace-name
     *                         [--no-wait]
     *                         [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The pipeline name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_pipeline.set = function (file, name, workspaceName) {
        return new az_synapse_pipeline_set_command_builder("az synapse pipeline set", 'az_synapse_pipeline_set_command_result', file, name, workspaceName);
    };
    /**
     * Get a pipeline.
     *
     * Syntax:
     * ```
     * az synapse pipeline show --name
     *                          --workspace-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The pipeline name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_pipeline.show = function (name, workspaceName) {
        return new az_synapse_pipeline_show_command_builder("az synapse pipeline show", 'az_synapse_pipeline_show_command_result', name, workspaceName);
    };
    return az_synapse_pipeline;
}());
exports.az_synapse_pipeline = az_synapse_pipeline;
/** Manage Synapse's role assignments. */
var az_synapse_role_assignment = /** @class */ (function () {
    function az_synapse_role_assignment() {
    }
    /**
     * Create a role assignment.
     *
     * Syntax:
     * ```
     * az synapse role assignment create --assignee
     *                                   --role
     *                                   --workspace-name
     *                                   [--subscription]
     * ```
     *
     * @param {string} assignee Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name.
     * @param {string} role The role name/id that is assigned to the principal.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_role_assignment.create = function (assignee, role, workspaceName) {
        return new az_synapse_role_assignment_create_command_builder("az synapse role assignment create", 'az_synapse_role_assignment_create_command_result', assignee, role, workspaceName);
    };
    /**
     * Delete role assignments of workspace.
     *
     * Syntax:
     * ```
     * az synapse role assignment delete --workspace-name
     *                                   [--assignee]
     *                                   [--ids]
     *                                   [--role]
     *                                   [--subscription]
     *                                   [--yes]
     * ```
     *
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_role_assignment["delete"] = function (workspaceName) {
        return new az_synapse_role_assignment_delete_command_builder("az synapse role assignment delete", 'az_synapse_role_assignment_delete_command_result', workspaceName);
    };
    /**
     * List role assignments.
     *
     * Syntax:
     * ```
     * az synapse role assignment list --workspace-name
     *                                 [--assignee]
     *                                 [--query-examples]
     *                                 [--role]
     *                                 [--subscription]
     * ```
     *
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_role_assignment.list = function (workspaceName) {
        return new az_synapse_role_assignment_list_command_builder("az synapse role assignment list", 'az_synapse_role_assignment_list_command_result', workspaceName);
    };
    /**
     * Get a role assignment by id.
     *
     * Syntax:
     * ```
     * az synapse role assignment show --id
     *                                 --workspace-name
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} id Id of the role that is assigned to the principal.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_role_assignment.show = function (id, workspaceName) {
        return new az_synapse_role_assignment_show_command_builder("az synapse role assignment show", 'az_synapse_role_assignment_show_command_result', id, workspaceName);
    };
    return az_synapse_role_assignment;
}());
exports.az_synapse_role_assignment = az_synapse_role_assignment;
/** Manage Synapse's role definitions. */
var az_synapse_role_definition = /** @class */ (function () {
    function az_synapse_role_definition() {
    }
    /**
     * List role definitions.
     *
     * Syntax:
     * ```
     * az synapse role definition list --workspace-name
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_role_definition.list = function (workspaceName) {
        return new az_synapse_role_definition_list_command_builder("az synapse role definition list", 'az_synapse_role_definition_list_command_result', workspaceName);
    };
    /**
     * Get role definition by role id/name.
     *
     * Syntax:
     * ```
     * az synapse role definition show --role
     *                                 --workspace-name
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} role The role name/id that is assigned to the principal.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_role_definition.show = function (role, workspaceName) {
        return new az_synapse_role_definition_show_command_builder("az synapse role definition show", 'az_synapse_role_definition_show_command_result', role, workspaceName);
    };
    return az_synapse_role_definition;
}());
exports.az_synapse_role_definition = az_synapse_role_definition;
/** Manage Synapse's role assignments and definitions. */
var az_synapse_role = /** @class */ (function () {
    function az_synapse_role() {
    }
    return az_synapse_role;
}());
exports.az_synapse_role = az_synapse_role;
/** Manage Synapse Spark batch jobs. */
var az_synapse_spark_job = /** @class */ (function () {
    function az_synapse_spark_job() {
    }
    /**
     * Cancel a Spark job.
     *
     * Syntax:
     * ```
     * az synapse spark job cancel --livy-id
     *                             --spark-pool-name
     *                             --workspace-name
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} livyId The id of the Spark job.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_job.cancel = function (livyId, sparkPoolName, workspaceName) {
        return new az_synapse_spark_job_cancel_command_builder("az synapse spark job cancel", 'az_synapse_spark_job_cancel_command_result', livyId, sparkPoolName, workspaceName);
    };
    /**
     * List all Spark jobs.
     *
     * Syntax:
     * ```
     * az synapse spark job list --spark-pool-name
     *                           --workspace-name
     *                           [--from-index]
     *                           [--query-examples]
     *                           [--size]
     *                           [--subscription]
     * ```
     *
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_job.list = function (sparkPoolName, workspaceName) {
        return new az_synapse_spark_job_list_command_builder("az synapse spark job list", 'az_synapse_spark_job_list_command_result', sparkPoolName, workspaceName);
    };
    /**
     * Get a Spark job.
     *
     * Syntax:
     * ```
     * az synapse spark job show --livy-id
     *                           --spark-pool-name
     *                           --workspace-name
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} livyId The id of the Spark job.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_job.show = function (livyId, sparkPoolName, workspaceName) {
        return new az_synapse_spark_job_show_command_builder("az synapse spark job show", 'az_synapse_spark_job_show_command_result', livyId, sparkPoolName, workspaceName);
    };
    /**
     * Submit a Spark job.
     *
     * Syntax:
     * ```
     * az synapse spark job submit --executor-size {Large, Medium, Small}
     *                             --executors
     *                             --main-class-name
     *                             --main-definition-file
     *                             --name
     *                             --spark-pool-name
     *                             --workspace-name
     *                             [--archives]
     *                             [--arguments]
     *                             [--configuration]
     *                             [--language {CSharp, PySpark, Python, Scala, Spark, SparkDotNet}]
     *                             [--reference-files]
     *                             [--subscription]
     *                             [--tags]
     * ```
     *
     * @param {'Large' | 'Medium' | 'Small'} executorSize The executor size.
     * @param {string} executors The number of executors.
     * @param {string} mainClassName The fully-qualified identifier or the main class that is in the main definition file.
     * @param {string} mainDefinitionFile The main file used for the job.
     * @param {string} name The Spark job name.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_job.submit = function (executorSize, executors, mainClassName, mainDefinitionFile, name, sparkPoolName, workspaceName) {
        return new az_synapse_spark_job_submit_command_builder("az synapse spark job submit", 'az_synapse_spark_job_submit_command_result', executorSize, executors, mainClassName, mainDefinitionFile, name, sparkPoolName, workspaceName);
    };
    return az_synapse_spark_job;
}());
exports.az_synapse_spark_job = az_synapse_spark_job;
/** Manage Spark pools. */
var az_synapse_spark_pool = /** @class */ (function () {
    function az_synapse_spark_pool() {
    }
    /**
     * Create a Spark pool.
     *
     * Syntax:
     * ```
     * az synapse spark pool create --name
     *                              --node-count
     *                              --node-size {Large, Medium, Small}
     *                              --resource-group
     *                              --spark-version
     *                              --workspace-name
     *                              [--delay]
     *                              [--enable-auto-pause {false, true}]
     *                              [--enable-auto-scale {false, true}]
     *                              [--library-requirements]
     *                              [--max-node-count]
     *                              [--min-node-count]
     *                              [--no-wait]
     *                              [--node-size-family]
     *                              [--spark-events-folder]
     *                              [--spark-log-folder]
     *                              [--subscription]
     *                              [--tags]
     * ```
     *
     * @param {string} name The name of the Spark pool.
     * @param {string} nodeCount The number of node.
     * @param {'Large' | 'Medium' | 'Small'} nodeSize The node size.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sparkVersion The supported Spark version is 2.4 now.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_spark_pool.create = function (name, nodeCount, nodeSize, resourceGroup, sparkVersion, workspaceName) {
        return new az_synapse_spark_pool_create_command_builder("az synapse spark pool create", 'az_synapse_spark_pool_create_command_result', name, nodeCount, nodeSize, resourceGroup, sparkVersion, workspaceName);
    };
    /**
     * Delete a Spark pool.
     *
     * Syntax:
     * ```
     * az synapse spark pool delete [--ids]
     *                              [--name]
     *                              [--no-wait]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--workspace-name]
     *                              [--yes]
     * ```
     */
    az_synapse_spark_pool["delete"] = function () {
        return new az_synapse_spark_pool_delete_command_builder("az synapse spark pool delete", 'az_synapse_spark_pool_delete_command_result');
    };
    /**
     * List all Spark pools.
     *
     * Syntax:
     * ```
     * az synapse spark pool list --resource-group
     *                            --workspace-name
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_spark_pool.list = function (resourceGroup, workspaceName) {
        return new az_synapse_spark_pool_list_command_builder("az synapse spark pool list", 'az_synapse_spark_pool_list_command_result', resourceGroup, workspaceName);
    };
    /**
     * Get a Spark pool.
     *
     * Syntax:
     * ```
     * az synapse spark pool show [--ids]
     *                            [--name]
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--workspace-name]
     * ```
     */
    az_synapse_spark_pool.show = function () {
        return new az_synapse_spark_pool_show_command_builder("az synapse spark pool show", 'az_synapse_spark_pool_show_command_result');
    };
    /**
     * Update the Spark pool.
     *
     * Syntax:
     * ```
     * az synapse spark pool update [--delay]
     *                              [--enable-auto-pause {false, true}]
     *                              [--enable-auto-scale {false, true}]
     *                              [--force {false, true}]
     *                              [--ids]
     *                              [--library-requirements]
     *                              [--max-node-count]
     *                              [--min-node-count]
     *                              [--name]
     *                              [--no-wait]
     *                              [--node-count]
     *                              [--node-size {Large, Medium, Small}]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--tags]
     *                              [--workspace-name]
     * ```
     */
    az_synapse_spark_pool.update = function () {
        return new az_synapse_spark_pool_update_command_builder("az synapse spark pool update", 'az_synapse_spark_pool_update_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of a Spark pool is met.
     *
     * Syntax:
     * ```
     * az synapse spark pool wait --big-data-pool-name
     *                            [--created]
     *                            [--custom]
     *                            [--deleted]
     *                            [--exists]
     *                            [--ids]
     *                            [--interval]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--timeout]
     *                            [--updated]
     *                            [--workspace-name]
     * ```
     *
     * @param {string} bigDataPoolName Big Data pool name.
     */
    az_synapse_spark_pool.wait = function (bigDataPoolName) {
        return new az_synapse_spark_pool_wait_command_builder("az synapse spark pool wait", 'az_synapse_spark_pool_wait_command_result', bigDataPoolName);
    };
    return az_synapse_spark_pool;
}());
exports.az_synapse_spark_pool = az_synapse_spark_pool;
/** Manage Synapse Spark sessions. */
var az_synapse_spark_session = /** @class */ (function () {
    function az_synapse_spark_session() {
    }
    /**
     * Cancel a Spark session.
     *
     * Syntax:
     * ```
     * az synapse spark session cancel --livy-id
     *                                 --spark-pool-name
     *                                 --workspace-name
     *                                 [--subscription]
     *                                 [--yes]
     * ```
     *
     * @param {string} livyId The id of the Spark session job.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_session.cancel = function (livyId, sparkPoolName, workspaceName) {
        return new az_synapse_spark_session_cancel_command_builder("az synapse spark session cancel", 'az_synapse_spark_session_cancel_command_result', livyId, sparkPoolName, workspaceName);
    };
    /**
     * Create a Spark session.
     *
     * Syntax:
     * ```
     * az synapse spark session create --executor-size {Large, Medium, Small}
     *                                 --executors
     *                                 --name
     *                                 --spark-pool-name
     *                                 --workspace-name
     *                                 [--configuration]
     *                                 [--reference-files]
     *                                 [--subscription]
     *                                 [--tags]
     * ```
     *
     * @param {'Large' | 'Medium' | 'Small'} executorSize The executor size.
     * @param {string} executors The number of executors.
     * @param {string} name The Spark session name.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_session.create = function (executorSize, executors, name, sparkPoolName, workspaceName) {
        return new az_synapse_spark_session_create_command_builder("az synapse spark session create", 'az_synapse_spark_session_create_command_result', executorSize, executors, name, sparkPoolName, workspaceName);
    };
    /**
     * List all Spark sessions.
     *
     * Syntax:
     * ```
     * az synapse spark session list --spark-pool-name
     *                               --workspace-name
     *                               [--from-index]
     *                               [--query-examples]
     *                               [--size]
     *                               [--subscription]
     * ```
     *
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_session.list = function (sparkPoolName, workspaceName) {
        return new az_synapse_spark_session_list_command_builder("az synapse spark session list", 'az_synapse_spark_session_list_command_result', sparkPoolName, workspaceName);
    };
    /**
     * Reset a Spark session timeout time.
     *
     * Syntax:
     * ```
     * az synapse spark session reset-timeout --livy-id
     *                                        --spark-pool-name
     *                                        --workspace-name
     *                                        [--subscription]
     * ```
     *
     * @param {string} livyId The id of the Spark session job.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_session.reset_timeout = function (livyId, sparkPoolName, workspaceName) {
        return new az_synapse_spark_session_reset_timeout_command_builder("az synapse spark session reset-timeout", 'az_synapse_spark_session_reset_timeout_command_result', livyId, sparkPoolName, workspaceName);
    };
    /**
     * Get a Spark session.
     *
     * Syntax:
     * ```
     * az synapse spark session show --livy-id
     *                               --spark-pool-name
     *                               --workspace-name
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} livyId The id of the Spark session job.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_session.show = function (livyId, sparkPoolName, workspaceName) {
        return new az_synapse_spark_session_show_command_builder("az synapse spark session show", 'az_synapse_spark_session_show_command_result', livyId, sparkPoolName, workspaceName);
    };
    return az_synapse_spark_session;
}());
exports.az_synapse_spark_session = az_synapse_spark_session;
/** Manage Synapse Spark statements. */
var az_synapse_spark_statement = /** @class */ (function () {
    function az_synapse_spark_statement() {
    }
    /**
     * Cancel a Spark statement.
     *
     * Syntax:
     * ```
     * az synapse spark statement cancel --livy-id
     *                                   --session-id
     *                                   --spark-pool-name
     *                                   --workspace-name
     *                                   [--subscription]
     *                                   [--yes]
     * ```
     *
     * @param {string} livyId The id of the statement.
     * @param {string} sessionId The id of Spark session.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_statement.cancel = function (livyId, sessionId, sparkPoolName, workspaceName) {
        return new az_synapse_spark_statement_cancel_command_builder("az synapse spark statement cancel", 'az_synapse_spark_statement_cancel_command_result', livyId, sessionId, sparkPoolName, workspaceName);
    };
    /**
     * Invoke a Spark statement.
     *
     * Syntax:
     * ```
     * az synapse spark statement invoke --code
     *                                   --language {CSharp, PySpark, Python, SQL, Scala, Spark, SparkDotNet}
     *                                   --session-id
     *                                   --spark-pool-name
     *                                   --workspace-name
     *                                   [--subscription]
     * ```
     *
     * @param {string} code The code of Spark statement. This is either the code contents or use `@<file path>` to load the content from a file.
     * @param {'CSharp' | 'PySpark' | 'Python' | 'SQL' | 'Scala' | 'Spark' | 'SparkDotNet'} language The language of Spark statement.
     * @param {string} sessionId The id of Spark session.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_statement.invoke = function (code, language, sessionId, sparkPoolName, workspaceName) {
        return new az_synapse_spark_statement_invoke_command_builder("az synapse spark statement invoke", 'az_synapse_spark_statement_invoke_command_result', code, language, sessionId, sparkPoolName, workspaceName);
    };
    /**
     * List all Spark statements.
     *
     * Syntax:
     * ```
     * az synapse spark statement list --session-id
     *                                 --spark-pool-name
     *                                 --workspace-name
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} sessionId The id of Spark session.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_statement.list = function (sessionId, sparkPoolName, workspaceName) {
        return new az_synapse_spark_statement_list_command_builder("az synapse spark statement list", 'az_synapse_spark_statement_list_command_result', sessionId, sparkPoolName, workspaceName);
    };
    /**
     * Get a Spark statement.
     *
     * Syntax:
     * ```
     * az synapse spark statement show --livy-id
     *                                 --session-id
     *                                 --spark-pool-name
     *                                 --workspace-name
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} livyId The id of the statement.
     * @param {string} sessionId The id of Spark session.
     * @param {string} sparkPoolName The name of the Spark pool.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_spark_statement.show = function (livyId, sessionId, sparkPoolName, workspaceName) {
        return new az_synapse_spark_statement_show_command_builder("az synapse spark statement show", 'az_synapse_spark_statement_show_command_result', livyId, sessionId, sparkPoolName, workspaceName);
    };
    return az_synapse_spark_statement;
}());
exports.az_synapse_spark_statement = az_synapse_spark_statement;
/** Manage Spark pools and Spark jobs. */
var az_synapse_spark = /** @class */ (function () {
    function az_synapse_spark() {
    }
    return az_synapse_spark;
}());
exports.az_synapse_spark = az_synapse_spark;
/** Manage SQL pools. */
var az_synapse_sql_pool = /** @class */ (function () {
    function az_synapse_sql_pool() {
    }
    /**
     * Create a SQL pool.
     *
     * Syntax:
     * ```
     * az synapse sql pool create --name
     *                            --performance-level
     *                            --resource-group
     *                            --workspace-name
     *                            [--no-wait]
     *                            [--subscription]
     *                            [--tags]
     * ```
     *
     * @param {string} name The SQL pool name.
     * @param {string} performanceLevel The performance level.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_sql_pool.create = function (name, performanceLevel, resourceGroup, workspaceName) {
        return new az_synapse_sql_pool_create_command_builder("az synapse sql pool create", 'az_synapse_sql_pool_create_command_result', name, performanceLevel, resourceGroup, workspaceName);
    };
    /**
     * Delete a SQL pool.
     *
     * Syntax:
     * ```
     * az synapse sql pool delete [--ids]
     *                            [--name]
     *                            [--no-wait]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--workspace-name]
     *                            [--yes]
     * ```
     */
    az_synapse_sql_pool["delete"] = function () {
        return new az_synapse_sql_pool_delete_command_builder("az synapse sql pool delete", 'az_synapse_sql_pool_delete_command_result');
    };
    /**
     * List all SQL pools.
     *
     * Syntax:
     * ```
     * az synapse sql pool list --resource-group
     *                          --workspace-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_sql_pool.list = function (resourceGroup, workspaceName) {
        return new az_synapse_sql_pool_list_command_builder("az synapse sql pool list", 'az_synapse_sql_pool_list_command_result', resourceGroup, workspaceName);
    };
    /**
     * Pause a SQL pool.
     *
     * Syntax:
     * ```
     * az synapse sql pool pause [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     *                           [--workspace-name]
     * ```
     */
    az_synapse_sql_pool.pause = function () {
        return new az_synapse_sql_pool_pause_command_builder("az synapse sql pool pause", 'az_synapse_sql_pool_pause_command_result');
    };
    /**
     * Resume a SQL pool.
     *
     * Syntax:
     * ```
     * az synapse sql pool resume [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--workspace-name]
     * ```
     */
    az_synapse_sql_pool.resume = function () {
        return new az_synapse_sql_pool_resume_command_builder("az synapse sql pool resume", 'az_synapse_sql_pool_resume_command_result');
    };
    /**
     * Get a SQL pool.
     *
     * Syntax:
     * ```
     * az synapse sql pool show [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--workspace-name]
     * ```
     */
    az_synapse_sql_pool.show = function () {
        return new az_synapse_sql_pool_show_command_builder("az synapse sql pool show", 'az_synapse_sql_pool_show_command_result');
    };
    /**
     * Update a SQL pool.
     *
     * Syntax:
     * ```
     * az synapse sql pool update [--ids]
     *                            [--name]
     *                            [--performance-level]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--tags]
     *                            [--workspace-name]
     * ```
     */
    az_synapse_sql_pool.update = function () {
        return new az_synapse_sql_pool_update_command_builder("az synapse sql pool update", 'az_synapse_sql_pool_update_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of a SQL pool is met.
     *
     * Syntax:
     * ```
     * az synapse sql pool wait --sql-pool-name
     *                          [--created]
     *                          [--custom]
     *                          [--deleted]
     *                          [--exists]
     *                          [--ids]
     *                          [--interval]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--timeout]
     *                          [--updated]
     *                          [--workspace-name]
     * ```
     *
     * @param {string} sqlPoolName SQL pool name.
     */
    az_synapse_sql_pool.wait = function (sqlPoolName) {
        return new az_synapse_sql_pool_wait_command_builder("az synapse sql pool wait", 'az_synapse_sql_pool_wait_command_result', sqlPoolName);
    };
    return az_synapse_sql_pool;
}());
exports.az_synapse_sql_pool = az_synapse_sql_pool;
/** Manage SQL pools. */
var az_synapse_sql = /** @class */ (function () {
    function az_synapse_sql() {
    }
    return az_synapse_sql;
}());
exports.az_synapse_sql = az_synapse_sql;
/** Synapse trigger-run. */
var az_synapse_trigger_run = /** @class */ (function () {
    function az_synapse_trigger_run() {
    }
    /**
     * Query trigger runs in the workspace based on input filter conditions.
     *
     * Syntax:
     * ```
     * az synapse trigger-run query-by-workspace --last-updated-after
     *                                           --last-updated-before
     *                                           --workspace-name
     *                                           [--continuation-token]
     *                                           [--filters]
     *                                           [--order-by]
     *                                           [--subscription]
     * ```
     *
     * @param {string} lastUpdatedAfter The time at or after which the run event was updated in 'ISO 8601' format.
     * @param {string} lastUpdatedBefore The time at or before which the run event was updated in 'ISO 8601' format.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger_run.query_by_workspace = function (lastUpdatedAfter, lastUpdatedBefore, workspaceName) {
        return new az_synapse_trigger_run_query_by_workspace_command_builder("az synapse trigger-run query-by-workspace", 'az_synapse_trigger_run_query_by_workspace_command_result', lastUpdatedAfter, lastUpdatedBefore, workspaceName);
    };
    /**
     * Rerun single trigger instance by runId.
     *
     * Syntax:
     * ```
     * az synapse trigger-run rerun --name
     *                              --run-id
     *                              --workspace-name
     *                              [--subscription]
     * ```
     *
     * @param {string} name The trigger name.
     * @param {string} runId The trigger run identifier.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger_run.rerun = function (name, runId, workspaceName) {
        return new az_synapse_trigger_run_rerun_command_builder("az synapse trigger-run rerun", 'az_synapse_trigger_run_rerun_command_result', name, runId, workspaceName);
    };
    return az_synapse_trigger_run;
}());
exports.az_synapse_trigger_run = az_synapse_trigger_run;
/** Manage Synapse's triggers. */
var az_synapse_trigger = /** @class */ (function () {
    function az_synapse_trigger() {
    }
    /**
     * Create a trigger.
     *
     * Syntax:
     * ```
     * az synapse trigger create --file
     *                           --name
     *                           --workspace-name
     *                           [--no-wait]
     *                           [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The trigger name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger.create = function (file, name, workspaceName) {
        return new az_synapse_trigger_create_command_builder("az synapse trigger create", 'az_synapse_trigger_create_command_result', file, name, workspaceName);
    };
    /**
     * Delete a trigger.
     *
     * Syntax:
     * ```
     * az synapse trigger delete --name
     *                           --workspace-name
     *                           [--no-wait]
     *                           [--subscription]
     *                           [--yes]
     * ```
     *
     * @param {string} name The trigger name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger["delete"] = function (name, workspaceName) {
        return new az_synapse_trigger_delete_command_builder("az synapse trigger delete", 'az_synapse_trigger_delete_command_result', name, workspaceName);
    };
    /**
     * Get a trigger's event subscription status.
     *
     * Syntax:
     * ```
     * az synapse trigger get-event-subscription-status --name
     *                                                  --workspace-name
     *                                                  [--subscription]
     * ```
     *
     * @param {string} name The trigger name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger.get_event_subscription_status = function (name, workspaceName) {
        return new az_synapse_trigger_get_event_subscription_status_command_builder("az synapse trigger get-event-subscription-status", 'az_synapse_trigger_get_event_subscription_status_command_result', name, workspaceName);
    };
    /**
     * List triggers.
     *
     * Syntax:
     * ```
     * az synapse trigger list --workspace-name
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger.list = function (workspaceName) {
        return new az_synapse_trigger_list_command_builder("az synapse trigger list", 'az_synapse_trigger_list_command_result', workspaceName);
    };
    /**
     * Set an exist trigger.
     *
     * Syntax:
     * ```
     * az synapse trigger set --file
     *                        --name
     *                        --workspace-name
     *                        [--no-wait]
     *                        [--subscription]
     * ```
     *
     * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
     * @param {string} name The trigger name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger.set = function (file, name, workspaceName) {
        return new az_synapse_trigger_set_command_builder("az synapse trigger set", 'az_synapse_trigger_set_command_result', file, name, workspaceName);
    };
    /**
     * Get a trigger.
     *
     * Syntax:
     * ```
     * az synapse trigger show --name
     *                         --workspace-name
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The trigger name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger.show = function (name, workspaceName) {
        return new az_synapse_trigger_show_command_builder("az synapse trigger show", 'az_synapse_trigger_show_command_result', name, workspaceName);
    };
    /**
     * Starts a trigger.
     *
     * Syntax:
     * ```
     * az synapse trigger start --name
     *                          --workspace-name
     *                          [--no-wait]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The trigger name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger.start = function (name, workspaceName) {
        return new az_synapse_trigger_start_command_builder("az synapse trigger start", 'az_synapse_trigger_start_command_result', name, workspaceName);
    };
    /**
     * Stops a trigger.
     *
     * Syntax:
     * ```
     * az synapse trigger stop --name
     *                         --workspace-name
     *                         [--no-wait]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The trigger name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger.stop = function (name, workspaceName) {
        return new az_synapse_trigger_stop_command_builder("az synapse trigger stop", 'az_synapse_trigger_stop_command_result', name, workspaceName);
    };
    /**
     * Subscribe event trigger to events.
     *
     * Syntax:
     * ```
     * az synapse trigger subscribe-to-event --name
     *                                       --workspace-name
     *                                       [--no-wait]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name The trigger name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger.subscribe_to_event = function (name, workspaceName) {
        return new az_synapse_trigger_subscribe_to_event_command_builder("az synapse trigger subscribe-to-event", 'az_synapse_trigger_subscribe_to_event_command_result', name, workspaceName);
    };
    /**
     * Unsubscribe event trigger from events.
     *
     * Syntax:
     * ```
     * az synapse trigger unsubscribe-from-event --name
     *                                           --workspace-name
     *                                           [--no-wait]
     *                                           [--subscription]
     * ```
     *
     * @param {string} name The trigger name.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_trigger.unsubscribe_from_event = function (name, workspaceName) {
        return new az_synapse_trigger_unsubscribe_from_event_command_builder("az synapse trigger unsubscribe-from-event", 'az_synapse_trigger_unsubscribe_from_event_command_result', name, workspaceName);
    };
    return az_synapse_trigger;
}());
exports.az_synapse_trigger = az_synapse_trigger;
/** Manage a workspace's firewall rules. */
var az_synapse_workspace_firewall_rule = /** @class */ (function () {
    function az_synapse_workspace_firewall_rule() {
    }
    /**
     * Create a firewall rule.
     *
     * Syntax:
     * ```
     * az synapse workspace firewall-rule create --end-ip-address
     *                                           --name
     *                                           --resource-group
     *                                           --start-ip-address
     *                                           --workspace-name
     *                                           [--no-wait]
     *                                           [--subscription]
     * ```
     *
     * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress.
     * @param {string} name The IP firewall rule name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_workspace_firewall_rule.create = function (endIpAddress, name, resourceGroup, startIpAddress, workspaceName) {
        return new az_synapse_workspace_firewall_rule_create_command_builder("az synapse workspace firewall-rule create", 'az_synapse_workspace_firewall_rule_create_command_result', endIpAddress, name, resourceGroup, startIpAddress, workspaceName);
    };
    /**
     * Delete a firewall rule.
     *
     * Syntax:
     * ```
     * az synapse workspace firewall-rule delete [--ids]
     *                                           [--name]
     *                                           [--no-wait]
     *                                           [--resource-group]
     *                                           [--subscription]
     *                                           [--workspace-name]
     *                                           [--yes]
     * ```
     */
    az_synapse_workspace_firewall_rule["delete"] = function () {
        return new az_synapse_workspace_firewall_rule_delete_command_builder("az synapse workspace firewall-rule delete", 'az_synapse_workspace_firewall_rule_delete_command_result');
    };
    /**
     * List all firewall rules.
     *
     * Syntax:
     * ```
     * az synapse workspace firewall-rule list --resource-group
     *                                         --workspace-name
     *                                         [--query-examples]
     *                                         [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName The workspace name.
     */
    az_synapse_workspace_firewall_rule.list = function (resourceGroup, workspaceName) {
        return new az_synapse_workspace_firewall_rule_list_command_builder("az synapse workspace firewall-rule list", 'az_synapse_workspace_firewall_rule_list_command_result', resourceGroup, workspaceName);
    };
    /**
     * Get a firewall rule.
     *
     * Syntax:
     * ```
     * az synapse workspace firewall-rule show [--ids]
     *                                         [--name]
     *                                         [--query-examples]
     *                                         [--resource-group]
     *                                         [--subscription]
     *                                         [--workspace-name]
     * ```
     */
    az_synapse_workspace_firewall_rule.show = function () {
        return new az_synapse_workspace_firewall_rule_show_command_builder("az synapse workspace firewall-rule show", 'az_synapse_workspace_firewall_rule_show_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of a firewall rule is met.
     *
     * Syntax:
     * ```
     * az synapse workspace firewall-rule wait --rule-name
     *                                         [--created]
     *                                         [--custom]
     *                                         [--deleted]
     *                                         [--exists]
     *                                         [--ids]
     *                                         [--interval]
     *                                         [--resource-group]
     *                                         [--subscription]
     *                                         [--timeout]
     *                                         [--updated]
     *                                         [--workspace-name]
     * ```
     *
     * @param {string} ruleName The IP firewall rule name.
     */
    az_synapse_workspace_firewall_rule.wait = function (ruleName) {
        return new az_synapse_workspace_firewall_rule_wait_command_builder("az synapse workspace firewall-rule wait", 'az_synapse_workspace_firewall_rule_wait_command_result', ruleName);
    };
    return az_synapse_workspace_firewall_rule;
}());
exports.az_synapse_workspace_firewall_rule = az_synapse_workspace_firewall_rule;
/** Manage Synapse workspaces. */
var az_synapse_workspace = /** @class */ (function () {
    function az_synapse_workspace() {
    }
    /**
     * Check if a Synapse workspace name is available or not.
     *
     * Syntax:
     * ```
     * az synapse workspace check-name --name
     *                                 [--subscription]
     * ```
     *
     * @param {string} name The name you wanted to check.
     */
    az_synapse_workspace.check_name = function (name) {
        return new az_synapse_workspace_check_name_command_builder("az synapse workspace check-name", 'az_synapse_workspace_check_name_command_result', name);
    };
    /**
     * Create a Synapse workspace.
     *
     * Syntax:
     * ```
     * az synapse workspace create --file-system
     *                             --location
     *                             --name
     *                             --resource-group
     *                             --sql-admin-login-password
     *                             --sql-admin-login-user
     *                             --storage-account
     *                             [--no-wait]
     *                             [--subscription]
     *                             [--tags]
     * ```
     *
     * @param {string} fileSystem The file system of the data lake storage account.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The workspace name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sqlAdminLoginPassword The sql administrator login password.
     * @param {string} sqlAdminLoginUser The sql administrator login user name.
     * @param {string} storageAccount The data lake storage account name or resource id.
     */
    az_synapse_workspace.create = function (fileSystem, location, name, resourceGroup, sqlAdminLoginPassword, sqlAdminLoginUser, storageAccount) {
        return new az_synapse_workspace_create_command_builder("az synapse workspace create", 'az_synapse_workspace_create_command_result', fileSystem, location, name, resourceGroup, sqlAdminLoginPassword, sqlAdminLoginUser, storageAccount);
    };
    /**
     * Delete a Synapse workspace.
     *
     * Syntax:
     * ```
     * az synapse workspace delete [--ids]
     *                             [--name]
     *                             [--no-wait]
     *                             [--resource-group]
     *                             [--subscription]
     *                             [--yes]
     * ```
     */
    az_synapse_workspace["delete"] = function () {
        return new az_synapse_workspace_delete_command_builder("az synapse workspace delete", 'az_synapse_workspace_delete_command_result');
    };
    /**
     * List all Synapse workspaces.
     *
     * Syntax:
     * ```
     * az synapse workspace list [--query-examples]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_synapse_workspace.list = function () {
        return new az_synapse_workspace_list_command_builder("az synapse workspace list", 'az_synapse_workspace_list_command_result');
    };
    /**
     * Get a Synapse workspace.
     *
     * Syntax:
     * ```
     * az synapse workspace show [--ids]
     *                           [--name]
     *                           [--query-examples]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_synapse_workspace.show = function () {
        return new az_synapse_workspace_show_command_builder("az synapse workspace show", 'az_synapse_workspace_show_command_result');
    };
    /**
     * Update a Synapse workspace.
     *
     * Syntax:
     * ```
     * az synapse workspace update [--ids]
     *                             [--name]
     *                             [--no-wait]
     *                             [--resource-group]
     *                             [--sql-admin-login-password]
     *                             [--subscription]
     *                             [--tags]
     * ```
     */
    az_synapse_workspace.update = function () {
        return new az_synapse_workspace_update_command_builder("az synapse workspace update", 'az_synapse_workspace_update_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the workspace is met.
     *
     * Syntax:
     * ```
     * az synapse workspace wait --resource-group
     *                           --workspace-name
     *                           [--created]
     *                           [--custom]
     *                           [--deleted]
     *                           [--exists]
     *                           [--interval]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--updated]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName The name of the workspace.
     */
    az_synapse_workspace.wait = function (resourceGroup, workspaceName) {
        return new az_synapse_workspace_wait_command_builder("az synapse workspace wait", 'az_synapse_workspace_wait_command_result', resourceGroup, workspaceName);
    };
    return az_synapse_workspace;
}());
exports.az_synapse_workspace = az_synapse_workspace;
/** Manage and operate Synapse Workspace, Spark Pool, SQL Pool. */
var az_synapse = /** @class */ (function () {
    function az_synapse() {
    }
    return az_synapse;
}());
exports.az_synapse = az_synapse;
/**
 * Query activity runs based on input filter conditions.
 *
 * Syntax:
 * ```
 * az synapse activity-run query-by-pipeline-run --last-updated-after
 *                                               --last-updated-before
 *                                               --name
 *                                               --run-id
 *                                               --workspace-name
 *                                               [--continuation-token]
 *                                               [--filters]
 *                                               [--order-by]
 *                                               [--subscription]
 * ```
 *
 * @param {string} lastUpdatedAfter The time at or after which the run event was updated in 'ISO 8601' format.
 * @param {string} lastUpdatedBefore The time at or before which the run event was updated in 'ISO 8601' format.
 * @param {string} name The pipeline name.
 * @param {string} runId The pipeline run identifier.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_activity_run_query_by_pipeline_run_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_activity_run_query_by_pipeline_run_command_builder, _super);
    function az_synapse_activity_run_query_by_pipeline_run_command_builder(commandPath, resultDataTypeName, lastUpdatedAfter, lastUpdatedBefore, name, runId, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.lastUpdatedAfter(lastUpdatedAfter);
        _this.lastUpdatedBefore(lastUpdatedBefore);
        _this.name(name);
        _this.runId(runId);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The time at or after which the run event was updated in 'ISO 8601' format. */
    az_synapse_activity_run_query_by_pipeline_run_command_builder.prototype.lastUpdatedAfter = function (value) {
        this.setFlag("--last-updated-after", value);
        return this;
    };
    /** The time at or before which the run event was updated in 'ISO 8601' format. */
    az_synapse_activity_run_query_by_pipeline_run_command_builder.prototype.lastUpdatedBefore = function (value) {
        this.setFlag("--last-updated-before", value);
        return this;
    };
    /** The pipeline name. */
    az_synapse_activity_run_query_by_pipeline_run_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The pipeline run identifier. */
    az_synapse_activity_run_query_by_pipeline_run_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_activity_run_query_by_pipeline_run_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** The continuation token for getting the next page of results. Null for first page. */
    az_synapse_activity_run_query_by_pipeline_run_command_builder.prototype.continuationToken = function (value) {
        this.setFlag("--continuation-token", value);
        return this;
    };
    /** List of filters. */
    az_synapse_activity_run_query_by_pipeline_run_command_builder.prototype.filters = function (value) {
        this.setFlag("--filters", value);
        return this;
    };
    /** List of OrderBy option. */
    az_synapse_activity_run_query_by_pipeline_run_command_builder.prototype.orderBy = function (value) {
        this.setFlag("--order-by", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_activity_run_query_by_pipeline_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_activity_run_query_by_pipeline_run_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a data flow.
 *
 * Syntax:
 * ```
 * az synapse data-flow create --file
 *                             --name
 *                             --workspace-name
 *                             [--no-wait]
 *                             [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The data flow name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_data_flow_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_data_flow_create_command_builder, _super);
    function az_synapse_data_flow_create_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_data_flow_create_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The data flow name. */
    az_synapse_data_flow_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_data_flow_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_data_flow_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_data_flow_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_data_flow_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a data flow.
 *
 * Syntax:
 * ```
 * az synapse data-flow delete --name
 *                             --workspace-name
 *                             [--no-wait]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} name The data flow name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_data_flow_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_data_flow_delete_command_builder, _super);
    function az_synapse_data_flow_delete_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The data flow name. */
    az_synapse_data_flow_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_data_flow_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_data_flow_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_data_flow_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_data_flow_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_data_flow_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List data flows.
 *
 * Syntax:
 * ```
 * az synapse data-flow list --workspace-name
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_data_flow_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_data_flow_list_command_builder, _super);
    function az_synapse_data_flow_list_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The workspace name. */
    az_synapse_data_flow_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_data_flow_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_data_flow_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_data_flow_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set an exist data flow.
 *
 * Syntax:
 * ```
 * az synapse data-flow set --file
 *                          --name
 *                          --workspace-name
 *                          [--no-wait]
 *                          [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The data flow name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_data_flow_set_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_data_flow_set_command_builder, _super);
    function az_synapse_data_flow_set_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_data_flow_set_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The data flow name. */
    az_synapse_data_flow_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_data_flow_set_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_data_flow_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_data_flow_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_data_flow_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a data flow.
 *
 * Syntax:
 * ```
 * az synapse data-flow show --name
 *                           --workspace-name
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The data flow name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_data_flow_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_data_flow_show_command_builder, _super);
    function az_synapse_data_flow_show_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The data flow name. */
    az_synapse_data_flow_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_data_flow_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_data_flow_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_data_flow_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_data_flow_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a dataset.
 *
 * Syntax:
 * ```
 * az synapse dataset create --file
 *                           --name
 *                           --workspace-name
 *                           [--no-wait]
 *                           [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The dataset name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_dataset_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_dataset_create_command_builder, _super);
    function az_synapse_dataset_create_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_dataset_create_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The dataset name. */
    az_synapse_dataset_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_dataset_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_dataset_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_dataset_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_dataset_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a dataset.
 *
 * Syntax:
 * ```
 * az synapse dataset delete --name
 *                           --workspace-name
 *                           [--no-wait]
 *                           [--subscription]
 *                           [--yes]
 * ```
 *
 * @param {string} name The dataset name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_dataset_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_dataset_delete_command_builder, _super);
    function az_synapse_dataset_delete_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The dataset name. */
    az_synapse_dataset_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_dataset_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_dataset_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_dataset_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_dataset_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_dataset_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List datasets.
 *
 * Syntax:
 * ```
 * az synapse dataset list --workspace-name
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_dataset_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_dataset_list_command_builder, _super);
    function az_synapse_dataset_list_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The workspace name. */
    az_synapse_dataset_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_dataset_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_dataset_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_dataset_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set an exist dataset.
 *
 * Syntax:
 * ```
 * az synapse dataset set --file
 *                        --name
 *                        --workspace-name
 *                        [--no-wait]
 *                        [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The dataset name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_dataset_set_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_dataset_set_command_builder, _super);
    function az_synapse_dataset_set_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_dataset_set_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The dataset name. */
    az_synapse_dataset_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_dataset_set_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_dataset_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_dataset_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_dataset_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a dataset.
 *
 * Syntax:
 * ```
 * az synapse dataset show --name
 *                         --workspace-name
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The dataset name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_dataset_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_dataset_show_command_builder, _super);
    function az_synapse_dataset_show_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The dataset name. */
    az_synapse_dataset_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_dataset_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_dataset_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_dataset_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_dataset_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a linked service.
 *
 * Syntax:
 * ```
 * az synapse linked-service create --file
 *                                  --name
 *                                  --workspace-name
 *                                  [--no-wait]
 *                                  [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The linked service name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_linked_service_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_linked_service_create_command_builder, _super);
    function az_synapse_linked_service_create_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_linked_service_create_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The linked service name. */
    az_synapse_linked_service_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_linked_service_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_linked_service_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_linked_service_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_linked_service_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a linked service.
 *
 * Syntax:
 * ```
 * az synapse linked-service delete --name
 *                                  --workspace-name
 *                                  [--no-wait]
 *                                  [--subscription]
 *                                  [--yes]
 * ```
 *
 * @param {string} name The linked service name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_linked_service_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_linked_service_delete_command_builder, _super);
    function az_synapse_linked_service_delete_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The linked service name. */
    az_synapse_linked_service_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_linked_service_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_linked_service_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_linked_service_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_linked_service_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_linked_service_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List linked services.
 *
 * Syntax:
 * ```
 * az synapse linked-service list --workspace-name
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_linked_service_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_linked_service_list_command_builder, _super);
    function az_synapse_linked_service_list_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The workspace name. */
    az_synapse_linked_service_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_linked_service_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_linked_service_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_linked_service_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set an exist linked service.
 *
 * Syntax:
 * ```
 * az synapse linked-service set --file
 *                               --name
 *                               --workspace-name
 *                               [--no-wait]
 *                               [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The linked service name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_linked_service_set_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_linked_service_set_command_builder, _super);
    function az_synapse_linked_service_set_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_linked_service_set_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The linked service name. */
    az_synapse_linked_service_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_linked_service_set_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_linked_service_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_linked_service_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_linked_service_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a linked service.
 *
 * Syntax:
 * ```
 * az synapse linked-service show --name
 *                                --workspace-name
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The linked service name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_linked_service_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_linked_service_show_command_builder, _super);
    function az_synapse_linked_service_show_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The linked service name. */
    az_synapse_linked_service_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_linked_service_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_linked_service_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_linked_service_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_linked_service_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a notebook.
 *
 * Syntax:
 * ```
 * az synapse notebook create --file
 *                            --name
 *                            --workspace-name
 *                            [--executor-count]
 *                            [--executor-size {Large, Medium, Small}]
 *                            [--no-wait]
 *                            [--spark-pool-name]
 *                            [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The notebook name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_notebook_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_notebook_create_command_builder, _super);
    function az_synapse_notebook_create_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_notebook_create_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The notebook name. */
    az_synapse_notebook_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_notebook_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Number of executors to be allocated in the specified Spark pool for the job. */
    az_synapse_notebook_create_command_builder.prototype.executorCount = function (value) {
        this.setFlag("--executor-count", value);
        return this;
    };
    /** Number of core and memory to be used for executors allocated in the specified Spark pool for the job. */
    az_synapse_notebook_create_command_builder.prototype.executorSize = function (value) {
        this.setFlag("--executor-size", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_notebook_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_notebook_create_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_notebook_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_notebook_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a notebook.
 *
 * Syntax:
 * ```
 * az synapse notebook delete --name
 *                            --workspace-name
 *                            [--no-wait]
 *                            [--subscription]
 *                            [--yes]
 * ```
 *
 * @param {string} name The notebook name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_notebook_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_notebook_delete_command_builder, _super);
    function az_synapse_notebook_delete_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The notebook name. */
    az_synapse_notebook_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_notebook_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_notebook_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_notebook_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_notebook_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_notebook_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Export notebooks.
 *
 * Syntax:
 * ```
 * az synapse notebook export --output-folder
 *                            --workspace-name
 *                            [--name]
 *                            [--subscription]
 * ```
 *
 * @param {string} outputFolder The folder where the notebook should be placed.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_notebook_export_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_notebook_export_command_builder, _super);
    function az_synapse_notebook_export_command_builder(commandPath, resultDataTypeName, outputFolder, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.outputFolder(outputFolder);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The folder where the notebook should be placed. */
    az_synapse_notebook_export_command_builder.prototype.outputFolder = function (value) {
        this.setFlag("--output-folder", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_notebook_export_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** The notebook name. */
    az_synapse_notebook_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_notebook_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_notebook_export_command_builder;
}(base_1.CommandBuilder));
/**
 * Import a notebook.
 *
 * Syntax:
 * ```
 * az synapse notebook import --file
 *                            --name
 *                            --workspace-name
 *                            [--executor-count]
 *                            [--executor-size {Large, Medium, Small}]
 *                            [--no-wait]
 *                            [--spark-pool-name]
 *                            [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The notebook name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_notebook_import_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_notebook_import_command_builder, _super);
    function az_synapse_notebook_import_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_notebook_import_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The notebook name. */
    az_synapse_notebook_import_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_notebook_import_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Number of executors to be allocated in the specified Spark pool for the job. */
    az_synapse_notebook_import_command_builder.prototype.executorCount = function (value) {
        this.setFlag("--executor-count", value);
        return this;
    };
    /** Number of core and memory to be used for executors allocated in the specified Spark pool for the job. */
    az_synapse_notebook_import_command_builder.prototype.executorSize = function (value) {
        this.setFlag("--executor-size", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_notebook_import_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_notebook_import_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_notebook_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_notebook_import_command_builder;
}(base_1.CommandBuilder));
/**
 * List notebooks.
 *
 * Syntax:
 * ```
 * az synapse notebook list --workspace-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_notebook_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_notebook_list_command_builder, _super);
    function az_synapse_notebook_list_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The workspace name. */
    az_synapse_notebook_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_notebook_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_notebook_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_notebook_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set an exist notebook.
 *
 * Syntax:
 * ```
 * az synapse notebook set --file
 *                         --name
 *                         --workspace-name
 *                         [--executor-count]
 *                         [--executor-size {Large, Medium, Small}]
 *                         [--no-wait]
 *                         [--spark-pool-name]
 *                         [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The notebook name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_notebook_set_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_notebook_set_command_builder, _super);
    function az_synapse_notebook_set_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_notebook_set_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The notebook name. */
    az_synapse_notebook_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_notebook_set_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Number of executors to be allocated in the specified Spark pool for the job. */
    az_synapse_notebook_set_command_builder.prototype.executorCount = function (value) {
        this.setFlag("--executor-count", value);
        return this;
    };
    /** Number of core and memory to be used for executors allocated in the specified Spark pool for the job. */
    az_synapse_notebook_set_command_builder.prototype.executorSize = function (value) {
        this.setFlag("--executor-size", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_notebook_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_notebook_set_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_notebook_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_notebook_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a notebook.
 *
 * Syntax:
 * ```
 * az synapse notebook show --name
 *                          --workspace-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The notebook name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_notebook_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_notebook_show_command_builder, _super);
    function az_synapse_notebook_show_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The notebook name. */
    az_synapse_notebook_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_notebook_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_notebook_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_notebook_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_notebook_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancel a pipeline run by its run ID.
 *
 * Syntax:
 * ```
 * az synapse pipeline-run cancel --run-id
 *                                --workspace-name
 *                                [--is-recursive {false, true}]
 *                                [--subscription]
 *                                [--yes]
 * ```
 *
 * @param {string} runId The pipeline run identifier.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_pipeline_run_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_pipeline_run_cancel_command_builder, _super);
    function az_synapse_pipeline_run_cancel_command_builder(commandPath, resultDataTypeName, runId, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.runId(runId);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The pipeline run identifier. */
    az_synapse_pipeline_run_cancel_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_pipeline_run_cancel_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** If true, cancel all the Child pipelines that are triggered by the current pipeline. */
    az_synapse_pipeline_run_cancel_command_builder.prototype.isRecursive = function (value) {
        this.setFlag("--is-recursive", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_pipeline_run_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_pipeline_run_cancel_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_pipeline_run_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Query pipeline runs in the workspace based on input filter conditions.
 *
 * Syntax:
 * ```
 * az synapse pipeline-run query-by-workspace --last-updated-after
 *                                            --last-updated-before
 *                                            --workspace-name
 *                                            [--continuation-token]
 *                                            [--filters]
 *                                            [--order-by]
 *                                            [--subscription]
 * ```
 *
 * @param {string} lastUpdatedAfter The time at or after which the run event was updated in 'ISO 8601' format.
 * @param {string} lastUpdatedBefore The time at or before which the run event was updated in 'ISO 8601' format.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_pipeline_run_query_by_workspace_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_pipeline_run_query_by_workspace_command_builder, _super);
    function az_synapse_pipeline_run_query_by_workspace_command_builder(commandPath, resultDataTypeName, lastUpdatedAfter, lastUpdatedBefore, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.lastUpdatedAfter(lastUpdatedAfter);
        _this.lastUpdatedBefore(lastUpdatedBefore);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The time at or after which the run event was updated in 'ISO 8601' format. */
    az_synapse_pipeline_run_query_by_workspace_command_builder.prototype.lastUpdatedAfter = function (value) {
        this.setFlag("--last-updated-after", value);
        return this;
    };
    /** The time at or before which the run event was updated in 'ISO 8601' format. */
    az_synapse_pipeline_run_query_by_workspace_command_builder.prototype.lastUpdatedBefore = function (value) {
        this.setFlag("--last-updated-before", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_pipeline_run_query_by_workspace_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** The continuation token for getting the next page of results. Null for first page. */
    az_synapse_pipeline_run_query_by_workspace_command_builder.prototype.continuationToken = function (value) {
        this.setFlag("--continuation-token", value);
        return this;
    };
    /** List of filters. */
    az_synapse_pipeline_run_query_by_workspace_command_builder.prototype.filters = function (value) {
        this.setFlag("--filters", value);
        return this;
    };
    /** List of OrderBy option. */
    az_synapse_pipeline_run_query_by_workspace_command_builder.prototype.orderBy = function (value) {
        this.setFlag("--order-by", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_pipeline_run_query_by_workspace_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_pipeline_run_query_by_workspace_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a pipeline run by its run ID.
 *
 * Syntax:
 * ```
 * az synapse pipeline-run show --run-id
 *                              --workspace-name
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} runId The pipeline run identifier.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_pipeline_run_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_pipeline_run_show_command_builder, _super);
    function az_synapse_pipeline_run_show_command_builder(commandPath, resultDataTypeName, runId, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.runId(runId);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The pipeline run identifier. */
    az_synapse_pipeline_run_show_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_pipeline_run_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_pipeline_run_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_pipeline_run_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_pipeline_run_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a pipeline.
 *
 * Syntax:
 * ```
 * az synapse pipeline create --file
 *                            --name
 *                            --workspace-name
 *                            [--no-wait]
 *                            [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The pipeline name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_pipeline_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_pipeline_create_command_builder, _super);
    function az_synapse_pipeline_create_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_pipeline_create_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The pipeline name. */
    az_synapse_pipeline_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_pipeline_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_pipeline_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_pipeline_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_pipeline_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a run of a pipeline.
 *
 * Syntax:
 * ```
 * az synapse pipeline create-run --name
 *                                --workspace-name
 *                                [--is-recovery {false, true}]
 *                                [--parameters]
 *                                [--reference-pipeline-run-id]
 *                                [--start-activity-name]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The pipeline name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_pipeline_create_run_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_pipeline_create_run_command_builder, _super);
    function az_synapse_pipeline_create_run_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The pipeline name. */
    az_synapse_pipeline_create_run_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_pipeline_create_run_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId. */
    az_synapse_pipeline_create_run_command_builder.prototype.isRecovery = function (value) {
        this.setFlag("--is-recovery", value.toString());
        return this;
    };
    /** Parameters for pipeline run. Can be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_pipeline_create_run_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** The pipeline run ID for rerun. If run ID is specified, the parameters of the specified run will be used to create a new run. */
    az_synapse_pipeline_create_run_command_builder.prototype.referencePipelineRunId = function (value) {
        this.setFlag("--reference-pipeline-run-id", value);
        return this;
    };
    /** In recovery mode, the rerun will start from this activity. If not specified, all activities will run. */
    az_synapse_pipeline_create_run_command_builder.prototype.startActivityName = function (value) {
        this.setFlag("--start-activity-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_pipeline_create_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_pipeline_create_run_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a pipeline.
 *
 * Syntax:
 * ```
 * az synapse pipeline delete --name
 *                            --workspace-name
 *                            [--no-wait]
 *                            [--subscription]
 *                            [--yes]
 * ```
 *
 * @param {string} name The pipeline name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_pipeline_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_pipeline_delete_command_builder, _super);
    function az_synapse_pipeline_delete_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The pipeline name. */
    az_synapse_pipeline_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_pipeline_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_pipeline_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_pipeline_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_pipeline_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_pipeline_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List pipelines.
 *
 * Syntax:
 * ```
 * az synapse pipeline list --workspace-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_pipeline_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_pipeline_list_command_builder, _super);
    function az_synapse_pipeline_list_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The workspace name. */
    az_synapse_pipeline_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_pipeline_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_pipeline_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_pipeline_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set an exist pipeline.
 *
 * Syntax:
 * ```
 * az synapse pipeline set --file
 *                         --name
 *                         --workspace-name
 *                         [--no-wait]
 *                         [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The pipeline name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_pipeline_set_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_pipeline_set_command_builder, _super);
    function az_synapse_pipeline_set_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_pipeline_set_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The pipeline name. */
    az_synapse_pipeline_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_pipeline_set_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_pipeline_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_pipeline_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_pipeline_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a pipeline.
 *
 * Syntax:
 * ```
 * az synapse pipeline show --name
 *                          --workspace-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The pipeline name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_pipeline_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_pipeline_show_command_builder, _super);
    function az_synapse_pipeline_show_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The pipeline name. */
    az_synapse_pipeline_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_pipeline_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_pipeline_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_pipeline_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_pipeline_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a role assignment.
 *
 * Syntax:
 * ```
 * az synapse role assignment create --assignee
 *                                   --role
 *                                   --workspace-name
 *                                   [--subscription]
 * ```
 *
 * @param {string} assignee Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name.
 * @param {string} role The role name/id that is assigned to the principal.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_role_assignment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_role_assignment_create_command_builder, _super);
    function az_synapse_role_assignment_create_command_builder(commandPath, resultDataTypeName, assignee, role, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.assignee(assignee);
        _this.role(role);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name. */
    az_synapse_role_assignment_create_command_builder.prototype.assignee = function (value) {
        this.setFlag("--assignee", value);
        return this;
    };
    /** The role name/id that is assigned to the principal. */
    az_synapse_role_assignment_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_role_assignment_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_role_assignment_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_role_assignment_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete role assignments of workspace.
 *
 * Syntax:
 * ```
 * az synapse role assignment delete --workspace-name
 *                                   [--assignee]
 *                                   [--ids]
 *                                   [--role]
 *                                   [--subscription]
 *                                   [--yes]
 * ```
 *
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_role_assignment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_role_assignment_delete_command_builder, _super);
    function az_synapse_role_assignment_delete_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The workspace name. */
    az_synapse_role_assignment_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name. */
    az_synapse_role_assignment_delete_command_builder.prototype.assignee = function (value) {
        this.setFlag("--assignee", value);
        return this;
    };
    /** Space-separated role assignment ids. You should not provide --role or --assignee when --ids is provided. */
    az_synapse_role_assignment_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The role name/id that is assigned to the principal. */
    az_synapse_role_assignment_delete_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_role_assignment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_role_assignment_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_role_assignment_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List role assignments.
 *
 * Syntax:
 * ```
 * az synapse role assignment list --workspace-name
 *                                 [--assignee]
 *                                 [--query-examples]
 *                                 [--role]
 *                                 [--subscription]
 * ```
 *
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_role_assignment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_role_assignment_list_command_builder, _super);
    function az_synapse_role_assignment_list_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The workspace name. */
    az_synapse_role_assignment_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name. */
    az_synapse_role_assignment_list_command_builder.prototype.assignee = function (value) {
        this.setFlag("--assignee", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_role_assignment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The role name/id that is assigned to the principal. */
    az_synapse_role_assignment_list_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_role_assignment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_role_assignment_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a role assignment by id.
 *
 * Syntax:
 * ```
 * az synapse role assignment show --id
 *                                 --workspace-name
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} id Id of the role that is assigned to the principal.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_role_assignment_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_role_assignment_show_command_builder, _super);
    function az_synapse_role_assignment_show_command_builder(commandPath, resultDataTypeName, id, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Id of the role that is assigned to the principal. */
    az_synapse_role_assignment_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_role_assignment_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_role_assignment_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_role_assignment_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_role_assignment_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List role definitions.
 *
 * Syntax:
 * ```
 * az synapse role definition list --workspace-name
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_role_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_role_definition_list_command_builder, _super);
    function az_synapse_role_definition_list_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The workspace name. */
    az_synapse_role_definition_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_role_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_role_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_role_definition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get role definition by role id/name.
 *
 * Syntax:
 * ```
 * az synapse role definition show --role
 *                                 --workspace-name
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} role The role name/id that is assigned to the principal.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_role_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_role_definition_show_command_builder, _super);
    function az_synapse_role_definition_show_command_builder(commandPath, resultDataTypeName, role, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.role(role);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The role name/id that is assigned to the principal. */
    az_synapse_role_definition_show_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_role_definition_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_role_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_role_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_role_definition_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancel a Spark job.
 *
 * Syntax:
 * ```
 * az synapse spark job cancel --livy-id
 *                             --spark-pool-name
 *                             --workspace-name
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} livyId The id of the Spark job.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_job_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_job_cancel_command_builder, _super);
    function az_synapse_spark_job_cancel_command_builder(commandPath, resultDataTypeName, livyId, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.livyId(livyId);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The id of the Spark job. */
    az_synapse_spark_job_cancel_command_builder.prototype.livyId = function (value) {
        this.setFlag("--livy-id", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_job_cancel_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_job_cancel_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_job_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_spark_job_cancel_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_spark_job_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * List all Spark jobs.
 *
 * Syntax:
 * ```
 * az synapse spark job list --spark-pool-name
 *                           --workspace-name
 *                           [--from-index]
 *                           [--query-examples]
 *                           [--size]
 *                           [--subscription]
 * ```
 *
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_job_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_job_list_command_builder, _super);
    function az_synapse_spark_job_list_command_builder(commandPath, resultDataTypeName, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The name of the Spark pool. */
    az_synapse_spark_job_list_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_job_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Optional parameter specifying which index the list should begin from. */
    az_synapse_spark_job_list_command_builder.prototype.fromIndex = function (value) {
        this.setFlag("--from-index", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_spark_job_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The size of the returned list.By default it is 20 and that is the maximum. */
    az_synapse_spark_job_list_command_builder.prototype.size = function (value) {
        this.setFlag("--size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_job_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_spark_job_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a Spark job.
 *
 * Syntax:
 * ```
 * az synapse spark job show --livy-id
 *                           --spark-pool-name
 *                           --workspace-name
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} livyId The id of the Spark job.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_job_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_job_show_command_builder, _super);
    function az_synapse_spark_job_show_command_builder(commandPath, resultDataTypeName, livyId, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.livyId(livyId);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The id of the Spark job. */
    az_synapse_spark_job_show_command_builder.prototype.livyId = function (value) {
        this.setFlag("--livy-id", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_job_show_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_job_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_spark_job_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_job_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_spark_job_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Submit a Spark job.
 *
 * Syntax:
 * ```
 * az synapse spark job submit --executor-size {Large, Medium, Small}
 *                             --executors
 *                             --main-class-name
 *                             --main-definition-file
 *                             --name
 *                             --spark-pool-name
 *                             --workspace-name
 *                             [--archives]
 *                             [--arguments]
 *                             [--configuration]
 *                             [--language {CSharp, PySpark, Python, Scala, Spark, SparkDotNet}]
 *                             [--reference-files]
 *                             [--subscription]
 *                             [--tags]
 * ```
 *
 * @param {'Large' | 'Medium' | 'Small'} executorSize The executor size.
 * @param {string} executors The number of executors.
 * @param {string} mainClassName The fully-qualified identifier or the main class that is in the main definition file.
 * @param {string} mainDefinitionFile The main file used for the job.
 * @param {string} name The Spark job name.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_job_submit_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_job_submit_command_builder, _super);
    function az_synapse_spark_job_submit_command_builder(commandPath, resultDataTypeName, executorSize, executors, mainClassName, mainDefinitionFile, name, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.executorSize(executorSize);
        _this.executors(executors);
        _this.mainClassName(mainClassName);
        _this.mainDefinitionFile(mainDefinitionFile);
        _this.name(name);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The executor size. */
    az_synapse_spark_job_submit_command_builder.prototype.executorSize = function (value) {
        this.setFlag("--executor-size", value);
        return this;
    };
    /** The number of executors. */
    az_synapse_spark_job_submit_command_builder.prototype.executors = function (value) {
        this.setFlag("--executors", value);
        return this;
    };
    /** The fully-qualified identifier or the main class that is in the main definition file. */
    az_synapse_spark_job_submit_command_builder.prototype.mainClassName = function (value) {
        this.setFlag("--main-class-name", value);
        return this;
    };
    /** The main file used for the job. */
    az_synapse_spark_job_submit_command_builder.prototype.mainDefinitionFile = function (value) {
        this.setFlag("--main-definition-file", value);
        return this;
    };
    /** The Spark job name. */
    az_synapse_spark_job_submit_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_job_submit_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_job_submit_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** The array of archives. */
    az_synapse_spark_job_submit_command_builder.prototype.archives = function (value) {
        this.setFlag("--archives", value);
        return this;
    };
    /** Optional arguments to the job (Note: please use storage URIs for file arguments). */
    az_synapse_spark_job_submit_command_builder.prototype.arguments = function (value) {
        this.setFlag("--arguments", value);
        return this;
    };
    /** The configuration of Spark job. */
    az_synapse_spark_job_submit_command_builder.prototype.configuration = function (value) {
        this.setFlag("--configuration", value);
        return this;
    };
    /** The Spark job language. */
    az_synapse_spark_job_submit_command_builder.prototype.language = function (value) {
        this.setFlag("--language", value);
        return this;
    };
    /** Additional files used for reference in the main definition file. */
    az_synapse_spark_job_submit_command_builder.prototype.referenceFiles = function (value) {
        this.setFlag("--reference-files", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_job_submit_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_synapse_spark_job_submit_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_synapse_spark_job_submit_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Spark pool.
 *
 * Syntax:
 * ```
 * az synapse spark pool create --name
 *                              --node-count
 *                              --node-size {Large, Medium, Small}
 *                              --resource-group
 *                              --spark-version
 *                              --workspace-name
 *                              [--delay]
 *                              [--enable-auto-pause {false, true}]
 *                              [--enable-auto-scale {false, true}]
 *                              [--library-requirements]
 *                              [--max-node-count]
 *                              [--min-node-count]
 *                              [--no-wait]
 *                              [--node-size-family]
 *                              [--spark-events-folder]
 *                              [--spark-log-folder]
 *                              [--subscription]
 *                              [--tags]
 * ```
 *
 * @param {string} name The name of the Spark pool.
 * @param {string} nodeCount The number of node.
 * @param {'Large' | 'Medium' | 'Small'} nodeSize The node size.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sparkVersion The supported Spark version is 2.4 now.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_spark_pool_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_pool_create_command_builder, _super);
    function az_synapse_spark_pool_create_command_builder(commandPath, resultDataTypeName, name, nodeCount, nodeSize, resourceGroup, sparkVersion, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.nodeCount(nodeCount);
        _this.nodeSize(nodeSize);
        _this.resourceGroup(resourceGroup);
        _this.sparkVersion(sparkVersion);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The name of the Spark pool. */
    az_synapse_spark_pool_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The number of node. */
    az_synapse_spark_pool_create_command_builder.prototype.nodeCount = function (value) {
        this.setFlag("--node-count", value);
        return this;
    };
    /** The node size. */
    az_synapse_spark_pool_create_command_builder.prototype.nodeSize = function (value) {
        this.setFlag("--node-size", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_spark_pool_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The supported Spark version is 2.4 now. */
    az_synapse_spark_pool_create_command_builder.prototype.sparkVersion = function (value) {
        this.setFlag("--spark-version", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_spark_pool_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** The delay time whose unit is minute. */
    az_synapse_spark_pool_create_command_builder.prototype.delay = function (value) {
        this.setFlag("--delay", value);
        return this;
    };
    /** The flag of enabling auto pause. */
    az_synapse_spark_pool_create_command_builder.prototype.enableAutoPause = function (value) {
        this.setFlag("--enable-auto-pause", value.toString());
        return this;
    };
    /** The flag of enabling auto scale. */
    az_synapse_spark_pool_create_command_builder.prototype.enableAutoScale = function (value) {
        this.setFlag("--enable-auto-scale", value.toString());
        return this;
    };
    /** The library requirements file. */
    az_synapse_spark_pool_create_command_builder.prototype.libraryRequirements = function (value) {
        this.setFlag("--library-requirements", value);
        return this;
    };
    /** The max node count. */
    az_synapse_spark_pool_create_command_builder.prototype.maxNodeCount = function (value) {
        this.setFlag("--max-node-count", value);
        return this;
    };
    /** The min node count. */
    az_synapse_spark_pool_create_command_builder.prototype.minNodeCount = function (value) {
        this.setFlag("--min-node-count", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_spark_pool_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The node size family. */
    az_synapse_spark_pool_create_command_builder.prototype.nodeSizeFamily = function (value) {
        this.setFlag("--node-size-family", value);
        return this;
    };
    /** The Spark events folder. */
    az_synapse_spark_pool_create_command_builder.prototype.sparkEventsFolder = function (value) {
        this.setFlag("--spark-events-folder", value);
        return this;
    };
    /** The default Spark log folder. */
    az_synapse_spark_pool_create_command_builder.prototype.sparkLogFolder = function (value) {
        this.setFlag("--spark-log-folder", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_pool_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_synapse_spark_pool_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_synapse_spark_pool_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Spark pool.
 *
 * Syntax:
 * ```
 * az synapse spark pool delete [--ids]
 *                              [--name]
 *                              [--no-wait]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--workspace-name]
 *                              [--yes]
 * ```
 */
var az_synapse_spark_pool_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_pool_delete_command_builder, _super);
    function az_synapse_spark_pool_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_spark_pool_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_pool_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_spark_pool_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_spark_pool_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_pool_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_spark_pool_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_spark_pool_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_spark_pool_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all Spark pools.
 *
 * Syntax:
 * ```
 * az synapse spark pool list --resource-group
 *                            --workspace-name
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_spark_pool_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_pool_list_command_builder, _super);
    function az_synapse_spark_pool_list_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_spark_pool_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_spark_pool_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_spark_pool_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_pool_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_spark_pool_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a Spark pool.
 *
 * Syntax:
 * ```
 * az synapse spark pool show [--ids]
 *                            [--name]
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--workspace-name]
 * ```
 */
var az_synapse_spark_pool_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_pool_show_command_builder, _super);
    function az_synapse_spark_pool_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_spark_pool_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_pool_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_spark_pool_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_spark_pool_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_pool_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_spark_pool_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_spark_pool_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the Spark pool.
 *
 * Syntax:
 * ```
 * az synapse spark pool update [--delay]
 *                              [--enable-auto-pause {false, true}]
 *                              [--enable-auto-scale {false, true}]
 *                              [--force {false, true}]
 *                              [--ids]
 *                              [--library-requirements]
 *                              [--max-node-count]
 *                              [--min-node-count]
 *                              [--name]
 *                              [--no-wait]
 *                              [--node-count]
 *                              [--node-size {Large, Medium, Small}]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--tags]
 *                              [--workspace-name]
 * ```
 */
var az_synapse_spark_pool_update_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_pool_update_command_builder, _super);
    function az_synapse_spark_pool_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The delay time whose unit is minute. */
    az_synapse_spark_pool_update_command_builder.prototype.delay = function (value) {
        this.setFlag("--delay", value);
        return this;
    };
    /** The flag of enabling auto pause. */
    az_synapse_spark_pool_update_command_builder.prototype.enableAutoPause = function (value) {
        this.setFlag("--enable-auto-pause", value.toString());
        return this;
    };
    /** The flag of enabling auto scale. */
    az_synapse_spark_pool_update_command_builder.prototype.enableAutoScale = function (value) {
        this.setFlag("--enable-auto-scale", value.toString());
        return this;
    };
    /** The flag of force operation. */
    az_synapse_spark_pool_update_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_spark_pool_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The library requirements file. */
    az_synapse_spark_pool_update_command_builder.prototype.libraryRequirements = function (value) {
        this.setFlag("--library-requirements", value);
        return this;
    };
    /** The max node count. */
    az_synapse_spark_pool_update_command_builder.prototype.maxNodeCount = function (value) {
        this.setFlag("--max-node-count", value);
        return this;
    };
    /** The min node count. */
    az_synapse_spark_pool_update_command_builder.prototype.minNodeCount = function (value) {
        this.setFlag("--min-node-count", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_pool_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_spark_pool_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The number of node. */
    az_synapse_spark_pool_update_command_builder.prototype.nodeCount = function (value) {
        this.setFlag("--node-count", value);
        return this;
    };
    /** The node size. */
    az_synapse_spark_pool_update_command_builder.prototype.nodeSize = function (value) {
        this.setFlag("--node-size", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_spark_pool_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_pool_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_synapse_spark_pool_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_spark_pool_update_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_spark_pool_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of a Spark pool is met.
 *
 * Syntax:
 * ```
 * az synapse spark pool wait --big-data-pool-name
 *                            [--created]
 *                            [--custom]
 *                            [--deleted]
 *                            [--exists]
 *                            [--ids]
 *                            [--interval]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--timeout]
 *                            [--updated]
 *                            [--workspace-name]
 * ```
 *
 * @param {string} bigDataPoolName Big Data pool name.
 */
var az_synapse_spark_pool_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_pool_wait_command_builder, _super);
    function az_synapse_spark_pool_wait_command_builder(commandPath, resultDataTypeName, bigDataPoolName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.bigDataPoolName(bigDataPoolName);
        return _this;
    }
    /** Big Data pool name. */
    az_synapse_spark_pool_wait_command_builder.prototype.bigDataPoolName = function (value) {
        this.setFlag("--big-data-pool-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_synapse_spark_pool_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_synapse_spark_pool_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_synapse_spark_pool_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_synapse_spark_pool_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_spark_pool_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_synapse_spark_pool_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_spark_pool_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_pool_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_synapse_spark_pool_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_synapse_spark_pool_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_spark_pool_wait_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_spark_pool_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancel a Spark session.
 *
 * Syntax:
 * ```
 * az synapse spark session cancel --livy-id
 *                                 --spark-pool-name
 *                                 --workspace-name
 *                                 [--subscription]
 *                                 [--yes]
 * ```
 *
 * @param {string} livyId The id of the Spark session job.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_session_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_session_cancel_command_builder, _super);
    function az_synapse_spark_session_cancel_command_builder(commandPath, resultDataTypeName, livyId, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.livyId(livyId);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The id of the Spark session job. */
    az_synapse_spark_session_cancel_command_builder.prototype.livyId = function (value) {
        this.setFlag("--livy-id", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_session_cancel_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_session_cancel_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_session_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_spark_session_cancel_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_spark_session_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Spark session.
 *
 * Syntax:
 * ```
 * az synapse spark session create --executor-size {Large, Medium, Small}
 *                                 --executors
 *                                 --name
 *                                 --spark-pool-name
 *                                 --workspace-name
 *                                 [--configuration]
 *                                 [--reference-files]
 *                                 [--subscription]
 *                                 [--tags]
 * ```
 *
 * @param {'Large' | 'Medium' | 'Small'} executorSize The executor size.
 * @param {string} executors The number of executors.
 * @param {string} name The Spark session name.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_session_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_session_create_command_builder, _super);
    function az_synapse_spark_session_create_command_builder(commandPath, resultDataTypeName, executorSize, executors, name, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.executorSize(executorSize);
        _this.executors(executors);
        _this.name(name);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The executor size. */
    az_synapse_spark_session_create_command_builder.prototype.executorSize = function (value) {
        this.setFlag("--executor-size", value);
        return this;
    };
    /** The number of executors. */
    az_synapse_spark_session_create_command_builder.prototype.executors = function (value) {
        this.setFlag("--executors", value);
        return this;
    };
    /** The Spark session name. */
    az_synapse_spark_session_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_session_create_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_session_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** The configuration of Spark session. */
    az_synapse_spark_session_create_command_builder.prototype.configuration = function (value) {
        this.setFlag("--configuration", value);
        return this;
    };
    /** Additional files used for reference in the main definition file. */
    az_synapse_spark_session_create_command_builder.prototype.referenceFiles = function (value) {
        this.setFlag("--reference-files", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_session_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_synapse_spark_session_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_synapse_spark_session_create_command_builder;
}(base_1.CommandBuilder));
/**
 * List all Spark sessions.
 *
 * Syntax:
 * ```
 * az synapse spark session list --spark-pool-name
 *                               --workspace-name
 *                               [--from-index]
 *                               [--query-examples]
 *                               [--size]
 *                               [--subscription]
 * ```
 *
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_session_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_session_list_command_builder, _super);
    function az_synapse_spark_session_list_command_builder(commandPath, resultDataTypeName, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The name of the Spark pool. */
    az_synapse_spark_session_list_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_session_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Optional parameter specifying which index the list should begin from. */
    az_synapse_spark_session_list_command_builder.prototype.fromIndex = function (value) {
        this.setFlag("--from-index", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_spark_session_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The size of the returned list.By default it is 20 and that is the maximum. */
    az_synapse_spark_session_list_command_builder.prototype.size = function (value) {
        this.setFlag("--size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_session_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_spark_session_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Reset a Spark session timeout time.
 *
 * Syntax:
 * ```
 * az synapse spark session reset-timeout --livy-id
 *                                        --spark-pool-name
 *                                        --workspace-name
 *                                        [--subscription]
 * ```
 *
 * @param {string} livyId The id of the Spark session job.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_session_reset_timeout_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_session_reset_timeout_command_builder, _super);
    function az_synapse_spark_session_reset_timeout_command_builder(commandPath, resultDataTypeName, livyId, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.livyId(livyId);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The id of the Spark session job. */
    az_synapse_spark_session_reset_timeout_command_builder.prototype.livyId = function (value) {
        this.setFlag("--livy-id", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_session_reset_timeout_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_session_reset_timeout_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_session_reset_timeout_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_spark_session_reset_timeout_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a Spark session.
 *
 * Syntax:
 * ```
 * az synapse spark session show --livy-id
 *                               --spark-pool-name
 *                               --workspace-name
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} livyId The id of the Spark session job.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_session_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_session_show_command_builder, _super);
    function az_synapse_spark_session_show_command_builder(commandPath, resultDataTypeName, livyId, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.livyId(livyId);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The id of the Spark session job. */
    az_synapse_spark_session_show_command_builder.prototype.livyId = function (value) {
        this.setFlag("--livy-id", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_session_show_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_session_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_spark_session_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_session_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_spark_session_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancel a Spark statement.
 *
 * Syntax:
 * ```
 * az synapse spark statement cancel --livy-id
 *                                   --session-id
 *                                   --spark-pool-name
 *                                   --workspace-name
 *                                   [--subscription]
 *                                   [--yes]
 * ```
 *
 * @param {string} livyId The id of the statement.
 * @param {string} sessionId The id of Spark session.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_statement_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_statement_cancel_command_builder, _super);
    function az_synapse_spark_statement_cancel_command_builder(commandPath, resultDataTypeName, livyId, sessionId, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.livyId(livyId);
        _this.sessionId(sessionId);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The id of the statement. */
    az_synapse_spark_statement_cancel_command_builder.prototype.livyId = function (value) {
        this.setFlag("--livy-id", value);
        return this;
    };
    /** The id of Spark session. */
    az_synapse_spark_statement_cancel_command_builder.prototype.sessionId = function (value) {
        this.setFlag("--session-id", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_statement_cancel_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_statement_cancel_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_statement_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_spark_statement_cancel_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_spark_statement_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Invoke a Spark statement.
 *
 * Syntax:
 * ```
 * az synapse spark statement invoke --code
 *                                   --language {CSharp, PySpark, Python, SQL, Scala, Spark, SparkDotNet}
 *                                   --session-id
 *                                   --spark-pool-name
 *                                   --workspace-name
 *                                   [--subscription]
 * ```
 *
 * @param {string} code The code of Spark statement. This is either the code contents or use `@<file path>` to load the content from a file.
 * @param {'CSharp' | 'PySpark' | 'Python' | 'SQL' | 'Scala' | 'Spark' | 'SparkDotNet'} language The language of Spark statement.
 * @param {string} sessionId The id of Spark session.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_statement_invoke_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_statement_invoke_command_builder, _super);
    function az_synapse_spark_statement_invoke_command_builder(commandPath, resultDataTypeName, code, language, sessionId, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.code(code);
        _this.language(language);
        _this.sessionId(sessionId);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The code of Spark statement. This is either the code contents or use `@<file path>` to load the content from a file. */
    az_synapse_spark_statement_invoke_command_builder.prototype.code = function (value) {
        this.setFlag("--code", value);
        return this;
    };
    /** The language of Spark statement. */
    az_synapse_spark_statement_invoke_command_builder.prototype.language = function (value) {
        this.setFlag("--language", value);
        return this;
    };
    /** The id of Spark session. */
    az_synapse_spark_statement_invoke_command_builder.prototype.sessionId = function (value) {
        this.setFlag("--session-id", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_statement_invoke_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_statement_invoke_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_statement_invoke_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_spark_statement_invoke_command_builder;
}(base_1.CommandBuilder));
/**
 * List all Spark statements.
 *
 * Syntax:
 * ```
 * az synapse spark statement list --session-id
 *                                 --spark-pool-name
 *                                 --workspace-name
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} sessionId The id of Spark session.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_statement_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_statement_list_command_builder, _super);
    function az_synapse_spark_statement_list_command_builder(commandPath, resultDataTypeName, sessionId, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sessionId(sessionId);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The id of Spark session. */
    az_synapse_spark_statement_list_command_builder.prototype.sessionId = function (value) {
        this.setFlag("--session-id", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_statement_list_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_statement_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_spark_statement_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_statement_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_spark_statement_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a Spark statement.
 *
 * Syntax:
 * ```
 * az synapse spark statement show --livy-id
 *                                 --session-id
 *                                 --spark-pool-name
 *                                 --workspace-name
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} livyId The id of the statement.
 * @param {string} sessionId The id of Spark session.
 * @param {string} sparkPoolName The name of the Spark pool.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_spark_statement_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_spark_statement_show_command_builder, _super);
    function az_synapse_spark_statement_show_command_builder(commandPath, resultDataTypeName, livyId, sessionId, sparkPoolName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.livyId(livyId);
        _this.sessionId(sessionId);
        _this.sparkPoolName(sparkPoolName);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The id of the statement. */
    az_synapse_spark_statement_show_command_builder.prototype.livyId = function (value) {
        this.setFlag("--livy-id", value);
        return this;
    };
    /** The id of Spark session. */
    az_synapse_spark_statement_show_command_builder.prototype.sessionId = function (value) {
        this.setFlag("--session-id", value);
        return this;
    };
    /** The name of the Spark pool. */
    az_synapse_spark_statement_show_command_builder.prototype.sparkPoolName = function (value) {
        this.setFlag("--spark-pool-name", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_spark_statement_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_spark_statement_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_spark_statement_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_spark_statement_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a SQL pool.
 *
 * Syntax:
 * ```
 * az synapse sql pool create --name
 *                            --performance-level
 *                            --resource-group
 *                            --workspace-name
 *                            [--no-wait]
 *                            [--subscription]
 *                            [--tags]
 * ```
 *
 * @param {string} name The SQL pool name.
 * @param {string} performanceLevel The performance level.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_sql_pool_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_sql_pool_create_command_builder, _super);
    function az_synapse_sql_pool_create_command_builder(commandPath, resultDataTypeName, name, performanceLevel, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.performanceLevel(performanceLevel);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The SQL pool name. */
    az_synapse_sql_pool_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The performance level. */
    az_synapse_sql_pool_create_command_builder.prototype.performanceLevel = function (value) {
        this.setFlag("--performance-level", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_sql_pool_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_sql_pool_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_sql_pool_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_sql_pool_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_synapse_sql_pool_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_synapse_sql_pool_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a SQL pool.
 *
 * Syntax:
 * ```
 * az synapse sql pool delete [--ids]
 *                            [--name]
 *                            [--no-wait]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--workspace-name]
 *                            [--yes]
 * ```
 */
var az_synapse_sql_pool_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_sql_pool_delete_command_builder, _super);
    function az_synapse_sql_pool_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_sql_pool_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The SQL pool name. */
    az_synapse_sql_pool_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_sql_pool_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_sql_pool_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_sql_pool_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_sql_pool_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_sql_pool_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_sql_pool_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all SQL pools.
 *
 * Syntax:
 * ```
 * az synapse sql pool list --resource-group
 *                          --workspace-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_sql_pool_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_sql_pool_list_command_builder, _super);
    function az_synapse_sql_pool_list_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_sql_pool_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_sql_pool_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_sql_pool_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_sql_pool_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_sql_pool_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Pause a SQL pool.
 *
 * Syntax:
 * ```
 * az synapse sql pool pause [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 *                           [--workspace-name]
 * ```
 */
var az_synapse_sql_pool_pause_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_sql_pool_pause_command_builder, _super);
    function az_synapse_sql_pool_pause_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_sql_pool_pause_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The SQL pool name. */
    az_synapse_sql_pool_pause_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_sql_pool_pause_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_sql_pool_pause_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_sql_pool_pause_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_sql_pool_pause_command_builder;
}(base_1.CommandBuilder));
/**
 * Resume a SQL pool.
 *
 * Syntax:
 * ```
 * az synapse sql pool resume [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--workspace-name]
 * ```
 */
var az_synapse_sql_pool_resume_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_sql_pool_resume_command_builder, _super);
    function az_synapse_sql_pool_resume_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_sql_pool_resume_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The SQL pool name. */
    az_synapse_sql_pool_resume_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_sql_pool_resume_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_sql_pool_resume_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_sql_pool_resume_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_sql_pool_resume_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a SQL pool.
 *
 * Syntax:
 * ```
 * az synapse sql pool show [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--workspace-name]
 * ```
 */
var az_synapse_sql_pool_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_sql_pool_show_command_builder, _super);
    function az_synapse_sql_pool_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_sql_pool_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The SQL pool name. */
    az_synapse_sql_pool_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_sql_pool_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_sql_pool_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_sql_pool_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_sql_pool_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_sql_pool_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a SQL pool.
 *
 * Syntax:
 * ```
 * az synapse sql pool update [--ids]
 *                            [--name]
 *                            [--performance-level]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--tags]
 *                            [--workspace-name]
 * ```
 */
var az_synapse_sql_pool_update_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_sql_pool_update_command_builder, _super);
    function az_synapse_sql_pool_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_sql_pool_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The SQL pool name. */
    az_synapse_sql_pool_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The performance level. */
    az_synapse_sql_pool_update_command_builder.prototype.performanceLevel = function (value) {
        this.setFlag("--performance-level", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_sql_pool_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_sql_pool_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_synapse_sql_pool_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_sql_pool_update_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_sql_pool_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of a SQL pool is met.
 *
 * Syntax:
 * ```
 * az synapse sql pool wait --sql-pool-name
 *                          [--created]
 *                          [--custom]
 *                          [--deleted]
 *                          [--exists]
 *                          [--ids]
 *                          [--interval]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--timeout]
 *                          [--updated]
 *                          [--workspace-name]
 * ```
 *
 * @param {string} sqlPoolName SQL pool name.
 */
var az_synapse_sql_pool_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_sql_pool_wait_command_builder, _super);
    function az_synapse_sql_pool_wait_command_builder(commandPath, resultDataTypeName, sqlPoolName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sqlPoolName(sqlPoolName);
        return _this;
    }
    /** SQL pool name. */
    az_synapse_sql_pool_wait_command_builder.prototype.sqlPoolName = function (value) {
        this.setFlag("--sql-pool-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_synapse_sql_pool_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_synapse_sql_pool_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_synapse_sql_pool_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_synapse_sql_pool_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_sql_pool_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_synapse_sql_pool_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_sql_pool_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_sql_pool_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_synapse_sql_pool_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_synapse_sql_pool_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_sql_pool_wait_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_sql_pool_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Query trigger runs in the workspace based on input filter conditions.
 *
 * Syntax:
 * ```
 * az synapse trigger-run query-by-workspace --last-updated-after
 *                                           --last-updated-before
 *                                           --workspace-name
 *                                           [--continuation-token]
 *                                           [--filters]
 *                                           [--order-by]
 *                                           [--subscription]
 * ```
 *
 * @param {string} lastUpdatedAfter The time at or after which the run event was updated in 'ISO 8601' format.
 * @param {string} lastUpdatedBefore The time at or before which the run event was updated in 'ISO 8601' format.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_run_query_by_workspace_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_run_query_by_workspace_command_builder, _super);
    function az_synapse_trigger_run_query_by_workspace_command_builder(commandPath, resultDataTypeName, lastUpdatedAfter, lastUpdatedBefore, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.lastUpdatedAfter(lastUpdatedAfter);
        _this.lastUpdatedBefore(lastUpdatedBefore);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The time at or after which the run event was updated in 'ISO 8601' format. */
    az_synapse_trigger_run_query_by_workspace_command_builder.prototype.lastUpdatedAfter = function (value) {
        this.setFlag("--last-updated-after", value);
        return this;
    };
    /** The time at or before which the run event was updated in 'ISO 8601' format. */
    az_synapse_trigger_run_query_by_workspace_command_builder.prototype.lastUpdatedBefore = function (value) {
        this.setFlag("--last-updated-before", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_run_query_by_workspace_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** The continuation token for getting the next page of results. Null for first page. */
    az_synapse_trigger_run_query_by_workspace_command_builder.prototype.continuationToken = function (value) {
        this.setFlag("--continuation-token", value);
        return this;
    };
    /** List of filters. */
    az_synapse_trigger_run_query_by_workspace_command_builder.prototype.filters = function (value) {
        this.setFlag("--filters", value);
        return this;
    };
    /** List of OrderBy option. */
    az_synapse_trigger_run_query_by_workspace_command_builder.prototype.orderBy = function (value) {
        this.setFlag("--order-by", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_run_query_by_workspace_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_run_query_by_workspace_command_builder;
}(base_1.CommandBuilder));
/**
 * Rerun single trigger instance by runId.
 *
 * Syntax:
 * ```
 * az synapse trigger-run rerun --name
 *                              --run-id
 *                              --workspace-name
 *                              [--subscription]
 * ```
 *
 * @param {string} name The trigger name.
 * @param {string} runId The trigger run identifier.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_run_rerun_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_run_rerun_command_builder, _super);
    function az_synapse_trigger_run_rerun_command_builder(commandPath, resultDataTypeName, name, runId, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.runId(runId);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The trigger name. */
    az_synapse_trigger_run_rerun_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The trigger run identifier. */
    az_synapse_trigger_run_rerun_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_run_rerun_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_run_rerun_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_run_rerun_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a trigger.
 *
 * Syntax:
 * ```
 * az synapse trigger create --file
 *                           --name
 *                           --workspace-name
 *                           [--no-wait]
 *                           [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The trigger name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_create_command_builder, _super);
    function az_synapse_trigger_create_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_trigger_create_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The trigger name. */
    az_synapse_trigger_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_trigger_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a trigger.
 *
 * Syntax:
 * ```
 * az synapse trigger delete --name
 *                           --workspace-name
 *                           [--no-wait]
 *                           [--subscription]
 *                           [--yes]
 * ```
 *
 * @param {string} name The trigger name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_delete_command_builder, _super);
    function az_synapse_trigger_delete_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The trigger name. */
    az_synapse_trigger_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_trigger_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_trigger_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_trigger_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a trigger's event subscription status.
 *
 * Syntax:
 * ```
 * az synapse trigger get-event-subscription-status --name
 *                                                  --workspace-name
 *                                                  [--subscription]
 * ```
 *
 * @param {string} name The trigger name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_get_event_subscription_status_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_get_event_subscription_status_command_builder, _super);
    function az_synapse_trigger_get_event_subscription_status_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The trigger name. */
    az_synapse_trigger_get_event_subscription_status_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_get_event_subscription_status_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_get_event_subscription_status_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_get_event_subscription_status_command_builder;
}(base_1.CommandBuilder));
/**
 * List triggers.
 *
 * Syntax:
 * ```
 * az synapse trigger list --workspace-name
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_list_command_builder, _super);
    function az_synapse_trigger_list_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The workspace name. */
    az_synapse_trigger_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_trigger_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set an exist trigger.
 *
 * Syntax:
 * ```
 * az synapse trigger set --file
 *                        --name
 *                        --workspace-name
 *                        [--no-wait]
 *                        [--subscription]
 * ```
 *
 * @param {string} file Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string.
 * @param {string} name The trigger name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_set_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_set_command_builder, _super);
    function az_synapse_trigger_set_command_builder(commandPath, resultDataTypeName, file, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    az_synapse_trigger_set_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The trigger name. */
    az_synapse_trigger_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_set_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_trigger_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a trigger.
 *
 * Syntax:
 * ```
 * az synapse trigger show --name
 *                         --workspace-name
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The trigger name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_show_command_builder, _super);
    function az_synapse_trigger_show_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The trigger name. */
    az_synapse_trigger_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_trigger_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Starts a trigger.
 *
 * Syntax:
 * ```
 * az synapse trigger start --name
 *                          --workspace-name
 *                          [--no-wait]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The trigger name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_start_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_start_command_builder, _super);
    function az_synapse_trigger_start_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The trigger name. */
    az_synapse_trigger_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_start_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_trigger_start_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stops a trigger.
 *
 * Syntax:
 * ```
 * az synapse trigger stop --name
 *                         --workspace-name
 *                         [--no-wait]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The trigger name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_stop_command_builder, _super);
    function az_synapse_trigger_stop_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The trigger name. */
    az_synapse_trigger_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_stop_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_trigger_stop_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Subscribe event trigger to events.
 *
 * Syntax:
 * ```
 * az synapse trigger subscribe-to-event --name
 *                                       --workspace-name
 *                                       [--no-wait]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name The trigger name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_subscribe_to_event_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_subscribe_to_event_command_builder, _super);
    function az_synapse_trigger_subscribe_to_event_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The trigger name. */
    az_synapse_trigger_subscribe_to_event_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_subscribe_to_event_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_trigger_subscribe_to_event_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_subscribe_to_event_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_subscribe_to_event_command_builder;
}(base_1.CommandBuilder));
/**
 * Unsubscribe event trigger from events.
 *
 * Syntax:
 * ```
 * az synapse trigger unsubscribe-from-event --name
 *                                           --workspace-name
 *                                           [--no-wait]
 *                                           [--subscription]
 * ```
 *
 * @param {string} name The trigger name.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_trigger_unsubscribe_from_event_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_trigger_unsubscribe_from_event_command_builder, _super);
    function az_synapse_trigger_unsubscribe_from_event_command_builder(commandPath, resultDataTypeName, name, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The trigger name. */
    az_synapse_trigger_unsubscribe_from_event_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_trigger_unsubscribe_from_event_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_trigger_unsubscribe_from_event_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_trigger_unsubscribe_from_event_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_trigger_unsubscribe_from_event_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a firewall rule.
 *
 * Syntax:
 * ```
 * az synapse workspace firewall-rule create --end-ip-address
 *                                           --name
 *                                           --resource-group
 *                                           --start-ip-address
 *                                           --workspace-name
 *                                           [--no-wait]
 *                                           [--subscription]
 * ```
 *
 * @param {string} endIpAddress The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress.
 * @param {string} name The IP firewall rule name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} startIpAddress The start IP address of the firewall rule. Must be IPv4 format.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_workspace_firewall_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_firewall_rule_create_command_builder, _super);
    function az_synapse_workspace_firewall_rule_create_command_builder(commandPath, resultDataTypeName, endIpAddress, name, resourceGroup, startIpAddress, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.endIpAddress(endIpAddress);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.startIpAddress(startIpAddress);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. */
    az_synapse_workspace_firewall_rule_create_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** The IP firewall rule name. */
    az_synapse_workspace_firewall_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_firewall_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The start IP address of the firewall rule. Must be IPv4 format. */
    az_synapse_workspace_firewall_rule_create_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_workspace_firewall_rule_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_workspace_firewall_rule_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_firewall_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_workspace_firewall_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a firewall rule.
 *
 * Syntax:
 * ```
 * az synapse workspace firewall-rule delete [--ids]
 *                                           [--name]
 *                                           [--no-wait]
 *                                           [--resource-group]
 *                                           [--subscription]
 *                                           [--workspace-name]
 *                                           [--yes]
 * ```
 */
var az_synapse_workspace_firewall_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_firewall_rule_delete_command_builder, _super);
    function az_synapse_workspace_firewall_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_workspace_firewall_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The IP firewall rule name. */
    az_synapse_workspace_firewall_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_workspace_firewall_rule_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_firewall_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_firewall_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_workspace_firewall_rule_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_workspace_firewall_rule_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_workspace_firewall_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all firewall rules.
 *
 * Syntax:
 * ```
 * az synapse workspace firewall-rule list --resource-group
 *                                         --workspace-name
 *                                         [--query-examples]
 *                                         [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName The workspace name.
 */
var az_synapse_workspace_firewall_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_firewall_rule_list_command_builder, _super);
    function az_synapse_workspace_firewall_rule_list_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_firewall_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_workspace_firewall_rule_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_workspace_firewall_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_firewall_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_workspace_firewall_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a firewall rule.
 *
 * Syntax:
 * ```
 * az synapse workspace firewall-rule show [--ids]
 *                                         [--name]
 *                                         [--query-examples]
 *                                         [--resource-group]
 *                                         [--subscription]
 *                                         [--workspace-name]
 * ```
 */
var az_synapse_workspace_firewall_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_firewall_rule_show_command_builder, _super);
    function az_synapse_workspace_firewall_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_workspace_firewall_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The IP firewall rule name. */
    az_synapse_workspace_firewall_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_workspace_firewall_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_firewall_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_firewall_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_workspace_firewall_rule_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_workspace_firewall_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of a firewall rule is met.
 *
 * Syntax:
 * ```
 * az synapse workspace firewall-rule wait --rule-name
 *                                         [--created]
 *                                         [--custom]
 *                                         [--deleted]
 *                                         [--exists]
 *                                         [--ids]
 *                                         [--interval]
 *                                         [--resource-group]
 *                                         [--subscription]
 *                                         [--timeout]
 *                                         [--updated]
 *                                         [--workspace-name]
 * ```
 *
 * @param {string} ruleName The IP firewall rule name.
 */
var az_synapse_workspace_firewall_rule_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_firewall_rule_wait_command_builder, _super);
    function az_synapse_workspace_firewall_rule_wait_command_builder(commandPath, resultDataTypeName, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.ruleName(ruleName);
        return _this;
    }
    /** The IP firewall rule name. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_workspace_firewall_rule_wait_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    return az_synapse_workspace_firewall_rule_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Check if a Synapse workspace name is available or not.
 *
 * Syntax:
 * ```
 * az synapse workspace check-name --name
 *                                 [--subscription]
 * ```
 *
 * @param {string} name The name you wanted to check.
 */
var az_synapse_workspace_check_name_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_check_name_command_builder, _super);
    function az_synapse_workspace_check_name_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name you wanted to check. */
    az_synapse_workspace_check_name_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_check_name_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_workspace_check_name_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Synapse workspace.
 *
 * Syntax:
 * ```
 * az synapse workspace create --file-system
 *                             --location
 *                             --name
 *                             --resource-group
 *                             --sql-admin-login-password
 *                             --sql-admin-login-user
 *                             --storage-account
 *                             [--no-wait]
 *                             [--subscription]
 *                             [--tags]
 * ```
 *
 * @param {string} fileSystem The file system of the data lake storage account.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The workspace name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sqlAdminLoginPassword The sql administrator login password.
 * @param {string} sqlAdminLoginUser The sql administrator login user name.
 * @param {string} storageAccount The data lake storage account name or resource id.
 */
var az_synapse_workspace_create_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_create_command_builder, _super);
    function az_synapse_workspace_create_command_builder(commandPath, resultDataTypeName, fileSystem, location, name, resourceGroup, sqlAdminLoginPassword, sqlAdminLoginUser, storageAccount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.fileSystem(fileSystem);
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sqlAdminLoginPassword(sqlAdminLoginPassword);
        _this.sqlAdminLoginUser(sqlAdminLoginUser);
        _this.storageAccount(storageAccount);
        return _this;
    }
    /** The file system of the data lake storage account. */
    az_synapse_workspace_create_command_builder.prototype.fileSystem = function (value) {
        this.setFlag("--file-system", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_synapse_workspace_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_workspace_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The sql administrator login password. */
    az_synapse_workspace_create_command_builder.prototype.sqlAdminLoginPassword = function (value) {
        this.setFlag("--sql-admin-login-password", value);
        return this;
    };
    /** The sql administrator login user name. */
    az_synapse_workspace_create_command_builder.prototype.sqlAdminLoginUser = function (value) {
        this.setFlag("--sql-admin-login-user", value);
        return this;
    };
    /** The data lake storage account name or resource id. */
    az_synapse_workspace_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_workspace_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_synapse_workspace_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_synapse_workspace_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Synapse workspace.
 *
 * Syntax:
 * ```
 * az synapse workspace delete [--ids]
 *                             [--name]
 *                             [--no-wait]
 *                             [--resource-group]
 *                             [--subscription]
 *                             [--yes]
 * ```
 */
var az_synapse_workspace_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_delete_command_builder, _super);
    function az_synapse_workspace_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_workspace_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_workspace_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_workspace_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_synapse_workspace_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_synapse_workspace_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all Synapse workspaces.
 *
 * Syntax:
 * ```
 * az synapse workspace list [--query-examples]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_synapse_workspace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_list_command_builder, _super);
    function az_synapse_workspace_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_workspace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_workspace_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a Synapse workspace.
 *
 * Syntax:
 * ```
 * az synapse workspace show [--ids]
 *                           [--name]
 *                           [--query-examples]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_synapse_workspace_show_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_show_command_builder, _super);
    function az_synapse_workspace_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_workspace_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_workspace_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_synapse_workspace_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_synapse_workspace_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a Synapse workspace.
 *
 * Syntax:
 * ```
 * az synapse workspace update [--ids]
 *                             [--name]
 *                             [--no-wait]
 *                             [--resource-group]
 *                             [--sql-admin-login-password]
 *                             [--subscription]
 *                             [--tags]
 * ```
 */
var az_synapse_workspace_update_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_update_command_builder, _super);
    function az_synapse_workspace_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_synapse_workspace_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The workspace name. */
    az_synapse_workspace_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_synapse_workspace_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The sql administrator login password. */
    az_synapse_workspace_update_command_builder.prototype.sqlAdminLoginPassword = function (value) {
        this.setFlag("--sql-admin-login-password", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_synapse_workspace_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_synapse_workspace_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the workspace is met.
 *
 * Syntax:
 * ```
 * az synapse workspace wait --resource-group
 *                           --workspace-name
 *                           [--created]
 *                           [--custom]
 *                           [--deleted]
 *                           [--exists]
 *                           [--interval]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--updated]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName The name of the workspace.
 */
var az_synapse_workspace_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_synapse_workspace_wait_command_builder, _super);
    function az_synapse_workspace_wait_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_synapse_workspace_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the workspace. */
    az_synapse_workspace_wait_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_synapse_workspace_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_synapse_workspace_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_synapse_workspace_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_synapse_workspace_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_synapse_workspace_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_synapse_workspace_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_synapse_workspace_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_synapse_workspace_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_synapse_workspace_wait_command_builder;
}(base_1.CommandBuilder));
