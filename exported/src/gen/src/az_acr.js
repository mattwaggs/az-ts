"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/** Manage private Tasks agent pools with Azure Container Registries. */
var az_acr_agentpool = /** @class */ (function () {
    function az_acr_agentpool() {
    }
    /**
     * Create an agent pool for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr agentpool create --name
     *                         --registry
     *                         [--count]
     *                         [--no-wait]
     *                         [--os]
     *                         [--resource-group]
     *                         [--subnet-id]
     *                         [--subscription]
     *                         [--tier]
     * ```
     *
     * @param {string} name The name of the agent pool.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_agentpool.create = function (name, registry) {
        return new az_acr_agentpool_create_command_builder("az acr agentpool create", 'az_acr_agentpool_create_command_result', name, registry);
    };
    /**
     * Delete an agent pool.
     *
     * Syntax:
     * ```
     * az acr agentpool delete --name
     *                         --registry
     *                         [--no-wait]
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--yes]
     * ```
     *
     * @param {string} name The name of the agent pool.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_agentpool["delete"] = function (name, registry) {
        return new az_acr_agentpool_delete_command_builder("az acr agentpool delete", 'az_acr_agentpool_delete_command_result', name, registry);
    };
    /**
     * List the agent pools for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr agentpool list --registry
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_agentpool.list = function (registry) {
        return new az_acr_agentpool_list_command_builder("az acr agentpool list", 'az_acr_agentpool_list_command_result', registry);
    };
    /**
     * Get the properties of a specified agent pool for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr agentpool show --name
     *                       --registry
     *                       [--query-examples]
     *                       [--queue-count]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} name The name of the agent pool.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_agentpool.show = function (name, registry) {
        return new az_acr_agentpool_show_command_builder("az acr agentpool show", 'az_acr_agentpool_show_command_result', name, registry);
    };
    /**
     * Update an agent pool for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr agentpool update --name
     *                         --registry
     *                         [--count]
     *                         [--no-wait]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The name of the agent pool.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_agentpool.update = function (name, registry) {
        return new az_acr_agentpool_update_command_builder("az acr agentpool update", 'az_acr_agentpool_update_command_result', name, registry);
    };
    return az_acr_agentpool;
}());
exports.az_acr_agentpool = az_acr_agentpool;
/** Manage content-trust policy for Azure Container Registries. */
var az_acr_config_content_trust = /** @class */ (function () {
    function az_acr_config_content_trust() {
    }
    /**
     * Show the configured content-trust policy for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr config content-trust show --registry
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_config_content_trust.show = function (registry) {
        return new az_acr_config_content_trust_show_command_builder("az acr config content-trust show", 'az_acr_config_content_trust_show_command_result', registry);
    };
    /**
     * Update content-trust policy for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr config content-trust update --registry
     *                                    [--resource-group]
     *                                    [--status {disabled, enabled}]
     *                                    [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_config_content_trust.update = function (registry) {
        return new az_acr_config_content_trust_update_command_builder("az acr config content-trust update", 'az_acr_config_content_trust_update_command_result', registry);
    };
    return az_acr_config_content_trust;
}());
exports.az_acr_config_content_trust = az_acr_config_content_trust;
/** Manage retention policy for Azure Container Registries. */
var az_acr_config_retention = /** @class */ (function () {
    function az_acr_config_retention() {
    }
    /**
     * Show the configured retention policy for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr config retention show --registry
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_config_retention.show = function (registry) {
        return new az_acr_config_retention_show_command_builder("az acr config retention show", 'az_acr_config_retention_show_command_result', registry);
    };
    /**
     * Update retention policy for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr config retention update --registry
     *                                --type {UntaggedManifests}
     *                                [--days]
     *                                [--resource-group]
     *                                [--status {disabled, enabled}]
     *                                [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {'UntaggedManifests'} type The type of retention policy.
     */
    az_acr_config_retention.update = function (registry, type) {
        return new az_acr_config_retention_update_command_builder("az acr config retention update", 'az_acr_config_retention_update_command_result', registry, type);
    };
    return az_acr_config_retention;
}());
exports.az_acr_config_retention = az_acr_config_retention;
/** Configure policies for Azure Container Registries. */
var az_acr_config = /** @class */ (function () {
    function az_acr_config() {
    }
    return az_acr_config;
}());
exports.az_acr_config = az_acr_config;
/** Manage login credentials for Azure Container Registries. */
var az_acr_credential = /** @class */ (function () {
    function az_acr_credential() {
    }
    /**
     * Regenerate login credentials for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr credential renew --name
     *                         --password-name {password, password2}
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {'password' | 'password2'} passwordName The name of password to regenerate.
     */
    az_acr_credential.renew = function (name, passwordName) {
        return new az_acr_credential_renew_command_builder("az acr credential renew", 'az_acr_credential_renew_command_result', name, passwordName);
    };
    /**
     * Get the login credentials for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr credential show --name
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_credential.show = function (name) {
        return new az_acr_credential_show_command_builder("az acr credential show", 'az_acr_credential_show_command_result', name);
    };
    return az_acr_credential;
}());
exports.az_acr_credential = az_acr_credential;
/** Manage container registry encryption. */
var az_acr_encryption = /** @class */ (function () {
    function az_acr_encryption() {
    }
    /**
     * Rotate (update) the container registry's encryption key.
     *
     * Syntax:
     * ```
     * az acr encryption rotate-key --name
     *                              [--identity]
     *                              [--key-encryption-key]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_encryption.rotate_key = function (name) {
        return new az_acr_encryption_rotate_key_command_builder("az acr encryption rotate-key", 'az_acr_encryption_rotate_key_command_result', name);
    };
    /**
     * Show the container registry's encryption details.
     *
     * Syntax:
     * ```
     * az acr encryption show --name
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_encryption.show = function (name) {
        return new az_acr_encryption_show_command_builder("az acr encryption show", 'az_acr_encryption_show_command_result', name);
    };
    return az_acr_encryption;
}());
exports.az_acr_encryption = az_acr_encryption;
/** Manage helm chart repositories for Azure Container Registries. */
var az_acr_helm_repo = /** @class */ (function () {
    function az_acr_helm_repo() {
    }
    /**
     * Add a helm chart repository from an Azure Container Registry through the Helm CLI.
     *
     * Syntax:
     * ```
     * az acr helm repo add --name
     *                      [--password]
     *                      [--resource-group]
     *                      [--subscription]
     *                      [--suffix]
     *                      [--username]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_helm_repo.add = function (name) {
        return new az_acr_helm_repo_add_command_builder("az acr helm repo add", 'az_acr_helm_repo_add_command_result', name);
    };
    return az_acr_helm_repo;
}());
exports.az_acr_helm_repo = az_acr_helm_repo;
/** Manage helm charts for Azure Container Registries. */
var az_acr_helm = /** @class */ (function () {
    function az_acr_helm() {
    }
    /**
     * Delete a helm chart version in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr helm delete --name
     *                    [--password]
     *                    [--prov]
     *                    [--resource-group]
     *                    [--subscription]
     *                    [--suffix]
     *                    [--username]
     *                    [--version]
     *                    [--yes]
     *                    [<CHART>]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_helm["delete"] = function (name) {
        return new az_acr_helm_delete_command_builder("az acr helm delete", 'az_acr_helm_delete_command_result', name);
    };
    /**
     * Download and install Helm command-line tool.
     *
     * Syntax:
     * ```
     * az acr helm install-cli [--client-version]
     *                         [--install-location]
     *                         [--subscription]
     *                         [--yes]
     * ```
     */
    az_acr_helm.install_cli = function () {
        return new az_acr_helm_install_cli_command_builder("az acr helm install-cli", 'az_acr_helm_install_cli_command_result');
    };
    /**
     * List all helm charts in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr helm list --name
     *                  [--password]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--suffix]
     *                  [--username]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_helm.list = function (name) {
        return new az_acr_helm_list_command_builder("az acr helm list", 'az_acr_helm_list_command_result', name);
    };
    /**
     * Push a helm chart package to an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr helm push --name
     *                  [--force]
     *                  [--password]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--suffix]
     *                  [--username]
     *                  [<CHART_PACKAGE>]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_helm.push = function (name) {
        return new az_acr_helm_push_command_builder("az acr helm push", 'az_acr_helm_push_command_result', name);
    };
    /**
     * Describe a helm chart in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr helm show --name
     *                  [--password]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--suffix]
     *                  [--username]
     *                  [--version]
     *                  [<CHART>]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_helm.show = function (name) {
        return new az_acr_helm_show_command_builder("az acr helm show", 'az_acr_helm_show_command_result', name);
    };
    return az_acr_helm;
}());
exports.az_acr_helm = az_acr_helm;
/** Manage service (managed) identities for a container registry. */
var az_acr_identity = /** @class */ (function () {
    function az_acr_identity() {
    }
    /**
     * Assign a managed identity to a container registry.
     *
     * Syntax:
     * ```
     * az acr identity assign --identities
     *                        --name
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} identities Space-separated identities. Use '[system]' to refer to the system assigned identity.
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_identity.assign = function (identities, name) {
        return new az_acr_identity_assign_command_builder("az acr identity assign", 'az_acr_identity_assign_command_result', identities, name);
    };
    /**
     * Remove a managed identity from a container registry.
     *
     * Syntax:
     * ```
     * az acr identity remove --identities
     *                        --name
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} identities Space-separated identities. Use '[system]' to refer to the system assigned identity.
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_identity.remove = function (identities, name) {
        return new az_acr_identity_remove_command_builder("az acr identity remove", 'az_acr_identity_remove_command_result', identities, name);
    };
    /**
     * Show the container registry's identity details.
     *
     * Syntax:
     * ```
     * az acr identity show --name
     *                      [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_identity.show = function (name) {
        return new az_acr_identity_show_command_builder("az acr identity show", 'az_acr_identity_show_command_result', name);
    };
    return az_acr_identity;
}());
exports.az_acr_identity = az_acr_identity;
/** Manage network rules for Azure Container Registries. */
var az_acr_network_rule = /** @class */ (function () {
    function az_acr_network_rule() {
    }
    /**
     * Add a network rule.
     *
     * Syntax:
     * ```
     * az acr network-rule add --name
     *                         [--ip-address]
     *                         [--resource-group]
     *                         [--subnet]
     *                         [--subscription]
     *                         [--vnet-name]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_network_rule.add = function (name) {
        return new az_acr_network_rule_add_command_builder("az acr network-rule add", 'az_acr_network_rule_add_command_result', name);
    };
    /**
     * List network rules.
     *
     * Syntax:
     * ```
     * az acr network-rule list --name
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_network_rule.list = function (name) {
        return new az_acr_network_rule_list_command_builder("az acr network-rule list", 'az_acr_network_rule_list_command_result', name);
    };
    /**
     * Remove a network rule.
     *
     * Syntax:
     * ```
     * az acr network-rule remove --name
     *                            [--ip-address]
     *                            [--resource-group]
     *                            [--subnet]
     *                            [--subscription]
     *                            [--vnet-name]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_network_rule.remove = function (name) {
        return new az_acr_network_rule_remove_command_builder("az acr network-rule remove", 'az_acr_network_rule_remove_command_result', name);
    };
    return az_acr_network_rule;
}());
exports.az_acr_network_rule = az_acr_network_rule;
/** Manage Azure Container Registry Tasks that use Cloud Native Buildpacks. */
var az_acr_pack = /** @class */ (function () {
    function az_acr_pack() {
    }
    /**
     * Queues a quick build task that builds an app and pushes it into an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr pack build --builder
     *                   --image
     *                   --registry
     *                   [--agent-pool]
     *                   [--auth-mode {Default, None}]
     *                   [--no-format]
     *                   [--no-logs]
     *                   [--no-wait]
     *                   [--pack-image-tag]
     *                   [--platform]
     *                   [--pull]
     *                   [--resource-group]
     *                   [--subscription]
     *                   [--timeout]
     *                   [<SOURCE_LOCATION>]
     * ```
     *
     * @param {string} builder The name and tag of a Buildpack builder image.
     * @param {string} image The name and tag of the image using the format: '-t repo/image:tag'.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_pack.build = function (builder, image, registry) {
        return new az_acr_pack_build_command_builder("az acr pack build", 'az_acr_pack_build_command_result', builder, image, registry);
    };
    return az_acr_pack;
}());
exports.az_acr_pack = az_acr_pack;
/** Manage container registry private endpoint connections. */
var az_acr_private_endpoint_connection = /** @class */ (function () {
    function az_acr_private_endpoint_connection() {
    }
    /**
     * Approve a private endpoint connection request for a container registry.
     *
     * Syntax:
     * ```
     * az acr private-endpoint-connection approve --name
     *                                            --registry-name
     *                                            [--description]
     *                                            [--resource-group]
     *                                            [--subscription]
     * ```
     *
     * @param {string} name The name of the private endpoint connection.
     * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_private_endpoint_connection.approve = function (name, registryName) {
        return new az_acr_private_endpoint_connection_approve_command_builder("az acr private-endpoint-connection approve", 'az_acr_private_endpoint_connection_approve_command_result', name, registryName);
    };
    /**
     * Delete a private endpoint connection request for a container registry.
     *
     * Syntax:
     * ```
     * az acr private-endpoint-connection delete --name
     *                                           --registry-name
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     *
     * @param {string} name The name of the private endpoint connection.
     * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_private_endpoint_connection["delete"] = function (name, registryName) {
        return new az_acr_private_endpoint_connection_delete_command_builder("az acr private-endpoint-connection delete", 'az_acr_private_endpoint_connection_delete_command_result', name, registryName);
    };
    /**
     * List all private endpoint connections to a container registry.
     *
     * Syntax:
     * ```
     * az acr private-endpoint-connection list --registry-name
     *                                         [--query-examples]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     *
     * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_private_endpoint_connection.list = function (registryName) {
        return new az_acr_private_endpoint_connection_list_command_builder("az acr private-endpoint-connection list", 'az_acr_private_endpoint_connection_list_command_result', registryName);
    };
    /**
     * Reject a private endpoint connection request for a container registry.
     *
     * Syntax:
     * ```
     * az acr private-endpoint-connection reject --name
     *                                           --registry-name
     *                                           [--description]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     *
     * @param {string} name The name of the private endpoint connection.
     * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_private_endpoint_connection.reject = function (name, registryName) {
        return new az_acr_private_endpoint_connection_reject_command_builder("az acr private-endpoint-connection reject", 'az_acr_private_endpoint_connection_reject_command_result', name, registryName);
    };
    /**
     * Show details of a container registry's private endpoint connection.
     *
     * Syntax:
     * ```
     * az acr private-endpoint-connection show --name
     *                                         --registry-name
     *                                         [--query-examples]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     *
     * @param {string} name The name of the private endpoint connection.
     * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_private_endpoint_connection.show = function (name, registryName) {
        return new az_acr_private_endpoint_connection_show_command_builder("az acr private-endpoint-connection show", 'az_acr_private_endpoint_connection_show_command_result', name, registryName);
    };
    return az_acr_private_endpoint_connection;
}());
exports.az_acr_private_endpoint_connection = az_acr_private_endpoint_connection;
/** Manage registry private link resources. */
var az_acr_private_link_resource = /** @class */ (function () {
    function az_acr_private_link_resource() {
    }
    /**
     * List the private link resources supported for a registry.
     *
     * Syntax:
     * ```
     * az acr private-link-resource list --name
     *                                   [--query-examples]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_private_link_resource.list = function (name) {
        return new az_acr_private_link_resource_list_command_builder("az acr private-link-resource list", 'az_acr_private_link_resource_list_command_result', name);
    };
    return az_acr_private_link_resource;
}());
exports.az_acr_private_link_resource = az_acr_private_link_resource;
/** Manage geo-replicated regions of Azure Container Registries. */
var az_acr_replication = /** @class */ (function () {
    function az_acr_replication() {
    }
    /**
     * Create a replicated region for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr replication create --location
     *                           --registry
     *                           [--name]
     *                           [--region-endpoint-enabled {false, true}]
     *                           [--resource-group]
     *                           [--subscription]
     *                           [--tags]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_replication.create = function (location, registry) {
        return new az_acr_replication_create_command_builder("az acr replication create", 'az_acr_replication_create_command_result', location, registry);
    };
    /**
     * Delete a replicated region from an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr replication delete --name
     *                           --registry
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The name of the replication.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_replication["delete"] = function (name, registry) {
        return new az_acr_replication_delete_command_builder("az acr replication delete", 'az_acr_replication_delete_command_result', name, registry);
    };
    /**
     * List all of the regions for a geo-replicated Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr replication list --registry
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_replication.list = function (registry) {
        return new az_acr_replication_list_command_builder("az acr replication list", 'az_acr_replication_list_command_result', registry);
    };
    /**
     * Get the details of a replicated region.
     *
     * Syntax:
     * ```
     * az acr replication show --name
     *                         --registry
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The name of the replication.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_replication.show = function (name, registry) {
        return new az_acr_replication_show_command_builder("az acr replication show", 'az_acr_replication_show_command_result', name, registry);
    };
    /**
     * Updates a replication.
     *
     * Syntax:
     * ```
     * az acr replication update --name
     *                           --registry
     *                           [--add]
     *                           [--force-string]
     *                           [--region-endpoint-enabled {false, true}]
     *                           [--remove]
     *                           [--resource-group]
     *                           [--set]
     *                           [--subscription]
     *                           [--tags]
     * ```
     *
     * @param {string} name The name of the replication.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_replication.update = function (name, registry) {
        return new az_acr_replication_update_command_builder("az acr replication update", 'az_acr_replication_update_command_result', name, registry);
    };
    return az_acr_replication;
}());
exports.az_acr_replication = az_acr_replication;
/** Manage repositories (image names) for Azure Container Registries. */
var az_acr_repository = /** @class */ (function () {
    function az_acr_repository() {
    }
    /**
     * Delete a repository or image in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr repository delete --name
     *                          [--image]
     *                          [--password]
     *                          [--repository]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--suffix]
     *                          [--username]
     *                          [--yes]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_repository["delete"] = function (name) {
        return new az_acr_repository_delete_command_builder("az acr repository delete", 'az_acr_repository_delete_command_result', name);
    };
    /**
     * List repositories in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr repository list --name
     *                        [--password]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--suffix]
     *                        [--top]
     *                        [--username]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_repository.list = function (name) {
        return new az_acr_repository_list_command_builder("az acr repository list", 'az_acr_repository_list_command_result', name);
    };
    /**
     * Get the attributes of a repository or image in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr repository show --name
     *                        [--image]
     *                        [--password]
     *                        [--query-examples]
     *                        [--repository]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--suffix]
     *                        [--username]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_repository.show = function (name) {
        return new az_acr_repository_show_command_builder("az acr repository show", 'az_acr_repository_show_command_result', name);
    };
    /**
     * Show manifests of a repository in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr repository show-manifests --name
     *                                  --repository
     *                                  [--detail]
     *                                  [--orderby {time_asc, time_desc}]
     *                                  [--password]
     *                                  [--resource-group]
     *                                  [--subscription]
     *                                  [--suffix]
     *                                  [--top]
     *                                  [--username]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} repository The name of the repository.
     */
    az_acr_repository.show_manifests = function (name, repository) {
        return new az_acr_repository_show_manifests_command_builder("az acr repository show-manifests", 'az_acr_repository_show_manifests_command_result', name, repository);
    };
    /**
     * Show tags for a repository in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr repository show-tags --name
     *                             --repository
     *                             [--detail]
     *                             [--orderby {time_asc, time_desc}]
     *                             [--password]
     *                             [--resource-group]
     *                             [--subscription]
     *                             [--suffix]
     *                             [--top]
     *                             [--username]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} repository The name of the repository.
     */
    az_acr_repository.show_tags = function (name, repository) {
        return new az_acr_repository_show_tags_command_builder("az acr repository show-tags", 'az_acr_repository_show_tags_command_result', name, repository);
    };
    /**
     * Untag an image in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr repository untag --image
     *                         --name
     *                         [--password]
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--suffix]
     *                         [--username]
     * ```
     *
     * @param {string} image The name of the image. May include a tag in the format 'name:tag'.
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_repository.untag = function (image, name) {
        return new az_acr_repository_untag_command_builder("az acr repository untag", 'az_acr_repository_untag_command_result', image, name);
    };
    /**
     * Update the attributes of a repository or image in an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr repository update --name
     *                          [--delete-enabled {false, true}]
     *                          [--image]
     *                          [--list-enabled {false, true}]
     *                          [--password]
     *                          [--read-enabled {false, true}]
     *                          [--repository]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--suffix]
     *                          [--username]
     *                          [--write-enabled {false, true}]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_repository.update = function (name) {
        return new az_acr_repository_update_command_builder("az acr repository update", 'az_acr_repository_update_command_result', name);
    };
    return az_acr_repository;
}());
exports.az_acr_repository = az_acr_repository;
/** Manage scope access maps for Azure Container Registries. */
var az_acr_scope_map = /** @class */ (function () {
    function az_acr_scope_map() {
    }
    /**
     * Create a scope map for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr scope-map create --name
     *                         --registry
     *                         --repository
     *                         [--description]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The name of the scope map.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} repository Repository permissions. Use the format "--repository REPO [ACTION1 ACTION2 ...]" per flag. Valid actions are {'content/read', 'metadata/write', 'content/write', 'content/delete', 'metadata/read'}.
     */
    az_acr_scope_map.create = function (name, registry, repository) {
        return new az_acr_scope_map_create_command_builder("az acr scope-map create", 'az_acr_scope_map_create_command_result', name, registry, repository);
    };
    /**
     * Delete a scope map for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr scope-map delete --name
     *                         --registry
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--yes]
     * ```
     *
     * @param {string} name The name of the scope map.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_scope_map["delete"] = function (name, registry) {
        return new az_acr_scope_map_delete_command_builder("az acr scope-map delete", 'az_acr_scope_map_delete_command_result', name, registry);
    };
    /**
     * List all scope maps for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr scope-map list --registry
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_scope_map.list = function (registry) {
        return new az_acr_scope_map_list_command_builder("az acr scope-map list", 'az_acr_scope_map_list_command_result', registry);
    };
    /**
     * Show details and attributes of a scope map for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr scope-map show --name
     *                       --registry
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} name The name of the scope map.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_scope_map.show = function (name, registry) {
        return new az_acr_scope_map_show_command_builder("az acr scope-map show", 'az_acr_scope_map_show_command_result', name, registry);
    };
    /**
     * Update a scope map for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr scope-map update --name
     *                         --registry
     *                         [--add]
     *                         [--description]
     *                         [--remove]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     *
     * @param {string} name The name of the scope map.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_scope_map.update = function (name, registry) {
        return new az_acr_scope_map_update_command_builder("az acr scope-map update", 'az_acr_scope_map_update_command_result', name, registry);
    };
    return az_acr_scope_map;
}());
exports.az_acr_scope_map = az_acr_scope_map;
/** Manage credentials for a task. Please see <a href="https://aka.ms/acr/tasks/cross-registry-authentication">https://aka.ms/acr/tasks/cross-registry-authentication</a> for more information. */
var az_acr_task_credential = /** @class */ (function () {
    function az_acr_task_credential() {
    }
    /**
     * Add a custom registry login credential to the task.
     *
     * Syntax:
     * ```
     * az acr task credential add --login-server
     *                            --name
     *                            --registry
     *                            [--password]
     *                            [--resource-group]
     *                            [--subscription]
     *                            [--use-identity]
     *                            [--username]
     * ```
     *
     * @param {string} loginServer The login server of the custom registry. For instance, 'myregistry.azurecr.io'.
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task_credential.add = function (loginServer, name, registry) {
        return new az_acr_task_credential_add_command_builder("az acr task credential add", 'az_acr_task_credential_add_command_result', loginServer, name, registry);
    };
    /**
     * List all the custom registry credentials for task.
     *
     * Syntax:
     * ```
     * az acr task credential list --name
     *                             --registry
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task_credential.list = function (name, registry) {
        return new az_acr_task_credential_list_command_builder("az acr task credential list", 'az_acr_task_credential_list_command_result', name, registry);
    };
    /**
     * Remove credential for a task.
     *
     * Syntax:
     * ```
     * az acr task credential remove --login-server
     *                               --name
     *                               --registry
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} loginServer The login server of the custom registry. For instance, 'myregistry.azurecr.io'.
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task_credential.remove = function (loginServer, name, registry) {
        return new az_acr_task_credential_remove_command_builder("az acr task credential remove", 'az_acr_task_credential_remove_command_result', loginServer, name, registry);
    };
    /**
     * Update the registry login credential for a task.
     *
     * Syntax:
     * ```
     * az acr task credential update --login-server
     *                               --name
     *                               --registry
     *                               [--password]
     *                               [--resource-group]
     *                               [--subscription]
     *                               [--use-identity]
     *                               [--username]
     * ```
     *
     * @param {string} loginServer The login server of the custom registry. For instance, 'myregistry.azurecr.io'.
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task_credential.update = function (loginServer, name, registry) {
        return new az_acr_task_credential_update_command_builder("az acr task credential update", 'az_acr_task_credential_update_command_result', loginServer, name, registry);
    };
    return az_acr_task_credential;
}());
exports.az_acr_task_credential = az_acr_task_credential;
/** Managed Identities for Task. Please see <a href="https://aka.ms/acr/tasks/task-create-managed-identity">https://aka.ms/acr/tasks/task-create-managed-identity</a> for more information. */
var az_acr_task_identity = /** @class */ (function () {
    function az_acr_task_identity() {
    }
    /**
     * Update the managed identity for a task.
     *
     * Syntax:
     * ```
     * az acr task identity assign --name
     *                             --registry
     *                             [--identities]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task_identity.assign = function (name, registry) {
        return new az_acr_task_identity_assign_command_builder("az acr task identity assign", 'az_acr_task_identity_assign_command_result', name, registry);
    };
    /**
     * Remove managed identities for a task.
     *
     * Syntax:
     * ```
     * az acr task identity remove --name
     *                             --registry
     *                             [--identities]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task_identity.remove = function (name, registry) {
        return new az_acr_task_identity_remove_command_builder("az acr task identity remove", 'az_acr_task_identity_remove_command_result', name, registry);
    };
    /**
     * Display the managed identities for task.
     *
     * Syntax:
     * ```
     * az acr task identity show --name
     *                           --registry
     *                           [--query-examples]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task_identity.show = function (name, registry) {
        return new az_acr_task_identity_show_command_builder("az acr task identity show", 'az_acr_task_identity_show_command_result', name, registry);
    };
    return az_acr_task_identity;
}());
exports.az_acr_task_identity = az_acr_task_identity;
/** Manage timer triggers for a task. */
var az_acr_task_timer = /** @class */ (function () {
    function az_acr_task_timer() {
    }
    /**
     * Add a timer trigger to a task.
     *
     * Syntax:
     * ```
     * az acr task timer add --name
     *                       --registry
     *                       --schedule
     *                       --timer-name
     *                       [--enabled {false, true}]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} schedule The schedule of the timer trigger represented as a cron expression.
     * @param {string} timerName The name of the timer trigger.
     */
    az_acr_task_timer.add = function (name, registry, schedule, timerName) {
        return new az_acr_task_timer_add_command_builder("az acr task timer add", 'az_acr_task_timer_add_command_result', name, registry, schedule, timerName);
    };
    /**
     * List all timer triggers for a task.
     *
     * Syntax:
     * ```
     * az acr task timer list --name
     *                        --registry
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task_timer.list = function (name, registry) {
        return new az_acr_task_timer_list_command_builder("az acr task timer list", 'az_acr_task_timer_list_command_result', name, registry);
    };
    /**
     * Remove a timer trigger from a task.
     *
     * Syntax:
     * ```
     * az acr task timer remove --name
     *                          --registry
     *                          --timer-name
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} timerName The name of the timer trigger.
     */
    az_acr_task_timer.remove = function (name, registry, timerName) {
        return new az_acr_task_timer_remove_command_builder("az acr task timer remove", 'az_acr_task_timer_remove_command_result', name, registry, timerName);
    };
    /**
     * Update the timer trigger for a task.
     *
     * Syntax:
     * ```
     * az acr task timer update --name
     *                          --registry
     *                          --timer-name
     *                          [--enabled {false, true}]
     *                          [--resource-group]
     *                          [--schedule]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} timerName The name of the timer trigger.
     */
    az_acr_task_timer.update = function (name, registry, timerName) {
        return new az_acr_task_timer_update_command_builder("az acr task timer update", 'az_acr_task_timer_update_command_result', name, registry, timerName);
    };
    return az_acr_task_timer;
}());
exports.az_acr_task_timer = az_acr_task_timer;
/** Manage a collection of steps for building, testing and OS & Framework patching container images using Azure Container Registries. */
var az_acr_task = /** @class */ (function () {
    function az_acr_task() {
    }
    /**
     * Cancel a specified run of an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr task cancel-run --registry
     *                        --run-id
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} runId The unique run identifier.
     */
    az_acr_task.cancel_run = function (registry, runId) {
        return new az_acr_task_cancel_run_command_builder("az acr task cancel-run", 'az_acr_task_cancel_run_command_result', registry, runId);
    };
    /**
     * Create a series of steps for building, testing and OS & Framework patching containers. Tasks support triggers from git commits and base image updates.
     *
     * Syntax:
     * ```
     * az acr task create --context
     *                    --name
     *                    --registry
     *                    [--agent-pool]
     *                    [--arg]
     *                    [--assign-identity]
     *                    [--auth-mode {Default, None}]
     *                    [--base-image-trigger-enabled {false, true}]
     *                    [--base-image-trigger-name]
     *                    [--base-image-trigger-type {All, Runtime}]
     *                    [--cmd]
     *                    [--commit-trigger-enabled {false, true}]
     *                    [--cpu]
     *                    [--file]
     *                    [--git-access-token]
     *                    [--image]
     *                    [--no-cache {false, true}]
     *                    [--no-push {false, true}]
     *                    [--platform]
     *                    [--pull-request-trigger-enabled {false, true}]
     *                    [--resource-group]
     *                    [--schedule]
     *                    [--secret-arg]
     *                    [--set]
     *                    [--set-secret]
     *                    [--source-trigger-name]
     *                    [--status {Disabled, Enabled}]
     *                    [--subscription]
     *                    [--target]
     *                    [--timeout]
     *                    [--update-trigger-endpoint]
     *                    [--update-trigger-payload-type {Default, Token}]
     *                    [--values]
     * ```
     *
     * @param {string} context The full URL to the source code repository (Requires '.git' suffix for a github repo) or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored.
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task.create = function (context, name, registry) {
        return new az_acr_task_create_command_builder("az acr task create", 'az_acr_task_create_command_result', context, name, registry);
    };
    /**
     * Delete a task from an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr task delete --name
     *                    --registry
     *                    [--resource-group]
     *                    [--subscription]
     *                    [--yes]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task["delete"] = function (name, registry) {
        return new az_acr_task_delete_command_builder("az acr task delete", 'az_acr_task_delete_command_result', name, registry);
    };
    /**
     * List the tasks for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr task list --registry
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task.list = function (registry) {
        return new az_acr_task_list_command_builder("az acr task list", 'az_acr_task_list_command_result', registry);
    };
    /**
     * List all of the executed runs for an Azure Container Registry, with the ability to filter by a specific Task.
     *
     * Syntax:
     * ```
     * az acr task list-runs --registry
     *                       [--image]
     *                       [--name]
     *                       [--resource-group]
     *                       [--run-status {Canceled, Error, Failed, Queued, Running, Started, Succeeded, Timeout}]
     *                       [--subscription]
     *                       [--top]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task.list_runs = function (registry) {
        return new az_acr_task_list_runs_command_builder("az acr task list-runs", 'az_acr_task_list_runs_command_result', registry);
    };
    /**
     * Show logs for a particular run. If no run-id is supplied, show logs for the last created run.
     *
     * Syntax:
     * ```
     * az acr task logs --registry
     *                  [--image]
     *                  [--name]
     *                  [--resource-group]
     *                  [--run-id]
     *                  [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task.logs = function (registry) {
        return new az_acr_task_logs_command_builder("az acr task logs", 'az_acr_task_logs_command_result', registry);
    };
    /**
     * Manually trigger a task that might otherwise be waiting for git commits or base image update triggers.
     *
     * Syntax:
     * ```
     * az acr task run --name
     *                 --registry
     *                 [--agent-pool]
     *                 [--arg]
     *                 [--context]
     *                 [--file]
     *                 [--no-logs]
     *                 [--no-wait]
     *                 [--resource-group]
     *                 [--secret-arg]
     *                 [--set]
     *                 [--set-secret]
     *                 [--subscription]
     *                 [--target]
     *                 [--update-trigger-token]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task.run = function (name, registry) {
        return new az_acr_task_run_command_builder("az acr task run", 'az_acr_task_run_command_result', name, registry);
    };
    /**
     * Get the properties of a named task for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr task show --name
     *                  --registry
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--with-secure-properties]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task.show = function (name, registry) {
        return new az_acr_task_show_command_builder("az acr task show", 'az_acr_task_show_command_result', name, registry);
    };
    /**
     * Get the properties of a specified run of an Azure Container Registry Task.
     *
     * Syntax:
     * ```
     * az acr task show-run --registry
     *                      --run-id
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} runId The unique run identifier.
     */
    az_acr_task.show_run = function (registry, runId) {
        return new az_acr_task_show_run_command_builder("az acr task show-run", 'az_acr_task_show_run_command_result', registry, runId);
    };
    /**
     * Update a task for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr task update --name
     *                    --registry
     *                    [--agent-pool]
     *                    [--arg]
     *                    [--auth-mode {Default, None}]
     *                    [--base-image-trigger-enabled {false, true}]
     *                    [--base-image-trigger-type {All, Runtime}]
     *                    [--commit-trigger-enabled {false, true}]
     *                    [--context]
     *                    [--cpu]
     *                    [--file]
     *                    [--git-access-token]
     *                    [--image]
     *                    [--no-cache {false, true}]
     *                    [--no-push {false, true}]
     *                    [--platform]
     *                    [--pull-request-trigger-enabled {false, true}]
     *                    [--resource-group]
     *                    [--secret-arg]
     *                    [--set]
     *                    [--set-secret]
     *                    [--status {Disabled, Enabled}]
     *                    [--subscription]
     *                    [--target]
     *                    [--timeout]
     *                    [--update-trigger-endpoint]
     *                    [--update-trigger-payload-type {Default, Token}]
     *                    [--values]
     * ```
     *
     * @param {string} name The name of the task.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_task.update = function (name, registry) {
        return new az_acr_task_update_command_builder("az acr task update", 'az_acr_task_update_command_result', name, registry);
    };
    /**
     * Patch the run properties of an Azure Container Registry Task.
     *
     * Syntax:
     * ```
     * az acr task update-run --registry
     *                        --run-id
     *                        [--no-archive {false, true}]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} runId The unique run identifier.
     */
    az_acr_task.update_run = function (registry, runId) {
        return new az_acr_task_update_run_command_builder("az acr task update-run", 'az_acr_task_update_run_command_result', registry, runId);
    };
    return az_acr_task;
}());
exports.az_acr_task = az_acr_task;
/** Manage taskruns using Azure Container Registries. */
var az_acr_taskrun = /** @class */ (function () {
    function az_acr_taskrun() {
    }
    /**
     * Delete a taskrun from an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr taskrun delete --name
     *                       --registry
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--yes]
     * ```
     *
     * @param {string} name The name of the taskrun.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_taskrun["delete"] = function (name, registry) {
        return new az_acr_taskrun_delete_command_builder("az acr taskrun delete", 'az_acr_taskrun_delete_command_result', name, registry);
    };
    /**
     * List the taskruns for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr taskrun list --registry
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_taskrun.list = function (registry) {
        return new az_acr_taskrun_list_command_builder("az acr taskrun list", 'az_acr_taskrun_list_command_result', registry);
    };
    /**
     * Show run logs for a particular taskrun.
     *
     * Syntax:
     * ```
     * az acr taskrun logs --name
     *                     --registry
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the taskrun.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_taskrun.logs = function (name, registry) {
        return new az_acr_taskrun_logs_command_builder("az acr taskrun logs", 'az_acr_taskrun_logs_command_result', name, registry);
    };
    /**
     * Get the properties of a named taskrun for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr taskrun show --name
     *                     --registry
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the taskrun.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_taskrun.show = function (name, registry) {
        return new az_acr_taskrun_show_command_builder("az acr taskrun show", 'az_acr_taskrun_show_command_result', name, registry);
    };
    return az_acr_taskrun;
}());
exports.az_acr_taskrun = az_acr_taskrun;
/** Manage credentials of a token for an Azure Container Registry. */
var az_acr_token_credential = /** @class */ (function () {
    function az_acr_token_credential() {
    }
    /**
     * Delete a token credential.
     *
     * Syntax:
     * ```
     * az acr token credential delete --name
     *                                --registry
     *                                [--password1]
     *                                [--password2]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The name of the token.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_token_credential["delete"] = function (name, registry) {
        return new az_acr_token_credential_delete_command_builder("az acr token credential delete", 'az_acr_token_credential_delete_command_result', name, registry);
    };
    /**
     * Generate or replace one or both passwords of a token for an Azure Container Registry. For using token and password to access a container registry, see <a href="https://aka.ms/acr/repo-permissions">https://aka.ms/acr/repo-permissions</a>.
     *
     * Syntax:
     * ```
     * az acr token credential generate --name
     *                                  --registry
     *                                  [--expiration]
     *                                  [--expiration-in-days]
     *                                  [--password1]
     *                                  [--password2]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} name The name of the token.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_token_credential.generate = function (name, registry) {
        return new az_acr_token_credential_generate_command_builder("az acr token credential generate", 'az_acr_token_credential_generate_command_result', name, registry);
    };
    return az_acr_token_credential;
}());
exports.az_acr_token_credential = az_acr_token_credential;
/** Manage tokens for an Azure Container Registry. */
var az_acr_token = /** @class */ (function () {
    function az_acr_token() {
    }
    /**
     * Create a token associated with a scope map for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr token create --name
     *                     --registry
     *                     [--expiration]
     *                     [--expiration-in-days]
     *                     [--no-passwords {false, true}]
     *                     [--repository]
     *                     [--resource-group]
     *                     [--scope-map]
     *                     [--status {disabled, enabled}]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the token.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_token.create = function (name, registry) {
        return new az_acr_token_create_command_builder("az acr token create", 'az_acr_token_create_command_result', name, registry);
    };
    /**
     * Delete a token for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr token delete --name
     *                     --registry
     *                     [--resource-group]
     *                     [--subscription]
     *                     [--yes]
     * ```
     *
     * @param {string} name The name of the token.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_token["delete"] = function (name, registry) {
        return new az_acr_token_delete_command_builder("az acr token delete", 'az_acr_token_delete_command_result', name, registry);
    };
    /**
     * List all tokens for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr token list --registry
     *                   [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_token.list = function (registry) {
        return new az_acr_token_list_command_builder("az acr token list", 'az_acr_token_list_command_result', registry);
    };
    /**
     * Show details and attributes of a token for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr token show --name
     *                   --registry
     *                   [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     *
     * @param {string} name The name of the token.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_token.show = function (name, registry) {
        return new az_acr_token_show_command_builder("az acr token show", 'az_acr_token_show_command_result', name, registry);
    };
    /**
     * Update a token (replace associated scope map) for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr token update --name
     *                     --registry
     *                     [--resource-group]
     *                     [--scope-map]
     *                     [--status {disabled, enabled}]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the token.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_token.update = function (name, registry) {
        return new az_acr_token_update_command_builder("az acr token update", 'az_acr_token_update_command_result', name, registry);
    };
    return az_acr_token;
}());
exports.az_acr_token = az_acr_token;
/** Manage webhooks for Azure Container Registries. */
var az_acr_webhook = /** @class */ (function () {
    function az_acr_webhook() {
    }
    /**
     * Create a webhook for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr webhook create --actions {chart_delete, chart_push, delete, push, quarantine}
     *                       --name
     *                       --registry
     *                       --uri
     *                       [--headers]
     *                       [--location]
     *                       [--resource-group]
     *                       [--scope]
     *                       [--status {disabled, enabled}]
     *                       [--subscription]
     *                       [--tags]
     * ```
     *
     * @param {'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine'} actions Space-separated list of actions that trigger the webhook to post notifications.
     * @param {string} name The name of the webhook.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} uri The service URI for the webhook to post notifications.
     */
    az_acr_webhook.create = function (actions, name, registry, uri) {
        return new az_acr_webhook_create_command_builder("az acr webhook create", 'az_acr_webhook_create_command_result', actions, name, registry, uri);
    };
    /**
     * Delete a webhook from an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr webhook delete --name
     *                       --registry
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} name The name of the webhook.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_webhook["delete"] = function (name, registry) {
        return new az_acr_webhook_delete_command_builder("az acr webhook delete", 'az_acr_webhook_delete_command_result', name, registry);
    };
    /**
     * Get the service URI and custom headers for the webhook.
     *
     * Syntax:
     * ```
     * az acr webhook get-config --name
     *                           --registry
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The name of the webhook.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_webhook.get_config = function (name, registry) {
        return new az_acr_webhook_get_config_command_builder("az acr webhook get-config", 'az_acr_webhook_get_config_command_result', name, registry);
    };
    /**
     * List all of the webhooks for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr webhook list --registry
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_webhook.list = function (registry) {
        return new az_acr_webhook_list_command_builder("az acr webhook list", 'az_acr_webhook_list_command_result', registry);
    };
    /**
     * List recent events for a webhook.
     *
     * Syntax:
     * ```
     * az acr webhook list-events --name
     *                            --registry
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     *
     * @param {string} name The name of the webhook.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_webhook.list_events = function (name, registry) {
        return new az_acr_webhook_list_events_command_builder("az acr webhook list-events", 'az_acr_webhook_list_events_command_result', name, registry);
    };
    /**
     * Trigger a ping event for a webhook.
     *
     * Syntax:
     * ```
     * az acr webhook ping --name
     *                     --registry
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the webhook.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_webhook.ping = function (name, registry) {
        return new az_acr_webhook_ping_command_builder("az acr webhook ping", 'az_acr_webhook_ping_command_result', name, registry);
    };
    /**
     * Get the details of a webhook.
     *
     * Syntax:
     * ```
     * az acr webhook show --name
     *                     --registry
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the webhook.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_webhook.show = function (name, registry) {
        return new az_acr_webhook_show_command_builder("az acr webhook show", 'az_acr_webhook_show_command_result', name, registry);
    };
    /**
     * Update a webhook.
     *
     * Syntax:
     * ```
     * az acr webhook update --name
     *                       --registry
     *                       [--actions {chart_delete, chart_push, delete, push, quarantine}]
     *                       [--add]
     *                       [--force-string]
     *                       [--headers]
     *                       [--remove]
     *                       [--resource-group]
     *                       [--scope]
     *                       [--set]
     *                       [--status {disabled, enabled}]
     *                       [--subscription]
     *                       [--tags]
     *                       [--uri]
     * ```
     *
     * @param {string} name The name of the webhook.
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr_webhook.update = function (name, registry) {
        return new az_acr_webhook_update_command_builder("az acr webhook update", 'az_acr_webhook_update_command_result', name, registry);
    };
    return az_acr_webhook;
}());
exports.az_acr_webhook = az_acr_webhook;
/** Manage private registries with Azure Container Registries. */
var az_acr = /** @class */ (function () {
    function az_acr() {
    }
    /**
     * Queues a quick build, providing streaming logs for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr build --registry
     *              [--agent-pool]
     *              [--auth-mode {Default, None}]
     *              [--build-arg]
     *              [--file]
     *              [--image]
     *              [--no-format]
     *              [--no-logs]
     *              [--no-push]
     *              [--no-wait]
     *              [--platform]
     *              [--resource-group]
     *              [--secret-build-arg]
     *              [--subscription]
     *              [--target]
     *              [--timeout]
     *              [<SOURCE_LOCATION>]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr.build = function (registry) {
        return new az_acr_build_command_builder("az acr build", 'az_acr_build_command_result', registry);
    };
    /**
     * Gets health information on the environment and optionally a target registry.
     *
     * Syntax:
     * ```
     * az acr check-health [--ignore-errors]
     *                     [--name]
     *                     [--subscription]
     *                     [--yes]
     * ```
     */
    az_acr.check_health = function () {
        return new az_acr_check_health_command_builder("az acr check-health", 'az_acr_check_health_command_result');
    };
    /**
     * Checks if an Azure Container Registry name is valid and available for use.
     *
     * Syntax:
     * ```
     * az acr check-name --name
     *                   [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr.check_name = function (name) {
        return new az_acr_check_name_command_builder("az acr check-name", 'az_acr_check_name_command_result', name);
    };
    /**
     * Create an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr create --name
     *               --resource-group
     *               --sku {Basic, Classic, Premium, Standard}
     *               [--admin-enabled {false, true}]
     *               [--default-action {Allow, Deny}]
     *               [--identity]
     *               [--key-encryption-key]
     *               [--location]
     *               [--public-network-enabled {false, true}]
     *               [--subscription]
     *               [--tags]
     *               [--workspace]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Basic' | 'Classic' | 'Premium' | 'Standard'} sku The SKU of the container registry.
     */
    az_acr.create = function (name, resourceGroup, sku) {
        return new az_acr_create_command_builder("az acr create", 'az_acr_create_command_result', name, resourceGroup, sku);
    };
    /**
     * Deletes an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr delete --name
     *               [--resource-group]
     *               [--subscription]
     *               [--yes]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr["delete"] = function (name) {
        return new az_acr_delete_command_builder("az acr delete", 'az_acr_delete_command_result', name);
    };
    /**
     * Imports an image to an Azure Container Registry from another Container Registry. Import removes the need to docker pull, docker tag, docker push.
     *
     * Syntax:
     * ```
     * az acr import --name
     *               --source
     *               [--force]
     *               [--image]
     *               [--password]
     *               [--registry]
     *               [--repository]
     *               [--resource-group]
     *               [--subscription]
     *               [--username]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     * @param {string} source Source image name or fully qualified source containing the registry login server. If `--registry` is used, `--source` will always be interpreted as a source image, even if it contains the login server.
     */
    az_acr["import"] = function (name, source) {
        return new az_acr_import_command_builder("az acr import", 'az_acr_import_command_result', name, source);
    };
    /**
     * Lists all the container registries under the current subscription.
     *
     * Syntax:
     * ```
     * az acr list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_acr.list = function () {
        return new az_acr_list_command_builder("az acr list", 'az_acr_list_command_result');
    };
    /**
     * Log in to an Azure Container Registry through the Docker CLI.
     *
     * Syntax:
     * ```
     * az acr login --name
     *              [--expose-token]
     *              [--password]
     *              [--resource-group]
     *              [--subscription]
     *              [--suffix]
     *              [--username]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr.login = function (name) {
        return new az_acr_login_command_builder("az acr login", 'az_acr_login_command_result', name);
    };
    /**
     * Queues a quick run providing streamed logs for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr run --registry
     *            [--agent-pool]
     *            [--auth-mode {Default, None}]
     *            [--cmd]
     *            [--file]
     *            [--no-format]
     *            [--no-logs]
     *            [--no-wait]
     *            [--platform]
     *            [--resource-group]
     *            [--set]
     *            [--set-secret]
     *            [--subscription]
     *            [--timeout]
     *            [--values]
     *            [<SOURCE_LOCATION>]
     * ```
     *
     * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr.run = function (registry) {
        return new az_acr_run_command_builder("az acr run", 'az_acr_run_command_result', registry);
    };
    /**
     * Get the details of an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr show --name
     *             [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr.show = function (name) {
        return new az_acr_show_command_builder("az acr show", 'az_acr_show_command_result', name);
    };
    /**
     * Display registry endpoints.
     *
     * Syntax:
     * ```
     * az acr show-endpoints --name
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr.show_endpoints = function (name) {
        return new az_acr_show_endpoints_command_builder("az acr show-endpoints", 'az_acr_show_endpoints_command_result', name);
    };
    /**
     * Get the storage usage for an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr show-usage --name
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr.show_usage = function (name) {
        return new az_acr_show_usage_command_builder("az acr show-usage", 'az_acr_show_usage_command_result', name);
    };
    /**
     * Update an Azure Container Registry.
     *
     * Syntax:
     * ```
     * az acr update --name
     *               [--add]
     *               [--admin-enabled {false, true}]
     *               [--data-endpoint-enabled {false, true}]
     *               [--default-action {Allow, Deny}]
     *               [--force-string]
     *               [--public-network-enabled {false, true}]
     *               [--remove]
     *               [--resource-group]
     *               [--set]
     *               [--sku {Basic, Classic, Premium, Standard}]
     *               [--subscription]
     *               [--tags]
     * ```
     *
     * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
     */
    az_acr.update = function (name) {
        return new az_acr_update_command_builder("az acr update", 'az_acr_update_command_result', name);
    };
    return az_acr;
}());
exports.az_acr = az_acr;
/**
 * Create an agent pool for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr agentpool create --name
 *                         --registry
 *                         [--count]
 *                         [--no-wait]
 *                         [--os]
 *                         [--resource-group]
 *                         [--subnet-id]
 *                         [--subscription]
 *                         [--tier]
 * ```
 *
 * @param {string} name The name of the agent pool.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_agentpool_create_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_agentpool_create_command_builder, _super);
    function az_acr_agentpool_create_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the agent pool. */
    az_acr_agentpool_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_agentpool_create_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The count of the agent pool. */
    az_acr_agentpool_create_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** Do not wait for the Agent Pool to complete action and return immediately after queuing the request. */
    az_acr_agentpool_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The os of the agent pool. */
    az_acr_agentpool_create_command_builder.prototype.os = function (value) {
        this.setFlag("--os", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_agentpool_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The Virtual Network Subnet Resource Id of the agent machine. */
    az_acr_agentpool_create_command_builder.prototype.subnetId = function (value) {
        this.setFlag("--subnet-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_agentpool_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Sets the VM your agent pool will run on. Valid values are: S1(2 vCPUs, 3 GiB RAM), S2(4 vCPUs, 8 GiB RAM), S3(8 vCPUs, 16 GiB RAM) or I6(64 vCPUs, 216 GiB RAM, Isolated). */
    az_acr_agentpool_create_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    return az_acr_agentpool_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an agent pool.
 *
 * Syntax:
 * ```
 * az acr agentpool delete --name
 *                         --registry
 *                         [--no-wait]
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--yes]
 * ```
 *
 * @param {string} name The name of the agent pool.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_agentpool_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_agentpool_delete_command_builder, _super);
    function az_acr_agentpool_delete_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the agent pool. */
    az_acr_agentpool_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_agentpool_delete_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Do not wait for the Agent Pool to complete action and return immediately after queuing the request. */
    az_acr_agentpool_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_agentpool_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_agentpool_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acr_agentpool_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acr_agentpool_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the agent pools for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr agentpool list --registry
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_agentpool_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_agentpool_list_command_builder, _super);
    function az_acr_agentpool_list_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_agentpool_list_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_agentpool_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_agentpool_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_agentpool_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_agentpool_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the properties of a specified agent pool for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr agentpool show --name
 *                       --registry
 *                       [--query-examples]
 *                       [--queue-count]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} name The name of the agent pool.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_agentpool_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_agentpool_show_command_builder, _super);
    function az_acr_agentpool_show_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the agent pool. */
    az_acr_agentpool_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_agentpool_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_agentpool_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Get only the queue count. */
    az_acr_agentpool_show_command_builder.prototype.queueCount = function (value) {
        this.setFlag("--queue-count", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_agentpool_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_agentpool_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_agentpool_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an agent pool for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr agentpool update --name
 *                         --registry
 *                         [--count]
 *                         [--no-wait]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The name of the agent pool.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_agentpool_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_agentpool_update_command_builder, _super);
    function az_acr_agentpool_update_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the agent pool. */
    az_acr_agentpool_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_agentpool_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The count of the agent pool. */
    az_acr_agentpool_update_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** Do not wait for the Agent Pool to complete action and return immediately after queuing the request. */
    az_acr_agentpool_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_agentpool_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_agentpool_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_agentpool_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the configured content-trust policy for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr config content-trust show --registry
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_config_content_trust_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_config_content_trust_show_command_builder, _super);
    function az_acr_config_content_trust_show_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_config_content_trust_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_config_content_trust_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_config_content_trust_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_config_content_trust_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_config_content_trust_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update content-trust policy for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr config content-trust update --registry
 *                                    [--resource-group]
 *                                    [--status {disabled, enabled}]
 *                                    [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_config_content_trust_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_config_content_trust_update_command_builder, _super);
    function az_acr_config_content_trust_update_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_config_content_trust_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_config_content_trust_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Indicates whether content-trust is enabled. */
    az_acr_config_content_trust_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_config_content_trust_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_config_content_trust_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the configured retention policy for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr config retention show --registry
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_config_retention_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_config_retention_show_command_builder, _super);
    function az_acr_config_retention_show_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_config_retention_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_config_retention_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_config_retention_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_config_retention_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_config_retention_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update retention policy for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr config retention update --registry
 *                                --type {UntaggedManifests}
 *                                [--days]
 *                                [--resource-group]
 *                                [--status {disabled, enabled}]
 *                                [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {'UntaggedManifests'} type The type of retention policy.
 */
var az_acr_config_retention_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_config_retention_update_command_builder, _super);
    function az_acr_config_retention_update_command_builder(commandPath, resultDataTypeName, registry, type) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        _this.type(type);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_config_retention_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The type of retention policy. */
    az_acr_config_retention_update_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** The number of days to retain an untagged manifest after which it gets purged (Range: 0 to 365). Value "0" will delete untagged manifests immediately. */
    az_acr_config_retention_update_command_builder.prototype.days = function (value) {
        this.setFlag("--days", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_config_retention_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Indicates whether retention policy is enabled. */
    az_acr_config_retention_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_config_retention_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_config_retention_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate login credentials for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr credential renew --name
 *                         --password-name {password, password2}
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {'password' | 'password2'} passwordName The name of password to regenerate.
 */
var az_acr_credential_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_credential_renew_command_builder, _super);
    function az_acr_credential_renew_command_builder(commandPath, resultDataTypeName, name, passwordName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.passwordName(passwordName);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_credential_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of password to regenerate. */
    az_acr_credential_renew_command_builder.prototype.passwordName = function (value) {
        this.setFlag("--password-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_credential_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_credential_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_credential_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the login credentials for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr credential show --name
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_credential_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_credential_show_command_builder, _super);
    function az_acr_credential_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_credential_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_credential_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_credential_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_credential_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_credential_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Rotate (update) the container registry's encryption key.
 *
 * Syntax:
 * ```
 * az acr encryption rotate-key --name
 *                              [--identity]
 *                              [--key-encryption-key]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_encryption_rotate_key_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_encryption_rotate_key_command_builder, _super);
    function az_acr_encryption_rotate_key_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_encryption_rotate_key_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Client id of managed identity, resource name or id of user assigned identity. Use '[system]' to refer to the system assigned identity. */
    az_acr_encryption_rotate_key_command_builder.prototype.identity = function (value) {
        this.setFlag("--identity", value);
        return this;
    };
    /** Key vault key uri. */
    az_acr_encryption_rotate_key_command_builder.prototype.keyEncryptionKey = function (value) {
        this.setFlag("--key-encryption-key", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_encryption_rotate_key_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_encryption_rotate_key_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_encryption_rotate_key_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the container registry's encryption details.
 *
 * Syntax:
 * ```
 * az acr encryption show --name
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_encryption_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_encryption_show_command_builder, _super);
    function az_acr_encryption_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_encryption_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_encryption_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_encryption_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_encryption_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_encryption_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a helm chart repository from an Azure Container Registry through the Helm CLI.
 *
 * Syntax:
 * ```
 * az acr helm repo add --name
 *                      [--password]
 *                      [--resource-group]
 *                      [--subscription]
 *                      [--suffix]
 *                      [--username]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_helm_repo_add_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_helm_repo_add_command_builder, _super);
    function az_acr_helm_repo_add_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_helm_repo_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_helm_repo_add_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_helm_repo_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_helm_repo_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_helm_repo_add_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_helm_repo_add_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_helm_repo_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a helm chart version in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr helm delete --name
 *                    [--password]
 *                    [--prov]
 *                    [--resource-group]
 *                    [--subscription]
 *                    [--suffix]
 *                    [--username]
 *                    [--version]
 *                    [--yes]
 *                    [<CHART>]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_helm_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_helm_delete_command_builder, _super);
    function az_acr_helm_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_helm_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_helm_delete_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Only delete the provenance file. */
    az_acr_helm_delete_command_builder.prototype.prov = function (value) {
        this.setFlag("--prov", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_helm_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_helm_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_helm_delete_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_helm_delete_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    /** The helm chart version. */
    az_acr_helm_delete_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acr_helm_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    /** The helm chart name. */
    az_acr_helm_delete_command_builder.prototype.chart = function (value) {
        this.setFlag("<CHART>", value);
        return this;
    };
    return az_acr_helm_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Download and install Helm command-line tool.
 *
 * Syntax:
 * ```
 * az acr helm install-cli [--client-version]
 *                         [--install-location]
 *                         [--subscription]
 *                         [--yes]
 * ```
 */
var az_acr_helm_install_cli_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_helm_install_cli_command_builder, _super);
    function az_acr_helm_install_cli_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The target Helm CLI version. (Attention: Currently, Helm 3 does not work with "az acr helm" commands). */
    az_acr_helm_install_cli_command_builder.prototype.clientVersion = function (value) {
        this.setFlag("--client-version", value);
        return this;
    };
    /** Path at which to install Helm CLI (Existing one at the same path will be overwritten). */
    az_acr_helm_install_cli_command_builder.prototype.installLocation = function (value) {
        this.setFlag("--install-location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_helm_install_cli_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Agree to the license of Helm, and do not prompt for confirmation. */
    az_acr_helm_install_cli_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acr_helm_install_cli_command_builder;
}(base_1.CommandBuilder));
/**
 * List all helm charts in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr helm list --name
 *                  [--password]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--suffix]
 *                  [--username]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_helm_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_helm_list_command_builder, _super);
    function az_acr_helm_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_helm_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_helm_list_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_helm_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_helm_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_helm_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_helm_list_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_helm_list_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_helm_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Push a helm chart package to an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr helm push --name
 *                  [--force]
 *                  [--password]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--suffix]
 *                  [--username]
 *                  [<CHART_PACKAGE>]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_helm_push_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_helm_push_command_builder, _super);
    function az_acr_helm_push_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_helm_push_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Overwrite the existing chart package. */
    az_acr_helm_push_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_helm_push_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_helm_push_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_helm_push_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_helm_push_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_helm_push_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    /** The helm chart package. */
    az_acr_helm_push_command_builder.prototype.chartPackage = function (value) {
        this.setFlag("<CHART_PACKAGE>", value);
        return this;
    };
    return az_acr_helm_push_command_builder;
}(base_1.CommandBuilder));
/**
 * Describe a helm chart in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr helm show --name
 *                  [--password]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--suffix]
 *                  [--username]
 *                  [--version]
 *                  [<CHART>]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_helm_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_helm_show_command_builder, _super);
    function az_acr_helm_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_helm_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_helm_show_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_helm_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_helm_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_helm_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_helm_show_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_helm_show_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    /** The helm chart version. */
    az_acr_helm_show_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** The helm chart name. */
    az_acr_helm_show_command_builder.prototype.chart = function (value) {
        this.setFlag("<CHART>", value);
        return this;
    };
    return az_acr_helm_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Assign a managed identity to a container registry.
 *
 * Syntax:
 * ```
 * az acr identity assign --identities
 *                        --name
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} identities Space-separated identities. Use '[system]' to refer to the system assigned identity.
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_identity_assign_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_identity_assign_command_builder, _super);
    function az_acr_identity_assign_command_builder(commandPath, resultDataTypeName, identities, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.identities(identities);
        _this.name(name);
        return _this;
    }
    /** Space-separated identities. Use '[system]' to refer to the system assigned identity. */
    az_acr_identity_assign_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_identity_assign_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_identity_assign_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_identity_assign_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_identity_assign_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a managed identity from a container registry.
 *
 * Syntax:
 * ```
 * az acr identity remove --identities
 *                        --name
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} identities Space-separated identities. Use '[system]' to refer to the system assigned identity.
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_identity_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_identity_remove_command_builder, _super);
    function az_acr_identity_remove_command_builder(commandPath, resultDataTypeName, identities, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.identities(identities);
        _this.name(name);
        return _this;
    }
    /** Space-separated identities. Use '[system]' to refer to the system assigned identity. */
    az_acr_identity_remove_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_identity_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_identity_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_identity_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_identity_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the container registry's identity details.
 *
 * Syntax:
 * ```
 * az acr identity show --name
 *                      [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_identity_show_command_builder, _super);
    function az_acr_identity_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_identity_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_identity_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a network rule.
 *
 * Syntax:
 * ```
 * az acr network-rule add --name
 *                         [--ip-address]
 *                         [--resource-group]
 *                         [--subnet]
 *                         [--subscription]
 *                         [--vnet-name]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_network_rule_add_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_network_rule_add_command_builder, _super);
    function az_acr_network_rule_add_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_network_rule_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** IPv4 address or CIDR range. */
    az_acr_network_rule_add_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_network_rule_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_acr_network_rule_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_network_rule_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of a virtual network. */
    az_acr_network_rule_add_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_acr_network_rule_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List network rules.
 *
 * Syntax:
 * ```
 * az acr network-rule list --name
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_network_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_network_rule_list_command_builder, _super);
    function az_acr_network_rule_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_network_rule_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_network_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_network_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_network_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_network_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a network rule.
 *
 * Syntax:
 * ```
 * az acr network-rule remove --name
 *                            [--ip-address]
 *                            [--resource-group]
 *                            [--subnet]
 *                            [--subscription]
 *                            [--vnet-name]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_network_rule_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_network_rule_remove_command_builder, _super);
    function az_acr_network_rule_remove_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_network_rule_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** IPv4 address or CIDR range. */
    az_acr_network_rule_remove_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_network_rule_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_acr_network_rule_remove_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_network_rule_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of a virtual network. */
    az_acr_network_rule_remove_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_acr_network_rule_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Queues a quick build task that builds an app and pushes it into an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr pack build --builder
 *                   --image
 *                   --registry
 *                   [--agent-pool]
 *                   [--auth-mode {Default, None}]
 *                   [--no-format]
 *                   [--no-logs]
 *                   [--no-wait]
 *                   [--pack-image-tag]
 *                   [--platform]
 *                   [--pull]
 *                   [--resource-group]
 *                   [--subscription]
 *                   [--timeout]
 *                   [<SOURCE_LOCATION>]
 * ```
 *
 * @param {string} builder The name and tag of a Buildpack builder image.
 * @param {string} image The name and tag of the image using the format: '-t repo/image:tag'.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_pack_build_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_pack_build_command_builder, _super);
    function az_acr_pack_build_command_builder(commandPath, resultDataTypeName, builder, image, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.builder(builder);
        _this.image(image);
        _this.registry(registry);
        return _this;
    }
    /** The name and tag of a Buildpack builder image. */
    az_acr_pack_build_command_builder.prototype.builder = function (value) {
        this.setFlag("--builder", value);
        return this;
    };
    /** The name and tag of the image using the format: '-t repo/image:tag'. */
    az_acr_pack_build_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_pack_build_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the agent pool. */
    az_acr_pack_build_command_builder.prototype.agentPool = function (value) {
        this.setFlag("--agent-pool", value);
        return this;
    };
    /** Auth mode of the source registry. */
    az_acr_pack_build_command_builder.prototype.authMode = function (value) {
        this.setFlag("--auth-mode", value);
        return this;
    };
    /** Indicates whether the logs should be displayed in raw format. */
    az_acr_pack_build_command_builder.prototype.noFormat = function (value) {
        this.setFlag("--no-format", value);
        return this;
    };
    /** Do not show logs after successfully queuing the build. */
    az_acr_pack_build_command_builder.prototype.noLogs = function (value) {
        this.setFlag("--no-logs", value);
        return this;
    };
    /** Do not wait for the run to complete and return immediately after queuing the run. */
    az_acr_pack_build_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The tag of the 'pack' runner image ('mcr.microsoft.com/oryx/pack'). */
    az_acr_pack_build_command_builder.prototype.packImageTag = function (value) {
        this.setFlag("--pack-image-tag", value);
        return this;
    };
    /** The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional. */
    az_acr_pack_build_command_builder.prototype.platform = function (value) {
        this.setFlag("--platform", value);
        return this;
    };
    /** Pull the latest builder and run images before use. */
    az_acr_pack_build_command_builder.prototype.pull = function (value) {
        this.setFlag("--pull", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_pack_build_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_pack_build_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The timeout in seconds. */
    az_acr_pack_build_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** The local source code directory path (e.g., './src'), or the URL to a git repository (e.g., '<a href="https://github.com/Azure-Samples/acr-build-helloworld-node.git">https://github.com/Azure-Samples/acr-build-helloworld-node.git</a>') or a remote tarball (e.g., '<a href="http://server/context.tar.gz">http://server/context.tar.gz</a>'), or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). */
    az_acr_pack_build_command_builder.prototype.sourceLocation = function (value) {
        this.setFlag("<SOURCE_LOCATION>", value);
        return this;
    };
    return az_acr_pack_build_command_builder;
}(base_1.CommandBuilder));
/**
 * Approve a private endpoint connection request for a container registry.
 *
 * Syntax:
 * ```
 * az acr private-endpoint-connection approve --name
 *                                            --registry-name
 *                                            [--description]
 *                                            [--resource-group]
 *                                            [--subscription]
 * ```
 *
 * @param {string} name The name of the private endpoint connection.
 * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_private_endpoint_connection_approve_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_private_endpoint_connection_approve_command_builder, _super);
    function az_acr_private_endpoint_connection_approve_command_builder(commandPath, resultDataTypeName, name, registryName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registryName(registryName);
        return _this;
    }
    /** The name of the private endpoint connection. */
    az_acr_private_endpoint_connection_approve_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_private_endpoint_connection_approve_command_builder.prototype.registryName = function (value) {
        this.setFlag("--registry-name", value);
        return this;
    };
    /** Approval description. For example, the reason for approval. */
    az_acr_private_endpoint_connection_approve_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_private_endpoint_connection_approve_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_private_endpoint_connection_approve_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_private_endpoint_connection_approve_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a private endpoint connection request for a container registry.
 *
 * Syntax:
 * ```
 * az acr private-endpoint-connection delete --name
 *                                           --registry-name
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 *
 * @param {string} name The name of the private endpoint connection.
 * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_private_endpoint_connection_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_private_endpoint_connection_delete_command_builder, _super);
    function az_acr_private_endpoint_connection_delete_command_builder(commandPath, resultDataTypeName, name, registryName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registryName(registryName);
        return _this;
    }
    /** The name of the private endpoint connection. */
    az_acr_private_endpoint_connection_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_private_endpoint_connection_delete_command_builder.prototype.registryName = function (value) {
        this.setFlag("--registry-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_private_endpoint_connection_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_private_endpoint_connection_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_private_endpoint_connection_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all private endpoint connections to a container registry.
 *
 * Syntax:
 * ```
 * az acr private-endpoint-connection list --registry-name
 *                                         [--query-examples]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 *
 * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_private_endpoint_connection_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_private_endpoint_connection_list_command_builder, _super);
    function az_acr_private_endpoint_connection_list_command_builder(commandPath, resultDataTypeName, registryName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registryName(registryName);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_private_endpoint_connection_list_command_builder.prototype.registryName = function (value) {
        this.setFlag("--registry-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_private_endpoint_connection_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_private_endpoint_connection_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_private_endpoint_connection_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_private_endpoint_connection_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Reject a private endpoint connection request for a container registry.
 *
 * Syntax:
 * ```
 * az acr private-endpoint-connection reject --name
 *                                           --registry-name
 *                                           [--description]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 *
 * @param {string} name The name of the private endpoint connection.
 * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_private_endpoint_connection_reject_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_private_endpoint_connection_reject_command_builder, _super);
    function az_acr_private_endpoint_connection_reject_command_builder(commandPath, resultDataTypeName, name, registryName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registryName(registryName);
        return _this;
    }
    /** The name of the private endpoint connection. */
    az_acr_private_endpoint_connection_reject_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_private_endpoint_connection_reject_command_builder.prototype.registryName = function (value) {
        this.setFlag("--registry-name", value);
        return this;
    };
    /** Rejection description. For example, the reason for rejection. */
    az_acr_private_endpoint_connection_reject_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_private_endpoint_connection_reject_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_private_endpoint_connection_reject_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_private_endpoint_connection_reject_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a container registry's private endpoint connection.
 *
 * Syntax:
 * ```
 * az acr private-endpoint-connection show --name
 *                                         --registry-name
 *                                         [--query-examples]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 *
 * @param {string} name The name of the private endpoint connection.
 * @param {string} registryName The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_private_endpoint_connection_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_private_endpoint_connection_show_command_builder, _super);
    function az_acr_private_endpoint_connection_show_command_builder(commandPath, resultDataTypeName, name, registryName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registryName(registryName);
        return _this;
    }
    /** The name of the private endpoint connection. */
    az_acr_private_endpoint_connection_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_private_endpoint_connection_show_command_builder.prototype.registryName = function (value) {
        this.setFlag("--registry-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_private_endpoint_connection_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_private_endpoint_connection_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_private_endpoint_connection_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_private_endpoint_connection_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the private link resources supported for a registry.
 *
 * Syntax:
 * ```
 * az acr private-link-resource list --name
 *                                   [--query-examples]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_private_link_resource_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_private_link_resource_list_command_builder, _super);
    function az_acr_private_link_resource_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_private_link_resource_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_private_link_resource_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_private_link_resource_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_private_link_resource_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_private_link_resource_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a replicated region for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr replication create --location
 *                           --registry
 *                           [--name]
 *                           [--region-endpoint-enabled {false, true}]
 *                           [--resource-group]
 *                           [--subscription]
 *                           [--tags]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_replication_create_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_replication_create_command_builder, _super);
    function az_acr_replication_create_command_builder(commandPath, resultDataTypeName, location, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.registry(registry);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_acr_replication_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_replication_create_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the replication. Default to the location name. */
    az_acr_replication_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Allow routing to this replication. Requests will not be routed to a disabled replication. Data syncing will continue regardless of the region endpoint status. Default: true. */
    az_acr_replication_create_command_builder.prototype.regionEndpointEnabled = function (value) {
        this.setFlag("--region-endpoint-enabled", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_replication_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_replication_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_acr_replication_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_acr_replication_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a replicated region from an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr replication delete --name
 *                           --registry
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The name of the replication.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_replication_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_replication_delete_command_builder, _super);
    function az_acr_replication_delete_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the replication. */
    az_acr_replication_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_replication_delete_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_replication_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_replication_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_replication_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all of the regions for a geo-replicated Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr replication list --registry
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_replication_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_replication_list_command_builder, _super);
    function az_acr_replication_list_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_replication_list_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_replication_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_replication_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_replication_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_replication_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a replicated region.
 *
 * Syntax:
 * ```
 * az acr replication show --name
 *                         --registry
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The name of the replication.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_replication_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_replication_show_command_builder, _super);
    function az_acr_replication_show_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the replication. */
    az_acr_replication_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_replication_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_replication_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_replication_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_replication_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_replication_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates a replication.
 *
 * Syntax:
 * ```
 * az acr replication update --name
 *                           --registry
 *                           [--add]
 *                           [--force-string]
 *                           [--region-endpoint-enabled {false, true}]
 *                           [--remove]
 *                           [--resource-group]
 *                           [--set]
 *                           [--subscription]
 *                           [--tags]
 * ```
 *
 * @param {string} name The name of the replication.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_replication_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_replication_update_command_builder, _super);
    function az_acr_replication_update_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the replication. */
    az_acr_replication_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_replication_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_acr_replication_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_acr_replication_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Allow routing to this replication. Requests will not be routed to a disabled replication. Data syncing will continue regardless of the region endpoint status. */
    az_acr_replication_update_command_builder.prototype.regionEndpointEnabled = function (value) {
        this.setFlag("--region-endpoint-enabled", value.toString());
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_acr_replication_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_replication_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_acr_replication_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_replication_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_acr_replication_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_acr_replication_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a repository or image in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr repository delete --name
 *                          [--image]
 *                          [--password]
 *                          [--repository]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--suffix]
 *                          [--username]
 *                          [--yes]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_repository_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_repository_delete_command_builder, _super);
    function az_acr_repository_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_repository_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'. */
    az_acr_repository_delete_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_repository_delete_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** The name of the repository. */
    az_acr_repository_delete_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_repository_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_repository_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_repository_delete_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_repository_delete_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acr_repository_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acr_repository_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List repositories in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr repository list --name
 *                        [--password]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--suffix]
 *                        [--top]
 *                        [--username]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_repository_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_repository_list_command_builder, _super);
    function az_acr_repository_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_repository_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_repository_list_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_repository_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_repository_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_repository_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_repository_list_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** Limit the number of items in the results. */
    az_acr_repository_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_repository_list_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_repository_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the attributes of a repository or image in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr repository show --name
 *                        [--image]
 *                        [--password]
 *                        [--query-examples]
 *                        [--repository]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--suffix]
 *                        [--username]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_repository_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_repository_show_command_builder, _super);
    function az_acr_repository_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_repository_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'. */
    az_acr_repository_show_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_repository_show_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_repository_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the repository. */
    az_acr_repository_show_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_repository_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_repository_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_repository_show_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_repository_show_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_repository_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Show manifests of a repository in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr repository show-manifests --name
 *                                  --repository
 *                                  [--detail]
 *                                  [--orderby {time_asc, time_desc}]
 *                                  [--password]
 *                                  [--resource-group]
 *                                  [--subscription]
 *                                  [--suffix]
 *                                  [--top]
 *                                  [--username]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} repository The name of the repository.
 */
var az_acr_repository_show_manifests_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_repository_show_manifests_command_builder, _super);
    function az_acr_repository_show_manifests_command_builder(commandPath, resultDataTypeName, name, repository) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.repository(repository);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_repository_show_manifests_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the repository. */
    az_acr_repository_show_manifests_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Show detailed information. */
    az_acr_repository_show_manifests_command_builder.prototype.detail = function (value) {
        this.setFlag("--detail", value);
        return this;
    };
    /** Order the items in the results. Default to alphabetical order of names. */
    az_acr_repository_show_manifests_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_repository_show_manifests_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_repository_show_manifests_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_repository_show_manifests_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_repository_show_manifests_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** Limit the number of items in the results. */
    az_acr_repository_show_manifests_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_repository_show_manifests_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_repository_show_manifests_command_builder;
}(base_1.CommandBuilder));
/**
 * Show tags for a repository in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr repository show-tags --name
 *                             --repository
 *                             [--detail]
 *                             [--orderby {time_asc, time_desc}]
 *                             [--password]
 *                             [--resource-group]
 *                             [--subscription]
 *                             [--suffix]
 *                             [--top]
 *                             [--username]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} repository The name of the repository.
 */
var az_acr_repository_show_tags_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_repository_show_tags_command_builder, _super);
    function az_acr_repository_show_tags_command_builder(commandPath, resultDataTypeName, name, repository) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.repository(repository);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_repository_show_tags_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the repository. */
    az_acr_repository_show_tags_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Show detailed information. */
    az_acr_repository_show_tags_command_builder.prototype.detail = function (value) {
        this.setFlag("--detail", value);
        return this;
    };
    /** Order the items in the results. Default to alphabetical order of names. */
    az_acr_repository_show_tags_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_repository_show_tags_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_repository_show_tags_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_repository_show_tags_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_repository_show_tags_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** Limit the number of items in the results. */
    az_acr_repository_show_tags_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_repository_show_tags_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_repository_show_tags_command_builder;
}(base_1.CommandBuilder));
/**
 * Untag an image in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr repository untag --image
 *                         --name
 *                         [--password]
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--suffix]
 *                         [--username]
 * ```
 *
 * @param {string} image The name of the image. May include a tag in the format 'name:tag'.
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_repository_untag_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_repository_untag_command_builder, _super);
    function az_acr_repository_untag_command_builder(commandPath, resultDataTypeName, image, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.image(image);
        _this.name(name);
        return _this;
    }
    /** The name of the image. May include a tag in the format 'name:tag'. */
    az_acr_repository_untag_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_repository_untag_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_repository_untag_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_repository_untag_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_repository_untag_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_repository_untag_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_repository_untag_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_repository_untag_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the attributes of a repository or image in an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr repository update --name
 *                          [--delete-enabled {false, true}]
 *                          [--image]
 *                          [--list-enabled {false, true}]
 *                          [--password]
 *                          [--read-enabled {false, true}]
 *                          [--repository]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--suffix]
 *                          [--username]
 *                          [--write-enabled {false, true}]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_repository_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_repository_update_command_builder, _super);
    function az_acr_repository_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_repository_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Indicates whether delete operation is allowed. */
    az_acr_repository_update_command_builder.prototype.deleteEnabled = function (value) {
        this.setFlag("--delete-enabled", value.toString());
        return this;
    };
    /** The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'. */
    az_acr_repository_update_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** Indicates whether this item shows in list operation results. */
    az_acr_repository_update_command_builder.prototype.listEnabled = function (value) {
        this.setFlag("--list-enabled", value.toString());
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_repository_update_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Indicates whether read operation is allowed. */
    az_acr_repository_update_command_builder.prototype.readEnabled = function (value) {
        this.setFlag("--read-enabled", value.toString());
        return this;
    };
    /** The name of the repository. */
    az_acr_repository_update_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_repository_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_repository_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_repository_update_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_repository_update_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    /** Indicates whether write or delete operation is allowed. */
    az_acr_repository_update_command_builder.prototype.writeEnabled = function (value) {
        this.setFlag("--write-enabled", value.toString());
        return this;
    };
    return az_acr_repository_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a scope map for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr scope-map create --name
 *                         --registry
 *                         --repository
 *                         [--description]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The name of the scope map.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} repository Repository permissions. Use the format "--repository REPO [ACTION1 ACTION2 ...]" per flag. Valid actions are {'content/read', 'metadata/write', 'content/write', 'content/delete', 'metadata/read'}.
 */
var az_acr_scope_map_create_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_scope_map_create_command_builder, _super);
    function az_acr_scope_map_create_command_builder(commandPath, resultDataTypeName, name, registry, repository) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        _this.repository(repository);
        return _this;
    }
    /** The name of the scope map. */
    az_acr_scope_map_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_scope_map_create_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Repository permissions. Use the format "--repository REPO [ACTION1 ACTION2 ...]" per flag. Valid actions are {'content/read', 'metadata/write', 'content/write', 'content/delete', 'metadata/read'}. */
    az_acr_scope_map_create_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Description for the scope map. Maximum 256 characters are allowed. */
    az_acr_scope_map_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_scope_map_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_scope_map_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_scope_map_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a scope map for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr scope-map delete --name
 *                         --registry
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--yes]
 * ```
 *
 * @param {string} name The name of the scope map.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_scope_map_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_scope_map_delete_command_builder, _super);
    function az_acr_scope_map_delete_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the scope map. */
    az_acr_scope_map_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_scope_map_delete_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_scope_map_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_scope_map_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acr_scope_map_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acr_scope_map_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all scope maps for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr scope-map list --registry
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_scope_map_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_scope_map_list_command_builder, _super);
    function az_acr_scope_map_list_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_scope_map_list_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_scope_map_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_scope_map_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_scope_map_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_scope_map_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details and attributes of a scope map for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr scope-map show --name
 *                       --registry
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} name The name of the scope map.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_scope_map_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_scope_map_show_command_builder, _super);
    function az_acr_scope_map_show_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the scope map. */
    az_acr_scope_map_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_scope_map_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_scope_map_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_scope_map_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_scope_map_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_scope_map_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a scope map for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr scope-map update --name
 *                         --registry
 *                         [--add]
 *                         [--description]
 *                         [--remove]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 *
 * @param {string} name The name of the scope map.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_scope_map_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_scope_map_update_command_builder, _super);
    function az_acr_scope_map_update_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the scope map. */
    az_acr_scope_map_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_scope_map_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Repository permissions to be added. Use the format "--add REPO [ACTION1 ACTION2 ...]" per flag. Valid actions are {'content/read', 'metadata/write', 'content/write', 'content/delete', 'metadata/read'}. */
    az_acr_scope_map_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Description for the scope map. Maximum 256 characters are allowed. */
    az_acr_scope_map_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Respsitory permissions to be removed. Use the format "--remove REPO [ACTION1 ACTION2 ...]" per flag. Valid actions are {'content/read', 'metadata/write', 'content/write', 'content/delete', 'metadata/read'}. */
    az_acr_scope_map_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_scope_map_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_scope_map_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_scope_map_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a custom registry login credential to the task.
 *
 * Syntax:
 * ```
 * az acr task credential add --login-server
 *                            --name
 *                            --registry
 *                            [--password]
 *                            [--resource-group]
 *                            [--subscription]
 *                            [--use-identity]
 *                            [--username]
 * ```
 *
 * @param {string} loginServer The login server of the custom registry. For instance, 'myregistry.azurecr.io'.
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_credential_add_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_credential_add_command_builder, _super);
    function az_acr_task_credential_add_command_builder(commandPath, resultDataTypeName, loginServer, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.loginServer(loginServer);
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The login server of the custom registry. For instance, 'myregistry.azurecr.io'. */
    az_acr_task_credential_add_command_builder.prototype.loginServer = function (value) {
        this.setFlag("--login-server", value);
        return this;
    };
    /** The name of the task. */
    az_acr_task_credential_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_credential_add_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The password to login to the custom registry. This can be plain text or a key vault secret URI. */
    az_acr_task_credential_add_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_credential_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_credential_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The task managed identity used for the credential. Use '[system]' to refer to the system-assigned identity or a client id to refer to a user-assigned identity. Please see <a href="https://aka.ms/acr/tasks/cross-registry-authentication">https://aka.ms/acr/tasks/cross-registry-authentication</a> for more information. */
    az_acr_task_credential_add_command_builder.prototype.useIdentity = function (value) {
        this.setFlag("--use-identity", value);
        return this;
    };
    /** The username to login to the custom registry. This can be plain text or a key vault secret URI. */
    az_acr_task_credential_add_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_task_credential_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the custom registry credentials for task.
 *
 * Syntax:
 * ```
 * az acr task credential list --name
 *                             --registry
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_credential_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_credential_list_command_builder, _super);
    function az_acr_task_credential_list_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_credential_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_credential_list_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_task_credential_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_credential_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_credential_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_credential_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove credential for a task.
 *
 * Syntax:
 * ```
 * az acr task credential remove --login-server
 *                               --name
 *                               --registry
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} loginServer The login server of the custom registry. For instance, 'myregistry.azurecr.io'.
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_credential_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_credential_remove_command_builder, _super);
    function az_acr_task_credential_remove_command_builder(commandPath, resultDataTypeName, loginServer, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.loginServer(loginServer);
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The login server of the custom registry. For instance, 'myregistry.azurecr.io'. */
    az_acr_task_credential_remove_command_builder.prototype.loginServer = function (value) {
        this.setFlag("--login-server", value);
        return this;
    };
    /** The name of the task. */
    az_acr_task_credential_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_credential_remove_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_credential_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_credential_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_credential_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the registry login credential for a task.
 *
 * Syntax:
 * ```
 * az acr task credential update --login-server
 *                               --name
 *                               --registry
 *                               [--password]
 *                               [--resource-group]
 *                               [--subscription]
 *                               [--use-identity]
 *                               [--username]
 * ```
 *
 * @param {string} loginServer The login server of the custom registry. For instance, 'myregistry.azurecr.io'.
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_credential_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_credential_update_command_builder, _super);
    function az_acr_task_credential_update_command_builder(commandPath, resultDataTypeName, loginServer, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.loginServer(loginServer);
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The login server of the custom registry. For instance, 'myregistry.azurecr.io'. */
    az_acr_task_credential_update_command_builder.prototype.loginServer = function (value) {
        this.setFlag("--login-server", value);
        return this;
    };
    /** The name of the task. */
    az_acr_task_credential_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_credential_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The password to login to the custom registry. This can be plain text or a key vault secret URI. */
    az_acr_task_credential_update_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_credential_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_credential_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The task managed identity used for the credential. Use '[system]' to refer to the system-assigned identity or a client id to refer to a user-assigned identity. Please see <a href="https://aka.ms/acr/tasks/cross-registry-authentication">https://aka.ms/acr/tasks/cross-registry-authentication</a> for more information. */
    az_acr_task_credential_update_command_builder.prototype.useIdentity = function (value) {
        this.setFlag("--use-identity", value);
        return this;
    };
    /** The username to login to the custom registry. This can be plain text or a key vault secret URI. */
    az_acr_task_credential_update_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_task_credential_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the managed identity for a task.
 *
 * Syntax:
 * ```
 * az acr task identity assign --name
 *                             --registry
 *                             [--identities]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_identity_assign_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_identity_assign_command_builder, _super);
    function az_acr_task_identity_assign_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_identity_assign_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_identity_assign_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Assigns managed identities to the task. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity. */
    az_acr_task_identity_assign_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_identity_assign_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_identity_assign_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_identity_assign_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove managed identities for a task.
 *
 * Syntax:
 * ```
 * az acr task identity remove --name
 *                             --registry
 *                             [--identities]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_identity_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_identity_remove_command_builder, _super);
    function az_acr_task_identity_remove_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_identity_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_identity_remove_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Assigns managed identities to the task. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity. */
    az_acr_task_identity_remove_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_identity_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_identity_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_identity_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Display the managed identities for task.
 *
 * Syntax:
 * ```
 * az acr task identity show --name
 *                           --registry
 *                           [--query-examples]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_identity_show_command_builder, _super);
    function az_acr_task_identity_show_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_identity_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_task_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_identity_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_identity_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a timer trigger to a task.
 *
 * Syntax:
 * ```
 * az acr task timer add --name
 *                       --registry
 *                       --schedule
 *                       --timer-name
 *                       [--enabled {false, true}]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} schedule The schedule of the timer trigger represented as a cron expression.
 * @param {string} timerName The name of the timer trigger.
 */
var az_acr_task_timer_add_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_timer_add_command_builder, _super);
    function az_acr_task_timer_add_command_builder(commandPath, resultDataTypeName, name, registry, schedule, timerName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        _this.schedule(schedule);
        _this.timerName(timerName);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_timer_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_timer_add_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The schedule of the timer trigger represented as a cron expression. */
    az_acr_task_timer_add_command_builder.prototype.schedule = function (value) {
        this.setFlag("--schedule", value);
        return this;
    };
    /** The name of the timer trigger. */
    az_acr_task_timer_add_command_builder.prototype.timerName = function (value) {
        this.setFlag("--timer-name", value);
        return this;
    };
    /** Indicates whether the timer trigger is enabled. */
    az_acr_task_timer_add_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_timer_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_timer_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_timer_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List all timer triggers for a task.
 *
 * Syntax:
 * ```
 * az acr task timer list --name
 *                        --registry
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_timer_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_timer_list_command_builder, _super);
    function az_acr_task_timer_list_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_timer_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_timer_list_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_task_timer_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_timer_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_timer_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_timer_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a timer trigger from a task.
 *
 * Syntax:
 * ```
 * az acr task timer remove --name
 *                          --registry
 *                          --timer-name
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} timerName The name of the timer trigger.
 */
var az_acr_task_timer_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_timer_remove_command_builder, _super);
    function az_acr_task_timer_remove_command_builder(commandPath, resultDataTypeName, name, registry, timerName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        _this.timerName(timerName);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_timer_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_timer_remove_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the timer trigger. */
    az_acr_task_timer_remove_command_builder.prototype.timerName = function (value) {
        this.setFlag("--timer-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_timer_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_timer_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_timer_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the timer trigger for a task.
 *
 * Syntax:
 * ```
 * az acr task timer update --name
 *                          --registry
 *                          --timer-name
 *                          [--enabled {false, true}]
 *                          [--resource-group]
 *                          [--schedule]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} timerName The name of the timer trigger.
 */
var az_acr_task_timer_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_timer_update_command_builder, _super);
    function az_acr_task_timer_update_command_builder(commandPath, resultDataTypeName, name, registry, timerName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        _this.timerName(timerName);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_timer_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_timer_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the timer trigger. */
    az_acr_task_timer_update_command_builder.prototype.timerName = function (value) {
        this.setFlag("--timer-name", value);
        return this;
    };
    /** Indicates whether the timer trigger is enabled. */
    az_acr_task_timer_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_timer_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The schedule of the timer trigger represented as a cron expression. */
    az_acr_task_timer_update_command_builder.prototype.schedule = function (value) {
        this.setFlag("--schedule", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_timer_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_timer_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancel a specified run of an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr task cancel-run --registry
 *                        --run-id
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} runId The unique run identifier.
 */
var az_acr_task_cancel_run_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_cancel_run_command_builder, _super);
    function az_acr_task_cancel_run_command_builder(commandPath, resultDataTypeName, registry, runId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        _this.runId(runId);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_cancel_run_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The unique run identifier. */
    az_acr_task_cancel_run_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_cancel_run_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_cancel_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_cancel_run_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a series of steps for building, testing and OS & Framework patching containers. Tasks support triggers from git commits and base image updates.
 *
 * Syntax:
 * ```
 * az acr task create --context
 *                    --name
 *                    --registry
 *                    [--agent-pool]
 *                    [--arg]
 *                    [--assign-identity]
 *                    [--auth-mode {Default, None}]
 *                    [--base-image-trigger-enabled {false, true}]
 *                    [--base-image-trigger-name]
 *                    [--base-image-trigger-type {All, Runtime}]
 *                    [--cmd]
 *                    [--commit-trigger-enabled {false, true}]
 *                    [--cpu]
 *                    [--file]
 *                    [--git-access-token]
 *                    [--image]
 *                    [--no-cache {false, true}]
 *                    [--no-push {false, true}]
 *                    [--platform]
 *                    [--pull-request-trigger-enabled {false, true}]
 *                    [--resource-group]
 *                    [--schedule]
 *                    [--secret-arg]
 *                    [--set]
 *                    [--set-secret]
 *                    [--source-trigger-name]
 *                    [--status {Disabled, Enabled}]
 *                    [--subscription]
 *                    [--target]
 *                    [--timeout]
 *                    [--update-trigger-endpoint]
 *                    [--update-trigger-payload-type {Default, Token}]
 *                    [--values]
 * ```
 *
 * @param {string} context The full URL to the source code repository (Requires '.git' suffix for a github repo) or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored.
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_create_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_create_command_builder, _super);
    function az_acr_task_create_command_builder(commandPath, resultDataTypeName, context, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.context(context);
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The full URL to the source code repository (Requires '.git' suffix for a github repo) or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored. */
    az_acr_task_create_command_builder.prototype.context = function (value) {
        this.setFlag("--context", value);
        return this;
    };
    /** The name of the task. */
    az_acr_task_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_create_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the agent pool. */
    az_acr_task_create_command_builder.prototype.agentPool = function (value) {
        this.setFlag("--agent-pool", value);
        return this;
    };
    /** Build argument in '--arg name[=value]' format. Multiples supported by passing '--arg` multiple times. */
    az_acr_task_create_command_builder.prototype.arg = function (value) {
        this.setFlag("--arg", value);
        return this;
    };
    /** Assigns managed identities to the task. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity. Please see <a href="https://aka.ms/acr/tasks/task-create-managed-identity">https://aka.ms/acr/tasks/task-create-managed-identity</a> for more information. */
    az_acr_task_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Auth mode of the source registry. */
    az_acr_task_create_command_builder.prototype.authMode = function (value) {
        this.setFlag("--auth-mode", value);
        return this;
    };
    /** Indicates whether the base image trigger is enabled. */
    az_acr_task_create_command_builder.prototype.baseImageTriggerEnabled = function (value) {
        this.setFlag("--base-image-trigger-enabled", value.toString());
        return this;
    };
    /** The name of the base image trigger. */
    az_acr_task_create_command_builder.prototype.baseImageTriggerName = function (value) {
        this.setFlag("--base-image-trigger-name", value);
        return this;
    };
    /** The type of the auto trigger for base image dependency updates. */
    az_acr_task_create_command_builder.prototype.baseImageTriggerType = function (value) {
        this.setFlag("--base-image-trigger-type", value);
        return this;
    };
    /** Commands to execute. */
    az_acr_task_create_command_builder.prototype.cmd = function (value) {
        this.setFlag("--cmd", value);
        return this;
    };
    /** Indicates whether the source control commit trigger is enabled. */
    az_acr_task_create_command_builder.prototype.commitTriggerEnabled = function (value) {
        this.setFlag("--commit-trigger-enabled", value.toString());
        return this;
    };
    /** The CPU configuration in terms of number of cores required for the run. */
    az_acr_task_create_command_builder.prototype.cpu = function (value) {
        this.setFlag("--cpu", value);
        return this;
    };
    /** Relative path of the the task/docker file to the source code root folder. Task files must be suffixed with '.yaml' or piped from the standard input using '-'. */
    az_acr_task_create_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The access token used to access the source control provider. */
    az_acr_task_create_command_builder.prototype.gitAccessToken = function (value) {
        this.setFlag("--git-access-token", value);
        return this;
    };
    /** The name and tag of the image using the format: '-t repo/image:tag'. Multiple tags are supported by passing -t multiple times. */
    az_acr_task_create_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** Indicates whether the image cache is enabled. */
    az_acr_task_create_command_builder.prototype.noCache = function (value) {
        this.setFlag("--no-cache", value.toString());
        return this;
    };
    /** Indicates whether the image built should be pushed to the registry. */
    az_acr_task_create_command_builder.prototype.noPush = function (value) {
        this.setFlag("--no-push", value.toString());
        return this;
    };
    /** The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional. */
    az_acr_task_create_command_builder.prototype.platform = function (value) {
        this.setFlag("--platform", value);
        return this;
    };
    /** Indicates whether the source control pull request trigger is enabled. The trigger is disabled by default. */
    az_acr_task_create_command_builder.prototype.pullRequestTriggerEnabled = function (value) {
        this.setFlag("--pull-request-trigger-enabled", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Schedule for a timer trigger represented as a cron expression. An optional trigger name can be specified using `--schedule name:schedule` format. Multiples supported by passing --schedule multiple times. */
    az_acr_task_create_command_builder.prototype.schedule = function (value) {
        this.setFlag("--schedule", value);
        return this;
    };
    /** Secret build argument in '--secret-arg name[=value]' format. Multiples supported by passing --secret-arg multiple times. */
    az_acr_task_create_command_builder.prototype.secretArg = function (value) {
        this.setFlag("--secret-arg", value);
        return this;
    };
    /** Task value in '--set name[=value]' format. Multiples supported by passing --set multiple times. */
    az_acr_task_create_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Secret task value in '--set-secret name[=value]' format. Multiples supported by passing --set-secret multiple times. */
    az_acr_task_create_command_builder.prototype.setSecret = function (value) {
        this.setFlag("--set-secret", value);
        return this;
    };
    /** The name of the source trigger. */
    az_acr_task_create_command_builder.prototype.sourceTriggerName = function (value) {
        this.setFlag("--source-trigger-name", value);
        return this;
    };
    /** The current status of task. */
    az_acr_task_create_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the target build stage. */
    az_acr_task_create_command_builder.prototype.target = function (value) {
        this.setFlag("--target", value);
        return this;
    };
    /** The timeout in seconds. */
    az_acr_task_create_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** The full URL of the endpoint to receive base image update trigger notifications. */
    az_acr_task_create_command_builder.prototype.updateTriggerEndpoint = function (value) {
        this.setFlag("--update-trigger-endpoint", value);
        return this;
    };
    /** Indicates whether to include metadata about the base image trigger in the payload alongwith the update trigger token, when a notification is sent. */
    az_acr_task_create_command_builder.prototype.updateTriggerPayloadType = function (value) {
        this.setFlag("--update-trigger-payload-type", value);
        return this;
    };
    /** The task values/parameters file path relative to the source context. */
    az_acr_task_create_command_builder.prototype.values = function (value) {
        this.setFlag("--values", value);
        return this;
    };
    return az_acr_task_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a task from an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr task delete --name
 *                    --registry
 *                    [--resource-group]
 *                    [--subscription]
 *                    [--yes]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_delete_command_builder, _super);
    function az_acr_task_delete_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_delete_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acr_task_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acr_task_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the tasks for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr task list --registry
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_list_command_builder, _super);
    function az_acr_task_list_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_list_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_task_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List all of the executed runs for an Azure Container Registry, with the ability to filter by a specific Task.
 *
 * Syntax:
 * ```
 * az acr task list-runs --registry
 *                       [--image]
 *                       [--name]
 *                       [--resource-group]
 *                       [--run-status {Canceled, Error, Failed, Queued, Running, Started, Succeeded, Timeout}]
 *                       [--subscription]
 *                       [--top]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_list_runs_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_list_runs_command_builder, _super);
    function az_acr_task_list_runs_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_list_runs_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'. */
    az_acr_task_list_runs_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** The name of the task. */
    az_acr_task_list_runs_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_list_runs_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The current status of run. */
    az_acr_task_list_runs_command_builder.prototype.runStatus = function (value) {
        this.setFlag("--run-status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_list_runs_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Limit the number of latest runs in the results. */
    az_acr_task_list_runs_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_acr_task_list_runs_command_builder;
}(base_1.CommandBuilder));
/**
 * Show logs for a particular run. If no run-id is supplied, show logs for the last created run.
 *
 * Syntax:
 * ```
 * az acr task logs --registry
 *                  [--image]
 *                  [--name]
 *                  [--resource-group]
 *                  [--run-id]
 *                  [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_logs_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_logs_command_builder, _super);
    function az_acr_task_logs_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_logs_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the image. May include a tag in the format 'name:tag' or digest in the format 'name@digest'. */
    az_acr_task_logs_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** The name of the task. */
    az_acr_task_logs_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_logs_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The unique run identifier. */
    az_acr_task_logs_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_logs_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_logs_command_builder;
}(base_1.CommandBuilder));
/**
 * Manually trigger a task that might otherwise be waiting for git commits or base image update triggers.
 *
 * Syntax:
 * ```
 * az acr task run --name
 *                 --registry
 *                 [--agent-pool]
 *                 [--arg]
 *                 [--context]
 *                 [--file]
 *                 [--no-logs]
 *                 [--no-wait]
 *                 [--resource-group]
 *                 [--secret-arg]
 *                 [--set]
 *                 [--set-secret]
 *                 [--subscription]
 *                 [--target]
 *                 [--update-trigger-token]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_run_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_run_command_builder, _super);
    function az_acr_task_run_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_run_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_run_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the agent pool. */
    az_acr_task_run_command_builder.prototype.agentPool = function (value) {
        this.setFlag("--agent-pool", value);
        return this;
    };
    /** Build argument in '--arg name[=value]' format. Multiples supported by passing '--arg` multiple times. */
    az_acr_task_run_command_builder.prototype.arg = function (value) {
        this.setFlag("--arg", value);
        return this;
    };
    /** The full URL to the source code repository (Requires '.git' suffix for a github repo) or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored. */
    az_acr_task_run_command_builder.prototype.context = function (value) {
        this.setFlag("--context", value);
        return this;
    };
    /** Relative path of the the task/docker file to the source code root folder. Task files must be suffixed with '.yaml' or piped from the standard input using '-'. */
    az_acr_task_run_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Do not show logs after successfully queuing the build. */
    az_acr_task_run_command_builder.prototype.noLogs = function (value) {
        this.setFlag("--no-logs", value);
        return this;
    };
    /** Do not wait for the run to complete and return immediately after queuing the run. */
    az_acr_task_run_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_run_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Secret build argument in '--secret-arg name[=value]' format. Multiples supported by passing --secret-arg multiple times. */
    az_acr_task_run_command_builder.prototype.secretArg = function (value) {
        this.setFlag("--secret-arg", value);
        return this;
    };
    /** Task value in '--set name[=value]' format. Multiples supported by passing --set multiple times. */
    az_acr_task_run_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Secret task value in '--set-secret name[=value]' format. Multiples supported by passing --set-secret multiple times. */
    az_acr_task_run_command_builder.prototype.setSecret = function (value) {
        this.setFlag("--set-secret", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the target build stage. */
    az_acr_task_run_command_builder.prototype.target = function (value) {
        this.setFlag("--target", value);
        return this;
    };
    /** The payload that will be passed back alongwith the base image trigger notification. */
    az_acr_task_run_command_builder.prototype.updateTriggerToken = function (value) {
        this.setFlag("--update-trigger-token", value);
        return this;
    };
    return az_acr_task_run_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the properties of a named task for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr task show --name
 *                  --registry
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--with-secure-properties]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_show_command_builder, _super);
    function az_acr_task_show_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_task_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Indicates whether the secure properties of a task should be returned. */
    az_acr_task_show_command_builder.prototype.withSecureProperties = function (value) {
        this.setFlag("--with-secure-properties", value);
        return this;
    };
    return az_acr_task_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the properties of a specified run of an Azure Container Registry Task.
 *
 * Syntax:
 * ```
 * az acr task show-run --registry
 *                      --run-id
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} runId The unique run identifier.
 */
var az_acr_task_show_run_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_show_run_command_builder, _super);
    function az_acr_task_show_run_command_builder(commandPath, resultDataTypeName, registry, runId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        _this.runId(runId);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_show_run_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The unique run identifier. */
    az_acr_task_show_run_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_show_run_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_show_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_show_run_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a task for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr task update --name
 *                    --registry
 *                    [--agent-pool]
 *                    [--arg]
 *                    [--auth-mode {Default, None}]
 *                    [--base-image-trigger-enabled {false, true}]
 *                    [--base-image-trigger-type {All, Runtime}]
 *                    [--commit-trigger-enabled {false, true}]
 *                    [--context]
 *                    [--cpu]
 *                    [--file]
 *                    [--git-access-token]
 *                    [--image]
 *                    [--no-cache {false, true}]
 *                    [--no-push {false, true}]
 *                    [--platform]
 *                    [--pull-request-trigger-enabled {false, true}]
 *                    [--resource-group]
 *                    [--secret-arg]
 *                    [--set]
 *                    [--set-secret]
 *                    [--status {Disabled, Enabled}]
 *                    [--subscription]
 *                    [--target]
 *                    [--timeout]
 *                    [--update-trigger-endpoint]
 *                    [--update-trigger-payload-type {Default, Token}]
 *                    [--values]
 * ```
 *
 * @param {string} name The name of the task.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_task_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_update_command_builder, _super);
    function az_acr_task_update_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the task. */
    az_acr_task_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the agent pool. */
    az_acr_task_update_command_builder.prototype.agentPool = function (value) {
        this.setFlag("--agent-pool", value);
        return this;
    };
    /** Build argument in '--arg name[=value]' format. Multiples supported by passing '--arg` multiple times. */
    az_acr_task_update_command_builder.prototype.arg = function (value) {
        this.setFlag("--arg", value);
        return this;
    };
    /** Auth mode of the source registry. */
    az_acr_task_update_command_builder.prototype.authMode = function (value) {
        this.setFlag("--auth-mode", value);
        return this;
    };
    /** Indicates whether the base image trigger is enabled. */
    az_acr_task_update_command_builder.prototype.baseImageTriggerEnabled = function (value) {
        this.setFlag("--base-image-trigger-enabled", value.toString());
        return this;
    };
    /** The type of the auto trigger for base image dependency updates. */
    az_acr_task_update_command_builder.prototype.baseImageTriggerType = function (value) {
        this.setFlag("--base-image-trigger-type", value);
        return this;
    };
    /** Indicates whether the source control commit trigger is enabled. */
    az_acr_task_update_command_builder.prototype.commitTriggerEnabled = function (value) {
        this.setFlag("--commit-trigger-enabled", value.toString());
        return this;
    };
    /** The full URL to the source code repository (Requires '.git' suffix for a github repo) or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored. */
    az_acr_task_update_command_builder.prototype.context = function (value) {
        this.setFlag("--context", value);
        return this;
    };
    /** The CPU configuration in terms of number of cores required for the run. */
    az_acr_task_update_command_builder.prototype.cpu = function (value) {
        this.setFlag("--cpu", value);
        return this;
    };
    /** Relative path of the the task/docker file to the source code root folder. Task files must be suffixed with '.yaml' or piped from the standard input using '-'. */
    az_acr_task_update_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The access token used to access the source control provider. */
    az_acr_task_update_command_builder.prototype.gitAccessToken = function (value) {
        this.setFlag("--git-access-token", value);
        return this;
    };
    /** The name and tag of the image using the format: '-t repo/image:tag'. Multiple tags are supported by passing -t multiple times. */
    az_acr_task_update_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** Indicates whether the image cache is enabled. */
    az_acr_task_update_command_builder.prototype.noCache = function (value) {
        this.setFlag("--no-cache", value.toString());
        return this;
    };
    /** Indicates whether the image built should be pushed to the registry. */
    az_acr_task_update_command_builder.prototype.noPush = function (value) {
        this.setFlag("--no-push", value.toString());
        return this;
    };
    /** The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional. */
    az_acr_task_update_command_builder.prototype.platform = function (value) {
        this.setFlag("--platform", value);
        return this;
    };
    /** Indicates whether the source control pull request trigger is enabled. The trigger is disabled by default. */
    az_acr_task_update_command_builder.prototype.pullRequestTriggerEnabled = function (value) {
        this.setFlag("--pull-request-trigger-enabled", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Secret build argument in '--secret-arg name[=value]' format. Multiples supported by passing --secret-arg multiple times. */
    az_acr_task_update_command_builder.prototype.secretArg = function (value) {
        this.setFlag("--secret-arg", value);
        return this;
    };
    /** Task value in '--set name[=value]' format. Multiples supported by passing --set multiple times. */
    az_acr_task_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Secret task value in '--set-secret name[=value]' format. Multiples supported by passing --set-secret multiple times. */
    az_acr_task_update_command_builder.prototype.setSecret = function (value) {
        this.setFlag("--set-secret", value);
        return this;
    };
    /** The current status of task. */
    az_acr_task_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the target build stage. */
    az_acr_task_update_command_builder.prototype.target = function (value) {
        this.setFlag("--target", value);
        return this;
    };
    /** The timeout in seconds. */
    az_acr_task_update_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** The full URL of the endpoint to receive base image update trigger notifications. */
    az_acr_task_update_command_builder.prototype.updateTriggerEndpoint = function (value) {
        this.setFlag("--update-trigger-endpoint", value);
        return this;
    };
    /** Indicates whether to include metadata about the base image trigger in the payload alongwith the update trigger token, when a notification is sent. */
    az_acr_task_update_command_builder.prototype.updateTriggerPayloadType = function (value) {
        this.setFlag("--update-trigger-payload-type", value);
        return this;
    };
    /** The task values/parameters file path relative to the source context. */
    az_acr_task_update_command_builder.prototype.values = function (value) {
        this.setFlag("--values", value);
        return this;
    };
    return az_acr_task_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Patch the run properties of an Azure Container Registry Task.
 *
 * Syntax:
 * ```
 * az acr task update-run --registry
 *                        --run-id
 *                        [--no-archive {false, true}]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} runId The unique run identifier.
 */
var az_acr_task_update_run_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_task_update_run_command_builder, _super);
    function az_acr_task_update_run_command_builder(commandPath, resultDataTypeName, registry, runId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        _this.runId(runId);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_task_update_run_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The unique run identifier. */
    az_acr_task_update_run_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** Indicates whether the run should be archived. */
    az_acr_task_update_run_command_builder.prototype.noArchive = function (value) {
        this.setFlag("--no-archive", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_task_update_run_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_task_update_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_task_update_run_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a taskrun from an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr taskrun delete --name
 *                       --registry
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--yes]
 * ```
 *
 * @param {string} name The name of the taskrun.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_taskrun_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_taskrun_delete_command_builder, _super);
    function az_acr_taskrun_delete_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the taskrun. */
    az_acr_taskrun_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_taskrun_delete_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_taskrun_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_taskrun_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acr_taskrun_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acr_taskrun_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the taskruns for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr taskrun list --registry
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_taskrun_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_taskrun_list_command_builder, _super);
    function az_acr_taskrun_list_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_taskrun_list_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_taskrun_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_taskrun_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_taskrun_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_taskrun_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show run logs for a particular taskrun.
 *
 * Syntax:
 * ```
 * az acr taskrun logs --name
 *                     --registry
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the taskrun.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_taskrun_logs_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_taskrun_logs_command_builder, _super);
    function az_acr_taskrun_logs_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the taskrun. */
    az_acr_taskrun_logs_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_taskrun_logs_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_taskrun_logs_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_taskrun_logs_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_taskrun_logs_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the properties of a named taskrun for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr taskrun show --name
 *                     --registry
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the taskrun.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_taskrun_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_taskrun_show_command_builder, _super);
    function az_acr_taskrun_show_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the taskrun. */
    az_acr_taskrun_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_taskrun_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_taskrun_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_taskrun_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_taskrun_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_taskrun_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a token credential.
 *
 * Syntax:
 * ```
 * az acr token credential delete --name
 *                                --registry
 *                                [--password1]
 *                                [--password2]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The name of the token.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_token_credential_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_token_credential_delete_command_builder, _super);
    function az_acr_token_credential_delete_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the token. */
    az_acr_token_credential_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_token_credential_delete_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Flag indicating if first password should be deleted. */
    az_acr_token_credential_delete_command_builder.prototype.password1 = function (value) {
        this.setFlag("--password1", value);
        return this;
    };
    /** Flag indicating if second password should be deleted. */
    az_acr_token_credential_delete_command_builder.prototype.password2 = function (value) {
        this.setFlag("--password2", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_token_credential_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_token_credential_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_token_credential_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Generate or replace one or both passwords of a token for an Azure Container Registry. For using token and password to access a container registry, see <a href="https://aka.ms/acr/repo-permissions">https://aka.ms/acr/repo-permissions</a>.
 *
 * Syntax:
 * ```
 * az acr token credential generate --name
 *                                  --registry
 *                                  [--expiration]
 *                                  [--expiration-in-days]
 *                                  [--password1]
 *                                  [--password2]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} name The name of the token.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_token_credential_generate_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_token_credential_generate_command_builder, _super);
    function az_acr_token_credential_generate_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the token. */
    az_acr_token_credential_generate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_token_credential_generate_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** UTC time for which the credentials will be valid. In the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2025-12-31T12:59:59Z. */
    az_acr_token_credential_generate_command_builder.prototype.expiration = function (value) {
        this.setFlag("--expiration", value);
        return this;
    };
    /** Number of days for which the credentials will be valid. If not specified, the expiration will default to the max value "9999-12-31T23:59:59.999999+00:00". */
    az_acr_token_credential_generate_command_builder.prototype.expirationInDays = function (value) {
        this.setFlag("--expiration-in-days", value);
        return this;
    };
    /** Flag indicating if password1 should be generated. */
    az_acr_token_credential_generate_command_builder.prototype.password1 = function (value) {
        this.setFlag("--password1", value);
        return this;
    };
    /** Flag indicating if password2 should be generated. */
    az_acr_token_credential_generate_command_builder.prototype.password2 = function (value) {
        this.setFlag("--password2", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_token_credential_generate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_token_credential_generate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_token_credential_generate_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a token associated with a scope map for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr token create --name
 *                     --registry
 *                     [--expiration]
 *                     [--expiration-in-days]
 *                     [--no-passwords {false, true}]
 *                     [--repository]
 *                     [--resource-group]
 *                     [--scope-map]
 *                     [--status {disabled, enabled}]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the token.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_token_create_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_token_create_command_builder, _super);
    function az_acr_token_create_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the token. */
    az_acr_token_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_token_create_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** UTC time for which the credentials will be valid. In the format of %Y-%m-%dT%H:%M:%SZ, e.g. 2025-12-31T12:59:59Z. */
    az_acr_token_create_command_builder.prototype.expiration = function (value) {
        this.setFlag("--expiration", value);
        return this;
    };
    /** Number of days for which the credentials will be valid. If not specified, the expiration will default to the max value "9999-12-31T23:59:59.999999+00:00". */
    az_acr_token_create_command_builder.prototype.expirationInDays = function (value) {
        this.setFlag("--expiration-in-days", value);
        return this;
    };
    /** Do not generate passwords, instead use "az acr token credential generate". */
    az_acr_token_create_command_builder.prototype.noPasswords = function (value) {
        this.setFlag("--no-passwords", value.toString());
        return this;
    };
    /** Repository permissions. Use the format "--repository REPO [ACTION1 ACTION2 ...]" per flag. Valid actions are {'content/read', 'metadata/write', 'content/write', 'content/delete', 'metadata/read'}. */
    az_acr_token_create_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_token_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the scope map with pre-configured repository permissions. Use "--repository" if you would like CLI to configure one for you. */
    az_acr_token_create_command_builder.prototype.scopeMap = function (value) {
        this.setFlag("--scope-map", value);
        return this;
    };
    /** The status of the token. */
    az_acr_token_create_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_token_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_token_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a token for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr token delete --name
 *                     --registry
 *                     [--resource-group]
 *                     [--subscription]
 *                     [--yes]
 * ```
 *
 * @param {string} name The name of the token.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_token_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_token_delete_command_builder, _super);
    function az_acr_token_delete_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the token. */
    az_acr_token_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_token_delete_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_token_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_token_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acr_token_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acr_token_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all tokens for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr token list --registry
 *                   [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_token_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_token_list_command_builder, _super);
    function az_acr_token_list_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_token_list_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_token_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_token_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_token_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_token_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details and attributes of a token for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr token show --name
 *                   --registry
 *                   [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 *
 * @param {string} name The name of the token.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_token_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_token_show_command_builder, _super);
    function az_acr_token_show_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the token. */
    az_acr_token_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_token_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_token_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_token_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_token_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_token_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a token (replace associated scope map) for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr token update --name
 *                     --registry
 *                     [--resource-group]
 *                     [--scope-map]
 *                     [--status {disabled, enabled}]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the token.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_token_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_token_update_command_builder, _super);
    function az_acr_token_update_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the token. */
    az_acr_token_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_token_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_token_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the scope map associated with the token. If not specified, running this command will disassociate the current scope map related to the token. */
    az_acr_token_update_command_builder.prototype.scopeMap = function (value) {
        this.setFlag("--scope-map", value);
        return this;
    };
    /** The status of the token. */
    az_acr_token_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_token_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_token_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a webhook for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr webhook create --actions {chart_delete, chart_push, delete, push, quarantine}
 *                       --name
 *                       --registry
 *                       --uri
 *                       [--headers]
 *                       [--location]
 *                       [--resource-group]
 *                       [--scope]
 *                       [--status {disabled, enabled}]
 *                       [--subscription]
 *                       [--tags]
 * ```
 *
 * @param {'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine'} actions Space-separated list of actions that trigger the webhook to post notifications.
 * @param {string} name The name of the webhook.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} uri The service URI for the webhook to post notifications.
 */
var az_acr_webhook_create_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_webhook_create_command_builder, _super);
    function az_acr_webhook_create_command_builder(commandPath, resultDataTypeName, actions, name, registry, uri) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.actions(actions);
        _this.name(name);
        _this.registry(registry);
        _this.uri(uri);
        return _this;
    }
    /** Space-separated list of actions that trigger the webhook to post notifications. */
    az_acr_webhook_create_command_builder.prototype.actions = function (value) {
        this.setFlag("--actions", value);
        return this;
    };
    /** The name of the webhook. */
    az_acr_webhook_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_webhook_create_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The service URI for the webhook to post notifications. */
    az_acr_webhook_create_command_builder.prototype.uri = function (value) {
        this.setFlag("--uri", value);
        return this;
    };
    /** Space-separated custom headers in 'key[=value]' format that will be added to the webhook notifications. Use "" to clear existing headers. */
    az_acr_webhook_create_command_builder.prototype.headers = function (value) {
        this.setFlag("--headers", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_acr_webhook_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_webhook_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The scope of repositories where the event can be triggered. For example, 'foo:\*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means events for all repositories. */
    az_acr_webhook_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Indicates whether the webhook is enabled. */
    az_acr_webhook_create_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_webhook_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_acr_webhook_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_acr_webhook_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a webhook from an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr webhook delete --name
 *                       --registry
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} name The name of the webhook.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_webhook_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_webhook_delete_command_builder, _super);
    function az_acr_webhook_delete_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the webhook. */
    az_acr_webhook_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_webhook_delete_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_webhook_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_webhook_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_webhook_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the service URI and custom headers for the webhook.
 *
 * Syntax:
 * ```
 * az acr webhook get-config --name
 *                           --registry
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The name of the webhook.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_webhook_get_config_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_webhook_get_config_command_builder, _super);
    function az_acr_webhook_get_config_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the webhook. */
    az_acr_webhook_get_config_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_webhook_get_config_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_webhook_get_config_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_webhook_get_config_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_webhook_get_config_command_builder;
}(base_1.CommandBuilder));
/**
 * List all of the webhooks for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr webhook list --registry
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_webhook_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_webhook_list_command_builder, _super);
    function az_acr_webhook_list_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_webhook_list_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_webhook_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_webhook_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_webhook_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_webhook_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List recent events for a webhook.
 *
 * Syntax:
 * ```
 * az acr webhook list-events --name
 *                            --registry
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 *
 * @param {string} name The name of the webhook.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_webhook_list_events_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_webhook_list_events_command_builder, _super);
    function az_acr_webhook_list_events_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the webhook. */
    az_acr_webhook_list_events_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_webhook_list_events_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_webhook_list_events_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_webhook_list_events_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_webhook_list_events_command_builder;
}(base_1.CommandBuilder));
/**
 * Trigger a ping event for a webhook.
 *
 * Syntax:
 * ```
 * az acr webhook ping --name
 *                     --registry
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the webhook.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_webhook_ping_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_webhook_ping_command_builder, _super);
    function az_acr_webhook_ping_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the webhook. */
    az_acr_webhook_ping_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_webhook_ping_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_webhook_ping_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_webhook_ping_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_webhook_ping_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a webhook.
 *
 * Syntax:
 * ```
 * az acr webhook show --name
 *                     --registry
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the webhook.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_webhook_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_webhook_show_command_builder, _super);
    function az_acr_webhook_show_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the webhook. */
    az_acr_webhook_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_webhook_show_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_webhook_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_webhook_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_webhook_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_webhook_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a webhook.
 *
 * Syntax:
 * ```
 * az acr webhook update --name
 *                       --registry
 *                       [--actions {chart_delete, chart_push, delete, push, quarantine}]
 *                       [--add]
 *                       [--force-string]
 *                       [--headers]
 *                       [--remove]
 *                       [--resource-group]
 *                       [--scope]
 *                       [--set]
 *                       [--status {disabled, enabled}]
 *                       [--subscription]
 *                       [--tags]
 *                       [--uri]
 * ```
 *
 * @param {string} name The name of the webhook.
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_webhook_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_webhook_update_command_builder, _super);
    function az_acr_webhook_update_command_builder(commandPath, resultDataTypeName, name, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.registry(registry);
        return _this;
    }
    /** The name of the webhook. */
    az_acr_webhook_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_webhook_update_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** Space-separated list of actions that trigger the webhook to post notifications. */
    az_acr_webhook_update_command_builder.prototype.actions = function (value) {
        this.setFlag("--actions", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_acr_webhook_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_acr_webhook_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Space-separated custom headers in 'key[=value]' format that will be added to the webhook notifications. Use "" to clear existing headers. */
    az_acr_webhook_update_command_builder.prototype.headers = function (value) {
        this.setFlag("--headers", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_acr_webhook_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_webhook_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The scope of repositories where the event can be triggered. For example, 'foo:\*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means events for all repositories. */
    az_acr_webhook_update_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_acr_webhook_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Indicates whether the webhook is enabled. */
    az_acr_webhook_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_webhook_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_acr_webhook_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The service URI for the webhook to post notifications. */
    az_acr_webhook_update_command_builder.prototype.uri = function (value) {
        this.setFlag("--uri", value);
        return this;
    };
    return az_acr_webhook_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Queues a quick build, providing streaming logs for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr build --registry
 *              [--agent-pool]
 *              [--auth-mode {Default, None}]
 *              [--build-arg]
 *              [--file]
 *              [--image]
 *              [--no-format]
 *              [--no-logs]
 *              [--no-push]
 *              [--no-wait]
 *              [--platform]
 *              [--resource-group]
 *              [--secret-build-arg]
 *              [--subscription]
 *              [--target]
 *              [--timeout]
 *              [<SOURCE_LOCATION>]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_build_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_build_command_builder, _super);
    function az_acr_build_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_build_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the agent pool. */
    az_acr_build_command_builder.prototype.agentPool = function (value) {
        this.setFlag("--agent-pool", value);
        return this;
    };
    /** Auth mode of the source registry. */
    az_acr_build_command_builder.prototype.authMode = function (value) {
        this.setFlag("--auth-mode", value);
        return this;
    };
    /** Build argument in '--build-arg name[=value]' format. Multiples supported by passing --build-arg multiple times. */
    az_acr_build_command_builder.prototype.buildArg = function (value) {
        this.setFlag("--build-arg", value);
        return this;
    };
    /** The relative path of the the docker file to the source code root folder. Default to 'Dockerfile'. */
    az_acr_build_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** The name and tag of the image using the format: '-t repo/image:tag'. Multiple tags are supported by passing -t multiple times. */
    az_acr_build_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** Indicates whether the logs should be displayed in raw format. */
    az_acr_build_command_builder.prototype.noFormat = function (value) {
        this.setFlag("--no-format", value);
        return this;
    };
    /** Do not show logs after successfully queuing the build. */
    az_acr_build_command_builder.prototype.noLogs = function (value) {
        this.setFlag("--no-logs", value);
        return this;
    };
    /** Indicates whether the image built should be pushed to the registry. */
    az_acr_build_command_builder.prototype.noPush = function (value) {
        this.setFlag("--no-push", value);
        return this;
    };
    /** Do not wait for the build to complete and return immediately after queuing the build. */
    az_acr_build_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional. */
    az_acr_build_command_builder.prototype.platform = function (value) {
        this.setFlag("--platform", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_build_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Secret build argument in '--secret-build-arg name[=value]' format. Multiples supported by passing '--secret-build-arg name[=value]' multiple times. */
    az_acr_build_command_builder.prototype.secretBuildArg = function (value) {
        this.setFlag("--secret-build-arg", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_build_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the target build stage. */
    az_acr_build_command_builder.prototype.target = function (value) {
        this.setFlag("--target", value);
        return this;
    };
    /** The timeout in seconds. */
    az_acr_build_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** The local source code directory path (e.g., './src'), or the URL to a git repository (e.g., '<a href="https://github.com/Azure-Samples/acr-build-helloworld-node.git">https://github.com/Azure-Samples/acr-build-helloworld-node.git</a>') or a remote tarball (e.g., '<a href="http://server/context.tar.gz">http://server/context.tar.gz</a>'), or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). */
    az_acr_build_command_builder.prototype.sourceLocation = function (value) {
        this.setFlag("<SOURCE_LOCATION>", value);
        return this;
    };
    return az_acr_build_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets health information on the environment and optionally a target registry.
 *
 * Syntax:
 * ```
 * az acr check-health [--ignore-errors]
 *                     [--name]
 *                     [--subscription]
 *                     [--yes]
 * ```
 */
var az_acr_check_health_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_check_health_command_builder, _super);
    function az_acr_check_health_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Provide all health checks, even if errors are found. */
    az_acr_check_health_command_builder.prototype.ignoreErrors = function (value) {
        this.setFlag("--ignore-errors", value);
        return this;
    };
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_check_health_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_check_health_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acr_check_health_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acr_check_health_command_builder;
}(base_1.CommandBuilder));
/**
 * Checks if an Azure Container Registry name is valid and available for use.
 *
 * Syntax:
 * ```
 * az acr check-name --name
 *                   [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_check_name_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_check_name_command_builder, _super);
    function az_acr_check_name_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_check_name_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_check_name_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_check_name_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr create --name
 *               --resource-group
 *               --sku {Basic, Classic, Premium, Standard}
 *               [--admin-enabled {false, true}]
 *               [--default-action {Allow, Deny}]
 *               [--identity]
 *               [--key-encryption-key]
 *               [--location]
 *               [--public-network-enabled {false, true}]
 *               [--subscription]
 *               [--tags]
 *               [--workspace]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Basic' | 'Classic' | 'Premium' | 'Standard'} sku The SKU of the container registry.
 */
var az_acr_create_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_create_command_builder, _super);
    function az_acr_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, sku) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sku(sku);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The SKU of the container registry. */
    az_acr_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Indicates whether the admin user is enabled. */
    az_acr_create_command_builder.prototype.adminEnabled = function (value) {
        this.setFlag("--admin-enabled", value.toString());
        return this;
    };
    /** Default action to apply when no rule matches. Only applicable to Premium SKU. */
    az_acr_create_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** Use assigned managed identity resource id or name if in the same resource group. */
    az_acr_create_command_builder.prototype.identity = function (value) {
        this.setFlag("--identity", value);
        return this;
    };
    /** Key vault key uri. */
    az_acr_create_command_builder.prototype.keyEncryptionKey = function (value) {
        this.setFlag("--key-encryption-key", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_acr_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Allow public network access for the container registry. The Default is allowed. */
    az_acr_create_command_builder.prototype.publicNetworkEnabled = function (value) {
        this.setFlag("--public-network-enabled", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_acr_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name or ID of the Log Analytics workspace to send registry diagnostic logs to. All events will be enabled. You can use "az monitor log-analytics workspace create" to create one. Extra billing may apply. */
    az_acr_create_command_builder.prototype.workspace = function (value) {
        this.setFlag("--workspace", value);
        return this;
    };
    return az_acr_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr delete --name
 *               [--resource-group]
 *               [--subscription]
 *               [--yes]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_delete_command_builder, _super);
    function az_acr_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_acr_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_acr_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Imports an image to an Azure Container Registry from another Container Registry. Import removes the need to docker pull, docker tag, docker push.
 *
 * Syntax:
 * ```
 * az acr import --name
 *               --source
 *               [--force]
 *               [--image]
 *               [--password]
 *               [--registry]
 *               [--repository]
 *               [--resource-group]
 *               [--subscription]
 *               [--username]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 * @param {string} source Source image name or fully qualified source containing the registry login server. If `--registry` is used, `--source` will always be interpreted as a source image, even if it contains the login server.
 */
var az_acr_import_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_import_command_builder, _super);
    function az_acr_import_command_builder(commandPath, resultDataTypeName, name, source) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.source(source);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_import_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Source image name or fully qualified source containing the registry login server. If `--registry` is used, `--source` will always be interpreted as a source image, even if it contains the login server. */
    az_acr_import_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Overwrite the existing tag of the image to be imported. */
    az_acr_import_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** The name and tag of the image using the format: '-t repo/image:tag'. Multiple tags are supported by passing -t multiple times. */
    az_acr_import_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** The password of source container registry. */
    az_acr_import_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** The source Azure container registry. This can be name, login server or resource ID of the source registry. */
    az_acr_import_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The repository name for a manifest-only copy of images. Multiple copies supported by passing --repository multiple times. */
    az_acr_import_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_import_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The username of source container registry. */
    az_acr_import_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_import_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all the container registries under the current subscription.
 *
 * Syntax:
 * ```
 * az acr list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
var az_acr_list_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_list_command_builder, _super);
    function az_acr_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Log in to an Azure Container Registry through the Docker CLI.
 *
 * Syntax:
 * ```
 * az acr login --name
 *              [--expose-token]
 *              [--password]
 *              [--resource-group]
 *              [--subscription]
 *              [--suffix]
 *              [--username]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_login_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_login_command_builder, _super);
    function az_acr_login_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_login_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Expose access token instead of automatically logging in through Docker CLI. */
    az_acr_login_command_builder.prototype.exposeToken = function (value) {
        this.setFlag("--expose-token", value);
        return this;
    };
    /** The password used to log into a container registry. */
    az_acr_login_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_login_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_login_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The tenant suffix in registry login server. You may specify '--suffix tenant' if your registry login server is in the format 'registry-tenant.azurecr.io'. Applicable if you're accessing the registry from a different subscription or you have permission to access images but not the permission to manage the registry resource. */
    az_acr_login_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    /** The username used to log into a container registry. */
    az_acr_login_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    return az_acr_login_command_builder;
}(base_1.CommandBuilder));
/**
 * Queues a quick run providing streamed logs for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr run --registry
 *            [--agent-pool]
 *            [--auth-mode {Default, None}]
 *            [--cmd]
 *            [--file]
 *            [--no-format]
 *            [--no-logs]
 *            [--no-wait]
 *            [--platform]
 *            [--resource-group]
 *            [--set]
 *            [--set-secret]
 *            [--subscription]
 *            [--timeout]
 *            [--values]
 *            [<SOURCE_LOCATION>]
 * ```
 *
 * @param {string} registry The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_run_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_run_command_builder, _super);
    function az_acr_run_command_builder(commandPath, resultDataTypeName, registry) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.registry(registry);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_run_command_builder.prototype.registry = function (value) {
        this.setFlag("--registry", value);
        return this;
    };
    /** The name of the agent pool. */
    az_acr_run_command_builder.prototype.agentPool = function (value) {
        this.setFlag("--agent-pool", value);
        return this;
    };
    /** Auth mode of the source registry. */
    az_acr_run_command_builder.prototype.authMode = function (value) {
        this.setFlag("--auth-mode", value);
        return this;
    };
    /** Commands to execute. */
    az_acr_run_command_builder.prototype.cmd = function (value) {
        this.setFlag("--cmd", value);
        return this;
    };
    /** The task template/definition file path relative to the source context. It can be '-' to pipe a file from the standard input. */
    az_acr_run_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Indicates whether the logs should be displayed in raw format. */
    az_acr_run_command_builder.prototype.noFormat = function (value) {
        this.setFlag("--no-format", value);
        return this;
    };
    /** Do not show logs after successfully queuing the build. */
    az_acr_run_command_builder.prototype.noLogs = function (value) {
        this.setFlag("--no-logs", value);
        return this;
    };
    /** Do not wait for the run to complete and return immediately after queuing the run. */
    az_acr_run_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The platform where build/task is run, Eg, 'windows' and 'linux'. When it's used in build commands, it also can be specified in 'os/arch/variant' format for the resulting image. Eg, linux/arm/v7. The 'arch' and 'variant' parts are optional. */
    az_acr_run_command_builder.prototype.platform = function (value) {
        this.setFlag("--platform", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_run_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Value in 'name[=value]' format. Multiples supported by passing --set multiple times. */
    az_acr_run_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Secret value in '--set name[=value]' format. Multiples supported by passing --set multiple times. */
    az_acr_run_command_builder.prototype.setSecret = function (value) {
        this.setFlag("--set-secret", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The timeout in seconds. */
    az_acr_run_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** The task values file path relative to the source context. */
    az_acr_run_command_builder.prototype.values = function (value) {
        this.setFlag("--values", value);
        return this;
    };
    /** The local source code directory path (e.g., './src'), or the URL to a git repository (e.g., '<a href="https://github.com/Azure-Samples/acr-build-helloworld-node.git">https://github.com/Azure-Samples/acr-build-helloworld-node.git</a>'), or a remote tarball (e.g., '<a href="http://server/context.tar.gz">http://server/context.tar.gz</a>'), or the repository of an OCI artifact in an Azure container registry (e.g., 'oci://myregistry.azurecr.io/myartifact:mytag'). If '/dev/null' is specified, the value will be set to None and ignored. */
    az_acr_run_command_builder.prototype.sourceLocation = function (value) {
        this.setFlag("<SOURCE_LOCATION>", value);
        return this;
    };
    return az_acr_run_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr show --name
 *             [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_show_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_show_command_builder, _super);
    function az_acr_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_acr_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Display registry endpoints.
 *
 * Syntax:
 * ```
 * az acr show-endpoints --name
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_show_endpoints_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_show_endpoints_command_builder, _super);
    function az_acr_show_endpoints_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_show_endpoints_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_show_endpoints_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_show_endpoints_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_show_endpoints_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the storage usage for an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr show-usage --name
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_show_usage_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_show_usage_command_builder, _super);
    function az_acr_show_usage_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_show_usage_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_show_usage_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_show_usage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_acr_show_usage_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an Azure Container Registry.
 *
 * Syntax:
 * ```
 * az acr update --name
 *               [--add]
 *               [--admin-enabled {false, true}]
 *               [--data-endpoint-enabled {false, true}]
 *               [--default-action {Allow, Deny}]
 *               [--force-string]
 *               [--public-network-enabled {false, true}]
 *               [--remove]
 *               [--resource-group]
 *               [--set]
 *               [--sku {Basic, Classic, Premium, Standard}]
 *               [--subscription]
 *               [--tags]
 * ```
 *
 * @param {string} name The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`.
 */
var az_acr_update_command_builder = /** @class */ (function (_super) {
    __extends(az_acr_update_command_builder, _super);
    function az_acr_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the container registry. You can configure the default registry name using `az configure --defaults acr=<registry name>`. */
    az_acr_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_acr_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Indicates whether the admin user is enabled. */
    az_acr_update_command_builder.prototype.adminEnabled = function (value) {
        this.setFlag("--admin-enabled", value.toString());
        return this;
    };
    /** Enable dedicated data endpoint for client firewall configuration. */
    az_acr_update_command_builder.prototype.dataEndpointEnabled = function (value) {
        this.setFlag("--data-endpoint-enabled", value.toString());
        return this;
    };
    /** Default action to apply when no rule matches. Only applicable to Premium SKU. */
    az_acr_update_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_acr_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Allow public network access for the container registry. The Default is allowed. */
    az_acr_update_command_builder.prototype.publicNetworkEnabled = function (value) {
        this.setFlag("--public-network-enabled", value.toString());
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_acr_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_acr_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_acr_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The SKU of the container registry. */
    az_acr_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_acr_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_acr_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_acr_update_command_builder;
}(base_1.CommandBuilder));
