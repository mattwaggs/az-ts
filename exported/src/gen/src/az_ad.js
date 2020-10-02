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
/** Manage an application's password or certificate credentials. */
var az_ad_app_credential = /** @class */ (function () {
    function az_ad_app_credential() {
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
    az_ad_app_credential["delete"] = function (id, keyId) {
        return new az_ad_app_credential_delete_command_builder("az ad app credential delete", 'az_ad_app_credential_delete_command_result', id, keyId);
    };
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
    az_ad_app_credential.list = function (id) {
        return new az_ad_app_credential_list_command_builder("az ad app credential list", 'az_ad_app_credential_list_command_result', id);
    };
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
    az_ad_app_credential.reset = function (id) {
        return new az_ad_app_credential_reset_command_builder("az ad app credential reset", 'az_ad_app_credential_reset_command_result', id);
    };
    return az_ad_app_credential;
}());
exports.az_ad_app_credential = az_ad_app_credential;
/** Manage application owners. */
var az_ad_app_owner = /** @class */ (function () {
    function az_ad_app_owner() {
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
    az_ad_app_owner.add = function (id, ownerObjectId) {
        return new az_ad_app_owner_add_command_builder("az ad app owner add", 'az_ad_app_owner_add_command_result', id, ownerObjectId);
    };
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
    az_ad_app_owner.list = function (id) {
        return new az_ad_app_owner_list_command_builder("az ad app owner list", 'az_ad_app_owner_list_command_result', id);
    };
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
    az_ad_app_owner.remove = function (id, ownerObjectId) {
        return new az_ad_app_owner_remove_command_builder("az ad app owner remove", 'az_ad_app_owner_remove_command_result', id, ownerObjectId);
    };
    return az_ad_app_owner;
}());
exports.az_ad_app_owner = az_ad_app_owner;
/** Manage an application's OAuth2 permissions. */
var az_ad_app_permission = /** @class */ (function () {
    function az_ad_app_permission() {
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
    az_ad_app_permission.add = function (api, apiPermissions, id) {
        return new az_ad_app_permission_add_command_builder("az ad app permission add", 'az_ad_app_permission_add_command_result', api, apiPermissions, id);
    };
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
    az_ad_app_permission.admin_consent = function (id) {
        return new az_ad_app_permission_admin_consent_command_builder("az ad app permission admin-consent", 'az_ad_app_permission_admin_consent_command_result', id);
    };
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
    az_ad_app_permission["delete"] = function (api, id) {
        return new az_ad_app_permission_delete_command_builder("az ad app permission delete", 'az_ad_app_permission_delete_command_result', api, id);
    };
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
    az_ad_app_permission.grant = function (api, id) {
        return new az_ad_app_permission_grant_command_builder("az ad app permission grant", 'az_ad_app_permission_grant_command_result', api, id);
    };
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
    az_ad_app_permission.list = function (id) {
        return new az_ad_app_permission_list_command_builder("az ad app permission list", 'az_ad_app_permission_list_command_result', id);
    };
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
    az_ad_app_permission.list_grants = function () {
        return new az_ad_app_permission_list_grants_command_builder("az ad app permission list-grants", 'az_ad_app_permission_list_grants_command_result');
    };
    return az_ad_app_permission;
}());
exports.az_ad_app_permission = az_ad_app_permission;
/** Manage applications with AAD Graph. */
var az_ad_app = /** @class */ (function () {
    function az_ad_app() {
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
    az_ad_app.create = function (displayName) {
        return new az_ad_app_create_command_builder("az ad app create", 'az_ad_app_create_command_result', displayName);
    };
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
    az_ad_app["delete"] = function (id) {
        return new az_ad_app_delete_command_builder("az ad app delete", 'az_ad_app_delete_command_result', id);
    };
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
    az_ad_app.list = function () {
        return new az_ad_app_list_command_builder("az ad app list", 'az_ad_app_list_command_result');
    };
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
    az_ad_app.show = function (id) {
        return new az_ad_app_show_command_builder("az ad app show", 'az_ad_app_show_command_result', id);
    };
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
    az_ad_app.update = function (id) {
        return new az_ad_app_update_command_builder("az ad app update", 'az_ad_app_update_command_result', id);
    };
    return az_ad_app;
}());
exports.az_ad_app = az_ad_app;
/** Manage Azure Active Directory group members. */
var az_ad_group_member = /** @class */ (function () {
    function az_ad_group_member() {
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
    az_ad_group_member.add = function (group, memberId) {
        return new az_ad_group_member_add_command_builder("az ad group member add", 'az_ad_group_member_add_command_result', group, memberId);
    };
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
    az_ad_group_member.check = function (group, memberId) {
        return new az_ad_group_member_check_command_builder("az ad group member check", 'az_ad_group_member_check_command_result', group, memberId);
    };
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
    az_ad_group_member.list = function (group) {
        return new az_ad_group_member_list_command_builder("az ad group member list", 'az_ad_group_member_list_command_result', group);
    };
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
    az_ad_group_member.remove = function (group, memberId) {
        return new az_ad_group_member_remove_command_builder("az ad group member remove", 'az_ad_group_member_remove_command_result', group, memberId);
    };
    return az_ad_group_member;
}());
exports.az_ad_group_member = az_ad_group_member;
/** Manage Azure Active Directory group owners. */
var az_ad_group_owner = /** @class */ (function () {
    function az_ad_group_owner() {
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
    az_ad_group_owner.add = function (group, ownerObjectId) {
        return new az_ad_group_owner_add_command_builder("az ad group owner add", 'az_ad_group_owner_add_command_result', group, ownerObjectId);
    };
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
    az_ad_group_owner.list = function (group) {
        return new az_ad_group_owner_list_command_builder("az ad group owner list", 'az_ad_group_owner_list_command_result', group);
    };
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
    az_ad_group_owner.remove = function (group, ownerObjectId) {
        return new az_ad_group_owner_remove_command_builder("az ad group owner remove", 'az_ad_group_owner_remove_command_result', group, ownerObjectId);
    };
    return az_ad_group_owner;
}());
exports.az_ad_group_owner = az_ad_group_owner;
/** Manage Azure Active Directory groups. */
var az_ad_group = /** @class */ (function () {
    function az_ad_group() {
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
    az_ad_group.create = function (displayName, mailNickname) {
        return new az_ad_group_create_command_builder("az ad group create", 'az_ad_group_create_command_result', displayName, mailNickname);
    };
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
    az_ad_group["delete"] = function (group) {
        return new az_ad_group_delete_command_builder("az ad group delete", 'az_ad_group_delete_command_result', group);
    };
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
    az_ad_group.get_member_groups = function (group) {
        return new az_ad_group_get_member_groups_command_builder("az ad group get-member-groups", 'az_ad_group_get_member_groups_command_result', group);
    };
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
    az_ad_group.list = function () {
        return new az_ad_group_list_command_builder("az ad group list", 'az_ad_group_list_command_result');
    };
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
    az_ad_group.show = function (group) {
        return new az_ad_group_show_command_builder("az ad group show", 'az_ad_group_show_command_result', group);
    };
    return az_ad_group;
}());
exports.az_ad_group = az_ad_group;
/** Show graph information about current signed-in user in CLI. */
var az_ad_signed_in_user = /** @class */ (function () {
    function az_ad_signed_in_user() {
    }
    /**
     * Get the list of directory objects that are owned by the user.
     *
     * Syntax:
     * ```
     * az ad signed-in-user list-owned-objects [--type]
     * ```
     */
    az_ad_signed_in_user.list_owned_objects = function () {
        return new az_ad_signed_in_user_list_owned_objects_command_builder("az ad signed-in-user list-owned-objects", 'az_ad_signed_in_user_list_owned_objects_command_result');
    };
    /**
     * Gets the details for the currently logged-in user.
     *
     * Syntax:
     * ```
     * az ad signed-in-user show [--query-examples]
     * ```
     */
    az_ad_signed_in_user.show = function () {
        return new az_ad_signed_in_user_show_command_builder("az ad signed-in-user show", 'az_ad_signed_in_user_show_command_result');
    };
    return az_ad_signed_in_user;
}());
exports.az_ad_signed_in_user = az_ad_signed_in_user;
/** Manage a service principal's credentials. */
var az_ad_sp_credential = /** @class */ (function () {
    function az_ad_sp_credential() {
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
    az_ad_sp_credential["delete"] = function (id, keyId) {
        return new az_ad_sp_credential_delete_command_builder("az ad sp credential delete", 'az_ad_sp_credential_delete_command_result', id, keyId);
    };
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
    az_ad_sp_credential.list = function (id) {
        return new az_ad_sp_credential_list_command_builder("az ad sp credential list", 'az_ad_sp_credential_list_command_result', id);
    };
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
    az_ad_sp_credential.reset = function (name) {
        return new az_ad_sp_credential_reset_command_builder("az ad sp credential reset", 'az_ad_sp_credential_reset_command_result', name);
    };
    return az_ad_sp_credential;
}());
exports.az_ad_sp_credential = az_ad_sp_credential;
/** Manage service principal owners. */
var az_ad_sp_owner = /** @class */ (function () {
    function az_ad_sp_owner() {
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
    az_ad_sp_owner.list = function (id) {
        return new az_ad_sp_owner_list_command_builder("az ad sp owner list", 'az_ad_sp_owner_list_command_result', id);
    };
    return az_ad_sp_owner;
}());
exports.az_ad_sp_owner = az_ad_sp_owner;
/** Manage Azure Active Directory service principals for automation authentication. */
var az_ad_sp = /** @class */ (function () {
    function az_ad_sp() {
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
    az_ad_sp.create = function (id) {
        return new az_ad_sp_create_command_builder("az ad sp create", 'az_ad_sp_create_command_result', id);
    };
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
    az_ad_sp.create_for_rbac = function () {
        return new az_ad_sp_create_for_rbac_command_builder("az ad sp create-for-rbac", 'az_ad_sp_create_for_rbac_command_result');
    };
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
    az_ad_sp["delete"] = function (id) {
        return new az_ad_sp_delete_command_builder("az ad sp delete", 'az_ad_sp_delete_command_result', id);
    };
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
    az_ad_sp.list = function () {
        return new az_ad_sp_list_command_builder("az ad sp list", 'az_ad_sp_list_command_result');
    };
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
    az_ad_sp.show = function (id) {
        return new az_ad_sp_show_command_builder("az ad sp show", 'az_ad_sp_show_command_result', id);
    };
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
    az_ad_sp.update = function (id) {
        return new az_ad_sp_update_command_builder("az ad sp update", 'az_ad_sp_update_command_result', id);
    };
    return az_ad_sp;
}());
exports.az_ad_sp = az_ad_sp;
/** Manage Azure Active Directory users and user authentication. */
var az_ad_user = /** @class */ (function () {
    function az_ad_user() {
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
    az_ad_user.create = function (displayName, password, userPrincipalName) {
        return new az_ad_user_create_command_builder("az ad user create", 'az_ad_user_create_command_result', displayName, password, userPrincipalName);
    };
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
    az_ad_user["delete"] = function (id) {
        return new az_ad_user_delete_command_builder("az ad user delete", 'az_ad_user_delete_command_result', id);
    };
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
    az_ad_user.get_member_groups = function (id) {
        return new az_ad_user_get_member_groups_command_builder("az ad user get-member-groups", 'az_ad_user_get_member_groups_command_result', id);
    };
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
    az_ad_user.list = function () {
        return new az_ad_user_list_command_builder("az ad user list", 'az_ad_user_list_command_result');
    };
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
    az_ad_user.show = function (id) {
        return new az_ad_user_show_command_builder("az ad user show", 'az_ad_user_show_command_result', id);
    };
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
    az_ad_user.update = function (id) {
        return new az_ad_user_update_command_builder("az ad user update", 'az_ad_user_update_command_result', id);
    };
    return az_ad_user;
}());
exports.az_ad_user = az_ad_user;
/** Manage Azure Active Directory Graph entities needed for Role Based Access Control. */
var az_ad = /** @class */ (function () {
    function az_ad() {
    }
    return az_ad;
}());
exports.az_ad = az_ad;
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
var az_ad_app_credential_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_credential_delete_command_builder, _super);
    function az_ad_app_credential_delete_command_builder(commandPath, resultDataTypeName, id, keyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.keyId(keyId);
        return _this;
    }
    /** Identifier uri, application id, or object id. */
    az_ad_app_credential_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Credential key id. */
    az_ad_app_credential_delete_command_builder.prototype.keyId = function (value) {
        this.setFlag("--key-id", value);
        return this;
    };
    /** A certificate based credential. */
    az_ad_app_credential_delete_command_builder.prototype.cert = function (value) {
        this.setFlag("--cert", value);
        return this;
    };
    return az_ad_app_credential_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_credential_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_credential_list_command_builder, _super);
    function az_ad_app_credential_list_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier uri, application id, or object id. */
    az_ad_app_credential_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** A certificate based credential. */
    az_ad_app_credential_list_command_builder.prototype.cert = function (value) {
        this.setFlag("--cert", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_app_credential_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_app_credential_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_credential_reset_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_credential_reset_command_builder, _super);
    function az_ad_app_credential_reset_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier uri, application id, or object id. */
    az_ad_app_credential_reset_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Append the new credential instead of overwriting. */
    az_ad_app_credential_reset_command_builder.prototype.append = function (value) {
        this.setFlag("--append", value);
        return this;
    };
    /** Certificate to use for credentials. */
    az_ad_app_credential_reset_command_builder.prototype.cert = function (value) {
        this.setFlag("--cert", value);
        return this;
    };
    /** Create a self-signed certificate to use for the credential. */
    az_ad_app_credential_reset_command_builder.prototype.createCert = function (value) {
        this.setFlag("--create-cert", value);
        return this;
    };
    /** The description of the password. */
    az_ad_app_credential_reset_command_builder.prototype.credentialDescription = function (value) {
        this.setFlag("--credential-description", value);
        return this;
    };
    /** Date or datetime after which credentials expire(e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time. */
    az_ad_app_credential_reset_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** Name or ID of a KeyVault to use for creating or retrieving certificates. */
    az_ad_app_credential_reset_command_builder.prototype.keyvault = function (value) {
        this.setFlag("--keyvault", value);
        return this;
    };
    /** App password, aka 'client secret'. */
    az_ad_app_credential_reset_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Number of years for which the credentials will be valid. */
    az_ad_app_credential_reset_command_builder.prototype.years = function (value) {
        this.setFlag("--years", value);
        return this;
    };
    return az_ad_app_credential_reset_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_owner_add_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_owner_add_command_builder, _super);
    function az_ad_app_owner_add_command_builder(commandPath, resultDataTypeName, id, ownerObjectId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.ownerObjectId(ownerObjectId);
        return _this;
    }
    /** Identifier uri, application id, or object id. */
    az_ad_app_owner_add_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Owner's object id. */
    az_ad_app_owner_add_command_builder.prototype.ownerObjectId = function (value) {
        this.setFlag("--owner-object-id", value);
        return this;
    };
    return az_ad_app_owner_add_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_owner_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_owner_list_command_builder, _super);
    function az_ad_app_owner_list_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier uri, application id, or object id of the application. */
    az_ad_app_owner_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_app_owner_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_app_owner_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_owner_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_owner_remove_command_builder, _super);
    function az_ad_app_owner_remove_command_builder(commandPath, resultDataTypeName, id, ownerObjectId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.ownerObjectId(ownerObjectId);
        return _this;
    }
    /** Identifier uri, application id, or object id. */
    az_ad_app_owner_remove_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Owner's object id. */
    az_ad_app_owner_remove_command_builder.prototype.ownerObjectId = function (value) {
        this.setFlag("--owner-object-id", value);
        return this;
    };
    return az_ad_app_owner_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_permission_add_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_permission_add_command_builder, _super);
    function az_ad_app_permission_add_command_builder(commandPath, resultDataTypeName, api, apiPermissions, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.api(api);
        _this.apiPermissions(apiPermissions);
        _this.id(id);
        return _this;
    }
    /** Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    az_ad_app_permission_add_command_builder.prototype.api = function (value) {
        this.setFlag("--api", value);
        return this;
    };
    /** Specify `ResourceAccess.id` - The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. Space-separated list of `<resource-access-id>=<type>`. */
    az_ad_app_permission_add_command_builder.prototype.apiPermissions = function (value) {
        this.setFlag("--api-permissions", value);
        return this;
    };
    /** Identifier uri, application id, or object id. */
    az_ad_app_permission_add_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    return az_ad_app_permission_add_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_permission_admin_consent_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_permission_admin_consent_command_builder, _super);
    function az_ad_app_permission_admin_consent_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier uri, application id, or object id. */
    az_ad_app_permission_admin_consent_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    return az_ad_app_permission_admin_consent_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_permission_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_permission_delete_command_builder, _super);
    function az_ad_app_permission_delete_command_builder(commandPath, resultDataTypeName, api, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.api(api);
        _this.id(id);
        return _this;
    }
    /** Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    az_ad_app_permission_delete_command_builder.prototype.api = function (value) {
        this.setFlag("--api", value);
        return this;
    };
    /** Identifier uri, application id, or object id. */
    az_ad_app_permission_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Specify `ResourceAccess.id` - The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. Space-separated list of `<resource-access-id>`. */
    az_ad_app_permission_delete_command_builder.prototype.apiPermissions = function (value) {
        this.setFlag("--api-permissions", value);
        return this;
    };
    return az_ad_app_permission_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_permission_grant_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_permission_grant_command_builder, _super);
    function az_ad_app_permission_grant_command_builder(commandPath, resultDataTypeName, api, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.api(api);
        _this.id(id);
        return _this;
    }
    /** Specify `RequiredResourceAccess.resourceAppId` - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    az_ad_app_permission_grant_command_builder.prototype.api = function (value) {
        this.setFlag("--api", value);
        return this;
    };
    /** Identifier uri, application id, or object id. */
    az_ad_app_permission_grant_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Indicates if consent was provided by the administrator (on behalf of the organization) or by an individual. */
    az_ad_app_permission_grant_command_builder.prototype.consentType = function (value) {
        this.setFlag("--consent-type", value);
        return this;
    };
    /** Expiry date for the permissions in years. e.g. 1, 2 or "never". */
    az_ad_app_permission_grant_command_builder.prototype.expires = function (value) {
        this.setFlag("--expires", value);
        return this;
    };
    /** If --consent-type is "Principal", this argument specifies the object of the user that granted consent and applies only for that user. */
    az_ad_app_permission_grant_command_builder.prototype.principalId = function (value) {
        this.setFlag("--principal-id", value);
        return this;
    };
    /** Specifies the value of the scope claim that the resource application should expect in the OAuth 2.0 access token, e.g. User.Read. */
    az_ad_app_permission_grant_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    return az_ad_app_permission_grant_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_permission_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_permission_list_command_builder, _super);
    function az_ad_app_permission_list_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier uri, application id, or object id of the associated application. */
    az_ad_app_permission_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_app_permission_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_app_permission_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_permission_list_grants_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_permission_list_grants_command_builder, _super);
    function az_ad_app_permission_list_grants_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    az_ad_app_permission_list_grants_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Identifier uri, application id, or object id. */
    az_ad_app_permission_list_grants_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Show resource's display name. */
    az_ad_app_permission_list_grants_command_builder.prototype.showResourceName = function (value) {
        this.setFlag("--show-resource-name", value.toString());
        return this;
    };
    return az_ad_app_permission_list_grants_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_create_command_builder, _super);
    function az_ad_app_create_command_builder(commandPath, resultDataTypeName, displayName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.displayName(displayName);
        return _this;
    }
    /** The display name of the application. */
    az_ad_app_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Declare the roles you want to associate with your application. Should be in manifest json format. See examples below for details. */
    az_ad_app_create_command_builder.prototype.appRoles = function (value) {
        this.setFlag("--app-roles", value);
        return this;
    };
    /** The application can be used from any Azure AD tenants. */
    az_ad_app_create_command_builder.prototype.availableToOtherTenants = function (value) {
        this.setFlag("--available-to-other-tenants", value.toString());
        return this;
    };
    /** The description of the password. */
    az_ad_app_create_command_builder.prototype.credentialDescription = function (value) {
        this.setFlag("--credential-description", value);
        return this;
    };
    /** Date or datetime after which credentials expire(e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time. */
    az_ad_app_create_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** The url where users can sign in and use your app. */
    az_ad_app_create_command_builder.prototype.homepage = function (value) {
        this.setFlag("--homepage", value);
        return this;
    };
    /** Space-separated unique URIs that Azure AD can use for this app. */
    az_ad_app_create_command_builder.prototype.identifierUris = function (value) {
        this.setFlag("--identifier-uris", value);
        return this;
    };
    /** The type of the key credentials associated with the application. */
    az_ad_app_create_command_builder.prototype.keyType = function (value) {
        this.setFlag("--key-type", value);
        return this;
    };
    /** The usage of the key credentials associated with the application. */
    az_ad_app_create_command_builder.prototype.keyUsage = function (value) {
        this.setFlag("--key-usage", value);
        return this;
    };
    /** The value for the key credentials associated with the application. */
    az_ad_app_create_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** An application which can be installed on a user's device or computer. */
    az_ad_app_create_command_builder.prototype.nativeApp = function (value) {
        this.setFlag("--native-app", value.toString());
        return this;
    };
    /** Whether to allow implicit grant flow for OAuth2. */
    az_ad_app_create_command_builder.prototype.oauth2AllowImplicitFlow = function (value) {
        this.setFlag("--oauth2-allow-implicit-flow", value.toString());
        return this;
    };
    /** Declare the optional claims for the application. Should be in manifest json format. See examples below for details. Please reference <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type">https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type</a> for optional claim properties. */
    az_ad_app_create_command_builder.prototype.optionalClaims = function (value) {
        this.setFlag("--optional-claims", value);
        return this;
    };
    /** App password, aka 'client secret'. */
    az_ad_app_create_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Space-separated URIs to which Azure AD will redirect in response to an OAuth 2.0 request. The value does not need to be a physical endpoint, but must be a valid URI. */
    az_ad_app_create_command_builder.prototype.replyUrls = function (value) {
        this.setFlag("--reply-urls", value);
        return this;
    };
    /** Resource scopes and roles the application requires access to. Should be in manifest json format. See examples below for details. */
    az_ad_app_create_command_builder.prototype.requiredResourceAccesses = function (value) {
        this.setFlag("--required-resource-accesses", value);
        return this;
    };
    /** Date or datetime at which credentials become valid(e.g. '2017-01-01T01:00:00+00:00' or '2017-01-01'). Default value is current time. */
    az_ad_app_create_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    return az_ad_app_create_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_delete_command_builder, _super);
    function az_ad_app_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier uri, application id, or object id. */
    az_ad_app_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    return az_ad_app_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_list_command_builder, _super);
    function az_ad_app_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** List all entities, expect long delay if under a big organization. */
    az_ad_app_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Application id. */
    az_ad_app_list_command_builder.prototype.appId = function (value) {
        this.setFlag("--app-id", value);
        return this;
    };
    /** The display name of the application. */
    az_ad_app_list_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    az_ad_app_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Graph application identifier, must be in uri format. */
    az_ad_app_list_command_builder.prototype.identifierUri = function (value) {
        this.setFlag("--identifier-uri", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_app_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** List entities owned by the current user. */
    az_ad_app_list_command_builder.prototype.showMine = function (value) {
        this.setFlag("--show-mine", value);
        return this;
    };
    return az_ad_app_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_show_command_builder, _super);
    function az_ad_app_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier uri, application id, or object id. */
    az_ad_app_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_app_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_app_show_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_app_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_app_update_command_builder, _super);
    function az_ad_app_update_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier uri, application id, or object id. */
    az_ad_app_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ad_app_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Declare the roles you want to associate with your application. Should be in manifest json format. See examples below for details. */
    az_ad_app_update_command_builder.prototype.appRoles = function (value) {
        this.setFlag("--app-roles", value);
        return this;
    };
    /** The application can be used from any Azure AD tenants. */
    az_ad_app_update_command_builder.prototype.availableToOtherTenants = function (value) {
        this.setFlag("--available-to-other-tenants", value.toString());
        return this;
    };
    /** The description of the password. */
    az_ad_app_update_command_builder.prototype.credentialDescription = function (value) {
        this.setFlag("--credential-description", value);
        return this;
    };
    /** The display name of the application. */
    az_ad_app_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Date or datetime after which credentials expire(e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time. */
    az_ad_app_update_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ad_app_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** The url where users can sign in and use your app. */
    az_ad_app_update_command_builder.prototype.homepage = function (value) {
        this.setFlag("--homepage", value);
        return this;
    };
    /** Space-separated unique URIs that Azure AD can use for this app. */
    az_ad_app_update_command_builder.prototype.identifierUris = function (value) {
        this.setFlag("--identifier-uris", value);
        return this;
    };
    /** The type of the key credentials associated with the application. */
    az_ad_app_update_command_builder.prototype.keyType = function (value) {
        this.setFlag("--key-type", value);
        return this;
    };
    /** The usage of the key credentials associated with the application. */
    az_ad_app_update_command_builder.prototype.keyUsage = function (value) {
        this.setFlag("--key-usage", value);
        return this;
    };
    /** The value for the key credentials associated with the application. */
    az_ad_app_update_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Whether to allow implicit grant flow for OAuth2. */
    az_ad_app_update_command_builder.prototype.oauth2AllowImplicitFlow = function (value) {
        this.setFlag("--oauth2-allow-implicit-flow", value.toString());
        return this;
    };
    /** Declare the optional claims for the application. Should be in manifest json format. See examples below for details. Please reference <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type">https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#optionalclaim-type</a> for optional claim properties. */
    az_ad_app_update_command_builder.prototype.optionalClaims = function (value) {
        this.setFlag("--optional-claims", value);
        return this;
    };
    /** App password, aka 'client secret'. */
    az_ad_app_update_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ad_app_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Space-separated URIs to which Azure AD will redirect in response to an OAuth 2.0 request. The value does not need to be a physical endpoint, but must be a valid URI. */
    az_ad_app_update_command_builder.prototype.replyUrls = function (value) {
        this.setFlag("--reply-urls", value);
        return this;
    };
    /** Resource scopes and roles the application requires access to. Should be in manifest json format. See examples below for details. */
    az_ad_app_update_command_builder.prototype.requiredResourceAccesses = function (value) {
        this.setFlag("--required-resource-accesses", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ad_app_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Date or datetime at which credentials become valid(e.g. '2017-01-01T01:00:00+00:00' or '2017-01-01'). Default value is current time. */
    az_ad_app_update_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    return az_ad_app_update_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_member_add_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_member_add_command_builder, _super);
    function az_ad_group_member_add_command_builder(commandPath, resultDataTypeName, group, memberId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        _this.memberId(memberId);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_member_add_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** The object ID of the contact, group, user, or service principal. */
    az_ad_group_member_add_command_builder.prototype.memberId = function (value) {
        this.setFlag("--member-id", value);
        return this;
    };
    /** Unmatched properties from the message are deserialized this collection. */
    az_ad_group_member_add_command_builder.prototype.additionalProperties = function (value) {
        this.setFlag("--additional-properties", value);
        return this;
    };
    return az_ad_group_member_add_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_member_check_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_member_check_command_builder, _super);
    function az_ad_group_member_check_command_builder(commandPath, resultDataTypeName, group, memberId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        _this.memberId(memberId);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_member_check_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** The object ID of the contact, group, user, or service principal. */
    az_ad_group_member_check_command_builder.prototype.memberId = function (value) {
        this.setFlag("--member-id", value);
        return this;
    };
    return az_ad_group_member_check_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_member_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_member_list_command_builder, _super);
    function az_ad_group_member_list_command_builder(commandPath, resultDataTypeName, group) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_member_list_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_group_member_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_group_member_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_member_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_member_remove_command_builder, _super);
    function az_ad_group_member_remove_command_builder(commandPath, resultDataTypeName, group, memberId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        _this.memberId(memberId);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_member_remove_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** The object ID of the contact, group, user, or service principal. */
    az_ad_group_member_remove_command_builder.prototype.memberId = function (value) {
        this.setFlag("--member-id", value);
        return this;
    };
    return az_ad_group_member_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_owner_add_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_owner_add_command_builder, _super);
    function az_ad_group_owner_add_command_builder(commandPath, resultDataTypeName, group, ownerObjectId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        _this.ownerObjectId(ownerObjectId);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_owner_add_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** Owner's object id. */
    az_ad_group_owner_add_command_builder.prototype.ownerObjectId = function (value) {
        this.setFlag("--owner-object-id", value);
        return this;
    };
    return az_ad_group_owner_add_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_owner_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_owner_list_command_builder, _super);
    function az_ad_group_owner_list_command_builder(commandPath, resultDataTypeName, group) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_owner_list_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_group_owner_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_group_owner_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_owner_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_owner_remove_command_builder, _super);
    function az_ad_group_owner_remove_command_builder(commandPath, resultDataTypeName, group, ownerObjectId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        _this.ownerObjectId(ownerObjectId);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_owner_remove_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** Owner's object id. */
    az_ad_group_owner_remove_command_builder.prototype.ownerObjectId = function (value) {
        this.setFlag("--owner-object-id", value);
        return this;
    };
    return az_ad_group_owner_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_create_command_builder, _super);
    function az_ad_group_create_command_builder(commandPath, resultDataTypeName, displayName, mailNickname) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.displayName(displayName);
        _this.mailNickname(mailNickname);
        return _this;
    }
    /** Object's display name or its prefix. */
    az_ad_group_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Mail nickname. */
    az_ad_group_create_command_builder.prototype.mailNickname = function (value) {
        this.setFlag("--mail-nickname", value);
        return this;
    };
    /** Group description. */
    az_ad_group_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Always create a new group instead of updating the one with same display and mail nickname. */
    az_ad_group_create_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value.toString());
        return this;
    };
    return az_ad_group_create_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_delete_command_builder, _super);
    function az_ad_group_delete_command_builder(commandPath, resultDataTypeName, group) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_delete_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    return az_ad_group_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_get_member_groups_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_get_member_groups_command_builder, _super);
    function az_ad_group_get_member_groups_command_builder(commandPath, resultDataTypeName, group) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_get_member_groups_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** Unmatched properties from the message are deserialized this collection. */
    az_ad_group_get_member_groups_command_builder.prototype.additionalProperties = function (value) {
        this.setFlag("--additional-properties", value);
        return this;
    };
    /** If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked. */
    az_ad_group_get_member_groups_command_builder.prototype.securityEnabledOnly = function (value) {
        this.setFlag("--security-enabled-only", value.toString());
        return this;
    };
    return az_ad_group_get_member_groups_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_list_command_builder, _super);
    function az_ad_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Object's display name or its prefix. */
    az_ad_group_list_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    az_ad_group_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_group_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_group_show_command_builder, _super);
    function az_ad_group_show_command_builder(commandPath, resultDataTypeName, group) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.group(group);
        return _this;
    }
    /** Group's object id or display name(prefix also works if there is a unique match). */
    az_ad_group_show_command_builder.prototype.group = function (value) {
        this.setFlag("--group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the list of directory objects that are owned by the user.
 *
 * Syntax:
 * ```
 * az ad signed-in-user list-owned-objects [--type]
 * ```
 */
var az_ad_signed_in_user_list_owned_objects_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_signed_in_user_list_owned_objects_command_builder, _super);
    function az_ad_signed_in_user_list_owned_objects_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Object type filter, e.g. "application", "servicePrincipal"  "group", etc. */
    az_ad_signed_in_user_list_owned_objects_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    return az_ad_signed_in_user_list_owned_objects_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the details for the currently logged-in user.
 *
 * Syntax:
 * ```
 * az ad signed-in-user show [--query-examples]
 * ```
 */
var az_ad_signed_in_user_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_signed_in_user_show_command_builder, _super);
    function az_ad_signed_in_user_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_signed_in_user_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_signed_in_user_show_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_credential_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_credential_delete_command_builder, _super);
    function az_ad_sp_credential_delete_command_builder(commandPath, resultDataTypeName, id, keyId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.keyId(keyId);
        return _this;
    }
    /** Service principal name, or object id. */
    az_ad_sp_credential_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Credential key id. */
    az_ad_sp_credential_delete_command_builder.prototype.keyId = function (value) {
        this.setFlag("--key-id", value);
        return this;
    };
    /** A certificate based credential. */
    az_ad_sp_credential_delete_command_builder.prototype.cert = function (value) {
        this.setFlag("--cert", value);
        return this;
    };
    return az_ad_sp_credential_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_credential_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_credential_list_command_builder, _super);
    function az_ad_sp_credential_list_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Service principal name, or object id. */
    az_ad_sp_credential_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** A certificate based credential. */
    az_ad_sp_credential_list_command_builder.prototype.cert = function (value) {
        this.setFlag("--cert", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_sp_credential_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_sp_credential_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_credential_reset_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_credential_reset_command_builder, _super);
    function az_ad_sp_credential_reset_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name or app ID of the service principal. */
    az_ad_sp_credential_reset_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Append the new credential instead of overwriting. */
    az_ad_sp_credential_reset_command_builder.prototype.append = function (value) {
        this.setFlag("--append", value);
        return this;
    };
    /** Certificate to use for credentials. */
    az_ad_sp_credential_reset_command_builder.prototype.cert = function (value) {
        this.setFlag("--cert", value);
        return this;
    };
    /** Create a self-signed certificate to use for the credential. */
    az_ad_sp_credential_reset_command_builder.prototype.createCert = function (value) {
        this.setFlag("--create-cert", value);
        return this;
    };
    /** The description of the password. */
    az_ad_sp_credential_reset_command_builder.prototype.credentialDescription = function (value) {
        this.setFlag("--credential-description", value);
        return this;
    };
    /** Finer grain of expiry time if '--years' is insufficient, e.g. '2020-12-31T11:59:59+00:00' or '2299-12-31'. */
    az_ad_sp_credential_reset_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** Name or ID of a KeyVault to use for creating or retrieving certificates. */
    az_ad_sp_credential_reset_command_builder.prototype.keyvault = function (value) {
        this.setFlag("--keyvault", value);
        return this;
    };
    /** The password used to log in. */
    az_ad_sp_credential_reset_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Number of years for which the credentials will be valid. Default: 1 year. */
    az_ad_sp_credential_reset_command_builder.prototype.years = function (value) {
        this.setFlag("--years", value);
        return this;
    };
    return az_ad_sp_credential_reset_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_owner_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_owner_list_command_builder, _super);
    function az_ad_sp_owner_list_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Service principal name, or object id or the service principal. */
    az_ad_sp_owner_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_sp_owner_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_sp_owner_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_create_command_builder, _super);
    function az_ad_sp_create_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Identifier uri, application id, or object id of the associated application. */
    az_ad_sp_create_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    return az_ad_sp_create_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_create_for_rbac_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_create_for_rbac_command_builder, _super);
    function az_ad_sp_create_for_rbac_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Certificate to use for credentials. */
    az_ad_sp_create_for_rbac_command_builder.prototype.cert = function (value) {
        this.setFlag("--cert", value);
        return this;
    };
    /** Create a self-signed certificate to use for the credential. Only the current OS user has read/write permission to this certificate. */
    az_ad_sp_create_for_rbac_command_builder.prototype.createCert = function (value) {
        this.setFlag("--create-cert", value);
        return this;
    };
    /** Name or ID of a KeyVault to use for creating or retrieving certificates. */
    az_ad_sp_create_for_rbac_command_builder.prototype.keyvault = function (value) {
        this.setFlag("--keyvault", value);
        return this;
    };
    /** A URI to use as the logic name. It doesn't need to exist. If not present, CLI will generate one. */
    az_ad_sp_create_for_rbac_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Role of the service principal. */
    az_ad_sp_create_for_rbac_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Space-separated list of scopes the service principal's role assignment applies to. Defaults to the root of the current subscription. e.g., /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, or /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM. */
    az_ad_sp_create_for_rbac_command_builder.prototype.scopes = function (value) {
        this.setFlag("--scopes", value);
        return this;
    };
    /** Output result in compatible with Azure SDK auth file. */
    az_ad_sp_create_for_rbac_command_builder.prototype.sdkAuth = function (value) {
        this.setFlag("--sdk-auth", value.toString());
        return this;
    };
    /** Skip creating the default assignment, which allows the service principal to access resources under the current subscription. When specified, --scopes will be ignored. You may use `az role assignment create` to create role assignments for this service principal later. */
    az_ad_sp_create_for_rbac_command_builder.prototype.skipAssignment = function (value) {
        this.setFlag("--skip-assignment", value.toString());
        return this;
    };
    /** Number of years for which the credentials will be valid. Default: 1 year. */
    az_ad_sp_create_for_rbac_command_builder.prototype.years = function (value) {
        this.setFlag("--years", value);
        return this;
    };
    return az_ad_sp_create_for_rbac_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_delete_command_builder, _super);
    function az_ad_sp_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Service principal name, or object id. */
    az_ad_sp_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    return az_ad_sp_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_list_command_builder, _super);
    function az_ad_sp_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** List all entities, expect long delay if under a big organization. */
    az_ad_sp_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Object's display name or its prefix. */
    az_ad_sp_list_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    az_ad_sp_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_sp_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** List entities owned by the current user. */
    az_ad_sp_list_command_builder.prototype.showMine = function (value) {
        this.setFlag("--show-mine", value);
        return this;
    };
    /** Service principal name. */
    az_ad_sp_list_command_builder.prototype.spn = function (value) {
        this.setFlag("--spn", value);
        return this;
    };
    return az_ad_sp_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_show_command_builder, _super);
    function az_ad_sp_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Service principal name, or object id. */
    az_ad_sp_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_sp_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_sp_show_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_sp_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_sp_update_command_builder, _super);
    function az_ad_sp_update_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** Service principal name, or object id. */
    az_ad_sp_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ad_sp_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ad_sp_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ad_sp_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ad_sp_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    return az_ad_sp_update_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_user_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_user_create_command_builder, _super);
    function az_ad_user_create_command_builder(commandPath, resultDataTypeName, displayName, password, userPrincipalName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.displayName(displayName);
        _this.password(password);
        _this.userPrincipalName(userPrincipalName);
        return _this;
    }
    /** Object's display name or its prefix. */
    az_ad_user_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** The password that should be assigned to the user for authentication. */
    az_ad_user_create_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Required. The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant. */
    az_ad_user_create_command_builder.prototype.userPrincipalName = function (value) {
        this.setFlag("--user-principal-name", value);
        return this;
    };
    /** Marks this user as needing to update their password the next time they authenticate. If omitted, false will be used. */
    az_ad_user_create_command_builder.prototype.forceChangePasswordNextLogin = function (value) {
        this.setFlag("--force-change-password-next-login", value.toString());
        return this;
    };
    /** This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object. */
    az_ad_user_create_command_builder.prototype.immutableId = function (value) {
        this.setFlag("--immutable-id", value);
        return this;
    };
    /** Mail alias. Defaults to user principal name. */
    az_ad_user_create_command_builder.prototype.mailNickname = function (value) {
        this.setFlag("--mail-nickname", value);
        return this;
    };
    return az_ad_user_create_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_user_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_user_delete_command_builder, _super);
    function az_ad_user_delete_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The object ID or principal name of the user for which to get information. */
    az_ad_user_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    return az_ad_user_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_user_get_member_groups_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_user_get_member_groups_command_builder, _super);
    function az_ad_user_get_member_groups_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The object ID or principal name of the user for which to get information. */
    az_ad_user_get_member_groups_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** If true, only membership in security-enabled groups should be checked. Otherwise, membership in all groups should be checked. */
    az_ad_user_get_member_groups_command_builder.prototype.securityEnabledOnly = function (value) {
        this.setFlag("--security-enabled-only", value);
        return this;
    };
    return az_ad_user_get_member_groups_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_user_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_user_list_command_builder, _super);
    function az_ad_user_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Object's display name or its prefix. */
    az_ad_user_list_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** OData filter, e.g. --filter "displayname eq 'test' and servicePrincipalType eq 'Application'". */
    az_ad_user_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_user_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** User principal name, e.g. john.doe@contoso.com. */
    az_ad_user_list_command_builder.prototype.upn = function (value) {
        this.setFlag("--upn", value);
        return this;
    };
    return az_ad_user_list_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_user_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_user_show_command_builder, _super);
    function az_ad_user_show_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The object ID or principal name of the user for which to get information. */
    az_ad_user_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ad_user_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    return az_ad_user_show_command_builder;
}(base_1.CommandBuilder));
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
var az_ad_user_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ad_user_update_command_builder, _super);
    function az_ad_user_update_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The object ID or principal name of the user for which to get information. */
    az_ad_user_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Enable the user account. */
    az_ad_user_update_command_builder.prototype.accountEnabled = function (value) {
        this.setFlag("--account-enabled", value.toString());
        return this;
    };
    /** Object's display name or its prefix. */
    az_ad_user_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Require the user to change their password the next time they log in. Only valid when --password is specified. */
    az_ad_user_update_command_builder.prototype.forceChangePasswordNextLogin = function (value) {
        this.setFlag("--force-change-password-next-login", value.toString());
        return this;
    };
    /** Mail alias. Defaults to user principal name. */
    az_ad_user_update_command_builder.prototype.mailNickname = function (value) {
        this.setFlag("--mail-nickname", value);
        return this;
    };
    /** User password. */
    az_ad_user_update_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    return az_ad_user_update_command_builder;
}(base_1.CommandBuilder));
