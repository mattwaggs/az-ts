import { CommandBuilder, ICommandParent } from '../base';

/** Manage full HSM backup. */
export class az_keyvault_backup implements ICommandParent<any> {
    commandPath = "az keyvault backup";

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
    az_keyvault_backup_start(storageContainerSasToken: string): az_keyvault_backup_start_command_builder {
        return new az_keyvault_backup_start_command_builder(this, storageContainerSasToken);
    }
}

/** Manage contacts for certificate management. */
export class az_keyvault_certificate_contact implements ICommandParent<any> {
    commandPath = "az keyvault certificate contact";

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
    az_keyvault_certificate_contact_add(email: string, vaultName: string): az_keyvault_certificate_contact_add_command_builder {
        return new az_keyvault_certificate_contact_add_command_builder(this, email, vaultName);
    }

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
    az_keyvault_certificate_contact_delete(email: string, vaultName: string): az_keyvault_certificate_contact_delete_command_builder {
        return new az_keyvault_certificate_contact_delete_command_builder(this, email, vaultName);
    }

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
    az_keyvault_certificate_contact_list(vaultName: string): az_keyvault_certificate_contact_list_command_builder {
        return new az_keyvault_certificate_contact_list_command_builder(this, vaultName);
    }
}

/** Manage admin information for certificate issuers. */
export class az_keyvault_certificate_issuer_admin implements ICommandParent<any> {
    commandPath = "az keyvault certificate issuer admin";

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
    az_keyvault_certificate_issuer_admin_add(email: string, issuerName: string, vaultName: string): az_keyvault_certificate_issuer_admin_add_command_builder {
        return new az_keyvault_certificate_issuer_admin_add_command_builder(this, email, issuerName, vaultName);
    }

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
    az_keyvault_certificate_issuer_admin_delete(email: string, issuerName: string, vaultName: string): az_keyvault_certificate_issuer_admin_delete_command_builder {
        return new az_keyvault_certificate_issuer_admin_delete_command_builder(this, email, issuerName, vaultName);
    }

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
    az_keyvault_certificate_issuer_admin_list(issuerName: string, vaultName: string): az_keyvault_certificate_issuer_admin_list_command_builder {
        return new az_keyvault_certificate_issuer_admin_list_command_builder(this, issuerName, vaultName);
    }
}

/** Manage certificate issuer information. */
export class az_keyvault_certificate_issuer implements ICommandParent<any> {
    commandPath = "az keyvault certificate issuer";

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
    az_keyvault_certificate_issuer_create(issuerName: string, providerName: string, vaultName: string): az_keyvault_certificate_issuer_create_command_builder {
        return new az_keyvault_certificate_issuer_create_command_builder(this, issuerName, providerName, vaultName);
    }

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
    az_keyvault_certificate_issuer_delete(issuerName: string, vaultName: string): az_keyvault_certificate_issuer_delete_command_builder {
        return new az_keyvault_certificate_issuer_delete_command_builder(this, issuerName, vaultName);
    }

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
    az_keyvault_certificate_issuer_list(vaultName: string): az_keyvault_certificate_issuer_list_command_builder {
        return new az_keyvault_certificate_issuer_list_command_builder(this, vaultName);
    }

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
    az_keyvault_certificate_issuer_show(issuerName: string, vaultName: string): az_keyvault_certificate_issuer_show_command_builder {
        return new az_keyvault_certificate_issuer_show_command_builder(this, issuerName, vaultName);
    }

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
    az_keyvault_certificate_issuer_update(issuerName: string, vaultName: string): az_keyvault_certificate_issuer_update_command_builder {
        return new az_keyvault_certificate_issuer_update_command_builder(this, issuerName, vaultName);
    }
}

/** Manage pending certificate creation operations. */
export class az_keyvault_certificate_pending implements ICommandParent<any> {
    commandPath = "az keyvault certificate pending";

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
    az_keyvault_certificate_pending_delete(name: string, vaultName: string): az_keyvault_certificate_pending_delete_command_builder {
        return new az_keyvault_certificate_pending_delete_command_builder(this, name, vaultName);
    }

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
    az_keyvault_certificate_pending_merge(file: string, name: string, vaultName: string): az_keyvault_certificate_pending_merge_command_builder {
        return new az_keyvault_certificate_pending_merge_command_builder(this, file, name, vaultName);
    }

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
    az_keyvault_certificate_pending_show(name: string, vaultName: string): az_keyvault_certificate_pending_show_command_builder {
        return new az_keyvault_certificate_pending_show_command_builder(this, name, vaultName);
    }
}

/** Manage certificates. */
export class az_keyvault_certificate implements ICommandParent<any> {
    commandPath = "az keyvault certificate";

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
    az_keyvault_certificate_backup(file: string): az_keyvault_certificate_backup_command_builder {
        return new az_keyvault_certificate_backup_command_builder(this, file);
    }

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
    az_keyvault_certificate_create(name: string, policy: string, vaultName: string): az_keyvault_certificate_create_command_builder {
        return new az_keyvault_certificate_create_command_builder(this, name, policy, vaultName);
    }

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
    az_keyvault_certificate_delete(): az_keyvault_certificate_delete_command_builder {
        return new az_keyvault_certificate_delete_command_builder(this);
    }

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
    az_keyvault_certificate_download(file: string): az_keyvault_certificate_download_command_builder {
        return new az_keyvault_certificate_download_command_builder(this, file);
    }

    /**
     * Get the default policy for self-signed certificates.
     *
     * Syntax:
     * ```
     * az keyvault certificate get-default-policy [--scaffold]
     *                                            [--subscription]
     * ```
     */
    az_keyvault_certificate_get_default_policy(): az_keyvault_certificate_get_default_policy_command_builder {
        return new az_keyvault_certificate_get_default_policy_command_builder(this);
    }

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
    az_keyvault_certificate_import(file: string, name: string, vaultName: string): az_keyvault_certificate_import_command_builder {
        return new az_keyvault_certificate_import_command_builder(this, file, name, vaultName);
    }

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
    az_keyvault_certificate_list(): az_keyvault_certificate_list_command_builder {
        return new az_keyvault_certificate_list_command_builder(this);
    }

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
    az_keyvault_certificate_list_deleted(vaultName: string): az_keyvault_certificate_list_deleted_command_builder {
        return new az_keyvault_certificate_list_deleted_command_builder(this, vaultName);
    }

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
    az_keyvault_certificate_list_versions(): az_keyvault_certificate_list_versions_command_builder {
        return new az_keyvault_certificate_list_versions_command_builder(this);
    }

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
    az_keyvault_certificate_purge(): az_keyvault_certificate_purge_command_builder {
        return new az_keyvault_certificate_purge_command_builder(this);
    }

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
    az_keyvault_certificate_recover(): az_keyvault_certificate_recover_command_builder {
        return new az_keyvault_certificate_recover_command_builder(this);
    }

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
    az_keyvault_certificate_restore(file: string, vaultName: string): az_keyvault_certificate_restore_command_builder {
        return new az_keyvault_certificate_restore_command_builder(this, file, vaultName);
    }

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
    az_keyvault_certificate_set_attributes(): az_keyvault_certificate_set_attributes_command_builder {
        return new az_keyvault_certificate_set_attributes_command_builder(this);
    }

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
    az_keyvault_certificate_show(): az_keyvault_certificate_show_command_builder {
        return new az_keyvault_certificate_show_command_builder(this);
    }

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
    az_keyvault_certificate_show_deleted(): az_keyvault_certificate_show_deleted_command_builder {
        return new az_keyvault_certificate_show_deleted_command_builder(this);
    }
}

/** Manage keys. */
export class az_keyvault_key implements ICommandParent<any> {
    commandPath = "az keyvault key";

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
    az_keyvault_key_backup(file: string): az_keyvault_key_backup_command_builder {
        return new az_keyvault_key_backup_command_builder(this, file);
    }

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
    az_keyvault_key_create(): az_keyvault_key_create_command_builder {
        return new az_keyvault_key_create_command_builder(this);
    }

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
    az_keyvault_key_decrypt(algorithm: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5', value: string): az_keyvault_key_decrypt_command_builder {
        return new az_keyvault_key_decrypt_command_builder(this, algorithm, value);
    }

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
    az_keyvault_key_delete(): az_keyvault_key_delete_command_builder {
        return new az_keyvault_key_delete_command_builder(this);
    }

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
    az_keyvault_key_download(file: string): az_keyvault_key_download_command_builder {
        return new az_keyvault_key_download_command_builder(this, file);
    }

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
    az_keyvault_key_encrypt(algorithm: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5', value: string): az_keyvault_key_encrypt_command_builder {
        return new az_keyvault_key_encrypt_command_builder(this, algorithm, value);
    }

    /**
     * Return policy template as JSON encoded policy definition.
     *
     * Syntax:
     * ```
     * az keyvault key get-policy-template [--subscription]
     * ```
     */
    az_keyvault_key_get_policy_template(): az_keyvault_key_get_policy_template_command_builder {
        return new az_keyvault_key_get_policy_template_command_builder(this);
    }

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
    az_keyvault_key_import(): az_keyvault_key_import_command_builder {
        return new az_keyvault_key_import_command_builder(this);
    }

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
    az_keyvault_key_list(): az_keyvault_key_list_command_builder {
        return new az_keyvault_key_list_command_builder(this);
    }

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
    az_keyvault_key_list_deleted(): az_keyvault_key_list_deleted_command_builder {
        return new az_keyvault_key_list_deleted_command_builder(this);
    }

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
    az_keyvault_key_list_versions(): az_keyvault_key_list_versions_command_builder {
        return new az_keyvault_key_list_versions_command_builder(this);
    }

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
    az_keyvault_key_purge(): az_keyvault_key_purge_command_builder {
        return new az_keyvault_key_purge_command_builder(this);
    }

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
    az_keyvault_key_recover(): az_keyvault_key_recover_command_builder {
        return new az_keyvault_key_recover_command_builder(this);
    }

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
    az_keyvault_key_restore(file: string): az_keyvault_key_restore_command_builder {
        return new az_keyvault_key_restore_command_builder(this, file);
    }

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
    az_keyvault_key_set_attributes(): az_keyvault_key_set_attributes_command_builder {
        return new az_keyvault_key_set_attributes_command_builder(this);
    }

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
    az_keyvault_key_show(): az_keyvault_key_show_command_builder {
        return new az_keyvault_key_show_command_builder(this);
    }

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
    az_keyvault_key_show_deleted(): az_keyvault_key_show_deleted_command_builder {
        return new az_keyvault_key_show_deleted_command_builder(this);
    }
}

/** Manage vault network ACLs. */
export class az_keyvault_network_rule implements ICommandParent<any> {
    commandPath = "az keyvault network-rule";

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
    az_keyvault_network_rule_add(name: string): az_keyvault_network_rule_add_command_builder {
        return new az_keyvault_network_rule_add_command_builder(this, name);
    }

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
    az_keyvault_network_rule_list(name: string): az_keyvault_network_rule_list_command_builder {
        return new az_keyvault_network_rule_list_command_builder(this, name);
    }

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
    az_keyvault_network_rule_remove(name: string): az_keyvault_network_rule_remove_command_builder {
        return new az_keyvault_network_rule_remove_command_builder(this, name);
    }

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
    az_keyvault_network_rule_wait(name: string): az_keyvault_network_rule_wait_command_builder {
        return new az_keyvault_network_rule_wait_command_builder(this, name);
    }
}

/** Manage vault private endpoint connections. */
export class az_keyvault_private_endpoint_connection implements ICommandParent<any> {
    commandPath = "az keyvault private-endpoint-connection";

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
    az_keyvault_private_endpoint_connection_approve(): az_keyvault_private_endpoint_connection_approve_command_builder {
        return new az_keyvault_private_endpoint_connection_approve_command_builder(this);
    }

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
    az_keyvault_private_endpoint_connection_delete(): az_keyvault_private_endpoint_connection_delete_command_builder {
        return new az_keyvault_private_endpoint_connection_delete_command_builder(this);
    }

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
    az_keyvault_private_endpoint_connection_reject(): az_keyvault_private_endpoint_connection_reject_command_builder {
        return new az_keyvault_private_endpoint_connection_reject_command_builder(this);
    }

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
    az_keyvault_private_endpoint_connection_show(): az_keyvault_private_endpoint_connection_show_command_builder {
        return new az_keyvault_private_endpoint_connection_show_command_builder(this);
    }

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
    az_keyvault_private_endpoint_connection_wait(): az_keyvault_private_endpoint_connection_wait_command_builder {
        return new az_keyvault_private_endpoint_connection_wait_command_builder(this);
    }
}

/** Manage vault private link resources. */
export class az_keyvault_private_link_resource implements ICommandParent<any> {
    commandPath = "az keyvault private-link-resource";

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
    az_keyvault_private_link_resource_list(vaultName: string): az_keyvault_private_link_resource_list_command_builder {
        return new az_keyvault_private_link_resource_list_command_builder(this, vaultName);
    }
}

/** Manage full HSM restore. */
export class az_keyvault_restore implements ICommandParent<any> {
    commandPath = "az keyvault restore";

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
    az_keyvault_restore_start(backupFolder: string, storageContainerSasToken: string): az_keyvault_restore_start_command_builder {
        return new az_keyvault_restore_start_command_builder(this, backupFolder, storageContainerSasToken);
    }
}

/** Manage role assignments. */
export class az_keyvault_role_assignment implements ICommandParent<any> {
    commandPath = "az keyvault role assignment";

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
    az_keyvault_role_assignment_create(role: string, scope: string): az_keyvault_role_assignment_create_command_builder {
        return new az_keyvault_role_assignment_create_command_builder(this, role, scope);
    }

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
    az_keyvault_role_assignment_delete(): az_keyvault_role_assignment_delete_command_builder {
        return new az_keyvault_role_assignment_delete_command_builder(this);
    }

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
    az_keyvault_role_assignment_list(): az_keyvault_role_assignment_list_command_builder {
        return new az_keyvault_role_assignment_list_command_builder(this);
    }
}

/** Manage role definitions. */
export class az_keyvault_role_definition implements ICommandParent<any> {
    commandPath = "az keyvault role definition";

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
    az_keyvault_role_definition_list(): az_keyvault_role_definition_list_command_builder {
        return new az_keyvault_role_definition_list_command_builder(this);
    }
}

/** Manage user roles for access control. */
export class az_keyvault_role {
}

/** Manage secrets. */
export class az_keyvault_secret implements ICommandParent<any> {
    commandPath = "az keyvault secret";

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
    az_keyvault_secret_backup(file: string): az_keyvault_secret_backup_command_builder {
        return new az_keyvault_secret_backup_command_builder(this, file);
    }

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
    az_keyvault_secret_delete(): az_keyvault_secret_delete_command_builder {
        return new az_keyvault_secret_delete_command_builder(this);
    }

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
    az_keyvault_secret_download(file: string): az_keyvault_secret_download_command_builder {
        return new az_keyvault_secret_download_command_builder(this, file);
    }

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
    az_keyvault_secret_list(): az_keyvault_secret_list_command_builder {
        return new az_keyvault_secret_list_command_builder(this);
    }

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
    az_keyvault_secret_list_deleted(vaultName: string): az_keyvault_secret_list_deleted_command_builder {
        return new az_keyvault_secret_list_deleted_command_builder(this, vaultName);
    }

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
    az_keyvault_secret_list_versions(): az_keyvault_secret_list_versions_command_builder {
        return new az_keyvault_secret_list_versions_command_builder(this);
    }

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
    az_keyvault_secret_purge(): az_keyvault_secret_purge_command_builder {
        return new az_keyvault_secret_purge_command_builder(this);
    }

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
    az_keyvault_secret_recover(): az_keyvault_secret_recover_command_builder {
        return new az_keyvault_secret_recover_command_builder(this);
    }

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
    az_keyvault_secret_restore(file: string, vaultName: string): az_keyvault_secret_restore_command_builder {
        return new az_keyvault_secret_restore_command_builder(this, file, vaultName);
    }

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
    az_keyvault_secret_set(name: string, vaultName: string): az_keyvault_secret_set_command_builder {
        return new az_keyvault_secret_set_command_builder(this, name, vaultName);
    }

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
    az_keyvault_secret_set_attributes(): az_keyvault_secret_set_attributes_command_builder {
        return new az_keyvault_secret_set_attributes_command_builder(this);
    }

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
    az_keyvault_secret_show(): az_keyvault_secret_show_command_builder {
        return new az_keyvault_secret_show_command_builder(this);
    }

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
    az_keyvault_secret_show_deleted(): az_keyvault_secret_show_deleted_command_builder {
        return new az_keyvault_secret_show_deleted_command_builder(this);
    }
}

/** Manage security domain operations. */
export class az_keyvault_security_domain implements ICommandParent<any> {
    commandPath = "az keyvault security-domain";

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
    az_keyvault_security_domain_download(sdQuorum: string, sdWrappingKeys: string, securityDomainFile: string): az_keyvault_security_domain_download_command_builder {
        return new az_keyvault_security_domain_download_command_builder(this, sdQuorum, sdWrappingKeys, securityDomainFile);
    }

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
    az_keyvault_security_domain_init_recovery(sdExchangeKey: string): az_keyvault_security_domain_init_recovery_command_builder {
        return new az_keyvault_security_domain_init_recovery_command_builder(this, sdExchangeKey);
    }

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
    az_keyvault_security_domain_upload(sdExchangeKey: string, sdFile: string, sdWrappingKeys: string): az_keyvault_security_domain_upload_command_builder {
        return new az_keyvault_security_domain_upload_command_builder(this, sdExchangeKey, sdFile, sdWrappingKeys);
    }

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
    az_keyvault_security_domain_wait(): az_keyvault_security_domain_wait_command_builder {
        return new az_keyvault_security_domain_wait_command_builder(this);
    }
}

/** Manage storage account SAS definitions. */
export class az_keyvault_storage_sas_definition implements ICommandParent<any> {
    commandPath = "az keyvault storage sas-definition";

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
    az_keyvault_storage_sas_definition_create(accountName: string, name: string, sasType: 'account' | 'service', templateUri: string, validityPeriod: string, vaultName: string): az_keyvault_storage_sas_definition_create_command_builder {
        return new az_keyvault_storage_sas_definition_create_command_builder(this, accountName, name, sasType, templateUri, validityPeriod, vaultName);
    }

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
    az_keyvault_storage_sas_definition_delete(): az_keyvault_storage_sas_definition_delete_command_builder {
        return new az_keyvault_storage_sas_definition_delete_command_builder(this);
    }

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
    az_keyvault_storage_sas_definition_list(accountName: string, vaultName: string): az_keyvault_storage_sas_definition_list_command_builder {
        return new az_keyvault_storage_sas_definition_list_command_builder(this, accountName, vaultName);
    }

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
    az_keyvault_storage_sas_definition_list_deleted(accountName: string, vaultName: string): az_keyvault_storage_sas_definition_list_deleted_command_builder {
        return new az_keyvault_storage_sas_definition_list_deleted_command_builder(this, accountName, vaultName);
    }

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
    az_keyvault_storage_sas_definition_recover(accountName: string, name: string, vaultName: string): az_keyvault_storage_sas_definition_recover_command_builder {
        return new az_keyvault_storage_sas_definition_recover_command_builder(this, accountName, name, vaultName);
    }

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
    az_keyvault_storage_sas_definition_show(): az_keyvault_storage_sas_definition_show_command_builder {
        return new az_keyvault_storage_sas_definition_show_command_builder(this);
    }

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
    az_keyvault_storage_sas_definition_show_deleted(accountName: string, name: string, vaultName: string): az_keyvault_storage_sas_definition_show_deleted_command_builder {
        return new az_keyvault_storage_sas_definition_show_deleted_command_builder(this, accountName, name, vaultName);
    }

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
    az_keyvault_storage_sas_definition_update(): az_keyvault_storage_sas_definition_update_command_builder {
        return new az_keyvault_storage_sas_definition_update_command_builder(this);
    }
}

/** Manage storage accounts. */
export class az_keyvault_storage implements ICommandParent<any> {
    commandPath = "az keyvault storage";

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
    az_keyvault_storage_add(activeKeyName: string, name: string, resourceId: string, vaultName: string): az_keyvault_storage_add_command_builder {
        return new az_keyvault_storage_add_command_builder(this, activeKeyName, name, resourceId, vaultName);
    }

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
    az_keyvault_storage_backup(file: string): az_keyvault_storage_backup_command_builder {
        return new az_keyvault_storage_backup_command_builder(this, file);
    }

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
    az_keyvault_storage_list(vaultName: string): az_keyvault_storage_list_command_builder {
        return new az_keyvault_storage_list_command_builder(this, vaultName);
    }

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
    az_keyvault_storage_list_deleted(vaultName: string): az_keyvault_storage_list_deleted_command_builder {
        return new az_keyvault_storage_list_deleted_command_builder(this, vaultName);
    }

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
    az_keyvault_storage_purge(name: string, vaultName: string): az_keyvault_storage_purge_command_builder {
        return new az_keyvault_storage_purge_command_builder(this, name, vaultName);
    }

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
    az_keyvault_storage_recover(name: string, vaultName: string): az_keyvault_storage_recover_command_builder {
        return new az_keyvault_storage_recover_command_builder(this, name, vaultName);
    }

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
    az_keyvault_storage_regenerate_key(keyName: string): az_keyvault_storage_regenerate_key_command_builder {
        return new az_keyvault_storage_regenerate_key_command_builder(this, keyName);
    }

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
    az_keyvault_storage_remove(): az_keyvault_storage_remove_command_builder {
        return new az_keyvault_storage_remove_command_builder(this);
    }

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
    az_keyvault_storage_restore(file: string, vaultName: string): az_keyvault_storage_restore_command_builder {
        return new az_keyvault_storage_restore_command_builder(this, file, vaultName);
    }

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
    az_keyvault_storage_show(): az_keyvault_storage_show_command_builder {
        return new az_keyvault_storage_show_command_builder(this);
    }

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
    az_keyvault_storage_show_deleted(name: string, vaultName: string): az_keyvault_storage_show_deleted_command_builder {
        return new az_keyvault_storage_show_deleted_command_builder(this, name, vaultName);
    }

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
    az_keyvault_storage_update(): az_keyvault_storage_update_command_builder {
        return new az_keyvault_storage_update_command_builder(this);
    }
}

/** Manage KeyVault keys, secrets, and certificates. */
export class az_keyvault implements ICommandParent<any> {
    commandPath = "az keyvault";

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
    az_keyvault_create(resourceGroup: string): az_keyvault_create_command_builder {
        return new az_keyvault_create_command_builder(this, resourceGroup);
    }

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
    az_keyvault_delete(): az_keyvault_delete_command_builder {
        return new az_keyvault_delete_command_builder(this);
    }

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
    az_keyvault_delete_policy(name: string): az_keyvault_delete_policy_command_builder {
        return new az_keyvault_delete_policy_command_builder(this, name);
    }

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
    az_keyvault_list(): az_keyvault_list_command_builder {
        return new az_keyvault_list_command_builder(this);
    }

    /**
     * Get information about the deleted Vaults or HSMs in a subscription.
     *
     * Syntax:
     * ```
     * az keyvault list-deleted [--resource-type]
     *                          [--subscription]
     * ```
     */
    az_keyvault_list_deleted(): az_keyvault_list_deleted_command_builder {
        return new az_keyvault_list_deleted_command_builder(this);
    }

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
    az_keyvault_purge(): az_keyvault_purge_command_builder {
        return new az_keyvault_purge_command_builder(this);
    }

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
    az_keyvault_recover(): az_keyvault_recover_command_builder {
        return new az_keyvault_recover_command_builder(this);
    }

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
    az_keyvault_set_policy(name: string): az_keyvault_set_policy_command_builder {
        return new az_keyvault_set_policy_command_builder(this, name);
    }

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
    az_keyvault_show(): az_keyvault_show_command_builder {
        return new az_keyvault_show_command_builder(this);
    }

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
    az_keyvault_update(name: string): az_keyvault_update_command_builder {
        return new az_keyvault_update_command_builder(this, name);
    }

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
    az_keyvault_update_hsm(hsmName: string): az_keyvault_update_hsm_command_builder {
        return new az_keyvault_update_hsm_command_builder(this, hsmName);
    }

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
    az_keyvault_wait(name: string): az_keyvault_wait_command_builder {
        return new az_keyvault_wait_command_builder(this, name);
    }

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
    az_keyvault_wait_hsm(hsmName: string): az_keyvault_wait_hsm_command_builder {
        return new az_keyvault_wait_hsm_command_builder(this, hsmName);
    }
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
class az_keyvault_backup_start_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, storageContainerSasToken: string) {
        super(commandParent);
        this.storageContainerSasToken(storageContainerSasToken)
    }

    /** The SAS token pointing to an Azure Blob storage container. */
    storageContainerSasToken(value: string): az_keyvault_backup_start_command_builder {
        this.setFlag("--storage-container-SAS-token", value);
        return this;
    }

    /** Name of Blob Container. */
    blobContainerName(value: string): az_keyvault_backup_start_command_builder {
        this.setFlag("--blob-container-name", value);
        return this;
    }

    /** Name of the HSM. Can be omitted if --id is specified. */
    hsmName(value: string): az_keyvault_backup_start_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the HSM. */
    id(value: string): az_keyvault_backup_start_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of Azure Storage Account. */
    storageAccountName(value: string): az_keyvault_backup_start_command_builder {
        this.setFlag("--storage-account-name", value);
        return this;
    }

    /** Azure Blob storage container Uri. If specified all other 'Storage Id' arguments should be omitted. */
    storageResourceUri(value: string): az_keyvault_backup_start_command_builder {
        this.setFlag("--storage-resource-uri", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_backup_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_certificate_contact_add_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, email: string, vaultName: string) {
        super(commandParent);
        this.email(email)
        this.vaultName(vaultName)
    }

    /** Contact e-mail address. Must be unique. */
    email(value: string): az_keyvault_certificate_contact_add_command_builder {
        this.setFlag("--email", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_contact_add_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Full contact name. */
    name(value: string): az_keyvault_certificate_contact_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Contact phone number. */
    phone(value: string): az_keyvault_certificate_contact_add_command_builder {
        this.setFlag("--phone", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_contact_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_contact_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, email: string, vaultName: string) {
        super(commandParent);
        this.email(email)
        this.vaultName(vaultName)
    }

    /** Contact e-mail address. Must be unique. */
    email(value: string): az_keyvault_certificate_contact_delete_command_builder {
        this.setFlag("--email", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_contact_delete_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_contact_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_contact_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vaultName: string) {
        super(commandParent);
        this.vaultName(vaultName)
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_contact_list_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_certificate_contact_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_contact_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_certificate_issuer_admin_add_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, email: string, issuerName: string, vaultName: string) {
        super(commandParent);
        this.email(email)
        this.issuerName(issuerName)
        this.vaultName(vaultName)
    }

    /** Admin e-mail address. Must be unique within the vault. */
    email(value: string): az_keyvault_certificate_issuer_admin_add_command_builder {
        this.setFlag("--email", value);
        return this;
    }

    /** Certificate issuer name. */
    issuerName(value: string): az_keyvault_certificate_issuer_admin_add_command_builder {
        this.setFlag("--issuer-name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_issuer_admin_add_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Admin first name. */
    firstName(value: string): az_keyvault_certificate_issuer_admin_add_command_builder {
        this.setFlag("--first-name", value);
        return this;
    }

    /** Admin last name. */
    lastName(value: string): az_keyvault_certificate_issuer_admin_add_command_builder {
        this.setFlag("--last-name", value);
        return this;
    }

    /** Admin phone number. */
    phone(value: string): az_keyvault_certificate_issuer_admin_add_command_builder {
        this.setFlag("--phone", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_issuer_admin_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_issuer_admin_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, email: string, issuerName: string, vaultName: string) {
        super(commandParent);
        this.email(email)
        this.issuerName(issuerName)
        this.vaultName(vaultName)
    }

    /** Admin e-mail address. Must be unique within the vault. */
    email(value: string): az_keyvault_certificate_issuer_admin_delete_command_builder {
        this.setFlag("--email", value);
        return this;
    }

    /** Certificate issuer name. */
    issuerName(value: string): az_keyvault_certificate_issuer_admin_delete_command_builder {
        this.setFlag("--issuer-name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_issuer_admin_delete_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_issuer_admin_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_issuer_admin_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, issuerName: string, vaultName: string) {
        super(commandParent);
        this.issuerName(issuerName)
        this.vaultName(vaultName)
    }

    /** Certificate issuer name. */
    issuerName(value: string): az_keyvault_certificate_issuer_admin_list_command_builder {
        this.setFlag("--issuer-name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_issuer_admin_list_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_certificate_issuer_admin_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_issuer_admin_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_certificate_issuer_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, issuerName: string, providerName: string, vaultName: string) {
        super(commandParent);
        this.issuerName(issuerName)
        this.providerName(providerName)
        this.vaultName(vaultName)
    }

    /** Certificate issuer name. */
    issuerName(value: string): az_keyvault_certificate_issuer_create_command_builder {
        this.setFlag("--issuer-name", value);
        return this;
    }

    /** The certificate provider name. Must be registered with your tenant ID and in your region. */
    providerName(value: string): az_keyvault_certificate_issuer_create_command_builder {
        this.setFlag("--provider-name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_issuer_create_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The issuer account id/username/etc. */
    accountId(value: string): az_keyvault_certificate_issuer_create_command_builder {
        this.setFlag("--account-id", value);
        return this;
    }

    /** Set issuer to disabled state. */
    disabled(value: boolean): az_keyvault_certificate_issuer_create_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** The organization id. */
    organizationId(value: string): az_keyvault_certificate_issuer_create_command_builder {
        this.setFlag("--organization-id", value);
        return this;
    }

    /** The issuer account password/secret/etc. */
    password(value: string): az_keyvault_certificate_issuer_create_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_issuer_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_issuer_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, issuerName: string, vaultName: string) {
        super(commandParent);
        this.issuerName(issuerName)
        this.vaultName(vaultName)
    }

    /** Certificate issuer name. */
    issuerName(value: string): az_keyvault_certificate_issuer_delete_command_builder {
        this.setFlag("--issuer-name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_issuer_delete_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_issuer_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_issuer_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vaultName: string) {
        super(commandParent);
        this.vaultName(vaultName)
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_issuer_list_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_certificate_issuer_list_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_certificate_issuer_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_issuer_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_issuer_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, issuerName: string, vaultName: string) {
        super(commandParent);
        this.issuerName(issuerName)
        this.vaultName(vaultName)
    }

    /** Certificate issuer name. */
    issuerName(value: string): az_keyvault_certificate_issuer_show_command_builder {
        this.setFlag("--issuer-name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_issuer_show_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_certificate_issuer_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_issuer_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_issuer_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, issuerName: string, vaultName: string) {
        super(commandParent);
        this.issuerName(issuerName)
        this.vaultName(vaultName)
    }

    /** Certificate issuer name. */
    issuerName(value: string): az_keyvault_certificate_issuer_update_command_builder {
        this.setFlag("--issuer-name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_issuer_update_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The issuer account id/username/etc. */
    accountId(value: string): az_keyvault_certificate_issuer_update_command_builder {
        this.setFlag("--account-id", value);
        return this;
    }

    /** Set issuer enabled state. */
    enabled(value: boolean): az_keyvault_certificate_issuer_update_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** The organization id. */
    organizationId(value: string): az_keyvault_certificate_issuer_update_command_builder {
        this.setFlag("--organization-id", value);
        return this;
    }

    /** The issuer account password/secret/etc. */
    password(value: string): az_keyvault_certificate_issuer_update_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** The certificate provider name. Must be registered with your tenant ID and in your region. */
    providerName(value: string): az_keyvault_certificate_issuer_update_command_builder {
        this.setFlag("--provider-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_issuer_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_certificate_pending_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, vaultName: string) {
        super(commandParent);
        this.name(name)
        this.vaultName(vaultName)
    }

    /** Name of the pending certificate. */
    name(value: string): az_keyvault_certificate_pending_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_pending_delete_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_pending_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_pending_merge_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string, name: string, vaultName: string) {
        super(commandParent);
        this.file(file)
        this.name(name)
        this.vaultName(vaultName)
    }

    /** File containing the certificate or certificate chain to merge. */
    file(value: string): az_keyvault_certificate_pending_merge_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Name of the pending certificate. */
    name(value: string): az_keyvault_certificate_pending_merge_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_pending_merge_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Create certificate in disabled state. */
    disabled(value: boolean): az_keyvault_certificate_pending_merge_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    expires(value: string): az_keyvault_certificate_pending_merge_command_builder {
        this.setFlag("--expires", value);
        return this;
    }

    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    notBefore(value: string): az_keyvault_certificate_pending_merge_command_builder {
        this.setFlag("--not-before", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_pending_merge_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_certificate_pending_merge_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_keyvault_certificate_pending_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, vaultName: string) {
        super(commandParent);
        this.name(name)
        this.vaultName(vaultName)
    }

    /** Name of the pending certificate. */
    name(value: string): az_keyvault_certificate_pending_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_pending_show_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_certificate_pending_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_pending_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_certificate_backup_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string) {
        super(commandParent);
        this.file(file)
    }

    /** Local file path in which to store certificate backup. */
    file(value: string): az_keyvault_certificate_backup_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_backup_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the certificate. Required if --id is not specified. */
    name(value: string): az_keyvault_certificate_backup_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_backup_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_backup_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_certificate_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, policy: string, vaultName: string) {
        super(commandParent);
        this.name(name)
        this.policy(policy)
        this.vaultName(vaultName)
    }

    /** Name of the certificate. */
    name(value: string): az_keyvault_certificate_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json). */
    policy(value: string): az_keyvault_certificate_create_command_builder {
        this.setFlag("--policy", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_create_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Create certificate in disabled state. */
    disabled(value: boolean): az_keyvault_certificate_create_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_certificate_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Number of months the certificate is valid for. Overrides the value specified with --policy/-p. */
    validity(value: string): az_keyvault_certificate_create_command_builder {
        this.setFlag("--validity", value);
        return this;
    }
}

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
class az_keyvault_certificate_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the certificate. Required if --id is not specified. */
    name(value: string): az_keyvault_certificate_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_delete_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_certificate_download_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string) {
        super(commandParent);
        this.file(file)
    }

    /** File to receive the binary certificate contents. */
    file(value: string): az_keyvault_certificate_download_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Encoding of the certificate. DER will create a binary DER formatted x509 certificate, and PEM will create a base64 PEM x509 certificate. */
    encoding(value: 'DER' | 'PEM'): az_keyvault_certificate_download_command_builder {
        this.setFlag("--encoding", value);
        return this;
    }

    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_download_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the certificate. Required if --id is not specified. */
    name(value: string): az_keyvault_certificate_download_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_download_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_download_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The certificate version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_certificate_download_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

/**
 * Get the default policy for self-signed certificates.
 *
 * Syntax:
 * ```
 * az keyvault certificate get-default-policy [--scaffold]
 *                                            [--subscription]
 * ```
 */
class az_keyvault_certificate_get_default_policy_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Create a fully formed policy structure with default values. */
    scaffold(value: string): az_keyvault_certificate_get_default_policy_command_builder {
        this.setFlag("--scaffold", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_get_default_policy_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_import_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string, name: string, vaultName: string) {
        super(commandParent);
        this.file(file)
        this.name(name)
        this.vaultName(vaultName)
    }

    /** PKCS12 file or PEM file containing the certificate and private key. */
    file(value: string): az_keyvault_certificate_import_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Name of the certificate. */
    name(value: string): az_keyvault_certificate_import_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_import_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Import the certificate in disabled state. */
    disabled(value: boolean): az_keyvault_certificate_import_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** If the private key in certificate is encrypted, the password used for encryption. */
    password(value: string): az_keyvault_certificate_import_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json). */
    policy(value: string): az_keyvault_certificate_import_command_builder {
        this.setFlag("--policy", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_import_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_certificate_import_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_keyvault_certificate_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Specifies whether to include certificates which are not completely provisioned. */
    includePending(value: boolean): az_keyvault_certificate_list_command_builder {
        this.setFlag("--include-pending", value.toString());
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_certificate_list_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_certificate_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_list_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_certificate_list_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vaultName: string) {
        super(commandParent);
        this.vaultName(vaultName)
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_list_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Id of the Vault. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_list_deleted_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Specifies whether to include certificates which are not completely provisioned. */
    includePending(value: boolean): az_keyvault_certificate_list_deleted_command_builder {
        this.setFlag("--include-pending", value.toString());
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_certificate_list_deleted_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_list_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_list_versions_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_list_versions_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_certificate_list_versions_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Name of the certificate. Required if --id is not specified. */
    name(value: string): az_keyvault_certificate_list_versions_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_list_versions_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_list_versions_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_certificate_purge_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The recovery id of the certificate. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_purge_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the certificate. Required if --id is not specified. */
    name(value: string): az_keyvault_certificate_purge_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_purge_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_purge_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_certificate_recover_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The recovery id of the certificate. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_recover_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the certificate. Required if --id is not specified. */
    name(value: string): az_keyvault_certificate_recover_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_recover_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_recover_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_certificate_restore_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string, vaultName: string) {
        super(commandParent);
        this.file(file)
        this.vaultName(vaultName)
    }

    /** Local certificate backup from which to restore certificate. */
    file(value: string): az_keyvault_certificate_restore_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_certificate_restore_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_certificate_set_attributes_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Enable the certificate. */
    enabled(value: boolean): az_keyvault_certificate_set_attributes_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_set_attributes_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the certificate. Required if --id is not specified. */
    name(value: string): az_keyvault_certificate_set_attributes_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** JSON encoded policy definition. Use @{file} to load from a file(e.g. @my_policy.json). */
    policy(value: string): az_keyvault_certificate_set_attributes_command_builder {
        this.setFlag("--policy", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_set_attributes_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_certificate_set_attributes_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_set_attributes_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The certificate version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_certificate_set_attributes_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_keyvault_certificate_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the certificate. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the certificate. Required if --id is not specified. */
    name(value: string): az_keyvault_certificate_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_certificate_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_show_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The certificate version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_certificate_show_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_keyvault_certificate_show_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The recovery id of the certificate. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_certificate_show_deleted_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the certificate. Required if --id is not specified. */
    name(value: string): az_keyvault_certificate_show_deleted_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_certificate_show_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_certificate_show_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
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
class az_keyvault_key_backup_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string) {
        super(commandParent);
        this.file(file)
    }

    /** Local file path in which to store key backup. */
    file(value: string): az_keyvault_key_backup_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_backup_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_backup_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_backup_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_backup_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_backup_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Elliptic curve name. For valid values, see: <a href="https://docs.microsoft.com/en-us/rest/api/keyvault/createkey/createkey#jsonwebkeycurvename">https://docs.microsoft.com/en-us/rest/api/keyvault/createkey/createkey#jsonwebkeycurvename</a>. */
    curve(value: 'P-256' | 'P-256K' | 'P-384' | 'P-521'): az_keyvault_key_create_command_builder {
        this.setFlag("--curve", value);
        return this;
    }

    /** Create key in disabled state. */
    disabled(value: boolean): az_keyvault_key_create_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    expires(value: string): az_keyvault_key_create_command_builder {
        this.setFlag("--expires", value);
        return this;
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_create_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_create_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** The type of key to create. For valid values, see: <a href="https://docs.microsoft.com/en-us/rest/api/keyvault/createkey/createkey#jsonwebkeytype">https://docs.microsoft.com/en-us/rest/api/keyvault/createkey/createkey#jsonwebkeytype</a>. */
    kty(value: 'EC' | 'EC-HSM' | 'RSA' | 'RSA-HSM' | 'oct' | 'oct-HSM'): az_keyvault_key_create_command_builder {
        this.setFlag("--kty", value);
        return this;
    }

    /** Name of the key. */
    name(value: string): az_keyvault_key_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    notBefore(value: string): az_keyvault_key_create_command_builder {
        this.setFlag("--not-before", value);
        return this;
    }

    /** Space-separated list of permitted JSON web key operations. */
    ops(value: 'decrypt' | 'encrypt' | 'export' | 'import' | 'sign' | 'unwrapKey' | 'verify' | 'wrapKey'): az_keyvault_key_create_command_builder {
        this.setFlag("--ops", value);
        return this;
    }

    /** Specifies the type of key protection. */
    protection(value: 'hsm' | 'software'): az_keyvault_key_create_command_builder {
        this.setFlag("--protection", value);
        return this;
    }

    /** The key size in bits. For example: 2048, 3072, or 4096 for RSA. 128, 192, or 256 for oct. */
    size(value: string): az_keyvault_key_create_command_builder {
        this.setFlag("--size", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_key_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_key_create_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_decrypt_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, algorithm: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5', value: string) {
        super(commandParent);
        this.algorithm(algorithm)
        this.value(value)
    }

    /** Algorithm identifier. */
    algorithm(value: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5'): az_keyvault_key_decrypt_command_builder {
        this.setFlag("--algorithm", value);
        return this;
    }

    /** The value to be decrypted, which should be the result of "az keyvault encrypt". */
    value(value: string): az_keyvault_key_decrypt_command_builder {
        this.setFlag("--value", value);
        return this;
    }

    /** The type of the original data. */
    dataType(value: 'base64' | 'plaintext'): az_keyvault_key_decrypt_command_builder {
        this.setFlag("--data-type", value);
        return this;
    }

    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_decrypt_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_decrypt_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_decrypt_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_decrypt_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The key version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_key_decrypt_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_keyvault_key_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_delete_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_delete_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_download_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string) {
        super(commandParent);
        this.file(file)
    }

    /** File to receive the key contents. */
    file(value: string): az_keyvault_key_download_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Encoding of the key, default: PEM. */
    encoding(value: 'DER' | 'PEM'): az_keyvault_key_download_command_builder {
        this.setFlag("--encoding", value);
        return this;
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_download_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_download_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_download_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_download_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_download_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The key version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_key_download_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_keyvault_key_encrypt_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, algorithm: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5', value: string) {
        super(commandParent);
        this.algorithm(algorithm)
        this.value(value)
    }

    /** Algorithm identifier. */
    algorithm(value: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5'): az_keyvault_key_encrypt_command_builder {
        this.setFlag("--algorithm", value);
        return this;
    }

    /** The value to be encrypted. Default data type is Base64 encoded string. */
    value(value: string): az_keyvault_key_encrypt_command_builder {
        this.setFlag("--value", value);
        return this;
    }

    /** The type of the original data. */
    dataType(value: 'base64' | 'plaintext'): az_keyvault_key_encrypt_command_builder {
        this.setFlag("--data-type", value);
        return this;
    }

    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_encrypt_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_encrypt_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_encrypt_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_encrypt_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The key version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_key_encrypt_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

/**
 * Return policy template as JSON encoded policy definition.
 *
 * Syntax:
 * ```
 * az keyvault key get-policy-template [--subscription]
 * ```
 */
class az_keyvault_key_get_policy_template_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_get_policy_template_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_key_import_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** BYOK file containing the key to be imported. Must not be password protected. */
    byokFile(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--byok-file", value);
        return this;
    }

    /** BYOK string containing the key to be imported. Must not be password protected. */
    byokString(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--byok-string", value);
        return this;
    }

    /** Create key in disabled state. */
    disabled(value: boolean): az_keyvault_key_import_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    expires(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--expires", value);
        return this;
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. */
    name(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    notBefore(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--not-before", value);
        return this;
    }

    /** Space-separated list of permitted JSON web key operations. */
    ops(value: 'decrypt' | 'encrypt' | 'export' | 'import' | 'sign' | 'unwrapKey' | 'verify' | 'wrapKey'): az_keyvault_key_import_command_builder {
        this.setFlag("--ops", value);
        return this;
    }

    /** PEM file containing the key to be imported. */
    pemFile(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--pem-file", value);
        return this;
    }

    /** Password of PEM file. */
    pemPassword(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--pem-password", value);
        return this;
    }

    /** PEM string containing the key to be imported. */
    pemString(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--pem-string", value);
        return this;
    }

    /** Specifies the type of key protection. */
    protection(value: 'hsm' | 'software'): az_keyvault_key_import_command_builder {
        this.setFlag("--protection", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_key_import_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_list_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_key_list_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_key_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_key_list_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_list_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_list_deleted_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_list_deleted_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_key_list_deleted_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_list_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_key_list_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_list_versions_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_list_versions_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_list_versions_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_key_list_versions_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_list_versions_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_list_versions_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_list_versions_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_purge_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_purge_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** The recovery id of the key. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_purge_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_purge_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_purge_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_purge_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_recover_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_recover_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** The recovery id of the key. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_recover_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_recover_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_recover_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_recover_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_restore_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string) {
        super(commandParent);
        this.file(file)
    }

    /** Local key backup from which to restore key. */
    file(value: string): az_keyvault_key_restore_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_restore_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_restore_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_key_restore_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_key_set_attributes_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Enable the key. */
    enabled(value: boolean): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    expires(value: string): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--expires", value);
        return this;
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    notBefore(value: string): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--not-before", value);
        return this;
    }

    /** Space-separated list of permitted JSON web key operations. */
    ops(value: 'decrypt' | 'encrypt' | 'export' | 'import' | 'sign' | 'unwrapKey' | 'verify' | 'wrapKey'): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--ops", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The key version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_key_set_attributes_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_keyvault_key_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_show_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the key. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_key_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_show_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The key version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_key_show_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_keyvault_key_show_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --vault-name are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_key_show_deleted_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** The recovery id of the key. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_key_show_deleted_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the key. Required if --id is not specified. */
    name(value: string): az_keyvault_key_show_deleted_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_key_show_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_key_show_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
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
class az_keyvault_network_rule_add_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_network_rule_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** IPv4 address or CIDR range. */
    ipAddress(value: string): az_keyvault_network_rule_add_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_network_rule_add_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_network_rule_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_keyvault_network_rule_add_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_network_rule_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of a virtual network. */
    vnetName(value: string): az_keyvault_network_rule_add_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

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
class az_keyvault_network_rule_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_network_rule_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_network_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_network_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_network_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_network_rule_remove_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_network_rule_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** IPv4 address or CIDR range. */
    ipAddress(value: string): az_keyvault_network_rule_remove_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_network_rule_remove_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_network_rule_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_keyvault_network_rule_remove_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_network_rule_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of a virtual network. */
    vnetName(value: string): az_keyvault_network_rule_remove_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

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
class az_keyvault_network_rule_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_keyvault_network_rule_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_keyvault_private_endpoint_connection_approve_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Comments for the approve operation. */
    description(value: string): az_keyvault_private_endpoint_connection_approve_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    id(value: string): az_keyvault_private_endpoint_connection_approve_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    name(value: string): az_keyvault_private_endpoint_connection_approve_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_private_endpoint_connection_approve_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_private_endpoint_connection_approve_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_private_endpoint_connection_approve_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_private_endpoint_connection_approve_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_private_endpoint_connection_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    id(value: string): az_keyvault_private_endpoint_connection_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    name(value: string): az_keyvault_private_endpoint_connection_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_private_endpoint_connection_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_private_endpoint_connection_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_private_endpoint_connection_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_private_endpoint_connection_delete_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_private_endpoint_connection_reject_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Comments for the reject operation. */
    description(value: string): az_keyvault_private_endpoint_connection_reject_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    id(value: string): az_keyvault_private_endpoint_connection_reject_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    name(value: string): az_keyvault_private_endpoint_connection_reject_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_private_endpoint_connection_reject_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_private_endpoint_connection_reject_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_private_endpoint_connection_reject_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_private_endpoint_connection_reject_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_private_endpoint_connection_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    id(value: string): az_keyvault_private_endpoint_connection_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    name(value: string): az_keyvault_private_endpoint_connection_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_private_endpoint_connection_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_private_endpoint_connection_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_private_endpoint_connection_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_private_endpoint_connection_show_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_private_endpoint_connection_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** The ID of the private endpoint connection associated with the Key Vault. If specified --vault-name and --name/-n, this should be omitted. */
    id(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** The name of the private endpoint connection associated with the Key Vault. Required if --id is not specified. */
    name(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_private_endpoint_connection_wait_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
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
class az_keyvault_private_link_resource_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vaultName: string) {
        super(commandParent);
        this.vaultName(vaultName)
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_private_link_resource_list_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_private_link_resource_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_private_link_resource_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_private_link_resource_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_restore_start_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, backupFolder: string, storageContainerSasToken: string) {
        super(commandParent);
        this.backupFolder(backupFolder)
        this.storageContainerSasToken(storageContainerSasToken)
    }

    /** Name of the blob container which contains the backup. */
    backupFolder(value: string): az_keyvault_restore_start_command_builder {
        this.setFlag("--backup-folder", value);
        return this;
    }

    /** The SAS token pointing to an Azure Blob storage container. */
    storageContainerSasToken(value: string): az_keyvault_restore_start_command_builder {
        this.setFlag("--storage-container-SAS-token", value);
        return this;
    }

    /** Name of Blob Container. */
    blobContainerName(value: string): az_keyvault_restore_start_command_builder {
        this.setFlag("--blob-container-name", value);
        return this;
    }

    /** Name of the HSM. Can be omitted if --id is specified. */
    hsmName(value: string): az_keyvault_restore_start_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the HSM. */
    id(value: string): az_keyvault_restore_start_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of Azure Storage Account. */
    storageAccountName(value: string): az_keyvault_restore_start_command_builder {
        this.setFlag("--storage-account-name", value);
        return this;
    }

    /** Azure Blob storage container Uri. If specified all other 'Storage Id' arguments should be omitted. */
    storageResourceUri(value: string): az_keyvault_restore_start_command_builder {
        this.setFlag("--storage-resource-uri", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_restore_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_role_assignment_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, role: string, scope: string) {
        super(commandParent);
        this.role(role)
        this.scope(scope)
    }

    /** Role name or id. */
    role(value: string): az_keyvault_role_assignment_create_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}". */
    scope(value: string): az_keyvault_role_assignment_create_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_keyvault_role_assignment_create_command_builder {
        this.setFlag("--assignee", value);
        return this;
    }

    /** Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id. */
    assigneeObjectId(value: string): az_keyvault_role_assignment_create_command_builder {
        this.setFlag("--assignee-object-id", value);
        return this;
    }

    /** The principal type of assignee. */
    assigneePrincipalType(value: 'Application' | 'DirectoryObjectOrGroup' | 'DirectoryRoleTemplate' | 'Everyone' | 'ForeignGroup' | 'Group' | 'MSI' | 'ServicePrincipal' | 'Unknown' | 'User'): az_keyvault_role_assignment_create_command_builder {
        this.setFlag("--assignee-principal-type", value);
        return this;
    }

    /** Name of the HSM. */
    hsmName(value: string): az_keyvault_role_assignment_create_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_role_assignment_create_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the role assignment. */
    name(value: string): az_keyvault_role_assignment_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_role_assignment_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_role_assignment_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_keyvault_role_assignment_delete_command_builder {
        this.setFlag("--assignee", value);
        return this;
    }

    /** Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id. */
    assigneeObjectId(value: string): az_keyvault_role_assignment_delete_command_builder {
        this.setFlag("--assignee-object-id", value);
        return this;
    }

    /** Name of the HSM. */
    hsmName(value: string): az_keyvault_role_assignment_delete_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_role_assignment_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Space-separated role assignment ids. */
    ids(value: string): az_keyvault_role_assignment_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the role assignment. */
    name(value: string): az_keyvault_role_assignment_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Role name or id. */
    role(value: string): az_keyvault_role_assignment_delete_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}". */
    scope(value: string): az_keyvault_role_assignment_delete_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_role_assignment_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_role_assignment_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name. */
    assignee(value: string): az_keyvault_role_assignment_list_command_builder {
        this.setFlag("--assignee", value);
        return this;
    }

    /** Use this parameter instead of '--assignee' to bypass graph permission issues. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id. */
    assigneeObjectId(value: string): az_keyvault_role_assignment_list_command_builder {
        this.setFlag("--assignee-object-id", value);
        return this;
    }

    /** Name of the HSM. */
    hsmName(value: string): az_keyvault_role_assignment_list_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_role_assignment_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_role_assignment_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Role name or id. */
    role(value: string): az_keyvault_role_assignment_list_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}". */
    scope(value: string): az_keyvault_role_assignment_list_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_role_assignment_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_role_definition_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. */
    hsmName(value: string): az_keyvault_role_definition_list_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_role_definition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Scope at which the role assignment or definition applies to, e.g., "/" or "/keys" or "/keys/{keyname}". */
    scope(value: string): az_keyvault_role_definition_list_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_role_definition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_secret_backup_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string) {
        super(commandParent);
        this.file(file)
    }

    /** File to receive the secret contents. */
    file(value: string): az_keyvault_secret_backup_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_backup_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the secret. Required if --id is not specified. */
    name(value: string): az_keyvault_secret_backup_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_backup_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_backup_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_secret_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the secret. Required if --id is not specified. */
    name(value: string): az_keyvault_secret_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_delete_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_secret_download_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string) {
        super(commandParent);
        this.file(file)
    }

    /** File to receive the secret contents. */
    file(value: string): az_keyvault_secret_download_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Encoding of the secret. By default, will look for the 'file-encoding' tag on the secret. Otherwise will assume 'utf-8'. */
    encoding(value: 'ascii' | 'base64' | 'hex' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_keyvault_secret_download_command_builder {
        this.setFlag("--encoding", value);
        return this;
    }

    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_download_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the secret. Required if --id is not specified. */
    name(value: string): az_keyvault_secret_download_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_download_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_download_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The secret version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_secret_download_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_keyvault_secret_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the Vault or HSM. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_list_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified, the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_secret_list_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_secret_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_list_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_secret_list_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vaultName: string) {
        super(commandParent);
        this.vaultName(vaultName)
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_secret_list_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Id of the Vault. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_list_deleted_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_secret_list_deleted_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_list_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_secret_list_versions_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_list_versions_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified, the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_secret_list_versions_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Name of the secret. Required if --id is not specified. */
    name(value: string): az_keyvault_secret_list_versions_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_list_versions_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_list_versions_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_secret_purge_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The recovery id of the secret. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_purge_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the secret. Required if --id is not specified. */
    name(value: string): az_keyvault_secret_purge_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_purge_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_purge_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_secret_recover_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The recovery id of the secret. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_recover_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the secret. Required if --id is not specified. */
    name(value: string): az_keyvault_secret_recover_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_recover_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_recover_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_secret_restore_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string, vaultName: string) {
        super(commandParent);
        this.file(file)
        this.vaultName(vaultName)
    }

    /** File to receive the secret contents. */
    file(value: string): az_keyvault_secret_restore_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_secret_restore_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_secret_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, vaultName: string) {
        super(commandParent);
        this.name(name)
        this.vaultName(vaultName)
    }

    /** Name of the secret. */
    name(value: string): az_keyvault_secret_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_secret_set_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Description of the secret contents (e.g. password, connection string, etc). */
    description(value: string): az_keyvault_secret_set_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Create secret in disabled state. */
    disabled(value: boolean): az_keyvault_secret_set_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** Source file encoding. The value is saved as a tag (`file-encoding=<val>`) and used during download to automatically encode the resulting file. */
    encoding(value: 'ascii' | 'base64' | 'hex' | 'utf-16be' | 'utf-16le' | 'utf-8'): az_keyvault_secret_set_command_builder {
        this.setFlag("--encoding", value);
        return this;
    }

    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    expires(value: string): az_keyvault_secret_set_command_builder {
        this.setFlag("--expires", value);
        return this;
    }

    /** Source file for secret. Use in conjunction with '--encoding'. */
    file(value: string): az_keyvault_secret_set_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    notBefore(value: string): az_keyvault_secret_set_command_builder {
        this.setFlag("--not-before", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_secret_set_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Plain text secret value. Cannot be used with '--file' or '--encoding'. */
    value(value: string): az_keyvault_secret_set_command_builder {
        this.setFlag("--value", value);
        return this;
    }
}

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
class az_keyvault_secret_set_attributes_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Type of the secret value such as a password. */
    contentType(value: string): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--content-type", value);
        return this;
    }

    /** Enable the secret. */
    enabled(value: boolean): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--enabled", value.toString());
        return this;
    }

    /** Expiration UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    expires(value: string): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--expires", value);
        return this;
    }

    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the secret. Required if --id is not specified. */
    name(value: string): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Key not usable before the provided UTC datetime  (Y-m-d'T'H:M:S'Z'). */
    notBefore(value: string): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--not-before", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The secret version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_secret_set_attributes_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_keyvault_secret_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the secret. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the secret. Required if --id is not specified. */
    name(value: string): az_keyvault_secret_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_secret_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_show_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** The secret version. If omitted, uses the latest version. */
    version(value: string): az_keyvault_secret_show_command_builder {
        this.setFlag("--version", value);
        return this;
    }
}

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
class az_keyvault_secret_show_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The recovery id of the secret. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_secret_show_deleted_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name of the secret. Required if --id is not specified. */
    name(value: string): az_keyvault_secret_show_deleted_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_secret_show_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_secret_show_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
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
class az_keyvault_security_domain_download_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, sdQuorum: string, sdWrappingKeys: string, securityDomainFile: string) {
        super(commandParent);
        this.sdQuorum(sdQuorum)
        this.sdWrappingKeys(sdWrappingKeys)
        this.securityDomainFile(securityDomainFile)
    }

    /** The minimum number of shares required to decrypt the security domain for recovery. */
    sdQuorum(value: string): az_keyvault_security_domain_download_command_builder {
        this.setFlag("--sd-quorum", value);
        return this;
    }

    /** Space-separated file paths to PEM files containing public keys. */
    sdWrappingKeys(value: string): az_keyvault_security_domain_download_command_builder {
        this.setFlag("--sd-wrapping-keys", value);
        return this;
    }

    /** Path to a file where the JSON blob returned by this command is stored. */
    securityDomainFile(value: string): az_keyvault_security_domain_download_command_builder {
        this.setFlag("--security-domain-file", value);
        return this;
    }

    /** Name of the HSM. Can be omitted if --id is specified. */
    hsmName(value: string): az_keyvault_security_domain_download_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the HSM. */
    id(value: string): az_keyvault_security_domain_download_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_security_domain_download_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_security_domain_init_recovery_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, sdExchangeKey: string) {
        super(commandParent);
        this.sdExchangeKey(sdExchangeKey)
    }

    /** Local file path to store the exported key. */
    sdExchangeKey(value: string): az_keyvault_security_domain_init_recovery_command_builder {
        this.setFlag("--sd-exchange-key", value);
        return this;
    }

    /** Name of the HSM. Can be omitted if --id is specified. */
    hsmName(value: string): az_keyvault_security_domain_init_recovery_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the HSM. */
    id(value: string): az_keyvault_security_domain_init_recovery_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_security_domain_init_recovery_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_security_domain_upload_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, sdExchangeKey: string, sdFile: string, sdWrappingKeys: string) {
        super(commandParent);
        this.sdExchangeKey(sdExchangeKey)
        this.sdFile(sdFile)
        this.sdWrappingKeys(sdWrappingKeys)
    }

    /** The exchange key for security domain. */
    sdExchangeKey(value: string): az_keyvault_security_domain_upload_command_builder {
        this.setFlag("--sd-exchange-key", value);
        return this;
    }

    /** This file contains security domain encrypted using SD Exchange file downloaded in security-domain init-recovery command. */
    sdFile(value: string): az_keyvault_security_domain_upload_command_builder {
        this.setFlag("--sd-file", value);
        return this;
    }

    /** Space-separated file paths to PEM files containing private keys. */
    sdWrappingKeys(value: string): az_keyvault_security_domain_upload_command_builder {
        this.setFlag("--sd-wrapping-keys", value);
        return this;
    }

    /** Name of the HSM. Can be omitted if --id is specified. */
    hsmName(value: string): az_keyvault_security_domain_upload_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the HSM. */
    id(value: string): az_keyvault_security_domain_upload_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_security_domain_upload_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Space-separated password list for --sd-wrapping-keys. CLI will match them in order. Can be omitted if your keys are without password protection. */
    passwords(value: string): az_keyvault_security_domain_upload_command_builder {
        this.setFlag("--passwords", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_security_domain_upload_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_security_domain_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. Can be omitted if --id is specified. */
    hsmName(value: string): az_keyvault_security_domain_wait_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Id of the HSM. */
    id(value: string): az_keyvault_security_domain_wait_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_security_domain_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_keyvault_storage_sas_definition_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, sasType: 'account' | 'service', templateUri: string, validityPeriod: string, vaultName: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.sasType(sasType)
        this.templateUri(templateUri)
        this.validityPeriod(validityPeriod)
        this.vaultName(vaultName)
    }

    /** Name to identify the storage account in the vault. */
    accountName(value: string): az_keyvault_storage_sas_definition_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name to identify the SAS definition in the vault. */
    name(value: string): az_keyvault_storage_sas_definition_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The type of SAS token the SAS definition will create. */
    sasType(value: 'account' | 'service'): az_keyvault_storage_sas_definition_create_command_builder {
        this.setFlag("--sas-type", value);
        return this;
    }

    /** The SAS definition token template signed with the key 00000000. In the case of an account token this is only the sas token itself, for service tokens, the full service endpoint url along with the sas token.  Tokens created according to the SAS definition will have the same properties as the template. */
    templateUri(value: string): az_keyvault_storage_sas_definition_create_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }

    /** The validity period of SAS tokens created according to the SAS definition in ISO-8601, such as "PT12H" for 12 hour tokens. */
    validityPeriod(value: string): az_keyvault_storage_sas_definition_create_command_builder {
        this.setFlag("--validity-period", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_sas_definition_create_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Add the storage account in a disabled state. */
    disabled(value: boolean): az_keyvault_storage_sas_definition_create_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_sas_definition_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_storage_sas_definition_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_keyvault_storage_sas_definition_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    accountName(value: string): az_keyvault_storage_sas_definition_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Id of the SAS definition. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_storage_sas_definition_delete_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name to identify the SAS definition in the vault. Required if --id is not specified. */
    name(value: string): az_keyvault_storage_sas_definition_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_sas_definition_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_storage_sas_definition_delete_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_storage_sas_definition_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, vaultName: string) {
        super(commandParent);
        this.accountName(accountName)
        this.vaultName(vaultName)
    }

    /** Name to identify the storage account in the vault. */
    accountName(value: string): az_keyvault_storage_sas_definition_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_sas_definition_list_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_storage_sas_definition_list_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_storage_sas_definition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_sas_definition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_sas_definition_list_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, vaultName: string) {
        super(commandParent);
        this.accountName(accountName)
        this.vaultName(vaultName)
    }

    /** Name to identify the storage account in the vault. */
    accountName(value: string): az_keyvault_storage_sas_definition_list_deleted_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_sas_definition_list_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_storage_sas_definition_list_deleted_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_sas_definition_list_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_sas_definition_recover_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, vaultName: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.vaultName(vaultName)
    }

    /** Name to identify the storage account in the vault. */
    accountName(value: string): az_keyvault_storage_sas_definition_recover_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name to identify the SAS definition in the vault. */
    name(value: string): az_keyvault_storage_sas_definition_recover_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_sas_definition_recover_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_sas_definition_recover_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_sas_definition_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    accountName(value: string): az_keyvault_storage_sas_definition_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Id of the SAS definition. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_storage_sas_definition_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name to identify the SAS definition in the vault. Required if --id is not specified. */
    name(value: string): az_keyvault_storage_sas_definition_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_storage_sas_definition_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_sas_definition_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_storage_sas_definition_show_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_storage_sas_definition_show_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, accountName: string, name: string, vaultName: string) {
        super(commandParent);
        this.accountName(accountName)
        this.name(name)
        this.vaultName(vaultName)
    }

    /** Name to identify the storage account in the vault. */
    accountName(value: string): az_keyvault_storage_sas_definition_show_deleted_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name to identify the SAS definition in the vault. */
    name(value: string): az_keyvault_storage_sas_definition_show_deleted_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_sas_definition_show_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_sas_definition_show_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_sas_definition_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    accountName(value: string): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add the storage account in a disabled state. */
    disabled(value: boolean): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** Id of the SAS definition. If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name to identify the SAS definition in the vault. Required if --id is not specified. */
    name(value: string): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The type of SAS token the SAS definition will create. */
    sasType(value: 'account' | 'service'): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--sas-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The SAS definition token template signed with the key 00000000. In the case of an account token this is only the sas token itself, for service tokens, the full service endpoint url along with the sas token.  Tokens created according to the SAS definition will have the same properties as the template. */
    templateUri(value: string): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--template-uri", value);
        return this;
    }

    /** The validity period of SAS tokens created according to the SAS definition in ISO-8601, such as "PT12H" for 12 hour tokens. */
    validityPeriod(value: string): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--validity-period", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_storage_sas_definition_update_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
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
class az_keyvault_storage_add_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, activeKeyName: string, name: string, resourceId: string, vaultName: string) {
        super(commandParent);
        this.activeKeyName(activeKeyName)
        this.name(name)
        this.resourceId(resourceId)
        this.vaultName(vaultName)
    }

    /** Current active storage account key name. */
    activeKeyName(value: string): az_keyvault_storage_add_command_builder {
        this.setFlag("--active-key-name", value);
        return this;
    }

    /** Name to identify the storage account in the vault. */
    name(value: string): az_keyvault_storage_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Storage account resource id. */
    resourceId(value: string): az_keyvault_storage_add_command_builder {
        this.setFlag("--resource-id", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_add_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Whether keyvault should manage the storage account for the user. */
    autoRegenerateKey(value: boolean): az_keyvault_storage_add_command_builder {
        this.setFlag("--auto-regenerate-key", value.toString());
        return this;
    }

    /** Add the storage account in a disabled state. */
    disabled(value: boolean): az_keyvault_storage_add_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** The key regeneration time duration specified in ISO-8601 format, such as "P30D" for rotation every 30 days. */
    regenerationPeriod(value: string): az_keyvault_storage_add_command_builder {
        this.setFlag("--regeneration-period", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_storage_add_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_keyvault_storage_backup_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string) {
        super(commandParent);
        this.file(file)
    }

    /** Local file path in which to store storage account backup. */
    file(value: string): az_keyvault_storage_backup_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_storage_backup_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    name(value: string): az_keyvault_storage_backup_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_backup_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_storage_backup_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_storage_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vaultName: string) {
        super(commandParent);
        this.vaultName(vaultName)
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_list_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_storage_list_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_storage_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_list_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, vaultName: string) {
        super(commandParent);
        this.vaultName(vaultName)
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_list_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Maximum number of results to return in a page. If not specified the service will return up to 25 results. */
    maxresults(value: string): az_keyvault_storage_list_deleted_command_builder {
        this.setFlag("--maxresults", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_list_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_purge_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, vaultName: string) {
        super(commandParent);
        this.name(name)
        this.vaultName(vaultName)
    }

    /** Name to identify the storage account in the vault. */
    name(value: string): az_keyvault_storage_purge_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_purge_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_purge_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_recover_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, vaultName: string) {
        super(commandParent);
        this.name(name)
        this.vaultName(vaultName)
    }

    /** Name to identify the storage account in the vault. */
    name(value: string): az_keyvault_storage_recover_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_recover_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_recover_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_regenerate_key_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, keyName: string) {
        super(commandParent);
        this.keyName(keyName)
    }

    /** The storage account key name. */
    keyName(value: string): az_keyvault_storage_regenerate_key_command_builder {
        this.setFlag("--key-name", value);
        return this;
    }

    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_storage_regenerate_key_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    name(value: string): az_keyvault_storage_regenerate_key_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_regenerate_key_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_storage_regenerate_key_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_storage_remove_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_storage_remove_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    name(value: string): az_keyvault_storage_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_storage_remove_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_storage_restore_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, file: string, vaultName: string) {
        super(commandParent);
        this.file(file)
        this.vaultName(vaultName)
    }

    /** Local key backup from which to restore storage account. */
    file(value: string): az_keyvault_storage_restore_command_builder {
        this.setFlag("--file", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_restore_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_restore_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_storage_show_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    name(value: string): az_keyvault_storage_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_storage_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_storage_show_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
}

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
class az_keyvault_storage_show_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, vaultName: string) {
        super(commandParent);
        this.name(name)
        this.vaultName(vaultName)
    }

    /** Name to identify the storage account in the vault. */
    name(value: string): az_keyvault_storage_show_deleted_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of the Vault. */
    vaultName(value: string): az_keyvault_storage_show_deleted_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_show_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_storage_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The current active storage account key name. */
    activeKeyName(value: string): az_keyvault_storage_update_command_builder {
        this.setFlag("--active-key-name", value);
        return this;
    }

    /** Whether keyvault should manage the storage account for the user. */
    autoRegenerateKey(value: boolean): az_keyvault_storage_update_command_builder {
        this.setFlag("--auto-regenerate-key", value.toString());
        return this;
    }

    /** Add the storage account in a disabled state. */
    disabled(value: boolean): az_keyvault_storage_update_command_builder {
        this.setFlag("--disabled", value.toString());
        return this;
    }

    /** Id of the storage account.  If specified all other 'Id' arguments should be omitted. */
    id(value: string): az_keyvault_storage_update_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Name to identify the storage account in the vault. Required if --id is not specified. */
    name(value: string): az_keyvault_storage_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The key regeneration time duration specified in ISO-8601 format, such as "P30D" for rotation every 30 days. */
    regenerationPeriod(value: string): az_keyvault_storage_update_command_builder {
        this.setFlag("--regeneration-period", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_storage_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_storage_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Name of the Key Vault. Required if --id is not specified. */
    vaultName(value: string): az_keyvault_storage_update_command_builder {
        this.setFlag("--vault-name", value);
        return this;
    }
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
class az_keyvault_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_keyvault_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** [HSM Only] Administrator role for data plane operations for Managed HSM. It accepts a space separated list of OIDs that will be assigned. */
    administrators(value: string): az_keyvault_create_command_builder {
        this.setFlag("--administrators", value);
        return this;
    }

    /** Bypass traffic for space-separated uses. */
    bypass(value: 'AzureServices' | 'None'): az_keyvault_create_command_builder {
        this.setFlag("--bypass", value);
        return this;
    }

    /** Default action to apply when no rule matches. */
    defaultAction(value: 'Allow' | 'Deny'): az_keyvault_create_command_builder {
        this.setFlag("--default-action", value);
        return this;
    }

    /** Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value. */
    enablePurgeProtection(value: boolean): az_keyvault_create_command_builder {
        this.setFlag("--enable-purge-protection", value.toString());
        return this;
    }

    /** Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC. */
    enableRbacAuthorization(value: boolean): az_keyvault_create_command_builder {
        this.setFlag("--enable-rbac-authorization", value.toString());
        return this;
    }

    /** [Vault Only] Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value (true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false. */
    enableSoftDelete(value: boolean): az_keyvault_create_command_builder {
        this.setFlag("--enable-soft-delete", value.toString());
        return this;
    }

    /** [Vault Only] Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. */
    enabledForDeployment(value: boolean): az_keyvault_create_command_builder {
        this.setFlag("--enabled-for-deployment", value.toString());
        return this;
    }

    /** [Vault Only] Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. */
    enabledForDiskEncryption(value: boolean): az_keyvault_create_command_builder {
        this.setFlag("--enabled-for-disk-encryption", value.toString());
        return this;
    }

    /** [Vault Only] Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. */
    enabledForTemplateDeployment(value: boolean): az_keyvault_create_command_builder {
        this.setFlag("--enabled-for-template-deployment", value.toString());
        return this;
    }

    /** Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_create_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_keyvault_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Network ACLs. It accepts a JSON filename or a JSON string. JSON format: `{"ip":[<ip1>, <ip2>...],"vnet":[<vnet_name_1>/<subnet_name_1>,<subnet_id2>...]}`. */
    networkAcls(value: string): az_keyvault_create_command_builder {
        this.setFlag("--network-acls", value);
        return this;
    }

    /** Network ACLs IP rules. Space-separated list of IP addresses. */
    networkAclsIps(value: string): az_keyvault_create_command_builder {
        this.setFlag("--network-acls-ips", value);
        return this;
    }

    /** Network ACLS VNet rules. Space-separated list of Vnet/subnet pairs or subnet resource ids. */
    networkAclsVnets(value: string): az_keyvault_create_command_builder {
        this.setFlag("--network-acls-vnets", value);
        return this;
    }

    /** [Vault Only] Don't add permissions for the current user/service principal in the new vault. */
    noSelfPerms(value: boolean): az_keyvault_create_command_builder {
        this.setFlag("--no-self-perms", value.toString());
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Soft delete data retention days. It accepts >=7 and <=90. */
    retentionDays(value: string): az_keyvault_create_command_builder {
        this.setFlag("--retention-days", value);
        return this;
    }

    /** Required. SKU details. Allowed values for Vault: premium, standard. Default: standard. Allowed values for HSM: Standard_B1, Custom_B32. Default: Standard_B1. */
    sku(value: string): az_keyvault_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_keyvault_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_keyvault_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_delete_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_delete_policy_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_delete_policy_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_delete_policy_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** A GUID that identifies the principal that will receive permissions. */
    objectId(value: string): az_keyvault_delete_policy_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_delete_policy_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of a service principal that will receive permissions. */
    spn(value: string): az_keyvault_delete_policy_command_builder {
        this.setFlag("--spn", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_delete_policy_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of a user principal that will receive permissions. */
    upn(value: string): az_keyvault_delete_policy_command_builder {
        this.setFlag("--upn", value);
        return this;
    }
}

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
class az_keyvault_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_keyvault_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** When --resource-type is not present the command will list all Vaults and HSMs. Possible values for --resource-type are vault and hsm. */
    resourceType(value: string): az_keyvault_list_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get information about the deleted Vaults or HSMs in a subscription.
 *
 * Syntax:
 * ```
 * az keyvault list-deleted [--resource-type]
 *                          [--subscription]
 * ```
 */
class az_keyvault_list_deleted_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** When --resource-type is not present the command will list all deleted Vaults and HSMs. Possible values for --resource-type are vault and hsm. */
    resourceType(value: string): az_keyvault_list_deleted_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_list_deleted_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_purge_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the deleted HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_purge_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Location of the deleted Vault or HSM. */
    location(value: string): az_keyvault_purge_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the deleted Vault. */
    name(value: string): az_keyvault_purge_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_purge_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_purge_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_recover_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the deleted HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_recover_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Location of the deleted Vault or HSM. */
    location(value: string): az_keyvault_recover_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of the deleted Vault. */
    name(value: string): az_keyvault_recover_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_recover_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Resource group of the deleted Vault or HSM. */
    resourceGroup(value: string): az_keyvault_recover_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_recover_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_set_policy_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_set_policy_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Space-separated list of certificate permissions to assign. */
    certificatePermissions(value: 'backup' | 'create' | 'delete' | 'deleteissuers' | 'get' | 'getissuers' | 'import' | 'list' | 'listissuers' | 'managecontacts' | 'manageissuers' | 'purge' | 'recover' | 'restore' | 'setissuers' | 'update'): az_keyvault_set_policy_command_builder {
        this.setFlag("--certificate-permissions", value);
        return this;
    }

    /** Space-separated list of key permissions to assign. */
    keyPermissions(value: 'backup' | 'create' | 'decrypt' | 'delete' | 'encrypt' | 'get' | 'import' | 'list' | 'purge' | 'recover' | 'restore' | 'sign' | 'unwrapKey' | 'update' | 'verify' | 'wrapKey'): az_keyvault_set_policy_command_builder {
        this.setFlag("--key-permissions", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_set_policy_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** A GUID that identifies the principal that will receive permissions. */
    objectId(value: string): az_keyvault_set_policy_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_set_policy_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of secret permissions to assign. */
    secretPermissions(value: 'backup' | 'delete' | 'get' | 'list' | 'purge' | 'recover' | 'restore' | 'set'): az_keyvault_set_policy_command_builder {
        this.setFlag("--secret-permissions", value);
        return this;
    }

    /** Name of a service principal that will receive permissions. */
    spn(value: string): az_keyvault_set_policy_command_builder {
        this.setFlag("--spn", value);
        return this;
    }

    /** Space-separated list of storage permissions to assign. */
    storagePermissions(value: 'backup' | 'delete' | 'deletesas' | 'get' | 'getsas' | 'list' | 'listsas' | 'purge' | 'recover' | 'regeneratekey' | 'restore' | 'set' | 'setsas' | 'update'): az_keyvault_set_policy_command_builder {
        this.setFlag("--storage-permissions", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_set_policy_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of a user principal that will receive permissions. */
    upn(value: string): az_keyvault_set_policy_command_builder {
        this.setFlag("--upn", value);
        return this;
    }
}

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
class az_keyvault_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name of the HSM. (--hsm-name and --name/-n are mutually exclusive, please specify just one of them). */
    hsmName(value: string): az_keyvault_show_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_keyvault_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_keyvault_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Bypass traffic for space-separated uses. */
    bypass(value: 'AzureServices' | 'None'): az_keyvault_update_command_builder {
        this.setFlag("--bypass", value);
        return this;
    }

    /** Default action to apply when no rule matches. */
    defaultAction(value: 'Allow' | 'Deny'): az_keyvault_update_command_builder {
        this.setFlag("--default-action", value);
        return this;
    }

    /** Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value. */
    enablePurgeProtection(value: boolean): az_keyvault_update_command_builder {
        this.setFlag("--enable-purge-protection", value.toString());
        return this;
    }

    /** Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC. */
    enableRbacAuthorization(value: boolean): az_keyvault_update_command_builder {
        this.setFlag("--enable-rbac-authorization", value.toString());
        return this;
    }

    /** [Vault Only] Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value (true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false. */
    enableSoftDelete(value: boolean): az_keyvault_update_command_builder {
        this.setFlag("--enable-soft-delete", value.toString());
        return this;
    }

    /** [Vault Only] Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. */
    enabledForDeployment(value: boolean): az_keyvault_update_command_builder {
        this.setFlag("--enabled-for-deployment", value.toString());
        return this;
    }

    /** [Vault Only] Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. */
    enabledForDiskEncryption(value: boolean): az_keyvault_update_command_builder {
        this.setFlag("--enabled-for-disk-encryption", value.toString());
        return this;
    }

    /** [Vault Only] Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. */
    enabledForTemplateDeployment(value: boolean): az_keyvault_update_command_builder {
        this.setFlag("--enabled-for-template-deployment", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_keyvault_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_keyvault_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Soft delete data retention days. It accepts >=7 and <=90. */
    retentionDays(value: string): az_keyvault_update_command_builder {
        this.setFlag("--retention-days", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_keyvault_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_update_hsm_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, hsmName: string) {
        super(commandParent);
        this.hsmName(hsmName)
    }

    /** Name of the HSM. */
    hsmName(value: string): az_keyvault_update_hsm_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_keyvault_update_hsm_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Bypass traffic for space-separated uses. */
    bypass(value: 'AzureServices' | 'None'): az_keyvault_update_hsm_command_builder {
        this.setFlag("--bypass", value);
        return this;
    }

    /** Default action to apply when no rule matches. */
    defaultAction(value: 'Allow' | 'Deny'): az_keyvault_update_hsm_command_builder {
        this.setFlag("--default-action", value);
        return this;
    }

    /** Property specifying whether protection against purge is enabled for this managed HSM pool. Setting this property to true activates protection against purge for this managed HSM pool and its content - only the Managed HSM service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible. */
    enablePurgeProtection(value: boolean): az_keyvault_update_hsm_command_builder {
        this.setFlag("--enable-purge-protection", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_keyvault_update_hsm_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_keyvault_update_hsm_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_keyvault_update_hsm_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_update_hsm_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** --secondary-locations extends/contracts an HSM pool to listed regions. The primary location where the resource was originally created CANNOT be removed. */
    secondaryLocations(value: string): az_keyvault_update_hsm_command_builder {
        this.setFlag("--secondary-locations", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_keyvault_update_hsm_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_update_hsm_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_keyvault_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the Vault. */
    name(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Proceed only if Key Vault belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_keyvault_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}

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
class az_keyvault_wait_hsm_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, hsmName: string) {
        super(commandParent);
        this.hsmName(hsmName)
    }

    /** Name of the HSM. */
    hsmName(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--hsm-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Proceed only if HSM belongs to the specified resource group. */
    resourceGroup(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_keyvault_wait_hsm_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
