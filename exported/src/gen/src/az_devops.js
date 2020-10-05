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
exports.az_devops = exports.az_devops_wiki = exports.az_devops_wiki_page = exports.az_devops_user = exports.az_devops_team = exports.az_devops_service_endpoint = exports.az_devops_service_endpoint_github = exports.az_devops_service_endpoint_azurerm = exports.az_devops_security = exports.az_devops_security_permission = exports.az_devops_security_permission_namespace = exports.az_devops_security_group = exports.az_devops_security_group_membership = exports.az_devops_project = exports.az_devops_extension = exports.az_devops_admin = exports.az_devops_admin_banner = void 0;
var base_1 = require("../base");
/** Manage organization banner. */
var az_devops_admin_banner = /** @class */ (function () {
    function az_devops_admin_banner() {
    }
    /**
     * Add a new banner and immediately show it.
     *
     * Syntax:
     * ```
     * az devops admin banner add --message
     *                            [--detect {false, true}]
     *                            [--expiration]
     *                            [--id]
     *                            [--org]
     *                            [--subscription]
     *                            [--type {error, info, warning}]
     * ```
     *
     * @param {string} message Message (string) to show in the banner.
     */
    az_devops_admin_banner.add = function (message) {
        return new az_devops_admin_banner_add_command_builder("az devops admin banner add", 'az_devops_admin_banner_add_command_result', message);
    };
    /**
     * List banners.
     *
     * Syntax:
     * ```
     * az devops admin banner list [--detect {false, true}]
     *                             [--org]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     */
    az_devops_admin_banner.list = function () {
        return new az_devops_admin_banner_list_command_builder("az devops admin banner list", 'az_devops_admin_banner_list_command_result');
    };
    /**
     * Remove a banner.
     *
     * Syntax:
     * ```
     * az devops admin banner remove --id
     *                               [--detect {false, true}]
     *                               [--org]
     *                               [--subscription]
     * ```
     *
     * @param {string} id ID of the banner to remove.
     */
    az_devops_admin_banner.remove = function (id) {
        return new az_devops_admin_banner_remove_command_builder("az devops admin banner remove", 'az_devops_admin_banner_remove_command_result', id);
    };
    /**
     * Show details for a banner.
     *
     * Syntax:
     * ```
     * az devops admin banner show --id
     *                             [--detect {false, true}]
     *                             [--org]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} id Identifier for the banner.
     */
    az_devops_admin_banner.show = function (id) {
        return new az_devops_admin_banner_show_command_builder("az devops admin banner show", 'az_devops_admin_banner_show_command_result', id);
    };
    /**
     * Update the message, level, or expiration date for a banner.
     *
     * Syntax:
     * ```
     * az devops admin banner update --id
     *                               [--detect {false, true}]
     *                               [--expiration]
     *                               [--message]
     *                               [--org]
     *                               [--subscription]
     *                               [--type {error, info, warning}]
     * ```
     *
     * @param {string} id ID of the banner to update.
     */
    az_devops_admin_banner.update = function (id) {
        return new az_devops_admin_banner_update_command_builder("az devops admin banner update", 'az_devops_admin_banner_update_command_result', id);
    };
    return az_devops_admin_banner;
}());
exports.az_devops_admin_banner = az_devops_admin_banner;
/** Manage administration operations. */
var az_devops_admin = /** @class */ (function () {
    function az_devops_admin() {
    }
    return az_devops_admin;
}());
exports.az_devops_admin = az_devops_admin;
/** Manage extensions. */
var az_devops_extension = /** @class */ (function () {
    function az_devops_extension() {
    }
    /**
     * Disable an extension.
     *
     * Syntax:
     * ```
     * az devops extension disable --extension-id
     *                             --publisher-id
     *                             [--detect {false, true}]
     *                             [--org]
     *                             [--subscription]
     * ```
     *
     * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
     * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
     */
    az_devops_extension.disable = function (extensionId, publisherId) {
        return new az_devops_extension_disable_command_builder("az devops extension disable", 'az_devops_extension_disable_command_result', extensionId, publisherId);
    };
    /**
     * Enable an extension.
     *
     * Syntax:
     * ```
     * az devops extension enable --extension-id
     *                            --publisher-id
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--subscription]
     * ```
     *
     * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
     * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
     */
    az_devops_extension.enable = function (extensionId, publisherId) {
        return new az_devops_extension_enable_command_builder("az devops extension enable", 'az_devops_extension_enable_command_result', extensionId, publisherId);
    };
    /**
     * Install an extension.
     *
     * Syntax:
     * ```
     * az devops extension install --extension-id
     *                             --publisher-id
     *                             [--detect {false, true}]
     *                             [--org]
     *                             [--subscription]
     * ```
     *
     * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
     * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
     */
    az_devops_extension.install = function (extensionId, publisherId) {
        return new az_devops_extension_install_command_builder("az devops extension install", 'az_devops_extension_install_command_result', extensionId, publisherId);
    };
    /**
     * List extensions installed in an organization.
     *
     * Syntax:
     * ```
     * az devops extension list [--detect {false, true}]
     *                          [--include-built-in {false, true}]
     *                          [--include-disabled {false, true}]
     *                          [--org]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     */
    az_devops_extension.list = function () {
        return new az_devops_extension_list_command_builder("az devops extension list", 'az_devops_extension_list_command_result');
    };
    /**
     * Search extensions from marketplace.
     *
     * Syntax:
     * ```
     * az devops extension search --search-query
     *                            [--subscription]
     * ```
     *
     * @param {string} searchQuery Search term.
     */
    az_devops_extension.search = function (searchQuery) {
        return new az_devops_extension_search_command_builder("az devops extension search", 'az_devops_extension_search_command_result', searchQuery);
    };
    /**
     * Get detail of single extension.
     *
     * Syntax:
     * ```
     * az devops extension show --extension-id
     *                          --publisher-id
     *                          [--detect {false, true}]
     *                          [--org]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
     * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
     */
    az_devops_extension.show = function (extensionId, publisherId) {
        return new az_devops_extension_show_command_builder("az devops extension show", 'az_devops_extension_show_command_result', extensionId, publisherId);
    };
    /**
     * Uninstall an extension.
     *
     * Syntax:
     * ```
     * az devops extension uninstall --extension-id
     *                               --publisher-id
     *                               [--detect {false, true}]
     *                               [--org]
     *                               [--subscription]
     *                               [--yes]
     * ```
     *
     * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
     * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
     */
    az_devops_extension.uninstall = function (extensionId, publisherId) {
        return new az_devops_extension_uninstall_command_builder("az devops extension uninstall", 'az_devops_extension_uninstall_command_result', extensionId, publisherId);
    };
    return az_devops_extension;
}());
exports.az_devops_extension = az_devops_extension;
/** Manage team projects. */
var az_devops_project = /** @class */ (function () {
    function az_devops_project() {
    }
    /**
     * Create a team project.
     *
     * Syntax:
     * ```
     * az devops project create --name
     *                          [--description]
     *                          [--detect {false, true}]
     *                          [--open]
     *                          [--org]
     *                          [--process]
     *                          [--source-control {git, tfvc}]
     *                          [--subscription]
     *                          [--visibility {private, public}]
     * ```
     *
     * @param {string} name Name of the new project.
     */
    az_devops_project.create = function (name) {
        return new az_devops_project_create_command_builder("az devops project create", 'az_devops_project_create_command_result', name);
    };
    /**
     * Delete team project.
     *
     * Syntax:
     * ```
     * az devops project delete --id
     *                          [--detect {false, true}]
     *                          [--org]
     *                          [--subscription]
     *                          [--yes]
     * ```
     *
     * @param {string} id The id of the project to delete.
     */
    az_devops_project["delete"] = function (id) {
        return new az_devops_project_delete_command_builder("az devops project delete", 'az_devops_project_delete_command_result', id);
    };
    /**
     * List team projects.
     *
     * Syntax:
     * ```
     * az devops project list [--continuation-token]
     *                        [--detect {false, true}]
     *                        [--get-default-team-image-url {false, true}]
     *                        [--org]
     *                        [--query-examples]
     *                        [--skip]
     *                        [--state-filter {all, createPending, deleted, deleting, new, unchanged, wellFormed}]
     *                        [--subscription]
     *                        [--top]
     * ```
     */
    az_devops_project.list = function () {
        return new az_devops_project_list_command_builder("az devops project list", 'az_devops_project_list_command_result');
    };
    /**
     * Show team project.
     *
     * Syntax:
     * ```
     * az devops project show --project
     *                        [--detect {false, true}]
     *                        [--open]
     *                        [--org]
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} project Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config.
     */
    az_devops_project.show = function (project) {
        return new az_devops_project_show_command_builder("az devops project show", 'az_devops_project_show_command_result', project);
    };
    return az_devops_project;
}());
exports.az_devops_project = az_devops_project;
/** Manage memberships for security groups. */
var az_devops_security_group_membership = /** @class */ (function () {
    function az_devops_security_group_membership() {
    }
    /**
     * Add membership.
     *
     * Syntax:
     * ```
     * az devops security group membership add --group-id
     *                                         --member-id
     *                                         [--detect {false, true}]
     *                                         [--org]
     *                                         [--subscription]
     * ```
     *
     * @param {string} groupId Descriptor of the group to which member needs to be added.
     * @param {string} memberId Descriptor of the group or Email Id of the user to be added. User should already be a part of the organization. Use `az devops user add` command to add an user to organization.
     */
    az_devops_security_group_membership.add = function (groupId, memberId) {
        return new az_devops_security_group_membership_add_command_builder("az devops security group membership add", 'az_devops_security_group_membership_add_command_result', groupId, memberId);
    };
    /**
     * List memberships for a group or user.
     *
     * Syntax:
     * ```
     * az devops security group membership list --id
     *                                          [--detect {false, true}]
     *                                          [--org]
     *                                          [--query-examples]
     *                                          [--relationship {memberof, members}]
     *                                          [--subscription]
     * ```
     *
     * @param {string} id Group descriptor or User Email whose membership details are required.
     */
    az_devops_security_group_membership.list = function (id) {
        return new az_devops_security_group_membership_list_command_builder("az devops security group membership list", 'az_devops_security_group_membership_list_command_result', id);
    };
    /**
     * Remove membership.
     *
     * Syntax:
     * ```
     * az devops security group membership remove --group-id
     *                                            --member-id
     *                                            [--detect {false, true}]
     *                                            [--org]
     *                                            [--subscription]
     *                                            [--yes]
     * ```
     *
     * @param {string} groupId Descriptor of the group from which member needs to be removed.
     * @param {string} memberId Descriptor of the group or Email Id of the user to be removed.
     */
    az_devops_security_group_membership.remove = function (groupId, memberId) {
        return new az_devops_security_group_membership_remove_command_builder("az devops security group membership remove", 'az_devops_security_group_membership_remove_command_result', groupId, memberId);
    };
    return az_devops_security_group_membership;
}());
exports.az_devops_security_group_membership = az_devops_security_group_membership;
/** Manage security groups. */
var az_devops_security_group = /** @class */ (function () {
    function az_devops_security_group() {
    }
    /**
     * Create a new Azure DevOps group.
     *
     * Syntax:
     * ```
     * az devops security group create [--description]
     *                                 [--detect {false, true}]
     *                                 [--email-id]
     *                                 [--groups]
     *                                 [--name]
     *                                 [--org]
     *                                 [--origin-id]
     *                                 [--project]
     *                                 [--scope {organization, project}]
     *                                 [--subscription]
     * ```
     */
    az_devops_security_group.create = function () {
        return new az_devops_security_group_create_command_builder("az devops security group create", 'az_devops_security_group_create_command_result');
    };
    /**
     * Delete an Azure DevOps group.
     *
     * Syntax:
     * ```
     * az devops security group delete --id
     *                                 [--detect {false, true}]
     *                                 [--org]
     *                                 [--subscription]
     *                                 [--yes]
     * ```
     *
     * @param {string} id Descriptor of the group.
     */
    az_devops_security_group["delete"] = function (id) {
        return new az_devops_security_group_delete_command_builder("az devops security group delete", 'az_devops_security_group_delete_command_result', id);
    };
    /**
     * List all the groups in a project or organization.
     *
     * Syntax:
     * ```
     * az devops security group list [--continuation-token]
     *                               [--detect {false, true}]
     *                               [--org]
     *                               [--project]
     *                               [--query-examples]
     *                               [--scope {organization, project}]
     *                               [--subject-types]
     *                               [--subscription]
     * ```
     */
    az_devops_security_group.list = function () {
        return new az_devops_security_group_list_command_builder("az devops security group list", 'az_devops_security_group_list_command_result');
    };
    /**
     * Show group details.
     *
     * Syntax:
     * ```
     * az devops security group show --id
     *                               [--detect {false, true}]
     *                               [--org]
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} id Descriptor of the group.
     */
    az_devops_security_group.show = function (id) {
        return new az_devops_security_group_show_command_builder("az devops security group show", 'az_devops_security_group_show_command_result', id);
    };
    /**
     * Update name AND/OR description for an Azure DevOps group.
     *
     * Syntax:
     * ```
     * az devops security group update --id
     *                                 [--description]
     *                                 [--detect {false, true}]
     *                                 [--name]
     *                                 [--org]
     *                                 [--subscription]
     * ```
     *
     * @param {string} id Descriptor of the group.
     */
    az_devops_security_group.update = function (id) {
        return new az_devops_security_group_update_command_builder("az devops security group update", 'az_devops_security_group_update_command_result', id);
    };
    return az_devops_security_group;
}());
exports.az_devops_security_group = az_devops_security_group;
/** Manage security namespaces. */
var az_devops_security_permission_namespace = /** @class */ (function () {
    function az_devops_security_permission_namespace() {
    }
    /**
     * List all available namespaces for an organization.
     *
     * Syntax:
     * ```
     * az devops security permission namespace list [--detect {false, true}]
     *                                              [--local-only]
     *                                              [--org]
     *                                              [--query-examples]
     *                                              [--subscription]
     * ```
     */
    az_devops_security_permission_namespace.list = function () {
        return new az_devops_security_permission_namespace_list_command_builder("az devops security permission namespace list", 'az_devops_security_permission_namespace_list_command_result');
    };
    /**
     * Show details of permissions available in each namespace.
     *
     * Syntax:
     * ```
     * az devops security permission namespace show --id
     *                                              [--detect {false, true}]
     *                                              [--org]
     *                                              [--query-examples]
     *                                              [--subscription]
     * ```
     *
     * @param {string} namespaceId ID of security namespace.
     */
    az_devops_security_permission_namespace.show = function (namespaceId) {
        return new az_devops_security_permission_namespace_show_command_builder("az devops security permission namespace show", 'az_devops_security_permission_namespace_show_command_result', namespaceId);
    };
    return az_devops_security_permission_namespace;
}());
exports.az_devops_security_permission_namespace = az_devops_security_permission_namespace;
/** Manage security permissions. */
var az_devops_security_permission = /** @class */ (function () {
    function az_devops_security_permission() {
    }
    /**
     * List tokens for given user/group and namespace.
     *
     * Syntax:
     * ```
     * az devops security permission list --id
     *                                    --subject
     *                                    [--detect {false, true}]
     *                                    [--org]
     *                                    [--query-examples]
     *                                    [--recurse]
     *                                    [--subscription]
     *                                    [--token]
     * ```
     *
     * @param {string} namespaceId ID of security namespace.
     * @param {string} subject User Email ID or Group descriptor.
     */
    az_devops_security_permission.list = function (namespaceId, subject) {
        return new az_devops_security_permission_list_command_builder("az devops security permission list", 'az_devops_security_permission_list_command_result', namespaceId, subject);
    };
    /**
     * Reset permission for given permission bit(s).
     *
     * Syntax:
     * ```
     * az devops security permission reset --id
     *                                     --permission-bit
     *                                     --subject
     *                                     --token
     *                                     [--detect {false, true}]
     *                                     [--org]
     *                                     [--subscription]
     * ```
     *
     * @param {string} namespaceId ID of security namespace.
     * @param {string} permissionBit Permission bit or addition of permission bits which needs to be reset                         for given user/group and token.
     * @param {string} subject User Email ID or Group descriptor.
     * @param {string} token Security token.
     */
    az_devops_security_permission.reset = function (namespaceId, permissionBit, subject, token) {
        return new az_devops_security_permission_reset_command_builder("az devops security permission reset", 'az_devops_security_permission_reset_command_result', namespaceId, permissionBit, subject, token);
    };
    /**
     * Clear all permissions of this token for a user/group.
     *
     * Syntax:
     * ```
     * az devops security permission reset-all --id
     *                                         --subject
     *                                         --token
     *                                         [--detect {false, true}]
     *                                         [--org]
     *                                         [--subscription]
     *                                         [--yes]
     * ```
     *
     * @param {string} namespaceId ID of security namespace.
     * @param {string} subject User Email ID or Group descriptor.
     * @param {string} token Security token.
     */
    az_devops_security_permission.reset_all = function (namespaceId, subject, token) {
        return new az_devops_security_permission_reset_all_command_builder("az devops security permission reset-all", 'az_devops_security_permission_reset_all_command_result', namespaceId, subject, token);
    };
    /**
     * Show permissions for given token, namespace and user/group.
     *
     * Syntax:
     * ```
     * az devops security permission show --id
     *                                    --subject
     *                                    --token
     *                                    [--detect {false, true}]
     *                                    [--org]
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} namespaceId ID of security namespace.
     * @param {string} subject User Email ID or Group descriptor.
     * @param {string} token Security token.
     */
    az_devops_security_permission.show = function (namespaceId, subject, token) {
        return new az_devops_security_permission_show_command_builder("az devops security permission show", 'az_devops_security_permission_show_command_result', namespaceId, subject, token);
    };
    /**
     * Assign allow or deny permission to given user/group.
     *
     * Syntax:
     * ```
     * az devops security permission update --id
     *                                      --subject
     *                                      --token
     *                                      [--allow-bit]
     *                                      [--deny-bit]
     *                                      [--detect {false, true}]
     *                                      [--merge {false, true}]
     *                                      [--org]
     *                                      [--subscription]
     * ```
     *
     * @param {string} namespaceId ID of security namespace.
     * @param {string} subject User Email ID or Group descriptor.
     * @param {string} token Security token.
     */
    az_devops_security_permission.update = function (namespaceId, subject, token) {
        return new az_devops_security_permission_update_command_builder("az devops security permission update", 'az_devops_security_permission_update_command_result', namespaceId, subject, token);
    };
    return az_devops_security_permission;
}());
exports.az_devops_security_permission = az_devops_security_permission;
/** Manage security related operations. */
var az_devops_security = /** @class */ (function () {
    function az_devops_security() {
    }
    return az_devops_security;
}());
exports.az_devops_security = az_devops_security;
/** Manage Azure RM service endpoints/connections. */
var az_devops_service_endpoint_azurerm = /** @class */ (function () {
    function az_devops_service_endpoint_azurerm() {
    }
    /**
     * Create an Azure RM type service endpoint.
     *
     * Syntax:
     * ```
     * az devops service-endpoint azurerm create --azure-rm-service-principal-id
     *                                           --azure-rm-subscription-id
     *                                           --azure-rm-subscription-name
     *                                           --azure-rm-tenant-id
     *                                           --name
     *                                           [--azure-rm-service-principal-certificate-path]
     *                                           [--detect {false, true}]
     *                                           [--org]
     *                                           [--project]
     *                                           [--subscription]
     * ```
     *
     * @param {string} azureRmServicePrincipalId Service principal id for creating azure rm service endpoint.
     * @param {string} azureRmSubscriptionId Subscription id for azure rm service endpoint.
     * @param {string} azureRmSubscriptionName Name of azure subscription for azure rm service endpoint.
     * @param {string} azureRmTenantId Tenant id for creating azure rm service endpoint.
     * @param {string} name Name of service endpoint to create.
     */
    az_devops_service_endpoint_azurerm.create = function (azureRmServicePrincipalId, azureRmSubscriptionId, azureRmSubscriptionName, azureRmTenantId, name) {
        return new az_devops_service_endpoint_azurerm_create_command_builder("az devops service-endpoint azurerm create", 'az_devops_service_endpoint_azurerm_create_command_result', azureRmServicePrincipalId, azureRmSubscriptionId, azureRmSubscriptionName, azureRmTenantId, name);
    };
    return az_devops_service_endpoint_azurerm;
}());
exports.az_devops_service_endpoint_azurerm = az_devops_service_endpoint_azurerm;
/** Manage GitHub service endpoints/connections. */
var az_devops_service_endpoint_github = /** @class */ (function () {
    function az_devops_service_endpoint_github() {
    }
    /**
     * Create a GitHub service endpoint.
     *
     * Syntax:
     * ```
     * az devops service-endpoint github create --github-url
     *                                          --name
     *                                          [--detect {false, true}]
     *                                          [--org]
     *                                          [--project]
     *                                          [--subscription]
     * ```
     *
     * @param {string} githubUrl Url for github for creating service endpoint.
     * @param {string} name Name of service endpoint to create.
     */
    az_devops_service_endpoint_github.create = function (githubUrl, name) {
        return new az_devops_service_endpoint_github_create_command_builder("az devops service-endpoint github create", 'az_devops_service_endpoint_github_create_command_result', githubUrl, name);
    };
    return az_devops_service_endpoint_github;
}());
exports.az_devops_service_endpoint_github = az_devops_service_endpoint_github;
/** Manage service endpoints/connections. */
var az_devops_service_endpoint = /** @class */ (function () {
    function az_devops_service_endpoint() {
    }
    /**
     * Create a service endpoint using configuration file.
     *
     * Syntax:
     * ```
     * az devops service-endpoint create --service-endpoint-configuration
     *                                   [--detect {false, true}]
     *                                   [--encoding {ascii, utf-16be, utf-16le, utf-8}]
     *                                   [--org]
     *                                   [--project]
     *                                   [--subscription]
     * ```
     *
     * @param {string} serviceEndpointConfiguration Configuration file with service endpoint request.
     */
    az_devops_service_endpoint.create = function (serviceEndpointConfiguration) {
        return new az_devops_service_endpoint_create_command_builder("az devops service-endpoint create", 'az_devops_service_endpoint_create_command_result', serviceEndpointConfiguration);
    };
    /**
     * Deletes service endpoint.
     *
     * Syntax:
     * ```
     * az devops service-endpoint delete --id
     *                                   [--deep]
     *                                   [--detect {false, true}]
     *                                   [--org]
     *                                   [--project]
     *                                   [--subscription]
     *                                   [--yes]
     * ```
     *
     * @param {string} id Id of the service endpoint to delete.
     */
    az_devops_service_endpoint["delete"] = function (id) {
        return new az_devops_service_endpoint_delete_command_builder("az devops service-endpoint delete", 'az_devops_service_endpoint_delete_command_result', id);
    };
    /**
     * List service endpoints in a project.
     *
     * Syntax:
     * ```
     * az devops service-endpoint list [--detect {false, true}]
     *                                 [--org]
     *                                 [--project]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     */
    az_devops_service_endpoint.list = function () {
        return new az_devops_service_endpoint_list_command_builder("az devops service-endpoint list", 'az_devops_service_endpoint_list_command_result');
    };
    /**
     * Get the details of a service endpoint.
     *
     * Syntax:
     * ```
     * az devops service-endpoint show --id
     *                                 [--detect {false, true}]
     *                                 [--org]
     *                                 [--project]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} id ID of the service endpoint.
     */
    az_devops_service_endpoint.show = function (id) {
        return new az_devops_service_endpoint_show_command_builder("az devops service-endpoint show", 'az_devops_service_endpoint_show_command_result', id);
    };
    /**
     * Update a service endpoint.
     *
     * Syntax:
     * ```
     * az devops service-endpoint update --id
     *                                   [--detect {false, true}]
     *                                   [--enable-for-all {false, true}]
     *                                   [--org]
     *                                   [--project]
     *                                   [--subscription]
     * ```
     *
     * @param {string} id ID of the service endpoint.
     */
    az_devops_service_endpoint.update = function (id) {
        return new az_devops_service_endpoint_update_command_builder("az devops service-endpoint update", 'az_devops_service_endpoint_update_command_result', id);
    };
    return az_devops_service_endpoint;
}());
exports.az_devops_service_endpoint = az_devops_service_endpoint;
/** Manage teams. */
var az_devops_team = /** @class */ (function () {
    function az_devops_team() {
    }
    /**
     * Create a team.
     *
     * Syntax:
     * ```
     * az devops team create --name
     *                       [--description]
     *                       [--detect {false, true}]
     *                       [--org]
     *                       [--project]
     *                       [--subscription]
     * ```
     *
     * @param {string} name Name of the new team.
     */
    az_devops_team.create = function (name) {
        return new az_devops_team_create_command_builder("az devops team create", 'az_devops_team_create_command_result', name);
    };
    /**
     * Delete a team.
     *
     * Syntax:
     * ```
     * az devops team delete --id
     *                       [--detect {false, true}]
     *                       [--org]
     *                       [--project]
     *                       [--subscription]
     *                       [--yes]
     * ```
     *
     * @param {string} id The id of the team to delete.
     */
    az_devops_team["delete"] = function (id) {
        return new az_devops_team_delete_command_builder("az devops team delete", 'az_devops_team_delete_command_result', id);
    };
    /**
     * List all teams in a project.
     *
     * Syntax:
     * ```
     * az devops team list [--detect {false, true}]
     *                     [--org]
     *                     [--project]
     *                     [--query-examples]
     *                     [--skip]
     *                     [--subscription]
     *                     [--top]
     * ```
     */
    az_devops_team.list = function () {
        return new az_devops_team_list_command_builder("az devops team list", 'az_devops_team_list_command_result');
    };
    /**
     * List members of a team.
     *
     * Syntax:
     * ```
     * az devops team list-member --team
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--project]
     *                            [--skip]
     *                            [--subscription]
     *                            [--top]
     * ```
     *
     * @param {string} team The name or id of the team to show members of.
     */
    az_devops_team.list_member = function (team) {
        return new az_devops_team_list_member_command_builder("az devops team list-member", 'az_devops_team_list_member_command_result', team);
    };
    /**
     * Show team details.
     *
     * Syntax:
     * ```
     * az devops team show --team
     *                     [--detect {false, true}]
     *                     [--org]
     *                     [--project]
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} team The name or id of the team to show.
     */
    az_devops_team.show = function (team) {
        return new az_devops_team_show_command_builder("az devops team show", 'az_devops_team_show_command_result', team);
    };
    /**
     * Update a team's name and/or description.
     *
     * Syntax:
     * ```
     * az devops team update --team
     *                       [--description]
     *                       [--detect {false, true}]
     *                       [--name]
     *                       [--org]
     *                       [--project]
     *                       [--subscription]
     * ```
     *
     * @param {string} team The name or id of the team to be updated.
     */
    az_devops_team.update = function (team) {
        return new az_devops_team_update_command_builder("az devops team update", 'az_devops_team_update_command_result', team);
    };
    return az_devops_team;
}());
exports.az_devops_team = az_devops_team;
/** Manage users. */
var az_devops_user = /** @class */ (function () {
    function az_devops_user() {
    }
    /**
     * Add user.
     *
     * Syntax:
     * ```
     * az devops user add --email-id
     *                    --license-type {advanced, earlyAdopter, express, professional, stakeholder}
     *                    [--detect {false, true}]
     *                    [--org]
     *                    [--send-email-invite {false, true}]
     *                    [--subscription]
     * ```
     *
     * @param {string} emailId Email ID of the user.
     * @param {'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'} licenseType License type for the user.
     */
    az_devops_user.add = function (emailId, licenseType) {
        return new az_devops_user_add_command_builder("az devops user add", 'az_devops_user_add_command_result', emailId, licenseType);
    };
    /**
     * List users in an organization [except for users which are added via AAD groups].
     *
     * Syntax:
     * ```
     * az devops user list [--detect {false, true}]
     *                     [--org]
     *                     [--query-examples]
     *                     [--skip]
     *                     [--subscription]
     *                     [--top]
     * ```
     */
    az_devops_user.list = function () {
        return new az_devops_user_list_command_builder("az devops user list", 'az_devops_user_list_command_result');
    };
    /**
     * Remove user from an organization.
     *
     * Syntax:
     * ```
     * az devops user remove --user
     *                       [--detect {false, true}]
     *                       [--org]
     *                       [--subscription]
     *                       [--yes]
     * ```
     *
     * @param {string} user Email ID or ID of the user.
     */
    az_devops_user.remove = function (user) {
        return new az_devops_user_remove_command_builder("az devops user remove", 'az_devops_user_remove_command_result', user);
    };
    /**
     * Show user details.
     *
     * Syntax:
     * ```
     * az devops user show --user
     *                     [--detect {false, true}]
     *                     [--org]
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} user Email ID or ID of the user.
     */
    az_devops_user.show = function (user) {
        return new az_devops_user_show_command_builder("az devops user show", 'az_devops_user_show_command_result', user);
    };
    /**
     * Update license type for a user.
     *
     * Syntax:
     * ```
     * az devops user update --license-type {advanced, earlyAdopter, express, professional, stakeholder}
     *                       --user
     *                       [--detect {false, true}]
     *                       [--org]
     *                       [--subscription]
     * ```
     *
     * @param {'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'} licenseType License type for the user.
     * @param {string} user Email ID or ID of the user.
     */
    az_devops_user.update = function (licenseType, user) {
        return new az_devops_user_update_command_builder("az devops user update", 'az_devops_user_update_command_result', licenseType, user);
    };
    return az_devops_user;
}());
exports.az_devops_user = az_devops_user;
/** Manage wiki pages. */
var az_devops_wiki_page = /** @class */ (function () {
    function az_devops_wiki_page() {
    }
    /**
     * Add a new page.
     *
     * Syntax:
     * ```
     * az devops wiki page create --path
     *                            --wiki
     *                            [--comment]
     *                            [--content]
     *                            [--detect {false, true}]
     *                            [--encoding {ascii, utf-16be, utf-16le, utf-8}]
     *                            [--file-path]
     *                            [--org]
     *                            [--project]
     *                            [--subscription]
     * ```
     *
     * @param {string} path Path of the wiki page.
     * @param {string} wiki Name or Id of the wiki.
     */
    az_devops_wiki_page.create = function (path, wiki) {
        return new az_devops_wiki_page_create_command_builder("az devops wiki page create", 'az_devops_wiki_page_create_command_result', path, wiki);
    };
    /**
     * Delete a page.
     *
     * Syntax:
     * ```
     * az devops wiki page delete --path
     *                            --wiki
     *                            [--comment]
     *                            [--detect {false, true}]
     *                            [--org]
     *                            [--project]
     *                            [--subscription]
     *                            [--yes]
     * ```
     *
     * @param {string} path Path of the wiki page.
     * @param {string} wiki Name or Id of the wiki.
     */
    az_devops_wiki_page["delete"] = function (path, wiki) {
        return new az_devops_wiki_page_delete_command_builder("az devops wiki page delete", 'az_devops_wiki_page_delete_command_result', path, wiki);
    };
    /**
     * Get the content of a page or open a page.
     *
     * Syntax:
     * ```
     * az devops wiki page show --path
     *                          --wiki
     *                          [--detect {false, true}]
     *                          [--include-content]
     *                          [--open]
     *                          [--org]
     *                          [--project]
     *                          [--query-examples]
     *                          [--subscription]
     *                          [--version]
     * ```
     *
     * @param {string} path Path of the wiki page.
     * @param {string} wiki Name or Id of the wiki.
     */
    az_devops_wiki_page.show = function (path, wiki) {
        return new az_devops_wiki_page_show_command_builder("az devops wiki page show", 'az_devops_wiki_page_show_command_result', path, wiki);
    };
    /**
     * Edit a page.
     *
     * Syntax:
     * ```
     * az devops wiki page update --path
     *                            --version
     *                            --wiki
     *                            [--comment]
     *                            [--content]
     *                            [--detect {false, true}]
     *                            [--encoding {ascii, utf-16be, utf-16le, utf-8}]
     *                            [--file-path]
     *                            [--org]
     *                            [--project]
     *                            [--subscription]
     * ```
     *
     * @param {string} path Path of the wiki page.
     * @param {string} version Version (ETag) of file to edit.
     * @param {string} wiki Name or Id of the wiki.
     */
    az_devops_wiki_page.update = function (path, version, wiki) {
        return new az_devops_wiki_page_update_command_builder("az devops wiki page update", 'az_devops_wiki_page_update_command_result', path, version, wiki);
    };
    return az_devops_wiki_page;
}());
exports.az_devops_wiki_page = az_devops_wiki_page;
/** Manage wikis. */
var az_devops_wiki = /** @class */ (function () {
    function az_devops_wiki() {
    }
    /**
     * Create a wiki.
     *
     * Syntax:
     * ```
     * az devops wiki create [--detect {false, true}]
     *                       [--mapped-path]
     *                       [--name]
     *                       [--org]
     *                       [--project]
     *                       [--repository]
     *                       [--subscription]
     *                       [--type {codewiki, projectwiki}]
     *                       [--version]
     * ```
     */
    az_devops_wiki.create = function () {
        return new az_devops_wiki_create_command_builder("az devops wiki create", 'az_devops_wiki_create_command_result');
    };
    /**
     * Delete a wiki.
     *
     * Syntax:
     * ```
     * az devops wiki delete --wiki
     *                       [--detect {false, true}]
     *                       [--org]
     *                       [--project]
     *                       [--subscription]
     *                       [--yes]
     * ```
     *
     * @param {string} wiki Name or Id of the wiki to delete.
     */
    az_devops_wiki["delete"] = function (wiki) {
        return new az_devops_wiki_delete_command_builder("az devops wiki delete", 'az_devops_wiki_delete_command_result', wiki);
    };
    /**
     * List all the wikis in a project or organization.
     *
     * Syntax:
     * ```
     * az devops wiki list [--detect {false, true}]
     *                     [--org]
     *                     [--project]
     *                     [--query-examples]
     *                     [--scope {organization, project}]
     *                     [--subscription]
     * ```
     */
    az_devops_wiki.list = function () {
        return new az_devops_wiki_list_command_builder("az devops wiki list", 'az_devops_wiki_list_command_result');
    };
    /**
     * Show details of a wiki.
     *
     * Syntax:
     * ```
     * az devops wiki show --wiki
     *                     [--detect {false, true}]
     *                     [--open]
     *                     [--org]
     *                     [--project]
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} wiki Name or Id of the wiki.
     */
    az_devops_wiki.show = function (wiki) {
        return new az_devops_wiki_show_command_builder("az devops wiki show", 'az_devops_wiki_show_command_result', wiki);
    };
    return az_devops_wiki;
}());
exports.az_devops_wiki = az_devops_wiki;
/** Manage Azure DevOps organization level operations. */
var az_devops = /** @class */ (function () {
    function az_devops() {
    }
    /**
     * Configure the Azure DevOps CLI or view your configuration.
     *
     * Syntax:
     * ```
     * az devops configure [--defaults]
     *                     [--list]
     *                     [--subscription]
     *                     [--use-git-aliases {false, true}]
     * ```
     */
    az_devops.configure = function () {
        return new az_devops_configure_command_builder("az devops configure", 'az_devops_configure_command_result');
    };
    /**
     * Displays information on how to provide feedback to the Azure DevOps CLI team.
     *
     * Syntax:
     * ```
     * az devops feedback [--subscription]
     * ```
     */
    az_devops.feedback = function () {
        return new az_devops_feedback_command_builder("az devops feedback", 'az_devops_feedback_command_result');
    };
    /**
     * This command will invoke request for any DevOps area and resource. Please use only json output as the response of this command is not fixed. Helpful docs - <a href="https://docs.microsoft.com/en-us/rest/api/azure/devops/">https://docs.microsoft.com/en-us/rest/api/azure/devops/</a>.
     *
     * Syntax:
     * ```
     * az devops invoke [--accept-media-type]
     *                  [--api-version]
     *                  [--area]
     *                  [--detect {false, true}]
     *                  [--encoding {ascii, utf-16be, utf-16le, utf-8}]
     *                  [--http-method {DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT}]
     *                  [--in-file]
     *                  [--media-type]
     *                  [--org]
     *                  [--out-file]
     *                  [--query-parameters]
     *                  [--resource]
     *                  [--route-parameters]
     *                  [--subscription]
     * ```
     */
    az_devops.invoke = function () {
        return new az_devops_invoke_command_builder("az devops invoke", 'az_devops_invoke_command_result');
    };
    /**
     * Set the credential (PAT) to use for a particular organization.
     *
     * Syntax:
     * ```
     * az devops login [--org]
     *                 [--subscription]
     * ```
     */
    az_devops.login = function () {
        return new az_devops_login_command_builder("az devops login", 'az_devops_login_command_result');
    };
    /**
     * Clear the credential for all or a particular organization.
     *
     * Syntax:
     * ```
     * az devops logout [--org]
     *                  [--subscription]
     * ```
     */
    az_devops.logout = function () {
        return new az_devops_logout_command_builder("az devops logout", 'az_devops_logout_command_result');
    };
    return az_devops;
}());
exports.az_devops = az_devops;
/**
 * Add a new banner and immediately show it.
 *
 * Syntax:
 * ```
 * az devops admin banner add --message
 *                            [--detect {false, true}]
 *                            [--expiration]
 *                            [--id]
 *                            [--org]
 *                            [--subscription]
 *                            [--type {error, info, warning}]
 * ```
 *
 * @param {string} message Message (string) to show in the banner.
 */
var az_devops_admin_banner_add_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_admin_banner_add_command_builder, _super);
    function az_devops_admin_banner_add_command_builder(commandPath, resultDataTypeName, message) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.message(message);
        return _this;
    }
    /** Message (string) to show in the banner. */
    az_devops_admin_banner_add_command_builder.prototype.message = function (value) {
        this.setFlag("--message", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_admin_banner_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Date/time when the banner should no longer be presented to users. If not set, the banner does not automatically expire and must be removed with the remove command. Example : "2019-06-10 17:21:00 UTC", "2019-06-10". */
    az_devops_admin_banner_add_command_builder.prototype.expiration = function (value) {
        this.setFlag("--expiration", value);
        return this;
    };
    /** Identifier for the new banner. This identifier is needed to change or remove the message later. A unique identifier is automatically created if one is not specified. */
    az_devops_admin_banner_add_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_admin_banner_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_admin_banner_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Type of banner to present. Defaults is "info". */
    az_devops_admin_banner_add_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    return az_devops_admin_banner_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List banners.
 *
 * Syntax:
 * ```
 * az devops admin banner list [--detect {false, true}]
 *                             [--org]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 */
var az_devops_admin_banner_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_admin_banner_list_command_builder, _super);
    function az_devops_admin_banner_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_devops_admin_banner_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_admin_banner_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_admin_banner_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_admin_banner_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_admin_banner_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a banner.
 *
 * Syntax:
 * ```
 * az devops admin banner remove --id
 *                               [--detect {false, true}]
 *                               [--org]
 *                               [--subscription]
 * ```
 *
 * @param {string} id ID of the banner to remove.
 */
var az_devops_admin_banner_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_admin_banner_remove_command_builder, _super);
    function az_devops_admin_banner_remove_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the banner to remove. */
    az_devops_admin_banner_remove_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_admin_banner_remove_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_admin_banner_remove_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_admin_banner_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_admin_banner_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details for a banner.
 *
 * Syntax:
 * ```
 * az devops admin banner show --id
 *                             [--detect {false, true}]
 *                             [--org]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} id Identifier for the banner.
 */
var az_devops_admin_banner_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_admin_banner_show_command_builder, _super);
    function az_devops_admin_banner_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier for the banner. */
    az_devops_admin_banner_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_admin_banner_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_admin_banner_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_admin_banner_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_admin_banner_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_admin_banner_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the message, level, or expiration date for a banner.
 *
 * Syntax:
 * ```
 * az devops admin banner update --id
 *                               [--detect {false, true}]
 *                               [--expiration]
 *                               [--message]
 *                               [--org]
 *                               [--subscription]
 *                               [--type {error, info, warning}]
 * ```
 *
 * @param {string} id ID of the banner to update.
 */
var az_devops_admin_banner_update_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_admin_banner_update_command_builder, _super);
    function az_devops_admin_banner_update_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the banner to update. */
    az_devops_admin_banner_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_admin_banner_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Date/time when the banner should no longer be presented to users. To unset the expiration for the banner, supply an empty value to this argument. Example : "2019-06-10 17:21:00 UTC", "2019-06-10". */
    az_devops_admin_banner_update_command_builder.prototype.expiration = function (value) {
        this.setFlag("--expiration", value);
        return this;
    };
    /** Message (string) to show in the banner. */
    az_devops_admin_banner_update_command_builder.prototype.message = function (value) {
        this.setFlag("--message", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_admin_banner_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_admin_banner_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Type of banner to present. Defaults is "info". */
    az_devops_admin_banner_update_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    return az_devops_admin_banner_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable an extension.
 *
 * Syntax:
 * ```
 * az devops extension disable --extension-id
 *                             --publisher-id
 *                             [--detect {false, true}]
 *                             [--org]
 *                             [--subscription]
 * ```
 *
 * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
 * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
 */
var az_devops_extension_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_extension_disable_command_builder, _super);
    function az_devops_extension_disable_command_builder(commandPath, resultDataTypeName, extensionId, publisherId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.extensionId(extensionId);
        _this.publisherId(publisherId);
        return _this;
    }
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    az_devops_extension_disable_command_builder.prototype.extensionId = function (value) {
        this.setFlag("--extension-id", value);
        return this;
    };
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    az_devops_extension_disable_command_builder.prototype.publisherId = function (value) {
        this.setFlag("--publisher-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_extension_disable_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_extension_disable_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_extension_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_extension_disable_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable an extension.
 *
 * Syntax:
 * ```
 * az devops extension enable --extension-id
 *                            --publisher-id
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--subscription]
 * ```
 *
 * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
 * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
 */
var az_devops_extension_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_extension_enable_command_builder, _super);
    function az_devops_extension_enable_command_builder(commandPath, resultDataTypeName, extensionId, publisherId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.extensionId(extensionId);
        _this.publisherId(publisherId);
        return _this;
    }
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    az_devops_extension_enable_command_builder.prototype.extensionId = function (value) {
        this.setFlag("--extension-id", value);
        return this;
    };
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    az_devops_extension_enable_command_builder.prototype.publisherId = function (value) {
        this.setFlag("--publisher-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_extension_enable_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_extension_enable_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_extension_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_extension_enable_command_builder;
}(base_1.CommandBuilder));
/**
 * Install an extension.
 *
 * Syntax:
 * ```
 * az devops extension install --extension-id
 *                             --publisher-id
 *                             [--detect {false, true}]
 *                             [--org]
 *                             [--subscription]
 * ```
 *
 * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
 * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
 */
var az_devops_extension_install_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_extension_install_command_builder, _super);
    function az_devops_extension_install_command_builder(commandPath, resultDataTypeName, extensionId, publisherId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.extensionId(extensionId);
        _this.publisherId(publisherId);
        return _this;
    }
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    az_devops_extension_install_command_builder.prototype.extensionId = function (value) {
        this.setFlag("--extension-id", value);
        return this;
    };
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    az_devops_extension_install_command_builder.prototype.publisherId = function (value) {
        this.setFlag("--publisher-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_extension_install_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_extension_install_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_extension_install_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_extension_install_command_builder;
}(base_1.CommandBuilder));
/**
 * List extensions installed in an organization.
 *
 * Syntax:
 * ```
 * az devops extension list [--detect {false, true}]
 *                          [--include-built-in {false, true}]
 *                          [--include-disabled {false, true}]
 *                          [--org]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 */
var az_devops_extension_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_extension_list_command_builder, _super);
    function az_devops_extension_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_devops_extension_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Include built in extensions. */
    az_devops_extension_list_command_builder.prototype.includeBuiltIn = function (value) {
        this.setFlag("--include-built-in", value.toString());
        return this;
    };
    /** Include disabled extensions. */
    az_devops_extension_list_command_builder.prototype.includeDisabled = function (value) {
        this.setFlag("--include-disabled", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_extension_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_extension_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_extension_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_extension_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Search extensions from marketplace.
 *
 * Syntax:
 * ```
 * az devops extension search --search-query
 *                            [--subscription]
 * ```
 *
 * @param {string} searchQuery Search term.
 */
var az_devops_extension_search_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_extension_search_command_builder, _super);
    function az_devops_extension_search_command_builder(commandPath, resultDataTypeName, searchQuery) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.searchQuery(searchQuery);
        return _this;
    }
    /** Search term. */
    az_devops_extension_search_command_builder.prototype.searchQuery = function (value) {
        this.setFlag("--search-query", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_extension_search_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_extension_search_command_builder;
}(base_1.CommandBuilder));
/**
 * Get detail of single extension.
 *
 * Syntax:
 * ```
 * az devops extension show --extension-id
 *                          --publisher-id
 *                          [--detect {false, true}]
 *                          [--org]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
 * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
 */
var az_devops_extension_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_extension_show_command_builder, _super);
    function az_devops_extension_show_command_builder(commandPath, resultDataTypeName, extensionId, publisherId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.extensionId(extensionId);
        _this.publisherId(publisherId);
        return _this;
    }
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    az_devops_extension_show_command_builder.prototype.extensionId = function (value) {
        this.setFlag("--extension-id", value);
        return this;
    };
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    az_devops_extension_show_command_builder.prototype.publisherId = function (value) {
        this.setFlag("--publisher-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_extension_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_extension_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_extension_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_extension_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_extension_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Uninstall an extension.
 *
 * Syntax:
 * ```
 * az devops extension uninstall --extension-id
 *                               --publisher-id
 *                               [--detect {false, true}]
 *                               [--org]
 *                               [--subscription]
 *                               [--yes]
 * ```
 *
 * @param {string} extensionId Extension Id. This will map to extension-name                           in the az devops extension search output.
 * @param {string} publisherId Publisher Id. This will map to publisher-name                           in the az devops extension search output.
 */
var az_devops_extension_uninstall_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_extension_uninstall_command_builder, _super);
    function az_devops_extension_uninstall_command_builder(commandPath, resultDataTypeName, extensionId, publisherId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.extensionId(extensionId);
        _this.publisherId(publisherId);
        return _this;
    }
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    az_devops_extension_uninstall_command_builder.prototype.extensionId = function (value) {
        this.setFlag("--extension-id", value);
        return this;
    };
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    az_devops_extension_uninstall_command_builder.prototype.publisherId = function (value) {
        this.setFlag("--publisher-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_extension_uninstall_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_extension_uninstall_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_extension_uninstall_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_extension_uninstall_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_extension_uninstall_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a team project.
 *
 * Syntax:
 * ```
 * az devops project create --name
 *                          [--description]
 *                          [--detect {false, true}]
 *                          [--open]
 *                          [--org]
 *                          [--process]
 *                          [--source-control {git, tfvc}]
 *                          [--subscription]
 *                          [--visibility {private, public}]
 * ```
 *
 * @param {string} name Name of the new project.
 */
var az_devops_project_create_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_project_create_command_builder, _super);
    function az_devops_project_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the new project. */
    az_devops_project_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Description for the new project. */
    az_devops_project_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_project_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the team project in the default web browser. */
    az_devops_project_create_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_project_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Process to use. Default if not specified. */
    az_devops_project_create_command_builder.prototype.process = function (value) {
        this.setFlag("--process", value);
        return this;
    };
    /** Source control type of the initial code repository created. */
    az_devops_project_create_command_builder.prototype.sourceControl = function (value) {
        this.setFlag("--source-control", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_project_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Project visibility. */
    az_devops_project_create_command_builder.prototype.visibility = function (value) {
        this.setFlag("--visibility", value);
        return this;
    };
    return az_devops_project_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete team project.
 *
 * Syntax:
 * ```
 * az devops project delete --id
 *                          [--detect {false, true}]
 *                          [--org]
 *                          [--subscription]
 *                          [--yes]
 * ```
 *
 * @param {string} id The id of the project to delete.
 */
var az_devops_project_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_project_delete_command_builder, _super);
    function az_devops_project_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The id of the project to delete. */
    az_devops_project_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_project_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_project_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_project_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_project_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_project_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List team projects.
 *
 * Syntax:
 * ```
 * az devops project list [--continuation-token]
 *                        [--detect {false, true}]
 *                        [--get-default-team-image-url {false, true}]
 *                        [--org]
 *                        [--query-examples]
 *                        [--skip]
 *                        [--state-filter {all, createPending, deleted, deleting, new, unchanged, wellFormed}]
 *                        [--subscription]
 *                        [--top]
 * ```
 */
var az_devops_project_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_project_list_command_builder, _super);
    function az_devops_project_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Continuation token. This can be retrived from previous run of this command if more results are present. */
    az_devops_project_list_command_builder.prototype.continuationToken = function (value) {
        this.setFlag("--continuation-token", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_project_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Whether to get default team image url or not. */
    az_devops_project_list_command_builder.prototype.getDefaultTeamImageUrl = function (value) {
        this.setFlag("--get-default-team-image-url", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_project_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_project_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Number of results to skip. */
    az_devops_project_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** State filter. */
    az_devops_project_list_command_builder.prototype.stateFilter = function (value) {
        this.setFlag("--state-filter", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_project_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of results to list. */
    az_devops_project_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_devops_project_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show team project.
 *
 * Syntax:
 * ```
 * az devops project show --project
 *                        [--detect {false, true}]
 *                        [--open]
 *                        [--org]
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} project Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config.
 */
var az_devops_project_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_project_show_command_builder, _super);
    function az_devops_project_show_command_builder(commandPath, resultDataTypeName, project) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.project(project);
        return _this;
    }
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_project_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_project_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the team project in the default web browser. */
    az_devops_project_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_project_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_project_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_project_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_project_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add membership.
 *
 * Syntax:
 * ```
 * az devops security group membership add --group-id
 *                                         --member-id
 *                                         [--detect {false, true}]
 *                                         [--org]
 *                                         [--subscription]
 * ```
 *
 * @param {string} groupId Descriptor of the group to which member needs to be added.
 * @param {string} memberId Descriptor of the group or Email Id of the user to be added. User should already be a part of the organization. Use `az devops user add` command to add an user to organization.
 */
var az_devops_security_group_membership_add_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_group_membership_add_command_builder, _super);
    function az_devops_security_group_membership_add_command_builder(commandPath, resultDataTypeName, groupId, memberId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupId(groupId);
        _this.memberId(memberId);
        return _this;
    }
    /** Descriptor of the group to which member needs to be added. */
    az_devops_security_group_membership_add_command_builder.prototype.groupId = function (value) {
        this.setFlag("--group-id", value);
        return this;
    };
    /** Descriptor of the group or Email Id of the user to be added. User should already be a part of the organization. Use `az devops user add` command to add an user to organization. */
    az_devops_security_group_membership_add_command_builder.prototype.memberId = function (value) {
        this.setFlag("--member-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_group_membership_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_group_membership_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_group_membership_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_group_membership_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List memberships for a group or user.
 *
 * Syntax:
 * ```
 * az devops security group membership list --id
 *                                          [--detect {false, true}]
 *                                          [--org]
 *                                          [--query-examples]
 *                                          [--relationship {memberof, members}]
 *                                          [--subscription]
 * ```
 *
 * @param {string} id Group descriptor or User Email whose membership details are required.
 */
var az_devops_security_group_membership_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_group_membership_list_command_builder, _super);
    function az_devops_security_group_membership_list_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Group descriptor or User Email whose membership details are required. */
    az_devops_security_group_membership_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_group_membership_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_group_membership_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_security_group_membership_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Get member of/members for this group. */
    az_devops_security_group_membership_list_command_builder.prototype.relationship = function (value) {
        this.setFlag("--relationship", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_group_membership_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_group_membership_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove membership.
 *
 * Syntax:
 * ```
 * az devops security group membership remove --group-id
 *                                            --member-id
 *                                            [--detect {false, true}]
 *                                            [--org]
 *                                            [--subscription]
 *                                            [--yes]
 * ```
 *
 * @param {string} groupId Descriptor of the group from which member needs to be removed.
 * @param {string} memberId Descriptor of the group or Email Id of the user to be removed.
 */
var az_devops_security_group_membership_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_group_membership_remove_command_builder, _super);
    function az_devops_security_group_membership_remove_command_builder(commandPath, resultDataTypeName, groupId, memberId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.groupId(groupId);
        _this.memberId(memberId);
        return _this;
    }
    /** Descriptor of the group from which member needs to be removed. */
    az_devops_security_group_membership_remove_command_builder.prototype.groupId = function (value) {
        this.setFlag("--group-id", value);
        return this;
    };
    /** Descriptor of the group or Email Id of the user to be removed. */
    az_devops_security_group_membership_remove_command_builder.prototype.memberId = function (value) {
        this.setFlag("--member-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_group_membership_remove_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_group_membership_remove_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_group_membership_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_security_group_membership_remove_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_security_group_membership_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure DevOps group.
 *
 * Syntax:
 * ```
 * az devops security group create [--description]
 *                                 [--detect {false, true}]
 *                                 [--email-id]
 *                                 [--groups]
 *                                 [--name]
 *                                 [--org]
 *                                 [--origin-id]
 *                                 [--project]
 *                                 [--scope {organization, project}]
 *                                 [--subscription]
 * ```
 */
var az_devops_security_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_group_create_command_builder, _super);
    function az_devops_security_group_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Description of Azure DevOps group. */
    az_devops_security_group_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_group_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Create new group using the mail address as a reference to an existing group from an external AD or AAD backed provider. Required if name or origin-id is missing. */
    az_devops_security_group_create_command_builder.prototype.emailId = function (value) {
        this.setFlag("--email-id", value);
        return this;
    };
    /** A comma separated list of descriptors referencing groups you want the newly created group to join. */
    az_devops_security_group_create_command_builder.prototype.groups = function (value) {
        this.setFlag("--groups", value);
        return this;
    };
    /** Name of Azure DevOps group. */
    az_devops_security_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_group_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Create new group using the OriginID as a reference to an existing group from an external AD or AAD backed provider. Required if name or email-id is missing. */
    az_devops_security_group_create_command_builder.prototype.originId = function (value) {
        this.setFlag("--origin-id", value);
        return this;
    };
    /** Name or ID of the project in which Azure DevOps group should be created. */
    az_devops_security_group_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Create group at project or organization level. */
    az_devops_security_group_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_group_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an Azure DevOps group.
 *
 * Syntax:
 * ```
 * az devops security group delete --id
 *                                 [--detect {false, true}]
 *                                 [--org]
 *                                 [--subscription]
 *                                 [--yes]
 * ```
 *
 * @param {string} id Descriptor of the group.
 */
var az_devops_security_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_group_delete_command_builder, _super);
    function az_devops_security_group_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Descriptor of the group. */
    az_devops_security_group_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_group_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_group_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_security_group_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_security_group_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the groups in a project or organization.
 *
 * Syntax:
 * ```
 * az devops security group list [--continuation-token]
 *                               [--detect {false, true}]
 *                               [--org]
 *                               [--project]
 *                               [--query-examples]
 *                               [--scope {organization, project}]
 *                               [--subject-types]
 *                               [--subscription]
 * ```
 */
var az_devops_security_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_group_list_command_builder, _super);
    function az_devops_security_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** If there are more results that can't be returned in a single page, the result set will contain a continuation token for retrieval of the next set of results. */
    az_devops_security_group_list_command_builder.prototype.continuationToken = function (value) {
        this.setFlag("--continuation-token", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_group_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_group_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** List groups for a particular project. */
    az_devops_security_group_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_security_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** List groups at project or organization level. */
    az_devops_security_group_list_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** A comma separated list of user subject subtypes to reduce the retrieved results. You can give initial part of descriptor [before the dot] as a filter e.g. vssgp,aadgp. */
    az_devops_security_group_list_command_builder.prototype.subjectTypes = function (value) {
        this.setFlag("--subject-types", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_group_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show group details.
 *
 * Syntax:
 * ```
 * az devops security group show --id
 *                               [--detect {false, true}]
 *                               [--org]
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} id Descriptor of the group.
 */
var az_devops_security_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_group_show_command_builder, _super);
    function az_devops_security_group_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Descriptor of the group. */
    az_devops_security_group_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_group_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_group_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_security_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update name AND/OR description for an Azure DevOps group.
 *
 * Syntax:
 * ```
 * az devops security group update --id
 *                                 [--description]
 *                                 [--detect {false, true}]
 *                                 [--name]
 *                                 [--org]
 *                                 [--subscription]
 * ```
 *
 * @param {string} id Descriptor of the group.
 */
var az_devops_security_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_group_update_command_builder, _super);
    function az_devops_security_group_update_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Descriptor of the group. */
    az_devops_security_group_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** New description for Azure DevOps group. */
    az_devops_security_group_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_group_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** New name for Azure DevOps group. */
    az_devops_security_group_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_group_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_group_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_group_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List all available namespaces for an organization.
 *
 * Syntax:
 * ```
 * az devops security permission namespace list [--detect {false, true}]
 *                                              [--local-only]
 *                                              [--org]
 *                                              [--query-examples]
 *                                              [--subscription]
 * ```
 */
var az_devops_security_permission_namespace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_permission_namespace_list_command_builder, _super);
    function az_devops_security_permission_namespace_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_devops_security_permission_namespace_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** If true, retrieve only local security namespaces. */
    az_devops_security_permission_namespace_list_command_builder.prototype.localOnly = function (value) {
        this.setFlag("--local-only", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_permission_namespace_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_security_permission_namespace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_permission_namespace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_permission_namespace_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of permissions available in each namespace.
 *
 * Syntax:
 * ```
 * az devops security permission namespace show --id
 *                                              [--detect {false, true}]
 *                                              [--org]
 *                                              [--query-examples]
 *                                              [--subscription]
 * ```
 *
 * @param {string} namespaceId ID of security namespace.
 */
var az_devops_security_permission_namespace_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_permission_namespace_show_command_builder, _super);
    function az_devops_security_permission_namespace_show_command_builder(commandPath, resultDataTypeName, namespaceId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceId(namespaceId);
        return _this;
    }
    /** ID of security namespace. */
    az_devops_security_permission_namespace_show_command_builder.prototype.namespaceId = function (value) {
        this.setFlag("--namespace-id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_permission_namespace_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_permission_namespace_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_security_permission_namespace_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_permission_namespace_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_permission_namespace_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List tokens for given user/group and namespace.
 *
 * Syntax:
 * ```
 * az devops security permission list --id
 *                                    --subject
 *                                    [--detect {false, true}]
 *                                    [--org]
 *                                    [--query-examples]
 *                                    [--recurse]
 *                                    [--subscription]
 *                                    [--token]
 * ```
 *
 * @param {string} namespaceId ID of security namespace.
 * @param {string} subject User Email ID or Group descriptor.
 */
var az_devops_security_permission_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_permission_list_command_builder, _super);
    function az_devops_security_permission_list_command_builder(commandPath, resultDataTypeName, namespaceId, subject) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceId(namespaceId);
        _this.subject(subject);
        return _this;
    }
    /** ID of security namespace. */
    az_devops_security_permission_list_command_builder.prototype.namespaceId = function (value) {
        this.setFlag("--namespace-id", value);
        return this;
    };
    /** User Email ID or Group descriptor. */
    az_devops_security_permission_list_command_builder.prototype.subject = function (value) {
        this.setFlag("--subject", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_permission_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_permission_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_security_permission_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If true and this is a hierarchical namespace, return child ACLs of the specified token. */
    az_devops_security_permission_list_command_builder.prototype.recurse = function (value) {
        this.setFlag("--recurse", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_permission_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Security token. */
    az_devops_security_permission_list_command_builder.prototype.token = function (value) {
        this.setFlag("--token", value);
        return this;
    };
    return az_devops_security_permission_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Reset permission for given permission bit(s).
 *
 * Syntax:
 * ```
 * az devops security permission reset --id
 *                                     --permission-bit
 *                                     --subject
 *                                     --token
 *                                     [--detect {false, true}]
 *                                     [--org]
 *                                     [--subscription]
 * ```
 *
 * @param {string} namespaceId ID of security namespace.
 * @param {string} permissionBit Permission bit or addition of permission bits which needs to be reset                         for given user/group and token.
 * @param {string} subject User Email ID or Group descriptor.
 * @param {string} token Security token.
 */
var az_devops_security_permission_reset_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_permission_reset_command_builder, _super);
    function az_devops_security_permission_reset_command_builder(commandPath, resultDataTypeName, namespaceId, permissionBit, subject, token) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceId(namespaceId);
        _this.permissionBit(permissionBit);
        _this.subject(subject);
        _this.token(token);
        return _this;
    }
    /** ID of security namespace. */
    az_devops_security_permission_reset_command_builder.prototype.namespaceId = function (value) {
        this.setFlag("--namespace-id", value);
        return this;
    };
    /** Permission bit or addition of permission bits which needs to be reset                         for given user/group and token. */
    az_devops_security_permission_reset_command_builder.prototype.permissionBit = function (value) {
        this.setFlag("--permission-bit", value);
        return this;
    };
    /** User Email ID or Group descriptor. */
    az_devops_security_permission_reset_command_builder.prototype.subject = function (value) {
        this.setFlag("--subject", value);
        return this;
    };
    /** Security token. */
    az_devops_security_permission_reset_command_builder.prototype.token = function (value) {
        this.setFlag("--token", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_permission_reset_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_permission_reset_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_permission_reset_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_permission_reset_command_builder;
}(base_1.CommandBuilder));
/**
 * Clear all permissions of this token for a user/group.
 *
 * Syntax:
 * ```
 * az devops security permission reset-all --id
 *                                         --subject
 *                                         --token
 *                                         [--detect {false, true}]
 *                                         [--org]
 *                                         [--subscription]
 *                                         [--yes]
 * ```
 *
 * @param {string} namespaceId ID of security namespace.
 * @param {string} subject User Email ID or Group descriptor.
 * @param {string} token Security token.
 */
var az_devops_security_permission_reset_all_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_permission_reset_all_command_builder, _super);
    function az_devops_security_permission_reset_all_command_builder(commandPath, resultDataTypeName, namespaceId, subject, token) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceId(namespaceId);
        _this.subject(subject);
        _this.token(token);
        return _this;
    }
    /** ID of security namespace. */
    az_devops_security_permission_reset_all_command_builder.prototype.namespaceId = function (value) {
        this.setFlag("--namespace-id", value);
        return this;
    };
    /** User Email ID or Group descriptor. */
    az_devops_security_permission_reset_all_command_builder.prototype.subject = function (value) {
        this.setFlag("--subject", value);
        return this;
    };
    /** Security token. */
    az_devops_security_permission_reset_all_command_builder.prototype.token = function (value) {
        this.setFlag("--token", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_permission_reset_all_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_permission_reset_all_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_permission_reset_all_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_security_permission_reset_all_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_security_permission_reset_all_command_builder;
}(base_1.CommandBuilder));
/**
 * Show permissions for given token, namespace and user/group.
 *
 * Syntax:
 * ```
 * az devops security permission show --id
 *                                    --subject
 *                                    --token
 *                                    [--detect {false, true}]
 *                                    [--org]
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} namespaceId ID of security namespace.
 * @param {string} subject User Email ID or Group descriptor.
 * @param {string} token Security token.
 */
var az_devops_security_permission_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_permission_show_command_builder, _super);
    function az_devops_security_permission_show_command_builder(commandPath, resultDataTypeName, namespaceId, subject, token) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceId(namespaceId);
        _this.subject(subject);
        _this.token(token);
        return _this;
    }
    /** ID of security namespace. */
    az_devops_security_permission_show_command_builder.prototype.namespaceId = function (value) {
        this.setFlag("--namespace-id", value);
        return this;
    };
    /** User Email ID or Group descriptor. */
    az_devops_security_permission_show_command_builder.prototype.subject = function (value) {
        this.setFlag("--subject", value);
        return this;
    };
    /** Security token. */
    az_devops_security_permission_show_command_builder.prototype.token = function (value) {
        this.setFlag("--token", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_permission_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_permission_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_security_permission_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_permission_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_permission_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Assign allow or deny permission to given user/group.
 *
 * Syntax:
 * ```
 * az devops security permission update --id
 *                                      --subject
 *                                      --token
 *                                      [--allow-bit]
 *                                      [--deny-bit]
 *                                      [--detect {false, true}]
 *                                      [--merge {false, true}]
 *                                      [--org]
 *                                      [--subscription]
 * ```
 *
 * @param {string} namespaceId ID of security namespace.
 * @param {string} subject User Email ID or Group descriptor.
 * @param {string} token Security token.
 */
var az_devops_security_permission_update_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_security_permission_update_command_builder, _super);
    function az_devops_security_permission_update_command_builder(commandPath, resultDataTypeName, namespaceId, subject, token) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceId(namespaceId);
        _this.subject(subject);
        _this.token(token);
        return _this;
    }
    /** ID of security namespace. */
    az_devops_security_permission_update_command_builder.prototype.namespaceId = function (value) {
        this.setFlag("--namespace-id", value);
        return this;
    };
    /** User Email ID or Group descriptor. */
    az_devops_security_permission_update_command_builder.prototype.subject = function (value) {
        this.setFlag("--subject", value);
        return this;
    };
    /** Security token. */
    az_devops_security_permission_update_command_builder.prototype.token = function (value) {
        this.setFlag("--token", value);
        return this;
    };
    /** Allow bit or addition of bits. Required if --deny-bit is missing. */
    az_devops_security_permission_update_command_builder.prototype.allowBit = function (value) {
        this.setFlag("--allow-bit", value);
        return this;
    };
    /** Deny bit or addition of bits. Required if --allow-bit is missing. */
    az_devops_security_permission_update_command_builder.prototype.denyBit = function (value) {
        this.setFlag("--deny-bit", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_security_permission_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** If set, the existing ACE has its allow and deny merged with                          the incoming ACE's allow and deny. If unset, the existing ACE is displaced. */
    az_devops_security_permission_update_command_builder.prototype.merge = function (value) {
        this.setFlag("--merge", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_security_permission_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_security_permission_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_security_permission_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Azure RM type service endpoint.
 *
 * Syntax:
 * ```
 * az devops service-endpoint azurerm create --azure-rm-service-principal-id
 *                                           --azure-rm-subscription-id
 *                                           --azure-rm-subscription-name
 *                                           --azure-rm-tenant-id
 *                                           --name
 *                                           [--azure-rm-service-principal-certificate-path]
 *                                           [--detect {false, true}]
 *                                           [--org]
 *                                           [--project]
 *                                           [--subscription]
 * ```
 *
 * @param {string} azureRmServicePrincipalId Service principal id for creating azure rm service endpoint.
 * @param {string} azureRmSubscriptionId Subscription id for azure rm service endpoint.
 * @param {string} azureRmSubscriptionName Name of azure subscription for azure rm service endpoint.
 * @param {string} azureRmTenantId Tenant id for creating azure rm service endpoint.
 * @param {string} name Name of service endpoint to create.
 */
var az_devops_service_endpoint_azurerm_create_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_service_endpoint_azurerm_create_command_builder, _super);
    function az_devops_service_endpoint_azurerm_create_command_builder(commandPath, resultDataTypeName, azureRmServicePrincipalId, azureRmSubscriptionId, azureRmSubscriptionName, azureRmTenantId, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.azureRmServicePrincipalId(azureRmServicePrincipalId);
        _this.azureRmSubscriptionId(azureRmSubscriptionId);
        _this.azureRmSubscriptionName(azureRmSubscriptionName);
        _this.azureRmTenantId(azureRmTenantId);
        _this.name(name);
        return _this;
    }
    /** Service principal id for creating azure rm service endpoint. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.azureRmServicePrincipalId = function (value) {
        this.setFlag("--azure-rm-service-principal-id", value);
        return this;
    };
    /** Subscription id for azure rm service endpoint. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.azureRmSubscriptionId = function (value) {
        this.setFlag("--azure-rm-subscription-id", value);
        return this;
    };
    /** Name of azure subscription for azure rm service endpoint. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.azureRmSubscriptionName = function (value) {
        this.setFlag("--azure-rm-subscription-name", value);
        return this;
    };
    /** Tenant id for creating azure rm service endpoint. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.azureRmTenantId = function (value) {
        this.setFlag("--azure-rm-tenant-id", value);
        return this;
    };
    /** Name of service endpoint to create. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Path to (.pem) which is certificate. Create using command "openssl pkcs12 -in file.pfx -out file.pem -nodes -password pass:<password_here>". More details : <a href="https://aka.ms/azure-devops-cli-azurerm-service-endpoint">https://aka.ms/azure-devops-cli-azurerm-service-endpoint</a>. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.azureRmServicePrincipalCertificatePath = function (value) {
        this.setFlag("--azure-rm-service-principal-certificate-path", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_service_endpoint_azurerm_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_service_endpoint_azurerm_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a GitHub service endpoint.
 *
 * Syntax:
 * ```
 * az devops service-endpoint github create --github-url
 *                                          --name
 *                                          [--detect {false, true}]
 *                                          [--org]
 *                                          [--project]
 *                                          [--subscription]
 * ```
 *
 * @param {string} githubUrl Url for github for creating service endpoint.
 * @param {string} name Name of service endpoint to create.
 */
var az_devops_service_endpoint_github_create_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_service_endpoint_github_create_command_builder, _super);
    function az_devops_service_endpoint_github_create_command_builder(commandPath, resultDataTypeName, githubUrl, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.githubUrl(githubUrl);
        _this.name(name);
        return _this;
    }
    /** Url for github for creating service endpoint. */
    az_devops_service_endpoint_github_create_command_builder.prototype.githubUrl = function (value) {
        this.setFlag("--github-url", value);
        return this;
    };
    /** Name of service endpoint to create. */
    az_devops_service_endpoint_github_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_service_endpoint_github_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_service_endpoint_github_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_service_endpoint_github_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_service_endpoint_github_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_service_endpoint_github_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a service endpoint using configuration file.
 *
 * Syntax:
 * ```
 * az devops service-endpoint create --service-endpoint-configuration
 *                                   [--detect {false, true}]
 *                                   [--encoding {ascii, utf-16be, utf-16le, utf-8}]
 *                                   [--org]
 *                                   [--project]
 *                                   [--subscription]
 * ```
 *
 * @param {string} serviceEndpointConfiguration Configuration file with service endpoint request.
 */
var az_devops_service_endpoint_create_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_service_endpoint_create_command_builder, _super);
    function az_devops_service_endpoint_create_command_builder(commandPath, resultDataTypeName, serviceEndpointConfiguration) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.serviceEndpointConfiguration(serviceEndpointConfiguration);
        return _this;
    }
    /** Configuration file with service endpoint request. */
    az_devops_service_endpoint_create_command_builder.prototype.serviceEndpointConfiguration = function (value) {
        this.setFlag("--service-endpoint-configuration", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_service_endpoint_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Encoding of the input file. */
    az_devops_service_endpoint_create_command_builder.prototype.encoding = function (value) {
        this.setFlag("--encoding", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_service_endpoint_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_service_endpoint_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_service_endpoint_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_service_endpoint_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes service endpoint.
 *
 * Syntax:
 * ```
 * az devops service-endpoint delete --id
 *                                   [--deep]
 *                                   [--detect {false, true}]
 *                                   [--org]
 *                                   [--project]
 *                                   [--subscription]
 *                                   [--yes]
 * ```
 *
 * @param {string} id Id of the service endpoint to delete.
 */
var az_devops_service_endpoint_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_service_endpoint_delete_command_builder, _super);
    function az_devops_service_endpoint_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Id of the service endpoint to delete. */
    az_devops_service_endpoint_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Specific to AzureRM endpoint created in Automatic flow. When it is specified, this will also delete corresponding AAD application in Azure. */
    az_devops_service_endpoint_delete_command_builder.prototype.deep = function (value) {
        this.setFlag("--deep", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_service_endpoint_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_service_endpoint_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_service_endpoint_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_service_endpoint_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_service_endpoint_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_service_endpoint_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List service endpoints in a project.
 *
 * Syntax:
 * ```
 * az devops service-endpoint list [--detect {false, true}]
 *                                 [--org]
 *                                 [--project]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 */
var az_devops_service_endpoint_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_service_endpoint_list_command_builder, _super);
    function az_devops_service_endpoint_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_devops_service_endpoint_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_service_endpoint_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_service_endpoint_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_service_endpoint_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_service_endpoint_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_service_endpoint_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a service endpoint.
 *
 * Syntax:
 * ```
 * az devops service-endpoint show --id
 *                                 [--detect {false, true}]
 *                                 [--org]
 *                                 [--project]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} id ID of the service endpoint.
 */
var az_devops_service_endpoint_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_service_endpoint_show_command_builder, _super);
    function az_devops_service_endpoint_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the service endpoint. */
    az_devops_service_endpoint_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_service_endpoint_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_service_endpoint_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_service_endpoint_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_service_endpoint_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_service_endpoint_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_service_endpoint_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a service endpoint.
 *
 * Syntax:
 * ```
 * az devops service-endpoint update --id
 *                                   [--detect {false, true}]
 *                                   [--enable-for-all {false, true}]
 *                                   [--org]
 *                                   [--project]
 *                                   [--subscription]
 * ```
 *
 * @param {string} id ID of the service endpoint.
 */
var az_devops_service_endpoint_update_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_service_endpoint_update_command_builder, _super);
    function az_devops_service_endpoint_update_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** ID of the service endpoint. */
    az_devops_service_endpoint_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_service_endpoint_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Allow all pipelines to access this service endpoint. */
    az_devops_service_endpoint_update_command_builder.prototype.enableForAll = function (value) {
        this.setFlag("--enable-for-all", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_service_endpoint_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_service_endpoint_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_service_endpoint_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_service_endpoint_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a team.
 *
 * Syntax:
 * ```
 * az devops team create --name
 *                       [--description]
 *                       [--detect {false, true}]
 *                       [--org]
 *                       [--project]
 *                       [--subscription]
 * ```
 *
 * @param {string} name Name of the new team.
 */
var az_devops_team_create_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_team_create_command_builder, _super);
    function az_devops_team_create_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the new team. */
    az_devops_team_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Description of the new team. */
    az_devops_team_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_team_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_team_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_team_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_team_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_team_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a team.
 *
 * Syntax:
 * ```
 * az devops team delete --id
 *                       [--detect {false, true}]
 *                       [--org]
 *                       [--project]
 *                       [--subscription]
 *                       [--yes]
 * ```
 *
 * @param {string} id The id of the team to delete.
 */
var az_devops_team_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_team_delete_command_builder, _super);
    function az_devops_team_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The id of the team to delete. */
    az_devops_team_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_team_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_team_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_team_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_team_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_team_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_team_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all teams in a project.
 *
 * Syntax:
 * ```
 * az devops team list [--detect {false, true}]
 *                     [--org]
 *                     [--project]
 *                     [--query-examples]
 *                     [--skip]
 *                     [--subscription]
 *                     [--top]
 * ```
 */
var az_devops_team_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_team_list_command_builder, _super);
    function az_devops_team_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_devops_team_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_team_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_team_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_team_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Number of teams to skip. */
    az_devops_team_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_team_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of teams to return. */
    az_devops_team_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_devops_team_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List members of a team.
 *
 * Syntax:
 * ```
 * az devops team list-member --team
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--project]
 *                            [--skip]
 *                            [--subscription]
 *                            [--top]
 * ```
 *
 * @param {string} team The name or id of the team to show members of.
 */
var az_devops_team_list_member_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_team_list_member_command_builder, _super);
    function az_devops_team_list_member_command_builder(commandPath, resultDataTypeName, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.team(team);
        return _this;
    }
    /** The name or id of the team to show members of. */
    az_devops_team_list_member_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_team_list_member_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_team_list_member_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_team_list_member_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Number of members to skip. */
    az_devops_team_list_member_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_team_list_member_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of members to return. */
    az_devops_team_list_member_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_devops_team_list_member_command_builder;
}(base_1.CommandBuilder));
/**
 * Show team details.
 *
 * Syntax:
 * ```
 * az devops team show --team
 *                     [--detect {false, true}]
 *                     [--org]
 *                     [--project]
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} team The name or id of the team to show.
 */
var az_devops_team_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_team_show_command_builder, _super);
    function az_devops_team_show_command_builder(commandPath, resultDataTypeName, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.team(team);
        return _this;
    }
    /** The name or id of the team to show. */
    az_devops_team_show_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_team_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_team_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_team_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_team_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_team_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_team_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a team's name and/or description.
 *
 * Syntax:
 * ```
 * az devops team update --team
 *                       [--description]
 *                       [--detect {false, true}]
 *                       [--name]
 *                       [--org]
 *                       [--project]
 *                       [--subscription]
 * ```
 *
 * @param {string} team The name or id of the team to be updated.
 */
var az_devops_team_update_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_team_update_command_builder, _super);
    function az_devops_team_update_command_builder(commandPath, resultDataTypeName, team) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.team(team);
        return _this;
    }
    /** The name or id of the team to be updated. */
    az_devops_team_update_command_builder.prototype.team = function (value) {
        this.setFlag("--team", value);
        return this;
    };
    /** New description of the team. */
    az_devops_team_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_team_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** New name of the team. */
    az_devops_team_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_team_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_team_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_team_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_team_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add user.
 *
 * Syntax:
 * ```
 * az devops user add --email-id
 *                    --license-type {advanced, earlyAdopter, express, professional, stakeholder}
 *                    [--detect {false, true}]
 *                    [--org]
 *                    [--send-email-invite {false, true}]
 *                    [--subscription]
 * ```
 *
 * @param {string} emailId Email ID of the user.
 * @param {'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'} licenseType License type for the user.
 */
var az_devops_user_add_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_user_add_command_builder, _super);
    function az_devops_user_add_command_builder(commandPath, resultDataTypeName, emailId, licenseType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.emailId(emailId);
        _this.licenseType(licenseType);
        return _this;
    }
    /** Email ID of the user. */
    az_devops_user_add_command_builder.prototype.emailId = function (value) {
        this.setFlag("--email-id", value);
        return this;
    };
    /** License type for the user. */
    az_devops_user_add_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_user_add_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_user_add_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Whether to send email invite for new user or not. */
    az_devops_user_add_command_builder.prototype.sendEmailInvite = function (value) {
        this.setFlag("--send-email-invite", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_user_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_user_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List users in an organization [except for users which are added via AAD groups].
 *
 * Syntax:
 * ```
 * az devops user list [--detect {false, true}]
 *                     [--org]
 *                     [--query-examples]
 *                     [--skip]
 *                     [--subscription]
 *                     [--top]
 * ```
 */
var az_devops_user_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_user_list_command_builder, _super);
    function az_devops_user_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_devops_user_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_user_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_user_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Offset: Number of records to skip. */
    az_devops_user_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_user_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of users to return. Max value is 10000. */
    az_devops_user_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_devops_user_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove user from an organization.
 *
 * Syntax:
 * ```
 * az devops user remove --user
 *                       [--detect {false, true}]
 *                       [--org]
 *                       [--subscription]
 *                       [--yes]
 * ```
 *
 * @param {string} user Email ID or ID of the user.
 */
var az_devops_user_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_user_remove_command_builder, _super);
    function az_devops_user_remove_command_builder(commandPath, resultDataTypeName, user) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.user(user);
        return _this;
    }
    /** Email ID or ID of the user. */
    az_devops_user_remove_command_builder.prototype.user = function (value) {
        this.setFlag("--user", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_user_remove_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_user_remove_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_user_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_user_remove_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_user_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Show user details.
 *
 * Syntax:
 * ```
 * az devops user show --user
 *                     [--detect {false, true}]
 *                     [--org]
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} user Email ID or ID of the user.
 */
var az_devops_user_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_user_show_command_builder, _super);
    function az_devops_user_show_command_builder(commandPath, resultDataTypeName, user) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.user(user);
        return _this;
    }
    /** Email ID or ID of the user. */
    az_devops_user_show_command_builder.prototype.user = function (value) {
        this.setFlag("--user", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_user_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_user_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_user_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_user_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_user_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update license type for a user.
 *
 * Syntax:
 * ```
 * az devops user update --license-type {advanced, earlyAdopter, express, professional, stakeholder}
 *                       --user
 *                       [--detect {false, true}]
 *                       [--org]
 *                       [--subscription]
 * ```
 *
 * @param {'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'} licenseType License type for the user.
 * @param {string} user Email ID or ID of the user.
 */
var az_devops_user_update_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_user_update_command_builder, _super);
    function az_devops_user_update_command_builder(commandPath, resultDataTypeName, licenseType, user) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.licenseType(licenseType);
        _this.user(user);
        return _this;
    }
    /** License type for the user. */
    az_devops_user_update_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Email ID or ID of the user. */
    az_devops_user_update_command_builder.prototype.user = function (value) {
        this.setFlag("--user", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_user_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_user_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_user_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_user_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a new page.
 *
 * Syntax:
 * ```
 * az devops wiki page create --path
 *                            --wiki
 *                            [--comment]
 *                            [--content]
 *                            [--detect {false, true}]
 *                            [--encoding {ascii, utf-16be, utf-16le, utf-8}]
 *                            [--file-path]
 *                            [--org]
 *                            [--project]
 *                            [--subscription]
 * ```
 *
 * @param {string} path Path of the wiki page.
 * @param {string} wiki Name or Id of the wiki.
 */
var az_devops_wiki_page_create_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_wiki_page_create_command_builder, _super);
    function az_devops_wiki_page_create_command_builder(commandPath, resultDataTypeName, path, wiki) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        _this.wiki(wiki);
        return _this;
    }
    /** Path of the wiki page. */
    az_devops_wiki_page_create_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name or Id of the wiki. */
    az_devops_wiki_page_create_command_builder.prototype.wiki = function (value) {
        this.setFlag("--wiki", value);
        return this;
    };
    /** Comment in the commit message of file add operation. */
    az_devops_wiki_page_create_command_builder.prototype.comment = function (value) {
        this.setFlag("--comment", value);
        return this;
    };
    /** Content of the wiki page. Ignored if --file-path is specified. */
    az_devops_wiki_page_create_command_builder.prototype.content = function (value) {
        this.setFlag("--content", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_wiki_page_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Encoding of the file. Used in conjunction with --file-path parameter. */
    az_devops_wiki_page_create_command_builder.prototype.encoding = function (value) {
        this.setFlag("--encoding", value);
        return this;
    };
    /** Path of the file input if content is specified in the file. */
    az_devops_wiki_page_create_command_builder.prototype.filePath = function (value) {
        this.setFlag("--file-path", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_wiki_page_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_wiki_page_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_wiki_page_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_wiki_page_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a page.
 *
 * Syntax:
 * ```
 * az devops wiki page delete --path
 *                            --wiki
 *                            [--comment]
 *                            [--detect {false, true}]
 *                            [--org]
 *                            [--project]
 *                            [--subscription]
 *                            [--yes]
 * ```
 *
 * @param {string} path Path of the wiki page.
 * @param {string} wiki Name or Id of the wiki.
 */
var az_devops_wiki_page_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_wiki_page_delete_command_builder, _super);
    function az_devops_wiki_page_delete_command_builder(commandPath, resultDataTypeName, path, wiki) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        _this.wiki(wiki);
        return _this;
    }
    /** Path of the wiki page. */
    az_devops_wiki_page_delete_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name or Id of the wiki. */
    az_devops_wiki_page_delete_command_builder.prototype.wiki = function (value) {
        this.setFlag("--wiki", value);
        return this;
    };
    /** Comment in the commit message of delete operation. */
    az_devops_wiki_page_delete_command_builder.prototype.comment = function (value) {
        this.setFlag("--comment", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_wiki_page_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_wiki_page_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_wiki_page_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_wiki_page_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_wiki_page_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_wiki_page_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the content of a page or open a page.
 *
 * Syntax:
 * ```
 * az devops wiki page show --path
 *                          --wiki
 *                          [--detect {false, true}]
 *                          [--include-content]
 *                          [--open]
 *                          [--org]
 *                          [--project]
 *                          [--query-examples]
 *                          [--subscription]
 *                          [--version]
 * ```
 *
 * @param {string} path Path of the wiki page.
 * @param {string} wiki Name or Id of the wiki.
 */
var az_devops_wiki_page_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_wiki_page_show_command_builder, _super);
    function az_devops_wiki_page_show_command_builder(commandPath, resultDataTypeName, path, wiki) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        _this.wiki(wiki);
        return _this;
    }
    /** Path of the wiki page. */
    az_devops_wiki_page_show_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Name or Id of the wiki. */
    az_devops_wiki_page_show_command_builder.prototype.wiki = function (value) {
        this.setFlag("--wiki", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_wiki_page_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Include content of the page. */
    az_devops_wiki_page_show_command_builder.prototype.includeContent = function (value) {
        this.setFlag("--include-content", value);
        return this;
    };
    /** Open the wiki page in your web browser. */
    az_devops_wiki_page_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_wiki_page_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_wiki_page_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_wiki_page_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_wiki_page_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Version (ETag) of the wiki page. */
    az_devops_wiki_page_show_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_devops_wiki_page_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Edit a page.
 *
 * Syntax:
 * ```
 * az devops wiki page update --path
 *                            --version
 *                            --wiki
 *                            [--comment]
 *                            [--content]
 *                            [--detect {false, true}]
 *                            [--encoding {ascii, utf-16be, utf-16le, utf-8}]
 *                            [--file-path]
 *                            [--org]
 *                            [--project]
 *                            [--subscription]
 * ```
 *
 * @param {string} path Path of the wiki page.
 * @param {string} version Version (ETag) of file to edit.
 * @param {string} wiki Name or Id of the wiki.
 */
var az_devops_wiki_page_update_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_wiki_page_update_command_builder, _super);
    function az_devops_wiki_page_update_command_builder(commandPath, resultDataTypeName, path, version, wiki) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.path(path);
        _this.version(version);
        _this.wiki(wiki);
        return _this;
    }
    /** Path of the wiki page. */
    az_devops_wiki_page_update_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Version (ETag) of file to edit. */
    az_devops_wiki_page_update_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** Name or Id of the wiki. */
    az_devops_wiki_page_update_command_builder.prototype.wiki = function (value) {
        this.setFlag("--wiki", value);
        return this;
    };
    /** Comment in the commit message of file edit operation. */
    az_devops_wiki_page_update_command_builder.prototype.comment = function (value) {
        this.setFlag("--comment", value);
        return this;
    };
    /** Content of the wiki page. Ignored if --file-path is specified. */
    az_devops_wiki_page_update_command_builder.prototype.content = function (value) {
        this.setFlag("--content", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_wiki_page_update_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Encoding of the file. Used in conjunction with --file-path parameter. */
    az_devops_wiki_page_update_command_builder.prototype.encoding = function (value) {
        this.setFlag("--encoding", value);
        return this;
    };
    /** Path of the file input if content is specified in the file. */
    az_devops_wiki_page_update_command_builder.prototype.filePath = function (value) {
        this.setFlag("--file-path", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_wiki_page_update_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_wiki_page_update_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_wiki_page_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_wiki_page_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a wiki.
 *
 * Syntax:
 * ```
 * az devops wiki create [--detect {false, true}]
 *                       [--mapped-path]
 *                       [--name]
 *                       [--org]
 *                       [--project]
 *                       [--repository]
 *                       [--subscription]
 *                       [--type {codewiki, projectwiki}]
 *                       [--version]
 * ```
 */
var az_devops_wiki_create_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_wiki_create_command_builder, _super);
    function az_devops_wiki_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_devops_wiki_create_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** [Required for codewiki type] Mapped path of the new wiki e.g. '/' to publish from root of repository. */
    az_devops_wiki_create_command_builder.prototype.mappedPath = function (value) {
        this.setFlag("--mapped-path", value);
        return this;
    };
    /** Name of the new wiki. */
    az_devops_wiki_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_wiki_create_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_wiki_create_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** [Required for codewiki type] Name or ID of the repository to publish the wiki from. */
    az_devops_wiki_create_command_builder.prototype.repository = function (value) {
        this.setFlag("--repository", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_wiki_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Type of wiki to create. */
    az_devops_wiki_create_command_builder.prototype.wikiType = function (value) {
        this.setFlag("--wiki-type", value);
        return this;
    };
    /** [Required for codewiki type] Repository branch name to publish the code wiki from. */
    az_devops_wiki_create_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_devops_wiki_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a wiki.
 *
 * Syntax:
 * ```
 * az devops wiki delete --wiki
 *                       [--detect {false, true}]
 *                       [--org]
 *                       [--project]
 *                       [--subscription]
 *                       [--yes]
 * ```
 *
 * @param {string} wiki Name or Id of the wiki to delete.
 */
var az_devops_wiki_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_wiki_delete_command_builder, _super);
    function az_devops_wiki_delete_command_builder(commandPath, resultDataTypeName, wiki) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.wiki(wiki);
        return _this;
    }
    /** Name or Id of the wiki to delete. */
    az_devops_wiki_delete_command_builder.prototype.wiki = function (value) {
        this.setFlag("--wiki", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_wiki_delete_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_wiki_delete_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_wiki_delete_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_wiki_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_devops_wiki_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_devops_wiki_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the wikis in a project or organization.
 *
 * Syntax:
 * ```
 * az devops wiki list [--detect {false, true}]
 *                     [--org]
 *                     [--project]
 *                     [--query-examples]
 *                     [--scope {organization, project}]
 *                     [--subscription]
 * ```
 */
var az_devops_wiki_list_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_wiki_list_command_builder, _super);
    function az_devops_wiki_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Automatically detect organization. */
    az_devops_wiki_list_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_wiki_list_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_wiki_list_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_wiki_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** List the wikis at project or organization level. */
    az_devops_wiki_list_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_wiki_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_wiki_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a wiki.
 *
 * Syntax:
 * ```
 * az devops wiki show --wiki
 *                     [--detect {false, true}]
 *                     [--open]
 *                     [--org]
 *                     [--project]
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} wiki Name or Id of the wiki.
 */
var az_devops_wiki_show_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_wiki_show_command_builder, _super);
    function az_devops_wiki_show_command_builder(commandPath, resultDataTypeName, wiki) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.wiki(wiki);
        return _this;
    }
    /** Name or Id of the wiki. */
    az_devops_wiki_show_command_builder.prototype.wiki = function (value) {
        this.setFlag("--wiki", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_wiki_show_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Open the wiki in your web browser. */
    az_devops_wiki_show_command_builder.prototype.open = function (value) {
        this.setFlag("--open", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_wiki_show_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    az_devops_wiki_show_command_builder.prototype.project = function (value) {
        this.setFlag("--project", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_devops_wiki_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_wiki_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_wiki_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Configure the Azure DevOps CLI or view your configuration.
 *
 * Syntax:
 * ```
 * az devops configure [--defaults]
 *                     [--list]
 *                     [--subscription]
 *                     [--use-git-aliases {false, true}]
 * ```
 */
var az_devops_configure_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_configure_command_builder, _super);
    function az_devops_configure_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space separated 'name=value' pairs for common arguments defaults, e.g. '--defaults project=my-project-name organization=https://dev.azure.com/organizationName arg=value'. Use '' to clear the defaults, e.g. --defaults project=''. */
    az_devops_configure_command_builder.prototype.defaults = function (value) {
        this.setFlag("--defaults", value);
        return this;
    };
    /** Lists the contents of the config file. */
    az_devops_configure_command_builder.prototype.list = function (value) {
        this.setFlag("--list", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_configure_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Set to 'true' to configure Git aliases global git config file (to enable commands like "git pr list"). Set to 'false' to remove any aliases set by the tool. */
    az_devops_configure_command_builder.prototype.useGitAliases = function (value) {
        this.setFlag("--use-git-aliases", value.toString());
        return this;
    };
    return az_devops_configure_command_builder;
}(base_1.CommandBuilder));
/**
 * Displays information on how to provide feedback to the Azure DevOps CLI team.
 *
 * Syntax:
 * ```
 * az devops feedback [--subscription]
 * ```
 */
var az_devops_feedback_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_feedback_command_builder, _super);
    function az_devops_feedback_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_feedback_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_feedback_command_builder;
}(base_1.CommandBuilder));
/**
 * This command will invoke request for any DevOps area and resource. Please use only json output as the response of this command is not fixed. Helpful docs - <a href="https://docs.microsoft.com/en-us/rest/api/azure/devops/">https://docs.microsoft.com/en-us/rest/api/azure/devops/</a>.
 *
 * Syntax:
 * ```
 * az devops invoke [--accept-media-type]
 *                  [--api-version]
 *                  [--area]
 *                  [--detect {false, true}]
 *                  [--encoding {ascii, utf-16be, utf-16le, utf-8}]
 *                  [--http-method {DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT}]
 *                  [--in-file]
 *                  [--media-type]
 *                  [--org]
 *                  [--out-file]
 *                  [--query-parameters]
 *                  [--resource]
 *                  [--route-parameters]
 *                  [--subscription]
 * ```
 */
var az_devops_invoke_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_invoke_command_builder, _super);
    function az_devops_invoke_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Specifies the content type of the response. */
    az_devops_invoke_command_builder.prototype.acceptMediaType = function (value) {
        this.setFlag("--accept-media-type", value);
        return this;
    };
    /** The version of the API to target. */
    az_devops_invoke_command_builder.prototype.apiVersion = function (value) {
        this.setFlag("--api-version", value);
        return this;
    };
    /** The area to find the resource. */
    az_devops_invoke_command_builder.prototype.area = function (value) {
        this.setFlag("--area", value);
        return this;
    };
    /** Automatically detect organization. */
    az_devops_invoke_command_builder.prototype.detect = function (value) {
        this.setFlag("--detect", value.toString());
        return this;
    };
    /** Encoding of the input file. Used in conjunction with --in-file. */
    az_devops_invoke_command_builder.prototype.encoding = function (value) {
        this.setFlag("--encoding", value);
        return this;
    };
    /** Specifies the method used for the request. */
    az_devops_invoke_command_builder.prototype.httpMethod = function (value) {
        this.setFlag("--http-method", value);
        return this;
    };
    /** Path and file name to the file that contains the contents of the request. */
    az_devops_invoke_command_builder.prototype.inFile = function (value) {
        this.setFlag("--in-file", value);
        return this;
    };
    /** Specifies the content type of the request. */
    az_devops_invoke_command_builder.prototype.mediaType = function (value) {
        this.setFlag("--media-type", value);
        return this;
    };
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    az_devops_invoke_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Path and file name to the file  for which this function saves the response body. */
    az_devops_invoke_command_builder.prototype.outFile = function (value) {
        this.setFlag("--out-file", value);
        return this;
    };
    /** Specifies the list of query parameters. */
    az_devops_invoke_command_builder.prototype.queryParameters = function (value) {
        this.setFlag("--query-parameters", value);
        return this;
    };
    /** The name of the resource to operate on. */
    az_devops_invoke_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Specifies the list of route parameters. */
    az_devops_invoke_command_builder.prototype.routeParameters = function (value) {
        this.setFlag("--route-parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_invoke_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_invoke_command_builder;
}(base_1.CommandBuilder));
/**
 * Set the credential (PAT) to use for a particular organization.
 *
 * Syntax:
 * ```
 * az devops login [--org]
 *                 [--subscription]
 * ```
 */
var az_devops_login_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_login_command_builder, _super);
    function az_devops_login_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Azure DevOps organization URL. Example: <a href="https://dev.azure.com/MyOrganizationName">https://dev.azure.com/MyOrganizationName</a>. */
    az_devops_login_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_login_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_login_command_builder;
}(base_1.CommandBuilder));
/**
 * Clear the credential for all or a particular organization.
 *
 * Syntax:
 * ```
 * az devops logout [--org]
 *                  [--subscription]
 * ```
 */
var az_devops_logout_command_builder = /** @class */ (function (_super) {
    __extends(az_devops_logout_command_builder, _super);
    function az_devops_logout_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Azure DevOps organization URL. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. If no organization is specified, all organizations will be logged out. */
    az_devops_logout_command_builder.prototype.organization = function (value) {
        this.setFlag("--organization", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_devops_logout_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_devops_logout_command_builder;
}(base_1.CommandBuilder));
