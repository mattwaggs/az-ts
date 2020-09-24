import { CommandBuilder } from '../base';

/** Manage an application's password or certificate credentials. */
export class az_ad_app_credential {
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
    static az_ad_app_credential_delete(id: string, keyId: string): az_ad_app_credential_delete_command_builder {
        return new az_ad_app_credential_delete_command_builder("az ad app credential delete", id, keyId);
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
    static az_ad_app_credential_list(id: string): az_ad_app_credential_list_command_builder {
        return new az_ad_app_credential_list_command_builder("az ad app credential list", id);
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
    static az_ad_app_credential_reset(id: string): az_ad_app_credential_reset_command_builder {
        return new az_ad_app_credential_reset_command_builder("az ad app credential reset", id);
    }
}

/** Manage application owners. */
export class az_ad_app_owner {
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
    static az_ad_app_owner_add(id: string, ownerObjectId: string): az_ad_app_owner_add_command_builder {
        return new az_ad_app_owner_add_command_builder("az ad app owner add", id, ownerObjectId);
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
    static az_ad_app_owner_list(id: string): az_ad_app_owner_list_command_builder {
        return new az_ad_app_owner_list_command_builder("az ad app owner list", id);
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
    static az_ad_app_owner_remove(id: string, ownerObjectId: string): az_ad_app_owner_remove_command_builder {
        return new az_ad_app_owner_remove_command_builder("az ad app owner remove", id, ownerObjectId);
    }
}

/** Manage an application's OAuth2 permissions. */
export class az_ad_app_permission {
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
    static az_ad_app_permission_add(api: string, apiPermissions: string, id: string): az_ad_app_permission_add_command_builder {
        return new az_ad_app_permission_add_command_builder("az ad app permission add", api, apiPermissions, id);
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
    static az_ad_app_permission_admin_consent(id: string): az_ad_app_permission_admin_consent_command_builder {
        return new az_ad_app_permission_admin_consent_command_builder("az ad app permission admin-consent", id);
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
    static az_ad_app_permission_delete(api: string, id: string): az_ad_app_permission_delete_command_builder {
        return new az_ad_app_permission_delete_command_builder("az ad app permission delete", api, id);
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
    static az_ad_app_permission_grant(api: string, id: string): az_ad_app_permission_grant_command_builder {
        return new az_ad_app_permission_grant_command_builder("az ad app permission grant", api, id);
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
    static az_ad_app_permission_list(id: string): az_ad_app_permission_list_command_builder {
        return new az_ad_app_permission_list_command_builder("az ad app permission list", id);
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
    static az_ad_app_permission_list_grants(): az_ad_app_permission_list_grants_command_builder {
        return new az_ad_app_permission_list_grants_command_builder("az ad app permission list-grants");
    }
}

/** Manage applications with AAD Graph. */
export class az_ad_app {
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
    static az_ad_app_create(displayName: string): az_ad_app_create_command_builder {
        return new az_ad_app_create_command_builder("az ad app create", displayName);
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
    static az_ad_app_delete(id: string): az_ad_app_delete_command_builder {
        return new az_ad_app_delete_command_builder("az ad app delete", id);
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
    static az_ad_app_list(): az_ad_app_list_command_builder {
        return new az_ad_app_list_command_builder("az ad app list");
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
    static az_ad_app_show(id: string): az_ad_app_show_command_builder {
        return new az_ad_app_show_command_builder("az ad app show", id);
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
    static az_ad_app_update(id: string): az_ad_app_update_command_builder {
        return new az_ad_app_update_command_builder("az ad app update", id);
    }
}

/** Manage Azure Active Directory group members. */
export class az_ad_group_member {
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
    static az_ad_group_member_add(group: string, memberId: string): az_ad_group_member_add_command_builder {
        return new az_ad_group_member_add_command_builder("az ad group member add", group, memberId);
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
    static az_ad_group_member_check(group: string, memberId: string): az_ad_group_member_check_command_builder {
        return new az_ad_group_member_check_command_builder("az ad group member check", group, memberId);
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
    static az_ad_group_member_list(group: string): az_ad_group_member_list_command_builder {
        return new az_ad_group_member_list_command_builder("az ad group member list", group);
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
    static az_ad_group_member_remove(group: string, memberId: string): az_ad_group_member_remove_command_builder {
        return new az_ad_group_member_remove_command_builder("az ad group member remove", group, memberId);
    }
}

/** Manage Azure Active Directory group owners. */
export class az_ad_group_owner {
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
    static az_ad_group_owner_add(group: string, ownerObjectId: string): az_ad_group_owner_add_command_builder {
        return new az_ad_group_owner_add_command_builder("az ad group owner add", group, ownerObjectId);
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
    static az_ad_group_owner_list(group: string): az_ad_group_owner_list_command_builder {
        return new az_ad_group_owner_list_command_builder("az ad group owner list", group);
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
    static az_ad_group_owner_remove(group: string, ownerObjectId: string): az_ad_group_owner_remove_command_builder {
        return new az_ad_group_owner_remove_command_builder("az ad group owner remove", group, ownerObjectId);
    }
}

/** Manage Azure Active Directory groups. */
export class az_ad_group {
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
    static az_ad_group_create(displayName: string, mailNickname: string): az_ad_group_create_command_builder {
        return new az_ad_group_create_command_builder("az ad group create", displayName, mailNickname);
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
    static az_ad_group_delete(group: string): az_ad_group_delete_command_builder {
        return new az_ad_group_delete_command_builder("az ad group delete", group);
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
    static az_ad_group_get_member_groups(group: string): az_ad_group_get_member_groups_command_builder {
        return new az_ad_group_get_member_groups_command_builder("az ad group get-member-groups", group);
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
    static az_ad_group_list(): az_ad_group_list_command_builder {
        return new az_ad_group_list_command_builder("az ad group list");
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
    static az_ad_group_show(group: string): az_ad_group_show_command_builder {
        return new az_ad_group_show_command_builder("az ad group show", group);
    }
}

/** Show graph information about current signed-in user in CLI. */
export class az_ad_signed_in_user {
    /**
     * Get the list of directory objects that are owned by the user.
     *
     * Syntax:
     * ```
     * az ad signed-in-user list-owned-objects [--type]
     * ```
     */
    static az_ad_signed_in_user_list_owned_objects(): az_ad_signed_in_user_list_owned_objects_command_builder {
        return new az_ad_signed_in_user_list_owned_objects_command_builder("az ad signed-in-user list-owned-objects");
    }

    /**
     * Gets the details for the currently logged-in user.
     *
     * Syntax:
     * ```
     * az ad signed-in-user show [--query-examples]
     * ```
     */
    static az_ad_signed_in_user_show(): az_ad_signed_in_user_show_command_builder {
        return new az_ad_signed_in_user_show_command_builder("az ad signed-in-user show");
    }
}

/** Manage a service principal's credentials. */
export class az_ad_sp_credential {
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
    static az_ad_sp_credential_delete(id: string, keyId: string): az_ad_sp_credential_delete_command_builder {
        return new az_ad_sp_credential_delete_command_builder("az ad sp credential delete", id, keyId);
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
    static az_ad_sp_credential_list(id: string): az_ad_sp_credential_list_command_builder {
        return new az_ad_sp_credential_list_command_builder("az ad sp credential list", id);
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
    static az_ad_sp_credential_reset(name: string): az_ad_sp_credential_reset_command_builder {
        return new az_ad_sp_credential_reset_command_builder("az ad sp credential reset", name);
    }
}

/** Manage service principal owners. */
export class az_ad_sp_owner {
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
    static az_ad_sp_owner_list(id: string): az_ad_sp_owner_list_command_builder {
        return new az_ad_sp_owner_list_command_builder("az ad sp owner list", id);
    }
}

/** Manage Azure Active Directory service principals for automation authentication. */
export class az_ad_sp {
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
    static az_ad_sp_create(id: string): az_ad_sp_create_command_builder {
        return new az_ad_sp_create_command_builder("az ad sp create", id);
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
    static az_ad_sp_create_for_rbac(): az_ad_sp_create_for_rbac_command_builder {
        return new az_ad_sp_create_for_rbac_command_builder("az ad sp create-for-rbac");
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
    static az_ad_sp_delete(id: string): az_ad_sp_delete_command_builder {
        return new az_ad_sp_delete_command_builder("az ad sp delete", id);
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
    static az_ad_sp_list(): az_ad_sp_list_command_builder {
        return new az_ad_sp_list_command_builder("az ad sp list");
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
    static az_ad_sp_show(id: string): az_ad_sp_show_command_builder {
        return new az_ad_sp_show_command_builder("az ad sp show", id);
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
    static az_ad_sp_update(id: string): az_ad_sp_update_command_builder {
        return new az_ad_sp_update_command_builder("az ad sp update", id);
    }
}

/** Manage Azure Active Directory users and user authentication. */
export class az_ad_user {
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
    static az_ad_user_create(displayName: string, password: string, userPrincipalName: string): az_ad_user_create_command_builder {
        return new az_ad_user_create_command_builder("az ad user create", displayName, password, userPrincipalName);
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
    static az_ad_user_delete(id: string): az_ad_user_delete_command_builder {
        return new az_ad_user_delete_command_builder("az ad user delete", id);
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
    static az_ad_user_get_member_groups(id: string): az_ad_user_get_member_groups_command_builder {
        return new az_ad_user_get_member_groups_command_builder("az ad user get-member-groups", id);
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
    static az_ad_user_list(): az_ad_user_list_command_builder {
        return new az_ad_user_list_command_builder("az ad user list");
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
    static az_ad_user_show(id: string): az_ad_user_show_command_builder {
        return new az_ad_user_show_command_builder("az ad user show", id);
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
    static az_ad_user_update(id: string): az_ad_user_update_command_builder {
        return new az_ad_user_update_command_builder("az ad user update", id);
    }
}

/** Manage Azure Active Directory Graph entities needed for Role Based Access Control. */
export class az_ad {
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
class az_ad_app_credential_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, keyId: string) {
        super(commandParent);
        this.id(id)
        this.keyId(keyId)
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_credential_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Credential key id. */
    keyId(value: string): az_ad_app_credential_delete_command_builder {
        this.setFlag("--key-id", value);
        return this;
    }

    /** A certificate based credential. */
    cert(value: string): az_ad_app_credential_delete_command_builder {
        this.setFlag("--cert", value);
        return this;
    }
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
class az_ad_app_credential_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_credential_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** A certificate based credential. */
    cert(value: string): az_ad_app_credential_list_command_builder {
        this.setFlag("--cert", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_credential_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_app_credential_reset_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_credential_reset_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Append the new credential instead of overwriting. */
    append(value: string): az_ad_app_credential_reset_command_builder {
        this.setFlag("--append", value);
        return this;
    }

    /** Certificate to use for credentials. */
    cert(value: string): az_ad_app_credential_reset_command_builder {
        this.setFlag("--cert", value);
        return this;
    }

    /** Create a self-signed certificate to use for the credential. */
    createCert(value: string): az_ad_app_credential_reset_command_builder {
        this.setFlag("--create-cert", value);
        return this;
    }

    /** The description of the password. */
    credentialDescription(value: string): az_ad_app_credential_reset_command_builder {
        this.setFlag("--credential-description", value);
        return this;
    }

    /** Date or datetime after which credentials expire(e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time. */
    endDate(value: string): az_ad_app_credential_reset_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** Name or ID of a KeyVault to use for creating or retrieving certificates. */
    keyvault(value: string): az_ad_app_credential_reset_command_builder {
        this.setFlag("--keyvault", value);
        return this;
    }

    /** App password, aka 'client secret'. */
    password(value: string): az_ad_app_credential_reset_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Number of years for which the credentials will be valid. */
    years(value: string): az_ad_app_credential_reset_command_builder {
        this.setFlag("--years", value);
        return this;
    }
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
class az_ad_app_owner_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, ownerObjectId: string) {
        super(commandParent);
        this.id(id)
        this.ownerObjectId(ownerObjectId)
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_owner_add_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Owner's object id. */
    ownerObjectId(value: string): az_ad_app_owner_add_command_builder {
        this.setFlag("--owner-object-id", value);
        return this;
    }
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
class az_ad_app_owner_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Identifier uri, application id, or object id of the application. */
    id(value: string): az_ad_app_owner_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_owner_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_app_owner_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, ownerObjectId: string) {
        super(commandParent);
        this.id(id)
        this.ownerObjectId(ownerObjectId)
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_owner_remove_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Owner's object id. */
    ownerObjectId(value: string): az_ad_app_owner_remove_command_builder {
        this.setFlag("--owner-object-id", value);
        return this;
    }
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
class az_ad_app_permission_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, api: string, apiPermissions: string, id: string) {
        super(commandParent);
        this.api(api)
        this.apiPermissions(apiPermissions)
        this.id(id)
    }

    /** Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    api(value: string): az_ad_app_permission_add_command_builder {
        this.setFlag("--api", value);
        return this;
    }

    /** Specify `ResourceAccess.id` - The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. Space-separated list of `<resource-access-id>=<type>`. */
    apiPermissions(value: string): az_ad_app_permission_add_command_builder {
        this.setFlag("--api-permissions", value);
        return this;
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_add_command_builder {
        this.setFlag("--id", value);
        return this;
    }
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
class az_ad_app_permission_admin_consent_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_admin_consent_command_builder {
        this.setFlag("--id", value);
        return this;
    }
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
class az_ad_app_permission_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, api: string, id: string) {
        super(commandParent);
        this.api(api)
        this.id(id)
    }

    /** Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    api(value: string): az_ad_app_permission_delete_command_builder {
        this.setFlag("--api", value);
        return this;
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Specify `ResourceAccess.id` - The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. Space-separated list of `<resource-access-id>`. */
    apiPermissions(value: string): az_ad_app_permission_delete_command_builder {
        this.setFlag("--api-permissions", value);
        return this;
    }
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
class az_ad_app_permission_grant_command_builder extends CommandBuilder {
    constructor(commandPath: string, api: string, id: string) {
        super(commandParent);
        this.api(api)
        this.id(id)
    }

    /** Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    api(value: string): az_ad_app_permission_grant_command_builder {
        this.setFlag("--api", value);
        return this;
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_grant_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual. */
    consentType(value: 'AllPrincipals' | 'Principal'): az_ad_app_permission_grant_command_builder {
        this.setFlag("--consent-type", value);
        return this;
    }

    /** Expiry date for the permissions in years. e.g. 1, 2 or "never". */
    expires(value: string): az_ad_app_permission_grant_command_builder {
        this.setFlag("--expires", value);
        return this;
    }

    /** If --consent-type is "Principal", this argument specifies the object of the user that granted consent and applies only for that user. */
    principalId(value: string): az_ad_app_permission_grant_command_builder {
        this.setFlag("--principal-id", value);
        return this;
    }

    /** Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token, e.g. User.Read. */
    scope(value: string): az_ad_app_permission_grant_command_builder {
        this.setFlag("--scope", value);
        return this;
    }
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
class az_ad_app_permission_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Identifier uri, application id, or object id of the associated application. */
    id(value: string): az_ad_app_permission_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_permission_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_app_permission_list_grants_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_app_permission_list_grants_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_permission_list_grants_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Show resource's display name. */
    showResourceName(value: boolean): az_ad_app_permission_list_grants_command_builder {
        this.setFlag("--show-resource-name", value.toString());
        return this;
    }
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
class az_ad_app_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, displayName: string) {
        super(commandParent);
        this.displayName(displayName)
    }

    /** The display name of the application. */
    displayName(value: string): az_ad_app_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Declare the roles you want to associate with your application. Should be in manifest json format. See examples below for details. */
    appRoles(value: string): az_ad_app_create_command_builder {
        this.setFlag("--app-roles", value);
        return this;
    }

    /** The application can be used from any Azure AD tenants. */
    availableToOtherTenants(value: boolean): az_ad_app_create_command_builder {
        this.setFlag("--available-to-other-tenants", value.toString());
        return this;
    }

    /** The description of the password. */
    credentialDescription(value: string): az_ad_app_create_command_builder {
        this.setFlag("--credential-description", value);
        return this;
    }

    /** Date or datetime after which credentials expire(e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time. */
    endDate(value: string): az_ad_app_create_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** The url where users can sign in and use your app. */
    homepage(value: string): az_ad_app_create_command_builder {
        this.setFlag("--homepage", value);
        return this;
    }

    /** Space-separated unique URIs that Azure AD can use for this app. */
    identifierUris(value: string): az_ad_app_create_command_builder {
        this.setFlag("--identifier-uris", value);
        return this;
    }

    /** The type of the key credentials associated with the application. */
    keyType(value: 'AsymmetricX509Cert' | 'Password' | 'Symmetric'): az_ad_app_create_command_builder {
        this.setFlag("--key-type", value);
        return this;
    }

    /** The usage of the key credentials associated with the application. */
    keyUsage(value: 'Sign' | 'Verify'): az_ad_app_create_command_builder {
        this.setFlag("--key-usage", value);
        return this;
    }

    /** The value for the key credentials associated with the application. */
    keyValue(value: string): az_ad_app_create_command_builder {
        this.setFlag("--key-value", value);
        return this;
    }

    /** An application which can be installed on a user's device or computer. */
    nativeApp(value: boolean): az_ad_app_create_command_builder {
        this.setFlag("--native-app", value.toString());
        return this;
    }

    /** Whether to allow implicit grant flow for OAuth2. */
    oauth2AllowImplicitFlow(value: boolean): az_ad_app_create_command_builder {
        this.setFlag("--oauth2-allow-implicit-flow", value.toString());
        return this;
    }

    /** Declare the optional claims for the application. Should be in manifest json format. See examples below for details. Please reference <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type">https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type</a> for optional claim properties. */
    optionalClaims(value: string): az_ad_app_create_command_builder {
        this.setFlag("--optional-claims", value);
        return this;
    }

    /** App password, aka 'client secret'. */
    password(value: string): az_ad_app_create_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Space-separated URIs to which Azure AD will redirect in response to an OAuth 2.0 request. The value does not need to be a physical endpoint, but must be a valid URI. */
    replyUrls(value: string): az_ad_app_create_command_builder {
        this.setFlag("--reply-urls", value);
        return this;
    }

    /** Resource scopes and roles the application requires access to. Should be in manifest json format. See examples below for details. */
    requiredResourceAccesses(value: string): az_ad_app_create_command_builder {
        this.setFlag("--required-resource-accesses", value);
        return this;
    }

    /** Date or datetime at which credentials become valid(e.g. '2017-01-01T01:00:00+00:00' or '2017-01-01'). Default value is current time. */
    startDate(value: string): az_ad_app_create_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }
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
class az_ad_app_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }
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
class az_ad_app_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** List all entities, expect long delay if under a big organization. */
    all(value: string): az_ad_app_list_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** Application id. */
    appId(value: string): az_ad_app_list_command_builder {
        this.setFlag("--app-id", value);
        return this;
    }

    /** The display name of the application. */
    displayName(value: string): az_ad_app_list_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_app_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Graph application identifier, must be in uri format. */
    identifierUri(value: string): az_ad_app_list_command_builder {
        this.setFlag("--identifier-uri", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** List entities owned by the current user. */
    showMine(value: string): az_ad_app_list_command_builder {
        this.setFlag("--show-mine", value);
        return this;
    }
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
class az_ad_app_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_app_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_app_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Identifier uri, application id, or object id. */
    id(value: string): az_ad_app_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ad_app_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Declare the roles you want to associate with your application. Should be in manifest json format. See examples below for details. */
    appRoles(value: string): az_ad_app_update_command_builder {
        this.setFlag("--app-roles", value);
        return this;
    }

    /** The application can be used from any Azure AD tenants. */
    availableToOtherTenants(value: boolean): az_ad_app_update_command_builder {
        this.setFlag("--available-to-other-tenants", value.toString());
        return this;
    }

    /** The description of the password. */
    credentialDescription(value: string): az_ad_app_update_command_builder {
        this.setFlag("--credential-description", value);
        return this;
    }

    /** The display name of the application. */
    displayName(value: string): az_ad_app_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Date or datetime after which credentials expire(e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time. */
    endDate(value: string): az_ad_app_update_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ad_app_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** The url where users can sign in and use your app. */
    homepage(value: string): az_ad_app_update_command_builder {
        this.setFlag("--homepage", value);
        return this;
    }

    /** Space-separated unique URIs that Azure AD can use for this app. */
    identifierUris(value: string): az_ad_app_update_command_builder {
        this.setFlag("--identifier-uris", value);
        return this;
    }

    /** The type of the key credentials associated with the application. */
    keyType(value: 'AsymmetricX509Cert' | 'Password' | 'Symmetric'): az_ad_app_update_command_builder {
        this.setFlag("--key-type", value);
        return this;
    }

    /** The usage of the key credentials associated with the application. */
    keyUsage(value: 'Sign' | 'Verify'): az_ad_app_update_command_builder {
        this.setFlag("--key-usage", value);
        return this;
    }

    /** The value for the key credentials associated with the application. */
    keyValue(value: string): az_ad_app_update_command_builder {
        this.setFlag("--key-value", value);
        return this;
    }

    /** Whether to allow implicit grant flow for OAuth2. */
    oauth2AllowImplicitFlow(value: boolean): az_ad_app_update_command_builder {
        this.setFlag("--oauth2-allow-implicit-flow", value.toString());
        return this;
    }

    /** Declare the optional claims for the application. Should be in manifest json format. See examples below for details. Please reference <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type">https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type</a> for optional claim properties. */
    optionalClaims(value: string): az_ad_app_update_command_builder {
        this.setFlag("--optional-claims", value);
        return this;
    }

    /** App password, aka 'client secret'. */
    password(value: string): az_ad_app_update_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ad_app_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Space-separated URIs to which Azure AD will redirect in response to an OAuth 2.0 request. The value does not need to be a physical endpoint, but must be a valid URI. */
    replyUrls(value: string): az_ad_app_update_command_builder {
        this.setFlag("--reply-urls", value);
        return this;
    }

    /** Resource scopes and roles the application requires access to. Should be in manifest json format. See examples below for details. */
    requiredResourceAccesses(value: string): az_ad_app_update_command_builder {
        this.setFlag("--required-resource-accesses", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ad_app_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Date or datetime at which credentials become valid(e.g. '2017-01-01T01:00:00+00:00' or '2017-01-01'). Default value is current time. */
    startDate(value: string): az_ad_app_update_command_builder {
        this.setFlag("--start-date", value);
        return this;
    }
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
class az_ad_group_member_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string, memberId: string) {
        super(commandParent);
        this.group(group)
        this.memberId(memberId)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_member_add_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** The object ID of the contact, group, user, or service principal. */
    memberId(value: string): az_ad_group_member_add_command_builder {
        this.setFlag("--member-id", value);
        return this;
    }

    /** Unmatched properties from the message are deserialized this collection. */
    additionalProperties(value: string): az_ad_group_member_add_command_builder {
        this.setFlag("--additional-properties", value);
        return this;
    }
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
class az_ad_group_member_check_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string, memberId: string) {
        super(commandParent);
        this.group(group)
        this.memberId(memberId)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_member_check_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** The object ID of the contact, group, user, or service principal. */
    memberId(value: string): az_ad_group_member_check_command_builder {
        this.setFlag("--member-id", value);
        return this;
    }
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
class az_ad_group_member_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string) {
        super(commandParent);
        this.group(group)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_member_list_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_group_member_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_group_member_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string, memberId: string) {
        super(commandParent);
        this.group(group)
        this.memberId(memberId)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_member_remove_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** The object ID of the contact, group, user, or service principal. */
    memberId(value: string): az_ad_group_member_remove_command_builder {
        this.setFlag("--member-id", value);
        return this;
    }
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
class az_ad_group_owner_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string, ownerObjectId: string) {
        super(commandParent);
        this.group(group)
        this.ownerObjectId(ownerObjectId)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_owner_add_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** Owner's object id. */
    ownerObjectId(value: string): az_ad_group_owner_add_command_builder {
        this.setFlag("--owner-object-id", value);
        return this;
    }
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
class az_ad_group_owner_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string) {
        super(commandParent);
        this.group(group)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_owner_list_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_group_owner_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_group_owner_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string, ownerObjectId: string) {
        super(commandParent);
        this.group(group)
        this.ownerObjectId(ownerObjectId)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_owner_remove_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** Owner's object id. */
    ownerObjectId(value: string): az_ad_group_owner_remove_command_builder {
        this.setFlag("--owner-object-id", value);
        return this;
    }
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
class az_ad_group_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, displayName: string, mailNickname: string) {
        super(commandParent);
        this.displayName(displayName)
        this.mailNickname(mailNickname)
    }

    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_group_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Mail nickname. */
    mailNickname(value: string): az_ad_group_create_command_builder {
        this.setFlag("--mail-nickname", value);
        return this;
    }

    /** Group description. */
    description(value: string): az_ad_group_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Always create a new group instead of updating the one with same display and mail nickname. */
    force(value: boolean): az_ad_group_create_command_builder {
        this.setFlag("--force", value.toString());
        return this;
    }
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
class az_ad_group_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string) {
        super(commandParent);
        this.group(group)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_delete_command_builder {
        this.setFlag("--group", value);
        return this;
    }
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
class az_ad_group_get_member_groups_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string) {
        super(commandParent);
        this.group(group)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_get_member_groups_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** Unmatched properties from the message are deserialized this collection. */
    additionalProperties(value: string): az_ad_group_get_member_groups_command_builder {
        this.setFlag("--additional-properties", value);
        return this;
    }

    /** If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked. */
    securityEnabledOnly(value: boolean): az_ad_group_get_member_groups_command_builder {
        this.setFlag("--security-enabled-only", value.toString());
        return this;
    }
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
class az_ad_group_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_group_list_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_group_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_group_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, group: string) {
        super(commandParent);
        this.group(group)
    }

    /** Group's object id or display name(prefix also works if there is a unique match). */
    group(value: string): az_ad_group_show_command_builder {
        this.setFlag("--group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
}

/**
 * Get the list of directory objects that are owned by the user.
 *
 * Syntax:
 * ```
 * az ad signed-in-user list-owned-objects [--type]
 * ```
 */
class az_ad_signed_in_user_list_owned_objects_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Object type filter, e.g. "application", "servicePrincipal"  "group", etc. */
    type(value: string): az_ad_signed_in_user_list_owned_objects_command_builder {
        this.setFlag("--type", value);
        return this;
    }
}

/**
 * Gets the details for the currently logged-in user.
 *
 * Syntax:
 * ```
 * az ad signed-in-user show [--query-examples]
 * ```
 */
class az_ad_signed_in_user_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_signed_in_user_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_sp_credential_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string, keyId: string) {
        super(commandParent);
        this.id(id)
        this.keyId(keyId)
    }

    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_credential_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Credential key id. */
    keyId(value: string): az_ad_sp_credential_delete_command_builder {
        this.setFlag("--key-id", value);
        return this;
    }

    /** A certificate based credential. */
    cert(value: string): az_ad_sp_credential_delete_command_builder {
        this.setFlag("--cert", value);
        return this;
    }
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
class az_ad_sp_credential_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_credential_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** A certificate based credential. */
    cert(value: string): az_ad_sp_credential_list_command_builder {
        this.setFlag("--cert", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_sp_credential_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_sp_credential_reset_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name or app ID of the service principal. */
    name(value: string): az_ad_sp_credential_reset_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Append the new credential instead of overwriting. */
    append(value: string): az_ad_sp_credential_reset_command_builder {
        this.setFlag("--append", value);
        return this;
    }

    /** Certificate to use for credentials. */
    cert(value: string): az_ad_sp_credential_reset_command_builder {
        this.setFlag("--cert", value);
        return this;
    }

    /** Create a self-signed certificate to use for the credential. */
    createCert(value: string): az_ad_sp_credential_reset_command_builder {
        this.setFlag("--create-cert", value);
        return this;
    }

    /** The description of the password. */
    credentialDescription(value: string): az_ad_sp_credential_reset_command_builder {
        this.setFlag("--credential-description", value);
        return this;
    }

    /** Finer grain of expiry time if '--years' is insufficient, e.g. '2020-12-31T11:59:59+00:00' or '2299-12-31'. */
    endDate(value: string): az_ad_sp_credential_reset_command_builder {
        this.setFlag("--end-date", value);
        return this;
    }

    /** Name or ID of a KeyVault to use for creating or retrieving certificates. */
    keyvault(value: string): az_ad_sp_credential_reset_command_builder {
        this.setFlag("--keyvault", value);
        return this;
    }

    /** The password used to log in. */
    password(value: string): az_ad_sp_credential_reset_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Number of years for which the credentials will be valid. Default: 1 year. */
    years(value: string): az_ad_sp_credential_reset_command_builder {
        this.setFlag("--years", value);
        return this;
    }
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
class az_ad_sp_owner_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Service principal name, or object id or the service principal. */
    id(value: string): az_ad_sp_owner_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_sp_owner_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_sp_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Identifier uri, application id, or object id of the associated application. */
    id(value: string): az_ad_sp_create_command_builder {
        this.setFlag("--id", value);
        return this;
    }
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
class az_ad_sp_create_for_rbac_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Certificate to use for credentials. */
    cert(value: string): az_ad_sp_create_for_rbac_command_builder {
        this.setFlag("--cert", value);
        return this;
    }

    /** Create a self-signed certificate to use for the credential. Only the current OS user has read/write permission to this certificate. */
    createCert(value: string): az_ad_sp_create_for_rbac_command_builder {
        this.setFlag("--create-cert", value);
        return this;
    }

    /** Name or ID of a KeyVault to use for creating or retrieving certificates. */
    keyvault(value: string): az_ad_sp_create_for_rbac_command_builder {
        this.setFlag("--keyvault", value);
        return this;
    }

    /** A URI to use as the logic name. It doesn't need to exist. If not present, CLI will generate one. */
    name(value: string): az_ad_sp_create_for_rbac_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Role of the service principal. */
    role(value: string): az_ad_sp_create_for_rbac_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Space-separated list of scopes the service principal's role assignment applies to. Defaults to the root of the current subscription. e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    scopes(value: string): az_ad_sp_create_for_rbac_command_builder {
        this.setFlag("--scopes", value);
        return this;
    }

    /** Output result in compatible with Azure SDK auth file. */
    sdkAuth(value: boolean): az_ad_sp_create_for_rbac_command_builder {
        this.setFlag("--sdk-auth", value.toString());
        return this;
    }

    /** Skip creating the default assignment, which allows the service principal to access resources under the current subscription. When specified, --scopes will be ignored. You may use `az role assignment create` to create role assignments for this service principal later. */
    skipAssignment(value: boolean): az_ad_sp_create_for_rbac_command_builder {
        this.setFlag("--skip-assignment", value.toString());
        return this;
    }

    /** Number of years for which the credentials will be valid. Default: 1 year. */
    years(value: string): az_ad_sp_create_for_rbac_command_builder {
        this.setFlag("--years", value);
        return this;
    }
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
class az_ad_sp_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }
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
class az_ad_sp_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** List all entities, expect long delay if under a big organization. */
    all(value: string): az_ad_sp_list_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_sp_list_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_sp_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_sp_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** List entities owned by the current user. */
    showMine(value: string): az_ad_sp_list_command_builder {
        this.setFlag("--show-mine", value);
        return this;
    }

    /** Service principal name. */
    spn(value: string): az_ad_sp_list_command_builder {
        this.setFlag("--spn", value);
        return this;
    }
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
class az_ad_sp_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_sp_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_sp_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** Service principal name, or object id. */
    id(value: string): az_ad_sp_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ad_sp_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ad_sp_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ad_sp_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ad_sp_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }
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
class az_ad_user_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, displayName: string, password: string, userPrincipalName: string) {
        super(commandParent);
        this.displayName(displayName)
        this.password(password)
        this.userPrincipalName(userPrincipalName)
    }

    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_user_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** The password that should be assigned to the user for authentication. */
    password(value: string): az_ad_user_create_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Required. The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant. */
    userPrincipalName(value: string): az_ad_user_create_command_builder {
        this.setFlag("--user-principal-name", value);
        return this;
    }

    /** Marks this user as needing to update their password the next time they authenticate. If omitted, false will be used. */
    forceChangePasswordNextLogin(value: boolean): az_ad_user_create_command_builder {
        this.setFlag("--force-change-password-next-login", value.toString());
        return this;
    }

    /** This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object. */
    immutableId(value: string): az_ad_user_create_command_builder {
        this.setFlag("--immutable-id", value);
        return this;
    }

    /** Mail alias. Defaults to user principal name. */
    mailNickname(value: string): az_ad_user_create_command_builder {
        this.setFlag("--mail-nickname", value);
        return this;
    }
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
class az_ad_user_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** The object ID or principal name of the user for which to get information. */
    id(value: string): az_ad_user_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }
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
class az_ad_user_get_member_groups_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** The object ID or principal name of the user for which to get information. */
    id(value: string): az_ad_user_get_member_groups_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked. */
    securityEnabledOnly(value: string): az_ad_user_get_member_groups_command_builder {
        this.setFlag("--security-enabled-only", value);
        return this;
    }
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
class az_ad_user_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_user_list_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    filter(value: string): az_ad_user_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_user_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** User principal name, e.g. john.doe@contoso.com. */
    upn(value: string): az_ad_user_list_command_builder {
        this.setFlag("--upn", value);
        return this;
    }
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
class az_ad_user_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** The object ID or principal name of the user for which to get information. */
    id(value: string): az_ad_user_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ad_user_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_ad_user_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, id: string) {
        super(commandParent);
        this.id(id)
    }

    /** The object ID or principal name of the user for which to get information. */
    id(value: string): az_ad_user_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Enable the user account. */
    accountEnabled(value: boolean): az_ad_user_update_command_builder {
        this.setFlag("--account-enabled", value.toString());
        return this;
    }

    /** Object's display name or its prefix. */
    displayName(value: string): az_ad_user_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Require the user to change their password the next time they log in. Only valid when --password is specified. */
    forceChangePasswordNextLogin(value: boolean): az_ad_user_update_command_builder {
        this.setFlag("--force-change-password-next-login", value.toString());
        return this;
    }

    /** Mail alias. Defaults to user principal name. */
    mailNickname(value: string): az_ad_user_update_command_builder {
        this.setFlag("--mail-nickname", value);
        return this;
    }

    /** User password. */
    password(value: string): az_ad_user_update_command_builder {
        this.setFlag("--password", value);
        return this;
    }
}
