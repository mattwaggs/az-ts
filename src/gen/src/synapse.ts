import { CommandBuilder } from '../base';

/** Manage Synapse's role assignments. */
export class az_synapse_role_assignment {
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
    static az_synapse_role_assignment_create(assignee: string, role: string, workspaceName: string): az_synapse_role_assignment_create_command_builder {
        return new az_synapse_role_assignment_create_command_builder("az synapse role assignment create", assignee, role, workspaceName);
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
    static az_synapse_role_assignment_delete(workspaceName: string): az_synapse_role_assignment_delete_command_builder {
        return new az_synapse_role_assignment_delete_command_builder("az synapse role assignment delete", workspaceName);
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
    static az_synapse_role_assignment_list(workspaceName: string): az_synapse_role_assignment_list_command_builder {
        return new az_synapse_role_assignment_list_command_builder("az synapse role assignment list", workspaceName);
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
    static az_synapse_role_assignment_show(id: string, workspaceName: string): az_synapse_role_assignment_show_command_builder {
        return new az_synapse_role_assignment_show_command_builder("az synapse role assignment show", id, workspaceName);
    }
}

/** Manage Synapse's role definitions. */
export class az_synapse_role_definition {
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
    static az_synapse_role_definition_list(workspaceName: string): az_synapse_role_definition_list_command_builder {
        return new az_synapse_role_definition_list_command_builder("az synapse role definition list", workspaceName);
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
    static az_synapse_role_definition_show(role: string, workspaceName: string): az_synapse_role_definition_show_command_builder {
        return new az_synapse_role_definition_show_command_builder("az synapse role definition show", role, workspaceName);
    }
}

/** Manage Synapse's role assignments and definitions. */
export class az_synapse_role {
}

/** Manage Synapse Spark batch jobs. */
export class az_synapse_spark_job {
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
    static az_synapse_spark_job_cancel(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_job_cancel_command_builder {
        return new az_synapse_spark_job_cancel_command_builder("az synapse spark job cancel", livyId, sparkPoolName, workspaceName);
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
    static az_synapse_spark_job_list(sparkPoolName: string, workspaceName: string): az_synapse_spark_job_list_command_builder {
        return new az_synapse_spark_job_list_command_builder("az synapse spark job list", sparkPoolName, workspaceName);
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
    static az_synapse_spark_job_show(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_job_show_command_builder {
        return new az_synapse_spark_job_show_command_builder("az synapse spark job show", livyId, sparkPoolName, workspaceName);
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
    static az_synapse_spark_job_submit(executorSize: 'Large' | 'Medium' | 'Small', executors: string, mainClassName: string, mainDefinitionFile: string, name: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_job_submit_command_builder {
        return new az_synapse_spark_job_submit_command_builder("az synapse spark job submit", executorSize, executors, mainClassName, mainDefinitionFile, name, sparkPoolName, workspaceName);
    }
}

/** Manage Spark pools. */
export class az_synapse_spark_pool {
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
    static az_synapse_spark_pool_create(name: string, nodeCount: string, nodeSize: 'Large' | 'Medium' | 'Small', resourceGroup: string, sparkVersion: string, workspaceName: string): az_synapse_spark_pool_create_command_builder {
        return new az_synapse_spark_pool_create_command_builder("az synapse spark pool create", name, nodeCount, nodeSize, resourceGroup, sparkVersion, workspaceName);
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
    static az_synapse_spark_pool_delete(): az_synapse_spark_pool_delete_command_builder {
        return new az_synapse_spark_pool_delete_command_builder("az synapse spark pool delete");
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
    static az_synapse_spark_pool_list(resourceGroup: string, workspaceName: string): az_synapse_spark_pool_list_command_builder {
        return new az_synapse_spark_pool_list_command_builder("az synapse spark pool list", resourceGroup, workspaceName);
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
    static az_synapse_spark_pool_show(): az_synapse_spark_pool_show_command_builder {
        return new az_synapse_spark_pool_show_command_builder("az synapse spark pool show");
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
    static az_synapse_spark_pool_update(): az_synapse_spark_pool_update_command_builder {
        return new az_synapse_spark_pool_update_command_builder("az synapse spark pool update");
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
    static az_synapse_spark_pool_wait(bigDataPoolName: string): az_synapse_spark_pool_wait_command_builder {
        return new az_synapse_spark_pool_wait_command_builder("az synapse spark pool wait", bigDataPoolName);
    }
}

/** Manage Synapse Spark sessions. */
export class az_synapse_spark_session {
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
    static az_synapse_spark_session_cancel(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_session_cancel_command_builder {
        return new az_synapse_spark_session_cancel_command_builder("az synapse spark session cancel", livyId, sparkPoolName, workspaceName);
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
    static az_synapse_spark_session_create(executorSize: 'Large' | 'Medium' | 'Small', executors: string, name: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_session_create_command_builder {
        return new az_synapse_spark_session_create_command_builder("az synapse spark session create", executorSize, executors, name, sparkPoolName, workspaceName);
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
    static az_synapse_spark_session_list(sparkPoolName: string, workspaceName: string): az_synapse_spark_session_list_command_builder {
        return new az_synapse_spark_session_list_command_builder("az synapse spark session list", sparkPoolName, workspaceName);
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
    static az_synapse_spark_session_reset_timeout(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_session_reset_timeout_command_builder {
        return new az_synapse_spark_session_reset_timeout_command_builder("az synapse spark session reset-timeout", livyId, sparkPoolName, workspaceName);
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
    static az_synapse_spark_session_show(livyId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_session_show_command_builder {
        return new az_synapse_spark_session_show_command_builder("az synapse spark session show", livyId, sparkPoolName, workspaceName);
    }
}

/** Manage Synapse Spark statements. */
export class az_synapse_spark_statement {
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
    static az_synapse_spark_statement_cancel(livyId: string, sessionId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_statement_cancel_command_builder {
        return new az_synapse_spark_statement_cancel_command_builder("az synapse spark statement cancel", livyId, sessionId, sparkPoolName, workspaceName);
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
    static az_synapse_spark_statement_invoke(code: string, language: 'CSharp' | 'PySpark' | 'Python' | 'SQL' | 'Scala' | 'Spark' | 'SparkDotNet', sessionId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_statement_invoke_command_builder {
        return new az_synapse_spark_statement_invoke_command_builder("az synapse spark statement invoke", code, language, sessionId, sparkPoolName, workspaceName);
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
    static az_synapse_spark_statement_list(sessionId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_statement_list_command_builder {
        return new az_synapse_spark_statement_list_command_builder("az synapse spark statement list", sessionId, sparkPoolName, workspaceName);
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
    static az_synapse_spark_statement_show(livyId: string, sessionId: string, sparkPoolName: string, workspaceName: string): az_synapse_spark_statement_show_command_builder {
        return new az_synapse_spark_statement_show_command_builder("az synapse spark statement show", livyId, sessionId, sparkPoolName, workspaceName);
    }
}

/** Manage Spark pools and Spark jobs. */
export class az_synapse_spark {
}

/** Manage SQL pools. */
export class az_synapse_sql_pool {
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
    static az_synapse_sql_pool_create(name: string, performanceLevel: string, resourceGroup: string, workspaceName: string): az_synapse_sql_pool_create_command_builder {
        return new az_synapse_sql_pool_create_command_builder("az synapse sql pool create", name, performanceLevel, resourceGroup, workspaceName);
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
    static az_synapse_sql_pool_delete(): az_synapse_sql_pool_delete_command_builder {
        return new az_synapse_sql_pool_delete_command_builder("az synapse sql pool delete");
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
    static az_synapse_sql_pool_list(resourceGroup: string, workspaceName: string): az_synapse_sql_pool_list_command_builder {
        return new az_synapse_sql_pool_list_command_builder("az synapse sql pool list", resourceGroup, workspaceName);
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
    static az_synapse_sql_pool_pause(): az_synapse_sql_pool_pause_command_builder {
        return new az_synapse_sql_pool_pause_command_builder("az synapse sql pool pause");
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
    static az_synapse_sql_pool_resume(): az_synapse_sql_pool_resume_command_builder {
        return new az_synapse_sql_pool_resume_command_builder("az synapse sql pool resume");
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
    static az_synapse_sql_pool_show(): az_synapse_sql_pool_show_command_builder {
        return new az_synapse_sql_pool_show_command_builder("az synapse sql pool show");
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
    static az_synapse_sql_pool_update(): az_synapse_sql_pool_update_command_builder {
        return new az_synapse_sql_pool_update_command_builder("az synapse sql pool update");
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
    static az_synapse_sql_pool_wait(sqlPoolName: string): az_synapse_sql_pool_wait_command_builder {
        return new az_synapse_sql_pool_wait_command_builder("az synapse sql pool wait", sqlPoolName);
    }
}

/** Manage SQL pools. */
export class az_synapse_sql {
}

/** Manage a workspace's firewall rules. */
export class az_synapse_workspace_firewall_rule {
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
    static az_synapse_workspace_firewall_rule_create(endIpAddress: string, name: string, resourceGroup: string, startIpAddress: string, workspaceName: string): az_synapse_workspace_firewall_rule_create_command_builder {
        return new az_synapse_workspace_firewall_rule_create_command_builder("az synapse workspace firewall-rule create", endIpAddress, name, resourceGroup, startIpAddress, workspaceName);
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
    static az_synapse_workspace_firewall_rule_delete(): az_synapse_workspace_firewall_rule_delete_command_builder {
        return new az_synapse_workspace_firewall_rule_delete_command_builder("az synapse workspace firewall-rule delete");
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
    static az_synapse_workspace_firewall_rule_list(resourceGroup: string, workspaceName: string): az_synapse_workspace_firewall_rule_list_command_builder {
        return new az_synapse_workspace_firewall_rule_list_command_builder("az synapse workspace firewall-rule list", resourceGroup, workspaceName);
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
    static az_synapse_workspace_firewall_rule_show(): az_synapse_workspace_firewall_rule_show_command_builder {
        return new az_synapse_workspace_firewall_rule_show_command_builder("az synapse workspace firewall-rule show");
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
    static az_synapse_workspace_firewall_rule_wait(ruleName: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        return new az_synapse_workspace_firewall_rule_wait_command_builder("az synapse workspace firewall-rule wait", ruleName);
    }
}

/** Manage Synapse workspaces. */
export class az_synapse_workspace {
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
    static az_synapse_workspace_check_name(name: string): az_synapse_workspace_check_name_command_builder {
        return new az_synapse_workspace_check_name_command_builder("az synapse workspace check-name", name);
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
    static az_synapse_workspace_create(fileSystem: string, location: string, name: string, resourceGroup: string, sqlAdminLoginPassword: string, sqlAdminLoginUser: string, storageAccount: string): az_synapse_workspace_create_command_builder {
        return new az_synapse_workspace_create_command_builder("az synapse workspace create", fileSystem, location, name, resourceGroup, sqlAdminLoginPassword, sqlAdminLoginUser, storageAccount);
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
    static az_synapse_workspace_delete(): az_synapse_workspace_delete_command_builder {
        return new az_synapse_workspace_delete_command_builder("az synapse workspace delete");
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
    static az_synapse_workspace_list(): az_synapse_workspace_list_command_builder {
        return new az_synapse_workspace_list_command_builder("az synapse workspace list");
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
    static az_synapse_workspace_show(): az_synapse_workspace_show_command_builder {
        return new az_synapse_workspace_show_command_builder("az synapse workspace show");
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
    static az_synapse_workspace_update(): az_synapse_workspace_update_command_builder {
        return new az_synapse_workspace_update_command_builder("az synapse workspace update");
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
    static az_synapse_workspace_wait(resourceGroup: string, workspaceName: string): az_synapse_workspace_wait_command_builder {
        return new az_synapse_workspace_wait_command_builder("az synapse workspace wait", resourceGroup, workspaceName);
    }
}

/** Manage and operate Synapse Workspace, Spark Pool, SQL Pool. */
export class az_synapse {
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
class az_synapse_role_assignment_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, assignee: string, role: string, workspaceName: string) {
        super(commandParent);
        this.assignee(assignee)
        this.role(role)
        this.workspaceName(workspaceName)
    }

    /** Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_synapse_role_assignment_create_command_builder {
        this.setFlag("--assignee", value);
        return this;
    }

    /** The role name/id that is assigned to the principal. */
    role(value: string): az_synapse_role_assignment_create_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_assignment_create_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_assignment_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_role_assignment_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, workspaceName: string) {
        super(commandParent);
        this.workspaceName(workspaceName)
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_assignment_delete_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_synapse_role_assignment_delete_command_builder {
        this.setFlag("--assignee", value);
        return this;
    }

    /** Space-separated role assignment ids. You should not provide --role or --assignee when --ids is provided. */
    ids(value: string): az_synapse_role_assignment_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The role name/id that is assigned to the principal. */
    role(value: string): az_synapse_role_assignment_delete_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_assignment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_role_assignment_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_synapse_role_assignment_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, workspaceName: string) {
        super(commandParent);
        this.workspaceName(workspaceName)
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_assignment_list_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Represent a user, group, or service principal. Supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_synapse_role_assignment_list_command_builder {
        this.setFlag("--assignee", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_role_assignment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The role name/id that is assigned to the principal. */
    role(value: string): az_synapse_role_assignment_list_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_assignment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_role_assignment_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, workspaceName: string) {
        super(commandParent);
        this.id(id)
        this.workspaceName(workspaceName)
    }

    /** Id of the role that is assigned to the principal. */
    id(value: string): az_synapse_role_assignment_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_assignment_show_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_role_assignment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_assignment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_role_definition_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, workspaceName: string) {
        super(commandParent);
        this.workspaceName(workspaceName)
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_definition_list_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_role_definition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_definition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_role_definition_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, role: string, workspaceName: string) {
        super(commandParent);
        this.role(role)
        this.workspaceName(workspaceName)
    }

    /** The role name/id that is assigned to the principal. */
    role(value: string): az_synapse_role_definition_show_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_role_definition_show_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_role_definition_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_role_definition_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_spark_job_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, livyId: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.livyId(livyId)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The id of the Spark job. */
    livyId(value: string): az_synapse_spark_job_cancel_command_builder {
        this.setFlag("--livy-id", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_job_cancel_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_job_cancel_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_job_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_spark_job_cancel_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_synapse_spark_job_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_job_list_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_job_list_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Optional parameter specifying which index the list should begin from. */
    fromIndex(value: string): az_synapse_spark_job_list_command_builder {
        this.setFlag("--from-index", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_job_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The size of the returned list.By default it is 20 and that is the maximum. */
    size(value: string): az_synapse_spark_job_list_command_builder {
        this.setFlag("--size", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_job_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_spark_job_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, livyId: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.livyId(livyId)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The id of the Spark job. */
    livyId(value: string): az_synapse_spark_job_show_command_builder {
        this.setFlag("--livy-id", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_job_show_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_job_show_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_job_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_job_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_spark_job_submit_command_builder extends CommandBuilder {
    constructor(commandPath: string, executorSize: 'Large' | 'Medium' | 'Small', executors: string, mainClassName: string, mainDefinitionFile: string, name: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.executorSize(executorSize)
        this.executors(executors)
        this.mainClassName(mainClassName)
        this.mainDefinitionFile(mainDefinitionFile)
        this.name(name)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The executor size. */
    executorSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--executor-size", value);
        return this;
    }

    /** The number of executors. */
    executors(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--executors", value);
        return this;
    }

    /** The fully-qualified identifier or the main class that is in the main definition file. */
    mainClassName(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--main-class-name", value);
        return this;
    }

    /** The main file used for the job. */
    mainDefinitionFile(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--main-definition-file", value);
        return this;
    }

    /** The Spark job name. */
    name(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** The array of archives. */
    archives(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--archives", value);
        return this;
    }

    /** Optional arguments to the job (Note: please use storage URIs for file arguments). */
    arguments(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--arguments", value);
        return this;
    }

    /** The configuration of Spark job. */
    configuration(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--configuration", value);
        return this;
    }

    /** The Spark job language. */
    language(value: 'CSharp' | 'PySpark' | 'Python' | 'Scala' | 'Spark' | 'SparkDotNet'): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--language", value);
        return this;
    }

    /** Additional files used for reference in the main definition file. */
    referenceFiles(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--reference-files", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_spark_job_submit_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_synapse_spark_pool_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, nodeCount: string, nodeSize: 'Large' | 'Medium' | 'Small', resourceGroup: string, sparkVersion: string, workspaceName: string) {
        super(commandParent);
        this.name(name)
        this.nodeCount(nodeCount)
        this.nodeSize(nodeSize)
        this.resourceGroup(resourceGroup)
        this.sparkVersion(sparkVersion)
        this.workspaceName(workspaceName)
    }

    /** The name of the Spark pool. */
    name(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The number of node. */
    nodeCount(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--node-count", value);
        return this;
    }

    /** The node size. */
    nodeSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--node-size", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The supported Spark version is 2.4 now. */
    sparkVersion(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--spark-version", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** The delay time whose unit is minute. */
    delay(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--delay", value);
        return this;
    }

    /** The flag of enabling auto pause. */
    enableAutoPause(value: boolean): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--enable-auto-pause", value.toString());
        return this;
    }

    /** The flag of enabling auto scale. */
    enableAutoScale(value: boolean): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--enable-auto-scale", value.toString());
        return this;
    }

    /** The library requirements file. */
    libraryRequirements(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--library-requirements", value);
        return this;
    }

    /** The max node count. */
    maxNodeCount(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--max-node-count", value);
        return this;
    }

    /** The min node count. */
    minNodeCount(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--min-node-count", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The node size family. */
    nodeSizeFamily(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--node-size-family", value);
        return this;
    }

    /** The Spark events folder. */
    sparkEventsFolder(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--spark-events-folder", value);
        return this;
    }

    /** The default Spark log folder. */
    sparkLogFolder(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--spark-log-folder", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_spark_pool_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_synapse_spark_pool_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_spark_pool_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Spark pool. */
    name(value: string): az_synapse_spark_pool_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_spark_pool_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_delete_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_spark_pool_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_synapse_spark_pool_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string, workspaceName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.workspaceName(workspaceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_list_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_pool_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_spark_pool_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_spark_pool_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Spark pool. */
    name(value: string): az_synapse_spark_pool_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_pool_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_show_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_spark_pool_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** The delay time whose unit is minute. */
    delay(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--delay", value);
        return this;
    }

    /** The flag of enabling auto pause. */
    enableAutoPause(value: boolean): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--enable-auto-pause", value.toString());
        return this;
    }

    /** The flag of enabling auto scale. */
    enableAutoScale(value: boolean): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--enable-auto-scale", value.toString());
        return this;
    }

    /** The flag of force operation. */
    force(value: boolean): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--force", value.toString());
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The library requirements file. */
    libraryRequirements(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--library-requirements", value);
        return this;
    }

    /** The max node count. */
    maxNodeCount(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--max-node-count", value);
        return this;
    }

    /** The min node count. */
    minNodeCount(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--min-node-count", value);
        return this;
    }

    /** The name of the Spark pool. */
    name(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The number of node. */
    nodeCount(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--node-count", value);
        return this;
    }

    /** The node size. */
    nodeSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--node-size", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_update_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_spark_pool_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, bigDataPoolName: string) {
        super(commandParent);
        this.bigDataPoolName(bigDataPoolName)
    }

    /** Big Data pool name. */
    bigDataPoolName(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--big-data-pool-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_spark_pool_wait_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_spark_session_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, livyId: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.livyId(livyId)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The id of the Spark session job. */
    livyId(value: string): az_synapse_spark_session_cancel_command_builder {
        this.setFlag("--livy-id", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_cancel_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_cancel_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_spark_session_cancel_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_synapse_spark_session_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, executorSize: 'Large' | 'Medium' | 'Small', executors: string, name: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.executorSize(executorSize)
        this.executors(executors)
        this.name(name)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The executor size. */
    executorSize(value: 'Large' | 'Medium' | 'Small'): az_synapse_spark_session_create_command_builder {
        this.setFlag("--executor-size", value);
        return this;
    }

    /** The number of executors. */
    executors(value: string): az_synapse_spark_session_create_command_builder {
        this.setFlag("--executors", value);
        return this;
    }

    /** The Spark session name. */
    name(value: string): az_synapse_spark_session_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_create_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_create_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** The configuration of Spark session. */
    configuration(value: string): az_synapse_spark_session_create_command_builder {
        this.setFlag("--configuration", value);
        return this;
    }

    /** Additional files used for reference in the main definition file. */
    referenceFiles(value: string): az_synapse_spark_session_create_command_builder {
        this.setFlag("--reference-files", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_spark_session_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_synapse_spark_session_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_list_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_list_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Optional parameter specifying which index the list should begin from. */
    fromIndex(value: string): az_synapse_spark_session_list_command_builder {
        this.setFlag("--from-index", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_session_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The size of the returned list.By default it is 20 and that is the maximum. */
    size(value: string): az_synapse_spark_session_list_command_builder {
        this.setFlag("--size", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_spark_session_reset_timeout_command_builder extends CommandBuilder {
    constructor(commandPath: string, livyId: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.livyId(livyId)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The id of the Spark session job. */
    livyId(value: string): az_synapse_spark_session_reset_timeout_command_builder {
        this.setFlag("--livy-id", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_reset_timeout_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_reset_timeout_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_reset_timeout_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_spark_session_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, livyId: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.livyId(livyId)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The id of the Spark session job. */
    livyId(value: string): az_synapse_spark_session_show_command_builder {
        this.setFlag("--livy-id", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_session_show_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_session_show_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_session_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_session_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_spark_statement_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, livyId: string, sessionId: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.livyId(livyId)
        this.sessionId(sessionId)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The id of the statement. */
    livyId(value: string): az_synapse_spark_statement_cancel_command_builder {
        this.setFlag("--livy-id", value);
        return this;
    }

    /** The id of Spark session. */
    sessionId(value: string): az_synapse_spark_statement_cancel_command_builder {
        this.setFlag("--session-id", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_statement_cancel_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_statement_cancel_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_statement_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_spark_statement_cancel_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_synapse_spark_statement_invoke_command_builder extends CommandBuilder {
    constructor(commandPath: string, code: string, language: 'CSharp' | 'PySpark' | 'Python' | 'SQL' | 'Scala' | 'Spark' | 'SparkDotNet', sessionId: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.code(code)
        this.language(language)
        this.sessionId(sessionId)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The code of Spark statement. This is either the code contents or use `@<file path>` to load the content from a file. */
    code(value: string): az_synapse_spark_statement_invoke_command_builder {
        this.setFlag("--code", value);
        return this;
    }

    /** The language of Spark statement. */
    language(value: 'CSharp' | 'PySpark' | 'Python' | 'SQL' | 'Scala' | 'Spark' | 'SparkDotNet'): az_synapse_spark_statement_invoke_command_builder {
        this.setFlag("--language", value);
        return this;
    }

    /** The id of Spark session. */
    sessionId(value: string): az_synapse_spark_statement_invoke_command_builder {
        this.setFlag("--session-id", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_statement_invoke_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_statement_invoke_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_statement_invoke_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_spark_statement_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, sessionId: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.sessionId(sessionId)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The id of Spark session. */
    sessionId(value: string): az_synapse_spark_statement_list_command_builder {
        this.setFlag("--session-id", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_statement_list_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_statement_list_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_statement_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_statement_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_spark_statement_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, livyId: string, sessionId: string, sparkPoolName: string, workspaceName: string) {
        super(commandParent);
        this.livyId(livyId)
        this.sessionId(sessionId)
        this.sparkPoolName(sparkPoolName)
        this.workspaceName(workspaceName)
    }

    /** The id of the statement. */
    livyId(value: string): az_synapse_spark_statement_show_command_builder {
        this.setFlag("--livy-id", value);
        return this;
    }

    /** The id of Spark session. */
    sessionId(value: string): az_synapse_spark_statement_show_command_builder {
        this.setFlag("--session-id", value);
        return this;
    }

    /** The name of the Spark pool. */
    sparkPoolName(value: string): az_synapse_spark_statement_show_command_builder {
        this.setFlag("--spark-pool-name", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_spark_statement_show_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_spark_statement_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_spark_statement_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_sql_pool_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, performanceLevel: string, resourceGroup: string, workspaceName: string) {
        super(commandParent);
        this.name(name)
        this.performanceLevel(performanceLevel)
        this.resourceGroup(resourceGroup)
        this.workspaceName(workspaceName)
    }

    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The performance level. */
    performanceLevel(value: string): az_synapse_sql_pool_create_command_builder {
        this.setFlag("--performance-level", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_create_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_sql_pool_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_sql_pool_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_synapse_sql_pool_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_sql_pool_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_delete_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_sql_pool_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_synapse_sql_pool_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string, workspaceName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.workspaceName(workspaceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_list_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_sql_pool_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_sql_pool_pause_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_pause_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_pause_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_pause_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_pause_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_pause_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_sql_pool_resume_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_resume_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_resume_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_resume_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_resume_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_resume_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_sql_pool_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_sql_pool_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_show_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_sql_pool_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The SQL pool name. */
    name(value: string): az_synapse_sql_pool_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The performance level. */
    performanceLevel(value: string): az_synapse_sql_pool_update_command_builder {
        this.setFlag("--performance-level", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_sql_pool_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_update_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_sql_pool_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, sqlPoolName: string) {
        super(commandParent);
        this.sqlPoolName(sqlPoolName)
    }

    /** SQL pool name. */
    sqlPoolName(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--sql-pool-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_sql_pool_wait_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_workspace_firewall_rule_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, endIpAddress: string, name: string, resourceGroup: string, startIpAddress: string, workspaceName: string) {
        super(commandParent);
        this.endIpAddress(endIpAddress)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.startIpAddress(startIpAddress)
        this.workspaceName(workspaceName)
    }

    /** The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. */
    endIpAddress(value: string): az_synapse_workspace_firewall_rule_create_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** The IP firewall rule name. */
    name(value: string): az_synapse_workspace_firewall_rule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The start IP address of the firewall rule. Must be IPv4 format. */
    startIpAddress(value: string): az_synapse_workspace_firewall_rule_create_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_create_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_firewall_rule_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_workspace_firewall_rule_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_firewall_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The IP firewall rule name. */
    name(value: string): az_synapse_workspace_firewall_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_firewall_rule_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_delete_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_workspace_firewall_rule_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_synapse_workspace_firewall_rule_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string, workspaceName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.workspaceName(workspaceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_list_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_workspace_firewall_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_workspace_firewall_rule_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_firewall_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The IP firewall rule name. */
    name(value: string): az_synapse_workspace_firewall_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_workspace_firewall_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_show_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_workspace_firewall_rule_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, ruleName: string) {
        super(commandParent);
        this.ruleName(ruleName)
    }

    /** The IP firewall rule name. */
    ruleName(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--rule-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }

    /** The workspace name. */
    workspaceName(value: string): az_synapse_workspace_firewall_rule_wait_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }
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
class az_synapse_workspace_check_name_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The name you wanted to check. */
    name(value: string): az_synapse_workspace_check_name_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_check_name_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_workspace_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, fileSystem: string, location: string, name: string, resourceGroup: string, sqlAdminLoginPassword: string, sqlAdminLoginUser: string, storageAccount: string) {
        super(commandParent);
        this.fileSystem(fileSystem)
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sqlAdminLoginPassword(sqlAdminLoginPassword)
        this.sqlAdminLoginUser(sqlAdminLoginUser)
        this.storageAccount(storageAccount)
    }

    /** The file system of the data lake storage account. */
    fileSystem(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--file-system", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The workspace name. */
    name(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The sql administrator login password. */
    sqlAdminLoginPassword(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--sql-admin-login-password", value);
        return this;
    }

    /** The sql administrator login user name. */
    sqlAdminLoginUser(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--sql-admin-login-user", value);
        return this;
    }

    /** The data lake storage account name or resource id. */
    storageAccount(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_workspace_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_synapse_workspace_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The workspace name. */
    name(value: string): az_synapse_workspace_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_synapse_workspace_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_synapse_workspace_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_workspace_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_workspace_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The workspace name. */
    name(value: string): az_synapse_workspace_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_synapse_workspace_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_synapse_workspace_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_synapse_workspace_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The workspace name. */
    name(value: string): az_synapse_workspace_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_synapse_workspace_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The sql administrator login password. */
    sqlAdminLoginPassword(value: string): az_synapse_workspace_update_command_builder {
        this.setFlag("--sql-admin-login-password", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_synapse_workspace_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_synapse_workspace_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string, workspaceName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.workspaceName(workspaceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the workspace. */
    workspaceName(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--workspace-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_synapse_workspace_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
