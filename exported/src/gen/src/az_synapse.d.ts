import { CommandBuilder } from '../base';
import { az_synapse_activity_run_query_by_pipeline_run_command_result } from './models/az_synapse_activity_run_query_by_pipeline_run_command_result';
import { az_synapse_data_flow_create_command_result } from './models/az_synapse_data_flow_create_command_result';
import { az_synapse_data_flow_delete_command_result } from './models/az_synapse_data_flow_delete_command_result';
import { az_synapse_data_flow_list_command_result } from './models/az_synapse_data_flow_list_command_result';
import { az_synapse_data_flow_set_command_result } from './models/az_synapse_data_flow_set_command_result';
import { az_synapse_data_flow_show_command_result } from './models/az_synapse_data_flow_show_command_result';
import { az_synapse_dataset_create_command_result } from './models/az_synapse_dataset_create_command_result';
import { az_synapse_dataset_delete_command_result } from './models/az_synapse_dataset_delete_command_result';
import { az_synapse_dataset_list_command_result } from './models/az_synapse_dataset_list_command_result';
import { az_synapse_dataset_set_command_result } from './models/az_synapse_dataset_set_command_result';
import { az_synapse_dataset_show_command_result } from './models/az_synapse_dataset_show_command_result';
import { az_synapse_linked_service_create_command_result } from './models/az_synapse_linked_service_create_command_result';
import { az_synapse_linked_service_delete_command_result } from './models/az_synapse_linked_service_delete_command_result';
import { az_synapse_linked_service_list_command_result } from './models/az_synapse_linked_service_list_command_result';
import { az_synapse_linked_service_set_command_result } from './models/az_synapse_linked_service_set_command_result';
import { az_synapse_linked_service_show_command_result } from './models/az_synapse_linked_service_show_command_result';
import { az_synapse_notebook_create_command_result } from './models/az_synapse_notebook_create_command_result';
import { az_synapse_notebook_delete_command_result } from './models/az_synapse_notebook_delete_command_result';
import { az_synapse_notebook_export_command_result } from './models/az_synapse_notebook_export_command_result';
import { az_synapse_notebook_import_command_result } from './models/az_synapse_notebook_import_command_result';
import { az_synapse_notebook_list_command_result } from './models/az_synapse_notebook_list_command_result';
import { az_synapse_notebook_set_command_result } from './models/az_synapse_notebook_set_command_result';
import { az_synapse_notebook_show_command_result } from './models/az_synapse_notebook_show_command_result';
import { az_synapse_pipeline_run_cancel_command_result } from './models/az_synapse_pipeline_run_cancel_command_result';
import { az_synapse_pipeline_run_query_by_workspace_command_result } from './models/az_synapse_pipeline_run_query_by_workspace_command_result';
import { az_synapse_pipeline_run_show_command_result } from './models/az_synapse_pipeline_run_show_command_result';
import { az_synapse_pipeline_create_command_result } from './models/az_synapse_pipeline_create_command_result';
import { az_synapse_pipeline_create_run_command_result } from './models/az_synapse_pipeline_create_run_command_result';
import { az_synapse_pipeline_delete_command_result } from './models/az_synapse_pipeline_delete_command_result';
import { az_synapse_pipeline_list_command_result } from './models/az_synapse_pipeline_list_command_result';
import { az_synapse_pipeline_set_command_result } from './models/az_synapse_pipeline_set_command_result';
import { az_synapse_pipeline_show_command_result } from './models/az_synapse_pipeline_show_command_result';
import { az_synapse_role_assignment_create_command_result } from './models/az_synapse_role_assignment_create_command_result';
import { az_synapse_role_assignment_delete_command_result } from './models/az_synapse_role_assignment_delete_command_result';
import { az_synapse_role_assignment_list_command_result } from './models/az_synapse_role_assignment_list_command_result';
import { az_synapse_role_assignment_show_command_result } from './models/az_synapse_role_assignment_show_command_result';
import { az_synapse_role_definition_list_command_result } from './models/az_synapse_role_definition_list_command_result';
import { az_synapse_role_definition_show_command_result } from './models/az_synapse_role_definition_show_command_result';
import { az_synapse_spark_job_cancel_command_result } from './models/az_synapse_spark_job_cancel_command_result';
import { az_synapse_spark_job_list_command_result } from './models/az_synapse_spark_job_list_command_result';
import { az_synapse_spark_job_show_command_result } from './models/az_synapse_spark_job_show_command_result';
import { az_synapse_spark_job_submit_command_result } from './models/az_synapse_spark_job_submit_command_result';
import { az_synapse_spark_pool_create_command_result } from './models/az_synapse_spark_pool_create_command_result';
import { az_synapse_spark_pool_delete_command_result } from './models/az_synapse_spark_pool_delete_command_result';
import { az_synapse_spark_pool_list_command_result } from './models/az_synapse_spark_pool_list_command_result';
import { az_synapse_spark_pool_show_command_result } from './models/az_synapse_spark_pool_show_command_result';
import { az_synapse_spark_pool_update_command_result } from './models/az_synapse_spark_pool_update_command_result';
import { az_synapse_spark_pool_wait_command_result } from './models/az_synapse_spark_pool_wait_command_result';
import { az_synapse_spark_session_cancel_command_result } from './models/az_synapse_spark_session_cancel_command_result';
import { az_synapse_spark_session_create_command_result } from './models/az_synapse_spark_session_create_command_result';
import { az_synapse_spark_session_list_command_result } from './models/az_synapse_spark_session_list_command_result';
import { az_synapse_spark_session_reset_timeout_command_result } from './models/az_synapse_spark_session_reset_timeout_command_result';
import { az_synapse_spark_session_show_command_result } from './models/az_synapse_spark_session_show_command_result';
import { az_synapse_spark_statement_cancel_command_result } from './models/az_synapse_spark_statement_cancel_command_result';
import { az_synapse_spark_statement_invoke_command_result } from './models/az_synapse_spark_statement_invoke_command_result';
import { az_synapse_spark_statement_list_command_result } from './models/az_synapse_spark_statement_list_command_result';
import { az_synapse_spark_statement_show_command_result } from './models/az_synapse_spark_statement_show_command_result';
import { az_synapse_sql_pool_create_command_result } from './models/az_synapse_sql_pool_create_command_result';
import { az_synapse_sql_pool_delete_command_result } from './models/az_synapse_sql_pool_delete_command_result';
import { az_synapse_sql_pool_list_command_result } from './models/az_synapse_sql_pool_list_command_result';
import { az_synapse_sql_pool_pause_command_result } from './models/az_synapse_sql_pool_pause_command_result';
import { az_synapse_sql_pool_resume_command_result } from './models/az_synapse_sql_pool_resume_command_result';
import { az_synapse_sql_pool_show_command_result } from './models/az_synapse_sql_pool_show_command_result';
import { az_synapse_sql_pool_update_command_result } from './models/az_synapse_sql_pool_update_command_result';
import { az_synapse_sql_pool_wait_command_result } from './models/az_synapse_sql_pool_wait_command_result';
import { az_synapse_trigger_run_query_by_workspace_command_result } from './models/az_synapse_trigger_run_query_by_workspace_command_result';
import { az_synapse_trigger_run_rerun_command_result } from './models/az_synapse_trigger_run_rerun_command_result';
import { az_synapse_trigger_create_command_result } from './models/az_synapse_trigger_create_command_result';
import { az_synapse_trigger_delete_command_result } from './models/az_synapse_trigger_delete_command_result';
import { az_synapse_trigger_get_event_subscription_status_command_result } from './models/az_synapse_trigger_get_event_subscription_status_command_result';
import { az_synapse_trigger_list_command_result } from './models/az_synapse_trigger_list_command_result';
import { az_synapse_trigger_set_command_result } from './models/az_synapse_trigger_set_command_result';
import { az_synapse_trigger_show_command_result } from './models/az_synapse_trigger_show_command_result';
import { az_synapse_trigger_start_command_result } from './models/az_synapse_trigger_start_command_result';
import { az_synapse_trigger_stop_command_result } from './models/az_synapse_trigger_stop_command_result';
import { az_synapse_trigger_subscribe_to_event_command_result } from './models/az_synapse_trigger_subscribe_to_event_command_result';
import { az_synapse_trigger_unsubscribe_from_event_command_result } from './models/az_synapse_trigger_unsubscribe_from_event_command_result';
import { az_synapse_workspace_firewall_rule_create_command_result } from './models/az_synapse_workspace_firewall_rule_create_command_result';
import { az_synapse_workspace_firewall_rule_delete_command_result } from './models/az_synapse_workspace_firewall_rule_delete_command_result';
import { az_synapse_workspace_firewall_rule_list_command_result } from './models/az_synapse_workspace_firewall_rule_list_command_result';
import { az_synapse_workspace_firewall_rule_show_command_result } from './models/az_synapse_workspace_firewall_rule_show_command_result';
import { az_synapse_workspace_firewall_rule_wait_command_result } from './models/az_synapse_workspace_firewall_rule_wait_command_result';
import { az_synapse_workspace_check_name_command_result } from './models/az_synapse_workspace_check_name_command_result';
import { az_synapse_workspace_create_command_result } from './models/az_synapse_workspace_create_command_result';
import { az_synapse_workspace_delete_command_result } from './models/az_synapse_workspace_delete_command_result';
import { az_synapse_workspace_list_command_result } from './models/az_synapse_workspace_list_command_result';
import { az_synapse_workspace_show_command_result } from './models/az_synapse_workspace_show_command_result';
import { az_synapse_workspace_update_command_result } from './models/az_synapse_workspace_update_command_result';
import { az_synapse_workspace_wait_command_result } from './models/az_synapse_workspace_wait_command_result';
/** Synapse activity-run. */
export declare class az_synapse_activity_run {
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
    static query_by_pipeline_run(lastUpdatedAfter: string, lastUpdatedBefore: string, name: string, runId: string, workspaceName: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
}
/** Manage Synapse's data flows. */
export declare class az_synapse_data_flow {
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
    static create(file: string, name: string, workspaceName: string): az_synapse_data_flow_create_command_builder;
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
    static delete(name: string, workspaceName: string): az_synapse_data_flow_delete_command_builder;
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
    static list(workspaceName: string): az_synapse_data_flow_list_command_builder;
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
    static set(file: string, name: string, workspaceName: string): az_synapse_data_flow_set_command_builder;
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
    static show(name: string, workspaceName: string): az_synapse_data_flow_show_command_builder;
}
/** Manage Synapse's datasets. */
export declare class az_synapse_dataset {
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
    static create(file: string, name: string, workspaceName: string): az_synapse_dataset_create_command_builder;
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
    static delete(name: string, workspaceName: string): az_synapse_dataset_delete_command_builder;
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
    static list(workspaceName: string): az_synapse_dataset_list_command_builder;
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
    static set(file: string, name: string, workspaceName: string): az_synapse_dataset_set_command_builder;
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
    static show(name: string, workspaceName: string): az_synapse_dataset_show_command_builder;
}
/** Manage Synapse's linked services. */
export declare class az_synapse_linked_service {
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
    static create(file: string, name: string, workspaceName: string): az_synapse_linked_service_create_command_builder;
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
    static delete(name: string, workspaceName: string): az_synapse_linked_service_delete_command_builder;
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
    static list(workspaceName: string): az_synapse_linked_service_list_command_builder;
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
    static set(file: string, name: string, workspaceName: string): az_synapse_linked_service_set_command_builder;
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
    static show(name: string, workspaceName: string): az_synapse_linked_service_show_command_builder;
}
/** Manage Synapse's notebooks. */
export declare class az_synapse_notebook {
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
    static create(file: string, name: string, workspaceName: string): az_synapse_notebook_create_command_builder;
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
    static delete(name: string, workspaceName: string): az_synapse_notebook_delete_command_builder;
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
    static export(outputFolder: string, workspaceName: string): az_synapse_notebook_export_command_builder;
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
    static import(file: string, name: string, workspaceName: string): az_synapse_notebook_import_command_builder;
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
    static list(workspaceName: string): az_synapse_notebook_list_command_builder;
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
    static set(file: string, name: string, workspaceName: string): az_synapse_notebook_set_command_builder;
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
    static show(name: string, workspaceName: string): az_synapse_notebook_show_command_builder;
}
/** Manage Synapse's pipeline run. */
export declare class az_synapse_pipeline_run {
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
    static cancel(runId: string, workspaceName: string): az_synapse_pipeline_run_cancel_command_builder;
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
    static query_by_workspace(lastUpdatedAfter: string, lastUpdatedBefore: string, workspaceName: string): az_synapse_pipeline_run_query_by_workspace_command_builder;
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
    static show(runId: string, workspaceName: string): az_synapse_pipeline_run_show_command_builder;
}
/** Manage Synapse's pipelines. */
export declare class az_synapse_pipeline {
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
    static create(file: string, name: string, workspaceName: string): az_synapse_pipeline_create_command_builder;
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
    static create_run(name: string, workspaceName: string): az_synapse_pipeline_create_run_command_builder;
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
    static delete(name: string, workspaceName: string): az_synapse_pipeline_delete_command_builder;
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
    static list(workspaceName: string): az_synapse_pipeline_list_command_builder;
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
    static set(file: string, name: string, workspaceName: string): az_synapse_pipeline_set_command_builder;
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
    static show(name: string, workspaceName: string): az_synapse_pipeline_show_command_builder;
}
/** Manage Synapse's role assignments. */
export declare class az_synapse_role_assignment {
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
    static create(assignee: string, role: string, workspaceName: string): az_synapse_role_assignment_create_command_builder;
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
    static delete(workspaceName: string): az_synapse_role_assignment_delete_command_builder;
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
    static list(workspaceName: string): az_synapse_role_assignment_list_command_builder;
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
    static show(id: string, workspaceName: string): az_synapse_role_assignment_show_command_builder;
}
/** Manage Synapse's role definitions. */
export declare class az_synapse_role_definition {
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
    static list(workspaceName: string): az_synapse_role_definition_list_command_builder;
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
    static show(role: string, workspaceName: string): az_synapse_role_definition_show_command_builder;
}
/** Manage Synapse's role assignments and definitions. */
export declare class az_synapse_role {
}
/** Manage Synapse Spark batch jobs. */
export declare class az_synapse_spark_job {
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
    static cancel(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_job_cancel_command_builder;
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
    static list(sparkPoolName: string, workspaceName: string): az_synapse_spark_job_list_command_builder;
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
    static show(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_job_show_command_builder;
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
    static submit(executorSize: 'Large' | 'Medium' | 'Small', executors: string, mainClassName: string, mainDefinitionFile: string, name: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_job_submit_command_builder;
}
/** Manage Spark pools. */
export declare class az_synapse_spark_pool {
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
    static create(name: string, nodeCount: string, nodeSize: 'Large' | 'Medium' | 'Small', resourceGroup: string, sparkVersion: string, workspaceName: string): az_synapse_spark_pool_create_command_builder;
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
    static delete(): az_synapse_spark_pool_delete_command_builder;
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
    static list(resourceGroup: string, workspaceName: string): az_synapse_spark_pool_list_command_builder;
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
    static show(): az_synapse_spark_pool_show_command_builder;
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
    static update(): az_synapse_spark_pool_update_command_builder;
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
    static wait(bigDataPoolName: string): az_synapse_spark_pool_wait_command_builder;
}
/** Manage Synapse Spark sessions. */
export declare class az_synapse_spark_session {
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
    static cancel(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_session_cancel_command_builder;
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
    static create(executorSize: 'Large' | 'Medium' | 'Small', executors: string, name: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_session_create_command_builder;
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
    static list(sparkPoolName: string, workspaceName: string): az_synapse_spark_session_list_command_builder;
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
    static reset_timeout(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_session_reset_timeout_command_builder;
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
    static show(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_session_show_command_builder;
}
/** Manage Synapse Spark statements. */
export declare class az_synapse_spark_statement {
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
    static cancel(livyId: string, sessionId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_statement_cancel_command_builder;
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
    static invoke(code: string, language: 'CSharp' | 'PySpark' | 'Python' | 'SQL' | 'Scala' | 'Spark' | 'SparkDotNet', sessionId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_statement_invoke_command_builder;
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
    static list(sessionId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_statement_list_command_builder;
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
    static show(livyId: string, sessionId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_statement_show_command_builder;
}
/** Manage Spark pools and Spark jobs. */
export declare class az_synapse_spark {
}
/** Manage SQL pools. */
export declare class az_synapse_sql_pool {
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
    static create(name: string, performanceLevel: string, resourceGroup: string, workspaceName: string): az_synapse_sql_pool_create_command_builder;
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
    static delete(): az_synapse_sql_pool_delete_command_builder;
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
    static list(resourceGroup: string, workspaceName: string): az_synapse_sql_pool_list_command_builder;
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
    static pause(): az_synapse_sql_pool_pause_command_builder;
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
    static resume(): az_synapse_sql_pool_resume_command_builder;
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
    static show(): az_synapse_sql_pool_show_command_builder;
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
    static update(): az_synapse_sql_pool_update_command_builder;
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
    static wait(sqlPoolName: string): az_synapse_sql_pool_wait_command_builder;
}
/** Manage SQL pools. */
export declare class az_synapse_sql {
}
/** Synapse trigger-run. */
export declare class az_synapse_trigger_run {
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
    static query_by_workspace(lastUpdatedAfter: string, lastUpdatedBefore: string, workspaceName: string): az_synapse_trigger_run_query_by_workspace_command_builder;
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
    static rerun(name: string, runId: string, workspaceName: string): az_synapse_trigger_run_rerun_command_builder;
}
/** Manage Synapse's triggers. */
export declare class az_synapse_trigger {
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
    static create(file: string, name: string, workspaceName: string): az_synapse_trigger_create_command_builder;
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
    static delete(name: string, workspaceName: string): az_synapse_trigger_delete_command_builder;
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
    static get_event_subscription_status(name: string, workspaceName: string): az_synapse_trigger_get_event_subscription_status_command_builder;
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
    static list(workspaceName: string): az_synapse_trigger_list_command_builder;
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
    static set(file: string, name: string, workspaceName: string): az_synapse_trigger_set_command_builder;
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
    static show(name: string, workspaceName: string): az_synapse_trigger_show_command_builder;
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
    static start(name: string, workspaceName: string): az_synapse_trigger_start_command_builder;
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
    static stop(name: string, workspaceName: string): az_synapse_trigger_stop_command_builder;
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
    static subscribe_to_event(name: string, workspaceName: string): az_synapse_trigger_subscribe_to_event_command_builder;
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
    static unsubscribe_from_event(name: string, workspaceName: string): az_synapse_trigger_unsubscribe_from_event_command_builder;
}
/** Manage a workspace's firewall rules. */
export declare class az_synapse_workspace_firewall_rule {
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
    static create(endIpAddress: string, name: string, resourceGroup: string, startIpAddress: string, workspaceName: string): az_synapse_workspace_firewall_rule_create_command_builder;
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
    static delete(): az_synapse_workspace_firewall_rule_delete_command_builder;
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
    static list(resourceGroup: string, workspaceName: string): az_synapse_workspace_firewall_rule_list_command_builder;
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
    static show(): az_synapse_workspace_firewall_rule_show_command_builder;
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
    static wait(ruleName: string): az_synapse_workspace_firewall_rule_wait_command_builder;
}
/** Manage Synapse workspaces. */
export declare class az_synapse_workspace {
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
    static check_name(name: string): az_synapse_workspace_check_name_command_builder;
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
    static create(fileSystem: string, location: string, name: string, resourceGroup: string, sqlAdminLoginPassword: string, sqlAdminLoginUser: string, storageAccount: string): az_synapse_workspace_create_command_builder;
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
    static delete(): az_synapse_workspace_delete_command_builder;
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
    static list(): az_synapse_workspace_list_command_builder;
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
    static show(): az_synapse_workspace_show_command_builder;
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
    static update(): az_synapse_workspace_update_command_builder;
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
    static wait(resourceGroup: string, workspaceName: string): az_synapse_workspace_wait_command_builder;
}
/** Manage and operate Synapse Workspace, Spark Pool, SQL Pool. */
export declare class az_synapse {
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
declare class az_synapse_activity_run_query_by_pipeline_run_command_builder extends CommandBuilder<az_synapse_activity_run_query_by_pipeline_run_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lastUpdatedAfter: string, lastUpdatedBefore: string, name: string, runId: string, workspaceName: string);
    /** The time at or after which the run event was updated in 'ISO 8601' format. */
    lastUpdatedAfter(value: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
    /** The time at or before which the run event was updated in 'ISO 8601' format. */
    lastUpdatedBefore(value: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
    /** The pipeline name. */
    name(value: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
    /** The pipeline run identifier. */
    runId(value: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
    /** The continuation token for getting the next page of results. Null for first page. */
    continuationToken(value: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
    /** List of filters. */
    filters(value: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
    /** List of OrderBy option. */
    orderBy(value: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_activity_run_query_by_pipeline_run_command_builder;
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
declare class az_synapse_data_flow_create_command_builder extends CommandBuilder<az_synapse_data_flow_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_data_flow_create_command_builder;
    /** The data flow name. */
    name(value: string): az_synapse_data_flow_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_data_flow_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_data_flow_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_data_flow_create_command_builder;
}
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
declare class az_synapse_data_flow_delete_command_builder extends CommandBuilder<az_synapse_data_flow_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The data flow name. */
    name(value: string): az_synapse_data_flow_delete_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_data_flow_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_data_flow_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_data_flow_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_data_flow_delete_command_builder;
}
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
declare class az_synapse_data_flow_list_command_builder extends CommandBuilder<az_synapse_data_flow_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** The workspace name. */
    workspaceName(value: string): az_synapse_data_flow_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_data_flow_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_data_flow_list_command_builder;
}
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
declare class az_synapse_data_flow_set_command_builder extends CommandBuilder<az_synapse_data_flow_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_data_flow_set_command_builder;
    /** The data flow name. */
    name(value: string): az_synapse_data_flow_set_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_data_flow_set_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_data_flow_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_data_flow_set_command_builder;
}
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
declare class az_synapse_data_flow_show_command_builder extends CommandBuilder<az_synapse_data_flow_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The data flow name. */
    name(value: string): az_synapse_data_flow_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_data_flow_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_data_flow_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_data_flow_show_command_builder;
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
declare class az_synapse_dataset_create_command_builder extends CommandBuilder<az_synapse_dataset_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_dataset_create_command_builder;
    /** The dataset name. */
    name(value: string): az_synapse_dataset_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_dataset_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_dataset_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_dataset_create_command_builder;
}
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
declare class az_synapse_dataset_delete_command_builder extends CommandBuilder<az_synapse_dataset_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The dataset name. */
    name(value: string): az_synapse_dataset_delete_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_dataset_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_dataset_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_dataset_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_dataset_delete_command_builder;
}
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
declare class az_synapse_dataset_list_command_builder extends CommandBuilder<az_synapse_dataset_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** The workspace name. */
    workspaceName(value: string): az_synapse_dataset_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_dataset_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_dataset_list_command_builder;
}
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
declare class az_synapse_dataset_set_command_builder extends CommandBuilder<az_synapse_dataset_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_dataset_set_command_builder;
    /** The dataset name. */
    name(value: string): az_synapse_dataset_set_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_dataset_set_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_dataset_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_dataset_set_command_builder;
}
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
declare class az_synapse_dataset_show_command_builder extends CommandBuilder<az_synapse_dataset_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The dataset name. */
    name(value: string): az_synapse_dataset_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_dataset_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_dataset_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_dataset_show_command_builder;
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
declare class az_synapse_linked_service_create_command_builder extends CommandBuilder<az_synapse_linked_service_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_linked_service_create_command_builder;
    /** The linked service name. */
    name(value: string): az_synapse_linked_service_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_linked_service_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_linked_service_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_linked_service_create_command_builder;
}
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
declare class az_synapse_linked_service_delete_command_builder extends CommandBuilder<az_synapse_linked_service_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The linked service name. */
    name(value: string): az_synapse_linked_service_delete_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_linked_service_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_linked_service_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_linked_service_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_linked_service_delete_command_builder;
}
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
declare class az_synapse_linked_service_list_command_builder extends CommandBuilder<az_synapse_linked_service_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** The workspace name. */
    workspaceName(value: string): az_synapse_linked_service_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_linked_service_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_linked_service_list_command_builder;
}
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
declare class az_synapse_linked_service_set_command_builder extends CommandBuilder<az_synapse_linked_service_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_linked_service_set_command_builder;
    /** The linked service name. */
    name(value: string): az_synapse_linked_service_set_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_linked_service_set_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_linked_service_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_linked_service_set_command_builder;
}
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
declare class az_synapse_linked_service_show_command_builder extends CommandBuilder<az_synapse_linked_service_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The linked service name. */
    name(value: string): az_synapse_linked_service_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_linked_service_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_linked_service_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_linked_service_show_command_builder;
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
declare class az_synapse_notebook_create_command_builder extends CommandBuilder<az_synapse_notebook_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_notebook_create_command_builder;
    /** The notebook name. */
    name(value: string): az_synapse_notebook_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_notebook_create_command_builder;
    /** Number of executors to be allocated in the specified Spark pool for the job. */
    executorCount(value: string): az_synapse_notebook_create_command_builder;
    /** Number of core and memory to be used for executors allocated in the specified Spark pool for the job. */
    executorSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_notebook_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_notebook_create_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_notebook_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_notebook_create_command_builder;
}
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
declare class az_synapse_notebook_delete_command_builder extends CommandBuilder<az_synapse_notebook_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The notebook name. */
    name(value: string): az_synapse_notebook_delete_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_notebook_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_notebook_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_notebook_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_notebook_delete_command_builder;
}
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
declare class az_synapse_notebook_export_command_builder extends CommandBuilder<az_synapse_notebook_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, outputFolder: string, workspaceName: string);
    /** The folder where the notebook should be placed. */
    outputFolder(value: string): az_synapse_notebook_export_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_notebook_export_command_builder;
    /** The notebook name. */
    name(value: string): az_synapse_notebook_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_notebook_export_command_builder;
}
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
declare class az_synapse_notebook_import_command_builder extends CommandBuilder<az_synapse_notebook_import_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_notebook_import_command_builder;
    /** The notebook name. */
    name(value: string): az_synapse_notebook_import_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_notebook_import_command_builder;
    /** Number of executors to be allocated in the specified Spark pool for the job. */
    executorCount(value: string): az_synapse_notebook_import_command_builder;
    /** Number of core and memory to be used for executors allocated in the specified Spark pool for the job. */
    executorSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_notebook_import_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_notebook_import_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_notebook_import_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_notebook_import_command_builder;
}
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
declare class az_synapse_notebook_list_command_builder extends CommandBuilder<az_synapse_notebook_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** The workspace name. */
    workspaceName(value: string): az_synapse_notebook_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_notebook_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_notebook_list_command_builder;
}
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
declare class az_synapse_notebook_set_command_builder extends CommandBuilder<az_synapse_notebook_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_notebook_set_command_builder;
    /** The notebook name. */
    name(value: string): az_synapse_notebook_set_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_notebook_set_command_builder;
    /** Number of executors to be allocated in the specified Spark pool for the job. */
    executorCount(value: string): az_synapse_notebook_set_command_builder;
    /** Number of core and memory to be used for executors allocated in the specified Spark pool for the job. */
    executorSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_notebook_set_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_notebook_set_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_notebook_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_notebook_set_command_builder;
}
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
declare class az_synapse_notebook_show_command_builder extends CommandBuilder<az_synapse_notebook_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The notebook name. */
    name(value: string): az_synapse_notebook_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_notebook_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_notebook_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_notebook_show_command_builder;
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
declare class az_synapse_pipeline_run_cancel_command_builder extends CommandBuilder<az_synapse_pipeline_run_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, runId: string, workspaceName: string);
    /** The pipeline run identifier. */
    runId(value: string): az_synapse_pipeline_run_cancel_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_pipeline_run_cancel_command_builder;
    /** If true, cancel all the Child pipelines that are triggered by the current pipeline. */
    isRecursive(value: boolean): az_synapse_pipeline_run_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_pipeline_run_cancel_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_pipeline_run_cancel_command_builder;
}
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
declare class az_synapse_pipeline_run_query_by_workspace_command_builder extends CommandBuilder<az_synapse_pipeline_run_query_by_workspace_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lastUpdatedAfter: string, lastUpdatedBefore: string, workspaceName: string);
    /** The time at or after which the run event was updated in 'ISO 8601' format. */
    lastUpdatedAfter(value: string): az_synapse_pipeline_run_query_by_workspace_command_builder;
    /** The time at or before which the run event was updated in 'ISO 8601' format. */
    lastUpdatedBefore(value: string): az_synapse_pipeline_run_query_by_workspace_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_pipeline_run_query_by_workspace_command_builder;
    /** The continuation token for getting the next page of results. Null for first page. */
    continuationToken(value: string): az_synapse_pipeline_run_query_by_workspace_command_builder;
    /** List of filters. */
    filters(value: string): az_synapse_pipeline_run_query_by_workspace_command_builder;
    /** List of OrderBy option. */
    orderBy(value: string): az_synapse_pipeline_run_query_by_workspace_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_pipeline_run_query_by_workspace_command_builder;
}
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
declare class az_synapse_pipeline_run_show_command_builder extends CommandBuilder<az_synapse_pipeline_run_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, runId: string, workspaceName: string);
    /** The pipeline run identifier. */
    runId(value: string): az_synapse_pipeline_run_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_pipeline_run_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_pipeline_run_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_pipeline_run_show_command_builder;
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
declare class az_synapse_pipeline_create_command_builder extends CommandBuilder<az_synapse_pipeline_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_pipeline_create_command_builder;
    /** The pipeline name. */
    name(value: string): az_synapse_pipeline_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_pipeline_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_pipeline_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_pipeline_create_command_builder;
}
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
declare class az_synapse_pipeline_create_run_command_builder extends CommandBuilder<az_synapse_pipeline_create_run_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The pipeline name. */
    name(value: string): az_synapse_pipeline_create_run_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_pipeline_create_run_command_builder;
    /** Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId. */
    isRecovery(value: boolean): az_synapse_pipeline_create_run_command_builder;
    /** Parameters for pipeline run. Can be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    parameters(value: string): az_synapse_pipeline_create_run_command_builder;
    /** The pipeline run ID for rerun. If run ID is specified, the parameters of the specified run will be used to create a new run. */
    referencePipelineRunId(value: string): az_synapse_pipeline_create_run_command_builder;
    /** In recovery mode, the rerun will start from this activity. If not specified, all activities will run. */
    startActivityName(value: string): az_synapse_pipeline_create_run_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_pipeline_create_run_command_builder;
}
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
declare class az_synapse_pipeline_delete_command_builder extends CommandBuilder<az_synapse_pipeline_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The pipeline name. */
    name(value: string): az_synapse_pipeline_delete_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_pipeline_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_pipeline_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_pipeline_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_pipeline_delete_command_builder;
}
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
declare class az_synapse_pipeline_list_command_builder extends CommandBuilder<az_synapse_pipeline_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** The workspace name. */
    workspaceName(value: string): az_synapse_pipeline_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_pipeline_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_pipeline_list_command_builder;
}
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
declare class az_synapse_pipeline_set_command_builder extends CommandBuilder<az_synapse_pipeline_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_pipeline_set_command_builder;
    /** The pipeline name. */
    name(value: string): az_synapse_pipeline_set_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_pipeline_set_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_pipeline_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_pipeline_set_command_builder;
}
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
declare class az_synapse_pipeline_show_command_builder extends CommandBuilder<az_synapse_pipeline_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The pipeline name. */
    name(value: string): az_synapse_pipeline_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_pipeline_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_pipeline_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_pipeline_show_command_builder;
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
declare class az_synapse_role_assignment_create_command_builder extends CommandBuilder<az_synapse_role_assignment_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, assignee: string, role: string, workspaceName: string);
    /** Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_synapse_role_assignment_create_command_builder;
    /** The role name/id that is assigned to the principal. */
    role(value: string): az_synapse_role_assignment_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_assignment_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_assignment_create_command_builder;
}
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
declare class az_synapse_role_assignment_delete_command_builder extends CommandBuilder<az_synapse_role_assignment_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_assignment_delete_command_builder;
    /** Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_synapse_role_assignment_delete_command_builder;
    /** Space-separated role assignment ids. You should not provide --role or --assignee when --ids is provided. */
    ids(value: string): az_synapse_role_assignment_delete_command_builder;
    /** The role name/id that is assigned to the principal. */
    role(value: string): az_synapse_role_assignment_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_assignment_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_role_assignment_delete_command_builder;
}
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
declare class az_synapse_role_assignment_list_command_builder extends CommandBuilder<az_synapse_role_assignment_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_assignment_list_command_builder;
    /** Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_synapse_role_assignment_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_role_assignment_list_command_builder;
    /** The role name/id that is assigned to the principal. */
    role(value: string): az_synapse_role_assignment_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_assignment_list_command_builder;
}
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
declare class az_synapse_role_assignment_show_command_builder extends CommandBuilder<az_synapse_role_assignment_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, workspaceName: string);
    /** Id of the role that is assigned to the principal. */
    id(value: string): az_synapse_role_assignment_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_assignment_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_role_assignment_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_assignment_show_command_builder;
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
declare class az_synapse_role_definition_list_command_builder extends CommandBuilder<az_synapse_role_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_definition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_role_definition_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_definition_list_command_builder;
}
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
declare class az_synapse_role_definition_show_command_builder extends CommandBuilder<az_synapse_role_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, role: string, workspaceName: string);
    /** The role name/id that is assigned to the principal. */
    role(value: string): az_synapse_role_definition_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_definition_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_role_definition_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_definition_show_command_builder;
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
declare class az_synapse_spark_job_cancel_command_builder extends CommandBuilder<az_synapse_spark_job_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, livyId: string, sparkPoolName: string, workspaceName: string);
    /** The id of the Spark job. */
    livyId(value: string): az_synapse_spark_job_cancel_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_job_cancel_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_job_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_job_cancel_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_spark_job_cancel_command_builder;
}
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
declare class az_synapse_spark_job_list_command_builder extends CommandBuilder<az_synapse_spark_job_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, sparkPoolName: string, workspaceName: string);
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_job_list_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_job_list_command_builder;
    /** Optional parameter specifying which index the list should begin from. */
    fromIndex(value: string): az_synapse_spark_job_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_job_list_command_builder;
    /** The size of the returned list.By default it is 20 and that is the maximum. */
    size(value: string): az_synapse_spark_job_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_job_list_command_builder;
}
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
declare class az_synapse_spark_job_show_command_builder extends CommandBuilder<az_synapse_spark_job_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, livyId: string, sparkPoolName: string, workspaceName: string);
    /** The id of the Spark job. */
    livyId(value: string): az_synapse_spark_job_show_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_job_show_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_job_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_job_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_job_show_command_builder;
}
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
declare class az_synapse_spark_job_submit_command_builder extends CommandBuilder<az_synapse_spark_job_submit_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, executorSize: 'Large' | 'Medium' | 'Small', executors: string, mainClassName: string, mainDefinitionFile: string, name: string, sparkPoolName: string, workspaceName: string);
    /** The executor size. */
    executorSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_spark_job_submit_command_builder;
    /** The number of executors. */
    executors(value: string): az_synapse_spark_job_submit_command_builder;
    /** The fully-qualified identifier or the main class that is in the main definition file. */
    mainClassName(value: string): az_synapse_spark_job_submit_command_builder;
    /** The main file used for the job. */
    mainDefinitionFile(value: string): az_synapse_spark_job_submit_command_builder;
    /** The Spark job name. */
    name(value: string): az_synapse_spark_job_submit_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_job_submit_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_job_submit_command_builder;
    /** The array of archives. */
    archives(value: string): az_synapse_spark_job_submit_command_builder;
    /** Optional arguments to the job (Note: please use storage URIs for file arguments). */
    arguments(value: string): az_synapse_spark_job_submit_command_builder;
    /** The configuration of Spark job. */
    configuration(value: string): az_synapse_spark_job_submit_command_builder;
    /** The Spark job language. */
    language(value: 'CSharp' | 'PySpark' | 'Python' | 'Scala' | 'Spark' | 'SparkDotNet'): az_synapse_spark_job_submit_command_builder;
    /** Additional files used for reference in the main definition file. */
    referenceFiles(value: string): az_synapse_spark_job_submit_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_job_submit_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_spark_job_submit_command_builder;
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
declare class az_synapse_spark_pool_create_command_builder extends CommandBuilder<az_synapse_spark_pool_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, nodeCount: string, nodeSize: 'Large' | 'Medium' | 'Small', resourceGroup: string, sparkVersion: string, workspaceName: string);
    /** The name of the Spark pool. */
    name(value: string): az_synapse_spark_pool_create_command_builder;
    /** The number of node. */
    nodeCount(value: string): az_synapse_spark_pool_create_command_builder;
    /** The node size. */
    nodeSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_spark_pool_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_create_command_builder;
    /** The supported Spark version is 2.4 now. */
    sparkVersion(value: string): az_synapse_spark_pool_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_create_command_builder;
    /** The delay time whose unit is minute. */
    delay(value: string): az_synapse_spark_pool_create_command_builder;
    /** The flag of enabling auto pause. */
    enableAutoPause(value: boolean): az_synapse_spark_pool_create_command_builder;
    /** The flag of enabling auto scale. */
    enableAutoScale(value: boolean): az_synapse_spark_pool_create_command_builder;
    /** The library requirements file. */
    libraryRequirements(value: string): az_synapse_spark_pool_create_command_builder;
    /** The max node count. */
    maxNodeCount(value: string): az_synapse_spark_pool_create_command_builder;
    /** The min node count. */
    minNodeCount(value: string): az_synapse_spark_pool_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_spark_pool_create_command_builder;
    /** The node size family. */
    nodeSizeFamily(value: string): az_synapse_spark_pool_create_command_builder;
    /** The Spark events folder. */
    sparkEventsFolder(value: string): az_synapse_spark_pool_create_command_builder;
    /** The default Spark log folder. */
    sparkLogFolder(value: string): az_synapse_spark_pool_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_spark_pool_create_command_builder;
}
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
declare class az_synapse_spark_pool_delete_command_builder extends CommandBuilder<az_synapse_spark_pool_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_spark_pool_delete_command_builder;
    /** The name of the Spark pool. */
    name(value: string): az_synapse_spark_pool_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_spark_pool_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_delete_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_spark_pool_delete_command_builder;
}
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
declare class az_synapse_spark_pool_list_command_builder extends CommandBuilder<az_synapse_spark_pool_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_list_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_pool_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_list_command_builder;
}
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
declare class az_synapse_spark_pool_show_command_builder extends CommandBuilder<az_synapse_spark_pool_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_spark_pool_show_command_builder;
    /** The name of the Spark pool. */
    name(value: string): az_synapse_spark_pool_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_pool_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_show_command_builder;
}
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
declare class az_synapse_spark_pool_update_command_builder extends CommandBuilder<az_synapse_spark_pool_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The delay time whose unit is minute. */
    delay(value: string): az_synapse_spark_pool_update_command_builder;
    /** The flag of enabling auto pause. */
    enableAutoPause(value: boolean): az_synapse_spark_pool_update_command_builder;
    /** The flag of enabling auto scale. */
    enableAutoScale(value: boolean): az_synapse_spark_pool_update_command_builder;
    /** The flag of force operation. */
    force(value: boolean): az_synapse_spark_pool_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_spark_pool_update_command_builder;
    /** The library requirements file. */
    libraryRequirements(value: string): az_synapse_spark_pool_update_command_builder;
    /** The max node count. */
    maxNodeCount(value: string): az_synapse_spark_pool_update_command_builder;
    /** The min node count. */
    minNodeCount(value: string): az_synapse_spark_pool_update_command_builder;
    /** The name of the Spark pool. */
    name(value: string): az_synapse_spark_pool_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_spark_pool_update_command_builder;
    /** The number of node. */
    nodeCount(value: string): az_synapse_spark_pool_update_command_builder;
    /** The node size. */
    nodeSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_spark_pool_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_spark_pool_update_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_update_command_builder;
}
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
declare class az_synapse_spark_pool_wait_command_builder extends CommandBuilder<az_synapse_spark_pool_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, bigDataPoolName: string);
    /** Big Data pool name. */
    bigDataPoolName(value: string): az_synapse_spark_pool_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_synapse_spark_pool_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_synapse_spark_pool_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_synapse_spark_pool_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_synapse_spark_pool_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_spark_pool_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_synapse_spark_pool_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_synapse_spark_pool_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_synapse_spark_pool_wait_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_wait_command_builder;
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
declare class az_synapse_spark_session_cancel_command_builder extends CommandBuilder<az_synapse_spark_session_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, livyId: string, sparkPoolName: string, workspaceName: string);
    /** The id of the Spark session job. */
    livyId(value: string): az_synapse_spark_session_cancel_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_cancel_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_cancel_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_spark_session_cancel_command_builder;
}
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
declare class az_synapse_spark_session_create_command_builder extends CommandBuilder<az_synapse_spark_session_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, executorSize: 'Large' | 'Medium' | 'Small', executors: string, name: string, sparkPoolName: string, workspaceName: string);
    /** The executor size. */
    executorSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_spark_session_create_command_builder;
    /** The number of executors. */
    executors(value: string): az_synapse_spark_session_create_command_builder;
    /** The Spark session name. */
    name(value: string): az_synapse_spark_session_create_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_create_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_create_command_builder;
    /** The configuration of Spark session. */
    configuration(value: string): az_synapse_spark_session_create_command_builder;
    /** Additional files used for reference in the main definition file. */
    referenceFiles(value: string): az_synapse_spark_session_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_spark_session_create_command_builder;
}
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
declare class az_synapse_spark_session_list_command_builder extends CommandBuilder<az_synapse_spark_session_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, sparkPoolName: string, workspaceName: string);
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_list_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_list_command_builder;
    /** Optional parameter specifying which index the list should begin from. */
    fromIndex(value: string): az_synapse_spark_session_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_session_list_command_builder;
    /** The size of the returned list.By default it is 20 and that is the maximum. */
    size(value: string): az_synapse_spark_session_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_list_command_builder;
}
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
declare class az_synapse_spark_session_reset_timeout_command_builder extends CommandBuilder<az_synapse_spark_session_reset_timeout_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, livyId: string, sparkPoolName: string, workspaceName: string);
    /** The id of the Spark session job. */
    livyId(value: string): az_synapse_spark_session_reset_timeout_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_reset_timeout_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_reset_timeout_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_reset_timeout_command_builder;
}
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
declare class az_synapse_spark_session_show_command_builder extends CommandBuilder<az_synapse_spark_session_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, livyId: string, sparkPoolName: string, workspaceName: string);
    /** The id of the Spark session job. */
    livyId(value: string): az_synapse_spark_session_show_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_show_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_session_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_show_command_builder;
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
declare class az_synapse_spark_statement_cancel_command_builder extends CommandBuilder<az_synapse_spark_statement_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, livyId: string, sessionId: string, sparkPoolName: string, workspaceName: string);
    /** The id of the statement. */
    livyId(value: string): az_synapse_spark_statement_cancel_command_builder;
    /** The id of Spark session. */
    sessionId(value: string): az_synapse_spark_statement_cancel_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_statement_cancel_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_statement_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_statement_cancel_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_spark_statement_cancel_command_builder;
}
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
declare class az_synapse_spark_statement_invoke_command_builder extends CommandBuilder<az_synapse_spark_statement_invoke_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, code: string, language: 'CSharp' | 'PySpark' | 'Python' | 'SQL' | 'Scala' | 'Spark' | 'SparkDotNet', sessionId: string, sparkPoolName: string, workspaceName: string);
    /** The code of Spark statement. This is either the code contents or use `@<file path>` to load the content from a file. */
    code(value: string): az_synapse_spark_statement_invoke_command_builder;
    /** The language of Spark statement. */
    language(value: 'CSharp' | 'PySpark' | 'Python' | 'SQL' | 'Scala' | 'Spark' | 'SparkDotNet'): az_synapse_spark_statement_invoke_command_builder;
    /** The id of Spark session. */
    sessionId(value: string): az_synapse_spark_statement_invoke_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_statement_invoke_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_statement_invoke_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_statement_invoke_command_builder;
}
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
declare class az_synapse_spark_statement_list_command_builder extends CommandBuilder<az_synapse_spark_statement_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, sessionId: string, sparkPoolName: string, workspaceName: string);
    /** The id of Spark session. */
    sessionId(value: string): az_synapse_spark_statement_list_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_statement_list_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_statement_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_statement_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_statement_list_command_builder;
}
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
declare class az_synapse_spark_statement_show_command_builder extends CommandBuilder<az_synapse_spark_statement_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, livyId: string, sessionId: string, sparkPoolName: string, workspaceName: string);
    /** The id of the statement. */
    livyId(value: string): az_synapse_spark_statement_show_command_builder;
    /** The id of Spark session. */
    sessionId(value: string): az_synapse_spark_statement_show_command_builder;
    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_statement_show_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_statement_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_statement_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_statement_show_command_builder;
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
declare class az_synapse_sql_pool_create_command_builder extends CommandBuilder<az_synapse_sql_pool_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, performanceLevel: string, resourceGroup: string, workspaceName: string);
    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_create_command_builder;
    /** The performance level. */
    performanceLevel(value: string): az_synapse_sql_pool_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_sql_pool_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_sql_pool_create_command_builder;
}
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
declare class az_synapse_sql_pool_delete_command_builder extends CommandBuilder<az_synapse_sql_pool_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_delete_command_builder;
    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_sql_pool_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_delete_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_sql_pool_delete_command_builder;
}
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
declare class az_synapse_sql_pool_list_command_builder extends CommandBuilder<az_synapse_sql_pool_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_list_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_sql_pool_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_list_command_builder;
}
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
declare class az_synapse_sql_pool_pause_command_builder extends CommandBuilder<az_synapse_sql_pool_pause_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_pause_command_builder;
    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_pause_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_pause_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_pause_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_pause_command_builder;
}
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
declare class az_synapse_sql_pool_resume_command_builder extends CommandBuilder<az_synapse_sql_pool_resume_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_resume_command_builder;
    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_resume_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_resume_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_resume_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_resume_command_builder;
}
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
declare class az_synapse_sql_pool_show_command_builder extends CommandBuilder<az_synapse_sql_pool_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_show_command_builder;
    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_sql_pool_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_show_command_builder;
}
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
declare class az_synapse_sql_pool_update_command_builder extends CommandBuilder<az_synapse_sql_pool_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_update_command_builder;
    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_update_command_builder;
    /** The performance level. */
    performanceLevel(value: string): az_synapse_sql_pool_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_sql_pool_update_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_update_command_builder;
}
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
declare class az_synapse_sql_pool_wait_command_builder extends CommandBuilder<az_synapse_sql_pool_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, sqlPoolName: string);
    /** SQL pool name. */
    sqlPoolName(value: string): az_synapse_sql_pool_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_synapse_sql_pool_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_synapse_sql_pool_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_synapse_sql_pool_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_synapse_sql_pool_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_synapse_sql_pool_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_synapse_sql_pool_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_synapse_sql_pool_wait_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_wait_command_builder;
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
declare class az_synapse_trigger_run_query_by_workspace_command_builder extends CommandBuilder<az_synapse_trigger_run_query_by_workspace_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lastUpdatedAfter: string, lastUpdatedBefore: string, workspaceName: string);
    /** The time at or after which the run event was updated in 'ISO 8601' format. */
    lastUpdatedAfter(value: string): az_synapse_trigger_run_query_by_workspace_command_builder;
    /** The time at or before which the run event was updated in 'ISO 8601' format. */
    lastUpdatedBefore(value: string): az_synapse_trigger_run_query_by_workspace_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_run_query_by_workspace_command_builder;
    /** The continuation token for getting the next page of results. Null for first page. */
    continuationToken(value: string): az_synapse_trigger_run_query_by_workspace_command_builder;
    /** List of filters. */
    filters(value: string): az_synapse_trigger_run_query_by_workspace_command_builder;
    /** List of OrderBy option. */
    orderBy(value: string): az_synapse_trigger_run_query_by_workspace_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_run_query_by_workspace_command_builder;
}
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
declare class az_synapse_trigger_run_rerun_command_builder extends CommandBuilder<az_synapse_trigger_run_rerun_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, runId: string, workspaceName: string);
    /** The trigger name. */
    name(value: string): az_synapse_trigger_run_rerun_command_builder;
    /** The trigger run identifier. */
    runId(value: string): az_synapse_trigger_run_rerun_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_run_rerun_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_run_rerun_command_builder;
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
declare class az_synapse_trigger_create_command_builder extends CommandBuilder<az_synapse_trigger_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_trigger_create_command_builder;
    /** The trigger name. */
    name(value: string): az_synapse_trigger_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_trigger_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_create_command_builder;
}
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
declare class az_synapse_trigger_delete_command_builder extends CommandBuilder<az_synapse_trigger_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The trigger name. */
    name(value: string): az_synapse_trigger_delete_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_trigger_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_trigger_delete_command_builder;
}
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
declare class az_synapse_trigger_get_event_subscription_status_command_builder extends CommandBuilder<az_synapse_trigger_get_event_subscription_status_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The trigger name. */
    name(value: string): az_synapse_trigger_get_event_subscription_status_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_get_event_subscription_status_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_get_event_subscription_status_command_builder;
}
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
declare class az_synapse_trigger_list_command_builder extends CommandBuilder<az_synapse_trigger_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_trigger_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_list_command_builder;
}
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
declare class az_synapse_trigger_set_command_builder extends CommandBuilder<az_synapse_trigger_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, file: string, name: string, workspaceName: string);
    /** Properties may be supplied from a JSON file using the `@{path}` syntax or a JSON string. */
    file(value: string): az_synapse_trigger_set_command_builder;
    /** The trigger name. */
    name(value: string): az_synapse_trigger_set_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_set_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_trigger_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_set_command_builder;
}
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
declare class az_synapse_trigger_show_command_builder extends CommandBuilder<az_synapse_trigger_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The trigger name. */
    name(value: string): az_synapse_trigger_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_trigger_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_show_command_builder;
}
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
declare class az_synapse_trigger_start_command_builder extends CommandBuilder<az_synapse_trigger_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The trigger name. */
    name(value: string): az_synapse_trigger_start_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_start_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_trigger_start_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_start_command_builder;
}
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
declare class az_synapse_trigger_stop_command_builder extends CommandBuilder<az_synapse_trigger_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The trigger name. */
    name(value: string): az_synapse_trigger_stop_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_stop_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_trigger_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_stop_command_builder;
}
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
declare class az_synapse_trigger_subscribe_to_event_command_builder extends CommandBuilder<az_synapse_trigger_subscribe_to_event_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The trigger name. */
    name(value: string): az_synapse_trigger_subscribe_to_event_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_subscribe_to_event_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_trigger_subscribe_to_event_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_subscribe_to_event_command_builder;
}
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
declare class az_synapse_trigger_unsubscribe_from_event_command_builder extends CommandBuilder<az_synapse_trigger_unsubscribe_from_event_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, workspaceName: string);
    /** The trigger name. */
    name(value: string): az_synapse_trigger_unsubscribe_from_event_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_trigger_unsubscribe_from_event_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_trigger_unsubscribe_from_event_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_trigger_unsubscribe_from_event_command_builder;
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
declare class az_synapse_workspace_firewall_rule_create_command_builder extends CommandBuilder<az_synapse_workspace_firewall_rule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, endIpAddress: string, name: string, resourceGroup: string, startIpAddress: string, workspaceName: string);
    /** The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. */
    endIpAddress(value: string): az_synapse_workspace_firewall_rule_create_command_builder;
    /** The IP firewall rule name. */
    name(value: string): az_synapse_workspace_firewall_rule_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_create_command_builder;
    /** The start IP address of the firewall rule. Must be IPv4 format. */
    startIpAddress(value: string): az_synapse_workspace_firewall_rule_create_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_firewall_rule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_create_command_builder;
}
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
declare class az_synapse_workspace_firewall_rule_delete_command_builder extends CommandBuilder<az_synapse_workspace_firewall_rule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_firewall_rule_delete_command_builder;
    /** The IP firewall rule name. */
    name(value: string): az_synapse_workspace_firewall_rule_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_firewall_rule_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_delete_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_workspace_firewall_rule_delete_command_builder;
}
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
declare class az_synapse_workspace_firewall_rule_list_command_builder extends CommandBuilder<az_synapse_workspace_firewall_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_list_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_workspace_firewall_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_list_command_builder;
}
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
declare class az_synapse_workspace_firewall_rule_show_command_builder extends CommandBuilder<az_synapse_workspace_firewall_rule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_firewall_rule_show_command_builder;
    /** The IP firewall rule name. */
    name(value: string): az_synapse_workspace_firewall_rule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_workspace_firewall_rule_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_show_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_show_command_builder;
}
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
declare class az_synapse_workspace_firewall_rule_wait_command_builder extends CommandBuilder<az_synapse_workspace_firewall_rule_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, ruleName: string);
    /** The IP firewall rule name. */
    ruleName(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_wait_command_builder;
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
declare class az_synapse_workspace_check_name_command_builder extends CommandBuilder<az_synapse_workspace_check_name_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name you wanted to check. */
    name(value: string): az_synapse_workspace_check_name_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_check_name_command_builder;
}
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
declare class az_synapse_workspace_create_command_builder extends CommandBuilder<az_synapse_workspace_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, fileSystem: string, location: string, name: string, resourceGroup: string, sqlAdminLoginPassword: string, sqlAdminLoginUser: string, storageAccount: string);
    /** The file system of the data lake storage account. */
    fileSystem(value: string): az_synapse_workspace_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_synapse_workspace_create_command_builder;
    /** The workspace name. */
    name(value: string): az_synapse_workspace_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_create_command_builder;
    /** The sql administrator login password. */
    sqlAdminLoginPassword(value: string): az_synapse_workspace_create_command_builder;
    /** The sql administrator login user name. */
    sqlAdminLoginUser(value: string): az_synapse_workspace_create_command_builder;
    /** The data lake storage account name or resource id. */
    storageAccount(value: string): az_synapse_workspace_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_workspace_create_command_builder;
}
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
declare class az_synapse_workspace_delete_command_builder extends CommandBuilder<az_synapse_workspace_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_delete_command_builder;
    /** The workspace name. */
    name(value: string): az_synapse_workspace_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_workspace_delete_command_builder;
}
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
declare class az_synapse_workspace_list_command_builder extends CommandBuilder<az_synapse_workspace_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_workspace_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_list_command_builder;
}
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
declare class az_synapse_workspace_show_command_builder extends CommandBuilder<az_synapse_workspace_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_show_command_builder;
    /** The workspace name. */
    name(value: string): az_synapse_workspace_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_workspace_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_show_command_builder;
}
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
declare class az_synapse_workspace_update_command_builder extends CommandBuilder<az_synapse_workspace_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_update_command_builder;
    /** The workspace name. */
    name(value: string): az_synapse_workspace_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_update_command_builder;
    /** The sql administrator login password. */
    sqlAdminLoginPassword(value: string): az_synapse_workspace_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_workspace_update_command_builder;
}
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
declare class az_synapse_workspace_wait_command_builder extends CommandBuilder<az_synapse_workspace_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_wait_command_builder;
    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_workspace_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_synapse_workspace_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_synapse_workspace_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_synapse_workspace_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_synapse_workspace_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_synapse_workspace_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_synapse_workspace_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_synapse_workspace_wait_command_builder;
}
export {};
