import { CommandBuilder } from '../base';
import { az_devops_admin_banner_add_command_result } from './models/az_devops_admin_banner_add_command_result';
import { az_devops_admin_banner_list_command_result } from './models/az_devops_admin_banner_list_command_result';
import { az_devops_admin_banner_remove_command_result } from './models/az_devops_admin_banner_remove_command_result';
import { az_devops_admin_banner_show_command_result } from './models/az_devops_admin_banner_show_command_result';
import { az_devops_admin_banner_update_command_result } from './models/az_devops_admin_banner_update_command_result';
import { az_devops_extension_disable_command_result } from './models/az_devops_extension_disable_command_result';
import { az_devops_extension_enable_command_result } from './models/az_devops_extension_enable_command_result';
import { az_devops_extension_install_command_result } from './models/az_devops_extension_install_command_result';
import { az_devops_extension_list_command_result } from './models/az_devops_extension_list_command_result';
import { az_devops_extension_search_command_result } from './models/az_devops_extension_search_command_result';
import { az_devops_extension_show_command_result } from './models/az_devops_extension_show_command_result';
import { az_devops_extension_uninstall_command_result } from './models/az_devops_extension_uninstall_command_result';
import { az_devops_project_create_command_result } from './models/az_devops_project_create_command_result';
import { az_devops_project_delete_command_result } from './models/az_devops_project_delete_command_result';
import { az_devops_project_list_command_result } from './models/az_devops_project_list_command_result';
import { az_devops_project_show_command_result } from './models/az_devops_project_show_command_result';
import { az_devops_security_group_membership_add_command_result } from './models/az_devops_security_group_membership_add_command_result';
import { az_devops_security_group_membership_list_command_result } from './models/az_devops_security_group_membership_list_command_result';
import { az_devops_security_group_membership_remove_command_result } from './models/az_devops_security_group_membership_remove_command_result';
import { az_devops_security_group_create_command_result } from './models/az_devops_security_group_create_command_result';
import { az_devops_security_group_delete_command_result } from './models/az_devops_security_group_delete_command_result';
import { az_devops_security_group_list_command_result } from './models/az_devops_security_group_list_command_result';
import { az_devops_security_group_show_command_result } from './models/az_devops_security_group_show_command_result';
import { az_devops_security_group_update_command_result } from './models/az_devops_security_group_update_command_result';
import { az_devops_security_permission_namespace_list_command_result } from './models/az_devops_security_permission_namespace_list_command_result';
import { az_devops_security_permission_namespace_show_command_result } from './models/az_devops_security_permission_namespace_show_command_result';
import { az_devops_security_permission_list_command_result } from './models/az_devops_security_permission_list_command_result';
import { az_devops_security_permission_reset_command_result } from './models/az_devops_security_permission_reset_command_result';
import { az_devops_security_permission_reset_all_command_result } from './models/az_devops_security_permission_reset_all_command_result';
import { az_devops_security_permission_show_command_result } from './models/az_devops_security_permission_show_command_result';
import { az_devops_security_permission_update_command_result } from './models/az_devops_security_permission_update_command_result';
import { az_devops_service_endpoint_azurerm_create_command_result } from './models/az_devops_service_endpoint_azurerm_create_command_result';
import { az_devops_service_endpoint_github_create_command_result } from './models/az_devops_service_endpoint_github_create_command_result';
import { az_devops_service_endpoint_create_command_result } from './models/az_devops_service_endpoint_create_command_result';
import { az_devops_service_endpoint_delete_command_result } from './models/az_devops_service_endpoint_delete_command_result';
import { az_devops_service_endpoint_list_command_result } from './models/az_devops_service_endpoint_list_command_result';
import { az_devops_service_endpoint_show_command_result } from './models/az_devops_service_endpoint_show_command_result';
import { az_devops_service_endpoint_update_command_result } from './models/az_devops_service_endpoint_update_command_result';
import { az_devops_team_create_command_result } from './models/az_devops_team_create_command_result';
import { az_devops_team_delete_command_result } from './models/az_devops_team_delete_command_result';
import { az_devops_team_list_command_result } from './models/az_devops_team_list_command_result';
import { az_devops_team_list_member_command_result } from './models/az_devops_team_list_member_command_result';
import { az_devops_team_show_command_result } from './models/az_devops_team_show_command_result';
import { az_devops_team_update_command_result } from './models/az_devops_team_update_command_result';
import { az_devops_user_add_command_result } from './models/az_devops_user_add_command_result';
import { az_devops_user_list_command_result } from './models/az_devops_user_list_command_result';
import { az_devops_user_remove_command_result } from './models/az_devops_user_remove_command_result';
import { az_devops_user_show_command_result } from './models/az_devops_user_show_command_result';
import { az_devops_user_update_command_result } from './models/az_devops_user_update_command_result';
import { az_devops_wiki_page_create_command_result } from './models/az_devops_wiki_page_create_command_result';
import { az_devops_wiki_page_delete_command_result } from './models/az_devops_wiki_page_delete_command_result';
import { az_devops_wiki_page_show_command_result } from './models/az_devops_wiki_page_show_command_result';
import { az_devops_wiki_page_update_command_result } from './models/az_devops_wiki_page_update_command_result';
import { az_devops_wiki_create_command_result } from './models/az_devops_wiki_create_command_result';
import { az_devops_wiki_delete_command_result } from './models/az_devops_wiki_delete_command_result';
import { az_devops_wiki_list_command_result } from './models/az_devops_wiki_list_command_result';
import { az_devops_wiki_show_command_result } from './models/az_devops_wiki_show_command_result';
import { az_devops_configure_command_result } from './models/az_devops_configure_command_result';
import { az_devops_feedback_command_result } from './models/az_devops_feedback_command_result';
import { az_devops_invoke_command_result } from './models/az_devops_invoke_command_result';
import { az_devops_login_command_result } from './models/az_devops_login_command_result';
import { az_devops_logout_command_result } from './models/az_devops_logout_command_result';
/** Manage organization banner. */
export declare class az_devops_admin_banner {
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
    static add(message: string): az_devops_admin_banner_add_command_builder;
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
    static list(): az_devops_admin_banner_list_command_builder;
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
    static remove(id: string): az_devops_admin_banner_remove_command_builder;
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
    static show(id: string): az_devops_admin_banner_show_command_builder;
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
    static update(id: string): az_devops_admin_banner_update_command_builder;
}
/** Manage administration operations. */
export declare class az_devops_admin {
}
/** Manage extensions. */
export declare class az_devops_extension {
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
    static disable(extensionId: string, publisherId: string): az_devops_extension_disable_command_builder;
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
    static enable(extensionId: string, publisherId: string): az_devops_extension_enable_command_builder;
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
    static install(extensionId: string, publisherId: string): az_devops_extension_install_command_builder;
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
    static list(): az_devops_extension_list_command_builder;
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
    static search(searchQuery: string): az_devops_extension_search_command_builder;
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
    static show(extensionId: string, publisherId: string): az_devops_extension_show_command_builder;
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
    static uninstall(extensionId: string, publisherId: string): az_devops_extension_uninstall_command_builder;
}
/** Manage team projects. */
export declare class az_devops_project {
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
    static create(name: string): az_devops_project_create_command_builder;
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
    static delete(id: string): az_devops_project_delete_command_builder;
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
    static list(): az_devops_project_list_command_builder;
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
    static show(project: string): az_devops_project_show_command_builder;
}
/** Manage memberships for security groups. */
export declare class az_devops_security_group_membership {
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
    static add(groupId: string, memberId: string): az_devops_security_group_membership_add_command_builder;
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
    static list(id: string): az_devops_security_group_membership_list_command_builder;
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
    static remove(groupId: string, memberId: string): az_devops_security_group_membership_remove_command_builder;
}
/** Manage security groups. */
export declare class az_devops_security_group {
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
    static create(): az_devops_security_group_create_command_builder;
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
    static delete(id: string): az_devops_security_group_delete_command_builder;
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
    static list(): az_devops_security_group_list_command_builder;
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
    static show(id: string): az_devops_security_group_show_command_builder;
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
    static update(id: string): az_devops_security_group_update_command_builder;
}
/** Manage security namespaces. */
export declare class az_devops_security_permission_namespace {
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
    static list(): az_devops_security_permission_namespace_list_command_builder;
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
    static show(namespaceId: string): az_devops_security_permission_namespace_show_command_builder;
}
/** Manage security permissions. */
export declare class az_devops_security_permission {
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
    static list(namespaceId: string, subject: string): az_devops_security_permission_list_command_builder;
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
    static reset(namespaceId: string, permissionBit: string, subject: string, token: string): az_devops_security_permission_reset_command_builder;
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
    static reset_all(namespaceId: string, subject: string, token: string): az_devops_security_permission_reset_all_command_builder;
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
    static show(namespaceId: string, subject: string, token: string): az_devops_security_permission_show_command_builder;
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
    static update(namespaceId: string, subject: string, token: string): az_devops_security_permission_update_command_builder;
}
/** Manage security related operations. */
export declare class az_devops_security {
}
/** Manage Azure RM service endpoints/connections. */
export declare class az_devops_service_endpoint_azurerm {
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
    static create(azureRmServicePrincipalId: string, azureRmSubscriptionId: string, azureRmSubscriptionName: string, azureRmTenantId: string, name: string): az_devops_service_endpoint_azurerm_create_command_builder;
}
/** Manage GitHub service endpoints/connections. */
export declare class az_devops_service_endpoint_github {
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
    static create(githubUrl: string, name: string): az_devops_service_endpoint_github_create_command_builder;
}
/** Manage service endpoints/connections. */
export declare class az_devops_service_endpoint {
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
    static create(serviceEndpointConfiguration: string): az_devops_service_endpoint_create_command_builder;
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
    static delete(id: string): az_devops_service_endpoint_delete_command_builder;
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
    static list(): az_devops_service_endpoint_list_command_builder;
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
    static show(id: string): az_devops_service_endpoint_show_command_builder;
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
    static update(id: string): az_devops_service_endpoint_update_command_builder;
}
/** Manage teams. */
export declare class az_devops_team {
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
    static create(name: string): az_devops_team_create_command_builder;
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
    static delete(id: string): az_devops_team_delete_command_builder;
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
    static list(): az_devops_team_list_command_builder;
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
    static list_member(team: string): az_devops_team_list_member_command_builder;
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
    static show(team: string): az_devops_team_show_command_builder;
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
    static update(team: string): az_devops_team_update_command_builder;
}
/** Manage users. */
export declare class az_devops_user {
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
    static add(emailId: string, licenseType: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'): az_devops_user_add_command_builder;
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
    static list(): az_devops_user_list_command_builder;
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
    static remove(user: string): az_devops_user_remove_command_builder;
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
    static show(user: string): az_devops_user_show_command_builder;
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
    static update(licenseType: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder', user: string): az_devops_user_update_command_builder;
}
/** Manage wiki pages. */
export declare class az_devops_wiki_page {
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
    static create(path: string, wiki: string): az_devops_wiki_page_create_command_builder;
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
    static delete(path: string, wiki: string): az_devops_wiki_page_delete_command_builder;
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
    static show(path: string, wiki: string): az_devops_wiki_page_show_command_builder;
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
    static update(path: string, version: string, wiki: string): az_devops_wiki_page_update_command_builder;
}
/** Manage wikis. */
export declare class az_devops_wiki {
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
    static create(): az_devops_wiki_create_command_builder;
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
    static delete(wiki: string): az_devops_wiki_delete_command_builder;
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
    static list(): az_devops_wiki_list_command_builder;
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
    static show(wiki: string): az_devops_wiki_show_command_builder;
}
/** Manage Azure DevOps organization level operations. */
export declare class az_devops {
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
    static configure(): az_devops_configure_command_builder;
    /**
     * Displays information on how to provide feedback to the Azure DevOps CLI team.
     *
     * Syntax:
     * ```
     * az devops feedback [--subscription]
     * ```
     */
    static feedback(): az_devops_feedback_command_builder;
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
    static invoke(): az_devops_invoke_command_builder;
    /**
     * Set the credential (PAT) to use for a particular organization.
     *
     * Syntax:
     * ```
     * az devops login [--org]
     *                 [--subscription]
     * ```
     */
    static login(): az_devops_login_command_builder;
    /**
     * Clear the credential for all or a particular organization.
     *
     * Syntax:
     * ```
     * az devops logout [--org]
     *                  [--subscription]
     * ```
     */
    static logout(): az_devops_logout_command_builder;
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
declare class az_devops_admin_banner_add_command_builder extends CommandBuilder<az_devops_admin_banner_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, message: string);
    /** Message (string) to show in the banner. */
    message(value: string): az_devops_admin_banner_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_add_command_builder;
    /** Date/time when the banner should no longer be presented to users. If not set, the banner does not automatically expire and must be removed with the remove command. Example : "2019-06-10 17:21:00 UTC", "2019-06-10". */
    expiration(value: string): az_devops_admin_banner_add_command_builder;
    /** Identifier for the new banner. This identifier is needed to change or remove the message later. A unique identifier is automatically created if one is not specified. */
    id(value: string): az_devops_admin_banner_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_add_command_builder;
    /** Type of banner to present. Defaults is "info". */
    type(value: 'error' | 'info' | 'warning'): az_devops_admin_banner_add_command_builder;
}
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
declare class az_devops_admin_banner_list_command_builder extends CommandBuilder<az_devops_admin_banner_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_admin_banner_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_list_command_builder;
}
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
declare class az_devops_admin_banner_remove_command_builder extends CommandBuilder<az_devops_admin_banner_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the banner to remove. */
    id(value: string): az_devops_admin_banner_remove_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_remove_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_remove_command_builder;
}
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
declare class az_devops_admin_banner_show_command_builder extends CommandBuilder<az_devops_admin_banner_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier for the banner. */
    id(value: string): az_devops_admin_banner_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_admin_banner_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_show_command_builder;
}
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
declare class az_devops_admin_banner_update_command_builder extends CommandBuilder<az_devops_admin_banner_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the banner to update. */
    id(value: string): az_devops_admin_banner_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_update_command_builder;
    /** Date/time when the banner should no longer be presented to users. To unset the expiration for the banner, supply an empty value to this argument. Example : "2019-06-10 17:21:00 UTC", "2019-06-10". */
    expiration(value: string): az_devops_admin_banner_update_command_builder;
    /** Message (string) to show in the banner. */
    message(value: string): az_devops_admin_banner_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_update_command_builder;
    /** Type of banner to present. Defaults is "info". */
    type(value: 'error' | 'info' | 'warning'): az_devops_admin_banner_update_command_builder;
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
declare class az_devops_extension_disable_command_builder extends CommandBuilder<az_devops_extension_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string);
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_disable_command_builder;
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_disable_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_disable_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_disable_command_builder;
}
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
declare class az_devops_extension_enable_command_builder extends CommandBuilder<az_devops_extension_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string);
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_enable_command_builder;
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_enable_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_enable_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_enable_command_builder;
}
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
declare class az_devops_extension_install_command_builder extends CommandBuilder<az_devops_extension_install_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string);
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_install_command_builder;
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_install_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_install_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_install_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_install_command_builder;
}
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
declare class az_devops_extension_list_command_builder extends CommandBuilder<az_devops_extension_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_list_command_builder;
    /** Include built in extensions. */
    includeBuiltIn(value: boolean): az_devops_extension_list_command_builder;
    /** Include disabled extensions. */
    includeDisabled(value: boolean): az_devops_extension_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_extension_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_list_command_builder;
}
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
declare class az_devops_extension_search_command_builder extends CommandBuilder<az_devops_extension_search_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, searchQuery: string);
    /** Search term. */
    searchQuery(value: string): az_devops_extension_search_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_search_command_builder;
}
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
declare class az_devops_extension_show_command_builder extends CommandBuilder<az_devops_extension_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string);
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_show_command_builder;
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_extension_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_show_command_builder;
}
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
declare class az_devops_extension_uninstall_command_builder extends CommandBuilder<az_devops_extension_uninstall_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string);
    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_uninstall_command_builder;
    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_uninstall_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_uninstall_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_uninstall_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_uninstall_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_extension_uninstall_command_builder;
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
declare class az_devops_project_create_command_builder extends CommandBuilder<az_devops_project_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the new project. */
    name(value: string): az_devops_project_create_command_builder;
    /** Description for the new project. */
    description(value: string): az_devops_project_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_project_create_command_builder;
    /** Open the team project in the default web browser. */
    open(value: string): az_devops_project_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_project_create_command_builder;
    /** Process to use. Default if not specified. */
    process(value: string): az_devops_project_create_command_builder;
    /** Source control type of the initial code repository created. */
    sourceControl(value: 'git' | 'tfvc'): az_devops_project_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_project_create_command_builder;
    /** Project visibility. */
    visibility(value: 'private' | 'public'): az_devops_project_create_command_builder;
}
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
declare class az_devops_project_delete_command_builder extends CommandBuilder<az_devops_project_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** The id of the project to delete. */
    id(value: string): az_devops_project_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_project_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_project_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_project_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_project_delete_command_builder;
}
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
declare class az_devops_project_list_command_builder extends CommandBuilder<az_devops_project_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Continuation token. This can be retrived from previous run of this command if more results are present. */
    continuationToken(value: string): az_devops_project_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_project_list_command_builder;
    /** Whether to get default team image url or not. */
    getDefaultTeamImageUrl(value: boolean): az_devops_project_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_project_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_project_list_command_builder;
    /** Number of results to skip. */
    skip(value: string): az_devops_project_list_command_builder;
    /** State filter. */
    stateFilter(value: 'all' | 'createPending' | 'deleted' | 'deleting' | 'new' | 'unchanged' | 'wellFormed'): az_devops_project_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_project_list_command_builder;
    /** Maximum number of results to list. */
    top(value: string): az_devops_project_list_command_builder;
}
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
declare class az_devops_project_show_command_builder extends CommandBuilder<az_devops_project_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, project: string);
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_project_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_project_show_command_builder;
    /** Open the team project in the default web browser. */
    open(value: string): az_devops_project_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_project_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_project_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_project_show_command_builder;
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
declare class az_devops_security_group_membership_add_command_builder extends CommandBuilder<az_devops_security_group_membership_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string, memberId: string);
    /** Descriptor of the group to which member needs to be added. */
    groupId(value: string): az_devops_security_group_membership_add_command_builder;
    /** Descriptor of the group or Email Id of the user to be added. User should already be a part of the organization. Use `az devops user add` command to add an user to organization. */
    memberId(value: string): az_devops_security_group_membership_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_membership_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_membership_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_membership_add_command_builder;
}
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
declare class az_devops_security_group_membership_list_command_builder extends CommandBuilder<az_devops_security_group_membership_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Group descriptor or User Email whose membership details are required. */
    id(value: string): az_devops_security_group_membership_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_membership_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_membership_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_group_membership_list_command_builder;
    /** Get member of/members for this group. */
    relationship(value: 'memberof' | 'members'): az_devops_security_group_membership_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_membership_list_command_builder;
}
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
declare class az_devops_security_group_membership_remove_command_builder extends CommandBuilder<az_devops_security_group_membership_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string, memberId: string);
    /** Descriptor of the group from which member needs to be removed. */
    groupId(value: string): az_devops_security_group_membership_remove_command_builder;
    /** Descriptor of the group or Email Id of the user to be removed. */
    memberId(value: string): az_devops_security_group_membership_remove_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_membership_remove_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_membership_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_membership_remove_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_security_group_membership_remove_command_builder;
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
declare class az_devops_security_group_create_command_builder extends CommandBuilder<az_devops_security_group_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Description of Azure DevOps group. */
    description(value: string): az_devops_security_group_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_create_command_builder;
    /** Create new group using the mail address as a reference to an existing group from an external AD or AAD backed provider. Required if name or origin-id is missing. */
    emailId(value: string): az_devops_security_group_create_command_builder;
    /** A comma separated list of descriptors referencing groups you want the newly created group to join. */
    groups(value: string): az_devops_security_group_create_command_builder;
    /** Name of Azure DevOps group. */
    name(value: string): az_devops_security_group_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_create_command_builder;
    /** Create new group using the OriginID as a reference to an existing group from an external AD or AAD backed provider. Required if name or email-id is missing. */
    originId(value: string): az_devops_security_group_create_command_builder;
    /** Name or ID of the project in which Azure DevOps group should be created. */
    project(value: string): az_devops_security_group_create_command_builder;
    /** Create group at project or organization level. */
    scope(value: 'organization' | 'project'): az_devops_security_group_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_create_command_builder;
}
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
declare class az_devops_security_group_delete_command_builder extends CommandBuilder<az_devops_security_group_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Descriptor of the group. */
    id(value: string): az_devops_security_group_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_security_group_delete_command_builder;
}
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
declare class az_devops_security_group_list_command_builder extends CommandBuilder<az_devops_security_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** If there are more results that can't be returned in a single page, the result set will contain a continuation token for retrieval of the next set of results. */
    continuationToken(value: string): az_devops_security_group_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_list_command_builder;
    /** List groups for a particular project. */
    project(value: string): az_devops_security_group_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_group_list_command_builder;
    /** List groups at project or organization level. */
    scope(value: 'organization' | 'project'): az_devops_security_group_list_command_builder;
    /** A comma separated list of user subject subtypes to reduce the retrieved results. You can give initial part of descriptor [before the dot] as a filter e.g. vssgp,aadgp. */
    subjectTypes(value: string): az_devops_security_group_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_list_command_builder;
}
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
declare class az_devops_security_group_show_command_builder extends CommandBuilder<az_devops_security_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Descriptor of the group. */
    id(value: string): az_devops_security_group_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_group_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_show_command_builder;
}
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
declare class az_devops_security_group_update_command_builder extends CommandBuilder<az_devops_security_group_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Descriptor of the group. */
    id(value: string): az_devops_security_group_update_command_builder;
    /** New description for Azure DevOps group. */
    description(value: string): az_devops_security_group_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_update_command_builder;
    /** New name for Azure DevOps group. */
    name(value: string): az_devops_security_group_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_update_command_builder;
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
declare class az_devops_security_permission_namespace_list_command_builder extends CommandBuilder<az_devops_security_permission_namespace_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_namespace_list_command_builder;
    /** If true, retrieve only local security namespaces. */
    localOnly(value: string): az_devops_security_permission_namespace_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_namespace_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_permission_namespace_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_namespace_list_command_builder;
}
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
declare class az_devops_security_permission_namespace_show_command_builder extends CommandBuilder<az_devops_security_permission_namespace_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string);
    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_namespace_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_namespace_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_namespace_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_permission_namespace_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_namespace_show_command_builder;
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
declare class az_devops_security_permission_list_command_builder extends CommandBuilder<az_devops_security_permission_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, subject: string);
    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_list_command_builder;
    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_list_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_permission_list_command_builder;
    /** If true and this is a hierarchical namespace, return child ACLs of the specified token. */
    recurse(value: string): az_devops_security_permission_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_list_command_builder;
    /** Security token. */
    token(value: string): az_devops_security_permission_list_command_builder;
}
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
declare class az_devops_security_permission_reset_command_builder extends CommandBuilder<az_devops_security_permission_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, permissionBit: string, subject: string, token: string);
    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_reset_command_builder;
    /** Permission bit or addition of permission bits which needs to be reset                         for given user/group and token. */
    permissionBit(value: string): az_devops_security_permission_reset_command_builder;
    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_reset_command_builder;
    /** Security token. */
    token(value: string): az_devops_security_permission_reset_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_reset_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_reset_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_reset_command_builder;
}
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
declare class az_devops_security_permission_reset_all_command_builder extends CommandBuilder<az_devops_security_permission_reset_all_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, subject: string, token: string);
    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_reset_all_command_builder;
    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_reset_all_command_builder;
    /** Security token. */
    token(value: string): az_devops_security_permission_reset_all_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_reset_all_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_reset_all_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_reset_all_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_security_permission_reset_all_command_builder;
}
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
declare class az_devops_security_permission_show_command_builder extends CommandBuilder<az_devops_security_permission_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, subject: string, token: string);
    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_show_command_builder;
    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_show_command_builder;
    /** Security token. */
    token(value: string): az_devops_security_permission_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_permission_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_show_command_builder;
}
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
declare class az_devops_security_permission_update_command_builder extends CommandBuilder<az_devops_security_permission_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, subject: string, token: string);
    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_update_command_builder;
    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_update_command_builder;
    /** Security token. */
    token(value: string): az_devops_security_permission_update_command_builder;
    /** Allow bit or addition of bits. Required if --deny-bit is missing. */
    allowBit(value: string): az_devops_security_permission_update_command_builder;
    /** Deny bit or addition of bits. Required if --allow-bit is missing. */
    denyBit(value: string): az_devops_security_permission_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_update_command_builder;
    /** If set, the existing ACE has its allow and deny merged with                          the incoming ACE's allow and deny. If unset, the existing ACE is displaced. */
    merge(value: boolean): az_devops_security_permission_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_update_command_builder;
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
declare class az_devops_service_endpoint_azurerm_create_command_builder extends CommandBuilder<az_devops_service_endpoint_azurerm_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, azureRmServicePrincipalId: string, azureRmSubscriptionId: string, azureRmSubscriptionName: string, azureRmTenantId: string, name: string);
    /** Service principal id for creating azure rm service endpoint. */
    azureRmServicePrincipalId(value: string): az_devops_service_endpoint_azurerm_create_command_builder;
    /** Subscription id for azure rm service endpoint. */
    azureRmSubscriptionId(value: string): az_devops_service_endpoint_azurerm_create_command_builder;
    /** Name of azure subscription for azure rm service endpoint. */
    azureRmSubscriptionName(value: string): az_devops_service_endpoint_azurerm_create_command_builder;
    /** Tenant id for creating azure rm service endpoint. */
    azureRmTenantId(value: string): az_devops_service_endpoint_azurerm_create_command_builder;
    /** Name of service endpoint to create. */
    name(value: string): az_devops_service_endpoint_azurerm_create_command_builder;
    /** Path to (.pem) which is certificate. Create using command "openssl pkcs12 -in file.pfx -out file.pem -nodes -password pass:<password_here>". More details : <a href="https://aka.ms/azure-devops-cli-azurerm-service-endpoint">https://aka.ms/azure-devops-cli-azurerm-service-endpoint</a>. */
    azureRmServicePrincipalCertificatePath(value: string): az_devops_service_endpoint_azurerm_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_azurerm_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_azurerm_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_azurerm_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_azurerm_create_command_builder;
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
declare class az_devops_service_endpoint_github_create_command_builder extends CommandBuilder<az_devops_service_endpoint_github_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, githubUrl: string, name: string);
    /** Url for github for creating service endpoint. */
    githubUrl(value: string): az_devops_service_endpoint_github_create_command_builder;
    /** Name of service endpoint to create. */
    name(value: string): az_devops_service_endpoint_github_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_github_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_github_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_github_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_github_create_command_builder;
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
declare class az_devops_service_endpoint_create_command_builder extends CommandBuilder<az_devops_service_endpoint_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceEndpointConfiguration: string);
    /** Configuration file with service endpoint request. */
    serviceEndpointConfiguration(value: string): az_devops_service_endpoint_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_create_command_builder;
    /** Encoding of the input file. */
    encoding(value: 'ascii' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_devops_service_endpoint_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_create_command_builder;
}
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
declare class az_devops_service_endpoint_delete_command_builder extends CommandBuilder<az_devops_service_endpoint_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Id of the service endpoint to delete. */
    id(value: string): az_devops_service_endpoint_delete_command_builder;
    /** Specific to AzureRM endpoint created in Automatic flow. When it is specified, this will also delete corresponding AAD application in Azure. */
    deep(value: string): az_devops_service_endpoint_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_service_endpoint_delete_command_builder;
}
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
declare class az_devops_service_endpoint_list_command_builder extends CommandBuilder<az_devops_service_endpoint_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_service_endpoint_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_list_command_builder;
}
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
declare class az_devops_service_endpoint_show_command_builder extends CommandBuilder<az_devops_service_endpoint_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the service endpoint. */
    id(value: string): az_devops_service_endpoint_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_service_endpoint_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_show_command_builder;
}
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
declare class az_devops_service_endpoint_update_command_builder extends CommandBuilder<az_devops_service_endpoint_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** ID of the service endpoint. */
    id(value: string): az_devops_service_endpoint_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_update_command_builder;
    /** Allow all pipelines to access this service endpoint. */
    enableForAll(value: boolean): az_devops_service_endpoint_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_update_command_builder;
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
declare class az_devops_team_create_command_builder extends CommandBuilder<az_devops_team_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the new team. */
    name(value: string): az_devops_team_create_command_builder;
    /** Description of the new team. */
    description(value: string): az_devops_team_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_create_command_builder;
}
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
declare class az_devops_team_delete_command_builder extends CommandBuilder<az_devops_team_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** The id of the team to delete. */
    id(value: string): az_devops_team_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_team_delete_command_builder;
}
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
declare class az_devops_team_list_command_builder extends CommandBuilder<az_devops_team_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_team_list_command_builder;
    /** Number of teams to skip. */
    skip(value: string): az_devops_team_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_list_command_builder;
    /** Maximum number of teams to return. */
    top(value: string): az_devops_team_list_command_builder;
}
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
declare class az_devops_team_list_member_command_builder extends CommandBuilder<az_devops_team_list_member_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string);
    /** The name or id of the team to show members of. */
    team(value: string): az_devops_team_list_member_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_list_member_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_list_member_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_list_member_command_builder;
    /** Number of members to skip. */
    skip(value: string): az_devops_team_list_member_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_list_member_command_builder;
    /** Maximum number of members to return. */
    top(value: string): az_devops_team_list_member_command_builder;
}
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
declare class az_devops_team_show_command_builder extends CommandBuilder<az_devops_team_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string);
    /** The name or id of the team to show. */
    team(value: string): az_devops_team_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_team_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_show_command_builder;
}
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
declare class az_devops_team_update_command_builder extends CommandBuilder<az_devops_team_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string);
    /** The name or id of the team to be updated. */
    team(value: string): az_devops_team_update_command_builder;
    /** New description of the team. */
    description(value: string): az_devops_team_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_update_command_builder;
    /** New name of the team. */
    name(value: string): az_devops_team_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_update_command_builder;
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
declare class az_devops_user_add_command_builder extends CommandBuilder<az_devops_user_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, emailId: string, licenseType: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder');
    /** Email ID of the user. */
    emailId(value: string): az_devops_user_add_command_builder;
    /** License type for the user. */
    licenseType(value: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'): az_devops_user_add_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_add_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_add_command_builder;
    /** Whether to send email invite for new user or not. */
    sendEmailInvite(value: boolean): az_devops_user_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_add_command_builder;
}
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
declare class az_devops_user_list_command_builder extends CommandBuilder<az_devops_user_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_user_list_command_builder;
    /** Offset: Number of records to skip. */
    skip(value: string): az_devops_user_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_list_command_builder;
    /** Maximum number of users to return. Max value is 10000. */
    top(value: string): az_devops_user_list_command_builder;
}
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
declare class az_devops_user_remove_command_builder extends CommandBuilder<az_devops_user_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, user: string);
    /** Email ID or ID of the user. */
    user(value: string): az_devops_user_remove_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_remove_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_remove_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_user_remove_command_builder;
}
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
declare class az_devops_user_show_command_builder extends CommandBuilder<az_devops_user_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, user: string);
    /** Email ID or ID of the user. */
    user(value: string): az_devops_user_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_user_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_show_command_builder;
}
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
declare class az_devops_user_update_command_builder extends CommandBuilder<az_devops_user_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, licenseType: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder', user: string);
    /** License type for the user. */
    licenseType(value: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'): az_devops_user_update_command_builder;
    /** Email ID or ID of the user. */
    user(value: string): az_devops_user_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_update_command_builder;
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
declare class az_devops_wiki_page_create_command_builder extends CommandBuilder<az_devops_wiki_page_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, wiki: string);
    /** Path of the wiki page. */
    path(value: string): az_devops_wiki_page_create_command_builder;
    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_page_create_command_builder;
    /** Comment in the commit message of file add operation. */
    comment(value: string): az_devops_wiki_page_create_command_builder;
    /** Content of the wiki page. Ignored if --file-path is specified. */
    content(value: string): az_devops_wiki_page_create_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_page_create_command_builder;
    /** Encoding of the file. Used in conjunction with --file-path parameter. */
    encoding(value: 'ascii' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_devops_wiki_page_create_command_builder;
    /** Path of the file input if content is specified in the file. */
    filePath(value: string): az_devops_wiki_page_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_page_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_page_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_page_create_command_builder;
}
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
declare class az_devops_wiki_page_delete_command_builder extends CommandBuilder<az_devops_wiki_page_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, wiki: string);
    /** Path of the wiki page. */
    path(value: string): az_devops_wiki_page_delete_command_builder;
    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_page_delete_command_builder;
    /** Comment in the commit message of delete operation. */
    comment(value: string): az_devops_wiki_page_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_page_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_page_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_page_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_page_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_wiki_page_delete_command_builder;
}
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
declare class az_devops_wiki_page_show_command_builder extends CommandBuilder<az_devops_wiki_page_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, wiki: string);
    /** Path of the wiki page. */
    path(value: string): az_devops_wiki_page_show_command_builder;
    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_page_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_page_show_command_builder;
    /** Include content of the page. */
    includeContent(value: string): az_devops_wiki_page_show_command_builder;
    /** Open the wiki page in your web browser. */
    open(value: string): az_devops_wiki_page_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_page_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_page_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_wiki_page_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_page_show_command_builder;
    /** Version (ETag) of the wiki page. */
    version(value: string): az_devops_wiki_page_show_command_builder;
}
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
declare class az_devops_wiki_page_update_command_builder extends CommandBuilder<az_devops_wiki_page_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, version: string, wiki: string);
    /** Path of the wiki page. */
    path(value: string): az_devops_wiki_page_update_command_builder;
    /** Version (ETag) of file to edit. */
    version(value: string): az_devops_wiki_page_update_command_builder;
    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_page_update_command_builder;
    /** Comment in the commit message of file edit operation. */
    comment(value: string): az_devops_wiki_page_update_command_builder;
    /** Content of the wiki page. Ignored if --file-path is specified. */
    content(value: string): az_devops_wiki_page_update_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_page_update_command_builder;
    /** Encoding of the file. Used in conjunction with --file-path parameter. */
    encoding(value: 'ascii' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_devops_wiki_page_update_command_builder;
    /** Path of the file input if content is specified in the file. */
    filePath(value: string): az_devops_wiki_page_update_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_page_update_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_page_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_page_update_command_builder;
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
declare class az_devops_wiki_create_command_builder extends CommandBuilder<az_devops_wiki_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_create_command_builder;
    /** [Required for codewiki type] Mapped path of the new wiki e.g. '/' to publish from root of repository. */
    mappedPath(value: string): az_devops_wiki_create_command_builder;
    /** Name of the new wiki. */
    name(value: string): az_devops_wiki_create_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_create_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_create_command_builder;
    /** [Required for codewiki type] Name or ID of the repository to publish the wiki from. */
    repository(value: string): az_devops_wiki_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_create_command_builder;
    /** Type of wiki to create. */
    wikiType(value: 'codewiki' | 'projectwiki'): az_devops_wiki_create_command_builder;
    /** [Required for codewiki type] Repository branch name to publish the code wiki from. */
    version(value: string): az_devops_wiki_create_command_builder;
}
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
declare class az_devops_wiki_delete_command_builder extends CommandBuilder<az_devops_wiki_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, wiki: string);
    /** Name or Id of the wiki to delete. */
    wiki(value: string): az_devops_wiki_delete_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_delete_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_delete_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_wiki_delete_command_builder;
}
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
declare class az_devops_wiki_list_command_builder extends CommandBuilder<az_devops_wiki_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_list_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_list_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_wiki_list_command_builder;
    /** List the wikis at project or organization level. */
    scope(value: 'organization' | 'project'): az_devops_wiki_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_list_command_builder;
}
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
declare class az_devops_wiki_show_command_builder extends CommandBuilder<az_devops_wiki_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, wiki: string);
    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_show_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_show_command_builder;
    /** Open the wiki in your web browser. */
    open(value: string): az_devops_wiki_show_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_show_command_builder;
    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_wiki_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_show_command_builder;
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
declare class az_devops_configure_command_builder extends CommandBuilder<az_devops_configure_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Space separated 'name=value' pairs for common arguments defaults, e.g. '--defaults project=my-project-name organization=https://dev.azure.com/organizationName arg=value'. Use '' to clear the defaults, e.g. --defaults project=''. */
    defaults(value: string): az_devops_configure_command_builder;
    /** Lists the contents of the config file. */
    list(value: string): az_devops_configure_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_configure_command_builder;
    /** Set to 'true' to configure Git aliases global git config file (to enable commands like "git pr list"). Set to 'false' to remove any aliases set by the tool. */
    useGitAliases(value: boolean): az_devops_configure_command_builder;
}
/**
 * Displays information on how to provide feedback to the Azure DevOps CLI team.
 *
 * Syntax:
 * ```
 * az devops feedback [--subscription]
 * ```
 */
declare class az_devops_feedback_command_builder extends CommandBuilder<az_devops_feedback_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_feedback_command_builder;
}
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
declare class az_devops_invoke_command_builder extends CommandBuilder<az_devops_invoke_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Specifies the content type of the response. */
    acceptMediaType(value: string): az_devops_invoke_command_builder;
    /** The version of the API to target. */
    apiVersion(value: string): az_devops_invoke_command_builder;
    /** The area to find the resource. */
    area(value: string): az_devops_invoke_command_builder;
    /** Automatically detect organization. */
    detect(value: boolean): az_devops_invoke_command_builder;
    /** Encoding of the input file. Used in conjunction with --in-file. */
    encoding(value: 'ascii' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_devops_invoke_command_builder;
    /** Specifies the method used for the request. */
    httpMethod(value: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT'): az_devops_invoke_command_builder;
    /** Path and file name to the file that contains the contents of the request. */
    inFile(value: string): az_devops_invoke_command_builder;
    /** Specifies the content type of the request. */
    mediaType(value: string): az_devops_invoke_command_builder;
    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_invoke_command_builder;
    /** Path and file name to the file  for which this function saves the response body. */
    outFile(value: string): az_devops_invoke_command_builder;
    /** Specifies the list of query parameters. */
    queryParameters(value: string): az_devops_invoke_command_builder;
    /** The name of the resource to operate on. */
    resource(value: string): az_devops_invoke_command_builder;
    /** Specifies the list of route parameters. */
    routeParameters(value: string): az_devops_invoke_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_invoke_command_builder;
}
/**
 * Set the credential (PAT) to use for a particular organization.
 *
 * Syntax:
 * ```
 * az devops login [--org]
 *                 [--subscription]
 * ```
 */
declare class az_devops_login_command_builder extends CommandBuilder<az_devops_login_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Azure DevOps organization URL. Example: <a href="https://dev.azure.com/MyOrganizationName">https://dev.azure.com/MyOrganizationName</a>. */
    organization(value: string): az_devops_login_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_login_command_builder;
}
/**
 * Clear the credential for all or a particular organization.
 *
 * Syntax:
 * ```
 * az devops logout [--org]
 *                  [--subscription]
 * ```
 */
declare class az_devops_logout_command_builder extends CommandBuilder<az_devops_logout_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Azure DevOps organization URL. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. If no organization is specified, all organizations will be logged out. */
    organization(value: string): az_devops_logout_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_logout_command_builder;
}
export {};
