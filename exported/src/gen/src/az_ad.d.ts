import { CommandBuilder } from '../base';
import { az_ad_app_credential_delete_command_result } from './models/az_ad_app_credential_delete_command_result';
import { az_ad_app_credential_list_command_result } from './models/az_ad_app_credential_list_command_result';
import { az_ad_app_credential_reset_command_result } from './models/az_ad_app_credential_reset_command_result';
import { az_ad_app_owner_add_command_result } from './models/az_ad_app_owner_add_command_result';
import { az_ad_app_owner_list_command_result } from './models/az_ad_app_owner_list_command_result';
import { az_ad_app_owner_remove_command_result } from './models/az_ad_app_owner_remove_command_result';
import { az_ad_app_permission_add_command_result } from './models/az_ad_app_permission_add_command_result';
import { az_ad_app_permission_admin_consent_command_result } from './models/az_ad_app_permission_admin_consent_command_result';
import { az_ad_app_permission_delete_command_result } from './models/az_ad_app_permission_delete_command_result';
import { az_ad_app_permission_grant_command_result } from './models/az_ad_app_permission_grant_command_result';
import { az_ad_app_permission_list_command_result } from './models/az_ad_app_permission_list_command_result';
import { az_ad_app_permission_list_grants_command_result } from './models/az_ad_app_permission_list_grants_command_result';
import { az_ad_app_create_command_result } from './models/az_ad_app_create_command_result';
import { az_ad_app_delete_command_result } from './models/az_ad_app_delete_command_result';
import { az_ad_app_list_command_result } from './models/az_ad_app_list_command_result';
import { az_ad_app_show_command_result } from './models/az_ad_app_show_command_result';
import { az_ad_app_update_command_result } from './models/az_ad_app_update_command_result';
import { az_ad_group_member_add_command_result } from './models/az_ad_group_member_add_command_result';
import { az_ad_group_member_check_command_result } from './models/az_ad_group_member_check_command_result';
import { az_ad_group_member_list_command_result } from './models/az_ad_group_member_list_command_result';
import { az_ad_group_member_remove_command_result } from './models/az_ad_group_member_remove_command_result';
import { az_ad_group_owner_add_command_result } from './models/az_ad_group_owner_add_command_result';
import { az_ad_group_owner_list_command_result } from './models/az_ad_group_owner_list_command_result';
import { az_ad_group_owner_remove_command_result } from './models/az_ad_group_owner_remove_command_result';
import { az_ad_group_create_command_result } from './models/az_ad_group_create_command_result';
import { az_ad_group_delete_command_result } from './models/az_ad_group_delete_command_result';
import { az_ad_group_get_member_groups_command_result } from './models/az_ad_group_get_member_groups_command_result';
import { az_ad_group_list_command_result } from './models/az_ad_group_list_command_result';
import { az_ad_group_show_command_result } from './models/az_ad_group_show_command_result';
import { az_ad_signed_in_user_list_owned_objects_command_result } from './models/az_ad_signed_in_user_list_owned_objects_command_result';
import { az_ad_signed_in_user_show_command_result } from './models/az_ad_signed_in_user_show_command_result';
import { az_ad_sp_credential_delete_command_result } from './models/az_ad_sp_credential_delete_command_result';
import { az_ad_sp_credential_list_command_result } from './models/az_ad_sp_credential_list_command_result';
import { az_ad_sp_credential_reset_command_result } from './models/az_ad_sp_credential_reset_command_result';
import { az_ad_sp_owner_list_command_result } from './models/az_ad_sp_owner_list_command_result';
import { az_ad_sp_create_command_result } from './models/az_ad_sp_create_command_result';
import { az_ad_sp_create_for_rbac_command_result } from './models/az_ad_sp_create_for_rbac_command_result';
import { az_ad_sp_delete_command_result } from './models/az_ad_sp_delete_command_result';
import { az_ad_sp_list_command_result } from './models/az_ad_sp_list_command_result';
import { az_ad_sp_show_command_result } from './models/az_ad_sp_show_command_result';
import { az_ad_sp_update_command_result } from './models/az_ad_sp_update_command_result';
import { az_ad_user_create_command_result } from './models/az_ad_user_create_command_result';
import { az_ad_user_delete_command_result } from './models/az_ad_user_delete_command_result';
import { az_ad_user_get_member_groups_command_result } from './models/az_ad_user_get_member_groups_command_result';
import { az_ad_user_list_command_result } from './models/az_ad_user_list_command_result';
import { az_ad_user_show_command_result } from './models/az_ad_user_show_command_result';
import { az_ad_user_update_command_result } from './models/az_ad_user_update_command_result';
/** Manage an application's password or certificate credentials. */
export declare class az_ad_app_credential {
    /**
     * Delete an application's password or certificate credentials.
     *
     * Syntax:
     * ```
     * az ad app credential delete --id
     *                             --key-id
     *                             [--cert]
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id.
     * @param {string} keyId Credential key id.
     */
    static delete(id: string, keyId: string): az_ad_app_credential_delete_command_builder;
    /**
     * List an application's password or certificate credentials.
     *
     * Syntax:
     * ```
     * az ad app credential list --id
     *                           [--cert]
     *                           [--query-examples]
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id.
     */
    static list(id: string): az_ad_app_credential_list_command_builder;
    /**
     * Append or overwrite an application's password or certificate credentials.
     *
     * Syntax:
     * ```
     * az ad app credential reset --id
     *                            [--append]
     *                            [--cert]
     *                            [--create-cert]
     *                            [--credential-description]
     *                            [--end-date]
     *                            [--keyvault]
     *                            [--password]
     *                            [--years]
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id.
     */
    static reset(id: string): az_ad_app_credential_reset_command_builder;
}
/** Manage application owners. */
export declare class az_ad_app_owner {
    /**
     * Add an application owner.
     *
     * Syntax:
     * ```
     * az ad app owner add --id
     *                     --owner-object-id
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id.
     * @param {string} ownerObjectId Owner's object id.
     */
    static add(id: string, ownerObjectId: string): az_ad_app_owner_add_command_builder;
    /**
     * List application owners.
     *
     * Syntax:
     * ```
     * az ad app owner list --id
     *                      [--query-examples]
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id of the application.
     */
    static list(id: string): az_ad_app_owner_list_command_builder;
    /**
     * Remove an application owner.
     *
     * Syntax:
     * ```
     * az ad app owner remove --id
     *                        --owner-object-id
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id.
     * @param {string} ownerObjectId Owner's object id.
     */
    static remove(id: string, ownerObjectId: string): az_ad_app_owner_remove_command_builder;
}
/** Manage an application's OAuth2 permissions. */
export declare class az_ad_app_permission {
    /**
     * Add an API permission.
     *
     * Syntax:
     * ```
     * az ad app permission add --api
     *                          --api-permissions
     *                          --id
     * ```
     *
     * @param {string} api Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
     * @param {string} apiPermissions Specify `ResourceAccess.id` - The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. Space-separated list of `<resource-access-id>=<type>`.
     * @param {string} id Identifier uri, application id, or object id.
     */
    static add(api: string, apiPermissions: string, id: string): az_ad_app_permission_add_command_builder;
    /**
     * Grant Application & Delegated permissions through admin-consent.
     *
     * Syntax:
     * ```
     * az ad app permission admin-consent --id
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id.
     */
    static admin_consent(id: string): az_ad_app_permission_admin_consent_command_builder;
    /**
     * Remove an API permission.
     *
     * Syntax:
     * ```
     * az ad app permission delete --api
     *                             --id
     *                             [--api-permissions]
     * ```
     *
     * @param {string} api Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
     * @param {string} id Identifier uri, application id, or object id.
     */
    static delete(api: string, id: string): az_ad_app_permission_delete_command_builder;
    /**
     * Grant the app an API Delegated permissions.
     *
     * Syntax:
     * ```
     * az ad app permission grant --api
     *                            --id
     *                            [--consent-type {AllPrincipals, Principal}]
     *                            [--expires]
     *                            [--principal-id]
     *                            [--scope]
     * ```
     *
     * @param {string} api Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
     * @param {string} id Identifier uri, application id, or object id.
     */
    static grant(api: string, id: string): az_ad_app_permission_grant_command_builder;
    /**
     * List API permissions the application has requested.
     *
     * Syntax:
     * ```
     * az ad app permission list --id
     *                           [--query-examples]
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id of the associated application.
     */
    static list(id: string): az_ad_app_permission_list_command_builder;
    /**
     * List Oauth2 permission grants.
     *
     * Syntax:
     * ```
     * az ad app permission list-grants [--filter]
     *                                  [--id]
     *                                  [--show-resource-name {false, true}]
     * ```
     */
    static list_grants(): az_ad_app_permission_list_grants_command_builder;
}
/** Manage applications with AAD Graph. */
export declare class az_ad_app {
    /**
     * Create a web application, web API or native application.
     *
     * Syntax:
     * ```
     * az ad app create --display-name
     *                  [--app-roles]
     *                  [--available-to-other-tenants {false, true}]
     *                  [--credential-description]
     *                  [--end-date]
     *                  [--homepage]
     *                  [--identifier-uris]
     *                  [--key-type {AsymmetricX509Cert, Password, Symmetric}]
     *                  [--key-usage {Sign, Verify}]
     *                  [--key-value]
     *                  [--native-app {false, true}]
     *                  [--oauth2-allow-implicit-flow {false, true}]
     *                  [--optional-claims]
     *                  [--password]
     *                  [--reply-urls]
     *                  [--required-resource-accesses]
     *                  [--start-date]
     * ```
     *
     * @param {string} displayName The display name of the application.
     */
    static create(displayName: string): az_ad_app_create_command_builder;
    /**
     * Delete an application.
     *
     * Syntax:
     * ```
     * az ad app delete --id
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id.
     */
    static delete(id: string): az_ad_app_delete_command_builder;
    /**
     * List applications.
     *
     * Syntax:
     * ```
     * az ad app list [--all]
     *                [--app-id]
     *                [--display-name]
     *                [--filter]
     *                [--identifier-uri]
     *                [--query-examples]
     *                [--show-mine]
     * ```
     */
    static list(): az_ad_app_list_command_builder;
    /**
     * Get the details of an application.
     *
     * Syntax:
     * ```
     * az ad app show --id
     *                [--query-examples]
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id.
     */
    static show(id: string): az_ad_app_show_command_builder;
    /**
     * Update an application.
     *
     * Syntax:
     * ```
     * az ad app update --id
     *                  [--add]
     *                  [--app-roles]
     *                  [--available-to-other-tenants {false, true}]
     *                  [--credential-description]
     *                  [--display-name]
     *                  [--end-date]
     *                  [--force-string]
     *                  [--homepage]
     *                  [--identifier-uris]
     *                  [--key-type {AsymmetricX509Cert, Password, Symmetric}]
     *                  [--key-usage {Sign, Verify}]
     *                  [--key-value]
     *                  [--oauth2-allow-implicit-flow {false, true}]
     *                  [--optional-claims]
     *                  [--password]
     *                  [--remove]
     *                  [--reply-urls]
     *                  [--required-resource-accesses]
     *                  [--set]
     *                  [--start-date]
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id.
     */
    static update(id: string): az_ad_app_update_command_builder;
}
/** Manage Azure Active Directory group members. */
export declare class az_ad_group_member {
    /**
     * Add a member to a group.
     *
     * Syntax:
     * ```
     * az ad group member add --group
     *                        --member-id
     *                        [--additional-properties]
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     * @param {string} memberId The object ID of the contact, group, user, or service principal.
     */
    static add(group: string, memberId: string): az_ad_group_member_add_command_builder;
    /**
     * Check if a member is in a group.
     *
     * Syntax:
     * ```
     * az ad group member check --group
     *                          --member-id
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     * @param {string} memberId The object ID of the contact, group, user, or service principal.
     */
    static check(group: string, memberId: string): az_ad_group_member_check_command_builder;
    /**
     * Gets the members of a group.
     *
     * Syntax:
     * ```
     * az ad group member list --group
     *                         [--query-examples]
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     */
    static list(group: string): az_ad_group_member_list_command_builder;
    /**
     * Remove a member from a group.
     *
     * Syntax:
     * ```
     * az ad group member remove --group
     *                           --member-id
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     * @param {string} memberId The object ID of the contact, group, user, or service principal.
     */
    static remove(group: string, memberId: string): az_ad_group_member_remove_command_builder;
}
/** Manage Azure Active Directory group owners. */
export declare class az_ad_group_owner {
    /**
     * Add a group owner.
     *
     * Syntax:
     * ```
     * az ad group owner add --group
     *                       --owner-object-id
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     * @param {string} ownerObjectId Owner's object id.
     */
    static add(group: string, ownerObjectId: string): az_ad_group_owner_add_command_builder;
    /**
     * List group owners.
     *
     * Syntax:
     * ```
     * az ad group owner list --group
     *                        [--query-examples]
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     */
    static list(group: string): az_ad_group_owner_list_command_builder;
    /**
     * Remove a group owner.
     *
     * Syntax:
     * ```
     * az ad group owner remove --group
     *                          --owner-object-id
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     * @param {string} ownerObjectId Owner's object id.
     */
    static remove(group: string, ownerObjectId: string): az_ad_group_owner_remove_command_builder;
}
/** Manage Azure Active Directory groups. */
export declare class az_ad_group {
    /**
     * Create a group in the directory.
     *
     * Syntax:
     * ```
     * az ad group create --display-name
     *                    --mail-nickname
     *                    [--description]
     *                    [--force {false, true}]
     * ```
     *
     * @param {string} displayName Object's display name or its prefix.
     * @param {string} mailNickname Mail nickname.
     */
    static create(displayName: string, mailNickname: string): az_ad_group_create_command_builder;
    /**
     * Delete a group from the directory.
     *
     * Syntax:
     * ```
     * az ad group delete --group
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     */
    static delete(group: string): az_ad_group_delete_command_builder;
    /**
     * Gets a collection of object IDs of groups of which the specified group is a member.
     *
     * Syntax:
     * ```
     * az ad group get-member-groups --group
     *                               [--additional-properties]
     *                               [--security-enabled-only {false, true}]
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     */
    static get_member_groups(group: string): az_ad_group_get_member_groups_command_builder;
    /**
     * List groups in the directory.
     *
     * Syntax:
     * ```
     * az ad group list [--display-name]
     *                  [--filter]
     *                  [--query-examples]
     * ```
     */
    static list(): az_ad_group_list_command_builder;
    /**
     * Gets group information from the directory.
     *
     * Syntax:
     * ```
     * az ad group show --group
     *                  [--query-examples]
     * ```
     *
     * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
     */
    static show(group: string): az_ad_group_show_command_builder;
}
/** Show graph information about current signed-in user in CLI. */
export declare class az_ad_signed_in_user {
    /**
     * Get the list of directory objects that are owned by the user.
     *
     * Syntax:
     * ```
     * az ad signed-in-user list-owned-objects [--type]
     * ```
     */
    static list_owned_objects(): az_ad_signed_in_user_list_owned_objects_command_builder;
    /**
     * Gets the details for the currently logged-in user.
     *
     * Syntax:
     * ```
     * az ad signed-in-user show [--query-examples]
     * ```
     */
    static show(): az_ad_signed_in_user_show_command_builder;
}
/** Manage a service principal's credentials. */
export declare class az_ad_sp_credential {
    /**
     * Delete a service principal's credential.
     *
     * Syntax:
     * ```
     * az ad sp credential delete --id
     *                            --key-id
     *                            [--cert]
     * ```
     *
     * @param {string} id Service principal name, or object id.
     * @param {string} keyId Credential key id.
     */
    static delete(id: string, keyId: string): az_ad_sp_credential_delete_command_builder;
    /**
     * List a service principal's credentials.
     *
     * Syntax:
     * ```
     * az ad sp credential list --id
     *                          [--cert]
     *                          [--query-examples]
     * ```
     *
     * @param {string} id Service principal name, or object id.
     */
    static list(id: string): az_ad_sp_credential_list_command_builder;
    /**
     * Reset a service principal credential.
     *
     * Syntax:
     * ```
     * az ad sp credential reset --name
     *                           [--append]
     *                           [--cert]
     *                           [--create-cert]
     *                           [--credential-description]
     *                           [--end-date]
     *                           [--keyvault]
     *                           [--password]
     *                           [--years]
     * ```
     *
     * @param {string} name Name or app ID of the service principal.
     */
    static reset(name: string): az_ad_sp_credential_reset_command_builder;
}
/** Manage service principal owners. */
export declare class az_ad_sp_owner {
    /**
     * List service principal owners.
     *
     * Syntax:
     * ```
     * az ad sp owner list --id
     *                     [--query-examples]
     * ```
     *
     * @param {string} id Service principal name, or object id or the service principal.
     */
    static list(id: string): az_ad_sp_owner_list_command_builder;
}
/** Manage Azure Active Directory service principals for automation authentication. */
export declare class az_ad_sp {
    /**
     * Create a service principal.
     *
     * Syntax:
     * ```
     * az ad sp create --id
     * ```
     *
     * @param {string} id Identifier uri, application id, or object id of the associated application.
     */
    static create(id: string): az_ad_sp_create_command_builder;
    /**
     * Create a service principal and configure its access to Azure resources.
     *
     * Syntax:
     * ```
     * az ad sp create-for-rbac [--cert]
     *                          [--create-cert]
     *                          [--keyvault]
     *                          [--name]
     *                          [--role]
     *                          [--scopes]
     *                          [--sdk-auth {false, true}]
     *                          [--skip-assignment {false, true}]
     *                          [--years]
     * ```
     */
    static create_for_rbac(): az_ad_sp_create_for_rbac_command_builder;
    /**
     * Delete a service principal and its role assignments.
     *
     * Syntax:
     * ```
     * az ad sp delete --id
     * ```
     *
     * @param {string} id Service principal name, or object id.
     */
    static delete(id: string): az_ad_sp_delete_command_builder;
    /**
     * List service principals.
     *
     * Syntax:
     * ```
     * az ad sp list [--all]
     *               [--display-name]
     *               [--filter]
     *               [--query-examples]
     *               [--show-mine]
     *               [--spn]
     * ```
     */
    static list(): az_ad_sp_list_command_builder;
    /**
     * Get the details of a service principal.
     *
     * Syntax:
     * ```
     * az ad sp show --id
     *               [--query-examples]
     * ```
     *
     * @param {string} id Service principal name, or object id.
     */
    static show(id: string): az_ad_sp_show_command_builder;
    /**
     * Update a service principal.
     *
     * Syntax:
     * ```
     * az ad sp update --id
     *                 [--add]
     *                 [--force-string]
     *                 [--remove]
     *                 [--set]
     * ```
     *
     * @param {string} id Service principal name, or object id.
     */
    static update(id: string): az_ad_sp_update_command_builder;
}
/** Manage Azure Active Directory users and user authentication. */
export declare class az_ad_user {
    /**
     * Create an Azure Active Directory user.
     *
     * Syntax:
     * ```
     * az ad user create --display-name
     *                   --password
     *                   --user-principal-name
     *                   [--force-change-password-next-login {false, true}]
     *                   [--immutable-id]
     *                   [--mail-nickname]
     * ```
     *
     * @param {string} displayName Object's display name or its prefix.
     * @param {string} password The password that should be assigned to the user for authentication.
     * @param {string} userPrincipalName Required. The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.
     */
    static create(displayName: string, password: string, userPrincipalName: string): az_ad_user_create_command_builder;
    /**
     * Delete a user.
     *
     * Syntax:
     * ```
     * az ad user delete --id
     * ```
     *
     * @param {string} id The object ID or principal name of the user for which to get information.
     */
    static delete(id: string): az_ad_user_delete_command_builder;
    /**
     * Get groups of which the user is a member.
     *
     * Syntax:
     * ```
     * az ad user get-member-groups --id
     *                              [--security-enabled-only]
     * ```
     *
     * @param {string} id The object ID or principal name of the user for which to get information.
     */
    static get_member_groups(id: string): az_ad_user_get_member_groups_command_builder;
    /**
     * List Azure Active Directory users.
     *
     * Syntax:
     * ```
     * az ad user list [--display-name]
     *                 [--filter]
     *                 [--query-examples]
     *                 [--upn]
     * ```
     */
    static list(): az_ad_user_list_command_builder;
    /**
     * Gets user information from the directory.
     *
     * Syntax:
     * ```
     * az ad user show --id
     *                 [--query-examples]
     * ```
     *
     * @param {string} id The object ID or principal name of the user for which to get information.
     */
    static show(id: string): az_ad_user_show_command_builder;
    /**
     * Update Azure Active Directory users.
     *
     * Syntax:
     * ```
     * az ad user update --id
     *                   [--account-enabled {false, true}]
     *                   [--display-name]
     *                   [--force-change-password-next-login {false, true}]
     *                   [--mail-nickname]
     *                   [--password]
     * ```
     *
     * @param {string} id The object ID or principal name of the user for which to get information.
     */
    static update(id: string): az_ad_user_update_command_builder;
}
/** Manage Azure Active Directory Graph entities needed for Role Based Access Control. */
export declare class az_ad {
}
/**
 * Delete an application's password or certificate credentials.
 *
 * Syntax:
 * ```
 * az ad app credential delete --id
 *                             --key-id
 *                             [--cert]
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id.
 * @param {string} keyId Credential key id.
 */
declare class az_ad_app_credential_delete_command_builder extends CommandBuilder<az_ad_app_credential_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, keyId: string);
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_credential_delete_command_builder;
    /** Credential key id. */
    keyId(value: string): az_ad_app_credential_delete_command_builder;
    /** A certificate based credential. */
    cert(value: string): az_ad_app_credential_delete_command_builder;
}
/**
 * List an application's password or certificate credentials.
 *
 * Syntax:
 * ```
 * az ad app credential list --id
 *                           [--cert]
 *                           [--query-examples]
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id.
 */
declare class az_ad_app_credential_list_command_builder extends CommandBuilder<az_ad_app_credential_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_credential_list_command_builder;
    /** A certificate based credential. */
    cert(value: string): az_ad_app_credential_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_credential_list_command_builder;
}
/**
 * Append or overwrite an application's password or certificate credentials.
 *
 * Syntax:
 * ```
 * az ad app credential reset --id
 *                            [--append]
 *                            [--cert]
 *                            [--create-cert]
 *                            [--credential-description]
 *                            [--end-date]
 *                            [--keyvault]
 *                            [--password]
 *                            [--years]
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id.
 */
declare class az_ad_app_credential_reset_command_builder extends CommandBuilder<az_ad_app_credential_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_credential_reset_command_builder;
    /** Append the new credential instead of overwriting. */
    append(value: string): az_ad_app_credential_reset_command_builder;
    /** Certificate to use for credentials. */
    cert(value: string): az_ad_app_credential_reset_command_builder;
    /** Create a self-signed certificate to use for the credential. */
    createCert(value: string): az_ad_app_credential_reset_command_builder;
    /** The description of the password. */
    credentialDescription(value: string): az_ad_app_credential_reset_command_builder;
    /** Date or datetime after which credentials expire(e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time. */
    endDate(value: string): az_ad_app_credential_reset_command_builder;
    /** Name or ID of a KeyVault to use for creating or retrieving certificates. */
    keyvault(value: string): az_ad_app_credential_reset_command_builder;
    /** App password, aka 'client secret'. */
    password(value: string): az_ad_app_credential_reset_command_builder;
    /** Number of years for which the credentials will be valid. */
    years(value: string): az_ad_app_credential_reset_command_builder;
}
/**
 * Add an application owner.
 *
 * Syntax:
 * ```
 * az ad app owner add --id
 *                     --owner-object-id
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id.
 * @param {string} ownerObjectId Owner's object id.
 */
declare class az_ad_app_owner_add_command_builder extends CommandBuilder<az_ad_app_owner_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, ownerObjectId: string);
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_owner_add_command_builder;
    /** Owner's object id. */
    ownerObjectId(value: string): az_ad_app_owner_add_command_builder;
}
/**
 * List application owners.
 *
 * Syntax:
 * ```
 * az ad app owner list --id
 *                      [--query-examples]
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id of the application.
 */
declare class az_ad_app_owner_list_command_builder extends CommandBuilder<az_ad_app_owner_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier uri, application id, or object id of the application. */
    id(value: string): az_ad_app_owner_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_owner_list_command_builder;
}
/**
 * Remove an application owner.
 *
 * Syntax:
 * ```
 * az ad app owner remove --id
 *                        --owner-object-id
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id.
 * @param {string} ownerObjectId Owner's object id.
 */
declare class az_ad_app_owner_remove_command_builder extends CommandBuilder<az_ad_app_owner_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, ownerObjectId: string);
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_owner_remove_command_builder;
    /** Owner's object id. */
    ownerObjectId(value: string): az_ad_app_owner_remove_command_builder;
}
/**
 * Add an API permission.
 *
 * Syntax:
 * ```
 * az ad app permission add --api
 *                          --api-permissions
 *                          --id
 * ```
 *
 * @param {string} api Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
 * @param {string} apiPermissions Specify `ResourceAccess.id` - The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. Space-separated list of `<resource-access-id>=<type>`.
 * @param {string} id Identifier uri, application id, or object id.
 */
declare class az_ad_app_permission_add_command_builder extends CommandBuilder<az_ad_app_permission_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, api: string, apiPermissions: string, id: string);
    /** Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    api(value: string): az_ad_app_permission_add_command_builder;
    /** Specify `ResourceAccess.id` - The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. Space-separated list of `<resource-access-id>=<type>`. */
    apiPermissions(value: string): az_ad_app_permission_add_command_builder;
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_add_command_builder;
}
/**
 * Grant Application & Delegated permissions through admin-consent.
 *
 * Syntax:
 * ```
 * az ad app permission admin-consent --id
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id.
 */
declare class az_ad_app_permission_admin_consent_command_builder extends CommandBuilder<az_ad_app_permission_admin_consent_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_admin_consent_command_builder;
}
/**
 * Remove an API permission.
 *
 * Syntax:
 * ```
 * az ad app permission delete --api
 *                             --id
 *                             [--api-permissions]
 * ```
 *
 * @param {string} api Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
 * @param {string} id Identifier uri, application id, or object id.
 */
declare class az_ad_app_permission_delete_command_builder extends CommandBuilder<az_ad_app_permission_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, api: string, id: string);
    /** Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    api(value: string): az_ad_app_permission_delete_command_builder;
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_delete_command_builder;
    /** Specify `ResourceAccess.id` - The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. Space-separated list of `<resource-access-id>`. */
    apiPermissions(value: string): az_ad_app_permission_delete_command_builder;
}
/**
 * Grant the app an API Delegated permissions.
 *
 * Syntax:
 * ```
 * az ad app permission grant --api
 *                            --id
 *                            [--consent-type {AllPrincipals, Principal}]
 *                            [--expires]
 *                            [--principal-id]
 *                            [--scope]
 * ```
 *
 * @param {string} api Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
 * @param {string} id Identifier uri, application id, or object id.
 */
declare class az_ad_app_permission_grant_command_builder extends CommandBuilder<az_ad_app_permission_grant_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, api: string, id: string);
    /** Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    api(value: string): az_ad_app_permission_grant_command_builder;
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_grant_command_builder;
    /** Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual. */
    consentType(value: 'AllPrincipals' | 'Principal'): az_ad_app_permission_grant_command_builder;
    /** Expiry date for the permissions in years. e.g. 1, 2 or "never". */
    expires(value: string): az_ad_app_permission_grant_command_builder;
    /** If --consent-type is "Principal", this argument specifies the object of the user that granted consent and applies only for that user. */
    principalId(value: string): az_ad_app_permission_grant_command_builder;
    /** Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token, e.g. User.Read. */
    scope(value: string): az_ad_app_permission_grant_command_builder;
}
/**
 * List API permissions the application has requested.
 *
 * Syntax:
 * ```
 * az ad app permission list --id
 *                           [--query-examples]
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id of the associated application.
 */
declare class az_ad_app_permission_list_command_builder extends CommandBuilder<az_ad_app_permission_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier uri, application id, or object id of the associated application. */
    id(value: string): az_ad_app_permission_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_permission_list_command_builder;
}
/**
 * List Oauth2 permission grants.
 *
 * Syntax:
 * ```
 * az ad app permission list-grants [--filter]
 *                                  [--id]
 *                                  [--show-resource-name {false, true}]
 * ```
 */
declare class az_ad_app_permission_list_grants_command_builder extends CommandBuilder<az_ad_app_permission_list_grants_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_app_permission_list_grants_command_builder;
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_list_grants_command_builder;
    /** Show resource's display name. */
    showResourceName(value: boolean): az_ad_app_permission_list_grants_command_builder;
}
/**
 * Create a web application, web API or native application.
 *
 * Syntax:
 * ```
 * az ad app create --display-name
 *                  [--app-roles]
 *                  [--available-to-other-tenants {false, true}]
 *                  [--credential-description]
 *                  [--end-date]
 *                  [--homepage]
 *                  [--identifier-uris]
 *                  [--key-type {AsymmetricX509Cert, Password, Symmetric}]
 *                  [--key-usage {Sign, Verify}]
 *                  [--key-value]
 *                  [--native-app {false, true}]
 *                  [--oauth2-allow-implicit-flow {false, true}]
 *                  [--optional-claims]
 *                  [--password]
 *                  [--reply-urls]
 *                  [--required-resource-accesses]
 *                  [--start-date]
 * ```
 *
 * @param {string} displayName The display name of the application.
 */
declare class az_ad_app_create_command_builder extends CommandBuilder<az_ad_app_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, displayName: string);
    /** The display name of the application. */
    displayName(value: string): az_ad_app_create_command_builder;
    /** Declare the roles you want to associate with your application. Should be in manifest json format. See examples below for details. */
    appRoles(value: string): az_ad_app_create_command_builder;
    /** The application can be used from any Azure AD tenants. */
    availableToOtherTenants(value: boolean): az_ad_app_create_command_builder;
    /** The description of the password. */
    credentialDescription(value: string): az_ad_app_create_command_builder;
    /** Date or datetime after which credentials expire(e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time. */
    endDate(value: string): az_ad_app_create_command_builder;
    /** The url where users can sign in and use your app. */
    homepage(value: string): az_ad_app_create_command_builder;
    /** Space-separated unique URIs that Azure AD can use for this app. */
    identifierUris(value: string): az_ad_app_create_command_builder;
    /** The type of the key credentials associated with the application. */
    keyType(value: 'AsymmetricX509Cert' | 'Password' | 'Symmetric'): az_ad_app_create_command_builder;
    /** The usage of the key credentials associated with the application. */
    keyUsage(value: 'Sign' | 'Verify'): az_ad_app_create_command_builder;
    /** The value for the key credentials associated with the application. */
    keyValue(value: string): az_ad_app_create_command_builder;
    /** An application which can be installed on a user's device or computer. */
    nativeApp(value: boolean): az_ad_app_create_command_builder;
    /** Whether to allow implicit grant flow for OAuth2. */
    oauth2AllowImplicitFlow(value: boolean): az_ad_app_create_command_builder;
    /** Declare the optional claims for the application. Should be in manifest json format. See examples below for details. Please reference <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type">https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type</a> for optional claim properties. */
    optionalClaims(value: string): az_ad_app_create_command_builder;
    /** App password, aka 'client secret'. */
    password(value: string): az_ad_app_create_command_builder;
    /** Space-separated URIs to which Azure AD will redirect in response to an OAuth 2.0 request. The value does not need to be a physical endpoint, but must be a valid URI. */
    replyUrls(value: string): az_ad_app_create_command_builder;
    /** Resource scopes and roles the application requires access to. Should be in manifest json format. See examples below for details. */
    requiredResourceAccesses(value: string): az_ad_app_create_command_builder;
    /** Date or datetime at which credentials become valid(e.g. '2017-01-01T01:00:00+00:00' or '2017-01-01'). Default value is current time. */
    startDate(value: string): az_ad_app_create_command_builder;
}
/**
 * Delete an application.
 *
 * Syntax:
 * ```
 * az ad app delete --id
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id.
 */
declare class az_ad_app_delete_command_builder extends CommandBuilder<az_ad_app_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_delete_command_builder;
}
/**
 * List applications.
 *
 * Syntax:
 * ```
 * az ad app list [--all]
 *                [--app-id]
 *                [--display-name]
 *                [--filter]
 *                [--identifier-uri]
 *                [--query-examples]
 *                [--show-mine]
 * ```
 */
declare class az_ad_app_list_command_builder extends CommandBuilder<az_ad_app_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** List all entities, expect long delay if under a big organization. */
    all(value: string): az_ad_app_list_command_builder;
    /** Application id. */
    appId(value: string): az_ad_app_list_command_builder;
    /** The display name of the application. */
    displayName(value: string): az_ad_app_list_command_builder;
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_app_list_command_builder;
    /** Graph application identifier, must be in uri format. */
    identifierUri(value: string): az_ad_app_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_list_command_builder;
    /** List entities owned by the current user. */
    showMine(value: string): az_ad_app_list_command_builder;
}
/**
 * Get the details of an application.
 *
 * Syntax:
 * ```
 * az ad app show --id
 *                [--query-examples]
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id.
 */
declare class az_ad_app_show_command_builder extends CommandBuilder<az_ad_app_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_show_command_builder;
}
/**
 * Update an application.
 *
 * Syntax:
 * ```
 * az ad app update --id
 *                  [--add]
 *                  [--app-roles]
 *                  [--available-to-other-tenants {false, true}]
 *                  [--credential-description]
 *                  [--display-name]
 *                  [--end-date]
 *                  [--force-string]
 *                  [--homepage]
 *                  [--identifier-uris]
 *                  [--key-type {AsymmetricX509Cert, Password, Symmetric}]
 *                  [--key-usage {Sign, Verify}]
 *                  [--key-value]
 *                  [--oauth2-allow-implicit-flow {false, true}]
 *                  [--optional-claims]
 *                  [--password]
 *                  [--remove]
 *                  [--reply-urls]
 *                  [--required-resource-accesses]
 *                  [--set]
 *                  [--start-date]
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id.
 */
declare class az_ad_app_update_command_builder extends CommandBuilder<az_ad_app_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ad_app_update_command_builder;
    /** Declare the roles you want to associate with your application. Should be in manifest json format. See examples below for details. */
    appRoles(value: string): az_ad_app_update_command_builder;
    /** The application can be used from any Azure AD tenants. */
    availableToOtherTenants(value: boolean): az_ad_app_update_command_builder;
    /** The description of the password. */
    credentialDescription(value: string): az_ad_app_update_command_builder;
    /** The display name of the application. */
    displayName(value: string): az_ad_app_update_command_builder;
    /** Date or datetime after which credentials expire(e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time. */
    endDate(value: string): az_ad_app_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ad_app_update_command_builder;
    /** The url where users can sign in and use your app. */
    homepage(value: string): az_ad_app_update_command_builder;
    /** Space-separated unique URIs that Azure AD can use for this app. */
    identifierUris(value: string): az_ad_app_update_command_builder;
    /** The type of the key credentials associated with the application. */
    keyType(value: 'AsymmetricX509Cert' | 'Password' | 'Symmetric'): az_ad_app_update_command_builder;
    /** The usage of the key credentials associated with the application. */
    keyUsage(value: 'Sign' | 'Verify'): az_ad_app_update_command_builder;
    /** The value for the key credentials associated with the application. */
    keyValue(value: string): az_ad_app_update_command_builder;
    /** Whether to allow implicit grant flow for OAuth2. */
    oauth2AllowImplicitFlow(value: boolean): az_ad_app_update_command_builder;
    /** Declare the optional claims for the application. Should be in manifest json format. See examples below for details. Please reference <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type">https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type</a> for optional claim properties. */
    optionalClaims(value: string): az_ad_app_update_command_builder;
    /** App password, aka 'client secret'. */
    password(value: string): az_ad_app_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ad_app_update_command_builder;
    /** Space-separated URIs to which Azure AD will redirect in response to an OAuth 2.0 request. The value does not need to be a physical endpoint, but must be a valid URI. */
    replyUrls(value: string): az_ad_app_update_command_builder;
    /** Resource scopes and roles the application requires access to. Should be in manifest json format. See examples below for details. */
    requiredResourceAccesses(value: string): az_ad_app_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ad_app_update_command_builder;
    /** Date or datetime at which credentials become valid(e.g. '2017-01-01T01:00:00+00:00' or '2017-01-01'). Default value is current time. */
    startDate(value: string): az_ad_app_update_command_builder;
}
/**
 * Add a member to a group.
 *
 * Syntax:
 * ```
 * az ad group member add --group
 *                        --member-id
 *                        [--additional-properties]
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 * @param {string} memberId The object ID of the contact, group, user, or service principal.
 */
declare class az_ad_group_member_add_command_builder extends CommandBuilder<az_ad_group_member_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string, memberId: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_member_add_command_builder;
    /** The object ID of the contact, group, user, or service principal. */
    memberId(value: string): az_ad_group_member_add_command_builder;
    /** Unmatched properties from the message are deserialized this collection. */
    additionalProperties(value: string): az_ad_group_member_add_command_builder;
}
/**
 * Check if a member is in a group.
 *
 * Syntax:
 * ```
 * az ad group member check --group
 *                          --member-id
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 * @param {string} memberId The object ID of the contact, group, user, or service principal.
 */
declare class az_ad_group_member_check_command_builder extends CommandBuilder<az_ad_group_member_check_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string, memberId: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_member_check_command_builder;
    /** The object ID of the contact, group, user, or service principal. */
    memberId(value: string): az_ad_group_member_check_command_builder;
}
/**
 * Gets the members of a group.
 *
 * Syntax:
 * ```
 * az ad group member list --group
 *                         [--query-examples]
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 */
declare class az_ad_group_member_list_command_builder extends CommandBuilder<az_ad_group_member_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_member_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_group_member_list_command_builder;
}
/**
 * Remove a member from a group.
 *
 * Syntax:
 * ```
 * az ad group member remove --group
 *                           --member-id
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 * @param {string} memberId The object ID of the contact, group, user, or service principal.
 */
declare class az_ad_group_member_remove_command_builder extends CommandBuilder<az_ad_group_member_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string, memberId: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_member_remove_command_builder;
    /** The object ID of the contact, group, user, or service principal. */
    memberId(value: string): az_ad_group_member_remove_command_builder;
}
/**
 * Add a group owner.
 *
 * Syntax:
 * ```
 * az ad group owner add --group
 *                       --owner-object-id
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 * @param {string} ownerObjectId Owner's object id.
 */
declare class az_ad_group_owner_add_command_builder extends CommandBuilder<az_ad_group_owner_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string, ownerObjectId: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_owner_add_command_builder;
    /** Owner's object id. */
    ownerObjectId(value: string): az_ad_group_owner_add_command_builder;
}
/**
 * List group owners.
 *
 * Syntax:
 * ```
 * az ad group owner list --group
 *                        [--query-examples]
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 */
declare class az_ad_group_owner_list_command_builder extends CommandBuilder<az_ad_group_owner_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_owner_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_group_owner_list_command_builder;
}
/**
 * Remove a group owner.
 *
 * Syntax:
 * ```
 * az ad group owner remove --group
 *                          --owner-object-id
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 * @param {string} ownerObjectId Owner's object id.
 */
declare class az_ad_group_owner_remove_command_builder extends CommandBuilder<az_ad_group_owner_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string, ownerObjectId: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_owner_remove_command_builder;
    /** Owner's object id. */
    ownerObjectId(value: string): az_ad_group_owner_remove_command_builder;
}
/**
 * Create a group in the directory.
 *
 * Syntax:
 * ```
 * az ad group create --display-name
 *                    --mail-nickname
 *                    [--description]
 *                    [--force {false, true}]
 * ```
 *
 * @param {string} displayName Object's display name or its prefix.
 * @param {string} mailNickname Mail nickname.
 */
declare class az_ad_group_create_command_builder extends CommandBuilder<az_ad_group_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, displayName: string, mailNickname: string);
    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_group_create_command_builder;
    /** Mail nickname. */
    mailNickname(value: string): az_ad_group_create_command_builder;
    /** Group description. */
    description(value: string): az_ad_group_create_command_builder;
    /** Always create a new group instead of updating the one with same display and mail nickname. */
    force(value: boolean): az_ad_group_create_command_builder;
}
/**
 * Delete a group from the directory.
 *
 * Syntax:
 * ```
 * az ad group delete --group
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 */
declare class az_ad_group_delete_command_builder extends CommandBuilder<az_ad_group_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_delete_command_builder;
}
/**
 * Gets a collection of object IDs of groups of which the specified group is a member.
 *
 * Syntax:
 * ```
 * az ad group get-member-groups --group
 *                               [--additional-properties]
 *                               [--security-enabled-only {false, true}]
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 */
declare class az_ad_group_get_member_groups_command_builder extends CommandBuilder<az_ad_group_get_member_groups_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_get_member_groups_command_builder;
    /** Unmatched properties from the message are deserialized this collection. */
    additionalProperties(value: string): az_ad_group_get_member_groups_command_builder;
    /** If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked. */
    securityEnabledOnly(value: boolean): az_ad_group_get_member_groups_command_builder;
}
/**
 * List groups in the directory.
 *
 * Syntax:
 * ```
 * az ad group list [--display-name]
 *                  [--filter]
 *                  [--query-examples]
 * ```
 */
declare class az_ad_group_list_command_builder extends CommandBuilder<az_ad_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_group_list_command_builder;
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_group_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_group_list_command_builder;
}
/**
 * Gets group information from the directory.
 *
 * Syntax:
 * ```
 * az ad group show --group
 *                  [--query-examples]
 * ```
 *
 * @param {string} group Group's object id or display name(prefix also works if there is a unique match).
 */
declare class az_ad_group_show_command_builder extends CommandBuilder<az_ad_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, group: string);
    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_group_show_command_builder;
}
/**
 * Get the list of directory objects that are owned by the user.
 *
 * Syntax:
 * ```
 * az ad signed-in-user list-owned-objects [--type]
 * ```
 */
declare class az_ad_signed_in_user_list_owned_objects_command_builder extends CommandBuilder<az_ad_signed_in_user_list_owned_objects_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Object type filter, e.g. "application", "servicePrincipal"  "group", etc. */
    type(value: string): az_ad_signed_in_user_list_owned_objects_command_builder;
}
/**
 * Gets the details for the currently logged-in user.
 *
 * Syntax:
 * ```
 * az ad signed-in-user show [--query-examples]
 * ```
 */
declare class az_ad_signed_in_user_show_command_builder extends CommandBuilder<az_ad_signed_in_user_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_signed_in_user_show_command_builder;
}
/**
 * Delete a service principal's credential.
 *
 * Syntax:
 * ```
 * az ad sp credential delete --id
 *                            --key-id
 *                            [--cert]
 * ```
 *
 * @param {string} id Service principal name, or object id.
 * @param {string} keyId Credential key id.
 */
declare class az_ad_sp_credential_delete_command_builder extends CommandBuilder<az_ad_sp_credential_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, keyId: string);
    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_credential_delete_command_builder;
    /** Credential key id. */
    keyId(value: string): az_ad_sp_credential_delete_command_builder;
    /** A certificate based credential. */
    cert(value: string): az_ad_sp_credential_delete_command_builder;
}
/**
 * List a service principal's credentials.
 *
 * Syntax:
 * ```
 * az ad sp credential list --id
 *                          [--cert]
 *                          [--query-examples]
 * ```
 *
 * @param {string} id Service principal name, or object id.
 */
declare class az_ad_sp_credential_list_command_builder extends CommandBuilder<az_ad_sp_credential_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_credential_list_command_builder;
    /** A certificate based credential. */
    cert(value: string): az_ad_sp_credential_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_sp_credential_list_command_builder;
}
/**
 * Reset a service principal credential.
 *
 * Syntax:
 * ```
 * az ad sp credential reset --name
 *                           [--append]
 *                           [--cert]
 *                           [--create-cert]
 *                           [--credential-description]
 *                           [--end-date]
 *                           [--keyvault]
 *                           [--password]
 *                           [--years]
 * ```
 *
 * @param {string} name Name or app ID of the service principal.
 */
declare class az_ad_sp_credential_reset_command_builder extends CommandBuilder<az_ad_sp_credential_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name or app ID of the service principal. */
    name(value: string): az_ad_sp_credential_reset_command_builder;
    /** Append the new credential instead of overwriting. */
    append(value: string): az_ad_sp_credential_reset_command_builder;
    /** Certificate to use for credentials. */
    cert(value: string): az_ad_sp_credential_reset_command_builder;
    /** Create a self-signed certificate to use for the credential. */
    createCert(value: string): az_ad_sp_credential_reset_command_builder;
    /** The description of the password. */
    credentialDescription(value: string): az_ad_sp_credential_reset_command_builder;
    /** Finer grain of expiry time if '--years' is insufficient, e.g. '2020-12-31T11:59:59+00:00' or '2299-12-31'. */
    endDate(value: string): az_ad_sp_credential_reset_command_builder;
    /** Name or ID of a KeyVault to use for creating or retrieving certificates. */
    keyvault(value: string): az_ad_sp_credential_reset_command_builder;
    /** The password used to log in. */
    password(value: string): az_ad_sp_credential_reset_command_builder;
    /** Number of years for which the credentials will be valid. Default: 1 year. */
    years(value: string): az_ad_sp_credential_reset_command_builder;
}
/**
 * List service principal owners.
 *
 * Syntax:
 * ```
 * az ad sp owner list --id
 *                     [--query-examples]
 * ```
 *
 * @param {string} id Service principal name, or object id or the service principal.
 */
declare class az_ad_sp_owner_list_command_builder extends CommandBuilder<az_ad_sp_owner_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Service principal name, or object id or the service principal. */
    id(value: string): az_ad_sp_owner_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_sp_owner_list_command_builder;
}
/**
 * Create a service principal.
 *
 * Syntax:
 * ```
 * az ad sp create --id
 * ```
 *
 * @param {string} id Identifier uri, application id, or object id of the associated application.
 */
declare class az_ad_sp_create_command_builder extends CommandBuilder<az_ad_sp_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Identifier uri, application id, or object id of the associated application. */
    id(value: string): az_ad_sp_create_command_builder;
}
/**
 * Create a service principal and configure its access to Azure resources.
 *
 * Syntax:
 * ```
 * az ad sp create-for-rbac [--cert]
 *                          [--create-cert]
 *                          [--keyvault]
 *                          [--name]
 *                          [--role]
 *                          [--scopes]
 *                          [--sdk-auth {false, true}]
 *                          [--skip-assignment {false, true}]
 *                          [--years]
 * ```
 */
declare class az_ad_sp_create_for_rbac_command_builder extends CommandBuilder<az_ad_sp_create_for_rbac_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Certificate to use for credentials. */
    cert(value: string): az_ad_sp_create_for_rbac_command_builder;
    /** Create a self-signed certificate to use for the credential. Only the current OS user has read/write permission to this certificate. */
    createCert(value: string): az_ad_sp_create_for_rbac_command_builder;
    /** Name or ID of a KeyVault to use for creating or retrieving certificates. */
    keyvault(value: string): az_ad_sp_create_for_rbac_command_builder;
    /** A URI to use as the logic name. It doesn't need to exist. If not present, CLI will generate one. */
    name(value: string): az_ad_sp_create_for_rbac_command_builder;
    /** Role of the service principal. */
    role(value: string): az_ad_sp_create_for_rbac_command_builder;
    /** Space-separated list of scopes the service principal's role assignment applies to. Defaults to the root of the current subscription. e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scopes(value: string): az_ad_sp_create_for_rbac_command_builder;
    /** Output result in compatible with Azure SDK auth file. */
    sdkAuth(value: boolean): az_ad_sp_create_for_rbac_command_builder;
    /** Skip creating the default assignment, which allows the service principal to access resources under the current subscription. When specified, --scopes will be ignored. You may use `az role assignment create` to create role assignments for this service principal later. */
    skipAssignment(value: boolean): az_ad_sp_create_for_rbac_command_builder;
    /** Number of years for which the credentials will be valid. Default: 1 year. */
    years(value: string): az_ad_sp_create_for_rbac_command_builder;
}
/**
 * Delete a service principal and its role assignments.
 *
 * Syntax:
 * ```
 * az ad sp delete --id
 * ```
 *
 * @param {string} id Service principal name, or object id.
 */
declare class az_ad_sp_delete_command_builder extends CommandBuilder<az_ad_sp_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_delete_command_builder;
}
/**
 * List service principals.
 *
 * Syntax:
 * ```
 * az ad sp list [--all]
 *               [--display-name]
 *               [--filter]
 *               [--query-examples]
 *               [--show-mine]
 *               [--spn]
 * ```
 */
declare class az_ad_sp_list_command_builder extends CommandBuilder<az_ad_sp_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** List all entities, expect long delay if under a big organization. */
    all(value: string): az_ad_sp_list_command_builder;
    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_sp_list_command_builder;
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_sp_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_sp_list_command_builder;
    /** List entities owned by the current user. */
    showMine(value: string): az_ad_sp_list_command_builder;
    /** Service principal name. */
    spn(value: string): az_ad_sp_list_command_builder;
}
/**
 * Get the details of a service principal.
 *
 * Syntax:
 * ```
 * az ad sp show --id
 *               [--query-examples]
 * ```
 *
 * @param {string} id Service principal name, or object id.
 */
declare class az_ad_sp_show_command_builder extends CommandBuilder<az_ad_sp_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_sp_show_command_builder;
}
/**
 * Update a service principal.
 *
 * Syntax:
 * ```
 * az ad sp update --id
 *                 [--add]
 *                 [--force-string]
 *                 [--remove]
 *                 [--set]
 * ```
 *
 * @param {string} id Service principal name, or object id.
 */
declare class az_ad_sp_update_command_builder extends CommandBuilder<az_ad_sp_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ad_sp_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ad_sp_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ad_sp_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ad_sp_update_command_builder;
}
/**
 * Create an Azure Active Directory user.
 *
 * Syntax:
 * ```
 * az ad user create --display-name
 *                   --password
 *                   --user-principal-name
 *                   [--force-change-password-next-login {false, true}]
 *                   [--immutable-id]
 *                   [--mail-nickname]
 * ```
 *
 * @param {string} displayName Object's display name or its prefix.
 * @param {string} password The password that should be assigned to the user for authentication.
 * @param {string} userPrincipalName Required. The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant.
 */
declare class az_ad_user_create_command_builder extends CommandBuilder<az_ad_user_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, displayName: string, password: string, userPrincipalName: string);
    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_user_create_command_builder;
    /** The password that should be assigned to the user for authentication. */
    password(value: string): az_ad_user_create_command_builder;
    /** Required. The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant. */
    userPrincipalName(value: string): az_ad_user_create_command_builder;
    /** Marks this user as needing to update their password the next time they authenticate. If omitted, false will be used. */
    forceChangePasswordNextLogin(value: boolean): az_ad_user_create_command_builder;
    /** This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object. */
    immutableId(value: string): az_ad_user_create_command_builder;
    /** Mail alias. Defaults to user principal name. */
    mailNickname(value: string): az_ad_user_create_command_builder;
}
/**
 * Delete a user.
 *
 * Syntax:
 * ```
 * az ad user delete --id
 * ```
 *
 * @param {string} id The object ID or principal name of the user for which to get information.
 */
declare class az_ad_user_delete_command_builder extends CommandBuilder<az_ad_user_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** The object ID or principal name of the user for which to get information. */
    id(value: string): az_ad_user_delete_command_builder;
}
/**
 * Get groups of which the user is a member.
 *
 * Syntax:
 * ```
 * az ad user get-member-groups --id
 *                              [--security-enabled-only]
 * ```
 *
 * @param {string} id The object ID or principal name of the user for which to get information.
 */
declare class az_ad_user_get_member_groups_command_builder extends CommandBuilder<az_ad_user_get_member_groups_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** The object ID or principal name of the user for which to get information. */
    id(value: string): az_ad_user_get_member_groups_command_builder;
    /** If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked. */
    securityEnabledOnly(value: string): az_ad_user_get_member_groups_command_builder;
}
/**
 * List Azure Active Directory users.
 *
 * Syntax:
 * ```
 * az ad user list [--display-name]
 *                 [--filter]
 *                 [--query-examples]
 *                 [--upn]
 * ```
 */
declare class az_ad_user_list_command_builder extends CommandBuilder<az_ad_user_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_user_list_command_builder;
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_user_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_user_list_command_builder;
    /** User principal name, e.g. john.doe@contoso.com. */
    upn(value: string): az_ad_user_list_command_builder;
}
/**
 * Gets user information from the directory.
 *
 * Syntax:
 * ```
 * az ad user show --id
 *                 [--query-examples]
 * ```
 *
 * @param {string} id The object ID or principal name of the user for which to get information.
 */
declare class az_ad_user_show_command_builder extends CommandBuilder<az_ad_user_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** The object ID or principal name of the user for which to get information. */
    id(value: string): az_ad_user_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_user_show_command_builder;
}
/**
 * Update Azure Active Directory users.
 *
 * Syntax:
 * ```
 * az ad user update --id
 *                   [--account-enabled {false, true}]
 *                   [--display-name]
 *                   [--force-change-password-next-login {false, true}]
 *                   [--mail-nickname]
 *                   [--password]
 * ```
 *
 * @param {string} id The object ID or principal name of the user for which to get information.
 */
declare class az_ad_user_update_command_builder extends CommandBuilder<az_ad_user_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string);
    /** The object ID or principal name of the user for which to get information. */
    id(value: string): az_ad_user_update_command_builder;
    /** Enable the user account. */
    accountEnabled(value: boolean): az_ad_user_update_command_builder;
    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_user_update_command_builder;
    /** Require the user to change their password the next time they log in. Only valid when --password is specified. */
    forceChangePasswordNextLogin(value: boolean): az_ad_user_update_command_builder;
    /** Mail alias. Defaults to user principal name. */
    mailNickname(value: string): az_ad_user_update_command_builder;
    /** User password. */
    password(value: string): az_ad_user_update_command_builder;
}
export {};
