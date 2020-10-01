import { CommandBuilder } from '../base';
import { az_devops_admin_banner_add_command_result } from './models/az_devops_admin_banner_add_command_result'
import { az_devops_admin_banner_list_command_result } from './models/az_devops_admin_banner_list_command_result'
import { az_devops_admin_banner_remove_command_result } from './models/az_devops_admin_banner_remove_command_result'
import { az_devops_admin_banner_show_command_result } from './models/az_devops_admin_banner_show_command_result'
import { az_devops_admin_banner_update_command_result } from './models/az_devops_admin_banner_update_command_result'
import { az_devops_extension_disable_command_result } from './models/az_devops_extension_disable_command_result'
import { az_devops_extension_enable_command_result } from './models/az_devops_extension_enable_command_result'
import { az_devops_extension_install_command_result } from './models/az_devops_extension_install_command_result'
import { az_devops_extension_list_command_result } from './models/az_devops_extension_list_command_result'
import { az_devops_extension_search_command_result } from './models/az_devops_extension_search_command_result'
import { az_devops_extension_show_command_result } from './models/az_devops_extension_show_command_result'
import { az_devops_extension_uninstall_command_result } from './models/az_devops_extension_uninstall_command_result'
import { az_devops_project_create_command_result } from './models/az_devops_project_create_command_result'
import { az_devops_project_delete_command_result } from './models/az_devops_project_delete_command_result'
import { az_devops_project_list_command_result } from './models/az_devops_project_list_command_result'
import { az_devops_project_show_command_result } from './models/az_devops_project_show_command_result'
import { az_devops_security_group_membership_add_command_result } from './models/az_devops_security_group_membership_add_command_result'
import { az_devops_security_group_membership_list_command_result } from './models/az_devops_security_group_membership_list_command_result'
import { az_devops_security_group_membership_remove_command_result } from './models/az_devops_security_group_membership_remove_command_result'
import { az_devops_security_group_create_command_result } from './models/az_devops_security_group_create_command_result'
import { az_devops_security_group_delete_command_result } from './models/az_devops_security_group_delete_command_result'
import { az_devops_security_group_list_command_result } from './models/az_devops_security_group_list_command_result'
import { az_devops_security_group_show_command_result } from './models/az_devops_security_group_show_command_result'
import { az_devops_security_group_update_command_result } from './models/az_devops_security_group_update_command_result'
import { az_devops_security_permission_namespace_list_command_result } from './models/az_devops_security_permission_namespace_list_command_result'
import { az_devops_security_permission_namespace_show_command_result } from './models/az_devops_security_permission_namespace_show_command_result'
import { az_devops_security_permission_list_command_result } from './models/az_devops_security_permission_list_command_result'
import { az_devops_security_permission_reset_command_result } from './models/az_devops_security_permission_reset_command_result'
import { az_devops_security_permission_reset_all_command_result } from './models/az_devops_security_permission_reset_all_command_result'
import { az_devops_security_permission_show_command_result } from './models/az_devops_security_permission_show_command_result'
import { az_devops_security_permission_update_command_result } from './models/az_devops_security_permission_update_command_result'
import { az_devops_service_endpoint_azurerm_create_command_result } from './models/az_devops_service_endpoint_azurerm_create_command_result'
import { az_devops_service_endpoint_github_create_command_result } from './models/az_devops_service_endpoint_github_create_command_result'
import { az_devops_service_endpoint_create_command_result } from './models/az_devops_service_endpoint_create_command_result'
import { az_devops_service_endpoint_delete_command_result } from './models/az_devops_service_endpoint_delete_command_result'
import { az_devops_service_endpoint_list_command_result } from './models/az_devops_service_endpoint_list_command_result'
import { az_devops_service_endpoint_show_command_result } from './models/az_devops_service_endpoint_show_command_result'
import { az_devops_service_endpoint_update_command_result } from './models/az_devops_service_endpoint_update_command_result'
import { az_devops_team_create_command_result } from './models/az_devops_team_create_command_result'
import { az_devops_team_delete_command_result } from './models/az_devops_team_delete_command_result'
import { az_devops_team_list_command_result } from './models/az_devops_team_list_command_result'
import { az_devops_team_list_member_command_result } from './models/az_devops_team_list_member_command_result'
import { az_devops_team_show_command_result } from './models/az_devops_team_show_command_result'
import { az_devops_team_update_command_result } from './models/az_devops_team_update_command_result'
import { az_devops_user_add_command_result } from './models/az_devops_user_add_command_result'
import { az_devops_user_list_command_result } from './models/az_devops_user_list_command_result'
import { az_devops_user_remove_command_result } from './models/az_devops_user_remove_command_result'
import { az_devops_user_show_command_result } from './models/az_devops_user_show_command_result'
import { az_devops_user_update_command_result } from './models/az_devops_user_update_command_result'
import { az_devops_wiki_page_create_command_result } from './models/az_devops_wiki_page_create_command_result'
import { az_devops_wiki_page_delete_command_result } from './models/az_devops_wiki_page_delete_command_result'
import { az_devops_wiki_page_show_command_result } from './models/az_devops_wiki_page_show_command_result'
import { az_devops_wiki_page_update_command_result } from './models/az_devops_wiki_page_update_command_result'
import { az_devops_wiki_create_command_result } from './models/az_devops_wiki_create_command_result'
import { az_devops_wiki_delete_command_result } from './models/az_devops_wiki_delete_command_result'
import { az_devops_wiki_list_command_result } from './models/az_devops_wiki_list_command_result'
import { az_devops_wiki_show_command_result } from './models/az_devops_wiki_show_command_result'
import { az_devops_configure_command_result } from './models/az_devops_configure_command_result'
import { az_devops_feedback_command_result } from './models/az_devops_feedback_command_result'
import { az_devops_invoke_command_result } from './models/az_devops_invoke_command_result'
import { az_devops_login_command_result } from './models/az_devops_login_command_result'
import { az_devops_logout_command_result } from './models/az_devops_logout_command_result'

/** Manage organization banner. */
export class az_devops_admin_banner {
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
    static add(message: string): az_devops_admin_banner_add_command_builder {
        return new az_devops_admin_banner_add_command_builder("az devops admin banner add", 'az_devops_admin_banner_add_command_result', message);
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
    static list(): az_devops_admin_banner_list_command_builder {
        return new az_devops_admin_banner_list_command_builder("az devops admin banner list", 'az_devops_admin_banner_list_command_result');
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
    static remove(id: string): az_devops_admin_banner_remove_command_builder {
        return new az_devops_admin_banner_remove_command_builder("az devops admin banner remove", 'az_devops_admin_banner_remove_command_result', id);
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
    static show(id: string): az_devops_admin_banner_show_command_builder {
        return new az_devops_admin_banner_show_command_builder("az devops admin banner show", 'az_devops_admin_banner_show_command_result', id);
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
    static update(id: string): az_devops_admin_banner_update_command_builder {
        return new az_devops_admin_banner_update_command_builder("az devops admin banner update", 'az_devops_admin_banner_update_command_result', id);
    }
}

/** Manage administration operations. */
export class az_devops_admin {
}

/** Manage extensions. */
export class az_devops_extension {
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
    static disable(extensionId: string, publisherId: string): az_devops_extension_disable_command_builder {
        return new az_devops_extension_disable_command_builder("az devops extension disable", 'az_devops_extension_disable_command_result', extensionId, publisherId);
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
    static enable(extensionId: string, publisherId: string): az_devops_extension_enable_command_builder {
        return new az_devops_extension_enable_command_builder("az devops extension enable", 'az_devops_extension_enable_command_result', extensionId, publisherId);
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
    static install(extensionId: string, publisherId: string): az_devops_extension_install_command_builder {
        return new az_devops_extension_install_command_builder("az devops extension install", 'az_devops_extension_install_command_result', extensionId, publisherId);
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
    static list(): az_devops_extension_list_command_builder {
        return new az_devops_extension_list_command_builder("az devops extension list", 'az_devops_extension_list_command_result');
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
    static search(searchQuery: string): az_devops_extension_search_command_builder {
        return new az_devops_extension_search_command_builder("az devops extension search", 'az_devops_extension_search_command_result', searchQuery);
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
    static show(extensionId: string, publisherId: string): az_devops_extension_show_command_builder {
        return new az_devops_extension_show_command_builder("az devops extension show", 'az_devops_extension_show_command_result', extensionId, publisherId);
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
    static uninstall(extensionId: string, publisherId: string): az_devops_extension_uninstall_command_builder {
        return new az_devops_extension_uninstall_command_builder("az devops extension uninstall", 'az_devops_extension_uninstall_command_result', extensionId, publisherId);
    }
}

/** Manage team projects. */
export class az_devops_project {
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
    static create(name: string): az_devops_project_create_command_builder {
        return new az_devops_project_create_command_builder("az devops project create", 'az_devops_project_create_command_result', name);
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
    static delete(id: string): az_devops_project_delete_command_builder {
        return new az_devops_project_delete_command_builder("az devops project delete", 'az_devops_project_delete_command_result', id);
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
    static list(): az_devops_project_list_command_builder {
        return new az_devops_project_list_command_builder("az devops project list", 'az_devops_project_list_command_result');
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
    static show(project: string): az_devops_project_show_command_builder {
        return new az_devops_project_show_command_builder("az devops project show", 'az_devops_project_show_command_result', project);
    }
}

/** Manage memberships for security groups. */
export class az_devops_security_group_membership {
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
    static add(groupId: string, memberId: string): az_devops_security_group_membership_add_command_builder {
        return new az_devops_security_group_membership_add_command_builder("az devops security group membership add", 'az_devops_security_group_membership_add_command_result', groupId, memberId);
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
    static list(id: string): az_devops_security_group_membership_list_command_builder {
        return new az_devops_security_group_membership_list_command_builder("az devops security group membership list", 'az_devops_security_group_membership_list_command_result', id);
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
    static remove(groupId: string, memberId: string): az_devops_security_group_membership_remove_command_builder {
        return new az_devops_security_group_membership_remove_command_builder("az devops security group membership remove", 'az_devops_security_group_membership_remove_command_result', groupId, memberId);
    }
}

/** Manage security groups. */
export class az_devops_security_group {
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
    static create(): az_devops_security_group_create_command_builder {
        return new az_devops_security_group_create_command_builder("az devops security group create", 'az_devops_security_group_create_command_result');
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
    static delete(id: string): az_devops_security_group_delete_command_builder {
        return new az_devops_security_group_delete_command_builder("az devops security group delete", 'az_devops_security_group_delete_command_result', id);
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
    static list(): az_devops_security_group_list_command_builder {
        return new az_devops_security_group_list_command_builder("az devops security group list", 'az_devops_security_group_list_command_result');
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
    static show(id: string): az_devops_security_group_show_command_builder {
        return new az_devops_security_group_show_command_builder("az devops security group show", 'az_devops_security_group_show_command_result', id);
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
    static update(id: string): az_devops_security_group_update_command_builder {
        return new az_devops_security_group_update_command_builder("az devops security group update", 'az_devops_security_group_update_command_result', id);
    }
}

/** Manage security namespaces. */
export class az_devops_security_permission_namespace {
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
    static list(): az_devops_security_permission_namespace_list_command_builder {
        return new az_devops_security_permission_namespace_list_command_builder("az devops security permission namespace list", 'az_devops_security_permission_namespace_list_command_result');
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
    static show(namespaceId: string): az_devops_security_permission_namespace_show_command_builder {
        return new az_devops_security_permission_namespace_show_command_builder("az devops security permission namespace show", 'az_devops_security_permission_namespace_show_command_result', namespaceId);
    }
}

/** Manage security permissions. */
export class az_devops_security_permission {
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
    static list(namespaceId: string, subject: string): az_devops_security_permission_list_command_builder {
        return new az_devops_security_permission_list_command_builder("az devops security permission list", 'az_devops_security_permission_list_command_result', namespaceId, subject);
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
    static reset(namespaceId: string, permissionBit: string, subject: string, token: string): az_devops_security_permission_reset_command_builder {
        return new az_devops_security_permission_reset_command_builder("az devops security permission reset", 'az_devops_security_permission_reset_command_result', namespaceId, permissionBit, subject, token);
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
    static reset_all(namespaceId: string, subject: string, token: string): az_devops_security_permission_reset_all_command_builder {
        return new az_devops_security_permission_reset_all_command_builder("az devops security permission reset-all", 'az_devops_security_permission_reset_all_command_result', namespaceId, subject, token);
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
    static show(namespaceId: string, subject: string, token: string): az_devops_security_permission_show_command_builder {
        return new az_devops_security_permission_show_command_builder("az devops security permission show", 'az_devops_security_permission_show_command_result', namespaceId, subject, token);
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
    static update(namespaceId: string, subject: string, token: string): az_devops_security_permission_update_command_builder {
        return new az_devops_security_permission_update_command_builder("az devops security permission update", 'az_devops_security_permission_update_command_result', namespaceId, subject, token);
    }
}

/** Manage security related operations. */
export class az_devops_security {
}

/** Manage Azure RM service endpoints/connections. */
export class az_devops_service_endpoint_azurerm {
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
    static create(azureRmServicePrincipalId: string, azureRmSubscriptionId: string, azureRmSubscriptionName: string, azureRmTenantId: string, name: string): az_devops_service_endpoint_azurerm_create_command_builder {
        return new az_devops_service_endpoint_azurerm_create_command_builder("az devops service-endpoint azurerm create", 'az_devops_service_endpoint_azurerm_create_command_result', azureRmServicePrincipalId, azureRmSubscriptionId, azureRmSubscriptionName, azureRmTenantId, name);
    }
}

/** Manage GitHub service endpoints/connections. */
export class az_devops_service_endpoint_github {
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
    static create(githubUrl: string, name: string): az_devops_service_endpoint_github_create_command_builder {
        return new az_devops_service_endpoint_github_create_command_builder("az devops service-endpoint github create", 'az_devops_service_endpoint_github_create_command_result', githubUrl, name);
    }
}

/** Manage service endpoints/connections. */
export class az_devops_service_endpoint {
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
    static create(serviceEndpointConfiguration: string): az_devops_service_endpoint_create_command_builder {
        return new az_devops_service_endpoint_create_command_builder("az devops service-endpoint create", 'az_devops_service_endpoint_create_command_result', serviceEndpointConfiguration);
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
    static delete(id: string): az_devops_service_endpoint_delete_command_builder {
        return new az_devops_service_endpoint_delete_command_builder("az devops service-endpoint delete", 'az_devops_service_endpoint_delete_command_result', id);
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
    static list(): az_devops_service_endpoint_list_command_builder {
        return new az_devops_service_endpoint_list_command_builder("az devops service-endpoint list", 'az_devops_service_endpoint_list_command_result');
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
    static show(id: string): az_devops_service_endpoint_show_command_builder {
        return new az_devops_service_endpoint_show_command_builder("az devops service-endpoint show", 'az_devops_service_endpoint_show_command_result', id);
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
    static update(id: string): az_devops_service_endpoint_update_command_builder {
        return new az_devops_service_endpoint_update_command_builder("az devops service-endpoint update", 'az_devops_service_endpoint_update_command_result', id);
    }
}

/** Manage teams. */
export class az_devops_team {
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
    static create(name: string): az_devops_team_create_command_builder {
        return new az_devops_team_create_command_builder("az devops team create", 'az_devops_team_create_command_result', name);
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
    static delete(id: string): az_devops_team_delete_command_builder {
        return new az_devops_team_delete_command_builder("az devops team delete", 'az_devops_team_delete_command_result', id);
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
    static list(): az_devops_team_list_command_builder {
        return new az_devops_team_list_command_builder("az devops team list", 'az_devops_team_list_command_result');
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
    static list_member(team: string): az_devops_team_list_member_command_builder {
        return new az_devops_team_list_member_command_builder("az devops team list-member", 'az_devops_team_list_member_command_result', team);
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
    static show(team: string): az_devops_team_show_command_builder {
        return new az_devops_team_show_command_builder("az devops team show", 'az_devops_team_show_command_result', team);
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
    static update(team: string): az_devops_team_update_command_builder {
        return new az_devops_team_update_command_builder("az devops team update", 'az_devops_team_update_command_result', team);
    }
}

/** Manage users. */
export class az_devops_user {
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
    static add(emailId: string, licenseType: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'): az_devops_user_add_command_builder {
        return new az_devops_user_add_command_builder("az devops user add", 'az_devops_user_add_command_result', emailId, licenseType);
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
    static list(): az_devops_user_list_command_builder {
        return new az_devops_user_list_command_builder("az devops user list", 'az_devops_user_list_command_result');
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
    static remove(user: string): az_devops_user_remove_command_builder {
        return new az_devops_user_remove_command_builder("az devops user remove", 'az_devops_user_remove_command_result', user);
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
    static show(user: string): az_devops_user_show_command_builder {
        return new az_devops_user_show_command_builder("az devops user show", 'az_devops_user_show_command_result', user);
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
    static update(licenseType: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder', user: string): az_devops_user_update_command_builder {
        return new az_devops_user_update_command_builder("az devops user update", 'az_devops_user_update_command_result', licenseType, user);
    }
}

/** Manage wiki pages. */
export class az_devops_wiki_page {
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
    static create(path: string, wiki: string): az_devops_wiki_page_create_command_builder {
        return new az_devops_wiki_page_create_command_builder("az devops wiki page create", 'az_devops_wiki_page_create_command_result', path, wiki);
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
    static delete(path: string, wiki: string): az_devops_wiki_page_delete_command_builder {
        return new az_devops_wiki_page_delete_command_builder("az devops wiki page delete", 'az_devops_wiki_page_delete_command_result', path, wiki);
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
    static show(path: string, wiki: string): az_devops_wiki_page_show_command_builder {
        return new az_devops_wiki_page_show_command_builder("az devops wiki page show", 'az_devops_wiki_page_show_command_result', path, wiki);
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
    static update(path: string, version: string, wiki: string): az_devops_wiki_page_update_command_builder {
        return new az_devops_wiki_page_update_command_builder("az devops wiki page update", 'az_devops_wiki_page_update_command_result', path, version, wiki);
    }
}

/** Manage wikis. */
export class az_devops_wiki {
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
    static create(): az_devops_wiki_create_command_builder {
        return new az_devops_wiki_create_command_builder("az devops wiki create", 'az_devops_wiki_create_command_result');
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
    static delete(wiki: string): az_devops_wiki_delete_command_builder {
        return new az_devops_wiki_delete_command_builder("az devops wiki delete", 'az_devops_wiki_delete_command_result', wiki);
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
    static list(): az_devops_wiki_list_command_builder {
        return new az_devops_wiki_list_command_builder("az devops wiki list", 'az_devops_wiki_list_command_result');
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
    static show(wiki: string): az_devops_wiki_show_command_builder {
        return new az_devops_wiki_show_command_builder("az devops wiki show", 'az_devops_wiki_show_command_result', wiki);
    }
}

/** Manage Azure DevOps organization level operations. */
export class az_devops {
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
    static configure(): az_devops_configure_command_builder {
        return new az_devops_configure_command_builder("az devops configure", 'az_devops_configure_command_result');
    }

    /**
     * Displays information on how to provide feedback to the Azure DevOps CLI team.
     *
     * Syntax:
     * ```
     * az devops feedback [--subscription]
     * ```
     */
    static feedback(): az_devops_feedback_command_builder {
        return new az_devops_feedback_command_builder("az devops feedback", 'az_devops_feedback_command_result');
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
    static invoke(): az_devops_invoke_command_builder {
        return new az_devops_invoke_command_builder("az devops invoke", 'az_devops_invoke_command_result');
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
    static login(): az_devops_login_command_builder {
        return new az_devops_login_command_builder("az devops login", 'az_devops_login_command_result');
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
    static logout(): az_devops_logout_command_builder {
        return new az_devops_logout_command_builder("az devops logout", 'az_devops_logout_command_result');
    }
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
class az_devops_admin_banner_add_command_builder extends CommandBuilder<az_devops_admin_banner_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, message: string) {
        super(commandPath, resultDataTypeName);
        this.message(message)
    }

    /** Message (string) to show in the banner. */
    message(value: string): az_devops_admin_banner_add_command_builder {
        this.setFlag("--message", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_add_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Date/time when the banner should no longer be presented to users. If not set, the banner does not automatically expire and must be removed with the remove command. Example : "2019-06-10 17:21:00 UTC", "2019-06-10". */
    expiration(value: string): az_devops_admin_banner_add_command_builder {
        this.setFlag("--expiration", value);
        return this;
    }

    /** Identifier for the new banner. This identifier is needed to change or remove the message later. A unique identifier is automatically created if one is not specified. */
    id(value: string): az_devops_admin_banner_add_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_add_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Type of banner to present. Defaults is "info". */
    type(value: 'error' | 'info' | 'warning'): az_devops_admin_banner_add_command_builder {
        this.setFlag("--type", value);
        return this;
    }
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
class az_devops_admin_banner_list_command_builder extends CommandBuilder<az_devops_admin_banner_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_admin_banner_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_admin_banner_remove_command_builder extends CommandBuilder<az_devops_admin_banner_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** ID of the banner to remove. */
    id(value: string): az_devops_admin_banner_remove_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_remove_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_remove_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_admin_banner_show_command_builder extends CommandBuilder<az_devops_admin_banner_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** Identifier for the banner. */
    id(value: string): az_devops_admin_banner_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_admin_banner_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_admin_banner_update_command_builder extends CommandBuilder<az_devops_admin_banner_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** ID of the banner to update. */
    id(value: string): az_devops_admin_banner_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_admin_banner_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Date/time when the banner should no longer be presented to users. To unset the expiration for the banner, supply an empty value to this argument. Example : "2019-06-10 17:21:00 UTC", "2019-06-10". */
    expiration(value: string): az_devops_admin_banner_update_command_builder {
        this.setFlag("--expiration", value);
        return this;
    }

    /** Message (string) to show in the banner. */
    message(value: string): az_devops_admin_banner_update_command_builder {
        this.setFlag("--message", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_admin_banner_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_admin_banner_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Type of banner to present. Defaults is "info". */
    type(value: 'error' | 'info' | 'warning'): az_devops_admin_banner_update_command_builder {
        this.setFlag("--type", value);
        return this;
    }
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
class az_devops_extension_disable_command_builder extends CommandBuilder<az_devops_extension_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string) {
        super(commandPath, resultDataTypeName);
        this.extensionId(extensionId)
        this.publisherId(publisherId)
    }

    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_disable_command_builder {
        this.setFlag("--extension-id", value);
        return this;
    }

    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_disable_command_builder {
        this.setFlag("--publisher-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_disable_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_disable_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_disable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_extension_enable_command_builder extends CommandBuilder<az_devops_extension_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string) {
        super(commandPath, resultDataTypeName);
        this.extensionId(extensionId)
        this.publisherId(publisherId)
    }

    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_enable_command_builder {
        this.setFlag("--extension-id", value);
        return this;
    }

    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_enable_command_builder {
        this.setFlag("--publisher-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_enable_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_enable_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_enable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_extension_install_command_builder extends CommandBuilder<az_devops_extension_install_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string) {
        super(commandPath, resultDataTypeName);
        this.extensionId(extensionId)
        this.publisherId(publisherId)
    }

    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_install_command_builder {
        this.setFlag("--extension-id", value);
        return this;
    }

    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_install_command_builder {
        this.setFlag("--publisher-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_install_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_install_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_install_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_extension_list_command_builder extends CommandBuilder<az_devops_extension_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Include built in extensions. */
    includeBuiltIn(value: boolean): az_devops_extension_list_command_builder {
        this.setFlag("--include-built-in", value.toString());
        return this;
    }

    /** Include disabled extensions. */
    includeDisabled(value: boolean): az_devops_extension_list_command_builder {
        this.setFlag("--include-disabled", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_extension_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_extension_search_command_builder extends CommandBuilder<az_devops_extension_search_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, searchQuery: string) {
        super(commandPath, resultDataTypeName);
        this.searchQuery(searchQuery)
    }

    /** Search term. */
    searchQuery(value: string): az_devops_extension_search_command_builder {
        this.setFlag("--search-query", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_search_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_extension_show_command_builder extends CommandBuilder<az_devops_extension_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string) {
        super(commandPath, resultDataTypeName);
        this.extensionId(extensionId)
        this.publisherId(publisherId)
    }

    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_show_command_builder {
        this.setFlag("--extension-id", value);
        return this;
    }

    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_show_command_builder {
        this.setFlag("--publisher-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_extension_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_extension_uninstall_command_builder extends CommandBuilder<az_devops_extension_uninstall_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, extensionId: string, publisherId: string) {
        super(commandPath, resultDataTypeName);
        this.extensionId(extensionId)
        this.publisherId(publisherId)
    }

    /** Extension Id. This will map to extension-name                           in the az devops extension search output. */
    extensionId(value: string): az_devops_extension_uninstall_command_builder {
        this.setFlag("--extension-id", value);
        return this;
    }

    /** Publisher Id. This will map to publisher-name                           in the az devops extension search output. */
    publisherId(value: string): az_devops_extension_uninstall_command_builder {
        this.setFlag("--publisher-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_extension_uninstall_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_extension_uninstall_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_extension_uninstall_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_extension_uninstall_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_project_create_command_builder extends CommandBuilder<az_devops_project_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the new project. */
    name(value: string): az_devops_project_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Description for the new project. */
    description(value: string): az_devops_project_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_project_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Open the team project in the default web browser. */
    open(value: string): az_devops_project_create_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_project_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Process to use. Default if not specified. */
    process(value: string): az_devops_project_create_command_builder {
        this.setFlag("--process", value);
        return this;
    }

    /** Source control type of the initial code repository created. */
    sourceControl(value: 'git' | 'tfvc'): az_devops_project_create_command_builder {
        this.setFlag("--source-control", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_project_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Project visibility. */
    visibility(value: 'private' | 'public'): az_devops_project_create_command_builder {
        this.setFlag("--visibility", value);
        return this;
    }
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
class az_devops_project_delete_command_builder extends CommandBuilder<az_devops_project_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** The id of the project to delete. */
    id(value: string): az_devops_project_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_project_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_project_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_project_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_project_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_project_list_command_builder extends CommandBuilder<az_devops_project_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Continuation token. This can be retrived from previous run of this command if more results are present. */
    continuationToken(value: string): az_devops_project_list_command_builder {
        this.setFlag("--continuation-token", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_project_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Whether to get default team image url or not. */
    getDefaultTeamImageUrl(value: boolean): az_devops_project_list_command_builder {
        this.setFlag("--get-default-team-image-url", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_project_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_project_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Number of results to skip. */
    skip(value: string): az_devops_project_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** State filter. */
    stateFilter(value: 'all' | 'createPending' | 'deleted' | 'deleting' | 'new' | 'unchanged' | 'wellFormed'): az_devops_project_list_command_builder {
        this.setFlag("--state-filter", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_project_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of results to list. */
    top(value: string): az_devops_project_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_devops_project_show_command_builder extends CommandBuilder<az_devops_project_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, project: string) {
        super(commandPath, resultDataTypeName);
        this.project(project)
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_project_show_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_project_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Open the team project in the default web browser. */
    open(value: string): az_devops_project_show_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_project_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_project_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_project_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_group_membership_add_command_builder extends CommandBuilder<az_devops_security_group_membership_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string, memberId: string) {
        super(commandPath, resultDataTypeName);
        this.groupId(groupId)
        this.memberId(memberId)
    }

    /** Descriptor of the group to which member needs to be added. */
    groupId(value: string): az_devops_security_group_membership_add_command_builder {
        this.setFlag("--group-id", value);
        return this;
    }

    /** Descriptor of the group or Email Id of the user to be added. User should already be a part of the organization. Use `az devops user add` command to add an user to organization. */
    memberId(value: string): az_devops_security_group_membership_add_command_builder {
        this.setFlag("--member-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_membership_add_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_membership_add_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_membership_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_group_membership_list_command_builder extends CommandBuilder<az_devops_security_group_membership_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** Group descriptor or User Email whose membership details are required. */
    id(value: string): az_devops_security_group_membership_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_membership_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_membership_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_group_membership_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Get member of/members for this group. */
    relationship(value: 'memberof' | 'members'): az_devops_security_group_membership_list_command_builder {
        this.setFlag("--relationship", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_membership_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_group_membership_remove_command_builder extends CommandBuilder<az_devops_security_group_membership_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, groupId: string, memberId: string) {
        super(commandPath, resultDataTypeName);
        this.groupId(groupId)
        this.memberId(memberId)
    }

    /** Descriptor of the group from which member needs to be removed. */
    groupId(value: string): az_devops_security_group_membership_remove_command_builder {
        this.setFlag("--group-id", value);
        return this;
    }

    /** Descriptor of the group or Email Id of the user to be removed. */
    memberId(value: string): az_devops_security_group_membership_remove_command_builder {
        this.setFlag("--member-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_membership_remove_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_membership_remove_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_membership_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_security_group_membership_remove_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_security_group_create_command_builder extends CommandBuilder<az_devops_security_group_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Description of Azure DevOps group. */
    description(value: string): az_devops_security_group_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Create new group using the mail address as a reference to an existing group from an external AD or AAD backed provider. Required if name or origin-id is missing. */
    emailId(value: string): az_devops_security_group_create_command_builder {
        this.setFlag("--email-id", value);
        return this;
    }

    /** A comma separated list of descriptors referencing groups you want the newly created group to join. */
    groups(value: string): az_devops_security_group_create_command_builder {
        this.setFlag("--groups", value);
        return this;
    }

    /** Name of Azure DevOps group. */
    name(value: string): az_devops_security_group_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Create new group using the OriginID as a reference to an existing group from an external AD or AAD backed provider. Required if name or email-id is missing. */
    originId(value: string): az_devops_security_group_create_command_builder {
        this.setFlag("--origin-id", value);
        return this;
    }

    /** Name or ID of the project in which Azure DevOps group should be created. */
    project(value: string): az_devops_security_group_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Create group at project or organization level. */
    scope(value: 'organization' | 'project'): az_devops_security_group_create_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_group_delete_command_builder extends CommandBuilder<az_devops_security_group_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** Descriptor of the group. */
    id(value: string): az_devops_security_group_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_security_group_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_security_group_list_command_builder extends CommandBuilder<az_devops_security_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** If there are more results that can't be returned in a single page, the result set will contain a continuation token for retrieval of the next set of results. */
    continuationToken(value: string): az_devops_security_group_list_command_builder {
        this.setFlag("--continuation-token", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** List groups for a particular project. */
    project(value: string): az_devops_security_group_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** List groups at project or organization level. */
    scope(value: 'organization' | 'project'): az_devops_security_group_list_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** A comma separated list of user subject subtypes to reduce the retrieved results. You can give initial part of descriptor [before the dot] as a filter e.g. vssgp,aadgp. */
    subjectTypes(value: string): az_devops_security_group_list_command_builder {
        this.setFlag("--subject-types", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_group_show_command_builder extends CommandBuilder<az_devops_security_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** Descriptor of the group. */
    id(value: string): az_devops_security_group_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_group_update_command_builder extends CommandBuilder<az_devops_security_group_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** Descriptor of the group. */
    id(value: string): az_devops_security_group_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** New description for Azure DevOps group. */
    description(value: string): az_devops_security_group_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_group_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** New name for Azure DevOps group. */
    name(value: string): az_devops_security_group_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_group_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_group_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_permission_namespace_list_command_builder extends CommandBuilder<az_devops_security_permission_namespace_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_namespace_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** If true, retrieve only local security namespaces. */
    localOnly(value: string): az_devops_security_permission_namespace_list_command_builder {
        this.setFlag("--local-only", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_namespace_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_permission_namespace_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_namespace_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_permission_namespace_show_command_builder extends CommandBuilder<az_devops_security_permission_namespace_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string) {
        super(commandPath, resultDataTypeName);
        this.namespaceId(namespaceId)
    }

    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_namespace_show_command_builder {
        this.setFlag("--namespace-id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_namespace_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_namespace_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_permission_namespace_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_namespace_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_permission_list_command_builder extends CommandBuilder<az_devops_security_permission_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, subject: string) {
        super(commandPath, resultDataTypeName);
        this.namespaceId(namespaceId)
        this.subject(subject)
    }

    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_list_command_builder {
        this.setFlag("--namespace-id", value);
        return this;
    }

    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_list_command_builder {
        this.setFlag("--subject", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_permission_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If true and this is a hierarchical namespace, return child ACLs of the specified token. */
    recurse(value: string): az_devops_security_permission_list_command_builder {
        this.setFlag("--recurse", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Security token. */
    token(value: string): az_devops_security_permission_list_command_builder {
        this.setFlag("--token", value);
        return this;
    }
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
class az_devops_security_permission_reset_command_builder extends CommandBuilder<az_devops_security_permission_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, permissionBit: string, subject: string, token: string) {
        super(commandPath, resultDataTypeName);
        this.namespaceId(namespaceId)
        this.permissionBit(permissionBit)
        this.subject(subject)
        this.token(token)
    }

    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_reset_command_builder {
        this.setFlag("--namespace-id", value);
        return this;
    }

    /** Permission bit or addition of permission bits which needs to be reset                         for given user/group and token. */
    permissionBit(value: string): az_devops_security_permission_reset_command_builder {
        this.setFlag("--permission-bit", value);
        return this;
    }

    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_reset_command_builder {
        this.setFlag("--subject", value);
        return this;
    }

    /** Security token. */
    token(value: string): az_devops_security_permission_reset_command_builder {
        this.setFlag("--token", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_reset_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_reset_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_reset_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_permission_reset_all_command_builder extends CommandBuilder<az_devops_security_permission_reset_all_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, subject: string, token: string) {
        super(commandPath, resultDataTypeName);
        this.namespaceId(namespaceId)
        this.subject(subject)
        this.token(token)
    }

    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_reset_all_command_builder {
        this.setFlag("--namespace-id", value);
        return this;
    }

    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_reset_all_command_builder {
        this.setFlag("--subject", value);
        return this;
    }

    /** Security token. */
    token(value: string): az_devops_security_permission_reset_all_command_builder {
        this.setFlag("--token", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_reset_all_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_reset_all_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_reset_all_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_security_permission_reset_all_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_security_permission_show_command_builder extends CommandBuilder<az_devops_security_permission_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, subject: string, token: string) {
        super(commandPath, resultDataTypeName);
        this.namespaceId(namespaceId)
        this.subject(subject)
        this.token(token)
    }

    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_show_command_builder {
        this.setFlag("--namespace-id", value);
        return this;
    }

    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_show_command_builder {
        this.setFlag("--subject", value);
        return this;
    }

    /** Security token. */
    token(value: string): az_devops_security_permission_show_command_builder {
        this.setFlag("--token", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_security_permission_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_security_permission_update_command_builder extends CommandBuilder<az_devops_security_permission_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceId: string, subject: string, token: string) {
        super(commandPath, resultDataTypeName);
        this.namespaceId(namespaceId)
        this.subject(subject)
        this.token(token)
    }

    /** ID of security namespace. */
    namespaceId(value: string): az_devops_security_permission_update_command_builder {
        this.setFlag("--namespace-id", value);
        return this;
    }

    /** User Email ID or Group descriptor. */
    subject(value: string): az_devops_security_permission_update_command_builder {
        this.setFlag("--subject", value);
        return this;
    }

    /** Security token. */
    token(value: string): az_devops_security_permission_update_command_builder {
        this.setFlag("--token", value);
        return this;
    }

    /** Allow bit or addition of bits. Required if --deny-bit is missing. */
    allowBit(value: string): az_devops_security_permission_update_command_builder {
        this.setFlag("--allow-bit", value);
        return this;
    }

    /** Deny bit or addition of bits. Required if --allow-bit is missing. */
    denyBit(value: string): az_devops_security_permission_update_command_builder {
        this.setFlag("--deny-bit", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_security_permission_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** If set, the existing ACE has its allow and deny merged with                          the incoming ACE's allow and deny. If unset, the existing ACE is displaced. */
    merge(value: boolean): az_devops_security_permission_update_command_builder {
        this.setFlag("--merge", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_security_permission_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_security_permission_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_service_endpoint_azurerm_create_command_builder extends CommandBuilder<az_devops_service_endpoint_azurerm_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, azureRmServicePrincipalId: string, azureRmSubscriptionId: string, azureRmSubscriptionName: string, azureRmTenantId: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.azureRmServicePrincipalId(azureRmServicePrincipalId)
        this.azureRmSubscriptionId(azureRmSubscriptionId)
        this.azureRmSubscriptionName(azureRmSubscriptionName)
        this.azureRmTenantId(azureRmTenantId)
        this.name(name)
    }

    /** Service principal id for creating azure rm service endpoint. */
    azureRmServicePrincipalId(value: string): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--azure-rm-service-principal-id", value);
        return this;
    }

    /** Subscription id for azure rm service endpoint. */
    azureRmSubscriptionId(value: string): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--azure-rm-subscription-id", value);
        return this;
    }

    /** Name of azure subscription for azure rm service endpoint. */
    azureRmSubscriptionName(value: string): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--azure-rm-subscription-name", value);
        return this;
    }

    /** Tenant id for creating azure rm service endpoint. */
    azureRmTenantId(value: string): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--azure-rm-tenant-id", value);
        return this;
    }

    /** Name of service endpoint to create. */
    name(value: string): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Path to (.pem) which is certificate. Create using command "openssl pkcs12 -in file.pfx -out file.pem -nodes -password pass:<password_here>". More details : <a href="https://aka.ms/azure-devops-cli-azurerm-service-endpoint">https://aka.ms/azure-devops-cli-azurerm-service-endpoint</a>. */
    azureRmServicePrincipalCertificatePath(value: string): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--azure-rm-service-principal-certificate-path", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_azurerm_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_service_endpoint_github_create_command_builder extends CommandBuilder<az_devops_service_endpoint_github_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, githubUrl: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.githubUrl(githubUrl)
        this.name(name)
    }

    /** Url for github for creating service endpoint. */
    githubUrl(value: string): az_devops_service_endpoint_github_create_command_builder {
        this.setFlag("--github-url", value);
        return this;
    }

    /** Name of service endpoint to create. */
    name(value: string): az_devops_service_endpoint_github_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_github_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_github_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_github_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_github_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_service_endpoint_create_command_builder extends CommandBuilder<az_devops_service_endpoint_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, serviceEndpointConfiguration: string) {
        super(commandPath, resultDataTypeName);
        this.serviceEndpointConfiguration(serviceEndpointConfiguration)
    }

    /** Configuration file with service endpoint request. */
    serviceEndpointConfiguration(value: string): az_devops_service_endpoint_create_command_builder {
        this.setFlag("--service-endpoint-configuration", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Encoding of the input file. */
    encoding(value: 'ascii' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_devops_service_endpoint_create_command_builder {
        this.setFlag("--encoding", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_service_endpoint_delete_command_builder extends CommandBuilder<az_devops_service_endpoint_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** Id of the service endpoint to delete. */
    id(value: string): az_devops_service_endpoint_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Specific to AzureRM endpoint created in Automatic flow. When it is specified, this will also delete corresponding AAD application in Azure. */
    deep(value: string): az_devops_service_endpoint_delete_command_builder {
        this.setFlag("--deep", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_service_endpoint_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_service_endpoint_list_command_builder extends CommandBuilder<az_devops_service_endpoint_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_service_endpoint_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_service_endpoint_show_command_builder extends CommandBuilder<az_devops_service_endpoint_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** ID of the service endpoint. */
    id(value: string): az_devops_service_endpoint_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_show_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_service_endpoint_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_service_endpoint_update_command_builder extends CommandBuilder<az_devops_service_endpoint_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** ID of the service endpoint. */
    id(value: string): az_devops_service_endpoint_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_service_endpoint_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Allow all pipelines to access this service endpoint. */
    enableForAll(value: boolean): az_devops_service_endpoint_update_command_builder {
        this.setFlag("--enable-for-all", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_service_endpoint_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_service_endpoint_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_service_endpoint_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_team_create_command_builder extends CommandBuilder<az_devops_team_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
    }

    /** Name of the new team. */
    name(value: string): az_devops_team_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Description of the new team. */
    description(value: string): az_devops_team_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_team_delete_command_builder extends CommandBuilder<az_devops_team_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** The id of the team to delete. */
    id(value: string): az_devops_team_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_team_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_team_list_command_builder extends CommandBuilder<az_devops_team_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_team_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Number of teams to skip. */
    skip(value: string): az_devops_team_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of teams to return. */
    top(value: string): az_devops_team_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_devops_team_list_member_command_builder extends CommandBuilder<az_devops_team_list_member_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string) {
        super(commandPath, resultDataTypeName);
        this.team(team)
    }

    /** The name or id of the team to show members of. */
    team(value: string): az_devops_team_list_member_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_list_member_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_list_member_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_list_member_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Number of members to skip. */
    skip(value: string): az_devops_team_list_member_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_list_member_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of members to return. */
    top(value: string): az_devops_team_list_member_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_devops_team_show_command_builder extends CommandBuilder<az_devops_team_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string) {
        super(commandPath, resultDataTypeName);
        this.team(team)
    }

    /** The name or id of the team to show. */
    team(value: string): az_devops_team_show_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_show_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_team_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_team_update_command_builder extends CommandBuilder<az_devops_team_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, team: string) {
        super(commandPath, resultDataTypeName);
        this.team(team)
    }

    /** The name or id of the team to be updated. */
    team(value: string): az_devops_team_update_command_builder {
        this.setFlag("--team", value);
        return this;
    }

    /** New description of the team. */
    description(value: string): az_devops_team_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_team_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** New name of the team. */
    name(value: string): az_devops_team_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_team_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_team_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_team_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_user_add_command_builder extends CommandBuilder<az_devops_user_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, emailId: string, licenseType: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder') {
        super(commandPath, resultDataTypeName);
        this.emailId(emailId)
        this.licenseType(licenseType)
    }

    /** Email ID of the user. */
    emailId(value: string): az_devops_user_add_command_builder {
        this.setFlag("--email-id", value);
        return this;
    }

    /** License type for the user. */
    licenseType(value: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'): az_devops_user_add_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_add_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_add_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Whether to send email invite for new user or not. */
    sendEmailInvite(value: boolean): az_devops_user_add_command_builder {
        this.setFlag("--send-email-invite", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_user_list_command_builder extends CommandBuilder<az_devops_user_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_user_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Offset: Number of records to skip. */
    skip(value: string): az_devops_user_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of users to return. Max value is 10000. */
    top(value: string): az_devops_user_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_devops_user_remove_command_builder extends CommandBuilder<az_devops_user_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, user: string) {
        super(commandPath, resultDataTypeName);
        this.user(user)
    }

    /** Email ID or ID of the user. */
    user(value: string): az_devops_user_remove_command_builder {
        this.setFlag("--user", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_remove_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_remove_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_user_remove_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_user_show_command_builder extends CommandBuilder<az_devops_user_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, user: string) {
        super(commandPath, resultDataTypeName);
        this.user(user)
    }

    /** Email ID or ID of the user. */
    user(value: string): az_devops_user_show_command_builder {
        this.setFlag("--user", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_user_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_user_update_command_builder extends CommandBuilder<az_devops_user_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, licenseType: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder', user: string) {
        super(commandPath, resultDataTypeName);
        this.licenseType(licenseType)
        this.user(user)
    }

    /** License type for the user. */
    licenseType(value: 'advanced' | 'earlyAdopter' | 'express' | 'professional' | 'stakeholder'): az_devops_user_update_command_builder {
        this.setFlag("--license-type", value);
        return this;
    }

    /** Email ID or ID of the user. */
    user(value: string): az_devops_user_update_command_builder {
        this.setFlag("--user", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_user_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_user_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_user_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_wiki_page_create_command_builder extends CommandBuilder<az_devops_wiki_page_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, wiki: string) {
        super(commandPath, resultDataTypeName);
        this.path(path)
        this.wiki(wiki)
    }

    /** Path of the wiki page. */
    path(value: string): az_devops_wiki_page_create_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_page_create_command_builder {
        this.setFlag("--wiki", value);
        return this;
    }

    /** Comment in the commit message of file add operation. */
    comment(value: string): az_devops_wiki_page_create_command_builder {
        this.setFlag("--comment", value);
        return this;
    }

    /** Content of the wiki page. Ignored if --file-path is specified. */
    content(value: string): az_devops_wiki_page_create_command_builder {
        this.setFlag("--content", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_page_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Encoding of the file. Used in conjunction with --file-path parameter. */
    encoding(value: 'ascii' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_devops_wiki_page_create_command_builder {
        this.setFlag("--encoding", value);
        return this;
    }

    /** Path of the file input if content is specified in the file. */
    filePath(value: string): az_devops_wiki_page_create_command_builder {
        this.setFlag("--file-path", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_page_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_page_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_page_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_wiki_page_delete_command_builder extends CommandBuilder<az_devops_wiki_page_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, wiki: string) {
        super(commandPath, resultDataTypeName);
        this.path(path)
        this.wiki(wiki)
    }

    /** Path of the wiki page. */
    path(value: string): az_devops_wiki_page_delete_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_page_delete_command_builder {
        this.setFlag("--wiki", value);
        return this;
    }

    /** Comment in the commit message of delete operation. */
    comment(value: string): az_devops_wiki_page_delete_command_builder {
        this.setFlag("--comment", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_page_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_page_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_page_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_page_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_wiki_page_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_wiki_page_show_command_builder extends CommandBuilder<az_devops_wiki_page_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, wiki: string) {
        super(commandPath, resultDataTypeName);
        this.path(path)
        this.wiki(wiki)
    }

    /** Path of the wiki page. */
    path(value: string): az_devops_wiki_page_show_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_page_show_command_builder {
        this.setFlag("--wiki", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_page_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Include content of the page. */
    includeContent(value: string): az_devops_wiki_page_show_command_builder {
        this.setFlag("--include-content", value);
        return this;
    }

    /** Open the wiki page in your web browser. */
    open(value: string): az_devops_wiki_page_show_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_page_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_page_show_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_wiki_page_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_page_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Version (ETag) of the wiki page. */
    version(value: string): az_devops_wiki_page_show_command_builder {
        this.setFlag("--version", value);
        return this;
    }
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
class az_devops_wiki_page_update_command_builder extends CommandBuilder<az_devops_wiki_page_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, path: string, version: string, wiki: string) {
        super(commandPath, resultDataTypeName);
        this.path(path)
        this.version(version)
        this.wiki(wiki)
    }

    /** Path of the wiki page. */
    path(value: string): az_devops_wiki_page_update_command_builder {
        this.setFlag("--path", value);
        return this;
    }

    /** Version (ETag) of file to edit. */
    version(value: string): az_devops_wiki_page_update_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_page_update_command_builder {
        this.setFlag("--wiki", value);
        return this;
    }

    /** Comment in the commit message of file edit operation. */
    comment(value: string): az_devops_wiki_page_update_command_builder {
        this.setFlag("--comment", value);
        return this;
    }

    /** Content of the wiki page. Ignored if --file-path is specified. */
    content(value: string): az_devops_wiki_page_update_command_builder {
        this.setFlag("--content", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_page_update_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Encoding of the file. Used in conjunction with --file-path parameter. */
    encoding(value: 'ascii' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_devops_wiki_page_update_command_builder {
        this.setFlag("--encoding", value);
        return this;
    }

    /** Path of the file input if content is specified in the file. */
    filePath(value: string): az_devops_wiki_page_update_command_builder {
        this.setFlag("--file-path", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_page_update_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_page_update_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_page_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_wiki_create_command_builder extends CommandBuilder<az_devops_wiki_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_create_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** [Required for codewiki type] Mapped path of the new wiki e.g. '/' to publish from root of repository. */
    mappedPath(value: string): az_devops_wiki_create_command_builder {
        this.setFlag("--mapped-path", value);
        return this;
    }

    /** Name of the new wiki. */
    name(value: string): az_devops_wiki_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_create_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_create_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** [Required for codewiki type] Name or ID of the repository to publish the wiki from. */
    repository(value: string): az_devops_wiki_create_command_builder {
        this.setFlag("--repository", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Type of wiki to create. */
    wikiType(value: 'codewiki' | 'projectwiki'): az_devops_wiki_create_command_builder {
        this.setFlag("--wiki-type", value);
        return this;
    }

    /** [Required for codewiki type] Repository branch name to publish the code wiki from. */
    version(value: string): az_devops_wiki_create_command_builder {
        this.setFlag("--version", value);
        return this;
    }
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
class az_devops_wiki_delete_command_builder extends CommandBuilder<az_devops_wiki_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, wiki: string) {
        super(commandPath, resultDataTypeName);
        this.wiki(wiki)
    }

    /** Name or Id of the wiki to delete. */
    wiki(value: string): az_devops_wiki_delete_command_builder {
        this.setFlag("--wiki", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_delete_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_delete_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_delete_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_devops_wiki_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_devops_wiki_list_command_builder extends CommandBuilder<az_devops_wiki_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_list_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_list_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_list_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_wiki_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** List the wikis at project or organization level. */
    scope(value: 'organization' | 'project'): az_devops_wiki_list_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_wiki_show_command_builder extends CommandBuilder<az_devops_wiki_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, wiki: string) {
        super(commandPath, resultDataTypeName);
        this.wiki(wiki)
    }

    /** Name or Id of the wiki. */
    wiki(value: string): az_devops_wiki_show_command_builder {
        this.setFlag("--wiki", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_wiki_show_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Open the wiki in your web browser. */
    open(value: string): az_devops_wiki_show_command_builder {
        this.setFlag("--open", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_wiki_show_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config. */
    project(value: string): az_devops_wiki_show_command_builder {
        this.setFlag("--project", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_devops_wiki_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_wiki_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_configure_command_builder extends CommandBuilder<az_devops_configure_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Space separated 'name=value' pairs for common arguments defaults, e.g. '--defaults project=my-project-name organization=https://dev.azure.com/organizationName arg=value'. Use '' to clear the defaults, e.g. --defaults project=''. */
    defaults(value: string): az_devops_configure_command_builder {
        this.setFlag("--defaults", value);
        return this;
    }

    /** Lists the contents of the config file. */
    list(value: string): az_devops_configure_command_builder {
        this.setFlag("--list", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_configure_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Set to 'true' to configure Git aliases global git config file (to enable commands like "git pr list"). Set to 'false' to remove any aliases set by the tool. */
    useGitAliases(value: boolean): az_devops_configure_command_builder {
        this.setFlag("--use-git-aliases", value.toString());
        return this;
    }
}

/**
 * Displays information on how to provide feedback to the Azure DevOps CLI team.
 *
 * Syntax:
 * ```
 * az devops feedback [--subscription]
 * ```
 */
class az_devops_feedback_command_builder extends CommandBuilder<az_devops_feedback_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_feedback_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_invoke_command_builder extends CommandBuilder<az_devops_invoke_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Specifies the content type of the response. */
    acceptMediaType(value: string): az_devops_invoke_command_builder {
        this.setFlag("--accept-media-type", value);
        return this;
    }

    /** The version of the API to target. */
    apiVersion(value: string): az_devops_invoke_command_builder {
        this.setFlag("--api-version", value);
        return this;
    }

    /** The area to find the resource. */
    area(value: string): az_devops_invoke_command_builder {
        this.setFlag("--area", value);
        return this;
    }

    /** Automatically detect organization. */
    detect(value: boolean): az_devops_invoke_command_builder {
        this.setFlag("--detect", value.toString());
        return this;
    }

    /** Encoding of the input file. Used in conjunction with --in-file. */
    encoding(value: 'ascii' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_devops_invoke_command_builder {
        this.setFlag("--encoding", value);
        return this;
    }

    /** Specifies the method used for the request. */
    httpMethod(value: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT'): az_devops_invoke_command_builder {
        this.setFlag("--http-method", value);
        return this;
    }

    /** Path and file name to the file that contains the contents of the request. */
    inFile(value: string): az_devops_invoke_command_builder {
        this.setFlag("--in-file", value);
        return this;
    }

    /** Specifies the content type of the request. */
    mediaType(value: string): az_devops_invoke_command_builder {
        this.setFlag("--media-type", value);
        return this;
    }

    /** Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. */
    organization(value: string): az_devops_invoke_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Path and file name to the file  for which this function saves the response body. */
    outFile(value: string): az_devops_invoke_command_builder {
        this.setFlag("--out-file", value);
        return this;
    }

    /** Specifies the list of query parameters. */
    queryParameters(value: string): az_devops_invoke_command_builder {
        this.setFlag("--query-parameters", value);
        return this;
    }

    /** The name of the resource to operate on. */
    resource(value: string): az_devops_invoke_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Specifies the list of route parameters. */
    routeParameters(value: string): az_devops_invoke_command_builder {
        this.setFlag("--route-parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_invoke_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_login_command_builder extends CommandBuilder<az_devops_login_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Azure DevOps organization URL. Example: <a href="https://dev.azure.com/MyOrganizationName">https://dev.azure.com/MyOrganizationName</a>. */
    organization(value: string): az_devops_login_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_login_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_devops_logout_command_builder extends CommandBuilder<az_devops_logout_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Azure DevOps organization URL. Example: <a href="https://dev.azure.com/MyOrganizationName/">https://dev.azure.com/MyOrganizationName/</a>. If no organization is specified, all organizations will be logged out. */
    organization(value: string): az_devops_logout_command_builder {
        this.setFlag("--organization", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_devops_logout_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
