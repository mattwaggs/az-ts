import { CommandBuilder } from '../base';

/** Manage Azure Resource Manager template deployment at resource group. */
export class az_deployment_group {
    /**
     * Cancel a deployment at resource group.
     *
     * Syntax:
     * ```
     * az deployment group cancel --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_group_cancel(name: string, resourceGroup: string): az_deployment_group_cancel_command_builder {
        return new az_deployment_group_cancel_command_builder("az deployment group cancel", name, resourceGroup);
    }

    /**
     * Start a deployment at resource group.
     *
     * Syntax:
     * ```
     * az deployment group create --resource-group
     *                            [--aux-subs]
     *                            [--aux-tenants]
     *                            [--confirm-with-what-if]
     *                            [--handle-extended-json-format]
     *                            [--mode {Complete, Incremental}]
     *                            [--name]
     *                            [--no-prompt {false, true}]
     *                            [--no-wait]
     *                            [--parameters]
     *                            [--rollback-on-error]
     *                            [--subscription]
     *                            [--template-file]
     *                            [--template-uri]
     *                            [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                            [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} resourceGroup The resource group to create deployment at.
     */
    static az_deployment_group_create(resourceGroup: string): az_deployment_group_create_command_builder {
        return new az_deployment_group_create_command_builder("az deployment group create", resourceGroup);
    }

    /**
     * Delete a deployment at resource group.
     *
     * Syntax:
     * ```
     * az deployment group delete --name
     *                            --resource-group
     *                            [--no-wait]
     *                            [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_group_delete(name: string, resourceGroup: string): az_deployment_group_delete_command_builder {
        return new az_deployment_group_delete_command_builder("az deployment group delete", name, resourceGroup);
    }

    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment group export --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_group_export(name: string, resourceGroup: string): az_deployment_group_export_command_builder {
        return new az_deployment_group_export_command_builder("az deployment group export", name, resourceGroup);
    }

    /**
     * List deployments at resource group.
     *
     * Syntax:
     * ```
     * az deployment group list --resource-group
     *                          [--filter]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_group_list(resourceGroup: string): az_deployment_group_list_command_builder {
        return new az_deployment_group_list_command_builder("az deployment group list", resourceGroup);
    }

    /**
     * Show a deployment at resource group.
     *
     * Syntax:
     * ```
     * az deployment group show --name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_group_show(name: string, resourceGroup: string): az_deployment_group_show_command_builder {
        return new az_deployment_group_show_command_builder("az deployment group show", name, resourceGroup);
    }

    /**
     * Validate whether a template is valid at resource group.
     *
     * Syntax:
     * ```
     * az deployment group validate --resource-group
     *                              [--handle-extended-json-format]
     *                              [--mode {Complete, Incremental}]
     *                              [--name]
     *                              [--no-prompt {false, true}]
     *                              [--parameters]
     *                              [--rollback-on-error]
     *                              [--subscription]
     *                              [--template-file]
     *                              [--template-uri]
     * ```
     *
     * @param {string} resourceGroup The resource group to create deployment at.
     */
    static az_deployment_group_validate(resourceGroup: string): az_deployment_group_validate_command_builder {
        return new az_deployment_group_validate_command_builder("az deployment group validate", resourceGroup);
    }

    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment group wait --name
     *                          --resource-group
     *                          [--created]
     *                          [--custom]
     *                          [--deleted]
     *                          [--exists]
     *                          [--interval]
     *                          [--subscription]
     *                          [--timeout]
     *                          [--updated]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_group_wait(name: string, resourceGroup: string): az_deployment_group_wait_command_builder {
        return new az_deployment_group_wait_command_builder("az deployment group wait", name, resourceGroup);
    }

    /**
     * Execute a deployment What-If operation at resource group scope.
     *
     * Syntax:
     * ```
     * az deployment group what-if --resource-group
     *                             [--aux-tenants]
     *                             [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                             [--mode {Complete, Incremental}]
     *                             [--name]
     *                             [--no-pretty-print]
     *                             [--no-prompt {false, true}]
     *                             [--parameters]
     *                             [--result-format {FullResourcePayloads, ResourceIdOnly}]
     *                             [--subscription]
     *                             [--template-file]
     *                             [--template-uri]
     * ```
     *
     * @param {string} resourceGroup The resource group to execute deployment What-If operation at.
     */
    static az_deployment_group_what_if(resourceGroup: string): az_deployment_group_what_if_command_builder {
        return new az_deployment_group_what_if_command_builder("az deployment group what-if", resourceGroup);
    }
}

/** Manage Azure Resource Manager template deployment at management group. */
export class az_deployment_mg {
    /**
     * Cancel a deployment at management group.
     *
     * Syntax:
     * ```
     * az deployment mg cancel --management-group-id
     *                         --name
     *                         [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static az_deployment_mg_cancel(managementGroupId: string, name: string): az_deployment_mg_cancel_command_builder {
        return new az_deployment_mg_cancel_command_builder("az deployment mg cancel", managementGroupId, name);
    }

    /**
     * Start a deployment at management group.
     *
     * Syntax:
     * ```
     * az deployment mg create --location
     *                         --management-group-id
     *                         [--confirm-with-what-if]
     *                         [--handle-extended-json-format]
     *                         [--name]
     *                         [--no-prompt {false, true}]
     *                         [--no-wait]
     *                         [--parameters]
     *                         [--subscription]
     *                         [--template-file]
     *                         [--template-uri]
     *                         [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                         [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     * @param {string} managementGroupId The management group id to create deployment at.
     */
    static az_deployment_mg_create(location: string, managementGroupId: string): az_deployment_mg_create_command_builder {
        return new az_deployment_mg_create_command_builder("az deployment mg create", location, managementGroupId);
    }

    /**
     * Delete a deployment at management group.
     *
     * Syntax:
     * ```
     * az deployment mg delete --management-group-id
     *                         --name
     *                         [--no-wait]
     *                         [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static az_deployment_mg_delete(managementGroupId: string, name: string): az_deployment_mg_delete_command_builder {
        return new az_deployment_mg_delete_command_builder("az deployment mg delete", managementGroupId, name);
    }

    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment mg export --management-group-id
     *                         --name
     *                         [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static az_deployment_mg_export(managementGroupId: string, name: string): az_deployment_mg_export_command_builder {
        return new az_deployment_mg_export_command_builder("az deployment mg export", managementGroupId, name);
    }

    /**
     * List deployments at management group.
     *
     * Syntax:
     * ```
     * az deployment mg list --management-group-id
     *                       [--filter]
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     */
    static az_deployment_mg_list(managementGroupId: string): az_deployment_mg_list_command_builder {
        return new az_deployment_mg_list_command_builder("az deployment mg list", managementGroupId);
    }

    /**
     * Show a deployment at management group.
     *
     * Syntax:
     * ```
     * az deployment mg show --management-group-id
     *                       --name
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static az_deployment_mg_show(managementGroupId: string, name: string): az_deployment_mg_show_command_builder {
        return new az_deployment_mg_show_command_builder("az deployment mg show", managementGroupId, name);
    }

    /**
     * Validate whether a template is valid at management group.
     *
     * Syntax:
     * ```
     * az deployment mg validate --location
     *                           --management-group-id
     *                           [--handle-extended-json-format]
     *                           [--name]
     *                           [--no-prompt {false, true}]
     *                           [--parameters]
     *                           [--subscription]
     *                           [--template-file]
     *                           [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     * @param {string} managementGroupId The management group id to create deployment at.
     */
    static az_deployment_mg_validate(location: string, managementGroupId: string): az_deployment_mg_validate_command_builder {
        return new az_deployment_mg_validate_command_builder("az deployment mg validate", location, managementGroupId);
    }

    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment mg wait --management-group-id
     *                       --name
     *                       [--created]
     *                       [--custom]
     *                       [--deleted]
     *                       [--exists]
     *                       [--interval]
     *                       [--subscription]
     *                       [--timeout]
     *                       [--updated]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static az_deployment_mg_wait(managementGroupId: string, name: string): az_deployment_mg_wait_command_builder {
        return new az_deployment_mg_wait_command_builder("az deployment mg wait", managementGroupId, name);
    }

    /**
     * Execute a deployment What-If operation at management group scope.
     *
     * Syntax:
     * ```
     * az deployment mg what-if --location
     *                          --management-group-id
     *                          [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                          [--name]
     *                          [--no-pretty-print]
     *                          [--no-prompt {false, true}]
     *                          [--parameters]
     *                          [--result-format {FullResourcePayloads, ResourceIdOnly}]
     *                          [--subscription]
     *                          [--template-file]
     *                          [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     * @param {string} managementGroupId The management group id to create deployment at.
     */
    static az_deployment_mg_what_if(location: string, managementGroupId: string): az_deployment_mg_what_if_command_builder {
        return new az_deployment_mg_what_if_command_builder("az deployment mg what-if", location, managementGroupId);
    }
}

/** Manage deployment operations at resource group. */
export class az_deployment_operation_group {
    /**
     * List deployment operations at resource group.
     *
     * Syntax:
     * ```
     * az deployment operation group list --name
     *                                    --resource-group
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_operation_group_list(name: string, resourceGroup: string): az_deployment_operation_group_list_command_builder {
        return new az_deployment_operation_group_list_command_builder("az deployment operation group list", name, resourceGroup);
    }

    /**
     * Show a deployment operation at resource group.
     *
     * Syntax:
     * ```
     * az deployment operation group show --name
     *                                    --operation-ids
     *                                    --resource-group
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_operation_group_show(name: string, operationIds: string, resourceGroup: string): az_deployment_operation_group_show_command_builder {
        return new az_deployment_operation_group_show_command_builder("az deployment operation group show", name, operationIds, resourceGroup);
    }
}

/** Manage deployment operations at management group. */
export class az_deployment_operation_mg {
    /**
     * List deployment operations at management group.
     *
     * Syntax:
     * ```
     * az deployment operation mg list --management-group-id
     *                                 --name
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     */
    static az_deployment_operation_mg_list(managementGroupId: string, name: string): az_deployment_operation_mg_list_command_builder {
        return new az_deployment_operation_mg_list_command_builder("az deployment operation mg list", managementGroupId, name);
    }

    /**
     * Show a deployment operation at management group.
     *
     * Syntax:
     * ```
     * az deployment operation mg show --management-group-id
     *                                 --name
     *                                 --operation-ids
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} managementGroupId The management group id.
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     */
    static az_deployment_operation_mg_show(managementGroupId: string, name: string, operationIds: string): az_deployment_operation_mg_show_command_builder {
        return new az_deployment_operation_mg_show_command_builder("az deployment operation mg show", managementGroupId, name, operationIds);
    }
}

/** Manage deployment operations at subscription scope. */
export class az_deployment_operation_sub {
    /**
     * List deployment operations at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment operation sub list --name
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_operation_sub_list(name: string): az_deployment_operation_sub_list_command_builder {
        return new az_deployment_operation_sub_list_command_builder("az deployment operation sub list", name);
    }

    /**
     * Show a deployment operation at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment operation sub show --name
     *                                  --operation-ids
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     */
    static az_deployment_operation_sub_show(name: string, operationIds: string): az_deployment_operation_sub_show_command_builder {
        return new az_deployment_operation_sub_show_command_builder("az deployment operation sub show", name, operationIds);
    }
}

/** Manage deployment operations at tenant scope. */
export class az_deployment_operation_tenant {
    /**
     * List deployment operations at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment operation tenant list --name
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_operation_tenant_list(name: string): az_deployment_operation_tenant_list_command_builder {
        return new az_deployment_operation_tenant_list_command_builder("az deployment operation tenant list", name);
    }

    /**
     * Show a deployment operation at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment operation tenant show --name
     *                                     --operation-ids
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     */
    static az_deployment_operation_tenant_show(name: string, operationIds: string): az_deployment_operation_tenant_show_command_builder {
        return new az_deployment_operation_tenant_show_command_builder("az deployment operation tenant show", name, operationIds);
    }
}

/** Manage deployment operations at subscription scope. */
export class az_deployment_operation {
    /**
     * List deployment operations at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment operation list --name
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_operation_list(name: string): az_deployment_operation_list_command_builder {
        return new az_deployment_operation_list_command_builder("az deployment operation list", name);
    }

    /**
     * Show a deployment operation at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment operation show --name
     *                              --operation-ids
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     * @param {string} operationIds A list of operation ids to show.
     */
    static az_deployment_operation_show(name: string, operationIds: string): az_deployment_operation_show_command_builder {
        return new az_deployment_operation_show_command_builder("az deployment operation show", name, operationIds);
    }
}

/** Manage Azure Resource Manager template deployment at subscription scope. */
export class az_deployment_sub {
    /**
     * Cancel a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub cancel --name
     *                          [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_sub_cancel(name: string): az_deployment_sub_cancel_command_builder {
        return new az_deployment_sub_cancel_command_builder("az deployment sub cancel", name);
    }

    /**
     * Start a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub create --location
     *                          [--confirm-with-what-if]
     *                          [--handle-extended-json-format]
     *                          [--name]
     *                          [--no-prompt {false, true}]
     *                          [--no-wait]
     *                          [--parameters]
     *                          [--subscription]
     *                          [--template-file]
     *                          [--template-uri]
     *                          [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                          [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static az_deployment_sub_create(location: string): az_deployment_sub_create_command_builder {
        return new az_deployment_sub_create_command_builder("az deployment sub create", location);
    }

    /**
     * Delete a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub delete --name
     *                          [--no-wait]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_sub_delete(name: string): az_deployment_sub_delete_command_builder {
        return new az_deployment_sub_delete_command_builder("az deployment sub delete", name);
    }

    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment sub export --name
     *                          [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_sub_export(name: string): az_deployment_sub_export_command_builder {
        return new az_deployment_sub_export_command_builder("az deployment sub export", name);
    }

    /**
     * List deployments at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub list [--filter]
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     */
    static az_deployment_sub_list(): az_deployment_sub_list_command_builder {
        return new az_deployment_sub_list_command_builder("az deployment sub list");
    }

    /**
     * Show a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub show --name
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_sub_show(name: string): az_deployment_sub_show_command_builder {
        return new az_deployment_sub_show_command_builder("az deployment sub show", name);
    }

    /**
     * Validate whether a template is valid at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub validate --location
     *                            [--handle-extended-json-format]
     *                            [--name]
     *                            [--no-prompt {false, true}]
     *                            [--parameters]
     *                            [--subscription]
     *                            [--template-file]
     *                            [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static az_deployment_sub_validate(location: string): az_deployment_sub_validate_command_builder {
        return new az_deployment_sub_validate_command_builder("az deployment sub validate", location);
    }

    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment sub wait --name
     *                        [--created]
     *                        [--custom]
     *                        [--deleted]
     *                        [--exists]
     *                        [--interval]
     *                        [--subscription]
     *                        [--timeout]
     *                        [--updated]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_sub_wait(name: string): az_deployment_sub_wait_command_builder {
        return new az_deployment_sub_wait_command_builder("az deployment sub wait", name);
    }

    /**
     * Execute a deployment What-If operation at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment sub what-if --location
     *                           [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                           [--name]
     *                           [--no-pretty-print]
     *                           [--no-prompt {false, true}]
     *                           [--parameters]
     *                           [--result-format {FullResourcePayloads, ResourceIdOnly}]
     *                           [--subscription]
     *                           [--template-file]
     *                           [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment What-If operation metadata.
     */
    static az_deployment_sub_what_if(location: string): az_deployment_sub_what_if_command_builder {
        return new az_deployment_sub_what_if_command_builder("az deployment sub what-if", location);
    }
}

/** Manage Azure Resource Manager template deployment at tenant scope. */
export class az_deployment_tenant {
    /**
     * Cancel a deployment at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant cancel --name
     *                             [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_tenant_cancel(name: string): az_deployment_tenant_cancel_command_builder {
        return new az_deployment_tenant_cancel_command_builder("az deployment tenant cancel", name);
    }

    /**
     * Start a deployment at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant create --location
     *                             [--confirm-with-what-if]
     *                             [--handle-extended-json-format]
     *                             [--name]
     *                             [--no-prompt {false, true}]
     *                             [--no-wait]
     *                             [--parameters]
     *                             [--subscription]
     *                             [--template-file]
     *                             [--template-uri]
     *                             [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                             [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static az_deployment_tenant_create(location: string): az_deployment_tenant_create_command_builder {
        return new az_deployment_tenant_create_command_builder("az deployment tenant create", location);
    }

    /**
     * Delete a deployment at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant delete --name
     *                             [--no-wait]
     *                             [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_tenant_delete(name: string): az_deployment_tenant_delete_command_builder {
        return new az_deployment_tenant_delete_command_builder("az deployment tenant delete", name);
    }

    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment tenant export --name
     *                             [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_tenant_export(name: string): az_deployment_tenant_export_command_builder {
        return new az_deployment_tenant_export_command_builder("az deployment tenant export", name);
    }

    /**
     * List deployments at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant list [--filter]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     */
    static az_deployment_tenant_list(): az_deployment_tenant_list_command_builder {
        return new az_deployment_tenant_list_command_builder("az deployment tenant list");
    }

    /**
     * Show a deployment at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant show --name
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_tenant_show(name: string): az_deployment_tenant_show_command_builder {
        return new az_deployment_tenant_show_command_builder("az deployment tenant show", name);
    }

    /**
     * Validate whether a template is valid at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant validate --location
     *                               [--handle-extended-json-format]
     *                               [--name]
     *                               [--no-prompt {false, true}]
     *                               [--parameters]
     *                               [--subscription]
     *                               [--template-file]
     *                               [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static az_deployment_tenant_validate(location: string): az_deployment_tenant_validate_command_builder {
        return new az_deployment_tenant_validate_command_builder("az deployment tenant validate", location);
    }

    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment tenant wait --name
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
     * @param {string} name The deployment name.
     */
    static az_deployment_tenant_wait(name: string): az_deployment_tenant_wait_command_builder {
        return new az_deployment_tenant_wait_command_builder("az deployment tenant wait", name);
    }

    /**
     * Execute a deployment What-If operation at tenant scope.
     *
     * Syntax:
     * ```
     * az deployment tenant what-if --location
     *                              [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                              [--name]
     *                              [--no-pretty-print]
     *                              [--no-prompt {false, true}]
     *                              [--parameters]
     *                              [--result-format {FullResourcePayloads, ResourceIdOnly}]
     *                              [--subscription]
     *                              [--template-file]
     *                              [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment What-If operation metadata.
     */
    static az_deployment_tenant_what_if(location: string): az_deployment_tenant_what_if_command_builder {
        return new az_deployment_tenant_what_if_command_builder("az deployment tenant what-if", location);
    }
}

/** Manage deployment scripts at subscription or resource group scope. */
export class az_deployment_scripts {
    /**
     * Delete a deployment script.
     *
     * Syntax:
     * ```
     * az deployment-scripts delete --name
     *                              --resource-group
     *                              [--subscription]
     *                              [--yes]
     * ```
     *
     * @param {string} name Deployment script resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_scripts_delete(name: string, resourceGroup: string): az_deployment_scripts_delete_command_builder {
        return new az_deployment_scripts_delete_command_builder("az deployment-scripts delete", name, resourceGroup);
    }

    /**
     * List all deployment scripts.
     *
     * Syntax:
     * ```
     * az deployment-scripts list [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    static az_deployment_scripts_list(): az_deployment_scripts_list_command_builder {
        return new az_deployment_scripts_list_command_builder("az deployment-scripts list");
    }

    /**
     * Retrieve a deployment script.
     *
     * Syntax:
     * ```
     * az deployment-scripts show --name
     *                            --resource-group
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Deployment script resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_scripts_show(name: string, resourceGroup: string): az_deployment_scripts_show_command_builder {
        return new az_deployment_scripts_show_command_builder("az deployment-scripts show", name, resourceGroup);
    }

    /**
     * Show deployment script logs.
     *
     * Syntax:
     * ```
     * az deployment-scripts show-log --name
     *                                --resource-group
     *                                [--subscription]
     * ```
     *
     * @param {string} name Deployment script resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_deployment_scripts_show_log(name: string, resourceGroup: string): az_deployment_scripts_show_log_command_builder {
        return new az_deployment_scripts_show_log_command_builder("az deployment-scripts show-log", name, resourceGroup);
    }
}

/** Manage Azure Resource Manager template deployment at subscription scope. */
export class az_deployment {
    /**
     * Cancel a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment cancel --name
     *                      [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_cancel(name: string): az_deployment_cancel_command_builder {
        return new az_deployment_cancel_command_builder("az deployment cancel", name);
    }

    /**
     * Start a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment create --location
     *                      [--confirm-with-what-if]
     *                      [--handle-extended-json-format]
     *                      [--name]
     *                      [--no-prompt {false, true}]
     *                      [--no-wait]
     *                      [--parameters]
     *                      [--subscription]
     *                      [--template-file]
     *                      [--template-uri]
     *                      [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
     *                      [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static az_deployment_create(location: string): az_deployment_create_command_builder {
        return new az_deployment_create_command_builder("az deployment create", location);
    }

    /**
     * Delete a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment delete --name
     *                      [--no-wait]
     *                      [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_delete(name: string): az_deployment_delete_command_builder {
        return new az_deployment_delete_command_builder("az deployment delete", name);
    }

    /**
     * Export the template used for a deployment.
     *
     * Syntax:
     * ```
     * az deployment export --name
     *                      [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_export(name: string): az_deployment_export_command_builder {
        return new az_deployment_export_command_builder("az deployment export", name);
    }

    /**
     * List deployments at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment list [--filter]
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     */
    static az_deployment_list(): az_deployment_list_command_builder {
        return new az_deployment_list_command_builder("az deployment list");
    }

    /**
     * Show a deployment at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment show --name
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_show(name: string): az_deployment_show_command_builder {
        return new az_deployment_show_command_builder("az deployment show", name);
    }

    /**
     * Validate whether a template is valid at subscription scope.
     *
     * Syntax:
     * ```
     * az deployment validate --location
     *                        [--handle-extended-json-format]
     *                        [--name]
     *                        [--no-prompt {false, true}]
     *                        [--parameters]
     *                        [--subscription]
     *                        [--template-file]
     *                        [--template-uri]
     * ```
     *
     * @param {string} location The location to store the deployment metadata.
     */
    static az_deployment_validate(location: string): az_deployment_validate_command_builder {
        return new az_deployment_validate_command_builder("az deployment validate", location);
    }

    /**
     * Place the CLI in a waiting state until a deployment condition is met.
     *
     * Syntax:
     * ```
     * az deployment wait --name
     *                    [--created]
     *                    [--custom]
     *                    [--deleted]
     *                    [--exists]
     *                    [--interval]
     *                    [--subscription]
     *                    [--timeout]
     *                    [--updated]
     * ```
     *
     * @param {string} name The deployment name.
     */
    static az_deployment_wait(name: string): az_deployment_wait_command_builder {
        return new az_deployment_wait_command_builder("az deployment wait", name);
    }
}

/**
 * Cancel a deployment at resource group.
 *
 * Syntax:
 * ```
 * az deployment group cancel --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_group_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_deployment_group_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_cancel_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start a deployment at resource group.
 *
 * Syntax:
 * ```
 * az deployment group create --resource-group
 *                            [--aux-subs]
 *                            [--aux-tenants]
 *                            [--confirm-with-what-if]
 *                            [--handle-extended-json-format]
 *                            [--mode {Complete, Incremental}]
 *                            [--name]
 *                            [--no-prompt {false, true}]
 *                            [--no-wait]
 *                            [--parameters]
 *                            [--rollback-on-error]
 *                            [--subscription]
 *                            [--template-file]
 *                            [--template-uri]
 *                            [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                            [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} resourceGroup The resource group to create deployment at.
 */
class az_deployment_group_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** The resource group to create deployment at. */
    resourceGroup(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Auxiliary subscriptions which will be used during deployment across tenants. */
    auxSubs(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--aux-subs", value);
        return this;
    }

    /** Auxiliary tenants which will be used during deployment across tenants. */
    auxTenants(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--aux-tenants", value);
        return this;
    }

    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment mode. */
    mode(value: 'Complete' | 'Incremental'): az_deployment_group_create_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_group_create_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    rollbackOnError(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--rollback-on-error", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_group_create_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }

    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_group_create_command_builder {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    }

    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_group_create_command_builder {
        this.setFlag("--what-if-result-format", value);
        return this;
    }
}

/**
 * Delete a deployment at resource group.
 *
 * Syntax:
 * ```
 * az deployment group delete --name
 *                            --resource-group
 *                            [--no-wait]
 *                            [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_group_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_deployment_group_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_group_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment group export --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_group_export_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_deployment_group_export_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_export_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployments at resource group.
 *
 * Syntax:
 * ```
 * az deployment group list --resource-group
 *                          [--filter]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_group_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_group_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment at resource group.
 *
 * Syntax:
 * ```
 * az deployment group show --name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_group_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_deployment_group_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Validate whether a template is valid at resource group.
 *
 * Syntax:
 * ```
 * az deployment group validate --resource-group
 *                              [--handle-extended-json-format]
 *                              [--mode {Complete, Incremental}]
 *                              [--name]
 *                              [--no-prompt {false, true}]
 *                              [--parameters]
 *                              [--rollback-on-error]
 *                              [--subscription]
 *                              [--template-file]
 *                              [--template-uri]
 * ```
 *
 * @param {string} resourceGroup The resource group to create deployment at.
 */
class az_deployment_group_validate_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** The resource group to create deployment at. */
    resourceGroup(value: string): az_deployment_group_validate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_group_validate_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment mode. */
    mode(value: 'Complete' | 'Incremental'): az_deployment_group_validate_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_group_validate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_group_validate_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_group_validate_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment. */
    rollbackOnError(value: string): az_deployment_group_validate_command_builder {
        this.setFlag("--rollback-on-error", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_validate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_group_validate_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_group_validate_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
}

/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment group wait --name
 *                          --resource-group
 *                          [--created]
 *                          [--custom]
 *                          [--deleted]
 *                          [--exists]
 *                          [--interval]
 *                          [--subscription]
 *                          [--timeout]
 *                          [--updated]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_group_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_group_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}

/**
 * Execute a deployment What-If operation at resource group scope.
 *
 * Syntax:
 * ```
 * az deployment group what-if --resource-group
 *                             [--aux-tenants]
 *                             [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                             [--mode {Complete, Incremental}]
 *                             [--name]
 *                             [--no-pretty-print]
 *                             [--no-prompt {false, true}]
 *                             [--parameters]
 *                             [--result-format {FullResourcePayloads, ResourceIdOnly}]
 *                             [--subscription]
 *                             [--template-file]
 *                             [--template-uri]
 * ```
 *
 * @param {string} resourceGroup The resource group to execute deployment What-If operation at.
 */
class az_deployment_group_what_if_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** The resource group to execute deployment What-If operation at. */
    resourceGroup(value: string): az_deployment_group_what_if_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Auxiliary tenants which will be used during deployment across tenants. */
    auxTenants(value: string): az_deployment_group_what_if_command_builder {
        this.setFlag("--aux-tenants", value);
        return this;
    }

    /** Space-separated list of resource change types to be excluded from What-If results. */
    excludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_group_what_if_command_builder {
        this.setFlag("--exclude-change-types", value);
        return this;
    }

    /** The deployment mode. */
    mode(value: 'Complete' | 'Incremental'): az_deployment_group_what_if_command_builder {
        this.setFlag("--mode", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_group_what_if_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    noPrettyPrint(value: string): az_deployment_group_what_if_command_builder {
        this.setFlag("--no-pretty-print", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_group_what_if_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_group_what_if_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** The format of What-If results. */
    resultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_group_what_if_command_builder {
        this.setFlag("--result-format", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_group_what_if_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_group_what_if_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_group_what_if_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
}

/**
 * Cancel a deployment at management group.
 *
 * Syntax:
 * ```
 * az deployment mg cancel --management-group-id
 *                         --name
 *                         [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
class az_deployment_mg_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, managementGroupId: string, name: string) {
        super(commandParent);
        this.managementGroupId(managementGroupId)
        this.name(name)
    }

    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_cancel_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_mg_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start a deployment at management group.
 *
 * Syntax:
 * ```
 * az deployment mg create --location
 *                         --management-group-id
 *                         [--confirm-with-what-if]
 *                         [--handle-extended-json-format]
 *                         [--name]
 *                         [--no-prompt {false, true}]
 *                         [--no-wait]
 *                         [--parameters]
 *                         [--subscription]
 *                         [--template-file]
 *                         [--template-uri]
 *                         [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                         [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 * @param {string} managementGroupId The management group id to create deployment at.
 */
class az_deployment_mg_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string, managementGroupId: string) {
        super(commandParent);
        this.location(location)
        this.managementGroupId(managementGroupId)
    }

    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The management group id to create deployment at. */
    managementGroupId(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_mg_create_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_mg_create_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }

    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_mg_create_command_builder {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    }

    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_mg_create_command_builder {
        this.setFlag("--what-if-result-format", value);
        return this;
    }
}

/**
 * Delete a deployment at management group.
 *
 * Syntax:
 * ```
 * az deployment mg delete --management-group-id
 *                         --name
 *                         [--no-wait]
 *                         [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
class az_deployment_mg_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, managementGroupId: string, name: string) {
        super(commandParent);
        this.managementGroupId(managementGroupId)
        this.name(name)
    }

    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_delete_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_mg_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_mg_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment mg export --management-group-id
 *                         --name
 *                         [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
class az_deployment_mg_export_command_builder extends CommandBuilder {
    constructor(commandPath: string, managementGroupId: string, name: string) {
        super(commandParent);
        this.managementGroupId(managementGroupId)
        this.name(name)
    }

    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_export_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_mg_export_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployments at management group.
 *
 * Syntax:
 * ```
 * az deployment mg list --management-group-id
 *                       [--filter]
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 */
class az_deployment_mg_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, managementGroupId: string) {
        super(commandParent);
        this.managementGroupId(managementGroupId)
    }

    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_list_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_mg_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_mg_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment at management group.
 *
 * Syntax:
 * ```
 * az deployment mg show --management-group-id
 *                       --name
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
class az_deployment_mg_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, managementGroupId: string, name: string) {
        super(commandParent);
        this.managementGroupId(managementGroupId)
        this.name(name)
    }

    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_show_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_mg_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_mg_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Validate whether a template is valid at management group.
 *
 * Syntax:
 * ```
 * az deployment mg validate --location
 *                           --management-group-id
 *                           [--handle-extended-json-format]
 *                           [--name]
 *                           [--no-prompt {false, true}]
 *                           [--parameters]
 *                           [--subscription]
 *                           [--template-file]
 *                           [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 * @param {string} managementGroupId The management group id to create deployment at.
 */
class az_deployment_mg_validate_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string, managementGroupId: string) {
        super(commandParent);
        this.location(location)
        this.managementGroupId(managementGroupId)
    }

    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_mg_validate_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The management group id to create deployment at. */
    managementGroupId(value: string): az_deployment_mg_validate_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_mg_validate_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_mg_validate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_mg_validate_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_mg_validate_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_validate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_mg_validate_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_mg_validate_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
}

/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment mg wait --management-group-id
 *                       --name
 *                       [--created]
 *                       [--custom]
 *                       [--deleted]
 *                       [--exists]
 *                       [--interval]
 *                       [--subscription]
 *                       [--timeout]
 *                       [--updated]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
class az_deployment_mg_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, managementGroupId: string, name: string) {
        super(commandParent);
        this.managementGroupId(managementGroupId)
        this.name(name)
    }

    /** The management group id. */
    managementGroupId(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_mg_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}

/**
 * Execute a deployment What-If operation at management group scope.
 *
 * Syntax:
 * ```
 * az deployment mg what-if --location
 *                          --management-group-id
 *                          [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                          [--name]
 *                          [--no-pretty-print]
 *                          [--no-prompt {false, true}]
 *                          [--parameters]
 *                          [--result-format {FullResourcePayloads, ResourceIdOnly}]
 *                          [--subscription]
 *                          [--template-file]
 *                          [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 * @param {string} managementGroupId The management group id to create deployment at.
 */
class az_deployment_mg_what_if_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string, managementGroupId: string) {
        super(commandParent);
        this.location(location)
        this.managementGroupId(managementGroupId)
    }

    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_mg_what_if_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The management group id to create deployment at. */
    managementGroupId(value: string): az_deployment_mg_what_if_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** Space-separated list of resource change types to be excluded from What-If results. */
    excludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_mg_what_if_command_builder {
        this.setFlag("--exclude-change-types", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_mg_what_if_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    noPrettyPrint(value: string): az_deployment_mg_what_if_command_builder {
        this.setFlag("--no-pretty-print", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_mg_what_if_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_mg_what_if_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** The format of What-If results. */
    resultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_mg_what_if_command_builder {
        this.setFlag("--result-format", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_mg_what_if_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_mg_what_if_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_mg_what_if_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
}

/**
 * List deployment operations at resource group.
 *
 * Syntax:
 * ```
 * az deployment operation group list --name
 *                                    --resource-group
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_operation_group_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_group_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_operation_group_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_group_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment operation at resource group.
 *
 * Syntax:
 * ```
 * az deployment operation group show --name
 *                                    --operation-ids
 *                                    --resource-group
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_operation_group_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, operationIds: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.operationIds(operationIds)
        this.resourceGroup(resourceGroup)
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_group_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_group_show_command_builder {
        this.setFlag("--operation-ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_operation_group_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployment operations at management group.
 *
 * Syntax:
 * ```
 * az deployment operation mg list --management-group-id
 *                                 --name
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 */
class az_deployment_operation_mg_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, managementGroupId: string, name: string) {
        super(commandParent);
        this.managementGroupId(managementGroupId)
        this.name(name)
    }

    /** The management group id. */
    managementGroupId(value: string): az_deployment_operation_mg_list_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_mg_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_mg_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_mg_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment operation at management group.
 *
 * Syntax:
 * ```
 * az deployment operation mg show --management-group-id
 *                                 --name
 *                                 --operation-ids
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} managementGroupId The management group id.
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 */
class az_deployment_operation_mg_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, managementGroupId: string, name: string, operationIds: string) {
        super(commandParent);
        this.managementGroupId(managementGroupId)
        this.name(name)
        this.operationIds(operationIds)
    }

    /** The management group id. */
    managementGroupId(value: string): az_deployment_operation_mg_show_command_builder {
        this.setFlag("--management-group-id", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_mg_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_mg_show_command_builder {
        this.setFlag("--operation-ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_mg_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_mg_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployment operations at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment operation sub list --name
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_operation_sub_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_sub_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_sub_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_sub_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment operation at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment operation sub show --name
 *                                  --operation-ids
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 */
class az_deployment_operation_sub_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, operationIds: string) {
        super(commandParent);
        this.name(name)
        this.operationIds(operationIds)
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_sub_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_sub_show_command_builder {
        this.setFlag("--operation-ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_sub_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_sub_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployment operations at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment operation tenant list --name
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_operation_tenant_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_tenant_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_tenant_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_tenant_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment operation at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment operation tenant show --name
 *                                     --operation-ids
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 */
class az_deployment_operation_tenant_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, operationIds: string) {
        super(commandParent);
        this.name(name)
        this.operationIds(operationIds)
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_tenant_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_tenant_show_command_builder {
        this.setFlag("--operation-ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_tenant_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_tenant_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployment operations at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment operation list --name
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_operation_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment operation at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment operation show --name
 *                              --operation-ids
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 * @param {string} operationIds A list of operation ids to show.
 */
class az_deployment_operation_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, operationIds: string) {
        super(commandParent);
        this.name(name)
        this.operationIds(operationIds)
    }

    /** The deployment name. */
    name(value: string): az_deployment_operation_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** A list of operation ids to show. */
    operationIds(value: string): az_deployment_operation_show_command_builder {
        this.setFlag("--operation-ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_operation_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_operation_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Cancel a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub cancel --name
 *                          [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_sub_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_sub_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub create --location
 *                          [--confirm-with-what-if]
 *                          [--handle-extended-json-format]
 *                          [--name]
 *                          [--no-prompt {false, true}]
 *                          [--no-wait]
 *                          [--parameters]
 *                          [--subscription]
 *                          [--template-file]
 *                          [--template-uri]
 *                          [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                          [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
class az_deployment_sub_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_sub_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_sub_create_command_builder {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_sub_create_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_sub_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_sub_create_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_sub_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_sub_create_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_sub_create_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_sub_create_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }

    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_sub_create_command_builder {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    }

    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_sub_create_command_builder {
        this.setFlag("--what-if-result-format", value);
        return this;
    }
}

/**
 * Delete a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub delete --name
 *                          [--no-wait]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_sub_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_sub_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_sub_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment sub export --name
 *                          [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_sub_export_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_sub_export_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployments at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub list [--filter]
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 */
class az_deployment_sub_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_sub_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_sub_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub show --name
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_sub_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_sub_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_sub_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Validate whether a template is valid at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub validate --location
 *                            [--handle-extended-json-format]
 *                            [--name]
 *                            [--no-prompt {false, true}]
 *                            [--parameters]
 *                            [--subscription]
 *                            [--template-file]
 *                            [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
class az_deployment_sub_validate_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_sub_validate_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_sub_validate_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_sub_validate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_sub_validate_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_sub_validate_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_validate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_sub_validate_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_sub_validate_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
}

/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment sub wait --name
 *                        [--created]
 *                        [--custom]
 *                        [--deleted]
 *                        [--exists]
 *                        [--interval]
 *                        [--subscription]
 *                        [--timeout]
 *                        [--updated]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_sub_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_sub_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_sub_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_sub_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_deployment_sub_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_deployment_sub_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_deployment_sub_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_sub_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_sub_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}

/**
 * Execute a deployment What-If operation at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment sub what-if --location
 *                           [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                           [--name]
 *                           [--no-pretty-print]
 *                           [--no-prompt {false, true}]
 *                           [--parameters]
 *                           [--result-format {FullResourcePayloads, ResourceIdOnly}]
 *                           [--subscription]
 *                           [--template-file]
 *                           [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment What-If operation metadata.
 */
class az_deployment_sub_what_if_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** The location to store the deployment What-If operation metadata. */
    location(value: string): az_deployment_sub_what_if_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Space-separated list of resource change types to be excluded from What-If results. */
    excludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_sub_what_if_command_builder {
        this.setFlag("--exclude-change-types", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_sub_what_if_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    noPrettyPrint(value: string): az_deployment_sub_what_if_command_builder {
        this.setFlag("--no-pretty-print", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_sub_what_if_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_sub_what_if_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** The format of What-If results. */
    resultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_sub_what_if_command_builder {
        this.setFlag("--result-format", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_sub_what_if_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_sub_what_if_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_sub_what_if_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
}

/**
 * Cancel a deployment at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant cancel --name
 *                             [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_tenant_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_tenant_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start a deployment at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant create --location
 *                             [--confirm-with-what-if]
 *                             [--handle-extended-json-format]
 *                             [--name]
 *                             [--no-prompt {false, true}]
 *                             [--no-wait]
 *                             [--parameters]
 *                             [--subscription]
 *                             [--template-file]
 *                             [--template-uri]
 *                             [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                             [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
class az_deployment_tenant_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_tenant_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_tenant_create_command_builder {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_tenant_create_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_tenant_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_tenant_create_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_tenant_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_tenant_create_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_tenant_create_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_tenant_create_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }

    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_tenant_create_command_builder {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    }

    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_tenant_create_command_builder {
        this.setFlag("--what-if-result-format", value);
        return this;
    }
}

/**
 * Delete a deployment at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant delete --name
 *                             [--no-wait]
 *                             [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_tenant_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_tenant_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_tenant_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment tenant export --name
 *                             [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_tenant_export_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_tenant_export_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployments at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant list [--filter]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 */
class az_deployment_tenant_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_tenant_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_tenant_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant show --name
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_tenant_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_tenant_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_tenant_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Validate whether a template is valid at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant validate --location
 *                               [--handle-extended-json-format]
 *                               [--name]
 *                               [--no-prompt {false, true}]
 *                               [--parameters]
 *                               [--subscription]
 *                               [--template-file]
 *                               [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
class az_deployment_tenant_validate_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_tenant_validate_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_tenant_validate_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_tenant_validate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_tenant_validate_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_tenant_validate_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_validate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_tenant_validate_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_tenant_validate_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
}

/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment tenant wait --name
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
 * @param {string} name The deployment name.
 */
class az_deployment_tenant_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_tenant_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_tenant_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_tenant_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_deployment_tenant_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_deployment_tenant_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_deployment_tenant_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_tenant_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_tenant_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}

/**
 * Execute a deployment What-If operation at tenant scope.
 *
 * Syntax:
 * ```
 * az deployment tenant what-if --location
 *                              [--exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                              [--name]
 *                              [--no-pretty-print]
 *                              [--no-prompt {false, true}]
 *                              [--parameters]
 *                              [--result-format {FullResourcePayloads, ResourceIdOnly}]
 *                              [--subscription]
 *                              [--template-file]
 *                              [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment What-If operation metadata.
 */
class az_deployment_tenant_what_if_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** The location to store the deployment What-If operation metadata. */
    location(value: string): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Space-separated list of resource change types to be excluded from What-If results. */
    excludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--exclude-change-types", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Disable pretty-print for What-If results. When set, the output format type will be used. */
    noPrettyPrint(value: string): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--no-pretty-print", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** The format of What-If results. */
    resultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--result-format", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_tenant_what_if_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
}

/**
 * Delete a deployment script.
 *
 * Syntax:
 * ```
 * az deployment-scripts delete --name
 *                              --resource-group
 *                              [--subscription]
 *                              [--yes]
 * ```
 *
 * @param {string} name Deployment script resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_scripts_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Deployment script resource name. */
    name(value: string): az_deployment_scripts_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_scripts_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_scripts_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_deployment_scripts_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List all deployment scripts.
 *
 * Syntax:
 * ```
 * az deployment-scripts list [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
class az_deployment_scripts_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_scripts_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_scripts_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_scripts_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Retrieve a deployment script.
 *
 * Syntax:
 * ```
 * az deployment-scripts show --name
 *                            --resource-group
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Deployment script resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_scripts_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Deployment script resource name. */
    name(value: string): az_deployment_scripts_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_scripts_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_scripts_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_scripts_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show deployment script logs.
 *
 * Syntax:
 * ```
 * az deployment-scripts show-log --name
 *                                --resource-group
 *                                [--subscription]
 * ```
 *
 * @param {string} name Deployment script resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_deployment_scripts_show_log_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Deployment script resource name. */
    name(value: string): az_deployment_scripts_show_log_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_deployment_scripts_show_log_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_scripts_show_log_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Cancel a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment cancel --name
 *                      [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_cancel_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Start a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment create --location
 *                      [--confirm-with-what-if]
 *                      [--handle-extended-json-format]
 *                      [--name]
 *                      [--no-prompt {false, true}]
 *                      [--no-wait]
 *                      [--parameters]
 *                      [--subscription]
 *                      [--template-file]
 *                      [--template-uri]
 *                      [--what-if-exclude-change-types {Create, Delete, Deploy, Ignore, Modify, NoChange}]
 *                      [--what-if-result-format {FullResourcePayloads, ResourceIdOnly}]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
class az_deployment_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues. */
    confirmWithWhatIf(value: string): az_deployment_create_command_builder {
        this.setFlag("--confirm-with-what-if", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_create_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_create_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_create_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_create_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_create_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }

    /** Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set. */
    whatIfExcludeChangeTypes(value: 'Create' | 'Delete' | 'Deploy' | 'Ignore' | 'Modify' | 'NoChange'): az_deployment_create_command_builder {
        this.setFlag("--what-if-exclude-change-types", value);
        return this;
    }

    /** The format of What-If results. Applicable when `--confirm-with-what-if` is set. */
    whatIfResultFormat(value: 'FullResourcePayloads' | 'ResourceIdOnly'): az_deployment_create_command_builder {
        this.setFlag("--what-if-result-format", value);
        return this;
    }
}

/**
 * Delete a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment delete --name
 *                      [--no-wait]
 *                      [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_deployment_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Export the template used for a deployment.
 *
 * Syntax:
 * ```
 * az deployment export --name
 *                      [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_export_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_export_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_export_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List deployments at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment list [--filter]
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 */
class az_deployment_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Filter expression using OData notation. You can use --filter "provisioningState eq '{state}'" to filter provisioningState. To get more information, please visit <a href="https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters">https://docs.microsoft.com/en-us/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters</a>. */
    filter(value: string): az_deployment_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show a deployment at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment show --name
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_deployment_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Validate whether a template is valid at subscription scope.
 *
 * Syntax:
 * ```
 * az deployment validate --location
 *                        [--handle-extended-json-format]
 *                        [--name]
 *                        [--no-prompt {false, true}]
 *                        [--parameters]
 *                        [--subscription]
 *                        [--template-file]
 *                        [--template-uri]
 * ```
 *
 * @param {string} location The location to store the deployment metadata.
 */
class az_deployment_validate_command_builder extends CommandBuilder {
    constructor(commandPath: string, location: string) {
        super(commandParent);
        this.location(location)
    }

    /** The location to store the deployment metadata. */
    location(value: string): az_deployment_validate_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Support to handle extended template content including multiline and comments in deployment. */
    handleExtendedJsonFormat(value: string): az_deployment_validate_command_builder {
        this.setFlag("--handle-extended-json-format", value);
        return this;
    }

    /** The deployment name. */
    name(value: string): az_deployment_validate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false. */
    noPrompt(value: boolean): az_deployment_validate_command_builder {
        this.setFlag("--no-prompt", value.toString());
        return this;
    }

    /** Supply deployment parameter values. */
    parameters(value: string): az_deployment_validate_command_builder {
        this.setFlag("--parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_validate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The path to the template file. */
    templateFile(value: string): az_deployment_validate_command_builder {
        this.setFlag("--template-file", value);
        return this;
    }

    /** The URI to the template file. */
    templateUri(value: string): az_deployment_validate_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }
}

/**
 * Place the CLI in a waiting state until a deployment condition is met.
 *
 * Syntax:
 * ```
 * az deployment wait --name
 *                    [--created]
 *                    [--custom]
 *                    [--deleted]
 *                    [--exists]
 *                    [--interval]
 *                    [--subscription]
 *                    [--timeout]
 *                    [--updated]
 * ```
 *
 * @param {string} name The deployment name.
 */
class az_deployment_wait_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** The deployment name. */
    name(value: string): az_deployment_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_deployment_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_deployment_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_deployment_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_deployment_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_deployment_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_deployment_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_deployment_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_deployment_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
