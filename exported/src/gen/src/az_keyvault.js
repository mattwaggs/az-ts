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
exports.az_keyvault = exports.az_keyvault_storage = exports.az_keyvault_storage_sas_definition = exports.az_keyvault_security_domain = exports.az_keyvault_secret = exports.az_keyvault_role = exports.az_keyvault_role_definition = exports.az_keyvault_role_assignment = exports.az_keyvault_restore = exports.az_keyvault_private_link_resource = exports.az_keyvault_private_endpoint_connection = exports.az_keyvault_network_rule = exports.az_keyvault_key = exports.az_keyvault_certificate = exports.az_keyvault_certificate_pending = exports.az_keyvault_certificate_issuer = exports.az_keyvault_certificate_issuer_admin = exports.az_keyvault_certificate_contact = exports.az_keyvault_backup = void 0;
var base_1 = require("../base");
/** Manage full HSM backup. */
var az_keyvault_backup = /** @class */ (function () {
    function az_keyvault_backup() {
    }
    /**
     * Begin a full backup of the HSM.
     *
     * Syntax:
     * ```
     * az keyvault backup start --storage-container-SAS-token
     *                          [--blob-container-name]
     *                          [--hsm-name]
     *                          [--id]
     *                          [--storage-account-name]
     *                          [--storage-resource-uri]
     *                          [--subscription]
     * ```
     *
     * @param {string} storageContainerSasToken The SAS token pointing to an Azure Blob storage container.
     */
    az_keyvault_backup.start = function (storageContainerSasToken) {
        return new az_keyvault_backup_start_command_builder("az keyvault backup start", 'az_keyvault_backup_start_command_result', storageContainerSasToken);
    };
    return az_keyvault_backup;
}());
exports.az_keyvault_backup = az_keyvault_backup;
/** Manage contacts for certificate management. */
var az_keyvault_certificate_contact = /** @class */ (function () {
    function az_keyvault_certificate_contact() {
    }
    /**
     * Add a contact to the specified vault to receive notifications of certificate operations.
     *
     * Syntax:
     * ```
     * az keyvault certificate contact add --email
     *                                     --vault-name
     *                                     [--name]
     *                                     [--phone]
     *                                     [--subscription]
     * ```
     *
     * @param {string} email Contact e-mail address. Must be unique.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_contact.add = function (email, vaultName) {
        return new az_keyvault_certificate_contact_add_command_builder("az keyvault certificate contact add", 'az_keyvault_certificate_contact_add_command_result', email, vaultName);
    };
    /**
     * Remove a certificate contact from the specified vault.
     *
     * Syntax:
     * ```
     * az keyvault certificate contact delete --email
     *                                        --vault-name
     *                                        [--subscription]
     * ```
     *
     * @param {string} email Contact e-mail address. Must be unique.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_contact["delete"] = function (email, vaultName) {
        return new az_keyvault_certificate_contact_delete_command_builder("az keyvault certificate contact delete", 'az_keyvault_certificate_contact_delete_command_result', email, vaultName);
    };
    /**
     * Lists the certificate contacts for a specified key vault.
     *
     * Syntax:
     * ```
     * az keyvault certificate contact list --vault-name
     *                                      [--query-examples]
     *                                      [--subscription]
     * ```
     *
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_contact.list = function (vaultName) {
        return new az_keyvault_certificate_contact_list_command_builder("az keyvault certificate contact list", 'az_keyvault_certificate_contact_list_command_result', vaultName);
    };
    return az_keyvault_certificate_contact;
}());
exports.az_keyvault_certificate_contact = az_keyvault_certificate_contact;
/** Manage admin information for certificate issuers. */
var az_keyvault_certificate_issuer_admin = /** @class */ (function () {
    function az_keyvault_certificate_issuer_admin() {
    }
    /**
     * Add admin details for a specified certificate issuer.
     *
     * Syntax:
     * ```
     * az keyvault certificate issuer admin add --email
     *                                          --issuer-name
     *                                          --vault-name
     *                                          [--first-name]
     *                                          [--last-name]
     *                                          [--phone]
     *                                          [--subscription]
     * ```
     *
     * @param {string} email Admin e-mail address. Must be unique within the vault.
     * @param {string} issuerName Certificate issuer name.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_issuer_admin.add = function (email, issuerName, vaultName) {
        return new az_keyvault_certificate_issuer_admin_add_command_builder("az keyvault certificate issuer admin add", 'az_keyvault_certificate_issuer_admin_add_command_result', email, issuerName, vaultName);
    };
    /**
     * Remove admin details for the specified certificate issuer.
     *
     * Syntax:
     * ```
     * az keyvault certificate issuer admin delete --email
     *                                             --issuer-name
     *                                             --vault-name
     *                                             [--subscription]
     * ```
     *
     * @param {string} email Admin e-mail address. Must be unique within the vault.
     * @param {string} issuerName Certificate issuer name.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_issuer_admin["delete"] = function (email, issuerName, vaultName) {
        return new az_keyvault_certificate_issuer_admin_delete_command_builder("az keyvault certificate issuer admin delete", 'az_keyvault_certificate_issuer_admin_delete_command_result', email, issuerName, vaultName);
    };
    /**
     * List admins for a specified certificate issuer.
     *
     * Syntax:
     * ```
     * az keyvault certificate issuer admin list --issuer-name
     *                                           --vault-name
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} issuerName Certificate issuer name.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_issuer_admin.list = function (issuerName, vaultName) {
        return new az_keyvault_certificate_issuer_admin_list_command_builder("az keyvault certificate issuer admin list", 'az_keyvault_certificate_issuer_admin_list_command_result', issuerName, vaultName);
    };
    return az_keyvault_certificate_issuer_admin;
}());
exports.az_keyvault_certificate_issuer_admin = az_keyvault_certificate_issuer_admin;
/** Manage certificate issuer information. */
var az_keyvault_certificate_issuer = /** @class */ (function () {
    function az_keyvault_certificate_issuer() {
    }
    /**
     * Create a certificate issuer record.
     *
     * Syntax:
     * ```
     * az keyvault certificate issuer create --issuer-name
     *                                       --provider-name
     *                                       --vault-name
     *                                       [--account-id]
     *                                       [--disabled {false, true}]
     *                                       [--organization-id]
     *                                       [--password]
     *                                       [--subscription]
     * ```
     *
     * @param {string} issuerName Certificate issuer name.
     * @param {string} providerName The certificate provider name. Must be registered with your tenant ID and in your region.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_issuer.create = function (issuerName, providerName, vaultName) {
        return new az_keyvault_certificate_issuer_create_command_builder("az keyvault certificate issuer create", 'az_keyvault_certificate_issuer_create_command_result', issuerName, providerName, vaultName);
    };
    /**
     * Deletes the specified certificate issuer.
     *
     * Syntax:
     * ```
     * az keyvault certificate issuer delete --issuer-name
     *                                       --vault-name
     *                                       [--subscription]
     * ```
     *
     * @param {string} issuerName Certificate issuer name.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_issuer["delete"] = function (issuerName, vaultName) {
        return new az_keyvault_certificate_issuer_delete_command_builder("az keyvault certificate issuer delete", 'az_keyvault_certificate_issuer_delete_command_result', issuerName, vaultName);
    };
    /**
     * List certificate issuers for a specified key vault.
     *
     * Syntax:
     * ```
     * az keyvault certificate issuer list --vault-name
     *                                     [--maxresults]
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_issuer.list = function (vaultName) {
        return new az_keyvault_certificate_issuer_list_command_builder("az keyvault certificate issuer list", 'az_keyvault_certificate_issuer_list_command_result', vaultName);
    };
    /**
     * Lists the specified certificate issuer.
     *
     * Syntax:
     * ```
     * az keyvault certificate issuer show --issuer-name
     *                                     --vault-name
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} issuerName Certificate issuer name.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_issuer.show = function (issuerName, vaultName) {
        return new az_keyvault_certificate_issuer_show_command_builder("az keyvault certificate issuer show", 'az_keyvault_certificate_issuer_show_command_result', issuerName, vaultName);
    };
    /**
     * Update a certificate issuer record.
     *
     * Syntax:
     * ```
     * az keyvault certificate issuer update --issuer-name
     *                                       --vault-name
     *                                       [--account-id]
     *                                       [--enabled {false, true}]
     *                                       [--organization-id]
     *                                       [--password]
     *                                       [--provider-name]
     *                                       [--subscription]
     * ```
     *
     * @param {string} issuerName Certificate issuer name.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_issuer.update = function (issuerName, vaultName) {
        return new az_keyvault_certificate_issuer_update_command_builder("az keyvault certificate issuer update", 'az_keyvault_certificate_issuer_update_command_result', issuerName, vaultName);
    };
    return az_keyvault_certificate_issuer;
}());
exports.az_keyvault_certificate_issuer = az_keyvault_certificate_issuer;
/** Manage pending certificate creation operations. */
var az_keyvault_certificate_pending = /** @class */ (function () {
    function az_keyvault_certificate_pending() {
    }
    /**
     * Deletes the creation operation for a specific certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate pending delete --name
     *                                        --vault-name
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Name of the pending certificate.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_pending["delete"] = function (name, vaultName) {
        return new az_keyvault_certificate_pending_delete_command_builder("az keyvault certificate pending delete", 'az_keyvault_certificate_pending_delete_command_result', name, vaultName);
    };
    /**
     * Merges a certificate or a certificate chain with a key pair existing on the server.
     *
     * Syntax:
     * ```
     * az keyvault certificate pending merge --file
     *                                       --name
     *                                       --vault-name
     *                                       [--disabled {false, true}]
     *                                       [--expires]
     *                                       [--not-before]
     *                                       [--subscription]
     *                                       [--tags]
     * ```
     *
     * @param {string} file File containing the certificate or certificate chain to merge.
     * @param {string} name Name of the pending certificate.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_pending.merge = function (file, name, vaultName) {
        return new az_keyvault_certificate_pending_merge_command_builder("az keyvault certificate pending merge", 'az_keyvault_certificate_pending_merge_command_result', file, name, vaultName);
    };
    /**
     * Gets the creation operation of a certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate pending show --name
     *                                      --vault-name
     *                                      [--query-examples]
     *                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the pending certificate.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate_pending.show = function (name, vaultName) {
        return new az_keyvault_certificate_pending_show_command_builder("az keyvault certificate pending show", 'az_keyvault_certificate_pending_show_command_result', name, vaultName);
    };
    return az_keyvault_certificate_pending;
}());
exports.az_keyvault_certificate_pending = az_keyvault_certificate_pending;
/** Manage certificates. */
var az_keyvault_certificate = /** @class */ (function () {
    function az_keyvault_certificate() {
    }
    /**
     * Backs up the specified certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate backup --file
     *                                [--id]
     *                                [--name]
     *                                [--subscription]
     *                                [--vault-name]
     * ```
     *
     * @param {string} file Local file path in which to store certificate backup.
     */
    az_keyvault_certificate.backup = function (file) {
        return new az_keyvault_certificate_backup_command_builder("az keyvault certificate backup", 'az_keyvault_certificate_backup_command_result', file);
    };
    /**
     * Create a Key Vault certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate create --name
     *                                --policy
     *                                --vault-name
     *                                [--disabled {false, true}]
     *                                [--subscription]
     *                                [--tags]
     *                                [--validity]
     * ```
     *
     * @param {string} name Name of the certificate.
     * @param {string} policy JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json).
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate.create = function (name, policy, vaultName) {
        return new az_keyvault_certificate_create_command_builder("az keyvault certificate create", 'az_keyvault_certificate_create_command_result', name, policy, vaultName);
    };
    /**
     * Deletes a certificate from a specified key vault.
     *
     * Syntax:
     * ```
     * az keyvault certificate delete [--id]
     *                                [--name]
     *                                [--subscription]
     *                                [--vault-name]
     * ```
     */
    az_keyvault_certificate["delete"] = function () {
        return new az_keyvault_certificate_delete_command_builder("az keyvault certificate delete", 'az_keyvault_certificate_delete_command_result');
    };
    /**
     * Download the public portion of a Key Vault certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate download --file
     *                                  [--encoding {DER, PEM}]
     *                                  [--id]
     *                                  [--name]
     *                                  [--subscription]
     *                                  [--vault-name]
     *                                  [--version]
     * ```
     *
     * @param {string} file File to receive the binary certificate contents.
     */
    az_keyvault_certificate.download = function (file) {
        return new az_keyvault_certificate_download_command_builder("az keyvault certificate download", 'az_keyvault_certificate_download_command_result', file);
    };
    /**
     * Get the default policy for self-signed certificates.
     *
     * Syntax:
     * ```
     * az keyvault certificate get-default-policy [--scaffold]
     *                                            [--subscription]
     * ```
     */
    az_keyvault_certificate.get_default_policy = function () {
        return new az_keyvault_certificate_get_default_policy_command_builder("az keyvault certificate get-default-policy", 'az_keyvault_certificate_get_default_policy_command_result');
    };
    /**
     * Import a certificate into KeyVault.
     *
     * Syntax:
     * ```
     * az keyvault certificate import --file
     *                                --name
     *                                --vault-name
     *                                [--disabled {false, true}]
     *                                [--password]
     *                                [--policy]
     *                                [--subscription]
     *                                [--tags]
     * ```
     *
     * @param {string} file PKCS12 file or PEM file containing the certificate and private key.
     * @param {string} name Name of the certificate.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate["import"] = function (file, name, vaultName) {
        return new az_keyvault_certificate_import_command_builder("az keyvault certificate import", 'az_keyvault_certificate_import_command_result', file, name, vaultName);
    };
    /**
     * List certificates in a specified key vault.
     *
     * Syntax:
     * ```
     * az keyvault certificate list [--id]
     *                              [--include-pending {false, true}]
     *                              [--maxresults]
     *                              [--query-examples]
     *                              [--subscription]
     *                              [--vault-name]
     * ```
     */
    az_keyvault_certificate.list = function () {
        return new az_keyvault_certificate_list_command_builder("az keyvault certificate list", 'az_keyvault_certificate_list_command_result');
    };
    /**
     * Lists the deleted certificates in the specified vault currently available for recovery.
     *
     * Syntax:
     * ```
     * az keyvault certificate list-deleted --vault-name
     *                                      [--id]
     *                                      [--include-pending {false, true}]
     *                                      [--maxresults]
     *                                      [--subscription]
     * ```
     *
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate.list_deleted = function (vaultName) {
        return new az_keyvault_certificate_list_deleted_command_builder("az keyvault certificate list-deleted", 'az_keyvault_certificate_list_deleted_command_result', vaultName);
    };
    /**
     * List the versions of a certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate list-versions [--id]
     *                                       [--maxresults]
     *                                       [--name]
     *                                       [--subscription]
     *                                       [--vault-name]
     * ```
     */
    az_keyvault_certificate.list_versions = function () {
        return new az_keyvault_certificate_list_versions_command_builder("az keyvault certificate list-versions", 'az_keyvault_certificate_list_versions_command_result');
    };
    /**
     * Permanently deletes the specified deleted certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate purge [--id]
     *                               [--name]
     *                               [--subscription]
     *                               [--vault-name]
     * ```
     */
    az_keyvault_certificate.purge = function () {
        return new az_keyvault_certificate_purge_command_builder("az keyvault certificate purge", 'az_keyvault_certificate_purge_command_result');
    };
    /**
     * Recovers the deleted certificate back to its current version under /certificates.
     *
     * Syntax:
     * ```
     * az keyvault certificate recover [--id]
     *                                 [--name]
     *                                 [--subscription]
     *                                 [--vault-name]
     * ```
     */
    az_keyvault_certificate.recover = function () {
        return new az_keyvault_certificate_recover_command_builder("az keyvault certificate recover", 'az_keyvault_certificate_recover_command_result');
    };
    /**
     * Restores a backed up certificate to a vault.
     *
     * Syntax:
     * ```
     * az keyvault certificate restore --file
     *                                 --vault-name
     *                                 [--subscription]
     * ```
     *
     * @param {string} file Local certificate backup from which to restore certificate.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_certificate.restore = function (file, vaultName) {
        return new az_keyvault_certificate_restore_command_builder("az keyvault certificate restore", 'az_keyvault_certificate_restore_command_result', file, vaultName);
    };
    /**
     * Updates the specified attributes associated with the given certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate set-attributes [--enabled {false, true}]
     *                                        [--id]
     *                                        [--name]
     *                                        [--policy]
     *                                        [--subscription]
     *                                        [--tags]
     *                                        [--vault-name]
     *                                        [--version]
     * ```
     */
    az_keyvault_certificate.set_attributes = function () {
        return new az_keyvault_certificate_set_attributes_command_builder("az keyvault certificate set-attributes", 'az_keyvault_certificate_set_attributes_command_result');
    };
    /**
     * Gets information about a certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate show [--id]
     *                              [--name]
     *                              [--query-examples]
     *                              [--subscription]
     *                              [--vault-name]
     *                              [--version]
     * ```
     */
    az_keyvault_certificate.show = function () {
        return new az_keyvault_certificate_show_command_builder("az keyvault certificate show", 'az_keyvault_certificate_show_command_result');
    };
    /**
     * Retrieves information about the specified deleted certificate.
     *
     * Syntax:
     * ```
     * az keyvault certificate show-deleted [--id]
     *                                      [--name]
     *                                      [--subscription]
     *                                      [--vault-name]
     * ```
     */
    az_keyvault_certificate.show_deleted = function () {
        return new az_keyvault_certificate_show_deleted_command_builder("az keyvault certificate show-deleted", 'az_keyvault_certificate_show_deleted_command_result');
    };
    return az_keyvault_certificate;
}());
exports.az_keyvault_certificate = az_keyvault_certificate;
/** Manage keys. */
var az_keyvault_key = /** @class */ (function () {
    function az_keyvault_key() {
    }
    /**
     * Request that a backup of the specified key be downloaded to the client.
     *
     * Syntax:
     * ```
     * az keyvault key backup --file
     *                        [--hsm-name]
     *                        [--id]
     *                        [--name]
     *                        [--subscription]
     *                        [--vault-name]
     * ```
     *
     * @param {string} file Local file path in which to store key backup.
     */
    az_keyvault_key.backup = function (file) {
        return new az_keyvault_key_backup_command_builder("az keyvault key backup", 'az_keyvault_key_backup_command_result', file);
    };
    /**
     * Create a new key, stores it, then returns key parameters and attributes to the client.
     *
     * Syntax:
     * ```
     * az keyvault key create [--curve {P-256, P-256K, P-384, P-521}]
     *                        [--disabled {false, true}]
     *                        [--expires]
     *                        [--hsm-name]
     *                        [--id]
     *                        [--kty {EC, EC-HSM, RSA, RSA-HSM, oct, oct-HSM}]
     *                        [--name]
     *                        [--not-before]
     *                        [--ops {decrypt, encrypt, export, import, sign, unwrapKey, verify, wrapKey}]
     *                        [--protection {hsm, software}]
     *                        [--size]
     *                        [--subscription]
     *                        [--tags]
     *                        [--vault-name]
     * ```
     */
    az_keyvault_key.create = function () {
        return new az_keyvault_key_create_command_builder("az keyvault key create", 'az_keyvault_key_create_command_result');
    };
    /**
     * Decrypt a single block of encrypted data.
     *
     * Syntax:
     * ```
     * az keyvault key decrypt --algorithm {RSA-OAEP, RSA-OAEP-256, RSA1_5}
     *                         --value
     *                         [--data-type {base64, plaintext}]
     *                         [--id]
     *                         [--name]
     *                         [--subscription]
     *                         [--vault-name]
     *                         [--version]
     * ```
     *
     * @param {'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5'} algorithm Algorithm identifier.
     * @param {string} value The value to be decrypted, which should be the result of "az keyvault encrypt".
     */
    az_keyvault_key.decrypt = function (algorithm, value) {
        return new az_keyvault_key_decrypt_command_builder("az keyvault key decrypt", 'az_keyvault_key_decrypt_command_result', algorithm, value);
    };
    /**
     * Delete a key of any type from storage in Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault key delete [--hsm-name]
     *                        [--id]
     *                        [--name]
     *                        [--subscription]
     *                        [--vault-name]
     * ```
     */
    az_keyvault_key["delete"] = function () {
        return new az_keyvault_key_delete_command_builder("az keyvault key delete", 'az_keyvault_key_delete_command_result');
    };
    /**
     * Download the public part of a stored key.
     *
     * Syntax:
     * ```
     * az keyvault key download --file
     *                          [--encoding {DER, PEM}]
     *                          [--hsm-name]
     *                          [--id]
     *                          [--name]
     *                          [--subscription]
     *                          [--vault-name]
     *                          [--version]
     * ```
     *
     * @param {string} file File to receive the key contents.
     */
    az_keyvault_key.download = function (file) {
        return new az_keyvault_key_download_command_builder("az keyvault key download", 'az_keyvault_key_download_command_result', file);
    };
    /**
     * Encrypt an arbitrary sequence of bytes using an encryption key that is stored in a Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault key encrypt --algorithm {RSA-OAEP, RSA-OAEP-256, RSA1_5}
     *                         --value
     *                         [--data-type {base64, plaintext}]
     *                         [--id]
     *                         [--name]
     *                         [--subscription]
     *                         [--vault-name]
     *                         [--version]
     * ```
     *
     * @param {'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5'} algorithm Algorithm identifier.
     * @param {string} value The value to be encrypted. Default data type is Base64 encoded string.
     */
    az_keyvault_key.encrypt = function (algorithm, value) {
        return new az_keyvault_key_encrypt_command_builder("az keyvault key encrypt", 'az_keyvault_key_encrypt_command_result', algorithm, value);
    };
    /**
     * Return policy template as JSON encoded policy definition.
     *
     * Syntax:
     * ```
     * az keyvault key get-policy-template [--subscription]
     * ```
     */
    az_keyvault_key.get_policy_template = function () {
        return new az_keyvault_key_get_policy_template_command_builder("az keyvault key get-policy-template", 'az_keyvault_key_get_policy_template_command_result');
    };
    /**
     * Import a private key.
     *
     * Syntax:
     * ```
     * az keyvault key import [--byok-file]
     *                        [--byok-string]
     *                        [--disabled {false, true}]
     *                        [--expires]
     *                        [--hsm-name]
     *                        [--id]
     *                        [--name]
     *                        [--not-before]
     *                        [--ops {decrypt, encrypt, export, import, sign, unwrapKey, verify, wrapKey}]
     *                        [--pem-file]
     *                        [--pem-password]
     *                        [--pem-string]
     *                        [--protection {hsm, software}]
     *                        [--subscription]
     *                        [--tags]
     *                        [--vault-name]
     * ```
     */
    az_keyvault_key["import"] = function () {
        return new az_keyvault_key_import_command_builder("az keyvault key import", 'az_keyvault_key_import_command_result');
    };
    /**
     * List keys in the specified Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault key list [--hsm-name]
     *                      [--id]
     *                      [--maxresults]
     *                      [--query-examples]
     *                      [--subscription]
     *                      [--vault-name]
     * ```
     */
    az_keyvault_key.list = function () {
        return new az_keyvault_key_list_command_builder("az keyvault key list", 'az_keyvault_key_list_command_result');
    };
    /**
     * List the deleted keys in the specified Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault key list-deleted [--hsm-name]
     *                              [--id]
     *                              [--maxresults]
     *                              [--subscription]
     *                              [--vault-name]
     * ```
     */
    az_keyvault_key.list_deleted = function () {
        return new az_keyvault_key_list_deleted_command_builder("az keyvault key list-deleted", 'az_keyvault_key_list_deleted_command_result');
    };
    /**
     * Retrieves a list of individual key versions with the same key name.
     *
     * Syntax:
     * ```
     * az keyvault key list-versions [--hsm-name]
     *                               [--id]
     *                               [--maxresults]
     *                               [--name]
     *                               [--subscription]
     *                               [--vault-name]
     * ```
     */
    az_keyvault_key.list_versions = function () {
        return new az_keyvault_key_list_versions_command_builder("az keyvault key list-versions", 'az_keyvault_key_list_versions_command_result');
    };
    /**
     * Permanently delete the specified key.
     *
     * Syntax:
     * ```
     * az keyvault key purge [--hsm-name]
     *                       [--id]
     *                       [--name]
     *                       [--subscription]
     *                       [--vault-name]
     * ```
     */
    az_keyvault_key.purge = function () {
        return new az_keyvault_key_purge_command_builder("az keyvault key purge", 'az_keyvault_key_purge_command_result');
    };
    /**
     * Recover the deleted key to its latest version.
     *
     * Syntax:
     * ```
     * az keyvault key recover [--hsm-name]
     *                         [--id]
     *                         [--name]
     *                         [--subscription]
     *                         [--vault-name]
     * ```
     */
    az_keyvault_key.recover = function () {
        return new az_keyvault_key_recover_command_builder("az keyvault key recover", 'az_keyvault_key_recover_command_result');
    };
    /**
     * Restore a backed up key to a Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault key restore --file
     *                         [--hsm-name]
     *                         [--id]
     *                         [--subscription]
     *                         [--vault-name]
     * ```
     *
     * @param {string} file Local key backup from which to restore key.
     */
    az_keyvault_key.restore = function (file) {
        return new az_keyvault_key_restore_command_builder("az keyvault key restore", 'az_keyvault_key_restore_command_result', file);
    };
    /**
     * The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault key set-attributes [--enabled {false, true}]
     *                                [--expires]
     *                                [--hsm-name]
     *                                [--id]
     *                                [--name]
     *                                [--not-before]
     *                                [--ops {decrypt, encrypt, export, import, sign, unwrapKey, verify, wrapKey}]
     *                                [--subscription]
     *                                [--tags]
     *                                [--vault-name]
     *                                [--version]
     * ```
     */
    az_keyvault_key.set_attributes = function () {
        return new az_keyvault_key_set_attributes_command_builder("az keyvault key set-attributes", 'az_keyvault_key_set_attributes_command_result');
    };
    /**
     * Gets the public part of a stored key.
     *
     * Syntax:
     * ```
     * az keyvault key show [--hsm-name]
     *                      [--id]
     *                      [--name]
     *                      [--query-examples]
     *                      [--subscription]
     *                      [--vault-name]
     *                      [--version]
     * ```
     */
    az_keyvault_key.show = function () {
        return new az_keyvault_key_show_command_builder("az keyvault key show", 'az_keyvault_key_show_command_result');
    };
    /**
     * Get the public part of a deleted key.
     *
     * Syntax:
     * ```
     * az keyvault key show-deleted [--hsm-name]
     *                              [--id]
     *                              [--name]
     *                              [--subscription]
     *                              [--vault-name]
     * ```
     */
    az_keyvault_key.show_deleted = function () {
        return new az_keyvault_key_show_deleted_command_builder("az keyvault key show-deleted", 'az_keyvault_key_show_deleted_command_result');
    };
    return az_keyvault_key;
}());
exports.az_keyvault_key = az_keyvault_key;
/** Manage vault network ACLs. */
var az_keyvault_network_rule = /** @class */ (function () {
    function az_keyvault_network_rule() {
    }
    /**
     * Add a network rule to the network ACLs for a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault network-rule add --name
     *                              [--ip-address]
     *                              [--no-wait]
     *                              [--resource-group]
     *                              [--subnet]
     *                              [--subscription]
     *                              [--vnet-name]
     * ```
     *
     * @param {string} name Name of the Vault.
     */
    az_keyvault_network_rule.add = function (name) {
        return new az_keyvault_network_rule_add_command_builder("az keyvault network-rule add", 'az_keyvault_network_rule_add_command_result', name);
    };
    /**
     * List the network rules from the network ACLs for a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault network-rule list --name
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name of the Vault.
     */
    az_keyvault_network_rule.list = function (name) {
        return new az_keyvault_network_rule_list_command_builder("az keyvault network-rule list", 'az_keyvault_network_rule_list_command_result', name);
    };
    /**
     * Remove a network rule from the network ACLs for a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault network-rule remove --name
     *                                 [--ip-address]
     *                                 [--no-wait]
     *                                 [--resource-group]
     *                                 [--subnet]
     *                                 [--subscription]
     *                                 [--vnet-name]
     * ```
     *
     * @param {string} name Name of the Vault.
     */
    az_keyvault_network_rule.remove = function (name) {
        return new az_keyvault_network_rule_remove_command_builder("az keyvault network-rule remove", 'az_keyvault_network_rule_remove_command_result', name);
    };
    /**
     * Place the CLI in a waiting state until a condition of the vault is met.
     *
     * Syntax:
     * ```
     * az keyvault network-rule wait --name
     *                               [--created]
     *                               [--custom]
     *                               [--deleted]
     *                               [--exists]
     *                               [--interval]
     *                               [--resource-group]
     *                               [--subscription]
     *                               [--timeout]
     *                               [--updated]
     * ```
     *
     * @param {string} name Name of the Vault.
     */
    az_keyvault_network_rule.wait = function (name) {
        return new az_keyvault_network_rule_wait_command_builder("az keyvault network-rule wait", 'az_keyvault_network_rule_wait_command_result', name);
    };
    return az_keyvault_network_rule;
}());
exports.az_keyvault_network_rule = az_keyvault_network_rule;
/** Manage vault private endpoint connections. */
var az_keyvault_private_endpoint_connection = /** @class */ (function () {
    function az_keyvault_private_endpoint_connection() {
    }
    /**
     * Approve a private endpoint connection request for a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault private-endpoint-connection approve [--description]
     *                                                 [--id]
     *                                                 [--name]
     *                                                 [--no-wait]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     *                                                 [--vault-name]
     * ```
     */
    az_keyvault_private_endpoint_connection.approve = function () {
        return new az_keyvault_private_endpoint_connection_approve_command_builder("az keyvault private-endpoint-connection approve", 'az_keyvault_private_endpoint_connection_approve_command_result');
    };
    /**
     * Delete the specified private endpoint connection associated with a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault private-endpoint-connection delete [--id]
     *                                                [--name]
     *                                                [--no-wait]
     *                                                [--resource-group]
     *                                                [--subscription]
     *                                                [--vault-name]
     * ```
     */
    az_keyvault_private_endpoint_connection["delete"] = function () {
        return new az_keyvault_private_endpoint_connection_delete_command_builder("az keyvault private-endpoint-connection delete", 'az_keyvault_private_endpoint_connection_delete_command_result');
    };
    /**
     * Reject a private endpoint connection request for a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault private-endpoint-connection reject [--description]
     *                                                [--id]
     *                                                [--name]
     *                                                [--no-wait]
     *                                                [--resource-group]
     *                                                [--subscription]
     *                                                [--vault-name]
     * ```
     */
    az_keyvault_private_endpoint_connection.reject = function () {
        return new az_keyvault_private_endpoint_connection_reject_command_builder("az keyvault private-endpoint-connection reject", 'az_keyvault_private_endpoint_connection_reject_command_result');
    };
    /**
     * Show details of a private endpoint connection associated with a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault private-endpoint-connection show [--id]
     *                                              [--name]
     *                                              [--query-examples]
     *                                              [--resource-group]
     *                                              [--subscription]
     *                                              [--vault-name]
     * ```
     */
    az_keyvault_private_endpoint_connection.show = function () {
        return new az_keyvault_private_endpoint_connection_show_command_builder("az keyvault private-endpoint-connection show", 'az_keyvault_private_endpoint_connection_show_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the private endpoint connection is met.
     *
     * Syntax:
     * ```
     * az keyvault private-endpoint-connection wait [--created]
     *                                              [--custom]
     *                                              [--deleted]
     *                                              [--exists]
     *                                              [--id]
     *                                              [--interval]
     *                                              [--name]
     *                                              [--resource-group]
     *                                              [--subscription]
     *                                              [--timeout]
     *                                              [--updated]
     *                                              [--vault-name]
     * ```
     */
    az_keyvault_private_endpoint_connection.wait = function () {
        return new az_keyvault_private_endpoint_connection_wait_command_builder("az keyvault private-endpoint-connection wait", 'az_keyvault_private_endpoint_connection_wait_command_result');
    };
    return az_keyvault_private_endpoint_connection;
}());
exports.az_keyvault_private_endpoint_connection = az_keyvault_private_endpoint_connection;
/** Manage vault private link resources. */
var az_keyvault_private_link_resource = /** @class */ (function () {
    function az_keyvault_private_link_resource() {
    }
    /**
     * List the private link resources supported for a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault private-link-resource list --vault-name
     *                                        [--query-examples]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     *
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_private_link_resource.list = function (vaultName) {
        return new az_keyvault_private_link_resource_list_command_builder("az keyvault private-link-resource list", 'az_keyvault_private_link_resource_list_command_result', vaultName);
    };
    return az_keyvault_private_link_resource;
}());
exports.az_keyvault_private_link_resource = az_keyvault_private_link_resource;
/** Manage full HSM restore. */
var az_keyvault_restore = /** @class */ (function () {
    function az_keyvault_restore() {
    }
    /**
     * Restore a full backup of a HSM.
     *
     * Syntax:
     * ```
     * az keyvault restore start --backup-folder
     *                           --storage-container-SAS-token
     *                           [--blob-container-name]
     *                           [--hsm-name]
     *                           [--id]
     *                           [--storage-account-name]
     *                           [--storage-resource-uri]
     *                           [--subscription]
     * ```
     *
     * @param {string} backupFolder Name of the blob container which contains the backup.
     * @param {string} storageContainerSasToken The SAS token pointing to an Azure Blob storage container.
     */
    az_keyvault_restore.start = function (backupFolder, storageContainerSasToken) {
        return new az_keyvault_restore_start_command_builder("az keyvault restore start", 'az_keyvault_restore_start_command_result', backupFolder, storageContainerSasToken);
    };
    return az_keyvault_restore;
}());
exports.az_keyvault_restore = az_keyvault_restore;
/** Manage role assignments. */
var az_keyvault_role_assignment = /** @class */ (function () {
    function az_keyvault_role_assignment() {
    }
    /**
     * Create a new role assignment for a user, group, or service principal.
     *
     * Syntax:
     * ```
     * az keyvault role assignment create --role
     *                                    --scope
     *                                    [--assignee]
     *                                    [--assignee-object-id]
     *                                    [--assignee-principal-type {Application, DirectoryObjectOrGroup, DirectoryRoleTemplate, Everyone, ForeignGroup, Group, MSI, ServicePrincipal, Unknown, User}]
     *                                    [--hsm-name]
     *                                    [--id]
     *                                    [--name]
     *                                    [--subscription]
     * ```
     *
     * @param {string} role Role name or id.
     * @param {string} scope Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}".
     */
    az_keyvault_role_assignment.create = function (role, scope) {
        return new az_keyvault_role_assignment_create_command_builder("az keyvault role assignment create", 'az_keyvault_role_assignment_create_command_result', role, scope);
    };
    /**
     * Delete a role assignment.
     *
     * Syntax:
     * ```
     * az keyvault role assignment delete [--assignee]
     *                                    [--assignee-object-id]
     *                                    [--hsm-name]
     *                                    [--id]
     *                                    [--ids]
     *                                    [--name]
     *                                    [--role]
     *                                    [--scope]
     *                                    [--subscription]
     * ```
     */
    az_keyvault_role_assignment["delete"] = function () {
        return new az_keyvault_role_assignment_delete_command_builder("az keyvault role assignment delete", 'az_keyvault_role_assignment_delete_command_result');
    };
    /**
     * List role assignments.
     *
     * Syntax:
     * ```
     * az keyvault role assignment list [--assignee]
     *                                  [--assignee-object-id]
     *                                  [--hsm-name]
     *                                  [--id]
     *                                  [--query-examples]
     *                                  [--role]
     *                                  [--scope]
     *                                  [--subscription]
     * ```
     */
    az_keyvault_role_assignment.list = function () {
        return new az_keyvault_role_assignment_list_command_builder("az keyvault role assignment list", 'az_keyvault_role_assignment_list_command_result');
    };
    return az_keyvault_role_assignment;
}());
exports.az_keyvault_role_assignment = az_keyvault_role_assignment;
/** Manage role definitions. */
var az_keyvault_role_definition = /** @class */ (function () {
    function az_keyvault_role_definition() {
    }
    /**
     * List role definitions.
     *
     * Syntax:
     * ```
     * az keyvault role definition list [--hsm-name]
     *                                  [--query-examples]
     *                                  [--scope]
     *                                  [--subscription]
     * ```
     */
    az_keyvault_role_definition.list = function () {
        return new az_keyvault_role_definition_list_command_builder("az keyvault role definition list", 'az_keyvault_role_definition_list_command_result');
    };
    return az_keyvault_role_definition;
}());
exports.az_keyvault_role_definition = az_keyvault_role_definition;
/** Manage user roles for access control. */
var az_keyvault_role = /** @class */ (function () {
    function az_keyvault_role() {
    }
    return az_keyvault_role;
}());
exports.az_keyvault_role = az_keyvault_role;
/** Manage secrets. */
var az_keyvault_secret = /** @class */ (function () {
    function az_keyvault_secret() {
    }
    /**
     * Backs up the specified secret.
     *
     * Syntax:
     * ```
     * az keyvault secret backup --file
     *                           [--id]
     *                           [--name]
     *                           [--subscription]
     *                           [--vault-name]
     * ```
     *
     * @param {string} file File to receive the secret contents.
     */
    az_keyvault_secret.backup = function (file) {
        return new az_keyvault_secret_backup_command_builder("az keyvault secret backup", 'az_keyvault_secret_backup_command_result', file);
    };
    /**
     * Deletes a secret from a specified key vault.
     *
     * Syntax:
     * ```
     * az keyvault secret delete [--id]
     *                           [--name]
     *                           [--subscription]
     *                           [--vault-name]
     * ```
     */
    az_keyvault_secret["delete"] = function () {
        return new az_keyvault_secret_delete_command_builder("az keyvault secret delete", 'az_keyvault_secret_delete_command_result');
    };
    /**
     * Download a secret from a KeyVault.
     *
     * Syntax:
     * ```
     * az keyvault secret download --file
     *                             [--encoding {ascii, base64, hex, utf-16be, utf-16le, utf-8}]
     *                             [--id]
     *                             [--name]
     *                             [--subscription]
     *                             [--vault-name]
     *                             [--version]
     * ```
     *
     * @param {string} file File to receive the secret contents.
     */
    az_keyvault_secret.download = function (file) {
        return new az_keyvault_secret_download_command_builder("az keyvault secret download", 'az_keyvault_secret_download_command_result', file);
    };
    /**
     * List secrets in a specified key vault.
     *
     * Syntax:
     * ```
     * az keyvault secret list [--id]
     *                         [--maxresults]
     *                         [--query-examples]
     *                         [--subscription]
     *                         [--vault-name]
     * ```
     */
    az_keyvault_secret.list = function () {
        return new az_keyvault_secret_list_command_builder("az keyvault secret list", 'az_keyvault_secret_list_command_result');
    };
    /**
     * Lists deleted secrets for the specified vault.
     *
     * Syntax:
     * ```
     * az keyvault secret list-deleted --vault-name
     *                                 [--id]
     *                                 [--maxresults]
     *                                 [--subscription]
     * ```
     *
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_secret.list_deleted = function (vaultName) {
        return new az_keyvault_secret_list_deleted_command_builder("az keyvault secret list-deleted", 'az_keyvault_secret_list_deleted_command_result', vaultName);
    };
    /**
     * List all versions of the specified secret.
     *
     * Syntax:
     * ```
     * az keyvault secret list-versions [--id]
     *                                  [--maxresults]
     *                                  [--name]
     *                                  [--subscription]
     *                                  [--vault-name]
     * ```
     */
    az_keyvault_secret.list_versions = function () {
        return new az_keyvault_secret_list_versions_command_builder("az keyvault secret list-versions", 'az_keyvault_secret_list_versions_command_result');
    };
    /**
     * Permanently deletes the specified secret.
     *
     * Syntax:
     * ```
     * az keyvault secret purge [--id]
     *                          [--name]
     *                          [--subscription]
     *                          [--vault-name]
     * ```
     */
    az_keyvault_secret.purge = function () {
        return new az_keyvault_secret_purge_command_builder("az keyvault secret purge", 'az_keyvault_secret_purge_command_result');
    };
    /**
     * Recovers the deleted secret to the latest version.
     *
     * Syntax:
     * ```
     * az keyvault secret recover [--id]
     *                            [--name]
     *                            [--subscription]
     *                            [--vault-name]
     * ```
     */
    az_keyvault_secret.recover = function () {
        return new az_keyvault_secret_recover_command_builder("az keyvault secret recover", 'az_keyvault_secret_recover_command_result');
    };
    /**
     * Restores a backed up secret to a vault.
     *
     * Syntax:
     * ```
     * az keyvault secret restore --file
     *                            --vault-name
     *                            [--subscription]
     * ```
     *
     * @param {string} file File to receive the secret contents.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_secret.restore = function (file, vaultName) {
        return new az_keyvault_secret_restore_command_builder("az keyvault secret restore", 'az_keyvault_secret_restore_command_result', file, vaultName);
    };
    /**
     * Create a secret (if one doesn't exist) or update a secret in a KeyVault.
     *
     * Syntax:
     * ```
     * az keyvault secret set --name
     *                        --vault-name
     *                        [--description]
     *                        [--disabled {false, true}]
     *                        [--encoding {ascii, base64, hex, utf-16be, utf-16le, utf-8}]
     *                        [--expires]
     *                        [--file]
     *                        [--not-before]
     *                        [--subscription]
     *                        [--tags]
     *                        [--value]
     * ```
     *
     * @param {string} name Name of the secret.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_secret.set = function (name, vaultName) {
        return new az_keyvault_secret_set_command_builder("az keyvault secret set", 'az_keyvault_secret_set_command_result', name, vaultName);
    };
    /**
     * Updates the attributes associated with a specified secret in a given key vault.
     *
     * Syntax:
     * ```
     * az keyvault secret set-attributes [--content-type]
     *                                   [--enabled {false, true}]
     *                                   [--expires]
     *                                   [--id]
     *                                   [--name]
     *                                   [--not-before]
     *                                   [--subscription]
     *                                   [--tags]
     *                                   [--vault-name]
     *                                   [--version]
     * ```
     */
    az_keyvault_secret.set_attributes = function () {
        return new az_keyvault_secret_set_attributes_command_builder("az keyvault secret set-attributes", 'az_keyvault_secret_set_attributes_command_result');
    };
    /**
     * Get a specified secret from a given key vault.
     *
     * Syntax:
     * ```
     * az keyvault secret show [--id]
     *                         [--name]
     *                         [--query-examples]
     *                         [--subscription]
     *                         [--vault-name]
     *                         [--version]
     * ```
     */
    az_keyvault_secret.show = function () {
        return new az_keyvault_secret_show_command_builder("az keyvault secret show", 'az_keyvault_secret_show_command_result');
    };
    /**
     * Gets the specified deleted secret.
     *
     * Syntax:
     * ```
     * az keyvault secret show-deleted [--id]
     *                                 [--name]
     *                                 [--subscription]
     *                                 [--vault-name]
     * ```
     */
    az_keyvault_secret.show_deleted = function () {
        return new az_keyvault_secret_show_deleted_command_builder("az keyvault secret show-deleted", 'az_keyvault_secret_show_deleted_command_result');
    };
    return az_keyvault_secret;
}());
exports.az_keyvault_secret = az_keyvault_secret;
/** Manage security domain operations. */
var az_keyvault_security_domain = /** @class */ (function () {
    function az_keyvault_security_domain() {
    }
    /**
     * Download the security domain file from the HSM.
     *
     * Syntax:
     * ```
     * az keyvault security-domain download --sd-quorum
     *                                      --sd-wrapping-keys
     *                                      --security-domain-file
     *                                      [--hsm-name]
     *                                      [--id]
     *                                      [--subscription]
     * ```
     *
     * @param {string} sdQuorum The minimum number of shares required to decrypt the security domain for recovery.
     * @param {string} sdWrappingKeys Space-separated file paths to PEM files containing public keys.
     * @param {string} securityDomainFile Path to a file where the JSON blob returned by this command is stored.
     */
    az_keyvault_security_domain.download = function (sdQuorum, sdWrappingKeys, securityDomainFile) {
        return new az_keyvault_security_domain_download_command_builder("az keyvault security-domain download", 'az_keyvault_security_domain_download_command_result', sdQuorum, sdWrappingKeys, securityDomainFile);
    };
    /**
     * Retrieve the exchange key of the HSM.
     *
     * Syntax:
     * ```
     * az keyvault security-domain init-recovery --sd-exchange-key
     *                                           [--hsm-name]
     *                                           [--id]
     *                                           [--subscription]
     * ```
     *
     * @param {string} sdExchangeKey Local file path to store the exported key.
     */
    az_keyvault_security_domain.init_recovery = function (sdExchangeKey) {
        return new az_keyvault_security_domain_init_recovery_command_builder("az keyvault security-domain init-recovery", 'az_keyvault_security_domain_init_recovery_command_result', sdExchangeKey);
    };
    /**
     * Start to restore the HSM.
     *
     * Syntax:
     * ```
     * az keyvault security-domain upload --sd-exchange-key
     *                                    --sd-file
     *                                    --sd-wrapping-keys
     *                                    [--hsm-name]
     *                                    [--id]
     *                                    [--no-wait]
     *                                    [--passwords]
     *                                    [--subscription]
     * ```
     *
     * @param {string} sdExchangeKey The exchange key for security domain.
     * @param {string} sdFile This file contains security domain encrypted using SD Exchange file downloaded in security-domain init-recovery command.
     * @param {string} sdWrappingKeys Space-separated file paths to PEM files containing private keys.
     */
    az_keyvault_security_domain.upload = function (sdExchangeKey, sdFile, sdWrappingKeys) {
        return new az_keyvault_security_domain_upload_command_builder("az keyvault security-domain upload", 'az_keyvault_security_domain_upload_command_result', sdExchangeKey, sdFile, sdWrappingKeys);
    };
    /**
     * Place the CLI in a waiting state until HSM security domain operation is finished.
     *
     * Syntax:
     * ```
     * az keyvault security-domain wait [--hsm-name]
     *                                  [--id]
     *                                  [--subscription]
     * ```
     */
    az_keyvault_security_domain.wait = function () {
        return new az_keyvault_security_domain_wait_command_builder("az keyvault security-domain wait", 'az_keyvault_security_domain_wait_command_result');
    };
    return az_keyvault_security_domain;
}());
exports.az_keyvault_security_domain = az_keyvault_security_domain;
/** Manage storage account SAS definitions. */
var az_keyvault_storage_sas_definition = /** @class */ (function () {
    function az_keyvault_storage_sas_definition() {
    }
    /**
     * Creates or updates a new SAS definition for the specified storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage sas-definition create --account-name
     *                                           --name
     *                                           --sas-type {account, service}
     *                                           --template-uri
     *                                           --validity-period
     *                                           --vault-name
     *                                           [--disabled {false, true}]
     *                                           [--subscription]
     *                                           [--tags]
     * ```
     *
     * @param {string} accountName Name to identify the storage account in the vault.
     * @param {string} name Name to identify the SAS definition in the vault.
     * @param {'account' | 'service'} sasType The type of SAS token the SAS definition will create.
     * @param {string} templateUri The SAS definition token template signed with the key 00000000. In the case of an account token this is only the sas token itself, for service tokens, the full service endpoint url along with the sas token.  Tokens created according to the SAS definition will have the same properties as the template.
     * @param {string} validityPeriod The validity period of SAS tokens created according to the SAS definition in ISO-8601, such as "PT12H" for 12 hour tokens.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage_sas_definition.create = function (accountName, name, sasType, templateUri, validityPeriod, vaultName) {
        return new az_keyvault_storage_sas_definition_create_command_builder("az keyvault storage sas-definition create", 'az_keyvault_storage_sas_definition_create_command_result', accountName, name, sasType, templateUri, validityPeriod, vaultName);
    };
    /**
     * Deletes a SAS definition from a specified storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage sas-definition delete [--account-name]
     *                                           [--id]
     *                                           [--name]
     *                                           [--subscription]
     *                                           [--vault-name]
     * ```
     */
    az_keyvault_storage_sas_definition["delete"] = function () {
        return new az_keyvault_storage_sas_definition_delete_command_builder("az keyvault storage sas-definition delete", 'az_keyvault_storage_sas_definition_delete_command_result');
    };
    /**
     * List storage SAS definitions for the given storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage sas-definition list --account-name
     *                                         --vault-name
     *                                         [--maxresults]
     *                                         [--query-examples]
     *                                         [--subscription]
     * ```
     *
     * @param {string} accountName Name to identify the storage account in the vault.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage_sas_definition.list = function (accountName, vaultName) {
        return new az_keyvault_storage_sas_definition_list_command_builder("az keyvault storage sas-definition list", 'az_keyvault_storage_sas_definition_list_command_result', accountName, vaultName);
    };
    /**
     * Lists deleted SAS definitions for the specified vault and storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage sas-definition list-deleted --account-name
     *                                                 --vault-name
     *                                                 [--maxresults]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} accountName Name to identify the storage account in the vault.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage_sas_definition.list_deleted = function (accountName, vaultName) {
        return new az_keyvault_storage_sas_definition_list_deleted_command_builder("az keyvault storage sas-definition list-deleted", 'az_keyvault_storage_sas_definition_list_deleted_command_result', accountName, vaultName);
    };
    /**
     * Recovers the deleted SAS definition.
     *
     * Syntax:
     * ```
     * az keyvault storage sas-definition recover --account-name
     *                                            --name
     *                                            --vault-name
     *                                            [--subscription]
     * ```
     *
     * @param {string} accountName Name to identify the storage account in the vault.
     * @param {string} name Name to identify the SAS definition in the vault.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage_sas_definition.recover = function (accountName, name, vaultName) {
        return new az_keyvault_storage_sas_definition_recover_command_builder("az keyvault storage sas-definition recover", 'az_keyvault_storage_sas_definition_recover_command_result', accountName, name, vaultName);
    };
    /**
     * Gets information about a SAS definition for the specified storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage sas-definition show [--account-name]
     *                                         [--id]
     *                                         [--name]
     *                                         [--query-examples]
     *                                         [--subscription]
     *                                         [--vault-name]
     * ```
     */
    az_keyvault_storage_sas_definition.show = function () {
        return new az_keyvault_storage_sas_definition_show_command_builder("az keyvault storage sas-definition show", 'az_keyvault_storage_sas_definition_show_command_result');
    };
    /**
     * Gets the specified deleted sas definition.
     *
     * Syntax:
     * ```
     * az keyvault storage sas-definition show-deleted --account-name
     *                                                 --name
     *                                                 --vault-name
     *                                                 [--subscription]
     * ```
     *
     * @param {string} accountName Name to identify the storage account in the vault.
     * @param {string} name Name to identify the SAS definition in the vault.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage_sas_definition.show_deleted = function (accountName, name, vaultName) {
        return new az_keyvault_storage_sas_definition_show_deleted_command_builder("az keyvault storage sas-definition show-deleted", 'az_keyvault_storage_sas_definition_show_deleted_command_result', accountName, name, vaultName);
    };
    /**
     * Updates the specified attributes associated with the given SAS definition.
     *
     * Syntax:
     * ```
     * az keyvault storage sas-definition update [--account-name]
     *                                           [--disabled {false, true}]
     *                                           [--id]
     *                                           [--name]
     *                                           [--sas-type {account, service}]
     *                                           [--subscription]
     *                                           [--tags]
     *                                           [--template-uri]
     *                                           [--validity-period]
     *                                           [--vault-name]
     * ```
     */
    az_keyvault_storage_sas_definition.update = function () {
        return new az_keyvault_storage_sas_definition_update_command_builder("az keyvault storage sas-definition update", 'az_keyvault_storage_sas_definition_update_command_result');
    };
    return az_keyvault_storage_sas_definition;
}());
exports.az_keyvault_storage_sas_definition = az_keyvault_storage_sas_definition;
/** Manage storage accounts. */
var az_keyvault_storage = /** @class */ (function () {
    function az_keyvault_storage() {
    }
    /**
     * Creates or updates a new storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage add --active-key-name
     *                         --name
     *                         --resource-id
     *                         --vault-name
     *                         [--auto-regenerate-key {false, true}]
     *                         [--disabled {false, true}]
     *                         [--regeneration-period]
     *                         [--subscription]
     *                         [--tags]
     * ```
     *
     * @param {string} activeKeyName Current active storage account key name.
     * @param {string} name Name to identify the storage account in the vault.
     * @param {string} resourceId Storage account resource id.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage.add = function (activeKeyName, name, resourceId, vaultName) {
        return new az_keyvault_storage_add_command_builder("az keyvault storage add", 'az_keyvault_storage_add_command_result', activeKeyName, name, resourceId, vaultName);
    };
    /**
     * Backs up the specified storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage backup --file
     *                            [--id]
     *                            [--name]
     *                            [--subscription]
     *                            [--vault-name]
     * ```
     *
     * @param {string} file Local file path in which to store storage account backup.
     */
    az_keyvault_storage.backup = function (file) {
        return new az_keyvault_storage_backup_command_builder("az keyvault storage backup", 'az_keyvault_storage_backup_command_result', file);
    };
    /**
     * List storage accounts managed by the specified key vault.
     *
     * Syntax:
     * ```
     * az keyvault storage list --vault-name
     *                          [--maxresults]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage.list = function (vaultName) {
        return new az_keyvault_storage_list_command_builder("az keyvault storage list", 'az_keyvault_storage_list_command_result', vaultName);
    };
    /**
     * Lists deleted storage accounts for the specified vault.
     *
     * Syntax:
     * ```
     * az keyvault storage list-deleted --vault-name
     *                                  [--maxresults]
     *                                  [--subscription]
     * ```
     *
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage.list_deleted = function (vaultName) {
        return new az_keyvault_storage_list_deleted_command_builder("az keyvault storage list-deleted", 'az_keyvault_storage_list_deleted_command_result', vaultName);
    };
    /**
     * Permanently deletes the specified storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage purge --name
     *                           --vault-name
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name to identify the storage account in the vault.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage.purge = function (name, vaultName) {
        return new az_keyvault_storage_purge_command_builder("az keyvault storage purge", 'az_keyvault_storage_purge_command_result', name, vaultName);
    };
    /**
     * Recovers the deleted storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage recover --name
     *                             --vault-name
     *                             [--subscription]
     * ```
     *
     * @param {string} name Name to identify the storage account in the vault.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage.recover = function (name, vaultName) {
        return new az_keyvault_storage_recover_command_builder("az keyvault storage recover", 'az_keyvault_storage_recover_command_result', name, vaultName);
    };
    /**
     * Regenerates the specified key value for the given storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage regenerate-key --key-name
     *                                    [--id]
     *                                    [--name]
     *                                    [--subscription]
     *                                    [--vault-name]
     * ```
     *
     * @param {string} keyName The storage account key name.
     */
    az_keyvault_storage.regenerate_key = function (keyName) {
        return new az_keyvault_storage_regenerate_key_command_builder("az keyvault storage regenerate-key", 'az_keyvault_storage_regenerate_key_command_result', keyName);
    };
    /**
     * Remove a Key Vault managed Azure Storage Account and all associated SAS definitions. This operation requires the storage/delete permission.
     *
     * Syntax:
     * ```
     * az keyvault storage remove [--id]
     *                            [--name]
     *                            [--subscription]
     *                            [--vault-name]
     * ```
     */
    az_keyvault_storage.remove = function () {
        return new az_keyvault_storage_remove_command_builder("az keyvault storage remove", 'az_keyvault_storage_remove_command_result');
    };
    /**
     * Restores a backed up storage account to a vault.
     *
     * Syntax:
     * ```
     * az keyvault storage restore --file
     *                             --vault-name
     *                             [--subscription]
     * ```
     *
     * @param {string} file Local key backup from which to restore storage account.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage.restore = function (file, vaultName) {
        return new az_keyvault_storage_restore_command_builder("az keyvault storage restore", 'az_keyvault_storage_restore_command_result', file, vaultName);
    };
    /**
     * Gets information about a specified storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage show [--id]
     *                          [--name]
     *                          [--query-examples]
     *                          [--subscription]
     *                          [--vault-name]
     * ```
     */
    az_keyvault_storage.show = function () {
        return new az_keyvault_storage_show_command_builder("az keyvault storage show", 'az_keyvault_storage_show_command_result');
    };
    /**
     * Gets the specified deleted storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage show-deleted --name
     *                                  --vault-name
     *                                  [--subscription]
     * ```
     *
     * @param {string} name Name to identify the storage account in the vault.
     * @param {string} vaultName Name of the Vault.
     */
    az_keyvault_storage.show_deleted = function (name, vaultName) {
        return new az_keyvault_storage_show_deleted_command_builder("az keyvault storage show-deleted", 'az_keyvault_storage_show_deleted_command_result', name, vaultName);
    };
    /**
     * Updates the specified attributes associated with the given storage account.
     *
     * Syntax:
     * ```
     * az keyvault storage update [--active-key-name]
     *                            [--auto-regenerate-key {false, true}]
     *                            [--disabled {false, true}]
     *                            [--id]
     *                            [--name]
     *                            [--regeneration-period]
     *                            [--subscription]
     *                            [--tags]
     *                            [--vault-name]
     * ```
     */
    az_keyvault_storage.update = function () {
        return new az_keyvault_storage_update_command_builder("az keyvault storage update", 'az_keyvault_storage_update_command_result');
    };
    return az_keyvault_storage;
}());
exports.az_keyvault_storage = az_keyvault_storage;
/** Manage KeyVault keys, secrets, and certificates. */
var az_keyvault = /** @class */ (function () {
    function az_keyvault() {
    }
    /**
     * Create a Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault create --resource-group
     *                    [--administrators]
     *                    [--bypass {AzureServices, None}]
     *                    [--default-action {Allow, Deny}]
     *                    [--enable-purge-protection {false, true}]
     *                    [--enable-rbac-authorization {false, true}]
     *                    [--enable-soft-delete {false, true}]
     *                    [--enabled-for-deployment {false, true}]
     *                    [--enabled-for-disk-encryption {false, true}]
     *                    [--enabled-for-template-deployment {false, true}]
     *                    [--hsm-name]
     *                    [--location]
     *                    [--name]
     *                    [--network-acls]
     *                    [--network-acls-ips]
     *                    [--network-acls-vnets]
     *                    [--no-self-perms {false, true}]
     *                    [--no-wait]
     *                    [--retention-days]
     *                    [--sku]
     *                    [--subscription]
     *                    [--tags]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_keyvault.create = function (resourceGroup) {
        return new az_keyvault_create_command_builder("az keyvault create", 'az_keyvault_create_command_result', resourceGroup);
    };
    /**
     * Delete a Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault delete [--hsm-name]
     *                    [--name]
     *                    [--no-wait]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_keyvault["delete"] = function () {
        return new az_keyvault_delete_command_builder("az keyvault delete", 'az_keyvault_delete_command_result');
    };
    /**
     * Delete security policy settings for a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault delete-policy --name
     *                           [--no-wait]
     *                           [--object-id]
     *                           [--resource-group]
     *                           [--spn]
     *                           [--subscription]
     *                           [--upn]
     * ```
     *
     * @param {string} name Name of the Vault.
     */
    az_keyvault.delete_policy = function (name) {
        return new az_keyvault_delete_policy_command_builder("az keyvault delete-policy", 'az_keyvault_delete_policy_command_result', name);
    };
    /**
     * List Vaults and/or HSMs.
     *
     * Syntax:
     * ```
     * az keyvault list [--query-examples]
     *                  [--resource-group]
     *                  [--resource-type]
     *                  [--subscription]
     * ```
     */
    az_keyvault.list = function () {
        return new az_keyvault_list_command_builder("az keyvault list", 'az_keyvault_list_command_result');
    };
    /**
     * Get information about the deleted Vaults or HSMs in a subscription.
     *
     * Syntax:
     * ```
     * az keyvault list-deleted [--resource-type]
     *                          [--subscription]
     * ```
     */
    az_keyvault.list_deleted = function () {
        return new az_keyvault_list_deleted_command_builder("az keyvault list-deleted", 'az_keyvault_list_deleted_command_result');
    };
    /**
     * Permanently delete the specified Vault or HSM. Aka Purges the deleted Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault purge [--hsm-name]
     *                   [--location]
     *                   [--name]
     *                   [--no-wait]
     *                   [--subscription]
     * ```
     */
    az_keyvault.purge = function () {
        return new az_keyvault_purge_command_builder("az keyvault purge", 'az_keyvault_purge_command_result');
    };
    /**
     * Recover a Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault recover [--hsm-name]
     *                     [--location]
     *                     [--name]
     *                     [--no-wait]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_keyvault.recover = function () {
        return new az_keyvault_recover_command_builder("az keyvault recover", 'az_keyvault_recover_command_result');
    };
    /**
     * Update security policy settings for a Key Vault.
     *
     * Syntax:
     * ```
     * az keyvault set-policy --name
     *                        [--certificate-permissions {backup, create, delete, deleteissuers, get, getissuers, import, list, listissuers, managecontacts, manageissuers, purge, recover, restore, setissuers, update}]
     *                        [--key-permissions {backup, create, decrypt, delete, encrypt, get, import, list, purge, recover, restore, sign, unwrapKey, update, verify, wrapKey}]
     *                        [--no-wait]
     *                        [--object-id]
     *                        [--resource-group]
     *                        [--secret-permissions {backup, delete, get, list, purge, recover, restore, set}]
     *                        [--spn]
     *                        [--storage-permissions {backup, delete, deletesas, get, getsas, list, listsas, purge, recover, regeneratekey, restore, set, setsas, update}]
     *                        [--subscription]
     *                        [--upn]
     * ```
     *
     * @param {string} name Name of the Vault.
     */
    az_keyvault.set_policy = function (name) {
        return new az_keyvault_set_policy_command_builder("az keyvault set-policy", 'az_keyvault_set_policy_command_result', name);
    };
    /**
     * Show details of a Vault or HSM.
     *
     * Syntax:
     * ```
     * az keyvault show [--hsm-name]
     *                  [--name]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    az_keyvault.show = function () {
        return new az_keyvault_show_command_builder("az keyvault show", 'az_keyvault_show_command_result');
    };
    /**
     * Update the properties of a Vault.
     *
     * Syntax:
     * ```
     * az keyvault update --name
     *                    [--add]
     *                    [--bypass {AzureServices, None}]
     *                    [--default-action {Allow, Deny}]
     *                    [--enable-purge-protection {false, true}]
     *                    [--enable-rbac-authorization {false, true}]
     *                    [--enable-soft-delete {false, true}]
     *                    [--enabled-for-deployment {false, true}]
     *                    [--enabled-for-disk-encryption {false, true}]
     *                    [--enabled-for-template-deployment {false, true}]
     *                    [--force-string]
     *                    [--no-wait]
     *                    [--remove]
     *                    [--resource-group]
     *                    [--retention-days]
     *                    [--set]
     *                    [--subscription]
     * ```
     *
     * @param {string} name Name of the Vault.
     */
    az_keyvault.update = function (name) {
        return new az_keyvault_update_command_builder("az keyvault update", 'az_keyvault_update_command_result', name);
    };
    /**
     * Update the properties of a HSM.
     *
     * Syntax:
     * ```
     * az keyvault update-hsm --hsm-name
     *                        [--add]
     *                        [--bypass {AzureServices, None}]
     *                        [--default-action {Allow, Deny}]
     *                        [--enable-purge-protection {false, true}]
     *                        [--force-string]
     *                        [--no-wait]
     *                        [--remove]
     *                        [--resource-group]
     *                        [--secondary-locations]
     *                        [--set]
     *                        [--subscription]
     * ```
     *
     * @param {string} hsmName Name of the HSM.
     */
    az_keyvault.update_hsm = function (hsmName) {
        return new az_keyvault_update_hsm_command_builder("az keyvault update-hsm", 'az_keyvault_update_hsm_command_result', hsmName);
    };
    /**
     * Place the CLI in a waiting state until a condition of the Vault is met.
     *
     * Syntax:
     * ```
     * az keyvault wait --name
     *                  [--created]
     *                  [--custom]
     *                  [--deleted]
     *                  [--exists]
     *                  [--interval]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--timeout]
     *                  [--updated]
     * ```
     *
     * @param {string} name Name of the Vault.
     */
    az_keyvault.wait = function (name) {
        return new az_keyvault_wait_command_builder("az keyvault wait", 'az_keyvault_wait_command_result', name);
    };
    /**
     * Place the CLI in a waiting state until a condition of the HSM is met.
     *
     * Syntax:
     * ```
     * az keyvault wait-hsm --hsm-name
     *                      [--created]
     *                      [--custom]
     *                      [--deleted]
     *                      [--exists]
     *                      [--interval]
     *                      [--resource-group]
     *                      [--subscription]
     *                      [--timeout]
     *                      [--updated]
     * ```
     *
     * @param {string} hsmName Name of the HSM.
     */
    az_keyvault.wait_hsm = function (hsmName) {
        return new az_keyvault_wait_hsm_command_builder("az keyvault wait-hsm", 'az_keyvault_wait_hsm_command_result', hsmName);
    };
    return az_keyvault;
}());
exports.az_keyvault = az_keyvault;
/**
 * Begin a full backup of the HSM.
 *
 * Syntax:
 * ```
 * az keyvault backup start --storage-container-SAS-token
 *                          [--blob-container-name]
 *                          [--hsm-name]
 *                          [--id]
 *                          [--storage-account-name]
 *                          [--storage-resource-uri]
 *                          [--subscription]
 * ```
 *
 * @param {string} storageContainerSasToken The SAS token pointing to an Azure Blob storage container.
 */
var az_keyvault_backup_start_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_backup_start_command_builder, _super);
    function az_keyvault_backup_start_command_builder(commandPath, resultDataTypeName, storageContainerSasToken) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.storageContainerSasToken(storageContainerSasToken);
        return _this;
    }
    /** The SAS token pointing to an Azure Blob storage container. */
    az_keyvault_backup_start_command_builder.prototype.storageContainerSasToken = function (value) {
        this.setFlag("--storage-container-SAS-token", value);
        return this;
    };
    /** Name of Blob Container. */
    az_keyvault_backup_start_command_builder.prototype.blobContainerName = function (value) {
        this.setFlag("--blob-container-name", value);
        return this;
    };
    /** Name of the HSM. Can be omitted if --id is specified. */
    az_keyvault_backup_start_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the HSM. */
    az_keyvault_backup_start_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of Azure Storage Account. */
    az_keyvault_backup_start_command_builder.prototype.storageAccountName = function (value) {
        this.setFlag("--storage-account-name", value);
        return this;
    };
    /** Azure Blob storage container Uri. If specified all other 'Storage Id' arguments should be omitted. */
    az_keyvault_backup_start_command_builder.prototype.storageResourceUri = function (value) {
        this.setFlag("--storage-resource-uri", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_backup_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_backup_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a contact to the specified vault to receive notifications of certificate operations.
 *
 * Syntax:
 * ```
 * az keyvault certificate contact add --email
 *                                     --vault-name
 *                                     [--name]
 *                                     [--phone]
 *                                     [--subscription]
 * ```
 *
 * @param {string} email Contact e-mail address. Must be unique.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_contact_add_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_contact_add_command_builder, _super);
    function az_keyvault_certificate_contact_add_command_builder(commandPath, resultDataTypeName, email, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.email(email);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Contact e-mail address. Must be unique. */
    az_keyvault_certificate_contact_add_command_builder.prototype.email = function (value) {
        this.setFlag("--email", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_contact_add_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Full contact name. */
    az_keyvault_certificate_contact_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Contact phone number. */
    az_keyvault_certificate_contact_add_command_builder.prototype.phone = function (value) {
        this.setFlag("--phone", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_contact_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_contact_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a certificate contact from the specified vault.
 *
 * Syntax:
 * ```
 * az keyvault certificate contact delete --email
 *                                        --vault-name
 *                                        [--subscription]
 * ```
 *
 * @param {string} email Contact e-mail address. Must be unique.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_contact_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_contact_delete_command_builder, _super);
    function az_keyvault_certificate_contact_delete_command_builder(commandPath, resultDataTypeName, email, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.email(email);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Contact e-mail address. Must be unique. */
    az_keyvault_certificate_contact_delete_command_builder.prototype.email = function (value) {
        this.setFlag("--email", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_contact_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_contact_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_contact_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists the certificate contacts for a specified key vault.
 *
 * Syntax:
 * ```
 * az keyvault certificate contact list --vault-name
 *                                      [--query-examples]
 *                                      [--subscription]
 * ```
 *
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_contact_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_contact_list_command_builder, _super);
    function az_keyvault_certificate_contact_list_command_builder(commandPath, resultDataTypeName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_certificate_contact_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_certificate_contact_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_contact_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_contact_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Add admin details for a specified certificate issuer.
 *
 * Syntax:
 * ```
 * az keyvault certificate issuer admin add --email
 *                                          --issuer-name
 *                                          --vault-name
 *                                          [--first-name]
 *                                          [--last-name]
 *                                          [--phone]
 *                                          [--subscription]
 * ```
 *
 * @param {string} email Admin e-mail address. Must be unique within the vault.
 * @param {string} issuerName Certificate issuer name.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_issuer_admin_add_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_issuer_admin_add_command_builder, _super);
    function az_keyvault_certificate_issuer_admin_add_command_builder(commandPath, resultDataTypeName, email, issuerName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.email(email);
        _this.issuerName(issuerName);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Admin e-mail address. Must be unique within the vault. */
    az_keyvault_certificate_issuer_admin_add_command_builder.prototype.email = function (value) {
        this.setFlag("--email", value);
        return this;
    };
    /** Certificate issuer name. */
    az_keyvault_certificate_issuer_admin_add_command_builder.prototype.issuerName = function (value) {
        this.setFlag("--issuer-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_issuer_admin_add_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Admin first name. */
    az_keyvault_certificate_issuer_admin_add_command_builder.prototype.firstName = function (value) {
        this.setFlag("--first-name", value);
        return this;
    };
    /** Admin last name. */
    az_keyvault_certificate_issuer_admin_add_command_builder.prototype.lastName = function (value) {
        this.setFlag("--last-name", value);
        return this;
    };
    /** Admin phone number. */
    az_keyvault_certificate_issuer_admin_add_command_builder.prototype.phone = function (value) {
        this.setFlag("--phone", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_issuer_admin_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_issuer_admin_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove admin details for the specified certificate issuer.
 *
 * Syntax:
 * ```
 * az keyvault certificate issuer admin delete --email
 *                                             --issuer-name
 *                                             --vault-name
 *                                             [--subscription]
 * ```
 *
 * @param {string} email Admin e-mail address. Must be unique within the vault.
 * @param {string} issuerName Certificate issuer name.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_issuer_admin_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_issuer_admin_delete_command_builder, _super);
    function az_keyvault_certificate_issuer_admin_delete_command_builder(commandPath, resultDataTypeName, email, issuerName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.email(email);
        _this.issuerName(issuerName);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Admin e-mail address. Must be unique within the vault. */
    az_keyvault_certificate_issuer_admin_delete_command_builder.prototype.email = function (value) {
        this.setFlag("--email", value);
        return this;
    };
    /** Certificate issuer name. */
    az_keyvault_certificate_issuer_admin_delete_command_builder.prototype.issuerName = function (value) {
        this.setFlag("--issuer-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_issuer_admin_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_issuer_admin_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_issuer_admin_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List admins for a specified certificate issuer.
 *
 * Syntax:
 * ```
 * az keyvault certificate issuer admin list --issuer-name
 *                                           --vault-name
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} issuerName Certificate issuer name.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_issuer_admin_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_issuer_admin_list_command_builder, _super);
    function az_keyvault_certificate_issuer_admin_list_command_builder(commandPath, resultDataTypeName, issuerName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.issuerName(issuerName);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Certificate issuer name. */
    az_keyvault_certificate_issuer_admin_list_command_builder.prototype.issuerName = function (value) {
        this.setFlag("--issuer-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_issuer_admin_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_certificate_issuer_admin_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_issuer_admin_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_issuer_admin_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a certificate issuer record.
 *
 * Syntax:
 * ```
 * az keyvault certificate issuer create --issuer-name
 *                                       --provider-name
 *                                       --vault-name
 *                                       [--account-id]
 *                                       [--disabled {false, true}]
 *                                       [--organization-id]
 *                                       [--password]
 *                                       [--subscription]
 * ```
 *
 * @param {string} issuerName Certificate issuer name.
 * @param {string} providerName The certificate provider name. Must be registered with your tenant ID and in your region.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_issuer_create_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_issuer_create_command_builder, _super);
    function az_keyvault_certificate_issuer_create_command_builder(commandPath, resultDataTypeName, issuerName, providerName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.issuerName(issuerName);
        _this.providerName(providerName);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Certificate issuer name. */
    az_keyvault_certificate_issuer_create_command_builder.prototype.issuerName = function (value) {
        this.setFlag("--issuer-name", value);
        return this;
    };
    /** The certificate provider name. Must be registered with your tenant ID and in your region. */
    az_keyvault_certificate_issuer_create_command_builder.prototype.providerName = function (value) {
        this.setFlag("--provider-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_issuer_create_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The issuer account id/username/etc. */
    az_keyvault_certificate_issuer_create_command_builder.prototype.accountId = function (value) {
        this.setFlag("--account-id", value);
        return this;
    };
    /** Set issuer to disabled state. */
    az_keyvault_certificate_issuer_create_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** The organization id. */
    az_keyvault_certificate_issuer_create_command_builder.prototype.organizationId = function (value) {
        this.setFlag("--organization-id", value);
        return this;
    };
    /** The issuer account password/secret/etc. */
    az_keyvault_certificate_issuer_create_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_issuer_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_issuer_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the specified certificate issuer.
 *
 * Syntax:
 * ```
 * az keyvault certificate issuer delete --issuer-name
 *                                       --vault-name
 *                                       [--subscription]
 * ```
 *
 * @param {string} issuerName Certificate issuer name.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_issuer_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_issuer_delete_command_builder, _super);
    function az_keyvault_certificate_issuer_delete_command_builder(commandPath, resultDataTypeName, issuerName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.issuerName(issuerName);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Certificate issuer name. */
    az_keyvault_certificate_issuer_delete_command_builder.prototype.issuerName = function (value) {
        this.setFlag("--issuer-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_issuer_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_issuer_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_issuer_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List certificate issuers for a specified key vault.
 *
 * Syntax:
 * ```
 * az keyvault certificate issuer list --vault-name
 *                                     [--maxresults]
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_issuer_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_issuer_list_command_builder, _super);
    function az_keyvault_certificate_issuer_list_command_builder(commandPath, resultDataTypeName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_certificate_issuer_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_certificate_issuer_list_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_certificate_issuer_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_issuer_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_issuer_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists the specified certificate issuer.
 *
 * Syntax:
 * ```
 * az keyvault certificate issuer show --issuer-name
 *                                     --vault-name
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} issuerName Certificate issuer name.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_issuer_show_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_issuer_show_command_builder, _super);
    function az_keyvault_certificate_issuer_show_command_builder(commandPath, resultDataTypeName, issuerName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.issuerName(issuerName);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Certificate issuer name. */
    az_keyvault_certificate_issuer_show_command_builder.prototype.issuerName = function (value) {
        this.setFlag("--issuer-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_issuer_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_certificate_issuer_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_issuer_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_issuer_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a certificate issuer record.
 *
 * Syntax:
 * ```
 * az keyvault certificate issuer update --issuer-name
 *                                       --vault-name
 *                                       [--account-id]
 *                                       [--enabled {false, true}]
 *                                       [--organization-id]
 *                                       [--password]
 *                                       [--provider-name]
 *                                       [--subscription]
 * ```
 *
 * @param {string} issuerName Certificate issuer name.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_issuer_update_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_issuer_update_command_builder, _super);
    function az_keyvault_certificate_issuer_update_command_builder(commandPath, resultDataTypeName, issuerName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.issuerName(issuerName);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Certificate issuer name. */
    az_keyvault_certificate_issuer_update_command_builder.prototype.issuerName = function (value) {
        this.setFlag("--issuer-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_issuer_update_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The issuer account id/username/etc. */
    az_keyvault_certificate_issuer_update_command_builder.prototype.accountId = function (value) {
        this.setFlag("--account-id", value);
        return this;
    };
    /** Set issuer enabled state. */
    az_keyvault_certificate_issuer_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** The organization id. */
    az_keyvault_certificate_issuer_update_command_builder.prototype.organizationId = function (value) {
        this.setFlag("--organization-id", value);
        return this;
    };
    /** The issuer account password/secret/etc. */
    az_keyvault_certificate_issuer_update_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** The certificate provider name. Must be registered with your tenant ID and in your region. */
    az_keyvault_certificate_issuer_update_command_builder.prototype.providerName = function (value) {
        this.setFlag("--provider-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_issuer_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_issuer_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the creation operation for a specific certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate pending delete --name
 *                                        --vault-name
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Name of the pending certificate.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_pending_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_pending_delete_command_builder, _super);
    function az_keyvault_certificate_pending_delete_command_builder(commandPath, resultDataTypeName, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the pending certificate. */
    az_keyvault_certificate_pending_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_pending_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_pending_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_pending_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Merges a certificate or a certificate chain with a key pair existing on the server.
 *
 * Syntax:
 * ```
 * az keyvault certificate pending merge --file
 *                                       --name
 *                                       --vault-name
 *                                       [--disabled {false, true}]
 *                                       [--expires]
 *                                       [--not-before]
 *                                       [--subscription]
 *                                       [--tags]
 * ```
 *
 * @param {string} file File containing the certificate or certificate chain to merge.
 * @param {string} name Name of the pending certificate.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_pending_merge_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_pending_merge_command_builder, _super);
    function az_keyvault_certificate_pending_merge_command_builder(commandPath, resultDataTypeName, file, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** File containing the certificate or certificate chain to merge. */
    az_keyvault_certificate_pending_merge_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Name of the pending certificate. */
    az_keyvault_certificate_pending_merge_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_pending_merge_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Create certificate in disabled state. */
    az_keyvault_certificate_pending_merge_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_certificate_pending_merge_command_builder.prototype.expires = function (value) {
        this.setFlag("--expires", value);
        return this;
    };
    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_certificate_pending_merge_command_builder.prototype.notBefore = function (value) {
        this.setFlag("--not-before", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_pending_merge_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_certificate_pending_merge_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_keyvault_certificate_pending_merge_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the creation operation of a certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate pending show --name
 *                                      --vault-name
 *                                      [--query-examples]
 *                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the pending certificate.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_pending_show_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_pending_show_command_builder, _super);
    function az_keyvault_certificate_pending_show_command_builder(commandPath, resultDataTypeName, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the pending certificate. */
    az_keyvault_certificate_pending_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_pending_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_certificate_pending_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_pending_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_pending_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Backs up the specified certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate backup --file
 *                                [--id]
 *                                [--name]
 *                                [--subscription]
 *                                [--vault-name]
 * ```
 *
 * @param {string} file Local file path in which to store certificate backup.
 */
var az_keyvault_certificate_backup_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_backup_command_builder, _super);
    function az_keyvault_certificate_backup_command_builder(commandPath, resultDataTypeName, file) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        return _this;
    }
    /** Local file path in which to store certificate backup. */
    az_keyvault_certificate_backup_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_backup_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the certificate. Required if --id is not specified. */
    az_keyvault_certificate_backup_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_backup_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_certificate_backup_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_certificate_backup_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Key Vault certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate create --name
 *                                --policy
 *                                --vault-name
 *                                [--disabled {false, true}]
 *                                [--subscription]
 *                                [--tags]
 *                                [--validity]
 * ```
 *
 * @param {string} name Name of the certificate.
 * @param {string} policy JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json).
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_create_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_create_command_builder, _super);
    function az_keyvault_certificate_create_command_builder(commandPath, resultDataTypeName, name, policy, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.policy(policy);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the certificate. */
    az_keyvault_certificate_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json). */
    az_keyvault_certificate_create_command_builder.prototype.policy = function (value) {
        this.setFlag("--policy", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_create_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Create certificate in disabled state. */
    az_keyvault_certificate_create_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_certificate_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Number of months the certificate is valid for. Overrides the value specified with --policy/-p. */
    az_keyvault_certificate_create_command_builder.prototype.validity = function (value) {
        this.setFlag("--validity", value);
        return this;
    };
    return az_keyvault_certificate_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a certificate from a specified key vault.
 *
 * Syntax:
 * ```
 * az keyvault certificate delete [--id]
 *                                [--name]
 *                                [--subscription]
 *                                [--vault-name]
 * ```
 */
var az_keyvault_certificate_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_delete_command_builder, _super);
    function az_keyvault_certificate_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the certificate. Required if --id is not specified. */
    az_keyvault_certificate_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_certificate_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_certificate_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Download the public portion of a Key Vault certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate download --file
 *                                  [--encoding {DER, PEM}]
 *                                  [--id]
 *                                  [--name]
 *                                  [--subscription]
 *                                  [--vault-name]
 *                                  [--version]
 * ```
 *
 * @param {string} file File to receive the binary certificate contents.
 */
var az_keyvault_certificate_download_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_download_command_builder, _super);
    function az_keyvault_certificate_download_command_builder(commandPath, resultDataTypeName, file) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        return _this;
    }
    /** File to receive the binary certificate contents. */
    az_keyvault_certificate_download_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Encoding of the certificate. DER will create a binary DER formatted x509 certificate, and PEM will create a base64 PEM x509 certificate. */
    az_keyvault_certificate_download_command_builder.prototype.encoding = function (value) {
        this.setFlag("--encoding", value);
        return this;
    };
    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_download_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the certificate. Required if --id is not specified. */
    az_keyvault_certificate_download_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_certificate_download_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The certificate version. If omitted, uses the latest version. */
    az_keyvault_certificate_download_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_certificate_download_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the default policy for self-signed certificates.
 *
 * Syntax:
 * ```
 * az keyvault certificate get-default-policy [--scaffold]
 *                                            [--subscription]
 * ```
 */
var az_keyvault_certificate_get_default_policy_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_get_default_policy_command_builder, _super);
    function az_keyvault_certificate_get_default_policy_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Create a fully formed policy structure with default values. */
    az_keyvault_certificate_get_default_policy_command_builder.prototype.scaffold = function (value) {
        this.setFlag("--scaffold", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_get_default_policy_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_get_default_policy_command_builder;
}(base_1.CommandBuilder));
/**
 * Import a certificate into KeyVault.
 *
 * Syntax:
 * ```
 * az keyvault certificate import --file
 *                                --name
 *                                --vault-name
 *                                [--disabled {false, true}]
 *                                [--password]
 *                                [--policy]
 *                                [--subscription]
 *                                [--tags]
 * ```
 *
 * @param {string} file PKCS12 file or PEM file containing the certificate and private key.
 * @param {string} name Name of the certificate.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_import_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_import_command_builder, _super);
    function az_keyvault_certificate_import_command_builder(commandPath, resultDataTypeName, file, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** PKCS12 file or PEM file containing the certificate and private key. */
    az_keyvault_certificate_import_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Name of the certificate. */
    az_keyvault_certificate_import_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_import_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Import the certificate in disabled state. */
    az_keyvault_certificate_import_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** If the private key in certificate is encrypted, the password used for encryption. */
    az_keyvault_certificate_import_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json). */
    az_keyvault_certificate_import_command_builder.prototype.policy = function (value) {
        this.setFlag("--policy", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_certificate_import_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_keyvault_certificate_import_command_builder;
}(base_1.CommandBuilder));
/**
 * List certificates in a specified key vault.
 *
 * Syntax:
 * ```
 * az keyvault certificate list [--id]
 *                              [--include-pending {false, true}]
 *                              [--maxresults]
 *                              [--query-examples]
 *                              [--subscription]
 *                              [--vault-name]
 * ```
 */
var az_keyvault_certificate_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_list_command_builder, _super);
    function az_keyvault_certificate_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Specifies whether to include certificates which are not completely provisioned. */
    az_keyvault_certificate_list_command_builder.prototype.includePending = function (value) {
        this.setFlag("--include-pending", value.toString());
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_certificate_list_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_certificate_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_certificate_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_certificate_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists the deleted certificates in the specified vault currently available for recovery.
 *
 * Syntax:
 * ```
 * az keyvault certificate list-deleted --vault-name
 *                                      [--id]
 *                                      [--include-pending {false, true}]
 *                                      [--maxresults]
 *                                      [--subscription]
 * ```
 *
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_list_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_list_deleted_command_builder, _super);
    function az_keyvault_certificate_list_deleted_command_builder(commandPath, resultDataTypeName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_certificate_list_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Id of the Vault. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_list_deleted_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Specifies whether to include certificates which are not completely provisioned. */
    az_keyvault_certificate_list_deleted_command_builder.prototype.includePending = function (value) {
        this.setFlag("--include-pending", value.toString());
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_certificate_list_deleted_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_list_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_list_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * List the versions of a certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate list-versions [--id]
 *                                       [--maxresults]
 *                                       [--name]
 *                                       [--subscription]
 *                                       [--vault-name]
 * ```
 */
var az_keyvault_certificate_list_versions_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_list_versions_command_builder, _super);
    function az_keyvault_certificate_list_versions_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_list_versions_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_certificate_list_versions_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Name of the certificate. Required if --id is not specified. */
    az_keyvault_certificate_list_versions_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_list_versions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_certificate_list_versions_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_certificate_list_versions_command_builder;
}(base_1.CommandBuilder));
/**
 * Permanently deletes the specified deleted certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate purge [--id]
 *                               [--name]
 *                               [--subscription]
 *                               [--vault-name]
 * ```
 */
var az_keyvault_certificate_purge_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_purge_command_builder, _super);
    function az_keyvault_certificate_purge_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The recovery id of the certificate. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_purge_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the certificate. Required if --id is not specified. */
    az_keyvault_certificate_purge_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_purge_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. Required if --id is not specified. */
    az_keyvault_certificate_purge_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_certificate_purge_command_builder;
}(base_1.CommandBuilder));
/**
 * Recovers the deleted certificate back to its current version under /certificates.
 *
 * Syntax:
 * ```
 * az keyvault certificate recover [--id]
 *                                 [--name]
 *                                 [--subscription]
 *                                 [--vault-name]
 * ```
 */
var az_keyvault_certificate_recover_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_recover_command_builder, _super);
    function az_keyvault_certificate_recover_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The recovery id of the certificate. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_recover_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the certificate. Required if --id is not specified. */
    az_keyvault_certificate_recover_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_recover_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. Required if --id is not specified. */
    az_keyvault_certificate_recover_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_certificate_recover_command_builder;
}(base_1.CommandBuilder));
/**
 * Restores a backed up certificate to a vault.
 *
 * Syntax:
 * ```
 * az keyvault certificate restore --file
 *                                 --vault-name
 *                                 [--subscription]
 * ```
 *
 * @param {string} file Local certificate backup from which to restore certificate.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_certificate_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_restore_command_builder, _super);
    function az_keyvault_certificate_restore_command_builder(commandPath, resultDataTypeName, file, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Local certificate backup from which to restore certificate. */
    az_keyvault_certificate_restore_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_certificate_restore_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_certificate_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the specified attributes associated with the given certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate set-attributes [--enabled {false, true}]
 *                                        [--id]
 *                                        [--name]
 *                                        [--policy]
 *                                        [--subscription]
 *                                        [--tags]
 *                                        [--vault-name]
 *                                        [--version]
 * ```
 */
var az_keyvault_certificate_set_attributes_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_set_attributes_command_builder, _super);
    function az_keyvault_certificate_set_attributes_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Enable the certificate. */
    az_keyvault_certificate_set_attributes_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_set_attributes_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the certificate. Required if --id is not specified. */
    az_keyvault_certificate_set_attributes_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json). */
    az_keyvault_certificate_set_attributes_command_builder.prototype.policy = function (value) {
        this.setFlag("--policy", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_set_attributes_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_certificate_set_attributes_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_certificate_set_attributes_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The certificate version. If omitted, uses the latest version. */
    az_keyvault_certificate_set_attributes_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_certificate_set_attributes_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets information about a certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate show [--id]
 *                              [--name]
 *                              [--query-examples]
 *                              [--subscription]
 *                              [--vault-name]
 *                              [--version]
 * ```
 */
var az_keyvault_certificate_show_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_show_command_builder, _super);
    function az_keyvault_certificate_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the certificate. Required if --id is not specified. */
    az_keyvault_certificate_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_certificate_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_certificate_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The certificate version. If omitted, uses the latest version. */
    az_keyvault_certificate_show_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_certificate_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves information about the specified deleted certificate.
 *
 * Syntax:
 * ```
 * az keyvault certificate show-deleted [--id]
 *                                      [--name]
 *                                      [--subscription]
 *                                      [--vault-name]
 * ```
 */
var az_keyvault_certificate_show_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_certificate_show_deleted_command_builder, _super);
    function az_keyvault_certificate_show_deleted_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The recovery id of the certificate. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_certificate_show_deleted_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the certificate. Required if --id is not specified. */
    az_keyvault_certificate_show_deleted_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_certificate_show_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. Required if --id is not specified. */
    az_keyvault_certificate_show_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_certificate_show_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Request that a backup of the specified key be downloaded to the client.
 *
 * Syntax:
 * ```
 * az keyvault key backup --file
 *                        [--hsm-name]
 *                        [--id]
 *                        [--name]
 *                        [--subscription]
 *                        [--vault-name]
 * ```
 *
 * @param {string} file Local file path in which to store key backup.
 */
var az_keyvault_key_backup_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_backup_command_builder, _super);
    function az_keyvault_key_backup_command_builder(commandPath, resultDataTypeName, file) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        return _this;
    }
    /** Local file path in which to store key backup. */
    az_keyvault_key_backup_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_backup_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_backup_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_backup_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_backup_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_key_backup_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_backup_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new key, stores it, then returns key parameters and attributes to the client.
 *
 * Syntax:
 * ```
 * az keyvault key create [--curve {P-256, P-256K, P-384, P-521}]
 *                        [--disabled {false, true}]
 *                        [--expires]
 *                        [--hsm-name]
 *                        [--id]
 *                        [--kty {EC, EC-HSM, RSA, RSA-HSM, oct, oct-HSM}]
 *                        [--name]
 *                        [--not-before]
 *                        [--ops {decrypt, encrypt, export, import, sign, unwrapKey, verify, wrapKey}]
 *                        [--protection {hsm, software}]
 *                        [--size]
 *                        [--subscription]
 *                        [--tags]
 *                        [--vault-name]
 * ```
 */
var az_keyvault_key_create_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_create_command_builder, _super);
    function az_keyvault_key_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Elliptic curve name. For valid values, see: <a href="https://docs.microsoft.com/en-us/rest/api/keyvault/createkey/createkey#jsonwebkeycurvename">https://docs.microsoft.com/en-us/rest/api/keyvault/createkey/createkey#jsonwebkeycurvename</a>. */
    az_keyvault_key_create_command_builder.prototype.curve = function (value) {
        this.setFlag("--curve", value);
        return this;
    };
    /** Create key in disabled state. */
    az_keyvault_key_create_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_key_create_command_builder.prototype.expires = function (value) {
        this.setFlag("--expires", value);
        return this;
    };
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_create_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_create_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** The type of key to create. For valid values, see: <a href="https://docs.microsoft.com/en-us/rest/api/keyvault/createkey/createkey#jsonwebkeytype">https://docs.microsoft.com/en-us/rest/api/keyvault/createkey/createkey#jsonwebkeytype</a>. */
    az_keyvault_key_create_command_builder.prototype.kty = function (value) {
        this.setFlag("--kty", value);
        return this;
    };
    /** Name of the key. */
    az_keyvault_key_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_key_create_command_builder.prototype.notBefore = function (value) {
        this.setFlag("--not-before", value);
        return this;
    };
    /** Space-separated list of permitted JSON web key operations. */
    az_keyvault_key_create_command_builder.prototype.ops = function (value) {
        this.setFlag("--ops", value);
        return this;
    };
    /** Specifies the type of key protection. */
    az_keyvault_key_create_command_builder.prototype.protection = function (value) {
        this.setFlag("--protection", value);
        return this;
    };
    /** The key size in bits. For example: 2048, 3072, or 4096 for RSA. 128, 192, or 256 for oct. */
    az_keyvault_key_create_command_builder.prototype.size = function (value) {
        this.setFlag("--size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_key_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_key_create_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Decrypt a single block of encrypted data.
 *
 * Syntax:
 * ```
 * az keyvault key decrypt --algorithm {RSA-OAEP, RSA-OAEP-256, RSA1_5}
 *                         --value
 *                         [--data-type {base64, plaintext}]
 *                         [--id]
 *                         [--name]
 *                         [--subscription]
 *                         [--vault-name]
 *                         [--version]
 * ```
 *
 * @param {'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5'} algorithm Algorithm identifier.
 * @param {string} value The value to be decrypted, which should be the result of "az keyvault encrypt".
 */
var az_keyvault_key_decrypt_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_decrypt_command_builder, _super);
    function az_keyvault_key_decrypt_command_builder(commandPath, resultDataTypeName, algorithm, value) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.algorithm(algorithm);
        _this.value(value);
        return _this;
    }
    /** Algorithm identifier. */
    az_keyvault_key_decrypt_command_builder.prototype.algorithm = function (value) {
        this.setFlag("--algorithm", value);
        return this;
    };
    /** The value to be decrypted, which should be the result of "az keyvault encrypt". */
    az_keyvault_key_decrypt_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    /** The type of the original data. */
    az_keyvault_key_decrypt_command_builder.prototype.dataType = function (value) {
        this.setFlag("--data-type", value);
        return this;
    };
    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_decrypt_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_decrypt_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_decrypt_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_key_decrypt_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The key version. If omitted, uses the latest version. */
    az_keyvault_key_decrypt_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_key_decrypt_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a key of any type from storage in Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault key delete [--hsm-name]
 *                        [--id]
 *                        [--name]
 *                        [--subscription]
 *                        [--vault-name]
 * ```
 */
var az_keyvault_key_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_delete_command_builder, _super);
    function az_keyvault_key_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_delete_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_key_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Download the public part of a stored key.
 *
 * Syntax:
 * ```
 * az keyvault key download --file
 *                          [--encoding {DER, PEM}]
 *                          [--hsm-name]
 *                          [--id]
 *                          [--name]
 *                          [--subscription]
 *                          [--vault-name]
 *                          [--version]
 * ```
 *
 * @param {string} file File to receive the key contents.
 */
var az_keyvault_key_download_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_download_command_builder, _super);
    function az_keyvault_key_download_command_builder(commandPath, resultDataTypeName, file) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        return _this;
    }
    /** File to receive the key contents. */
    az_keyvault_key_download_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Encoding of the key, default: PEM. */
    az_keyvault_key_download_command_builder.prototype.encoding = function (value) {
        this.setFlag("--encoding", value);
        return this;
    };
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_download_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_download_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_download_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_key_download_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The key version. If omitted, uses the latest version. */
    az_keyvault_key_download_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_key_download_command_builder;
}(base_1.CommandBuilder));
/**
 * Encrypt an arbitrary sequence of bytes using an encryption key that is stored in a Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault key encrypt --algorithm {RSA-OAEP, RSA-OAEP-256, RSA1_5}
 *                         --value
 *                         [--data-type {base64, plaintext}]
 *                         [--id]
 *                         [--name]
 *                         [--subscription]
 *                         [--vault-name]
 *                         [--version]
 * ```
 *
 * @param {'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5'} algorithm Algorithm identifier.
 * @param {string} value The value to be encrypted. Default data type is Base64 encoded string.
 */
var az_keyvault_key_encrypt_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_encrypt_command_builder, _super);
    function az_keyvault_key_encrypt_command_builder(commandPath, resultDataTypeName, algorithm, value) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.algorithm(algorithm);
        _this.value(value);
        return _this;
    }
    /** Algorithm identifier. */
    az_keyvault_key_encrypt_command_builder.prototype.algorithm = function (value) {
        this.setFlag("--algorithm", value);
        return this;
    };
    /** The value to be encrypted. Default data type is Base64 encoded string. */
    az_keyvault_key_encrypt_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    /** The type of the original data. */
    az_keyvault_key_encrypt_command_builder.prototype.dataType = function (value) {
        this.setFlag("--data-type", value);
        return this;
    };
    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_encrypt_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_encrypt_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_encrypt_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_key_encrypt_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The key version. If omitted, uses the latest version. */
    az_keyvault_key_encrypt_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_key_encrypt_command_builder;
}(base_1.CommandBuilder));
/**
 * Return policy template as JSON encoded policy definition.
 *
 * Syntax:
 * ```
 * az keyvault key get-policy-template [--subscription]
 * ```
 */
var az_keyvault_key_get_policy_template_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_get_policy_template_command_builder, _super);
    function az_keyvault_key_get_policy_template_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_get_policy_template_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_key_get_policy_template_command_builder;
}(base_1.CommandBuilder));
/**
 * Import a private key.
 *
 * Syntax:
 * ```
 * az keyvault key import [--byok-file]
 *                        [--byok-string]
 *                        [--disabled {false, true}]
 *                        [--expires]
 *                        [--hsm-name]
 *                        [--id]
 *                        [--name]
 *                        [--not-before]
 *                        [--ops {decrypt, encrypt, export, import, sign, unwrapKey, verify, wrapKey}]
 *                        [--pem-file]
 *                        [--pem-password]
 *                        [--pem-string]
 *                        [--protection {hsm, software}]
 *                        [--subscription]
 *                        [--tags]
 *                        [--vault-name]
 * ```
 */
var az_keyvault_key_import_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_import_command_builder, _super);
    function az_keyvault_key_import_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** BYOK file containing the key to be imported. Must not be password protected. */
    az_keyvault_key_import_command_builder.prototype.byokFile = function (value) {
        this.setFlag("--byok-file", value);
        return this;
    };
    /** BYOK string containing the key to be imported. Must not be password protected. */
    az_keyvault_key_import_command_builder.prototype.byokString = function (value) {
        this.setFlag("--byok-string", value);
        return this;
    };
    /** Create key in disabled state. */
    az_keyvault_key_import_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_key_import_command_builder.prototype.expires = function (value) {
        this.setFlag("--expires", value);
        return this;
    };
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_import_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_import_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. */
    az_keyvault_key_import_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_key_import_command_builder.prototype.notBefore = function (value) {
        this.setFlag("--not-before", value);
        return this;
    };
    /** Space-separated list of permitted JSON web key operations. */
    az_keyvault_key_import_command_builder.prototype.ops = function (value) {
        this.setFlag("--ops", value);
        return this;
    };
    /** PEM file containing the key to be imported. */
    az_keyvault_key_import_command_builder.prototype.pemFile = function (value) {
        this.setFlag("--pem-file", value);
        return this;
    };
    /** Password of PEM file. */
    az_keyvault_key_import_command_builder.prototype.pemPassword = function (value) {
        this.setFlag("--pem-password", value);
        return this;
    };
    /** PEM string containing the key to be imported. */
    az_keyvault_key_import_command_builder.prototype.pemString = function (value) {
        this.setFlag("--pem-string", value);
        return this;
    };
    /** Specifies the type of key protection. */
    az_keyvault_key_import_command_builder.prototype.protection = function (value) {
        this.setFlag("--protection", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_key_import_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_key_import_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_import_command_builder;
}(base_1.CommandBuilder));
/**
 * List keys in the specified Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault key list [--hsm-name]
 *                      [--id]
 *                      [--maxresults]
 *                      [--query-examples]
 *                      [--subscription]
 *                      [--vault-name]
 * ```
 */
var az_keyvault_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_list_command_builder, _super);
    function az_keyvault_key_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_list_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_key_list_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_key_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the deleted keys in the specified Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault key list-deleted [--hsm-name]
 *                              [--id]
 *                              [--maxresults]
 *                              [--subscription]
 *                              [--vault-name]
 * ```
 */
var az_keyvault_key_list_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_list_deleted_command_builder, _super);
    function az_keyvault_key_list_deleted_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_list_deleted_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_list_deleted_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_key_list_deleted_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_list_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_key_list_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_list_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves a list of individual key versions with the same key name.
 *
 * Syntax:
 * ```
 * az keyvault key list-versions [--hsm-name]
 *                               [--id]
 *                               [--maxresults]
 *                               [--name]
 *                               [--subscription]
 *                               [--vault-name]
 * ```
 */
var az_keyvault_key_list_versions_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_list_versions_command_builder, _super);
    function az_keyvault_key_list_versions_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_list_versions_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_list_versions_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_key_list_versions_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_list_versions_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_list_versions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_key_list_versions_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_list_versions_command_builder;
}(base_1.CommandBuilder));
/**
 * Permanently delete the specified key.
 *
 * Syntax:
 * ```
 * az keyvault key purge [--hsm-name]
 *                       [--id]
 *                       [--name]
 *                       [--subscription]
 *                       [--vault-name]
 * ```
 */
var az_keyvault_key_purge_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_purge_command_builder, _super);
    function az_keyvault_key_purge_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_purge_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** The recovery id of the key. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_purge_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_purge_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_purge_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. Required if --id is not specified. */
    az_keyvault_key_purge_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_purge_command_builder;
}(base_1.CommandBuilder));
/**
 * Recover the deleted key to its latest version.
 *
 * Syntax:
 * ```
 * az keyvault key recover [--hsm-name]
 *                         [--id]
 *                         [--name]
 *                         [--subscription]
 *                         [--vault-name]
 * ```
 */
var az_keyvault_key_recover_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_recover_command_builder, _super);
    function az_keyvault_key_recover_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_recover_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** The recovery id of the key. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_recover_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_recover_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_recover_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. Required if --id is not specified. */
    az_keyvault_key_recover_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_recover_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore a backed up key to a Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault key restore --file
 *                         [--hsm-name]
 *                         [--id]
 *                         [--subscription]
 *                         [--vault-name]
 * ```
 *
 * @param {string} file Local key backup from which to restore key.
 */
var az_keyvault_key_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_restore_command_builder, _super);
    function az_keyvault_key_restore_command_builder(commandPath, resultDataTypeName, file) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        return _this;
    }
    /** Local key backup from which to restore key. */
    az_keyvault_key_restore_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_restore_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_restore_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_key_restore_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault key set-attributes [--enabled {false, true}]
 *                                [--expires]
 *                                [--hsm-name]
 *                                [--id]
 *                                [--name]
 *                                [--not-before]
 *                                [--ops {decrypt, encrypt, export, import, sign, unwrapKey, verify, wrapKey}]
 *                                [--subscription]
 *                                [--tags]
 *                                [--vault-name]
 *                                [--version]
 * ```
 */
var az_keyvault_key_set_attributes_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_set_attributes_command_builder, _super);
    function az_keyvault_key_set_attributes_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Enable the key. */
    az_keyvault_key_set_attributes_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_key_set_attributes_command_builder.prototype.expires = function (value) {
        this.setFlag("--expires", value);
        return this;
    };
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_set_attributes_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_set_attributes_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_set_attributes_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_key_set_attributes_command_builder.prototype.notBefore = function (value) {
        this.setFlag("--not-before", value);
        return this;
    };
    /** Space-separated list of permitted JSON web key operations. */
    az_keyvault_key_set_attributes_command_builder.prototype.ops = function (value) {
        this.setFlag("--ops", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_set_attributes_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_key_set_attributes_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_key_set_attributes_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The key version. If omitted, uses the latest version. */
    az_keyvault_key_set_attributes_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_key_set_attributes_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the public part of a stored key.
 *
 * Syntax:
 * ```
 * az keyvault key show [--hsm-name]
 *                      [--id]
 *                      [--name]
 *                      [--query-examples]
 *                      [--subscription]
 *                      [--vault-name]
 *                      [--version]
 * ```
 */
var az_keyvault_key_show_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_show_command_builder, _super);
    function az_keyvault_key_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_show_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_key_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_key_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The key version. If omitted, uses the latest version. */
    az_keyvault_key_show_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_key_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the public part of a deleted key.
 *
 * Syntax:
 * ```
 * az keyvault key show-deleted [--hsm-name]
 *                              [--id]
 *                              [--name]
 *                              [--subscription]
 *                              [--vault-name]
 * ```
 */
var az_keyvault_key_show_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_key_show_deleted_command_builder, _super);
    function az_keyvault_key_show_deleted_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    az_keyvault_key_show_deleted_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** The recovery id of the key. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_key_show_deleted_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the key. Required if --id is not specified. */
    az_keyvault_key_show_deleted_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_key_show_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. Required if --id is not specified. */
    az_keyvault_key_show_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_key_show_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a network rule to the network ACLs for a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault network-rule add --name
 *                              [--ip-address]
 *                              [--no-wait]
 *                              [--resource-group]
 *                              [--subnet]
 *                              [--subscription]
 *                              [--vnet-name]
 * ```
 *
 * @param {string} name Name of the Vault.
 */
var az_keyvault_network_rule_add_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_network_rule_add_command_builder, _super);
    function az_keyvault_network_rule_add_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_network_rule_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** IPv4 address or CIDR range. */
    az_keyvault_network_rule_add_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_network_rule_add_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_network_rule_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_keyvault_network_rule_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_network_rule_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of a virtual network. */
    az_keyvault_network_rule_add_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_keyvault_network_rule_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List the network rules from the network ACLs for a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault network-rule list --name
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name of the Vault.
 */
var az_keyvault_network_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_network_rule_list_command_builder, _super);
    function az_keyvault_network_rule_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_network_rule_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_network_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_network_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_network_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_network_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a network rule from the network ACLs for a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault network-rule remove --name
 *                                 [--ip-address]
 *                                 [--no-wait]
 *                                 [--resource-group]
 *                                 [--subnet]
 *                                 [--subscription]
 *                                 [--vnet-name]
 * ```
 *
 * @param {string} name Name of the Vault.
 */
var az_keyvault_network_rule_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_network_rule_remove_command_builder, _super);
    function az_keyvault_network_rule_remove_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_network_rule_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** IPv4 address or CIDR range. */
    az_keyvault_network_rule_remove_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_network_rule_remove_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_network_rule_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_keyvault_network_rule_remove_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_network_rule_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of a virtual network. */
    az_keyvault_network_rule_remove_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_keyvault_network_rule_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the vault is met.
 *
 * Syntax:
 * ```
 * az keyvault network-rule wait --name
 *                               [--created]
 *                               [--custom]
 *                               [--deleted]
 *                               [--exists]
 *                               [--interval]
 *                               [--resource-group]
 *                               [--subscription]
 *                               [--timeout]
 *                               [--updated]
 * ```
 *
 * @param {string} name Name of the Vault.
 */
var az_keyvault_network_rule_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_network_rule_wait_command_builder, _super);
    function az_keyvault_network_rule_wait_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_network_rule_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_keyvault_network_rule_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_keyvault_network_rule_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_keyvault_network_rule_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_keyvault_network_rule_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_keyvault_network_rule_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_network_rule_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_network_rule_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_keyvault_network_rule_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_keyvault_network_rule_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_keyvault_network_rule_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Approve a private endpoint connection request for a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault private-endpoint-connection approve [--description]
 *                                                 [--id]
 *                                                 [--name]
 *                                                 [--no-wait]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 *                                                 [--vault-name]
 * ```
 */
var az_keyvault_private_endpoint_connection_approve_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_private_endpoint_connection_approve_command_builder, _super);
    function az_keyvault_private_endpoint_connection_approve_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for the approve operation. */
    az_keyvault_private_endpoint_connection_approve_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    az_keyvault_private_endpoint_connection_approve_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_approve_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_private_endpoint_connection_approve_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_private_endpoint_connection_approve_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_private_endpoint_connection_approve_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_approve_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_private_endpoint_connection_approve_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the specified private endpoint connection associated with a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault private-endpoint-connection delete [--id]
 *                                                [--name]
 *                                                [--no-wait]
 *                                                [--resource-group]
 *                                                [--subscription]
 *                                                [--vault-name]
 * ```
 */
var az_keyvault_private_endpoint_connection_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_private_endpoint_connection_delete_command_builder, _super);
    function az_keyvault_private_endpoint_connection_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    az_keyvault_private_endpoint_connection_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_private_endpoint_connection_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_private_endpoint_connection_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_private_endpoint_connection_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_private_endpoint_connection_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Reject a private endpoint connection request for a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault private-endpoint-connection reject [--description]
 *                                                [--id]
 *                                                [--name]
 *                                                [--no-wait]
 *                                                [--resource-group]
 *                                                [--subscription]
 *                                                [--vault-name]
 * ```
 */
var az_keyvault_private_endpoint_connection_reject_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_private_endpoint_connection_reject_command_builder, _super);
    function az_keyvault_private_endpoint_connection_reject_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for the reject operation. */
    az_keyvault_private_endpoint_connection_reject_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    az_keyvault_private_endpoint_connection_reject_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_reject_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_private_endpoint_connection_reject_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_private_endpoint_connection_reject_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_private_endpoint_connection_reject_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_reject_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_private_endpoint_connection_reject_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a private endpoint connection associated with a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault private-endpoint-connection show [--id]
 *                                              [--name]
 *                                              [--query-examples]
 *                                              [--resource-group]
 *                                              [--subscription]
 *                                              [--vault-name]
 * ```
 */
var az_keyvault_private_endpoint_connection_show_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_private_endpoint_connection_show_command_builder, _super);
    function az_keyvault_private_endpoint_connection_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    az_keyvault_private_endpoint_connection_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_private_endpoint_connection_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_private_endpoint_connection_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_private_endpoint_connection_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_private_endpoint_connection_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the private endpoint connection is met.
 *
 * Syntax:
 * ```
 * az keyvault private-endpoint-connection wait [--created]
 *                                              [--custom]
 *                                              [--deleted]
 *                                              [--exists]
 *                                              [--id]
 *                                              [--interval]
 *                                              [--name]
 *                                              [--resource-group]
 *                                              [--subscription]
 *                                              [--timeout]
 *                                              [--updated]
 *                                              [--vault-name]
 * ```
 */
var az_keyvault_private_endpoint_connection_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_private_endpoint_connection_wait_command_builder, _super);
    function az_keyvault_private_endpoint_connection_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_private_endpoint_connection_wait_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_private_endpoint_connection_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * List the private link resources supported for a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault private-link-resource list --vault-name
 *                                        [--query-examples]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 *
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_private_link_resource_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_private_link_resource_list_command_builder, _super);
    function az_keyvault_private_link_resource_list_command_builder(commandPath, resultDataTypeName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_private_link_resource_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_private_link_resource_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_private_link_resource_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_private_link_resource_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_private_link_resource_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore a full backup of a HSM.
 *
 * Syntax:
 * ```
 * az keyvault restore start --backup-folder
 *                           --storage-container-SAS-token
 *                           [--blob-container-name]
 *                           [--hsm-name]
 *                           [--id]
 *                           [--storage-account-name]
 *                           [--storage-resource-uri]
 *                           [--subscription]
 * ```
 *
 * @param {string} backupFolder Name of the blob container which contains the backup.
 * @param {string} storageContainerSasToken The SAS token pointing to an Azure Blob storage container.
 */
var az_keyvault_restore_start_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_restore_start_command_builder, _super);
    function az_keyvault_restore_start_command_builder(commandPath, resultDataTypeName, backupFolder, storageContainerSasToken) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.backupFolder(backupFolder);
        _this.storageContainerSasToken(storageContainerSasToken);
        return _this;
    }
    /** Name of the blob container which contains the backup. */
    az_keyvault_restore_start_command_builder.prototype.backupFolder = function (value) {
        this.setFlag("--backup-folder", value);
        return this;
    };
    /** The SAS token pointing to an Azure Blob storage container. */
    az_keyvault_restore_start_command_builder.prototype.storageContainerSasToken = function (value) {
        this.setFlag("--storage-container-SAS-token", value);
        return this;
    };
    /** Name of Blob Container. */
    az_keyvault_restore_start_command_builder.prototype.blobContainerName = function (value) {
        this.setFlag("--blob-container-name", value);
        return this;
    };
    /** Name of the HSM. Can be omitted if --id is specified. */
    az_keyvault_restore_start_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the HSM. */
    az_keyvault_restore_start_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of Azure Storage Account. */
    az_keyvault_restore_start_command_builder.prototype.storageAccountName = function (value) {
        this.setFlag("--storage-account-name", value);
        return this;
    };
    /** Azure Blob storage container Uri. If specified all other 'Storage Id' arguments should be omitted. */
    az_keyvault_restore_start_command_builder.prototype.storageResourceUri = function (value) {
        this.setFlag("--storage-resource-uri", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_restore_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_restore_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new role assignment for a user, group, or service principal.
 *
 * Syntax:
 * ```
 * az keyvault role assignment create --role
 *                                    --scope
 *                                    [--assignee]
 *                                    [--assignee-object-id]
 *                                    [--assignee-principal-type {Application, DirectoryObjectOrGroup, DirectoryRoleTemplate, Everyone, ForeignGroup, Group, MSI, ServicePrincipal, Unknown, User}]
 *                                    [--hsm-name]
 *                                    [--id]
 *                                    [--name]
 *                                    [--subscription]
 * ```
 *
 * @param {string} role Role name or id.
 * @param {string} scope Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}".
 */
var az_keyvault_role_assignment_create_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_role_assignment_create_command_builder, _super);
    function az_keyvault_role_assignment_create_command_builder(commandPath, resultDataTypeName, role, scope) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.role(role);
        _this.scope(scope);
        return _this;
    }
    /** Role name or id. */
    az_keyvault_role_assignment_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}". */
    az_keyvault_role_assignment_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    az_keyvault_role_assignment_create_command_builder.prototype.assignee = function (value) {
        this.setFlag("--assignee", value);
        return this;
    };
    /** Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id. */
    az_keyvault_role_assignment_create_command_builder.prototype.assigneeObjectId = function (value) {
        this.setFlag("--assignee-object-id", value);
        return this;
    };
    /** The principal type of assignee. */
    az_keyvault_role_assignment_create_command_builder.prototype.assigneePrincipalType = function (value) {
        this.setFlag("--assignee-principal-type", value);
        return this;
    };
    /** Name of the HSM. */
    az_keyvault_role_assignment_create_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_role_assignment_create_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the role assignment. */
    az_keyvault_role_assignment_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_role_assignment_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_role_assignment_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a role assignment.
 *
 * Syntax:
 * ```
 * az keyvault role assignment delete [--assignee]
 *                                    [--assignee-object-id]
 *                                    [--hsm-name]
 *                                    [--id]
 *                                    [--ids]
 *                                    [--name]
 *                                    [--role]
 *                                    [--scope]
 *                                    [--subscription]
 * ```
 */
var az_keyvault_role_assignment_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_role_assignment_delete_command_builder, _super);
    function az_keyvault_role_assignment_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    az_keyvault_role_assignment_delete_command_builder.prototype.assignee = function (value) {
        this.setFlag("--assignee", value);
        return this;
    };
    /** Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id. */
    az_keyvault_role_assignment_delete_command_builder.prototype.assigneeObjectId = function (value) {
        this.setFlag("--assignee-object-id", value);
        return this;
    };
    /** Name of the HSM. */
    az_keyvault_role_assignment_delete_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_role_assignment_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Space-separated role assignment ids. */
    az_keyvault_role_assignment_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the role assignment. */
    az_keyvault_role_assignment_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Role name or id. */
    az_keyvault_role_assignment_delete_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}". */
    az_keyvault_role_assignment_delete_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_role_assignment_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_role_assignment_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List role assignments.
 *
 * Syntax:
 * ```
 * az keyvault role assignment list [--assignee]
 *                                  [--assignee-object-id]
 *                                  [--hsm-name]
 *                                  [--id]
 *                                  [--query-examples]
 *                                  [--role]
 *                                  [--scope]
 *                                  [--subscription]
 * ```
 */
var az_keyvault_role_assignment_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_role_assignment_list_command_builder, _super);
    function az_keyvault_role_assignment_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    az_keyvault_role_assignment_list_command_builder.prototype.assignee = function (value) {
        this.setFlag("--assignee", value);
        return this;
    };
    /** Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id. */
    az_keyvault_role_assignment_list_command_builder.prototype.assigneeObjectId = function (value) {
        this.setFlag("--assignee-object-id", value);
        return this;
    };
    /** Name of the HSM. */
    az_keyvault_role_assignment_list_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_role_assignment_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_role_assignment_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Role name or id. */
    az_keyvault_role_assignment_list_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}". */
    az_keyvault_role_assignment_list_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_role_assignment_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_role_assignment_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List role definitions.
 *
 * Syntax:
 * ```
 * az keyvault role definition list [--hsm-name]
 *                                  [--query-examples]
 *                                  [--scope]
 *                                  [--subscription]
 * ```
 */
var az_keyvault_role_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_role_definition_list_command_builder, _super);
    function az_keyvault_role_definition_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. */
    az_keyvault_role_definition_list_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_role_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}". */
    az_keyvault_role_definition_list_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_role_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_role_definition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Backs up the specified secret.
 *
 * Syntax:
 * ```
 * az keyvault secret backup --file
 *                           [--id]
 *                           [--name]
 *                           [--subscription]
 *                           [--vault-name]
 * ```
 *
 * @param {string} file File to receive the secret contents.
 */
var az_keyvault_secret_backup_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_backup_command_builder, _super);
    function az_keyvault_secret_backup_command_builder(commandPath, resultDataTypeName, file) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        return _this;
    }
    /** File to receive the secret contents. */
    az_keyvault_secret_backup_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_backup_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the secret. Required if --id is not specified. */
    az_keyvault_secret_backup_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_backup_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_secret_backup_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_secret_backup_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a secret from a specified key vault.
 *
 * Syntax:
 * ```
 * az keyvault secret delete [--id]
 *                           [--name]
 *                           [--subscription]
 *                           [--vault-name]
 * ```
 */
var az_keyvault_secret_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_delete_command_builder, _super);
    function az_keyvault_secret_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the secret. Required if --id is not specified. */
    az_keyvault_secret_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_secret_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_secret_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Download a secret from a KeyVault.
 *
 * Syntax:
 * ```
 * az keyvault secret download --file
 *                             [--encoding {ascii, base64, hex, utf-16be, utf-16le, utf-8}]
 *                             [--id]
 *                             [--name]
 *                             [--subscription]
 *                             [--vault-name]
 *                             [--version]
 * ```
 *
 * @param {string} file File to receive the secret contents.
 */
var az_keyvault_secret_download_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_download_command_builder, _super);
    function az_keyvault_secret_download_command_builder(commandPath, resultDataTypeName, file) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        return _this;
    }
    /** File to receive the secret contents. */
    az_keyvault_secret_download_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Encoding of the secret. By default, will look for the 'file-encoding' tag on the secret. Otherwise will assume 'utf-8'. */
    az_keyvault_secret_download_command_builder.prototype.encoding = function (value) {
        this.setFlag("--encoding", value);
        return this;
    };
    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_download_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the secret. Required if --id is not specified. */
    az_keyvault_secret_download_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_secret_download_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The secret version. If omitted, uses the latest version. */
    az_keyvault_secret_download_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_secret_download_command_builder;
}(base_1.CommandBuilder));
/**
 * List secrets in a specified key vault.
 *
 * Syntax:
 * ```
 * az keyvault secret list [--id]
 *                         [--maxresults]
 *                         [--query-examples]
 *                         [--subscription]
 *                         [--vault-name]
 * ```
 */
var az_keyvault_secret_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_list_command_builder, _super);
    function az_keyvault_secret_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_list_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified, the service will return up to 25 results. */
    az_keyvault_secret_list_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_secret_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_secret_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_secret_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists deleted secrets for the specified vault.
 *
 * Syntax:
 * ```
 * az keyvault secret list-deleted --vault-name
 *                                 [--id]
 *                                 [--maxresults]
 *                                 [--subscription]
 * ```
 *
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_secret_list_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_list_deleted_command_builder, _super);
    function az_keyvault_secret_list_deleted_command_builder(commandPath, resultDataTypeName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_secret_list_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Id of the Vault. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_list_deleted_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_secret_list_deleted_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_list_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_secret_list_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * List all versions of the specified secret.
 *
 * Syntax:
 * ```
 * az keyvault secret list-versions [--id]
 *                                  [--maxresults]
 *                                  [--name]
 *                                  [--subscription]
 *                                  [--vault-name]
 * ```
 */
var az_keyvault_secret_list_versions_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_list_versions_command_builder, _super);
    function az_keyvault_secret_list_versions_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_list_versions_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified, the service will return up to 25 results. */
    az_keyvault_secret_list_versions_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Name of the secret. Required if --id is not specified. */
    az_keyvault_secret_list_versions_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_list_versions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_secret_list_versions_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_secret_list_versions_command_builder;
}(base_1.CommandBuilder));
/**
 * Permanently deletes the specified secret.
 *
 * Syntax:
 * ```
 * az keyvault secret purge [--id]
 *                          [--name]
 *                          [--subscription]
 *                          [--vault-name]
 * ```
 */
var az_keyvault_secret_purge_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_purge_command_builder, _super);
    function az_keyvault_secret_purge_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The recovery id of the secret. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_purge_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the secret. Required if --id is not specified. */
    az_keyvault_secret_purge_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_purge_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. Required if --id is not specified. */
    az_keyvault_secret_purge_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_secret_purge_command_builder;
}(base_1.CommandBuilder));
/**
 * Recovers the deleted secret to the latest version.
 *
 * Syntax:
 * ```
 * az keyvault secret recover [--id]
 *                            [--name]
 *                            [--subscription]
 *                            [--vault-name]
 * ```
 */
var az_keyvault_secret_recover_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_recover_command_builder, _super);
    function az_keyvault_secret_recover_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The recovery id of the secret. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_recover_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the secret. Required if --id is not specified. */
    az_keyvault_secret_recover_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_recover_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. Required if --id is not specified. */
    az_keyvault_secret_recover_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_secret_recover_command_builder;
}(base_1.CommandBuilder));
/**
 * Restores a backed up secret to a vault.
 *
 * Syntax:
 * ```
 * az keyvault secret restore --file
 *                            --vault-name
 *                            [--subscription]
 * ```
 *
 * @param {string} file File to receive the secret contents.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_secret_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_restore_command_builder, _super);
    function az_keyvault_secret_restore_command_builder(commandPath, resultDataTypeName, file, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.vaultName(vaultName);
        return _this;
    }
    /** File to receive the secret contents. */
    az_keyvault_secret_restore_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_secret_restore_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_secret_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a secret (if one doesn't exist) or update a secret in a KeyVault.
 *
 * Syntax:
 * ```
 * az keyvault secret set --name
 *                        --vault-name
 *                        [--description]
 *                        [--disabled {false, true}]
 *                        [--encoding {ascii, base64, hex, utf-16be, utf-16le, utf-8}]
 *                        [--expires]
 *                        [--file]
 *                        [--not-before]
 *                        [--subscription]
 *                        [--tags]
 *                        [--value]
 * ```
 *
 * @param {string} name Name of the secret.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_secret_set_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_set_command_builder, _super);
    function az_keyvault_secret_set_command_builder(commandPath, resultDataTypeName, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the secret. */
    az_keyvault_secret_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_secret_set_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Description of the secret contents (e.g. password, connection string, etc). */
    az_keyvault_secret_set_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Create secret in disabled state. */
    az_keyvault_secret_set_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Source file encoding. The value is saved as a tag (`file-encoding=<val>`) and used during download to automatically encode the resulting file. */
    az_keyvault_secret_set_command_builder.prototype.encoding = function (value) {
        this.setFlag("--encoding", value);
        return this;
    };
    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_secret_set_command_builder.prototype.expires = function (value) {
        this.setFlag("--expires", value);
        return this;
    };
    /** Source file for secret. Use in conjunction with '--encoding'. */
    az_keyvault_secret_set_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_secret_set_command_builder.prototype.notBefore = function (value) {
        this.setFlag("--not-before", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_secret_set_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Plain text secret value. Cannot be used with '--file' or '--encoding'. */
    az_keyvault_secret_set_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    return az_keyvault_secret_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the attributes associated with a specified secret in a given key vault.
 *
 * Syntax:
 * ```
 * az keyvault secret set-attributes [--content-type]
 *                                   [--enabled {false, true}]
 *                                   [--expires]
 *                                   [--id]
 *                                   [--name]
 *                                   [--not-before]
 *                                   [--subscription]
 *                                   [--tags]
 *                                   [--vault-name]
 *                                   [--version]
 * ```
 */
var az_keyvault_secret_set_attributes_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_set_attributes_command_builder, _super);
    function az_keyvault_secret_set_attributes_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Type of the secret value such as a password. */
    az_keyvault_secret_set_attributes_command_builder.prototype.contentType = function (value) {
        this.setFlag("--content-type", value);
        return this;
    };
    /** Enable the secret. */
    az_keyvault_secret_set_attributes_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_secret_set_attributes_command_builder.prototype.expires = function (value) {
        this.setFlag("--expires", value);
        return this;
    };
    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_set_attributes_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the secret. Required if --id is not specified. */
    az_keyvault_secret_set_attributes_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    az_keyvault_secret_set_attributes_command_builder.prototype.notBefore = function (value) {
        this.setFlag("--not-before", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_set_attributes_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_secret_set_attributes_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_secret_set_attributes_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The secret version. If omitted, uses the latest version. */
    az_keyvault_secret_set_attributes_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_secret_set_attributes_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a specified secret from a given key vault.
 *
 * Syntax:
 * ```
 * az keyvault secret show [--id]
 *                         [--name]
 *                         [--query-examples]
 *                         [--subscription]
 *                         [--vault-name]
 *                         [--version]
 * ```
 */
var az_keyvault_secret_show_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_show_command_builder, _super);
    function az_keyvault_secret_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the secret. Required if --id is not specified. */
    az_keyvault_secret_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_secret_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_secret_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The secret version. If omitted, uses the latest version. */
    az_keyvault_secret_show_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_keyvault_secret_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the specified deleted secret.
 *
 * Syntax:
 * ```
 * az keyvault secret show-deleted [--id]
 *                                 [--name]
 *                                 [--subscription]
 *                                 [--vault-name]
 * ```
 */
var az_keyvault_secret_show_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_secret_show_deleted_command_builder, _super);
    function az_keyvault_secret_show_deleted_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The recovery id of the secret. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_secret_show_deleted_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the secret. Required if --id is not specified. */
    az_keyvault_secret_show_deleted_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_secret_show_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Vault. Required if --id is not specified. */
    az_keyvault_secret_show_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_secret_show_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Download the security domain file from the HSM.
 *
 * Syntax:
 * ```
 * az keyvault security-domain download --sd-quorum
 *                                      --sd-wrapping-keys
 *                                      --security-domain-file
 *                                      [--hsm-name]
 *                                      [--id]
 *                                      [--subscription]
 * ```
 *
 * @param {string} sdQuorum The minimum number of shares required to decrypt the security domain for recovery.
 * @param {string} sdWrappingKeys Space-separated file paths to PEM files containing public keys.
 * @param {string} securityDomainFile Path to a file where the JSON blob returned by this command is stored.
 */
var az_keyvault_security_domain_download_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_security_domain_download_command_builder, _super);
    function az_keyvault_security_domain_download_command_builder(commandPath, resultDataTypeName, sdQuorum, sdWrappingKeys, securityDomainFile) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sdQuorum(sdQuorum);
        _this.sdWrappingKeys(sdWrappingKeys);
        _this.securityDomainFile(securityDomainFile);
        return _this;
    }
    /** The minimum number of shares required to decrypt the security domain for recovery. */
    az_keyvault_security_domain_download_command_builder.prototype.sdQuorum = function (value) {
        this.setFlag("--sd-quorum", value);
        return this;
    };
    /** Space-separated file paths to PEM files containing public keys. */
    az_keyvault_security_domain_download_command_builder.prototype.sdWrappingKeys = function (value) {
        this.setFlag("--sd-wrapping-keys", value);
        return this;
    };
    /** Path to a file where the JSON blob returned by this command is stored. */
    az_keyvault_security_domain_download_command_builder.prototype.securityDomainFile = function (value) {
        this.setFlag("--security-domain-file", value);
        return this;
    };
    /** Name of the HSM. Can be omitted if --id is specified. */
    az_keyvault_security_domain_download_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the HSM. */
    az_keyvault_security_domain_download_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_security_domain_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_security_domain_download_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieve the exchange key of the HSM.
 *
 * Syntax:
 * ```
 * az keyvault security-domain init-recovery --sd-exchange-key
 *                                           [--hsm-name]
 *                                           [--id]
 *                                           [--subscription]
 * ```
 *
 * @param {string} sdExchangeKey Local file path to store the exported key.
 */
var az_keyvault_security_domain_init_recovery_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_security_domain_init_recovery_command_builder, _super);
    function az_keyvault_security_domain_init_recovery_command_builder(commandPath, resultDataTypeName, sdExchangeKey) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sdExchangeKey(sdExchangeKey);
        return _this;
    }
    /** Local file path to store the exported key. */
    az_keyvault_security_domain_init_recovery_command_builder.prototype.sdExchangeKey = function (value) {
        this.setFlag("--sd-exchange-key", value);
        return this;
    };
    /** Name of the HSM. Can be omitted if --id is specified. */
    az_keyvault_security_domain_init_recovery_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the HSM. */
    az_keyvault_security_domain_init_recovery_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_security_domain_init_recovery_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_security_domain_init_recovery_command_builder;
}(base_1.CommandBuilder));
/**
 * Start to restore the HSM.
 *
 * Syntax:
 * ```
 * az keyvault security-domain upload --sd-exchange-key
 *                                    --sd-file
 *                                    --sd-wrapping-keys
 *                                    [--hsm-name]
 *                                    [--id]
 *                                    [--no-wait]
 *                                    [--passwords]
 *                                    [--subscription]
 * ```
 *
 * @param {string} sdExchangeKey The exchange key for security domain.
 * @param {string} sdFile This file contains security domain encrypted using SD Exchange file downloaded in security-domain init-recovery command.
 * @param {string} sdWrappingKeys Space-separated file paths to PEM files containing private keys.
 */
var az_keyvault_security_domain_upload_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_security_domain_upload_command_builder, _super);
    function az_keyvault_security_domain_upload_command_builder(commandPath, resultDataTypeName, sdExchangeKey, sdFile, sdWrappingKeys) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sdExchangeKey(sdExchangeKey);
        _this.sdFile(sdFile);
        _this.sdWrappingKeys(sdWrappingKeys);
        return _this;
    }
    /** The exchange key for security domain. */
    az_keyvault_security_domain_upload_command_builder.prototype.sdExchangeKey = function (value) {
        this.setFlag("--sd-exchange-key", value);
        return this;
    };
    /** This file contains security domain encrypted using SD Exchange file downloaded in security-domain init-recovery command. */
    az_keyvault_security_domain_upload_command_builder.prototype.sdFile = function (value) {
        this.setFlag("--sd-file", value);
        return this;
    };
    /** Space-separated file paths to PEM files containing private keys. */
    az_keyvault_security_domain_upload_command_builder.prototype.sdWrappingKeys = function (value) {
        this.setFlag("--sd-wrapping-keys", value);
        return this;
    };
    /** Name of the HSM. Can be omitted if --id is specified. */
    az_keyvault_security_domain_upload_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the HSM. */
    az_keyvault_security_domain_upload_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_security_domain_upload_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Space-separated password list for --sd-wrapping-keys. CLI will match them in order. Can be omitted if your keys are without password protection. */
    az_keyvault_security_domain_upload_command_builder.prototype.passwords = function (value) {
        this.setFlag("--passwords", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_security_domain_upload_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_security_domain_upload_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until HSM security domain operation is finished.
 *
 * Syntax:
 * ```
 * az keyvault security-domain wait [--hsm-name]
 *                                  [--id]
 *                                  [--subscription]
 * ```
 */
var az_keyvault_security_domain_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_security_domain_wait_command_builder, _super);
    function az_keyvault_security_domain_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. Can be omitted if --id is specified. */
    az_keyvault_security_domain_wait_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Id of the HSM. */
    az_keyvault_security_domain_wait_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_security_domain_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_security_domain_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates or updates a new SAS definition for the specified storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage sas-definition create --account-name
 *                                           --name
 *                                           --sas-type {account, service}
 *                                           --template-uri
 *                                           --validity-period
 *                                           --vault-name
 *                                           [--disabled {false, true}]
 *                                           [--subscription]
 *                                           [--tags]
 * ```
 *
 * @param {string} accountName Name to identify the storage account in the vault.
 * @param {string} name Name to identify the SAS definition in the vault.
 * @param {'account' | 'service'} sasType The type of SAS token the SAS definition will create.
 * @param {string} templateUri The SAS definition token template signed with the key 00000000. In the case of an account token this is only the sas token itself, for service tokens, the full service endpoint url along with the sas token.  Tokens created according to the SAS definition will have the same properties as the template.
 * @param {string} validityPeriod The validity period of SAS tokens created according to the SAS definition in ISO-8601, such as "PT12H" for 12 hour tokens.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_sas_definition_create_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_sas_definition_create_command_builder, _super);
    function az_keyvault_storage_sas_definition_create_command_builder(commandPath, resultDataTypeName, accountName, name, sasType, templateUri, validityPeriod, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.sasType(sasType);
        _this.templateUri(templateUri);
        _this.validityPeriod(validityPeriod);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name to identify the storage account in the vault. */
    az_keyvault_storage_sas_definition_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name to identify the SAS definition in the vault. */
    az_keyvault_storage_sas_definition_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The type of SAS token the SAS definition will create. */
    az_keyvault_storage_sas_definition_create_command_builder.prototype.sasType = function (value) {
        this.setFlag("--sas-type", value);
        return this;
    };
    /** The SAS definition token template signed with the key 00000000. In the case of an account token this is only the sas token itself, for service tokens, the full service endpoint url along with the sas token.  Tokens created according to the SAS definition will have the same properties as the template. */
    az_keyvault_storage_sas_definition_create_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    /** The validity period of SAS tokens created according to the SAS definition in ISO-8601, such as "PT12H" for 12 hour tokens. */
    az_keyvault_storage_sas_definition_create_command_builder.prototype.validityPeriod = function (value) {
        this.setFlag("--validity-period", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_sas_definition_create_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Add the storage account in a disabled state. */
    az_keyvault_storage_sas_definition_create_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_sas_definition_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_storage_sas_definition_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_keyvault_storage_sas_definition_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a SAS definition from a specified storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage sas-definition delete [--account-name]
 *                                           [--id]
 *                                           [--name]
 *                                           [--subscription]
 *                                           [--vault-name]
 * ```
 */
var az_keyvault_storage_sas_definition_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_sas_definition_delete_command_builder, _super);
    function az_keyvault_storage_sas_definition_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    az_keyvault_storage_sas_definition_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Id of the SAS definition. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_storage_sas_definition_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name to identify the SAS definition in the vault. Required if --id is not specified. */
    az_keyvault_storage_sas_definition_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_sas_definition_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_storage_sas_definition_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_storage_sas_definition_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List storage SAS definitions for the given storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage sas-definition list --account-name
 *                                         --vault-name
 *                                         [--maxresults]
 *                                         [--query-examples]
 *                                         [--subscription]
 * ```
 *
 * @param {string} accountName Name to identify the storage account in the vault.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_sas_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_sas_definition_list_command_builder, _super);
    function az_keyvault_storage_sas_definition_list_command_builder(commandPath, resultDataTypeName, accountName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name to identify the storage account in the vault. */
    az_keyvault_storage_sas_definition_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_sas_definition_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_storage_sas_definition_list_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_storage_sas_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_sas_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_sas_definition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists deleted SAS definitions for the specified vault and storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage sas-definition list-deleted --account-name
 *                                                 --vault-name
 *                                                 [--maxresults]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} accountName Name to identify the storage account in the vault.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_sas_definition_list_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_sas_definition_list_deleted_command_builder, _super);
    function az_keyvault_storage_sas_definition_list_deleted_command_builder(commandPath, resultDataTypeName, accountName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name to identify the storage account in the vault. */
    az_keyvault_storage_sas_definition_list_deleted_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_sas_definition_list_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_storage_sas_definition_list_deleted_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_sas_definition_list_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_sas_definition_list_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Recovers the deleted SAS definition.
 *
 * Syntax:
 * ```
 * az keyvault storage sas-definition recover --account-name
 *                                            --name
 *                                            --vault-name
 *                                            [--subscription]
 * ```
 *
 * @param {string} accountName Name to identify the storage account in the vault.
 * @param {string} name Name to identify the SAS definition in the vault.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_sas_definition_recover_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_sas_definition_recover_command_builder, _super);
    function az_keyvault_storage_sas_definition_recover_command_builder(commandPath, resultDataTypeName, accountName, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name to identify the storage account in the vault. */
    az_keyvault_storage_sas_definition_recover_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name to identify the SAS definition in the vault. */
    az_keyvault_storage_sas_definition_recover_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_sas_definition_recover_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_sas_definition_recover_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_sas_definition_recover_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets information about a SAS definition for the specified storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage sas-definition show [--account-name]
 *                                         [--id]
 *                                         [--name]
 *                                         [--query-examples]
 *                                         [--subscription]
 *                                         [--vault-name]
 * ```
 */
var az_keyvault_storage_sas_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_sas_definition_show_command_builder, _super);
    function az_keyvault_storage_sas_definition_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    az_keyvault_storage_sas_definition_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Id of the SAS definition. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_storage_sas_definition_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name to identify the SAS definition in the vault. Required if --id is not specified. */
    az_keyvault_storage_sas_definition_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_storage_sas_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_sas_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_storage_sas_definition_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_storage_sas_definition_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the specified deleted sas definition.
 *
 * Syntax:
 * ```
 * az keyvault storage sas-definition show-deleted --account-name
 *                                                 --name
 *                                                 --vault-name
 *                                                 [--subscription]
 * ```
 *
 * @param {string} accountName Name to identify the storage account in the vault.
 * @param {string} name Name to identify the SAS definition in the vault.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_sas_definition_show_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_sas_definition_show_deleted_command_builder, _super);
    function az_keyvault_storage_sas_definition_show_deleted_command_builder(commandPath, resultDataTypeName, accountName, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name to identify the storage account in the vault. */
    az_keyvault_storage_sas_definition_show_deleted_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name to identify the SAS definition in the vault. */
    az_keyvault_storage_sas_definition_show_deleted_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_sas_definition_show_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_sas_definition_show_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_sas_definition_show_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the specified attributes associated with the given SAS definition.
 *
 * Syntax:
 * ```
 * az keyvault storage sas-definition update [--account-name]
 *                                           [--disabled {false, true}]
 *                                           [--id]
 *                                           [--name]
 *                                           [--sas-type {account, service}]
 *                                           [--subscription]
 *                                           [--tags]
 *                                           [--template-uri]
 *                                           [--validity-period]
 *                                           [--vault-name]
 * ```
 */
var az_keyvault_storage_sas_definition_update_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_sas_definition_update_command_builder, _super);
    function az_keyvault_storage_sas_definition_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add the storage account in a disabled state. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Id of the SAS definition. If specified all other 'Id' arguments should be omitted. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name to identify the SAS definition in the vault. Required if --id is not specified. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The type of SAS token the SAS definition will create. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.sasType = function (value) {
        this.setFlag("--sas-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The SAS definition token template signed with the key 00000000. In the case of an account token this is only the sas token itself, for service tokens, the full service endpoint url along with the sas token.  Tokens created according to the SAS definition will have the same properties as the template. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.templateUri = function (value) {
        this.setFlag("--template-uri", value);
        return this;
    };
    /** The validity period of SAS tokens created according to the SAS definition in ISO-8601, such as "PT12H" for 12 hour tokens. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.validityPeriod = function (value) {
        this.setFlag("--validity-period", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_storage_sas_definition_update_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_storage_sas_definition_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates or updates a new storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage add --active-key-name
 *                         --name
 *                         --resource-id
 *                         --vault-name
 *                         [--auto-regenerate-key {false, true}]
 *                         [--disabled {false, true}]
 *                         [--regeneration-period]
 *                         [--subscription]
 *                         [--tags]
 * ```
 *
 * @param {string} activeKeyName Current active storage account key name.
 * @param {string} name Name to identify the storage account in the vault.
 * @param {string} resourceId Storage account resource id.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_add_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_add_command_builder, _super);
    function az_keyvault_storage_add_command_builder(commandPath, resultDataTypeName, activeKeyName, name, resourceId, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.activeKeyName(activeKeyName);
        _this.name(name);
        _this.resourceId(resourceId);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Current active storage account key name. */
    az_keyvault_storage_add_command_builder.prototype.activeKeyName = function (value) {
        this.setFlag("--active-key-name", value);
        return this;
    };
    /** Name to identify the storage account in the vault. */
    az_keyvault_storage_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Storage account resource id. */
    az_keyvault_storage_add_command_builder.prototype.resourceId = function (value) {
        this.setFlag("--resource-id", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_add_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Whether keyvault should manage the storage account for the user. */
    az_keyvault_storage_add_command_builder.prototype.autoRegenerateKey = function (value) {
        this.setFlag("--auto-regenerate-key", value.toString());
        return this;
    };
    /** Add the storage account in a disabled state. */
    az_keyvault_storage_add_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** The key regeneration time duration specified in ISO-8601 format, such as "P30D" for rotation every 30 days. */
    az_keyvault_storage_add_command_builder.prototype.regenerationPeriod = function (value) {
        this.setFlag("--regeneration-period", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_storage_add_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_keyvault_storage_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Backs up the specified storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage backup --file
 *                            [--id]
 *                            [--name]
 *                            [--subscription]
 *                            [--vault-name]
 * ```
 *
 * @param {string} file Local file path in which to store storage account backup.
 */
var az_keyvault_storage_backup_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_backup_command_builder, _super);
    function az_keyvault_storage_backup_command_builder(commandPath, resultDataTypeName, file) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        return _this;
    }
    /** Local file path in which to store storage account backup. */
    az_keyvault_storage_backup_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    az_keyvault_storage_backup_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    az_keyvault_storage_backup_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_backup_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_storage_backup_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_storage_backup_command_builder;
}(base_1.CommandBuilder));
/**
 * List storage accounts managed by the specified key vault.
 *
 * Syntax:
 * ```
 * az keyvault storage list --vault-name
 *                          [--maxresults]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_list_command_builder, _super);
    function az_keyvault_storage_list_command_builder(commandPath, resultDataTypeName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_storage_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_storage_list_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_storage_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists deleted storage accounts for the specified vault.
 *
 * Syntax:
 * ```
 * az keyvault storage list-deleted --vault-name
 *                                  [--maxresults]
 *                                  [--subscription]
 * ```
 *
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_list_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_list_deleted_command_builder, _super);
    function az_keyvault_storage_list_deleted_command_builder(commandPath, resultDataTypeName, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_storage_list_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    az_keyvault_storage_list_deleted_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_list_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_list_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Permanently deletes the specified storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage purge --name
 *                           --vault-name
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name to identify the storage account in the vault.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_purge_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_purge_command_builder, _super);
    function az_keyvault_storage_purge_command_builder(commandPath, resultDataTypeName, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name to identify the storage account in the vault. */
    az_keyvault_storage_purge_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_purge_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_purge_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_purge_command_builder;
}(base_1.CommandBuilder));
/**
 * Recovers the deleted storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage recover --name
 *                             --vault-name
 *                             [--subscription]
 * ```
 *
 * @param {string} name Name to identify the storage account in the vault.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_recover_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_recover_command_builder, _super);
    function az_keyvault_storage_recover_command_builder(commandPath, resultDataTypeName, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name to identify the storage account in the vault. */
    az_keyvault_storage_recover_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_recover_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_recover_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_recover_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerates the specified key value for the given storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage regenerate-key --key-name
 *                                    [--id]
 *                                    [--name]
 *                                    [--subscription]
 *                                    [--vault-name]
 * ```
 *
 * @param {string} keyName The storage account key name.
 */
var az_keyvault_storage_regenerate_key_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_regenerate_key_command_builder, _super);
    function az_keyvault_storage_regenerate_key_command_builder(commandPath, resultDataTypeName, keyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyName(keyName);
        return _this;
    }
    /** The storage account key name. */
    az_keyvault_storage_regenerate_key_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    az_keyvault_storage_regenerate_key_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    az_keyvault_storage_regenerate_key_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_regenerate_key_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_storage_regenerate_key_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_storage_regenerate_key_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a Key Vault managed Azure Storage Account and all associated SAS definitions. This operation requires the storage/delete permission.
 *
 * Syntax:
 * ```
 * az keyvault storage remove [--id]
 *                            [--name]
 *                            [--subscription]
 *                            [--vault-name]
 * ```
 */
var az_keyvault_storage_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_remove_command_builder, _super);
    function az_keyvault_storage_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    az_keyvault_storage_remove_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    az_keyvault_storage_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_storage_remove_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_storage_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Restores a backed up storage account to a vault.
 *
 * Syntax:
 * ```
 * az keyvault storage restore --file
 *                             --vault-name
 *                             [--subscription]
 * ```
 *
 * @param {string} file Local key backup from which to restore storage account.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_restore_command_builder, _super);
    function az_keyvault_storage_restore_command_builder(commandPath, resultDataTypeName, file, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.file(file);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Local key backup from which to restore storage account. */
    az_keyvault_storage_restore_command_builder.prototype.file = function (value) {
        this.setFlag("--file", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_restore_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets information about a specified storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage show [--id]
 *                          [--name]
 *                          [--query-examples]
 *                          [--subscription]
 *                          [--vault-name]
 * ```
 */
var az_keyvault_storage_show_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_show_command_builder, _super);
    function az_keyvault_storage_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    az_keyvault_storage_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    az_keyvault_storage_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_storage_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_storage_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_storage_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the specified deleted storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage show-deleted --name
 *                                  --vault-name
 *                                  [--subscription]
 * ```
 *
 * @param {string} name Name to identify the storage account in the vault.
 * @param {string} vaultName Name of the Vault.
 */
var az_keyvault_storage_show_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_show_deleted_command_builder, _super);
    function az_keyvault_storage_show_deleted_command_builder(commandPath, resultDataTypeName, name, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name to identify the storage account in the vault. */
    az_keyvault_storage_show_deleted_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_storage_show_deleted_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_show_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_storage_show_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the specified attributes associated with the given storage account.
 *
 * Syntax:
 * ```
 * az keyvault storage update [--active-key-name]
 *                            [--auto-regenerate-key {false, true}]
 *                            [--disabled {false, true}]
 *                            [--id]
 *                            [--name]
 *                            [--regeneration-period]
 *                            [--subscription]
 *                            [--tags]
 *                            [--vault-name]
 * ```
 */
var az_keyvault_storage_update_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_storage_update_command_builder, _super);
    function az_keyvault_storage_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The current active storage account key name. */
    az_keyvault_storage_update_command_builder.prototype.activeKeyName = function (value) {
        this.setFlag("--active-key-name", value);
        return this;
    };
    /** Whether keyvault should manage the storage account for the user. */
    az_keyvault_storage_update_command_builder.prototype.autoRegenerateKey = function (value) {
        this.setFlag("--auto-regenerate-key", value.toString());
        return this;
    };
    /** Add the storage account in a disabled state. */
    az_keyvault_storage_update_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    az_keyvault_storage_update_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    az_keyvault_storage_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The key regeneration time duration specified in ISO-8601 format, such as "P30D" for rotation every 30 days. */
    az_keyvault_storage_update_command_builder.prototype.regenerationPeriod = function (value) {
        this.setFlag("--regeneration-period", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_storage_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_storage_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name of the Key Vault. Required if --id is not specified. */
    az_keyvault_storage_update_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_keyvault_storage_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault create --resource-group
 *                    [--administrators]
 *                    [--bypass {AzureServices, None}]
 *                    [--default-action {Allow, Deny}]
 *                    [--enable-purge-protection {false, true}]
 *                    [--enable-rbac-authorization {false, true}]
 *                    [--enable-soft-delete {false, true}]
 *                    [--enabled-for-deployment {false, true}]
 *                    [--enabled-for-disk-encryption {false, true}]
 *                    [--enabled-for-template-deployment {false, true}]
 *                    [--hsm-name]
 *                    [--location]
 *                    [--name]
 *                    [--network-acls]
 *                    [--network-acls-ips]
 *                    [--network-acls-vnets]
 *                    [--no-self-perms {false, true}]
 *                    [--no-wait]
 *                    [--retention-days]
 *                    [--sku]
 *                    [--subscription]
 *                    [--tags]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_keyvault_create_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_create_command_builder, _super);
    function az_keyvault_create_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_keyvault_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** [HSM Only] Administrator role for data plane operations for Managed HSM. It accepts a space separated list of OIDs that will be assigned. */
    az_keyvault_create_command_builder.prototype.administrators = function (value) {
        this.setFlag("--administrators", value);
        return this;
    };
    /** Bypass traffic for space-separated uses. */
    az_keyvault_create_command_builder.prototype.bypass = function (value) {
        this.setFlag("--bypass", value);
        return this;
    };
    /** Default action to apply when no rule matches. */
    az_keyvault_create_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value. */
    az_keyvault_create_command_builder.prototype.enablePurgeProtection = function (value) {
        this.setFlag("--enable-purge-protection", value.toString());
        return this;
    };
    /** Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC. */
    az_keyvault_create_command_builder.prototype.enableRbacAuthorization = function (value) {
        this.setFlag("--enable-rbac-authorization", value.toString());
        return this;
    };
    /** [Vault Only] Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value (true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false. */
    az_keyvault_create_command_builder.prototype.enableSoftDelete = function (value) {
        this.setFlag("--enable-soft-delete", value.toString());
        return this;
    };
    /** [Vault Only] Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. */
    az_keyvault_create_command_builder.prototype.enabledForDeployment = function (value) {
        this.setFlag("--enabled-for-deployment", value.toString());
        return this;
    };
    /** [Vault Only] Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. */
    az_keyvault_create_command_builder.prototype.enabledForDiskEncryption = function (value) {
        this.setFlag("--enabled-for-disk-encryption", value.toString());
        return this;
    };
    /** [Vault Only] Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. */
    az_keyvault_create_command_builder.prototype.enabledForTemplateDeployment = function (value) {
        this.setFlag("--enabled-for-template-deployment", value.toString());
        return this;
    };
    /** Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    az_keyvault_create_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_keyvault_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Network ACLs. It accepts a JSON filename or a JSON string. JSON format: `{"ip":[<ip1>, <ip2>...],"vnet":[<vnet_name_1>/<subnet_name_1>,<subnet_id2>...]}`. */
    az_keyvault_create_command_builder.prototype.networkAcls = function (value) {
        this.setFlag("--network-acls", value);
        return this;
    };
    /** Network ACLs IP rules. Space-separated list of IP addresses. */
    az_keyvault_create_command_builder.prototype.networkAclsIps = function (value) {
        this.setFlag("--network-acls-ips", value);
        return this;
    };
    /** Network ACLS VNet rules. Space-separated list of Vnet/subnet pairs or subnet resource ids. */
    az_keyvault_create_command_builder.prototype.networkAclsVnets = function (value) {
        this.setFlag("--network-acls-vnets", value);
        return this;
    };
    /** [Vault Only] Don't add permissions for the current user/service principal in the new vault. */
    az_keyvault_create_command_builder.prototype.noSelfPerms = function (value) {
        this.setFlag("--no-self-perms", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Soft delete data retention days. It accepts >=7 and <=90. */
    az_keyvault_create_command_builder.prototype.retentionDays = function (value) {
        this.setFlag("--retention-days", value);
        return this;
    };
    /** Required. SKU details. Allowed values for Vault: premium, standard. Default: standard. Allowed values for HSM: Standard_B1, Custom_B32. Default: Standard_B1. */
    az_keyvault_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_keyvault_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_keyvault_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault delete [--hsm-name]
 *                    [--name]
 *                    [--no-wait]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_keyvault_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_delete_command_builder, _super);
    function az_keyvault_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    az_keyvault_delete_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete security policy settings for a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault delete-policy --name
 *                           [--no-wait]
 *                           [--object-id]
 *                           [--resource-group]
 *                           [--spn]
 *                           [--subscription]
 *                           [--upn]
 * ```
 *
 * @param {string} name Name of the Vault.
 */
var az_keyvault_delete_policy_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_delete_policy_command_builder, _super);
    function az_keyvault_delete_policy_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_delete_policy_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_delete_policy_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** A GUID that identifies the principal that will receive permissions. */
    az_keyvault_delete_policy_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_delete_policy_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of a service principal that will receive permissions. */
    az_keyvault_delete_policy_command_builder.prototype.spn = function (value) {
        this.setFlag("--spn", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_delete_policy_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of a user principal that will receive permissions. */
    az_keyvault_delete_policy_command_builder.prototype.upn = function (value) {
        this.setFlag("--upn", value);
        return this;
    };
    return az_keyvault_delete_policy_command_builder;
}(base_1.CommandBuilder));
/**
 * List Vaults and/or HSMs.
 *
 * Syntax:
 * ```
 * az keyvault list [--query-examples]
 *                  [--resource-group]
 *                  [--resource-type]
 *                  [--subscription]
 * ```
 */
var az_keyvault_list_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_list_command_builder, _super);
    function az_keyvault_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_keyvault_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** When --resource-type is not present the command will list all Vaults and HSMs. Possible values for --resource-type are vault and hsm. */
    az_keyvault_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get information about the deleted Vaults or HSMs in a subscription.
 *
 * Syntax:
 * ```
 * az keyvault list-deleted [--resource-type]
 *                          [--subscription]
 * ```
 */
var az_keyvault_list_deleted_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_list_deleted_command_builder, _super);
    function az_keyvault_list_deleted_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** When --resource-type is not present the command will list all deleted Vaults and HSMs. Possible values for --resource-type are vault and hsm. */
    az_keyvault_list_deleted_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_list_deleted_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_list_deleted_command_builder;
}(base_1.CommandBuilder));
/**
 * Permanently delete the specified Vault or HSM. Aka Purges the deleted Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault purge [--hsm-name]
 *                   [--location]
 *                   [--name]
 *                   [--no-wait]
 *                   [--subscription]
 * ```
 */
var az_keyvault_purge_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_purge_command_builder, _super);
    function az_keyvault_purge_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the deleted HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    az_keyvault_purge_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Location of the deleted Vault or HSM. */
    az_keyvault_purge_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the deleted Vault. */
    az_keyvault_purge_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_purge_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_purge_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_purge_command_builder;
}(base_1.CommandBuilder));
/**
 * Recover a Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault recover [--hsm-name]
 *                     [--location]
 *                     [--name]
 *                     [--no-wait]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_keyvault_recover_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_recover_command_builder, _super);
    function az_keyvault_recover_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the deleted HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    az_keyvault_recover_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Location of the deleted Vault or HSM. */
    az_keyvault_recover_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the deleted Vault. */
    az_keyvault_recover_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_recover_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Resource group of the deleted Vault or HSM. */
    az_keyvault_recover_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_recover_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_recover_command_builder;
}(base_1.CommandBuilder));
/**
 * Update security policy settings for a Key Vault.
 *
 * Syntax:
 * ```
 * az keyvault set-policy --name
 *                        [--certificate-permissions {backup, create, delete, deleteissuers, get, getissuers, import, list, listissuers, managecontacts, manageissuers, purge, recover, restore, setissuers, update}]
 *                        [--key-permissions {backup, create, decrypt, delete, encrypt, get, import, list, purge, recover, restore, sign, unwrapKey, update, verify, wrapKey}]
 *                        [--no-wait]
 *                        [--object-id]
 *                        [--resource-group]
 *                        [--secret-permissions {backup, delete, get, list, purge, recover, restore, set}]
 *                        [--spn]
 *                        [--storage-permissions {backup, delete, deletesas, get, getsas, list, listsas, purge, recover, regeneratekey, restore, set, setsas, update}]
 *                        [--subscription]
 *                        [--upn]
 * ```
 *
 * @param {string} name Name of the Vault.
 */
var az_keyvault_set_policy_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_set_policy_command_builder, _super);
    function az_keyvault_set_policy_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_set_policy_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Space-separated list of certificate permissions to assign. */
    az_keyvault_set_policy_command_builder.prototype.certificatePermissions = function (value) {
        this.setFlag("--certificate-permissions", value);
        return this;
    };
    /** Space-separated list of key permissions to assign. */
    az_keyvault_set_policy_command_builder.prototype.keyPermissions = function (value) {
        this.setFlag("--key-permissions", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_set_policy_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** A GUID that identifies the principal that will receive permissions. */
    az_keyvault_set_policy_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_set_policy_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of secret permissions to assign. */
    az_keyvault_set_policy_command_builder.prototype.secretPermissions = function (value) {
        this.setFlag("--secret-permissions", value);
        return this;
    };
    /** Name of a service principal that will receive permissions. */
    az_keyvault_set_policy_command_builder.prototype.spn = function (value) {
        this.setFlag("--spn", value);
        return this;
    };
    /** Space-separated list of storage permissions to assign. */
    az_keyvault_set_policy_command_builder.prototype.storagePermissions = function (value) {
        this.setFlag("--storage-permissions", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_set_policy_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of a user principal that will receive permissions. */
    az_keyvault_set_policy_command_builder.prototype.upn = function (value) {
        this.setFlag("--upn", value);
        return this;
    };
    return az_keyvault_set_policy_command_builder;
}(base_1.CommandBuilder));
/**
 * Show details of a Vault or HSM.
 *
 * Syntax:
 * ```
 * az keyvault show [--hsm-name]
 *                  [--name]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
var az_keyvault_show_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_show_command_builder, _super);
    function az_keyvault_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    az_keyvault_show_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Name of the Vault. */
    az_keyvault_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_keyvault_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the properties of a Vault.
 *
 * Syntax:
 * ```
 * az keyvault update --name
 *                    [--add]
 *                    [--bypass {AzureServices, None}]
 *                    [--default-action {Allow, Deny}]
 *                    [--enable-purge-protection {false, true}]
 *                    [--enable-rbac-authorization {false, true}]
 *                    [--enable-soft-delete {false, true}]
 *                    [--enabled-for-deployment {false, true}]
 *                    [--enabled-for-disk-encryption {false, true}]
 *                    [--enabled-for-template-deployment {false, true}]
 *                    [--force-string]
 *                    [--no-wait]
 *                    [--remove]
 *                    [--resource-group]
 *                    [--retention-days]
 *                    [--set]
 *                    [--subscription]
 * ```
 *
 * @param {string} name Name of the Vault.
 */
var az_keyvault_update_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_update_command_builder, _super);
    function az_keyvault_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_keyvault_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Bypass traffic for space-separated uses. */
    az_keyvault_update_command_builder.prototype.bypass = function (value) {
        this.setFlag("--bypass", value);
        return this;
    };
    /** Default action to apply when no rule matches. */
    az_keyvault_update_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value. */
    az_keyvault_update_command_builder.prototype.enablePurgeProtection = function (value) {
        this.setFlag("--enable-purge-protection", value.toString());
        return this;
    };
    /** Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC. */
    az_keyvault_update_command_builder.prototype.enableRbacAuthorization = function (value) {
        this.setFlag("--enable-rbac-authorization", value.toString());
        return this;
    };
    /** [Vault Only] Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value (true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false. */
    az_keyvault_update_command_builder.prototype.enableSoftDelete = function (value) {
        this.setFlag("--enable-soft-delete", value.toString());
        return this;
    };
    /** [Vault Only] Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. */
    az_keyvault_update_command_builder.prototype.enabledForDeployment = function (value) {
        this.setFlag("--enabled-for-deployment", value.toString());
        return this;
    };
    /** [Vault Only] Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. */
    az_keyvault_update_command_builder.prototype.enabledForDiskEncryption = function (value) {
        this.setFlag("--enabled-for-disk-encryption", value.toString());
        return this;
    };
    /** [Vault Only] Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. */
    az_keyvault_update_command_builder.prototype.enabledForTemplateDeployment = function (value) {
        this.setFlag("--enabled-for-template-deployment", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_keyvault_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_keyvault_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Soft delete data retention days. It accepts >=7 and <=90. */
    az_keyvault_update_command_builder.prototype.retentionDays = function (value) {
        this.setFlag("--retention-days", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_keyvault_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the properties of a HSM.
 *
 * Syntax:
 * ```
 * az keyvault update-hsm --hsm-name
 *                        [--add]
 *                        [--bypass {AzureServices, None}]
 *                        [--default-action {Allow, Deny}]
 *                        [--enable-purge-protection {false, true}]
 *                        [--force-string]
 *                        [--no-wait]
 *                        [--remove]
 *                        [--resource-group]
 *                        [--secondary-locations]
 *                        [--set]
 *                        [--subscription]
 * ```
 *
 * @param {string} hsmName Name of the HSM.
 */
var az_keyvault_update_hsm_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_update_hsm_command_builder, _super);
    function az_keyvault_update_hsm_command_builder(commandPath, resultDataTypeName, hsmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hsmName(hsmName);
        return _this;
    }
    /** Name of the HSM. */
    az_keyvault_update_hsm_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_keyvault_update_hsm_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Bypass traffic for space-separated uses. */
    az_keyvault_update_hsm_command_builder.prototype.bypass = function (value) {
        this.setFlag("--bypass", value);
        return this;
    };
    /** Default action to apply when no rule matches. */
    az_keyvault_update_hsm_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** Property specifying whether protection against purge is enabled for this managed HSM pool. Setting this property to true activates protection against purge for this managed HSM pool and its content - only the Managed HSM service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible. */
    az_keyvault_update_hsm_command_builder.prototype.enablePurgeProtection = function (value) {
        this.setFlag("--enable-purge-protection", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_keyvault_update_hsm_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_keyvault_update_hsm_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_keyvault_update_hsm_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_update_hsm_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** --secondary-locations extends/contracts an HSM pool to listed regions. The primary location where the resource was originally created CANNOT be removed. */
    az_keyvault_update_hsm_command_builder.prototype.secondaryLocations = function (value) {
        this.setFlag("--secondary-locations", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_keyvault_update_hsm_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_update_hsm_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_keyvault_update_hsm_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the Vault is met.
 *
 * Syntax:
 * ```
 * az keyvault wait --name
 *                  [--created]
 *                  [--custom]
 *                  [--deleted]
 *                  [--exists]
 *                  [--interval]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--timeout]
 *                  [--updated]
 * ```
 *
 * @param {string} name Name of the Vault.
 */
var az_keyvault_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_wait_command_builder, _super);
    function az_keyvault_wait_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the Vault. */
    az_keyvault_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_keyvault_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_keyvault_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_keyvault_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_keyvault_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_keyvault_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Proceed only if Key Vault belongs to the specified resource group. */
    az_keyvault_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_keyvault_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_keyvault_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_keyvault_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the HSM is met.
 *
 * Syntax:
 * ```
 * az keyvault wait-hsm --hsm-name
 *                      [--created]
 *                      [--custom]
 *                      [--deleted]
 *                      [--exists]
 *                      [--interval]
 *                      [--resource-group]
 *                      [--subscription]
 *                      [--timeout]
 *                      [--updated]
 * ```
 *
 * @param {string} hsmName Name of the HSM.
 */
var az_keyvault_wait_hsm_command_builder = /** @class */ (function (_super) {
    __extends(az_keyvault_wait_hsm_command_builder, _super);
    function az_keyvault_wait_hsm_command_builder(commandPath, resultDataTypeName, hsmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hsmName(hsmName);
        return _this;
    }
    /** Name of the HSM. */
    az_keyvault_wait_hsm_command_builder.prototype.hsmName = function (value) {
        this.setFlag("--hsm-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_keyvault_wait_hsm_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_keyvault_wait_hsm_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_keyvault_wait_hsm_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_keyvault_wait_hsm_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_keyvault_wait_hsm_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Proceed only if HSM belongs to the specified resource group. */
    az_keyvault_wait_hsm_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_keyvault_wait_hsm_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_keyvault_wait_hsm_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_keyvault_wait_hsm_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_keyvault_wait_hsm_command_builder;
}(base_1.CommandBuilder));
